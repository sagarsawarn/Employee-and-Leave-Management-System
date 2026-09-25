import {
  LeaveService
} from "./chunk-N2JL55FW.js";
import {
  AuthService
} from "./chunk-WKCPM7O5.js";
import {
  EmptyStateComponent
} from "./chunk-FQ6VZRYS.js";
import {
  SpinnerComponent
} from "./chunk-FDAE4OJ5.js";
import {
  RouterLink
} from "./chunk-F3B2X54H.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/attendance.service.ts
var AttendanceService = class _AttendanceService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  today() {
    return this.http.get(`${this.base}/attendance/today`);
  }
  checkIn() {
    return this.http.post(`${this.base}/attendance/check-in`, {});
  }
  checkOut() {
    return this.http.post(`${this.base}/attendance/check-out`, {});
  }
  history(employeeId) {
    return this.http.get(`${this.base}/attendance/${employeeId}`);
  }
  static \u0275fac = function AttendanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceService, factory: _AttendanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Welcome back, ", ctx.email, ".");
  }
}
function DashboardComponent_Conditional_13_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" In: ", \u0275\u0275pipeBind2(1, 1, a_r2.check_in, "h:mm a"), " ");
  }
}
function DashboardComponent_Conditional_13_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Not checked in ");
  }
}
function DashboardComponent_Conditional_13_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 Out: ", \u0275\u0275pipeBind2(1, 1, a_r2.check_out, "h:mm a"), " ");
  }
}
function DashboardComponent_Conditional_13_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", a_r2.work_hours, " hrs ");
  }
}
function DashboardComponent_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275conditionalCreate(1, DashboardComponent_Conditional_13_Conditional_4_Conditional_1_Template, 2, 4)(2, DashboardComponent_Conditional_13_Conditional_4_Conditional_2_Template, 1, 0);
    \u0275\u0275conditionalCreate(3, DashboardComponent_Conditional_13_Conditional_4_Conditional_3_Template, 2, 4);
    \u0275\u0275conditionalCreate(4, DashboardComponent_Conditional_13_Conditional_4_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r2.check_in ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r2.check_out ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r2.work_hours != null ? 4 : -1);
  }
}
function DashboardComponent_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "You haven't checked in today.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.attendanceError());
  }
}
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 14)(2, "h3", 15);
    \u0275\u0275text(3, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DashboardComponent_Conditional_13_Conditional_4_Template, 5, 3, "p", 16)(5, DashboardComponent_Conditional_13_Conditional_5_Template, 2, 0, "p", 16);
    \u0275\u0275conditionalCreate(6, DashboardComponent_Conditional_13_Conditional_6_Template, 2, 1, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "button", 19);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkIn());
    });
    \u0275\u0275text(9, " IN ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 20);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkOut());
    });
    \u0275\u0275text(11, " OUT ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.todayAttendance()) ? 4 : 5, tmp_1_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.attendanceError() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.attendanceBusy() || ((tmp_3_0 = ctx_r2.todayAttendance()) == null ? null : tmp_3_0.check_in));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.attendanceBusy() || !((tmp_4_0 = ctx_r2.todayAttendance()) == null ? null : tmp_4_0.check_in) || ((tmp_4_0 = ctx_r2.todayAttendance()) == null ? null : tmp_4_0.check_out));
  }
}
function DashboardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21)(1, "h3", 10);
    \u0275\u0275text(2, "Employees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Manage employee records.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 22)(6, "h3", 10);
    \u0275\u0275text(7, "Add employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, "Create a new employee profile.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 24);
  }
}
function DashboardComponent_Conditional_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 25);
  }
}
function DashboardComponent_Conditional_26_Conditional_5_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r4.employee_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", row_r4.employee_code, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.leave_type_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.start_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.end_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.total_days);
  }
}
function DashboardComponent_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Employee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, DashboardComponent_Conditional_26_Conditional_5_For_15_Template, 13, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.onLeave());
  }
}
function DashboardComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 23);
    \u0275\u0275text(2, "Who's on leave");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DashboardComponent_Conditional_26_Conditional_3_Template, 1, 0, "app-spinner", 24)(4, DashboardComponent_Conditional_26_Conditional_4_Template, 1, 0, "app-empty-state", 25)(5, DashboardComponent_Conditional_26_Conditional_5_Template, 16, 0, "table", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.onLeaveLoading() ? 3 : ctx_r2.onLeave().length === 0 ? 4 : 5);
  }
}
function DashboardComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Your leave balance is not available yet.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_27_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const balance_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(balance_r5.leave_type_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", balance_r5.remaining_days, " days remaining");
  }
}
function DashboardComponent_Conditional_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_27_Conditional_4_For_2_Template, 5, 2, "div", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.balances());
  }
}
function DashboardComponent_Conditional_27_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "No approved leave requests.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_27_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6, "Approved");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const application_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(application_r6.leave_type_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", application_r6.start_date, " to ", application_r6.end_date);
  }
}
function DashboardComponent_Conditional_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_27_Conditional_8_For_2_Template, 7, 3, "div", 30, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.approvedLeaves());
  }
}
function DashboardComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 23);
    \u0275\u0275text(2, "Leave summary");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DashboardComponent_Conditional_27_Conditional_3_Template, 2, 0, "p", 3)(4, DashboardComponent_Conditional_27_Conditional_4_Template, 3, 0, "div", 27);
    \u0275\u0275elementStart(5, "h3", 28);
    \u0275\u0275text(6, "Approved leave");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DashboardComponent_Conditional_27_Conditional_7_Template, 2, 0, "p", 3)(8, DashboardComponent_Conditional_27_Conditional_8_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.balances().length === 0 ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.approvedLeaves().length === 0 ? 7 : 8);
  }
}
var DashboardComponent = class _DashboardComponent {
  auth = inject(AuthService);
  leave = inject(LeaveService);
  attendance = inject(AttendanceService);
  user = this.auth.user;
  role = this.auth.role;
  balances = signal([], ...ngDevMode ? [{ debugName: "balances" }] : (
    /* istanbul ignore next */
    []
  ));
  approvedLeaves = signal([], ...ngDevMode ? [{ debugName: "approvedLeaves" }] : (
    /* istanbul ignore next */
    []
  ));
  onLeave = signal([], ...ngDevMode ? [{ debugName: "onLeave" }] : (
    /* istanbul ignore next */
    []
  ));
  onLeaveLoading = signal(false, ...ngDevMode ? [{ debugName: "onLeaveLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- attendance (IN/OUT) ---
  todayAttendance = signal(null, ...ngDevMode ? [{ debugName: "todayAttendance" }] : (
    /* istanbul ignore next */
    []
  ));
  attendanceBusy = signal(false, ...ngDevMode ? [{ debugName: "attendanceBusy" }] : (
    /* istanbul ignore next */
    []
  ));
  attendanceError = signal(null, ...ngDevMode ? [{ debugName: "attendanceError" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Live clock, updated every second. Shown for all roles. */
  now = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "now" }] : (
    /* istanbul ignore next */
    []
  ));
  clockId = null;
  ngOnInit() {
    this.clockId = setInterval(() => this.now.set(/* @__PURE__ */ new Date()), 1e3);
    if (this.isManager()) {
      this.onLeaveLoading.set(true);
      this.leave.onLeave().subscribe({
        next: (res) => {
          this.onLeaveLoading.set(false);
          if (res.status === "success" && res.data)
            this.onLeave.set(res.data);
        },
        error: () => this.onLeaveLoading.set(false)
      });
    }
    if (this.auth.hasAnyRole(["employee"])) {
      this.leave.myBalances().subscribe({
        next: (res) => {
          if (res.status === "success" && res.data)
            this.balances.set(res.data);
        },
        error: () => {
        }
      });
      this.leave.myApplications().subscribe({
        next: (res) => {
          if (res.status === "success" && res.data) {
            this.approvedLeaves.set(res.data.filter((application) => application.status === "approved"));
          }
        },
        error: () => {
        }
      });
      this.loadToday();
    }
  }
  /** Whether this user should see the IN/OUT panel (has an employee record). */
  isEmployee() {
    return this.auth.hasAnyRole(["employee"]);
  }
  loadToday() {
    this.attendance.today().subscribe({
      next: (res) => {
        if (res.status === "success")
          this.todayAttendance.set(res.data ?? null);
      },
      error: () => {
      }
    });
  }
  checkIn() {
    this.attendanceError.set(null);
    this.attendanceBusy.set(true);
    this.attendance.checkIn().subscribe({
      next: (res) => {
        this.attendanceBusy.set(false);
        if (res.status === "success" && res.data)
          this.todayAttendance.set(res.data);
      },
      error: (err) => {
        this.attendanceBusy.set(false);
        this.attendanceError.set(err?.error?.message ?? "Failed to check in.");
      }
    });
  }
  checkOut() {
    this.attendanceError.set(null);
    this.attendanceBusy.set(true);
    this.attendance.checkOut().subscribe({
      next: (res) => {
        this.attendanceBusy.set(false);
        if (res.status === "success" && res.data)
          this.todayAttendance.set(res.data);
      },
      error: (err) => {
        this.attendanceBusy.set(false);
        this.attendanceError.set(err?.error?.message ?? "Failed to check out.");
      }
    });
  }
  ngOnDestroy() {
    if (this.clockId !== null) {
      clearInterval(this.clockId);
    }
  }
  isManager() {
    return this.auth.hasAnyRole(["admin", "hr_manager"]);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 28, vars: 15, consts: [[1, "dashboard"], [1, "dashboard-header", "flex", "items-center", "justify-between"], [1, "page-title"], [1, "text-muted"], ["aria-live", "off", 1, "live-clock"], [1, "clock-time"], [1, "clock-date", "text-muted"], [1, "card", "attendance-panel"], [1, "grid"], ["routerLink", "/leave", 1, "card", "tile"], [1, "tile-title"], ["routerLink", "/tasks", 1, "card", "tile"], [1, "card", "on-leave-panel"], [1, "card", "dashboard-leave"], [1, "att-info"], [1, "att-title"], [1, "text-muted", "att-status"], [1, "text-danger", "att-status"], [1, "att-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-danger", 3, "click", "disabled"], ["routerLink", "/employees", 1, "card", "tile"], ["routerLink", "/employees/new", 1, "card", "tile"], [1, "section-title"], ["label", "Loading\u2026"], ["title", "No one is on leave", "message", "Approved current and upcoming leave will show here."], [1, "table"], [1, "leave-balance-grid"], [1, "subsection-title"], [1, "approved-leave-list"], [1, "approved-leave-row"], [1, "badge", "badge-approved"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, DashboardComponent_Conditional_5_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(13, DashboardComponent_Conditional_13_Template, 12, 4, "div", 7);
      \u0275\u0275elementStart(14, "div", 8)(15, "a", 9)(16, "h3", 10);
      \u0275\u0275text(17, "Leave");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 3);
      \u0275\u0275text(19, "Apply for leave and view your balances.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "a", 11)(21, "h3", 10);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 3);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, DashboardComponent_Conditional_25_Template, 10, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, DashboardComponent_Conditional_26_Template, 6, 1, "section", 12);
      \u0275\u0275conditionalCreate(27, DashboardComponent_Conditional_27_Template, 9, 2, "section", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_0_0 = ctx.user()) ? 5 : -1, tmp_0_0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, ctx.now(), "h:mm:ss a"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 12, ctx.now(), "EEEE, MMMM d, y"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isEmployee() ? 13 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.isManager() ? "Task assignments" : "My tasks");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isManager() ? "Assign and manage employee tasks." : "View and update your assigned work.");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isManager() ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isManager() ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.role() === "employee" ? 27 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, SpinnerComponent, EmptyStateComponent, DatePipe], styles: ["\n.dashboard-leave[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n}\n.leave-balance-grid[_ngcontent-%COMP%], \n.approved-leave-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--space-3);\n}\n.leave-balance-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n}\n.leave-balance-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.approved-leave-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.subsection-title[_ngcontent-%COMP%] {\n  margin: var(--space-5) 0 var(--space-3);\n  font-size: 1rem;\n}\n.approved-leave-row[_ngcontent-%COMP%] {\n  padding: var(--space-3) 0;\n  border-top: 1px solid var(--color-border);\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 1.4rem;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--space-4);\n  margin-top: var(--space-5);\n}\n.tile[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n}\n.tile[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.tile-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: 1.05rem;\n}\n.on-leave-panel[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: 1.1rem;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.live-clock[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n.clock-time[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  color: var(--color-primary);\n  line-height: 1.1;\n}\n.clock-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n@media (max-width: 600px) {\n  .live-clock[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    text-align: left;\n  }\n}\n.attendance-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.att-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 1rem;\n}\n.att-status[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.att-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.att-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 64px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink, SpinnerComponent, EmptyStateComponent], template: `<div class="dashboard">
  <div class="dashboard-header flex items-center justify-between">
    <div>
      <h1 class="page-title">Dashboard</h1>
      @if (user(); as u) {
        <p class="text-muted">Welcome back, {{ u.email }}.</p>
      }
    </div>
    <div class="live-clock" aria-live="off">
      <span class="clock-time">{{ now() | date: 'h:mm:ss a' }}</span>
      <span class="clock-date text-muted">{{ now() | date: 'EEEE, MMMM d, y' }}</span>
    </div>
  </div>

  <!-- Attendance IN/OUT (employees) -->
  @if (isEmployee()) {
    <div class="card attendance-panel">
      <div class="att-info">
        <h3 class="att-title">Attendance</h3>
        @if (todayAttendance(); as a) {
          <p class="text-muted att-status">
            @if (a.check_in) { In: {{ a.check_in | date: 'h:mm a' }} } @else { Not checked in }
            @if (a.check_out) { \xB7 Out: {{ a.check_out | date: 'h:mm a' }} }
            @if (a.work_hours != null) { \xB7 {{ a.work_hours }} hrs }
          </p>
        } @else {
          <p class="text-muted att-status">You haven't checked in today.</p>
        }
        @if (attendanceError()) {
          <p class="text-danger att-status">{{ attendanceError() }}</p>
        }
      </div>
      <div class="att-actions">
        <button
          class="btn btn-primary"
          [disabled]="attendanceBusy() || (todayAttendance()?.check_in)"
          (click)="checkIn()"
        >
          IN
        </button>
        <button
          class="btn btn-danger"
          [disabled]="attendanceBusy() || !todayAttendance()?.check_in || todayAttendance()?.check_out"
          (click)="checkOut()"
        >
          OUT
        </button>
      </div>
    </div>
  }

  <div class="grid">
    <a class="card tile" routerLink="/leave">
      <h3 class="tile-title">Leave</h3>
      <p class="text-muted">Apply for leave and view your balances.</p>
    </a>

    <a class="card tile" routerLink="/tasks">
      <h3 class="tile-title">{{ isManager() ? 'Task assignments' : 'My tasks' }}</h3>
      <p class="text-muted">{{ isManager() ? 'Assign and manage employee tasks.' : 'View and update your assigned work.' }}</p>
    </a>

    @if (isManager()) {
      <a class="card tile" routerLink="/employees">
        <h3 class="tile-title">Employees</h3>
        <p class="text-muted">Manage employee records.</p>
      </a>

      <a class="card tile" routerLink="/employees/new">
        <h3 class="tile-title">Add employee</h3>
        <p class="text-muted">Create a new employee profile.</p>
      </a>
    }
  </div>

  @if (isManager()) {
    <section class="card on-leave-panel">
      <h2 class="section-title">Who's on leave</h2>
      @if (onLeaveLoading()) {
        <app-spinner label="Loading\u2026" />
      } @else if (onLeave().length === 0) {
        <app-empty-state
          title="No one is on leave"
          message="Approved current and upcoming leave will show here."
        />
      } @else {
        <table class="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
            </tr>
          </thead>
          <tbody>
            @for (row of onLeave(); track row.id) {
              <tr>
                <td>{{ row.employee_name }} <span class="text-muted">({{ row.employee_code }})</span></td>
                <td>{{ row.leave_type_name }}</td>
                <td>{{ row.start_date }}</td>
                <td>{{ row.end_date }}</td>
                <td>{{ row.total_days }}</td>
              </tr>
            }
          </tbody>
        </table>
      }
    </section>
  }

  @if (role() === 'employee') {
    <section class="card dashboard-leave">
      <h2 class="section-title">Leave summary</h2>
      @if (balances().length === 0) {
        <p class="text-muted">Your leave balance is not available yet.</p>
      } @else {
        <div class="leave-balance-grid">
          @for (balance of balances(); track balance.id) {
            <div>
              <span class="text-muted">{{ balance.leave_type_name }}</span>
              <strong>{{ balance.remaining_days }} days remaining</strong>
            </div>
          }
        </div>
      }

      <h3 class="subsection-title">Approved leave</h3>
      @if (approvedLeaves().length === 0) {
        <p class="text-muted">No approved leave requests.</p>
      } @else {
        <div class="approved-leave-list">
          @for (application of approvedLeaves(); track application.id) {
            <div class="approved-leave-row">
              <span>{{ application.leave_type_name }}</span>
              <span>{{ application.start_date }} to {{ application.end_date }}</span>
              <span class="badge badge-approved">Approved</span>
            </div>
          }
        </div>
      }
    </section>
  }
</div>
`, styles: ["/* src/app/features/dashboard/dashboard.component.scss */\n.dashboard-leave {\n  margin-top: var(--space-5);\n}\n.leave-balance-grid,\n.approved-leave-list {\n  display: grid;\n  gap: var(--space-3);\n}\n.leave-balance-grid {\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n}\n.leave-balance-grid div,\n.approved-leave-row {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.subsection-title {\n  margin: var(--space-5) 0 var(--space-3);\n  font-size: 1rem;\n}\n.approved-leave-row {\n  padding: var(--space-3) 0;\n  border-top: 1px solid var(--color-border);\n}\n.page-title {\n  margin: 0 0 var(--space-1);\n  font-size: 1.4rem;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: var(--space-4);\n  margin-top: var(--space-5);\n}\n.tile {\n  display: block;\n  color: inherit;\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n}\n.tile:hover {\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.tile-title {\n  margin: 0 0 var(--space-2);\n  font-size: 1.05rem;\n}\n.on-leave-panel {\n  margin-top: var(--space-5);\n}\n.section-title {\n  margin: 0 0 var(--space-4);\n  font-size: 1.1rem;\n}\n.dashboard-header {\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.live-clock {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n.clock-time {\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  color: var(--color-primary);\n  line-height: 1.1;\n}\n.clock-date {\n  font-size: 0.85rem;\n}\n@media (max-width: 600px) {\n  .live-clock {\n    align-items: flex-start;\n    text-align: left;\n  }\n}\n.attendance-panel {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.att-title {\n  margin: 0 0 var(--space-1);\n  font-size: 1rem;\n}\n.att-status {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.att-actions {\n  display: flex;\n  gap: var(--space-2);\n}\n.att-actions .btn {\n  min-width: 64px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 33 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-FNSMJ5C3.js.map
