/**
 * Registration domain types — pending self-registration requests that an
 * admin reviews. Approving one provisions a real user + employee.
 */
export interface Registration {
  id: number;
  full_name: string;
  email: string;
  requested_role: 'employee' | 'hr_manager';
  department_name: string | null;
  designation_title: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export type RegistrationRequest = Registration;
