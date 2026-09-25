import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

/**
 * Root application providers (standalone equivalent of AppModule imports).
 * - provideRouter: registers routes without RouterModule.
 * - provideHttpClient + withInterceptors: functional interceptors attach the
 *   JWT to outgoing requests and normalize errors — no class boilerplate.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authTokenInterceptor, errorInterceptor]),
    ),
  ],
};
