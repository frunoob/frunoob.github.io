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
    "revision": "04144c5db80b2b8afc097969a8e83c1d"
  },
  {
    "url": "assets/css/0.styles.cbd5f82e.css",
    "revision": "e2bda26176d3743b071560c964a6e120"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af5430a9.js",
    "revision": "b9befd712ae4537387247b229bffe6f8"
  },
  {
    "url": "assets/js/11.bdc6d13c.js",
    "revision": "8b6634a6e692397f120f89a4d3d66ade"
  },
  {
    "url": "assets/js/12.f5210a08.js",
    "revision": "0a57ba65f15e00f1e7fd723ec1f8ab0d"
  },
  {
    "url": "assets/js/13.db6c31ab.js",
    "revision": "b041c7b003a25afb20454f87f722d561"
  },
  {
    "url": "assets/js/14.b3268b79.js",
    "revision": "84818060022f68b74d1d9d224f278517"
  },
  {
    "url": "assets/js/15.4d155abf.js",
    "revision": "ee6e3487a44677d879b0e60d08ae1931"
  },
  {
    "url": "assets/js/16.0c1211a0.js",
    "revision": "6a178d603918aeff765fc7a3bd8f502a"
  },
  {
    "url": "assets/js/17.c1a7b5c8.js",
    "revision": "ddef1a84ea6a5afeb12a99213611d08a"
  },
  {
    "url": "assets/js/18.4725e648.js",
    "revision": "bafbfae412b9d870402ad5cd1ccbd1dd"
  },
  {
    "url": "assets/js/19.16d25e2c.js",
    "revision": "b416e6e80b7bc694385886a374c047fd"
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
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
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
    "url": "assets/js/4.130391a0.js",
    "revision": "74505f350da38cc95b5cc50842cf8859"
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
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
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
    "url": "assets/js/54.04a360c5.js",
    "revision": "98ce6db978875451f657938bb200dcfe"
  },
  {
    "url": "assets/js/55.518b97a5.js",
    "revision": "4e8ac7e0e15ad4e2af74403b94f03cdd"
  },
  {
    "url": "assets/js/56.cdd69320.js",
    "revision": "85a512e80b219a7689dd5e5d4f198cc2"
  },
  {
    "url": "assets/js/57.9334d585.js",
    "revision": "6fd2ca9b9356ef4b2a818c3e69069a64"
  },
  {
    "url": "assets/js/58.80006b6c.js",
    "revision": "61ca7c94e30e03106c4fc71bcdbec014"
  },
  {
    "url": "assets/js/59.7f305799.js",
    "revision": "4de5e7d5c348d6644bc83897476597c2"
  },
  {
    "url": "assets/js/6.cfe15cbd.js",
    "revision": "1efbe5d6dfd6a2cf91a8f8983e4ae082"
  },
  {
    "url": "assets/js/7.a4d388c9.js",
    "revision": "3f6295de867d12b4268d4d6fc9f4e187"
  },
  {
    "url": "assets/js/8.d84f27c8.js",
    "revision": "c452b15c9bf25d02587a413ce37a3056"
  },
  {
    "url": "assets/js/9.cc580a6b.js",
    "revision": "6090a79c923c3ffdef238a7aeccf4481"
  },
  {
    "url": "assets/js/app.3e2a6dd9.js",
    "revision": "964ff3a5a947084ebaa4ad01aca13691"
  },
  {
    "url": "index.html",
    "revision": "fc4991c3724d132a706c396bf2a9b20a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "a84fd4f9315fe41297dc1d412200ba02"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "0e4aae2e17682c28fd8abc76aeb256f9"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "3684ec669082bac617d5b2e642e82c28"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a0477114c1d3ca4ac42544847effa8a9"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "10de9f0b967b9cfc08ad831323c8205b"
  },
  {
    "url": "memo/memo.html",
    "revision": "be4eb9c2ed0d495507d04c252a10070e"
  },
  {
    "url": "post/test.html",
    "revision": "08a30cb70b02b645d80f2187fd567563"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "53c1fea410c07ef1925a6cfb5cf567d1"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "cbe3da98913d3e6c8862e7b8c631a4ee"
  },
  {
    "url": "study/english/words.html",
    "revision": "e233fef89cab4d80000114928e3da063"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d98f8cd0a9437ec7f8261632588e5bb6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4e6d04b89718bd96186f37edb2ab22ca"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "774f1d8f2eebbd8b52c85326d2a31012"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9a2cedef849cd649ff19b93fb5c2b232"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "5431721451bbc7bafc02599f2f487c08"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d3efa53cf09a4e78a89af11331c79d70"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f87980a90da65f23c158811390457bcc"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cf32a9df1891213f80ebd1ffe65b53ba"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a011d6619a7c4c6fc64be87a648b5390"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "bf6e58126f89e5fe1e80cc970cb7dc58"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "148ffec26a14a1b6377bcfc745428884"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "10f0a41faaca306c664c43585c928eaa"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "7bb0bea96ff0498ed2d89f9f1f9f5a69"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "f01cee51a3422e059380f59b6ccbfc1c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "02f9d118665a3ac3d4b8966c8fa40197"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "dfef90ce096643af97d526ea42436e55"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "9061e59b0930a327d2305b28cc6ab2a6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e79159fa264f136381f45fb55e585465"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f4a332452d09c9e3f9d093d31e2f2076"
  },
  {
    "url": "task/2021511.html",
    "revision": "154eeca5020d9285d7e5c9b2acae4e8c"
  },
  {
    "url": "task/2021514.html",
    "revision": "e2080d8353fd682beb7b30084c5d77ff"
  },
  {
    "url": "task/2021515.html",
    "revision": "cc52a0231574463a3393c9619d3789d1"
  },
  {
    "url": "task/2021518.html",
    "revision": "ffa71d538f8e20bbe95506c0361e2ad6"
  },
  {
    "url": "task/2021519.html",
    "revision": "948e20a0e5b8a83b1747271f1e27868b"
  },
  {
    "url": "task/2021520.html",
    "revision": "630b0d92a548ea19726a2d1cfca085b3"
  },
  {
    "url": "task/2021521.html",
    "revision": "ea3d0e1151755c6c5411f16a7be3816b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "18c587e8ce0c6460b8bbabca5ea613e2"
  },
  {
    "url": "task/2021524.html",
    "revision": "dc5783daff5a7c86fcfd39164eaf9153"
  },
  {
    "url": "task/2021531.html",
    "revision": "5f4cb8f3c2475fcbf6384e76fe007fa9"
  },
  {
    "url": "task/2021628.html",
    "revision": "a4d18c06df48ea611ac616a17d0bfae2"
  },
  {
    "url": "task/202164.html",
    "revision": "74d45ddb7c92a7116f8978a228b99b3b"
  },
  {
    "url": "task/202169.html",
    "revision": "a42eeabc9c0889d6c5750b32db2aa495"
  },
  {
    "url": "task/2021717.html",
    "revision": "f012910cedcd0cbc4f63068d9b418a94"
  },
  {
    "url": "task/2021721.html",
    "revision": "d44a69e923aa5720a4ed85c969be3187"
  },
  {
    "url": "task/2021722.html",
    "revision": "bf44ffd3743f0b11cfa0178b54ee4c16"
  },
  {
    "url": "task/2021724.html",
    "revision": "a6c5d58ddfa36c7bb7104a1c3b46dae9"
  },
  {
    "url": "task/2021725.html",
    "revision": "d4c08dbc5331e2997d119120fc8984bf"
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
