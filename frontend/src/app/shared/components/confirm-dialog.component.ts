import { Component, input, output } from '@angular/core';

/**
 * ConfirmDialogComponent — modal confirmation for destructive actions
 * (delete employee, reject leave, etc.).
 *
 * Controlled by the parent via the `open` input; emits confirm/cancel via
 * output(). Keeping this generic means one dialog serves every "are you sure"
 * flow instead of each feature building its own.
 */
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  template: `
    @if (open()) {
      <div class="backdrop" (click)="cancel.emit()">
        <div class="dialog" (click)="$event.stopPropagation()">
          <h3 class="dialog-title">{{ title() }}</h3>
          <p class="dialog-message text-muted">{{ message() }}</p>
          <div class="dialog-actions">
            <button class="btn" (click)="cancel.emit()">
              {{ cancelLabel() }}
            </button>
            <button class="btn btn-danger" (click)="confirm.emit()">
              {{ confirmLabel() }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: var(--space-4);
      }
      .dialog {
        background: var(--color-surface);
        border-radius: var(--radius);
        padding: var(--space-5);
        max-width: 400px;
        width: 100%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      }
      .dialog-title {
        margin: 0 0 var(--space-2);
        font-size: 1.1rem;
      }
      .dialog-message {
        margin: 0 0 var(--space-5);
        font-size: 0.9rem;
      }
      .dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: var(--space-2);
      }
    `,
  ],
})
export class ConfirmDialogComponent {
  open = input<boolean>(false);
  title = input<string>('Are you sure?');
  message = input<string>('This action cannot be undone.');
  confirmLabel = input<string>('Confirm');
  cancelLabel = input<string>('Cancel');

  confirm = output<void>();
  cancel = output<void>();
}
