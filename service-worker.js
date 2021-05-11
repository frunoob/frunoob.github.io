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
    "revision": "b14e35d25fa21c6044274bf71120135f"
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
    "url": "assets/js/24.23fd1cce.js",
    "revision": "231f3b047df02021c1507f601ca63286"
  },
  {
    "url": "assets/js/25.80e1d13e.js",
    "revision": "91c5cda3a9bfe3263c1fdd08de36ae8c"
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
    "url": "assets/js/36.51aebd05.js",
    "revision": "754a517ddb44218de6a693393bf0ab0c"
  },
  {
    "url": "assets/js/37.7ebd7321.js",
    "revision": "6d0b417cef8bfffac88c4a919736c07b"
  },
  {
    "url": "assets/js/38.d74dedf8.js",
    "revision": "c2ffb06d2f5d7ae445afe84992943f23"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/5.64d19362.js",
    "revision": "be534bde431d6453f87a6f509fdc5a06"
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
    "url": "assets/js/app.9bc32786.js",
    "revision": "57f44646972a4ad17427293c27cd4338"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "b08608c6b3758f71877b684ca87934b0"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "5e2d5f6d6b5fdd47e8062ad0db788856"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "1b06a622fd7304f3d7f707b46281629e"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "ded5997f46d5bfb27528d3eb86aaf1e2"
  },
  {
    "url": "book/index.html",
    "revision": "2edd28d77408d6172388724b5a1a8e17"
  },
  {
    "url": "index.html",
    "revision": "01583508c81ff8293e5891e377d5cdf6"
  },
  {
    "url": "memo/memo.html",
    "revision": "b33b7ba4696f9a977315bef153c7713a"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "cfbab6b59730086b8d0c926a4be3d6b4"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "79c4bc466630294b980a2dbfc3224451"
  },
  {
    "url": "study/english/words.html",
    "revision": "c75e87d7da8eaa5c264e5a07a8e659b7"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "427c9b78b0bb3d923fd3f5faa83f843e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f8891f99334a8177151050d19a3927c1"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4d4ce1a60d85437f59cabc1dc82d3bce"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "99b929e6c21aa26a37f67073d672a735"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7c03b2e7d32b7b5e15c5841c42a4e74b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "a41102045ad5c2024879a253eff68e6f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "54e89266e8c9635ea38cfade8fe9d8ca"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "36a8780c9e869d56261cce31fb7ab69f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "804684393e80653c764c433342076ba9"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "99dc206757da8e5c4f6c2f88e6cad21e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "14947f366d58c37dd6298bbccc020c49"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b3d3838ee5226268d1c70010603e2306"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "236fea65c26ace378218e259552b9337"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "be48ea37caab2f4c7c4def0e37855a09"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "082340421483d0ed2edc0d0e429b46e4"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e6b1c32348debfe808ee6547e6ba365b"
  },
  {
    "url": "task/2021511.html",
    "revision": "112bf4dba7799166b84aada72f80fcb8"
  },
  {
    "url": "task/index.html",
    "revision": "83b2d4d70f29777baa0adfe031aedc19"
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
