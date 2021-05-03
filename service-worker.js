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
    "revision": "d17e56d7651d02579a4913298dc6f720"
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
    "url": "assets/js/16.906d102a.js",
    "revision": "e4f3a865ddd3ac7c48907bfb047c0466"
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
    "url": "assets/js/24.3263007f.js",
    "revision": "8e7540e672632460ad57be4f32e46cda"
  },
  {
    "url": "assets/js/25.0d449f56.js",
    "revision": "c7811272c7951a3d93b2ccd0763d74c9"
  },
  {
    "url": "assets/js/26.d82ed32d.js",
    "revision": "9fdf9307c0252a0085c458fea28ec956"
  },
  {
    "url": "assets/js/27.2715cb3b.js",
    "revision": "6904464bbfe97d77f72b2a5f84ca1a27"
  },
  {
    "url": "assets/js/28.26527064.js",
    "revision": "4e3ca38c391ab8d365d6fc6fc4686857"
  },
  {
    "url": "assets/js/29.fdd39b96.js",
    "revision": "b9f3af134b92401b91cac2ef799b8d3a"
  },
  {
    "url": "assets/js/3.a5879e3f.js",
    "revision": "f113c9f78cd5b30fcf3415958888b337"
  },
  {
    "url": "assets/js/30.27041443.js",
    "revision": "38ddf78d94f90e189684a4bf59b85c75"
  },
  {
    "url": "assets/js/31.19fd00bf.js",
    "revision": "1662fc94935a8ca4d5467be61fd17239"
  },
  {
    "url": "assets/js/32.403ccd36.js",
    "revision": "2d88a42f2ea9faad2294053e4d6be1cf"
  },
  {
    "url": "assets/js/33.2180c63a.js",
    "revision": "77dc53deb711a8a88e98f1ac07174d60"
  },
  {
    "url": "assets/js/34.18e8f89e.js",
    "revision": "009c9c95e87debb91c4c7b7411b32c56"
  },
  {
    "url": "assets/js/35.848575dc.js",
    "revision": "6a5d1adfda02dfc111faffc9355398cf"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/5.98764c26.js",
    "revision": "696e101aadd5fa9ea77c7511507c7746"
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
    "url": "assets/js/8.f2a91cca.js",
    "revision": "632008abe9b54298c5dea99d69c72784"
  },
  {
    "url": "assets/js/9.02b209a4.js",
    "revision": "ec3b82f206682e4b37e756bec89e5624"
  },
  {
    "url": "assets/js/app.b924a8ae.js",
    "revision": "ca9105795e3127d291c3d5903f5adad5"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "1c5b8b25a9c687ae2d68508b0fe5dde3"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "6876cf4905bbd71f609aad31d776c258"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "7929be5e5b43d142bdd65ab104cd01d2"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "e3f8dd9b25711d82535824a6a5631a3f"
  },
  {
    "url": "book/index.html",
    "revision": "03aa380eeb0d6717e4205dbd05fab59b"
  },
  {
    "url": "index.html",
    "revision": "d6b10583d049d5a5f91bd257416fe909"
  },
  {
    "url": "memo/memo.html",
    "revision": "3d2f7fad5a9fc718ed91489eec614229"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "87b114a977aa9a98520e5a4bcd2787af"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "2ca7fe09b4ea76b26ec37902fd527c67"
  },
  {
    "url": "study/english/words.html",
    "revision": "12c98b8efcf3a5ca8f021b633be5f01e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "57c94c2417ca6d806cd451aeeb91b88b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c309643d745911dc09661ebbba68b3a5"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "9669502a14dab904ce2df34357f93cd0"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a5f9a71256418edf24c102dcaeb7d25b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "96a655937f129ae85d883148e44448f2"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f1f0568578f90ef16d037109cb3fc27b"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "0f6cddd99cdb89650e535a28a2a75745"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "3b30154a54e3dd2aa4516d054c0c0355"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "17e34ec1bcf7f04864bd8e117e1d9959"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "92a4bf0cc012570c467c8bdf33b7598b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "532fe63e430515deb677cb0153ce977f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "fafd48492ae31c1ffb1d2d75279ff57c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "84ca62c86fc524b46e5c306479fbbc65"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e70477ac5fa99498c140cfb082c3e508"
  },
  {
    "url": "task/index.html",
    "revision": "e2cd15b9b1b94dd68795e9101b6ccf4f"
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
