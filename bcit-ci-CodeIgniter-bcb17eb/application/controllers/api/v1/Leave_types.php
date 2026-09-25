<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Leave_types controller — /api/v1/leave-types
 * Read endpoint for the apply form's type select. Any authenticated user.
 */
class Leave_types extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('leave_model');
    }

    /** GET /leave-types */
    public function index()
    {
        if ( ! $this->require_auth()) return;
        return $this->respond_success('OK', $this->leave_model->types(), 200);
    }
}
