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
    "revision": "05e01062b7e825598e0f0f63ea277e08"
  },
  {
    "url": "assets/css/0.styles.6bd46664.css",
    "revision": "466a720ea33a85a1372b474215c7c954"
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
    "url": "assets/js/6.9ed9dbb1.js",
    "revision": "e3b6e5091822fc0c6f628ffa7930c35c"
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
    "url": "assets/js/app.6c5e3c5e.js",
    "revision": "f5d60ec2e3e5dc0a26da74be8ff95301"
  },
  {
    "url": "index.html",
    "revision": "c918647f03d112d4d8db8746b43ffc1c"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "d35b82f62c681b6afb8f72da1031ff15"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "ca0973c307c2b20319f00eff68c1e6c9"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "ce581680c24f92eb092bc306f8f70f1a"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "030d923e2fc7030d456124b5def9fe0e"
  },
  {
    "url": "memo/memo.html",
    "revision": "79f43264fa3da6c09572fcfb5a4baa55"
  },
  {
    "url": "post/test.html",
    "revision": "bfcab2c66b5ba1a5a9db2a36c1b53265"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "d268eb6b057dba6f7f1af8cf61ce087e"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1ddd86acb2350534f243f13a9888d739"
  },
  {
    "url": "study/english/words.html",
    "revision": "ba41c279fab6b6ae1afc2684743361fc"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "a1d8fa752024a3651a7136dcd6d920b3"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6e821eb1f439d2ad910d5449af0cf626"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8a98876db0ae6450b7b46df55c4c5da8"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "837a09f7bba3397fcd3c4ca7e02dcf1c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "d712749db12fafa0f67cadfca44a8c8b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "68f096bdd18b8864ee596e9c83297330"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d50f463f84e902e299c4d386a68bae35"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ad086bd3ff329fd5395c2bdb6bd472da"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c0788769fa9eb185296eab806c7d0ebb"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a538918e5c955c47ef4148a99e6a5619"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "6a5b069322c85e5d8f5b30dfc98d3472"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ca940e85e391d205cfa2385a6a59f7c1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "3084d111ba3707b72962767d0e73fca7"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "95771e04e29015e04837c5dfe245c92c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "2d257a244e5896ad11f4b6f9e7d3e162"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c0d7b08d490f2c99e85f3616196ac18f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "47f9db4d42d929cf17c5d591de958b5b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d27f2654e313850e7e38ecd73833a755"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f8ddb7ed9e0c2395870f793a3d0fb5a1"
  },
  {
    "url": "task/2021511.html",
    "revision": "824d9c8d7471d3153bbe9dc48b494cf3"
  },
  {
    "url": "task/2021514.html",
    "revision": "7ad056b8d9b2b9c191e9930f6df4c62b"
  },
  {
    "url": "task/2021515.html",
    "revision": "b66a35d509685c4a7feaf6878db6c100"
  },
  {
    "url": "task/2021518.html",
    "revision": "1752e4b022c5791ebcc057901dd61e82"
  },
  {
    "url": "task/2021519.html",
    "revision": "0ba3e6213f071ad0e97a6d3273d379cf"
  },
  {
    "url": "task/2021520.html",
    "revision": "5bc2eaba8357a89296ab6e156f98d2ce"
  },
  {
    "url": "task/2021521.html",
    "revision": "0883acca6f4af64b7d3fde5ad5ac123a"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "cf470a701a69679a69eac691325b453b"
  },
  {
    "url": "task/2021524.html",
    "revision": "c2cc3903eb821f1019fca499db25fdde"
  },
  {
    "url": "task/2021531.html",
    "revision": "61805400c91e6b4733a7e92d475455f0"
  },
  {
    "url": "task/2021628.html",
    "revision": "6844aaf242e9bf16bfdcb18758d80a39"
  },
  {
    "url": "task/202164.html",
    "revision": "e0e448a5f7679d9ee50ab711e958b5e2"
  },
  {
    "url": "task/202169.html",
    "revision": "c7112b5205a196598bc2acfcbfcf49a7"
  },
  {
    "url": "task/2021717.html",
    "revision": "3ae63b19b9b78184a56125eef05678a1"
  },
  {
    "url": "task/2021721.html",
    "revision": "adf48c6b85bf4a16138d4ffee241a56d"
  },
  {
    "url": "task/2021722.html",
    "revision": "e715b9ff735fdb59eda987b3aaefda54"
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
