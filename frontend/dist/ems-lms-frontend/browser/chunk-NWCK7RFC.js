import {
  CommonModule,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-YIFJVJUK.js";

// src/app/shared/components/alert.component.ts
var _c0 = ["*"];
var AlertComponent = class _AlertComponent {
  type = input("info", ...ngDevMode ? [{ debugName: "type" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], inputs: { type: [1, "type"] }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [["role", "alert", 1, "alert"]], template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap("alert-" + ctx.type());
    }
  }, dependencies: [CommonModule], styles: ["\n.alert[_ngcontent-%COMP%] {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  font-size: 0.9rem;\n  border: 1px solid transparent;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: var(--color-success);\n  border-color: #bbf7d0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border-color: #fecaca;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: var(--color-primary);\n  border-color: #bfdbfe;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: var(--color-warning);\n  border-color: #fde68a;\n}\n/*# sourceMappingURL=alert.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{ selector: "app-alert", standalone: true, imports: [CommonModule], template: `
    <div class="alert" [class]="'alert-' + type()" role="alert">
      <ng-content />
    </div>
  `, styles: ["/* angular:styles/component:css;83470e2af081dd2448dc3edbcb6169f51f39c7783bb995a44ad3b716d04c0618;C:/xampp/htdocs/Employee Management/frontend/src/app/shared/components/alert.component.ts */\n.alert {\n  padding: var(--space-3);\n  border-radius: var(--radius);\n  font-size: 0.9rem;\n  border: 1px solid transparent;\n}\n.alert-success {\n  background: #dcfce7;\n  color: var(--color-success);\n  border-color: #bbf7d0;\n}\n.alert-error {\n  background: #fee2e2;\n  color: var(--color-danger);\n  border-color: #fecaca;\n}\n.alert-info {\n  background: #dbeafe;\n  color: var(--color-primary);\n  border-color: #bfdbfe;\n}\n.alert-warning {\n  background: #fef3c7;\n  color: var(--color-warning);\n  border-color: #fde68a;\n}\n/*# sourceMappingURL=alert.component.css.map */\n"] }]
  }], null, { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/shared/components/alert.component.ts", lineNumber: 52 });
})();

export {
  AlertComponent
};
//# sourceMappingURL=chunk-NWCK7RFC.js.map
