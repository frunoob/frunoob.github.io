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
    "revision": "b7710267c74047787dec7e83c3fb89f4"
  },
  {
    "url": "assets/css/0.styles.f0995668.css",
    "revision": "5daf428cf9975d05a400b50739dbfea3"
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
    "url": "assets/js/6.193829c2.js",
    "revision": "52779e62a27a1e65d1294cf390038a25"
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
    "url": "assets/js/app.0069980a.js",
    "revision": "b055ac0105f146711a9655604650005d"
  },
  {
    "url": "index.html",
    "revision": "42613b296768091eb0beb726a0755542"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "4f5b162e2bafe41ca84cfc08a8418af7"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "e617cf9c71e467274cff348e3a5c5a7b"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "1cd09bc73fc680d9d4ddaeeafbf9d73f"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "5c7cbf2e23da90655ac4411f20533cc3"
  },
  {
    "url": "memo/memo.html",
    "revision": "2327b252843ca651cc0baec0aeb9c0cb"
  },
  {
    "url": "post/test.html",
    "revision": "60f94c21fadea4741f8a8cf4bb8c249c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ce98d5ebcf517ddbe2022d0a972165c0"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "0d73ca8c672c2adb7f914a97fb98cae7"
  },
  {
    "url": "study/english/words.html",
    "revision": "7aa6bf8bc2429e7f094b87b85000e692"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "7210b58ded79a292879104567d0cfcf6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6808e01cae98b6211f9d957333fc9e16"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f7fb713de74972d42a4172999b57d7bf"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "dc30d90b78579142385740b6657e11cc"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3ec8919943959bc14197442dbad8acc1"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "1677b31e1c04a07b67c336f27f7548a3"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "78029470620a1dfef68b402de8c0011e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cae4f1dc3a2c3b797bc7c2345bc3dd12"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ee89f10755360a1ebf656263ecf05966"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "32e420b09a93f500835d145191a47e52"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "efaf2db38e888e04674a5e7d2a033f03"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "1b09aa403277d32afbd9efefd46ab49c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5e8a248ec158b738db2f3a6abd106c89"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "a5f5db8d06ee532f4286b2bc319a283f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c439c62a0eef7037cea279a1dfdd3149"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "bec6993644506f077bc7850a8b10afc7"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3fa68d3b38652fa0eb80e0e4c37c7792"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "5cbe361dd1d7dcad303c49b014ecdf52"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "65489b29d2525ea5f678fa6bf1d65854"
  },
  {
    "url": "task/2021511.html",
    "revision": "8dd8d739b515af40f403fdadf461d416"
  },
  {
    "url": "task/2021514.html",
    "revision": "0db53452e744d5a7707211bbf1872199"
  },
  {
    "url": "task/2021515.html",
    "revision": "1fe23cfc94f180e34d5b905775130513"
  },
  {
    "url": "task/2021518.html",
    "revision": "0207a87ed3c9e7633d9e7ec7ffa4fff3"
  },
  {
    "url": "task/2021519.html",
    "revision": "a4c2af76eac083b2aa12e408aa0a45c8"
  },
  {
    "url": "task/2021520.html",
    "revision": "3d79fde817d3d5536115f1f3a6f2902d"
  },
  {
    "url": "task/2021521.html",
    "revision": "b7f5c00d9b319c2421e9772e7046332d"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "282c711ef5d3897578894ba2bfc547e7"
  },
  {
    "url": "task/2021524.html",
    "revision": "cb0f20593a225013916a414cda0ee34e"
  },
  {
    "url": "task/2021531.html",
    "revision": "aa8a177ea9b910080eaa6349f131080b"
  },
  {
    "url": "task/2021628.html",
    "revision": "e7bed3fd1c383a0058e6cf23d907d849"
  },
  {
    "url": "task/202164.html",
    "revision": "5e2888db3a903716a6badaf3b3a6afcb"
  },
  {
    "url": "task/202169.html",
    "revision": "bc67821fbc6006fc3cfdbc837e7b60da"
  },
  {
    "url": "task/2021717.html",
    "revision": "d6ae5062858607277f51800c22416773"
  },
  {
    "url": "task/2021721.html",
    "revision": "a4872f2e427814f744547703192f0aec"
  },
  {
    "url": "task/2021722.html",
    "revision": "52e740770fe9f67dbca919596917b635"
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
