# VaultX Firebase connection — vaultx-d0857

This package contains public Firebase web app identifiers only. No private admin key is required for this preview's client-side Firebase SDK.

1. In Firebase Console > Authentication > Sign-in method, enable Email/Password.
2. In Firebase Console > Firestore Database, create the database if not already created.
3. Review and deploy `Main-Application/firestore.rules` using the Firebase CLI or Console. Do not deploy without reviewing access controls.
4. In Firebase Console > Authentication > Settings > Authorized domains, add the actual Vercel production and preview domain(s) in use.
5. In Vercel project settings, configure the NEXT_PUBLIC_* variables from Main-Application/.env.example and replace NEXT_PUBLIC_SITE_URL with the deployed URL.
6. For a public, non-writable demonstration set NEXT_PUBLIC_VAULTX_DEMO=1; use a SEPARATE Firebase demo project if public sign-in / writes are required.
7. Run `npm ci` or `npm install`, `npm test` and `npm run build` in Main-Application before deploying. No production build is claimed verified here.

Current release is NOT production or CodeCanyon submission ready. It lacks full implementation and completed runtime, emulator, and browser security tests.

GitHub: connected app presently returns no accessible repositories; no repository was created or updated.
Vercel: connected app presently returns no VaultX project; no deployment was created.
