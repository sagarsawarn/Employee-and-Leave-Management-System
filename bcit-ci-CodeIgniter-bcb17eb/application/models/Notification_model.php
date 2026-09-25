<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Notification_model — per-user in-app notifications.
 * Maps to the `notifications` table. Query Builder = parameterized.
 *
 * Stores recipient (user_id), title, message, event_type, reference entity
 * (reference_type + reference_id), read status, and timestamp. A unique
 * dedupe_key prevents duplicate rows when an action is retried.
 */
class Notification_model extends CI_Model {

    /**
     * Create a notification. Returns new id, or 0 if skipped (invalid user
     * or a duplicate dedupe_key already exists).
     *
     * @param array $data {user_id, title, type, event_type, message,
     *                      reference_type, reference_id, dedupe_key}
     */
    public function create(array $data)
    {
        $user_id = isset($data['user_id']) ? (int) $data['user_id'] : 0;
        if ($user_id <= 0)
        {
            return 0;
        }

        // Duplicate prevention: if a dedupe_key is supplied and already
        // exists, skip silently (idempotent for retried events).
        if ( ! empty($data['dedupe_key']))
        {
            $exists = $this->db->from('notifications')
                ->where('dedupe_key', $data['dedupe_key'])
                ->count_all_results() > 0;
            if ($exists)
            {
                return 0;
            }
        }

        $row = array(
            'user_id'        => $user_id,
            'title'          => isset($data['title']) ? $data['title'] : null,
            'type'           => isset($data['type']) ? $data['type'] : 'general',
            'event_type'     => isset($data['event_type']) ? $data['event_type'] : null,
            'message'        => isset($data['message']) ? $data['message'] : '',
            'reference_type' => isset($data['reference_type']) ? $data['reference_type'] : null,
            'reference_id'   => isset($data['reference_id']) ? (int) $data['reference_id'] : null,
            'dedupe_key'     => ! empty($data['dedupe_key']) ? $data['dedupe_key'] : null,
            'is_read'        => 0,
            'created_at'     => date('Y-m-d H:i:s'),
        );

        // Guard against a race on the unique dedupe_key: ignore duplicate-key
        // errors so a concurrent retry can't 500.
        $ok = @$this->db->insert('notifications', $row);
        if ($ok === FALSE)
        {
            return 0;
        }
        return (int) $this->db->insert_id();
    }

    /**
     * Paginated notifications for a user (newest first).
     *
     * @return array {items, page, per_page, total, total_pages}
     */
    public function paginate_for_user($user_id, $page, $per_page)
    {
        $page = max(1, (int) $page);
        $per_page = max(1, min(50, (int) $per_page));
        $offset = ($page - 1) * $per_page;

        $total = (int) $this->db->from('notifications')
            ->where('user_id', (int) $user_id)
            ->count_all_results();

        $items = $this->db
            ->select('id, title, type, event_type, message,
                      reference_type, reference_id, is_read, created_at')
            ->from('notifications')
            ->where('user_id', (int) $user_id)
            ->order_by('created_at', 'DESC')
            ->limit($per_page, $offset)
            ->get()
            ->result();

        return array(
            'items'       => $items,
            'page'        => $page,
            'per_page'    => $per_page,
            'total'       => $total,
            'total_pages' => $total === 0 ? 0 : (int) ceil($total / $per_page),
        );
    }

    public function unread_count($user_id)
    {
        return (int) $this->db->from('notifications')
            ->where('user_id', (int) $user_id)
            ->where('is_read', 0)
            ->count_all_results();
    }

    /** Mark a single notification read — ONLY if it belongs to the user. */
    public function mark_read($id, $user_id)
    {
        $this->db->where('id', (int) $id)
                 ->where('user_id', (int) $user_id)   // ownership guard
                 ->update('notifications', array('is_read' => 1));
        return $this->db->affected_rows() > 0;
    }

    public function mark_all_read($user_id)
    {
        $this->db->where('user_id', (int) $user_id)
                 ->where('is_read', 0)
                 ->update('notifications', array('is_read' => 1));
    }
}
