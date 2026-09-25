<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException;

/**
 * Jwt_lib — thin, safe wrapper over firebase/php-jwt.
 * -----------------------------------------------------------------------
 * We deliberately do NOT hand-roll HMAC signing. This library only:
 *   - builds a signed ACCESS token with our standard claims
 *   - verifies and decodes a token, returning FALSE on any problem
 *
 * Refresh tokens are NOT JWTs — they are opaque random strings handled by
 * Auth_lib and stored hashed in the DB, so they are absent here on purpose.
 */
class Jwt_lib {

    private $secret;
    private $algo;
    private $issuer;
    private $access_ttl;

    public function __construct()
    {
        $ci =& get_instance();
        $ci->config->load('jwt', TRUE);
        $cfg = $ci->config->item('jwt');

        $this->secret     = $cfg['jwt_secret'];
        $this->algo       = $cfg['jwt_algo'];
        $this->issuer     = $cfg['jwt_issuer'];
        $this->access_ttl = (int) $cfg['jwt_access_ttl'];
        // NOTE: we intentionally do NOT check for the JWT class here. Loading
        // this library (which every API controller does via the base class)
        // must never crash. The dependency is checked only when a token is
        // actually issued or decoded, so token-free endpoints (e.g. register)
        // keep working even before "composer install" is run.
    }

    /** True when the firebase/php-jwt library is available. */
    public function is_available()
    {
        return class_exists('Firebase\\JWT\\JWT');
    }

    /**
     * Build a signed access token.
     *
     * @param int    $user_id
     * @param string $role  admin|hr_manager|employee (from the DB, not the client)
     * @return string
     */
    public function issue_access_token($user_id, $role)
    {
        if ( ! $this->is_available())
        {
            throw new RuntimeException('firebase/php-jwt is not installed. Run composer require firebase/php-jwt in the backend root.');
        }
        $now = time();
        $payload = array(
            'iss'  => $this->issuer,
            'iat'  => $now,
            'exp'  => $now + $this->access_ttl,
            'type' => 'access',
            'sub'  => (int) $user_id,
            'role' => $role,
        );
        return JWT::encode($payload, $this->secret, $this->algo);
    }

    /**
     * Verify + decode a token. Returns the claims object on success, or
     * FALSE for expired / tampered / malformed tokens. Never throws.
     *
     * @param string $token
     * @return object|false
     */
    public function decode($token)
    {
        if ( ! $this->is_available())
        {
            return FALSE;
        }
        try
        {
            $claims = JWT::decode($token, new Key($this->secret, $this->algo));

            // Reject tokens not minted by us.
            if ( ! isset($claims->iss) || $claims->iss !== $this->issuer)
            {
                return FALSE;
            }
            return $claims;
        }
        catch (ExpiredException $e)
        {
            return FALSE;
        }
        catch (SignatureInvalidException $e)
        {
            return FALSE;
        }
        catch (Exception $e)
        {
            // Malformed token, wrong segments, etc.
            return FALSE;
        }
    }
}
