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
    "revision": "1150e8a50dad01ddc912e444432d79af"
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
    "url": "assets/js/16.feec6be0.js",
    "revision": "8fae4cedca595d958b0e7fffd445d1d8"
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
    "url": "assets/js/app.a58e4f1b.js",
    "revision": "77bbd15314b4442664866e5ed3ca22fb"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "e982b64a9136393ce736c55117e674c4"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "b3082a5d2e5d3c7c664de91032595a13"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "d995c81a212b2a6cf24b94b0cf87da84"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "4ddba0988522bcde1cc84f61ec81adc8"
  },
  {
    "url": "book/index.html",
    "revision": "a6a3a1fc417118267b53e3a21c1d4cc4"
  },
  {
    "url": "index.html",
    "revision": "7dbf9ce1c8c725a72b34d3e6324895d6"
  },
  {
    "url": "memo/memo.html",
    "revision": "9db29f4a0e570e4587605d81fa9cffb9"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "7b49a7852473ecaca5f20baeccc1624f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6f78cacb89079358b99a3901ff4e1e61"
  },
  {
    "url": "study/english/words.html",
    "revision": "0cd9b2e99ef62d787c3a7101dda5a8dc"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "83bd6625442cb60825e6457cae8355dc"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "1a2134243e15059a1766b5d0273e22d2"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "1751eb3b70b21e4c70f6e050a4291bdc"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b9a6d4d29d39df27fccdf23779fc26d5"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "8241a864a9fafcb64fe65f5975d6fc82"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "caaec33aecf1dc2f588a804ccaf4d9e8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "564991f78848fd0d6d5f57da74d30cfa"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "5703f7a01bffbde6ccdebb7861163580"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "812d889c5661004ec0f4a947c3599b4a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "0c9781ab42c97b9b1983c4d0eaf0f9ee"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e0fadb27c1091d0700cd1ddde5703c7f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "98dc7c53c7113dcfe129221ac31f7931"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "311afd8006cb89adb46e9c7a1cb26836"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "6c9166d4269e14cdb22a8162b102f701"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0f0d49246b71b46d88090b5e0cdd972b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "eb7bc1e9e3dd320315c0044a6a5fe96f"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f2488c203797f31b2bd0763c77ee5d38"
  },
  {
    "url": "task/2021511.html",
    "revision": "78131e5d30eec68df3ae47385910889b"
  },
  {
    "url": "task/index.html",
    "revision": "674dcab040b09cbf512aaab61a27abe7"
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
