<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Calendar_model — approved-leave data for the Team Leave Calendar.
 *
 * PRIVACY: never selects leave_requests.reason. The calendar exposes WHO is
 * off and WHEN (availability), not WHY. This satisfies the "no private
 * reasons" requirement at the query layer, not just the UI.
 *
 * DATE BOUNDARIES: an entry is included when it OVERLAPS the window, i.e.
 *   start_date <= :to  AND  end_date >= :from
 * Both ends inclusive, so multi-day leave spanning the window edge is shown.
 */
class Calendar_model extends CI_Model {

    /**
     * Approved leave overlapping [from, to].
     *
     * @param string   $from          Y-m-d (inclusive)
     * @param string   $to            Y-m-d (inclusive)
     * @param int|null $department_id optional department filter
     * @return array   rows: {id, employee_id, employee_name, department_id,
     *                         department_name, leave_type_name,
     *                         start_date, end_date, total_days}
     */
    public function approved_leave($from, $to, $department_id = NULL)
    {
        $this->db
            ->select("lr.id, lr.employee_id,
                      CONCAT(e.first_name, ' ', e.last_name) AS employee_name,
                      e.department_id,
                      d.name AS department_name,
                      t.name AS leave_type_name,
                      lr.start_date, lr.end_date, lr.total_days")
            ->from('leave_requests lr')
            ->join('employees e', 'e.id = lr.employee_id', 'inner')
            ->join('leave_types t', 't.id = lr.leave_type_id', 'inner')
            ->join('departments d', 'd.id = e.department_id', 'left')
            ->where('lr.status', 'approved')
            ->where('e.deleted_at', NULL)
            ->where('lr.start_date <=', $to)     // overlap, inclusive
            ->where('lr.end_date >=', $from);

        if ($department_id !== NULL)
        {
            $this->db->where('e.department_id', (int) $department_id);
        }

        return $this->db
            ->order_by('lr.start_date', 'ASC')
            ->get()
            ->result();
    }
}
