import {
  AuthService
} from "./chunk-WKCPM7O5.js";
import {
  ConfirmDialogComponent
} from "./chunk-MCR2BQH6.js";
import {
  AlertComponent
} from "./chunk-NWCK7RFC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-R367NJSO.js";
import {
  EmptyStateComponent
} from "./chunk-FQ6VZRYS.js";
import {
  SpinnerComponent
} from "./chunk-FDAE4OJ5.js";
import {
  ActivatedRoute
} from "./chunk-F3B2X54H.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/profile.service.ts
var ProfileService = class _ProfileService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  full(employeeId) {
    return this.http.get(`${this.base}/employees/${employeeId}/360-profile`);
  }
  /** The caller's own 360 profile (resolves employee from the token). */
  me() {
    return this.http.get(`${this.base}/employees/me/360-profile`);
  }
  activities(employeeId, page = 1) {
    const params = new HttpParams().set("page", String(page));
    return this.http.get(`${this.base}/employees/${employeeId}/activities`, { params });
  }
  skills(employeeId) {
    return this.http.get(`${this.base}/employees/${employeeId}/skills`);
  }
  addSkill(employeeId, payload) {
    return this.http.post(`${this.base}/employees/${employeeId}/skills`, payload);
  }
  updateSkill(employeeId, skillId, payload) {
    return this.http.put(`${this.base}/employees/${employeeId}/skills/${skillId}`, payload);
  }
  deleteSkill(employeeId, skillId) {
    return this.http.delete(`${this.base}/employees/${employeeId}/skills/${skillId}`);
  }
  /**
   * Save permitted personal fields. Payload is a loose record because it
   * comes from a plain reactive form; the backend whitelists + validates the
   * keys authoritatively (mass-assignment safe there).
   */
  savePersonal(employeeId, payload) {
    return this.http.put(`${this.base}/employees/${employeeId}/personal`, payload);
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/profile/profile.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ProfileComponent_Conditional_3_Conditional_55_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", p_r3.attendance_summary.present_days, " present days");
  }
}
function ProfileComponent_Conditional_3_Conditional_55_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 24);
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("message", p_r3.attendance_summary.message || "Attendance not tracked.");
  }
}
function ProfileComponent_Conditional_3_Conditional_55_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 25);
  }
}
function ProfileComponent_Conditional_3_Conditional_55_Conditional_45_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.work_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.check_in ? \u0275\u0275pipeBind2(5, 5, a_r4.check_in, "h:mm a") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.check_out ? \u0275\u0275pipeBind2(8, 8, a_r4.check_out, "h:mm a") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.work_hours ?? "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.status);
  }
}
function ProfileComponent_Conditional_3_Conditional_55_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Check in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Check out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ProfileComponent_Conditional_3_Conditional_55_Conditional_45_For_15_Template, 14, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(p_r3.attendance_summary.history);
  }
}
function ProfileComponent_Conditional_3_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 21);
    \u0275\u0275text(2, "Employment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dl", 22)(4, "div")(5, "dt");
    \u0275\u0275text(6, "Employee code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dd");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "dt");
    \u0275\u0275text(11, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "dt");
    \u0275\u0275text(16, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "dt");
    \u0275\u0275text(21, "Joining date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "dt");
    \u0275\u0275text(26, "Employment type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "dt");
    \u0275\u0275text(31, "Work location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "dt");
    \u0275\u0275text(36, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 20)(40, "h3", 21);
    \u0275\u0275text(41, " Attendance ");
    \u0275\u0275conditionalCreate(42, ProfileComponent_Conditional_3_Conditional_55_Conditional_42_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, ProfileComponent_Conditional_3_Conditional_55_Conditional_43_Template, 1, 1, "app-empty-state", 24)(44, ProfileComponent_Conditional_3_Conditional_55_Conditional_44_Template, 1, 0, "app-empty-state", 25)(45, ProfileComponent_Conditional_3_Conditional_55_Conditional_45_Template, 16, 0, "table", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(p_r3.employee.employee_code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.employee.department_name || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.employee.designation_title || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.employee.date_of_joining);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((p_r3.personal_information == null ? null : p_r3.personal_information.employment_type) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((p_r3.personal_information == null ? null : p_r3.personal_information.work_location) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.employee.status);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(p_r3.attendance_summary.present_days != null ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!p_r3.attendance_summary.available ? 43 : !p_r3.attendance_summary.history || p_r3.attendance_summary.history.length === 0 ? 44 : 45);
  }
}
function ProfileComponent_Conditional_3_Conditional_56_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 28);
  }
}
function ProfileComponent_Conditional_3_Conditional_56_Conditional_4_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.leave_type_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.allocated_days);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.used_days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.remaining_days);
  }
}
function ProfileComponent_Conditional_3_Conditional_56_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Allocated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Remaining");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, ProfileComponent_Conditional_3_Conditional_56_Conditional_4_For_13_Template, 10, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(p_r3.leave_summary.balances);
  }
}
function ProfileComponent_Conditional_3_Conditional_56_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 29);
  }
}
function ProfileComponent_Conditional_3_Conditional_56_Conditional_9_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.leave_type_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.start_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.end_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.total_days);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge badge-" + a_r6.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.status);
  }
}
function ProfileComponent_Conditional_3_Conditional_56_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ProfileComponent_Conditional_3_Conditional_56_Conditional_9_For_15_Template, 12, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(p_r3.leave_summary.recent);
  }
}
function ProfileComponent_Conditional_3_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 21);
    \u0275\u0275text(2, "Leave balances");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProfileComponent_Conditional_3_Conditional_56_Conditional_3_Template, 1, 0, "app-empty-state", 28)(4, ProfileComponent_Conditional_3_Conditional_56_Conditional_4_Template, 14, 0, "table", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "h3", 21);
    \u0275\u0275text(7, "Recent leave");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ProfileComponent_Conditional_3_Conditional_56_Conditional_8_Template, 1, 0, "app-empty-state", 29)(9, ProfileComponent_Conditional_3_Conditional_56_Conditional_9_Template, 16, 0, "table", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r3.leave_summary.balances.length === 0 ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(p_r3.leave_summary.recent.length === 0 ? 8 : 9);
  }
}
function ProfileComponent_Conditional_3_Conditional_57_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.skillError());
  }
}
function ProfileComponent_Conditional_3_Conditional_57_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Conditional_57_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startAddSkill());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_3_Conditional_57_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 40);
  }
}
function ProfileComponent_Conditional_3_Conditional_57_Conditional_20_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 42)(8, "button", 43);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Conditional_57_Conditional_20_For_13_Template_button_click_8_listener() {
      const s_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.startEditSkill(s_r10));
    });
    \u0275\u0275text(9, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 44);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Conditional_57_Conditional_20_For_13_Template_button_click_10_listener() {
      const s_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.askDeleteSkill(s_r10));
    });
    \u0275\u0275text(11, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r10.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r10.years_experience ?? "\u2014");
  }
}
function ProfileComponent_Conditional_3_Conditional_57_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Skill");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Years");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 42);
    \u0275\u0275text(10, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, ProfileComponent_Conditional_3_Conditional_57_Conditional_20_For_13_Template, 12, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.data().skills);
  }
}
function ProfileComponent_Conditional_3_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 21);
    \u0275\u0275text(2, "Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProfileComponent_Conditional_3_Conditional_57_Conditional_3_Template, 2, 1, "app-alert", 2);
    \u0275\u0275elementStart(4, "form", 30);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_Conditional_3_Conditional_57_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitSkill());
    });
    \u0275\u0275element(5, "input", 31);
    \u0275\u0275elementStart(6, "select", 32)(7, "option", 33);
    \u0275\u0275text(8, "Beginner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 34);
    \u0275\u0275text(10, "Intermediate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 35);
    \u0275\u0275text(12, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 36);
    \u0275\u0275text(14, "Expert");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 37);
    \u0275\u0275elementStart(16, "button", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProfileComponent_Conditional_3_Conditional_57_Conditional_18_Template, 2, 0, "button", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ProfileComponent_Conditional_3_Conditional_57_Conditional_19_Template, 1, 0, "app-empty-state", 40)(20, ProfileComponent_Conditional_3_Conditional_57_Conditional_20_Template, 14, 0, "table", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.skillError() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.skillForm);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.editingSkillId() ? "Update" : "Add");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.editingSkillId() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data().skills.length === 0 ? 19 : 20);
  }
}
function ProfileComponent_Conditional_3_Conditional_58_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 45);
  }
}
function ProfileComponent_Conditional_3_Conditional_58_Conditional_4_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const act_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 by ", act_r11.actor_email, " ");
  }
}
function ProfileComponent_Conditional_3_Conditional_58_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, ProfileComponent_Conditional_3_Conditional_58_Conditional_4_For_2_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const act_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r11.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", act_r11.created_at, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(act_r11.actor_email ? 5 : -1);
  }
}
function ProfileComponent_Conditional_3_Conditional_58_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 46);
    \u0275\u0275repeaterCreate(1, ProfileComponent_Conditional_3_Conditional_58_Conditional_4_For_2_Template, 6, 3, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r3.recent_activities.items);
  }
}
function ProfileComponent_Conditional_3_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 21);
    \u0275\u0275text(2, "Activity timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProfileComponent_Conditional_3_Conditional_58_Conditional_3_Template, 1, 0, "app-empty-state", 45)(4, ProfileComponent_Conditional_3_Conditional_58_Conditional_4_Template, 3, 0, "ul", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r3.recent_activities.items.length === 0 ? 3 : 4);
  }
}
function ProfileComponent_Conditional_3_Conditional_59_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.personalSuccess());
  }
}
function ProfileComponent_Conditional_3_Conditional_59_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.personalError());
  }
}
function ProfileComponent_Conditional_3_Conditional_59_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, "Emergency contact must be exactly 10 digits.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_3_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 21);
    \u0275\u0275text(2, "Personal information");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProfileComponent_Conditional_3_Conditional_59_Conditional_3_Template, 2, 1, "app-alert", 49);
    \u0275\u0275conditionalCreate(4, ProfileComponent_Conditional_3_Conditional_59_Conditional_4_Template, 2, 1, "app-alert", 2);
    \u0275\u0275elementStart(5, "form", 50);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_Conditional_3_Conditional_59_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePersonal());
    });
    \u0275\u0275elementStart(6, "div", 51)(7, "label", 52);
    \u0275\u0275text(8, "Date of birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 51)(11, "label", 52);
    \u0275\u0275text(12, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 54)(14, "option", 55);
    \u0275\u0275text(15, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 56);
    \u0275\u0275text(17, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 57);
    \u0275\u0275text(19, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 58);
    \u0275\u0275text(21, "Other");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 59);
    \u0275\u0275text(23, "Prefer not to say");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 51)(25, "label", 52);
    \u0275\u0275text(26, "Employment type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 60)(28, "option", 55);
    \u0275\u0275text(29, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 61);
    \u0275\u0275text(31, "Full time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 62);
    \u0275\u0275text(33, "Part time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 63);
    \u0275\u0275text(35, "Contract");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 64);
    \u0275\u0275text(37, "Intern");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 51)(39, "label", 52);
    \u0275\u0275text(40, "Work location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 66)(43, "label", 52);
    \u0275\u0275text(44, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 51)(47, "label", 52);
    \u0275\u0275text(48, "Emergency contact name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 51)(51, "label", 52);
    \u0275\u0275text(52, "Emergency contact phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 69);
    \u0275\u0275listener("keypress", function ProfileComponent_Conditional_3_Conditional_59_Template_input_keypress_53_listener($event) {
      return $event.charCode < 48 || $event.charCode > 57 ? $event.preventDefault() : null;
    })("input", function ProfileComponent_Conditional_3_Conditional_59_Template_input_input_53_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPhoneInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(54, ProfileComponent_Conditional_3_Conditional_59_Conditional_54_Template, 2, 0, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 51)(56, "label", 52);
    \u0275\u0275text(57, "Joining date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 72)(60, "button", 38);
    \u0275\u0275text(61, "Save personal info");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.personalSuccess() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.personalError() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.personalForm);
    \u0275\u0275advance(48);
    \u0275\u0275classProp("is-invalid", ctx_r0.personalForm.controls.emergency_contact_phone.invalid && ctx_r0.personalForm.controls.emergency_contact_phone.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.personalForm.controls.emergency_contact_phone.touched && (ctx_r0.personalForm.controls.emergency_contact_phone.errors == null ? null : ctx_r0.personalForm.controls.emergency_contact_phone.errors["pattern"]) ? 54 : -1);
  }
}
function ProfileComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "h1", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "span", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "span", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23, "Approved leave");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "span", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 16);
    \u0275\u0275text(28, "Available days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "span", 15);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 16);
    \u0275\u0275text(33, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 14)(35, "span", 15);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 16);
    \u0275\u0275text(38, "Rejected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 14)(40, "span", 17);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 16);
    \u0275\u0275text(43, "Tenure");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 18)(45, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab("overview"));
    });
    \u0275\u0275text(46, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab("leave"));
    });
    \u0275\u0275text(48, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab("skills"));
    });
    \u0275\u0275text(50, "Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab("activity"));
    });
    \u0275\u0275text(52, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_3_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab("personal"));
    });
    \u0275\u0275text(54, "Personal");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(55, ProfileComponent_Conditional_3_Conditional_55_Template, 46, 9);
    \u0275\u0275conditionalCreate(56, ProfileComponent_Conditional_3_Conditional_56_Template, 10, 2);
    \u0275\u0275conditionalCreate(57, ProfileComponent_Conditional_3_Conditional_57_Template, 21, 5, "div", 20);
    \u0275\u0275conditionalCreate(58, ProfileComponent_Conditional_3_Conditional_58_Template, 5, 1, "div", 20);
    \u0275\u0275conditionalCreate(59, ProfileComponent_Conditional_3_Conditional_59_Template, 62, 6, "div", 20);
  }
  if (rf & 2) {
    const p_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (p_r3.employee.first_name || "?").charAt(0), "", (p_r3.employee.last_name || "").charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r3.employee.first_name, " ", p_r3.employee.last_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.employee.employee_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", p_r3.employee.designation_title || "No designation");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", p_r3.employee.department_name || "No department");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-approved", p_r3.employee.status === "active")("badge-cancelled", p_r3.employee.status === "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.employee.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined ", p_r3.employee.date_of_joining);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r3.summary.approved_leave_count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.summary.available_leave_days);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.summary.pending_leave_count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.summary.rejected_leave_count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.summary.employment_duration || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "leave");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "skills");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "activity");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab() === "personal");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.activeTab() === "overview" ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "leave" ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "skills" ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "activity" ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "personal" ? 59 : -1);
  }
}
var ProfileComponent = class _ProfileComponent {
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  profile = inject(ProfileService);
  employeeId = signal(null, ...ngDevMode ? [{ debugName: "employeeId" }] : (
    /* istanbul ignore next */
    []
  ));
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
  activeTab = signal("overview", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- skills editing ---
  skillError = signal(null, ...ngDevMode ? [{ debugName: "skillError" }] : (
    /* istanbul ignore next */
    []
  ));
  editingSkillId = signal(null, ...ngDevMode ? [{ debugName: "editingSkillId" }] : (
    /* istanbul ignore next */
    []
  ));
  confirmOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  pendingDeleteSkill = null;
  skillForm = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.maxLength(80)]],
    level: this.fb.nonNullable.control("beginner"),
    years_experience: this.fb.control(null)
  });
  // --- personal editing ---
  personalError = signal(null, ...ngDevMode ? [{ debugName: "personalError" }] : (
    /* istanbul ignore next */
    []
  ));
  personalSuccess = signal(null, ...ngDevMode ? [{ debugName: "personalSuccess" }] : (
    /* istanbul ignore next */
    []
  ));
  personalForm = this.fb.group({
    date_of_joining: [""],
    date_of_birth: [""],
    gender: [""],
    address: [""],
    work_location: [""],
    employment_type: [""],
    emergency_contact_name: [""],
    // Optional, but if provided must be exactly 10 digits.
    emergency_contact_phone: ["", [Validators.pattern(/^\d{10}$/)]]
  });
  /** True when viewing own profile via the /my-profile route (id === 'me'). */
  meMode = false;
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam === "me") {
      this.meMode = true;
      this.load();
      return;
    }
    const id = idParam ? Number(idParam) : NaN;
    if (!idParam || Number.isNaN(id) || id <= 0) {
      this.error.set("Invalid employee id.");
      return;
    }
    this.employeeId.set(id);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const req$ = this.meMode ? this.profile.me() : this.profile.full(this.employeeId());
    req$.subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === "success" && res.data) {
          this.employeeId.set(res.data.employee.id);
          this.data.set(res.data);
          this.prefillPersonal(res.data);
        } else {
          this.error.set(res.message || "Failed to load profile");
        }
      },
      error: (err) => {
        this.loading.set(false);
        const body = err.error;
        if (err.status === 403) {
          this.error.set("You do not have permission to view this profile.");
        } else if (err.status === 404) {
          this.error.set("Employee not found.");
        } else {
          this.error.set(body?.message ?? "Unable to load profile.");
        }
      }
    });
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  prefillPersonal(p) {
    const pi = p.personal_information;
    this.personalForm.patchValue({
      date_of_joining: p.employee.date_of_joining ?? "",
      date_of_birth: pi?.date_of_birth ?? "",
      gender: pi?.gender ?? "",
      address: pi?.address ?? "",
      work_location: pi?.work_location ?? "",
      employment_type: pi?.employment_type ?? "",
      emergency_contact_name: pi?.emergency_contact_name ?? "",
      emergency_contact_phone: pi?.emergency_contact_phone ?? ""
    });
  }
  // --- skills ---
  get sf() {
    return this.skillForm.controls;
  }
  startAddSkill() {
    this.editingSkillId.set(null);
    this.skillError.set(null);
    this.skillForm.reset({ name: "", level: "beginner", years_experience: null });
  }
  startEditSkill(skill) {
    this.editingSkillId.set(skill.id);
    this.skillError.set(null);
    this.skillForm.setValue({
      name: skill.name,
      level: skill.level,
      years_experience: skill.years_experience
    });
  }
  submitSkill() {
    const id = this.employeeId();
    if (id === null)
      return;
    this.skillError.set(null);
    if (this.skillForm.invalid) {
      this.skillForm.markAllAsTouched();
      return;
    }
    const payload = this.skillForm.getRawValue();
    const editingId = this.editingSkillId();
    const req$ = editingId ? this.profile.updateSkill(id, editingId, payload) : this.profile.addSkill(id, payload);
    req$.subscribe({
      next: () => {
        this.startAddSkill();
        this.load();
      },
      error: (err) => {
        const body = err.error;
        let msg = body?.message ?? "Failed to save skill.";
        if (body?.errors)
          msg = `${msg}: ${Object.values(body.errors).join(" ")}`;
        this.skillError.set(msg);
      }
    });
  }
  askDeleteSkill(skill) {
    this.pendingDeleteSkill = skill;
    this.confirmOpen.set(true);
  }
  cancelDeleteSkill() {
    this.pendingDeleteSkill = null;
    this.confirmOpen.set(false);
  }
  confirmDeleteSkill() {
    const id = this.employeeId();
    const skill = this.pendingDeleteSkill;
    this.confirmOpen.set(false);
    if (id === null || !skill)
      return;
    this.profile.deleteSkill(id, skill.id).subscribe({
      next: () => {
        this.pendingDeleteSkill = null;
        this.load();
      },
      error: (err) => {
        const body = err.error;
        this.skillError.set(body?.message ?? "Failed to delete skill.");
      }
    });
  }
  // --- personal ---
  /**
   * Strip any non-digit character as the user types the emergency phone, so
   * the field only ever contains digits (max 10). Keeps the input and the
   * form control in sync.
   */
  onPhoneInput(event) {
    const el = event.target;
    const digits = el.value.replace(/\D/g, "").slice(0, 10);
    if (digits !== el.value) {
      el.value = digits;
    }
    this.personalForm.controls.emergency_contact_phone.setValue(digits);
  }
  savePersonal() {
    const id = this.employeeId();
    if (id === null)
      return;
    this.personalError.set(null);
    this.personalSuccess.set(null);
    if (this.personalForm.invalid) {
      this.personalForm.markAllAsTouched();
      this.personalError.set("Please correct the highlighted fields.");
      return;
    }
    this.profile.savePersonal(id, this.personalForm.getRawValue()).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.personalSuccess.set("Personal information saved.");
          this.load();
        } else {
          this.personalError.set(res.message || "Failed to save.");
        }
      },
      error: (err) => {
        const body = err.error;
        let msg = body?.message ?? "Failed to save personal info.";
        if (body?.errors)
          msg = `${msg}: ${Object.values(body.errors).join(" ")}`;
        this.personalError.set(msg);
      }
    });
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 5, vars: 2, consts: [[1, "profile"], [1, "state"], ["type", "error"], ["title", "Delete skill?", "message", "This will remove the skill from the profile.", "confirmLabel", "Delete", 3, "confirm", "cancel", "open"], ["label", "Loading profile\u2026"], [1, "card", "profile-header"], [1, "avatar"], [1, "header-main"], [1, "emp-name"], [1, "emp-meta", "text-muted"], [1, "emp-meta"], [1, "badge"], [1, "text-muted"], [1, "summary-grid"], [1, "card", "sc"], [1, "sc-num"], [1, "sc-label"], [1, "sc-num", "sc-small"], [1, "tabs"], [1, "tab", 3, "click"], [1, "card", "section"], [1, "section-title"], [1, "info-grid"], [1, "text-muted", "attendance-count"], ["title", "Not available", 3, "message"], ["title", "No attendance yet", "message", "No check-in records for this employee."], [1, "table"], [1, "badge", "badge-approved"], ["title", "No balances", "message", "No leave balances allocated."], ["title", "No leave history", "message", "No leave requests yet."], [1, "skill-form", 3, "ngSubmit", "formGroup"], ["formControlName", "name", "placeholder", "Skill name", 1, "form-control"], ["formControlName", "level", 1, "form-control"], ["value", "beginner"], ["value", "intermediate"], ["value", "advanced"], ["value", "expert"], ["type", "number", "step", "0.5", "min", "0", "formControlName", "years_experience", "placeholder", "Years", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn"], ["title", "No skills yet", "message", "Add the first skill above."], ["type", "button", 1, "btn", 3, "click"], [1, "right"], [1, "btn", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["title", "No activity", "message", "No recorded activity yet."], [1, "timeline"], [1, "tl-desc"], [1, "tl-meta", "text-muted"], ["type", "success"], [1, "grid-2", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], ["type", "date", "formControlName", "date_of_birth", 1, "form-control"], ["formControlName", "gender", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "other"], ["value", "undisclosed"], ["formControlName", "employment_type", 1, "form-control"], ["value", "full_time"], ["value", "part_time"], ["value", "contract"], ["value", "intern"], ["formControlName", "work_location", 1, "form-control"], [1, "form-group", "full"], ["formControlName", "address", 1, "form-control"], ["formControlName", "emergency_contact_name", 1, "form-control"], ["type", "tel", "inputmode", "numeric", "maxlength", "10", "placeholder", "10-digit number", "formControlName", "emergency_contact_phone", 1, "form-control", 3, "keypress", "input"], [1, "text-danger", "field-error"], ["type", "date", "formControlName", "date_of_joining", 1, "form-control"], [1, "full"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ProfileComponent_Conditional_1_Template, 2, 0, "div", 1)(2, ProfileComponent_Conditional_2_Template, 2, 1, "app-alert", 2)(3, ProfileComponent_Conditional_3_Template, 60, 33);
      \u0275\u0275elementStart(4, "app-confirm-dialog", 3);
      \u0275\u0275listener("confirm", function ProfileComponent_Template_app_confirm_dialog_confirm_4_listener() {
        return ctx.confirmDeleteSkill();
      })("cancel", function ProfileComponent_Template_app_confirm_dialog_cancel_4_listener() {
        return ctx.cancelDeleteSkill();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.error() ? 2 : (tmp_0_0 = ctx.data()) ? 3 : -1, tmp_0_0);
      \u0275\u0275advance(3);
      \u0275\u0275property("open", ctx.confirmOpen());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    MinValidator,
    FormGroupDirective,
    FormControlName,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
    ConfirmDialogComponent,
    DatePipe
  ], styles: ["\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.emp-name[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 1.3rem;\n}\n.emp-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.9rem;\n  margin-top: 2px;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.sc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--space-4);\n}\n.sc-num[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.sc-num.sc-small[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.sc-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--color-muted);\n  margin-top: 2px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: var(--space-4);\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: var(--space-3) var(--space-4);\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--color-muted);\n  border-bottom: 2px solid transparent;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  border-bottom-color: var(--color-primary);\n  font-weight: 600;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: 1.05rem;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-3);\n  margin: 0;\n}\n.info-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: var(--color-muted);\n  letter-spacing: 0.03em;\n}\n.info-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.95rem;\n}\n.skill-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.skill-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tl-desc[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.tl-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  margin-top: 2px;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n.grid-2[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      SpinnerComponent,
      EmptyStateComponent,
      AlertComponent,
      ConfirmDialogComponent
    ], template: `<div class="profile">
  @if (loading()) {
    <div class="state"><app-spinner label="Loading profile\u2026" /></div>
  } @else if (error()) {
    <app-alert type="error">{{ error() }}</app-alert>
  } @else if (data(); as p) {

    <!-- Header -->
    <div class="card profile-header">
      <div class="avatar">{{ (p.employee.first_name || '?').charAt(0) }}{{ (p.employee.last_name || '').charAt(0) }}</div>
      <div class="header-main">
        <h1 class="emp-name">{{ p.employee.first_name }} {{ p.employee.last_name }}</h1>
        <div class="emp-meta text-muted">
          <span>{{ p.employee.employee_code }}</span>
          <span>\xB7 {{ p.employee.designation_title || 'No designation' }}</span>
          <span>\xB7 {{ p.employee.department_name || 'No department' }}</span>
        </div>
        <div class="emp-meta">
          <span class="badge" [class.badge-approved]="p.employee.status === 'active'"
                              [class.badge-cancelled]="p.employee.status === 'inactive'">
            {{ p.employee.status }}
          </span>
          <span class="text-muted">Joined {{ p.employee.date_of_joining }}</span>
        </div>
      </div>
    </div>

    <!-- Summary cards -->
    <div class="summary-grid">
      <div class="card sc"><span class="sc-num">{{ p.summary.approved_leave_count }}</span><span class="sc-label">Approved leave</span></div>
      <div class="card sc"><span class="sc-num">{{ p.summary.available_leave_days }}</span><span class="sc-label">Available days</span></div>
      <div class="card sc"><span class="sc-num">{{ p.summary.pending_leave_count }}</span><span class="sc-label">Pending</span></div>
      <div class="card sc"><span class="sc-num">{{ p.summary.rejected_leave_count }}</span><span class="sc-label">Rejected</span></div>
      <div class="card sc"><span class="sc-num sc-small">{{ p.summary.employment_duration || '\u2014' }}</span><span class="sc-label">Tenure</span></div>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <button class="tab" [class.active]="activeTab() === 'overview'" (click)="setTab('overview')">Overview</button>
      <button class="tab" [class.active]="activeTab() === 'leave'" (click)="setTab('leave')">Leave</button>
      <button class="tab" [class.active]="activeTab() === 'skills'" (click)="setTab('skills')">Skills</button>
      <button class="tab" [class.active]="activeTab() === 'activity'" (click)="setTab('activity')">Activity</button>
      <button class="tab" [class.active]="activeTab() === 'personal'" (click)="setTab('personal')">Personal</button>
    </div>

    <!-- OVERVIEW -->
    @if (activeTab() === 'overview') {
      <div class="card section">
        <h3 class="section-title">Employment</h3>
        <dl class="info-grid">
          <div><dt>Employee code</dt><dd>{{ p.employee.employee_code }}</dd></div>
          <div><dt>Department</dt><dd>{{ p.employee.department_name || '\u2014' }}</dd></div>
          <div><dt>Designation</dt><dd>{{ p.employee.designation_title || '\u2014' }}</dd></div>
          <div><dt>Joining date</dt><dd>{{ p.employee.date_of_joining }}</dd></div>
          <div><dt>Employment type</dt><dd>{{ p.personal_information?.employment_type || '\u2014' }}</dd></div>
          <div><dt>Work location</dt><dd>{{ p.personal_information?.work_location || '\u2014' }}</dd></div>
          <div><dt>Status</dt><dd>{{ p.employee.status }}</dd></div>
        </dl>
      </div>

      <div class="card section">
        <h3 class="section-title">
          Attendance
          @if (p.attendance_summary.present_days != null) {
            <span class="text-muted attendance-count">\xB7 {{ p.attendance_summary.present_days }} present days</span>
          }
        </h3>
        @if (!p.attendance_summary.available) {
          <app-empty-state title="Not available" [message]="p.attendance_summary.message || 'Attendance not tracked.'" />
        } @else if (!p.attendance_summary.history || p.attendance_summary.history.length === 0) {
          <app-empty-state title="No attendance yet" message="No check-in records for this employee." />
        } @else {
          <table class="table">
            <thead>
              <tr><th>Date</th><th>Check in</th><th>Check out</th><th>Hours</th><th>Status</th></tr>
            </thead>
            <tbody>
              @for (a of p.attendance_summary.history; track a.id) {
                <tr>
                  <td>{{ a.work_date }}</td>
                  <td>{{ a.check_in ? (a.check_in | date: 'h:mm a') : '\u2014' }}</td>
                  <td>{{ a.check_out ? (a.check_out | date: 'h:mm a') : '\u2014' }}</td>
                  <td>{{ a.work_hours ?? '\u2014' }}</td>
                  <td><span class="badge badge-approved">{{ a.status }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>
    }

    <!-- LEAVE -->
    @if (activeTab() === 'leave') {
      <div class="card section">
        <h3 class="section-title">Leave balances</h3>
        @if (p.leave_summary.balances.length === 0) {
          <app-empty-state title="No balances" message="No leave balances allocated." />
        } @else {
          <table class="table">
            <thead><tr><th>Type</th><th>Allocated</th><th>Used</th><th>Remaining</th></tr></thead>
            <tbody>
              @for (b of p.leave_summary.balances; track b.id) {
                <tr><td>{{ b.leave_type_name }}</td><td>{{ b.allocated_days }}</td><td>{{ b.used_days }}</td><td><strong>{{ b.remaining_days }}</strong></td></tr>
              }
            </tbody>
          </table>
        }
      </div>
      <div class="card section">
        <h3 class="section-title">Recent leave</h3>
        @if (p.leave_summary.recent.length === 0) {
          <app-empty-state title="No leave history" message="No leave requests yet." />
        } @else {
          <table class="table">
            <thead><tr><th>Type</th><th>From</th><th>To</th><th>Days</th><th>Status</th></tr></thead>
            <tbody>
              @for (a of p.leave_summary.recent; track a.id) {
                <tr>
                  <td>{{ a.leave_type_name }}</td><td>{{ a.start_date }}</td><td>{{ a.end_date }}</td><td>{{ a.total_days }}</td>
                  <td><span [class]="'badge badge-' + a.status">{{ a.status }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>
    }

    <!-- SKILLS -->
    @if (activeTab() === 'skills') {
      <div class="card section">
        <h3 class="section-title">Skills</h3>
        @if (skillError()) { <app-alert type="error">{{ skillError() }}</app-alert> }

        <form class="skill-form" [formGroup]="skillForm" (ngSubmit)="submitSkill()">
          <input class="form-control" formControlName="name" placeholder="Skill name" />
          <select class="form-control" formControlName="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
          <input class="form-control" type="number" step="0.5" min="0" formControlName="years_experience" placeholder="Years" />
          <button type="submit" class="btn btn-primary">{{ editingSkillId() ? 'Update' : 'Add' }}</button>
          @if (editingSkillId()) {
            <button type="button" class="btn" (click)="startAddSkill()">Cancel</button>
          }
        </form>

        @if (data()!.skills.length === 0) {
          <app-empty-state title="No skills yet" message="Add the first skill above." />
        } @else {
          <table class="table">
            <thead><tr><th>Skill</th><th>Level</th><th>Years</th><th class="right">Actions</th></tr></thead>
            <tbody>
              @for (s of data()!.skills; track s.id) {
                <tr>
                  <td>{{ s.name }}</td><td>{{ s.level }}</td><td>{{ s.years_experience ?? '\u2014' }}</td>
                  <td class="right">
                    <button class="btn" (click)="startEditSkill(s)">Edit</button>
                    <button class="btn btn-danger" (click)="askDeleteSkill(s)">Delete</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>
    }

    <!-- ACTIVITY -->
    @if (activeTab() === 'activity') {
      <div class="card section">
        <h3 class="section-title">Activity timeline</h3>
        @if (p.recent_activities.items.length === 0) {
          <app-empty-state title="No activity" message="No recorded activity yet." />
        } @else {
          <ul class="timeline">
            @for (act of p.recent_activities.items; track act.id) {
              <li>
                <div class="tl-desc">{{ act.description }}</div>
                <div class="tl-meta text-muted">
                  {{ act.created_at }}
                  @if (act.actor_email) { \xB7 by {{ act.actor_email }} }
                </div>
              </li>
            }
          </ul>
        }
      </div>
    }

    <!-- PERSONAL -->
    @if (activeTab() === 'personal') {
      <div class="card section">
        <h3 class="section-title">Personal information</h3>
        @if (personalSuccess()) { <app-alert type="success">{{ personalSuccess() }}</app-alert> }
        @if (personalError()) { <app-alert type="error">{{ personalError() }}</app-alert> }

        <form class="grid-2" [formGroup]="personalForm" (ngSubmit)="savePersonal()">
          <div class="form-group">
            <label class="form-label">Date of birth</label>
            <input type="date" class="form-control" formControlName="date_of_birth" />
          </div>
          <div class="form-group">
            <label class="form-label">Gender</label>
            <select class="form-control" formControlName="gender">
              <option value="">\u2014</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="undisclosed">Prefer not to say</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Employment type</label>
            <select class="form-control" formControlName="employment_type">
              <option value="">\u2014</option>
              <option value="full_time">Full time</option>
              <option value="part_time">Part time</option>
              <option value="contract">Contract</option>
              <option value="intern">Intern</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Work location</label>
            <input class="form-control" formControlName="work_location" />
          </div>
          <div class="form-group full">
            <label class="form-label">Address</label>
            <input class="form-control" formControlName="address" />
          </div>
          <div class="form-group">
            <label class="form-label">Emergency contact name</label>
            <input class="form-control" formControlName="emergency_contact_name" />
          </div>
          <div class="form-group">
            <label class="form-label">Emergency contact phone</label>
            <input
              class="form-control"
              type="tel"
              inputmode="numeric"
              maxlength="10"
              placeholder="10-digit number"
              formControlName="emergency_contact_phone"
              (keypress)="$any($event).charCode < 48 || $any($event).charCode > 57 ? $event.preventDefault() : null"
              (input)="onPhoneInput($event)"
              [class.is-invalid]="personalForm.controls.emergency_contact_phone.invalid && personalForm.controls.emergency_contact_phone.touched"
            />
            @if (personalForm.controls.emergency_contact_phone.touched && personalForm.controls.emergency_contact_phone.errors?.['pattern']) {
              <div class="text-danger field-error">Emergency contact must be exactly 10 digits.</div>
            }
          </div>
          <div class="form-group">
            <label class="form-label">Joining date</label>
            <input type="date" class="form-control" formControlName="date_of_joining" />
          </div>
          <div class="full">
            <button type="submit" class="btn btn-primary">Save personal info</button>
          </div>
        </form>
      </div>
    }
  }

  <app-confirm-dialog
    [open]="confirmOpen()"
    title="Delete skill?"
    message="This will remove the skill from the profile."
    confirmLabel="Delete"
    (confirm)="confirmDeleteSkill()"
    (cancel)="cancelDeleteSkill()"
  />
</div>
`, styles: ["/* src/app/features/profile/profile.component.scss */\n.state {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.profile-header {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.emp-name {\n  margin: 0 0 var(--space-1);\n  font-size: 1.3rem;\n}\n.emp-meta {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.9rem;\n  margin-top: 2px;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: var(--space-3);\n  margin-bottom: var(--space-4);\n}\n.sc {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--space-4);\n}\n.sc-num {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.sc-num.sc-small {\n  font-size: 1rem;\n}\n.sc-label {\n  font-size: 0.78rem;\n  color: var(--color-muted);\n  margin-top: 2px;\n}\n.tabs {\n  display: flex;\n  gap: var(--space-1);\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: var(--space-4);\n  flex-wrap: wrap;\n}\n.tab {\n  background: none;\n  border: none;\n  padding: var(--space-3) var(--space-4);\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: var(--color-muted);\n  border-bottom: 2px solid transparent;\n}\n.tab.active {\n  color: var(--color-primary);\n  border-bottom-color: var(--color-primary);\n  font-weight: 600;\n}\n.section {\n  margin-bottom: var(--space-4);\n}\n.section-title {\n  margin: 0 0 var(--space-4);\n  font-size: 1.05rem;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-3);\n  margin: 0;\n}\n.info-grid dt {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: var(--color-muted);\n  letter-spacing: 0.03em;\n}\n.info-grid dd {\n  margin: 2px 0 0;\n  font-size: 0.95rem;\n}\n.skill-form {\n  display: flex;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n  margin-bottom: var(--space-4);\n}\n.skill-form .form-control {\n  max-width: 200px;\n}\n.right {\n  text-align: right;\n  white-space: nowrap;\n}\n.right .btn {\n  margin-left: var(--space-2);\n}\n.timeline {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.timeline li {\n  padding: var(--space-3) 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.timeline li:last-child {\n  border-bottom: none;\n}\n.tl-desc {\n  font-size: 0.92rem;\n}\n.tl-meta {\n  font-size: 0.78rem;\n  margin-top: 2px;\n}\n.grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n.grid-2 .full {\n  grid-column: 1/-1;\n}\n@media (max-width: 640px) {\n  .grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile.component.ts", lineNumber: 41 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-L2WKZMPG.js.map
