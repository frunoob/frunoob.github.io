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
    "revision": "b5ef0117e437afc3a409f59ddd5e97de"
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
    "url": "assets/js/app.618ea09e.js",
    "revision": "d34cdf453a20d055da4bf440373c74d7"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "aea0dba0da2cb1c0e660c93e7f4f5ec5"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "64b9e89717c01eec12c39f0c60f0a639"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "e9dd732601878cb66b8547eb5f995207"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "ef14bcce2811857a32a0b72ae44e0501"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "6c5849772db2452e9303f49dd23cf029"
  },
  {
    "url": "book/index.html",
    "revision": "0d3ef1ff7fac0781261f7475a1e6d2fb"
  },
  {
    "url": "index.html",
    "revision": "a9ec75c246000034d82dd5552d398c5e"
  },
  {
    "url": "memo/memo.html",
    "revision": "296f8470c992c60a9de35efa8c013fe7"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "fb22e8ef459a2b1dc7d6f353a5ce3f7a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "57e9a8cecfe501a72cbcd478ea181efd"
  },
  {
    "url": "study/english/words.html",
    "revision": "a83a03ca37ea33538d2db507039e22c6"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "447df59e7e16a26164f8667f2956b4db"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "96465ffcff76cdc3af4d4657c5718f2e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4fd64449e99326429e1cdfb1d8c24250"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d190254a3c05d6de8dea4761f141a4c6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "29c17a5c62615ce693c608e8eb10b8db"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "ab430ea228aec467a5bd5817c2806fbe"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b42b57a190223625f7d17fd877dc6eca"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "53388572ddc759a9b857c83b1033af11"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "23de32b28de2c792f37319b86a9cab59"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "af77246c394f2854ea74d757941884b8"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9971e07c9a9eaf022790104127638226"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "9253b0b6d05efc22148d8f9585ba353d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b22446701305898ef4b23e82c613eace"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "941517ba69d279d7ad79307d9c794123"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5f0870530b1afc2b928cf093ed8763b4"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "2ba459963d5899c71365890983a51ce7"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "4c25e6adfc3d04da531e52dcadafa91e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c63903774159ae4262cff66cba8eac78"
  },
  {
    "url": "task/2021511.html",
    "revision": "e3ba8c4bd7efe5657f9d8f21c8d82c89"
  },
  {
    "url": "task/2021514.html",
    "revision": "32d2d54eca3319c7dc31048042fca474"
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
