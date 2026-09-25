import {
  RegistrationService
} from "./chunk-YXAYIYH3.js";
import {
  CommonModule,
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YIFJVJUK.js";

// src/app/features/registrations/registration-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RegistrationListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function RegistrationListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function RegistrationListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading registrations...");
    \u0275\u0275domElementEnd();
  }
}
function RegistrationListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "h2");
    \u0275\u0275text(2, "No pending registrations");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 4);
    \u0275\u0275text(4, "New access requests will appear here.");
    \u0275\u0275domElementEnd()();
  }
}
function RegistrationListComponent_Conditional_15_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td")(13, "span", 12);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "td", 13)(16, "button", 14);
    \u0275\u0275domListener("click", function RegistrationListComponent_Conditional_15_For_20_Template_button_click_16_listener() {
      const request_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approve(request_r3));
    });
    \u0275\u0275text(17, " Approve ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "button", 15);
    \u0275\u0275domListener("click", function RegistrationListComponent_Conditional_15_For_20_Template_button_click_18_listener() {
      const request_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(request_r3));
    });
    \u0275\u0275text(19, " Delete ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const request_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r3.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r3.department_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r3.designation_title || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, request_r3.created_at, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r0.actionId() === request_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r0.actionId() === request_r3.id);
  }
}
function RegistrationListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Applicant");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Department");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Designation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th");
    \u0275\u0275text(13, "Requested");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "th", 11);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, RegistrationListComponent_Conditional_15_For_20_Template, 20, 11, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.requests());
  }
}
var RegistrationListComponent = class _RegistrationListComponent {
  registrations = inject(RegistrationService);
  requests = signal([], ...ngDevMode ? [{ debugName: "requests" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  actionId = signal(null, ...ngDevMode ? [{ debugName: "actionId" }] : (
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
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.registrations.list().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status === "success" && res.data) {
          this.requests.set(res.data);
        } else {
          this.error.set(res.message || "Unable to load registrations.");
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.showError(err, "Unable to load registrations.");
      }
    });
  }
  approve(request) {
    this.confirmAction(request, true);
  }
  remove(request) {
    this.confirmAction(request, false);
  }
  confirmAction(request, approve) {
    const action = approve ? "approve" : "delete";
    if (!window.confirm(`Are you sure you want to ${action} ${request.email}?`)) {
      return;
    }
    this.actionId.set(request.id);
    this.error.set(null);
    this.success.set(null);
    const call$ = approve ? this.registrations.approve(request.id) : this.registrations.remove(request.id);
    call$.subscribe({
      next: (res) => {
        this.actionId.set(null);
        if (res.status === "success") {
          this.success.set(approve ? `${request.email} approved and can now sign in.` : `${request.email} registration deleted.`);
          this.requests.update((items) => items.filter((item) => item.id !== request.id));
        } else {
          this.error.set(res.message || "Action failed.");
        }
      },
      error: (err) => {
        this.actionId.set(null);
        this.showError(err, "Action failed.");
      }
    });
  }
  showError(err, fallback) {
    const body = err.error;
    this.error.set(body?.message ?? fallback);
  }
  static \u0275fac = function RegistrationListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrationListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationListComponent, selectors: [["app-registration-list"]], decls: 16, vars: 4, consts: [[1, "registrations"], [1, "registrations-header"], [1, "eyebrow"], [1, "page-title"], [1, "text-muted"], ["type", "button", 1, "btn", 3, "click", "disabled"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "status", 1, "alert", "alert-success"], [1, "card", "state"], [1, "card", "table-card"], [1, "table"], [1, "actions-col"], [1, "badge", "badge-pending"], [1, "actions-col", "action-buttons"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"]], template: function RegistrationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "Administrator");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h1", 3);
      \u0275\u0275text(6, "New registrations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 4);
      \u0275\u0275text(8, "Review access requests before allowing sign-in.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "button", 5);
      \u0275\u0275domListener("click", function RegistrationListComponent_Template_button_click_9_listener() {
        return ctx.load();
      });
      \u0275\u0275text(10, " Refresh ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(11, RegistrationListComponent_Conditional_11_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(12, RegistrationListComponent_Conditional_12_Template, 2, 1, "div", 7);
      \u0275\u0275conditionalCreate(13, RegistrationListComponent_Conditional_13_Template, 2, 0, "div", 8)(14, RegistrationListComponent_Conditional_14_Template, 5, 0, "div", 8)(15, RegistrationListComponent_Conditional_15_Template, 21, 0, "div", 9);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275domProperty("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 13 : ctx.requests().length === 0 ? 14 : 15);
    }
  }, dependencies: [CommonModule, DatePipe], styles: ["\n.registrations[_ngcontent-%COMP%] {\n  max-width: 1180px;\n}\n.registrations-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  color: var(--color-primary);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n}\n.state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-6);\n}\n.state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n}\n.table-card[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.actions-col[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  justify-content: end;\n  display: flex;\n  white-space: nowrap;\n}\nth.actions-col[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n@media (max-width: 720px) {\n  .registrations-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .registrations-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .table[_ngcontent-%COMP%] {\n    min-width: 680px;\n  }\n}\n/*# sourceMappingURL=registration-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationListComponent, [{
    type: Component,
    args: [{ selector: "app-registration-list", standalone: true, imports: [CommonModule], template: `<section class="registrations">\r
  <div class="registrations-header">\r
    <div>\r
      <p class="eyebrow">Administrator</p>\r
      <h1 class="page-title">New registrations</h1>\r
      <p class="text-muted">Review access requests before allowing sign-in.</p>\r
    </div>\r
    <button class="btn" type="button" (click)="load()" [disabled]="loading()">\r
      Refresh\r
    </button>\r
  </div>\r
\r
  @if (error()) {\r
    <div class="alert alert-danger" role="alert">{{ error() }}</div>\r
  }\r
  @if (success()) {\r
    <div class="alert alert-success" role="status">{{ success() }}</div>\r
  }\r
\r
  @if (loading()) {\r
    <div class="card state">Loading registrations...</div>\r
  } @else if (requests().length === 0) {\r
    <div class="card state">\r
      <h2>No pending registrations</h2>\r
      <p class="text-muted">New access requests will appear here.</p>\r
    </div>\r
  } @else {\r
    <div class="card table-card">\r
      <table class="table">\r
        <thead>\r
          <tr>\r
            <th>Applicant</th>\r
            <th>Email</th>\r
            <th>Department</th>\r
            <th>Designation</th>\r
            <th>Requested</th>\r
            <th>Status</th>\r
            <th class="actions-col">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (request of requests(); track request.id) {\r
            <tr>\r
              <td>{{ request.full_name }}</td>\r
              <td>{{ request.email }}</td>\r
              <td>{{ request.department_name || '\u2014' }}</td>\r
              <td>{{ request.designation_title || '\u2014' }}</td>\r
              <td>{{ request.created_at | date: 'mediumDate' }}</td>\r
              <td><span class="badge badge-pending">{{ request.status }}</span></td>\r
              <td class="actions-col action-buttons">\r
                <button\r
                  class="btn btn-primary"\r
                  type="button"\r
                  (click)="approve(request)"\r
                  [disabled]="actionId() === request.id"\r
                >\r
                  Approve\r
                </button>\r
                <button\r
                  class="btn btn-danger"\r
                  type="button"\r
                  (click)="remove(request)"\r
                  [disabled]="actionId() === request.id"\r
                >\r
                  Delete\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
</section>\r
`, styles: ["/* src/app/features/registrations/registration-list.component.scss */\n.registrations {\n  max-width: 1180px;\n}\n.registrations-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4);\n  margin-bottom: var(--space-5);\n}\n.eyebrow {\n  margin: 0 0 var(--space-1);\n  color: var(--color-primary);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.page-title {\n  margin: 0 0 var(--space-2);\n}\n.state {\n  text-align: center;\n  padding: var(--space-6);\n}\n.state h2 {\n  margin: 0 0 var(--space-2);\n}\n.table-card {\n  overflow-x: auto;\n}\n.actions-col {\n  align-items: flex-end;\n  justify-content: end;\n  display: flex;\n  white-space: nowrap;\n}\nth.actions-col {\n  padding-right: 48px;\n}\n.action-buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n@media (max-width: 720px) {\n  .registrations-header {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .registrations-header .btn {\n    width: 100%;\n  }\n  .table {\n    min-width: 680px;\n  }\n}\n/*# sourceMappingURL=registration-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationListComponent, { className: "RegistrationListComponent", filePath: "src/app/features/registrations/registration-list.component.ts", lineNumber: 16 });
})();
export {
  RegistrationListComponent
};
//# sourceMappingURL=chunk-H2SJSQJ3.js.map
