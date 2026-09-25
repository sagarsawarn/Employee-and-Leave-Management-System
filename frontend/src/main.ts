import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Standalone bootstrap. No AppModule — the root component and its providers
 * (router, HttpClient, interceptors) are wired via appConfig. This is the
 * Angular 21 standalone approach; no NgModule bootstrap is required.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
