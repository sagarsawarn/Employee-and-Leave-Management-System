<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Employees controller — /api/v1/employees
 * All methods require authentication; management actions require admin/HR.
 * Creating an employee also provisions the linked login account, done in a
 * DB transaction so a half-created employee/user pair can never persist.
 */
class Employees extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->model('employee_model');
        $this->load->model('leave_model');
    }

    /** Dispatch /employees by verb (GET list, POST create). */
    public function collection()
    {
        switch (strtoupper($this->input->method()))
        {
            case 'GET':  return $this->index();
            case 'POST': return $this->create();
            default:     return $this->respond_error('Method not allowed', null, 405);
        }
    }

    /** Dispatch /employees/{id} by verb (GET show, PUT update, DELETE destroy). */
    public function resource($id)
    {
        switch (strtoupper($this->input->method()))
        {
            case 'GET':    return $this->show($id);
            case 'PUT':    return $this->update($id);
            case 'DELETE': return $this->destroy($id);
            default:       return $this->respond_error('Method not allowed', null, 405);
        }
    }

    /** GET /employees?q=&department_id=&page=&per_page= (admin/HR) */
    public function index()
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $q = $this->input->get('q', TRUE);
        $dept = $this->input->get('department_id', TRUE);
        $page = $this->input->get('page', TRUE) ?: 1;
        $per_page = $this->input->get('per_page', TRUE) ?: 10;

        $result = $this->employee_model->paginate(
            $q !== '' ? $q : NULL,
            ($dept !== '' && $dept !== NULL) ? (int) $dept : NULL,
            (int) $page,
            (int) $per_page
        );
        return $this->respond_success('OK', $result, 200);
    }

    /** GET /employees/{id} (admin/HR) */
    public function show($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $emp = $this->employee_model->find((int) $id);
        if ($emp === NULL)
        {
            return $this->respond_error('Employee not found', null, 404);
        }
        return $this->respond_success('OK', $emp, 200);
    }

    /** POST /employees (admin/HR) */
    public function create()
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $input = $this->json_input();
        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('employee_code', 'Employee code', 'trim|required|max_length[30]');
        $this->form_validation->set_rules('first_name', 'First name', 'trim|required|max_length[80]');
        $this->form_validation->set_rules('last_name', 'Last name', 'trim|required|max_length[80]');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|max_length[150]');
        $this->form_validation->set_rules('password', 'Password', 'required|min_length[8]');
        $this->form_validation->set_rules('date_of_joining', 'Date of joining', 'required');
        $this->form_validation->set_rules('status', 'Status', 'in_list[active,inactive]');

        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        if ($this->employee_model->code_exists($input['employee_code']))
        {
            return $this->respond_error('Validation failed',
                array('employee_code' => 'This employee code is already in use'), 422);
        }

        $this->load->model('user_model');
        // Check email uniqueness up front for a clean message. Use email_taken
        // (any row incl. inactive/deleted) so we don't slip past a soft-deleted
        // user and then hit the DB UNIQUE constraint with a 500.
        if ($this->user_model->email_taken($input['email']))
        {
            return $this->respond_error('Validation failed',
                array('email' => 'This email is already registered'), 422);
        }

        // --- transaction: create user + employee together ---
        $this->db->trans_begin();

        $this->db->insert('users', array(
            'email'         => $input['email'],
            'password_hash' => password_hash($input['password'], PASSWORD_BCRYPT),
            'role_id'       => 3, // employee
            'is_active'     => 1,
            'created_at'    => date('Y-m-d H:i:s'),
        ));
        $user_id = (int) $this->db->insert_id();

        $emp_id = $this->employee_model->insert(array(
            'user_id'              => $user_id,
            'employee_code'        => $input['employee_code'],
            'first_name'           => $input['first_name'],
            'last_name'            => $input['last_name'],
            'phone'                => isset($input['phone']) ? $input['phone'] : null,
            'department_id'        => isset($input['department_id']) ? $input['department_id'] : null,
            'designation_id'       => isset($input['designation_id']) ? $input['designation_id'] : null,
            'reporting_manager_id' => isset($input['reporting_manager_id']) ? $input['reporting_manager_id'] : null,
            'date_of_joining'      => $input['date_of_joining'],
            'status'               => isset($input['status']) ? $input['status'] : 'active',
        ));
        $this->leave_model->allocate_default_balances($emp_id);

        if ($this->db->trans_status() === FALSE)
        {
            $this->db->trans_rollback();
            return $this->respond_error('Failed to create employee', null, 500);
        }
        $this->db->trans_commit();

        return $this->respond_success('Employee created', $this->employee_model->find($emp_id), 201);
    }

    /** PUT /employees/{id} (admin/HR) */
    public function update($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $emp = $this->employee_model->find((int) $id);
        if ($emp === NULL)
        {
            return $this->respond_error('Employee not found', null, 404);
        }

        $input = $this->json_input();
        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('employee_code', 'Employee code', 'trim|required|max_length[30]');
        $this->form_validation->set_rules('first_name', 'First name', 'trim|required|max_length[80]');
        $this->form_validation->set_rules('last_name', 'Last name', 'trim|required|max_length[80]');
        $this->form_validation->set_rules('date_of_joining', 'Date of joining', 'required');
        $this->form_validation->set_rules('status', 'Status', 'in_list[active,inactive]');

        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        if ($this->employee_model->code_exists($input['employee_code'], (int) $id))
        {
            return $this->respond_error('Validation failed',
                array('employee_code' => 'This employee code is already in use'), 422);
        }

        $this->employee_model->update((int) $id, array(
            'employee_code'        => $input['employee_code'],
            'first_name'           => $input['first_name'],
            'last_name'            => $input['last_name'],
            'phone'                => isset($input['phone']) ? $input['phone'] : null,
            'department_id'        => isset($input['department_id']) ? $input['department_id'] : null,
            'designation_id'       => isset($input['designation_id']) ? $input['designation_id'] : null,
            'reporting_manager_id' => isset($input['reporting_manager_id']) ? $input['reporting_manager_id'] : null,
            'date_of_joining'      => $input['date_of_joining'],
            'status'               => isset($input['status']) ? $input['status'] : 'active',
        ));

        return $this->respond_success('Employee updated', $this->employee_model->find((int) $id), 200);
    }

    /** DELETE /employees/{id} (admin/HR) — soft delete */
    public function destroy($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $emp = $this->employee_model->find((int) $id);
        if ($emp === NULL)
        {
            return $this->respond_error('Employee not found', null, 404);
        }
        if (! $this->employee_model->soft_delete((int) $id))
        {
            return $this->respond_error('Failed to delete employee', null, 500);
        }
        return $this->respond_success('Employee deleted', null, 200);
    }
}
