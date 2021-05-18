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
    "revision": "b18f1f4c6e014a4f7b101b709af8c2a3"
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
    "url": "assets/js/42.fec1785e.js",
    "revision": "ff7298c6664c1f6c0d03e52a0f9c68f8"
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
    "url": "assets/js/app.8a013c29.js",
    "revision": "a3f8cd3932df9c6802c41e505ff03bec"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "a8f8ca9ff2de2e39e73e35f74ba3efd7"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "39a743d95d7115658978ba056a5f620b"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "602a9b85d70d33deb36c64a11730fcaf"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "fff69a69bbc520a3a65c36c6c69e8524"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "1670e2c636f0fd3d71b5ede8ea63768c"
  },
  {
    "url": "book/index.html",
    "revision": "30c8023f38dad43f653e60a56af1082d"
  },
  {
    "url": "index.html",
    "revision": "911209a07e7bd15acff77d3905b882d4"
  },
  {
    "url": "memo/memo.html",
    "revision": "2ca25fe7da984a1aef0291f4a60b382b"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "e37feea2ced84482aaa85ce1cc23bbe8"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "38a4172bc8bc9c3f98984654a5e77a78"
  },
  {
    "url": "study/english/words.html",
    "revision": "4565364cf02f08e814ef543975c91536"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4f2d504c1219dc04d2195fda87161435"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "90a049b70b90f6f4766b40527e82cc26"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e2a1b90834ac5d5d07a7e1dc79df6a37"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f338dd699696e070d587bce56aec8db0"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "01fbb87d4e0258ecdec37041ab79d6c1"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7ff98d866c1a803a3a5e441f2a9173bf"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f82d2c3df1494f31d11cea2864e59fff"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "3309e5358735fada3779563d53c133a4"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "dd4faeb2ed6f093d6b1e8a3d4661ded2"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "678f744ae4b54a6a0d6228c9bacb0dd3"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "5b9772cebdd92f7594162bfd7af47ae9"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "9c65275632a80a57ef1337cbf5eb06d0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e79ebf5195ef37c1800884a07514e820"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "bd758f0747c74b30b979974fe2c45df8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "3a92d18dcaa3c67893421c90984e71bf"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "228f984b1d37a46362acc30345cf38f2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "fb505ef4e6559446206a2a28f0877845"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "63b75a48b0dd782e95b39d3da1982899"
  },
  {
    "url": "task/2021511.html",
    "revision": "d0b0b769f542a7b7f61a36733c2defef"
  },
  {
    "url": "task/2021514.html",
    "revision": "45a9cf660e70892c4fd3f06b78c60eff"
  },
  {
    "url": "task/2021515.html",
    "revision": "40232341f5d7bed4e8d73fb3e57a6d27"
  },
  {
    "url": "task/2021518.html",
    "revision": "790ae4bfaa3d7f63b959beb3e9343b02"
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
