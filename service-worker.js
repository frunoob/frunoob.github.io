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
    "revision": "840a5cde2cf7431e0fb23884574a071b"
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
    "url": "assets/js/4.b908fb21.js",
    "revision": "51a18728f86b76937b00c577fcaf5ae7"
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
    "url": "assets/js/57.3e697d1f.js",
    "revision": "95ca67e0472202aadd60517c181d26dc"
  },
  {
    "url": "assets/js/58.83c447fd.js",
    "revision": "5f059beb155f5e391a648163d7b129ee"
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
    "url": "assets/js/app.daf4ccf6.js",
    "revision": "879dacddc036a3749bb554ff6c0ea59b"
  },
  {
    "url": "index.html",
    "revision": "0d08035db6a28535e07dee69e97f0034"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "d721401c29c368edd47a152e7f366907"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "a56e578d441d53b86d2218a2c5162e90"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "41c39e3cc3f405e6df9c0a6c168ca9d6"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "0c08bfc2562d52f465b4bb0929ca7a42"
  },
  {
    "url": "memo/memo.html",
    "revision": "692e5e18465abbb8fd53b3075731f675"
  },
  {
    "url": "post/test.html",
    "revision": "70467f2afe39ed89930286c397feadee"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "66041b0b3465830d16f193576b8e7665"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "40a6cb9707d17ad4b984c964e4546535"
  },
  {
    "url": "study/english/words.html",
    "revision": "f83b21256fbfd78c8d03865b85e8b92e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "8f2df72a3239d24fec4b400ea59b4856"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5014ce2e82beb1d1c0bcc4f2538b69f6"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "1370595dc71639b39db84485c7ede201"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3e30ae668cd75f855d0e45ebf86f1776"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3373f428f3770a48f7f662ab3c080e77"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "b327c9b0e3a4b5152126152d7baf3dac"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d1940ddec0d14db5b4bfde828f61966a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "37571b856806189f0bbd39b42481db12"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "7957219f3c917465f34d342a59a21aaf"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "79720494003ac0a66c5848ffbdd14688"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "df37312cd9cbdad5e0a9d0e13e3487be"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "81dfb26676761d70553c3468ef072f06"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "04072026d8da814ffcbf379b549f28bf"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "42084ddfa1c05616d750ff94cbe96123"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d24bd89fda44f4fbff59d6e8c088b7da"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "493ade13ac9131618bb943d38f49b88e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "029393f292a805fbbb543e802d73cf1e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "03de6fd19b54322d040ba37b257ccbc8"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "efc0355c5f334f1377c291b12cf3afb9"
  },
  {
    "url": "task/2021511.html",
    "revision": "110a22a25bf474060789f6638a428b1c"
  },
  {
    "url": "task/2021514.html",
    "revision": "7dba17924579f94ae9f5a69579729f28"
  },
  {
    "url": "task/2021515.html",
    "revision": "3b38f24db5cfabbf6c88619b72239e5f"
  },
  {
    "url": "task/2021518.html",
    "revision": "231bba9ff10aff0a61d49368c68767c4"
  },
  {
    "url": "task/2021519.html",
    "revision": "f60a71dd0b78079a98bf7bdb2d1a03e6"
  },
  {
    "url": "task/2021520.html",
    "revision": "ab1503cd9af563157bfc56d486aab3f7"
  },
  {
    "url": "task/2021521.html",
    "revision": "d2ce84ff968b1d31b6613c8b6bcfd484"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d79eaea639a364ab6b2308f9d18ec0f2"
  },
  {
    "url": "task/2021524.html",
    "revision": "cba87a6d14200c6a9b70433a08a32f16"
  },
  {
    "url": "task/2021531.html",
    "revision": "d2dc4b49bca7bd707c50c1cce13bed37"
  },
  {
    "url": "task/2021628.html",
    "revision": "c1ba23fbd96ad40859823ca3856d3f58"
  },
  {
    "url": "task/202164.html",
    "revision": "91821b4788ecac485984fea5efaa8c10"
  },
  {
    "url": "task/202169.html",
    "revision": "861ccdcbe6d8a65fd28e8dde7788554a"
  },
  {
    "url": "task/2021717.html",
    "revision": "2b4ed4b4003b2f68c74fc37700a09b00"
  },
  {
    "url": "task/2021721.html",
    "revision": "dc012932dfeb4d3843bd3729823ad5de"
  },
  {
    "url": "task/2021722.html",
    "revision": "c6d7832c9b87d3d6df007b272b884445"
  },
  {
    "url": "task/2021724.html",
    "revision": "91ca9c7df931ea36fbb7cc4788529c7e"
  },
  {
    "url": "task/2021725.html",
    "revision": "7bd0d89947678861ecb8beb5cf22f866"
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
