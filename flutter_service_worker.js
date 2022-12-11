'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "110ae6fb753446488d4656eb5602344b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ec5de0dba3e7ae7d492cdc7ce9e3981",
".git/logs/refs/heads/master": "6ec5de0dba3e7ae7d492cdc7ce9e3981",
".git/objects/02/5387e895ba21af4653a8db8cfa2d7021e09e94": "fb5dcba6c3451ce7acc9f086da442784",
".git/objects/02/a183222c39e402cf1e775d314a176e6081c566": "137e9fc61784ea98023b06ebd34c205a",
".git/objects/08/d3d6d33b853ee77f4d3e4253322c3c2e1a5d80": "217a4d27c8417e8356830d0fa5594ae8",
".git/objects/0a/c33f41e324997ef1025efd5b5ae8c7a65049a7": "9a2ff32551ba5e0dbf2b6910a33cdb58",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/a8e46750a85c5f0e55cf5fdb58ba384bdd329d": "f5ba3fe1aab1abc9487b21cc89374d0a",
".git/objects/11/d4ed192266a437c4baa587e934131c50bfbdfe": "d01af04a0813a61ab20846752a9a82d8",
".git/objects/14/36e39747699626cca5ddea50c0a46aaffd711e": "7eb5ce1d2b8d24f2856d1465f9da15c3",
".git/objects/14/b354cf60cfdf36be2dd3bf0e173a84b3f9febe": "ff0e904f06fe17cbb7f58819f90b558a",
".git/objects/18/791cc30a89934ff645583deca1ed4435b3e7ba": "e3a7453736e8a4301fdf453c838fab29",
".git/objects/1a/2c306640dc1361ede0c5e43debd78fa64cb794": "7451833ce1dfe9563156a9557fa18b48",
".git/objects/23/8b78f9a069b64fcbb2ddfa2b9d28ffae2f2a5f": "bb8c1a35fe544176384972a1d75d1a59",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/4da126dccded780e2435f150b0ce17f8b11bd7": "92b9fbabc78aa8726e9d0a83ec46974d",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2c/d1e6d60774d049bc2bcfadeca3ab75f69ccb2a": "e3c8282b61138023a76562e9ec9a9573",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/68/9942f486da344426752e6eb31374815033d180": "7d6e85e791b741933ac3fa37cd9ed1ed",
".git/objects/71/db0c9072c6f964ca592f22b874d78259843da0": "0b1d3fbce8da1e895897f1fcfa191430",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/1b317c6fc3b1ce5818121f3e803cf7167a68ab": "459d54a88dcf58aabb3849b3e0036c41",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/f0e4f73da0cbe776cfc51108796a54c43439b8": "0f425d55b6356299e4970c06d723bae1",
".git/objects/80/02884484a10b1f9c53bb15bc2be3d0832104bc": "d836082b9f957b147be9afd98514f38d",
".git/objects/80/ae0fb3192bbdaa7678f68665a70c4aba044482": "7cca239447e79b08a5e35463119c9e43",
".git/objects/81/d691b5710e2d0559dbedc0a1c35054830a0cfc": "3893c59fda8ab3b0e947f1edbe61073b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/916c57da3e17a6d673495e8af828d653b668c4": "1d59f1f923fdf1121a5b7ed184a9a9d6",
".git/objects/8f/b3f95eb07137092c78f07da6faa151cb076182": "607bbe99af92eb9bc20a91e47edc8024",
".git/objects/91/c407e5a72b2b4bc4f95c2e8cb3da0ce4b98825": "818e78ab28af5251520ecfa577f57cc2",
".git/objects/9e/5e42ad17cff964e287ca4e6806cee94a525a0d": "f9ac65566ff901728b9ca20c9cfa6988",
".git/objects/a1/05720fec66b333e2dbf69874f3f746493c46c0": "76f99d7a1a52b26b3f956e5031b67b62",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/fd04ce0f767e0ccfb06852f9111e77c98d7f1a": "0113e6df7975a8c97533b21426c2fed8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/5cb557841ac8f3b0b3553535917cfa81bc9969": "87b78c631f821ca14a442c110a3ce897",
".git/objects/af/5b325419f17ad2a8ca34481998beb92467c6da": "2fb65946aac63e1036cc7d72ad41990c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/7177c951d1032a6fc8c1743cf54460a20303aa": "e4b1101895a52c12f9c95a3586188d87",
".git/objects/c3/de0fbc6e17e637f852ce28004c1c24cb036d79": "9903c699c3cd3fae205fd65bd101bec1",
".git/objects/c4/11d41788b93e5ee7790fc063fd74e97b17e43f": "2e8991cfaf7d0233cc8b8fa9a26bc794",
".git/objects/c4/d7d0c2b7fd8c5adc9077bfd0c444fbe8d6072c": "405be7bdbaafaffb4dc6b96147ad8124",
".git/objects/c5/802dbc9cd5bb623153e6683bee294e7256816a": "6ccb33dc65116d571877a39043c668d2",
".git/objects/c6/13763f01df3934cb5dd78f999d7a2bae52153d": "2f789c0fb046493342a07e2502b0f078",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/fd28f2fd152482ab6b88508335b1707bdb99e0": "810f01e6f8312d73309f0818a6b839d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/65194a6215959d3f24de282b3e95d7b2ba3705": "208ab9fed1e53077fa4c0ef0dd6af77a",
".git/objects/db/330802f6cb9a97dd1210f4c36b2002c6e76c32": "45c1d9231bf30caa1efcd9b0ce84e42c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e3/002125e1a6d284e623f2bce7cfd3b854f5a3a0": "23ad315b2cf7993a8c820c9e23cee273",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/fb5b21297f36f8e13847b6cc38ca859eb925be": "c4da43a995eae49ec5e5fcc1ca2e202c",
".git/objects/e9/bb5442ff0a03375168f395974b7dafc2614fb8": "84ee81140425171389f646b24ec5a330",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/30e88f54ec5a1de990502f25994d0c5b76eb30": "0860252cd7e9b503649e2143ae7d1b77",
".git/refs/heads/master": "9aae726a893af36ae5ab28b72c5c7a32",
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
"index.html": "148075de9023c5cbde75f23163c60b84",
"/": "148075de9023c5cbde75f23163c60b84",
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
