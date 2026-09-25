/**
 * Employee domain types, matching the approved DB schema + API contract.
 */

export type EmployeeStatus = 'active' | 'inactive';

export interface Department {
  id: number;
  name: string;
}

export interface Designation {
  id: number;
  title: string;
  department_id: number | null;
}

/** A row as returned by GET /employees and /employees/{id}. */
export interface Employee {
  id: number;
  user_id: number;
  employee_code: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  department_id: number | null;
  department_name?: string | null;
  designation_id: number | null;
  designation_title?: string | null;
  reporting_manager_id: number | null;
  date_of_joining: string; // ISO date
  status: EmployeeStatus;
}

/** Payload for create/update (server assigns id, timestamps). */
export interface EmployeePayload {
  employee_code: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  department_id: number | null;
  designation_id: number | null;
  reporting_manager_id: number | null;
  date_of_joining: string;
  status: EmployeeStatus;
  // For create only — the linked login account.
  email?: string;
  password?: string;
}

/** Query params accepted by GET /employees. */
export interface EmployeeQuery {
  q?: string;
  department_id?: number | null;
  page?: number;
  per_page?: number;
}

/** Paginated list envelope (data payload of GET /employees). */
export interface PaginatedEmployees {
  items: Employee[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
