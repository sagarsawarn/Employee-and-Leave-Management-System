-- =====================================================================
--  Team Leave Calendar + Notification upgrades
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
-- =====================================================================

USE employee_management;

-- ---------------------------------------------------------------------
-- holidays : configured company holidays shown on the team calendar.
--   UNIQUE(holiday_date) — one holiday entry per date.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS holidays (
  id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name         VARCHAR(150) NOT NULL,
  holiday_date DATE         NOT NULL,
  created_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_holidays_date (holiday_date),
  KEY idx_holidays_date (holiday_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- A few sample holidays (safe to re-run).
INSERT INTO holidays (name, holiday_date) VALUES
  ('New Year''s Day',   '2026-01-01'),
  ('Republic Day',      '2026-01-26'),
  ('Independence Day',  '2026-08-15'),
  ('Christmas Day',     '2026-12-25')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- ---------------------------------------------------------------------
-- notifications upgrade: add title, event_type, reference entity, and a
-- unique dedupe_key so retried actions don't create duplicate rows.
-- Guarded so the script is safe to run on an already-upgraded DB.
-- ---------------------------------------------------------------------
SET @has_title := (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA='employee_management' AND TABLE_NAME='notifications'
    AND COLUMN_NAME='title');
SET @sql := IF(@has_title = 0,
  'ALTER TABLE notifications
     ADD COLUMN title          VARCHAR(160) NULL AFTER user_id,
     ADD COLUMN event_type     VARCHAR(40)  NULL AFTER type,
     ADD COLUMN reference_type VARCHAR(40)  NULL AFTER message,
     ADD COLUMN reference_id   INT UNSIGNED NULL AFTER reference_type,
     ADD COLUMN dedupe_key     VARCHAR(120) NULL AFTER reference_id,
     ADD UNIQUE KEY uq_notifications_dedupe (dedupe_key)',
  'SELECT 1');
PREPARE s FROM @sql; EXECUTE s; DEALLOCATE PREPARE s;
