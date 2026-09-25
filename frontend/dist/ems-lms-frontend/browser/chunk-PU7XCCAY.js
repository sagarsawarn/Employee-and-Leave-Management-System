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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-R367NJSO.js";
import {
  Router,
  RouterLink
} from "./chunk-F3B2X54H.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/features/auth/hr-login.component.ts
var _c0 = () => ({ role: "hr_manager" });
function HrLoginComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.serverError());
  }
}
function HrLoginComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email is required. ");
  }
}
function HrLoginComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a valid email address. ");
  }
}
function HrLoginComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, HrLoginComponent_Conditional_12_Conditional_1_Template, 1, 0)(2, HrLoginComponent_Conditional_12_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]) ? 1 : (ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]) ? 2 : -1);
  }
}
function HrLoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
var HrLoginComponent = class _HrLoginComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  serverError = signal(null, ...ngDevMode ? [{ debugName: "serverError" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }
  submit() {
    this.serverError.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.auth.login(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.status !== "success" || !res.data) {
          this.serverError.set(res.message || "Login failed");
          return;
        }
        if (res.data.user.role !== "hr_manager") {
          this.auth.logout();
          this.serverError.set("This account is not an HR manager. Use the regular sign-in page.");
          return;
        }
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.loading.set(false);
        const body = err.error;
        this.serverError.set(body?.message ?? "Unable to reach the server. Please try again.");
      }
    });
  }
  static \u0275fac = function HrLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrLoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrLoginComponent, selectors: [["app-hr-login"]], decls: 28, vars: 12, consts: [[1, "login-wrap"], [1, "card", "login-card"], [1, "login-title"], [1, "text-muted", "login-sub"], ["role", "alert", 1, "alert", "alert-danger"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "username", 1, "form-control"], [1, "text-danger", "field-error"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "text-muted", "alt-link"], ["routerLink", "/register", 3, "queryParams"], ["routerLink", "/login"]], template: function HrLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "HR sign-in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Restricted to HR manager accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, HrLoginComponent_Conditional_6_Template, 2, 1, "div", 4);
      \u0275\u0275elementStart(7, "form", 5);
      \u0275\u0275listener("ngSubmit", function HrLoginComponent_Template_form_ngSubmit_7_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(8, "div", 6)(9, "label", 7);
      \u0275\u0275text(10, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275conditionalCreate(12, HrLoginComponent_Conditional_12_Template, 3, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6)(14, "label", 10);
      \u0275\u0275text(15, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 11);
      \u0275\u0275conditionalCreate(17, HrLoginComponent_Conditional_17_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21, " Want to register as HR? ");
      \u0275\u0275elementStart(22, "a", 14);
      \u0275\u0275text(23, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p", 13);
      \u0275\u0275text(25, " Not HR? ");
      \u0275\u0275elementStart(26, "a", 15);
      \u0275\u0275text(27, "Employee sign-in");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.serverError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.email.invalid && ctx.email.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.email.touched && ctx.email.invalid ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.password.invalid && ctx.password.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.password.touched && ctx.password.invalid ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing in\u2026" : "Sign in as HR", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(11, _c0));
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n.login-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n}\n.login-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 1.25rem;\n}\n.login-sub[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n  font-size: 0.9rem;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border: 1px solid #fecaca;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: var(--color-success);\n  border: 1px solid #bbf7d0;\n}\n.alt-link[_ngcontent-%COMP%] {\n  margin: var(--space-4) 0 0;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.alt-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: var(--space-4) 0;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.alt-divider[_ngcontent-%COMP%]::before, \n.alt-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--color-border);\n}\n.alt-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 var(--space-3);\n}\n.create-account-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.create-account-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: var(--color-bg);\n}\n.admin-login-link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--space-3);\n  text-align: center;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.admin-login-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.admin-login-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #1e293b;\n}\n.hr-login-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  background: #0d9488;\n  color: #fff;\n  border-color: #0d9488;\n}\n.hr-login-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #0f766e;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrLoginComponent, [{
    type: Component,
    args: [{ selector: "app-hr-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="login-wrap">
  <div class="card login-card">
    <h1 class="login-title">HR sign-in</h1>
    <p class="text-muted login-sub">Restricted to HR manager accounts</p>

    @if (serverError()) {
      <div class="alert alert-danger" role="alert">{{ serverError() }}</div>
    }

    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
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
      </div>

      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          [class.is-invalid]="password.invalid && password.touched"
          formControlName="password"
          autocomplete="current-password"
        />
        @if (password.touched && password.invalid) {
          <div class="text-danger field-error">Password is required.</div>
        }
      </div>

      <button
        type="submit"
        class="btn btn-primary btn-block"
        [disabled]="loading()"
      >
        {{ loading() ? 'Signing in\u2026' : 'Sign in as HR' }}
      </button>
    </form>

    <p class="text-muted alt-link">
      Want to register as HR? <a routerLink="/register" [queryParams]="{ role: 'hr_manager' }">Register</a>
    </p>
    <p class="text-muted alt-link">
      Not HR? <a routerLink="/login">Employee sign-in</a>
    </p>
  </div>
</div>
`, styles: ['/* src/app/features/auth/login.component.scss */\n.login-wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.login-card {\n  width: 100%;\n  max-width: 380px;\n}\n.login-title {\n  margin: 0 0 var(--space-1);\n  font-size: 1.25rem;\n}\n.login-sub {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.field-error {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n.alert {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n  font-size: 0.9rem;\n}\n.alert-danger {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border: 1px solid #fecaca;\n}\n.alert-success {\n  background: #dcfce7;\n  color: var(--color-success);\n  border: 1px solid #bbf7d0;\n}\n.alt-link {\n  margin: var(--space-4) 0 0;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.alt-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: var(--space-4) 0;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.alt-divider::before,\n.alt-divider::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--color-border);\n}\n.alt-divider span {\n  padding: 0 var(--space-3);\n}\n.create-account-btn {\n  text-decoration: none;\n}\n.create-account-btn:hover {\n  text-decoration: none;\n  background: var(--color-bg);\n}\n.admin-login-link {\n  display: block;\n  margin-top: var(--space-3);\n  text-align: center;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.admin-login-btn {\n  margin-top: var(--space-2);\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.admin-login-btn:hover {\n  text-decoration: none;\n  background: #1e293b;\n}\n.hr-login-btn {\n  margin-top: var(--space-2);\n  background: #0d9488;\n  color: #fff;\n  border-color: #0d9488;\n}\n.hr-login-btn:hover {\n  text-decoration: none;\n  background: #0f766e;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrLoginComponent, { className: "HrLoginComponent", filePath: "src/app/features/auth/hr-login.component.ts", lineNumber: 26 });
})();
export {
  HrLoginComponent
};
//# sourceMappingURL=chunk-PU7XCCAY.js.map
