import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * FieldErrorComponent — renders the first validation message for a reactive
 * form control, but only after it's been touched.
 *
 * Takes the control itself as an input so any form can reuse it without
 * duplicating the touched/invalid boilerplate. Falls back to a generic
 * message for validators it doesn't have a specific string for.
 */
@Component({
  selector: 'app-field-error',
  standalone: true,
  template: `
    @if (control() && control()!.touched && control()!.invalid) {
      <div class="field-error text-danger">{{ firstError() }}</div>
    }
  `,
  styles: [
    `
      .field-error {
        margin-top: var(--space-1);
        font-size: 0.8rem;
      }
    `,
  ],
})
export class FieldErrorComponent {
  control = input<AbstractControl | null>(null);
  /** Human label used in messages, e.g. "Email". */
  label = input<string>('This field');

  firstError(): string {
    const c = this.control();
    if (!c || !c.errors) return '';
    const errors = c.errors;
    const label = this.label();

    if (errors['required']) return `${label} is required.`;
    if (errors['email']) return `Enter a valid email address.`;
    if (errors['minlength']) {
      return `${label} must be at least ${errors['minlength'].requiredLength} characters.`;
    }
    if (errors['maxlength']) {
      return `${label} must be at most ${errors['maxlength'].requiredLength} characters.`;
    }
    if (errors['server']) return String(errors['server']);
    return `${label} is invalid.`;
  }
}
