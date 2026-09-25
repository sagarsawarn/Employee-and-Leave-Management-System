import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';
import { ProfileService } from '../../core/services/profile.service';
import { ApiResponse } from '../../core/models/api-response.model';
import { Profile360, Skill } from '../../core/models/profile.model';

import { SpinnerComponent } from '../../shared/components/spinner.component';
import { EmptyStateComponent } from '../../shared/components/empty-state.component';
import { AlertComponent } from '../../shared/components/alert.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog.component';

type Tab = 'overview' | 'leave' | 'skills' | 'activity' | 'personal';

/**
 * ProfileComponent — Employee 360° Profile page.
 *
 * Loads the composite /360-profile endpoint (the backend enforces access:
 * admin/HR any employee, employee self only). Renders a header, summary
 * cards, and tabbed sections. Skills are editable; personal info is editable;
 * attendance shows a "not available" state (no data source yet).
 */
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private profile = inject(ProfileService);

  employeeId = signal<number | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);
  data = signal<Profile360 | null>(null);
  activeTab = signal<Tab>('overview');

  // --- skills editing ---
  skillError = signal<string | null>(null);
  editingSkillId = signal<number | null>(null);
  confirmOpen = signal(false);
  private pendingDeleteSkill: Skill | null = null;

  skillForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    level: this.fb.nonNullable.control<'beginner' | 'intermediate' | 'advanced' | 'expert'>('beginner'),
    years_experience: this.fb.control<number | null>(null),
  });

  // --- personal editing ---
  personalError = signal<string | null>(null);
  personalSuccess = signal<string | null>(null);
  personalForm = this.fb.group({
    date_of_joining: [''],
    date_of_birth: [''],
    gender: [''],
    address: [''],
    work_location: [''],
    employment_type: [''],
    emergency_contact_name: [''],
    // Optional, but if provided must be exactly 10 digits.
    emergency_contact_phone: ['', [Validators.pattern(/^\d{10}$/)]],
  });

  /** True when viewing own profile via the /my-profile route (id === 'me'). */
  private meMode = false;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam === 'me') {
      this.meMode = true;
      this.load();
      return;
    }
    const id = idParam ? Number(idParam) : NaN;
    if (!idParam || Number.isNaN(id) || id <= 0) {
      this.error.set('Invalid employee id.');
      return;
    }
    this.employeeId.set(id);
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    // In "me" mode the employee id is unknown until the server resolves it.
    const req$ = this.meMode
      ? this.profile.me()
      : this.profile.full(this.employeeId() as number);

    req$.subscribe({
      next: (res: ApiResponse<Profile360>) => {
        this.loading.set(false);
        if (res.status === 'success' && res.data) {
          // Capture the resolved employee id so skills/personal edits work.
          this.employeeId.set(res.data.employee.id);
          this.data.set(res.data);
          this.prefillPersonal(res.data);
        } else {
          this.error.set(res.message || 'Failed to load profile');
        }
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        const body = err.error as ApiResponse<unknown> | undefined;
        if (err.status === 403) {
          this.error.set('You do not have permission to view this profile.');
        } else if (err.status === 404) {
          this.error.set('Employee not found.');
        } else {
          this.error.set(body?.message ?? 'Unable to load profile.');
        }
      },
    });
  }

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  private prefillPersonal(p: Profile360): void {
    const pi = p.personal_information;
    this.personalForm.patchValue({
      date_of_joining: p.employee.date_of_joining ?? '',
      date_of_birth: pi?.date_of_birth ?? '',
      gender: pi?.gender ?? '',
      address: pi?.address ?? '',
      work_location: pi?.work_location ?? '',
      employment_type: pi?.employment_type ?? '',
      emergency_contact_name: pi?.emergency_contact_name ?? '',
      emergency_contact_phone: pi?.emergency_contact_phone ?? '',
    });
  }

  // --- skills ---

  get sf() {
    return this.skillForm.controls;
  }

  startAddSkill(): void {
    this.editingSkillId.set(null);
    this.skillError.set(null);
    this.skillForm.reset({ name: '', level: 'beginner', years_experience: null });
  }

  startEditSkill(skill: Skill): void {
    this.editingSkillId.set(skill.id);
    this.skillError.set(null);
    this.skillForm.setValue({
      name: skill.name,
      level: skill.level,
      years_experience: skill.years_experience,
    });
  }

  submitSkill(): void {
    const id = this.employeeId();
    if (id === null) return;
    this.skillError.set(null);
    if (this.skillForm.invalid) {
      this.skillForm.markAllAsTouched();
      return;
    }
    const payload = this.skillForm.getRawValue();
    const editingId = this.editingSkillId();
    const req$ = editingId
      ? this.profile.updateSkill(id, editingId, payload)
      : this.profile.addSkill(id, payload);

    req$.subscribe({
      next: () => {
        this.startAddSkill();
        this.load();
      },
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        let msg = body?.message ?? 'Failed to save skill.';
        if (body?.errors) msg = `${msg}: ${Object.values(body.errors).join(' ')}`;
        this.skillError.set(msg);
      },
    });
  }

  askDeleteSkill(skill: Skill): void {
    this.pendingDeleteSkill = skill;
    this.confirmOpen.set(true);
  }

  cancelDeleteSkill(): void {
    this.pendingDeleteSkill = null;
    this.confirmOpen.set(false);
  }

  confirmDeleteSkill(): void {
    const id = this.employeeId();
    const skill = this.pendingDeleteSkill;
    this.confirmOpen.set(false);
    if (id === null || !skill) return;
    this.profile.deleteSkill(id, skill.id).subscribe({
      next: () => {
        this.pendingDeleteSkill = null;
        this.load();
      },
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        this.skillError.set(body?.message ?? 'Failed to delete skill.');
      },
    });
  }

  // --- personal ---

  /**
   * Strip any non-digit character as the user types the emergency phone, so
   * the field only ever contains digits (max 10). Keeps the input and the
   * form control in sync.
   */
  onPhoneInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    const digits = el.value.replace(/\D/g, '').slice(0, 10);
    if (digits !== el.value) {
      el.value = digits;
    }
    this.personalForm.controls.emergency_contact_phone.setValue(digits);
  }

  savePersonal(): void {
    const id = this.employeeId();
    if (id === null) return;
    this.personalError.set(null);
    this.personalSuccess.set(null);
    // Block save on invalid input (e.g. emergency phone not exactly 10 digits).
    if (this.personalForm.invalid) {
      this.personalForm.markAllAsTouched();
      this.personalError.set('Please correct the highlighted fields.');
      return;
    }
    this.profile.savePersonal(id, this.personalForm.getRawValue()).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.personalSuccess.set('Personal information saved.');
          this.load();
        } else {
          this.personalError.set(res.message || 'Failed to save.');
        }
      },
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        let msg = body?.message ?? 'Failed to save personal info.';
        if (body?.errors) msg = `${msg}: ${Object.values(body.errors).join(' ')}`;
        this.personalError.set(msg);
      },
    });
  }
}
