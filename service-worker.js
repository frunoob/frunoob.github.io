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
    "revision": "7518cce5910e52499ff8919b8e582184"
  },
  {
    "url": "assets/css/0.styles.ebd1058f.css",
    "revision": "fdf1f5b6bb4ec68ca340b52b86238504"
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
    "url": "assets/js/4.6131bd23.js",
    "revision": "857793c201b0917d73402b88aca0bcaf"
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
    "url": "assets/js/6.06f53c15.js",
    "revision": "007acd36f4f324b469b0fca856142a96"
  },
  {
    "url": "assets/js/60.74313fbd.js",
    "revision": "c3945a716b466d6ca6b9c802a87c7960"
  },
  {
    "url": "assets/js/61.0913e5ab.js",
    "revision": "faef4862f940f6f97b50a93ef6aa24c0"
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
    "url": "assets/js/app.1cf0df1c.js",
    "revision": "3835812a48caebfdcd1fc60b8b2e75d6"
  },
  {
    "url": "index.html",
    "revision": "7a38ac34f022db7c35426f53b1eeec9d"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "2c11cc537ad838e10ba999955938d201"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "8373a72a646d20240ed501eb985f5c89"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "27e49ca461f9cd53c6f7c86306bf9dab"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a2c023cfe2731b3b346046c457339e0e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "6e576083f7b084c24c26273e9b64664e"
  },
  {
    "url": "memo/memo.html",
    "revision": "37313939a9388fdfc226e66bebb007a9"
  },
  {
    "url": "post/test.html",
    "revision": "f666fc6cfdd7cebab7fa147cec096c6d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "603a7c03e5d508d481f93d9f3fcc840a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "17103b0417f0744c905418049fa64e53"
  },
  {
    "url": "study/english/words.html",
    "revision": "1408c77284753319bfb52d3050b6c937"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e79a68c67e42dcf59abcc93476cdd554"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6d6f661df0dc9137f5af1fd0f18b2551"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e1e21ccaea58faaae8f7c95a9f7d5603"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "bf88f7a3763dadcf854a4185e9ca878b"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "40abf3b4e9e5b81ba6e23812fed09267"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ce7b428342a1c30157a8a9662465a996"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "10f1b212b88539aa68676695ab19c654"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ac667b823c12d19f242101fe1d23d55c"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "dea6262e6f7d3e9eebd39798e2a01365"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "c729992d8b26d590a7e54cc81853fc79"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "3710fbd59468e2df847466cfe24432d9"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f3191e62425f303743eff98eaac2a2bf"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "9c7c61f270986fcf437ad5338f454c5c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "ea9d9d669efdbd06fa35267487dce695"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c314e3f5f32e7a22adb3e40a1a65468f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e169aba6ff25c50ebff2b23115990ffe"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "632b9746bc273638d3bb7d5b6d3eded4"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "6e5788d331a868e72febf91a5c6ea53c"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f8ec3048da9b95df2a04ff830dc018a3"
  },
  {
    "url": "task/2021511.html",
    "revision": "9a395074c99f8ffdabb055db4421a125"
  },
  {
    "url": "task/2021514.html",
    "revision": "de26503a435481d73c0f6b57f361f2e7"
  },
  {
    "url": "task/2021515.html",
    "revision": "56b88154a6ab296bb7301406bea47332"
  },
  {
    "url": "task/2021518.html",
    "revision": "f379fc06fba735e19bd31db2170c54ab"
  },
  {
    "url": "task/2021519.html",
    "revision": "ebcc5ea302580c27167f03c004df029f"
  },
  {
    "url": "task/2021520.html",
    "revision": "885c4bad5b02981cba3d130705e3c2cf"
  },
  {
    "url": "task/2021521.html",
    "revision": "a29ae32e2722e3e30f4f59286e89a75c"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "3035587866a402fe6e03c5462efcc0b8"
  },
  {
    "url": "task/2021524.html",
    "revision": "0ef4a1ed1d502d6b27b83c149c8c3533"
  },
  {
    "url": "task/2021531.html",
    "revision": "a96c9afd27ee24efe6a2876a97bc8808"
  },
  {
    "url": "task/2021628.html",
    "revision": "3dfa14fffd008c536978f36ae21e65c2"
  },
  {
    "url": "task/202164.html",
    "revision": "f2108d2570fcf9817858442f9e589d78"
  },
  {
    "url": "task/202169.html",
    "revision": "b7c804ade3c4b073a32148d82355e14f"
  },
  {
    "url": "task/2021717.html",
    "revision": "061cbe62412731cad55b74a7176601d5"
  },
  {
    "url": "task/2021721.html",
    "revision": "cbd9975a8f6880ba7b56d8f476f5c30d"
  },
  {
    "url": "task/2021722.html",
    "revision": "31c6814ab50e4fc89746f506e0acbab2"
  },
  {
    "url": "task/2021724.html",
    "revision": "4279f8ccdf30872bd9c392bf500a67fe"
  },
  {
    "url": "task/2021725.html",
    "revision": "0ad50a348ea01c502a6ccc3acc71261c"
  },
  {
    "url": "task/202181.html",
    "revision": "b27d603616f7004d667b4e8cea5094b2"
  },
  {
    "url": "task/202183.html",
    "revision": "d5ee9f3e164b6d0417286d7fb85a520e"
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
