# Auth API — Test Cases & Error Handling

Base URL (XAMPP default): `http://localhost/Employee%20Management/bcit-ci-CodeIgniter-bcb17eb/index.php/api/v1`

> Adjust the path if you configure a virtual host / clean URLs. All requests
> and responses are JSON. The envelope is always:
> `{ "status", "message", "data", "errors" }`.

## Prerequisites
1. Import `database/schema.sql` (creates `employee_management` + seeds roles).
2. `composer install` in the backend root (installs `firebase/php-jwt`).
3. Seed at least one user (see "Seed a test user" below).

### Seed a test user
Password below is `Passw0rd!` hashed with bcrypt. Generate your own with:
`php -r "echo password_hash('Passw0rd!', PASSWORD_BCRYPT);"`

```sql
INSERT INTO users (email, password_hash, role_id, is_active)
VALUES ('admin@example.com', '$2y$10$REPLACE_WITH_GENERATED_HASH', 1, 1);
```

---

## 1. POST /auth/login

**1.1 Success (200)**
```bash
curl -X POST .../auth/login -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"Passw0rd!"}'
```
Expect `status: success`, `data.tokens.access_token`, `data.tokens.refresh_token`.

**1.2 Wrong password (401)** — `{"email":"admin@example.com","password":"nope"}`
→ `status: error`, message `Invalid email or password`. (Same message for unknown email — no enumeration.)

**1.3 Unknown email (401)** — same generic message as 1.2.

**1.4 Missing/invalid fields (422)** — `{"email":"not-an-email"}`
→ `errors` contains `email` and `password` messages.

**1.5 Empty body (422)** — validation fails on both fields.

---

## 2. POST /auth/refresh

**2.1 Success (200)** — `{"refresh_token":"<from login>"}`
→ new `access_token` + `refresh_token`. The OLD refresh token is now revoked (rotation).

**2.2 Reuse of rotated token (401)** — send the same refresh token twice.
→ second call returns `Invalid or expired refresh token`.

**2.3 Garbage token (401)** — `{"refresh_token":"deadbeef"}` → 401.

**2.4 Missing field (422)** — `{}` → validation error on `refresh_token`.

---

## 3. POST /auth/logout

**3.1 Success (200)** — `{"refresh_token":"<valid>"}` → `Logged out`; token revoked.

**3.2 Idempotent (200)** — logging out an already-revoked token still returns success.

**3.3 Missing field (422)**.

---

## 4. GET /auth/me

**4.1 Success (200)** — header `Authorization: Bearer <access_token>`
→ `data` = `{ id, email, role }`.

**4.2 No header (401)** — `Missing or malformed Authorization header`.

**4.3 Malformed header (401)** — `Authorization: Token abc` → 401.

**4.4 Expired/tampered token (401)** — flip a character in the token → `Invalid or expired access token`.

**4.5 Refresh token used as Bearer (401)** — `Invalid token type`.

---

## Error handling reference

| Code | When | message |
|---|---|---|
| 200 | Success | endpoint-specific |
| 401 | Bad credentials / bad/expired/missing token | generic auth message |
| 403 | Authenticated but wrong role (used by later modules) | permission denied |
| 422 | Input validation failed | `Validation failed` + `errors` map |
| 404 | Unknown route / verb not mapped | CI3 default |
| 500 | Unexpected (e.g. php-jwt missing) | server error |

**Authorization guarantee:** role is read only from the verified JWT claim,
never from the request body or a client-supplied header. Sending
`{"role":"admin"}` in any request has no effect on authorization.
