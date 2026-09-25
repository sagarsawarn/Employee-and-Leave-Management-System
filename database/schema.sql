-- =====================================================================
--  Employee Management & Leave Management System — Database Schema
--  Target: MariaDB 10.4.24 (XAMPP)  |  Engine: InnoDB  |  Charset: utf8mb4
--
--  Notes on MariaDB 10.4 compatibility:
--   - CHECK constraints ARE enforced (10.2.1+).
--   - Generated (computed) columns supported: used here for remaining_days.
--   - Foreign keys / transactions require InnoDB (default in XAMPP).
--   - Application-layer rules (overlap detection, transactional balance
--     updates) are documented where a constraint cannot express them.
-- =====================================================================

CREATE DATABASE IF NOT EXISTS employee_management
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
USE employee_management;

SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- roles : lookup for RBAC (admin / hr_manager / employee)
-- ---------------------------------------------------------------------
CREATE TABLE roles (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name        VARCHAR(50)  NOT NULL,
  description VARCHAR(255) NULL,
  created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_roles_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- users : authentication identity. 1:1 with employees.
--   Kept separate from employees so login concerns are isolated from
--   HR profile data. password_hash stores a bcrypt hash (never plaintext).
-- ---------------------------------------------------------------------
CREATE TABLE users (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email         VARCHAR(150) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role_id       INT UNSIGNED NOT NULL,
  is_active     TINYINT(1)   NOT NULL DEFAULT 1,
  last_login_at DATETIME     NULL,
  created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                             ON UPDATE CURRENT_TIMESTAMP,
  deleted_at    DATETIME     NULL,             -- soft delete
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email),
  KEY idx_users_role (role_id),
  CONSTRAINT fk_users_role
    FOREIGN KEY (role_id) REFERENCES roles (id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- refresh_tokens : revocable opaque login tokens
-- ---------------------------------------------------------------------
CREATE TABLE refresh_tokens (
  id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id    INT UNSIGNED NOT NULL,
  token_hash CHAR(64) NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_refresh_token_hash (token_hash),
  KEY idx_refresh_user (user_id),
  CONSTRAINT fk_refresh_user
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- departments : lookup. 1 department -> many employees.
-- ---------------------------------------------------------------------
CREATE TABLE departments (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name        VARCHAR(100) NOT NULL,
  description VARCHAR(255) NULL,
  created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                           ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_departments_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- designations : employee title lookup
-- ---------------------------------------------------------------------
CREATE TABLE designations (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title      VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                         ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_designations_title (title)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- employees : HR profile. 1:1 with users, N:1 with departments,
--   self-referencing for reporting manager (org hierarchy).
-- ---------------------------------------------------------------------
CREATE TABLE employees (
  id                   INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id              INT UNSIGNED NOT NULL,
  employee_code        VARCHAR(30)  NOT NULL,
  first_name           VARCHAR(80)  NOT NULL,
  last_name            VARCHAR(80)  NOT NULL,
  phone                VARCHAR(20)  NULL,
  department_id        INT UNSIGNED NULL,
  designation_id       INT UNSIGNED NULL,
  reporting_manager_id INT UNSIGNED NULL,
  date_of_joining      DATE         NOT NULL,
  status               ENUM('active','inactive') NOT NULL DEFAULT 'active',
  created_at           DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at           DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                                    ON UPDATE CURRENT_TIMESTAMP,
  deleted_at           DATETIME     NULL,      -- soft delete
  PRIMARY KEY (id),
  UNIQUE KEY uq_employees_user (user_id),      -- enforces 1:1 with users
  UNIQUE KEY uq_employees_code (employee_code),
  KEY idx_employees_department (department_id),
  KEY idx_employees_manager (reporting_manager_id),
  CONSTRAINT fk_employees_user
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_employees_department
    FOREIGN KEY (department_id) REFERENCES departments (id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_employees_designation
    FOREIGN KEY (designation_id) REFERENCES designations (id)
    ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT fk_employees_manager
    FOREIGN KEY (reporting_manager_id) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- tasks : administrator-created employee assignments
-- ---------------------------------------------------------------------
CREATE TABLE tasks (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title       VARCHAR(160) NOT NULL,
  description VARCHAR(2000) NOT NULL,
  assigned_to INT UNSIGNED NOT NULL,
  created_by  INT UNSIGNED NOT NULL,
  due_date    DATE NOT NULL,
  status      ENUM('assigned','in_progress','completed') NOT NULL DEFAULT 'assigned',
  created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_tasks_employee (assigned_to),
  KEY idx_tasks_creator (created_by),
  CONSTRAINT fk_tasks_employee FOREIGN KEY (assigned_to) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_tasks_creator FOREIGN KEY (created_by) REFERENCES users (id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- leave_types : annual, sick, etc. 1 type -> many balances/requests.
-- ---------------------------------------------------------------------
CREATE TABLE leave_types (
  id                    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name                  VARCHAR(60)  NOT NULL,
  default_days_per_year DECIMAL(5,1) NOT NULL DEFAULT 0.0,
  is_paid               TINYINT(1)   NOT NULL DEFAULT 1,
  created_at            DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at            DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                                     ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_leave_types_name (name),
  CONSTRAINT chk_leave_types_default_nonneg
    CHECK (default_days_per_year >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO leave_types (name, default_days_per_year, is_paid)
VALUES ('Annual Leave', 15.0, 1)
ON DUPLICATE KEY UPDATE default_days_per_year = VALUES(default_days_per_year);

-- ---------------------------------------------------------------------
-- leave_balances : per employee, per type, per year.
--   UNIQUE(employee, type, year) prevents duplicate allocation rows.
--   remaining_days is GENERATED so it can never drift from allocated/used.
--   CHECK rules keep values non-negative and used <= allocated.
-- ---------------------------------------------------------------------
CREATE TABLE leave_balances (
  id             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  employee_id    INT UNSIGNED NOT NULL,
  leave_type_id  INT UNSIGNED NOT NULL,
  year           SMALLINT UNSIGNED NOT NULL,
  allocated_days DECIMAL(5,1) NOT NULL DEFAULT 0.0,
  used_days      DECIMAL(5,1) NOT NULL DEFAULT 0.0,
  remaining_days DECIMAL(5,1) AS (allocated_days - used_days) VIRTUAL,
  created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                              ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_balance_emp_type_year (employee_id, leave_type_id, year),
  KEY idx_balance_type (leave_type_id),
  CONSTRAINT fk_balance_employee
    FOREIGN KEY (employee_id) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_balance_type
    FOREIGN KEY (leave_type_id) REFERENCES leave_types (id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT chk_balance_allocated_nonneg CHECK (allocated_days >= 0),
  CONSTRAINT chk_balance_used_nonneg      CHECK (used_days >= 0),
  CONSTRAINT chk_balance_used_le_alloc    CHECK (used_days <= allocated_days)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- leave_requests : an employee's application for leave.
--   status workflow: pending -> approved | rejected | cancelled.
--   CHECK guarantees end_date >= start_date and total_days > 0.
--   NOTE (application rule): overlapping date ranges for the same
--   employee cannot be expressed as a UNIQUE constraint in MariaDB and
--   MUST be validated in the API before insert/approve.
--   NOTE (application rule): on approval, increment the matching
--   leave_balances.used_days inside the SAME transaction; on
--   cancel/reject-after-approve, decrement it back.
-- ---------------------------------------------------------------------
CREATE TABLE leave_requests (
  id             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  employee_id    INT UNSIGNED NOT NULL,
  leave_type_id  INT UNSIGNED NOT NULL,
  start_date     DATE         NOT NULL,
  end_date       DATE         NOT NULL,
  total_days     DECIMAL(5,1) NOT NULL,   -- computed in app (holiday-aware)
  reason         VARCHAR(500) NULL,
  status         ENUM('pending','approved','rejected','cancelled')
                              NOT NULL DEFAULT 'pending',
  reviewed_by    INT UNSIGNED NULL,       -- users.id of approver
  review_comment VARCHAR(500) NULL,
  reviewed_at    DATETIME     NULL,
  created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                              ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_lr_employee (employee_id),
  KEY idx_lr_type (leave_type_id),
  KEY idx_lr_status (status),
  KEY idx_lr_dates (start_date, end_date),
  KEY idx_lr_reviewer (reviewed_by),
  CONSTRAINT fk_lr_employee
    FOREIGN KEY (employee_id) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_lr_type
    FOREIGN KEY (leave_type_id) REFERENCES leave_types (id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_lr_reviewer
    FOREIGN KEY (reviewed_by) REFERENCES users (id)
    ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT chk_lr_date_order  CHECK (end_date >= start_date),
  CONSTRAINT chk_lr_total_pos   CHECK (total_days > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- attendance : one row per employee per day.
--   UNIQUE(employee_id, work_date) is the hard guarantee against
--   duplicate attendance entries for the same day.
--   CHECK ensures check_out (if present) is not before check_in.
-- ---------------------------------------------------------------------
CREATE TABLE attendance (
  id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  employee_id  INT UNSIGNED NOT NULL,
  work_date    DATE         NOT NULL,
  check_in     DATETIME     NULL,
  check_out    DATETIME     NULL,
  status       ENUM('present','absent','half_day','leave','holiday','weekend')
                            NOT NULL DEFAULT 'present',
  work_hours   DECIMAL(4,2) NULL,
  remarks      VARCHAR(255) NULL,
  created_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
                            ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_attendance_emp_date (employee_id, work_date),
  KEY idx_attendance_date (work_date),
  KEY idx_attendance_status (status),
  CONSTRAINT fk_attendance_employee
    FOREIGN KEY (employee_id) REFERENCES employees (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT chk_attendance_times
    CHECK (check_out IS NULL OR check_in IS NULL OR check_out >= check_in)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------------------------------------------------------
-- Seed the role lookup (safe to re-run).
-- ---------------------------------------------------------------------
INSERT INTO roles (name, description) VALUES
  ('admin',      'Full system access'),
  ('hr_manager', 'Manage employees and approve leave'),
  ('employee',   'Self-service access')
ON DUPLICATE KEY UPDATE description = VALUES(description);
