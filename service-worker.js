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
    "revision": "45fe21c674c0420583918385a7b06d7b"
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
    "url": "assets/js/16.2978e951.js",
    "revision": "3e2cc34f053eb24750aac1445ac4c3f0"
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
    "url": "assets/js/app.93725ad3.js",
    "revision": "9698775c1167d50b4a0f667f2fd67eef"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "6b37e27f87878eb44a37eb60a2ae0926"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "a1ada5dee113e7e4cc7aa276c5990d31"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "e4829bc71a8094f97f3b7a43694cf65c"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "2f387042a12fbd07e7efb543f8b91bd2"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "404efc46f15763831b59cc5a169f18f6"
  },
  {
    "url": "book/index.html",
    "revision": "0bf6962c3633085f59e94f81c9cfaed2"
  },
  {
    "url": "index.html",
    "revision": "78ddb4d6dbc6f8d4babd16785bcff2e6"
  },
  {
    "url": "memo/memo.html",
    "revision": "512ba115ec393ae56cdd237a27b72904"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "4b2123dd689834c4f4cc3e7c479ebbf3"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "091bbf6dd7dbb3a4e4f99e05ad0b70be"
  },
  {
    "url": "study/english/words.html",
    "revision": "b6003ae4449f85c21e627d351601cf1e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b76c1287f9e367923eff4fd4c67449a6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "fc4ea03c931352e2e3bba198d755310c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e91ea47fff919d88e59efaad9dd31268"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d533b0355103ab0c9f485769ba8a955f"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7e307c22d9b3e6844f63140c43c2cf20"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "b74dd0dfce45d95dc5b74f6ea14508ae"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7c1072436755172f0b70d7c550a12ae3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "a42540c94d32115efee623affe52f4e5"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "e6e5cc692e6d127133dfdfc6c2f6bfa6"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "913b17ead8045d4d5c48ec8a94cda328"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "71c90078f2dd42b9fcc332c92fb30af7"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "98a1bc3a712365c87123f30f93249a0b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "20047e7c892c8cfe0632bff06cfd5cda"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "9d5b76706fca80d8c02ac0d82b8b7162"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "74b3a056ca8a46ccab84fe3504742c60"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "02f4c006ea1ba295a4c266e019a74a92"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "a8855e62cd295d5ddfc0285ed04b054b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "088bfa401390e2822e6e2da35b333c1a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "abe4d72a5ee4900dbf936c715dc38332"
  },
  {
    "url": "task/2021511.html",
    "revision": "5ab5f670c7eab33d367e61a0f1a162f4"
  },
  {
    "url": "task/2021514.html",
    "revision": "98e6f6158cc11910f59310dc160cbe5a"
  },
  {
    "url": "task/2021515.html",
    "revision": "2e2f809e95474649e9e52c6f86251838"
  },
  {
    "url": "task/2021518.html",
    "revision": "8461e46d47fe43f1b3137875b92a2def"
  },
  {
    "url": "task/2021519.html",
    "revision": "b2bd89ff2381d051470230b8b4d39ce5"
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
