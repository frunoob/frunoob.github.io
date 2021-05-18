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
    "revision": "1ff5dbc5ad6237cf97b58df1e6e0d01f"
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
    "url": "assets/js/16.b4d389d9.js",
    "revision": "cadf9e4ba0c905532708eb06434d7388"
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
    "url": "assets/js/44.2f5009d9.js",
    "revision": "3d6017922533211f60b0ac31d5e877dc"
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
    "url": "assets/js/app.5900ea38.js",
    "revision": "c5a8c9f19d94c18ed8660141e87cb1d8"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "a90b9319f0b142e8c50253316657c8a0"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "5788e2bd515d82d081d4a5b07d7eac80"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "b0f63c8e81b7090edc76afc7623623b4"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "98caa4723866d81ae9ff42bf39b2f480"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "87d3d2b53991308a7eef6af393fb9c3a"
  },
  {
    "url": "book/index.html",
    "revision": "738ec6b177ad304a63fa405cbbde5ecb"
  },
  {
    "url": "index.html",
    "revision": "0f01ebff67115c0d8c1c3dc5ccb3c2af"
  },
  {
    "url": "memo/memo.html",
    "revision": "c1d9fabb2905a233dfc93f8feb117696"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "6e249b3ce613af2c7de700c86ce851fd"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "625a550888b65696c8bfd87fb11cb5c8"
  },
  {
    "url": "study/english/words.html",
    "revision": "558f3cd0c5a982d620afccd1fcdd73a4"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "fefc2466616417e4afbe400bcf0a0bc2"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "35e5e8496cc17b07740f750f45ac5b27"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e3a8ea7b0356aba30fcd92911c31d1ae"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ca3044dce9e954d18536ecb111988a7d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "9cb1c606485e41c3a145b2b3371828fb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d5db7dafada36c55fc4f174250b8ee29"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e964621e3a6954f0b6ab87ec34109798"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ef6865b8656c702de108e157ba7dba69"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "b869512097b745ce22c26e491f493baa"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "825878c48d8f2c0efceede64dd5ecab4"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "8d942fa115b6271c25d04528c5149284"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "43da72d63426c6eb055abeb401581105"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4b3e64ad6a4d5bbf02e101d9c5210283"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b4ed2af6882740c6ccf64b8ebe5ffb40"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d9ec213f25b20a44a380227c17d52811"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f47956174fd5b4505e0721ea05551248"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "de5abd4f24eb1723a1e0312a972cf961"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "fa6666d8b959810450a2d72d04fc7e73"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "b1ba741378aa9eec7386490c702f5b74"
  },
  {
    "url": "task/2021511.html",
    "revision": "a174f856e068c5051236e508cdf2b62b"
  },
  {
    "url": "task/2021514.html",
    "revision": "30e007d5549f0411b5ed5724572cc313"
  },
  {
    "url": "task/2021515.html",
    "revision": "0e8bb50d8609681c71a0a1a7aca2b834"
  },
  {
    "url": "task/2021518.html",
    "revision": "92a63411799e4e39f9fc30c4026bb5ce"
  },
  {
    "url": "task/2021519.html",
    "revision": "147fddaefba6fd14069a6dc58f736344"
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
