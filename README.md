# xhalf-white

Marketing landing page for **Fujifilm X-Half White** — hero, announcements, product details, and pre-order call-to-action. Built with the Next.js App Router.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- [Tailwind CSS](https://tailwindcss.com) v4
- Fonts via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts): Fjalla One, Noto Sans, Manrope

## Getting started

Install dependencies (from this directory):

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home route renders the landing in `app/page.js`.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build` | Production build        |
| `npm run start` | Start production server |
| `npm run lint` | ESLint                   |

## Project layout

- `app/` — `layout.js` (metadata, fonts, global styles), `page.js` (home), `globals.css`
- `components/landing/` — `XHalfLanding.jsx` and sections (`HeroSection`, `AnnouncementGridSection`, `ProductDetailSection`, `PreOrderCtaSection`), shared assets like `imageUrls.js`
- `components/layout/` — `SiteHeader`, `SiteFooter`

To change page title and description, edit the `metadata` export in `app/layout.js`. To adjust copy or layout, edit the section components under `components/landing/`.

## Deploy

This is a standard Next.js app; you can deploy on [Vercel](https://vercel.com) or any host that supports Node.js and `next build` / `next start`. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
