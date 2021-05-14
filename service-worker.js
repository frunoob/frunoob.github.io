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
    "revision": "93f4a770e121ce2f7ad2f821b4b30b53"
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
    "url": "assets/js/8.7318401b.js",
    "revision": "6a02d97280a7d2ddeb869659ed48744b"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.d479a2ec.js",
    "revision": "451c9858323663328a2f76afa7b5105c"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "acb931833ac08bc08fa00eb65bb560b9"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "fe8494097297595ef593982235110729"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "c87fa2d584e9d5bf74069f6fd7c64b41"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "281f706c3fa254cb1aaa5b1a9d6d0c66"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "951a8b423419d5363d7f0dc2e0053933"
  },
  {
    "url": "book/index.html",
    "revision": "e6b9ad3c6f354156021f5e0e99abeeed"
  },
  {
    "url": "index.html",
    "revision": "0a37d13ab80858196357bbab7fe1b52b"
  },
  {
    "url": "memo/memo.html",
    "revision": "c8d73e2f5cd1974c7de8127d1b046d22"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "50ab86c9ba1f474fc996fd654a2ffff8"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "cc4200a7661bcc712e47b87bf1eb92fe"
  },
  {
    "url": "study/english/words.html",
    "revision": "d204c16ec86b45e438024be56d745457"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "843171d1d716e49fd2202db1f92943ae"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6e2f6e37566ba31526837bbb1f0098a2"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3c6d907b1fbd6e0c417b224f87940cb6"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c90ff9ed8fe64e7b25800f30590e45aa"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d4abff8a983b4a1e849b0364f89520c8"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "4ad21bc0f365a7ed0650608eb4958a2e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "291dfa5d4d23248559c19db10909eefe"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "2f7e39fa321215da61c2e4b7d6a04f12"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "6ff3412168a3a611ca4f2bd163b560f1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e312c4ef930cd70b3e59a15f31c0c02d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4a1e3523acbfd459378993eaa938b641"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "026fc05f4ab7868c4c2bd3fdf8db4ede"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "29a04c84ec0036dfd6f1543aecfa786e"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "a4114f2b776528b18c76bc98137e8941"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "741d7fa3c559193c1e44ff76a01e897e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "fa9467d4279289ccbda997321c0892e2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e707ed6a629b9077ea7e2993f90d4079"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "641bedddf697b32e7248c3097a7aac2e"
  },
  {
    "url": "task/2021511.html",
    "revision": "0bd6e717773078f71083a806e28545af"
  },
  {
    "url": "task/2021514.html",
    "revision": "b5e1c2d816cc3148536376970972d14e"
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
