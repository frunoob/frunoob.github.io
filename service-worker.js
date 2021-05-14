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
    "revision": "d532084b036c28889e2c79a676feba18"
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
    "url": "assets/js/16.1e1084c8.js",
    "revision": "7380e66f99c2cb084d9af7982e4cfef0"
  },
  {
    "url": "assets/js/17.ab59410d.js",
    "revision": "ede18e7648fe51422ba597c552ce59dc"
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
    "url": "assets/js/4.fd03a620.js",
    "revision": "55d8c90ab34a2f5cc4ec94c3ce1e7cb2"
  },
  {
    "url": "assets/js/40.de3b5142.js",
    "revision": "219f17f0cb2f2729e26bcb7b41ac3333"
  },
  {
    "url": "assets/js/41.34fbd9ef.js",
    "revision": "453fda51bca76ee9c56d995074850948"
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
    "url": "assets/js/8.57a1eb57.js",
    "revision": "9c3d7b7be3097f15cdc6ae7494d587e2"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.35631ae2.js",
    "revision": "af4ff2255adbbc225e435f0165d85370"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "e414cec2b4693dc32b693adbfc75198e"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "103174ab9b857f6d3d6b14ba68be3e39"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "963d03186a5eb7c7e3376da71b3b184f"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "11e2324f52f6405d7990afbf51c4200c"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "58d1db0bae29b25879d889c90a3ee5db"
  },
  {
    "url": "book/index.html",
    "revision": "59ccb97be1db7a63e8f1a485268bc38f"
  },
  {
    "url": "index.html",
    "revision": "5eb00b384f50109623b97f095b586e1a"
  },
  {
    "url": "memo/memo.html",
    "revision": "2f6e6c594b9a8bfb59e087a9957256a2"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "7045ea2d4bececbf86884512cb5691f3"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "399343f73ce47cacc4887889b32affc9"
  },
  {
    "url": "study/english/words.html",
    "revision": "c9a1b4d2a315dfe93f50f8c229b68e25"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b4f91f9699238ecd15dd82e646a07eee"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f6ff65d0ce21632f740cd2fa50e2f984"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "0417bee9f4846b14e56414f376241fb7"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "6343cf493239079c148414e8c08c2e60"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "02373d0c37c6bb187938b841dbdc8d43"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "b59baad09683b3eb4b44398ac2604c78"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f9cb4f5efcac0a6ee6a2198cbe7188f0"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "dd4d3a70f92619439c525697dc0df3dc"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "8d4b8603bcb1c334150aa1031fb0608e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "279678e72894a6199a7ff7f764b5efb9"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "2411bd6e7c6c381cc7ac0a97c85077d0"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ad7dd8c9a8a54cbb104783af5e4397e6"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e9ea347bbd45b3d1ac1397347e95e63f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "dd072a779599d441755f6904075e259c"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "369e945cafb824e1b4e6e6fc3c87c48b"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "28ee5ef8b9fc6f18939560a18f431598"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0ea0ce2dc4bbf480d0ec5379ff911cf9"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "4819dfb396ed13c664ee372476f448c5"
  },
  {
    "url": "task/2021511.html",
    "revision": "18e74369b84ef9352d614a0d96bd928e"
  },
  {
    "url": "task/2021514.html",
    "revision": "22043ecc534548e593e07ad8ba5329cf"
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
