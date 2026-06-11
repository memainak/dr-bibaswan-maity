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

### Doctor profile photo

1. Save the photo as `public/images/dr-bibaswan-maity.jpg`
2. In `lib/site-data.ts`, set `profileImage: "/images/dr-bibaswan-maity.jpg"`

### YouTube videos

In `lib/site-data.ts`:

- Set `youtubeId` for each entry in `YOUTUBE_VIDEOS` (the ID from `youtube.com/watch?v=VIDEO_ID`)
- Set `youtubeChannelUrl` to your channel link when ready

### Social links

- Facebook: `facebookUrl` in `lib/site-data.ts`
- Developer credit: `developer` object in `lib/site-data.ts`

### Appointment form (Firebase + WhatsApp)

Patient bookings are saved to Firestore collection `appointment_requests` and open WhatsApp with the patient details.

See **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)** for full setup on project [dr-bibaswan-maity](https://console.firebase.google.com/project/dr-bibaswan-maity/firestore).

## Tech stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Lucide React icons
- TypeScript
