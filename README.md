# Dr. Bibaswan Maity — Medical Portfolio Website

Professional single-page portfolio for **Dr. Bibaswan Maity**, built with **Next.js**, **React**, **Tailwind CSS**, and **Lucide React**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

Deploy the output to [Vercel](https://vercel.com), Netlify, or any Node/static host that supports Next.js.

## Project structure

- `app/layout.tsx` — SEO metadata, fonts, global layout
- `app/page.tsx` — Main page assembling all sections
- `components/` — Navbar, Hero, About, Services, Location, Footer
- `lib/site-data.ts` — Doctor info, contact, services (edit here)

## Customize

Edit `lib/site-data.ts` for:

- Clinic hours
- Email
- Service descriptions
- SEO keywords and domain in `app/layout.tsx` (`metadataBase`)

Replace the Google Maps embed `iframe` `src` in `components/Location.tsx` with the embed URL from Google Maps → Share → Embed a map.

## Tech stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Lucide React icons
- TypeScript
