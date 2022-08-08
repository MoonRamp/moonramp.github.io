'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"index.html": "b7c7f4f58bd05190dc9509eb30a72a5b",
"/": "b7c7f4f58bd05190dc9509eb30a72a5b",
"favicon.png": "817d4e164ce6f131f2ee60cc1e8d66cf",
"main.dart.js": "177274831d284eec7d2ebb15284b429d",
"manifest.json": "3d27a1279a00b25824e1c900b33da78a",
"version.json": "9e0f26940ef51a7a03defc52535032ac",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-maskable-512.png": "cdd4688bdf66c08ef2b926b28d27e735",
"icons/Icon-512.png": "cdd4688bdf66c08ef2b926b28d27e735",
"icons/Icon-maskable-192.png": "0ce2057b7b03ab93b33777d18edb9ba2",
"icons/Icon-192.png": "0ce2057b7b03ab93b33777d18edb9ba2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "5c2079bfd95a62671746c241f79a828a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/moonramp_icon.png": "cdd4688bdf66c08ef2b926b28d27e735",
"assets/assets/theme_moonramp.json": "47d351ceac568da6c2b4dae8217d0c13",
"assets/assets/moonramp_docs.png": "9b0c4004d761a68c6b30cc409dc4cad6",
"assets/assets/crypto/coins/rounded/ethereum.png": "dab4238551ee824b175c15e99fee5b8e",
"assets/assets/crypto/coins/rounded/bitcoin.png": "40402f1188d5fecada11af05193ca3e8",
"assets/assets/crypto/coins/rounded/monero.png": "7ba188dff19aa148a3177b66fba7ff9e",
"assets/assets/crypto/ethereum-classic-blank-256.png": "c2ed034eee533131dcc3c411c43a8c1f",
"assets/assets/crypto/ethereum-256.png": "a6709150a5e4790301acdd149246a259",
"assets/assets/crypto/bitcoin-cash-256.png": "80db21b2178e60be6d00062352e9255a",
"assets/assets/crypto/monero-blank-256.png": "ac582a73200de75ea22822a5bfc8fe13",
"assets/assets/crypto/bitcoin-256.png": "6715008a98725fe9ed5daabf50e9ed30",
"assets/assets/crypto/ethereum-classic-256.png": "6104c80a9c7bff384b029812a4637254",
"assets/assets/crypto/ethereum-blank-256.png": "01256b638d9c08093ab91035923a930c",
"assets/assets/crypto/bitcoin-blank-256.png": "104cc0c199cf0f5b6925cb3a62b253d0",
"assets/assets/crypto/bitcoin-cash-blank-256.png": "48f4055826d7aee025b131aad07cf06c",
"assets/assets/crypto/monero-256.png": "e05cf8c5075971fd5ddef015000253b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "f00354770a4cb167e7655ff7dc7bac50"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
