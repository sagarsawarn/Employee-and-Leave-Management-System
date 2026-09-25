<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Response helper
 * -----------------------------------------------------------------------
 * Builds the single, consistent JSON envelope used by every API endpoint:
 *
 *   { "status": "success|error", "message": "...", "data": {...}, "errors": {...} }
 *
 * Keeping this in a helper (rather than only the base controller) means
 * models/libraries can format payloads the same way if ever needed, and it
 * keeps the shape defined in exactly one place.
 */

if ( ! function_exists('api_envelope'))
{
    /**
     * @param string     $status  'success' or 'error'
     * @param string     $message Human-readable summary
     * @param mixed|null $data    Payload on success
     * @param mixed|null $errors  Field-level or detail errors on failure
     * @return array
     */
    function api_envelope($status, $message, $data = null, $errors = null)
    {
        return array(
            'status'  => $status,
            'message' => $message,
            'data'    => $data,
            'errors'  => $errors,
        );
    }
}
