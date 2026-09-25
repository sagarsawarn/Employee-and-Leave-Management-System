import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root component. Deliberately thin: it only hosts the router outlet so that
 * the login page (no chrome) and the authenticated shell (with nav) can be
 * separate routed layouts rather than everything living under one header.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {}
