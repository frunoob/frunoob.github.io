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
    "revision": "edfb26cb52bf9957b067a5162b74b2ea"
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
    "url": "assets/js/app.ccf23045.js",
    "revision": "a6fffd60d0edc4d2c0ee25881aeb6cc5"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "ed9154fa1d1351da07fde1edac1a7fa4"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "fb7a9cd7d50b2a85701004f3a73be0e1"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "1fd524a2dafb8e2bec3a89b6ed727d53"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "93586a658b6216b06398032f64db3052"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "ee9a3482d3cc52a39742ba7f1c7b074f"
  },
  {
    "url": "book/index.html",
    "revision": "7b50c2066951b8e92ff65f938d7ecda1"
  },
  {
    "url": "code/cplus.html",
    "revision": "9d09ba6a620e70ebed0a1fb3cc6bcf6d"
  },
  {
    "url": "index.html",
    "revision": "7a86bd8160b3a8f556c525846c696255"
  },
  {
    "url": "memo/memo.html",
    "revision": "58b9655cc1a83e4ce9faf1430ac1cc99"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "883fc7b013f98fe89cc6811a5b739563"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3fa01694dfd29aee2db0954f538f0938"
  },
  {
    "url": "study/english/words.html",
    "revision": "b32ac2b6424d1597e14d5bde29291244"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "fbeaeac085cfe594f513063f6930601b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a5132bebf072d2cadde9413dc1ba64f6"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ff3d46cde09b4970e89ee110a8335cae"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "43333bd64752b6fa232d678ec1b343c0"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "22939848c1285ee1c1713ea6ad082ee1"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "348e8ba74fca6bc9c6741ccbf8937e51"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "a8e28b73b58e7fc91ff14efd7607d852"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5e1827deb93716d5ef9265f48e90c2ca"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ef1049ba4ae6335c799d55b1d273b148"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "45651b5a2ceb8ce43ee1c56ff85ce3bc"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "783f76fbb0e1316b9b5a1f559f7d1df9"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "5f09e95a8dd8011cbf26b01b351fadd9"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "9a3df53c515424065be5237528fafea3"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "561915d34e2a85713fb5ce45afd38a48"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c7afae1525bcb30e08f4be14f5f026aa"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "9922e1ffe8d6edb460863c66bf41ae8a"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6c23a9a026c4e12d5e587e2ded878c7f"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b1ddc30ebbba52b92c72788b64389614"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "8e774e6cb7a1cd59912260450e5d0ba1"
  },
  {
    "url": "task/2021511.html",
    "revision": "be94cddb41c59f9ac0f537bf0d638702"
  },
  {
    "url": "task/2021514.html",
    "revision": "7367924077098b0f496410a956d2c934"
  },
  {
    "url": "task/2021515.html",
    "revision": "53676e5810229e0770eeb649e5218cc6"
  },
  {
    "url": "task/2021518.html",
    "revision": "1f057ee4e66595041d9149b49e95eaf0"
  },
  {
    "url": "task/2021519.html",
    "revision": "f47a1a193c144144ff7782c6482f73ba"
  },
  {
    "url": "task/2021520.html",
    "revision": "4854526e27b87abccdbdb85b212a6e5e"
  },
  {
    "url": "task/2021521.html",
    "revision": "c91dbdfa63daadb7bc59cfadc6a5f542"
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
