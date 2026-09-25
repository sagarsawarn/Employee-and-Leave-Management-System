import { Component, input } from '@angular/core';

/**
 * EmptyStateComponent — shown when a list/query returns no rows.
 *
 * Centralizing the "nothing here" UI keeps every list consistent and saves
 * each feature from re-implementing it. Content is projected via <ng-content>
 * so callers can drop in an action button (e.g. "Add employee").
 */
@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `
    <div class="empty">
      <div class="empty-title">{{ title() }}</div>
      @if (message()) {
        <p class="empty-message text-muted">{{ message() }}</p>
      }
      <ng-content />
    </div>
  `,
  styles: [
    `
      .empty {
        text-align: center;
        padding: var(--space-6) var(--space-4);
        color: var(--color-muted);
      }
      .empty-title {
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: var(--space-1);
      }
      .empty-message {
        margin: 0 0 var(--space-4);
        font-size: 0.9rem;
      }
    `,
  ],
})
export class EmptyStateComponent {
  title = input<string>('Nothing here yet');
  message = input<string>('');
}
