import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * AlertComponent — inline message banner for success/error/info/warning.
 *
 * One component with a typed `type` input keeps messaging consistent across
 * features (validation errors, API failures, success confirmations).
 */
export type AlertType = 'success' | 'error' | 'info' | 'warning';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert" [class]="'alert-' + type()" role="alert">
      <ng-content />
    </div>
  `,
  styles: [
    `
      .alert {
        padding: var(--space-3);
        border-radius: var(--radius);
        font-size: 0.9rem;
        border: 1px solid transparent;
      }
      .alert-success {
        background: #dcfce7;
        color: var(--color-success);
        border-color: #bbf7d0;
      }
      .alert-error {
        background: #fee2e2;
        color: var(--color-danger);
        border-color: #fecaca;
      }
      .alert-info {
        background: #dbeafe;
        color: var(--color-primary);
        border-color: #bfdbfe;
      }
      .alert-warning {
        background: #fef3c7;
        color: var(--color-warning);
        border-color: #fde68a;
      }
    `,
  ],
})
export class AlertComponent {
  type = input<AlertType>('info');
}
