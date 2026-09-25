<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Org_model — departments and designations lookups + CRUD.
 * Maps to `departments` and `designations`.
 */
class Org_model extends CI_Model {

    public function departments()
    {
        return $this->db->select('id, name')
            ->from('departments')
            ->order_by('name', 'ASC')
            ->get()
            ->result();
    }

    public function designations()
    {
        return $this->db->select('id, title, department_id')
            ->from('designations')
            ->order_by('title', 'ASC')
            ->get()
            ->result();
    }

    public function department_exists($id)
    {
        return $this->db->from('departments')->where('id', (int) $id)
            ->count_all_results() > 0;
    }

    public function designation_exists($id)
    {
        return $this->db->from('designations')->where('id', (int) $id)
            ->count_all_results() > 0;
    }

    public function designation_belongs_to_department($designation_id, $department_id)
    {
        return $this->db->from('designations')
            ->where('id', (int) $designation_id)
            ->where('department_id', (int) $department_id)
            ->count_all_results() > 0;
    }

    public function insert_department($data)
    {
        $data['created_at'] = date('Y-m-d H:i:s');
        $this->db->insert('departments', $data);
        return (int) $this->db->insert_id();
    }
}
