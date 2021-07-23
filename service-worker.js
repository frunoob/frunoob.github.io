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
    "revision": "2bd2505e3de18af843a799a007892293"
  },
  {
    "url": "assets/css/0.styles.8c3bd19d.css",
    "revision": "8d70f312fb187d89a68d5bc9cd56eda9"
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
    "url": "assets/js/17.cc5f9f15.js",
    "revision": "5b12325687f9cd5e4464d5667e57a7ea"
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
    "url": "assets/js/4.4594c12a.js",
    "revision": "925211e4dccdd7111e3cfa3f6782ab22"
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
    "url": "assets/js/56.54e4386c.js",
    "revision": "f50be3264fbd54f52a9c23f38c6ee1c9"
  },
  {
    "url": "assets/js/6.635f6375.js",
    "revision": "4208bc04c4bb00650ad4625b11550afd"
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
    "url": "assets/js/app.d98bc99c.js",
    "revision": "ea14daa107ab3554ed11a963f0dc83b5"
  },
  {
    "url": "index.html",
    "revision": "7829cea4bb1ae618e58bc990c42c3c44"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "21efc39e61417b9d27d712e57dd24cae"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "5e2a938c8cc51f98281bbca2dc765324"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "fc50aa4ab29bc691e95de0986e7186c7"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "52f773eea706700abfb197fee557c732"
  },
  {
    "url": "memo/memo.html",
    "revision": "f3d7a817d65e944600174589c14d813f"
  },
  {
    "url": "post/test.html",
    "revision": "b9e11d817a0ab0fe42361cfc1377bced"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "59b0ddd94740c730fdd8c2e064d370e3"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "dd84069215b7cb62485797087fe0b49e"
  },
  {
    "url": "study/english/words.html",
    "revision": "0e9361395b69b1e79325ee55bbd44468"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "feee1962bc91521b2f6d376ca5a2d283"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "bb9922a3248bad68dbf6e184ad6339ac"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2e9d2b2b2763775feb77b7bd4eb92f31"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b4cf5e6be42e16916dddd718f41f6374"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "40a081752a331531d6a82a983c8a1743"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "64f3239078cb47eca37d5449290b4cbd"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "90300d63dfd922e59e2fe6696bf14773"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5bcf80070e0a8ec4478a3383b467156c"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "adbb0ebf81b3eee161c8ebb0283ea04c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ccbb67df52ccd5730239560a57167786"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e004df1428879b7d65c21728086f86c6"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9c807f285b1133ba38e5ee282e9f1d7d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "efc5f44bb5ae5df80ec45799b085d9cb"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5e4f5d9ff51fa55d7a9cf974729add4c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1b2adb91dd8a248d113a4fa64f8d8530"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2f100e284755b54524efd5941d677feb"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5b7b828f52934c6649845953a44fd667"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2e1702dbbbccff9b02b9d8a352ace2f6"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "7765f1927393a88cdc03bc9d8bd4c4ef"
  },
  {
    "url": "task/2021511.html",
    "revision": "14dbb5a62b29f293970f81f2c1c07e48"
  },
  {
    "url": "task/2021514.html",
    "revision": "6c8a5d007faf86e35f3d5bb59275c7dc"
  },
  {
    "url": "task/2021515.html",
    "revision": "bfe013a5007c3fec6ad654a118d02047"
  },
  {
    "url": "task/2021518.html",
    "revision": "3130b84afdc8017c8edfc7191b6220ea"
  },
  {
    "url": "task/2021519.html",
    "revision": "3a6fa7c0b2f7d3feea7c7beff7a0c47f"
  },
  {
    "url": "task/2021520.html",
    "revision": "3f7dc7172d3f45e77ee494892316633c"
  },
  {
    "url": "task/2021521.html",
    "revision": "bc65d42ec7171d5349aaa35b7c46eb57"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "0bfb78e666d80930af6b0748d1b338b5"
  },
  {
    "url": "task/2021524.html",
    "revision": "946723499ff44c352b554f1c33f45b8b"
  },
  {
    "url": "task/2021531.html",
    "revision": "5971b9137405082f931296ac2440253b"
  },
  {
    "url": "task/2021628.html",
    "revision": "f20966b0e994b53a511e245d58999deb"
  },
  {
    "url": "task/202164.html",
    "revision": "64c658aa7fe2375adb176136566d2128"
  },
  {
    "url": "task/202169.html",
    "revision": "a7319616386ea1da65bf4cbf6c4ba277"
  },
  {
    "url": "task/2021717.html",
    "revision": "873e85141371125cff85acabde40ddfe"
  },
  {
    "url": "task/2021721.html",
    "revision": "b867d087392c98832c600f6d75932878"
  },
  {
    "url": "task/2021722.html",
    "revision": "7e8475a2c9c575b82c6913f6c2c3136b"
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
