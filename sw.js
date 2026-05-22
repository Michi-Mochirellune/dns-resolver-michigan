// Service Worker для DNS Resolver Michigan
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : 'Проверка завершена :Р';
  const options = {
    body: data,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    silent: true,
    vibrate: [100, 50, 100]
  };
  event.waitUntil(
    self.registration.showNotification('DNS Resolver Michigan', options)
  );
});