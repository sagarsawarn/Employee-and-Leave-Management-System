<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Skill_model — employee skills. Maps to `employee_skills`.
 * Query Builder = parameterized queries.
 */
class Skill_model extends CI_Model {

    private $levels = array('beginner', 'intermediate', 'advanced', 'expert');

    public function valid_level($level)
    {
        return in_array($level, $this->levels, TRUE);
    }

    public function for_employee($employee_id)
    {
        return $this->db
            ->select('id, name, level, years_experience, updated_at')
            ->from('employee_skills')
            ->where('employee_id', (int) $employee_id)
            ->order_by('name', 'ASC')
            ->get()->result();
    }

    public function find($id)
    {
        return $this->db->from('employee_skills')
            ->where('id', (int) $id)->limit(1)->get()->row();
    }

    public function name_exists($employee_id, $name, $exclude_id = NULL)
    {
        $this->db->from('employee_skills')
            ->where('employee_id', (int) $employee_id)
            ->where('name', $name);
        if ($exclude_id !== NULL)
        {
            $this->db->where('id !=', (int) $exclude_id);
        }
        return $this->db->count_all_results() > 0;
    }

    public function insert($employee_id, $name, $level, $years)
    {
        $this->db->insert('employee_skills', array(
            'employee_id'      => (int) $employee_id,
            'name'             => $name,
            'level'            => $level,
            'years_experience' => $years,
            'created_at'       => date('Y-m-d H:i:s'),
        ));
        return (int) $this->db->insert_id();
    }

    public function update($id, $data)
    {
        $data['updated_at'] = date('Y-m-d H:i:s');
        $this->db->where('id', (int) $id)->update('employee_skills', $data);
    }

    public function delete($id)
    {
        $this->db->where('id', (int) $id)->delete('employee_skills');
    }
}
