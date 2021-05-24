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
    "revision": "83e9e6ea0bff437410b0afddb4140326"
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
    "url": "assets/js/4.205a1c08.js",
    "revision": "71aa705a24001c78142fed51b35b918a"
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
    "url": "assets/js/50.7abe61d1.js",
    "revision": "d01f5871ec82740f25d1e3e502bdefef"
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
    "url": "assets/js/app.c52221f1.js",
    "revision": "cfdfc2e1791eeb726a69fd0f048ba12d"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "97934d301744122b3cc015401063ee53"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "7d8b0023642eab3fa374422bc0046a75"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "6df9f9601c8f9df0a0df346ebb566895"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "58c00bbdccec75051876b82b1187e0b0"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "5310a6871e51e2f5d0dd2bd9b1772b36"
  },
  {
    "url": "book/index.html",
    "revision": "94420d1a8240d3fb2e2e9b27875eb4e6"
  },
  {
    "url": "code/cplus.html",
    "revision": "4186b440a2cc7ca46e9dec96cfb67b9a"
  },
  {
    "url": "index.html",
    "revision": "bd6800f86c18136d451edd0c40abbd80"
  },
  {
    "url": "memo/memo.html",
    "revision": "e37813716ed6adb9280986bc7556822d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "4cfca8ce899aa518e02a1767f1e6c288"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1667d32e98971f2fd490119c91dfda6a"
  },
  {
    "url": "study/english/words.html",
    "revision": "a33e445451fa1057296088fe7e0cf32e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "fe2fe720bab26e06ff5872e023965474"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "598d8f4ed36341b5738c9d0976130878"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3abfd28a78f7e52cc076040265dd8dc5"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f69a3cff27ac1df0b470c52aeb447bdf"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ba8d3602b41fa31a4e5667296b5847ae"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "dc7b99dc6e4269685c5989338dcbade9"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9afd063205a002812c502f1cfaa74ae4"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "8cdf20c4e0392021dc27d8881f0de6bd"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c87e735ac337a50806e85554723b359b"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a8694617abbc3e974c961825d4b1d5fa"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "02f7c4baa5f452a9066457ae4c52f41b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "bae1444d3ec9ec69a25278c74b3135fd"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8110b27d438c7c731bdb137eb52cba08"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "a76f2cebaf6a491a5eb77e27f23af1a8"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "20b9e6390fdcf9d288c96d8ff8f70990"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "523ab791e0f26ee9871cfb3dd456ddba"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "eb45b57a069ec86a5ff545a8cfdc03c9"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "97a7327b04c7c3a3fc23829109384b03"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f6e90e61c3b211b4cc55c725240eda3e"
  },
  {
    "url": "task/2021511.html",
    "revision": "5cde50d26a84cd3560ae57e5d9ec93f6"
  },
  {
    "url": "task/2021514.html",
    "revision": "c73200de96edf0eff26134a83117b6ad"
  },
  {
    "url": "task/2021515.html",
    "revision": "9cfb800a1e018ab31f864bb9e67a28ad"
  },
  {
    "url": "task/2021518.html",
    "revision": "a86926a00f272abd7486356ff785666c"
  },
  {
    "url": "task/2021519.html",
    "revision": "f739695ea763fca325cac7c7a5d7d36b"
  },
  {
    "url": "task/2021520.html",
    "revision": "f959dffa80637297c02ea52e824715ba"
  },
  {
    "url": "task/2021521.html",
    "revision": "34e0416e680738545c42cfaadaa71cc2"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "18a27776c8781d811bd304e68e2bc6ac"
  },
  {
    "url": "task/2021524.html",
    "revision": "d168f0902557bfcd9163e2daf2d2cfdc"
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
