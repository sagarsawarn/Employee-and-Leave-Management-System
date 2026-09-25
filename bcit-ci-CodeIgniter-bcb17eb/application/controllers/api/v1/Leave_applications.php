<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Leave_applications controller — /api/v1/leave-applications
 *
 * apply / me  : any authenticated employee, scoped to their own record.
 * queue       : admin/HR — pending review list.
 * approve/reject : admin/HR only. This is the real authorization boundary;
 *   the frontend hiding the buttons is not relied upon.
 * cancel      : the owning employee only.
 */
class Leave_applications extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->model('leave_model');
        $this->load->model('employee_model');
        $this->load->model('notification_model');
    }

    /**
     * Create a notification for the employee who owns an application.
     * Resolves employee_id -> user_id; no-op if unresolved. dedupe_key makes
     * retried actions idempotent (no duplicate rows).
     */
    private function _notify_applicant($employee_id, $type, $event_type, $title, $message, $ref_id, $dedupe_key)
    {
        $user_id = $this->employee_model->user_id_of($employee_id);
        if ($user_id > 0)
        {
            $this->notification_model->create(array(
                'user_id'        => $user_id,
                'title'          => $title,
                'type'           => $type,
                'event_type'     => $event_type,
                'message'        => $message,
                'reference_type' => 'leave_request',
                'reference_id'   => $ref_id,
                'dedupe_key'     => $dedupe_key,
            ));
        }
    }

    /**
     * Notify all approvers (admin + HR) of a pending request. One row per
     * approver, each deduped by (approver, request) so retries don't spam.
     */
    private function _notify_approvers($request_id, $applicant_name, $start, $end)
    {
        $this->load->model('user_model');
        $approver_ids = $this->user_model->approver_user_ids();
        foreach ($approver_ids as $uid)
        {
            $this->notification_model->create(array(
                'user_id'        => (int) $uid,
                'title'          => 'Leave awaiting approval',
                'type'           => 'general',
                'event_type'     => 'leave_pending',
                'message'        => $applicant_name . ' requested leave (' . $start . ' to ' . $end . ').',
                'reference_type' => 'leave_request',
                'reference_id'   => (int) $request_id,
                'dedupe_key'     => 'leave_pending:' . $request_id . ':u' . $uid,
            ));
        }
    }

    /** Dispatch /leave-applications by verb (GET queue, POST apply). */
    public function collection()
    {
        switch (strtoupper($this->input->method()))
        {
            case 'GET':  return $this->index();
            case 'POST': return $this->create();
            default:     return $this->respond_error('Method not allowed', null, 405);
        }
    }

    /** POST /leave-applications (apply) */
    public function create()
    {
        if ( ! $this->require_auth()) return;

        $employee = $this->employee_model->find_by_user($this->auth_user->sub);
        if ($employee === NULL)
        {
            return $this->respond_error('No employee profile linked to this account', null, 403);
        }

        $input = $this->json_input();

        // Normalize JSON values to strings before form_validation. CI3 3.1.x
        // validation rules (trim/required/integer) assume string input; a
        // JSON-decoded integer (leave_type_id) or null can otherwise trip the
        // rules under PHP 8.2 and surface as a spurious "Validation failed".
        $data = array(
            'leave_type_id' => isset($input['leave_type_id']) ? (string) $input['leave_type_id'] : '',
            'start_date'    => isset($input['start_date']) ? (string) $input['start_date'] : '',
            'end_date'      => isset($input['end_date']) ? (string) $input['end_date'] : '',
            'reason'        => isset($input['reason']) ? (string) $input['reason'] : '',
        );

        $this->form_validation->set_data($data);
        $this->form_validation->set_rules('leave_type_id', 'Leave type', 'trim|required|is_natural_no_zero');
        $this->form_validation->set_rules('start_date', 'Start date', 'trim|required');
        $this->form_validation->set_rules('end_date', 'End date', 'trim|required');
        $this->form_validation->set_rules('reason', 'Reason', 'trim|required|max_length[500]');

        if ($this->form_validation->run() === FALSE)
        {
            return $this->respond_error('Validation failed', $this->form_validation->error_array(), 422);
        }

        if ( ! $this->leave_model->type_exists((int) $data['leave_type_id']))
        {
            return $this->respond_error('Validation failed',
                array('leave_type_id' => 'Unknown leave type'), 422);
        }

        $start = strtotime($data['start_date']);
        $end = strtotime($data['end_date']);
        if ($start === FALSE || $end === FALSE || $end < $start)
        {
            return $this->respond_error('Validation failed',
                array('end_date' => 'End date must be on or after start date'), 422);
        }

        $start_ymd = date('Y-m-d', $start);
        $end_ymd = date('Y-m-d', $end);

        // Reject overlapping active applications for this employee (D5).
        if ($this->leave_model->has_overlap($employee->id, $start_ymd, $end_ymd))
        {
            return $this->respond_error('Validation failed',
                array('start_date' => 'You already have a leave request overlapping these dates'), 422);
        }

        // Working-day count excluding weekends (D7).
        $total_days = $this->_working_days($start, $end);
        if ($total_days < 1)
        {
            return $this->respond_error('Validation failed',
                array('start_date' => 'The selected range contains no working days'), 422);
        }

        // Ensure the employee has the configured annual allocation for the
        // year in which this request starts.
        $this->leave_model->allocate_default_balances(
            $employee->id, (int) date('Y', $start));

        $id = $this->leave_model->insert_application(array(
            'employee_id'   => $employee->id,
            'leave_type_id' => (int) $data['leave_type_id'],
            'start_date'    => $start_ymd,
            'end_date'      => $end_ymd,
            'total_days'    => $total_days,
            'reason'        => $data['reason'],
            'status'        => 'pending',
        ));

        // Confirmation notification to the applicant.
        $this->_notify_applicant($employee->id, 'general', 'leave_submitted',
            'Leave request submitted',
            'Your leave request (' . $start_ymd . ' to ' . $end_ymd . ') was submitted and is pending approval.',
            $id, 'leave_submitted:' . $id);

        // Pending-approval notifications to admins/HR.
        $applicant_name = trim($employee->first_name . ' ' . $employee->last_name);
        $this->_notify_approvers($id, $applicant_name, $start_ymd, $end_ymd);

        return $this->respond_success('Leave application submitted',
            array('id' => $id, 'status' => 'pending', 'total_days' => $total_days), 201);
    }

    /** GET /leave-applications/me */
    public function me()
    {
        if ( ! $this->require_auth()) return;

        $employee = $this->employee_model->find_by_user($this->auth_user->sub);
        if ($employee === NULL)
        {
            return $this->respond_success('OK', array(), 200);
        }
        return $this->respond_success('OK',
            $this->leave_model->applications_for($employee->id), 200);
    }

    /** GET /leave-applications/on-leave (admin/HR) — who is on approved leave. */
    public function on_leave()
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        return $this->respond_success('OK',
            $this->leave_model->on_leave(date('Y-m-d')), 200);
    }

    /** GET /leave-applications?status= (admin/HR) */
    public function index()
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $status = $this->input->get('status', TRUE);
        return $this->respond_success('OK',
            $this->leave_model->queue($status !== '' ? $status : NULL), 200);
    }

    /** PATCH /leave-applications/{id}/approve (admin/HR) */
    public function approve($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $input = $this->json_input();
        $comment = isset($input['review_comment']) ? $input['review_comment'] : null;

        // Capture the application (for the notification message) before update.
        $app = $this->leave_model->find_application((int) $id);

        // Status re-check + deduction happen atomically under a row lock in
        // the model (D4). Map its result to a precise HTTP status.
        switch ($this->leave_model->approve((int) $id, $this->auth_user->sub, $comment))
        {
            case 'ok':
                if ($app !== NULL)
                {
                    $this->_notify_applicant($app->employee_id, 'leave_approved', 'leave_approved',
                        'Leave approved',
                        'Your leave request (' . $app->start_date . ' to ' . $app->end_date . ') was approved.',
                        (int) $id, 'leave_approved:' . $id);
                }
                return $this->respond_success('Application approved', null, 200);
            case 'not_found':
                return $this->respond_error('Application not found', null, 404);
            case 'not_pending':
                return $this->respond_error('Only pending applications can be reviewed', null, 409);
            case 'no_balance':
                return $this->respond_error('Cannot approve: no leave balance allocated for this type/year', null, 409);
            case 'insufficient':
                return $this->respond_error('Cannot approve: insufficient leave balance', null, 409);
            default:
                return $this->respond_error('Failed to approve application', null, 500);
        }
    }

    /** PATCH /leave-applications/{id}/reject (admin/HR) */
    public function reject($id)
    {
        if ( ! $this->require_auth()) return;
        if ( ! $this->require_role(array('admin', 'hr_manager'))) return;

        $input = $this->json_input();
        $comment = isset($input['review_comment']) ? $input['review_comment'] : null;

        $app = $this->leave_model->find_application((int) $id);

        switch ($this->leave_model->reject((int) $id, $this->auth_user->sub, $comment))
        {
            case 'ok':
                if ($app !== NULL)
                {
                    $this->_notify_applicant($app->employee_id, 'leave_rejected', 'leave_rejected',
                        'Leave declined',
                        'Your leave request (' . $app->start_date . ' to ' . $app->end_date . ') was declined.',
                        (int) $id, 'leave_rejected:' . $id);
                }
                return $this->respond_success('Application rejected', null, 200);
            case 'not_found':
                return $this->respond_error('Application not found', null, 404);
            case 'not_pending':
                return $this->respond_error('Only pending applications can be reviewed', null, 409);
            default:
                return $this->respond_error('Failed to reject application', null, 500);
        }
    }

    /** PATCH /leave-applications/{id}/cancel (owner) */
    public function cancel($id)
    {
        if ( ! $this->require_auth()) return;

        $app = $this->leave_model->find_application((int) $id);
        if ($app === NULL)
        {
            return $this->respond_error('Application not found', null, 404);
        }

        // Ownership check: only the applicant may cancel.
        $employee = $this->employee_model->find_by_user($this->auth_user->sub);
        if ($employee === NULL || (int) $app->employee_id !== (int) $employee->id)
        {
            return $this->respond_error('You can only cancel your own applications', null, 403);
        }
        if ( ! in_array($app->status, array('pending', 'approved'), TRUE))
        {
            return $this->respond_error('Only pending or approved leave can be cancelled', null, 409);
        }

        // D8: an APPROVED leave that has already started/passed cannot be
        // cancelled — that would restore balance for time already taken.
        if ($app->status === 'approved'
            && strtotime($app->start_date) <= strtotime(date('Y-m-d')))
        {
            return $this->respond_error(
                'Approved leave that has already started or passed cannot be cancelled', null, 409);
        }

        if ( ! $this->leave_model->cancel($app))
        {
            return $this->respond_error('Failed to cancel application', null, 500);
        }
        return $this->respond_success('Application cancelled', null, 200);
    }

    /**
     * Count working days (Mon–Fri) inclusive between two timestamps (D7).
     * Weekends are excluded. A holidays table could be layered on later.
     *
     * @param int $start unix ts (midnight of start_date)
     * @param int $end   unix ts (midnight of end_date)
     * @return int
     */
    private function _working_days($start, $end)
    {
        $days = 0;
        for ($ts = $start; $ts <= $end; $ts += 86400)
        {
            $dow = (int) date('N', $ts); // 1=Mon .. 7=Sun
            if ($dow <= 5)
            {
                $days++;
            }
        }
        return $days;
    }
}
