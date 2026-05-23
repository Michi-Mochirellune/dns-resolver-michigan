self.addEventListener('push', function(event) {
  const promise = self.registration.showNotification('DNS Resolver Michigan', {
    body: 'Проверка завершена :Р',
    icon: 'icon-192.png',
    silent: true
  });
  event.waitUntil(promise);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});