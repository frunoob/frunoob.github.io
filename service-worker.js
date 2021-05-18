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
    "revision": "0a7b78ad4f848bc44c5a9dbb464ca704"
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
    "url": "assets/js/24.7aecb6fd.js",
    "revision": "49e9408dd05fae8c99f65f301f6b5662"
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
    "url": "assets/js/42.c2e04bc9.js",
    "revision": "126143e9fc01ccb2b95c6892d3174dd6"
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
    "url": "assets/js/app.41a5af61.js",
    "revision": "df22e31ad00a028e7e2a2ea8ffd54a01"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "1acc0e1cfe1bf6aa791f5e25df1b54d5"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "790d390f2e3293862f562ff1f73bfa30"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "16e53f4b551dcc81f5be842f5ab66890"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "b6f7e7710aeefc7820bebe4da0aada44"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "bc50d91c31e8ed982297e4ff3ccd78fa"
  },
  {
    "url": "book/index.html",
    "revision": "9201c7287d7c054f4b1fc9021489b375"
  },
  {
    "url": "index.html",
    "revision": "b4bd1ba9981ab17b38663c86e1e0246c"
  },
  {
    "url": "memo/memo.html",
    "revision": "7e402704046901e78886a256068d3c4c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "76b8ab59d8d27aa9a32f9d238c0b5293"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6b4811f526cfa09ee8a85366cedafd1c"
  },
  {
    "url": "study/english/words.html",
    "revision": "fea71287321bc4df88fd8366b6aca7ab"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "7ba5cbf353eac5f83bf7e58a50c53a68"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "03fcec0daca1e8f28213eda177132668"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5285ab5ae0019bf604799b69987fdb16"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ff79944387a58cf551b7eb5e27528b09"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "92c70f9dc35aed9542b2b2f60c7511fc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "a24b580189ef3871b30db07cb6dc3bd8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "15ed4aab3554d49a006078f38b743da6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c1aec071b21c954243603fdc7472448c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "df78bcdd08b9b7c2b4b9f9825e4f2e66"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "1906871aca539838b9d01f1808806faa"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "d09b4b233016ef14e9bddfbffb803419"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "cebe9b73aa538f6384ad2b9def00ea45"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "f19e443a993fcd6409b01b20fb052db9"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b29c8af421ac9790789caf3aba4e5195"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "60b4791323957dbbaecd85b0dcad7c9f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "cf122ec436bbe2281b61dc20513605ea"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "c3262fb65b9d510b76596290c5cef651"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2eda6f65f6985a3bcc1547a0f2b07b03"
  },
  {
    "url": "task/2021511.html",
    "revision": "a4617820581b77b7de3d4b7c0f7ed234"
  },
  {
    "url": "task/2021514.html",
    "revision": "b8bec4f374c825a5ecec72b85202dd0c"
  },
  {
    "url": "task/2021515.html",
    "revision": "48a2c6870f2cb702f7d826794c0bfc50"
  },
  {
    "url": "task/2021518.html",
    "revision": "69b7bf9f2ea9e81e192a18a5f830caab"
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
