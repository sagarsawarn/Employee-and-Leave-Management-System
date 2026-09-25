<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| CORS CONFIGURATION
| -------------------------------------------------------------------------
| The Angular dev server (http://localhost:4200) is a different origin from
| the API, so the browser enforces CORS. We use an explicit ALLOWLIST rather
| than '*' — never reflect arbitrary origins, and never combine '*' with
| credentials. Add your production frontend origin here when you deploy.
*/

$config['cors_allowed_origins'] = array(
    'http://localhost:4200',
    'http://127.0.0.1:4200',
    'http://localhost:4201',
    'http://127.0.0.1:4201',
);

$config['cors_allowed_methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS';

$config['cors_allowed_headers'] = 'Origin, Content-Type, Accept, Authorization, X-Requested-With';

// Preflight cache duration (seconds).
$config['cors_max_age'] = 3600;
