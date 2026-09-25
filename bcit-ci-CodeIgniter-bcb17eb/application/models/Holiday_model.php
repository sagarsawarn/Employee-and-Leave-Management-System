<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Holiday_model — configured company holidays for the team calendar.
 * Maps to the `holidays` table. Query Builder = parameterized.
 */
class Holiday_model extends CI_Model {

    /**
     * Holidays whose date falls within [from, to] inclusive.
     *
     * @param string $from Y-m-d
     * @param string $to   Y-m-d
     * @return array
     */
    public function in_range($from, $to)
    {
        return $this->db
            ->select('id, name, holiday_date, description')
            ->from('holidays')
            ->where('holiday_date >=', $from)
            ->where('holiday_date <=', $to)
            ->order_by('holiday_date', 'ASC')
            ->get()
            ->result();
    }
}
