import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { EmployeeService } from '../../core/services/employee.service';
import {
  Department,
  Designation,
  EmployeePayload,
} from '../../core/models/employee.model';
import { ApiResponse } from '../../core/models/api-response.model';

import { SpinnerComponent } from '../../shared/components/spinner.component';
import { AlertComponent } from '../../shared/components/alert.component';
import { FieldErrorComponent } from '../../shared/components/field-error.component';

/**
 * EmployeeFormComponent — single component for both create and edit.
 *
 * Angular features and why:
 * - Reactive Forms (typed nonNullable group): the whole form is data the
 *   component controls, easy to prefill on edit and validate.
 * - ActivatedRoute paramMap: presence of :id switches the component into edit
 *   mode and drives which API call runs on submit.
 * - forkJoin: loads departments + designations (+ the employee on edit) in
 *   parallel so the form shows once everything is ready.
 * - Server error mapping: 422 field errors are pushed back onto the matching
 *   controls as a `server` error, which FieldErrorComponent renders — so the
 *   backend remains the source of truth for validation.
 */
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    SpinnerComponent,
    AlertComponent,
    FieldErrorComponent,
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(EmployeeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  loading = signal(true);
  saving = signal(false);
  error = signal<string | null>(null);

  employeeId = signal<number | null>(null);
  isEdit = signal(false);

  departments = signal<Department[]>([]);
  designations = signal<Designation[]>([]);

  form = this.fb.nonNullable.group({
    employee_code: ['', [Validators.required, Validators.maxLength(30)]],
    first_name: ['', [Validators.required, Validators.maxLength(80)]],
    last_name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    password: [''], // required only in create mode (set in ngOnInit)
    phone: [''],
    department_id: this.fb.control<number | null>(null),
    designation_id: this.fb.control<number | null>(null),
    reporting_manager_id: this.fb.control<number | null>(null),
    date_of_joining: ['', [Validators.required]],
    status: this.fb.nonNullable.control<'active' | 'inactive'>('active', {
      validators: [Validators.required],
    }),
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;
    this.employeeId.set(id);
    this.isEdit.set(id !== null);

    if (id === null) {
      // Create mode: password + email are required and editable.
      this.form.controls.password.addValidators([
        Validators.required,
        Validators.minLength(8),
      ]);
    } else {
      // Edit mode: the linked login isn't changed here, so relax those.
      this.form.controls.email.disable();
      this.form.controls.password.disable();
    }

    // Load lookups (and the employee on edit) in parallel.
    const lookups = {
      departments: this.service.departments(),
      designations: this.service.designations(),
    };

    if (id === null) {
      forkJoin(lookups).subscribe({
        next: (res) => {
          this.applyLookups(res.departments, res.designations);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Failed to load form data.');
          this.loading.set(false);
        },
      });
    } else {
      forkJoin({ ...lookups, employee: this.service.get(id) }).subscribe({
        next: (res) => {
          this.applyLookups(res.departments, res.designations);
          if (res.employee.status === 'success' && res.employee.data) {
            const e = res.employee.data;
            this.form.patchValue({
              employee_code: e.employee_code,
              first_name: e.first_name,
              last_name: e.last_name,
              phone: e.phone ?? '',
              department_id: e.department_id,
              designation_id: e.designation_id,
              reporting_manager_id: e.reporting_manager_id,
              date_of_joining: e.date_of_joining,
              status: e.status,
            });
          } else {
            this.error.set('Employee not found.');
          }
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Failed to load employee.');
          this.loading.set(false);
        },
      });
    }
  }

  private applyLookups(
    depts: ApiResponse<Department[]>,
    desigs: ApiResponse<Designation[]>,
  ): void {
    if (depts.status === 'success' && depts.data) {
      this.departments.set(depts.data);
    }
    if (desigs.status === 'success' && desigs.data) {
      this.designations.set(desigs.data);
    }
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    this.error.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // getRawValue includes disabled controls (email in edit mode is disabled
    // but we don't send it; build the payload explicitly instead).
    const v = this.form.getRawValue();
    const payload: EmployeePayload = {
      employee_code: v.employee_code,
      first_name: v.first_name,
      last_name: v.last_name,
      phone: v.phone || null,
      department_id: v.department_id,
      designation_id: v.designation_id,
      reporting_manager_id: v.reporting_manager_id,
      date_of_joining: v.date_of_joining,
      status: v.status,
    };
    if (!this.isEdit()) {
      payload.email = v.email;
      payload.password = v.password;
    }

    this.saving.set(true);
    const id = this.employeeId();
    const req$ =
      id === null
        ? this.service.create(payload)
        : this.service.update(id, payload);

    req$.subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.status === 'success') {
          this.router.navigate(['/employees']);
        } else {
          this.applyServerErrors(res);
        }
      },
      error: (err: HttpErrorResponse) => {
        this.saving.set(false);
        const body = err.error as ApiResponse<unknown> | undefined;
        if (err.status === 422 && body?.errors) {
          this.applyServerErrors(body as ApiResponse<unknown>);
        } else {
          this.error.set(body?.message ?? 'Failed to save employee.');
        }
      },
    });
  }

  /** Push server-side field errors onto the matching form controls. */
  private applyServerErrors(res: ApiResponse<unknown>): void {
    if (res.errors) {
      for (const [field, message] of Object.entries(res.errors)) {
        const control = this.form.get(field);
        if (control) {
          control.setErrors({ server: message });
          control.markAsTouched();
        }
      }
    }
    this.error.set(res.message || 'Please correct the highlighted fields.');
  }
}
