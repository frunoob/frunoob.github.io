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
    "revision": "4d8d01e80957e31bff0e3601477fc93b"
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
    "url": "assets/js/4.5b58d0c3.js",
    "revision": "6777cb92bd565dfca26b1883b9b6b6cf"
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
    "url": "assets/js/52.05b2a2e0.js",
    "revision": "58a9d5fb11810008ae329753cc914a2f"
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
    "url": "assets/js/app.acdf8053.js",
    "revision": "4d24b939a0d7feb0704ed56b2e319606"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "4fe03d619b904d0983198fb83fd8215a"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "4a1b5afc75eba9d4caf54d095075c664"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "c98ac25abae0290842cb0a9d355d7c03"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "e131c84c11ec4962081afb639bf3bcd5"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "dc563e3d861a4f4f33418a70d1031346"
  },
  {
    "url": "book/index.html",
    "revision": "e935403feb5c4ce63e3d4855af25cb5c"
  },
  {
    "url": "code/cplus.html",
    "revision": "d6b0ded364791ce8a7a34f87ae9db760"
  },
  {
    "url": "index.html",
    "revision": "e23743825187a7a37486824dce7bb808"
  },
  {
    "url": "memo/memo.html",
    "revision": "a9d8c4c52cecfe90868b6c5c6d8179b0"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "9e68c986e3cee96ad301892f351f40c5"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d3cbaf060d78b0270c5297d26a171e10"
  },
  {
    "url": "study/english/words.html",
    "revision": "6172187cc6d22fe79cdfae2de55c16f0"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "af843259156a82d5def7022cbb9c14c4"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d8f5111e32da28186423ac79f82ddf75"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b009ea50e3bc4bfd0ed6c3fad109375f"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "928f27840611dea396dd61dfeb74abbd"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7534f19dfa2147d1cb09d77fd2221746"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "3839117fac6a5436a6aeac7229f76dd3"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "704b024863a2a6b9d5e9eb145707c79e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9bf2aaa2ba3df28d61a4e30d680b55cf"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "fe83b30b7ed810c611ffc5e78a2ad4ba"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "c0c310b187914b8233b4e37d661d36eb"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c013f5f7701208a06ce566bc8d54c213"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "a169b1905a2225fe18e16bc634e05aed"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "dd33413439e857674d5729e31f2dc8e1"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "dc7d5abd41d01eb0feca8dbec2c48132"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "dfa43ebeb1aa55689c032241188d5d69"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "bafabb789e7a99f30b848fd2f7be99bf"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "a76cceae101fc926004c67c24c771ae7"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2925d05b7451ca82303d1c1ea9812c98"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "0052cb9fe313f8554d29f3994a1d6f43"
  },
  {
    "url": "task/2021511.html",
    "revision": "b1dde5e88f2f296e7015acf9981431bb"
  },
  {
    "url": "task/2021514.html",
    "revision": "94d736db9fc0cb71aca2a39c6eac66e6"
  },
  {
    "url": "task/2021515.html",
    "revision": "eeed07b5b79238bc229ab0ca43296e17"
  },
  {
    "url": "task/2021518.html",
    "revision": "e600481ba8fe9e0f1b1d4cf9ed3b3238"
  },
  {
    "url": "task/2021519.html",
    "revision": "fb56359a2a5aa09ce9900c677e29e2ea"
  },
  {
    "url": "task/2021520.html",
    "revision": "61b61dcd1be2d23180adc11df9e69e17"
  },
  {
    "url": "task/2021521.html",
    "revision": "ade5a8d29006c4fea0365c3ee0cc0845"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "93f96215275912c4f17ef927838f30ef"
  },
  {
    "url": "task/2021524.html",
    "revision": "c0b873358978c1dfe5d519075a59f3a6"
  },
  {
    "url": "task/2021531.html",
    "revision": "ec0e72ced3c0fd0e86f37c6957c46b95"
  },
  {
    "url": "task/202164.html",
    "revision": "4ac011f9070b1397cd13a48f56f1bf92"
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
