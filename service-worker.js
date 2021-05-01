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
    "revision": "58d0e60b20a24cbbc1ac150c06b9c728"
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
    "url": "assets/js/app.4a437bfa.js",
    "revision": "7b86c563fb21723c6dcc6899714a7c20"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "a37e0c9d85c69a707741aedc32356fe7"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "1b8fe4e95a4a6294f46ff1a30b96780c"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "29a5d64c3e76bb0d0631217e19b53a19"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "07dfa10823b5fb048f0b364705e445a1"
  },
  {
    "url": "book/index.html",
    "revision": "3571987d0bec0ca4518e825cd95277eb"
  },
  {
    "url": "index.html",
    "revision": "73c06aec97ee378855a5c1df10a26747"
  },
  {
    "url": "memo/memo.html",
    "revision": "a74c226f608ffc265badb25fb84db805"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "7f3ccb7be95e815024dc32c4c83b768f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1071e46571022eccf69113ece5ee8b1b"
  },
  {
    "url": "study/english/words.html",
    "revision": "b6aea489aef56f6fdb652f2da0bfc7c7"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "fd3e62b842861217a801b4ce0050097e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "adeeb5ca68d83de0e67da4404d42c0a8"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ef0c2c99aa26c58b358213b1e1c2b654"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f1500dadf76304962aa02fa6b28f12ae"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "6753741875420f74d722a43dc3b8daf3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "640ddd22235dcd8b39ff6bcc39c5cbbb"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "36f6a7f441c2824b72a1ca17942c05a6"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "793b36ca785e848216ff90c34e22822d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "96b77bf8ae2c3d627312c7b2ae81edb2"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "56d68e9eaffb0b42fd081f04e618d328"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b023bb786118a3f3e2c26bb385d23696"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "37815037f040f6baccb4e4b3f75a2de2"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "38877b81f318e6b4ce33a9b2e3b173ac"
  },
  {
    "url": "task/index.html",
    "revision": "c78f34ea8939ac6cbfb7c6c52f3585e0"
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
