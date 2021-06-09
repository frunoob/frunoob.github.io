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
    "revision": "a8fbe079b20aa334ad88986e4358fd4f"
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
    "url": "assets/js/4.04dc7e15.js",
    "revision": "ea61d37258a6e3a7f493916c4efa18f4"
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
    "url": "assets/js/51.ed8e607d.js",
    "revision": "11458a22719ba21b87e6fc6dbba6227f"
  },
  {
    "url": "assets/js/52.28e640e8.js",
    "revision": "87646317861739f25e50fc4768173ef6"
  },
  {
    "url": "assets/js/53.d831465b.js",
    "revision": "1301c02d685607cab3f393f17ec7815f"
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
    "url": "assets/js/app.72fe28e1.js",
    "revision": "9053ccce20b81e880cd48bccefc1d74a"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "8c60adec6f28882d58241a40f6b3fdc1"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "fc6f4bfb037e46f1b7285a529acaa348"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "92f3169368b901ef484d87655cb91aa4"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "663e3dc3a501e6e67c78037d619b9eeb"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "a7fbb4f5ad58f46e41603275fa765c2f"
  },
  {
    "url": "book/index.html",
    "revision": "544f9e8ae6f619177004f13560f5b1e1"
  },
  {
    "url": "code/cplus.html",
    "revision": "7ce694a7386e60e01c0ef8d44ffb446c"
  },
  {
    "url": "index.html",
    "revision": "f00fe064c65ea75b02fde2ed74c9594f"
  },
  {
    "url": "memo/memo.html",
    "revision": "8c3d729e12e7a22c9cbea7b0cfdda9fe"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "a951739a64554192a451e760730c8429"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "40134c613ee9a842ed5314b24a05a7bb"
  },
  {
    "url": "study/english/words.html",
    "revision": "93ccb192c12bb4d357668d7292fe3acb"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "6e9322ae7a4fd5960675b9839a295d2e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "caf9be8c957e9cec378f8b2acb89ba19"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "068961c8922ab806690681fa587c6f46"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "984f4f4f828d3e7d80d4d02d149eee79"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "82fde2eaf96eeaca83817f0f0bc003a2"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "14f6077df3bd7c825c6fee79feada17b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "eb354200aed00bf740483cb8f6896d46"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "35701734db508c3f49db97495336cb05"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "35befa55982b75ec4e654bbfe0086799"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "64c8d4f59fa9aa5174eed687f21a69b5"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "35541eae4b4bbe875bed23399db0c01a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ded17f975c2cb3ab1777356daaaaf53e"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "b719ed8a1ce4be409786ae8f307b8e19"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "11c8c5bac9a188c7ade13d5cdb28c54a"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4fca12c653f9713e61d799a2d79fb0ba"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0bb2ed8a54495b9b8cdb64f95e221e98"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3232359a0c477cd3221bcf14821c5715"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e6b36963c2e60586a571e3e4b8b0a122"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c87644424e1c8e66cf3dc4954e40b510"
  },
  {
    "url": "task/2021511.html",
    "revision": "07256d3cff3f488dfba1d738c0d7eb67"
  },
  {
    "url": "task/2021514.html",
    "revision": "df317909f0fd784f239742a7e7ad2ae6"
  },
  {
    "url": "task/2021515.html",
    "revision": "593b3e1c17632e59da1872856bdd04ad"
  },
  {
    "url": "task/2021518.html",
    "revision": "5f31d597b130af8f675007711748516e"
  },
  {
    "url": "task/2021519.html",
    "revision": "189ea46bcc08338cc182966b06f3b06b"
  },
  {
    "url": "task/2021520.html",
    "revision": "30e43300519b87d7af53c3055ed2a085"
  },
  {
    "url": "task/2021521.html",
    "revision": "b633289977fa0ef3d8eb4a9974cf0abd"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "00dbebf744550fc4e621b0af7ce39325"
  },
  {
    "url": "task/2021524.html",
    "revision": "3f4a04920de43606e9292515576f5b7b"
  },
  {
    "url": "task/2021531.html",
    "revision": "558521ca7dd666c76ffd639528d1b189"
  },
  {
    "url": "task/202164.html",
    "revision": "21413e74f6749ccc1ed7abd2d7242f87"
  },
  {
    "url": "task/202169.html",
    "revision": "dd8d9ee341fe88efa6e2bc60c4a53857"
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
