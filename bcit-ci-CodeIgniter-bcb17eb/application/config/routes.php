<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

/*
| -------------------------------------------------------------------------
| API v1 — Authentication
| -------------------------------------------------------------------------
| Controllers live in application/controllers/api/v1/. CI3 resolves the
| sub-directory automatically, but we map explicitly so only the intended
| HTTP verbs reach each method. Any verb/URI not listed falls through to a
| 404, which keeps the API surface tight.
*/
// Verb-agnostic mappings. CI3 default routing can't resolve a two-level
// controller subdirectory (api/v1/...), so we map every API URI explicitly
// to controller/method. The controller methods themselves are the right
// place to reject unexpected verbs if needed.
$route['api/v1/auth/register'] = 'api/v1/auth/register';
$route['api/v1/auth/login']    = 'api/v1/auth/login';
$route['api/v1/auth/refresh']  = 'api/v1/auth/refresh';
$route['api/v1/auth/logout']   = 'api/v1/auth/logout';
$route['api/v1/auth/me']       = 'api/v1/auth/me';

/*
| -------------------------------------------------------------------------
| API v1 — Employees & Org
| -------------------------------------------------------------------------
| OPTIONS is mapped alongside each verb so CI3 instantiates the controller;
| the API_Controller base answers the preflight (204) before the method runs.
*/
// Verb-agnostic. Shared URIs point at a dispatcher method that branches on
// the HTTP verb (see the controllers). OPTIONS never reaches here — the
// Cors_hook answers preflight at pre_system.
$route['api/v1/employees']          = 'api/v1/employees/collection';

// Employee 360 Profile — specific sub-routes MUST come before the bare
// employees/(:num) so CI3 matches them first.
$route['api/v1/employees/me/360-profile']            = 'api/v1/profile/full_me';
$route['api/v1/employees/(:num)/360-profile']       = 'api/v1/profile/full/$1';
$route['api/v1/employees/(:num)/leave-summary']      = 'api/v1/profile/leave_summary/$1';
$route['api/v1/employees/(:num)/activities']         = 'api/v1/profile/activities/$1';
$route['api/v1/employees/(:num)/skills']             = 'api/v1/profile/skills/$1';
$route['api/v1/employees/(:num)/skills/(:num)']      = 'api/v1/profile/skill/$1/$2';
$route['api/v1/employees/(:num)/personal']           = 'api/v1/profile/personal/$1';

$route['api/v1/employees/(:num)']   = 'api/v1/employees/resource/$1';
$route['api/v1/departments']         = 'api/v1/departments/index';
$route['api/v1/departments/public']  = 'api/v1/departments/public_list';
$route['api/v1/designations']        = 'api/v1/designations/index';
$route['api/v1/designations/public'] = 'api/v1/designations/public_list';

// Attendance — check-in/out (self) + history (self or admin/HR). Literal
// segments before the numeric {employee_id} so they match first.
$route['api/v1/attendance/check-in']  = 'api/v1/attendance/check_in';
$route['api/v1/attendance/check-out'] = 'api/v1/attendance/check_out';
$route['api/v1/attendance/today']     = 'api/v1/attendance/today';
$route['api/v1/attendance/(:num)']    = 'api/v1/attendance/history/$1';

// Team leave calendar (holidays + approved leave, RBAC-scoped).
$route['api/v1/calendar'] = 'api/v1/calendar/index';

// Notifications (per authenticated user).
$route['api/v1/notifications']                = 'api/v1/notifications/index';
$route['api/v1/notifications/unread-count']   = 'api/v1/notifications/unread_count';
$route['api/v1/notifications/read-all']       = 'api/v1/notifications/read_all';
$route['api/v1/notifications/(:num)/read']    = 'api/v1/notifications/read/$1';

// Registration approval workflow (admin). More specific action routes are
// listed BEFORE the bare (:num) so CI3 matches them first.
$route['api/v1/registrations']                 = 'api/v1/registrations/index';
$route['api/v1/registrations/(:num)/approve']  = 'api/v1/registrations/approve/$1';
$route['api/v1/registrations/(:num)/reject']   = 'api/v1/registrations/reject/$1';
$route['api/v1/registrations/(:num)']          = 'api/v1/registrations/resource/$1';

/*
| -------------------------------------------------------------------------
| API v1 — Leave
| -------------------------------------------------------------------------
*/
$route['api/v1/leave-types']                    = 'api/v1/leave_types/index';
$route['api/v1/leave-balances/me']              = 'api/v1/leave_balances/me';
$route['api/v1/leave-applications']             = 'api/v1/leave_applications/collection';
$route['api/v1/leave-applications/on-leave']    = 'api/v1/leave_applications/on_leave';
$route['api/v1/leave-applications/me']          = 'api/v1/leave_applications/me';
$route['api/v1/leave-applications/(:num)/approve'] = 'api/v1/leave_applications/approve/$1';
$route['api/v1/leave-applications/(:num)/reject']  = 'api/v1/leave_applications/reject/$1';
$route['api/v1/leave-applications/(:num)/cancel']  = 'api/v1/leave_applications/cancel/$1';
$route['api/v1/tasks']                            = 'api/v1/tasks/collection';
$route['api/v1/tasks/(:num)']                     = 'api/v1/tasks/resource/$1';
