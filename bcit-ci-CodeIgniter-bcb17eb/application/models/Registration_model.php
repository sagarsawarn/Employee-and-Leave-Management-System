<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Registration_model — public self-registration requests.
 * Maps to the `registrations` table (separate from `users`).
 * Query Builder = parameterized queries.
 */
class Registration_model extends CI_Model {

    /** List registration requests waiting for administrator review. */
    public function pending()
    {
        return $this->db
            ->select('r.id, r.full_name, r.email, r.requested_role, r.status,
                      r.created_at, r.department_id, r.designation_id,
                      d.name AS department_name, dg.title AS designation_title')
            ->from('registrations r')
            ->join('departments d', 'd.id = r.department_id', 'left')
            ->join('designations dg', 'dg.id = r.designation_id', 'left')
            ->where('r.status', 'pending')
            ->order_by('r.created_at', 'ASC')
            ->get()
            ->result();
    }

    /** True if an email has a registration request awaiting review. */
    public function email_exists($email)
    {
        return $this->db->from('registrations')
            ->where('email', $email)
            ->where('status', 'pending')
            ->count_all_results() > 0;
    }

    /** Remove archived requests so a deleted/rejected account can re-register. */
    public function delete_archived_by_email($email)
    {
        return $this->db
            ->where('email', $email)
            ->where('status !=', 'pending')
            ->delete('registrations');
    }

    /** True if an email has a registration request awaiting review. */
    public function is_pending($email)
    {
        return $this->db->from('registrations')
            ->where('email', $email)
            ->where('status', 'pending')
            ->count_all_results() > 0;
    }

    /** Insert a pending registration; returns new id. */
    public function insert($data)
    {
        $data['created_at'] = date('Y-m-d H:i:s');
        $this->db->insert('registrations', $data);
        return (int) $this->db->insert_id();
    }

    /** Fetch a pending request by id. */
    public function find_pending($id)
    {
        return $this->db
            ->from('registrations')
            ->where('id', (int) $id)
            ->where('status', 'pending')
            ->limit(1)
            ->get()
            ->row();
    }

    /** Mark a pending request as approved. */
    public function mark_approved($id)
    {
        return $this->db
            ->where('id', (int) $id)
            ->where('status', 'pending')
            ->update('registrations', array('status' => 'approved'));
    }

    /** Mark a pending request as rejected. */
    public function mark_rejected($id)
    {
        return $this->db
            ->where('id', (int) $id)
            ->where('status', 'pending')
            ->update('registrations', array('status' => 'rejected'));
    }

    /** Delete a pending request. */
    public function delete_pending($id)
    {
        return $this->db
            ->where('id', (int) $id)
            ->where('status', 'pending')
            ->delete('registrations');
    }

    /** Delete the approved registration linked to a user's email. */
    public function delete_approved_by_email($email)
    {
        return $this->db
            ->where('email', $email)
            ->where('status', 'approved')
            ->delete('registrations');
    }
}
