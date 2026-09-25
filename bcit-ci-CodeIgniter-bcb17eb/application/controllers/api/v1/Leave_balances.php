<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Leave_balances controller — /api/v1/leave-balances
 * GET /leave-balances/me returns the authenticated employee's balances.
 */
class Leave_balances extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('leave_model');
        $this->load->model('employee_model');
    }

    /** GET /leave-balances/me */
    public function me()
    {
        if ( ! $this->require_auth()) return;

        $employee = $this->employee_model->find_by_user($this->auth_user->sub);
        if ($employee === NULL)
        {
            // A user with no employee profile has no balances.
            return $this->respond_success('OK', array(), 200);
        }
        return $this->respond_success('OK',
            $this->leave_model->balances_for($employee->id), 200);
    }
}
