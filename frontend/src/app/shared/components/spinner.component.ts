import { Component, input } from '@angular/core';

/**
 * SpinnerComponent — inline loading indicator.
 *
 * Uses the signal-based input() API (Angular 17.1+): typed, read as a signal
 * in the template, and the modern replacement for @Input(). Presentational
 * only — no dependencies on any feature or service, so it lives in shared/.
 */
@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    <div class="spinner-wrap" role="status" [attr.aria-label]="label()">
      <span class="spinner"></span>
      @if (label()) {
        <span class="spinner-label">{{ label() }}</span>
      }
    </div>
  `,
  styles: [
    `
      .spinner-wrap {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--color-muted);
      }
      .spinner {
        width: 18px;
        height: 18px;
        border: 2px solid var(--color-border);
        border-top-color: var(--color-primary);
        border-radius: 50%;
        animation: spin 0.7s linear infinite;
      }
      .spinner-label {
        font-size: 0.9rem;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SpinnerComponent {
  /** Optional accessible label shown next to the spinner. */
  label = input<string>('Loading…');
}
