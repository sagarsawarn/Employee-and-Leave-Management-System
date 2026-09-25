import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { LeaveService } from '../../core/services/leave.service';
import {
  LeaveApplication,
  LeaveApplyPayload,
  LeaveBalance,
  LeaveType,
} from '../../core/models/leave.model';
import { ApiResponse } from '../../core/models/api-response.model';

import { SpinnerComponent } from '../../shared/components/spinner.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { AlertComponent } from '../../shared/components/alert.component';
import { FieldErrorComponent } from '../../shared/components/field-error.component';

/**
 * LeaveComponent — self-service leave + (for admin/HR) an approvals queue.
 *
 * Angular features and why:
 * - Reactive Forms + a cross-field validator (dateRange): enforces
 *   end_date >= start_date in the form, mirroring the DB CHECK constraint.
 * - Role-gated section: the approvals queue only renders for admin/HR via
 *   AuthService.hasAnyRole. This is UX; the API independently rejects
 *   approve/reject from non-managers, so the gate can't be bypassed.
 * - signals for each async slice (balances, myApps, queue) with independent
 *   loading/error so one failing call doesn't blank the whole page.
 */
@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
    FieldErrorComponent,
  ],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss',
})
export class LeaveComponent implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private leave = inject(LeaveService);
  private route = inject(ActivatedRoute);

  /**
   * Live manager check. Read as a METHOD (not a one-time field) because the
   * role signal may not be hydrated when this component first constructs
   * (e.g. hard refresh); a method re-reads the current role each time so the
   * approvals queue appears once the role is known.
   */
  isManager(): boolean {
    return this.auth.hasAnyRole(['admin', 'hr_manager']);
  }

  types = signal<LeaveType[]>([]);
  balances = signal<LeaveBalance[]>([]);
  myApps = signal<LeaveApplication[]>([]);
  queue = signal<LeaveApplication[]>([]);

  loading = signal(true);
  applyError = signal<string | null>(null);
  applySuccess = signal<string | null>(null);
  actionError = signal<string | null>(null);

  applyForm = this.fb.nonNullable.group(
    {
      leave_type_id: this.fb.control<number | null>(null, {
        validators: [Validators.required],
      }),
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      reason: ['', [Validators.required, Validators.maxLength(500)]],
    },
    { validators: [dateRangeValidator] },
  );

  get f() {
    return this.applyForm.controls;
  }

  ngOnInit(): void {
    // If the role isn't hydrated yet (e.g. hard refresh landed straight on
    // /leave), fetch the current user first so the manager check is correct
    // and the approvals queue loads; otherwise reload immediately.
    if (this.auth.role() === null) {
      this.auth.loadMe().subscribe({
        next: () => this.reload(),
        error: () => this.reload(),
      });
    } else {
      this.reload();
    }

    // Prefill the apply form when arriving from the calendar with a date
    // (e.g. /leave?start=2026-09-10). Defaults end to the same day.
    const start = this.route.snapshot.queryParamMap.get('start');
    if (start) {
      const end = this.route.snapshot.queryParamMap.get('end') || start;
      this.applyForm.patchValue({ start_date: start, end_date: end });
    }
  }

  private reload(): void {
    this.loading.set(true);
    this.leave.types().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) this.types.set(res.data);
      },
      error: () => {},
    });
    this.leave.myBalances().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) this.balances.set(res.data);
      },
      error: () => {},
    });
    this.leave.myApplications().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === 'success' && res.data) this.myApps.set(res.data);
      },
      error: () => this.loading.set(false),
    });
    if (this.isManager()) {
      this.leave.queue({ status: 'pending' }).subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data) this.queue.set(res.data);
        },
        error: () => {},
      });
    }
  }

  submitApply(): void {
    this.applyError.set(null);
    this.applySuccess.set(null);
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();
      return;
    }
    const v = this.applyForm.getRawValue();
    const payload: LeaveApplyPayload = {
      leave_type_id: v.leave_type_id as number,
      start_date: v.start_date,
      end_date: v.end_date,
      reason: v.reason,
    };
    this.leave.apply(payload).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.applySuccess.set('Leave application submitted.');
          this.applyForm.reset({ leave_type_id: null });
          this.reload();
        } else {
          this.applyError.set(res.message || 'Failed to submit.');
        }
      },
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        // Surface the specific field errors (previously swallowed), so the
        // user sees WHICH field failed rather than a bare "Validation failed".
        let msg = body?.message ?? 'Failed to submit application.';
        if (body?.errors) {
          const details = Object.values(body.errors).join(' ');
          if (details) msg = `${msg}: ${details}`;
        }
        this.applyError.set(msg);
      },
    });
  }

  cancelApp(app: LeaveApplication): void {
    this.actionError.set(null);
    this.leave.cancel(app.id).subscribe({
      next: () => this.reload(),
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        this.actionError.set(body?.message ?? 'Failed to cancel.');
      },
    });
  }

  decide(app: LeaveApplication, approve: boolean): void {
    this.actionError.set(null);
    const call$ = approve
      ? this.leave.approve(app.id, '')
      : this.leave.reject(app.id, '');
    call$.subscribe({
      next: () => this.reload(),
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        this.actionError.set(body?.message ?? 'Action failed.');
      },
    });
  }

  badgeClass(status: string): string {
    return `badge badge-${status}`;
  }
}

/**
 * Cross-field validator: end_date must not precede start_date.
 * Attached at the group level so it can compare two controls.
 */
function dateRangeValidator(
  group: AbstractControl,
): ValidationErrors | null {
  const start = group.get('start_date')?.value;
  const end = group.get('end_date')?.value;
  if (start && end && end < start) {
    return { dateRange: true };
  }
  return null;
}
