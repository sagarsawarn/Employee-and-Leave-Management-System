<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Auth_lib — authentication service layer.
 * -----------------------------------------------------------------------
 * Sits between the Auth controller and the models. It owns:
 *   - password verification (bcrypt via password_verify)
 *   - issuing the access + refresh token pair
 *   - refresh token ROTATION (old token revoked, new one issued)
 *
 * Keeping this logic out of the controller keeps the controller thin and
 * makes the token lifecycle testable in one place.
 */
class Auth_lib {

    /** @var CI_Controller */
    private $ci;
    private $refresh_ttl;

    public function __construct()
    {
        $this->ci =& get_instance();
        $this->ci->load->library('jwt_lib');
        $this->ci->load->model('user_model');
        $this->ci->load->model('refresh_token_model');

        $this->ci->config->load('jwt', TRUE);
        $cfg = $this->ci->config->item('jwt');
        $this->refresh_ttl = (int) $cfg['jwt_refresh_ttl'];
    }

    /**
     * Verify credentials. Returns the user row on success, FALSE otherwise.
     * The same generic failure is used for "no such user" and "bad password"
     * so we never reveal which emails exist (user enumeration defense).
     *
     * @param string $email
     * @param string $password
     * @return object|false
     */
    public function verify_credentials($email, $password)
    {
        $user = $this->ci->user_model->get_active_by_email($email);
        if ($user === NULL)
        {
            // Spend a hash cycle anyway to keep timing roughly constant.
            password_verify($password, '$2y$10$usesomesillystringforsalt0000000000000000000000000000000');
            return FALSE;
        }
        if ( ! password_verify($password, $user->password_hash))
        {
            return FALSE;
        }
        return $user;
    }

    /**
     * Mint a fresh access + refresh token pair for a user.
     *
     * @param object $user  row with ->id and ->role
     * @return array {access_token, refresh_token, token_type, expires_in}
     */
    public function issue_tokens($user)
    {
        $access  = $this->ci->jwt_lib->issue_access_token($user->id, $user->role);
        $refresh = $this->_random_token();

        $this->ci->refresh_token_model->store($user->id, $refresh, $this->refresh_ttl);

        $cfg = $this->ci->config->item('jwt');
        return array(
            'access_token'  => $access,
            'refresh_token' => $refresh,
            'token_type'    => 'Bearer',
            'expires_in'    => (int) $cfg['jwt_access_ttl'],
        );
    }

    /**
     * Rotate a refresh token: validate it, revoke it, and issue a new pair.
     * Returns the new token bundle, or FALSE if the refresh token is
     * invalid/expired or its user is no longer active.
     *
     * @param string $raw_refresh
     * @return array|false
     */
    public function rotate($raw_refresh)
    {
        $row = $this->ci->refresh_token_model->find_valid($raw_refresh);
        if ($row === NULL)
        {
            return FALSE;
        }

        $user = $this->ci->user_model->get_active_by_id($row->user_id);
        if ($user === NULL)
        {
            // User deactivated/deleted since token issue — revoke and refuse.
            $this->ci->refresh_token_model->revoke($raw_refresh);
            return FALSE;
        }

        // Rotation: the presented refresh token is single-use.
        $this->ci->refresh_token_model->revoke($raw_refresh);
        return $this->issue_tokens($user);
    }

    /**
     * Revoke a refresh token (logout).
     *
     * @param string $raw_refresh
     * @return void
     */
    public function revoke($raw_refresh)
    {
        $this->ci->refresh_token_model->revoke($raw_refresh);
    }

    /**
     * Cryptographically strong opaque token.
     * @return string
     */
    private function _random_token()
    {
        return bin2hex(random_bytes(32)); // 64 hex chars
    }
}
