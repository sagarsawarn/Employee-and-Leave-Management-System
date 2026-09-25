import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../core/services/auth.service';
import { EmployeeService } from '../../core/services/employee.service';
import { TaskService } from '../../core/services/task.service';
import { Employee, PaginatedEmployees } from '../../core/models/employee.model';
import { Task, TaskStatus } from '../../core/models/task.model';
import { ApiResponse } from '../../core/models/api-response.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private tasks = inject(TaskService);
  private employees = inject(EmployeeService);

  isAdmin = this.auth.hasAnyRole(['admin']);
  items = signal<Task[]>([]);
  employeeList = signal<Employee[]>([]);
  loading = signal(true);
  saving = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.maxLength(160)]],
    description: ['', [Validators.required, Validators.maxLength(2000)]],
    assigned_to: [0, [Validators.required, Validators.min(1)]],
    due_date: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.load();
    if (this.isAdmin) {
      this.employees.list({ page: 1, per_page: 100 }).subscribe({
        next: (res: ApiResponse<PaginatedEmployees>) => {
          if (res.status === 'success' && res.data) this.employeeList.set(res.data.items);
        },
        error: () => {},
      });
    }
  }

  load(): void {
    this.loading.set(true);
    this.tasks.list().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === 'success' && res.data) this.items.set(res.data);
        else this.error.set(res.message || 'Unable to load tasks.');
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.showError(err, 'Unable to load tasks.');
      },
    });
  }

  create(): void {
    this.error.set(null);
    this.success.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.tasks.create(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.status === 'success') {
          this.success.set('Task assigned successfully.');
          this.form.reset({ title: '', description: '', assigned_to: 0, due_date: '' });
          this.load();
        } else this.error.set(res.message || 'Unable to assign task.');
      },
      error: (err: HttpErrorResponse) => {
        this.saving.set(false);
        this.showError(err, 'Unable to assign task.');
      },
    });
  }

  updateStatus(task: Task, status: TaskStatus): void {
    this.tasks.updateStatus(task.id, status).subscribe({
      next: () => this.load(),
      error: (err: HttpErrorResponse) => this.showError(err, 'Unable to update task.'),
    });
  }

  remove(task: Task): void {
    if (!window.confirm(`Delete task "${task.title}"?`)) return;
    this.tasks.remove(task.id).subscribe({
      next: () => this.load(),
      error: (err: HttpErrorResponse) => this.showError(err, 'Unable to delete task.'),
    });
  }

  private showError(err: HttpErrorResponse, fallback: string): void {
    const body = err.error as ApiResponse<unknown> | undefined;
    this.error.set(body?.message ?? fallback);
  }
}