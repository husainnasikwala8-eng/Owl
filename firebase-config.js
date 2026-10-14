// FILL TOMORROW: paste values from Firebase console (Project settings > Your apps)
// Uses `self` so both index.html and firebase-messaging-sw.js can read it.
self.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_AUTH_DOMAIN",
  projectId: "PASTE_PROJECT_ID",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
// Project settings > Cloud Messaging > Web Push certificates > public key
self.VAPID_KEY = "PASTE_VAPID_PUBLIC_KEY";
// NEXT FILE (worker.js on Cloudflare): paste its URL here for closed-app pushes and scheduled alarms.
// Leave empty until then; the app still works while open.
self.WORKER_URL = "";
