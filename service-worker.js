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
    "revision": "6c0089891b456fb18c9639081c7adc00"
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
    "url": "assets/js/8.086037a4.js",
    "revision": "a49a51a420957bc88f857ee11350daf2"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.b0c7b35a.js",
    "revision": "23e45b55abcc2bf8220a4958bdc4b92f"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "461f02998ede542997e2a8bc3aae8f1d"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "ffb07ddb2c68ffbc229e330bffff0743"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "649c2bfa2febeba27ceae776e2b23b05"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "3859c7c115b760e6247ffe30f614e835"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "3a708ac7632fd26a2165da28641ef391"
  },
  {
    "url": "book/index.html",
    "revision": "971764e572636b9f874e08e83d68be69"
  },
  {
    "url": "code/cplus.html",
    "revision": "f52b0ccede50eaf539396929d4be7f68"
  },
  {
    "url": "index.html",
    "revision": "58a2511e30e88a2c3e9b0e994b334805"
  },
  {
    "url": "memo/memo.html",
    "revision": "530f2ffb63d7a73baf2b36827389c237"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "26d454d24d0684fcf7d80f5de613b5d2"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "59c592bf86d0b2ce43df71306cd274b4"
  },
  {
    "url": "study/english/words.html",
    "revision": "c54ac58aab87487e21552bbb0d39df42"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e198175d8d20054c45af16fec0703b46"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "bd18cc84e9ba3ed5c456c07aa1e683dd"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d02737cb6a3fc0ba40bf5670f14511a3"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "da365584368ffadd14ca4c9f11d4583d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "62882a50221d06e8c429a1ea92cc52cb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "caa047b877e0b522895d66fa483043a9"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "ab97cd60fd569792818c320de8ec03d7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9d36a1e656fb1c95b41cd41e4d33ffb7"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "14eed29270d179a56ee13fb5a92d136d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "79ecb128b9c3a1b111a231bc0e4768db"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "444685298f8a2e6db449fcd43da6f8ef"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "0e1c69cc3741e263e8aba46d8333d271"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "529b15f268b17cb50437fffeca6ae58e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "7e4ff57f1656589c48291af6ed9aa874"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ac56a5c7afac4f0d1aea09578dfa84d4"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "af59be1d0b72b375de5a0171bc43163e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "2b60840ace748357c661c59f40f114ad"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "687710912eeb6be65c8f0774e8243ffb"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "278872664afd8d507d06feadb46f5b31"
  },
  {
    "url": "task/2021511.html",
    "revision": "6252e741cc206a2f9847269eeea9bc1d"
  },
  {
    "url": "task/2021514.html",
    "revision": "e284016397d8d4b1f69f43969abf9a16"
  },
  {
    "url": "task/2021515.html",
    "revision": "8b1d5751cf0560a9543aa89ba23134bf"
  },
  {
    "url": "task/2021518.html",
    "revision": "d08831acd00fe35f738a4307bf1ca9e4"
  },
  {
    "url": "task/2021519.html",
    "revision": "a11d4f91457632da2d433983f866a78a"
  },
  {
    "url": "task/2021520.html",
    "revision": "20e9e2a679515a4151c8d58691f7b677"
  },
  {
    "url": "task/2021521.html",
    "revision": "cd4dc2d012d242f07feed552f6b6bb40"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "92ab29ce2b26b68905c2a2bd154f43d8"
  },
  {
    "url": "task/2021524.html",
    "revision": "8db907c5fe08da782f33b2a5b6ba7e34"
  },
  {
    "url": "task/2021531.html",
    "revision": "5f387ed84f70aa94a279323b5787862d"
  },
  {
    "url": "task/202164.html",
    "revision": "f839c469e7d1bc50c1353b9c0ae52fc8"
  },
  {
    "url": "task/202169.html",
    "revision": "d10c0d1e453010bf6511069264734d74"
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
