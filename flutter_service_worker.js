'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fe40d50c188780cec7105ea9c093c978",
"assets/assets/0.wav": "65ea5278fe52aff708dfd6782315a6fe",
"assets/assets/1.wav": "174078d9cc950bfdc7dbac9a5113d0cd",
"assets/assets/10.wav": "eb349ecf1490741e4229137a906947ff",
"assets/assets/11.wav": "cc7e48e5878052488dae58545978350d",
"assets/assets/12.wav": "b0106f1f80f58c4d6f0cf4da5d0e778a",
"assets/assets/13.wav": "2962944a0a70d122d69cdae3aef0bd99",
"assets/assets/14.wav": "54d2532790f1639d031f44e3a74547ec",
"assets/assets/15.wav": "6078943c1e6120f5e2d12ce3c5118c04",
"assets/assets/16.wav": "9e20fbd174a8d6c6a9db4bcdb6cb4c89",
"assets/assets/17.wav": "41b2183e4deb6f4820312b3cf8b2bbf3",
"assets/assets/18.wav": "f2a583b2cdb519a5f6fd889bd10f02f9",
"assets/assets/19.wav": "ff0944433be77061048b61b8abe78620",
"assets/assets/2.wav": "efff3f33773afffbbfc6f7af38b04e75",
"assets/assets/20.wav": "206fdff6e18d51fb34a89673116194e2",
"assets/assets/21.wav": "31778df58925ab885d768f01e3372602",
"assets/assets/22.wav": "5083cf33ce02669c608d8045a4412aed",
"assets/assets/23.wav": "a58d5d90845e4451dd089d26ebc338b5",
"assets/assets/3.wav": "da8c04fee5e738a88d779019edfa018d",
"assets/assets/4.wav": "a1a11010f6ce635e604d13e12a6f60eb",
"assets/assets/5.wav": "3122c02dd7848535410f9c438e46d353",
"assets/assets/6.wav": "60fe43c8548b549dda10f81258b76678",
"assets/assets/7.wav": "80a970cd4b2a27b40fd448424db76eb8",
"assets/assets/8.wav": "230fff88c9c00f46c143d3f9d4ab1213",
"assets/assets/9.wav": "3d2a823c39d97950a5098bcef576c97c",
"assets/assets/bird.png": "8f06d96817c73128cda7756fee2b877c",
"assets/assets/failed.png": "a55c0249f6a525ce07aaab569531abc0",
"assets/assets/number.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/play.png": "426bb5ea0e2fae74d22b324b9b48f375",
"assets/assets/success.png": "bccfccfee9a6f0fc83bc8e346d26f449",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/images/bird.png": "8f06d96817c73128cda7756fee2b877c",
"assets/lib/images/f8accdc9": "8f06d96817c73128cda7756fee2b877c",
"assets/lib/images/failed.png": "a55c0249f6a525ce07aaab569531abc0",
"assets/lib/images/play.png": "426bb5ea0e2fae74d22b324b9b48f375",
"assets/NOTICES": "91b216082e1e72ebdb4f16099da7c8c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "03218f6327e8872a1f89eb99315b5b31",
"/": "03218f6327e8872a1f89eb99315b5b31",
"main.dart.js": "7b4e44f8533ef55da8ab00c48badb1ba",
"manifest.json": "1114d3bff057622ed7fdc014f552fe6b",
"version.json": "25c66c760176a1139ef5118af971b26b"
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
