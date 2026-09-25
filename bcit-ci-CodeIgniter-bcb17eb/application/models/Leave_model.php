<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Leave_model — leave types, balances, applications.
 * The approve/reject/cancel flows adjust leave_balances.used_days inside the
 * SAME transaction as the status change, which is the application-layer rule
 * the DB CHECK constraints can't express across tables.
 */
class Leave_model extends CI_Model {

    public function types()
    {
        return $this->db->select('id, name, default_days_per_year, is_paid')
            ->from('leave_types')->order_by('name', 'ASC')->get()->result();
    }

    public function type_exists($id)
    {
        return $this->db->from('leave_types')->where('id', (int) $id)
            ->count_all_results() > 0;
    }

    /** Allocate each configured annual leave type to an employee. */
    public function allocate_default_balances($employee_id, $year = NULL)
    {
        $year = $year === NULL ? (int) date('Y') : (int) $year;
        $types = $this->db->select('id, default_days_per_year')
            ->from('leave_types')->get()->result();

        foreach ($types as $type)
        {
            $exists = $this->balance_row($employee_id, $type->id, $year);
            if ($exists !== NULL)
            {
                continue;
            }
            $this->db->insert('leave_balances', array(
                'employee_id'   => (int) $employee_id,
                'leave_type_id' => (int) $type->id,
                'year'          => $year,
                'allocated_days'=> $type->default_days_per_year,
                'used_days'     => 0,
            ));
        }
    }

