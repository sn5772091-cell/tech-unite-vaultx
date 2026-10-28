import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const cfg = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
export const isConfigured = Boolean(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId);
export const forcedDemo = process.env.NEXT_PUBLIC_VAULTX_DEMO === '1';
export const demoMode = forcedDemo || !isConfigured;
let app: FirebaseApp | null = null;
export function firebaseApp() {
  if (!isConfigured || forcedDemo) return null;
  if (!app) app = getApps().length ? getApp() : initializeApp(cfg);
  return app;
}
export function firebaseAuth(): Auth | null {
  const a = firebaseApp(); return a ? getAuth(a) : null;
}
export function firestoreDb(): Firestore | null {
  const a = firebaseApp(); return a ? getFirestore(a) : null;
}
