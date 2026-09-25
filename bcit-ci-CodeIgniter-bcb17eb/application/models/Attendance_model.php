<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Attendance_model — daily check-in / check-out per employee.
 * Maps to the existing `attendance` table (UNIQUE employee_id+work_date,
 * so one row per employee per day). Query Builder = parameterized.
 */
class Attendance_model extends CI_Model {

    /** Today's attendance row for an employee, or NULL. */
    public function today($employee_id)
    {
        return $this->db->from('attendance')
            ->where('employee_id', (int) $employee_id)
            ->where('work_date', date('Y-m-d'))
            ->limit(1)->get()->row();
    }

    /**
     * Record a check-in for today. Creates the day's row if absent.
     * Returns 'ok', or 'already' if already checked in today.
     */
    public function check_in($employee_id)
    {
        $row = $this->today($employee_id);
        $now = date('Y-m-d H:i:s');

        if ($row === NULL)
        {
            $this->db->insert('attendance', array(
                'employee_id' => (int) $employee_id,
                'work_date'   => date('Y-m-d'),
                'check_in'    => $now,
                'status'      => 'present',
                'created_at'  => $now,
            ));
            return 'ok';
        }
        if ($row->check_in !== NULL)
        {
            return 'already';
        }
        $this->db->where('id', $row->id)->update('attendance', array(
            'check_in' => $now, 'status' => 'present', 'updated_at' => $now,
        ));
        return 'ok';
    }

    /**
     * Record a check-out for today. Computes work_hours from check_in.
     * Returns 'ok', 'not_in' (no check-in yet), or 'already' (already out).
     */
    public function check_out($employee_id)
    {
        $row = $this->today($employee_id);
        $now = date('Y-m-d H:i:s');

        if ($row === NULL || $row->check_in === NULL)
        {
            return 'not_in';
        }
        if ($row->check_out !== NULL)
        {
            return 'already';
        }
        $hours = round((strtotime($now) - strtotime($row->check_in)) / 3600, 2);
        if ($hours < 0) { $hours = 0; }

        $this->db->where('id', $row->id)->update('attendance', array(
            'check_out' => $now, 'work_hours' => $hours, 'updated_at' => $now,
        ));
        return 'ok';
    }

    /** Recent attendance history for an employee, newest first. */
    public function history($employee_id, $limit = 30)
    {
        return $this->db
            ->select('id, work_date, check_in, check_out, status, work_hours')
            ->from('attendance')
            ->where('employee_id', (int) $employee_id)
            ->order_by('work_date', 'DESC')
            ->limit((int) $limit)
            ->get()->result();
    }

    /** Count of days marked present (for the profile summary). */
    public function present_days($employee_id)
    {
        return (int) $this->db->from('attendance')
            ->where('employee_id', (int) $employee_id)
            ->where('status', 'present')
            ->count_all_results();
    }
}
