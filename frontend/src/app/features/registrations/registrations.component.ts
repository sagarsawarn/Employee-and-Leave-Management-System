import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { RegistrationService } from '../../core/services/registration.service';
import { Registration } from '../../core/models/registration.model';
import { ApiResponse } from '../../core/models/api-response.model';

import { SpinnerComponent } from '../../shared/components/spinner.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { AlertComponent } from '../../shared/components/alert.component';

/**
 * RegistrationsComponent — admin screen to review pending self-registrations.
 *
 * Approving converts the request into a real user + employee (server-side),
 * after which the person appears in the Employees list. The list reloads
 * after each action so approved/rejected rows drop out of the pending view.
 */
@Component({
  selector: 'app-registrations',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, EmptyStateComponent, AlertComponent],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss',
})
export class RegistrationsComponent implements OnInit {
  private service = inject(RegistrationService);

  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);
  items = signal<Registration[]>([]);
  busyId = signal<number | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.service.pending().subscribe({
      next: (res: ApiResponse<Registration[]>) => {
        this.loading.set(false);
        if (res.status === 'success' && res.data) {
          this.items.set(res.data);
        } else {
          this.error.set(res.message || 'Failed to load registrations');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        const body = err.error as ApiResponse<unknown> | undefined;
        this.error.set(body?.message ?? 'Unable to load registrations.');
      },
    });
  }

  approve(reg: Registration): void {
    this.act(reg.id, this.service.approve(reg.id), `${reg.email} approved — employee account created.`);
  }

  reject(reg: Registration): void {
    this.act(reg.id, this.service.reject(reg.id), `${reg.email} rejected.`);
  }

  private act(
    id: number,
    obs: ReturnType<RegistrationService['approve']>,
    successMsg: string,
  ): void {
    this.busyId.set(id);
    this.error.set(null);
    this.success.set(null);
    obs.subscribe({
      next: () => {
        this.busyId.set(null);
        this.success.set(successMsg);
        this.load(); // refresh pending list
      },
      error: (err: HttpErrorResponse) => {
        this.busyId.set(null);
        const body = err.error as ApiResponse<unknown> | undefined;
        this.error.set(body?.message ?? 'Action failed.');
      },
    });
  }
}
