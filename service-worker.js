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
    "revision": "1f35b51664ba7e6678c339ec1fedf061"
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
    "url": "assets/js/42.90a19b3c.js",
    "revision": "67b7046ae3658cb64a4d47dbef7db2db"
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
    "url": "assets/js/app.b9582ef8.js",
    "revision": "fd537681412865167c18b4a5502bd8d5"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "e39681312051afc7b1e082fe4458b535"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "aac1335b619cdbb50d41fb2056509e4e"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "86953162af03a6700eea740a13d68049"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "f50370c7145e9a7b8ec7ccdd80d91c92"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "ed6ccf768da9fa8b0af42c05c8152df1"
  },
  {
    "url": "book/index.html",
    "revision": "63892677cb87c29bfa63b9c01b24cb46"
  },
  {
    "url": "index.html",
    "revision": "ffe6ca5374cea4e50d098b9061e25e5e"
  },
  {
    "url": "memo/memo.html",
    "revision": "d00dd6f734528bd93b1ee573d3ef762c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "9df7631ddc9e0dac44593f03e0dc6a8f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "967deca945826fb8a10a20d5614a6369"
  },
  {
    "url": "study/english/words.html",
    "revision": "4cd486d01ac36dd43824fa1c664927e8"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f2bb06dd140190ab0a611f1736cc581b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "21d18a632da02ea2067431079ddc1df3"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "da1dcfd5982f9c074f1ee98c27bfa24c"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "74696e234d2895ca93d4932452d9c9c3"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "e5271a58f28e498200249503a9996d2a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "154d6544191f778b702a1c684d0715af"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "15d278f057cc68428d229a6e276681bf"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "b88992ab911d83fcc54991633e9109ca"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "1bdeaed18a39820e4e97767545076779"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "4a78bb800c7908cb620e5cd855cc6904"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "20608769ce6aa9133714d872b85307f4"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f2e6d3b71fcd0b44a17ce373c60d2a32"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "6b33c882563637c6b6b765911cdd59af"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "7d9cac433ca3405518cb115937739dc3"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "ee4ec1328b27f8a0b714825680fae8d3"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "47782e05b9b8701ad995580876701257"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "27fe2fc05807f6285866557810ab302a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ef6cad43f517a396fbbad9273addd1c0"
  },
  {
    "url": "task/2021511.html",
    "revision": "317c9486129b85fbfc3b57f7c541cdbb"
  },
  {
    "url": "task/2021514.html",
    "revision": "1b28bec26288d1a4d7fae04cfb3e2272"
  },
  {
    "url": "task/2021515.html",
    "revision": "b4cd27e236aaf1ff439a5bd2abd03adf"
  },
  {
    "url": "task/2021518.html",
    "revision": "bedf8568c9aa4b870871b6375499a266"
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
