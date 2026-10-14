importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js',
  'firebase-config.js'
);
firebase.initializeApp(self.FIREBASE_CONFIG);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(p => {
  const d = p.data || {};
  self.registration.showNotification(d.title || 'Owl Post', {
    body: d.body || 'MARIA, HAVE YOU TAKEN YOUR MEDICINES OR NOT?',
    icon: 'icon-192.png',
    tag: d.tag || 'pill',
    requireInteraction: true,
    vibrate: [500, 200, 500, 200, 800],
    data: { type: d.type || 'alarm' }
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window' }).then(c =>
    c.length ? c[0].focus() : clients.openWindow('./')));
});
