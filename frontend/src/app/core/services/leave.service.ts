import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import {
  LeaveApplication,
  LeaveApplyPayload,
  LeaveBalance,
  LeaveQuery,
  LeaveType,
  OnLeaveEntry,
} from '../models/leave.model';

/**
 * LeaveService — all leave endpoints in one typed place.
 * The JWT is attached by the auth interceptor; the API enforces that
 * approve/reject are only honored for admin/HR regardless of the UI.
 */
@Injectable({ providedIn: 'root' })
export class LeaveService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  types(): Observable<ApiResponse<LeaveType[]>> {
    return this.http.get<ApiResponse<LeaveType[]>>(`${this.base}/leave-types`);
  }

  myBalances(): Observable<ApiResponse<LeaveBalance[]>> {
    return this.http.get<ApiResponse<LeaveBalance[]>>(
      `${this.base}/leave-balances/me`,
    );
  }

  apply(
    payload: LeaveApplyPayload,
  ): Observable<ApiResponse<LeaveApplication>> {
    return this.http.post<ApiResponse<LeaveApplication>>(
      `${this.base}/leave-applications`,
      payload,
    );
  }

  myApplications(): Observable<ApiResponse<LeaveApplication[]>> {
    return this.http.get<ApiResponse<LeaveApplication[]>>(
      `${this.base}/leave-applications/me`,
    );
  }

  /** Who is on approved leave now/upcoming (admin/HR dashboard panel). */
  onLeave(): Observable<ApiResponse<OnLeaveEntry[]>> {
    return this.http.get<ApiResponse<OnLeaveEntry[]>>(
      `${this.base}/leave-applications/on-leave`,
    );
  }

  /** Approvals queue (admin/HR). */
  queue(query: LeaveQuery = {}): Observable<ApiResponse<LeaveApplication[]>> {
    let params = new HttpParams();
    if (query.status) params = params.set('status', query.status);
    if (query.employee_id != null) {
      params = params.set('employee_id', String(query.employee_id));
    }
    return this.http.get<ApiResponse<LeaveApplication[]>>(
      `${this.base}/leave-applications`,
      { params },
    );
  }

  approve(
    id: number,
    comment: string,
  ): Observable<ApiResponse<LeaveApplication>> {
    return this.http.patch<ApiResponse<LeaveApplication>>(
      `${this.base}/leave-applications/${id}/approve`,
      { review_comment: comment },
    );
  }

  reject(
    id: number,
    comment: string,
  ): Observable<ApiResponse<LeaveApplication>> {
    return this.http.patch<ApiResponse<LeaveApplication>>(
      `${this.base}/leave-applications/${id}/reject`,
      { review_comment: comment },
    );
  }

  cancel(id: number): Observable<ApiResponse<LeaveApplication>> {
    return this.http.patch<ApiResponse<LeaveApplication>>(
      `${this.base}/leave-applications/${id}/cancel`,
      {},
    );
  }
}
