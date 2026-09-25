import {
  FieldErrorComponent
} from "./chunk-72F7OSS4.js";
import {
  EmployeeService
} from "./chunk-SUM7VYCQ.js";
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
  SpinnerComponent
} from "./chunk-FDAE4OJ5.js";
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
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/features/employees/employee-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmployeeFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function EmployeeFormComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function EmployeeFormComponent_Conditional_7_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.name);
  }
}
function EmployeeFormComponent_Conditional_7_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.title);
  }
}
function EmployeeFormComponent_Conditional_7_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 36);
    \u0275\u0275elementStart(1, "h3", 37);
    \u0275\u0275text(2, "Login account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "label", 38);
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 39)(8, "app-field-error", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "label", 41);
    \u0275\u0275text(11, "Temporary password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 42)(13, "app-field-error", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("control", ctx_r1.f.email);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r1.f.password);
  }
}
function EmployeeFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, EmployeeFormComponent_Conditional_7_Conditional_0_Template, 2, 1, "app-alert", 6);
    \u0275\u0275elementStart(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function EmployeeFormComponent_Conditional_7_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "label", 10);
    \u0275\u0275text(5, "Employee code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 11)(7, "app-field-error", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "label", 13);
    \u0275\u0275text(10, "Date of joining");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 14)(12, "app-field-error", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "label", 16);
    \u0275\u0275text(15, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 17)(17, "app-field-error", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 9)(19, "label", 19);
    \u0275\u0275text(20, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 20)(22, "app-field-error", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 9)(24, "label", 22);
    \u0275\u0275text(25, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 23)(27, "app-field-error", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 9)(29, "label", 25);
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 26)(32, "option", 27);
    \u0275\u0275text(33, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 28);
    \u0275\u0275text(35, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 9)(37, "label", 29);
    \u0275\u0275text(38, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 30)(40, "option", 31);
    \u0275\u0275text(41, "\u2014 None \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(42, EmployeeFormComponent_Conditional_7_For_43_Template, 2, 2, "option", 31, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 9)(45, "label", 32);
    \u0275\u0275text(46, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 33)(48, "option", 31);
    \u0275\u0275text(49, "\u2014 None \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(50, EmployeeFormComponent_Conditional_7_For_51_Template, 2, 2, "option", 31, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(52, EmployeeFormComponent_Conditional_7_Conditional_52_Template, 14, 2);
    \u0275\u0275elementStart(53, "div", 34)(54, "a", 3);
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 35);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.error() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(6);
    \u0275\u0275property("control", ctx_r1.f.employee_code);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r1.f.date_of_joining);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r1.f.first_name);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r1.f.last_name);
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r1.f.phone);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.departments());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.designations());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isEdit() ? 52 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : ctx_r1.isEdit() ? "Save changes" : "Create employee", " ");
  }
}
var EmployeeFormComponent = class _EmployeeFormComponent {
  fb = inject(FormBuilder);
  service = inject(EmployeeService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  employeeId = signal(null, ...ngDevMode ? [{ debugName: "employeeId" }] : (
    /* istanbul ignore next */
    []
  ));
  isEdit = signal(false, ...ngDevMode ? [{ debugName: "isEdit" }] : (
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
  form = this.fb.nonNullable.group({
    employee_code: ["", [Validators.required, Validators.maxLength(30)]],
    first_name: ["", [Validators.required, Validators.maxLength(80)]],
    last_name: ["", [Validators.required, Validators.maxLength(80)]],
    email: ["", [Validators.required, Validators.email]],
    password: [""],
    // required only in create mode (set in ngOnInit)
    phone: [""],
    department_id: this.fb.control(null),
    designation_id: this.fb.control(null),
    reporting_manager_id: this.fb.control(null),
    date_of_joining: ["", [Validators.required]],
    status: this.fb.nonNullable.control("active", {
      validators: [Validators.required]
    })
  });
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    const id = idParam ? Number(idParam) : null;
    this.employeeId.set(id);
    this.isEdit.set(id !== null);
    if (id === null) {
      this.form.controls.password.addValidators([
        Validators.required,
        Validators.minLength(8)
      ]);
    } else {
      this.form.controls.email.disable();
      this.form.controls.password.disable();
    }
    const lookups = {
      departments: this.service.departments(),
      designations: this.service.designations()
    };
    if (id === null) {
      forkJoin(lookups).subscribe({
        next: (res) => {
          this.applyLookups(res.departments, res.designations);
          this.loading.set(false);
        },
        error: () => {
          this.error.set("Failed to load form data.");
          this.loading.set(false);
        }
      });
    } else {
      forkJoin(__spreadProps(__spreadValues({}, lookups), { employee: this.service.get(id) })).subscribe({
        next: (res) => {
          this.applyLookups(res.departments, res.designations);
          if (res.employee.status === "success" && res.employee.data) {
            const e = res.employee.data;
            this.form.patchValue({
              employee_code: e.employee_code,
              first_name: e.first_name,
              last_name: e.last_name,
              phone: e.phone ?? "",
              department_id: e.department_id,
              designation_id: e.designation_id,
              reporting_manager_id: e.reporting_manager_id,
              date_of_joining: e.date_of_joining,
              status: e.status
            });
          } else {
            this.error.set("Employee not found.");
          }
          this.loading.set(false);
        },
        error: () => {
          this.error.set("Failed to load employee.");
          this.loading.set(false);
        }
      });
    }
  }
  applyLookups(depts, desigs) {
    if (depts.status === "success" && depts.data) {
      this.departments.set(depts.data);
    }
    if (desigs.status === "success" && desigs.data) {
      this.designations.set(desigs.data);
    }
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.error.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const payload = {
      employee_code: v.employee_code,
      first_name: v.first_name,
      last_name: v.last_name,
      phone: v.phone || null,
      department_id: v.department_id,
      designation_id: v.designation_id,
      reporting_manager_id: v.reporting_manager_id,
      date_of_joining: v.date_of_joining,
      status: v.status
    };
    if (!this.isEdit()) {
      payload.email = v.email;
      payload.password = v.password;
    }
    this.saving.set(true);
    const id = this.employeeId();
    const req$ = id === null ? this.service.create(payload) : this.service.update(id, payload);
    req$.subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.status === "success") {
          this.router.navigate(["/employees"]);
        } else {
          this.applyServerErrors(res);
        }
      },
      error: (err) => {
        this.saving.set(false);
        const body = err.error;
        if (err.status === 422 && body?.errors) {
          this.applyServerErrors(body);
        } else {
          this.error.set(body?.message ?? "Failed to save employee.");
        }
      }
    });
  }
  /** Push server-side field errors onto the matching form controls. */
  applyServerErrors(res) {
    if (res.errors) {
      for (const [field, message] of Object.entries(res.errors)) {
        const control = this.form.get(field);
        if (control) {
          control.setErrors({ server: message });
          control.markAsTouched();
        }
      }
    }
    this.error.set(res.message || "Please correct the highlighted fields.");
  }
  static \u0275fac = function EmployeeFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeFormComponent, selectors: [["app-employee-form"]], decls: 8, vars: 2, consts: [[1, "employee-form"], [1, "flex", "items-center", "justify-between", "header"], [1, "page-title"], ["routerLink", "/employees", 1, "btn"], [1, "state"], ["label", "Loading\u2026"], ["type", "error"], ["novalidate", "", 1, "card", "form-card", 3, "ngSubmit", "formGroup"], [1, "grid-2"], [1, "form-group"], ["for", "employee_code", 1, "form-label"], ["id", "employee_code", "formControlName", "employee_code", 1, "form-control"], ["label", "Employee code", 3, "control"], ["for", "date_of_joining", 1, "form-label"], ["id", "date_of_joining", "type", "date", "formControlName", "date_of_joining", 1, "form-control"], ["label", "Date of joining", 3, "control"], ["for", "first_name", 1, "form-label"], ["id", "first_name", "formControlName", "first_name", 1, "form-control"], ["label", "First name", 3, "control"], ["for", "last_name", 1, "form-label"], ["id", "last_name", "formControlName", "last_name", 1, "form-control"], ["label", "Last name", 3, "control"], ["for", "phone", 1, "form-label"], ["id", "phone", "formControlName", "phone", 1, "form-control"], ["label", "Phone", 3, "control"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["for", "department_id", 1, "form-label"], ["id", "department_id", "formControlName", "department_id", 1, "form-control"], [3, "ngValue"], ["for", "designation_id", 1, "form-label"], ["id", "designation_id", "formControlName", "designation_id", 1, "form-control"], [1, "actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "divider"], [1, "section-title"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control"], ["label", "Email", 3, "control"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", 1, "form-control"], ["label", "Password", 3, "control"]], template: function EmployeeFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Back to list");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, EmployeeFormComponent_Conditional_6_Template, 2, 0, "div", 4)(7, EmployeeFormComponent_Conditional_7_Template, 58, 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEdit() ? "Edit employee" : "Add employee");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 6 : 7);
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
    RouterLink,
    SpinnerComponent,
    AlertComponent,
    FieldErrorComponent
  ], styles: ["\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.form-card[_ngcontent-%COMP%] {\n  max-width: 760px;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n@media (max-width: 640px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid var(--color-border);\n  margin: var(--space-4) 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-3);\n  font-size: 1rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=employee-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeFormComponent, [{
    type: Component,
    args: [{ selector: "app-employee-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterLink,
      SpinnerComponent,
      AlertComponent,
      FieldErrorComponent
    ], template: `<div class="employee-form">
  <div class="flex items-center justify-between header">
    <h1 class="page-title">{{ isEdit() ? 'Edit employee' : 'Add employee' }}</h1>
    <a class="btn" routerLink="/employees">Back to list</a>
  </div>

  @if (loading()) {
    <div class="state"><app-spinner label="Loading\u2026" /></div>
  } @else {
    @if (error()) {
      <app-alert type="error">{{ error() }}</app-alert>
    }

    <form class="card form-card" [formGroup]="form" (ngSubmit)="submit()" novalidate>
      <div class="grid-2">
        <div class="form-group">
          <label class="form-label" for="employee_code">Employee code</label>
          <input id="employee_code" class="form-control" formControlName="employee_code" />
          <app-field-error [control]="f.employee_code" label="Employee code" />
        </div>

        <div class="form-group">
          <label class="form-label" for="date_of_joining">Date of joining</label>
          <input id="date_of_joining" type="date" class="form-control" formControlName="date_of_joining" />
          <app-field-error [control]="f.date_of_joining" label="Date of joining" />
        </div>

        <div class="form-group">
          <label class="form-label" for="first_name">First name</label>
          <input id="first_name" class="form-control" formControlName="first_name" />
          <app-field-error [control]="f.first_name" label="First name" />
        </div>

        <div class="form-group">
          <label class="form-label" for="last_name">Last name</label>
          <input id="last_name" class="form-control" formControlName="last_name" />
          <app-field-error [control]="f.last_name" label="Last name" />
        </div>

        <div class="form-group">
          <label class="form-label" for="phone">Phone</label>
          <input id="phone" class="form-control" formControlName="phone" />
          <app-field-error [control]="f.phone" label="Phone" />
        </div>

        <div class="form-group">
          <label class="form-label" for="status">Status</label>
          <select id="status" class="form-control" formControlName="status">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="department_id">Department</label>
          <select id="department_id" class="form-control" formControlName="department_id">
            <option [ngValue]="null">\u2014 None \u2014</option>
            @for (d of departments(); track d.id) {
              <option [ngValue]="d.id">{{ d.name }}</option>
            }
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="designation_id">Designation</label>
          <select id="designation_id" class="form-control" formControlName="designation_id">
            <option [ngValue]="null">\u2014 None \u2014</option>
            @for (d of designations(); track d.id) {
              <option [ngValue]="d.id">{{ d.title }}</option>
            }
          </select>
        </div>
      </div>

      <!-- Login account fields: only when creating a new employee. -->
      @if (!isEdit()) {
        <hr class="divider" />
        <h3 class="section-title">Login account</h3>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input id="email" type="email" class="form-control" formControlName="email" autocomplete="off" />
            <app-field-error [control]="f.email" label="Email" />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Temporary password</label>
            <input id="password" type="password" class="form-control" formControlName="password" autocomplete="new-password" />
            <app-field-error [control]="f.password" label="Password" />
          </div>
        </div>
      }

      <div class="actions">
        <a class="btn" routerLink="/employees">Cancel</a>
        <button type="submit" class="btn btn-primary" [disabled]="saving()">
          {{ saving() ? 'Saving\u2026' : isEdit() ? 'Save changes' : 'Create employee' }}
        </button>
      </div>
    </form>
  }
</div>
`, styles: ["/* src/app/features/employees/employee-form.component.scss */\n.page-title {\n  margin: 0;\n  font-size: 1.4rem;\n}\n.header {\n  margin-bottom: var(--space-4);\n}\n.state {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.form-card {\n  max-width: 760px;\n}\n.grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n@media (max-width: 640px) {\n  .grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n.divider {\n  border: none;\n  border-top: 1px solid var(--color-border);\n  margin: var(--space-4) 0;\n}\n.section-title {\n  margin: 0 0 var(--space-3);\n  font-size: 1rem;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=employee-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeFormComponent, { className: "EmployeeFormComponent", filePath: "src/app/features/employees/employee-form.component.ts", lineNumber: 52 });
})();
export {
  EmployeeFormComponent
};
//# sourceMappingURL=chunk-MK6J3U5E.js.map
