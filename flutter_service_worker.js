'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5138470d8cb3481845ac766e72c1ff49",
".git/config": "f9aff44f74a673da9341b2edad694d0e",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "638ea1c52306ac32bd830f83226c9b3b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19bbd3d0cbe6e812206cad7b22c738d2",
".git/logs/refs/heads/master": "19bbd3d0cbe6e812206cad7b22c738d2",
".git/logs/refs/remotes/origin/master": "16a84b0b5aa3093bf6f4a4e20bdfd0ff",
".git/objects/05/da0676f75deaeac671e0efd4dc33ae15edefec": "365f66ea3b8cba4ad8a3f89d43246bdb",
".git/objects/0f/636757f9130e8064dc9bf809486cfe4ac65014": "e453551c993fb78e8520caada68757c9",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/15/3aaeb1f335324ac2b2f4fcf185ffb7c0f07044": "c8f476328e275361f4b12f7e5453fa76",
".git/objects/18/6a0db002a741a3e5617716bb859543046e6a75": "41328edcc534d886f2b6825d42ac5581",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/3e0f15fc9af894ccfa8adc1e68ff932b48f06c": "bc962b52210e458b99f49ebb8b1dbee3",
".git/objects/30/bf5fa73040afd0de0ba259789b5d015995abb3": "83ac7c012b4bf8d7db45903b1ef11654",
".git/objects/39/8ac6489e161ef577ca5340bf332b7aed9f2b0a": "f941e67949cea888244db8aabae7a18d",
".git/objects/3b/a36c0654ba51f4bb8c7add2922fc5a98fb08a5": "7da53ee15e0d931b1a6c44c56093ad2b",
".git/objects/3b/cc64dfdcc562fa68771a1fcf37018cf7181e03": "14bc2faa821844308b93dbe1c9332df9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/69169a60183cfe1b0f2bc234733d1ebfb94e3f": "0be97d5a818490854a72d1cafda04f99",
".git/objects/4e/3255f1bd4adfdf4a8a91c24cda4412966bd2fc": "855717e636fcf57eefc7b47e78d6057c",
".git/objects/4f/58dc92c9e314ee286d868878544f302520bf9c": "3a6189f786a79de099995b5e9caf56e2",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/5f57edc55da9e6330ec29b28f81a208707f3d4": "36e671049a84ab0d7b39391da1b62f2c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/208e7a8d25db04fb087635f547f1a4b9fb21ae": "3b783a8cbcc79455ec26d70bb921c2f6",
".git/objects/6f/4cfe82657aee13405fae181e5a9db7ae18d8af": "2189af2cc259bc44026216718827550a",
".git/objects/71/09871527548e91b9a4d37c3a75583bf86976da": "757bc93802fdbd0b479fa103ee263d6a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7b/ff261938210a526eb9d19fecb0c16787896511": "8d566e96728551c390286316026444cc",
".git/objects/83/26b1242c77ab6c977041fb7ac2c1bd04acbcde": "f3ff921a0371e72466a363900c2c0445",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/f1b549a6b92b6b542d6d91b95ca387eb50a8f4": "27f5137b9c98cba546011760bd9e6b0c",
".git/objects/94/52810502719ab21fde005e9e857c11884acdf9": "2aa7d62eb66ecc68f0e032222e4ebbe9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/f9cec7fd64ad9208112f699652e834263f9e91": "e0d13b1627b10c395624618bff456255",
".git/objects/98/5b4bad172223a439f4d1e9c4c2dd252b44bc4c": "2fe1f35e57043bd47ebe73ccca458386",
".git/objects/99/79ea9604c6de572d5e8b3dca6590fe7147e84e": "1dc8328ae98fc55c20130e56ebaf7ca5",
".git/objects/9d/15848e50ea972fa46a297e00896de36f2b9e83": "b4c6c969ed182a4403c4e32c7fb49ead",
".git/objects/a4/e6de6fe3f07053df2de3402cf95c07fc8ccc1f": "ba4d1ef42a06f6c521259741c0404365",
".git/objects/a8/58414838a0506bdeae46f851f0fb79c1ee2e98": "c4e8522b31ef8220a9c9ab908d51a626",
".git/objects/a9/ecdfda5727995b64af0141508ac1ea1cccc50e": "89c05458423fa8001288fb761c1e6744",
".git/objects/ae/efcb5de7aa27137f67f5db9da6f2677928cf9b": "dbbe47c90e0729e23e73e8bb8aeaeecf",
".git/objects/b1/aff4b2222743292c59ffa03275aa534175b7b0": "90786fb79ad0d84e3aea661aa1b9e77d",
".git/objects/b3/64e65176857673edbb4ce6a34d5401f65c3496": "08d8bf8c5bac7363ab7ea44ce6955333",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e1fd6562d4929c4fc23b20e6f1ae58c32de77e": "c76da30c1701d6997f63320a554f0193",
".git/objects/b8/3463a607b431f2a36fcf0e038a4a08f6550f02": "ee3e86b83f5466b44a3db15d6390c987",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/67505b0b6a46c3a504a2f5a821b9bc45519ba0": "b658c551805f9b70710682e6f5a9c31a",
".git/objects/b9/ef5216df9e3fd7d237b4ea58026d735442255f": "f43ace35bfc0b0b7951fa42341d0f610",
".git/objects/ba/1501d2943c3228e218b443b8e5e126bdfb5378": "cc24e42366059f492463c4772ee3a03a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/0d5cbe9b4ff16c4ca9e727d3461811b1dfec18": "555692181ae9e84ec3cc5e1f42ac5d62",
".git/objects/c0/ed68010d02143c5b38ff3740e573c4db6a101c": "c8641020604708a69490d6bae760b839",
".git/objects/c1/ebbcd6a5acb935c9b956828f414adf6dc8070a": "9bf3a12b6c6ca0892713d9ff88b2be24",
".git/objects/c3/d249ec2af42bbc6c24d1a4a57471655c95eccc": "752ef9927b8de768903f2c4091537b35",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/b4e19688a15a3227531abc420bc7cdfbe25334": "075d4eed840c2464d03e6d1393e3b816",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/b999a6817e098b472e18190959b572c0354e00": "1501883b00f36a3a94a1d669a9957dfe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/48e533bdd4ab19d4147e05601106ffc324579f": "465eda08728a2b044ef042e4033a147d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/24e316e7609bef0fabad1f97f92f5d5860746c": "d5f403c80ce2287a425dfa0aaa5f6ecc",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/3218effe917194465b541acd86e0f3d170f07d": "2b68ed655ecf9808df19882a8c58ff1b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e92cfa16b59ceaca8a9ff7da1d7d09fcc50df6": "dbcff5f851db2c6a45e5ce279c2ad4d8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/d28c018bae0e05936666b8d856d6894c23c9bc": "8bb994f10df0197b678a2a305f738883",
".git/objects/fd/d211f36e85fb4d3d1ad8f2315d6923e8dfb803": "78636682e9393d42b343fef95a759fb3",
".git/objects/fe/6512a9acd34144d30d81a66288acd8b2ade1af": "a9fd77571073594d346b72c13ba2ad32",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/master": "69ac6a78c5c9c6200d890d0b2a14cdfb",
".git/refs/remotes/origin/master": "69ac6a78c5c9c6200d890d0b2a14cdfb",
".well-known/assetlinks.json": "b2f2cd5923f95a1b198e4c32cd83b2f5",
"assetlinks.json": "b2f2cd5923f95a1b198e4c32cd83b2f5",
"assets/AssetManifest.bin": "c4676b3057b3e61d15e81c08d76d2d09",
"assets/AssetManifest.bin.json": "80024f3be666b301b2c80e4b6bd45915",
"assets/AssetManifest.json": "31f321e67056b0a67965be09b9b9853d",
"assets/assets/Itim.ttf": "4a3f2cf1ced5257b6af803f4b86bf427",
"assets/assets/trophy.png": "bb004b8b6604bff7d1edcca1f70f7e94",
"assets/FontManifest.json": "6e8d760b3cbfe22f408721d70e9bff3f",
"assets/fonts/MaterialIcons-Regular.otf": "81c4bedce99ee0a992b8175231c55c81",
"assets/NOTICES": "8e0c43e930e6163db6b3935715d56180",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "dc5c75271b0b4344655d5a41628fad8a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "53cb936449fd11494061b11b79c536b6",
"/": "53cb936449fd11494061b11b79c536b6",
"main.dart.js": "8eadb27060c1983dc60fcd4695cd9881",
"manifest.json": "47315e5a1585c6048f44d62d49789a37",
"version.json": "c8c48df0ff6ebd8a13eedf463f3e2c6b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
