import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/registration.service.ts
var RegistrationService = class _RegistrationService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  pending() {
    return this.http.get(`${this.base}/registrations`);
  }
  list() {
    return this.pending();
  }
  approve(id) {
    return this.http.patch(`${this.base}/registrations/${id}/approve`, {});
  }
  reject(id) {
    return this.http.patch(`${this.base}/registrations/${id}/reject`, {});
  }
  remove(id) {
    return this.http.delete(`${this.base}/registrations/${id}`);
  }
  static \u0275fac = function RegistrationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegistrationService, factory: _RegistrationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RegistrationService
};
//# sourceMappingURL=chunk-YXAYIYH3.js.map
