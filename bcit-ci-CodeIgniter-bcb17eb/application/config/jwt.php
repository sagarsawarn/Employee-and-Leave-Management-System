<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| JWT CONFIGURATION
| -------------------------------------------------------------------------
| Stateless access tokens + server-side refresh tokens (rotation).
|
| SECURITY: jwt_secret MUST be overridden with a long random value via an
| environment variable in any non-local environment. Never ship the default.
| Generate one with:  php -r "echo bin2hex(random_bytes(32));"
*/

// HMAC signing secret. Falls back to an env var if present.
$config['jwt_secret'] = getenv('JWT_SECRET')
    ?: 'CHANGE_ME_local_dev_secret_do_not_use_in_production_0123456789';

// Signing algorithm (HS256 = HMAC-SHA256).
$config['jwt_algo'] = 'HS256';

// Token issuer claim — helps reject tokens minted elsewhere.
$config['jwt_issuer'] = 'employee-management-api';

// Access token time-to-live in seconds (15 minutes).
$config['jwt_access_ttl'] = 15 * 60;

// Refresh token time-to-live in seconds (7 days).
$config['jwt_refresh_ttl'] = 7 * 24 * 60 * 60;
