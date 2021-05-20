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
    "revision": "f6437fde471c28b989b134e10ba69108"
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
    "url": "assets/js/47.b245aad8.js",
    "revision": "96b4a949d7d7dc92423d833ad1d56c2f"
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
    "url": "assets/js/app.db027b6a.js",
    "revision": "455e761476f9408da769f8a8776d87d7"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "4c16df356ab8aca35e23b2c5914304a6"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "4ec4316750b58147e23bc373ad88eb4e"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "8519b6621fe37b72971155d970cc83fd"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "c3c0f2b4c7e2c7b7a5b52d29b015221e"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "3fc82f52115e58aa3b275791d4eca2ff"
  },
  {
    "url": "book/index.html",
    "revision": "dee5c52ec0da736f04f438371cb9d392"
  },
  {
    "url": "code/cplus.html",
    "revision": "29e681898fd7961c4b970d64de6b97a0"
  },
  {
    "url": "index.html",
    "revision": "1f7586b579f3aed2eeb435c136e5820a"
  },
  {
    "url": "memo/memo.html",
    "revision": "a8c38cacd9b362c69b78dbbff7fb5e5b"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "f30f28fc71df236653ea6a77bfb49bc1"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c00e4ea9855bbf653381bc7a3bc44d67"
  },
  {
    "url": "study/english/words.html",
    "revision": "65f89cc5f033654125cdf7d27a020b6c"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d60d30759f658cac03a58dcd0995b606"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "b7b7d86d8933bb789ff30a19a974e82c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ae8f1637d78d68a686a219777a64eda2"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3722d6665f5892abfd821e1e72056b25"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "99c2968b039e1a08cc74176c7fec1dea"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "c00976248b4934b925728f01a9d7b565"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "bd5397360e30beeed4962b504358fe3f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "c57a28a86b3679b03723bfda952cb7d2"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "18d5b43d0e95a2e32dc1071e8459b41a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "76c2465d205be4288f4c949b67a32bb3"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "3e322cd1d5641f96ff185eb784d1cbea"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7afe9168e4ce06de449917979e88669a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4a26bfb7d86c32edb1d5e56e853193f7"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "ac10b6df82ea9fa1f87e094c70483647"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "675db163477eb08d44aed180b9c0189c"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d55ac1de39dcc5a7a9bdf8b4cf941bc8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f5f20fa7e096f0ff5e1d58ed65334176"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "742d28ab4dc2f36ea000e662c2243ac3"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d87b415dda5485b3a3303441ca62677e"
  },
  {
    "url": "task/2021511.html",
    "revision": "1e33bc238051c967224600e46ac67a43"
  },
  {
    "url": "task/2021514.html",
    "revision": "3a2cc852dd722b586c7edc94e297b48c"
  },
  {
    "url": "task/2021515.html",
    "revision": "794399715e21ed17ac5ee63ac1827027"
  },
  {
    "url": "task/2021518.html",
    "revision": "9197225e9c5fd72bf17472a251dd1c35"
  },
  {
    "url": "task/2021519.html",
    "revision": "79ee86ce9ed4189b9a8b01174c88b233"
  },
  {
    "url": "task/2021520.html",
    "revision": "2edb3d2a6ac0dc885c9623a7e541b906"
  },
  {
    "url": "task/2021521.html",
    "revision": "060c995c5348dbdbd63bf0bd0699f697"
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
