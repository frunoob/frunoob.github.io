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
    "revision": "baaa6f17286b1eac587496da974752cc"
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
    "url": "assets/js/40.ee9bfbb6.js",
    "revision": "c7334617f619634d412339f4a2c16820"
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
    "url": "assets/js/app.9199c356.js",
    "revision": "8c9873d427d950432c934ccbaff759e7"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "568883d9192ae78928a06343cf885bfd"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "48038d425294eabbcdfbb0bfbf7e506e"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "2241f6e2666d769d626126101725bbc1"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "963a029ed5395e430f53d7fb2922c6cb"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "f4690c8435c0a6cbd7e41a8b6b215531"
  },
  {
    "url": "book/index.html",
    "revision": "b1eeafab9315614ef77eeb27646ba7c4"
  },
  {
    "url": "index.html",
    "revision": "161c83f40a2f6240b323e5255701ceb5"
  },
  {
    "url": "memo/memo.html",
    "revision": "681f018395b00c8695c77f8ae94a372d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "b2706405c3db35081de9a2068fa58d43"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "f15701bbaf86cbd0bb3847481b4a354c"
  },
  {
    "url": "study/english/words.html",
    "revision": "4b4586e2c9e056a51567ed263beb8c2a"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "ec52d19ae6a86021ac3ad002e7ccd4b5"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "183ff2e06f896415c8b8ca4b7d86def9"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8cc44717f7bc6137ecc92cf9a83e5ff2"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e11398411150d4912aec160d2cbe8a73"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "851ca8494259932e62c6402549625c0a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "55337177f3b0fea24aa1ce7569928806"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9e7aa6bef06e32c28c0e4982aceba1c4"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c966fe417add56999e36723a4fc5d161"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "6949a27f582a9527af17f5295f83c44b"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "34c9c9e5c7eb048249a48ae1503c637b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "02b5cfdcd461b0b617533c5edd799049"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "26353ed3951496b6c9e7e0cefd4cb6bd"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d7bb0ea23d5a35e7dbb1c1b5664259f0"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b7daa327c41295bce87b7c02689c6f39"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7f52e869161b2af5e39705ca7e7ea7b9"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "e9085f18a340765e4b005ef1cef923bc"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9f0eab10f0d11ddb1ca027337b2fbb15"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c0809e0d4a9baf1668fa2c914edf28a1"
  },
  {
    "url": "task/2021511.html",
    "revision": "e497b76ce92744b87522ea768ef7ff6f"
  },
  {
    "url": "task/index.html",
    "revision": "ba2612595ddc9a0e3f81f657dacc18f5"
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
