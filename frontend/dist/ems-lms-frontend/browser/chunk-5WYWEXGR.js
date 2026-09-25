import {
  AuthService
} from "./chunk-WKCPM7O5.js";
import {
  EmployeeService
} from "./chunk-SUM7VYCQ.js";
import {
  AlertComponent
} from "./chunk-NWCK7RFC.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-R367NJSO.js";
import {
  EmptyStateComponent
} from "./chunk-FQ6VZRYS.js";
import {
  SpinnerComponent
} from "./chunk-FDAE4OJ5.js";
import {
  Router
} from "./chunk-F3B2X54H.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  computed,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/calendar.service.ts
var CalendarService = class _CalendarService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  /**
   * @param from YYYY-MM-DD (inclusive)
   * @param to   YYYY-MM-DD (inclusive)
   * @param departmentId optional filter (managers/HR only)
   */
  load(from, to, departmentId) {
    let params = new HttpParams().set("from", from).set("to", to);
    if (departmentId != null) {
      params = params.set("department_id", String(departmentId));
    }
    return this.http.get(`${this.base}/calendar`, {
      params
    });
  }
  static \u0275fac = function CalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/calendar/calendar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.date;
function CalendarComponent_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275property("value", d_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.name);
  }
}
function CalendarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 10);
    \u0275\u0275listener("change", function CalendarComponent_Conditional_5_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDepartmentChange($event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 11);
    \u0275\u0275text(2, "All departments");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CalendarComponent_Conditional_5_For_4_Template, 2, 2, "option", 12, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.selectedDepartment() ?? "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.departments());
  }
}
function CalendarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CalendarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function CalendarComponent_Conditional_17_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r4);
  }
}
function CalendarComponent_Conditional_17_For_5_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", cell_r6.holidayName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r6.holidayName);
  }
}
function CalendarComponent_Conditional_17_For_5_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", cell_r6.offCount, " off");
  }
}
function CalendarComponent_Conditional_17_For_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CalendarComponent_Conditional_17_For_5_For_2_Template_button_click_0_listener() {
      const cell_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCell(cell_r6));
    });
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CalendarComponent_Conditional_17_For_5_For_2_Conditional_3_Template, 2, 2, "span", 23);
    \u0275\u0275conditionalCreate(4, CalendarComponent_Conditional_17_For_5_For_2_Conditional_4_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r6 = ctx.$implicit;
    \u0275\u0275classProp("out-month", !cell_r6.inMonth)("weekend", cell_r6.isWeekend)("today", cell_r6.isToday)("has-holiday", cell_r6.holidayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r6.day);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r6.holidayName ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r6.offCount > 0 ? 4 : -1);
  }
}
function CalendarComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, CalendarComponent_Conditional_17_For_5_For_2_Template, 5, 11, "button", 20, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(week_r7);
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r8.holidayDescription);
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 29);
    \u0275\u0275text(2, "\u{1F3D6}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 30);
    \u0275\u0275text(5, "Public Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CalendarComponent_Conditional_17_Conditional_6_Conditional_3_Conditional_8_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(cell_r8.holidayName);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r8.holidayDescription ? 8 : -1);
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "No one is on leave this day.");
    \u0275\u0275elementEnd();
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Conditional_5_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", p_r9.department_name);
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CalendarComponent_Conditional_17_Conditional_6_Conditional_5_For_4_Conditional_3_Template, 2, 1, "span", 27);
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.employee_name);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r9.department_name ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.leave_type_name);
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 33);
    \u0275\u0275repeaterCreate(3, CalendarComponent_Conditional_17_Conditional_6_Conditional_5_For_4_Template, 6, 3, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", cell_r8.people.length, " on leave:");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(cell_r8.people);
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function CalendarComponent_Conditional_17_Conditional_6_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const cell_r8 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyOn(cell_r8.date));
    });
    \u0275\u0275text(1, " Apply for leave on this day ");
    \u0275\u0275elementEnd();
  }
}
function CalendarComponent_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CalendarComponent_Conditional_17_Conditional_6_Conditional_3_Template, 9, 2, "div", 26);
    \u0275\u0275conditionalCreate(4, CalendarComponent_Conditional_17_Conditional_6_Conditional_4_Template, 2, 0, "p", 27)(5, CalendarComponent_Conditional_17_Conditional_6_Conditional_5_Template, 5, 1);
    \u0275\u0275conditionalCreate(6, CalendarComponent_Conditional_17_Conditional_6_Conditional_6_Template, 2, 0, "button", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r8.date);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r8.holidayName ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r8.people.length === 0 ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canApply ? 6 : -1);
  }
}
function CalendarComponent_Conditional_17_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 44);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 45);
    \u0275\u0275text(15, "Public Holiday");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, h_r11.holiday_date, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, h_r11.holiday_date, "MMM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(h_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 10, h_r11.holiday_date, "EEEE"));
  }
}
function CalendarComponent_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 37);
    \u0275\u0275repeaterCreate(4, CalendarComponent_Conditional_17_Conditional_7_For_5_Template, 16, 13, "li", 38, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Holidays in ", ctx_r1.monthLabel());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.monthHolidays());
  }
}
function CalendarComponent_Conditional_17_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 46);
  }
}
function CalendarComponent_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CalendarComponent_Conditional_17_Conditional_8_Conditional_0_Template, 1, 0, "app-empty-state", 46);
  }
  if (rf & 2) {
    const d_r12 = ctx;
    \u0275\u0275conditional(d_r12.holidays.length === 0 && d_r12.leave.length === 0 ? 0 : -1);
  }
}
function CalendarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275repeaterCreate(2, CalendarComponent_Conditional_17_For_3_Template, 2, 1, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, CalendarComponent_Conditional_17_For_5_Template, 3, 0, "div", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CalendarComponent_Conditional_17_Conditional_6_Template, 7, 4, "div", 18);
    \u0275\u0275conditionalCreate(7, CalendarComponent_Conditional_17_Conditional_7_Template, 6, 1, "div", 19);
    \u0275\u0275conditionalCreate(8, CalendarComponent_Conditional_17_Conditional_8_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.weekdayLabels);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.weeks());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.selectedCell()) ? 6 : -1, tmp_3_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.monthHolidays().length > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.data()) ? 8 : -1, tmp_5_0);
  }
}
var CalendarComponent = class _CalendarComponent {
  auth = inject(AuthService);
  calendar = inject(CalendarService);
  employees = inject(EmployeeService);
  router = inject(Router);
  /** Only employees apply for leave; managers/HR review it. */
  canApply = this.auth.hasAnyRole(["employee"]);
  /** Navigate to the leave page with the clicked date prefilled. */
  applyOn(date) {
    this.router.navigate(["/leave"], { queryParams: { start: date, end: date } });
  }
  weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  isManager = this.auth.hasAnyRole(["admin", "hr_manager"]);
  // Displayed month (first-of-month anchor).
  viewYear = signal((/* @__PURE__ */ new Date()).getFullYear(), ...ngDevMode ? [{ debugName: "viewYear" }] : (
    /* istanbul ignore next */
    []
  ));
  viewMonth = signal((/* @__PURE__ */ new Date()).getMonth(), ...ngDevMode ? [{ debugName: "viewMonth" }] : (
    /* istanbul ignore next */
    []
  ));
  // 0-based
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedDepartment = signal(null, ...ngDevMode ? [{ debugName: "selectedDepartment" }] : (
    /* istanbul ignore next */
    []
  ));
  /** A selected day for the detail panel (who's off). */
  selectedCell = signal(null, ...ngDevMode ? [{ debugName: "selectedCell" }] : (
    /* istanbul ignore next */
    []
  ));
  monthLabel = computed(() => `${this.monthNames[this.viewMonth()]} ${this.viewYear()}`, ...ngDevMode ? [{ debugName: "monthLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Holidays that fall in the displayed month, sorted by date — for the
   *  readable "Holidays this month" list below the grid. */
  monthHolidays = computed(() => {
    const d = this.data();
    if (!d)
      return [];
    return [...d.holidays].sort((a, b) => a.holiday_date.localeCompare(b.holiday_date));
  }, ...ngDevMode ? [{ debugName: "monthHolidays" }] : (
    /* istanbul ignore next */
    []
  ));
  /** The 6x7 grid of day cells for the current view month. */
  cells = computed(() => {
    const year = this.viewYear();
    const month = this.viewMonth();
    const d = this.data();
    const availability = d?.availability ?? {};
    const holidaysByDate = /* @__PURE__ */ new Map();
    const holidayDescByDate = /* @__PURE__ */ new Map();
    (d?.holidays ?? []).forEach((h) => {
      holidaysByDate.set(h.holiday_date, h.name);
      holidayDescByDate.set(h.holiday_date, h.description);
    });
    const leaveByDate = this.groupLeaveByDate(d?.leave ?? []);
    const first = new Date(year, month, 1);
    const startOffset = first.getDay();
    const gridStart = new Date(year, month, 1 - startOffset);
    const todayStr = this.toStr(/* @__PURE__ */ new Date());
    const cells = [];
    for (let i = 0; i < 42; i++) {
      const cur = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
      const dateStr = this.toStr(cur);
      const dow = cur.getDay();
      cells.push({
        date: dateStr,
        day: cur.getDate(),
        inMonth: cur.getMonth() === month,
        isToday: dateStr === todayStr,
        isWeekend: dow === 0 || dow === 6,
        holidayName: holidaysByDate.get(dateStr) ?? null,
        holidayDescription: holidayDescByDate.get(dateStr) ?? null,
        offCount: availability[dateStr] ?? 0,
        people: leaveByDate.get(dateStr) ?? []
      });
    }
    return cells;
  }, ...ngDevMode ? [{ debugName: "cells" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Rows of 7 cells for the template. */
  weeks = computed(() => {
    const all = this.cells();
    const rows = [];
    for (let i = 0; i < all.length; i += 7) {
      rows.push(all.slice(i, i + 7));
    }
    return rows;
  }, ...ngDevMode ? [{ debugName: "weeks" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    if (this.isManager) {
      this.employees.departments().subscribe({
        next: (res) => {
          if (res.status === "success" && res.data)
            this.departments.set(res.data);
        },
        error: () => {
        }
      });
    }
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.selectedCell.set(null);
    const { from, to } = this.monthBounds();
    this.calendar.load(from, to, this.selectedDepartment()).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === "success" && res.data) {
          this.data.set(res.data);
        } else {
          this.error.set(res.message || "Failed to load calendar");
        }
      },
      error: (err) => {
        this.loading.set(false);
        const body = err.error;
        this.error.set(body?.message ?? "Unable to load calendar.");
      }
    });
  }
  prevMonth() {
    let m = this.viewMonth() - 1;
    let y = this.viewYear();
    if (m < 0) {
      m = 11;
      y--;
    }
    this.viewMonth.set(m);
    this.viewYear.set(y);
    this.load();
  }
  nextMonth() {
    let m = this.viewMonth() + 1;
    let y = this.viewYear();
    if (m > 11) {
      m = 0;
      y++;
    }
    this.viewMonth.set(m);
    this.viewYear.set(y);
    this.load();
  }
  today() {
    const now = /* @__PURE__ */ new Date();
    this.viewMonth.set(now.getMonth());
    this.viewYear.set(now.getFullYear());
    this.load();
  }
  onDepartmentChange(value) {
    this.selectedDepartment.set(value === "" ? null : Number(value));
    this.load();
  }
  selectCell(cell) {
    this.selectedCell.set(cell.inMonth ? cell : null);
  }
  // --- helpers ---
  /** First and last day of the displayed month as YYYY-MM-DD. */
  monthBounds() {
    const y = this.viewYear();
    const m = this.viewMonth();
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0);
    return { from: this.toStr(first), to: this.toStr(last) };
  }
  /** Map each date in the window to the people off that day. */
  groupLeaveByDate(leave) {
    const map = /* @__PURE__ */ new Map();
    const { from, to } = this.monthBounds();
    const fromTs = (/* @__PURE__ */ new Date(from + "T00:00:00")).getTime();
    const toTs = (/* @__PURE__ */ new Date(to + "T00:00:00")).getTime();
    for (const entry of leave) {
      const s = Math.max(fromTs, (/* @__PURE__ */ new Date(entry.start_date + "T00:00:00")).getTime());
      const e = Math.min(toTs, (/* @__PURE__ */ new Date(entry.end_date + "T00:00:00")).getTime());
      for (let ts = s; ts <= e; ts += 864e5) {
        const key = this.toStr(new Date(ts));
        const arr = map.get(key) ?? [];
        arr.push(entry);
        map.set(key, arr);
      }
    }
    return map;
  }
  /** Local-date -> YYYY-MM-DD (avoids UTC off-by-one from toISOString). */
  toStr(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], decls: 18, vars: 4, consts: [[1, "calendar"], [1, "cal-header", "flex", "items-center", "justify-between"], [1, "page-title"], [1, "cal-controls", "flex", "items-center", "gap-2"], [1, "form-control", "dept-filter", 3, "value"], [1, "btn", 3, "click"], [1, "cal-nav", "flex", "items-center", "justify-between"], [1, "cal-month"], ["type", "error"], [1, "state"], [1, "form-control", "dept-filter", 3, "change", "value"], ["value", ""], [3, "value"], ["label", "Loading calendar\u2026"], [1, "card", "cal-card"], [1, "cal-grid", "cal-weekdays"], [1, "cal-weekday"], [1, "cal-grid"], [1, "card", "cal-detail"], [1, "card", "holidays-card"], ["type", "button", 1, "cal-cell", 3, "out-month", "weekend", "today", "has-holiday"], ["type", "button", 1, "cal-cell", 3, "click"], [1, "cal-daynum"], [1, "cal-holiday-chip", 3, "title"], [1, "cal-off-badge"], [1, "detail-title"], [1, "holiday-banner"], [1, "text-muted"], [1, "btn", "btn-primary", "detail-apply"], [1, "holiday-icon"], [1, "holiday-label"], [1, "holiday-name"], [1, "holiday-desc"], [1, "detail-list"], [1, "badge", "badge-approved"], [1, "btn", "btn-primary", "detail-apply", 3, "click"], [1, "holidays-title"], [1, "holidays-list"], [1, "holiday-row"], [1, "holiday-date"], [1, "hd-day"], [1, "hd-mon"], [1, "holiday-info"], [1, "holiday-row-name"], [1, "holiday-row-dow", "text-muted"], [1, "badge", "holiday-tag"], ["title", "Nothing scheduled", "message", "No holidays or approved leave in this month for the current view."]], template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Team Leave Calendar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275conditionalCreate(5, CalendarComponent_Conditional_5_Template, 5, 1, "select", 4);
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_6_listener() {
        return ctx.today();
      });
      \u0275\u0275text(7, "Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 5);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_9_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275text(10, "\u2039 Prev");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "strong", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_13_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275text(14, "Next \u203A");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, CalendarComponent_Conditional_15_Template, 2, 1, "app-alert", 8);
      \u0275\u0275conditionalCreate(16, CalendarComponent_Conditional_16_Template, 2, 0, "div", 9)(17, CalendarComponent_Conditional_17_Template, 9, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isManager ? 5 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.monthLabel());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.error() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 16 : 17);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
    DatePipe
  ], styles: ["\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n}\n.cal-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  flex-wrap: wrap;\n  gap: var(--space-3);\n}\n.dept-filter[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.cal-nav[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.cal-month[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.cal-card[_ngcontent-%COMP%] {\n  padding: var(--space-2);\n}\n.cal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: var(--space-1);\n}\n.cal-weekdays[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-1);\n}\n.cal-weekday[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--color-muted);\n  padding: var(--space-1) 0;\n}\n.cal-cell[_ngcontent-%COMP%] {\n  min-height: 84px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  padding: var(--space-1) var(--space-2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n  cursor: pointer;\n  text-align: left;\n  font: inherit;\n}\n.cal-cell[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n}\n.cal-cell.out-month[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n  color: var(--color-muted);\n}\n.cal-cell.weekend[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.cal-cell.today[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  box-shadow: inset 0 0 0 1px var(--color-primary);\n}\n.cal-cell.has-holiday[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.cal-cell.has-holiday[_ngcontent-%COMP%]   .cal-daynum[_ngcontent-%COMP%] {\n  color: #c2410c;\n}\n.cal-daynum[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.cal-holiday-chip[_ngcontent-%COMP%] {\n  align-self: stretch;\n  font-size: 0.64rem;\n  font-weight: 600;\n  color: #9a3412;\n  background: #ffedd5;\n  border: 1px solid #fed7aa;\n  border-radius: 4px;\n  padding: 1px 5px;\n  line-height: 1.25;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-word;\n}\n.cal-off-badge[_ngcontent-%COMP%] {\n  margin-top: auto;\n  font-size: 0.68rem;\n  font-weight: 600;\n  background: #dbeafe;\n  color: var(--color-primary);\n  border-radius: 999px;\n  padding: 1px 8px;\n}\n.cal-detail[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n.detail-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: 1rem;\n}\n.holiday-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  background:\n    linear-gradient(\n      135deg,\n      #fff7ed,\n      #ffedd5);\n  border: 1px solid #fed7aa;\n  border-radius: var(--radius);\n  padding: var(--space-3);\n  margin: 0 0 var(--space-3);\n}\n.holiday-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1;\n  margin-top: 0.15rem;\n}\n.holiday-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #c2410c;\n}\n.holiday-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.holiday-desc[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: var(--color-muted);\n}\n.holidays-card[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n.holidays-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-3);\n  font-size: 1.05rem;\n}\n.holidays-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.holiday-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.holiday-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.holiday-date[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius);\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.hd-day[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #c2410c;\n}\n.hd-mon[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  text-transform: uppercase;\n  color: #9a3412;\n}\n.holiday-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.holiday-row-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.holiday-row-dow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.holiday-tag[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n  flex-shrink: 0;\n}\n.detail-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: var(--space-2) 0 0;\n  padding: 0;\n}\n.detail-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: var(--space-2) 0;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.detail-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-apply[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n}\n@media (max-width: 640px) {\n  .cal-cell[_ngcontent-%COMP%] {\n    min-height: 60px;\n  }\n  .cal-holiday-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .holiday-tag[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{ selector: "app-calendar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      SpinnerComponent,
      EmptyStateComponent,
      AlertComponent
    ], template: `<div class="calendar">
  <div class="cal-header flex items-center justify-between">
    <h1 class="page-title">Team Leave Calendar</h1>
    <div class="cal-controls flex items-center gap-2">
      @if (isManager) {
        <select
          class="form-control dept-filter"
          [value]="selectedDepartment() ?? ''"
          (change)="onDepartmentChange($any($event.target).value)"
        >
          <option value="">All departments</option>
          @for (d of departments(); track d.id) {
            <option [value]="d.id">{{ d.name }}</option>
          }
        </select>
      }
      <button class="btn" (click)="today()">Today</button>
    </div>
  </div>

  <div class="cal-nav flex items-center justify-between">
    <button class="btn" (click)="prevMonth()">\u2039 Prev</button>
    <strong class="cal-month">{{ monthLabel() }}</strong>
    <button class="btn" (click)="nextMonth()">Next \u203A</button>
  </div>

  @if (error()) {
    <app-alert type="error">{{ error() }}</app-alert>
  }

  @if (loading()) {
    <div class="state"><app-spinner label="Loading calendar\u2026" /></div>
  } @else {
    <div class="card cal-card">
      <div class="cal-grid cal-weekdays">
        @for (w of weekdayLabels; track w) {
          <div class="cal-weekday">{{ w }}</div>
        }
      </div>

      @for (week of weeks(); track $index) {
        <div class="cal-grid">
          @for (cell of week; track cell.date) {
            <button
              type="button"
              class="cal-cell"
              [class.out-month]="!cell.inMonth"
              [class.weekend]="cell.isWeekend"
              [class.today]="cell.isToday"
              [class.has-holiday]="cell.holidayName"
              (click)="selectCell(cell)"
            >
              <span class="cal-daynum">{{ cell.day }}</span>
              @if (cell.holidayName) {
                <span class="cal-holiday-chip" [title]="cell.holidayName">{{ cell.holidayName }}</span>
              }
              @if (cell.offCount > 0) {
                <span class="cal-off-badge">{{ cell.offCount }} off</span>
              }
            </button>
          }
        </div>
      }
    </div>

    <!-- Day detail: who is off (availability, no reasons) -->
    @if (selectedCell(); as cell) {
      <div class="card cal-detail">
        <h3 class="detail-title">{{ cell.date }}</h3>
        @if (cell.holidayName) {
          <div class="holiday-banner">
            <span class="holiday-icon">\u{1F3D6}\uFE0F</span>
            <div>
              <div class="holiday-label">Public Holiday</div>
              <div class="holiday-name">{{ cell.holidayName }}</div>
              @if (cell.holidayDescription) {
                <p class="holiday-desc">{{ cell.holidayDescription }}</p>
              }
            </div>
          </div>
        }
        @if (cell.people.length === 0) {
          <p class="text-muted">No one is on leave this day.</p>
        } @else {
          <p class="text-muted">{{ cell.people.length }} on leave:</p>
          <ul class="detail-list">
            @for (p of cell.people; track p.id) {
              <li>
                <strong>{{ p.employee_name }}</strong>
                @if (p.department_name) { <span class="text-muted"> \xB7 {{ p.department_name }}</span> }
                <span class="badge badge-approved">{{ p.leave_type_name }}</span>
              </li>
            }
          </ul>
        }

        @if (canApply) {
          <button class="btn btn-primary detail-apply" (click)="applyOn(cell.date)">
            Apply for leave on this day
          </button>
        }
      </div>
    }

    <!-- Holidays this month -->
    @if (monthHolidays().length > 0) {
      <div class="card holidays-card">
        <h3 class="holidays-title">Holidays in {{ monthLabel() }}</h3>
        <ul class="holidays-list">
          @for (h of monthHolidays(); track h.id) {
            <li class="holiday-row">
              <div class="holiday-date">
                <span class="hd-day">{{ h.holiday_date | date: 'd' }}</span>
                <span class="hd-mon">{{ h.holiday_date | date: 'MMM' }}</span>
              </div>
              <div class="holiday-info">
                <span class="holiday-row-name">{{ h.name }}</span>
                <span class="holiday-row-dow text-muted">{{ h.holiday_date | date: 'EEEE' }}</span>
              </div>
              <span class="badge holiday-tag">Public Holiday</span>
            </li>
          }
        </ul>
      </div>
    }

    @if (data(); as d) {
      @if (d.holidays.length === 0 && d.leave.length === 0) {
        <app-empty-state
          title="Nothing scheduled"
          message="No holidays or approved leave in this month for the current view."
        />
      }
    }
  }
</div>
`, styles: ["/* src/app/features/calendar/calendar.component.scss */\n.page-title {\n  margin: 0;\n  font-size: 1.4rem;\n}\n.cal-header {\n  margin-bottom: var(--space-4);\n  flex-wrap: wrap;\n  gap: var(--space-3);\n}\n.dept-filter {\n  max-width: 220px;\n}\n.cal-nav {\n  margin-bottom: var(--space-4);\n}\n.cal-month {\n  font-size: 1.1rem;\n}\n.state {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.cal-card {\n  padding: var(--space-2);\n}\n.cal-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: var(--space-1);\n}\n.cal-weekdays {\n  margin-bottom: var(--space-1);\n}\n.cal-weekday {\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--color-muted);\n  padding: var(--space-1) 0;\n}\n.cal-cell {\n  min-height: 84px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  padding: var(--space-1) var(--space-2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n  cursor: pointer;\n  text-align: left;\n  font: inherit;\n}\n.cal-cell:hover {\n  border-color: var(--color-primary);\n}\n.cal-cell.out-month {\n  background: var(--color-bg);\n  color: var(--color-muted);\n}\n.cal-cell.weekend {\n  background: #f8fafc;\n}\n.cal-cell.today {\n  border-color: var(--color-primary);\n  box-shadow: inset 0 0 0 1px var(--color-primary);\n}\n.cal-cell.has-holiday {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.cal-cell.has-holiday .cal-daynum {\n  color: #c2410c;\n}\n.cal-daynum {\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.cal-holiday-chip {\n  align-self: stretch;\n  font-size: 0.64rem;\n  font-weight: 600;\n  color: #9a3412;\n  background: #ffedd5;\n  border: 1px solid #fed7aa;\n  border-radius: 4px;\n  padding: 1px 5px;\n  line-height: 1.25;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-word;\n}\n.cal-off-badge {\n  margin-top: auto;\n  font-size: 0.68rem;\n  font-weight: 600;\n  background: #dbeafe;\n  color: var(--color-primary);\n  border-radius: 999px;\n  padding: 1px 8px;\n}\n.cal-detail {\n  margin-top: var(--space-4);\n}\n.detail-title {\n  margin: 0 0 var(--space-2);\n  font-size: 1rem;\n}\n.holiday-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  background:\n    linear-gradient(\n      135deg,\n      #fff7ed,\n      #ffedd5);\n  border: 1px solid #fed7aa;\n  border-radius: var(--radius);\n  padding: var(--space-3);\n  margin: 0 0 var(--space-3);\n}\n.holiday-icon {\n  font-size: 1.5rem;\n  line-height: 1;\n  margin-top: 0.15rem;\n}\n.holiday-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #c2410c;\n}\n.holiday-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.holiday-desc {\n  margin: var(--space-2) 0 0;\n  font-size: 0.85rem;\n  line-height: 1.4;\n  color: var(--color-muted);\n}\n.holidays-card {\n  margin-top: var(--space-4);\n}\n.holidays-title {\n  margin: 0 0 var(--space-3);\n  font-size: 1.05rem;\n}\n.holidays-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.holiday-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.holiday-row:last-child {\n  border-bottom: none;\n}\n.holiday-date {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius);\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n}\n.hd-day {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #c2410c;\n}\n.hd-mon {\n  font-size: 0.62rem;\n  text-transform: uppercase;\n  color: #9a3412;\n}\n.holiday-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.holiday-row-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.holiday-row-dow {\n  font-size: 0.8rem;\n}\n.holiday-tag {\n  background: #ffedd5;\n  color: #c2410c;\n  flex-shrink: 0;\n}\n.detail-list {\n  list-style: none;\n  margin: var(--space-2) 0 0;\n  padding: 0;\n}\n.detail-list li {\n  padding: var(--space-2) 0;\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.detail-list li:last-child {\n  border-bottom: none;\n}\n.detail-apply {\n  margin-top: var(--space-4);\n}\n@media (max-width: 640px) {\n  .cal-cell {\n    min-height: 60px;\n  }\n  .cal-holiday-chip {\n    display: none;\n  }\n  .holiday-tag {\n    display: none;\n  }\n}\n/*# sourceMappingURL=calendar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src/app/features/calendar/calendar.component.ts", lineNumber: 54 });
})();
export {
  CalendarComponent
};
//# sourceMappingURL=chunk-5WYWEXGR.js.map
