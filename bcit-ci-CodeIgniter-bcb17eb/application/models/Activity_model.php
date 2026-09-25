<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Activity_model — per-employee activity timeline / lightweight audit log.
 * Maps to `employee_activities`. Records cannot be edited by ordinary users
 * (there is no update/delete API surface).
 */
class Activity_model extends CI_Model {

    /** Log an activity for an employee. Returns new id. */
    public function log($employee_id, $event_type, $description, $actor_user_id = NULL)
    {
        $this->db->insert('employee_activities', array(
            'employee_id'   => (int) $employee_id,
            'event_type'    => $event_type,
            'description'   => $description,
            'actor_user_id' => $actor_user_id !== NULL ? (int) $actor_user_id : null,
            'created_at'    => date('Y-m-d H:i:s'),
        ));
        return (int) $this->db->insert_id();
    }

    /**
     * Paginated timeline for an employee, newest first, with the actor's
     * email where available.
     *
     * @return array {items, page, per_page, total, total_pages}
     */
    public function paginate($employee_id, $page, $per_page)
    {
        $page = max(1, (int) $page);
        $per_page = max(1, min(50, (int) $per_page));
        $offset = ($page - 1) * $per_page;

        $total = (int) $this->db->from('employee_activities')
            ->where('employee_id', (int) $employee_id)
            ->count_all_results();

        $items = $this->db
            ->select('a.id, a.event_type, a.description, a.created_at, u.email AS actor_email')
            ->from('employee_activities a')
            ->join('users u', 'u.id = a.actor_user_id', 'left')
            ->where('a.employee_id', (int) $employee_id)
            ->order_by('a.created_at', 'DESC')
            ->limit($per_page, $offset)
            ->get()->result();

        return array(
            'items'       => $items,
            'page'        => $page,
            'per_page'    => $per_page,
            'total'       => $total,
            'total_pages' => $total === 0 ? 0 : (int) ceil($total / $per_page),
        );
    }
}
