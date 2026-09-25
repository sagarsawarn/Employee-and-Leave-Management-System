<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| Hooks
| -------------------------------------------------------------------------
| This file lets you define "hooks" to extend CI without hacking the core
| files.  Please see the user guide for info:
|
|	https://codeigniter.com/userguide3/general/hooks.html
|
*/

/*
| CORS handling as a pre_system hook so it runs BEFORE routing/controller
| construction. This guarantees the browser's preflight OPTIONS request is
| answered with the right headers even if a controller would otherwise 404
| or error. Only applies to /api/ paths.
*/
$hook['pre_system'][] = array(
    'class'    => 'Cors_hook',
    'function' => 'handle',
    'filename' => 'Cors_hook.php',
    'filepath' => 'hooks',
);
