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
    "revision": "358e5033137e076747c9f6169dfc7bbe"
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
    "url": "assets/js/16.f50d3e7a.js",
    "revision": "1d9dd690fbc4d0a5c3acf688925798a8"
  },
  {
    "url": "assets/js/17.ab59410d.js",
    "revision": "ede18e7648fe51422ba597c552ce59dc"
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
    "url": "assets/js/24.5cf6b9a4.js",
    "revision": "8c9964961ea286a95bde9ca4da96648c"
  },
  {
    "url": "assets/js/25.84cf3eb6.js",
    "revision": "89421068247a930d863bceb4116ca149"
  },
  {
    "url": "assets/js/26.af94b493.js",
    "revision": "8d434cb842b4688c574e22bb89db13f9"
  },
  {
    "url": "assets/js/27.19173685.js",
    "revision": "c4986365fbe29fca00719808b4456278"
  },
  {
    "url": "assets/js/28.b9c193d4.js",
    "revision": "0c89534e6c805f196381fdb4f3c071de"
  },
  {
    "url": "assets/js/29.cc646802.js",
    "revision": "1a2ed4292c008e102c76d1d7b9116cac"
  },
  {
    "url": "assets/js/3.2c95ad0d.js",
    "revision": "24b4e3c2d35dbcea3d49ccb1474ba2e9"
  },
  {
    "url": "assets/js/30.e921c463.js",
    "revision": "8ce4b04b7ee91dbcf80c3db3d2cd5a7a"
  },
  {
    "url": "assets/js/31.47296141.js",
    "revision": "861f2dac8b38d1da5e73e845c84c35e3"
  },
  {
    "url": "assets/js/32.327f7640.js",
    "revision": "66889e4923fc76abe6c0e4fff460b2c6"
  },
  {
    "url": "assets/js/33.1ecad7b5.js",
    "revision": "fdc8dbcca7f145e147c1610cf8710fee"
  },
  {
    "url": "assets/js/34.d4b4948c.js",
    "revision": "74acd3a236edd69bbaed5f0209b6a788"
  },
  {
    "url": "assets/js/35.c9175545.js",
    "revision": "3f1b45cc69de0ed8ac3a940308bc73d5"
  },
  {
    "url": "assets/js/36.ce92ee16.js",
    "revision": "eb8ff523b9d9aeaeb6d06bd5d8e9efe6"
  },
  {
    "url": "assets/js/37.9c6a7d78.js",
    "revision": "9c1901f4c27ee3858bc6d6a111dc7c13"
  },
  {
    "url": "assets/js/38.c5841653.js",
    "revision": "eccc4c5c6efc446fe279fd556a3085db"
  },
  {
    "url": "assets/js/39.9fd011d1.js",
    "revision": "98a725b2cf3b3b0a9adee5e7521a69d7"
  },
  {
    "url": "assets/js/4.aa18a0cf.js",
    "revision": "a4a33540333a4bf2ca9f61bfc96e3de8"
  },
  {
    "url": "assets/js/40.de3b5142.js",
    "revision": "219f17f0cb2f2729e26bcb7b41ac3333"
  },
  {
    "url": "assets/js/41.b5295003.js",
    "revision": "31188b6109182fb4ea29b4ac5ebf8b6e"
  },
  {
    "url": "assets/js/42.fec1785e.js",
    "revision": "ff7298c6664c1f6c0d03e52a0f9c68f8"
  },
  {
    "url": "assets/js/43.552680ae.js",
    "revision": "49f91748d24c472b0308d614ebb588c7"
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
    "url": "assets/js/app.9c3d2760.js",
    "revision": "f244c41aeb3db7bc09c08ee4ac5eba5a"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "74f5e0ba35c638fc7465053ff2959c93"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "316c0483f49d7cd3b4232718a1255688"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "ad271983346163e487d40a347fbc12f4"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "8bcf64d883547bf853da7ee0c17ebbd4"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "cd7276cd6481327cece4ac9e54c75d12"
  },
  {
    "url": "book/index.html",
    "revision": "6febadcfc7470e293187d63b534ccf9c"
  },
  {
    "url": "index.html",
    "revision": "2ff4b273b816c5b226f5ba557a90a631"
  },
  {
    "url": "memo/memo.html",
    "revision": "d278a22c6f090e938b28f04c83bde862"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "5f75e1be3819aa8d53f1174e322b5676"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3ac00c84c555994e3d737188ec06b6a2"
  },
  {
    "url": "study/english/words.html",
    "revision": "462f2852e23d2b67c02099585adda0d5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "59d85f6ad058db82bdac442223fef928"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "16cb8a661867ecebbf7f9874960997e1"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "7c37f13bc46e9c72c934b1a4f2a8cdd7"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "4dc46e708c86a5dadfa992b2118ef7da"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ab1abdac3039e1378bc74ae5d5a2c9de"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "60f136237be634ed931c2ece506d8d3a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f09bae2e697113b7b21df0ef63556e1b"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "026cbb0d577dc7b6adcea89f1827a7c4"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "3e575e0b601803664e17ec4edd9179ba"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "8395ab30460d57062efcc18b738d8c96"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e2996367f922502dda61cfd0492b9702"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "723c43a2f74e3e88ca03cfa3e4710964"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d3f12fcf34fb591924f82309bb4a69a3"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1018bdc87c45663d947c3f0eb930f820"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "296bc2ad55ef241420ed464de04a565f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3fe6b6a7e4efac833e978d96237a5064"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8f4150013fc96269b9f82a79adbaf350"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "1b3eed4f1dd83f9bc6b4088808b9e457"
  },
  {
    "url": "task/2021511.html",
    "revision": "db60996f63b987f20c698d7285bc24dc"
  },
  {
    "url": "task/2021514.html",
    "revision": "6fa970df01ddc12b05f9bf84efa5c8d9"
  },
  {
    "url": "task/2021515.html",
    "revision": "df041c8953e9a18625c5dded1271aefb"
  },
  {
    "url": "task/2021518.html",
    "revision": "72f89474d999c8198a95d153218f21bf"
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
