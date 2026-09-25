import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';
import { ApiResponse } from '../../core/models/api-response.model';

/**
 * LoginComponent — reactive login form.
 *
 * Angular features and why:
 * - Reactive Forms (FormBuilder/FormGroup): validation lives in the component
 *   as data, is unit-testable, and scales better than template-driven forms.
 * - Validators: required + email give instant client feedback; the server
 *   still validates authoritatively.
 * - signals (loading, serverError): local UI state that drives the template
 *   with fine-grained change detection.
 * - standalone component: imports exactly what it needs (no NgModule).
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loading = signal(false);
  serverError = signal<string | null>(null);
  isAdministrator = signal(false);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      this.isAdministrator.set(params.get('administrator') === 'true');
    });
  }

  /** Convenience getters for template validation checks. */
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }

  submit(): void {
    this.serverError.set(null);

    // Guard: block submit and surface errors if the form is invalid.
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.auth.login(this.form.getRawValue()).subscribe({
      next: (res: ApiResponse<unknown>) => {
        this.loading.set(false);
        if (res.status === 'success') {
          this.router.navigate(['/dashboard']);
        } else {
          this.serverError.set(res.message || 'Login failed');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        // The backend returns the envelope even on 401/422.
        const body = err.error as ApiResponse<unknown> | undefined;
        this.serverError.set(
          body?.message ?? 'Unable to reach the server. Please try again.',
        );
      },
    });
  }
}
