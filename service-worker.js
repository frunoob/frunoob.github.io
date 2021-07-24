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
    "revision": "519f9707017559abcd1a7f270d717b2c"
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
    "url": "assets/js/app.961aefa6.js",
    "revision": "a7e2a0aa53275317899fa4f06593d67b"
  },
  {
    "url": "index.html",
    "revision": "13eba186ab1e6e1d263dbb8699c4a888"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "694c98565b544f92a52042b3cc5c8480"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "c97c7785786e6d640e98c5621e4f5ab2"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "4dd8025f73471e1ee74a11a4f298a16d"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "7c132cd41d60cd9e4703e30dfd756bed"
  },
  {
    "url": "memo/memo.html",
    "revision": "abdbdfa08a142f4489abdc6eeccd1924"
  },
  {
    "url": "post/test.html",
    "revision": "5e7b315df97d75c864c4ff0e14c42ad5"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "eadfcbb46cc1b798c8ba1c49a0841113"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "0b857e76900008b64b0bc28c46491196"
  },
  {
    "url": "study/english/words.html",
    "revision": "181fde759209d7d84fe233608309537b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "3becfc09b314dfcbe3a0740617ce2e14"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "124cc012d20df27a88f0e95900df9880"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8c33815330d691033eac6a8f0221151d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "1dd0582481026cd512460eb1745b88a6"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "78e18ed1de3dc7274c43d1da10bda79e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2ceec5039be284f98f347a5ddea3c1ee"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "011fcdfa9c4f966f6e2c683a57decb7c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "7f6f310745bcc86d4bc5c347dc159561"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "1029873747e20be84ae8697f0852417f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a2c9a5f4e97a63a45785f061c9de6480"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "893daeb763be1a49aea3ad994f21f6f0"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e909f57e985c3899af1e76ea3916ad39"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "64ec3ee92c0fc4dea6f4bc29ab466b0b"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "2431aeb2b8bd5d101581e4778bb48e2e"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "baf76e0461cc4a7fa52bbeadc455b1e6"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f8d7450b6aaaed4b211003ea69435ce3"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "8730de4c461dc5111b316d2c00d3345b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ab73fa93ada43850f1d0d8e89daa85ed"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "dc2ecdb1e7ae27cc7de08cbd4646fb91"
  },
  {
    "url": "task/2021511.html",
    "revision": "5474cfde66a4dea92c15b5028880cb2b"
  },
  {
    "url": "task/2021514.html",
    "revision": "ef7a2f1ac33863bdfe94da969d330ed4"
  },
  {
    "url": "task/2021515.html",
    "revision": "ebe3c0912ada08cd49e625c7b266b993"
  },
  {
    "url": "task/2021518.html",
    "revision": "1432495473df19c97ba980921c0dc578"
  },
  {
    "url": "task/2021519.html",
    "revision": "0fe8d4e2a578e1c8e26eab2feb03a9e5"
  },
  {
    "url": "task/2021520.html",
    "revision": "5902d505c861359b4a23584fb44e88df"
  },
  {
    "url": "task/2021521.html",
    "revision": "fac7b6ba22d5b34fd477462a3c5d8118"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "40e9f382e29615cbd8a02a42a4f9d7a2"
  },
  {
    "url": "task/2021524.html",
    "revision": "8e991281dc70d2accb226bf21e1c7227"
  },
  {
    "url": "task/2021531.html",
    "revision": "7e3f593595c451d3a7bcd18131d03346"
  },
  {
    "url": "task/2021628.html",
    "revision": "fe0ed1d1b13c6b5296ef34fd626d318c"
  },
  {
    "url": "task/202164.html",
    "revision": "044663fea95ea733b2568ff1a1b04194"
  },
  {
    "url": "task/202169.html",
    "revision": "aa5398f34683b88d8c80785b295a89d6"
  },
  {
    "url": "task/2021717.html",
    "revision": "2c13e7bcf459f6e042dddd4d3f3f9284"
  },
  {
    "url": "task/2021721.html",
    "revision": "0ef967cad1fa927eb2b73e8ce4588389"
  },
  {
    "url": "task/2021722.html",
    "revision": "e92a29dc5a0535c7e42274453c17b63b"
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
