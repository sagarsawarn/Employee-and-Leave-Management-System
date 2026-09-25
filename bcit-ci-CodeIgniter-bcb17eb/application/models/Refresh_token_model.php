<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Refresh_token_model — server-side refresh token store.
 * -----------------------------------------------------------------------
 * Refresh tokens are opaque random strings. We store only their SHA-256
 * HASH, never the raw value, so a database leak does not hand out usable
 * tokens. This is what gives stateless JWT real logout / revocation.
 *
 * Maps to the `refresh_tokens` table.
 */
class Refresh_token_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Persist a new refresh token (hashed) for a user.
     *
     * @param int    $user_id
     * @param string $raw_token   the opaque token handed to the client
     * @param int    $ttl_seconds lifetime
     * @return void
     */
    public function store($user_id, $raw_token, $ttl_seconds)
    {
        $this->db->insert('refresh_tokens', array(
            'user_id'    => (int) $user_id,
            'token_hash' => hash('sha256', $raw_token),
            'expires_at' => date('Y-m-d H:i:s', time() + (int) $ttl_seconds),
            'created_at' => date('Y-m-d H:i:s'),
        ));
    }

    /**
     * Look up a live (unexpired) refresh token by its raw value.
     * Returns the row (incl. user_id) or NULL.
     *
     * @param string $raw_token
     * @return object|null
     */
    public function find_valid($raw_token)
    {
        $row = $this->db
            ->select('id, user_id, expires_at')
            ->from('refresh_tokens')
            ->where('token_hash', hash('sha256', $raw_token))
            ->where('expires_at >', date('Y-m-d H:i:s'))
            ->limit(1)
            ->get()
            ->row();

        return $row ?: NULL;
    }

    /**
     * Delete a single refresh token by raw value (logout / rotation).
     *
     * @param string $raw_token
     * @return void
     */
    public function revoke($raw_token)
    {
        $this->db->where('token_hash', hash('sha256', $raw_token))
                 ->delete('refresh_tokens');
    }

    /**
     * Housekeeping: drop expired rows (safe to call opportunistically).
     *
     * @return void
     */
    public function purge_expired()
    {
        $this->db->where('expires_at <', date('Y-m-d H:i:s'))
                 ->delete('refresh_tokens');
    }
}
