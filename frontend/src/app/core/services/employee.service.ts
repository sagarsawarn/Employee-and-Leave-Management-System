import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import {
  Department,
  Designation,
  Employee,
  EmployeePayload,
  EmployeeQuery,
  PaginatedEmployees,
} from '../models/employee.model';

/**
 * EmployeeService — all employee/org HTTP access in one typed place.
 *
 * Why a dedicated service: components stay free of URL/HTTP details, calls
 * are typed end-to-end via ApiResponse<T>, and the JWT is attached
 * automatically by the auth interceptor (nothing to wire here).
 */
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  list(query: EmployeeQuery): Observable<ApiResponse<PaginatedEmployees>> {
    let params = new HttpParams();
    if (query.q) params = params.set('q', query.q);
    if (query.department_id != null) {
      params = params.set('department_id', String(query.department_id));
    }
    if (query.page != null) params = params.set('page', String(query.page));
    if (query.per_page != null) {
      params = params.set('per_page', String(query.per_page));
    }
    return this.http.get<ApiResponse<PaginatedEmployees>>(
      `${this.base}/employees`,
      { params },
    );
  }

  get(id: number): Observable<ApiResponse<Employee>> {
    return this.http.get<ApiResponse<Employee>>(`${this.base}/employees/${id}`);
  }

  create(payload: EmployeePayload): Observable<ApiResponse<Employee>> {
    return this.http.post<ApiResponse<Employee>>(
      `${this.base}/employees`,
      payload,
    );
  }

  update(
    id: number,
    payload: EmployeePayload,
  ): Observable<ApiResponse<Employee>> {
    return this.http.put<ApiResponse<Employee>>(
      `${this.base}/employees/${id}`,
      payload,
    );
  }

  remove(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/employees/${id}`);
  }

  departments(): Observable<ApiResponse<Department[]>> {
    return this.http.get<ApiResponse<Department[]>>(`${this.base}/departments`);
  }

  designations(): Observable<ApiResponse<Designation[]>> {
    return this.http.get<ApiResponse<Designation[]>>(
      `${this.base}/designations`,
    );
  }
}
