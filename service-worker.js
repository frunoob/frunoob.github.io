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
    "revision": "0a2910af0a3827ff38bc2df07b7d217d"
  },
  {
    "url": "assets/css/0.styles.37c523b0.css",
    "revision": "759532901a420c1ce7e5e3b76356b2b5"
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
    "url": "assets/js/6.bfda40cf.js",
    "revision": "e3ca5886f9d04a99dba56cd9f02b35e3"
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
    "url": "assets/js/app.1d5b6273.js",
    "revision": "2f3f03b9b27cb7d4f2e2b861f3eec507"
  },
  {
    "url": "index.html",
    "revision": "ce2d34f947abc4df35a710ebd7eafb3d"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e0b43d1175a2d2a1a546295d6d958c42"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "80f56ea8e13d17e14a33d2c688079d88"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "7356c69fc9225153f3c2e61a3996b2e9"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "0f463f6a661f6f970c1604d1cafa5599"
  },
  {
    "url": "memo/memo.html",
    "revision": "5a1638a8c4d06959a4acaf844f97574b"
  },
  {
    "url": "post/test.html",
    "revision": "4e1f9f0bb33d4f3dbb50e8f98ffe16f3"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "e071afd7e4037c8ca57eb44a9cdf2d61"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "61400dbcfdaad44f9935bd3d59c868b5"
  },
  {
    "url": "study/english/words.html",
    "revision": "fcb9065ea14a58610e948b20c4a266f7"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "3749dc6ee5a825de1562b760ed30eebb"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3c2109fca54e600f7e4f48d70fb109e0"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8f84c36437cdc47c13235b3c887b5ffa"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b60fe68c0974ff6bbcfb980445fb5a48"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "24149829878689879347b9ba6e7a2a59"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "586f7b08522d1ea602b87bb4098e6f17"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "3d468e2cddbd48fcdfd14c00d1977f48"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "e9e071c2874481c7d72050904ee9f8cc"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "cc6d86851d088541a2f8abc1d1bd73f4"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "6ac6d14cd107e76c36ec0889c7d25fd9"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c5bcbcf9c2f7248434191af3d1eee5ce"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "80780cd4e266c8185119a8f678f67a8b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "af4fb68b9c77ac522773b65436d3943f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b5b87a70e0c13828c58803ab9f3cc891"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "bf4540e45e8c2cf7c351ec7e5998e800"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "4ad0f8d19b391fcb10969c1714e37397"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "cf6cd5f6469afb9e36f4598fb7225f22"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "576aac5c51a3ef5fe3fdd9b460af1683"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "42b5cc841d7f2aa43f40a9f993761ae2"
  },
  {
    "url": "task/2021511.html",
    "revision": "89bebf80f949f5f5758166de4498cc3b"
  },
  {
    "url": "task/2021514.html",
    "revision": "45fad73c100d17cd7d60fb769768fd34"
  },
  {
    "url": "task/2021515.html",
    "revision": "e42426ab8315558464b834e5658d4f4e"
  },
  {
    "url": "task/2021518.html",
    "revision": "e4bbc5742521dc7ed348d55801db3ffa"
  },
  {
    "url": "task/2021519.html",
    "revision": "cfd465c653be6dd37d2ac34830ea7479"
  },
  {
    "url": "task/2021520.html",
    "revision": "d063c3d4dc9c20218887cda953504ca4"
  },
  {
    "url": "task/2021521.html",
    "revision": "51be5ff5047d51737d3ad9b8555f6b7e"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "57c1148518c87a89a0843dd9dd24ccc0"
  },
  {
    "url": "task/2021524.html",
    "revision": "cf33595593cc16c644ff61b1f996a12a"
  },
  {
    "url": "task/2021531.html",
    "revision": "88525abad26e1c639bdd13ab1f19fa1a"
  },
  {
    "url": "task/2021628.html",
    "revision": "c79bba2b9cb8f9348f304f5e48e26e40"
  },
  {
    "url": "task/202164.html",
    "revision": "ccfa099c70990cf8b6da546efbf5de05"
  },
  {
    "url": "task/202169.html",
    "revision": "67836b186b6616ec650b31fa1bf9f461"
  },
  {
    "url": "task/2021717.html",
    "revision": "11e704bc3e9f6045e030c4bda5b4bd4e"
  },
  {
    "url": "task/2021721.html",
    "revision": "a55a99440b6078c5fb22f0a969ee49cf"
  },
  {
    "url": "task/2021722.html",
    "revision": "d257557a33dc8b5f1365c5aee1ae967c"
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
