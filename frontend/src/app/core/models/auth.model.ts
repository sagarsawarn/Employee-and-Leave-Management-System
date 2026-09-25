/**
 * Auth domain types. Typed models (rather than `any`) give compile-time
 * safety across services, guards, and templates, and document the exact
 * contract the CI3 backend returns.
 */

export type Role = 'admin' | 'hr_manager' | 'employee';

export interface AuthUser {
  id: number;
  email: string;
  role: Role;
}

/** Token bundle returned by /auth/login and /auth/refresh. */
export interface TokenBundle {
  access_token: string;
  refresh_token: string;
  token_type: string; // "Bearer"
  expires_in: number; // seconds
}

/** data payload of POST /auth/login */
export interface LoginResult {
  user: AuthUser;
  tokens: TokenBundle;
}

/** data payload of POST /auth/refresh */
export interface RefreshResult {
  tokens: TokenBundle;
}

export interface LoginRequest {
  email: string;
  password: string;
}

/** Payload for POST /auth/register (public self-registration). */
export interface RegisterRequest {
  full_name: string;
  email: string;
  password: string;
  password_confirm: string;
  department_id: number | null;
  designation_id: number | null;
  requested_role: 'employee' | 'hr_manager';
}

/** data payload of POST /auth/register. */
export interface RegisterResult {
  id: number;
  status: string;
}
