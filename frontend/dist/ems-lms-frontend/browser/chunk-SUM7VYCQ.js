import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/employee.service.ts
var EmployeeService = class _EmployeeService {
  http = inject(HttpClient);
  base = environment.apiBaseUrl;
  list(query) {
    let params = new HttpParams();
    if (query.q)
      params = params.set("q", query.q);
    if (query.department_id != null) {
      params = params.set("department_id", String(query.department_id));
    }
    if (query.page != null)
      params = params.set("page", String(query.page));
    if (query.per_page != null) {
      params = params.set("per_page", String(query.per_page));
    }
    return this.http.get(`${this.base}/employees`, { params });
  }
  get(id) {
    return this.http.get(`${this.base}/employees/${id}`);
  }
  create(payload) {
    return this.http.post(`${this.base}/employees`, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.base}/employees/${id}`, payload);
  }
  remove(id) {
    return this.http.delete(`${this.base}/employees/${id}`);
  }
  departments() {
    return this.http.get(`${this.base}/departments`);
  }
  designations() {
    return this.http.get(`${this.base}/designations`);
  }
  static \u0275fac = function EmployeeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeService, factory: _EmployeeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  EmployeeService
};
//# sourceMappingURL=chunk-SUM7VYCQ.js.map
