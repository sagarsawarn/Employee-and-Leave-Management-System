<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Notifications controller — /api/v1/notifications
 * All endpoints are scoped to the AUTHENTICATED user (from the JWT). A user
 * can only ever read or modify their own notifications.
 *
 *   GET   /notifications              list recent
 *   GET   /notifications/unread-count { count }
 *   PATCH /notifications/{id}/read    mark one read
 *   PATCH /notifications/read-all     mark all read
 */
class Notifications extends API_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('notification_model');
    }

    /** GET /notifications?page=&per_page= (paginated, own notifications only) */
    public function index()
    {
        if ( ! $this->require_auth()) return;

        $page = $this->input->get('page', TRUE) ?: 1;
        $per_page = $this->input->get('per_page', TRUE) ?: 15;

        return $this->respond_success('OK',
            $this->notification_model->paginate_for_user(
                $this->auth_user->sub, (int) $page, (int) $per_page), 200);
    }

    /** GET /notifications/unread-count */
    public function unread_count()
    {
        if ( ! $this->require_auth()) return;
        return $this->respond_success('OK',
            array('count' => $this->notification_model->unread_count($this->auth_user->sub)), 200);
    }

    /** PATCH /notifications/{id}/read */
    public function read($id)
    {
        if ( ! $this->require_auth()) return;
        $this->notification_model->mark_read((int) $id, $this->auth_user->sub);
        return $this->respond_success('Marked read', null, 200);
    }

    /** PATCH /notifications/read-all */
    public function read_all()
    {
        if ( ! $this->require_auth()) return;
        $this->notification_model->mark_all_read($this->auth_user->sub);
        return $this->respond_success('All marked read', null, 200);
    }
}
