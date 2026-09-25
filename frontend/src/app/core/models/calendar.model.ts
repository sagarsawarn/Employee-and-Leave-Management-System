/**
 * Team Leave Calendar types — mirror the /calendar API payload.
 * Note: leave entries never include a reason (privacy — enforced server-side).
 */

export interface CalendarHoliday {
  id: number;
  name: string;
  holiday_date: string; // YYYY-MM-DD
  description: string | null;
}

export interface CalendarLeave {
  id: number;
  employee_id: number;
  employee_name: string;
  department_id: number | null;
  department_name: string | null;
  leave_type_name: string;
  start_date: string; // YYYY-MM-DD
  end_date: string; // YYYY-MM-DD
  total_days: number;
}

/** data payload of GET /calendar. availability maps 'YYYY-MM-DD' -> count. */
export interface CalendarData {
  from: string;
  to: string;
  holidays: CalendarHoliday[];
  leave: CalendarLeave[];
  availability: Record<string, number>;
  scope: 'all' | 'self_department';
}
