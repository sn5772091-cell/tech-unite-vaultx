# Vercel + Firebase deployment

## Preview demo (no Firebase)
1. Upload `Main-Application` to a Git repository.
2. Import the repository in Vercel, setting the root directory to `Main-Application`.
3. Use the Next.js framework preset. Set `NEXT_PUBLIC_VAULTX_DEMO=1`.
4. Deploy; check the home/dashboard and report preview in a browser.

## Authenticated portfolios
1. Create a new Firebase project; enable Authentication > Email/Password, Firestore.
2. Configure Firebase Authorized Domains to include your production domain.
3. Set `NEXT_PUBLIC_VAULTX_DEMO=0`, Firebase client config variables in Vercel (see `.env.example`).
4. Using a trusted local Firebase CLI session, deploy Firestore rules from `Main-Application`: `firebase deploy --only firestore:rules --project YOUR_PROJECT_ID`.
5. Verify accounts and user data isolation using **two separate test users**; disable open public registration if not appropriate for your intended environment.
6. Configure a real domain, monitoring and your own privacy/legal pages.

**Security warning:** browser Firebase config values are public identifiers, not server secrets. Never add Firebase Admin private keys to `NEXT_PUBLIC_` variables. Do not assume that the included rules are fully validated without emulator and live tests.

## Validation
Run `npm ci` (once a lockfile exists), `npm run typecheck`, `npm run lint`, `npm test`, `npm run build` and browser tests. This release candidate does not include a validated npm lockfile. Capture genuine browser screenshots only after deployment.
