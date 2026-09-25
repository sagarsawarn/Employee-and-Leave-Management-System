import {
  AuthService,
  TokenStorageService
} from "./chunk-WKCPM7O5.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-F3B2X54H.js";
import {
  Component,
  catchError,
  inject,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-YIFJVJUK.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const storage = inject(TokenStorageService);
  const router = inject(Router);
  if (storage.accessToken) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
function roleGuard(allowed) {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const role = auth.role();
    if (role === null) {
      return true;
    }
    if (allowed.includes(role)) {
      return true;
    }
    return router.createUrlTree(["/dashboard"]);
  };
}

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-RKRB3MA2.js").then((m) => m.LoginComponent)
  },
  {
    path: "admin-login",
    loadComponent: () => import("./chunk-WKWZRDSF.js").then((m) => m.AdminLoginComponent)
  },
  {
    path: "hr-login",
    loadComponent: () => import("./chunk-PU7XCCAY.js").then((m) => m.HrLoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-D456EBGF.js").then((m) => m.RegisterComponent)
  },
  // Authenticated area rendered inside the app shell (nav + outlet).
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-KRU7H722.js").then((m) => m.ShellComponent),
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-FNSMJ5C3.js").then((m) => m.DashboardComponent)
      },
      {
        path: "employees",
        canActivate: [roleGuard(["admin", "hr_manager"])],
        loadComponent: () => import("./chunk-PWPAKD7H.js").then((m) => m.EmployeeListComponent)
      },
      {
        path: "employees/new",
        canActivate: [roleGuard(["admin", "hr_manager"])],
        loadComponent: () => import("./chunk-MK6J3U5E.js").then((m) => m.EmployeeFormComponent)
      },
      {
        path: "employees/:id/edit",
        canActivate: [roleGuard(["admin", "hr_manager"])],
        loadComponent: () => import("./chunk-MK6J3U5E.js").then((m) => m.EmployeeFormComponent)
      },
      {
        // 360 profile — access is enforced server-side (self or admin/HR),
        // so no roleGuard here: employees may open their own profile.
        path: "employees/:id/profile",
        loadComponent: () => import("./chunk-L2WKZMPG.js").then((m) => m.ProfileComponent)
      },
      {
        path: "registrations",
        canActivate: [roleGuard(["admin"])],
        loadComponent: () => import("./chunk-H2SJSQJ3.js").then((m) => m.RegistrationListComponent)
      },
      {
        path: "leave",
        loadComponent: () => import("./chunk-CRFKD4PD.js").then((m) => m.LeaveComponent)
      },
      {
        path: "calendar",
        loadComponent: () => import("./chunk-5WYWEXGR.js").then((m) => m.CalendarComponent)
      },
      {
        path: "tasks",
        canActivate: [roleGuard(["admin", "employee"])],
        loadComponent: () => import("./chunk-G6ZOOWZE.js").then((m) => m.TasksComponent)
      },
      {
        path: "registrations",
        canActivate: [roleGuard(["admin"])],
        loadComponent: () => import("./chunk-ESQVQ72I.js").then((m) => m.RegistrationsComponent)
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth-token.interceptor.ts
var authTokenInterceptor = (req, next) => {
  const storage = inject(TokenStorageService);
  const token = storage.accessToken;
  const isAuthCall = req.url.includes("/auth/login") || req.url.includes("/auth/register") || req.url.includes("/auth/refresh") || req.url.includes("/auth/logout");
  if (token && !isAuthCall) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const router = inject(Router);
  const storage = inject(TokenStorageService);
  return next(req).pipe(catchError((err) => {
    const isAuthCall = req.url.includes("/auth/login");
    if (err.status === 401 && !isAuthCall) {
      storage.clear();
      router.navigate(["/login"]);
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
