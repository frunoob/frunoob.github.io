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
    "revision": "5f6a8edd34a996c7eb3ea9f6b2383142"
  },
  {
    "url": "assets/css/0.styles.92760145.css",
    "revision": "99707eb9199d5cf164085eba3dc5d36c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16550103.js",
    "revision": "fa3b21fa530e8d8bd5cb033475bd1011"
  },
  {
    "url": "assets/js/11.f2702b8a.js",
    "revision": "4e94f8c93b083d7d50ad6ae198bcfd63"
  },
  {
    "url": "assets/js/12.9a1a94e9.js",
    "revision": "b1a3da83a23a33b605f8fcd20ab81533"
  },
  {
    "url": "assets/js/13.621504c2.js",
    "revision": "7c60f310031efc700d4674dd590261ed"
  },
  {
    "url": "assets/js/14.3284b063.js",
    "revision": "6f9e8bcb1d245ecd52a967dd20ffa3f0"
  },
  {
    "url": "assets/js/15.532d8f28.js",
    "revision": "8fb60f305d3ea370e63bca27d681b272"
  },
  {
    "url": "assets/js/16.e6fc90f7.js",
    "revision": "4a60fd5acaae73dbd761aa0fa061d4cf"
  },
  {
    "url": "assets/js/17.dd0f130b.js",
    "revision": "55a2e63cafb22f82759379ab8b7ffa03"
  },
  {
    "url": "assets/js/18.02e606b6.js",
    "revision": "af06dd3bf5c504c7203f5ab6fd23e1c4"
  },
  {
    "url": "assets/js/19.683cf9b0.js",
    "revision": "6832f3ed30535a7d0cc132b4c417a5d8"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.b94a884b.js",
    "revision": "b686ad44117a12b1abbd648e4f1c7069"
  },
  {
    "url": "assets/js/21.6ac07d82.js",
    "revision": "cfb87534323320ccc082e7461cb62d9c"
  },
  {
    "url": "assets/js/22.49cefd48.js",
    "revision": "b72d3a53f16d38c537331cce22c0ad20"
  },
  {
    "url": "assets/js/23.bd8c0be9.js",
    "revision": "09caba207d99810e8bda592a9bc8e762"
  },
  {
    "url": "assets/js/24.7aecb6fd.js",
    "revision": "49e9408dd05fae8c99f65f301f6b5662"
  },
  {
    "url": "assets/js/25.703e7a1a.js",
    "revision": "a5f18ac656898c32754a4027d2e2aef2"
  },
  {
    "url": "assets/js/26.566a9df1.js",
    "revision": "7121ac69bbb1a196c99b2826b067d26a"
  },
  {
    "url": "assets/js/27.61ab7fd3.js",
    "revision": "d8f05166f9adb04caf679480f3f61b64"
  },
  {
    "url": "assets/js/28.86a732fd.js",
    "revision": "b212be774a9bd4c078f8f1e42649a993"
  },
  {
    "url": "assets/js/29.cf89f13a.js",
    "revision": "3e482481850e9707ae67283ace371a8a"
  },
  {
    "url": "assets/js/3.2c95ad0d.js",
    "revision": "24b4e3c2d35dbcea3d49ccb1474ba2e9"
  },
  {
    "url": "assets/js/30.40466771.js",
    "revision": "64d933213cbb07a3faeb28b3989633d0"
  },
  {
    "url": "assets/js/31.69056ce4.js",
    "revision": "04f2c5e14924560f25bd61d31aa347f3"
  },
  {
    "url": "assets/js/32.63a3ffe7.js",
    "revision": "b5add937bb9095666299e180df07a936"
  },
  {
    "url": "assets/js/33.24a31add.js",
    "revision": "8c26397766265e8083c57b5d7e9f86f4"
  },
  {
    "url": "assets/js/34.8743ef32.js",
    "revision": "4c348ef7cc92ee442a797ee6fba73fa7"
  },
  {
    "url": "assets/js/35.f6f492fa.js",
    "revision": "22dcf4c21db5c444674f90301304ebb1"
  },
  {
    "url": "assets/js/36.2714094a.js",
    "revision": "7ad9883c12c766e39795f7c232f81c6d"
  },
  {
    "url": "assets/js/37.d58ab974.js",
    "revision": "58741d5bb2d3fa236b29d216ab233dfd"
  },
  {
    "url": "assets/js/38.50e0e56c.js",
    "revision": "0a49d984ac209217a3c0317ba738cd0f"
  },
  {
    "url": "assets/js/39.2d62b2f3.js",
    "revision": "4acb0db82f1e6f0342e607dfec26b8a6"
  },
  {
    "url": "assets/js/4.23cb5e55.js",
    "revision": "2d0f396e7e9eec4c59bcc5046b532af5"
  },
  {
    "url": "assets/js/40.3d8795a3.js",
    "revision": "2ed8bdc11af347b5e4e413215ba876bf"
  },
  {
    "url": "assets/js/41.de9a985c.js",
    "revision": "e249024301b9c3faad806df246bd3b22"
  },
  {
    "url": "assets/js/42.f849bf84.js",
    "revision": "447ffeeac4f03663c17e81558a8aa402"
  },
  {
    "url": "assets/js/43.e3ad5325.js",
    "revision": "93f6b2b3cfde7fc30fab7efea476e934"
  },
  {
    "url": "assets/js/44.6709d456.js",
    "revision": "0943c2c5a4ca687cbb561ec8b046a8ab"
  },
  {
    "url": "assets/js/45.d52212f8.js",
    "revision": "9fcb3f636b9f2c54278b811224abba7f"
  },
  {
    "url": "assets/js/5.e84f0a01.js",
    "revision": "5314e5204997c617533079617046d451"
  },
  {
    "url": "assets/js/6.4c971fa6.js",
    "revision": "d22284561b7bfdcc936c8b55ae97dbe0"
  },
  {
    "url": "assets/js/7.a4d388c9.js",
    "revision": "3f6295de867d12b4268d4d6fc9f4e187"
  },
  {
    "url": "assets/js/8.086037a4.js",
    "revision": "a49a51a420957bc88f857ee11350daf2"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.c91a3a51.js",
    "revision": "00ecdb21addf92d2de1eba265e1f70b7"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "cb161cc0d140ba3ccf74e7dae84fe4f5"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "fa99d123b80039022d804ba1f016d16a"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "4c6d01884fda33b6cc2ce67076bbc6f5"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "6e1c4a173d1cc2038e1f1b5dfa456c36"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "1f073ba21456d2eef0aaf7fa7a7ac9d9"
  },
  {
    "url": "book/index.html",
    "revision": "4a5342c23e1035b03de3daa1b5588e79"
  },
  {
    "url": "index.html",
    "revision": "b1c048e5a37a20d19e479395aa6bf701"
  },
  {
    "url": "memo/memo.html",
    "revision": "5b4a79ced59c00b539b90edaeef9891f"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "293a5798a85da1a7faa8699e8bfef624"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "ac3130ec7b625a2751f77dc42020f163"
  },
  {
    "url": "study/english/words.html",
    "revision": "be9ceb8e0d65c35ea1e9f3265e55df06"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f93312888f02fcd34a096a1c25420575"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "8b799af51fafd3b936314f15a18d0e2b"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "1510b871ef94a6d3a7aee964a030a446"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "6817f647e4c1c565adc601eb85634d3c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "14d84f4feeeea7d09029c1b1fd2fb5d1"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "3c1611211b7b7cee863716311193648a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d45fd0146b1de9b1cdcb6e6baf6937ba"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "7400b8047912be84d01354a2693f7cf8"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a5ce11bc831a35f6b837146950d397e0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "8876077a4cbc61f40c2c2860e78749f1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "a90e8a471ae54a4dbdeb09d4db0183aa"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e5b5f49b1a35d3edde47ed49e3547493"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a6b41eda059a264b172092f3c8b2b487"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "0004e39e3c122b8053ef0ad6e8e74a61"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "2051aa81010be9423c61eb90d6e3792f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7de2023ed2e8ef842ca432c2735de606"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ed7e1ad3169bb8147fc7f6a46e857eee"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b351d1f65abf11a072e708c79c7cec1d"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "86c133e51311d626da12e487f77957a0"
  },
  {
    "url": "task/2021511.html",
    "revision": "4baae8606253a6a90cf51b8ac0bd177c"
  },
  {
    "url": "task/2021514.html",
    "revision": "257fe3ae8b00c0a45a243690dbe65de9"
  },
  {
    "url": "task/2021515.html",
    "revision": "445dddae581723c05090ee8a5e1eb4df"
  },
  {
    "url": "task/2021518.html",
    "revision": "e0e32dab724288d16c8855409562b72b"
  },
  {
    "url": "task/2021519.html",
    "revision": "ab920b65a7f39959de704a49c31611a0"
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
