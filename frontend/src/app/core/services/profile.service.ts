import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import {
  PaginatedActivities,
  PersonalInfo,
  Profile360,
  Skill,
  SkillPayload,
} from '../models/profile.model';

/**
 * ProfileService — Employee 360 Profile HTTP access.
 * The server enforces authorization (self or admin/HR); nothing here decides
 * permissions. JWT is attached by the auth interceptor.
 */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  full(employeeId: number): Observable<ApiResponse<Profile360>> {
    return this.http.get<ApiResponse<Profile360>>(
      `${this.base}/employees/${employeeId}/360-profile`,
    );
  }

  /** The caller's own 360 profile (resolves employee from the token). */
  me(): Observable<ApiResponse<Profile360>> {
    return this.http.get<ApiResponse<Profile360>>(
      `${this.base}/employees/me/360-profile`,
    );
  }

  activities(
    employeeId: number,
    page = 1,
  ): Observable<ApiResponse<PaginatedActivities>> {
    const params = new HttpParams().set('page', String(page));
    return this.http.get<ApiResponse<PaginatedActivities>>(
      `${this.base}/employees/${employeeId}/activities`,
      { params },
    );
  }

  skills(employeeId: number): Observable<ApiResponse<Skill[]>> {
    return this.http.get<ApiResponse<Skill[]>>(
      `${this.base}/employees/${employeeId}/skills`,
    );
  }

  addSkill(
    employeeId: number,
    payload: SkillPayload,
  ): Observable<ApiResponse<Skill>> {
    return this.http.post<ApiResponse<Skill>>(
      `${this.base}/employees/${employeeId}/skills`,
      payload,
    );
  }

  updateSkill(
    employeeId: number,
    skillId: number,
    payload: SkillPayload,
  ): Observable<ApiResponse<Skill>> {
    return this.http.put<ApiResponse<Skill>>(
      `${this.base}/employees/${employeeId}/skills/${skillId}`,
      payload,
    );
  }

  deleteSkill(
    employeeId: number,
    skillId: number,
  ): Observable<ApiResponse<unknown>> {
    return this.http.delete<ApiResponse<unknown>>(
      `${this.base}/employees/${employeeId}/skills/${skillId}`,
    );
  }

  /**
   * Save permitted personal fields. Payload is a loose record because it
   * comes from a plain reactive form; the backend whitelists + validates the
   * keys authoritatively (mass-assignment safe there).
   */
  savePersonal(
    employeeId: number,
    payload: Record<string, unknown>,
  ): Observable<ApiResponse<PersonalInfo>> {
    return this.http.put<ApiResponse<PersonalInfo>>(
      `${this.base}/employees/${employeeId}/personal`,
      payload,
    );
  }
}
