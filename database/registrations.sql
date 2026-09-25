-- =====================================================================
--  registrations : public self-registration requests.
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
--
--  Deliberately SEPARATE from `users`. Rows here are pending signup
--  requests, NOT login accounts — a registrant cannot authenticate until
--  an admin reviews and provisions a real `users` row from this data.
--  Password is stored as a bcrypt hash, never plaintext.
-- =====================================================================

USE employee_management;

CREATE TABLE IF NOT EXISTS registrations (
  id             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name      VARCHAR(160) NOT NULL,
  email          VARCHAR(150) NOT NULL,
  password_hash  VARCHAR(255) NOT NULL,
  -- Optional org placement chosen at registration; carried onto the employee
  -- record when an admin approves the request. Nullable + ON DELETE SET NULL
  -- so removing a department/designation never blocks or orphans a signup.
  department_id  INT UNSIGNED NULL,
  designation_id INT UNSIGNED NULL,
  status         ENUM('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_registrations_email (email),
  KEY idx_registrations_department (department_id),
  KEY idx_registrations_designation (designation_id),
  CONSTRAINT fk_registrations_department
    FOREIGN KEY (department_id) REFERENCES departments (id)
    ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT fk_registrations_designation
    FOREIGN KEY (designation_id) REFERENCES designations (id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Migration for EXISTING installs that already have the registrations
-- table without these columns. Safe to run once; skip if starting fresh.
-- (MariaDB has no "ADD COLUMN IF NOT EXISTS" in 10.4 for FKs, so run the
--  ALTER only if the columns are absent.)
-- ---------------------------------------------------------------------
-- ALTER TABLE registrations
--   ADD COLUMN department_id  INT UNSIGNED NULL AFTER password_hash,
--   ADD COLUMN designation_id INT UNSIGNED NULL AFTER department_id,
--   ADD KEY idx_registrations_department (department_id),
--   ADD KEY idx_registrations_designation (designation_id),
--   ADD CONSTRAINT fk_registrations_department
--     FOREIGN KEY (department_id) REFERENCES departments (id)
--     ON UPDATE CASCADE ON DELETE SET NULL,
--   ADD CONSTRAINT fk_registrations_designation
--     FOREIGN KEY (designation_id) REFERENCES designations (id)
--     ON UPDATE CASCADE ON DELETE SET NULL;
