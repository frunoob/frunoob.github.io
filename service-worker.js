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
    "revision": "a47be4ea097918dd502b26acf90ba6e4"
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
    "url": "assets/js/17.fda5dac3.js",
    "revision": "7abf3b545c2595c35ee33e8eda06e39f"
  },
  {
    "url": "assets/js/18.b965cd8f.js",
    "revision": "c4254fdaa7b0504381c9f512c0d1d8c9"
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
    "url": "assets/js/app.c5c6ea4b.js",
    "revision": "b604f6d0c52c80905cfda2e02a21867b"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "bacbdd75e2e09ac547727cf737a208df"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "7e6fe1a3c62f7bafdbf0c5e89752fe1b"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "431e4e41e039d4be1a204be605ce4402"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "f920b08376a8d8a4475b53d0bde42527"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "821b239886fdb97e6ba2c74a0ce049f5"
  },
  {
    "url": "book/index.html",
    "revision": "cf3ea601b504a006cde2b1bf7fd24534"
  },
  {
    "url": "code/cplus.html",
    "revision": "2004ee95ec6d22de16dc27907a97a5b3"
  },
  {
    "url": "index.html",
    "revision": "a7737b1e2421ce7d969e2c25dcbd6979"
  },
  {
    "url": "memo/memo.html",
    "revision": "0dbf4909a18fd334db8919a554111cf7"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "84d14fcd656fd579814befc9a299f0ca"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d0f0e2c5d97a90205d37512b72796943"
  },
  {
    "url": "study/english/words.html",
    "revision": "fc5b4fdc498072489823da4af547cdf6"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "11ec822cabebd452a39d4e48573763de"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "cd0baf61446e0d9b8af7c5a2c367911c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d6fde7934a5ec141d88de9879bf2de9b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9abf64ee5141d99249a94ae446635bbf"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e6b860e6136e699242c864589b09d48e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "5a6801165a9e795892f2d1133a9b48f4"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7a677c05318ca0bad7260a284ddfd808"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "aa86c2c06b71b79ec66272cdbcddff2e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "851de79813d9dded035a1420a8e6427d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "532c67dfa51d5f7bd9fc66b1e3c9d381"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "1bf89725f16d77fca93e2759f2417ef6"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7bd706c526a18e658fc9fe6f231d7acd"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "68026a6240cc34d2897bfbb3acce0ca8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "2c7e1f7ade6f3dd164826348175f723c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3e5b4633652e654cd97c58ef740eea4d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5ff98615d8076842ab0fadbb3a1e3703"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "19d942c5c992275e5b2a76e43f5d7fc4"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "26745a3012e84771b9e0ee2dd23ef969"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "166ac5c7b94783a0e716c080c8ae3f58"
  },
  {
    "url": "task/2021511.html",
    "revision": "fb665a081f8465208d4f6b2b21283b34"
  },
  {
    "url": "task/2021514.html",
    "revision": "f0f314fafa8fbae2281ef5e8f0ecf61a"
  },
  {
    "url": "task/2021515.html",
    "revision": "d0aa9baa18da236c320b449be74f4217"
  },
  {
    "url": "task/2021518.html",
    "revision": "f10cc80e46936a9391928ac526d440b6"
  },
  {
    "url": "task/2021519.html",
    "revision": "1d56e17224b86b7328ba7ddf0c3f3761"
  },
  {
    "url": "task/2021520.html",
    "revision": "4fdb5c630ec901d9bc3f6d954dee9ada"
  },
  {
    "url": "task/2021521.html",
    "revision": "3f6a42d8e16109151e71024d456f7dfe"
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
