const CACHE_NAME = 'alexia-cache-v1';
const URLS_TO_CACHE = [
  // App Shell
  '/',
  '/index.html',
  '/manifest.json',

  // App Source Code
  '/index.tsx',
  '/App.tsx',
  '/components/Quiz.tsx',
  '/components/Conversation.tsx',
  '/components/ApiKeyPrompt.tsx',
  '/components/Campionato.tsx',
  '/components/Icons.tsx',
  '/data/allQuestions.ts',
  '/data/lessico.ts',
  '/data/modiDiDire.ts',
  '/data/verbi.ts',
  '/data/libro.ts',
  '/services/geminiService.ts',
  '/types.ts',
  '/utils/audioUtils.ts',
  '/utils/serviceWorkerRegistration.ts',

  // Assets
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png',

  // External Dependencies (CDN via Import Map)
  'https://cdn.tailwindcss.com',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0/client',
  'https://aistudiocdn.com/react@^19.2.0/jsx-runtime',
  'https://aistudiocdn.com/@google/genai@^1.27.0',
  'https://aistudiocdn.com/lodash-es@^4.17.21'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Usiamo { cache: "reload" } per assicurarci di ottenere le versioni più recenti dalle CDN durante l'installazione
        const requests = URLS_TO_CACHE.map(url => new Request(url, { cache: 'reload' }));
        return cache.addAll(requests);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || (response.type !== 'basic' && response.type !== 'cors')) {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
