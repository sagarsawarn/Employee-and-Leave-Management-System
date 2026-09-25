import {
  AuthService
} from "./chunk-WKCPM7O5.js";
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
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-F3B2X54H.js";
import {
  CommonModule,
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/features/auth/register.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RegisterComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function RegisterComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.serverError());
  }
}
function RegisterComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Full name is required.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors()["full_name"]);
  }
}
function RegisterComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email is required. ");
  }
}
function RegisterComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a valid email address. ");
  }
}
function RegisterComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, RegisterComponent_Conditional_19_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_19_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]) ? 1 : (ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors()["email"]);
  }
}
function RegisterComponent_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password is required. ");
  }
}
function RegisterComponent_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password must be at least 8 characters. ");
  }
}
function RegisterComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, RegisterComponent_Conditional_25_Conditional_1_Template, 1, 0)(2, RegisterComponent_Conditional_25_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]) ? 1 : (ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Please confirm your password.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.name);
  }
}
function RegisterComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Please select a department.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors()["department_id"]);
  }
}
function RegisterComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.title);
  }
}
function RegisterComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Please select a designation.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors()["designation_id"]);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  serverError = signal(null, ...ngDevMode ? [{ debugName: "serverError" }] : (
    /* istanbul ignore next */
    []
  ));
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : (
    /* istanbul ignore next */
    []
  ));
  fieldErrors = signal(null, ...ngDevMode ? [{ debugName: "fieldErrors" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Role being requested; 'hr_manager' when arriving from the HR register
   *  link (?role=hr_manager), otherwise 'employee'. Admin still approves. */
  requestedRole = signal("employee", ...ngDevMode ? [{ debugName: "requestedRole" }] : (
    /* istanbul ignore next */
    []
  ));
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : (
    /* istanbul ignore next */
    []
  ));
  designations = signal([], ...ngDevMode ? [{ debugName: "designations" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Currently selected department id, tracked for filtering designations. */
  selectedDepartmentId = signal(null, ...ngDevMode ? [{ debugName: "selectedDepartmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Designations shown in the dropdown: only those belonging to the selected
   * department (department-specific). Empty until a department is chosen.
   */
  filteredDesignations = computed(() => {
    const deptId = this.selectedDepartmentId();
    if (deptId === null)
      return [];
    return this.designations().filter((d) => d.department_id === deptId);
  }, ...ngDevMode ? [{ debugName: "filteredDesignations" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    full_name: ["", [Validators.required, Validators.maxLength(160)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    password_confirm: ["", [Validators.required]],
    department_id: this.fb.control(null, [Validators.required]),
    designation_id: this.fb.control(null, [Validators.required])
  }, { validators: [passwordsMatch] });
  ngOnInit() {
    this.auth.publicDepartments().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data)
          this.departments.set(res.data);
      },
      error: () => {
      }
    });
    this.auth.publicDesignations().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data)
          this.designations.set(res.data);
      },
      error: () => {
      }
    });
    this.form.controls.department_id.valueChanges.subscribe((deptId) => {
      this.selectedDepartmentId.set(deptId);
      this.form.controls.designation_id.setValue(null);
    });
    if (this.route.snapshot.queryParamMap.get("role") === "hr_manager") {
      this.requestedRole.set("hr_manager");
    }
  }
  get full_name() {
    return this.form.controls.full_name;
  }
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }
  get password_confirm() {
    return this.form.controls.password_confirm;
  }
  submit() {
    this.serverError.set(null);
    this.success.set(null);
    this.fieldErrors.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.auth.register(__spreadProps(__spreadValues({}, this.form.getRawValue()), { requested_role: this.requestedRole() })).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === "success") {
          this.success.set(res.message || "Registration submitted. An administrator will review your request.");
        } else {
          this.serverError.set(res.message || "Registration failed");
        }
      },
      error: (err) => {
        this.loading.set(false);
        const body = err.error;
        if (err.status === 422 && body?.errors) {
          this.fieldErrors.set(body.errors);
        }
        this.serverError.set(body?.message ?? "Unable to reach the server. Please try again.");
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 58, vars: 29, consts: [[1, "login-wrap"], [1, "card", "login-card"], [1, "login-title"], [1, "text-muted", "login-sub"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "full_name", 1, "form-label"], ["id", "full_name", "type", "text", "formControlName", "full_name", 1, "form-control"], [1, "text-danger", "field-error"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "username", 1, "form-control"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["for", "password_confirm", 1, "form-label"], ["id", "password_confirm", "type", "password", "formControlName", "password_confirm", "autocomplete", "new-password", 1, "form-control"], ["for", "department_id", 1, "form-label"], ["id", "department_id", "formControlName", "department_id", 1, "form-control"], [3, "ngValue"], ["for", "designation_id", 1, "form-label"], ["id", "designation_id", "formControlName", "designation_id", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "text-muted", "alt-link"], ["routerLink", "/login"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, RegisterComponent_Conditional_6_Template, 2, 1, "div", 4);
      \u0275\u0275conditionalCreate(7, RegisterComponent_Conditional_7_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275conditionalCreate(13, RegisterComponent_Conditional_13_Template, 2, 0, "div", 10);
      \u0275\u0275conditionalCreate(14, RegisterComponent_Conditional_14_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 11);
      \u0275\u0275text(17, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 12);
      \u0275\u0275conditionalCreate(19, RegisterComponent_Conditional_19_Template, 3, 1, "div", 10);
      \u0275\u0275conditionalCreate(20, RegisterComponent_Conditional_20_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 7)(22, "label", 13);
      \u0275\u0275text(23, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 14);
      \u0275\u0275conditionalCreate(25, RegisterComponent_Conditional_25_Template, 3, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 7)(27, "label", 15);
      \u0275\u0275text(28, "Confirm password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 16);
      \u0275\u0275conditionalCreate(30, RegisterComponent_Conditional_30_Template, 2, 0, "div", 10);
      \u0275\u0275conditionalCreate(31, RegisterComponent_Conditional_31_Template, 2, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 7)(33, "label", 17);
      \u0275\u0275text(34, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "select", 18)(36, "option", 19);
      \u0275\u0275text(37, "\u2014 Select department \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(38, RegisterComponent_For_39_Template, 2, 2, "option", 19, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, RegisterComponent_Conditional_40_Template, 2, 0, "div", 10);
      \u0275\u0275conditionalCreate(41, RegisterComponent_Conditional_41_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 7)(43, "label", 20);
      \u0275\u0275text(44, "Designation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "select", 21)(46, "option", 19);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(48, RegisterComponent_For_49_Template, 2, 2, "option", 19, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(50, RegisterComponent_Conditional_50_Template, 2, 0, "div", 10);
      \u0275\u0275conditionalCreate(51, RegisterComponent_Conditional_51_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 22);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "p", 23);
      \u0275\u0275text(55, " Already have an account? ");
      \u0275\u0275elementStart(56, "a", 24);
      \u0275\u0275text(57, "Sign in");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_7_0;
      let tmp_10_0;
      let tmp_19_0;
      let tmp_24_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.requestedRole() === "hr_manager" ? "Register as HR Manager" : "Create an account", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.requestedRole() === "hr_manager" ? "Submit an HR access request for admin approval" : "Register to request access", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.serverError() && !ctx.success() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.full_name.invalid && ctx.full_name.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.full_name.touched && ctx.full_name.invalid ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.fieldErrors()) == null ? null : tmp_7_0["full_name"]) ? 14 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.email.invalid && ctx.email.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.email.touched && ctx.email.invalid ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.fieldErrors()) == null ? null : tmp_10_0["email"]) ? 20 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.password.invalid && ctx.password.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.password.touched && ctx.password.invalid ? 25 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", (ctx.form.errors == null ? null : ctx.form.errors["passwordsMatch"]) && ctx.password_confirm.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.password_confirm.touched && (ctx.password_confirm.errors == null ? null : ctx.password_confirm.errors["required"]) ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.form.errors == null ? null : ctx.form.errors["passwordsMatch"]) && ctx.password_confirm.touched ? 31 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.departments());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form.controls.department_id.touched && ctx.form.controls.department_id.hasError("required") ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_19_0 = ctx.fieldErrors()) == null ? null : tmp_19_0["department_id"]) ? 41 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.selectedDepartmentId() === null ? "\u2014 Select a department first \u2014" : "\u2014 Select designation \u2014", " ");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.filteredDesignations());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form.controls.designation_id.touched && ctx.form.controls.designation_id.hasError("required") ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_24_0 = ctx.fieldErrors()) == null ? null : tmp_24_0["designation_id"]) ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Submitting\u2026" : "Register", " ");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n.login-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n}\n.login-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 1.25rem;\n}\n.login-sub[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n  font-size: 0.9rem;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border: 1px solid #fecaca;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: var(--color-success);\n  border: 1px solid #bbf7d0;\n}\n.alt-link[_ngcontent-%COMP%] {\n  margin: var(--space-4) 0 0;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.alt-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: var(--space-4) 0;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.alt-divider[_ngcontent-%COMP%]::before, \n.alt-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--color-border);\n}\n.alt-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 var(--space-3);\n}\n.create-account-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.create-account-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: var(--color-bg);\n}\n.admin-login-link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--space-3);\n  text-align: center;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.admin-login-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.admin-login-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #1e293b;\n}\n.hr-login-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  background: #0d9488;\n  color: #fff;\n  border-color: #0d9488;\n}\n.hr-login-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #0f766e;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="login-wrap">
  <div class="card login-card">
    <h1 class="login-title">
      {{ requestedRole() === 'hr_manager' ? 'Register as HR Manager' : 'Create an account' }}
    </h1>
    <p class="text-muted login-sub">
      {{ requestedRole() === 'hr_manager'
          ? 'Submit an HR access request for admin approval'
          : 'Register to request access' }}
    </p>

    @if (success()) {
      <div class="alert alert-success" role="alert">{{ success() }}</div>
    }
    @if (serverError() && !success()) {
      <div class="alert alert-danger" role="alert">{{ serverError() }}</div>
    }

    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
      <div class="form-group">
        <label class="form-label" for="full_name">Full name</label>
        <input
          id="full_name"
          type="text"
          class="form-control"
          [class.is-invalid]="full_name.invalid && full_name.touched"
          formControlName="full_name"
        />
        @if (full_name.touched && full_name.invalid) {
          <div class="text-danger field-error">Full name is required.</div>
        }
        @if (fieldErrors()?.['full_name']) {
          <div class="text-danger field-error">{{ fieldErrors()!['full_name'] }}</div>
        }
      </div>

      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input
          id="email"
          type="email"
          class="form-control"
          [class.is-invalid]="email.invalid && email.touched"
          formControlName="email"
          autocomplete="username"
        />
        @if (email.touched && email.invalid) {
          <div class="text-danger field-error">
            @if (email.errors?.['required']) { Email is required. }
            @else if (email.errors?.['email']) { Enter a valid email address. }
          </div>
        }
        @if (fieldErrors()?.['email']) {
          <div class="text-danger field-error">{{ fieldErrors()!['email'] }}</div>
        }
      </div>

      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          [class.is-invalid]="password.invalid && password.touched"
          formControlName="password"
          autocomplete="new-password"
        />
        @if (password.touched && password.invalid) {
          <div class="text-danger field-error">
            @if (password.errors?.['required']) { Password is required. }
            @else if (password.errors?.['minlength']) { Password must be at least 8 characters. }
          </div>
        }
      </div>

      <div class="form-group">
        <label class="form-label" for="password_confirm">Confirm password</label>
        <input
          id="password_confirm"
          type="password"
          class="form-control"
          [class.is-invalid]="form.errors?.['passwordsMatch'] && password_confirm.touched"
          formControlName="password_confirm"
          autocomplete="new-password"
        />
        @if (password_confirm.touched && password_confirm.errors?.['required']) {
          <div class="text-danger field-error">Please confirm your password.</div>
        }
        @if (form.errors?.['passwordsMatch'] && password_confirm.touched) {
          <div class="text-danger field-error">Passwords do not match.</div>
        }
      </div>

      <div class="form-group">
        <label class="form-label" for="department_id">Department</label>
        <select id="department_id" class="form-control" formControlName="department_id">
          <option [ngValue]="null">\u2014 Select department \u2014</option>
          @for (d of departments(); track d.id) {
            <option [ngValue]="d.id">{{ d.name }}</option>
          }
        </select>
        @if (form.controls.department_id.touched && form.controls.department_id.hasError('required')) {
          <div class="text-danger field-error">Please select a department.</div>
        }
        @if (fieldErrors()?.['department_id']) {
          <div class="text-danger field-error">{{ fieldErrors()!['department_id'] }}</div>
        }
      </div>

      <div class="form-group">
        <label class="form-label" for="designation_id">Designation</label>
        <select
          id="designation_id"
          class="form-control"
          formControlName="designation_id"
        >
          <option [ngValue]="null">
            {{ selectedDepartmentId() === null ? '\u2014 Select a department first \u2014' : '\u2014 Select designation \u2014' }}
          </option>
          @for (d of filteredDesignations(); track d.id) {
            <option [ngValue]="d.id">{{ d.title }}</option>
          }
        </select>
        @if (form.controls.designation_id.touched && form.controls.designation_id.hasError('required')) {
          <div class="text-danger field-error">Please select a designation.</div>
        }
        @if (fieldErrors()?.['designation_id']) {
          <div class="text-danger field-error">{{ fieldErrors()!['designation_id'] }}</div>
        }
      </div>

      <button type="submit" class="btn btn-primary btn-block" [disabled]="loading()">
        {{ loading() ? 'Submitting\u2026' : 'Register' }}
      </button>
    </form>

    <p class="text-muted alt-link">
      Already have an account? <a routerLink="/login">Sign in</a>
    </p>
  </div>
</div>
`, styles: ['/* src/app/features/auth/login.component.scss */\n.login-wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.login-card {\n  width: 100%;\n  max-width: 380px;\n}\n.login-title {\n  margin: 0 0 var(--space-1);\n  font-size: 1.25rem;\n}\n.login-sub {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.field-error {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n.alert {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n  font-size: 0.9rem;\n}\n.alert-danger {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border: 1px solid #fecaca;\n}\n.alert-success {\n  background: #dcfce7;\n  color: var(--color-success);\n  border: 1px solid #bbf7d0;\n}\n.alt-link {\n  margin: var(--space-4) 0 0;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.alt-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: var(--space-4) 0;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.alt-divider::before,\n.alt-divider::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--color-border);\n}\n.alt-divider span {\n  padding: 0 var(--space-3);\n}\n.create-account-btn {\n  text-decoration: none;\n}\n.create-account-btn:hover {\n  text-decoration: none;\n  background: var(--color-bg);\n}\n.admin-login-link {\n  display: block;\n  margin-top: var(--space-3);\n  text-align: center;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.admin-login-btn {\n  margin-top: var(--space-2);\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.admin-login-btn:hover {\n  text-decoration: none;\n  background: #1e293b;\n}\n.hr-login-btn {\n  margin-top: var(--space-2);\n  background: #0d9488;\n  color: #fff;\n  border-color: #0d9488;\n}\n.hr-login-btn:hover {\n  text-decoration: none;\n  background: #0f766e;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register.component.ts", lineNumber: 41 });
})();
function passwordsMatch(group) {
  const pw = group.get("password")?.value;
  const confirm = group.get("password_confirm")?.value;
  if (pw && confirm && pw !== confirm) {
    return { passwordsMatch: true };
  }
  return null;
}
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-D456EBGF.js.map
