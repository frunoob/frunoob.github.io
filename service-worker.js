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
    "revision": "79191e15319b1ec2a2a92000f4c33e3b"
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
    "url": "assets/js/20.31604627.js",
    "revision": "ef64c3984eb0a1b89714bb80117fefa3"
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
    "url": "assets/js/app.9867d5e4.js",
    "revision": "f209b5fc4d3f04e482b71ad035440eb4"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "a62d7440bc17b6126d149c89170e2d25"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "3ab1330707c2d0374a3368d5a9c1b2d9"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "7195d442fdca2263021e69f5a697aa5d"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "127b76299954dc2fc10d5eb524509ff4"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "368df58c4a06d6a9cf82527a6e0cc150"
  },
  {
    "url": "book/index.html",
    "revision": "e48a0811e5962494ce3c5b98c8d5c35f"
  },
  {
    "url": "index.html",
    "revision": "ac8c5d31688a169ab28424437c9b1be8"
  },
  {
    "url": "memo/memo.html",
    "revision": "a73bae5e731ec56c4dbb1887a751948b"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "afb0d8196c226c5ed8bb209fed234f0e"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "cd13b8fb1f6b8cf50eaa1a942779d0eb"
  },
  {
    "url": "study/english/words.html",
    "revision": "29114c27512b0db0a364a2c1cbe94018"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "08bc5dd006003be42ba3b7081e50876e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3a397c2c1695981633f7bdd33a0d9885"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "86b5f415e0e11d5a2e542eb84a4172fa"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "16e95aa040fea42e5a68abb1f979ebd4"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "968842da0bcac9ea6eecab25a5aa58c6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "651f5171492b0ac032f964ae1b0ea399"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "efd1705b2e6bf9abb2bcf4610d00d850"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2ba98fbda8ed611dbccd86ff2991b199"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d6c53938f1d831aebb1a29c70555dc55"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "7f879ad4caea7b9237161696f35ccbc5"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "436ca2a13af5570ffe6fd172469e906a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "eab2b2450187105ea0ba9a55337fe006"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "7260ac0f97f29579a7a66478de892a0d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "086433ec20d1b156e489ff8b53981800"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "dc3f99da9beec1c9ee3f5432ce9b5153"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "186937f2c91b7da28861ce1dd03973c2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0b7819340c0115d13b37e27bf5936a1a"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8bf4dc915ca18a0e0e65c9104db9f461"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "aecb93767eeb2d713a888037c28f4a9e"
  },
  {
    "url": "task/2021511.html",
    "revision": "5d670504aad89ad5482ce8d4e130844a"
  },
  {
    "url": "task/2021514.html",
    "revision": "9cfc8a6f220440cb5d6f2350373f5452"
  },
  {
    "url": "task/2021515.html",
    "revision": "7eb4734290b685e25899eda59b225b13"
  },
  {
    "url": "task/2021518.html",
    "revision": "876403203522d7f4a1c6c2a8f10c041f"
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
