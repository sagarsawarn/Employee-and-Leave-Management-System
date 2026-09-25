-- =====================================================================
--  Add a short description to holidays + fill in the 2026 gazetted list.
--  Target: MariaDB 10.4.24 (XAMPP)  |  DB: employee_management
--  Safe to re-run: column add is guarded; descriptions upsert by date.
-- =====================================================================

USE employee_management;

SET @has_desc := (SELECT COUNT(*) FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA='employee_management' AND TABLE_NAME='holidays'
    AND COLUMN_NAME='description');
SET @sql := IF(@has_desc = 0,
  'ALTER TABLE holidays ADD COLUMN description VARCHAR(400) NULL AFTER name',
  'SELECT 1');
PREPARE s FROM @sql; EXECUTE s; DEALLOCATE PREPARE s;

-- Brief (2-3 line) descriptions for the 2026 gazetted holidays.
UPDATE holidays SET description =
  'Marks the day India\'s Constitution came into effect in 1950, establishing the country as a republic. Celebrated nationwide with flag hoisting and a grand parade in New Delhi.'
  WHERE holiday_date = '2026-01-26';

UPDATE holidays SET description =
  'The festival of colours, marking the arrival of spring and the triumph of good over evil. Celebrated by playing with coloured powders and water, and sharing sweets with family and friends.'
  WHERE holiday_date = '2026-03-04';

UPDATE holidays SET description =
  'Eid-ul-Fitr marks the end of the holy month of Ramadan, a period of fasting and reflection for Muslims. Celebrated with prayers, feasting, and charity.'
  WHERE holiday_date = '2026-03-21';

UPDATE holidays SET description =
  'Celebrates the birth of Lord Rama, an incarnation of Vishnu and the hero of the Ramayana. Observed with prayers, readings of the Ramayana, and processions.'
  WHERE holiday_date = '2026-03-26';

UPDATE holidays SET description =
  'Commemorates the birth of Lord Mahavira, the 24th Tirthankara of Jainism, who taught non-violence and truth. Jains observe it with temple visits and charitable acts.'
  WHERE holiday_date = '2026-03-31';

UPDATE holidays SET description =
  'A solemn Christian holiday commemorating the crucifixion of Jesus Christ. Observed with prayer, fasting, and church services ahead of Easter Sunday.'
  WHERE holiday_date = '2026-04-03';

UPDATE holidays SET description =
  'Celebrates the birth, enlightenment, and death of Gautam Buddha, founder of Buddhism. Buddhists mark the day with prayers, meditation, and visits to monasteries.'
  WHERE holiday_date = '2026-05-01';

UPDATE holidays SET description =
  'Eid-ul-Zuha (Bakrid) commemorates Prophet Ibrahim\'s willingness to sacrifice his son in obedience to God. Observed with prayers, and the ritual sacrifice of an animal shared with family and the needy.'
  WHERE holiday_date = '2026-05-27';

UPDATE holidays SET description =
  'A solemn month for Muslims, especially its 10th day (Ashura), commemorating the martyrdom of Imam Hussain at the Battle of Karbala. Marked with mourning processions and reflection.'
  WHERE holiday_date = '2026-06-26';

UPDATE holidays SET description =
  'Commemorates India\'s independence from British rule in 1947. Celebrated nationwide with flag hoisting, the Prime Minister\'s address from the Red Fort, and patriotic events.'
  WHERE holiday_date = '2026-08-15';

UPDATE holidays SET description =
  'Milad-un-Nabi marks the birth anniversary of Prophet Muhammad. Observed by Muslims with prayers, recitations, and processions celebrating his life and teachings.'
  WHERE holiday_date = '2026-08-26';

UPDATE holidays SET description =
  'Celebrates the birth of Lord Krishna, an incarnation of Vishnu. Observed with fasting, devotional singing, and reenactments of his childhood at midnight.'
  WHERE holiday_date = '2026-09-04';

UPDATE holidays SET description =
  'Marks the birth anniversary of Mahatma Gandhi, the leader of India\'s non-violent independence movement. Observed nationally as a day of remembrance and non-violence.'
  WHERE holiday_date = '2026-10-02';

UPDATE holidays SET description =
  'Dussehra celebrates the victory of good over evil, marking the end of Navratri and, in North India, Lord Rama\'s victory over the demon king Ravana.'
  WHERE holiday_date = '2026-10-20';

UPDATE holidays SET description =
  'The festival of lights, symbolising the victory of light over darkness and good over evil. Celebrated with oil lamps, fireworks, sweets, and family gatherings.'
  WHERE holiday_date = '2026-11-08';

UPDATE holidays SET description =
  'Celebrates the birth anniversary of Guru Nanak Dev, the founder of Sikhism. Marked with prayers, hymn recitals, and processions at gurdwaras.'
  WHERE holiday_date = '2026-11-24';

UPDATE holidays SET description =
  'Celebrates the birth of Jesus Christ, observed by Christians worldwide with church services, festive meals, and gift-giving with family and friends.'
  WHERE holiday_date = '2026-12-25';
