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
    "revision": "41cd280675cd5545ab0577b91f9384ac"
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
    "url": "assets/js/26.d82ed32d.js",
    "revision": "9fdf9307c0252a0085c458fea28ec956"
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
    "url": "assets/js/app.1a80f408.js",
    "revision": "29b846ab5a35b1f8b44e6cc069da4f22"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "8554bbfdce0bdd8e6fd1dacda4924322"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "72db7432a01b47111cc5ffac28707421"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "19a3303bc3792588bee76a58b290a1f6"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "5bd2c122a90d3ed0d419e5ed06579dcc"
  },
  {
    "url": "book/index.html",
    "revision": "0b61f4c4fb0a79093a0266d416ccf677"
  },
  {
    "url": "index.html",
    "revision": "2182a440ca8b6c7550ad3f4d9af73e3c"
  },
  {
    "url": "memo/memo.html",
    "revision": "6748e199a17e95800a9c141fea9b7713"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ba2a5c08afadc5b2a2ee8bf7111e53ee"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "2283e31615b714f79e2885c863b43fd9"
  },
  {
    "url": "study/english/words.html",
    "revision": "48939ea33dcba3b78eec5d32d0fcc218"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "88d766ebc4d193355da7b2bfe0128ae3"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "9a8189b4c2b3cb7dea56ea1649000a77"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f383c47c4037eb96b550b13eaa6f3c89"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "851252fff1f0db92001379cf69660547"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "66268918d288ac812d55e04da6cc836f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6542b57c328eeb7dd792c8c7acb22d9e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "29beaf9f3cd66ea20583ba153e6a71e6"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "bf1cdfcdcb4862ac4a08bed889bc26c9"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "2cda302fd4e46619c1981e655579846c"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "8223727f8a307b36bfad0c895b7f1b2c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "da6ea33e44b25da39db88b38afa7fadf"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ffd704412356ba5526f86a5d3a19be77"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "05bae7e371490d3e25cd06052a3b6286"
  },
  {
    "url": "task/index.html",
    "revision": "d40542a254ac6e1e64177ff04f0e55a5"
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
