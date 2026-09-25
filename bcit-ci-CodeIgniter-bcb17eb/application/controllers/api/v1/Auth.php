<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Auth controller — /api/v1/auth/*
 * -----------------------------------------------------------------------
 * Endpoints:
 *   POST /login    email + password  -> access + refresh tokens
 *   POST /refresh  refresh_token      -> new token pair (rotation)
 *   POST /logout   refresh_token      -> revoke refresh token
 *   GET  /me       Bearer access      -> current user identity
 *
 * Extends API_Controller (application/core/MY_Controller.php) for the JSON
 * envelope, JWT verification, and RBAC helpers.
 */
class Auth extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->library('auth_lib');
        $this->load->library('form_validation');
    }

    /**
     * POST /api/v1/auth/register  (public)
     * Body: { full_name, email, password, password_confirm }
     *
     * Stores a PENDING request in the separate `registrations` table. This
     * does NOT create a login account — an admin must provision one. The
     * client cannot influence role or status; both are set server-side.
     */
    public function register()
    {
        $input = $this->json_input();

        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('full_name', 'Full name', 'trim|required|max_length[160]');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|max_length[150]');
        $this->form_validation->set_rules('password', 'Password', 'required|min_length[8]|max_length[255]');
        $this->form_validation->set_rules('password_confirm', 'Confirm password', 'required|matches[password]');

        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        $this->load->model('registration_model');
        $this->load->model('user_model');

        // Reject if the email is already taken by EITHER a pending registration
        // OR an existing user account. A generic message avoids confirming
        // which store holds it (reduced account-enumeration signal — D2/D13).
        $taken = $this->registration_model->email_exists($input['email'])
              || $this->user_model->email_taken($input['email']);
        if ($taken)
        {
            return $this->respond_error('Validation failed',
                array('email' => 'This email cannot be used for registration'), 422);
        }

        // Approved/rejected requests are historical records only. Remove any
        // stale archived row before inserting a fresh registration, while the
        // active-user check above still protects currently used emails.
        $this->registration_model->delete_archived_by_email($input['email']);
        $this->user_model->tombstone_deleted_email($input['email']);

        // Department/designation are required at registration. Validate that
        // both IDs exist and belong together before storing the request.
        $this->load->model('org_model');
        $department_id = isset($input['department_id']) && $input['department_id'] !== ''
            ? (int) $input['department_id'] : null;
        $designation_id = isset($input['designation_id']) && $input['designation_id'] !== ''
            ? (int) $input['designation_id'] : null;

        if ($department_id === null)
        {
            return $this->respond_error('Validation failed',
                array('department_id' => 'Department is required'), 422);
        }
        if ($designation_id === null)
        {
            return $this->respond_error('Validation failed',
                array('designation_id' => 'Designation is required'), 422);
        }
        if (! $this->org_model->department_exists($department_id))
        {
            return $this->respond_error('Validation failed',
                array('department_id' => 'Unknown department'), 422);
        }
        if (! $this->org_model->designation_exists($designation_id))
        {
            return $this->respond_error('Validation failed',
                array('designation_id' => 'Unknown designation'), 422);
        }
            if (! $this->org_model->designation_belongs_to_department($designation_id, $department_id))
            {
                return $this->respond_error('Validation failed',
                array('designation_id' => 'Designation does not belong to the selected department'), 422);
            }

        // Requested role: only 'employee' or 'hr_manager' may be requested via
        // self-registration (never admin). Anything else falls back to
        // 'employee'. This is only a REQUEST — an admin must still approve,
        // so no one can self-grant elevated access.
        $requested_role = isset($input['requested_role']) ? $input['requested_role'] : 'employee';
        if ( ! in_array($requested_role, array('employee', 'hr_manager'), TRUE))
        {
            $requested_role = 'employee';
        }

        $id = $this->registration_model->insert(array(
            'full_name'      => $input['full_name'],
            'email'          => $input['email'],
            'password_hash'  => password_hash($input['password'], PASSWORD_BCRYPT),
            'department_id'  => $department_id,
            'designation_id' => $designation_id,
            'requested_role' => $requested_role,
            'status'         => 'pending', // server-set, not from client
        ));

        return $this->respond_success(
            'Registration submitted. An administrator will review your request.',
            array('id' => $id, 'status' => 'pending'), 201);
    }

    /**
     * POST /api/v1/auth/login
     * Body: { "email": "...", "password": "..." }
     */
    public function login()
    {
        $input = $this->json_input();

        // --- validation -------------------------------------------------
        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|max_length[150]');
        $this->form_validation->set_rules('password', 'Password', 'required|max_length[255]');

        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        // --- authenticate ----------------------------------------------
        $user = $this->auth_lib->verify_credentials($input['email'], $input['password']);
        if ($user === FALSE)
        {
            $this->load->model('registration_model');
            if ($this->registration_model->is_pending($input['email']))
            {
                return $this->respond_error(
                    'Your registration is pending administrator approval.', null, 403);
            }

            // Generic message — do not reveal whether the email exists.
            return $this->respond_error('Invalid email or password', null, 401);
        }

        // Employee and HR accounts must still have a live employee record.
        // This blocks orphaned credentials left by an older delete operation
        // from receiving a token and failing later with "Employee not found".
        if (in_array($user->role, array('employee', 'hr_manager'), TRUE))
        {
            $this->load->model('employee_model');
            if ($this->employee_model->find_by_user($user->id) === NULL)
            {
                return $this->respond_error('Invalid email or password', null, 401);
            }
        }

        $this->user_model->touch_last_login($user->id);
        $tokens = $this->auth_lib->issue_tokens($user);

        return $this->respond_success('Login successful', array(
            'user'   => array(
                'id'    => (int) $user->id,
                'email' => $user->email,
                'role'  => $user->role,
            ),
            'tokens' => $tokens,
        ), 200);
    }

    /**
     * POST /api/v1/auth/refresh
     * Body: { "refresh_token": "..." }
     */
    public function refresh()
    {
        $input = $this->json_input();

        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('refresh_token', 'Refresh token', 'trim|required');

        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        $tokens = $this->auth_lib->rotate($input['refresh_token']);
        if ($tokens === FALSE)
        {
            return $this->respond_error('Invalid or expired refresh token', null, 401);
        }

        return $this->respond_success('Token refreshed', array('tokens' => $tokens), 200);
    }

    /**
     * POST /api/v1/auth/logout
     * Body: { "refresh_token": "..." }
     * Idempotent — revoking an unknown token still returns success.
     */
    public function logout()
    {
        $input = $this->json_input();

        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('refresh_token', 'Refresh token', 'trim|required');

        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        $this->auth_lib->revoke($input['refresh_token']);
        return $this->respond_success('Logged out', null, 200);
    }

    /**
     * GET /api/v1/auth/me
     * Header: Authorization: Bearer <access_token>
     */
    public function me()
    {
        if ( ! $this->require_auth())
        {
            return; // 401 already emitted
        }

        // Re-read from DB so a deactivated account can't keep using a token
        // for its full 15-minute window on this endpoint.
        $user = $this->user_model->get_active_by_id($this->auth_user->sub);
        if ($user === NULL)
        {
            return $this->respond_error('Account no longer active', null, 401);
        }

        return $this->respond_success('OK', array(
            'id'    => (int) $user->id,
            'email' => $user->email,
            'role'  => $user->role,
        ), 200);
    }
}
