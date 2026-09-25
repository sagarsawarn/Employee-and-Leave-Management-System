<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/** Task assignments for administrators and employees. */
class Task_model extends CI_Model {

    public function all()
    {
        return $this->db
            ->select("t.id, t.title, t.description, t.status, t.due_date,
                      t.created_at, t.assigned_to,
                      CONCAT(e.first_name, ' ', e.last_name) AS employee_name")
            ->from('tasks t')
            ->join('employees e', 'e.id = t.assigned_to', 'inner')
            ->where('e.deleted_at', NULL)
            ->order_by('t.created_at', 'DESC')
            ->get()->result();
    }

    public function for_employee($employee_id)
    {
        return $this->db
            ->select('id, title, description, status, due_date, created_at, assigned_to')
            ->from('tasks')
            ->where('assigned_to', (int) $employee_id)
            ->order_by('status', 'ASC')
            ->order_by('due_date', 'ASC')
            ->get()->result();
    }

    public function find($id)
    {
        return $this->db->from('tasks')->where('id', (int) $id)->limit(1)->get()->row();
    }

    public function insert($data)
    {
        $this->db->insert('tasks', $data);
        return (int) $this->db->insert_id();
    }

    public function update_status($id, $status)
    {
        return $this->db->where('id', (int) $id)
            ->update('tasks', array('status' => $status, 'updated_at' => date('Y-m-d H:i:s')));
    }

    public function delete($id)
    {
        return $this->db->where('id', (int) $id)->delete('tasks');
    }
}