/**
 * Tiny fetch wrapper for the Nest backend (`spanish-by-heart-backend`).
 *
 * Base URL comes from `VITE_API_URL` at build time so the same bundle can point
 * at localhost in dev and the deployed API in production.
 */
const BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api').replace(/\/$/, '');

/** Give up rather than spin forever if the API never answers. */
const TIMEOUT_MS = 20000;

export class ApiError extends Error {
  constructor(message, { status, details } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

/**
 * @param {string} path      path under the API prefix, e.g. '/contact'
 * @param {object} options   { body, lang, signal }
 */
export async function apiPost(path, { body, lang, signal } = {}) {
  // A hung request is indistinguishable from a dead one for the visitor, so
  // both end up on the same 'network' branch.
  const timeout = AbortSignal.timeout(TIMEOUT_MS);
  const abort = signal ? AbortSignal.any([signal, timeout]) : timeout;

  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // The API localizes its replies from this header.
        ...(lang ? { 'x-lang': lang } : {}),
      },
      body: JSON.stringify(body),
      signal: abort,
    });
  } catch {
    // Network failure, CORS rejection or timeout — nothing came back, so there
    // is no server copy to show.
    throw new ApiError('network');
  }

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    // Validation errors arrive as { message: string[] }, everything else as a string.
    const raw = payload?.message;
    const details = Array.isArray(raw) ? raw : raw ? [raw] : [];
    throw new ApiError(details[0] || 'server', { status: response.status, details });
  }

  return payload;
}
