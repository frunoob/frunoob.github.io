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
    "revision": "0aa2cb4cfd3abb362d50ce8cfdcb3e9a"
  },
  {
    "url": "assets/css/0.styles.f7618250.css",
    "revision": "8c4b4873d0fac5601adeb278ed565ddd"
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
    "url": "assets/js/4.261f49dd.js",
    "revision": "61abc401be16123e0bf6df278667a6b0"
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
    "url": "assets/js/59.af7069f9.js",
    "revision": "be3d0df091c5835472c7d4133eeaa4bd"
  },
  {
    "url": "assets/js/6.d186b650.js",
    "revision": "00d7f9d7b490b86df5d012ede45e6a23"
  },
  {
    "url": "assets/js/60.b4830967.js",
    "revision": "225748f87dd22c0336ec64ef60865a2f"
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
    "url": "assets/js/app.44a484ab.js",
    "revision": "7b38931abdff65408424c6a81f8e6b60"
  },
  {
    "url": "index.html",
    "revision": "0eab524198ee4bd1b5e230a7507eab16"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "1c0b7fedffedb96fb84d242507acfbfc"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "0d8d229ca79d19262f7ed85f62471182"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "73d32becec761145bbfd22bda438cb8f"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "bddcddbd45e131fdef2ff66441718c70"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "302a9a6226feb5d4ed422c3d0b71560b"
  },
  {
    "url": "memo/memo.html",
    "revision": "17331103463c59e531ddb0f96db282bc"
  },
  {
    "url": "post/test.html",
    "revision": "97853968e2a6e5039bd7cd50657af465"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "7bdc660b670abebcccfbdf6caf943fde"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "8638ec350aefd3560ace884edab8bac5"
  },
  {
    "url": "study/english/words.html",
    "revision": "3199f23fba24f167fd660a402ea57982"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "ebd5d7b58e1bbef3e53c483fd7f5f1f2"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a4f34db31319215fd9e11396e86ed032"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "05d8e70641474c3fd75780bf2e907d17"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a0104aa15956b14847acf196296a89b6"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "0d0ac8c9d97abf269376a149a1b849fb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "6e8eaf83a5de3f72d452ae53fda30f19"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e3e8f2a0cbf7d72d33d965d561713b6c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2f1f64e197a97b150aac618282be7e1e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "baaeafce0e592f00a371fc705943bde8"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "516fe1cf13c21329d03fc6b3294129d6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "876051c4ee8465666cd6ef07929088d5"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "88720b3a02ac32a051e7cd563be1158b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4bd9e6fb4e28c47807bba605ff49f586"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3887a6e5e3a63f205ae63480164d9909"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "867f51c11d12cb6b89f3f10925cc2fe8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "336dc91083fcd12c25b0801fa7796f99"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "e649851f57538139608f9adf87403b2c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0db5aa2d58248cebe1665100637bdf36"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e342beae565f7c32b45db1e669a5ece9"
  },
  {
    "url": "task/2021511.html",
    "revision": "140e73c4993d9303c90b09808487092f"
  },
  {
    "url": "task/2021514.html",
    "revision": "54c75832136701503857baec8c8dd074"
  },
  {
    "url": "task/2021515.html",
    "revision": "70bfca86370cbed5cd7b74ed9e4f937f"
  },
  {
    "url": "task/2021518.html",
    "revision": "d7cb7b703d305de76329a8a7bbf33328"
  },
  {
    "url": "task/2021519.html",
    "revision": "a688eb6acca6593acb70bd884fa30a6a"
  },
  {
    "url": "task/2021520.html",
    "revision": "24f605dc5b966535c6348be7ea28f617"
  },
  {
    "url": "task/2021521.html",
    "revision": "e7b07fbd2984b395ad10b3f11a104282"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "41ead7544431e07b1ae759b44ca38c5d"
  },
  {
    "url": "task/2021524.html",
    "revision": "46c990b162c6587c3b01074bb9bf3654"
  },
  {
    "url": "task/2021531.html",
    "revision": "dd644de3f37194b27f641dd0a3e16163"
  },
  {
    "url": "task/2021628.html",
    "revision": "9e3442c0117e86e02e50b1f4a9195ade"
  },
  {
    "url": "task/202164.html",
    "revision": "74b1ddd6778ce00a60f4d6a4a9ce25df"
  },
  {
    "url": "task/202169.html",
    "revision": "b0cd36b19031badbc494237a3bd651f0"
  },
  {
    "url": "task/2021717.html",
    "revision": "057f4f91325d04499cca8bb8b55d53ae"
  },
  {
    "url": "task/2021721.html",
    "revision": "d86e95bcc7458a88a8d6545be36be589"
  },
  {
    "url": "task/2021722.html",
    "revision": "a94ec8ae7747fc49ac702b59f3a7bdce"
  },
  {
    "url": "task/2021724.html",
    "revision": "79afaff55714c404159964dd34001ec4"
  },
  {
    "url": "task/2021725.html",
    "revision": "da58718800700d1316bb3935b53528fc"
  },
  {
    "url": "task/202181.html",
    "revision": "f116408b518bbf95c57329bb7b110f91"
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
