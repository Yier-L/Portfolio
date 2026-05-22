# Vercel Deployment Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel env to your production URL (e.g. `https://yierliao.com`).
- [ ] Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` if you want contact emails sent.
- [ ] Ensure `node` and `npm` settings match the project (use default Node 18+).
- [ ] Enable Image Optimization if using external images.
- [ ] Configure redirects or rewrites if you migrate asset locations.
- [ ] Add any environment-specific variables to Vercel dashboard.
- [ ] Run `next build` locally and verify `next start` before deploying.
- [ ] (Optional) Configure analytics and monitoring.

Commands:

```bash
npm run build
npm run start
```
