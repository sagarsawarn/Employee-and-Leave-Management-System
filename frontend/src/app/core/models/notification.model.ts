/**
 * Notification domain type — a per-user in-app notification.
 */
export type NotificationType =
  | 'leave_approved'
  | 'leave_rejected'
  | 'task_assigned'
  | 'general';

export interface AppNotification {
  id: number;
  title: string | null;
  type: NotificationType;
  event_type: string | null; // leave_submitted, leave_pending, etc.
  message: string;
  reference_type: string | null; // 'leave_request' | 'task' | null
  reference_id: number | null;
  is_read: number; // 0 | 1 from MySQL
  created_at: string;
}

/** Paginated envelope from GET /notifications. */
export interface PaginatedNotifications {
  items: AppNotification[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
