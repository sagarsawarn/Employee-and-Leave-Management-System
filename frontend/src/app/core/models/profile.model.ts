import { Employee } from './employee.model';
import { LeaveApplication, LeaveBalance } from './leave.model';

/** Employee 360 Profile types — mirror the /employees/{id}/360-profile payload. */

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
  years_experience: number | null;
  updated_at: string;
}

export interface SkillPayload {
  name: string;
  level: SkillLevel;
  years_experience: number | null;
}

export interface PersonalInfo {
  employee_id?: number;
  date_of_birth: string | null;
  gender: 'male' | 'female' | 'other' | 'undisclosed' | null;
  address: string | null;
  work_location: string | null;
  employment_type: 'full_time' | 'part_time' | 'contract' | 'intern' | null;
  emergency_contact_name: string | null;
  emergency_contact_phone: string | null;
  confirmation_date: string | null;
  exit_date: string | null;
}

export interface ProfileSummary {
  approved_leave_count: number;
  approved_leave_days: number;
  available_leave_days: number;
  pending_leave_count: number;
  rejected_leave_count: number;
  employment_duration: string | null;
}

export interface AttendanceHistoryRow {
  id: number;
  work_date: string;
  check_in: string | null;
  check_out: string | null;
  status: string;
  work_hours: number | null;
}

export interface AttendanceSummary {
  available: boolean;
  message?: string;
  present_days?: number;
  history?: AttendanceHistoryRow[];
}

export interface EmployeeActivity {
  id: number;
  event_type: string;
  description: string;
  actor_email: string | null;
  created_at: string;
}

export interface PaginatedActivities {
  items: EmployeeActivity[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

/** Composite 360 payload. */
export interface Profile360 {
  employee: Employee;
  summary: ProfileSummary;
  personal_information: PersonalInfo | null;
  leave_summary: {
    balances: LeaveBalance[];
    recent: LeaveApplication[];
  };
  attendance_summary: AttendanceSummary;
  skills: Skill[];
  recent_activities: PaginatedActivities;
}
