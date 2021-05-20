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
    "revision": "c7d05f5286183d8cfd09953631b00fb2"
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
    "url": "assets/js/4.27a3c8ff.js",
    "revision": "b63388fd99c195134729d258ae9e9660"
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
    "url": "assets/js/47.a53acda2.js",
    "revision": "2a105554f4acdb7e13c0409172e08a08"
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
    "url": "assets/js/app.24d7b4db.js",
    "revision": "f36befe6136038d199cb95b24a249f53"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "16efb37654ecc44d6d2b774eca33dea6"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "6d305006892520cfba9fcb23e6594d49"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "0a43ed28b05b803ffebba23d453f05db"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "909c8b2e387f3a55fe3ce1ac4776e437"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "29f90860ed9d497ac4719b200758be4b"
  },
  {
    "url": "book/index.html",
    "revision": "e4a7bee6722fe8368095b01fcf378828"
  },
  {
    "url": "code/cplus.html",
    "revision": "cb5d397974ba0f4a3e7562f88701771b"
  },
  {
    "url": "index.html",
    "revision": "924cfeeb4b469daf4e4ccdb3c90a5bc6"
  },
  {
    "url": "memo/memo.html",
    "revision": "19eb0163d7b0f1a82d20af54a3d15878"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ff3f91d0ea4f16cd3e3c9da3fc5e3717"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a203472bb8ff6efcf075f3543e74a3c3"
  },
  {
    "url": "study/english/words.html",
    "revision": "54e2414727148ab860172ad0aa4d53b3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2c777f4f6c75821d61c62fded28b83c4"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "17cd13b767ac4020c5b0749071098b62"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "af7f8b9b035c80e406c3eed70268a146"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "cb40e58ecc26d76805a0b0af8769eb1e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3002755368bdc991405fa4be4568c314"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "e30ae469233f63a26dabc78bc582fe8a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "25192f8fcd5d9f6ac453408259902b5c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "8f055e26df6eca827bd16687bf119578"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "04700811984818b90d07b4fe7d6762f3"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a0a2906b21841be81f1e7ac1c5f63362"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "31190d6d26dd0769f5e596358ef4167f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "17566a88deb97788f3cba716ae96d748"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "03a41b41ce1b2e06bff1ada812b62558"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "dcb925f5fdbad123d3fa0ebed07a23ee"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "034a334ce32e830fedaf8bf86f4278bd"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "726535153e04799602d358e156900908"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "a9a8164722593b16e232ff19af4ec8a3"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ff16c50668544301901b96d90b780d90"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "eeb6d5d865181ad155cdaf8a86c5c4d5"
  },
  {
    "url": "task/2021511.html",
    "revision": "603019635760f7453298148b5061ea7a"
  },
  {
    "url": "task/2021514.html",
    "revision": "beb808aff53a21477e001c7670f6b2fa"
  },
  {
    "url": "task/2021515.html",
    "revision": "5d0179e803b0d0f0492922f82801678c"
  },
  {
    "url": "task/2021518.html",
    "revision": "c1c11fb0d77178287f9ab014f4881093"
  },
  {
    "url": "task/2021519.html",
    "revision": "c1ccce6e61561b7fb07575c02b9a7abc"
  },
  {
    "url": "task/2021520.html",
    "revision": "68805edf72215f5411717f32da659650"
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
