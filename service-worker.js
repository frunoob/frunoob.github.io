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
    "revision": "9aa0779062443df091fd09d78c56b2de"
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
    "url": "assets/js/33.f571fd05.js",
    "revision": "7a775b95df7897d6d9f9d1c17ed50a74"
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
    "url": "assets/js/app.eb5045f5.js",
    "revision": "ec2649c5c37602bf4ee463c3784a462e"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "e5475ca093a8dfc82a7df62bd82b436e"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "778986b17a4c2f8dbd888a33224c7140"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "159ed6ed632075df8902fed557188c0e"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "0620e43bf60c7b4dc1d0bf30ff41e616"
  },
  {
    "url": "book/index.html",
    "revision": "dfe603723cd7fc30ba24f6220ce9f186"
  },
  {
    "url": "index.html",
    "revision": "fef05bfdfd63a40dc122c7f40c985c29"
  },
  {
    "url": "memo/memo.html",
    "revision": "a0d3b0103b77dfb8ede348256f99a273"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "3f7e975bceb7a23b83d8a636847ec84b"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "aec5f32d5ef6c1441d0565b0e432761e"
  },
  {
    "url": "study/english/words.html",
    "revision": "a7106614fe7b89a93aa4539cb082daae"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "08866cbd74348a19e1794679ed3441a2"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "bccc269fb3399cb203dd99a19d0c339a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8c81a013e71e64e4a68db507a53a8bf1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "bf0a0540ad29cb3028ec3f0a08e07cca"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "03d12a591c8bba5ad5349dfc542b7a29"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "8d2ad1c28956dbf1a6f3b6220785ac8a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "bf8685af5829d45a76eadda259435e08"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5b8eb728a43375fbb56734b3c6196a90"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "2c23f5265aea38c53849d4e8a07618b0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7e6b08882deb5c330e80edb2f65baa73"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "dfedb26fabddc64043c3a6a50c723a96"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "bdc65934796f364474c23fba6932d790"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "332a60b10e7222092af799a47d32152f"
  },
  {
    "url": "task/index.html",
    "revision": "fe3f0d5e65d8f962991fbb286af6cec2"
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
