/**
 * Leave domain types, matching the approved schema + API contract.
 */

export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

export interface LeaveType {
  id: number;
  name: string;
  default_days_per_year: number;
  is_paid: boolean;
}

export interface LeaveBalance {
  id: number;
  leave_type_id: number;
  leave_type_name?: string;
  year: number;
  allocated_days: number;
  used_days: number;
  remaining_days: number;
}

export interface LeaveApplication {
  id: number;
  employee_id: number;
  employee_name?: string;
  leave_type_id: number;
  leave_type_name?: string;
  start_date: string;
  end_date: string;
  total_days: number;
  reason: string | null;
  status: LeaveStatus;
  review_comment: string | null;
  created_at: string;
}

/** Payload for POST /leave-applications. */
export interface LeaveApplyPayload {
  leave_type_id: number;
  start_date: string;
  end_date: string;
  reason: string;
}

/** Query for the approvals queue. */
export interface LeaveQuery {
  status?: LeaveStatus;
  employee_id?: number;
}

/** Row for the admin dashboard "who's on leave" panel. */
export interface OnLeaveEntry {
  id: number;
  employee_id: number;
  employee_name: string;
  employee_code: string;
  leave_type_name: string;
  start_date: string;
  end_date: string;
  total_days: number;
}
