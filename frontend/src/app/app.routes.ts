import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

/**
 * Route table. Notes on the Angular features used:
 * - loadComponent (lazy loading): each page is fetched on demand, keeping the
 *   initial bundle small.
 * - canActivate guards: authGuard blocks unauthenticated access; roleGuard
 *   restricts admin/HR-only areas. These are UX gates — the API re-checks
 *   every role server-side, so a tampered client cannot bypass real security.
 */
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'admin-login',
    loadComponent: () =>
      import('./features/auth/admin-login.component').then(
        (m) => m.AdminLoginComponent,
      ),
  },
  {
    path: 'hr-login',
    loadComponent: () =>
      import('./features/auth/hr-login.component').then(
        (m) => m.HrLoginComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },

  // Authenticated area rendered inside the app shell (nav + outlet).
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layout/shell.component').then((m) => m.ShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'employees',
        canActivate: [roleGuard(['admin', 'hr_manager'])],
        loadComponent: () =>
          import('./features/employees/employee-list.component').then(
            (m) => m.EmployeeListComponent,
          ),
      },
      {
        path: 'employees/new',
        canActivate: [roleGuard(['admin', 'hr_manager'])],
        loadComponent: () =>
          import('./features/employees/employee-form.component').then(
            (m) => m.EmployeeFormComponent,
          ),
      },
      {
        path: 'employees/:id/edit',
        canActivate: [roleGuard(['admin', 'hr_manager'])],
        loadComponent: () =>
          import('./features/employees/employee-form.component').then(
            (m) => m.EmployeeFormComponent,
          ),
      },
      {
        // 360 profile — access is enforced server-side (self or admin/HR),
        // so no roleGuard here: employees may open their own profile.
        path: 'employees/:id/profile',
        loadComponent: () =>
          import('./features/profile/profile.component').then(
            (m) => m.ProfileComponent,
          ),
      },
      {
        path: 'registrations',
        canActivate: [roleGuard(['admin'])],
        loadComponent: () =>
          import('./features/registrations/registration-list.component').then(
            (m) => m.RegistrationListComponent,
          ),
      },
      {
        path: 'leave',
        loadComponent: () =>
          import('./features/leave/leave.component').then(
            (m) => m.LeaveComponent,
          ),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('./features/calendar/calendar.component').then(
            (m) => m.CalendarComponent,
          ),
      },
      {
        path: 'tasks',
        canActivate: [roleGuard(['admin', 'employee'])],
        loadComponent: () =>
          import('./features/tasks/tasks.component').then(
            (m) => m.TasksComponent,
          ),
      },
      {
        path: 'registrations',
        canActivate: [roleGuard(['admin'])],
        loadComponent: () =>
          import('./features/registrations/registrations.component').then(
            (m) => m.RegistrationsComponent,
          ),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
