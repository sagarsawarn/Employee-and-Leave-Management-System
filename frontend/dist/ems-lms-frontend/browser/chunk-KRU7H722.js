import {
  AuthService
} from "./chunk-WKCPM7O5.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-F3B2X54H.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  list(page = 1, perPage = 15) {
    const params = new HttpParams().set("page", String(page)).set("per_page", String(perPage));
    return this.http.get(`${this.base}/notifications`, { params });
  }
  unreadCount() {
    return this.http.get(`${this.base}/notifications/unread-count`);
  }
  markRead(id) {
    return this.http.patch(`${this.base}/notifications/${id}/read`, {});
  }
  markAllRead() {
    return this.http.patch(`${this.base}/notifications/read-all`, {});
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/layout/shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
var _forTrack1 = ($index, $item) => $item.id;
function ShellComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
function ShellComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.role);
  }
}
function ShellComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount() > 9 ? "9+" : ctx_r1.unreadCount());
  }
}
function ShellComponent_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ShellComponent_Conditional_18_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAllRead());
    });
    \u0275\u0275text(1, " Mark all read ");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "No notifications yet.");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_Conditional_18_Conditional_6_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5.title);
  }
}
function ShellComponent_Conditional_18_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275listener("click", function ShellComponent_Conditional_18_Conditional_6_For_2_Template_li_click_0_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openNotification(n_r5));
    });
    \u0275\u0275conditionalCreate(1, ShellComponent_Conditional_18_Conditional_6_For_2_Conditional_1_Template, 2, 1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275classProp("unread", n_r5.is_read === 0)("clickable", n_r5.reference_type !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r5.title ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.created_at);
  }
}
function ShellComponent_Conditional_18_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ShellComponent_Conditional_18_Conditional_6_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(1, " Load more ");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 20);
    \u0275\u0275repeaterCreate(1, ShellComponent_Conditional_18_Conditional_6_For_2_Template, 6, 7, "li", 21, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ShellComponent_Conditional_18_Conditional_6_Conditional_3_Template, 2, 0, "button", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.notificationList());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasMore() ? 3 : -1);
  }
}
function ShellComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 16)(2, "strong");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ShellComponent_Conditional_18_Conditional_4_Template, 2, 0, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ShellComponent_Conditional_18_Conditional_5_Template, 2, 0, "div", 18)(6, ShellComponent_Conditional_18_Conditional_6_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.unreadCount() > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.notificationList().length === 0 ? 5 : 6);
  }
}
var ShellComponent = class _ShellComponent {
  auth = inject(AuthService);
  notifications = inject(NotificationService);
  router = inject(Router);
  user = this.auth.user;
  // --- Notifications state ---
  unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : (
    /* istanbul ignore next */
    []
  ));
  notificationList = signal([], ...ngDevMode ? [{ debugName: "notificationList" }] : (
    /* istanbul ignore next */
    []
  ));
  panelOpen = signal(false, ...ngDevMode ? [{ debugName: "panelOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  pollId = null;
  allNav = [
    { label: "Dashboard", path: "/dashboard", roles: ["admin", "hr_manager", "employee"] },
    { label: "Employees", path: "/employees", roles: ["admin", "hr_manager"] },
    { label: "Registrations", path: "/registrations", roles: ["admin"] },
    { label: "Leave", path: "/leave", roles: ["admin", "hr_manager", "employee"] },
    { label: "Calendar", path: "/calendar", roles: ["admin", "hr_manager", "employee"] },
    { label: "My Profile", path: "/employees/me/profile", roles: ["employee"] },
    { label: "Tasks", path: "/tasks", roles: ["admin", "employee"] }
  ];
  /** Nav filtered to the current user's role. */
  nav = computed(() => {
    const role = this.auth.role();
    if (!role)
      return [];
    return this.allNav.filter((item) => item.roles.includes(role));
  }, ...ngDevMode ? [{ debugName: "nav" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    if (!this.auth.user()) {
      this.auth.loadMe().subscribe({ next: () => {
      }, error: () => {
      } });
    }
    this.refreshUnread();
    this.pollId = setInterval(() => this.refreshUnread(), 3e4);
  }
  ngOnDestroy() {
    if (this.pollId !== null) {
      clearInterval(this.pollId);
    }
  }
  refreshUnread() {
    this.notifications.unreadCount().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data) {
          this.unreadCount.set(res.data.count);
        }
      },
      error: () => {
      }
    });
  }
  notifPage = signal(1, ...ngDevMode ? [{ debugName: "notifPage" }] : (
    /* istanbul ignore next */
    []
  ));
  notifTotalPages = signal(1, ...ngDevMode ? [{ debugName: "notifTotalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Toggle the dropdown; loads the first page when opening. */
  togglePanel() {
    const opening = !this.panelOpen();
    this.panelOpen.set(opening);
    if (opening) {
      this.notifPage.set(1);
      this.loadNotifications(1, true);
    }
  }
  loadNotifications(page, replace) {
    this.notifications.list(page, 15).subscribe({
      next: (res) => {
        if (res.status === "success" && res.data) {
          this.notifTotalPages.set(res.data.total_pages);
          this.notifPage.set(res.data.page);
          this.notificationList.update((existing) => replace ? res.data.items : [...existing, ...res.data.items]);
        }
      },
      error: () => {
      }
    });
  }
  /** Load the next page of notifications (pagination). */
  loadMore() {
    if (this.notifPage() < this.notifTotalPages()) {
      this.loadNotifications(this.notifPage() + 1, false);
    }
  }
  hasMore() {
    return this.notifPage() < this.notifTotalPages();
  }
  markAllRead() {
    this.notifications.markAllRead().subscribe({
      next: () => {
        this.unreadCount.set(0);
        this.notificationList.update((list) => list.map((n) => __spreadProps(__spreadValues({}, n), { is_read: 1 })));
      },
      error: () => {
      }
    });
  }
  /**
   * Handle a click on a notification: mark it read, close the panel, and
   * navigate to the page it refers to (task -> /tasks, leave -> /leave).
   */
  openNotification(n) {
    if (n.is_read === 0) {
      this.notifications.markRead(n.id).subscribe({ next: () => {
      }, error: () => {
      } });
      this.notificationList.update((list) => list.map((item) => item.id === n.id ? __spreadProps(__spreadValues({}, item), { is_read: 1 }) : item));
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
  _routeFor(n) {
    if (n.reference_type === "task")
      return "/tasks";
    if (n.reference_type === "leave_request")
      return "/leave";
    if (n.type === "task_assigned")
      return "/tasks";
    if (n.type === "leave_approved" || n.type === "leave_rejected")
      return "/leave";
    return null;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], decls: 21, vars: 4, consts: [[1, "shell"], [1, "sidebar"], [1, "brand"], [1, "nav"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "btn", "btn-danger", "signout-btn", 3, "click"], [1, "main"], [1, "topbar"], [1, "flex", "items-center", "gap-2"], [1, "badge", "badge-approved"], [1, "notif"], ["type", "button", 1, "notif-bell", 3, "click"], [1, "bell-icon"], [1, "notif-badge"], [1, "notif-panel"], [1, "content"], [1, "notif-panel-head"], ["type", "button", 1, "notif-markall"], [1, "notif-empty", "text-muted"], ["type", "button", 1, "notif-markall", 3, "click"], [1, "notif-list"], [1, "notif-item", 3, "unread", "clickable"], ["type", "button", 1, "notif-more"], [1, "notif-item", 3, "click"], [1, "notif-title"], [1, "notif-msg"], [1, "notif-time", "text-muted"], ["type", "button", 1, "notif-more", 3, "click"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275text(3, "EMS / LMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 3);
      \u0275\u0275repeaterCreate(5, ShellComponent_For_6_Template, 2, 2, "a", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_7_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(8, "Sign out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "header", 7)(11, "div", 8);
      \u0275\u0275conditionalCreate(12, ShellComponent_Conditional_12_Template, 2, 1, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_14_listener() {
        return ctx.togglePanel();
      });
      \u0275\u0275elementStart(15, "span", 12);
      \u0275\u0275text(16, "\u{1F514}");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, ShellComponent_Conditional_17_Template, 2, 1, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, ShellComponent_Conditional_18_Template, 7, 2, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "main", 15);
      \u0275\u0275element(20, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.nav());
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_1_0 = ctx.user()) ? 12 : -1, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.unreadCount() + " unread notifications");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.unreadCount() > 0 ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.panelOpen() ? 18 : -1);
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n.shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #e2e8f0;\n  padding: var(--space-5) var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: var(--space-6);\n  letter-spacing: 0.02em;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius);\n  font-size: 0.92rem;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  text-decoration: none;\n  color: #fff;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n}\n.signout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto;\n}\n.signout-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n  border-color: #b91c1c;\n}\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-3) var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--space-5);\n}\n@media (max-width: 720px) {\n  .shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    padding: var(--space-3) var(--space-4);\n  }\n  .brand[_ngcontent-%COMP%] {\n    margin-bottom: var(--space-3);\n  }\n  .nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .signout-btn[_ngcontent-%COMP%] {\n    width: auto;\n    align-self: flex-start;\n    margin-top: var(--space-3);\n  }\n}\n.notif[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-bell[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.3rem;\n  line-height: 1;\n  padding: var(--space-2);\n  border-radius: var(--radius);\n}\n.notif-bell[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background: var(--color-danger);\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  width: 320px;\n  max-height: 420px;\n  overflow-y: auto;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n}\n.notif-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.notif-markall[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-primary);\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  text-align: center;\n  font-size: 0.9rem;\n}\n.notif-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.notif-item[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.notif-item.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.notif-item.clickable[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-top: 2px;\n}\n.notif-more[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n  border: none;\n  border-top: 1px solid var(--color-border);\n  padding: var(--space-3);\n  color: var(--color-primary);\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.notif-more[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: true, imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], template: `<div class="shell">
  <aside class="sidebar">
    <div class="brand">EMS / LMS</div>
    <nav class="nav">
      @for (item of nav(); track item.path) {
        <a
          class="nav-link"
          [routerLink]="item.path"
          routerLinkActive="active"
        >
          {{ item.label }}
        </a>
      }
    </nav>
    <button class="btn btn-danger signout-btn" (click)="logout()">Sign out</button>
  </aside>

  <div class="main">
    <header class="topbar">
      <div class="flex items-center gap-2">
        @if (user(); as u) {
          <span class="badge badge-approved">{{ u.role }}</span>
        }
      </div>

      <!-- Notifications bell -->
      <div class="notif">
        <button
          class="notif-bell"
          type="button"
          (click)="togglePanel()"
          [attr.aria-label]="unreadCount() + ' unread notifications'"
        >
          <span class="bell-icon">\u{1F514}</span>
          @if (unreadCount() > 0) {
            <span class="notif-badge">{{ unreadCount() > 9 ? '9+' : unreadCount() }}</span>
          }
        </button>

        @if (panelOpen()) {
          <div class="notif-panel">
            <div class="notif-panel-head">
              <strong>Notifications</strong>
              @if (unreadCount() > 0) {
                <button class="notif-markall" type="button" (click)="markAllRead()">
                  Mark all read
                </button>
              }
            </div>

            @if (notificationList().length === 0) {
              <div class="notif-empty text-muted">No notifications yet.</div>
            } @else {
              <ul class="notif-list">
                @for (n of notificationList(); track n.id) {
                  <li
                    class="notif-item"
                    [class.unread]="n.is_read === 0"
                    [class.clickable]="n.reference_type !== null"
                    (click)="openNotification(n)"
                  >
                    @if (n.title) {
                      <div class="notif-title">{{ n.title }}</div>
                    }
                    <div class="notif-msg">{{ n.message }}</div>
                    <div class="notif-time text-muted">{{ n.created_at }}</div>
                  </li>
                }
              </ul>
              @if (hasMore()) {
                <button class="notif-more" type="button" (click)="loadMore()">
                  Load more
                </button>
              }
            }
          </div>
        }
      </div>
    </header>

    <main class="content">
      <!-- Active child route renders here -->
      <router-outlet />
    </main>
  </div>
</div>
`, styles: ["/* src/app/layout/shell.component.scss */\n.shell {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  min-height: 100vh;\n}\n.sidebar {\n  background: #0f172a;\n  color: #e2e8f0;\n  padding: var(--space-5) var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.brand {\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: var(--space-6);\n  letter-spacing: 0.02em;\n}\n.nav {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.nav-link {\n  color: #cbd5e1;\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius);\n  font-size: 0.92rem;\n}\n.nav-link:hover {\n  background: rgba(255, 255, 255, 0.08);\n  text-decoration: none;\n  color: #fff;\n}\n.nav-link.active {\n  background: var(--color-primary);\n  color: #fff;\n}\n.signout-btn {\n  width: 100%;\n  margin-top: auto;\n}\n.signout-btn:hover:not(:disabled) {\n  background: #b91c1c;\n  border-color: #b91c1c;\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-3) var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.content {\n  flex: 1;\n  padding: var(--space-5);\n}\n@media (max-width: 720px) {\n  .shell {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    padding: var(--space-3) var(--space-4);\n  }\n  .brand {\n    margin-bottom: var(--space-3);\n  }\n  .nav {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .signout-btn {\n    width: auto;\n    align-self: flex-start;\n    margin-top: var(--space-3);\n  }\n}\n.notif {\n  position: relative;\n}\n.notif-bell {\n  position: relative;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.3rem;\n  line-height: 1;\n  padding: var(--space-2);\n  border-radius: var(--radius);\n}\n.notif-bell:hover {\n  background: var(--color-bg);\n}\n.notif-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 999px;\n  background: var(--color-danger);\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-panel {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  width: 320px;\n  max-height: 420px;\n  overflow-y: auto;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n}\n.notif-panel-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.notif-markall {\n  background: none;\n  border: none;\n  color: var(--color-primary);\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.notif-empty {\n  padding: var(--space-5);\n  text-align: center;\n  font-size: 0.9rem;\n}\n.notif-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.notif-item {\n  padding: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.notif-item:last-child {\n  border-bottom: none;\n}\n.notif-item.unread {\n  background: #eff6ff;\n}\n.notif-item.clickable {\n  cursor: pointer;\n}\n.notif-item.clickable:hover {\n  background: var(--color-bg);\n}\n.notif-title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.notif-msg {\n  font-size: 0.85rem;\n}\n.notif-time {\n  font-size: 0.75rem;\n  margin-top: 2px;\n}\n.notif-more {\n  width: 100%;\n  background: none;\n  border: none;\n  border-top: 1px solid var(--color-border);\n  padding: var(--space-3);\n  color: var(--color-primary);\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.notif-more:hover {\n  background: var(--color-bg);\n}\n/*# sourceMappingURL=shell.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/layout/shell.component.ts", lineNumber: 35 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-KRU7H722.js.map
