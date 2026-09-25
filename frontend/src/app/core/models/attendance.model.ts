/** Attendance types — mirror the attendance API. */

export type AttendanceStatus =
  | 'present'
  | 'absent'
  | 'half_day'
  | 'leave'
  | 'holiday'
  | 'weekend';

export interface AttendanceRecord {
  id: number;
  work_date: string;
  check_in: string | null;
  check_out: string | null;
  status: AttendanceStatus;
  work_hours: number | null;
}
