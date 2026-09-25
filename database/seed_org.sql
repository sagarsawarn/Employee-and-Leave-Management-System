-- =====================================================================
--  Seed data: office departments + designations
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
--
--  Populates the dropdowns on the registration and employee forms.
--  Safe to run multiple times — ON DUPLICATE KEY UPDATE means re-running
--  won't create duplicates (name/title are UNIQUE).
-- =====================================================================

USE employee_management;

-- ---------------------------------------------------------------------
-- Departments — typical office departments.
-- ---------------------------------------------------------------------
INSERT INTO departments (name, description) VALUES
  ('Human Resources',   'Recruitment, payroll, employee relations'),
  ('Finance & Accounts','Accounting, budgeting, payroll processing'),
  ('Information Technology', 'Software, infrastructure, and support'),
  ('Engineering',       'Product design and development'),
  ('Sales',             'Revenue generation and client acquisition'),
  ('Marketing',         'Branding, campaigns, and communications'),
  ('Operations',        'Day-to-day business operations'),
  ('Customer Support',  'Client assistance and issue resolution'),
  ('Administration',    'Office administration and facilities'),
  ('Legal & Compliance','Contracts, regulatory, and legal affairs'),
  ('Research & Development', 'Innovation and new product research'),
  ('Procurement',       'Purchasing and vendor management')
ON DUPLICATE KEY UPDATE description = VALUES(description);

-- ---------------------------------------------------------------------
-- Designations — common job titles across departments.
-- ---------------------------------------------------------------------
INSERT INTO designations (title) VALUES
  ('Intern'),
  ('Junior Associate'),
  ('Associate'),
  ('Senior Associate'),
  ('Executive'),
  ('Senior Executive'),
  ('Team Lead'),
  ('Assistant Manager'),
  ('Manager'),
  ('Senior Manager'),
  ('Software Engineer'),
  ('Senior Software Engineer'),
  ('HR Specialist'),
  ('Accountant'),
  ('Director'),
  ('Vice President')
ON DUPLICATE KEY UPDATE title = VALUES(title);
