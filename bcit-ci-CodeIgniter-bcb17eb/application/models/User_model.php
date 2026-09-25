<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * User_model — authentication-facing user queries.
 * -----------------------------------------------------------------------
 * All queries go through CI3's Query Builder, which parameterizes values
 * (prepared-style escaping) — no string-concatenated SQL anywhere, so the
 * "parameterized queries" requirement is met by construction.
 *
 * Maps to the `users` and `roles` tables from the approved schema.
 */
class User_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Fetch an active (non-soft-deleted) user by email, joined to its role
     * name. Returns the row object or NULL.
     *
     * @param string $email
     * @return object|null
     */
    public function get_active_by_email($email)
    {
        $row = $this->db
            ->select('u.id, u.email, u.password_hash, u.is_active, r.name AS role')
            ->from('users u')
            ->join('roles r', 'r.id = u.role_id', 'inner')
            ->where('u.email', $email)          // Query Builder binds this value
            ->where('u.deleted_at', NULL)
            ->where('u.is_active', 1)
            ->limit(1)
            ->get()
            ->row();

        return $row ?: NULL;
    }

    /**
     * Fetch a user + role by id (for /auth/me and refresh).
     *
     * @param int $id
     * @return object|null
     */
    public function get_active_by_id($id)
    {
        $row = $this->db
            ->select('u.id, u.email, u.is_active, r.name AS role')
            ->from('users u')
            ->join('roles r', 'r.id = u.role_id', 'inner')
            ->where('u.id', (int) $id)
            ->where('u.deleted_at', NULL)
            ->where('u.is_active', 1)
            ->limit(1)
            ->get()
            ->row();

        return $row ?: NULL;
    }

    /** Resolve a role id by its name (e.g. 'hr_manager'); 0 if not found. */
    public function role_id_by_name($name)
    {
        $row = $this->db->select('id')->from('roles')
            ->where('name', $name)->limit(1)->get()->row();
        return $row ? (int) $row->id : 0;
    }

    /**
     * IDs of active users who can approve leave (admin + hr_manager).
     * Used to fan out pending-approval notifications.
     *
     * @return array of int user ids
     */
    public function approver_user_ids()
    {
        $rows = $this->db
            ->select('u.id')
            ->from('users u')
            ->join('roles r', 'r.id = u.role_id', 'inner')
            ->where_in('r.name', array('admin', 'hr_manager'))
            ->where('u.is_active', 1)
            ->where('u.deleted_at', NULL)
            ->get()
            ->result();
        $ids = array();
        foreach ($rows as $row) { $ids[] = (int) $row->id; }
        return $ids;
    }

    /**
    * True if an active, non-deleted user uses this email. Inactive users are
    * ignored as well, so older deleted employee records can be re-registered.
     *
     * @param string $email
     * @return bool
     */
    public function email_taken($email)
    {
        return $this->db->from('users')
            ->where('email', $email)
            ->where('deleted_at', NULL)
            ->where('is_active', 1)
            ->count_all_results() > 0;
    }

    /** Release an old inactive account email before a fresh registration. */
    public function tombstone_deleted_email($email)
    {
        $user = $this->db->select('id, email')
            ->from('users')
            ->where('email', $email)
            ->group_start()
                ->where('is_active', 0)
                ->or_where('deleted_at IS NOT NULL', NULL, FALSE)
            ->group_end()
            ->limit(1)
            ->get()
            ->row();

        if ($user === NULL)
        {
            return TRUE;
        }

        return $this->db
            ->where('id', (int) $user->id)
            ->update('users', array(
                'email' => 'deleted+' . (int) $user->id . '+' . time(),
            ));
    }

    /**
     * Record a successful login timestamp.
     *
     * @param int $id
     * @return void
     */
    public function touch_last_login($id)
    {
        $this->db->where('id', (int) $id)
                 ->update('users', array('last_login_at' => date('Y-m-d H:i:s')));
    }
}
