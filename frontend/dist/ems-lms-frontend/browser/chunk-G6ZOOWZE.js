import {
  AuthService
} from "./chunk-WKCPM7O5.js";
import {
  EmployeeService
} from "./chunk-SUM7VYCQ.js";
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
  CommonModule,
  Component,
  HttpClient,
  Injectable,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/task.service.ts
var TaskService = class _TaskService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  list() {
    return this.http.get(`${this.base}/tasks`);
  }
  create(payload) {
    return this.http.post(`${this.base}/tasks`, payload);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.base}/tasks/${id}`, { status });
  }
  remove(id) {
    return this.http.delete(`${this.base}/tasks/${id}`);
  }
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/tasks/tasks.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TasksComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function TasksComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function TasksComponent_Conditional_11_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", employee_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", employee_r3.first_name, " ", employee_r3.last_name, " \xB7 ", employee_r3.employee_code);
  }
}
function TasksComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 7)(1, "h2", 10);
    \u0275\u0275text(2, "Assign a task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 11);
    \u0275\u0275listener("ngSubmit", function TasksComponent_Conditional_11_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.create());
    });
    \u0275\u0275elementStart(4, "div", 12)(5, "label", 13);
    \u0275\u0275text(6, "Task title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "label", 15);
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 12)(14, "label", 18);
    \u0275\u0275text(15, "Assign to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 19)(17, "option", 20);
    \u0275\u0275text(18, "Select employee");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, TasksComponent_Conditional_11_For_20_Template, 2, 4, "option", 20, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12)(22, "label", 21);
    \u0275\u0275text(23, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.employeeList());
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.saving() ? "Assigning\u2026" : "Assign task");
  }
}
function TasksComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading tasks\u2026");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h2");
    \u0275\u0275text(2, "No tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4, "Assigned tasks will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function TasksComponent_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Employee");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_Conditional_14_For_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r4.employee_name);
  }
}
function TasksComponent_Conditional_14_For_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function TasksComponent_Conditional_14_For_15_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const task_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateStatus(task_r4, task_r4.status === "assigned" ? "in_progress" : "completed"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r4.status === "assigned" ? "Start" : "Complete");
  }
}
function TasksComponent_Conditional_14_For_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function TasksComponent_Conditional_14_For_15_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const task_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(task_r4));
    });
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function TasksComponent_Conditional_14_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, TasksComponent_Conditional_14_For_15_Conditional_7_Template, 2, 1, "td");
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 27);
    \u0275\u0275conditionalCreate(14, TasksComponent_Conditional_14_For_15_Conditional_14_Template, 2, 1, "button", 28);
    \u0275\u0275conditionalCreate(15, TasksComponent_Conditional_14_For_15_Conditional_15_Template, 2, 0, "button", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r4.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r4.due_date);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-approved", task_r4.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isAdmin && task_r4.status !== "completed" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin ? 15 : -1);
  }
}
function TasksComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 25)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Task");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TasksComponent_Conditional_14_Conditional_6_Template, 2, 0, "th");
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, TasksComponent_Conditional_14_For_15_Template, 16, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isAdmin ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.items());
  }
}
var TasksComponent = class _TasksComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  tasks = inject(TaskService);
  employees = inject(EmployeeService);
  isAdmin = this.auth.hasAnyRole(["admin"]);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : (
    /* istanbul ignore next */
    []
  ));
  employeeList = signal([], ...ngDevMode ? [{ debugName: "employeeList" }] : (
    /* istanbul ignore next */
    []
  ));
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
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    title: ["", [Validators.required, Validators.maxLength(160)]],
    description: ["", [Validators.required, Validators.maxLength(2e3)]],
    assigned_to: [0, [Validators.required, Validators.min(1)]],
    due_date: ["", [Validators.required]]
  });
  ngOnInit() {
    this.load();
    if (this.isAdmin) {
      this.employees.list({ page: 1, per_page: 100 }).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data)
            this.employeeList.set(res.data.items);
        },
        error: () => {
        }
      });
    }
  }
  load() {
    this.loading.set(true);
    this.tasks.list().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === "success" && res.data)
          this.items.set(res.data);
        else
          this.error.set(res.message || "Unable to load tasks.");
      },
      error: (err) => {
        this.loading.set(false);
        this.showError(err, "Unable to load tasks.");
      }
    });
  }
  create() {
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
        if (res.status === "success") {
          this.success.set("Task assigned successfully.");
          this.form.reset({ title: "", description: "", assigned_to: 0, due_date: "" });
          this.load();
        } else
          this.error.set(res.message || "Unable to assign task.");
      },
      error: (err) => {
        this.saving.set(false);
        this.showError(err, "Unable to assign task.");
      }
    });
  }
  updateStatus(task, status) {
    this.tasks.updateStatus(task.id, status).subscribe({
      next: () => this.load(),
      error: (err) => this.showError(err, "Unable to update task.")
    });
  }
  remove(task) {
    if (!window.confirm(`Delete task "${task.title}"?`))
      return;
    this.tasks.remove(task.id).subscribe({
      next: () => this.load(),
      error: (err) => this.showError(err, "Unable to delete task.")
    });
  }
  showError(err, fallback) {
    const body = err.error;
    this.error.set(body?.message ?? fallback);
  }
  static \u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], decls: 15, vars: 7, consts: [[1, "tasks-page"], [1, "tasks-header"], [1, "eyebrow"], [1, "page-title"], ["type", "button", 1, "btn", 3, "click", "disabled"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "card", "task-form-card"], [1, "card", "state"], [1, "card", "table-card"], [1, "section-title"], [1, "task-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title", 1, "form-label"], ["id", "title", "formControlName", "title", 1, "form-control"], ["for", "description", 1, "form-label"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control"], [1, "grid-2"], ["for", "assigned_to", 1, "form-label"], ["id", "assigned_to", "formControlName", "assigned_to", 1, "form-control"], [3, "ngValue"], ["for", "due_date", 1, "form-label"], ["id", "due_date", "type", "date", "formControlName", "due_date", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-muted"], [1, "table"], [1, "badge"], [1, "actions-col"], [1, "btn", "btn-primary"], [1, "btn", "btn-danger"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_7_listener() {
        return ctx.load();
      });
      \u0275\u0275text(8, "Refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, TasksComponent_Conditional_9_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(10, TasksComponent_Conditional_10_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(11, TasksComponent_Conditional_11_Template, 27, 4, "section", 7);
      \u0275\u0275conditionalCreate(12, TasksComponent_Conditional_12_Template, 2, 0, "div", 8)(13, TasksComponent_Conditional_13_Template, 5, 0, "div", 8)(14, TasksComponent_Conditional_14_Template, 16, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isAdmin ? "Administrator" : "Employee");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isAdmin ? "Assigned tasks" : "My tasks");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdmin ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.items().length === 0 ? 13 : 14);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.task-form-card[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.task-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--space-3);\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.actions-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  text-align: center;\n}\n/*# sourceMappingURL=tasks.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{ selector: "app-tasks", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<section class="tasks-page">\r
  <div class="tasks-header">\r
    <div>\r
      <p class="eyebrow">{{ isAdmin ? 'Administrator' : 'Employee' }}</p>\r
      <h1 class="page-title">{{ isAdmin ? 'Assigned tasks' : 'My tasks' }}</h1>\r
    </div>\r
    <button class="btn" type="button" (click)="load()" [disabled]="loading()">Refresh</button>\r
  </div>\r
\r
  @if (error()) { <div class="alert alert-danger">{{ error() }}</div> }\r
  @if (success()) { <div class="alert alert-success">{{ success() }}</div> }\r
\r
  @if (isAdmin) {\r
    <section class="card task-form-card">\r
      <h2 class="section-title">Assign a task</h2>\r
      <form [formGroup]="form" (ngSubmit)="create()" class="task-form">\r
        <div class="form-group">\r
          <label class="form-label" for="title">Task title</label>\r
          <input id="title" class="form-control" formControlName="title" />\r
        </div>\r
        <div class="form-group">\r
          <label class="form-label" for="description">Description</label>\r
          <textarea id="description" class="form-control" rows="3" formControlName="description"></textarea>\r
        </div>\r
        <div class="grid-2">\r
          <div class="form-group">\r
            <label class="form-label" for="assigned_to">Assign to</label>\r
            <select id="assigned_to" class="form-control" formControlName="assigned_to">\r
              <option [ngValue]="0">Select employee</option>\r
              @for (employee of employeeList(); track employee.id) {\r
                <option [ngValue]="employee.id">{{ employee.first_name }} {{ employee.last_name }} \xB7 {{ employee.employee_code }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="form-group">\r
            <label class="form-label" for="due_date">Due date</label>\r
            <input id="due_date" type="date" class="form-control" formControlName="due_date" />\r
          </div>\r
        </div>\r
        <button class="btn btn-primary" type="submit" [disabled]="saving()">{{ saving() ? 'Assigning\u2026' : 'Assign task' }}</button>\r
      </form>\r
    </section>\r
  }\r
\r
  @if (loading()) {\r
    <div class="card state">Loading tasks\u2026</div>\r
  } @else if (items().length === 0) {\r
    <div class="card state"><h2>No tasks</h2><p class="text-muted">Assigned tasks will appear here.</p></div>\r
  } @else {\r
    <div class="card table-card">\r
      <table class="table">\r
        <thead><tr><th>Task</th>@if (isAdmin) { <th>Employee</th> }<th>Due date</th><th>Status</th><th>Action</th></tr></thead>\r
        <tbody>\r
          @for (task of items(); track task.id) {\r
            <tr>\r
              <td><strong>{{ task.title }}</strong><br /><span class="text-muted">{{ task.description }}</span></td>\r
              @if (isAdmin) { <td>{{ task.employee_name }}</td> }\r
              <td>{{ task.due_date }}</td>\r
              <td><span class="badge" [class.badge-approved]="task.status === 'completed'">{{ task.status }}</span></td>\r
              <td class="actions-col">\r
                @if (!isAdmin && task.status !== 'completed') {\r
                  <button class="btn btn-primary" (click)="updateStatus(task, task.status === 'assigned' ? 'in_progress' : 'completed')">{{ task.status === 'assigned' ? 'Start' : 'Complete' }}</button>\r
                }\r
                @if (isAdmin) { <button class="btn btn-danger" (click)="remove(task)">Delete</button> }\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
</section>`, styles: ["/* src/app/features/tasks/tasks.component.scss */\n.tasks-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.task-form-card {\n  margin-bottom: var(--space-5);\n}\n.task-form {\n  display: grid;\n  gap: var(--space-3);\n}\n.table-card {\n  padding: 0;\n  overflow-x: auto;\n}\n.actions-col {\n  white-space: nowrap;\n}\n.state {\n  padding: var(--space-6);\n  text-align: center;\n}\n/*# sourceMappingURL=tasks.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/features/tasks/tasks.component.ts", lineNumber: 20 });
})();
export {
  TasksComponent
};
//# sourceMappingURL=chunk-G6ZOOWZE.js.map
