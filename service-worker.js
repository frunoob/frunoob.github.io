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
    "revision": "a76d06b0a89cdd1c37fd8164df65efff"
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
    "url": "assets/js/4.9ef7230f.js",
    "revision": "784bea58b9e91b78741fdd7e99648869"
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
    "url": "assets/js/51.9cae60b9.js",
    "revision": "5e5c48864dbcba9ca5b71ce891d47c28"
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
    "url": "assets/js/app.0ced8eb5.js",
    "revision": "28de74b2e8ed695601e92686a4c74756"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "797c3c18011e95d1311c514762fee97d"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "da2cf77476117d7575ab79faf447028e"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "f2320e7784033b1021cc3b64efd2f7dd"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "e697642f044872674653694b257d7c1b"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "24c52da7454b163b1559d70a458f5abc"
  },
  {
    "url": "book/index.html",
    "revision": "98b638a04bbdd8b37dc8a3814fdfce4f"
  },
  {
    "url": "code/cplus.html",
    "revision": "c56e49105954033b851fb9824fbcac10"
  },
  {
    "url": "index.html",
    "revision": "1c6af1de01031b334f8c6b062b8be466"
  },
  {
    "url": "memo/memo.html",
    "revision": "fa62ea9fccf5baa47990c9f9629f0ab6"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "4bb930db22ed7ce5a6b650c2f2a93d1f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "49bf1ec00da890573421b41de69ddfa6"
  },
  {
    "url": "study/english/words.html",
    "revision": "b3be7b226b10b8fee8329932475aaaa0"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "adc58e2f907869ca7a5ba78d34bb1b5b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "9e9b62927aec6212fbf780c04072f892"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b3e7b354420da8d0c953531d5d06c974"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7536b2db0383dacc5322646017bc0167"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "b2e1d5a6ba389f2936e8e5c19678e412"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0f831b81c11414f53b72ac33fd7b95cf"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d81e9f4b789209c7f8e1e003b6a74b85"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "dfd1fc68a0795539fb07a3bc1aaadcff"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "dc63ddccb899cb66992bfd3158cf4389"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "e69b804da644e7f0be405e2a1a1a24e7"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "62cfcb8852094b0cf806ce8f0a6bbe41"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "c2d35725ea20c936f04ccdb7cc6409e1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ebc32074626076a33bc6a5d087beb581"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "14283aced58d7c92c94fbbae1ff8be5e"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "5d36b2a1bdaae3775978032da61f5ee5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "629893560562bf6226b3b6a13ec4f3f5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "47d960d98d5294f3b7aec02a3f08da4c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "fe3d01d4070bdd48d84f093ca209c389"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f8396343e7ea1bca97fc48995a544dfe"
  },
  {
    "url": "task/2021511.html",
    "revision": "260de8814fc7be77472695d65433bc56"
  },
  {
    "url": "task/2021514.html",
    "revision": "7a12fdcc1b9373c379c7f08ca01ec942"
  },
  {
    "url": "task/2021515.html",
    "revision": "16030c25888b42bf590319539d1c92b1"
  },
  {
    "url": "task/2021518.html",
    "revision": "716c7a90314e72f79aa5790a72268f02"
  },
  {
    "url": "task/2021519.html",
    "revision": "baf77cdc29efdfa013773272b431cbb3"
  },
  {
    "url": "task/2021520.html",
    "revision": "dc1ad4983efd725a78cbb10c18f75186"
  },
  {
    "url": "task/2021521.html",
    "revision": "785e558b532f79b91e3add8054d5a263"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "4a9bc73441453b9966496016b9df28ef"
  },
  {
    "url": "task/2021524.html",
    "revision": "f1b85eeaecd21c4959b22a78bfdf5bfa"
  },
  {
    "url": "task/2021531.html",
    "revision": "8c486e8b2045dee4721cbc212f986b51"
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
