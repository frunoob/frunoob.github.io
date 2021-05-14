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
    "revision": "e3b0a7010a9764ea95b1c6f76e8ea61e"
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
    "url": "assets/js/16.9c4b0e3f.js",
    "revision": "2005f31167d0aa8e4fffd30b65c2eb85"
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
    "url": "assets/js/7.5ee95982.js",
    "revision": "eb72637cd5acb2ef2a2eae1dc508b3b7"
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
    "url": "assets/js/app.3b42391c.js",
    "revision": "f0316947b48cc7faf1f1e7108e291749"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "8add682723029e089bf838decf9cfb23"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "5d3cebb9f264702726747d253c22e3bf"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "ccd59bd2ef29f567e18617c0cb819995"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "b5e1d495ed2b057ba2a9406a626a06fa"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "a321b99ebf92251dfdbb7821d367f479"
  },
  {
    "url": "book/index.html",
    "revision": "bb78f1e1cc8f3cbd59a2fc0bd5150f7f"
  },
  {
    "url": "index.html",
    "revision": "167fa699a3c9b890a3864b6584491c08"
  },
  {
    "url": "memo/memo.html",
    "revision": "7f7d4eb45127415a99fa730820f5c4c8"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "1625d0a7082175d6098148a59d9d1f20"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a7b32b6171e62bc6d12841dbcf7c9f6b"
  },
  {
    "url": "study/english/words.html",
    "revision": "41fa35f4c19e735eb6bc03d0b149f08c"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "cbd738caebe27fd6459004a794e49162"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "35a2c8fb4e35b63889dc5a71bdc04d73"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ae2d5a54e78f7b9ea026e14dc99b833f"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "2b340507619e28232effad945abe3b8d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "446fa8583b055b5809ffa58227ecd827"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "bb8ff8a25ed91d4f7cc4b3c980c32c24"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "47ac5384021159299af0b9d0109db9ca"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "2f122400dc9c8a9ffe0a5f08f6ad45d0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "35ed6f8402485d2c378a49e3f40823b1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "3d21a6a6b5b43b09e34a83eef4a3bc88"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "71ee8570f15ad1515ecbf5ce0ddabd0a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "859b6cc9074630dd35adcd27450e42de"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "fe344cf38ce5e02b00746f4f9650258d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "e1ae73193a04293512be75affb523867"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "30bdf49b7739e00ccabe3921666bb69c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b9ed2c4f911ed713ecf46a033bd2758c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "18a15e5f73a9b22dce9164f8fefb83f0"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "16815e45c03238ac330f3a8270305cdb"
  },
  {
    "url": "task/2021511.html",
    "revision": "cc0a6481f3196b6d9b55b93c30c24102"
  },
  {
    "url": "task/2021514.html",
    "revision": "c0caaa1305232ff8bc8416611f2382b6"
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
