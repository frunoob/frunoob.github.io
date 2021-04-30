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
    "revision": "a060ba5a1d131685923a44c5740ef25d"
  },
  {
    "url": "assets/css/0.styles.6fb20b37.css",
    "revision": "f11a04385fe61f5582bcc6856cebb1de"
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
    "url": "assets/js/2.86953f44.js",
    "revision": "3b73233aee919386aa4cb5947c43987d"
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
    "url": "assets/js/3.de10fedc.js",
    "revision": "8e125e963d814f5ad0c4becbe1c6daf0"
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
    "url": "assets/js/33.6dcc3fbb.js",
    "revision": "01550880dcb9df3a18c6868ac9e8c400"
  },
  {
    "url": "assets/js/4.92de38ca.js",
    "revision": "af7515020b0c43e110d88dde5e12625f"
  },
  {
    "url": "assets/js/5.0181f889.js",
    "revision": "22786c248e4c6cb4e82fd7d28d7ad137"
  },
  {
    "url": "assets/js/6.4fce5369.js",
    "revision": "5fa4e87ff79bffb01be69c9b5df60584"
  },
  {
    "url": "assets/js/7.5524f005.js",
    "revision": "e00d68801f0be8374e07ca2869a3144b"
  },
  {
    "url": "assets/js/8.2a41729d.js",
    "revision": "4ef518e918478e915d7d4c27b7e0be2d"
  },
  {
    "url": "assets/js/9.02b209a4.js",
    "revision": "ec3b82f206682e4b37e756bec89e5624"
  },
  {
    "url": "assets/js/app.8a284146.js",
    "revision": "c5a8b9f21ac6e7a43c76689278db750e"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "d9094e18e696144c03718d6d31d9e026"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "871c08e0ddd137d71f9a531e00bbe449"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "c0c7f862f35c80cf6af26a91dcdad574"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "0dfc75ccec31d42054cbf8550762e4ce"
  },
  {
    "url": "book/index.html",
    "revision": "bbdeaef53bec178208cb58a523012fe2"
  },
  {
    "url": "index.html",
    "revision": "c1de96915fb47a4f81a91b11763f617e"
  },
  {
    "url": "memo/memo.html",
    "revision": "abce9b99e556d48559a4d160892df356"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "f669e74374d48f7071b509e01d6c0f79"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "bb3d31cab820d6455c01784693707f36"
  },
  {
    "url": "study/english/words.html",
    "revision": "1e0265dca08a38838278739c2208d492"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c2e54d6c60cee2e03b0ad8ef55a91989"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f36691f3dbab0616b08e8bba81fe2203"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a12c9a3cec9683dd49f5c268a8e778dc"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "5a3d2d3d089317bd224623965cf45cb0"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e8d29d5ecb0c6edccd28b0c97386b37c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ee1fe2d1b46a7ec8a53014d4a7b0ca74"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "301c51bac965ace8b9450c03b2302ad2"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "171e8c8bd59386fa65acde3bea22a892"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "a676c54e096615ab4bd46da066a10141"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "950e6d5707582257d06a8758d59c48d2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "5a2a6a9a5f714f917b6a1773e64f637c"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "bbc673e8e5fa96e65a126c42bdaf6ca4"
  },
  {
    "url": "task/index.html",
    "revision": "de6ed967921b392605b617ceae4d2b92"
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
