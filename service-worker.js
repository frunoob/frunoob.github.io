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
    "revision": "1019e6bc18a28af8d839b39f75cd135e"
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
    "url": "assets/js/16.c4b4202a.js",
    "revision": "4e975201e53cacc6f583f17d5218f327"
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
    "url": "assets/js/42.c2e04bc9.js",
    "revision": "126143e9fc01ccb2b95c6892d3174dd6"
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
    "url": "assets/js/app.a96ab903.js",
    "revision": "05d52bb3ec68c83e8b6277b759d172c2"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "9c08e7d5ae0dbc8c04bf42b657b0fc36"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "ae147971513f834f6091dead61568bd9"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "7048980660135f622404e975381c327e"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "85ea6f2878b218e00b566f1f38816a68"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "ad94a10b52f1aa7d83cd745381736e7b"
  },
  {
    "url": "book/index.html",
    "revision": "7cea9f99f1e7e53bb68a948c4b9b212e"
  },
  {
    "url": "index.html",
    "revision": "6134449f60cad0b3e56ac0e1738f40d1"
  },
  {
    "url": "memo/memo.html",
    "revision": "045cee1b7d79d8b98ac966fd89cba0d5"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "111fb069004bd6348e64971433902e99"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d09dae305fcc80e3a3716afcd44e2499"
  },
  {
    "url": "study/english/words.html",
    "revision": "04f3f7beac0254163043e16af62785f7"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e5e6de53adb27b1f69d13676b328a172"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "b78349c56cfa141bbd38e3c3d44da80d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "38e8907a302e80e883ffad48cb8ecac9"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9a9b25a19f0887a7719fd1e394bc542f"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2918f1a71cdba9c6d46cfb9165d52e7a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f1a12a8767237d1bfb25cb084516694f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6122d244af4b1ad2dd551f16ae88a974"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a7070ec7ebe94a0255a834581b6ed272"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f7793a77856553d7c3326913f63b5c95"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2bce10c6fe1035f03b3ff5c376664840"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "bf6c3daa769bf95deb5492e3fd0cc147"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "27268ef7aa3e5cdf91f4075a0fd20a3d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3211e5d15da8a5bc97d677c58cf56057"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "a13a784f9b903e66a8479c289cb2961d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e9f453b2db9b188c2dbc6c7c05781941"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d29cb9cab35c10b54b8d24b8734838b6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "700da2c334ada24587f1c7cfffdb36a8"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "af16cca78991dd69c8f9b2c9020c679f"
  },
  {
    "url": "task/2021511.html",
    "revision": "231534a4622aa3f074d7a05d1f227d6f"
  },
  {
    "url": "task/2021514.html",
    "revision": "3a2f5d3594898e95659003c1366f138e"
  },
  {
    "url": "task/2021515.html",
    "revision": "db14396ee01a47ca96a6aa38a604c2ee"
  },
  {
    "url": "task/2021518.html",
    "revision": "fcabdae28c1071ab136bec3d90cab083"
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