    /** Balances for an employee, joined to type name. */
    public function balances_for($employee_id)
    {
        return $this->db
            ->select('b.id, b.leave_type_id, t.name AS leave_type_name, b.year,
                      b.allocated_days, b.used_days, b.remaining_days')
            ->from('leave_balances b')
            ->join('leave_types t', 't.id = b.leave_type_id', 'inner')
            ->where('b.employee_id', (int) $employee_id)
            ->order_by('b.year DESC, t.name ASC')
            ->get()->result();
    }

    public function balance_row($employee_id, $leave_type_id, $year)
    {
        return $this->db->from('leave_balances')
            ->where('employee_id', (int) $employee_id)
            ->where('leave_type_id', (int) $leave_type_id)
            ->where('year', (int) $year)
            ->limit(1)->get()->row();
    }

    /** Applications for one employee (their own history). */
    public function applications_for($employee_id)
    {
        return $this->db
            ->select('a.id, a.employee_id, a.leave_type_id, t.name AS leave_type_name,
                      a.start_date, a.end_date, a.total_days, a.reason, a.status,
                      a.review_comment, a.created_at')
            ->from('leave_requests a')
            ->join('leave_types t', 't.id = a.leave_type_id', 'inner')
            ->where('a.employee_id', (int) $employee_id)
            ->order_by('a.created_at', 'DESC')
            ->get()->result();
    }

    /** Queue for approvers, optionally filtered by status. */
    public function queue($status = NULL)
    {
        $this->db
            ->select("a.id, a.employee_id,
                      CONCAT(e.first_name, ' ', e.last_name) AS employee_name,
                      a.leave_type_id, t.name AS leave_type_name,
                      a.start_date, a.end_date, a.total_days, a.reason,
                      a.status, a.review_comment, a.created_at")
            ->from('leave_requests a')
            ->join('leave_types t', 't.id = a.leave_type_id', 'inner')
            ->join('employees e', 'e.id = a.employee_id', 'inner');
        if ($status !== NULL)
        {
            $this->db->where('a.status', $status);
        }
        return $this->db->order_by('a.created_at', 'ASC')->get()->result();
    }

    public function find_application($id)
    {
        return $this->db->from('leave_requests')
            ->where('id', (int) $id)->limit(1)->get()->row();
    }

    /**
     * APPROVED leave that is still current or upcoming (end_date >= from),
     * for the admin dashboard "who's on leave" panel. Returns employee name,
     * code, leave type and the date range, soonest first.
     *
     * @param string $from_date Y-m-d
     * @return array
     */
    public function on_leave($from_date)
    {
        return $this->db
            ->select("a.id, a.employee_id,
                      CONCAT(e.first_name, ' ', e.last_name) AS employee_name,
                      e.employee_code, t.name AS leave_type_name,
                      a.start_date, a.end_date, a.total_days")
            ->from('leave_requests a')
            ->join('employees e', 'e.id = a.employee_id', 'inner')
            ->join('leave_types t', 't.id = a.leave_type_id', 'inner')
            ->where('a.status', 'approved')
            ->where('a.end_date >=', $from_date)
            ->order_by('a.start_date', 'ASC')
            ->get()
            ->result();
    }

    /**
     * True if the employee already has an ACTIVE (pending/approved) leave
     * application overlapping the given date range (fixes D5). Two ranges
     * overlap when existing.start <= new.end AND existing.end >= new.start.
     *
     * @param int    $employee_id
     * @param string $start  Y-m-d
     * @param string $end    Y-m-d
     * @return bool
     */
    public function has_overlap($employee_id, $start, $end)
    {
        return $this->db->from('leave_requests')
            ->where('employee_id', (int) $employee_id)
            ->where_in('status', array('pending', 'approved'))
            ->where('start_date <=', $end)
            ->where('end_date >=', $start)
            ->count_all_results() > 0;
    }

    public function insert_application($data)
    {
        $data['created_at'] = date('Y-m-d H:i:s');
        $this->db->insert('leave_requests', $data);
        return (int) $this->db->insert_id();
    }

    /**
     * Approve an application and deduct the balance atomically.
     *
     * Concurrency-safe (fixes D4): the application row is re-read WITH A LOCK
     * (SELECT ... FOR UPDATE) inside the transaction, and its status is
     * re-verified as 'pending' there. Two concurrent approve calls therefore
     * serialize — the second sees status='approved' and is rejected, so the
     * balance can never be double-deducted.
     *
     * Return codes let the controller give precise HTTP statuses:
     *   'ok'          -> approved + balance deducted
     *   'not_pending' -> another request already reviewed it (409)
     *   'no_balance'  -> no allocation row for type/year (409)
     *   'insufficient'-> CHECK used<=allocated rejected the deduction (409)
     *
     * @return string
     */
    public function approve($app_id, $reviewer_user_id, $comment)
    {
        $this->db->trans_begin();

        // Lock the application row for the duration of the transaction.
        $app = $this->db->query(
            'SELECT * FROM leave_requests WHERE id = ? FOR UPDATE',
            array((int) $app_id)
        )->row();

        if ($app === NULL)
        {
            $this->db->trans_rollback();
            return 'not_found';
        }
        if ($app->status !== 'pending')
        {
            // Another concurrent request already handled it.
            $this->db->trans_rollback();
            return 'not_pending';
        }

        $year = (int) date('Y', strtotime($app->start_date));
        $balance = $this->balance_row($app->employee_id, $app->leave_type_id, $year);
        if ($balance === NULL)
        {
            $this->db->trans_rollback();
            return 'no_balance';
        }

        $this->db->where('id', $app->id)->update('leave_requests', array(
            'status'         => 'approved',
            'reviewed_by'    => (int) $reviewer_user_id,
            'review_comment' => $comment,
            'reviewed_at'    => date('Y-m-d H:i:s'),
            'updated_at'     => date('Y-m-d H:i:s'),
        ));

        $this->db->where('id', $balance->id)->update('leave_balances', array(
            'used_days'  => $balance->used_days + $app->total_days,
            'updated_at' => date('Y-m-d H:i:s'),
        ));

        if ($this->db->trans_status() === FALSE)
        {
            // The CHECK (used_days <= allocated_days) rejected the deduction.
            $this->db->trans_rollback();
            return 'insufficient';
        }
        $this->db->trans_commit();
        return 'ok';
    }

    /**
     * Reject a pending application under a row lock (fixes the approve/reject
     * race). Returns 'ok', 'not_found', or 'not_pending'.
     *
     * @return string
     */
    public function reject($app_id, $reviewer_user_id, $comment)
    {
        $this->db->trans_begin();

        $app = $this->db->query(
            'SELECT * FROM leave_requests WHERE id = ? FOR UPDATE',
            array((int) $app_id)
        )->row();

        if ($app === NULL)
        {
            $this->db->trans_rollback();
            return 'not_found';
        }
        if ($app->status !== 'pending')
        {
            $this->db->trans_rollback();
            return 'not_pending';
        }

        $this->db->where('id', $app->id)->update('leave_requests', array(
            'status'         => 'rejected',
            'reviewed_by'    => (int) $reviewer_user_id,
            'review_comment' => $comment,
            'reviewed_at'    => date('Y-m-d H:i:s'),
            'updated_at'     => date('Y-m-d H:i:s'),
        ));

        if ($this->db->trans_status() === FALSE)
        {
            $this->db->trans_rollback();
            return 'error';
        }
        $this->db->trans_commit();
        return 'ok';
    }

    /**
     * Cancel an application. If it was already approved, restore the balance
     * in the same transaction.
     */
    public function cancel($app)
    {
        $this->db->trans_begin();

        $this->db->where('id', $app->id)->update('leave_requests', array(
            'status'     => 'cancelled',
            'updated_at' => date('Y-m-d H:i:s'),
        ));

        if ($app->status === 'approved')
        {
            $year = (int) date('Y', strtotime($app->start_date));
            $balance = $this->balance_row($app->employee_id, $app->leave_type_id, $year);
            if ($balance !== NULL)
            {
                $restored = max(0, $balance->used_days - $app->total_days);
                $this->db->where('id', $balance->id)->update('leave_balances', array(
                    'used_days'  => $restored,
                    'updated_at' => date('Y-m-d H:i:s'),
                ));
            }
        }

        if ($this->db->trans_status() === FALSE)
        {
            $this->db->trans_rollback();
            return FALSE;
        }
        $this->db->trans_commit();
        return TRUE;
    }
}
