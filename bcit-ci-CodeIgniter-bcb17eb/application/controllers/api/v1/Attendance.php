<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Attendance controller — /api/v1/attendance
 *
 *   POST /attendance/check-in    mark IN for today (self)
 *   POST /attendance/check-out   mark OUT for today (self)
 *   GET  /attendance/today       today's status (self)
 *   GET  /attendance/{empId}     history for an employee (self or admin/HR)
 *
 * Check-in/out always act on the AUTHENTICATED user's own employee record —
 * an employee can only mark their own attendance. History is viewable by the
 * owner or admin/HR (same rule as the 360 profile).
 */
class Attendance extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('attendance_model');
        $this->load->model('employee_model');
    }

    /** Resolve the caller's own employee row, or emit 403 + return FALSE. */
    private function _self_employee()
    {
        $emp = $this->employee_model->find_by_user($this->auth_user->sub);
        if ($emp === NULL)
        {
            $this->respond_error('No employee profile linked to this account', null, 403);
            return FALSE;
        }
        return $emp;
    }

    /** POST /attendance/check-in */
    public function check_in()
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_self_employee();
        if ($emp === FALSE) return;

        $r = $this->attendance_model->check_in((int) $emp->id);
        if ($r === 'already')
        {
            return $this->respond_error('You have already checked in today', null, 409);
        }
        return $this->respond_success('Checked in',
            $this->attendance_model->today((int) $emp->id), 200);
    }

    /** POST /attendance/check-out */
    public function check_out()
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_self_employee();
        if ($emp === FALSE) return;

        $r = $this->attendance_model->check_out((int) $emp->id);
        if ($r === 'not_in')
        {
            return $this->respond_error('You must check in before checking out', null, 409);
        }
        if ($r === 'already')
        {
            return $this->respond_error('You have already checked out today', null, 409);
        }
        return $this->respond_success('Checked out',
            $this->attendance_model->today((int) $emp->id), 200);
    }

    /** GET /attendance/today — the caller's status for today. */
    public function today()
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_self_employee();
        if ($emp === FALSE) return;

        return $this->respond_success('OK',
            $this->attendance_model->today((int) $emp->id), 200);
    }

    /** GET /attendance/{employee_id} — history (self or admin/HR). */
    public function history($employee_id)
    {
        if ( ! $this->require_auth()) return;

        $target = $this->employee_model->find((int) $employee_id);
        if ($target === NULL)
        {
            return $this->respond_error('Employee not found', null, 404);
        }

        $role = isset($this->auth_user->role) ? $this->auth_user->role : null;
        if ($role !== 'admin' && $role !== 'hr_manager')
        {
            $self = $this->employee_model->find_by_user($this->auth_user->sub);
            if ($self === NULL || (int) $self->id !== (int) $target->id)
            {
                return $this->respond_error('You do not have permission to view this attendance', null, 403);
            }
        }

        return $this->respond_success('OK',
            $this->attendance_model->history((int) $target->id), 200);
    }
}
