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
    "revision": "558aad1ce40fa09a3491a1d2bc091d4f"
  },
  {
    "url": "assets/css/0.styles.c4207d0d.css",
    "revision": "8d8335ec1fb9bc0c719776d49fa0009c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9e2136e7.js",
    "revision": "39b4289107f4c236e8637840542172fd"
  },
  {
    "url": "assets/js/11.b6132269.js",
    "revision": "4cbaba08cf76ad6d6069d839dc8d384a"
  },
  {
    "url": "assets/js/12.458c1e69.js",
    "revision": "8005d8ed4381a35956bafc5132b2c804"
  },
  {
    "url": "assets/js/13.9c7ed919.js",
    "revision": "53596d513d97588e6457dc2ab363067c"
  },
  {
    "url": "assets/js/14.8e4c9782.js",
    "revision": "68d2248fece4ef4c36583be70a546b5a"
  },
  {
    "url": "assets/js/15.b00f9ca2.js",
    "revision": "bed8781a061a359e25e9d5d0a181cfc7"
  },
  {
    "url": "assets/js/16.97464f5c.js",
    "revision": "a84206caf410d1cd15d7632c8c166815"
  },
  {
    "url": "assets/js/17.3e6eddb1.js",
    "revision": "d51bcedf22abdbae4b7ca48406cf71bd"
  },
  {
    "url": "assets/js/18.3b56fe68.js",
    "revision": "800a69f166a52877e348339b92062456"
  },
  {
    "url": "assets/js/19.3cf14dc8.js",
    "revision": "4081bf93a60b1fb9eccf9d24703d1d79"
  },
  {
    "url": "assets/js/2.8ae09ef4.js",
    "revision": "cbe9284dec7d8f4cce76198f5c532680"
  },
  {
    "url": "assets/js/20.40dcc7ab.js",
    "revision": "0deda2f95aeac2367fa7ed99a91c11dd"
  },
  {
    "url": "assets/js/21.9bfc3c63.js",
    "revision": "5ef4dad93bb211ece2d5bd14b59fa16c"
  },
  {
    "url": "assets/js/22.415280be.js",
    "revision": "c4be9eb4d9f47daaf8ef1e7ccb44e71e"
  },
  {
    "url": "assets/js/23.0cd00ff5.js",
    "revision": "7c28b8871633c73b823c11730d58af46"
  },
  {
    "url": "assets/js/24.a1a23007.js",
    "revision": "d283f65873a3e6c1a365eb14ec00d1a1"
  },
  {
    "url": "assets/js/25.2e169646.js",
    "revision": "507541d63ae9021af340c66a30a73222"
  },
  {
    "url": "assets/js/26.24e1de6e.js",
    "revision": "cf9542d72dc5a7119ed8c933f6334592"
  },
  {
    "url": "assets/js/27.554db41b.js",
    "revision": "18fc0b3bd6204746d0a742e8755bd839"
  },
  {
    "url": "assets/js/28.b732675f.js",
    "revision": "a82068f6fb012575a328fe43c87a5617"
  },
  {
    "url": "assets/js/29.4aebdb61.js",
    "revision": "8457b6e6126aa5ca8759a060e14c9b6d"
  },
  {
    "url": "assets/js/3.a5879e3f.js",
    "revision": "f113c9f78cd5b30fcf3415958888b337"
  },
  {
    "url": "assets/js/30.e45d2b22.js",
    "revision": "8bb1171c773ed3d2f9f176cb62690dfd"
  },
  {
    "url": "assets/js/31.be4084cc.js",
    "revision": "476a802bd01f8c04f5435bc93272cc00"
  },
  {
    "url": "assets/js/32.fc2baa29.js",
    "revision": "9b80f559b2c3a8ab54911dbf6e8b7724"
  },
  {
    "url": "assets/js/33.da637b88.js",
    "revision": "dc326289852c7b9af2b55287fc5da7ce"
  },
  {
    "url": "assets/js/34.55f300ab.js",
    "revision": "ff271b6a31965ef09050ef997b1f4c1b"
  },
  {
    "url": "assets/js/35.1e718ef7.js",
    "revision": "d47e2206eabbd02415c8950317336beb"
  },
  {
    "url": "assets/js/36.1d07310c.js",
    "revision": "ecdd3e9b2c09aa613a8d71dc7225042b"
  },
  {
    "url": "assets/js/37.1ed153ad.js",
    "revision": "001cbd0eec77ed687b143eb142119889"
  },
  {
    "url": "assets/js/38.af2b4056.js",
    "revision": "cd0fb68fa00bcbc56576aa9d1919bc59"
  },
  {
    "url": "assets/js/39.4c2d5e4e.js",
    "revision": "7958d4e70c19439ead9efc9ab5953c83"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/40.34104a8d.js",
    "revision": "e6d0ae392308bff9e222a94e18c5cd4e"
  },
  {
    "url": "assets/js/5.2e0b2e71.js",
    "revision": "accc44a157ba20d3b3bad6fa7116f594"
  },
  {
    "url": "assets/js/6.95e137c4.js",
    "revision": "500e9913400fdc7b14414f1df7f330b8"
  },
  {
    "url": "assets/js/7.6c0d9008.js",
    "revision": "0f92391f8fb2ee600dd5ecc63c28c2ae"
  },
  {
    "url": "assets/js/8.10c4be3a.js",
    "revision": "1edc541691fea69e99b45d7828990780"
  },
  {
    "url": "assets/js/9.02b209a4.js",
    "revision": "ec3b82f206682e4b37e756bec89e5624"
  },
  {
    "url": "assets/js/app.570a85c7.js",
    "revision": "dfc74a5d8f59fe522edc641255c12eb8"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "79fac1242bcdc698f14384fad240f3b7"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "ba056b91b3e7d0631e5ad083298566b8"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "0a4a68c31ce1af6449596462db580316"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "7d9d245e4437d208f2a29ac7530f3079"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "519369f29ce7bc925332c84a1143345b"
  },
  {
    "url": "book/index.html",
    "revision": "a3ee17b27725b5369a2cdfcc46e9d212"
  },
  {
    "url": "index.html",
    "revision": "a37e73ae31a05b143e50552ff894f44b"
  },
  {
    "url": "memo/memo.html",
    "revision": "a041d3b2b521d1e120e04d872c9fe035"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "fa36f6c820e64a804850193373b8ad7f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c1bd345e3237dbd84ab6b97340acc546"
  },
  {
    "url": "study/english/words.html",
    "revision": "824d807583c2ca56516ad043fe7bc7fc"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4d91140197a2cc7dd86ee7892feb772f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "75c3200c7e82d6226a102a0f70d0afd2"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "51b8589966c65f94e0277d1b4f13a2ba"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "4871bea740b96c1b528dcb49df6658c4"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2e75a142fa6a3f03b54ed8281ca7704e"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "58f7d12d124367b527892930d63d7474"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "fd12b5545a5d2c61fbd48b5fa9344abf"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "0351507bc9121b762bdd2402c1135094"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "9e5b290660232ca8a03e90fbb8a63483"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "2403edcfdb9587b94d10ca6ed1be1c30"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ff530430e080f1fb37599694953228b0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "4a73fbf2f8246cd2c26a7acf865f4eb6"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "9b4bf2c1bbc272e21e5db38115d5bcaa"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "1e86de710f086b0674e2e0540eff679b"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "aae64235a67ab45ccd030b254d27f0b4"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2bd6adb544a6af6c4b534b959c2b5c22"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9c5af99f67fc38dab730a13023edd514"
  },
  {
    "url": "task/2021511.html",
    "revision": "c6d244b92aece017fe8e89aa79143754"
  },
  {
    "url": "task/index.html",
    "revision": "d942354b5b058802849ba467ee981356"
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
