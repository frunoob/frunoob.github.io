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
    "revision": "58255fbba65bcd670f140249c154e2af"
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
    "url": "assets/js/16.f50d3e7a.js",
    "revision": "1d9dd690fbc4d0a5c3acf688925798a8"
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
    "url": "assets/js/4.3acac954.js",
    "revision": "859cdf4068627e877171d1e6052cd8d2"
  },
  {
    "url": "assets/js/40.de3b5142.js",
    "revision": "219f17f0cb2f2729e26bcb7b41ac3333"
  },
  {
    "url": "assets/js/41.d6c2749f.js",
    "revision": "2a2f8a6e0ed426735aa31214f0d82946"
  },
  {
    "url": "assets/js/42.cf62be05.js",
    "revision": "5d9b65fbd583b9180d295bf93a48e784"
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
    "url": "assets/js/app.dd6da159.js",
    "revision": "f498085bd3a46010b24fbd962e8246a9"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "a6df162939b7fa9a41a3205b90759015"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "d1caca1e1a87b3423b0a8a683114b9d5"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "ec55ac50f9577d2035a486e06263d02c"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "edcef8f0c47801a440205573aadb5115"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "0795e5ec67b4df4135e2fc2714a7123a"
  },
  {
    "url": "book/index.html",
    "revision": "da2dccfb9d88dc0c20f662891616d44d"
  },
  {
    "url": "index.html",
    "revision": "840aaa0bbd1301061c79c648478e05b5"
  },
  {
    "url": "memo/memo.html",
    "revision": "476b08201c6229b8f30f09ada2ec269c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "2d32c46e440a9c40196ab7edb1ecde13"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "bf14570d2a3ef2d97861aaa48700e86c"
  },
  {
    "url": "study/english/words.html",
    "revision": "3169555777bc8c2138ad7ef5fbc97fa2"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "acecef607d11d013bab4961fa73ae243"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "12eca1c23c8c417e570157e5e41ee00e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "99fafbb835c1fb0de5dffe4127bcc307"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c8597d7ad87ed9a863dc7cd45dd86e6e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "60f1801662b70546078430a494111a0f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "c413570f72becc51d9081bb50f9f2b9d"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ffe53d8c2c7cad5871709f53e1277ba8"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "caa49d975ff7fc51fe957a9d0476bf04"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "166d298abf6a0ff0255a4d6effd8c206"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d095791541695fba8ab5a11785afdee7"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7e55c7a7d1dfa2dbcaaddf555c395d62"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f4fe3c200530659f9a392f37c903092e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "ad55422f56ebc1c8d0a703f1d901a35f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "7385e7d597f19638ca3f8148e4d2c836"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "a095af581d493c9161135f6954e4bd73"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "89ecc5eaaab064643b9d79ac3b3bfc65"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8158256e123292dfcc6d00149b8850d1"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "14d78dfba10dcb150375f6cdf078b2dc"
  },
  {
    "url": "task/2021511.html",
    "revision": "a9032974fe8d2f0e06f2723fc17bd2d8"
  },
  {
    "url": "task/2021514.html",
    "revision": "684aa83cd72cd049aab5bfac83e747e1"
  },
  {
    "url": "task/2021515.html",
    "revision": "7590c52ea18c63c8902660f6c9f3f21d"
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
