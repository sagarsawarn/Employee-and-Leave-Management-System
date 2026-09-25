<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Registrations controller — /api/v1/registrations
 *
 * Admin-only management of public self-registration requests.
 *   GET    /registrations              list pending requests
 *   PATCH  /registrations/{id}/approve provision a real user + employee
 *   PATCH  /registrations/{id}/reject  mark rejected (no account created)
 *
 * Approval is the registration -> account conversion (fixes QA defect D10):
 * it creates a `users` row (role = employee, reusing the stored bcrypt hash)
 * AND an `employees` row in one transaction, so the new person can log in
 * and immediately appears in the admin Employees list.
 */
class Registrations extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('registration_model');
        $this->load->model('employee_model');
        $this->load->model('user_model');
        $this->load->model('leave_model');
    }

    /** GET /registrations (admin) — pending requests. */
    public function index()
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin'))) return;

        return $this->respond_success('OK', $this->registration_model->pending(), 200);
    }

    /** PATCH /registrations/{id}/approve (admin) */
    public function approve($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin'))) return;

        $reg = $this->registration_model->find_pending((int) $id);
        if ($reg === NULL)
        {
            return $this->respond_error('Pending registration not found', null, 404);
        }

        // Guard against a race where the email became a user since signup.
        if ($this->user_model->email_taken($reg->email))
        {
            // Clean up the stale request and report the conflict.
            $this->registration_model->mark_approved($reg->id);
            return $this->respond_error('This email is already an active account', null, 409);
        }

        // Split full_name into first/last (first token = first name, rest = last).
        $name = trim(preg_replace('/\s+/', ' ', (string) $reg->full_name));
        $parts = $name === '' ? array('New', 'Employee') : explode(' ', $name, 2);
        $first = $parts[0];
        $last = isset($parts[1]) && $parts[1] !== '' ? $parts[1] : $first;

        // Provision with the REQUESTED role (employee or hr_manager). The
        // requested_role was constrained at registration; resolve to its id,
        // falling back to employee if anything is off. Admin never granted here.
        $requested = isset($reg->requested_role) ? $reg->requested_role : 'employee';
        if ( ! in_array($requested, array('employee', 'hr_manager'), TRUE))
        {
            $requested = 'employee';
        }
        $role_id = $this->user_model->role_id_by_name($requested);
        if ($role_id <= 0)
        {
            $role_id = $this->user_model->role_id_by_name('employee');
        }

        $this->db->trans_begin();

        // Reuse the ALREADY-HASHED password from the registration — do not
        // re-hash and do not require a password reset.
        $this->db->insert('users', array(
            'email'         => $reg->email,
            'password_hash' => $reg->password_hash,
            'role_id'       => $role_id,
            'is_active'     => 1,
            'created_at'    => date('Y-m-d H:i:s'),
        ));
        $user_id = (int) $this->db->insert_id();

        $emp_id = $this->employee_model->insert(array(
            'user_id'         => $user_id,
            'employee_code'   => $this->employee_model->next_employee_code(),
            'first_name'      => $first,
            'last_name'       => $last,
            // Carry the department/designation the person chose at signup so
            // it shows on their employee record in the admin Employees list.
            'department_id'   => isset($reg->department_id) ? $reg->department_id : null,
            'designation_id'  => isset($reg->designation_id) ? $reg->designation_id : null,
            'date_of_joining' => date('Y-m-d'),
            'status'          => 'active',
        ));
        $this->leave_model->allocate_default_balances($emp_id);

        $this->registration_model->mark_approved($reg->id);

        if ($this->db->trans_status() === FALSE)
        {
            $this->db->trans_rollback();
            return $this->respond_error('Failed to approve registration', null, 500);
        }
        $this->db->trans_commit();

        return $this->respond_success(
            'Registration approved. Employee account created.',
            $this->employee_model->find($emp_id), 201);
    }

    /** PATCH /registrations/{id}/reject (admin) */
    public function reject($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin'))) return;

        $reg = $this->registration_model->find_pending((int) $id);
        if ($reg === NULL)
        {
            return $this->respond_error('Pending registration not found', null, 404);
        }

        $this->registration_model->mark_rejected($reg->id);
        return $this->respond_success('Registration rejected', null, 200);
    }

    /**
     * Dispatch /registrations/{id} by verb. DELETE removes a pending request
     * outright (the frontend's "delete" action). Admin only.
     */
    public function resource($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin'))) return;

        if (strtoupper($this->input->method()) !== 'DELETE')
        {
            return $this->respond_error('Method not allowed', null, 405);
        }

        $reg = $this->registration_model->find_pending((int) $id);
        if ($reg === NULL)
        {
            return $this->respond_error('Pending registration not found', null, 404);
        }

        $this->registration_model->delete_pending($reg->id);
        return $this->respond_success('Registration deleted', null, 200);
    }
}
