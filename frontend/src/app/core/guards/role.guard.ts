import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/auth.model';

/**
 * Factory guard: returns a CanActivateFn restricted to the given roles.
 * Usage in routes: canActivate: [roleGuard(['admin','hr_manager'])].
 *
 * A factory lets each route declare its own allowed roles while reusing one
 * implementation. Like authGuard, this is UX only — the server is the real
 * authorization boundary and re-checks the role from the signed JWT.
 *
 * If the user object isn't hydrated yet (e.g. hard refresh), we allow through
 * when a token exists and let the server + /auth/me reconcile; the API will
 * reject with 403 if the role is wrong.
 */
export function roleGuard(allowed: Role[]): CanActivateFn {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const role = auth.role();
    if (role === null) {
      // Not yet hydrated — defer to server checks rather than false-blocking.
      return true;
    }
    if (allowed.includes(role)) {
      return true;
    }
    return router.createUrlTree(['/dashboard']);
  };
}
