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
    "revision": "d687f7b24c2c9a11bbbcecbb276be7ce"
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
    "url": "assets/js/app.306ce0ba.js",
    "revision": "5dd429f80c120c2d2de9ee8838b05ef4"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "e6d11804338886ab0b85deeec8a94f87"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "03ee32eb6dada5a74ed66ee3b572feba"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "661003a13ff93d08c5de2604fd9e9955"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "349f56434d2a300f72a5150bb5329949"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "fd89678936281317c7e076c90252085e"
  },
  {
    "url": "book/index.html",
    "revision": "8bc05bb25f4224873990dbf4866bf4ad"
  },
  {
    "url": "index.html",
    "revision": "fca9c1549e8783e4609323974091d115"
  },
  {
    "url": "memo/memo.html",
    "revision": "27eb4b59b61a9bdbf08de17f7c4654c0"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "8fb62c4a92c7952b13de323729a04b51"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "99d6f5b4a96cedd4ccb02ec3eb57e035"
  },
  {
    "url": "study/english/words.html",
    "revision": "d7881b5516b179e78501a851db8bc3ca"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "6c9356b523e7eda4323e67456cee6a5b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d86281b59d4945a3eb877affdd905eb0"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5eefe343165e8c9c8d4a9325fbb07632"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "66a45087f348554b39a35581b1d8defc"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d2c72fae5cc98cade69e809daeb00eb5"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "c3eac8390f2bdaa8352b3c693a62bb44"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5a1eff0d449101320b3a3dfbee3a4d98"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "41e7e5bdfccd0576a5e2a38fe6c13d7d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "49d85c7ac89697a8eb1c80a0b9f1fc83"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d44ed0a545c0f2476b05ca841edfc85d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "16f15da921b67cd1b2861cc478a5a585"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "0c796da2c7d7d57bc08e7811fb909864"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "841e019e6bf61c7cafa99aa3dddf9cb2"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "24460aa7e28d5381ddf5ebc760a9f06c"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "89155dde8377c3609830c069ad829084"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6ec2cc4a4883cac8c13fe17568761541"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0afc3ade6eb70955516fc24d6a979bc0"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "304f4c5c6adf46d064524e60129af163"
  },
  {
    "url": "task/2021511.html",
    "revision": "f579c85fe465f03a4bcc7851ea6852f9"
  },
  {
    "url": "task/index.html",
    "revision": "9796d7a7876e48b9e49e400f7abc35dc"
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
