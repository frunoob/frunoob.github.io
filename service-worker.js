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
    "revision": "227d3e2a5ca432b91186a53aba7dcf29"
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
    "url": "assets/js/16.ca3b3147.js",
    "revision": "619c33c62f1886a386686610dd4da000"
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
    "url": "assets/js/app.4921037c.js",
    "revision": "4ff0c0556c3ea1bf1199e16ef51e5aed"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "e909da5feeec93a341ea769bc4a9b2a0"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "601a43174404bd5860546d4aa576c6f8"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "f1cbc707ee934d6568ccc4a525779fb7"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "21efaa3cd1fc630eb688db41c20ceea6"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "bba138349c938c94f3f805b1c54be62f"
  },
  {
    "url": "book/index.html",
    "revision": "53e2e5f3542239f99d1eb136a7f0fe47"
  },
  {
    "url": "index.html",
    "revision": "1b1df74a56da3905b6d9d15f558ca669"
  },
  {
    "url": "memo/memo.html",
    "revision": "3fc3d199ba0c8d1cf327c643e991a762"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "a124ba759c6834bb9f9a2c26108931c0"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "ed0ae27bc03564e124c543e258b05221"
  },
  {
    "url": "study/english/words.html",
    "revision": "4a51712e64b532f22e5a20418dedab1f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "84023436abc7894fdb32596304358799"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c2f08851391c382182274d2174670841"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a5d12f84e7fa05041d4a3946c17e3a37"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "01e72c51bc32e04167ad13feb34fd423"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "2af2e75fa5e19f464dc929b79c8bf39d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "9a2d3fb0cb888b7c84722235206c1fdb"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "8435b5a7416fc1ba08119d7c576c1133"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2103785fffab51eef973cebab8d22a42"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "91f9121fc0d1c54e4d5a9aa6a6372fc8"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b2b1f34bec83378bb221833c8b9f228c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "4fd5e99608be6be23c2952965dcb0656"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4cf64314b061032ca96b1c0a9890a941"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a940e3f7217ad13fdfb2c22d1e7e3c1b"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "482805879b7bbc46fd8855ee9a9a8c4f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "15b78cd7bcc38bc0eac68fd5c87b1da1"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "adc20e7281b9461350edf1ae24db6720"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "e4e7aec4cec8f55854440b7837258cc4"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "32eba05e32c723b575f150a68342c105"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9d6b1c1ae9f982e6bbeebf34e6ac7142"
  },
  {
    "url": "task/2021511.html",
    "revision": "c94d9bc96368f87035b63af337c55af7"
  },
  {
    "url": "task/2021514.html",
    "revision": "38e8a433bf6e82ae048473b754bf21a7"
  },
  {
    "url": "task/2021515.html",
    "revision": "0e9a6f92df91e6f47a6ef64897c5636a"
  },
  {
    "url": "task/2021518.html",
    "revision": "0b27576283e8f78ef658fb0042ebf0d6"
  },
  {
    "url": "task/2021519.html",
    "revision": "8d321a23d8d31e9e2179db3e2573c2b0"
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
