// Service Worker for PWA Support
const CACHE_NAME = 'pictographic-learn-v2';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './src/styles/enhancements.css',
    './src/styles/ui-polish.css',
    './app.js',
    './src/app-enhancements.js',
    './words-complete.js',
    './src/services/StorageService.js',
    './src/services/SRSService.js',
    './src/services/TTSService.js',
    './src/services/SVGGeneratorService.js',
    './src/services/CategoryDetector.js',
    './src/utils/toast.js',
    './src/utils/keyboard.js',
    './src/utils/performance.js',
    './src/components/StatsPanel.js',
    './src/components/CustomWordManager.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Cache install error:', err))
    );
    self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(response => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
            .catch(() => {
                // Return offline page if available
                return caches.match('./index.html');
            })
    );
});

// Activate event - clean up old caches
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
    self.clients.claim();
});

// Background sync for offline actions
self.addEventListener('sync', event => {
    if (event.tag === 'sync-learned-words') {
        event.waitUntil(syncLearnedWords());
    }
});

async function syncLearnedWords() {
    // Placeholder for future cloud sync functionality
    console.log('Syncing learned words...');
}

