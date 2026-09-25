import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SpinnerComponent } from '../../shared/components/spinner.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';

import { AuthService } from '../../core/services/auth.service';
import { LeaveService } from '../../core/services/leave.service';
import { AttendanceService } from '../../core/services/attendance.service';
import {
  LeaveApplication,
  LeaveBalance,
  OnLeaveEntry,
} from '../../core/models/leave.model';
import { AttendanceRecord } from '../../core/models/attendance.model';

/**
 * DashboardComponent — role-aware landing page.
 *
 * Reads the AuthService.role signal to decide which quick-action cards to
 * show. Admin/HR see employee management; everyone sees leave. This is a
 * convenience surface only — the routes themselves are still guarded and the
 * API enforces authorization.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, SpinnerComponent, EmptyStateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService);
  private leave = inject(LeaveService);
  private attendance = inject(AttendanceService);

  user = this.auth.user;
  role = this.auth.role;
  balances = signal<LeaveBalance[]>([]);
  approvedLeaves = signal<LeaveApplication[]>([]);
  onLeave = signal<OnLeaveEntry[]>([]);
  onLeaveLoading = signal(false);

  // --- attendance (IN/OUT) ---
  todayAttendance = signal<AttendanceRecord | null>(null);
  attendanceBusy = signal(false);
  attendanceError = signal<string | null>(null);

  /** Live clock, updated every second. Shown for all roles. */
  now = signal<Date>(new Date());
  private clockId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    // Tick the live clock once per second.
    this.clockId = setInterval(() => this.now.set(new Date()), 1000);

    // Admin/HR: show who is currently or soon on approved leave.
    if (this.isManager()) {
      this.onLeaveLoading.set(true);
      this.leave.onLeave().subscribe({
        next: (res) => {
          this.onLeaveLoading.set(false);
          if (res.status === 'success' && res.data) this.onLeave.set(res.data);
        },
        error: () => this.onLeaveLoading.set(false),
      });
    }

    if (this.auth.hasAnyRole(['employee'])) {
      this.leave.myBalances().subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data) this.balances.set(res.data);
        },
        error: () => {},
      });
      this.leave.myApplications().subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data) {
            this.approvedLeaves.set(
              res.data.filter((application) => application.status === 'approved'),
            );
          }
        },
        error: () => {},
      });

      // Load today's attendance so IN/OUT buttons reflect current state.
      this.loadToday();
    }
  }

  /** Whether this user should see the IN/OUT panel (has an employee record). */
  isEmployee(): boolean {
    return this.auth.hasAnyRole(['employee']);
  }

  private loadToday(): void {
    this.attendance.today().subscribe({
      next: (res) => {
        if (res.status === 'success') this.todayAttendance.set(res.data ?? null);
      },
      error: () => {},
    });
  }

  checkIn(): void {
    this.attendanceError.set(null);
    this.attendanceBusy.set(true);
    this.attendance.checkIn().subscribe({
      next: (res) => {
        this.attendanceBusy.set(false);
        if (res.status === 'success' && res.data) this.todayAttendance.set(res.data);
      },
      error: (err) => {
        this.attendanceBusy.set(false);
        this.attendanceError.set(err?.error?.message ?? 'Failed to check in.');
      },
    });
  }

  checkOut(): void {
    this.attendanceError.set(null);
    this.attendanceBusy.set(true);
    this.attendance.checkOut().subscribe({
      next: (res) => {
        this.attendanceBusy.set(false);
        if (res.status === 'success' && res.data) this.todayAttendance.set(res.data);
      },
      error: (err) => {
        this.attendanceBusy.set(false);
        this.attendanceError.set(err?.error?.message ?? 'Failed to check out.');
      },
    });
  }

  ngOnDestroy(): void {
    // Stop the clock so the interval doesn't leak after leaving the page.
    if (this.clockId !== null) {
      clearInterval(this.clockId);
    }
  }

  isManager(): boolean {
    return this.auth.hasAnyRole(['admin', 'hr_manager']);
  }
}
