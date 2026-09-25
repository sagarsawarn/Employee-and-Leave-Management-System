<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Designations controller — /api/v1/designations
 * Read endpoint for the employee form's designation select.
 */
class Designations extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('org_model');
    }

    /** GET /designations (authenticated) */
    public function index()
    {
        if ( ! $this->require_auth()) return;
        return $this->respond_success('OK', $this->org_model->designations(), 200);
    }

    /**
     * GET /designations/public — unauthenticated read for the registration
     * page. Exposes only id/title/department_id, safe to reveal for signup.
     */
    public function public_list()
    {
        return $this->respond_success('OK', $this->org_model->designations(), 200);
    }
}
