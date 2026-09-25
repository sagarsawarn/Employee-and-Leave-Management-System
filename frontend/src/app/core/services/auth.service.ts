import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';
import {
  AuthUser,
  LoginRequest,
  LoginResult,
  RefreshResult,
  RegisterRequest,
  RegisterResult,
  Role,
} from '../models/auth.model';
import { TokenStorageService } from './token-storage.service';

/**
 * AuthService — owns authentication state and the auth API calls.
 *
 * Why signals: the current user is synchronous state that guards and the nav
 * read directly. A signal exposes it without subscription plumbing, and
 * `computed` derives isAuthenticated / role cleanly.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private storage = inject(TokenStorageService);
  private base = environment.apiBaseUrl;

  /** Current user, hydrated lazily via /auth/me when a token exists. */
  private _user = signal<AuthUser | null>(null);
  readonly user = this._user.asReadonly();
  readonly isAuthenticated = computed(
    () => this._user() !== null || this.storage.accessToken !== null,
  );
  readonly role = computed<Role | null>(() => this._user()?.role ?? null);

  login(payload: LoginRequest): Observable<ApiResponse<LoginResult>> {
    return this.http
      .post<ApiResponse<LoginResult>>(`${this.base}/auth/login`, payload)
      .pipe(
        tap((res) => {
          if (res.status === 'success' && res.data) {
            this.storage.setTokens(res.data.tokens);
            this._user.set(res.data.user);
          }
        }),
      );
  }

  /**
   * Submit a public self-registration request. Stored server-side in the
   * separate `registrations` table; does not log the user in.
   */
  register(payload: RegisterRequest): Observable<ApiResponse<RegisterResult>> {
    return this.http.post<ApiResponse<RegisterResult>>(
      `${this.base}/auth/register`,
      payload,
    );
  }

  /** Public department list for the (unauthenticated) registration form. */
  publicDepartments(): Observable<ApiResponse<{ id: number; name: string }[]>> {
    return this.http.get<ApiResponse<{ id: number; name: string }[]>>(
      `${this.base}/departments/public`,
    );
  }

  /** Public designation list for the (unauthenticated) registration form. */
  publicDesignations(): Observable<
    ApiResponse<{ id: number; title: string; department_id: number | null }[]>
  > {
    return this.http.get<
      ApiResponse<{ id: number; title: string; department_id: number | null }[]>
    >(`${this.base}/designations/public`);
  }

  /** Load the current user from the server (source of truth for role). */
  loadMe(): Observable<ApiResponse<AuthUser>> {
    return this.http
      .get<ApiResponse<AuthUser>>(`${this.base}/auth/me`)
      .pipe(
        tap((res) => {
          if (res.status === 'success' && res.data) {
            this._user.set(res.data);
          }
        }),
      );
  }

  refresh(): Observable<ApiResponse<RefreshResult>> {
    const refresh_token = this.storage.refreshToken;
    return this.http
      .post<ApiResponse<RefreshResult>>(`${this.base}/auth/refresh`, {
        refresh_token,
      })
      .pipe(
        tap((res) => {
          if (res.status === 'success' && res.data) {
            this.storage.setTokens(res.data.tokens);
          }
        }),
      );
  }

  logout(): void {
    const refresh_token = this.storage.refreshToken;
    // Fire-and-forget server revocation; clear locally regardless.
    if (refresh_token) {
      this.http
        .post(`${this.base}/auth/logout`, { refresh_token })
        .subscribe({ next: () => {}, error: () => {} });
    }
    this.storage.clear();
    this._user.set(null);
  }

  hasAnyRole(roles: Role[]): boolean {
    const r = this.role();
    return r !== null && roles.includes(r);
  }
}
