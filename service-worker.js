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
    "revision": "e7a887583b60d56d91c9fc49158bac87"
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
    "url": "assets/js/17.5e08e458.js",
    "revision": "f9d24e4c295a8c935ac11d4dbca7980a"
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
    "url": "assets/js/4.e0a8cd34.js",
    "revision": "a3249d122e8bc4455035289382480233"
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
    "url": "assets/js/49.6892c86d.js",
    "revision": "ec08213a0684e487a4eee21e62564129"
  },
  {
    "url": "assets/js/5.e84f0a01.js",
    "revision": "5314e5204997c617533079617046d451"
  },
  {
    "url": "assets/js/50.1a1de07f.js",
    "revision": "c05a84a83830065aa5638bb594ea0a33"
  },
  {
    "url": "assets/js/51.8ee55eba.js",
    "revision": "9e4a3a0d9cd1e1ff467d502d71820c08"
  },
  {
    "url": "assets/js/52.7797980a.js",
    "revision": "fc86aa0c6782e99c2b2035fd0525035a"
  },
  {
    "url": "assets/js/53.e217dc9e.js",
    "revision": "279d94672e8ec62ad8c050db77c60e2f"
  },
  {
    "url": "assets/js/54.04a360c5.js",
    "revision": "98ce6db978875451f657938bb200dcfe"
  },
  {
    "url": "assets/js/55.cbe36f50.js",
    "revision": "790c7eb09866b1cc83011af47c929db1"
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
    "url": "assets/js/8.0089ece7.js",
    "revision": "9ca47bf5cd39782e8b704d5e787c02bc"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.9c3f5ed0.js",
    "revision": "021aaadd4bbeda8dff25b93c7a721020"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "c4b8f69095efe3e4fe3f419561c0e4b2"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "59dc800d72461b25d1709271546e964a"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "523df9008f420cf3270157e68802afff"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "aa9891919cc419a8d74491e8c31af682"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "2047061260d8dac509ae2a67310c518d"
  },
  {
    "url": "book/index.html",
    "revision": "af0605fee9a55eee3a1b556bccd93bf3"
  },
  {
    "url": "code/cplus.html",
    "revision": "69c8500b00a1ff0ced4d841a2d9f2f33"
  },
  {
    "url": "index.html",
    "revision": "14bffa0792971344e01e95c0290dd51f"
  },
  {
    "url": "memo/memo.html",
    "revision": "6d9bebbde4e5206e790c39f84a6195a5"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "f9702e1e1dddbdac51251a0520c0aa3d"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "4b306c02ca448f189126bf36e1ee0883"
  },
  {
    "url": "study/english/words.html",
    "revision": "3fdf45474890f0060e8eb5e097a3a2b1"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "914c762f7a39f1941a7a38af2633453f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d824fd63d306467b3cf2335c32681fd0"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "61b32a306942e31ea6804762f3a5ca3a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "006b93d613fa110342a6570238850b27"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3a18ca2efcba83157471a082830b40bf"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "690bfe1262a7422be9b9dc611dcb3e41"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "41365631b4b412cfc2d956aba648ea0b"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "28e2fe4619a342cc0254a3d83c6d935d"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "da493933a56c91407ec7f6fd0355eb23"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "db3bc3074911aeddddf68ae43334adb0"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "65ef1dca74c16a8152c93054938690af"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "76704381302aca6367f4e8955d7c32c7"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "d839ba07121ddc027bb868c3662c996d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "1688a88b590052954e1e44bd11de61a3"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4fba3ac83c1f917b7af3cdc090ea11d8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e742074cef1faca030bac046b892a4b9"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "9cae523809c9d74d5f0026a1c27f595a"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8bb00485396c4d3ca6b517feee0255b5"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "aa636398a541e6fbaca587235f8d49fb"
  },
  {
    "url": "task/2021511.html",
    "revision": "3d411362f181f157e62db673d5ebbfb4"
  },
  {
    "url": "task/2021514.html",
    "revision": "02b10da8f29d86b3c34018e21d32ee49"
  },
  {
    "url": "task/2021515.html",
    "revision": "985ac45fd5b738a3e209966f632b9e93"
  },
  {
    "url": "task/2021518.html",
    "revision": "b999365ab9adefe2a16b4eecc3eb39b7"
  },
  {
    "url": "task/2021519.html",
    "revision": "b1d091848b5528da9988bea59a75c9dd"
  },
  {
    "url": "task/2021520.html",
    "revision": "00a7227915c02c4d77f18dcf6ba78586"
  },
  {
    "url": "task/2021521.html",
    "revision": "857e168512cabec6c51119f2167a48f1"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "7c9577468700da8c25376269346877e7"
  },
  {
    "url": "task/2021524.html",
    "revision": "ce0dd9ac9a9092a2e033054f41f1ded2"
  },
  {
    "url": "task/2021531.html",
    "revision": "a9de6f12d39b5e41bb649a44aeec1d90"
  },
  {
    "url": "task/2021628.html",
    "revision": "8ef8d42dfc995bf92047d152f682d290"
  },
  {
    "url": "task/202164.html",
    "revision": "a619e15eba0133f936cf4c027a1d9618"
  },
  {
    "url": "task/202169.html",
    "revision": "5bc0fa7b80dc1913f63a10e06a346e87"
  },
  {
    "url": "task/2021717.html",
    "revision": "c5b8be8a8ca7386eae76bbd86b6491e1"
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
