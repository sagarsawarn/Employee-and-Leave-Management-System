import {
  FieldErrorComponent
} from "./chunk-72F7OSS4.js";
import {
  LeaveService
} from "./chunk-N2JL55FW.js";
import {
  AuthService
} from "./chunk-WKCPM7O5.js";
import {
  AlertComponent
} from "./chunk-NWCK7RFC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate
} from "./chunk-YIFJVJUK.js";

// src/app/features/leave/leave.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeaveComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-spinner", 3);
    \u0275\u0275elementEnd();
  }
}
function LeaveComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.applySuccess());
  }
}
function LeaveComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.applyError());
  }
}
function LeaveComponent_Conditional_4_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3.name);
  }
}
function LeaveComponent_Conditional_4_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " End date cannot be before the start date. ");
    \u0275\u0275elementEnd();
  }
}
function LeaveComponent_Conditional_4_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 27);
  }
}
function LeaveComponent_Conditional_4_Conditional_39_For_13_Template(rf, ctx) {
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
    const b_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.leave_type_name || b_r4.leave_type_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.allocated_days);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.used_days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r4.remaining_days);
  }
}
function LeaveComponent_Conditional_4_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 28)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275repeaterCreate(12, LeaveComponent_Conditional_4_Conditional_39_For_13_Template, 10, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.balances());
  }
}
function LeaveComponent_Conditional_4_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.actionError());
  }
}
function LeaveComponent_Conditional_4_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 30);
  }
}
function LeaveComponent_Conditional_4_Conditional_45_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function LeaveComponent_Conditional_4_Conditional_45_For_16_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const a_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelApp(a_r6));
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function LeaveComponent_Conditional_4_Conditional_45_For_16_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 31);
    \u0275\u0275conditionalCreate(13, LeaveComponent_Conditional_4_Conditional_45_For_16_Conditional_13_Template, 2, 0, "button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.leave_type_name || a_r6.leave_type_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.start_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.end_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.total_days);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badgeClass(a_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r6.status === "pending" ? 13 : -1);
  }
}
function LeaveComponent_Conditional_4_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 28)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, LeaveComponent_Conditional_4_Conditional_45_For_16_Template, 14, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.myApps());
  }
}
function LeaveComponent_Conditional_4_Conditional_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 34);
  }
}
function LeaveComponent_Conditional_4_Conditional_46_Conditional_4_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 31)(12, "button", 35);
    \u0275\u0275listener("click", function LeaveComponent_Conditional_4_Conditional_46_Conditional_4_For_17_Template_button_click_12_listener() {
      const a_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.decide(a_r8, true));
    });
    \u0275\u0275text(13, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 36);
    \u0275\u0275listener("click", function LeaveComponent_Conditional_4_Conditional_46_Conditional_4_For_17_Template_button_click_14_listener() {
      const a_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.decide(a_r8, false));
    });
    \u0275\u0275text(15, "Reject");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.employee_name || a_r8.employee_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.leave_type_name || a_r8.leave_type_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.start_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.end_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.total_days);
  }
}
function LeaveComponent_Conditional_4_Conditional_46_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 28)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 31);
    \u0275\u0275text(14, "Decision");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, LeaveComponent_Conditional_4_Conditional_46_Conditional_4_For_17_Template, 16, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.queue());
  }
}
function LeaveComponent_Conditional_4_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 29)(1, "h2", 6);
    \u0275\u0275text(2, "Pending approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LeaveComponent_Conditional_4_Conditional_46_Conditional_3_Template, 1, 0, "app-empty-state", 34)(4, LeaveComponent_Conditional_4_Conditional_46_Conditional_4_Template, 18, 0, "table", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.queue().length === 0 ? 3 : 4);
  }
}
function LeaveComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "h2", 6);
    \u0275\u0275text(3, "Apply for leave");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LeaveComponent_Conditional_4_Conditional_4_Template, 2, 1, "app-alert", 7);
    \u0275\u0275conditionalCreate(5, LeaveComponent_Conditional_4_Conditional_5_Template, 2, 1, "app-alert", 8);
    \u0275\u0275elementStart(6, "form", 9);
    \u0275\u0275listener("ngSubmit", function LeaveComponent_Conditional_4_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitApply());
    });
    \u0275\u0275elementStart(7, "div", 10)(8, "label", 11);
    \u0275\u0275text(9, "Leave type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 12)(11, "option", 13);
    \u0275\u0275text(12, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, LeaveComponent_Conditional_4_For_14_Template, 2, 2, "option", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "app-field-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15)(17, "div", 10)(18, "label", 16);
    \u0275\u0275text(19, "Start date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 17)(21, "app-field-error", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10)(23, "label", 19);
    \u0275\u0275text(24, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 20)(26, "app-field-error", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, LeaveComponent_Conditional_4_Conditional_27_Template, 2, 0, "div", 22);
    \u0275\u0275elementStart(28, "div", 10)(29, "label", 23);
    \u0275\u0275text(30, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 24)(32, "app-field-error", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 26);
    \u0275\u0275text(34, "Submit application");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "section", 5)(36, "h2", 6);
    \u0275\u0275text(37, "My balances");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, LeaveComponent_Conditional_4_Conditional_38_Template, 1, 0, "app-empty-state", 27)(39, LeaveComponent_Conditional_4_Conditional_39_Template, 14, 0, "table", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "section", 29)(41, "h2", 6);
    \u0275\u0275text(42, "My applications");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, LeaveComponent_Conditional_4_Conditional_43_Template, 2, 1, "app-alert", 8);
    \u0275\u0275conditionalCreate(44, LeaveComponent_Conditional_4_Conditional_44_Template, 1, 0, "app-empty-state", 30)(45, LeaveComponent_Conditional_4_Conditional_45_Template, 17, 0, "table", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, LeaveComponent_Conditional_4_Conditional_46_Template, 5, 1, "section", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.applySuccess() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.applyError() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.applyForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.types());
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.f.leave_type_id);
    \u0275\u0275advance(6);
    \u0275\u0275property("control", ctx_r1.f.start_date);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r1.f.end_date);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.applyForm.errors == null ? null : ctx_r1.applyForm.errors["dateRange"]) && ctx_r1.f.end_date.touched ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r1.f.reason);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.balances().length === 0 ? 38 : 39);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.actionError() ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.myApps().length === 0 ? 44 : 45);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isManager() ? 46 : -1);
  }
}
var LeaveComponent = class _LeaveComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  leave = inject(LeaveService);
  route = inject(ActivatedRoute);
  /**
   * Live manager check. Read as a METHOD (not a one-time field) because the
   * role signal may not be hydrated when this component first constructs
   * (e.g. hard refresh); a method re-reads the current role each time so the
   * approvals queue appears once the role is known.
   */
  isManager() {
    return this.auth.hasAnyRole(["admin", "hr_manager"]);
  }
  types = signal([], ...ngDevMode ? [{ debugName: "types" }] : (
    /* istanbul ignore next */
    []
  ));
  balances = signal([], ...ngDevMode ? [{ debugName: "balances" }] : (
    /* istanbul ignore next */
    []
  ));
  myApps = signal([], ...ngDevMode ? [{ debugName: "myApps" }] : (
    /* istanbul ignore next */
    []
  ));
  queue = signal([], ...ngDevMode ? [{ debugName: "queue" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  applyError = signal(null, ...ngDevMode ? [{ debugName: "applyError" }] : (
    /* istanbul ignore next */
    []
  ));
  applySuccess = signal(null, ...ngDevMode ? [{ debugName: "applySuccess" }] : (
    /* istanbul ignore next */
    []
  ));
  actionError = signal(null, ...ngDevMode ? [{ debugName: "actionError" }] : (
    /* istanbul ignore next */
    []
  ));
  applyForm = this.fb.nonNullable.group({
    leave_type_id: this.fb.control(null, {
      validators: [Validators.required]
    }),
    start_date: ["", [Validators.required]],
    end_date: ["", [Validators.required]],
    reason: ["", [Validators.required, Validators.maxLength(500)]]
  }, { validators: [dateRangeValidator] });
  get f() {
    return this.applyForm.controls;
  }
  ngOnInit() {
    if (this.auth.role() === null) {
      this.auth.loadMe().subscribe({
        next: () => this.reload(),
        error: () => this.reload()
      });
    } else {
      this.reload();
    }
    const start = this.route.snapshot.queryParamMap.get("start");
    if (start) {
      const end = this.route.snapshot.queryParamMap.get("end") || start;
      this.applyForm.patchValue({ start_date: start, end_date: end });
    }
  }
  reload() {
    this.loading.set(true);
    this.leave.types().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data)
          this.types.set(res.data);
      },
      error: () => {
      }
    });
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
        this.loading.set(false);
        if (res.status === "success" && res.data)
          this.myApps.set(res.data);
      },
      error: () => this.loading.set(false)
    });
    if (this.isManager()) {
      this.leave.queue({ status: "pending" }).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data)
            this.queue.set(res.data);
        },
        error: () => {
        }
      });
    }
  }
  submitApply() {
    this.applyError.set(null);
    this.applySuccess.set(null);
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();
      return;
    }
    const v = this.applyForm.getRawValue();
    const payload = {
      leave_type_id: v.leave_type_id,
      start_date: v.start_date,
      end_date: v.end_date,
      reason: v.reason
    };
    this.leave.apply(payload).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.applySuccess.set("Leave application submitted.");
          this.applyForm.reset({ leave_type_id: null });
          this.reload();
        } else {
          this.applyError.set(res.message || "Failed to submit.");
        }
      },
      error: (err) => {
        const body = err.error;
        let msg = body?.message ?? "Failed to submit application.";
        if (body?.errors) {
          const details = Object.values(body.errors).join(" ");
          if (details)
            msg = `${msg}: ${details}`;
        }
        this.applyError.set(msg);
      }
    });
  }
  cancelApp(app) {
    this.actionError.set(null);
    this.leave.cancel(app.id).subscribe({
      next: () => this.reload(),
      error: (err) => {
        const body = err.error;
        this.actionError.set(body?.message ?? "Failed to cancel.");
      }
    });
  }
  decide(app, approve) {
    this.actionError.set(null);
    const call$ = approve ? this.leave.approve(app.id, "") : this.leave.reject(app.id, "");
    call$.subscribe({
      next: () => this.reload(),
      error: (err) => {
        const body = err.error;
        this.actionError.set(body?.message ?? "Action failed.");
      }
    });
  }
  badgeClass(status) {
    return `badge badge-${status}`;
  }
  static \u0275fac = function LeaveComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveComponent, selectors: [["app-leave"]], decls: 5, vars: 1, consts: [[1, "leave"], [1, "page-title"], [1, "state"], ["label", "Loading leave data\u2026"], [1, "layout"], [1, "card"], [1, "section-title"], ["type", "success"], ["type", "error"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "leave_type_id", 1, "form-label"], ["id", "leave_type_id", "formControlName", "leave_type_id", 1, "form-control"], [3, "ngValue"], ["label", "Leave type", 3, "control"], [1, "grid-2"], ["for", "start_date", 1, "form-label"], ["id", "start_date", "type", "date", "formControlName", "start_date", 1, "form-control"], ["label", "Start date", 3, "control"], ["for", "end_date", 1, "form-label"], ["id", "end_date", "type", "date", "formControlName", "end_date", 1, "form-control"], ["label", "End date", 3, "control"], [1, "text-danger", "date-range-error"], ["for", "reason", 1, "form-label"], ["id", "reason", "rows", "3", "formControlName", "reason", 1, "form-control"], ["label", "Reason", 3, "control"], ["type", "submit", 1, "btn", "btn-primary"], ["title", "No balances yet", "message", "Balances appear once allocated."], [1, "table"], [1, "card", "mt-4"], ["title", "No applications", "message", "You haven't applied for leave yet."], [1, "right"], [1, "btn"], [1, "btn", 3, "click"], ["title", "Nothing to approve", "message", "No pending leave requests."], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function LeaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Leave");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, LeaveComponent_Conditional_3_Template, 2, 0, "div", 2)(4, LeaveComponent_Conditional_4_Template, 47, 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : 4);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
    FieldErrorComponent
  ], styles: ["\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-5);\n  font-size: 1.4rem;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n@media (max-width: 820px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: 1.05rem;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n.date-range-error[_ngcontent-%COMP%] {\n  margin: calc(var(--space-2) * -1) 0 var(--space-4);\n  font-size: 0.8rem;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n}\n/*# sourceMappingURL=leave.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveComponent, [{
    type: Component,
    args: [{ selector: "app-leave", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      SpinnerComponent,
      EmptyStateComponent,
      AlertComponent,
      FieldErrorComponent
    ], template: `<div class="leave">
  <h1 class="page-title">Leave</h1>

  @if (loading()) {
    <div class="state"><app-spinner label="Loading leave data\u2026" /></div>
  } @else {
    <div class="layout">
      <!-- Apply for leave -->
      <section class="card">
        <h2 class="section-title">Apply for leave</h2>

        @if (applySuccess()) {
          <app-alert type="success">{{ applySuccess() }}</app-alert>
        }
        @if (applyError()) {
          <app-alert type="error">{{ applyError() }}</app-alert>
        }

        <form [formGroup]="applyForm" (ngSubmit)="submitApply()" novalidate>
          <div class="form-group">
            <label class="form-label" for="leave_type_id">Leave type</label>
            <select id="leave_type_id" class="form-control" formControlName="leave_type_id">
              <option [ngValue]="null">\u2014 Select \u2014</option>
              @for (t of types(); track t.id) {
                <option [ngValue]="t.id">{{ t.name }}</option>
              }
            </select>
            <app-field-error [control]="f.leave_type_id" label="Leave type" />
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" for="start_date">Start date</label>
              <input id="start_date" type="date" class="form-control" formControlName="start_date" />
              <app-field-error [control]="f.start_date" label="Start date" />
            </div>
            <div class="form-group">
              <label class="form-label" for="end_date">End date</label>
              <input id="end_date" type="date" class="form-control" formControlName="end_date" />
              <app-field-error [control]="f.end_date" label="End date" />
            </div>
          </div>

          @if (applyForm.errors?.['dateRange'] && f.end_date.touched) {
            <div class="text-danger date-range-error">
              End date cannot be before the start date.
            </div>
          }

          <div class="form-group">
            <label class="form-label" for="reason">Reason</label>
            <textarea id="reason" class="form-control" rows="3" formControlName="reason"></textarea>
            <app-field-error [control]="f.reason" label="Reason" />
          </div>

          <button type="submit" class="btn btn-primary">Submit application</button>
        </form>
      </section>

      <!-- Balances -->
      <section class="card">
        <h2 class="section-title">My balances</h2>
        @if (balances().length === 0) {
          <app-empty-state title="No balances yet" message="Balances appear once allocated." />
        } @else {
          <table class="table">
            <thead>
              <tr><th>Type</th><th>Allocated</th><th>Used</th><th>Remaining</th></tr>
            </thead>
            <tbody>
              @for (b of balances(); track b.id) {
                <tr>
                  <td>{{ b.leave_type_name || b.leave_type_id }}</td>
                  <td>{{ b.allocated_days }}</td>
                  <td>{{ b.used_days }}</td>
                  <td><strong>{{ b.remaining_days }}</strong></td>
                </tr>
              }
            </tbody>
          </table>
        }
      </section>
    </div>

    <!-- My applications -->
    <section class="card mt-4">
      <h2 class="section-title">My applications</h2>
      @if (actionError()) {
        <app-alert type="error">{{ actionError() }}</app-alert>
      }
      @if (myApps().length === 0) {
        <app-empty-state title="No applications" message="You haven't applied for leave yet." />
      } @else {
        <table class="table">
          <thead>
            <tr><th>Type</th><th>From</th><th>To</th><th>Days</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            @for (a of myApps(); track a.id) {
              <tr>
                <td>{{ a.leave_type_name || a.leave_type_id }}</td>
                <td>{{ a.start_date }}</td>
                <td>{{ a.end_date }}</td>
                <td>{{ a.total_days }}</td>
                <td><span [class]="badgeClass(a.status)">{{ a.status }}</span></td>
                <td class="right">
                  @if (a.status === 'pending') {
                    <button class="btn" (click)="cancelApp(a)">Cancel</button>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </section>

    <!-- Approvals queue: admin/HR only -->
    @if (isManager()) {
      <section class="card mt-4">
        <h2 class="section-title">Pending approvals</h2>
        @if (queue().length === 0) {
          <app-empty-state title="Nothing to approve" message="No pending leave requests." />
        } @else {
          <table class="table">
            <thead>
              <tr><th>Employee</th><th>Type</th><th>From</th><th>To</th><th>Days</th><th class="right">Decision</th></tr>
            </thead>
            <tbody>
              @for (a of queue(); track a.id) {
                <tr>
                  <td>{{ a.employee_name || a.employee_id }}</td>
                  <td>{{ a.leave_type_name || a.leave_type_id }}</td>
                  <td>{{ a.start_date }}</td>
                  <td>{{ a.end_date }}</td>
                  <td>{{ a.total_days }}</td>
                  <td class="right">
                    <button class="btn btn-primary" (click)="decide(a, true)">Approve</button>
                    <button class="btn btn-danger" (click)="decide(a, false)">Reject</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </section>
    }
  }
</div>
`, styles: ["/* src/app/features/leave/leave.component.scss */\n.page-title {\n  margin: 0 0 var(--space-5);\n  font-size: 1.4rem;\n}\n.state {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n@media (max-width: 820px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title {\n  margin: 0 0 var(--space-4);\n  font-size: 1.05rem;\n}\n.grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3);\n}\n.date-range-error {\n  margin: calc(var(--space-2) * -1) 0 var(--space-4);\n  font-size: 0.8rem;\n}\n.right {\n  text-align: right;\n  white-space: nowrap;\n}\n.right .btn {\n  margin-left: var(--space-2);\n}\n/*# sourceMappingURL=leave.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveComponent, { className: "LeaveComponent", filePath: "src/app/features/leave/leave.component.ts", lineNumber: 54 });
})();
function dateRangeValidator(group) {
  const start = group.get("start_date")?.value;
  const end = group.get("end_date")?.value;
  if (start && end && end < start) {
    return { dateRange: true };
  }
  return null;
}
export {
  LeaveComponent
};
//# sourceMappingURL=chunk-CRFKD4PD.js.map
