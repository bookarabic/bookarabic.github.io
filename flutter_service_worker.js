'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "81127ad129dd2249f5ab0667ca0aeb84",
".git/config": "fca48f8e4a4eaae943e815d1dd08ffbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "e55243f6d90a4d4b12836ccc11e4793f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "933784671b3eb3020cd70483340951e6",
".git/logs/refs/heads/main": "e6fc4f2fcf2337050908885b139fd6b5",
".git/logs/refs/remotes/origin/main": "09770a027682824e91b3820625575a78",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/b426146391e18fac5086a106124fb25bbe2ebe": "d577955b05fb62dab8c720ac01ecc74c",
".git/objects/09/7ac395617cf9133346ff7fec03b88fee5f2033": "d99efd29a7d524476f25c03cbcee2d2e",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/f9e2471f90a5fa6cd405f5e63485300770f022": "9006b031127d694e2d67bca1868ebfcb",
".git/objects/11/9eb4d26d7993dd1ea5783e231b60b2f447cec2": "a4e9ef638f125431f5c16162a475d306",
".git/objects/13/a5b56aa6b5ffd9f6c077a4804928d1ba6dfb64": "44398eac664203947e9705e333b10955",
".git/objects/1a/beb84c6ba079e84011b96e2db3bab2359b62a4": "1dae116d6feda6196fde1ae0e36ec14c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/24/afd561d3dfa2709c04a8b37f03a6351bc32350": "737056b980dc1a8a887823a3b5123d87",
".git/objects/26/9bf9efcc01c858977942736a09328643ec9afe": "ba4e48da4ea7804f92c7427c9eb91669",
".git/objects/2a/48f33346e302ef5b17b5c27ba9808aaa2e9cf5": "2b9f8e039a0d340292cca30ec3e22195",
".git/objects/30/643ad21d0f19c13b30e2f7858b3e2cb2aafb02": "19f75a01f48db9416b54a295a7c0f061",
".git/objects/32/5e6324891a53d35767ff695b5c0a86d38dc4fa": "6ed62dc6c91233cd1891c9f903990fce",
".git/objects/32/a6bb78acebc13170c1b2cfac9a76b454cd6b3a": "b43993eee091196fee29252c2019b1c9",
".git/objects/34/be0ccfc444be8f2a57ddd147967138ae9163ad": "26079344c8781ddf8193666784a854dc",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/8064c631ef4e2f82ab3a026fd822b1885f486f": "6517871c46dc7947954268db20235211",
".git/objects/3d/a04ff9573e297f4926afe3f549f816c4972b83": "0228944795e744de518a7ec5046a3d26",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/a045eecbf3ab8d099e2dc2210f566d5ee193a1": "605baf4925b36e8cb2a2e9f314175b78",
".git/objects/43/c71dd91fe15a73b50c2cc3c5be8762b93a41d8": "7b6c36a9957a1810e9593d7e3f6eafdd",
".git/objects/45/61b86a1e8f2aef17fffaa1763121bc45f9a231": "244861d6e31c9c16c0ffc6e580893aea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/b92f7130c4723a46fef45e47e5f8fad762b173": "02940e52bbd8252b404681d4a17286f8",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/21edb80c98ba6d653faa6ab40dc76a27186b8e": "9893d78f29afdd474caf752d209a8f0f",
".git/objects/54/8327e6295a7f5bb31ff7297951de7d872cc2d4": "e66e6ad50ef11723750e9f8552a00cbe",
".git/objects/58/3025fa1f1604d6a27726c8c1becbdb62ca7026": "fa228f3af34e7d5655d0e2c7133ed30f",
".git/objects/5b/a90123e8034a1bdabb3b76c7f37e07f67ef567": "1617b13035b031eadee5c8db8254dbba",
".git/objects/5d/7a920539aa456f4401ebad5adf164f7aaabc36": "8b3fad484db344f140403f9f007beb4d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/0ad8b32747252e1e4baec83618e50a7150415d": "610a2e22922876194219c606686caeb4",
".git/objects/6e/14195eb961c9082b3bc2abc1dd2abf7495b225": "37164010921bd6e2f845612f6692ecb4",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/79/a9da8abe3b298b32276362254620aa5c6c4339": "296c80eaec74bb864b0cfc15dce904d1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/cc438f81af43a959741abbdbdc0cc6294a679f": "b2d664983c1dce77182f49097a54dec1",
".git/objects/7e/298cb0c0047e01c6bf31f9ed087cfd51b368c3": "f2148c8dd025763c074e9c1cb23efa6f",
".git/objects/7e/51a988afd8387f74fa2b25c45156b5b903684b": "85bb709968af6712caebc59a605e6c01",
".git/objects/80/5134f32d5123482087ccb56cfc81d30eec8288": "2d3f5d7bc48b921a317756f9ad8a70d6",
".git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "d3fd06a4b3821134ad7857a2861d0f57",
".git/objects/86/b68818e9076b6bedcce2d6519da26def6681eb": "2ee28dd3e8b7b140c97fb8dd954be666",
".git/objects/87/7a11dd260b5a86d243fbec458439a2aeec1270": "282cd3324a6ca9af2280a44f732ff8b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a0f0278e682f3e6e5425221f3cf10b773378ae": "afefdd1d9786835ee715a1790b6678e1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/105b9d23d53b3718d70d0bcf07c26aba77d1dd": "a2318759e9b6e50f69ddf8f9a716e8f5",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/96/48522dc1596b83c3dbdac4e62c2f2e9006a5de": "de362143882ff47993b862094bdcf29e",
".git/objects/98/1657593ffc58358ac09071fa8a3feb5b4bda69": "905f9cd720b32996a00ea1642c27365d",
".git/objects/99/9a89180478519b22af700a5f568be8123eb9c3": "17991429a9a9505275f551ba15703cb9",
".git/objects/9f/8062a713c4af5045e82ba34633d7f66d453c73": "e10ac3156a3c3788518175c752fcc806",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8cfbd0de68ac548db82c59f28c5df38c2fc5c8": "81a82b551a960fd25173d6654de18b9b",
".git/objects/a6/aa451dad4d9cf69693d84d3bca951bd9084e1e": "7bf6036df053dd1a252c2f3d2761109f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4f274a61d4cd31b13f005e2207ea99a8a37ac7": "20488c2e7147303d22dd01fcd888c1a8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/1e89238c02b706fb07045e3a635ccd321013f4": "2363ce9aa6b2969fb9480da0974e52cf",
".git/objects/c0/13b1abb6c8418a9d805a0e3408579be541f257": "155f69623a31e47ed8f1c1ceb1a01b15",
".git/objects/c9/7020ba687cabced54c2a479ae2df7c5751daf0": "6ac822bbd5f1b8c64e8c0b569be9c8f4",
".git/objects/cc/55905ffe185d5cbf5246e0953388f3199e8eb7": "a24e687cfd1cbbc7998841a67eda5252",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f456310cdc5cf5a57d2c05ceadda41a0476820": "1dae1e9c8893e2c9d992a0ecd371c587",
".git/objects/d8/445cb5daff24f4597673f0ab667826bbbbed02": "797b7aae940a1d16e2e01f009f445829",
".git/objects/d9/abc03dead01c559f6e8a0a7ed23e341eeb0519": "48ea4affcb1f4134a3016976ca33d0b3",
".git/objects/e3/008ccd5dc2aca8c890229403f8055d953ed531": "56285bfea2897aa78c9e39a1d25c0f04",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/64b334e9f44c5050a4819ed439619440aca8f5": "8d154e62c7717c7a8391f321fd4719a1",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7687b1bf0ca5b5524471afb7c921f18b3859b9": "94116792c17127041d3ba399d10f5603",
".git/objects/f0/7378fc58756cc0664a1b04e4f29c1804f87351": "714b1216fcf9cacaa4284b7d5916b7a7",
".git/objects/f0/b8e3565978939606c525e599b1f7e53a236733": "396ba2432cc394013db63f814cd9e1b4",
".git/objects/f4/a9a567b28be8e27d40462a9d35249dd12822d7": "c82b1096d7e1ed554f7963b89b9d1033",
".git/objects/f6/2acd76135a1e7ea68984b1440682ae33926d25": "bfa7c0cc8494c5c06c11aff0cbf1dbd4",
".git/objects/f7/12d69b1a892a0769cd5cdc5baddf3f77885b19": "b98e2b649db982b4b7e5fa1e5fe9e341",
".git/objects/f8/c958dd10026d2e67e558db0201bba2c75a9f1e": "90024be1c00142da7fd05c55fda64078",
".git/objects/ff/8b23e2a7a398fea301bd24e2b967f25caabafd": "e7dbbf3440d0c4a564e80ccb0a2a666a",
".git/refs/heads/main": "471ee86598049cf29fefc0fbec9a4116",
".git/refs/remotes/origin/main": "471ee86598049cf29fefc0fbec9a4116",
"assets/AssetManifest.json": "3e985d6c9f97f82dce12ff9f1650aa03",
"assets/AssetManifest.smcbin": "531dd9c58ed438a2a24e2bedbc5803dd",
"assets/assets/images/logo.png": "0ac8a45e9432a7454cc87c129520abca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d512dfb7fb92182fdc5cf14b9990cfaa",
"assets/NOTICES": "8cdf1d7d61354f1869805f267fa1e102",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "37ada2c9967ea2b266c8b16e3bbcc76e",
"/": "37ada2c9967ea2b266c8b16e3bbcc76e",
"main.dart.js": "4ae44f215da9303b4cfd5da3ef2f33e9",
"manifest.json": "4f5d2b9e82917ea416bddf039fca5146",
"version.json": "f744738baac7fcb7f126fe10717ecfd6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
