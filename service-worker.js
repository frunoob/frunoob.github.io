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
    "revision": "a206c0488dbb7cd9877a8fde4fc2614a"
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
    "url": "assets/js/16.4d023011.js",
    "revision": "bb5e8660150ea893465ba93c160ec780"
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
    "url": "assets/js/28.655f6370.js",
    "revision": "37291486bd3de94c18ad61a9c9858b9b"
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
    "url": "assets/js/app.9b2fd571.js",
    "revision": "8d2dfbff016a308da552a69a7fcc573c"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "bce6c55d4129ada7eda1670aeee6e2df"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "340088ee7b4354d44fe50936873a7960"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "9d9fc4e715f4205c7504af8bfc2ba12c"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "575b8f0f4ecab9c4506627d5eceba5f4"
  },
  {
    "url": "book/index.html",
    "revision": "4f7bf11af582eb88d36c579d443a0cd4"
  },
  {
    "url": "index.html",
    "revision": "229401dea4f5c750e147ba0443b9811e"
  },
  {
    "url": "memo/memo.html",
    "revision": "6702b6dc75a622839e9d624490590811"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ee6fbf4700a54dd9b1c65d5610f73dfe"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "4e74fdd44354813d0407ad86fb05005a"
  },
  {
    "url": "study/english/words.html",
    "revision": "b154676a0351bec168fd381ea8713213"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "047815661ae0527096e82bb90bab2795"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "314c27fddd73fb229c3c368e16881b22"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "9097c36ae5b0b1ea1f5d4e9cd733083a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9602e2a7007eddb5eae599c200763a12"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "e19959d5b2dc68e9f51e6b2a4e4f8a98"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "5f6aa7de9a22f586f59f998ae11f3496"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "7666bd24a23c151f5107804f888395cd"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "cb6e06a415c1cb11a472be775f698e6e"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "17eea929e28189b358e34e17b121f698"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "c9806c8037eff75bef46f7d8b607cb48"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8822fd7b89d8a9b63397f698df75f636"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e7b1921b6b5044e23a19e077fe8e6429"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "82cf7d6df9dadd6ae14e8b7900bdf610"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "72d140086d5cc3f4e169058ba10e6db5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "30b47c11ac285808ddf001ac901e2a62"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "356c6c5a627e724becf38ee207da07f7"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "aae9ab061882c4e4e878e5aa23590995"
  },
  {
    "url": "task/2021511.html",
    "revision": "e523c05bce8c877efc0504bad827a1f3"
  },
  {
    "url": "task/index.html",
    "revision": "8c2d381a8b26c245f63a69404a170944"
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
