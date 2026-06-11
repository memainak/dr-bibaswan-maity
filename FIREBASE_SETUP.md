# Firebase setup — appointment form

Appointments are saved to Firestore collection **`appointment_requests`** in project [**dr-bibaswan-maity**](https://console.firebase.google.com/project/dr-bibaswan-maity/firestore).

## 1. Enable Firestore

1. Open [Firestore](https://console.firebase.google.com/project/dr-bibaswan-maity/firestore)
2. Click **Create database** (if not created)
3. Start in **production mode**, choose a region (e.g. `asia-south1`)

## 2. Deploy security rules

1. Firestore → **Rules**
2. Paste contents of `firestore.rules` from this project
3. Click **Publish**

## 3. Service account (for Vercel / API)

1. [Project settings](https://console.firebase.google.com/project/dr-bibaswan-maity/settings/serviceaccounts/adminsdk) → **Service accounts**
2. **Generate new private key** → download JSON
3. Add to Vercel → Project → **Settings** → **Environment Variables**:

| Variable | Value |
|----------|--------|
| `FIREBASE_PROJECT_ID` | `dr-bibaswan-maity` |
| `FIREBASE_CLIENT_EMAIL` | from JSON `client_email` |
| `FIREBASE_PRIVATE_KEY` | from JSON `private_key` (paste full key including `-----BEGIN`) |

4. Redeploy the site after saving variables.

## 4. Web app config (optional client fallback)

1. Project settings → **Your apps** → Add **Web** app
2. Copy config into `.env.local` (see `.env.example`)
3. Add the same `NEXT_PUBLIC_*` variables in Vercel if using client fallback

## 5. View submissions

[Firestore data](https://console.firebase.google.com/project/dr-bibaswan-maity/firestore/databases/-default-/data) → collection **`appointment_requests`**

Each document contains:

- `name` — patient name
- `phone` — 10-digit mobile
- `phoneDisplay` — `+91 …`
- `status` — `new`
- `source` — `website`
- `createdAt` — timestamp

## Local development

```bash
cp .env.example .env.local
# Fill in credentials, then:
npm run dev
```
