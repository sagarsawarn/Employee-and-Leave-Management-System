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
  ActivatedRoute,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/features/auth/login.component.ts
function LoginComponent_Conditional_6_Template(rf, ctx) {
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
function LoginComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email is required. ");
  }
}
function LoginComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a valid email address. ");
  }
}
function LoginComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_12_Conditional_1_Template, 1, 0)(2, LoginComponent_Conditional_12_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]) ? 1 : (ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]) ? 2 : -1);
  }
}
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
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
  isAdministrator = signal(false, ...ngDevMode ? [{ debugName: "isAdministrator" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      this.isAdministrator.set(params.get("administrator") === "true");
    });
  }
  /** Convenience getters for template validation checks. */
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
        if (res.status === "success") {
          this.router.navigate(["/dashboard"]);
        } else {
          this.serverError.set(res.message || "Login failed");
        }
      },
      error: (err) => {
        this.loading.set(false);
        const body = err.error;
        this.serverError.set(body?.message ?? "Unable to reach the server. Please try again.");
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 29, vars: 11, consts: [[1, "login-wrap"], [1, "card", "login-card"], [1, "login-title"], [1, "text-muted", "login-sub"], ["role", "alert", 1, "alert", "alert-danger"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "username", 1, "form-control"], [1, "text-danger", "field-error"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "alt-divider"], ["routerLink", "/register", 1, "btn", "btn-block", "create-account-btn"], ["routerLink", "/admin-login", 1, "btn", "btn-block", "admin-login-btn"], ["routerLink", "/hr-login", 1, "btn", "btn-block", "hr-login-btn"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Employee & Leave Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, LoginComponent_Conditional_6_Template, 2, 1, "div", 4);
      \u0275\u0275elementStart(7, "form", 5);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(8, "div", 6)(9, "label", 7);
      \u0275\u0275text(10, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275conditionalCreate(12, LoginComponent_Conditional_12_Template, 3, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6)(14, "label", 10);
      \u0275\u0275text(15, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 11);
      \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_17_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13)(21, "span");
      \u0275\u0275text(22, "or");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 14);
      \u0275\u0275text(24, " Create an account ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 15);
      \u0275\u0275text(26, " Admin login ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 16);
      \u0275\u0275text(28, " HR login ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isAdministrator() ? "Administrator sign in" : "Sign in to your account", " ");
      \u0275\u0275advance();
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
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing in\u2026" : "Sign in", " ");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n.login-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n}\n.login-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-1);\n  font-size: 1.25rem;\n}\n.login-sub[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n  font-size: 0.9rem;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border: 1px solid #fecaca;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: var(--color-success);\n  border: 1px solid #bbf7d0;\n}\n.alt-link[_ngcontent-%COMP%] {\n  margin: var(--space-4) 0 0;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.alt-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: var(--space-4) 0;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.alt-divider[_ngcontent-%COMP%]::before, \n.alt-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--color-border);\n}\n.alt-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 var(--space-3);\n}\n.create-account-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.create-account-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: var(--color-bg);\n}\n.admin-login-link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--space-3);\n  text-align: center;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.admin-login-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.admin-login-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #1e293b;\n}\n.hr-login-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  background: #0d9488;\n  color: #fff;\n  border-color: #0d9488;\n}\n.hr-login-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #0f766e;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<div class="login-wrap">
  <div class="card login-card">
    <h1 class="login-title">Employee &amp; Leave Management</h1>
    <p class="text-muted login-sub">
      {{ isAdministrator() ? 'Administrator sign in' : 'Sign in to your account' }}
    </p>

    <!-- Server-side / network error banner -->
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
        {{ loading() ? 'Signing in\u2026' : 'Sign in' }}
      </button>
    </form>

    <div class="alt-divider"><span>or</span></div>

    <a routerLink="/register" class="btn btn-block create-account-btn">
      Create an account
    </a>

    <a routerLink="/admin-login" class="btn btn-block admin-login-btn">
      Admin login
    </a>

    <a routerLink="/hr-login" class="btn btn-block hr-login-btn">
      HR login
    </a>
  </div>
</div>
`, styles: ['/* src/app/features/auth/login.component.scss */\n.login-wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n}\n.login-card {\n  width: 100%;\n  max-width: 380px;\n}\n.login-title {\n  margin: 0 0 var(--space-1);\n  font-size: 1.25rem;\n}\n.login-sub {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.field-error {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n.alert {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  margin-bottom: var(--space-4);\n  font-size: 0.9rem;\n}\n.alert-danger {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border: 1px solid #fecaca;\n}\n.alert-success {\n  background: #dcfce7;\n  color: var(--color-success);\n  border: 1px solid #bbf7d0;\n}\n.alt-link {\n  margin: var(--space-4) 0 0;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.alt-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: var(--space-4) 0;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.alt-divider::before,\n.alt-divider::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid var(--color-border);\n}\n.alt-divider span {\n  padding: 0 var(--space-3);\n}\n.create-account-btn {\n  text-decoration: none;\n}\n.create-account-btn:hover {\n  text-decoration: none;\n  background: var(--color-bg);\n}\n.admin-login-link {\n  display: block;\n  margin-top: var(--space-3);\n  text-align: center;\n  color: var(--color-muted);\n  font-size: 0.8rem;\n}\n.admin-login-btn {\n  margin-top: var(--space-2);\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.admin-login-btn:hover {\n  text-decoration: none;\n  background: #1e293b;\n}\n.hr-login-btn {\n  margin-top: var(--space-2);\n  background: #0d9488;\n  color: #fff;\n  border-color: #0d9488;\n}\n.hr-login-btn:hover {\n  text-decoration: none;\n  background: #0f766e;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login.component.ts", lineNumber: 33 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-RKRB3MA2.js.map
