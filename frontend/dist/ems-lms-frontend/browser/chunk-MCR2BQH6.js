import {
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YIFJVJUK.js";

// src/app/shared/components/confirm-dialog.component.ts
function ConfirmDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel.emit());
    });
    \u0275\u0275domElementStart(1, "div", 2);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 5)(7, "button", 6);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel.emit());
    });
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 7);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm.emit());
    });
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.title());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancelLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmLabel(), " ");
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  open = input(false, ...ngDevMode ? [{ debugName: "open" }] : (
    /* istanbul ignore next */
    []
  ));
  title = input("Are you sure?", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  message = input("This action cannot be undone.", ...ngDevMode ? [{ debugName: "message" }] : (
    /* istanbul ignore next */
    []
  ));
  confirmLabel = input("Confirm", ...ngDevMode ? [{ debugName: "confirmLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  cancelLabel = input("Cancel", ...ngDevMode ? [{ debugName: "cancelLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  confirm = output();
  cancel = output();
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], inputs: { open: [1, "open"], title: [1, "title"], message: [1, "message"], confirmLabel: [1, "confirmLabel"], cancelLabel: [1, "cancelLabel"] }, outputs: { confirm: "confirm", cancel: "cancel" }, decls: 1, vars: 1, consts: [[1, "backdrop"], [1, "backdrop", 3, "click"], [1, "dialog", 3, "click"], [1, "dialog-title"], [1, "dialog-message", "text-muted"], [1, "dialog-actions"], [1, "btn", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ConfirmDialogComponent_Conditional_0_Template, 11, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open() ? 0 : -1);
    }
  }, styles: ["\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: var(--space-4);\n}\n.dialog[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-radius: var(--radius);\n  padding: var(--space-5);\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-2);\n  font-size: 1.1rem;\n}\n.dialog-message[_ngcontent-%COMP%] {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: true, template: `
    @if (open()) {
      <div class="backdrop" (click)="cancel.emit()">
        <div class="dialog" (click)="$event.stopPropagation()">
          <h3 class="dialog-title">{{ title() }}</h3>
          <p class="dialog-message text-muted">{{ message() }}</p>
          <div class="dialog-actions">
            <button class="btn" (click)="cancel.emit()">
              {{ cancelLabel() }}
            </button>
            <button class="btn btn-danger" (click)="confirm.emit()">
              {{ confirmLabel() }}
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;eddc3b0dbc883eb3c8d2b133a25a87b02dadf9e95186e8b9823ce1b5c3e6f29f;C:/xampp/htdocs/Employee Management/frontend/src/app/shared/components/confirm-dialog.component.ts */\n.backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: var(--space-4);\n}\n.dialog {\n  background: var(--color-surface);\n  border-radius: var(--radius);\n  padding: var(--space-5);\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.dialog-title {\n  margin: 0 0 var(--space-2);\n  font-size: 1.1rem;\n}\n.dialog-message {\n  margin: 0 0 var(--space-5);\n  font-size: 0.9rem;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */\n"] }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false }] }], confirmLabel: [{ type: Input, args: [{ isSignal: true, alias: "confirmLabel", required: false }] }], cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false }] }], confirm: [{ type: Output, args: ["confirm"] }], cancel: [{ type: Output, args: ["cancel"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog.component.ts", lineNumber: 68 });
})();

export {
  ConfirmDialogComponent
};
//# sourceMappingURL=chunk-MCR2BQH6.js.map
