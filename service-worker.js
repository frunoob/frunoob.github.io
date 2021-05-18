/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a5491810c59622a2a4a87cc45f6610dd"
  },
  {
    "url": "assets/css/0.styles.92760145.css",
    "revision": "99707eb9199d5cf164085eba3dc5d36c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16550103.js",
    "revision": "fa3b21fa530e8d8bd5cb033475bd1011"
  },
  {
    "url": "assets/js/11.f2702b8a.js",
    "revision": "4e94f8c93b083d7d50ad6ae198bcfd63"
  },
  {
    "url": "assets/js/12.9a1a94e9.js",
    "revision": "b1a3da83a23a33b605f8fcd20ab81533"
  },
  {
    "url": "assets/js/13.621504c2.js",
    "revision": "7c60f310031efc700d4674dd590261ed"
  },
  {
    "url": "assets/js/14.3284b063.js",
    "revision": "6f9e8bcb1d245ecd52a967dd20ffa3f0"
  },
  {
    "url": "assets/js/15.532d8f28.js",
    "revision": "8fb60f305d3ea370e63bca27d681b272"
  },
  {
    "url": "assets/js/16.c4b4202a.js",
    "revision": "4e975201e53cacc6f583f17d5218f327"
  },
  {
    "url": "assets/js/17.dd0f130b.js",
    "revision": "55a2e63cafb22f82759379ab8b7ffa03"
  },
  {
    "url": "assets/js/18.02e606b6.js",
    "revision": "af06dd3bf5c504c7203f5ab6fd23e1c4"
  },
  {
    "url": "assets/js/19.683cf9b0.js",
    "revision": "6832f3ed30535a7d0cc132b4c417a5d8"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.31604627.js",
    "revision": "ef64c3984eb0a1b89714bb80117fefa3"
  },
  {
    "url": "assets/js/21.6ac07d82.js",
    "revision": "cfb87534323320ccc082e7461cb62d9c"
  },
  {
    "url": "assets/js/22.49cefd48.js",
    "revision": "b72d3a53f16d38c537331cce22c0ad20"
  },
  {
    "url": "assets/js/23.bd8c0be9.js",
    "revision": "09caba207d99810e8bda592a9bc8e762"
  },
  {
    "url": "assets/js/24.5cf6b9a4.js",
    "revision": "8c9964961ea286a95bde9ca4da96648c"
  },
  {
    "url": "assets/js/25.84cf3eb6.js",
    "revision": "89421068247a930d863bceb4116ca149"
  },
  {
    "url": "assets/js/26.af94b493.js",
    "revision": "8d434cb842b4688c574e22bb89db13f9"
  },
  {
    "url": "assets/js/27.19173685.js",
    "revision": "c4986365fbe29fca00719808b4456278"
  },
  {
    "url": "assets/js/28.b9c193d4.js",
    "revision": "0c89534e6c805f196381fdb4f3c071de"
  },
  {
    "url": "assets/js/29.cc646802.js",
    "revision": "1a2ed4292c008e102c76d1d7b9116cac"
  },
  {
    "url": "assets/js/3.2c95ad0d.js",
    "revision": "24b4e3c2d35dbcea3d49ccb1474ba2e9"
  },
  {
    "url": "assets/js/30.e921c463.js",
    "revision": "8ce4b04b7ee91dbcf80c3db3d2cd5a7a"
  },
  {
    "url": "assets/js/31.47296141.js",
    "revision": "861f2dac8b38d1da5e73e845c84c35e3"
  },
  {
    "url": "assets/js/32.327f7640.js",
    "revision": "66889e4923fc76abe6c0e4fff460b2c6"
  },
  {
    "url": "assets/js/33.1ecad7b5.js",
    "revision": "fdc8dbcca7f145e147c1610cf8710fee"
  },
  {
    "url": "assets/js/34.d4b4948c.js",
    "revision": "74acd3a236edd69bbaed5f0209b6a788"
  },
  {
    "url": "assets/js/35.c9175545.js",
    "revision": "3f1b45cc69de0ed8ac3a940308bc73d5"
  },
  {
    "url": "assets/js/36.ce92ee16.js",
    "revision": "eb8ff523b9d9aeaeb6d06bd5d8e9efe6"
  },
  {
    "url": "assets/js/37.9c6a7d78.js",
    "revision": "9c1901f4c27ee3858bc6d6a111dc7c13"
  },
  {
    "url": "assets/js/38.c5841653.js",
    "revision": "eccc4c5c6efc446fe279fd556a3085db"
  },
  {
    "url": "assets/js/39.9fd011d1.js",
    "revision": "98a725b2cf3b3b0a9adee5e7521a69d7"
  },
  {
    "url": "assets/js/4.aa18a0cf.js",
    "revision": "a4a33540333a4bf2ca9f61bfc96e3de8"
  },
  {
    "url": "assets/js/40.de3b5142.js",
    "revision": "219f17f0cb2f2729e26bcb7b41ac3333"
  },
  {
    "url": "assets/js/41.b5295003.js",
    "revision": "31188b6109182fb4ea29b4ac5ebf8b6e"
  },
  {
    "url": "assets/js/42.c8bd999e.js",
    "revision": "a0b123a9ec56b16d8017b728d7c3d2b0"
  },
  {
    "url": "assets/js/43.552680ae.js",
    "revision": "49f91748d24c472b0308d614ebb588c7"
  },
  {
    "url": "assets/js/5.e84f0a01.js",
    "revision": "5314e5204997c617533079617046d451"
  },
  {
    "url": "assets/js/6.4c971fa6.js",
    "revision": "d22284561b7bfdcc936c8b55ae97dbe0"
  },
  {
    "url": "assets/js/7.a4d388c9.js",
    "revision": "3f6295de867d12b4268d4d6fc9f4e187"
  },
  {
    "url": "assets/js/8.086037a4.js",
    "revision": "a49a51a420957bc88f857ee11350daf2"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.7191ea88.js",
    "revision": "b3cb571616a4a17b68549129031ae62f"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "1bf42020045d14870f7d98dd097b0e5b"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "f6f1681594cc5a84ecb53f9060bed0bf"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "7588ab05a1b3ea5bca64cbdcf62b91e6"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "1309058898aa8ac733621657403c79f3"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "abea20780c140a420109f6c5c02e541e"
  },
  {
    "url": "book/index.html",
    "revision": "93853367d94deb83290d4e8309c52408"
  },
  {
    "url": "index.html",
    "revision": "fbd50203cb77b032a6a2f2b36b4bb27e"
  },
  {
    "url": "memo/memo.html",
    "revision": "43ecf4b67572c4c909026422941b0a64"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "de13b363c7b78b81a6ea71fe07474ddb"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3326a316385724c93e941f38bbb98493"
  },
  {
    "url": "study/english/words.html",
    "revision": "5c0d14b453defc7921040b21a53ff7d3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "09d8d84065fae9581916594f37ed94d7"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d032c6057a5a130de86871e3f3f58720"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2589da8c611691316618a8633d46a24c"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0f267d6e5248f89f02eadb1473c4c789"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "edb744faadfb37a00f270bf37c9173d4"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "ba46e07404bde3f9d9f27a9e118d9b54"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "98f27183bcb44ae2033fff17d089ae62"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "304a487125ae99bfa6d14dc90b6d6f23"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "66a2a4d3a29d507b6c65406dffac631a"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "84bf62a510fefbb76e5f41d96eac0d3c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "8d78fb8e1e0b665b31e88455ae523144"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "093793fa6e53ce64d24abae5c7917498"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "aba3bf71f382c97cfe9fc2d15202e6a1"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "0d9b5f82d56d6b81ec13bf5b6d2d4d77"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "6dab238abbb4f3d7d3ee12812043143b"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6d23cebdb4adcc9864ffb018c8504056"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "3e301e5182c40fe0f247bfa2a97ae79a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2aa61e6e1099968db9c769dbc7b71b84"
  },
  {
    "url": "task/2021511.html",
    "revision": "be2c8e2b70ec82a704f599932a8cb7e9"
  },
  {
    "url": "task/2021514.html",
    "revision": "8345a4f4825c9f6303f0fa2353e139ab"
  },
  {
    "url": "task/2021515.html",
    "revision": "dc4d6b9b5808a53d1ec7bb58e9a563c5"
  },
  {
    "url": "task/2021518.html",
    "revision": "9c4e4c5153db482ad3d433e6435bf613"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
