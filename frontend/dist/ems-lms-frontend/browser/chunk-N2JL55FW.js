import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/leave.service.ts
var LeaveService = class _LeaveService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  types() {
    return this.http.get(`${this.base}/leave-types`);
  }
  myBalances() {
    return this.http.get(`${this.base}/leave-balances/me`);
  }
  apply(payload) {
    return this.http.post(`${this.base}/leave-applications`, payload);
  }
  myApplications() {
    return this.http.get(`${this.base}/leave-applications/me`);
  }
  /** Who is on approved leave now/upcoming (admin/HR dashboard panel). */
  onLeave() {
    return this.http.get(`${this.base}/leave-applications/on-leave`);
  }
  /** Approvals queue (admin/HR). */
  queue(query = {}) {
    let params = new HttpParams();
    if (query.status)
      params = params.set("status", query.status);
    if (query.employee_id != null) {
      params = params.set("employee_id", String(query.employee_id));
    }
    return this.http.get(`${this.base}/leave-applications`, { params });
  }
  approve(id, comment) {
    return this.http.patch(`${this.base}/leave-applications/${id}/approve`, { review_comment: comment });
  }
  reject(id, comment) {
    return this.http.patch(`${this.base}/leave-applications/${id}/reject`, { review_comment: comment });
  }
  cancel(id) {
    return this.http.patch(`${this.base}/leave-applications/${id}/cancel`, {});
  }
  static \u0275fac = function LeaveService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LeaveService, factory: _LeaveService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LeaveService
};
//# sourceMappingURL=chunk-N2JL55FW.js.map
