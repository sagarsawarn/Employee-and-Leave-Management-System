import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { EmployeeService } from '../../core/services/employee.service';
import {
  Employee,
  PaginatedEmployees,
} from '../../core/models/employee.model';
import { ApiResponse } from '../../core/models/api-response.model';

import { SpinnerComponent } from '../../shared/components/spinner.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { AlertComponent } from '../../shared/components/alert.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog.component';

/**
 * EmployeeListComponent — paginated, searchable employee table.
 *
 * Angular features and why:
 * - signals for view state (loading/error/data/page): fine-grained, no manual
 *   change detection, and clean template reads.
 * - FormControl + RxJS debounceTime/distinctUntilChanged: a debounced search
 *   box that avoids firing a request on every keystroke.
 * - shared components (spinner/empty-state/alert/confirm-dialog): the four
 *   UX states (loading, empty, error, confirm) are handled consistently.
 */
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnInit {
  private service = inject(EmployeeService);
  private router = inject(Router);

  loading = signal(false);
  error = signal<string | null>(null);
  data = signal<PaginatedEmployees | null>(null);

  page = signal(1);
  perPage = 10;

  search = new FormControl<string>('', { nonNullable: true });

  // Delete confirmation state.
  confirmOpen = signal(false);
  private pendingDelete: Employee | null = null;

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(350), distinctUntilChanged())
      .subscribe(() => {
        this.page.set(1); // reset to first page on a new search
        this.fetch();
      });
    this.fetch();
  }

  fetch(): void {
    this.loading.set(true);
    this.error.set(null);
    this.service
      .list({
        q: this.search.value || undefined,
        page: this.page(),
        per_page: this.perPage,
      })
      .subscribe({
        next: (res: ApiResponse<PaginatedEmployees>) => {
          this.loading.set(false);
          if (res.status === 'success' && res.data) {
            this.data.set(res.data);
          } else {
            this.error.set(res.message || 'Failed to load employees');
          }
        },
        error: (err: HttpErrorResponse) => {
          this.loading.set(false);
          const body = err.error as ApiResponse<unknown> | undefined;
          this.error.set(body?.message ?? 'Unable to load employees.');
        },
      });
  }

  goToPage(p: number): void {
    const d = this.data();
    if (!d || p < 1 || p > d.total_pages) return;
    this.page.set(p);
    this.fetch();
  }

  edit(emp: Employee): void {
    this.router.navigate(['/employees', emp.id, 'edit']);
  }

  viewProfile(emp: Employee): void {
    this.router.navigate(['/employees', emp.id, 'profile']);
  }

  askDelete(emp: Employee): void {
    this.pendingDelete = emp;
    this.confirmOpen.set(true);
  }

  cancelDelete(): void {
    this.pendingDelete = null;
    this.confirmOpen.set(false);
  }

  confirmDelete(): void {
    const emp = this.pendingDelete;
    this.confirmOpen.set(false);
    if (!emp) return;
    this.service.remove(emp.id).subscribe({
      next: () => {
        this.pendingDelete = null;
        this.fetch();
      },
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        this.error.set(body?.message ?? 'Failed to delete employee.');
      },
    });
  }
}
