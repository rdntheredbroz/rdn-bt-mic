const CACHE_NAME = 'mic-app-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// ফাইলগুলো ক্যাশে সেভ করা
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// অফলাইনে ক্যাশ থেকে ফাইল রিড করা
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
