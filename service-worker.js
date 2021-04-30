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
    "revision": "70b5d1baa53197fb2d47fdd6663e7be6"
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
    "url": "assets/js/11.955836f4.js",
    "revision": "3585fa6da585c4b20c2f59f65d72891f"
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
    "url": "assets/js/20.282fda10.js",
    "revision": "32eb31c6fd070598ea6948ec7a1d9b09"
  },
  {
    "url": "assets/js/21.0589ab68.js",
    "revision": "2d238b8f83b3f5946502b0de02e377ff"
  },
  {
    "url": "assets/js/22.bb48a049.js",
    "revision": "21414e4aa8bed1a6174e4d9b3ffa44ed"
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
    "url": "assets/js/26.f61ea9a6.js",
    "revision": "75ec349a7d7ca131842d882243bbee94"
  },
  {
    "url": "assets/js/27.9f61a753.js",
    "revision": "126255c006907435e27a8b62ea0463ac"
  },
  {
    "url": "assets/js/28.351f5b95.js",
    "revision": "3f626dbbde8e52829c887acde824d080"
  },
  {
    "url": "assets/js/29.d3367a96.js",
    "revision": "67fd1529d0c31d1fdcf7291260930912"
  },
  {
    "url": "assets/js/3.a5879e3f.js",
    "revision": "f113c9f78cd5b30fcf3415958888b337"
  },
  {
    "url": "assets/js/30.ed147695.js",
    "revision": "8e1b3e50a29b6601661adae95d37fd3f"
  },
  {
    "url": "assets/js/31.c939e1bb.js",
    "revision": "61da40384d9a39940ed3e6cbc982b848"
  },
  {
    "url": "assets/js/32.428932bb.js",
    "revision": "eef624b2bfe49b583ca149464614b26a"
  },
  {
    "url": "assets/js/33.558fbb33.js",
    "revision": "b908097b19c8594c2e960614027c7890"
  },
  {
    "url": "assets/js/34.18c8bd4d.js",
    "revision": "49d89005a817f556c25cee037439864d"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/5.45fe9f01.js",
    "revision": "2d021499314ea83ef09410fea5fd8355"
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
    "url": "assets/js/app.2f208de5.js",
    "revision": "fc4f53a4f2c9a3d1841ffc4518d8a219"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "185c7d4f055f5d1eaf89e7ac49a4c6d0"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "9ba627b6322ac64c08ec050504ea9dd2"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "08a7e38dd1e7392363dd3b11a7521695"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "3582d21c68f5d1e5a84eb78aab73509a"
  },
  {
    "url": "book/index.html",
    "revision": "4a5926fbbfd21a59a6f5e2a7a3d4ef01"
  },
  {
    "url": "index.html",
    "revision": "55f84e8019ff60b2e3c91fe4a760201a"
  },
  {
    "url": "memo/memo.html",
    "revision": "d91ed984b252809c4dbcbedca2362727"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "895bc11399b45d33c7d50d53d99756fc"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "4eade84e4b5391d6e960bd7b9f0c4541"
  },
  {
    "url": "study/english/words.html",
    "revision": "331b46a67445bb590bcc310fe50acc6f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "091789e3c0e1dad0dfffb6cb1f32b722"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3629d9e8cbfb87b95114d73a23c1aa23"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ba8c86e17bfb4573f17f114454390ef4"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "76d23b14eecd50d6a20da82b02131d93"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "07ef44c3d5319ed15e923e17501659cd"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "70978986839b2673c421538bfb3a501a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8eac129f41f282565339134cbbda3c96"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "4c18bb953a72fe5dbc6b0b8c96ed0b23"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "6d50ccaab96699e7482283ff6db77ba0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "fe22449fb65fc798206014bae9ae93d4"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "814fceb26d9e5053119ede44b05653bc"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d49b638011acfadec99bc24996ed2f2a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f0cb872ad0302a92e2bdfbaac972f7c5"
  },
  {
    "url": "task/index.html",
    "revision": "dd7bf2d488167f5c93927a54384912c2"
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
