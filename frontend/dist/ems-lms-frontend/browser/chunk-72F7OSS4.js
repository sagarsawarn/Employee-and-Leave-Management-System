import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YIFJVJUK.js";

// src/app/shared/components/field-error.component.ts
function FieldErrorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.firstError());
  }
}
var FieldErrorComponent = class _FieldErrorComponent {
  control = input(null, ...ngDevMode ? [{ debugName: "control" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Human label used in messages, e.g. "Email". */
  label = input("This field", ...ngDevMode ? [{ debugName: "label" }] : (
    /* istanbul ignore next */
    []
  ));
  firstError() {
    const c = this.control();
    if (!c || !c.errors)
      return "";
    const errors = c.errors;
    const label = this.label();
    if (errors["required"])
      return `${label} is required.`;
    if (errors["email"])
      return `Enter a valid email address.`;
    if (errors["minlength"]) {
      return `${label} must be at least ${errors["minlength"].requiredLength} characters.`;
    }
    if (errors["maxlength"]) {
      return `${label} must be at most ${errors["maxlength"].requiredLength} characters.`;
    }
    if (errors["server"])
      return String(errors["server"]);
    return `${label} is invalid.`;
  }
  static \u0275fac = function FieldErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FieldErrorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FieldErrorComponent, selectors: [["app-field-error"]], inputs: { control: [1, "control"], label: [1, "label"] }, decls: 1, vars: 1, consts: [[1, "field-error", "text-danger"]], template: function FieldErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, FieldErrorComponent_Conditional_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.control() && ctx.control().touched && ctx.control().invalid ? 0 : -1);
    }
  }, styles: ["\n.field-error[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=field-error.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldErrorComponent, [{
    type: Component,
    args: [{ selector: "app-field-error", standalone: true, template: `
    @if (control() && control()!.touched && control()!.invalid) {
      <div class="field-error text-danger">{{ firstError() }}</div>
    }
  `, styles: ["/* angular:styles/component:css;41edda2e20aaf4a67e953a2a1caece3502872a913db739ff081f5b9264b014b2;C:/xampp/htdocs/Employee Management/frontend/src/app/shared/components/field-error.component.ts */\n.field-error {\n  margin-top: var(--space-1);\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=field-error.component.css.map */\n"] }]
  }], null, { control: [{ type: Input, args: [{ isSignal: true, alias: "control", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FieldErrorComponent, { className: "FieldErrorComponent", filePath: "src/app/shared/components/field-error.component.ts", lineNumber: 29 });
})();

export {
  FieldErrorComponent
};
//# sourceMappingURL=chunk-72F7OSS4.js.map
