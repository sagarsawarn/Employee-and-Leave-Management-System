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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YIFJVJUK.js";

// src/app/shared/components/empty-state.component.ts
var _c0 = ["*"];
function EmptyStateComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message());
  }
}
var EmptyStateComponent = class _EmptyStateComponent {
  title = input("Nothing here yet", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  message = input("", ...ngDevMode ? [{ debugName: "message" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function EmptyStateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmptyStateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { title: [1, "title"], message: [1, "message"] }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "empty"], [1, "empty-title"], [1, "empty-message", "text-muted"]], template: function EmptyStateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(3, EmptyStateComponent_Conditional_3_Template, 2, 1, "p", 2);
      \u0275\u0275projection(4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.message() ? 3 : -1);
    }
  }, styles: ["\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-6) var(--space-4);\n  color: var(--color-muted);\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  margin-bottom: var(--space-1);\n}\n.empty-message[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-4);\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=empty-state.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyStateComponent, [{
    type: Component,
    args: [{ selector: "app-empty-state", standalone: true, template: `
    <div class="empty">
      <div class="empty-title">{{ title() }}</div>
      @if (message()) {
        <p class="empty-message text-muted">{{ message() }}</p>
      }
      <ng-content />
    </div>
  `, styles: ["/* angular:styles/component:css;91fbf9487eaa7836af75dff78799314a855e09f0a42842fe2e082135c5bac32f;C:/xampp/htdocs/Employee Management/frontend/src/app/shared/components/empty-state.component.ts */\n.empty {\n  text-align: center;\n  padding: var(--space-6) var(--space-4);\n  color: var(--color-muted);\n}\n.empty-title {\n  font-weight: 600;\n  color: var(--color-text);\n  margin-bottom: var(--space-1);\n}\n.empty-message {\n  margin: 0 0 var(--space-4);\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=empty-state.component.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src/app/shared/components/empty-state.component.ts", lineNumber: 41 });
})();

export {
  EmptyStateComponent
};
//# sourceMappingURL=chunk-FQ6VZRYS.js.map
