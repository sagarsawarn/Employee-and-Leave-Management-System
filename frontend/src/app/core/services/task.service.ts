import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { Task, TaskPayload, TaskStatus } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  list(): Observable<ApiResponse<Task[]>> {
    return this.http.get<ApiResponse<Task[]>>(`${this.base}/tasks`);
  }

  create(payload: TaskPayload): Observable<ApiResponse<Task>> {
    return this.http.post<ApiResponse<Task>>(`${this.base}/tasks`, payload);
  }

  updateStatus(id: number, status: TaskStatus): Observable<ApiResponse<Task>> {
    return this.http.patch<ApiResponse<Task>>(`${this.base}/tasks/${id}`, { status });
  }

  remove(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/tasks/${id}`);
  }
}