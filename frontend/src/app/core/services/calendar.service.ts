import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { CalendarData } from '../models/calendar.model';

/**
 * CalendarService — team leave calendar data.
 * The server enforces role-based scope; department_id is a hint that admins/HR
 * can use to filter, and is ignored server-side for employees.
 */
@Injectable({ providedIn: 'root' })
export class CalendarService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  /**
   * @param from YYYY-MM-DD (inclusive)
   * @param to   YYYY-MM-DD (inclusive)
   * @param departmentId optional filter (managers/HR only)
   */
  load(
    from: string,
    to: string,
    departmentId: number | null,
  ): Observable<ApiResponse<CalendarData>> {
    let params = new HttpParams().set('from', from).set('to', to);
    if (departmentId != null) {
      params = params.set('department_id', String(departmentId));
    }
    return this.http.get<ApiResponse<CalendarData>>(`${this.base}/calendar`, {
      params,
    });
  }
}
