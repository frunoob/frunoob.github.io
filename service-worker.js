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
    "revision": "f33f3d279597206abe4223dc3196d9a9"
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
    "url": "assets/js/28.d63b0565.js",
    "revision": "3085e65644437e13e46e381b304b9436"
  },
  {
    "url": "assets/js/29.23bb2796.js",
    "revision": "685efcdb942c7fc9713a5b98ff3939a1"
  },
  {
    "url": "assets/js/3.a5879e3f.js",
    "revision": "f113c9f78cd5b30fcf3415958888b337"
  },
  {
    "url": "assets/js/30.6d2b901d.js",
    "revision": "ab720bb0f471d4a7fae69e6fc6285d0a"
  },
  {
    "url": "assets/js/31.794c9dd6.js",
    "revision": "cdc3f90b7b161db6c5288379ae321858"
  },
  {
    "url": "assets/js/32.4ec89245.js",
    "revision": "d131da54f0ad11983b1cf45205140777"
  },
  {
    "url": "assets/js/33.403e1715.js",
    "revision": "f374b15b7a5fb03769ddfa436c1e2ed0"
  },
  {
    "url": "assets/js/34.90cc8ff6.js",
    "revision": "3fcaba6923977236e2e4a3f71382f0f6"
  },
  {
    "url": "assets/js/35.d886748e.js",
    "revision": "82299761ee519f4a168e1de5a555108b"
  },
  {
    "url": "assets/js/36.339fe2b6.js",
    "revision": "79bedca02a6e80863a9988941c74cd7b"
  },
  {
    "url": "assets/js/37.9264f0a8.js",
    "revision": "499cbf230ef6fe46fd769ac62d24eaa0"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/5.142a628e.js",
    "revision": "c4bcf3e9e5caabec4425befe768d85e8"
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
    "url": "assets/js/app.e8bfbb5e.js",
    "revision": "80b8dfec77c221acc1752ad6fec07060"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "7fad7e7ac1861978ce84baf7eb74a823"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "028bcec4cd1c7895d96a266c966432b4"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "86d8dbc597057e83137adab69cb2a590"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "efdf17b18f541dccdf9dde160dc08300"
  },
  {
    "url": "book/index.html",
    "revision": "8b90e86f7f5a4b84cdfca0d1b51c07b9"
  },
  {
    "url": "index.html",
    "revision": "697543727044b5b46700cffd52e90628"
  },
  {
    "url": "memo/memo.html",
    "revision": "8706eca26fa0ee65ad94d4c505e8e189"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "9fa5a7d558036ce6fcc171c83924c57c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e3524fc8e6d4dec1d06ee6d0b272cabc"
  },
  {
    "url": "study/english/words.html",
    "revision": "32db537485c45fc1acc2a318d8b621ad"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d93d3645e320a14e7be3754e338f8459"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4fd36d07f01c8f9d92defc16a53012a9"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "0d80b0f5a8bc8854006611d6d69ec29e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9c7168bac894b1b472b57bef5dcf33ff"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f2bf4bf7a2bedc4eac25eba2289394fc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9b5b4a55805df2b3e76222f7d74391f5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6372dea238fece9d865a68bf951a125b"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "4ba351b3dc8eb8a243e2896d7b0fc7c4"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e0cbe7a3cab5e5741350955556d87161"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c05ffa8e0eb77ecd9593ff49a93216da"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c1fb56f22d862ee57edcbf2113c58878"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "a9de826c0aa239ea186f53e6b7e68357"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d18f0634f845f2df2a9dd7bed0a1c572"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "e1ac7d1a483dae0adce5fd938ba99812"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "282c49c40a4d808d5d338d63f9573a92"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "3d89d4f99329075a7e3090f35996d6a9"
  },
  {
    "url": "task/index.html",
    "revision": "54c43f2786c81ff65b7d1085ef11e64a"
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
