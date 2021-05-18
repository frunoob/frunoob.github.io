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
    "revision": "f8192fb0ba8acdb48d2e1dedd1a132c9"
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
    "url": "assets/js/app.3384c802.js",
    "revision": "92fbe73ecea6bb94f6fcb856831e7f9c"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "c34828a71294f8ecbe943d6cb9b75e50"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "be51b08f2656dd72973b8961af302785"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "b9ab85888bd768ea533a19c524bba180"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "cf59d15766d90699c186a377ac58ee6c"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "4cda8282ffd4fed83af79bfe93870ba4"
  },
  {
    "url": "book/index.html",
    "revision": "1ae793a5b63f64ad15e425fb9fbd43f7"
  },
  {
    "url": "index.html",
    "revision": "d2a09a4433e62ee19e5f6d6f619034e2"
  },
  {
    "url": "memo/memo.html",
    "revision": "ff65a1b3c5c1473150870a773a250b0a"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "50640ae160ad339a9a3c5e077b1faee6"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "b2916d8bc6ba6ba294303041ed2cd2f1"
  },
  {
    "url": "study/english/words.html",
    "revision": "6badb50b650ca4a280fefec84220b6ec"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "5e6caba4fb6200dd4fd1a5340366e448"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "df120e4936d9dd402cebe1a83da8f994"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "15e0b03bcaed9f39afe1284e2e493b13"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "26aaa536c04f7c22578bee4cada43149"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d786dc5f3038c6feb580efd127338a56"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "07f70d9e1f4f5235a755e02370048deb"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "7296f680c6958b777b05f6e54e9ce84c"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "eb5ba32ae2113498a6fd6cfc68e1c20c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "6149bfa629cec374981433600a38bca4"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "49297a304f60775907ea49615a5d6865"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "3a33c591350ae398c282b55cf2e8ecc3"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "fd4f18cb55c40c1a6bc6c00e87e3ea63"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b65072dad50d3fd4cc090b568e688b2c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "aede39929812db2dd2c642638803be36"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7b069a8c672e208d1133a5b14661f3b0"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "9abc37df2d6159d4e93b63fa1e04f082"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "85a5f1a305ed19e51b702b28ccecf11b"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a8764b9c433ddfd1b753bb9a1177bbeb"
  },
  {
    "url": "task/2021511.html",
    "revision": "7e104691c1a83d5684a1701d394bdeeb"
  },
  {
    "url": "task/2021514.html",
    "revision": "a8055f9ae8c92e7722a96be4dba8a91e"
  },
  {
    "url": "task/2021515.html",
    "revision": "47f48cc181a3a199933f5b139d4ba0e3"
  },
  {
    "url": "task/2021518.html",
    "revision": "40fc62e01ce24c436844d3127d696d8a"
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
