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
    "revision": "9f0b92c079c9e055b9825608ac63be04"
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
    "url": "assets/js/4.71f90130.js",
    "revision": "dc4f216e1d6946135d68c97481da7aee"
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
    "url": "assets/js/54.2f29feca.js",
    "revision": "b766844c9bdcccb6a7f902d8cd82654b"
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
    "url": "assets/js/app.fc9f83f1.js",
    "revision": "e947d13e11b0c9c60e41e287220d44ce"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "a12fdcc899617381820f7a77d8399461"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "def4675c9de2e2e2bde16532b0976107"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "22d23327cb739dcdab737c12ab375b3f"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "55117dae0346becd1a1e21756acd1b31"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "9c395c203f0b438d8c2e410d39a6e520"
  },
  {
    "url": "book/index.html",
    "revision": "d936a9f259062002680aba45a2fccc90"
  },
  {
    "url": "code/cplus.html",
    "revision": "6db57f5750598d7598d3c9b017caec05"
  },
  {
    "url": "index.html",
    "revision": "e68902fd605847758532e5a7c5defbb2"
  },
  {
    "url": "memo/memo.html",
    "revision": "78bca0852a31ac93a2787b24a150025d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "f5ae3c5e695cc5fa62db0b6a64273d09"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e3d7e48bf8f76e843c2c39025e4fdc58"
  },
  {
    "url": "study/english/words.html",
    "revision": "cd275d2ee38704335d4aea8828e75022"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "82c41bfa8b1f3e2483b33aabd19a5b92"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "00437a1fd9f2e71a1568f518fee54ab9"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "aacb98d55a39b6343c6cbd878e96864d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "002bbc1b4fb00a4abeb0fc99a755f5f8"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "780ffa704fb006478c42d92ba4492270"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "55b475a31fc41f8972b93ff54944169d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f1e1915aa8defadf70941981e42da74c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "1770ab36039770f3d2a6841453750fd1"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d4802a7ad135a640d81db45d97718d2b"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "4aa6a4b7489e17f6dec872e930dabae4"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "291309d31d27f34c8e791e738b4c2e5c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "79a404cac2899f3a396a86394364a391"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "17bd850aa83c942de36488948261bd69"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "595f9e3cc1922a7123d10eb02b37734b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4d6b546a443960abb0023f352bd95951"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "19c8dc69631162f21c3ef529a6938c80"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b8347d241e681fff9e3fc9a05bc12ff2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "c7461c2ed8014bb6f3a7aabac7fa91eb"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "eb5954b59b5934b28e00a5cdc74280b5"
  },
  {
    "url": "task/2021511.html",
    "revision": "80da9e765e93a2266967302f17d12f55"
  },
  {
    "url": "task/2021514.html",
    "revision": "059f16909da3605df8e6797b59e160b3"
  },
  {
    "url": "task/2021515.html",
    "revision": "6741a95cf8fb2454f7d3c12adec04885"
  },
  {
    "url": "task/2021518.html",
    "revision": "5999e595d9bf8b0e29b94298f02641af"
  },
  {
    "url": "task/2021519.html",
    "revision": "bcd4e32f32d87e890f2d2d7393105eff"
  },
  {
    "url": "task/2021520.html",
    "revision": "231393c635ac859cd3cfb954a1a9240f"
  },
  {
    "url": "task/2021521.html",
    "revision": "b00da63807143cc65622a9f6d19f2382"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "150c0032b1c053b387a4f0868d95b050"
  },
  {
    "url": "task/2021524.html",
    "revision": "4ba96d46cecb8ff13629686813edb38a"
  },
  {
    "url": "task/2021531.html",
    "revision": "c21b0173889cbad491a7084d9c0bc285"
  },
  {
    "url": "task/2021628.html",
    "revision": "d0dd6cf6f9bd7ec6cbab9129052b0eba"
  },
  {
    "url": "task/202164.html",
    "revision": "bc6c185cc31fa1de3bc06a523b87b2e1"
  },
  {
    "url": "task/202169.html",
    "revision": "d23bf926a03b18c93b409bf1754c9ce3"
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
