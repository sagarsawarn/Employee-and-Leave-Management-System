import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';
import { ApiResponse } from '../../core/models/api-response.model';

interface DeptOption {
  id: number;
  name: string;
}
interface DesigOption {
  id: number;
  title: string;
  department_id: number | null;
}

/**
 * RegisterComponent — public self-registration.
 *
 * Reactive form with a group-level validator (passwordsMatch) so the confirm
 * field is checked against the password. On success the request is stored
 * server-side (separate registrations table) and the user is sent to login
 * with a note that approval is pending — registering does not log them in.
 */
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './login.component.scss',
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loading = signal(false);
  serverError = signal<string | null>(null);
  success = signal<string | null>(null);
  fieldErrors = signal<Record<string, string> | null>(null);

  /** Role being requested; 'hr_manager' when arriving from the HR register
   *  link (?role=hr_manager), otherwise 'employee'. Admin still approves. */
  requestedRole = signal<'employee' | 'hr_manager'>('employee');

  departments = signal<DeptOption[]>([]);
  designations = signal<DesigOption[]>([]);
  /** Currently selected department id, tracked for filtering designations. */
  selectedDepartmentId = signal<number | null>(null);

  /**
   * Designations shown in the dropdown: only those belonging to the selected
   * department (department-specific). Empty until a department is chosen.
   */
  filteredDesignations = computed<DesigOption[]>(() => {
    const deptId = this.selectedDepartmentId();
    if (deptId === null) return [];
    return this.designations().filter((d) => d.department_id === deptId);
  });

  form = this.fb.nonNullable.group(
    {
      full_name: ['', [Validators.required, Validators.maxLength(160)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirm: ['', [Validators.required]],
      department_id: this.fb.control<number | null>(null, [Validators.required]),
      designation_id: this.fb.control<number | null>(null, [Validators.required]),
    },
    { validators: [passwordsMatch] },
  );

  ngOnInit(): void {
    // Load org lists from the public endpoints (no token on this page).
    this.auth.publicDepartments().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) this.departments.set(res.data);
      },
      error: () => {},
    });
    this.auth.publicDesignations().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) this.designations.set(res.data);
      },
      error: () => {},
    });

    // When the department changes, refresh the filtered designation list and
    // clear any previously-picked designation that no longer applies.
    this.form.controls.department_id.valueChanges.subscribe((deptId) => {
      this.selectedDepartmentId.set(deptId);
      this.form.controls.designation_id.setValue(null);
    });

    // Requested role from the query param (HR register link sends
    // ?role=hr_manager). Anything else stays 'employee'.
    if (this.route.snapshot.queryParamMap.get('role') === 'hr_manager') {
      this.requestedRole.set('hr_manager');
    }
  }

  get full_name() {
    return this.form.controls.full_name;
  }
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }
  get password_confirm() {
    return this.form.controls.password_confirm;
  }

  submit(): void {
    this.serverError.set(null);
    this.success.set(null);
    this.fieldErrors.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.auth
      .register({ ...this.form.getRawValue(), requested_role: this.requestedRole() })
      .subscribe({
      next: (res: ApiResponse<unknown>) => {
        this.loading.set(false);
        if (res.status === 'success') {
          this.success.set(
            res.message ||
              'Registration submitted. An administrator will review your request.',
          );
        } else {
          this.serverError.set(res.message || 'Registration failed');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        const body = err.error as ApiResponse<unknown> | undefined;
        if (err.status === 422 && body?.errors) {
          this.fieldErrors.set(body.errors);
        }
        this.serverError.set(
          body?.message ?? 'Unable to reach the server. Please try again.',
        );
      },
    });
  }
}

/** Group validator: password and password_confirm must match. */
function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  const pw = group.get('password')?.value;
  const confirm = group.get('password_confirm')?.value;
  if (pw && confirm && pw !== confirm) {
    return { passwordsMatch: true };
  }
  return null;
}
