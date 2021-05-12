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
    "revision": "2c15f788b4e5b73f155d4e7f5d1923d2"
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
    "url": "assets/js/38.17afe94c.js",
    "revision": "c088c84d62373cf063ccbc29ebf14884"
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
    "url": "assets/js/app.2a1527b5.js",
    "revision": "de58abc7aa0445b61a0621ce7e7678d8"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "bfcfdbf92d2a8fb1bfb3f1b093c170cb"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "303f14030843db1341db784d05342806"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "4edcc1d6a64c9d72478738e449a28675"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "1bd73ee784e0a8bc9565f7ea007ba7e2"
  },
  {
    "url": "book/index.html",
    "revision": "170776ca163b6e5b743a49fe846d9a75"
  },
  {
    "url": "index.html",
    "revision": "74b9aa35021f83faa52c79ebc4f560d4"
  },
  {
    "url": "memo/memo.html",
    "revision": "191eb1c7f4a7d2ca20f6255ef2dacf50"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "cccdb3b2eda54f93a47c6ca762c21914"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "51d58159fd06d0b3f1568321b1cfd0b9"
  },
  {
    "url": "study/english/words.html",
    "revision": "580580354ed101e53aa513879bdc52dd"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "1ab2eefbf4a95fe492b39e8c8824b41f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "eeca9a1857a383465794e939f5ab6ad1"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ab857ebfee009e8cb2941c05cd62cee1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "2d041c504ef265f3bd75578484f8fef8"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "428ed56ec15dea958444d9d0e91fcda4"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "5f6cfcf55ec4e9cbe9910ad7ffde5343"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "595d38c3339380c7cfd0dca43e011bce"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "036665d3e5b7f0b139579add2d22e98c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "3527f33bd565c58c1a927a6747a65a8f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7319a0b895d818975a8a9c73dd4a1aae"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "0a9c0486b732bead444842644514f48a"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "44b5514f4d7e781feb9c7fe80475b836"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "af6be81b5a261ae3acccc271c8c41886"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "9251db9cd067d6c6560c17aadb4ce7c8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c5bcb58ea4f69bf111c7f245bf5ea59c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e9e15e1d40a5f1189335e95313dc1dcd"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "45e97a9b45e1cc72a1de11d20aeaca8a"
  },
  {
    "url": "task/2021511.html",
    "revision": "3cc8393d38598a8ffb97a97a9aa90f08"
  },
  {
    "url": "task/index.html",
    "revision": "5ea28b4fe01d5531ef9cf803e79de23f"
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
