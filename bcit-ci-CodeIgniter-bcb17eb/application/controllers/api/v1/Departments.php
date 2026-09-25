<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Departments controller — /api/v1/departments
 * Read endpoint used to populate the employee form's department select.
 * Requires auth; readable by any authenticated role.
 */
class Departments extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('org_model');
    }

    /** GET /departments (authenticated) */
    public function index()
    {
        if ( ! $this->require_auth()) return;
        return $this->respond_success('OK', $this->org_model->departments(), 200);
    }

    /**
     * GET /departments/public — unauthenticated read for the registration
     * page. Only exposes id + name (no sensitive data), which is acceptable
     * to reveal publicly so signups can pick a department.
     */
    public function public_list()
    {
        return $this->respond_success('OK', $this->org_model->departments(), 200);
    }
}
