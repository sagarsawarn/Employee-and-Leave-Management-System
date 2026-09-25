-- =====================================================================
--  Make designations department-specific + seed them.
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
--
--  The original designations table had a UNIQUE title and no department
--  link (and the API/query already expected department_id, so it was
--  effectively broken). This script:
--    1. adds department_id (FK -> departments)
--    2. replaces UNIQUE(title) with UNIQUE(department_id, title) so the
--       same title can exist under different departments
--    3. clears old generic rows and re-seeds titles scoped per department
--
--  Safe to re-run: the ALTERs are guarded by conditional checks and the
--  seed clears department-scoped rows first.
-- =====================================================================

USE employee_management;

-- --- 1 & 2: schema change (only if department_id is missing) ---------
-- Drop the old UNIQUE(title) if present.
SET @has_uq := (SELECT COUNT(*) FROM information_schema.STATISTICS
  WHERE TABLE_SCHEMA = 'employee_management'
    AND TABLE_NAME = 'designations'
    AND INDEX_NAME = 'uq_designations_title');
SET @sql := IF(@has_uq > 0,
  'ALTER TABLE designations DROP INDEX uq_designations_title', 'SELECT 1');
PREPARE s FROM @sql; EXECUTE s; DEALLOCATE PREPARE s;

-- Add department_id if not already there.
SET @has_col := (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = 'employee_management'
    AND TABLE_NAME = 'designations'
    AND COLUMN_NAME = 'department_id');
SET @sql := IF(@has_col = 0,
  'ALTER TABLE designations
     ADD COLUMN department_id INT UNSIGNED NULL AFTER title,
     ADD KEY idx_designations_department (department_id),
     ADD CONSTRAINT fk_designations_department
       FOREIGN KEY (department_id) REFERENCES departments (id)
       ON UPDATE CASCADE ON DELETE CASCADE,
     ADD UNIQUE KEY uq_designation_dept_title (department_id, title)',
  'SELECT 1');
PREPARE s FROM @sql; EXECUTE s; DEALLOCATE PREPARE s;

-- --- 3: re-seed -------------------------------------------------------
-- Remove existing designations so we can insert department-scoped ones
-- cleanly. (Employees reference designation_id via ON DELETE SET NULL, so
-- any existing links are nulled, not blocked — re-assign on the edit page.)
SET FOREIGN_KEY_CHECKS = 0;
DELETE FROM designations;
ALTER TABLE designations AUTO_INCREMENT = 1;
SET FOREIGN_KEY_CHECKS = 1;

-- Insert titles per department, resolving department_id by name so this
-- stays correct regardless of the department id ordering.
INSERT INTO designations (title, department_id)
SELECT t.title, d.id
FROM departments d
JOIN (
  -- Human Resources
  SELECT 'Human Resources' AS dept, 'HR Executive'       AS title UNION ALL
  SELECT 'Human Resources', 'HR Specialist'              UNION ALL
  SELECT 'Human Resources', 'Recruiter'                  UNION ALL
  SELECT 'Human Resources', 'HR Manager'                 UNION ALL

  -- Finance & Accounts
  SELECT 'Finance & Accounts', 'Accountant'              UNION ALL
  SELECT 'Finance & Accounts', 'Financial Analyst'       UNION ALL
  SELECT 'Finance & Accounts', 'Accounts Payable Clerk'  UNION ALL
  SELECT 'Finance & Accounts', 'Finance Manager'         UNION ALL

  -- Information Technology
  SELECT 'Information Technology', 'Software Engineer'    UNION ALL
  SELECT 'Information Technology', 'Senior Software Engineer' UNION ALL
  SELECT 'Information Technology', 'DevOps Engineer'      UNION ALL
  SELECT 'Information Technology', 'IT Support Specialist' UNION ALL
  SELECT 'Information Technology', 'IT Manager'           UNION ALL

  -- Engineering
  SELECT 'Engineering', 'Design Engineer'                UNION ALL
  SELECT 'Engineering', 'QA Engineer'                    UNION ALL
  SELECT 'Engineering', 'Engineering Lead'               UNION ALL
  SELECT 'Engineering', 'Engineering Manager'            UNION ALL

  -- Sales
  SELECT 'Sales', 'Sales Representative'                 UNION ALL
  SELECT 'Sales', 'Account Executive'                    UNION ALL
  SELECT 'Sales', 'Sales Manager'                        UNION ALL
  SELECT 'Sales', 'Regional Sales Head'                  UNION ALL

  -- Marketing
  SELECT 'Marketing', 'Marketing Executive'              UNION ALL
  SELECT 'Marketing', 'Content Specialist'               UNION ALL
  SELECT 'Marketing', 'SEO Analyst'                      UNION ALL
  SELECT 'Marketing', 'Marketing Manager'                UNION ALL

  -- Operations
  SELECT 'Operations', 'Operations Associate'            UNION ALL
  SELECT 'Operations', 'Operations Analyst'              UNION ALL
  SELECT 'Operations', 'Operations Manager'              UNION ALL

  -- Customer Support
  SELECT 'Customer Support', 'Support Agent'             UNION ALL
  SELECT 'Customer Support', 'Senior Support Agent'      UNION ALL
  SELECT 'Customer Support', 'Support Team Lead'         UNION ALL
  SELECT 'Customer Support', 'Support Manager'           UNION ALL

  -- Administration
  SELECT 'Administration', 'Office Assistant'            UNION ALL
  SELECT 'Administration', 'Administrative Officer'      UNION ALL
  SELECT 'Administration', 'Admin Manager'               UNION ALL

  -- Legal & Compliance
  SELECT 'Legal & Compliance', 'Legal Associate'         UNION ALL
  SELECT 'Legal & Compliance', 'Compliance Officer'      UNION ALL
  SELECT 'Legal & Compliance', 'Legal Counsel'           UNION ALL

  -- Research & Development
  SELECT 'Research & Development', 'Research Associate'   UNION ALL
  SELECT 'Research & Development', 'Research Scientist'   UNION ALL
  SELECT 'Research & Development', 'R&D Lead'             UNION ALL

  -- Procurement
  SELECT 'Procurement', 'Procurement Officer'            UNION ALL
  SELECT 'Procurement', 'Purchasing Specialist'          UNION ALL
  SELECT 'Procurement', 'Procurement Manager'
) AS t ON t.dept = d.name;

-- ---------------------------------------------------------------------
-- Ensure every department also offers an "Intern" designation.
-- Idempotent: only inserts where the (department, 'Intern') pair is absent.
-- ---------------------------------------------------------------------
INSERT INTO designations (title, department_id)
SELECT 'Intern', d.id
FROM departments d
WHERE NOT EXISTS (
  SELECT 1 FROM designations dg
  WHERE dg.department_id = d.id AND dg.title = 'Intern'
);
