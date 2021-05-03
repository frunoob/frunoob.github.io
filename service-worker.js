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
    "revision": "44c2a963717b49139a689709acbd4f0c"
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
    "url": "assets/js/15.066e105b.js",
    "revision": "f3f642d132dfcd53e69edb6df78acb72"
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
    "url": "assets/js/app.edf6650e.js",
    "revision": "1039b11370f737ec8a559d788715e189"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "41e5fe11775f40c7e9a230584138ec91"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "836bbc54e44bc04d52671e3f31c5537c"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "66b042b72304e5a80f34fb455e431cb4"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "21d2ee1e09a027a56de2def674fbc70d"
  },
  {
    "url": "book/index.html",
    "revision": "6d79f8d052996fd03b19b66c008933bc"
  },
  {
    "url": "index.html",
    "revision": "4e303014fc8d017e56fbc844c3fc9c72"
  },
  {
    "url": "memo/memo.html",
    "revision": "749f5b7c8f13227634c414655870e949"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "50639442372ae498da2c9dbe3148be70"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "29941314fbbb628e9926a3052018881f"
  },
  {
    "url": "study/english/words.html",
    "revision": "923b2a0874080d4cadfc69357bfb2257"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d7bb0efa4759e01ba6c033a499f8a667"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4655f2249641d5a29198d8b27a485e40"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "7753280fcc3c6b6a11f5e6beb07812aa"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d718f296da987f8f5471f92db16676e3"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7ceac18dd7a360b7e6576af73125e2a4"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f7edb466f847a1e5cf09c84e62382deb"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "83e6edd41eec447bfb924cec23d042f8"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7813d8ab7083bec327c7b5eee1874b25"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "077bae0d5644c30da1b3ba1f75c01835"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "61e519f3eb19663910b0ec3f5c87fc9f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2ac342095a7e0ae00df296451f6d3ec9"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3060f40cfae7c6d88ba9b8d9d01aad5e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8d8a0cc7bca93e773346f8bf8bf908e7"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "020ef47d4f4ea3b49e6252701f5bc073"
  },
  {
    "url": "task/index.html",
    "revision": "44e88f5a9a53ae2211223f6c3c88e9a3"
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
