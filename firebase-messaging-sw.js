importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js',
  'firebase-config.js'
);
firebase.initializeApp(self.FIREBASE_CONFIG);
const messaging = firebase.messaging();

// NOTE for worker.js: send DATA-ONLY messages ({title, body, tag, type}).
// If a "notification" field is included, FCM shows it itself and this handler is skipped.
messaging.onBackgroundMessage(p => {
  const d = p.data || {};
  self.registration.showNotification(d.title || 'Owl Post', {
    body: d.body || 'Time for your pill.',
    icon: 'icon-192.png',
    tag: d.tag || 'pill',
    requireInteraction: true,
    vibrate: [200, 100, 200],
    data: { type: d.type || 'alarm' }
  });
});

// Tapping the notification opens the app.
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window' }).then(c =>
    c.length ? c[0].focus() : clients.openWindow('./')));
});
