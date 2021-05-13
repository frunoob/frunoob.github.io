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
    "revision": "5d99e7d348c27f6461c8b7adcaf7848d"
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
    "url": "assets/js/12.3ef00199.js",
    "revision": "55a7edba07073eac85ca49a9a1b6f6b4"
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
    "url": "assets/js/16.eff07386.js",
    "revision": "9f4fb3848ea69d935a8ab84180f0c407"
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
    "url": "assets/js/20.3b1da32c.js",
    "revision": "01552764e67bd319f07e3cbda5a09d3d"
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
    "url": "assets/js/30.d0c1a551.js",
    "revision": "6dab444f037ecb857f7b921183acc67b"
  },
  {
    "url": "assets/js/31.e310b128.js",
    "revision": "f20fc2f9abb6a880ef43439b883fa8d2"
  },
  {
    "url": "assets/js/32.2f8ec7f8.js",
    "revision": "07373102f9ac7832cab87757a0975838"
  },
  {
    "url": "assets/js/33.6d46a7c3.js",
    "revision": "541175039690da8daa63c0860bb48d27"
  },
  {
    "url": "assets/js/34.0f63dbea.js",
    "revision": "99924e09406d21984fdf17d720b03f37"
  },
  {
    "url": "assets/js/35.75a8aadc.js",
    "revision": "0f15857ab0ab8995253dac22ed18081a"
  },
  {
    "url": "assets/js/36.5f08904f.js",
    "revision": "582ca2bae48f0ac82d07ceaf7d0ebef4"
  },
  {
    "url": "assets/js/37.dca0e9ca.js",
    "revision": "7e505d2fb81f8dc75bc370cf0e97ca09"
  },
  {
    "url": "assets/js/38.255ddfda.js",
    "revision": "8111630f3fc355bb2cebceaae0e6eb4e"
  },
  {
    "url": "assets/js/39.b2b832fd.js",
    "revision": "b0c203247a9b47b4c7670d5b44e72c38"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/40.9bbd2418.js",
    "revision": "2602ad2efa0c53186fbdfe3b83e0b589"
  },
  {
    "url": "assets/js/41.2ad81014.js",
    "revision": "f01b1344a22e211d8ee343ff17f01baf"
  },
  {
    "url": "assets/js/5.c57dbbef.js",
    "revision": "535cc74f6149d8f89adec804c7de371d"
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
    "url": "assets/js/9.f64ec11b.js",
    "revision": "d7fb5952c759c08146dc4a0203413e3c"
  },
  {
    "url": "assets/js/app.13d7a543.js",
    "revision": "08bec4453ce7277c07e5afe7b0228fbe"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "eb36eb2aaddc59e934513b3e2ce66f34"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "53cc079beee942ca70b21a7ebbe75061"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "8325961846fa6824433324eda8de50e9"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "bce28f84ac304eff03b5b502d4a9207e"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "b7f541ed2bab3c27d1dfb80fa21f68f0"
  },
  {
    "url": "book/index.html",
    "revision": "d040452793f72137d28bc66aea9de8ec"
  },
  {
    "url": "index.html",
    "revision": "ec4d571f5075198162b0e50dfc6cafd3"
  },
  {
    "url": "memo/memo.html",
    "revision": "7482ca5a546f7387da4d08116dfefd69"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "3577113cd7ef087d42eb2112ba488e92"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c0fa854d851987f4f25e6eac35bff987"
  },
  {
    "url": "study/english/words.html",
    "revision": "04deb6a08f6f3a938a93bcb155bc5a2c"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "0d7ae501aa7db867ec630530986e8096"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "8a89b2d8d20c70d385fdf607faa3df6a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3b603f5af5081724f257a2cdb8e56645"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f767d771269be517f4a28223a3a4c494"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ed3b9f83fe162dbb3d1ec42e839d867c"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "4d7a4000b4da327a1fed3dbb56c0dca9"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "41577fa2096506e7b54e05fc21ae76f1"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ea65c1d8ff839f2d82352f19a4e39ad0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "0e05f1dbd7addeb9acdd9972d10d6d24"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c47794bc75aa44873b26d939214d804c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "c0f044eb0983afcdd42eb3526b32dac8"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "82f93afdf24ec5fc39d7115974baa941"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3cb43c96c2cd73ed73e7f63f79d4562d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b6e09ebad06066d2af57376492067e2e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f723cc95a7883bdfe8d1e89ec0ab43fe"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1a7af3ce60d2abed6cb46f7cf4d2ec15"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "c3dc7ece3f73a1d662c9eae3f9651172"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "90d9a2c28015379bd825390f454cd905"
  },
  {
    "url": "task/2021511.html",
    "revision": "1e11071432125f08b404f854c4f3019c"
  },
  {
    "url": "task/index.html",
    "revision": "69e77b85dc307e3c05824f5600f5d33b"
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
