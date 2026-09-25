<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Employee_model — employee CRUD with soft delete + pagination.
 * All access via Query Builder (parameterized). Maps to `employees`,
 * joined to `departments`/`designations` for display names.
 */
class Employee_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Paginated, searchable list of non-deleted employees.
     *
     * @param string|null $q             search over name/code
     * @param int|null    $department_id optional filter
     * @param int         $page          1-based
     * @param int         $per_page
     * @return array {items, page, per_page, total, total_pages}
     */
    public function paginate($q, $department_id, $page, $per_page)
    {
        $page = max(1, (int) $page);
        $per_page = max(1, min(100, (int) $per_page));
        $offset = ($page - 1) * $per_page;

        // --- count query (same filters, no limit) ---
        $this->_apply_filters($q, $department_id);
        $this->db->from('employees e')->where('e.deleted_at', NULL);
        $total = (int) $this->db->count_all_results();

        // Re-apply filters for the data query after the count reset.
        $this->_apply_filters($q, $department_id);
        $rows = $this->db
            ->select('e.id, e.user_id, e.employee_code, e.first_name, e.last_name,
                      e.phone, e.department_id, d.name AS department_name,
                      e.designation_id, dg.title AS designation_title,
                      e.reporting_manager_id, e.date_of_joining, e.status')
            ->from('employees e')
            ->join('departments d', 'd.id = e.department_id', 'left')
            ->join('designations dg', 'dg.id = e.designation_id', 'left')
            ->where('e.deleted_at', NULL)
            ->order_by('e.employee_code', 'ASC')
            ->limit($per_page, $offset)
            ->get()
            ->result();

        return array(
            'items'       => $rows,
            'page'        => $page,
            'per_page'    => $per_page,
            'total'       => $total,
            'total_pages' => $total === 0 ? 0 : (int) ceil($total / $per_page),
        );
    }

    /** Apply search + department filters to the pending query. */
    private function _apply_filters($q, $department_id)
    {
        if ($q !== NULL && $q !== '')
        {
            $this->db->group_start()
                ->like('e.first_name', $q)
                ->or_like('e.last_name', $q)
                ->or_like('e.employee_code', $q)
                ->group_end();
        }
        if ($department_id !== NULL)
        {
            $this->db->where('e.department_id', (int) $department_id);
        }
    }

    public function find($id)
    {
        $row = $this->db
            ->select('e.id, e.user_id, e.employee_code, e.first_name, e.last_name,
                      e.phone, e.department_id, d.name AS department_name,
                      e.designation_id, dg.title AS designation_title,
                      e.reporting_manager_id, e.date_of_joining, e.status')
            ->from('employees e')
            ->join('departments d', 'd.id = e.department_id', 'left')
            ->join('designations dg', 'dg.id = e.designation_id', 'left')
            ->where('e.id', (int) $id)
            ->where('e.deleted_at', NULL)
            ->limit(1)
            ->get()
            ->row();
        return $row ?: NULL;
    }

    /** Resolve the employee row for a login user id (leave is employee-scoped). */
    public function find_by_user($user_id)
    {
        $row = $this->db->select('id, employee_code, first_name, last_name, department_id')
            ->from('employees')
            ->where('user_id', (int) $user_id)
            ->where('deleted_at', NULL)
            ->limit(1)
            ->get()
            ->row();
        return $row ?: NULL;
    }

    /** The login user_id that owns an employee record (for notifications). */
    public function user_id_of($employee_id)
    {
        $row = $this->db->select('user_id')
            ->from('employees')
            ->where('id', (int) $employee_id)
            ->limit(1)
            ->get()
            ->row();
        return $row ? (int) $row->user_id : 0;
    }

    public function code_exists($code, $exclude_id = NULL)
    {
        $this->db->from('employees')->where('employee_code', $code);
        if ($exclude_id !== NULL)
        {
            $this->db->where('id !=', (int) $exclude_id);
        }
        return $this->db->count_all_results() > 0;
    }

    /** Insert an employee row; returns new id. */
    public function insert($data)
    {
        $data['created_at'] = date('Y-m-d H:i:s');
        $this->db->insert('employees', $data);
        return (int) $this->db->insert_id();
    }

    /**
     * Generate the next sequential employee code, e.g. EMP0001.
     * Derives from the current max numeric suffix so codes stay unique.
     *
     * @return string
     */
    public function next_employee_code()
    {
        // Deleted employees receive DEL-* tombstone codes, so active employee
        // numbering can restart at EMP0001 after the list is cleared.
        $row = $this->db
            ->select("MAX(CAST(SUBSTRING(employee_code, 4) AS UNSIGNED)) AS max_num", FALSE)
            ->from('employees')
            ->like('employee_code', 'EMP', 'after')
            ->where('deleted_at', NULL)
            ->get()
            ->row();

        $next = ($row && $row->max_num !== NULL) ? ((int) $row->max_num + 1) : 1;

        // Probe upward past every active employee that already holds the code.
        do {
            $code = 'EMP' . str_pad((string) $next, 4, '0', STR_PAD_LEFT);
            $next++;
        } while ($this->_active_code_exists($code));

        return $code;
    }

    /** True if an active employee already uses this code. */
    private function _active_code_exists($code)
    {
        return $this->db->from('employees')
            ->where('employee_code', $code)
            ->where('deleted_at', NULL)
            ->count_all_results() > 0;
    }

    public function update($id, $data)
    {
        $data['updated_at'] = date('Y-m-d H:i:s');
        $this->db->where('id', (int) $id)->update('employees', $data);
    }

    /**
     * Soft delete an employee AND disable their login.
     *
     * Marks the employee row deleted/inactive, then deactivates and
     * soft-deletes the linked `users` row and revokes their refresh tokens —
     * so a deleted employee can no longer log in (previously the user account
     * stayed active, which was a real security hole). Done in a transaction.
     */
    public function soft_delete($id)
    {
        $now = date('Y-m-d H:i:s');
        $this->load->model('registration_model');

        // Find the linked login user before we touch anything.
        $row = $this->db->select('e.user_id, u.email')
            ->from('employees e')
            ->join('users u', 'u.id = e.user_id', 'left')
              ->where('e.id', (int) $id)->limit(1)->get()->row();
        $user_id = $row ? (int) $row->user_id : 0;

        // Current employee_code, so we can free it for reuse on delete.
        $ecodeRow = $this->db->select('employee_code')->from('employees')
            ->where('id', (int) $id)->limit(1)->get()->row();

        $this->db->trans_begin();

        $emp_update = array(
            'deleted_at' => $now,
            'status'     => 'inactive',
        );
        // Tombstone employee_code to release it from the UNIQUE index, so a
        // new employee can reuse the number (restart from 1 when all deleted).
        if ($ecodeRow && strpos($ecodeRow->employee_code, 'DEL-') !== 0)
        {
            $emp_update['employee_code'] =
                substr('DEL-' . time() . '-' . $ecodeRow->employee_code, 0, 30);
        }

        $this->db->where('id', (int) $id)->update('employees', $emp_update);

        if ($user_id > 0)
        {
            // Read the current email so we can tombstone it.
            $u = $this->db->select('email')->from('users')
                ->where('id', $user_id)->limit(1)->get()->row();

            $update = array(
                'is_active'  => 0,
                'deleted_at' => $now,
            );
            // Tombstone the email to free the original from the UNIQUE index,
            // so the same person can be re-registered later without a
            // duplicate-key collision on approval. Prefix keeps it unique.
            if ($u && strpos($u->email, 'deleted+') !== 0)
            {
                $tomb = 'deleted+' . time() . '+' . $u->email;
                $update['email'] = substr($tomb, 0, 150); // fit VARCHAR(150)
            }

            // Disable the login account so authentication is blocked.
            $this->db->where('id', $user_id)->update('users', $update);
            // Revoke any refresh tokens so active sessions can't be renewed.
            $this->db->where('user_id', $user_id)
                     ->delete('refresh_tokens');
        }

        if ($row && $row->email !== NULL)
        {
            // Remove the approved signup record now that its employee is gone.
            $this->registration_model->delete_approved_by_email($row->email);
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
