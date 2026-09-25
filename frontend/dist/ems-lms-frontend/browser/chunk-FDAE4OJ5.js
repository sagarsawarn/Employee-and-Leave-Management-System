import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YIFJVJUK.js";

// src/app/shared/components/spinner.component.ts
function SpinnerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
var SpinnerComponent = class _SpinnerComponent {
  /** Optional accessible label shown next to the spinner. */
  label = input("Loading\u2026", ...ngDevMode ? [{ debugName: "label" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnerComponent, selectors: [["app-spinner"]], inputs: { label: [1, "label"] }, decls: 3, vars: 2, consts: [["role", "status", 1, "spinner-wrap"], [1, "spinner"], [1, "spinner-label"]], template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "span", 1);
      \u0275\u0275conditionalCreate(2, SpinnerComponent_Conditional_2_Template, 2, 1, "span", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.label() ? 2 : -1);
    }
  }, styles: ["\n.spinner-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-muted);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.spinner-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=spinner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{ selector: "app-spinner", standalone: true, template: `
    <div class="spinner-wrap" role="status" [attr.aria-label]="label()">
      <span class="spinner"></span>
      @if (label()) {
        <span class="spinner-label">{{ label() }}</span>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;620e3e3c74bac6773b64d1ae2483a7b94d0dd7cf37d5f03b323125b9c017e6ae;C:/xampp/htdocs/Employee Management/frontend/src/app/shared/components/spinner.component.ts */\n.spinner-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-muted);\n}\n.spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--color-border);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.spinner-label {\n  font-size: 0.9rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=spinner.component.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src/app/shared/components/spinner.component.ts", lineNumber: 48 });
})();

export {
  SpinnerComponent
};
//# sourceMappingURL=chunk-FDAE4OJ5.js.map
