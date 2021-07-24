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
    "revision": "0b92474e976748d3f57bfa71bfde537b"
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
    "url": "assets/js/15.49973f84.js",
    "revision": "4b7094beff7e445f241cf5eb3f631823"
  },
  {
    "url": "assets/js/16.acc76aee.js",
    "revision": "eb1065ef9ef4fe3d006082330457796a"
  },
  {
    "url": "assets/js/17.248ce3a9.js",
    "revision": "a28f13b97bab01ac58593c48fc08d6aa"
  },
  {
    "url": "assets/js/18.99fe66f2.js",
    "revision": "c8da482c70dab245b1135f004419e576"
  },
  {
    "url": "assets/js/19.683cf9b0.js",
    "revision": "6832f3ed30535a7d0cc132b4c417a5d8"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.b94a884b.js",
    "revision": "b686ad44117a12b1abbd648e4f1c7069"
  },
  {
    "url": "assets/js/21.6ac07d82.js",
    "revision": "cfb87534323320ccc082e7461cb62d9c"
  },
  {
    "url": "assets/js/22.49cefd48.js",
    "revision": "b72d3a53f16d38c537331cce22c0ad20"
  },
  {
    "url": "assets/js/23.bd8c0be9.js",
    "revision": "09caba207d99810e8bda592a9bc8e762"
  },
  {
    "url": "assets/js/24.7aecb6fd.js",
    "revision": "49e9408dd05fae8c99f65f301f6b5662"
  },
  {
    "url": "assets/js/25.703e7a1a.js",
    "revision": "a5f18ac656898c32754a4027d2e2aef2"
  },
  {
    "url": "assets/js/26.566a9df1.js",
    "revision": "7121ac69bbb1a196c99b2826b067d26a"
  },
  {
    "url": "assets/js/27.61ab7fd3.js",
    "revision": "d8f05166f9adb04caf679480f3f61b64"
  },
  {
    "url": "assets/js/28.86a732fd.js",
    "revision": "b212be774a9bd4c078f8f1e42649a993"
  },
  {
    "url": "assets/js/29.cf89f13a.js",
    "revision": "3e482481850e9707ae67283ace371a8a"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.40466771.js",
    "revision": "64d933213cbb07a3faeb28b3989633d0"
  },
  {
    "url": "assets/js/31.69056ce4.js",
    "revision": "04f2c5e14924560f25bd61d31aa347f3"
  },
  {
    "url": "assets/js/32.63a3ffe7.js",
    "revision": "b5add937bb9095666299e180df07a936"
  },
  {
    "url": "assets/js/33.24a31add.js",
    "revision": "8c26397766265e8083c57b5d7e9f86f4"
  },
  {
    "url": "assets/js/34.8743ef32.js",
    "revision": "4c348ef7cc92ee442a797ee6fba73fa7"
  },
  {
    "url": "assets/js/35.f6f492fa.js",
    "revision": "22dcf4c21db5c444674f90301304ebb1"
  },
  {
    "url": "assets/js/36.2714094a.js",
    "revision": "7ad9883c12c766e39795f7c232f81c6d"
  },
  {
    "url": "assets/js/37.d58ab974.js",
    "revision": "58741d5bb2d3fa236b29d216ab233dfd"
  },
  {
    "url": "assets/js/38.50e0e56c.js",
    "revision": "0a49d984ac209217a3c0317ba738cd0f"
  },
  {
    "url": "assets/js/39.2d62b2f3.js",
    "revision": "4acb0db82f1e6f0342e607dfec26b8a6"
  },
  {
    "url": "assets/js/4.c13d472e.js",
    "revision": "66b6e99ea86ad15ea51e52020b8d1cc1"
  },
  {
    "url": "assets/js/40.3d8795a3.js",
    "revision": "2ed8bdc11af347b5e4e413215ba876bf"
  },
  {
    "url": "assets/js/41.de9a985c.js",
    "revision": "e249024301b9c3faad806df246bd3b22"
  },
  {
    "url": "assets/js/42.f849bf84.js",
    "revision": "447ffeeac4f03663c17e81558a8aa402"
  },
  {
    "url": "assets/js/43.e3ad5325.js",
    "revision": "93f6b2b3cfde7fc30fab7efea476e934"
  },
  {
    "url": "assets/js/44.36be9525.js",
    "revision": "322f872ded475573dd7de5363a1c4128"
  },
  {
    "url": "assets/js/45.24900554.js",
    "revision": "733d022bb6ffcdb1af8dff65c2769ad7"
  },
  {
    "url": "assets/js/46.8bd13225.js",
    "revision": "d5c4473fe37d06103c546d8c3dbea31e"
  },
  {
    "url": "assets/js/47.dc0a9358.js",
    "revision": "7b4d2b0121446d094b6658504aaae83e"
  },
  {
    "url": "assets/js/48.b75ac7aa.js",
    "revision": "2546acbca27f46930acd94a90946f6fe"
  },
  {
    "url": "assets/js/49.c9ba780f.js",
    "revision": "3e0132881407eeaca73cf338b27a4c15"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.3247bafe.js",
    "revision": "e2507fd09c54d2c3dc84ddd5d86eca02"
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
    "url": "assets/js/53.4215e40f.js",
    "revision": "8b6046045ebe3b75eb2e7ab508352e97"
  },
  {
    "url": "assets/js/54.c30e2852.js",
    "revision": "bc4cbfaad98dbdb7a22fd07c401197c0"
  },
  {
    "url": "assets/js/55.ed849ad8.js",
    "revision": "cb9b2396540bef54081706939174fba5"
  },
  {
    "url": "assets/js/56.b744e14e.js",
    "revision": "ebea84163b1bffe136852814d2a23599"
  },
  {
    "url": "assets/js/57.9a90bb8b.js",
    "revision": "090efce6ff764d15dbd0d8db52a9cddb"
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
    "url": "assets/js/app.e0a188c5.js",
    "revision": "3b050d1ce1a45f7c5e7d6368b8e9125f"
  },
  {
    "url": "index.html",
    "revision": "e428c5b39ec142bbdd7791e8f50cebbe"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "06d10db90142675465cc503eee145262"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "de7a502a5306215443f131ec3d396dce"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "192e9103f2a60df227fee0c5651b671a"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "961a77296fe241ce144ed2e49f4a7cdb"
  },
  {
    "url": "memo/memo.html",
    "revision": "55e83fe50b1c36640f9e2caa2463da3c"
  },
  {
    "url": "post/test.html",
    "revision": "9984adb876bf2cd70506eab1e3f9da8c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "89e3e09df5b6365bbfe69434f5f2e48a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "982242597b5b58db1e36278603afa6fe"
  },
  {
    "url": "study/english/words.html",
    "revision": "4f706f8c2eaf236520b5017c21a481d5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e97bb94b176f3a051b0009829edf481d"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f122f9f305ccedd21f767d1ab74256a2"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "7f288fe8999df096fe5d93cbc2bfbd40"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7f7acbbc132415d6570cb27ac50654c9"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "d40bf26c9e098578150e9e77defafeff"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "a0c89f09bf25d5d14742360af7e9f8d1"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "18b93b89e3ca0c41505c06e3c9c0fd26"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ad0613208c6cb07646d173d5811045b3"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "260327e7c35e60ee282f1d135241b2ba"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "3eb8f0ff61bba9157a160ccafdc29dec"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ef2368a72971918cc707337518344163"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ae503e6a05f3aafdf810487aba1bd342"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "b80cb0edbe3895233cc91f36b3022777"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "364f2f811a0bf2e0a18982a7a7656812"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "aa6725bf8c9d6c9f99fd581c6301d08b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5276e9d767cfc2e66eea28ca2dac1d89"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6785f50722219f3a7f2aed72a6da2cf0"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "4a56cd665edc65e90fc4402692c77a59"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a97189c4f55f06b160f11db492739f2f"
  },
  {
    "url": "task/2021511.html",
    "revision": "d333ca62bb015a062b100786ec7d320d"
  },
  {
    "url": "task/2021514.html",
    "revision": "b61a84994e6a86b743841a9c044d7308"
  },
  {
    "url": "task/2021515.html",
    "revision": "0e851e033a8b0eb0d502687fb8aa8c13"
  },
  {
    "url": "task/2021518.html",
    "revision": "86c781be2eff779f4d72d21813208622"
  },
  {
    "url": "task/2021519.html",
    "revision": "1dbea719e03ad5a7791d92d2217e9984"
  },
  {
    "url": "task/2021520.html",
    "revision": "8eb3ccd0f579caa177c5c02a943c00ee"
  },
  {
    "url": "task/2021521.html",
    "revision": "aad41b79cc5ae2ef8c04ceb451925e77"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8130cc04ebd08a79947c950592c4c915"
  },
  {
    "url": "task/2021524.html",
    "revision": "057213a6f097d3eea40e2fade4442b9e"
  },
  {
    "url": "task/2021531.html",
    "revision": "293c383a4b98f0b24c46a26aaacc7dd5"
  },
  {
    "url": "task/2021628.html",
    "revision": "d8c1cba5096e7974ea970b047be6477f"
  },
  {
    "url": "task/202164.html",
    "revision": "9abed3c3fb0f63a1b2975756e7f4d58e"
  },
  {
    "url": "task/202169.html",
    "revision": "5edf16dda5280ad843afe874f824e81d"
  },
  {
    "url": "task/2021717.html",
    "revision": "1673e7c70d3e379d7bac8887e174a77f"
  },
  {
    "url": "task/2021721.html",
    "revision": "6bc303a972df96a641a240051e758550"
  },
  {
    "url": "task/2021722.html",
    "revision": "83e2598cef6b1e3cc3db7ca66181af1c"
  },
  {
    "url": "task/2021724.html",
    "revision": "5812941d1ea008b3724a0436b53c0328"
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
