<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Calendar controller — /api/v1/calendar
 *
 * GET /calendar?from=YYYY-MM-DD&to=YYYY-MM-DD&department_id=#
 *   Returns holidays + approved leave overlapping the window, plus a
 *   per-day availability summary (count of people off).
 *
 * ROLE-BASED VISIBILITY (enforced from the JWT, never the client):
 *   - admin / hr_manager: all departments; may filter by department_id.
 *   - employee: forced to their OWN department only (team availability).
 *     Any department_id they pass is ignored — they cannot widen scope.
 *
 * PRIVACY: leave reasons are never included (see Calendar_model).
 */
class Calendar extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('calendar_model');
        $this->load->model('holiday_model');
        $this->load->model('employee_model');
    }

    /** GET /calendar */
    public function index()
    {
        if ( ! $this->require_auth()) return;

        $from = $this->input->get('from', TRUE);
        $to   = $this->input->get('to', TRUE);
        $dept = $this->input->get('department_id', TRUE);

        // --- validate date range ---
        if ( ! $this->_valid_date($from) || ! $this->_valid_date($to))
        {
            return $this->respond_error('Validation failed',
                array('from' => 'from and to must be valid YYYY-MM-DD dates'), 422);
        }
        if (strtotime($to) < strtotime($from))
        {
            return $this->respond_error('Validation failed',
                array('to' => 'to must be on or after from'), 422);
        }
        // Cap the window to protect the query (max ~92 days / a quarter).
        if ((strtotime($to) - strtotime($from)) / 86400 > 92)
        {
            return $this->respond_error('Validation failed',
                array('to' => 'Date range cannot exceed 92 days'), 422);
        }

        // --- RBAC scoping ---
        $role = isset($this->auth_user->role) ? $this->auth_user->role : null;
        $filter_department = NULL;

        if ($role === 'admin' || $role === 'hr_manager')
        {
            // Managers/HR may optionally filter by department.
            $filter_department = ($dept !== '' && $dept !== NULL) ? (int) $dept : NULL;
        }
        else
        {
            // Employees: locked to their own department. Ignore any client dept.
            $employee = $this->employee_model->find_by_user($this->auth_user->sub);
            if ($employee === NULL || $employee->department_id === NULL)
            {
                // No department -> no team to show; still return holidays.
                return $this->respond_success('OK', array(
                    'from'         => $from,
                    'to'           => $to,
                    'holidays'     => $this->holiday_model->in_range($from, $to),
                    'leave'        => array(),
                    'availability' => array(),
                    'scope'        => 'self_department',
                ), 200);
            }
            $filter_department = (int) $employee->department_id;
        }

        $leave = $this->calendar_model->approved_leave($from, $to, $filter_department);
        $holidays = $this->holiday_model->in_range($from, $to);

        return $this->respond_success('OK', array(
            'from'         => $from,
            'to'           => $to,
            'holidays'     => $holidays,
            'leave'        => $leave,
            'availability' => $this->_availability($leave, $from, $to),
            'scope'        => ($role === 'admin' || $role === 'hr_manager') ? 'all' : 'self_department',
        ), 200);
    }

    /**
     * Build a per-day count of how many people are on leave, without
     * exposing individual reasons. Returns { 'YYYY-MM-DD': count, ... } for
     * days within the window that have at least one person off.
     */
    private function _availability($leave, $from, $to)
    {
        $counts = array();
        $from_ts = strtotime($from);
        $to_ts = strtotime($to);

        foreach ($leave as $row)
        {
            // Clamp each entry to the window, then tally each day.
            $s = max($from_ts, strtotime($row->start_date));
            $e = min($to_ts, strtotime($row->end_date));
            for ($ts = $s; $ts <= $e; $ts += 86400)
            {
                $day = date('Y-m-d', $ts);
                $counts[$day] = isset($counts[$day]) ? $counts[$day] + 1 : 1;
            }
        }
        ksort($counts);
        return $counts;
    }

    /** Strict YYYY-MM-DD validation. */
    private function _valid_date($value)
    {
        if ( ! is_string($value) || $value === '')
        {
            return FALSE;
        }
        $d = DateTime::createFromFormat('Y-m-d', $value);
        return $d !== FALSE && $d->format('Y-m-d') === $value;
    }
}
