import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { Registration } from '../models/registration.model';

/**
 * RegistrationService — admin review of pending self-registrations.
 * Approve provisions a user + employee server-side; reject marks it rejected.
 */
@Injectable({ providedIn: 'root' })
export class RegistrationService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  pending(): Observable<ApiResponse<Registration[]>> {
    return this.http.get<ApiResponse<Registration[]>>(
      `${this.base}/registrations`,
    );
  }

  list(): Observable<ApiResponse<Registration[]>> {
    return this.pending();
  }

  approve(id: number): Observable<ApiResponse<unknown>> {
    return this.http.patch<ApiResponse<unknown>>(
      `${this.base}/registrations/${id}/approve`,
      {},
    );
  }

  reject(id: number): Observable<ApiResponse<unknown>> {
    return this.http.patch<ApiResponse<unknown>>(
      `${this.base}/registrations/${id}/reject`,
      {},
    );
  }

  remove(id: number): Observable<ApiResponse<unknown>> {
    return this.http.delete<ApiResponse<unknown>>(
      `${this.base}/registrations/${id}`,
    );
  }
}
