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
    "revision": "f2634816e136a1800d66bf10c1f039ec"
  },
  {
    "url": "assets/css/0.styles.d8f600da.css",
    "revision": "8dd2d842055dabc3a9f74ea08a9cef16"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.451930c5.js",
    "revision": "8435366e2501f940640b6d52cfbff8fd"
  },
  {
    "url": "assets/js/11.d60c40a9.js",
    "revision": "e707ab658b7d93dc536c4dfae9df93ad"
  },
  {
    "url": "assets/js/12.99c6246b.js",
    "revision": "98484ce65f91769403368d9a4694e8d2"
  },
  {
    "url": "assets/js/13.599dd7f8.js",
    "revision": "9ca3b2724b85912c6131f5bd0736d8fa"
  },
  {
    "url": "assets/js/14.4aab294d.js",
    "revision": "4ab932212e6cdae10d1d4f621b35b6f1"
  },
  {
    "url": "assets/js/15.3ae24990.js",
    "revision": "40e17ef8c35947fe10b0e93d2f3134a6"
  },
  {
    "url": "assets/js/16.7dcc26f3.js",
    "revision": "b2b4f49be83b7838d21e9876bc2e80b9"
  },
  {
    "url": "assets/js/17.4120b576.js",
    "revision": "5130bb3f5c72967e511d1e8f3cac5036"
  },
  {
    "url": "assets/js/18.5d312aad.js",
    "revision": "e3b3ae05c90662fc0315ed71c82ae96b"
  },
  {
    "url": "assets/js/19.625f592c.js",
    "revision": "0dd4ccc7a3e8d4a967a34c49df1b719a"
  },
  {
    "url": "assets/js/2.ea6f25f3.js",
    "revision": "f9f243fbca57448991e87a8158caf7e9"
  },
  {
    "url": "assets/js/20.873c0eda.js",
    "revision": "e96073e1633ff609f08fcb47e70620e4"
  },
  {
    "url": "assets/js/21.2ddde012.js",
    "revision": "c7433c5e25d5717c292d65326370195e"
  },
  {
    "url": "assets/js/22.4f34ade6.js",
    "revision": "e2e2df19aa1eec53f2bcce63a712db06"
  },
  {
    "url": "assets/js/23.8df4f8cc.js",
    "revision": "a692d7128a1f7233428cbe0f97e9c945"
  },
  {
    "url": "assets/js/24.6b00c196.js",
    "revision": "b7091eacfff56a78d71dccb59fabea2c"
  },
  {
    "url": "assets/js/25.fdd78f27.js",
    "revision": "8801d1658bc68968dab9fdab9843d432"
  },
  {
    "url": "assets/js/26.cda05549.js",
    "revision": "7541c4b4354d3f761e61fe4404c0debc"
  },
  {
    "url": "assets/js/27.8e91842f.js",
    "revision": "583735fe182b859e527ae21a26967fe7"
  },
  {
    "url": "assets/js/28.028a4743.js",
    "revision": "194e8cd7f8267f047ceb9b1cbe613006"
  },
  {
    "url": "assets/js/29.1cc48e06.js",
    "revision": "d0b9542420bae671080cda0c9abc58fd"
  },
  {
    "url": "assets/js/3.b923fc64.js",
    "revision": "d9ba5ca9056bb59c962b63dddc17a0dd"
  },
  {
    "url": "assets/js/30.6136e9f8.js",
    "revision": "c73d6a136404339bb2c6c10301a69e1d"
  },
  {
    "url": "assets/js/31.1d9c8017.js",
    "revision": "3132314faf6a24506f56c889caa2dfa4"
  },
  {
    "url": "assets/js/32.da4c60ab.js",
    "revision": "18675a2f0fb4d89f5274785039b67040"
  },
  {
    "url": "assets/js/4.a5adbfe0.js",
    "revision": "b57ebd995303a513322075b09f377107"
  },
  {
    "url": "assets/js/5.0868dbc2.js",
    "revision": "a7ac0fdf5e8d809af00b20139e6e3203"
  },
  {
    "url": "assets/js/6.44af4953.js",
    "revision": "389680027f534fe7c2c712bfeddd5370"
  },
  {
    "url": "assets/js/7.86b0ef45.js",
    "revision": "bc1270afb0b54fa0d8ed10edc03b6ee2"
  },
  {
    "url": "assets/js/8.4661adad.js",
    "revision": "b06167c6ef30b1281b9d2760bcb4a7cb"
  },
  {
    "url": "assets/js/9.ecf40e1f.js",
    "revision": "dcebd6e19e599096be02ee55b9b53727"
  },
  {
    "url": "assets/js/app.e3f79a9b.js",
    "revision": "d7e26c7d51b07d68949ebc0a93f047b0"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "7486c780a38e34b6dfcb757d63194677"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "61e82a695fb7e126ad67c1bd6778a83d"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "7c24987db941b6532e95e3fa8502506b"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "8bb28e5f100b47804d266a3fba4da307"
  },
  {
    "url": "book/index.html",
    "revision": "be97de08fac80e7681708041cc7a5b96"
  },
  {
    "url": "index.html",
    "revision": "43f93faae0a9eeae08a60acdd22f6bca"
  },
  {
    "url": "memo/memo.html",
    "revision": "09154939b76966bc2eb537a829a4563c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "9432a3a1f345a05591308e5ab227d812"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "644bba0894f1048edf7e5a277b698f70"
  },
  {
    "url": "study/english/words.html",
    "revision": "e3cd87cf393e0e0f9f2098332ddaebac"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "339daf3ad0be1e904e8db14d91dc5859"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a9ef32705f1764e0e80d57db5a506622"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "6e468f344a7999b83c7d414ae849ee16"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3eb480e32bc56a6a55ddbb4e93beea82"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2d3f1467c8e2025a7db16984c0148f96"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "012ef6c3339a7d6bd11326388e308df5"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "275ca2293a4fa5102e153eeffeaf2dfb"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ca2d62b615bcb3953880d566e3a1bc28"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "dc42689057c9e97f5a4852e536812dd2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "721c291b7c6f4aa8fb166ca8022d1089"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "a39ff361a1a821212fa55da429084810"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "0a18d79a856357b307e3a5802c2bb80e"
  },
  {
    "url": "task/index.html",
    "revision": "ec28d073dcd6d9829622837a7e081031"
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
