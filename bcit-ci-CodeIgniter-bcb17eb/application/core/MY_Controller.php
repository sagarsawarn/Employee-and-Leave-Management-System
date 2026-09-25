<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * API_Controller — base controller for every REST endpoint.
 * -----------------------------------------------------------------------
 * Responsibilities:
 *   1. Emit the consistent JSON envelope (respond / respond_* helpers).
 *   2. Verify the JWT access token and expose the authenticated identity.
 *   3. Enforce role-based authorization ENTIRELY server-side.
 *
 * SECURITY NOTE: authorization decisions are made here from the verified
 * JWT claims only. The frontend's notion of a role is never trusted — a
 * client can send any role string it likes, so we ignore request-body /
 * header role hints and rely solely on the signed token.
 */
class API_Controller extends CI_Controller {

    /** @var object|null Decoded, verified JWT claims for the current request. */
    protected $auth_user = null;

    public function __construct()
    {
        parent::__construct();
        $this->load->helper('response');
        $this->load->library('jwt_lib');

        // NOTE: CORS + preflight OPTIONS are handled globally by the
        // Cors_hook (pre_system), so nothing CORS-related is needed here.

        // Reject non-JSON noise early and set the response type once.
        $this->output->set_content_type('application/json');
    }

    /* ------------------------------------------------------------------ *
     *  Response helpers
     * ------------------------------------------------------------------ */

    protected function respond($status_code, array $envelope)
    {
        $this->output
            ->set_status_header($status_code)
            ->set_content_type('application/json', 'utf-8')
            ->set_output(json_encode($envelope));
        // Stop further execution — controllers should `return` this.
        return;
    }

    protected function respond_success($message, $data = null, $code = 200)
    {
        return $this->respond($code, api_envelope('success', $message, $data, null));
    }

    protected function respond_error($message, $errors = null, $code = 400)
    {
        return $this->respond($code, api_envelope('error', $message, null, $errors));
    }

    /* ------------------------------------------------------------------ *
     *  Authentication
     * ------------------------------------------------------------------ */

    /**
     * Extract and verify the Bearer access token. On success, populates
     * $this->auth_user with the decoded claims and returns TRUE. On failure
     * it emits a 401 envelope and returns FALSE — callers MUST return
     * immediately when FALSE.
     *
     * @return bool
     */
    protected function require_auth()
    {
        $token = $this->_bearer_token();
        if ($token === null)
        {
            $this->respond_error('Missing or malformed Authorization header', null, 401);
            return FALSE;
        }

        $claims = $this->jwt_lib->decode($token);
        if ($claims === FALSE)
        {
            $this->respond_error('Invalid or expired access token', null, 401);
            return FALSE;
        }

        // Only accept access tokens here — refresh tokens are opaque and
        // never presented as Bearer credentials.
        if ( ! isset($claims->type) || $claims->type !== 'access')
        {
            $this->respond_error('Invalid token type', null, 401);
            return FALSE;
        }

        $this->auth_user = $claims;
        return TRUE;
    }

    /**
     * Enforce that the authenticated user holds one of the allowed roles.
     * Assumes require_auth() already succeeded. Emits 403 and returns FALSE
     * on denial — callers MUST return immediately when FALSE.
     *
     * @param array $allowed_roles e.g. array('admin','hr_manager')
     * @return bool
     */
    protected function require_role(array $allowed_roles)
    {
        $role = isset($this->auth_user->role) ? $this->auth_user->role : null;
        if ($role === null || ! in_array($role, $allowed_roles, TRUE))
        {
            $this->respond_error('You do not have permission to perform this action', null, 403);
            return FALSE;
        }
        return TRUE;
    }

    /**
     * Read the raw JSON request body into an associative array.
     * Returns array() when the body is empty or invalid JSON.
     *
     * @return array
     */
    protected function json_input()
    {
        $raw = $this->input->raw_input_stream;
        if (empty($raw))
        {
            return array();
        }
        $decoded = json_decode($raw, TRUE);
        return is_array($decoded) ? $decoded : array();
    }

    /**
     * Pull the Bearer token out of the Authorization header.
     * @return string|null
     */
    private function _bearer_token()
    {
        $header = $this->input->get_request_header('Authorization', TRUE);
        if ($header === NULL || $header === '')
        {
            return null;
        }
        if (stripos($header, 'Bearer ') !== 0)
        {
            return null;
        }
        $token = trim(substr($header, 7));
        return $token === '' ? null : $token;
    }
}
