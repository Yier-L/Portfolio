# Portfolio — Next.js + TypeScript

This repo is a production-grade portfolio scaffold built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, MDX blog support, and more.

Local development:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run start
```

Notes:
- Add `.env` from `.env.example` to enable email sending via Resend.
- Sitemap is available at `/sitemap.xml` and OG generation at `/api/og?title=Your+Title`.

Accessibility & Lighthouse:

- The site includes a `Skip to content` link (keyboard visible) and improved `:focus-visible` outlines.
- To run a Lighthouse audit locally (requires Chrome), run:

```bash
npm run dev
npm run audit
```

The report will be written to `./lighthouse-report.html`.
