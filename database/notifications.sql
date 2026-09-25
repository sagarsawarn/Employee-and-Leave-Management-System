-- =====================================================================
--  notifications : per-user in-app notifications.
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
--
--  A row is created when an admin/HR approves or rejects a leave request,
--  or assigns a task. Scoped to a USER (users.id), not an employee, since
--  that's who logs in and reads them.
-- =====================================================================

USE employee_management;

CREATE TABLE IF NOT EXISTS notifications (
  id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id    INT UNSIGNED NOT NULL,
  type       ENUM('leave_approved','leave_rejected','task_assigned','general')
                          NOT NULL DEFAULT 'general',
  message    VARCHAR(500) NOT NULL,
  is_read    TINYINT(1)   NOT NULL DEFAULT 0,
  created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_notifications_user_unread (user_id, is_read),
  KEY idx_notifications_created (created_at),
  CONSTRAINT fk_notifications_user
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
