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
    "revision": "759cbcd8dc24a66f94152101a91e3206"
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
    "url": "assets/js/41.b5295003.js",
    "revision": "31188b6109182fb4ea29b4ac5ebf8b6e"
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
    "url": "assets/js/app.21f3b9aa.js",
    "revision": "58a4284d0557ac06db6db376748e4366"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "d507e552b667091a67d1eec47f1df1be"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "d2314380926627f5eaacc85df331220b"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "411e4abe3539060316d429070d7195fc"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "e186ac47ff2040270431208debbdc26e"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "13af87465da3eb43ea167cb0c1a5cd21"
  },
  {
    "url": "book/index.html",
    "revision": "24696fdd8d0d9d30e1feb49c5e3f2212"
  },
  {
    "url": "index.html",
    "revision": "518fb312cced04b694d0daeca4e7d231"
  },
  {
    "url": "memo/memo.html",
    "revision": "8da5006beec28c568344a3320a8f9558"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "04d041dfc202b99dc4174aaa280a40fc"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "437eabf6f426d3b52f478fa71c8f23f9"
  },
  {
    "url": "study/english/words.html",
    "revision": "9d5aa9af63399d1347566930dfe21dcb"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e6537bcbcf225f35ae77e8b17af87014"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "8b263f418ea8427445d4d94eda1960f9"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "0b8d4cdaf0bab36581eefbff7d835f07"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f6e70f7dcb622dc7bb2aa9a7098ecfbe"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "3e9c441861b52de3a197b922ecc95380"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "ff836933be83c42e8f4dc46e80fcd4d8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cc7cc9c546b75bf7e02eb14a48659cb8"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "27a5a97f3b6d2a7b3e719eed929e1c5f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f09d65f3780bb3e0e299df149f01ef66"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "79d6addeb6e37df4fc3758ecb17fc138"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "92f90d90f63bd9341258aa8e29093d0d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "1e926a21105d1c8c84e340507f07661e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "7cf87c31d02067ed45c4144ec439b896"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "137e2a46a9ae4ea157233c276c3fb213"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "dfe0e996dbfef03816bb9ed162183483"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "8af2c7b09f3f3232769399304c299262"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "6565631b724421e1131c30ba63bf6a5e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d2040dea5e810afbeadcb190f06e0fd1"
  },
  {
    "url": "task/2021511.html",
    "revision": "61e81f41bd9063605c274857ced43dc9"
  },
  {
    "url": "task/2021514.html",
    "revision": "9da5f6509c9e3cf8311c2271a5538987"
  },
  {
    "url": "task/2021515.html",
    "revision": "168896a99c216f402ae53761ce7be9cc"
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
