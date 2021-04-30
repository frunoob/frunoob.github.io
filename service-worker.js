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
    "revision": "65dc189a5461a1d5c9fb6f1063ba5240"
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
    "url": "assets/js/app.c0a13aa6.js",
    "revision": "5334762b582984a442bd0c04bd21292f"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "b00dd1e8b89f4fa2fb12e6ec3259e4b9"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "55540466e0b2835c34aa2e67b8dcb2cd"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "b84a8b2701560a56a60855def427e873"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "d5ce813ded67c8d44b744a6bb614ebfc"
  },
  {
    "url": "book/index.html",
    "revision": "2efd5ed95312d4d1326b3351907e4bbf"
  },
  {
    "url": "index.html",
    "revision": "e6310100c56200e42b6c86ab3cf79823"
  },
  {
    "url": "memo/memo.html",
    "revision": "5733fb165f5a73b09d05f986d9c64770"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "c2bb218974b10b940e661e2e740ac561"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a6a1b899df1036597146ca65aa125e8c"
  },
  {
    "url": "study/english/words.html",
    "revision": "5dbeb143a2580c582b3627049536ecf5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "afe4b1c230f1d2465df3170dfd71dcbf"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3aa4ff5d0fa635acd301064303d142ed"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d7b03cc7e3b9a901f549277179aad402"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "90aee08de4f0e5fd8e90c95a990deba4"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2780f542abe6c871d5d961daedb34afb"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "e11f39462910b3b7c1e921cd83d5b442"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "31a21d6b6ea4ac1b8dd991f5a95b3830"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "be10bd077b403b081033448313d8901d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "cb216aa1a17e9bebf5b8a084eceb6914"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5e5bd31e0141c220f02a24eb2b4b18b8"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "bd7c3d429dd56b41ce006416e63f61b9"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d2b859d69a94d82bd7d6e10807928598"
  },
  {
    "url": "task/index.html",
    "revision": "2c05a02c8e576a15e9c52b2b2afe80a7"
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
