import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { CalendarService } from '../../core/services/calendar.service';
import { EmployeeService } from '../../core/services/employee.service';
import { CalendarData, CalendarLeave } from '../../core/models/calendar.model';
import { Department } from '../../core/models/employee.model';
import { ApiResponse } from '../../core/models/api-response.model';

import { SpinnerComponent } from '../../shared/components/spinner.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { AlertComponent } from '../../shared/components/alert.component';

/** One cell in the month grid. */
interface DayCell {
  date: string; // YYYY-MM-DD
  day: number; // day-of-month
  inMonth: boolean; // belongs to the displayed month
  isToday: boolean;
  isWeekend: boolean;
  holidayName: string | null;
  holidayDescription: string | null;
  offCount: number; // people on leave that day
  people: CalendarLeave[]; // who is off (name + type only, no reason)
}

/**
 * CalendarComponent — Team Leave Calendar.
 *
 * A hand-built monthly grid (no external calendar library is used or
 * installed). It shows configured holidays and APPROVED leave, with a
 * per-day availability count. Managers/HR can filter by department; the
 * server locks employees to their own department regardless of the UI.
 *
 * Privacy: only who-is-off + leave type are shown; reasons are never fetched.
 */
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  private auth = inject(AuthService);
  private calendar = inject(CalendarService);
  private employees = inject(EmployeeService);
  private router = inject(Router);

  /** Only employees apply for leave; managers/HR review it. */
  canApply = this.auth.hasAnyRole(['employee']);

  /** Navigate to the leave page with the clicked date prefilled. */
  applyOn(date: string): void {
    this.router.navigate(['/leave'], { queryParams: { start: date, end: date } });
  }

  readonly weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  readonly monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  isManager = this.auth.hasAnyRole(['admin', 'hr_manager']);

  // Displayed month (first-of-month anchor).
  viewYear = signal<number>(new Date().getFullYear());
  viewMonth = signal<number>(new Date().getMonth()); // 0-based

  loading = signal(false);
  error = signal<string | null>(null);
  data = signal<CalendarData | null>(null);

  departments = signal<Department[]>([]);
  selectedDepartment = signal<number | null>(null);

  /** A selected day for the detail panel (who's off). */
  selectedCell = signal<DayCell | null>(null);

  monthLabel = computed(() => `${this.monthNames[this.viewMonth()]} ${this.viewYear()}`);

  /** Holidays that fall in the displayed month, sorted by date — for the
   *  readable "Holidays this month" list below the grid. */
  monthHolidays = computed(() => {
    const d = this.data();
    if (!d) return [];
    return [...d.holidays].sort((a, b) =>
      a.holiday_date.localeCompare(b.holiday_date),
    );
  });

  /** The 6x7 grid of day cells for the current view month. */
  cells = computed<DayCell[]>(() => {
    const year = this.viewYear();
    const month = this.viewMonth();
    const d = this.data();
    const availability = d?.availability ?? {};
    const holidaysByDate = new Map<string, string>();
    const holidayDescByDate = new Map<string, string | null>();
    (d?.holidays ?? []).forEach((h) => {
      holidaysByDate.set(h.holiday_date, h.name);
      holidayDescByDate.set(h.holiday_date, h.description);
    });
    const leaveByDate = this.groupLeaveByDate(d?.leave ?? []);

    const first = new Date(year, month, 1);
    const startOffset = first.getDay(); // 0=Sun
    const gridStart = new Date(year, month, 1 - startOffset);
    const todayStr = this.toStr(new Date());

    const cells: DayCell[] = [];
    for (let i = 0; i < 42; i++) {
      const cur = new Date(
        gridStart.getFullYear(),
        gridStart.getMonth(),
        gridStart.getDate() + i,
      );
      const dateStr = this.toStr(cur);
      const dow = cur.getDay();
      cells.push({
        date: dateStr,
        day: cur.getDate(),
        inMonth: cur.getMonth() === month,
        isToday: dateStr === todayStr,
        isWeekend: dow === 0 || dow === 6,
        holidayName: holidaysByDate.get(dateStr) ?? null,
        holidayDescription: holidayDescByDate.get(dateStr) ?? null,
        offCount: availability[dateStr] ?? 0,
        people: leaveByDate.get(dateStr) ?? [],
      });
    }
    return cells;
  });

  /** Rows of 7 cells for the template. */
  weeks = computed<DayCell[][]>(() => {
    const all = this.cells();
    const rows: DayCell[][] = [];
    for (let i = 0; i < all.length; i += 7) {
      rows.push(all.slice(i, i + 7));
    }
    return rows;
  });

  ngOnInit(): void {
    if (this.isManager) {
      this.employees.departments().subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data) this.departments.set(res.data);
        },
        error: () => {},
      });
    }
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.selectedCell.set(null);

    const { from, to } = this.monthBounds();
    this.calendar.load(from, to, this.selectedDepartment()).subscribe({
      next: (res: ApiResponse<CalendarData>) => {
        this.loading.set(false);
        if (res.status === 'success' && res.data) {
          this.data.set(res.data);
        } else {
          this.error.set(res.message || 'Failed to load calendar');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        const body = err.error as ApiResponse<unknown> | undefined;
        this.error.set(body?.message ?? 'Unable to load calendar.');
      },
    });
  }

  prevMonth(): void {
    let m = this.viewMonth() - 1;
    let y = this.viewYear();
    if (m < 0) { m = 11; y--; }
    this.viewMonth.set(m);
    this.viewYear.set(y);
    this.load();
  }

  nextMonth(): void {
    let m = this.viewMonth() + 1;
    let y = this.viewYear();
    if (m > 11) { m = 0; y++; }
    this.viewMonth.set(m);
    this.viewYear.set(y);
    this.load();
  }

  today(): void {
    const now = new Date();
    this.viewMonth.set(now.getMonth());
    this.viewYear.set(now.getFullYear());
    this.load();
  }

  onDepartmentChange(value: string): void {
    this.selectedDepartment.set(value === '' ? null : Number(value));
    this.load();
  }

  selectCell(cell: DayCell): void {
    // Open the detail panel for any in-month day: it shows who's off (if
    // anyone) and, for employees, an "Apply for leave" action for that date.
    this.selectedCell.set(cell.inMonth ? cell : null);
  }

  // --- helpers ---

  /** First and last day of the displayed month as YYYY-MM-DD. */
  private monthBounds(): { from: string; to: string } {
    const y = this.viewYear();
    const m = this.viewMonth();
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0); // day 0 of next month = last day
    return { from: this.toStr(first), to: this.toStr(last) };
  }

  /** Map each date in the window to the people off that day. */
  private groupLeaveByDate(leave: CalendarLeave[]): Map<string, CalendarLeave[]> {
    const map = new Map<string, CalendarLeave[]>();
    const { from, to } = this.monthBounds();
    const fromTs = new Date(from + 'T00:00:00').getTime();
    const toTs = new Date(to + 'T00:00:00').getTime();

    for (const entry of leave) {
      const s = Math.max(fromTs, new Date(entry.start_date + 'T00:00:00').getTime());
      const e = Math.min(toTs, new Date(entry.end_date + 'T00:00:00').getTime());
      for (let ts = s; ts <= e; ts += 86400000) {
        const key = this.toStr(new Date(ts));
        const arr = map.get(key) ?? [];
        arr.push(entry);
        map.set(key, arr);
      }
    }
    return map;
  }

  /** Local-date -> YYYY-MM-DD (avoids UTC off-by-one from toISOString). */
  private toStr(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
}
