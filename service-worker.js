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
    "revision": "198118e5f6f4bdc090a73db27aa27c5e"
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
    "url": "assets/js/4.d2ba53b8.js",
    "revision": "0831acfffb2ee3f72986b7cc1690b4af"
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
    "url": "assets/js/45.97e4f05d.js",
    "revision": "5d148b1ee41aa69d78a672eeda86af0c"
  },
  {
    "url": "assets/js/46.06b87de5.js",
    "revision": "97644539c3bba81909f00037c30c4771"
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
    "url": "assets/js/app.668ec129.js",
    "revision": "f7a37e596e8920b011ff1120f08937bd"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "b639a3e03f0e67d19267711d4f3c22c6"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "3d2b6934fe4b52bacec5e6fdfdbdf17a"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "d86be79ec1cfc82dd9364631faf3d92c"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "e66276b14ff3a38d0e4db86d975171e3"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "3f44390b28a9dc933881d6d95a3fbb6c"
  },
  {
    "url": "book/index.html",
    "revision": "fde52b7b98c84ac91bf6f3afc11b2e4d"
  },
  {
    "url": "code/cplus.html",
    "revision": "5f482df933c23c02f80c13fad69ca5ba"
  },
  {
    "url": "index.html",
    "revision": "c95fa41f0ea951dcc8550ce8677e6663"
  },
  {
    "url": "memo/memo.html",
    "revision": "8d4521683c00d45ec84556134507c1f2"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "5ecae58f410d14e3c741e3e165f6a3eb"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3efc0a81fc176e6bfdcf5a1069e8988d"
  },
  {
    "url": "study/english/words.html",
    "revision": "ab264f46bdab0173e82de2a9f72ca75f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "fd2cc594654112a90d634dd1c25f9d42"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f99d3905035c27dc379a58cae3f38320"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "7be9650f16a65f753b70c49ff6cf426e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "6b112fdd44d10059d5ad603d5d9861ee"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "41956bcf1a622c2362c33bc212157953"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d3ecf092eaf80f8105eda5ca1796091a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9c54a0c1b78cbe926321e987d78c6077"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9352f9ff9bbe3184928c3598dd7f1943"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "40b989800fbecef284ec027eb77875ec"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "639bcd37d0a7c1b4fa9c8852336a95d4"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "89f03bad0c4d2a7e1d2afd2ea6abcf15"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "146ec50168f7a15bc4d310bc9d93d642"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "cf2099d1a830eda24edc3ada387ed116"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "aea7a75493b3b1cf25a270361393d0d5"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3b9e84a820565624fa877c686a84a061"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "93b792ea86c7439f6ee98ec4415c0fd7"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ee88b24f417a033f34b9fe521b1297ef"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e427770f7625efe12251032222b9687f"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "3748bb01fd48e46b19113a6711083419"
  },
  {
    "url": "task/2021511.html",
    "revision": "7d72473318c49111c834ff3bfc9d9520"
  },
  {
    "url": "task/2021514.html",
    "revision": "81285fddc7ca5d7d025a87c2bcd7eca9"
  },
  {
    "url": "task/2021515.html",
    "revision": "21e6e06cfa1c84d4ba6c4c3658e2cd5e"
  },
  {
    "url": "task/2021518.html",
    "revision": "5aac4e6411979c63c616f96233b62230"
  },
  {
    "url": "task/2021519.html",
    "revision": "9a328a86974606e527ab20075fbf2e87"
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
