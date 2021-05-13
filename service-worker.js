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
    "revision": "d508ce3edd87534d70e4c0171fb2f19a"
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
    "url": "assets/js/9.02b209a4.js",
    "revision": "ec3b82f206682e4b37e756bec89e5624"
  },
  {
    "url": "assets/js/app.f7054f52.js",
    "revision": "776e9a7cafc33eb2bf6eaff3daac12e2"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "7fbc3314d4bc35904187c731176ff3f2"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "07e7594465f6badaacfc9a2292a747a4"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "1cb0d5f545d52a46b67b632031eb860f"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "159f67b106e65d9180be6405703600f2"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "04f0eb5dfa00845dcd31008de515eb78"
  },
  {
    "url": "book/index.html",
    "revision": "2eb91340a95e8e6ed0192bfe22df4964"
  },
  {
    "url": "index.html",
    "revision": "2e4d26f9f7f40371564a97b8f5db2278"
  },
  {
    "url": "memo/memo.html",
    "revision": "e3be4500a68faba998a0a9d86978de2d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "f92425a2dfb976a8610cd2e46d24503c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "9d1f6e1c4ed49930c11932b49be4ec71"
  },
  {
    "url": "study/english/words.html",
    "revision": "30794660cd704fbbb119b20a753874f9"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "37f2b940012b21e87f7620bff16a03ae"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "8a5907038952c32b0108554aa4d89741"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d3a8ffafac93dd6228791cda123698be"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f1cd9f362db1f6a9264bd0123c38e8f6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "a66b4482ccf6cf309209abc5bf65fbc3"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "59c31d1657b49a22a5820eeefe70e114"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "16e3e9406c8844002a9212fcc566bb72"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "77da10110218ba978ebed7212fdfe21e"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b2aab66d3c4890aaa0ebcc3c14f6a303"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "72e99633dcb7398ccfe7b1b4d9554aaf"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "6ffc01bfe19cc950ea8b751acd4446b0"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "37f8b46694bd8f09fce8d2dff3ebe0c8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "f28899096a1c0c5971e0d28a799b0dfa"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "bb22094e38f739af3634c100bf20ae27"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "53bfd293e490159c126d800b1397d6c1"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5243e4906030d0463564b30ea20811eb"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d4a827ae319bd4005501f2c0fd157ba5"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6aae32ee334bd050a302bddcddffcf86"
  },
  {
    "url": "task/2021511.html",
    "revision": "298eb835e7256cf6f38ff4ee639f1a9d"
  },
  {
    "url": "task/index.html",
    "revision": "3c377121778e742f2064f16dd5688e77"
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
