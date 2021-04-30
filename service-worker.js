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
    "revision": "0cbe27d0a06a6cd0d7cecfd250563f74"
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
    "url": "assets/js/11.78ff9f0f.js",
    "revision": "b19071e9195742c731d7eede8a3e1ebe"
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
    "url": "assets/js/26.c9daf40b.js",
    "revision": "f13210af7e258dfcbbb7adfec0590fde"
  },
  {
    "url": "assets/js/27.5c776802.js",
    "revision": "1427069fd042884fb791fe543dcb4b5b"
  },
  {
    "url": "assets/js/28.f2bcd21f.js",
    "revision": "b7c3a7ae441d58893eeabf40361accd5"
  },
  {
    "url": "assets/js/29.ffe1e58e.js",
    "revision": "41158c9d8e992f58a1b6dbea3531d29b"
  },
  {
    "url": "assets/js/3.a5879e3f.js",
    "revision": "f113c9f78cd5b30fcf3415958888b337"
  },
  {
    "url": "assets/js/30.d7707b8d.js",
    "revision": "5ea85a1ad3b0d0f7b94d06bfabb83cf4"
  },
  {
    "url": "assets/js/31.e54d2aa9.js",
    "revision": "93514442f0af965e6e37937bd5cee711"
  },
  {
    "url": "assets/js/32.a1ee0d30.js",
    "revision": "4a49840d67f433f08c0084077ef4bf40"
  },
  {
    "url": "assets/js/33.64b371df.js",
    "revision": "736d5af2c4de0cd0b9fc89cabbdeceb4"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/5.6484368d.js",
    "revision": "7e4d97bb6fa4d2f34b921525f60354c7"
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
    "url": "assets/js/app.e58122b0.js",
    "revision": "5a967c64e87becd50ccf8222ecea1168"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "8b29790ee4fa327d203a0407ef3733a0"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "c9468c568f6b2ad5fb83e6ac7d540672"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "7da265b58c06cec2119ab8418f54fb27"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "c1182664cec6b0997419af8c0297209b"
  },
  {
    "url": "book/index.html",
    "revision": "ce3ba1a5b7ef1e0f22a55dac82a3f784"
  },
  {
    "url": "index.html",
    "revision": "cced3c57318e3ef757a6e5943bd2b9bb"
  },
  {
    "url": "memo/memo.html",
    "revision": "33586d3579c61f83279610dcabf44246"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "27e23d90392c82a0fab4fb608fb1f595"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "8627aed79160da86d5da5916c292edde"
  },
  {
    "url": "study/english/words.html",
    "revision": "9bac8d2ef503df04a825809b50a4f908"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "561d8349e49f6577a4ed3ee8f77dd6b5"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "ecd11f1ee07c62117150c9e3691ceb43"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "81e3100b7cf7791bb9558ef9a03b05a2"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "11fa31c466e71a9acf9d1bfcf582fc28"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "dd647339e4b205a57cdaf1b927ea28a8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "133417ec91e1fca564a50c36971d60fd"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c34275541b6cc5101dea0cbd2445e17c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "5bbebe0ddefc4207af258e4a55482726"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "84d06a8d637f4d935f7e6ec444dd7ed0"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "7bf45f79c4196812ef8766e942da92c7"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "35308da990b0f1eab100197900c51b91"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6e471f5da021a78c85d5f7bf72a4f73b"
  },
  {
    "url": "task/index.html",
    "revision": "771c940f410b2eb070cd8647a8f30e3c"
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
