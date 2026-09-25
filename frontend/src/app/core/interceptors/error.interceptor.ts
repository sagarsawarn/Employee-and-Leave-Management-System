import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { TokenStorageService } from '../services/token-storage.service';

/**
 * Central HTTP error handling. Rather than each component guessing at error
 * shapes, this normalizes them:
 *  - 401: session is dead/invalid -> clear tokens and bounce to /login.
 *  - everything else: re-thrown so the calling component can show a
 *    contextual message (it still receives the parsed envelope).
 *
 * We intentionally do NOT auto-retry 401 with a refresh here to keep the flow
 * simple and avoid loops; refresh is an explicit AuthService call. This is a
 * deliberate tradeoff noted for review.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const storage = inject(TokenStorageService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const isAuthCall = req.url.includes('/auth/login');
      if (err.status === 401 && !isAuthCall) {
        storage.clear();
        router.navigate(['/login']);
      }
      return throwError(() => err);
    }),
  );
};
