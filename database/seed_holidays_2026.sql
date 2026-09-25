-- =====================================================================
--  Government (gazetted) holidays — India 2026
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
--
--  Source: Government of India DOPT central-government gazetted holiday
--  list for 2026 (17 gazetted holidays). Fixed national holidays repeat
--  yearly (Republic Day Jan 26, Independence Day Aug 15, Gandhi Jayanti
--  Oct 2); festival dates are the confirmed 2026 dates.
--
--  Safe to re-run: holiday_date is UNIQUE and ON DUPLICATE KEY UPDATE
--  refreshes the name without creating duplicates.
-- =====================================================================

USE employee_management;

INSERT INTO holidays (name, holiday_date) VALUES
  ('Republic Day',                       '2026-01-26'),
  ('Holi',                               '2026-03-04'),
  ('Id-ul-Fitr',                         '2026-03-21'),
  ('Ram Navami',                         '2026-03-26'),
  ('Mahavir Jayanti',                    '2026-03-31'),
  ('Good Friday',                        '2026-04-03'),
  ('Buddha Purnima',                     '2026-05-01'),
  ('Id-ul-Zuha (Bakrid)',                '2026-05-27'),
  ('Muharram',                           '2026-06-26'),
  ('Independence Day',                   '2026-08-15'),
  ('Milad-un-Nabi (Id-e-Milad)',         '2026-08-26'),
  ('Janmashtami',                        '2026-09-04'),
  ('Mahatma Gandhi Birthday',            '2026-10-02'),
  ('Dussehra',                           '2026-10-20'),
  ('Diwali (Deepavali)',                 '2026-11-08'),
  ('Guru Nanak Birthday',                '2026-11-24'),
  ('Christmas Day',                      '2026-12-25')
ON DUPLICATE KEY UPDATE name = VALUES(name);
