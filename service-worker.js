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
    "revision": "de5eeb960f39b1943f1e35d3173648dd"
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
    "url": "assets/js/16.abf4c5bc.js",
    "revision": "4e889be066bd3ebfe2de9e5f14f77db5"
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
    "url": "assets/js/4.79925f41.js",
    "revision": "00eb85cd90845644ee6a7f914d1a1f09"
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
    "url": "assets/js/44.8388083e.js",
    "revision": "9dff15c82654b4441aac07fbcedb32b9"
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
    "url": "assets/js/app.22d824c8.js",
    "revision": "4257e906c87abd991cf17f25256c1cb4"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "bc44713295f942d9d305051ce4962172"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "b3483621821d5dea0e4aa4eb82fa6fbe"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "1673c7ea5fccb6ec463afe7891d0e00d"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "d33822951d052e199872071054c0b39f"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "1d61fb329834057afc5a97fd551d3bf8"
  },
  {
    "url": "book/index.html",
    "revision": "c9230035d92eedfb740428f0d7473810"
  },
  {
    "url": "index.html",
    "revision": "eb91bb306fd2d79c0bac324e34fc7029"
  },
  {
    "url": "memo/memo.html",
    "revision": "533707f5674232d9d5d533fc3b290afd"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "2aec57b268a6b7d5c82627a2d78b032b"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "9541efd35ae63cfb7238b6d52701b502"
  },
  {
    "url": "study/english/words.html",
    "revision": "654a58adb362ee90dc0b3ab749b9576d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "295d82a54a8159a417855b0c9aa21aae"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3a542ab8cac16bcc2d647a6a74f6c666"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d37a05df54e088fa1918662da25aa830"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a2d0252b1de9c77f3e1853da933db851"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "9c1847dd8a1cfe2bf2304676d899adc0"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "bd08d7df782edb6f83f01cb62833c2da"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d33b24252497b6444784e1b1603c03c2"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "43f25001c19407cf68097dbfb34a24d6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8e0d5467c08f88ff054b1dc3c0105014"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "28ada4085324bb127210be6ffb899775"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "466071007385175504b014a3beceb06c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "fb34f86b906239a7a67234efd22dd065"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "3eea38aa4afda6012fb1da93b6e02494"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b1b26501e571da0891a47c1a644c1070"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "efb99da1b535c6634718cdc04b6dcd1a"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "983951ff0c0f77a947cf417ac3c9934f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "41dff564f10cc068bb300673d1614910"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "fd253617e668bdfcf9b446ba6fd1052d"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "bad5496a4454e105166e29634fac62d6"
  },
  {
    "url": "task/2021511.html",
    "revision": "023e2128de2f397ffa6e054273d7c0d4"
  },
  {
    "url": "task/2021514.html",
    "revision": "05eda508d986fad1b24a5534a8939a42"
  },
  {
    "url": "task/2021515.html",
    "revision": "156f0e7c5bc218bcf6f8ea5b3f786554"
  },
  {
    "url": "task/2021518.html",
    "revision": "53b060f0608f1902ba68728ec2c4b7e8"
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
