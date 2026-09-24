/// <reference types="@cloudflare/workers-types" />

const CANONICAL_HOST = 'edesigr.com';

interface Env {
  ASSETS?: { fetch: (req: Request) => Promise<Response> };
}

const NOT_FOUND = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>404 — Page Not Found | eDesigr.com</title></head><body style="margin:0;font-family:system-ui,sans-serif;background:#09090b;color:#a1a1aa;display:flex;align-items:center;justify-content:center;min-height:100vh"><div style="text-align:center;padding:2rem"><h1 style="font-size:3rem;color:#fff;margin:0 0 .5rem">404</h1><p>Page not found.</p><a style="color:#22d3ee;text-decoration:none" href="/">← Back to eDesigr.com</a></div></body></html>`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const hostname = url.hostname;

    if (hostname.startsWith('www.') || (hostname !== CANONICAL_HOST && !hostname.endsWith('.workers.dev'))) {
      return Response.redirect(`https://${CANONICAL_HOST}${url.pathname}${url.search}`, 301);
    }

    const response = env.ASSETS
      ? await env.ASSETS.fetch(request)
      : new Response(NOT_FOUND, { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } });

    const headers = new Headers(response.headers);

    headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    if (response.status === 404) headers.set('X-Robots-Tag', 'noindex');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
