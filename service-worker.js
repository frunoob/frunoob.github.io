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
    "revision": "430023374eeef465c336ec1690046a9a"
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
    "url": "assets/js/11.f774d609.js",
    "revision": "d39fbce07f99df1c1295375943a0a5ea"
  },
  {
    "url": "assets/js/12.7d1fa54f.js",
    "revision": "e932bd780e713ede79c3b9bfb2180dcd"
  },
  {
    "url": "assets/js/13.11505b5b.js",
    "revision": "113d50cbac161b3384294fd6d1ba06c6"
  },
  {
    "url": "assets/js/14.5de2b240.js",
    "revision": "facc8eaa634635aa3cde59858822a52c"
  },
  {
    "url": "assets/js/15.7a49e2e8.js",
    "revision": "4ae749e003557d6887e9a6d10f024731"
  },
  {
    "url": "assets/js/16.f1562b9f.js",
    "revision": "aa3802be5fccc7b9810f4bb8a5cace9c"
  },
  {
    "url": "assets/js/17.c240c86c.js",
    "revision": "da37eb8c04a98a96e05df366bd28cf8d"
  },
  {
    "url": "assets/js/18.edd647de.js",
    "revision": "5b9832f1f4bac57d65c85d0934d7542c"
  },
  {
    "url": "assets/js/19.18f97307.js",
    "revision": "cf3a3959f69ce42ee51aee442ac878dc"
  },
  {
    "url": "assets/js/2.8ae09ef4.js",
    "revision": "cbe9284dec7d8f4cce76198f5c532680"
  },
  {
    "url": "assets/js/20.7180cb57.js",
    "revision": "ff3472353395ffb171377036493e33bd"
  },
  {
    "url": "assets/js/21.0589ab68.js",
    "revision": "2d238b8f83b3f5946502b0de02e377ff"
  },
  {
    "url": "assets/js/22.d4af73fb.js",
    "revision": "c048346ca8773aa702057d90412f8263"
  },
  {
    "url": "assets/js/23.3307e5cf.js",
    "revision": "06e5783f2739e75e84a5acad646c4fea"
  },
  {
    "url": "assets/js/24.8e049274.js",
    "revision": "eca386f9ae3ec24035d465e5bdfd845d"
  },
  {
    "url": "assets/js/25.a1b98371.js",
    "revision": "1634f33986e167e1e02bc79fb66106c0"
  },
  {
    "url": "assets/js/26.bf8b6e29.js",
    "revision": "2f8b8b3db0964717e113b8a5c626a605"
  },
  {
    "url": "assets/js/27.0ba4f396.js",
    "revision": "90902b3ef62c39185d90c357da53dee9"
  },
  {
    "url": "assets/js/28.c5576e94.js",
    "revision": "eb8bee6f1498f4d02bae0362d70cbd3a"
  },
  {
    "url": "assets/js/29.c4aaba61.js",
    "revision": "361e7e31a78ed0564af5ddd46df71bee"
  },
  {
    "url": "assets/js/3.a5879e3f.js",
    "revision": "f113c9f78cd5b30fcf3415958888b337"
  },
  {
    "url": "assets/js/30.1c92a152.js",
    "revision": "277c896767233af2c0973033865308b7"
  },
  {
    "url": "assets/js/31.822a69e1.js",
    "revision": "d5f2be7549131f003ee3c40e1b75977e"
  },
  {
    "url": "assets/js/32.90bd0c9c.js",
    "revision": "95f29443eb0e2ef55a6f843e09d9a3f4"
  },
  {
    "url": "assets/js/33.446da60a.js",
    "revision": "4bcc9cb631e816ca229d950617922bdc"
  },
  {
    "url": "assets/js/34.6b9a5d62.js",
    "revision": "94117d53b1d54ae40fb024b4dbfdcc9c"
  },
  {
    "url": "assets/js/35.9843eea7.js",
    "revision": "c800397a9654e64b35049b22314d762e"
  },
  {
    "url": "assets/js/36.1ac6300e.js",
    "revision": "6861544592c4b10dfb56797de02316c4"
  },
  {
    "url": "assets/js/37.7afb77ef.js",
    "revision": "372ceca803ad579b5defdcc369737a28"
  },
  {
    "url": "assets/js/38.83da2916.js",
    "revision": "946a22206a7c23463b58e6c8746b3a91"
  },
  {
    "url": "assets/js/39.0026e6fc.js",
    "revision": "981867911b733a4e306160a6a56efcd3"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/5.83aaa0cb.js",
    "revision": "e6af1801c72f2cafbaa3fb989fdcd9f6"
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
    "url": "assets/js/app.83460c65.js",
    "revision": "26e18f129389a341096c7e956e8accc3"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "e1d3f6dd80c4ffdf2baa7b1e460c6b96"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "be71df1d975dfd07356e2c2d53db331e"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "643247853d807e85fd0354cce0319b57"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "beccbbc674475b420234531f5c7bd3e1"
  },
  {
    "url": "book/index.html",
    "revision": "ed0b3865e5df36b03c738f555ae17d53"
  },
  {
    "url": "index.html",
    "revision": "54dfb3983cd2489fce62fc1cfbef1599"
  },
  {
    "url": "memo/memo.html",
    "revision": "10869dd17dcfda0847157970d434e782"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "8de4845e57d0c2ac9f144728d3ce5ec5"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "42c2ca3f095153720d5e0f375196e74b"
  },
  {
    "url": "study/english/words.html",
    "revision": "585fd9733ca5bf157a620fc7bad70505"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "15f3504dedaab2f11a048754d9ab71eb"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a545f457e3317d9bf51ea3f408fb6ccc"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "79c37bc4419db7eea3493e80632ce0f4"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0371b8992428ad5e04353a2c5282b80a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f9d058af77f188b567b24a7c95ef4d78"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7a96c99a053d443123ef4d81b49c53fc"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "1196ff1efa437a0e04ebebdf40e2119f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d26fbef7f18f60fa66ae9137f1a6f88b"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ba4fd743f1957f4f705573cd5df74bf6"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "09da40d5775bcfd8dbc4081be06afe35"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "241deff29712033808420a78fce5a648"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "997d73b60127d3ee85aa8cf5570c26da"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "6ee2f67526af69fb95435974ca1eb3bd"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5e1a356ec6c14c3d043ae47a87620d10"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "2f82cae5a50dd0fa7989baae744fc1c9"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "7d4539c417105bc7ddb92eeb340709a9"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "382dfd37ab0c93bb48a7c21fca66b739"
  },
  {
    "url": "task/2021511.html",
    "revision": "51c4a423fc1e18cf76470045f1b15c84"
  },
  {
    "url": "task/index.html",
    "revision": "6dc7a20595b8794289a8b6323cdbee0e"
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
