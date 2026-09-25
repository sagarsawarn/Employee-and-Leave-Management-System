<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/** Task assignment API. Admins assign; employees view and update their tasks. */
class Tasks extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->model('task_model');
        $this->load->model('employee_model');
        $this->load->model('notification_model');
    }

    /** GET /tasks: admin sees all, employee sees their own. POST: admin only. */
    public function collection()
    {
        if ( ! $this->require_auth()) return;

        if (strtoupper($this->input->method()) === 'GET')
        {
            if ($this->auth_user->role === 'admin')
            {
                return $this->respond_success('Tasks loaded', $this->task_model->all(), 200);
            }
            $employee = $this->employee_model->find_by_user($this->auth_user->sub);
            if ($employee === NULL)
            {
                return $this->respond_success('Tasks loaded', array(), 200);
            }
            return $this->respond_success('Tasks loaded',
                $this->task_model->for_employee($employee->id), 200);
        }

        if (strtoupper($this->input->method()) !== 'POST')
        {
            return $this->respond_error('Method not allowed', null, 405);
        }
        if ( ! $this->require_role(array('admin'))) return;

        $input = $this->json_input();
        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('title', 'Title', 'trim|required|max_length[160]');
        $this->form_validation->set_rules('description', 'Description', 'trim|required|max_length[2000]');
        $this->form_validation->set_rules('assigned_to', 'Employee', 'required|integer');
        $this->form_validation->set_rules('due_date', 'Due date', 'required');
        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        $employee = $this->employee_model->find((int) $input['assigned_to']);
        if ($employee === NULL)
        {
            return $this->respond_error('Validation failed',
                array('assigned_to' => 'Employee not found'), 422);
        }

        $id = $this->task_model->insert(array(
            'title'       => $input['title'],
            'description' => $input['description'],
            'assigned_to' => (int) $input['assigned_to'],
            'created_by'  => (int) $this->auth_user->sub,
            'due_date'    => $input['due_date'],
            'status'      => 'assigned',
        ));

        // Notify the assigned employee (resolve employee -> login user).
        if (isset($employee->user_id) && (int) $employee->user_id > 0)
        {
            $this->notification_model->create(array(
                'user_id'        => (int) $employee->user_id,
                'title'          => 'New task assigned',
                'type'           => 'task_assigned',
                'event_type'     => 'task_assigned',
                'message'        => 'You have been assigned a new task: ' . $input['title'],
                'reference_type' => 'task',
                'reference_id'   => $id,
                'dedupe_key'     => 'task_assigned:' . $id,
            ));
        }

        return $this->respond_success('Task assigned', $this->task_model->find($id), 201);
    }

    /** PATCH /tasks/{id}: owner can update status; admin can update any status. */
    public function resource($id)
    {
        if ( ! $this->require_auth()) return;
        $task = $this->task_model->find($id);
        if ($task === NULL) return $this->respond_error('Task not found', null, 404);

        $employee = $this->employee_model->find_by_user($this->auth_user->sub);
        $is_admin = $this->auth_user->role === 'admin';
        if ( ! $is_admin && ($employee === NULL || (int) $task->assigned_to !== (int) $employee->id))
        {
            return $this->respond_error('You can only update your own tasks', null, 403);
        }

        if (strtoupper($this->input->method()) === 'DELETE')
        {
            if ( ! $is_admin) return $this->respond_error('Only administrators can delete tasks', null, 403);
            $this->task_model->delete($id);
            return $this->respond_success('Task deleted', null, 200);
        }

        $input = $this->json_input();
        if ( ! isset($input['status']) || ! in_array($input['status'], array('assigned', 'in_progress', 'completed'), TRUE))
        {
            return $this->respond_error('Status must be assigned, in_progress, or completed', null, 422);
        }
        $this->task_model->update_status($id, $input['status']);
        return $this->respond_success('Task updated', $this->task_model->find($id), 200);
    }
}