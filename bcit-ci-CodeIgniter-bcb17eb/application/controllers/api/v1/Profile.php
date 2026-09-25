<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Profile controller — Employee 360° Profile.  /api/v1/employees/{id}/...
 *
 * Composes existing models (employee, leave, tasks, notifications) with the
 * new skills / personal / activities data into one profile view, plus skills
 * CRUD, activity timeline, and permitted personal-info editing.
 *
 * AUTHORIZATION (server-side, from the JWT — never the client):
 *   - admin / hr_manager  : may view/edit any employee's profile.
 *   - employee            : may view/edit ONLY their own profile.
 * Enforced by _authorize(): allowed if caller is admin/HR, or the target
 * employee resolves to the caller's own user id.
 *
 * PRIVACY: personal info and leave reasons are returned only to admin/HR or
 * the profile owner. Attendance is reported as unavailable (no data source).
 */
class Profile extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->model('employee_model');
        $this->load->model('leave_model');
        $this->load->model('skill_model');
        $this->load->model('personal_model');
        $this->load->model('activity_model');
        $this->load->model('attendance_model');
    }

    /* ============================ helpers ============================ */

    /**
     * Authorize access to $employee_id. Returns the target employee row on
     * success. On failure emits the proper error and returns FALSE — callers
     * MUST return immediately when FALSE.
     */
    private function _authorize($employee_id)
    {
        $emp = $this->employee_model->find((int) $employee_id);
        if ($emp === NULL)
        {
            $this->respond_error('Employee not found', null, 404);
            return FALSE;
        }

        $role = isset($this->auth_user->role) ? $this->auth_user->role : null;
        if ($role === 'admin' || $role === 'hr_manager')
        {
            return $emp;
        }

        // Employee: only their own profile.
        $self = $this->employee_model->find_by_user($this->auth_user->sub);
        if ($self !== NULL && (int) $self->id === (int) $emp->id)
        {
            return $emp;
        }

        $this->respond_error('You do not have permission to view this profile', null, 403);
        return FALSE;
    }

    private function _is_privileged()
    {
        $role = isset($this->auth_user->role) ? $this->auth_user->role : null;
        return $role === 'admin' || $role === 'hr_manager';
    }

    /* ========================= 360 composite ========================= */

    /**
     * GET /employees/me/360-profile — the caller's own profile. Resolves the
     * employee from the JWT so employees don't need to know their employee id.
     */
    public function full_me()
    {
        if ( ! $this->require_auth()) return;
        $self = $this->employee_model->find_by_user($this->auth_user->sub);
        if ($self === NULL)
        {
            return $this->respond_error('No employee profile linked to this account', null, 404);
        }
        return $this->full((int) $self->id);
    }

    /** GET /employees/{id}/360-profile */
    public function full($id)
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_authorize($id);
        if ($emp === FALSE) return;

        $eid = (int) $emp->id;
        $balances = $this->leave_model->balances_for($eid);
        $apps = $this->leave_model->applications_for($eid);

        // Summary cards (authoritative, computed here).
        $approved = 0; $pending = 0; $rejected = 0; $approved_days = 0;
        foreach ($apps as $a)
        {
            if ($a->status === 'approved') { $approved++; $approved_days += (float) $a->total_days; }
            elseif ($a->status === 'pending') { $pending++; }
            elseif ($a->status === 'rejected') { $rejected++; }
        }
        $available = 0;
        foreach ($balances as $b) { $available += (float) $b->remaining_days; }

        // Personal info + reasons only for privileged viewers or the owner
        // (which _authorize already guarantees, so include them here).
        $personal = $this->personal_model->for_employee($eid);

        return $this->respond_success('OK', array(
            'employee' => $emp,
            'summary'  => array(
                'approved_leave_count'  => $approved,
                'approved_leave_days'   => $approved_days,
                'available_leave_days'  => $available,
                'pending_leave_count'   => $pending,
                'rejected_leave_count'  => $rejected,
                'employment_duration'   => $this->_duration($emp->date_of_joining),
            ),
            'personal_information'   => $personal,
            'leave_summary' => array(
                'balances' => $balances,
                'recent'   => array_slice($apps, 0, 5),
            ),
            'attendance_summary' => array(
                'available'    => TRUE,
                'present_days' => $this->attendance_model->present_days($eid),
                'history'      => $this->attendance_model->history($eid, 30),
            ),
            'skills'            => $this->skill_model->for_employee($eid),
            'recent_activities' => $this->activity_model->paginate($eid, 1, 10),
        ), 200);
    }

    /** GET /employees/{id}/leave-summary?page= */
    public function leave_summary($id)
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_authorize($id);
        if ($emp === FALSE) return;

        return $this->respond_success('OK', array(
            'balances' => $this->leave_model->balances_for((int) $emp->id),
            'history'  => $this->leave_model->applications_for((int) $emp->id),
        ), 200);
    }

    /** GET /employees/{id}/activities?page= */
    public function activities($id)
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_authorize($id);
        if ($emp === FALSE) return;

        $page = $this->input->get('page', TRUE) ?: 1;
        return $this->respond_success('OK',
            $this->activity_model->paginate((int) $emp->id, (int) $page, 15), 200);
    }

    /* ============================= skills ============================ */

    /** GET|POST /employees/{id}/skills */
    public function skills($id)
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_authorize($id);
        if ($emp === FALSE) return;

        if (strtoupper($this->input->method()) === 'GET')
        {
            return $this->respond_success('OK',
                $this->skill_model->for_employee((int) $emp->id), 200);
        }
        if (strtoupper($this->input->method()) !== 'POST')
        {
            return $this->respond_error('Method not allowed', null, 405);
        }

        $input = $this->json_input();
        $name = isset($input['name']) ? trim((string) $input['name']) : '';
        $level = isset($input['level']) ? (string) $input['level'] : '';
        $years = (isset($input['years_experience']) && $input['years_experience'] !== '')
            ? (float) $input['years_experience'] : null;

        $errors = array();
        if ($name === '' || strlen($name) > 80) $errors['name'] = 'Skill name is required (max 80 chars)';
        if ( ! $this->skill_model->valid_level($level)) $errors['level'] = 'Invalid skill level';
        if ($years !== null && $years < 0) $errors['years_experience'] = 'Years cannot be negative';
        if ( ! empty($errors))
        {
            return $this->respond_error('Validation failed', $errors, 422);
        }
        if ($this->skill_model->name_exists((int) $emp->id, $name))
        {
            return $this->respond_error('Validation failed',
                array('name' => 'This skill already exists for the employee'), 422);
        }

        $skill_id = $this->skill_model->insert((int) $emp->id, $name, $level, $years);
        $this->activity_model->log((int) $emp->id, 'skill_added',
            'Skill added: ' . $name, $this->auth_user->sub);

        return $this->respond_success('Skill added',
            $this->skill_model->find($skill_id), 201);
    }

    /** PUT|DELETE /employees/{id}/skills/{skillId} */
    public function skill($id, $skill_id)
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_authorize($id);
        if ($emp === FALSE) return;

        $skill = $this->skill_model->find((int) $skill_id);
        if ($skill === NULL || (int) $skill->employee_id !== (int) $emp->id)
        {
            return $this->respond_error('Skill not found', null, 404);
        }

        if (strtoupper($this->input->method()) === 'DELETE')
        {
            $this->skill_model->delete((int) $skill_id);
            $this->activity_model->log((int) $emp->id, 'skill_deleted',
                'Skill removed: ' . $skill->name, $this->auth_user->sub);
            return $this->respond_success('Skill deleted', null, 200);
        }
        if (strtoupper($this->input->method()) !== 'PUT')
        {
            return $this->respond_error('Method not allowed', null, 405);
        }

        $input = $this->json_input();
        $name = isset($input['name']) ? trim((string) $input['name']) : $skill->name;
        $level = isset($input['level']) ? (string) $input['level'] : $skill->level;
        $years = array_key_exists('years_experience', $input)
            ? (($input['years_experience'] === '' || $input['years_experience'] === null)
                ? null : (float) $input['years_experience'])
            : $skill->years_experience;

        $errors = array();
        if ($name === '' || strlen($name) > 80) $errors['name'] = 'Skill name is required (max 80 chars)';
        if ( ! $this->skill_model->valid_level($level)) $errors['level'] = 'Invalid skill level';
        if ($years !== null && $years < 0) $errors['years_experience'] = 'Years cannot be negative';
        if ( ! empty($errors))
        {
            return $this->respond_error('Validation failed', $errors, 422);
        }
        if ($this->skill_model->name_exists((int) $emp->id, $name, (int) $skill_id))
        {
            return $this->respond_error('Validation failed',
                array('name' => 'Another skill with this name already exists'), 422);
        }

        $this->skill_model->update((int) $skill_id, array(
            'name' => $name, 'level' => $level, 'years_experience' => $years,
        ));
        $this->activity_model->log((int) $emp->id, 'skill_updated',
            'Skill updated: ' . $name, $this->auth_user->sub);

        return $this->respond_success('Skill updated',
            $this->skill_model->find((int) $skill_id), 200);
    }

    /* =========================== personal =========================== */

    /** PUT /employees/{id}/personal */
    public function personal($id)
    {
        if ( ! $this->require_auth()) return;
        $emp = $this->_authorize($id);
        if ($emp === FALSE) return;

        if (strtoupper($this->input->method()) !== 'PUT')
        {
            return $this->respond_error('Method not allowed', null, 405);
        }

        $input = $this->json_input();

        // Validate the constrained fields when present.
        if (isset($input['gender']) && $input['gender'] !== ''
            && ! in_array($input['gender'], array('male','female','other','undisclosed'), TRUE))
        {
            return $this->respond_error('Validation failed', array('gender' => 'Invalid gender'), 422);
        }
        if (isset($input['employment_type']) && $input['employment_type'] !== ''
            && ! in_array($input['employment_type'], array('full_time','part_time','contract','intern'), TRUE))
        {
            return $this->respond_error('Validation failed', array('employment_type' => 'Invalid employment type'), 422);
        }
        if (isset($input['emergency_contact_phone']) && $input['emergency_contact_phone'] !== ''
            && ! preg_match('/^\d{10}$/', $input['emergency_contact_phone']))
        {
            return $this->respond_error('Validation failed',
                array('emergency_contact_phone' => 'Emergency contact must be exactly 10 digits'), 422);
        }

        // Joining date lives on the employees table (not employee_personal).
        // Validate YYYY-MM-DD and update it there when provided.
        if (isset($input['date_of_joining']) && $input['date_of_joining'] !== '')
        {
            $d = DateTime::createFromFormat('Y-m-d', $input['date_of_joining']);
            if ($d === FALSE || $d->format('Y-m-d') !== $input['date_of_joining'])
            {
                return $this->respond_error('Validation failed',
                    array('date_of_joining' => 'Joining date must be a valid date'), 422);
            }
            $this->employee_model->update((int) $emp->id,
                array('date_of_joining' => $input['date_of_joining']));
        }

        // Personal_model::save whitelists keys — role/status/email can never
        // be written here (mass-assignment safe).
        $this->personal_model->save((int) $emp->id, $input);
        $this->activity_model->log((int) $emp->id, 'profile_updated',
            'Personal information updated', $this->auth_user->sub);

        return $this->respond_success('Profile updated',
            $this->personal_model->for_employee((int) $emp->id), 200);
    }

    /* ============================ helpers ============================ */

    /** Human employment duration from a joining date. */
    private function _duration($doj)
    {
        if (empty($doj)) return null;
        $start = strtotime($doj);
        if ($start === FALSE) return null;
        $months = (int) floor((time() - $start) / (30.44 * 86400));
        $years = intdiv($months, 12);
        $rem = $months % 12;
        $parts = array();
        if ($years > 0) $parts[] = $years . ' yr' . ($years > 1 ? 's' : '');
        $parts[] = $rem . ' mo' . ($rem !== 1 ? 's' : '');
        return implode(' ', $parts);
    }
}
