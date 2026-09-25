import {
  ConfirmDialogComponent
} from "./chunk-MCR2BQH6.js";
import {
  EmployeeService
} from "./chunk-SUM7VYCQ.js";
import {
  AlertComponent
} from "./chunk-NWCK7RFC.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-R367NJSO.js";
import {
  EmptyStateComponent
} from "./chunk-FQ6VZRYS.js";
import {
  SpinnerComponent
} from "./chunk-FDAE4OJ5.js";
import {
  Router,
  RouterLink
} from "./chunk-F3B2X54H.js";
import {
  CommonModule,
  Component,
  debounceTime,
  distinctUntilChanged,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-YIFJVJUK.js";

// src/app/features/employees/employee-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmployeeListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function EmployeeListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-empty-state", 10)(1, "a", 3);
    \u0275\u0275text(2, "Add employee");
    \u0275\u0275elementEnd()();
  }
}
function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 13)(11, "button", 18);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_For_16_Template_button_click_11_listener() {
      const emp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.viewProfile(emp_r4));
    });
    \u0275\u0275text(12, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 19);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_For_16_Template_button_click_13_listener() {
      const emp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.edit(emp_r4));
    });
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_For_16_Template_button_click_15_listener() {
      const emp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.askDelete(emp_r4));
    });
    \u0275\u0275text(16, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const emp_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r4.employee_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", emp_r4.first_name, " ", emp_r4.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r4.department_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-approved", emp_r4.status === "active")("badge-cancelled", emp_r4.status === "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", emp_r4.status, " ");
  }
}
function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 13);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_For_16_Template, 17, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 14)(18, "button", 15);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r2);
      const d_r5 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(d_r5.page - 1));
    });
    \u0275\u0275text(19, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const d_r5 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(d_r5.page + 1));
    });
    \u0275\u0275text(23, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(d_r5.items);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", d_r5.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Page ", d_r5.page, " of ", d_r5.total_pages, " (", d_r5.total, " total) ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", d_r5.page >= d_r5.total_pages);
  }
}
function EmployeeListComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmployeeListComponent_Conditional_10_Conditional_0_Conditional_0_Template, 3, 0, "app-empty-state", 10)(1, EmployeeListComponent_Conditional_10_Conditional_0_Conditional_1_Template, 24, 5);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.items.length === 0 ? 0 : 1);
  }
}
function EmployeeListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmployeeListComponent_Conditional_10_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.data()) ? 0 : -1, tmp_1_0);
  }
}
var EmployeeListComponent = class _EmployeeListComponent {
  service = inject(EmployeeService);
  router = inject(Router);
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
  page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
    /* istanbul ignore next */
    []
  ));
  perPage = 10;
  search = new FormControl("", { nonNullable: true });
  // Delete confirmation state.
  confirmOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  pendingDelete = null;
  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => {
      this.page.set(1);
      this.fetch();
    });
    this.fetch();
  }
  fetch() {
    this.loading.set(true);
    this.error.set(null);
    this.service.list({
      q: this.search.value || void 0,
      page: this.page(),
      per_page: this.perPage
    }).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === "success" && res.data) {
          this.data.set(res.data);
        } else {
          this.error.set(res.message || "Failed to load employees");
        }
      },
      error: (err) => {
        this.loading.set(false);
        const body = err.error;
        this.error.set(body?.message ?? "Unable to load employees.");
      }
    });
  }
  goToPage(p) {
    const d = this.data();
    if (!d || p < 1 || p > d.total_pages)
      return;
    this.page.set(p);
    this.fetch();
  }
  edit(emp) {
    this.router.navigate(["/employees", emp.id, "edit"]);
  }
  viewProfile(emp) {
    this.router.navigate(["/employees", emp.id, "profile"]);
  }
  askDelete(emp) {
    this.pendingDelete = emp;
    this.confirmOpen.set(true);
  }
  cancelDelete() {
    this.pendingDelete = null;
    this.confirmOpen.set(false);
  }
  confirmDelete() {
    const emp = this.pendingDelete;
    this.confirmOpen.set(false);
    if (!emp)
      return;
    this.service.remove(emp.id).subscribe({
      next: () => {
        this.pendingDelete = null;
        this.fetch();
      },
      error: (err) => {
        const body = err.error;
        this.error.set(body?.message ?? "Failed to delete employee.");
      }
    });
  }
  static \u0275fac = function EmployeeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeListComponent, selectors: [["app-employee-list"]], decls: 12, vars: 4, consts: [[1, "employees"], [1, "flex", "items-center", "justify-between", "header"], [1, "page-title"], ["routerLink", "/employees/new", 1, "btn", "btn-primary"], [1, "toolbar"], ["type", "search", "placeholder", "Search by name or code\u2026", 1, "form-control", "search", 3, "formControl"], ["type", "error"], [1, "state"], ["title", "Delete employee?", "message", "This will deactivate the employee record. You can restore it later from the database.", "confirmLabel", "Delete", 3, "confirm", "cancel", "open"], ["label", "Loading employees\u2026"], ["title", "No employees found", "message", "Try a different search, or add a new employee."], [1, "card", "table-card"], [1, "table"], [1, "actions-col"], [1, "pagination"], [1, "btn", 3, "click", "disabled"], [1, "text-muted", "page-info"], [1, "badge"], [1, "btn", 3, "click"], [1, "btn", "btn-edit", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function EmployeeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Employees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Add employee");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275element(7, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, EmployeeListComponent_Conditional_8_Template, 2, 1, "app-alert", 6);
      \u0275\u0275conditionalCreate(9, EmployeeListComponent_Conditional_9_Template, 2, 0, "div", 7)(10, EmployeeListComponent_Conditional_10_Template, 1, 1);
      \u0275\u0275elementStart(11, "app-confirm-dialog", 8);
      \u0275\u0275listener("confirm", function EmployeeListComponent_Template_app_confirm_dialog_confirm_11_listener() {
        return ctx.confirmDelete();
      })("cancel", function EmployeeListComponent_Template_app_confirm_dialog_cancel_11_listener() {
        return ctx.cancelDelete();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("formControl", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("open", ctx.confirmOpen());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    FormControlDirective,
    RouterLink,
    SpinnerComponent,
    EmptyStateComponent,
    AlertComponent,
    ConfirmDialogComponent
  ], styles: ["\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.toolbar[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.search[_ngcontent-%COMP%] {\n  max-width: 320px;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.actions-col[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n  border-color: var(--color-primary);\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-4);\n  margin-top: var(--space-4);\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=employee-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeListComponent, [{
    type: Component,
    args: [{ selector: "app-employee-list", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterLink,
      SpinnerComponent,
      EmptyStateComponent,
      AlertComponent,
      ConfirmDialogComponent
    ], template: `<div class="employees">
  <div class="flex items-center justify-between header">
    <h1 class="page-title">Employees</h1>
    <a class="btn btn-primary" routerLink="/employees/new">Add employee</a>
  </div>

  <div class="toolbar">
    <input
      class="form-control search"
      type="search"
      placeholder="Search by name or code\u2026"
      [formControl]="search"
    />
  </div>

  <!-- Error state -->
  @if (error()) {
    <app-alert type="error">{{ error() }}</app-alert>
  }

  <!-- Loading state -->
  @if (loading()) {
    <div class="state"><app-spinner label="Loading employees\u2026" /></div>
  } @else {
    @if (data(); as d) {
    <!-- Empty state -->
    @if (d.items.length === 0) {
      <app-empty-state
        title="No employees found"
        message="Try a different search, or add a new employee."
      >
        <a class="btn btn-primary" routerLink="/employees/new">Add employee</a>
      </app-empty-state>
    } @else {
      <div class="card table-card">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
              <th class="actions-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (emp of d.items; track emp.id) {
              <tr>
                <td>{{ emp.employee_code }}</td>
                <td>{{ emp.first_name }} {{ emp.last_name }}</td>
                <td>{{ emp.department_name || '\u2014' }}</td>
                <td>
                  <span
                    class="badge"
                    [class.badge-approved]="emp.status === 'active'"
                    [class.badge-cancelled]="emp.status === 'inactive'"
                  >
                    {{ emp.status }}
                  </span>
                </td>
                <td class="actions-col">
                  <button class="btn" (click)="viewProfile(emp)">View</button>
                  <button class="btn btn-edit" (click)="edit(emp)">Edit</button>
                  <button class="btn btn-danger" (click)="askDelete(emp)">
                    Delete
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button
          class="btn"
          [disabled]="d.page <= 1"
          (click)="goToPage(d.page - 1)"
        >
          Previous
        </button>
        <span class="text-muted page-info">
          Page {{ d.page }} of {{ d.total_pages }} ({{ d.total }} total)
        </span>
        <button
          class="btn"
          [disabled]="d.page >= d.total_pages"
          (click)="goToPage(d.page + 1)"
        >
          Next
        </button>
      </div>
    }
    }
  }

  <!-- Delete confirmation -->
  <app-confirm-dialog
    [open]="confirmOpen()"
    title="Delete employee?"
    message="This will deactivate the employee record. You can restore it later from the database."
    confirmLabel="Delete"
    (confirm)="confirmDelete()"
    (cancel)="cancelDelete()"
  />
</div>
`, styles: ["/* src/app/features/employees/employee-list.component.scss */\n.page-title {\n  margin: 0;\n  font-size: 1.4rem;\n}\n.header {\n  margin-bottom: var(--space-4);\n}\n.toolbar {\n  margin-bottom: var(--space-4);\n}\n.search {\n  max-width: 320px;\n}\n.state {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.table-card {\n  padding: 0;\n  overflow-x: auto;\n}\n.actions-col {\n  text-align: right;\n  white-space: nowrap;\n}\n.actions-col .btn {\n  margin-left: var(--space-2);\n}\n.btn-edit {\n  background: var(--color-primary);\n  color: #fff;\n  border-color: var(--color-primary);\n}\n.btn-edit:hover {\n  background: var(--color-primary-hover);\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-4);\n  margin-top: var(--space-4);\n}\n.page-info {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=employee-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeListComponent, { className: "EmployeeListComponent", filePath: "src/app/features/employees/employee-list.component.ts", lineNumber: 46 });
})();
export {
  EmployeeListComponent
};
//# sourceMappingURL=chunk-PWPAKD7H.js.map
