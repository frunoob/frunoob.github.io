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
    "revision": "c8e212ff5b7a1b00c53870a544e73062"
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
    "url": "assets/js/16.d249cb40.js",
    "revision": "cd95655c7b6689243f4a6fc3e2be1e29"
  },
  {
    "url": "assets/js/17.e04d13c8.js",
    "revision": "194180f4e211073de29316cb35e74ce0"
  },
  {
    "url": "assets/js/18.98da108f.js",
    "revision": "8a9851f3c7686122af20e6e1c4d1c3af"
  },
  {
    "url": "assets/js/19.2391d69e.js",
    "revision": "4f302f20b2dbb2bb12283bcf311c03be"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.dab6ea79.js",
    "revision": "626a1921953d6d4e0fcb1824ff759c65"
  },
  {
    "url": "assets/js/21.6a2e9527.js",
    "revision": "8c36c641573299361f185a34d62acf54"
  },
  {
    "url": "assets/js/22.afeb7f5e.js",
    "revision": "6c1928061aa1e7c05dcdd1919b54f46d"
  },
  {
    "url": "assets/js/23.a5e10a2c.js",
    "revision": "6233f9b50e470c9db3c23f6b471804fa"
  },
  {
    "url": "assets/js/24.7f181862.js",
    "revision": "7057039936010d339e25f79187a09036"
  },
  {
    "url": "assets/js/25.59c0c682.js",
    "revision": "d872cdc8a5855ac1840cfe3e5650ba87"
  },
  {
    "url": "assets/js/26.03485a76.js",
    "revision": "3ea488a02272d6ad6a35e3949282687a"
  },
  {
    "url": "assets/js/27.7ae11ada.js",
    "revision": "15383ce5dff492d1e82e2df0c11c5414"
  },
  {
    "url": "assets/js/28.b4147b27.js",
    "revision": "ad5988ee0f7ffb6b2fa181c2f5fb9192"
  },
  {
    "url": "assets/js/29.de57a276.js",
    "revision": "f324e03363aea24d792185aa068baf9b"
  },
  {
    "url": "assets/js/3.2c95ad0d.js",
    "revision": "24b4e3c2d35dbcea3d49ccb1474ba2e9"
  },
  {
    "url": "assets/js/30.10c6b7de.js",
    "revision": "7cbd6931faf8fd5717bdabaf8d97bbbb"
  },
  {
    "url": "assets/js/31.c33088b1.js",
    "revision": "22bc15d58d70fd8cc16cc44917c74d65"
  },
  {
    "url": "assets/js/32.01313de9.js",
    "revision": "16d88089972a4af3cae8a123efbce00f"
  },
  {
    "url": "assets/js/33.1e884fa2.js",
    "revision": "90e9317be34e01d624a3118efba4c4a1"
  },
  {
    "url": "assets/js/34.1531a58e.js",
    "revision": "22499d6054c3999d12178a371566207e"
  },
  {
    "url": "assets/js/35.ff3975ad.js",
    "revision": "cf9e1f48b3b20d680c1eae148bdd9b53"
  },
  {
    "url": "assets/js/36.de555b97.js",
    "revision": "fbe7e9c2a1956ca282587e45bf7e8516"
  },
  {
    "url": "assets/js/37.bd9d2fc5.js",
    "revision": "047a9212650a7bd08a31d3e3405207a2"
  },
  {
    "url": "assets/js/38.02304a5c.js",
    "revision": "892fd8f995e429a8e03e946c05b392ae"
  },
  {
    "url": "assets/js/39.cbe94831.js",
    "revision": "d02f1e4d7d5a99ded3ae1bf5b0f74e87"
  },
  {
    "url": "assets/js/4.b57db702.js",
    "revision": "624202d33a9bf209f3d2b5b858c92253"
  },
  {
    "url": "assets/js/40.7d184636.js",
    "revision": "bad36bdd6392c5ca34c9c7684b69d1f6"
  },
  {
    "url": "assets/js/41.c9ff91aa.js",
    "revision": "afa49799b82fd0dd8dedc9c99decdcfd"
  },
  {
    "url": "assets/js/42.4c49bcd5.js",
    "revision": "b98a4a0a805d0fbb7114db9c8299c093"
  },
  {
    "url": "assets/js/43.b8c55e00.js",
    "revision": "690bfc8ccbde72581a626348dfb324cd"
  },
  {
    "url": "assets/js/44.bca4117c.js",
    "revision": "67208f319c8813db7b292054c78e6976"
  },
  {
    "url": "assets/js/45.83ef838c.js",
    "revision": "2e8ba8814f4d2a86a65388cb18b6fae6"
  },
  {
    "url": "assets/js/46.066b5bbc.js",
    "revision": "740867a5ce4e4b2ab7e4df20618b62af"
  },
  {
    "url": "assets/js/47.1fe179ba.js",
    "revision": "afa7220d86badf4b2e553746d6fc7822"
  },
  {
    "url": "assets/js/48.4c335c4b.js",
    "revision": "3087e25c45afd71294b21fbd478f91e9"
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
    "url": "assets/js/app.8499c3cf.js",
    "revision": "0a8a4f659041ceec369bdf49afd121e6"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "0b650b9b0ea1abc8f3f5b218d4484e66"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "fabbbb2ffc1427f3c73ffbf7285c680a"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "baa11451d807de7fa77fc30281da7003"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "4dd4af74de138a8571d006ba3f3e4c33"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "2bf1827f9dcf3a42d51400a3efa1a3c3"
  },
  {
    "url": "book/index.html",
    "revision": "1ba38573056c4c47859c1f758919b39e"
  },
  {
    "url": "code/cplus.html",
    "revision": "9ce4846d249ee53b10ae468915dd4d3d"
  },
  {
    "url": "index.html",
    "revision": "fecdd51de125b40d8fbb10148d261da2"
  },
  {
    "url": "memo/memo.html",
    "revision": "a370dbca90c7d8b2ec48b7917bc08632"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "eb858fc8803bfc1d33d7e1161bf65ff0"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "84027debdd8b2749d987e9193abcdc67"
  },
  {
    "url": "study/english/words.html",
    "revision": "f791fc57a52c19b7737b51ef0add783e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d606352abec652877daff31fae84d4c7"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f0a8501161ad373f30ed56f8ad43061e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5a4f180198dd536a34e9fd9d45054de8"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "afcd4536ba42ca117beed7660978a220"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "86a3782efcf3febd26389a37d65ebe2e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "30b732e69563c8631c0ad7f9d878eae6"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "774bf347183d66762e69ea708ad60ee5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "88c330249cac4fd4adb59889f2054779"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "6f083b575840530bb51bb1a8cc5e5621"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b8557da390522246a51f44c2cedaee2c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "1f8e3ea4157e68ae6c530225189a12dc"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "0759ed6ce919fcdd230baca6121dda66"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e82f320d471cc76ed2b834a9520c1b0f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "9214347355ce8249c15478cb03304389"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "8d3f157cf62adcd451ceb5c155aea48d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f2bdafa49b6fde5c2c6fccdc44cdf65f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "73bf6011edac9dfdad4bb212ca091a97"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d947d55a5e53b2dfc912e58fe1e74f52"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "7df8a49a97042a5cb98b3710ee8b6d62"
  },
  {
    "url": "task/2021511.html",
    "revision": "5b1a47ce858c25c8c8e984f8de38d645"
  },
  {
    "url": "task/2021514.html",
    "revision": "5120d1f7da6a8396bd353594d6bf68c6"
  },
  {
    "url": "task/2021515.html",
    "revision": "2f75013b1aad132540a1fa277abe461c"
  },
  {
    "url": "task/2021518.html",
    "revision": "edfc5ce70063855e0366b706f9b00648"
  },
  {
    "url": "task/2021519.html",
    "revision": "0be633d5ff8b32dca2db040835907b43"
  },
  {
    "url": "task/2021520.html",
    "revision": "c231bd2bbdd622dad823b4a210ec1110"
  },
  {
    "url": "task/2021521.html",
    "revision": "3180bf2d8cc5eea87462e5dd11cfc9dc"
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
