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
    "revision": "1a446c019cf805757a31fbe88a4c6849"
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
    "url": "assets/js/app.edc37ea8.js",
    "revision": "f8a0b551f9d3b7114c679d6e300db257"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "b0ea295bcad1a0467658d6ab82f13718"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "739cf534a6a1c2a22c575c4331564b81"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "0220c38987f9e45299c40aebd5243624"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "32ab1c871a43014ff0e8b37cd937e55c"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "8fdcabb6590d450bc011a927f5fb3883"
  },
  {
    "url": "book/index.html",
    "revision": "f3dbe50bc23da97907c06d10149b1921"
  },
  {
    "url": "index.html",
    "revision": "d105195893b4e86bcb40e25aa4cd4b52"
  },
  {
    "url": "memo/memo.html",
    "revision": "3af1e925a69305519eacc5ca280dc9d5"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "5ae8b2cbac3aff76e76de454cb9143c4"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d92bbe8c5eb3d5167ebea298e3ac91e5"
  },
  {
    "url": "study/english/words.html",
    "revision": "e1bfa620f5f93872262eaaebcffc6266"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4e6daa31d37f9c1de86f03c4440b09de"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "40dffb081733d8fbae107e931bb3decb"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "098d859eb113a6d2b6b594cd0c66a71b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e5bc4a9c2477fded76678946aa721363"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "5bdd033877dea46d036a52d8a61cc391"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d0dcb99099a279655510b4130f48eac3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "d189f639ee03348b69889e853147efb7"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "28b378b65ec1dab5cfb0528f83970285"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "63fc3fb4963de1345014a3a809a13c93"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "7c376b5f637fa306d75e6ebeb8eff05d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "be3a387769078ee15fe794806a1e897d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8c906944202f75f2ac94a626b522651a"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "2841192c5e2146c217d4f268527a51e7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "68411602040c98e83591ef70cd8c1649"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7e03c41563e1238d27f79171fc39dcc5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "7988093c6bc417928373858a9c6136b6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8e3c56dc09a1e3789309f7391266c550"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "99914735d2d5e4c225c9e516b3d48e6e"
  },
  {
    "url": "task/2021511.html",
    "revision": "80330afc030d20687d6b631718f18055"
  },
  {
    "url": "task/2021514.html",
    "revision": "6b8786130f12c49b59d7e3a8eba77410"
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
