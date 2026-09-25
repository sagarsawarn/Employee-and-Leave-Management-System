<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Personal_model — optional/sensitive personal info (1:1 with employee).
 * Maps to `employee_personal`. Query Builder = parameterized queries.
 */
class Personal_model extends CI_Model {

    /** Fetch the personal row for an employee, or NULL if none yet. */
    public function for_employee($employee_id)
    {
        return $this->db->from('employee_personal')
            ->where('employee_id', (int) $employee_id)
            ->limit(1)->get()->row();
    }

    /**
     * Upsert the permitted personal fields. Only whitelisted keys are
     * written (mass-assignment safe). Returns void.
     */
    public function save($employee_id, array $fields)
    {
        $allowed = array(
            'date_of_birth', 'gender', 'address', 'work_location',
            'employment_type', 'emergency_contact_name',
            'emergency_contact_phone', 'confirmation_date', 'exit_date',
        );
        $data = array();
        foreach ($allowed as $key)
        {
            if (array_key_exists($key, $fields))
            {
                $data[$key] = $fields[$key] === '' ? null : $fields[$key];
            }
        }
        if (empty($data))
        {
            return;
        }
        $data['updated_at'] = date('Y-m-d H:i:s');

        $exists = $this->db->from('employee_personal')
            ->where('employee_id', (int) $employee_id)
            ->count_all_results() > 0;

        if ($exists)
        {
            $this->db->where('employee_id', (int) $employee_id)
                     ->update('employee_personal', $data);
        }
        else
        {
            $data['employee_id'] = (int) $employee_id;
            $this->db->insert('employee_personal', $data);
        }
    }
}
