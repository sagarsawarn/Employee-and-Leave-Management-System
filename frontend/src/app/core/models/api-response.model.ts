/**
 * Mirrors the backend's single JSON envelope:
 *   { status, message, data, errors }
 * Generic over the data payload so each service gets a typed `data`.
 * `errors` is the field->message map returned on 422 validation failures.
 */
export interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T | null;
  errors: Record<string, string> | null;
}
