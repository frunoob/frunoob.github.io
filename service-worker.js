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
    "revision": "810669facacc49f5e79e3e1b11e39df2"
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
    "url": "assets/js/app.67df1cc6.js",
    "revision": "3bfeef136691c6f3f2eba954c668a05f"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "8eed751fcb3e5f6741e14ff40dabf277"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "c91b58053e2579d93c46e369b37de584"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "8a4a79c7b8369d6eec44e9468ef6dac0"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "59e250cb0773f7222cf208c8af04a8ec"
  },
  {
    "url": "book/index.html",
    "revision": "ccf43a93c6cf41ba74657b6d9071dd8c"
  },
  {
    "url": "index.html",
    "revision": "1591a005c422b77826e6ae74a16536ce"
  },
  {
    "url": "memo/memo.html",
    "revision": "151dd017eb9e101cc5de34e8b708c2a2"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ee2efafe63c0f2705527e1c2a2ed9214"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "b653b8662f467aea054f5d4153f20f15"
  },
  {
    "url": "study/english/words.html",
    "revision": "acc337234257d5d93b638fec29de0074"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "9fe28d26503c2d8259094070f0fa744b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "ab6b37a7bcd3ef855100d05fb8067725"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "caaa60952d588d48fbbd795015aae106"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7edc3d71b2f7410038541c2a46fd5172"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "682d44a5717e3f8a56fc2555b12cd571"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "195e9519115895c2867131b392b1f9be"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9cb60c331dc1562099fb14d25c3f7307"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "b14ece0f5aee11ed7c4ebc66a53b445e"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "9c7a6be2a1b3eefb95addee4831f74f6"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "03402f8df7328d602f1c8d9c6355e3b1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "fccd3010148d3bfbe690caa6d18f1718"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "342703f0c03b4e4f5cccaca80a2a38ac"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "a4f188fada11ede235c02f356c5fcff1"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "4d7cb927b50c17a000fe332839339d32"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "9267e3c3d29ad646892b90094cd189b3"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "7fc324d7ad6ebb1fe9c50177827aa71f"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "aff60734744543556b2a93cb04d34613"
  },
  {
    "url": "task/2021511.html",
    "revision": "44829677b240928b4340d844f71ff56c"
  },
  {
    "url": "task/index.html",
    "revision": "a7133b971333aad75f3457748bafe061"
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
