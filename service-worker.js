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
    "revision": "a8fab8ab83a7f75736dc2fa433afb12e"
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
    "url": "assets/js/4.ce6a8b24.js",
    "revision": "f55151abfa3308bfda3c96b9ebac2640"
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
    "url": "assets/js/48.6603994b.js",
    "revision": "3fabb777a06c850710f02e495dda5024"
  },
  {
    "url": "assets/js/49.3281fa62.js",
    "revision": "cab446bed8c2a242e6fc1522f8193bb0"
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
    "url": "assets/js/app.13bcc0ca.js",
    "revision": "07846b8ed2e51c910c3c077f0a5d411e"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "323b102e915efca5891eaf49cfb09917"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "2b3409aef28f042b6db50ad6f3400003"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "fb2caed5af769a2956a3ed88e2d93ed4"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "8ab0f2610c35f6b0c9630d585185d4a9"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "595c647c7101ccdb0e6490e514e3ed7a"
  },
  {
    "url": "book/index.html",
    "revision": "fe7963002df31a1ea70bad2217d3615f"
  },
  {
    "url": "code/cplus.html",
    "revision": "016fb9b74eb366aa246f306c9cd8f37e"
  },
  {
    "url": "index.html",
    "revision": "c40b31e6a8de730e3126790530bb6ba3"
  },
  {
    "url": "memo/memo.html",
    "revision": "95d9597abacff859a43be1d8b52b7edf"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "b32851c1ecf2ffd621d068d783860eb8"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d5902cadd7e5f214f1b507850ed7ebed"
  },
  {
    "url": "study/english/words.html",
    "revision": "317fc421ebd7b71a9afdb0abb6df0016"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "7be5fcb5a2e911843010280019b5a584"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "381b956cf02dbdd8807385290708f4b6"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5387eeaaa4aced1d3ac0be063c17aebd"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d3651c31dafab660b4255f21d3732925"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "84bd60d8b720d3cf3a41e9e5e21e06a7"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "dae06f0c4ea98e98b972de14b019f3f9"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2f1ae3bf7cb68e5ba322f0ab6021972a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "4e2be1fc4b77020b8a46d2892ae95c88"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "29ce148f9c1f961127eb129c909e66e9"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "aebdd4f11236ad83e6d7b1d24afddf81"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d9e85c1a4ed059dbd4c158fee8709baf"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4af2df118dfcb9afb69abb6373ceb285"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "338397268963554d744e70831be129be"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "ada7cae22385941e0baab19607a3bf98"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d82be5f799d9e88b541cb4aa48873b7e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "9b4479c9a92d436f6ea8b69e27da6811"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d9716a4642e0fdc17b95efc9d8888cef"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "62a502cdae1d058a48b78b8b4d2b4be6"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "672cd1f71b20220836962c41bbe6d822"
  },
  {
    "url": "task/2021511.html",
    "revision": "e91120620d8f1d65fcc3dedde6d5dce3"
  },
  {
    "url": "task/2021514.html",
    "revision": "22d4b5f96fe32570568433b42de20c4b"
  },
  {
    "url": "task/2021515.html",
    "revision": "705e8d092cfea5ac4963cf1b15120c3b"
  },
  {
    "url": "task/2021518.html",
    "revision": "56302f5299f14f474124a9c27ba66136"
  },
  {
    "url": "task/2021519.html",
    "revision": "73b48dcd76ed76bcaf84f2c1b5de6353"
  },
  {
    "url": "task/2021520.html",
    "revision": "d0f1e4598a714866dfd02468716e2b23"
  },
  {
    "url": "task/2021521.html",
    "revision": "acdddfe715fe61fcb8fe6d5e20665f2b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "2ed4de79fd89997d983a861430dbfc84"
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
