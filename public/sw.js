// Nama dan versi cache
const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";

// Daftar aset untuk App Shell yang disimpan saat instalasi
const assets = [
    '/',
    '/offline'
];

// Fungsi untuk membatasi ukuran cache dinamis
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

// Event 'install': menyimpan aset App Shell ke static cache
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// Event 'activate': membersihkan cache lama
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// Event 'fetch': mencegat request, melayani dari cache atau network
self.addEventListener('fetch', evt => {
    // Jangan cache request ke server lain (misal: Google Fonts)
    if (evt.request.url.indexOf('http') !== 0) return;

    evt.respondWith(
        fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
                // Simpan salinan response ke dynamic cache
                cache.put(evt.request.url, fetchRes.clone());
                // Batasi jumlah item di dynamic cache menjadi 15
                limitCacheSize(dynamicCacheName, 15);
                return fetchRes;
            });
        }).catch(() => {
            // Jika fetch gagal (offline), coba cari di cache
            return caches.match(evt.request).then(cacheRes => {
                // Jika ada di cache, tampilkan. Jika tidak, tampilkan halaman offline.
                return cacheRes || caches.match('/offline');
            });
        })
    );
});
