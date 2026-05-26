# SchoolaPay Landing Page

Production-quality, mobile-first landing page built with [Hugo](https://gohugo.io/). Content and structure follow `instructions.md`.

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.120+

## Development

```bash
hugo server -D
```

Open [http://localhost:1313](http://localhost:1313).

## Build

```bash
hugo --minify
```

Deploy the `public/` directory to any static host.

## Deploy on Netlify

This site is configured for [Netlify](https://www.netlify.com/) with the same Hugo build pattern as the sajimasolutions site. `netlify.toml` runs `hugo --minify` and publishes `public/`.

1. Push this repo to GitHub, GitLab, or Bitbucket (Netlify deploys from git).
2. In Netlify: **Add new site** → **Import an existing project** → connect the repo.
3. Netlify should auto-detect Hugo. Confirm:
   - **Build command:** `hugo --minify --baseURL $DEPLOY_PRIME_URL` (or production override from `netlify.toml`)
   - **Publish directory:** `public`
4. Deploy. Preview URLs use `DEPLOY_PRIME_URL`; production builds use `https://schoolapay.com/` (see `[context.production]` in `netlify.toml`).
5. Optional: **Domain management** → add custom domain `schoolapay.com` and follow DNS instructions.

Local build (matches Netlify production):

```bash
hugo --minify --baseURL https://schoolapay.com/
```

## Customization

| What | Where |
|------|-------|
| Site config, SEO, form endpoint | `hugo.toml` |
| All page copy and structured content | `data/landing.yaml` |
| Layout templates | `themes/schoolapay/layouts/` |
| Styles | `themes/schoolapay/assets/css/main.css` |
| Client JS (nav, FAQ, form) | `themes/schoolapay/assets/js/main.js` |

## Demo form

The demo form validates on the client (required fields, email format, honeypot). To send submissions to a backend:

1. Set `form_endpoint` in `hugo.toml` to your handler URL (Formspree, Netlify Forms, or a serverless API).
2. The form POSTs JSON with all fields plus `source` and `timestamp`.

If `form_endpoint` is empty, validated submissions show the success message without sending (useful for local preview).

For a Resend-backed API (as described in `instructions.md`), deploy a small serverless function and point `form_endpoint` at it.

## Page sections

1. Header (sticky, mobile hamburger)
2. Hero with CSS phone + dashboard mockups
3. Problem
4. Solution
5. How It Works
6. Features
7. QR Ticketing
8. Benefits (Schools, Finance, Parents, Event Coordinators)
9. Trust & Security
10. Pilot-Ready Proof (honest placeholders)
11. FAQ (accessible accordion)
12. Demo form + sticky mobile CTA

## Project structure

```
.
├── content/_index.md
├── data/landing.yaml
├── hugo.toml
└── themes/schoolapay/
    ├── assets/css/main.css
    ├── assets/js/main.js
    └── layouts/
        ├── _default/baseof.html
        ├── index.html
        └── partials/
```
