import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';
import { ApiResponse } from '../../core/models/api-response.model';
import { LoginResult } from '../../core/models/auth.model';

/**
 * AdminLoginComponent — dedicated administrator sign-in.
 *
 * Uses the same /auth/login API (there is no separate admin credential
 * store — an admin is a user whose role is 'admin'). The distinction is
 * enforced here: after a successful login we verify the returned role is
 * 'admin'; if not, we immediately log the user back out and refuse. The
 * server still authorizes every request by role, so this is a UX gate on
 * top of real security, not a replacement for it.
 */
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './login.component.scss',
})
export class AdminLoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loading = signal(false);
  serverError = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }

  submit(): void {
    this.serverError.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.auth.login(this.form.getRawValue()).subscribe({
      next: (res: ApiResponse<LoginResult>) => {
        this.loading.set(false);
        if (res.status !== 'success' || !res.data) {
          this.serverError.set(res.message || 'Login failed');
          return;
        }
        // Admin-only gate: reject non-admin accounts on this page.
        if (res.data.user.role !== 'admin') {
          this.auth.logout();
          this.serverError.set(
            'This account is not an administrator. Use the regular sign-in page.',
          );
          return;
        }
        this.router.navigate(['/dashboard']);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        const body = err.error as ApiResponse<unknown> | undefined;
        this.serverError.set(
          body?.message ?? 'Unable to reach the server. Please try again.',
        );
      },
    });
  }
}
