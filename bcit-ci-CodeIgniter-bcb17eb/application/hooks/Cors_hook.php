<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Cors_hook — sets CORS headers and answers preflight OPTIONS requests at
 * the pre_system stage, before routing or controller construction.
 *
 * Running this early means a cross-origin preflight always gets a valid
 * response regardless of what the target controller does, which is the
 * reliable way to do CORS in CI3. Uses an explicit origin allowlist.
 */
class Cors_hook {

    private $allowed_origins = array(
        'http://localhost:4200',
        'http://127.0.0.1:4200',
        'http://localhost:4201',
        'http://127.0.0.1:4201',
    );

    public function handle()
    {
        // Only apply to API requests.
        $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
        if (strpos($uri, '/api/') === FALSE)
        {
            return;
        }

        $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
        if ($origin !== '' && in_array($origin, $this->allowed_origins, TRUE))
        {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Vary: Origin');
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With');
            header('Access-Control-Max-Age: 3600');
        }

        // Answer the preflight immediately with 204 and stop.
        $method = isset($_SERVER['REQUEST_METHOD']) ? strtoupper($_SERVER['REQUEST_METHOD']) : 'GET';
        if ($method === 'OPTIONS')
        {
            header('HTTP/1.1 204 No Content');
            exit;
        }
    }
}
