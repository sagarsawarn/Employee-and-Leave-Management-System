import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthService } from '../core/services/auth.service';
import { NotificationService } from '../core/services/notification.service';
import { Role } from '../core/models/auth.model';
import { AppNotification } from '../core/models/notification.model';

interface NavItem {
  label: string;
  path: string;
  roles: Role[]; // which roles see this link
}

/**
 * ShellComponent — the authenticated layout.
 *
 * Angular features and why:
 * - RouterOutlet: renders the active child feature (dashboard, employees…).
 * - RouterLink / RouterLinkActive: declarative nav + active-state styling.
 * - OnInit + loadMe(): after a hard refresh the user signal is empty but the
 *   token persists; we rehydrate from /auth/me so nav/role reflect the server
 *   (the authoritative source), not stale client state.
 * - computed(): nav is derived from the current role, so links appear/hide
 *   reactively without manual DOM work.
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService);
  private notifications = inject(NotificationService);
  private router = inject(Router);

  user = this.auth.user;

  // --- Notifications state ---
  unreadCount = signal(0);
  notificationList = signal<AppNotification[]>([]);
  panelOpen = signal(false);
  private pollId: ReturnType<typeof setInterval> | null = null;

  private allNav: NavItem[] = [
    { label: 'Dashboard', path: '/dashboard', roles: ['admin', 'hr_manager', 'employee'] },
    { label: 'Employees', path: '/employees', roles: ['admin', 'hr_manager'] },
    { label: 'Registrations', path: '/registrations', roles: ['admin'] },
    { label: 'Leave', path: '/leave', roles: ['admin', 'hr_manager', 'employee'] },
    { label: 'Calendar', path: '/calendar', roles: ['admin', 'hr_manager', 'employee'] },
    { label: 'My Profile', path: '/employees/me/profile', roles: ['employee'] },
    { label: 'Tasks', path: '/tasks', roles: ['admin', 'employee'] },
  ];

  /** Nav filtered to the current user's role. */
  nav = computed<NavItem[]>(() => {
    const role = this.auth.role();
    if (!role) return [];
    return this.allNav.filter((item) => item.roles.includes(role));
  });

  ngOnInit(): void {
    // Rehydrate user if we have a token but no in-memory user yet.
    if (!this.auth.user()) {
      this.auth.loadMe().subscribe({ next: () => {}, error: () => {} });
    }

    // Poll the unread count now and every 30s (short polling — CI3 has no
    // push channel, so this is the pragmatic approach for near-real-time).
    this.refreshUnread();
    this.pollId = setInterval(() => this.refreshUnread(), 30000);
  }

  ngOnDestroy(): void {
    if (this.pollId !== null) {
      clearInterval(this.pollId);
    }
  }

  private refreshUnread(): void {
    this.notifications.unreadCount().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.unreadCount.set(res.data.count);
        }
      },
      error: () => {},
    });
  }

  notifPage = signal(1);
  notifTotalPages = signal(1);

  /** Toggle the dropdown; loads the first page when opening. */
  togglePanel(): void {
    const opening = !this.panelOpen();
    this.panelOpen.set(opening);
    if (opening) {
      this.notifPage.set(1);
      this.loadNotifications(1, true);
    }
  }

  private loadNotifications(page: number, replace: boolean): void {
    this.notifications.list(page, 15).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data) {
          this.notifTotalPages.set(res.data.total_pages);
          this.notifPage.set(res.data.page);
          this.notificationList.update((existing) =>
            replace ? res.data!.items : [...existing, ...res.data!.items],
          );
        }
      },
      error: () => {},
    });
  }

  /** Load the next page of notifications (pagination). */
  loadMore(): void {
    if (this.notifPage() < this.notifTotalPages()) {
      this.loadNotifications(this.notifPage() + 1, false);
    }
  }

  hasMore(): boolean {
    return this.notifPage() < this.notifTotalPages();
  }

  markAllRead(): void {
    this.notifications.markAllRead().subscribe({
      next: () => {
        this.unreadCount.set(0);
        this.notificationList.update((list) =>
          list.map((n) => ({ ...n, is_read: 1 })),
        );
      },
      error: () => {},
    });
  }

  /**
   * Handle a click on a notification: mark it read, close the panel, and
   * navigate to the page it refers to (task -> /tasks, leave -> /leave).
   */
  openNotification(n: AppNotification): void {
    // Mark read (optimistically) if it wasn't already.
    if (n.is_read === 0) {
      this.notifications.markRead(n.id).subscribe({ next: () => {}, error: () => {} });
      this.notificationList.update((list) =>
        list.map((item) => (item.id === n.id ? { ...item, is_read: 1 } : item)),
      );
      this.unreadCount.update((c) => Math.max(0, c - 1));
    }

    this.panelOpen.set(false);

    const target = this._routeFor(n);
    if (target) {
      this.router.navigate([target]);
    }
  }

  /**
   * Destination route for a notification, based on its reference entity:
   * task -> /tasks; leave (approved/rejected/submitted) -> /leave;
   * leave-pending (for approvers) -> /leave to review.
   */
  private _routeFor(n: AppNotification): string | null {
    if (n.reference_type === 'task') return '/tasks';
    if (n.reference_type === 'leave_request') return '/leave';
    // Fall back to legacy type mapping.
    if (n.type === 'task_assigned') return '/tasks';
    if (n.type === 'leave_approved' || n.type === 'leave_rejected') return '/leave';
    return null;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
