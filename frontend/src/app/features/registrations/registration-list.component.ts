import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { RegistrationService } from '../../core/services/registration.service';
import { RegistrationRequest } from '../../core/models/registration.model';
import { ApiResponse } from '../../core/models/api-response.model';

@Component({
  selector: 'app-registration-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration-list.component.html',
  styleUrl: './registration-list.component.scss',
})
export class RegistrationListComponent implements OnInit {
  private registrations = inject(RegistrationService);

  requests = signal<RegistrationRequest[]>([]);
  loading = signal(true);
  actionId = signal<number | null>(null);
  error = signal<string | null>(null);
  success = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.registrations.list().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === 'success' && res.data) {
          this.requests.set(res.data);
        } else {
          this.error.set(res.message || 'Unable to load registrations.');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.showError(err, 'Unable to load registrations.');
      },
    });
  }

  approve(request: RegistrationRequest): void {
    this.confirmAction(request, true);
  }

  remove(request: RegistrationRequest): void {
    this.confirmAction(request, false);
  }

  private confirmAction(request: RegistrationRequest, approve: boolean): void {
    const action = approve ? 'approve' : 'delete';
    if (!window.confirm(`Are you sure you want to ${action} ${request.email}?`)) {
      return;
    }

    this.actionId.set(request.id);
    this.error.set(null);
    this.success.set(null);
    const call$ = approve
      ? this.registrations.approve(request.id)
      : this.registrations.remove(request.id);
    call$.subscribe({
      next: (res: ApiResponse<unknown>) => {
        this.actionId.set(null);
        if (res.status === 'success') {
          this.success.set(
            approve
              ? `${request.email} approved and can now sign in.`
              : `${request.email} registration deleted.`,
          );
          this.requests.update((items) =>
            items.filter((item) => item.id !== request.id),
          );
        } else {
          this.error.set(res.message || 'Action failed.');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.actionId.set(null);
        this.showError(err, 'Action failed.');
      },
    });
  }

  private showError(err: HttpErrorResponse, fallback: string): void {
    const body = err.error as ApiResponse<unknown> | undefined;
    this.error.set(body?.message ?? fallback);
  }
}
