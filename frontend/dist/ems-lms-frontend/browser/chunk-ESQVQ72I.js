import {
  RegistrationService
} from "./chunk-YXAYIYH3.js";
import {
  AlertComponent
} from "./chunk-NWCK7RFC.js";
import {
  EmptyStateComponent
} from "./chunk-FQ6VZRYS.js";
import {
  SpinnerComponent
} from "./chunk-FDAE4OJ5.js";
import {
  CommonModule,
  Component,
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
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/features/registrations/registrations.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RegistrationsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function RegistrationsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-alert", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function RegistrationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function RegistrationsComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 7);
  }
}
function RegistrationsComponent_Conditional_8_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 10)(15, "button", 12);
    \u0275\u0275listener("click", function RegistrationsComponent_Conditional_8_Conditional_1_For_20_Template_button_click_15_listener() {
      const reg_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.approve(reg_r3));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function RegistrationsComponent_Conditional_8_Conditional_1_For_20_Template_button_click_17_listener() {
      const reg_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.reject(reg_r3));
    });
    \u0275\u0275text(18, " Reject ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r3.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-approved", reg_r3.requested_role === "hr_manager");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.requested_role === "hr_manager" ? "HR Manager" : "Employee", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r3.department_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r3.designation_title || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r3.created_at);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.busyId() === reg_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.busyId() === reg_r3.id ? "Working\u2026" : "Approve", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busyId() === reg_r3.id);
  }
}
function RegistrationsComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Requested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 10);
    \u0275\u0275text(17, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, RegistrationsComponent_Conditional_8_Conditional_1_For_20_Template, 19, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.items());
  }
}
function RegistrationsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RegistrationsComponent_Conditional_8_Conditional_0_Template, 1, 0, "app-empty-state", 7)(1, RegistrationsComponent_Conditional_8_Conditional_1_Template, 21, 0, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.items().length === 0 ? 0 : 1);
  }
}
var RegistrationsComponent = class _RegistrationsComponent {
  service = inject(RegistrationService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
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
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : (
    /* istanbul ignore next */
    []
  ));
  busyId = signal(null, ...ngDevMode ? [{ debugName: "busyId" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.service.pending().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === "success" && res.data) {
          this.items.set(res.data);
        } else {
          this.error.set(res.message || "Failed to load registrations");
        }
      },
      error: (err) => {
        this.loading.set(false);
        const body = err.error;
        this.error.set(body?.message ?? "Unable to load registrations.");
      }
    });
  }
  approve(reg) {
    this.act(reg.id, this.service.approve(reg.id), `${reg.email} approved \u2014 employee account created.`);
  }
  reject(reg) {
    this.act(reg.id, this.service.reject(reg.id), `${reg.email} rejected.`);
  }
  act(id, obs, successMsg) {
    this.busyId.set(id);
    this.error.set(null);
    this.success.set(null);
    obs.subscribe({
      next: () => {
        this.busyId.set(null);
        this.success.set(successMsg);
        this.load();
      },
      error: (err) => {
        this.busyId.set(null);
        const body = err.error;
        this.error.set(body?.message ?? "Action failed.");
      }
    });
  }
  static \u0275fac = function RegistrationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationsComponent, selectors: [["app-registrations"]], decls: 9, vars: 3, consts: [[1, "registrations"], [1, "page-title"], [1, "text-muted"], ["type", "success"], ["type", "error"], [1, "state"], ["label", "Loading requests\u2026"], ["title", "No pending requests", "message", "New self-registrations will appear here for review."], [1, "card", "table-card"], [1, "table"], [1, "right"], [1, "badge"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-danger", 3, "click", "disabled"]], template: function RegistrationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Registration requests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Approve to create an employee account, or reject the request.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, RegistrationsComponent_Conditional_5_Template, 2, 1, "app-alert", 3);
      \u0275\u0275conditionalCreate(6, RegistrationsComponent_Conditional_6_Template, 2, 1, "app-alert", 4);
      \u0275\u0275conditionalCreate(7, RegistrationsComponent_Conditional_7_Template, 2, 0, "div", 5)(8, RegistrationsComponent_Conditional_8_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.success() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [CommonModule, SpinnerComponent, EmptyStateComponent, AlertComponent], styles: ["\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 1.4rem;\n}\n.state[_ngcontent-%COMP%] {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n  margin-top: var(--space-4);\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: var(--space-2);\n}\n/*# sourceMappingURL=registrations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationsComponent, [{
    type: Component,
    args: [{ selector: "app-registrations", standalone: true, imports: [CommonModule, SpinnerComponent, EmptyStateComponent, AlertComponent], template: `<div class="registrations">
  <h1 class="page-title">Registration requests</h1>
  <p class="text-muted">Approve to create an employee account, or reject the request.</p>

  @if (success()) {
    <app-alert type="success">{{ success() }}</app-alert>
  }
  @if (error()) {
    <app-alert type="error">{{ error() }}</app-alert>
  }

  @if (loading()) {
    <div class="state"><app-spinner label="Loading requests\u2026" /></div>
  } @else {
    @if (items().length === 0) {
      <app-empty-state
        title="No pending requests"
        message="New self-registrations will appear here for review."
      />
    } @else {
      <div class="card table-card">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Requested</th>
              <th class="right">Action</th>
            </tr>
          </thead>
          <tbody>
            @for (reg of items(); track reg.id) {
              <tr>
                <td>{{ reg.full_name }}</td>
                <td>{{ reg.email }}</td>
                <td>
                  <span class="badge" [class.badge-approved]="reg.requested_role === 'hr_manager'">
                    {{ reg.requested_role === 'hr_manager' ? 'HR Manager' : 'Employee' }}
                  </span>
                </td>
                <td>{{ reg.department_name || '\u2014' }}</td>
                <td>{{ reg.designation_title || '\u2014' }}</td>
                <td>{{ reg.created_at }}</td>
                <td class="right">
                  <button
                    class="btn btn-primary"
                    [disabled]="busyId() === reg.id"
                    (click)="approve(reg)"
                  >
                    {{ busyId() === reg.id ? 'Working\u2026' : 'Approve' }}
                  </button>
                  <button
                    class="btn btn-danger"
                    [disabled]="busyId() === reg.id"
                    (click)="reject(reg)"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  }
</div>
`, styles: ["/* src/app/features/registrations/registrations.component.scss */\n.page-title {\n  margin: 0 0 var(--space-1);\n  font-size: 1.4rem;\n}\n.state {\n  padding: var(--space-6);\n  display: flex;\n  justify-content: center;\n}\n.table-card {\n  padding: 0;\n  overflow-x: auto;\n  margin-top: var(--space-4);\n}\n.right {\n  text-align: right;\n  white-space: nowrap;\n}\n.right .btn {\n  margin-left: var(--space-2);\n}\n/*# sourceMappingURL=registrations.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationsComponent, { className: "RegistrationsComponent", filePath: "src/app/features/registrations/registrations.component.ts", lineNumber: 27 });
})();
export {
  RegistrationsComponent
};
//# sourceMappingURL=chunk-ESQVQ72I.js.map
