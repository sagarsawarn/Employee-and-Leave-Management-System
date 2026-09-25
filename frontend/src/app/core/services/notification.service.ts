import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { PaginatedNotifications } from '../models/notification.model';

/**
 * NotificationService — the current user's in-app notifications.
 * All endpoints are scoped server-side to the authenticated user.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  list(
    page = 1,
    perPage = 15,
  ): Observable<ApiResponse<PaginatedNotifications>> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('per_page', String(perPage));
    return this.http.get<ApiResponse<PaginatedNotifications>>(
      `${this.base}/notifications`,
      { params },
    );
  }

  unreadCount(): Observable<ApiResponse<{ count: number }>> {
    return this.http.get<ApiResponse<{ count: number }>>(
      `${this.base}/notifications/unread-count`,
    );
  }

  markRead(id: number): Observable<ApiResponse<unknown>> {
    return this.http.patch<ApiResponse<unknown>>(
      `${this.base}/notifications/${id}/read`,
      {},
    );
  }

  markAllRead(): Observable<ApiResponse<unknown>> {
    return this.http.patch<ApiResponse<unknown>>(
      `${this.base}/notifications/read-all`,
      {},
    );
  }
}
