import { Injectable } from '@angular/core';
import { TokenBundle } from '../models/auth.model';

/**
 * Single owner of token persistence. Isolating localStorage here means the
 * rest of the app never touches storage keys directly, and swapping the
 * strategy (e.g. to sessionStorage) is a one-file change.
 *
 * Note: localStorage is XSS-readable. It's chosen here for simplicity with a
 * SPA + JWT; the short 15-min access-token TTL and server-side refresh
 * revocation limit exposure. A stricter option is httpOnly cookies for the
 * refresh token, which would require backend cookie support.
 */
@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private readonly ACCESS = 'ems.access_token';
  private readonly REFRESH = 'ems.refresh_token';

  setTokens(tokens: TokenBundle): void {
    localStorage.setItem(this.ACCESS, tokens.access_token);
    localStorage.setItem(this.REFRESH, tokens.refresh_token);
  }

  get accessToken(): string | null {
    return localStorage.getItem(this.ACCESS);
  }

  get refreshToken(): string | null {
    return localStorage.getItem(this.REFRESH);
  }

  clear(): void {
    localStorage.removeItem(this.ACCESS);
    localStorage.removeItem(this.REFRESH);
  }
}
