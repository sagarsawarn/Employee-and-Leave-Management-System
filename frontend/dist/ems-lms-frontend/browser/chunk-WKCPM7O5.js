import {
  HttpClient,
  Injectable,
  computed,
  environment,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-YIFJVJUK.js";

// src/app/core/services/token-storage.service.ts
var TokenStorageService = class _TokenStorageService {
  ACCESS = "ems.access_token";
  REFRESH = "ems.refresh_token";
  setTokens(tokens) {
    localStorage.setItem(this.ACCESS, tokens.access_token);
    localStorage.setItem(this.REFRESH, tokens.refresh_token);
  }
  get accessToken() {
    return localStorage.getItem(this.ACCESS);
  }
  get refreshToken() {
    return localStorage.getItem(this.REFRESH);
  }
  clear() {
    localStorage.removeItem(this.ACCESS);
    localStorage.removeItem(this.REFRESH);
  }
  static \u0275fac = function TokenStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenStorageService, factory: _TokenStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenStorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  storage = inject(TokenStorageService);
  base = environment.apiBaseUrl;
  /** Current user, hydrated lazily via /auth/me when a token exists. */
  _user = signal(null, ...ngDevMode ? [{ debugName: "_user" }] : (
    /* istanbul ignore next */
    []
  ));
  user = this._user.asReadonly();
  isAuthenticated = computed(() => this._user() !== null || this.storage.accessToken !== null, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  role = computed(() => this._user()?.role ?? null, ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  login(payload) {
    return this.http.post(`${this.base}/auth/login`, payload).pipe(tap((res) => {
      if (res.status === "success" && res.data) {
        this.storage.setTokens(res.data.tokens);
        this._user.set(res.data.user);
      }
    }));
  }
  /**
   * Submit a public self-registration request. Stored server-side in the
   * separate `registrations` table; does not log the user in.
   */
  register(payload) {
    return this.http.post(`${this.base}/auth/register`, payload);
  }
  /** Public department list for the (unauthenticated) registration form. */
  publicDepartments() {
    return this.http.get(`${this.base}/departments/public`);
  }
  /** Public designation list for the (unauthenticated) registration form. */
  publicDesignations() {
    return this.http.get(`${this.base}/designations/public`);
  }
  /** Load the current user from the server (source of truth for role). */
  loadMe() {
    return this.http.get(`${this.base}/auth/me`).pipe(tap((res) => {
      if (res.status === "success" && res.data) {
        this._user.set(res.data);
      }
    }));
  }
  refresh() {
    const refresh_token = this.storage.refreshToken;
    return this.http.post(`${this.base}/auth/refresh`, {
      refresh_token
    }).pipe(tap((res) => {
      if (res.status === "success" && res.data) {
        this.storage.setTokens(res.data.tokens);
      }
    }));
  }
  logout() {
    const refresh_token = this.storage.refreshToken;
    if (refresh_token) {
      this.http.post(`${this.base}/auth/logout`, { refresh_token }).subscribe({ next: () => {
      }, error: () => {
      } });
    }
    this.storage.clear();
    this._user.set(null);
  }
  hasAnyRole(roles) {
    const r = this.role();
    return r !== null && roles.includes(r);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TokenStorageService,
  AuthService
};
//# sourceMappingURL=chunk-WKCPM7O5.js.map
