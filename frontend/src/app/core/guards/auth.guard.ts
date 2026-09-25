import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

/**
 * Blocks routes when no access token is present, redirecting to /login.
 *
 * Functional guard (CanActivateFn): the standalone-era guard style — a plain
 * function using inject(), no @Injectable class needed.
 *
 * IMPORTANT: this is a UX gate only. The API independently verifies the JWT
 * and role on every request, so a user editing client state cannot gain
 * access to protected data.
 */
export const authGuard: CanActivateFn = () => {
  const storage = inject(TokenStorageService);
  const router = inject(Router);

  if (storage.accessToken) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
