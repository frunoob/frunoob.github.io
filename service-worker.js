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
    "revision": "f3e9fcffd8068d6f8332b47f2e42f16a"
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
    "url": "assets/js/app.45e96756.js",
    "revision": "4a373d3ca952c09afe0b99cc23727832"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "03662e5ded14e2e981bd36aba13b415b"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "17c093e74532e69151a94313712c197a"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "302e3fbf8070e0d3fd9bd50bdbeeb756"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "8c0315275d16a8b9889f3dc1359d1df0"
  },
  {
    "url": "book/index.html",
    "revision": "9ffd05b2d498cea88e2367bd17a44119"
  },
  {
    "url": "index.html",
    "revision": "b13b187084e0c6082baa68a8b45637be"
  },
  {
    "url": "memo/memo.html",
    "revision": "d4754e4fdeb279cd05a00bdb79a70514"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "dc714dcafa7a29cda2862bc83395f887"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1f4fb40828c528403ee454f9b42bdd74"
  },
  {
    "url": "study/english/words.html",
    "revision": "28f8956f9f57ed1467a4770db85afa3a"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "830c6b355648036ad4cf447652e062be"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "542c03ebe60c63317a0ea9031d7635f3"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d3500dd4db381e99bc1d09be997ffdb7"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "327954bbf5060199ab947b5329107a2b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "b8465d1c0b1197674383a712dc204e56"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "758122e917e9f1f82fb6f89a135b7cec"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e3b57230befe2ebccce545f578620c13"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "38a6aa5c9a5266ad864c4fe769302da4"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "500f792d5a71f8cf042b1fc6663519fe"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "65518a9eb554789d594b0abd9d4b044e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "78f40dc09a8c1b169533ebf014af1dd0"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e18018078f51e285a9b02b341237dcb6"
  },
  {
    "url": "task/index.html",
    "revision": "eb9879f6eb3feb2c61ce29c39b5c18f2"
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
