-- =====================================================================
--  HR registration role + Employee 360 Profile tables
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
--
--  Safe to run once. New tables use IF NOT EXISTS; the registrations
--  ALTER is guarded so re-running won't error.
--  Rollback: DROP TABLE employee_skills, employee_activities,
--            employee_personal;  and drop the requested_role column.
-- =====================================================================

USE employee_management;

-- ---------------------------------------------------------------------
-- registrations.requested_role : which role the signup is requesting.
--   'employee' (default) or 'hr_manager'. Admin approval provisions a
--   user with THIS role. The client cannot self-grant — admin controls
--   the final approval.
-- ---------------------------------------------------------------------
SET @has_rr := (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA='employee_management' AND TABLE_NAME='registrations'
    AND COLUMN_NAME='requested_role');
SET @sql := IF(@has_rr = 0,
  "ALTER TABLE registrations
     ADD COLUMN requested_role ENUM('employee','hr_manager')
       NOT NULL DEFAULT 'employee' AFTER designation_id",
  'SELECT 1');
PREPARE s FROM @sql; EXECUTE s; DEALLOCATE PREPARE s;

-- ---------------------------------------------------------------------
-- employee_skills : normalized skills per employee.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS employee_skills (
  id               INT UNSIGNED NOT NULL AUTO_INCREMENT,
  employee_id      INT UNSIGNED NOT NULL,
  name             VARCHAR(80)  NOT NULL,
  level            ENUM('beginner','intermediate','advanced','expert')
                                NOT NULL DEFAULT 'beginner',
  years_experience DECIMAL(3,1) NULL,
  created_at       DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at       DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                                ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_skill_emp_name (employee_id, name),
  KEY idx_skill_employee (employee_id),
  CONSTRAINT fk_skill_employee
    FOREIGN KEY (employee_id) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT chk_skill_years_nonneg
    CHECK (years_experience IS NULL OR years_experience >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- employee_personal : optional/sensitive personal info, 1:1 with employee.
--   Kept separate from `employees` so the core HR profile table stays
--   stable and access to sensitive fields is easy to gate.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS employee_personal (
  employee_id             INT UNSIGNED NOT NULL,
  date_of_birth           DATE         NULL,
  gender                  ENUM('male','female','other','undisclosed') NULL,
  address                 VARCHAR(255) NULL,
  work_location           VARCHAR(120) NULL,
  employment_type         ENUM('full_time','part_time','contract','intern') NULL,
  emergency_contact_name  VARCHAR(120) NULL,
  emergency_contact_phone VARCHAR(20)  NULL,
  confirmation_date       DATE         NULL,
  exit_date               DATE         NULL,
  updated_at              DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                                       ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (employee_id),
  CONSTRAINT fk_personal_employee
    FOREIGN KEY (employee_id) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- employee_activities : per-employee timeline / lightweight audit log.
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS employee_activities (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  employee_id   INT UNSIGNED NOT NULL,
  event_type    VARCHAR(40)  NOT NULL,
  description   VARCHAR(255) NOT NULL,
  actor_user_id INT UNSIGNED NULL,
  created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_activity_emp_created (employee_id, created_at),
  CONSTRAINT fk_activity_employee
    FOREIGN KEY (employee_id) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_activity_actor
    FOREIGN KEY (actor_user_id) REFERENCES users (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
