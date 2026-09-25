import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

/**
 * Attaches the Bearer access token to outgoing API requests.
 *
 * Functional interceptor (HttpInterceptorFn): the standalone-era replacement
 * for class-based HTTP_INTERCEPTORS — registered in app.config via
 * withInterceptors, no provider boilerplate.
 *
 * The auth endpoints themselves are skipped so login/refresh/logout aren't
 * sent a (possibly stale) token.
 */
export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const storage = inject(TokenStorageService);
  const token = storage.accessToken;

  const isAuthCall =
    req.url.includes('/auth/login') ||
    req.url.includes('/auth/register') ||
    req.url.includes('/auth/refresh') ||
    req.url.includes('/auth/logout');

  if (token && !isAuthCall) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
  return next(req);
};
