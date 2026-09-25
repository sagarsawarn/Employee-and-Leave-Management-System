import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { AttendanceRecord } from '../models/attendance.model';

/**
 * AttendanceService — self check-in/out + history.
 * Check-in/out act on the authenticated user's own record (server enforced).
 */
@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  today(): Observable<ApiResponse<AttendanceRecord | null>> {
    return this.http.get<ApiResponse<AttendanceRecord | null>>(
      `${this.base}/attendance/today`,
    );
  }

  checkIn(): Observable<ApiResponse<AttendanceRecord>> {
    return this.http.post<ApiResponse<AttendanceRecord>>(
      `${this.base}/attendance/check-in`,
      {},
    );
  }

  checkOut(): Observable<ApiResponse<AttendanceRecord>> {
    return this.http.post<ApiResponse<AttendanceRecord>>(
      `${this.base}/attendance/check-out`,
      {},
    );
  }

  history(employeeId: number): Observable<ApiResponse<AttendanceRecord[]>> {
    return this.http.get<ApiResponse<AttendanceRecord[]>>(
      `${this.base}/attendance/${employeeId}`,
    );
  }
}
