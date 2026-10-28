# Tech Unite VaultX Ultimate — Preview Source

A Next.js 15 / React 19 / Firebase-compatible preview build for Vercel, with a public read-only sample and Firebase-backed private portfolio names/descriptions when configured.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. No `.env` is required for public demo.

## Firebase setup

1. Create a Firebase project and Web App.
2. Enable Authentication → Email/Password.
3. Create Firestore database and deploy the supplied `firestore.rules` (via Firebase CLI in this directory, or paste into the Rules tab).
4. Copy `.env.example` to `.env.local`; set the four `NEXT_PUBLIC_FIREBASE_*` values.
5. Restart local dev server or redeploy Vercel after setting values.

## Vercel

Import repository and set root directory `Main-Application`. Framework Next.js. Build command `npm run build`; output Next.js default. Add environment variables in Vercel and redeploy. For a public read-only showcase without auth set `NEXT_PUBLIC_VAULTX_DEMO=1` or leave Firebase variables unset.

## Security note

Public demo widgets use SYNTHETIC static data. In Firebase mode, authenticated users can create/read/delete only their own *portfolio metadata*. There are no privileged admin mutations, real-money wallet integrations, trading actions, multi-tenant SaaS billing, or live prices. These are not implemented and must not be advertised as functional.

## Verification

Run `npm run typecheck` and `npm run build` after installing packages. The build environment used to package this source could not connect to npm, so the build has not been verified here.
