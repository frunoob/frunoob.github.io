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
    "revision": "d7979f476c8dddf55d667a4116dbe50c"
  },
  {
    "url": "assets/css/0.styles.7de316bc.css",
    "revision": "9b3249340e70ca0899c1bb412904058b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8b0019d.js",
    "revision": "f6e33bb315bfd265c1bd07775bf5fa11"
  },
  {
    "url": "assets/js/11.bc024dc1.js",
    "revision": "5fab61cca6f6f669679ce19df72c409b"
  },
  {
    "url": "assets/js/12.4dc81c85.js",
    "revision": "c6b5ec522e9bb20495bc97863a773482"
  },
  {
    "url": "assets/js/13.32dcf543.js",
    "revision": "46be09d4ce5f17f85a844ad69184b9e3"
  },
  {
    "url": "assets/js/14.4320e9f9.js",
    "revision": "4c6dabbe3403749e89f517694dcac805"
  },
  {
    "url": "assets/js/15.9010ffdb.js",
    "revision": "e989bc9daee0320298ed0ba107491bb1"
  },
  {
    "url": "assets/js/16.eb8589a6.js",
    "revision": "f79a2c4b2f12adea2ac2d4908275e2f8"
  },
  {
    "url": "assets/js/17.d7a33f11.js",
    "revision": "5a92bfe0be179c9c262d1ff11da9c8c8"
  },
  {
    "url": "assets/js/18.bd6de505.js",
    "revision": "73396bf7d7c8d063cae2d170ab6c4999"
  },
  {
    "url": "assets/js/19.abafc196.js",
    "revision": "b081f3770edc081223d5a0e786b1f7b2"
  },
  {
    "url": "assets/js/2.ba57fe09.js",
    "revision": "4c780d831a9098d3a912c769f21730eb"
  },
  {
    "url": "assets/js/20.066dd09f.js",
    "revision": "348e66a1ca44b44585e1badcb3479fdf"
  },
  {
    "url": "assets/js/21.26eb5ecb.js",
    "revision": "46c2b6f1aef16d78ce1bdc63ebb59d9e"
  },
  {
    "url": "assets/js/22.953ed75e.js",
    "revision": "931d36fb7988c5258ac0c14e23a7b852"
  },
  {
    "url": "assets/js/23.960460d3.js",
    "revision": "4c5d9d072d07f57cf6e37de7f7efb47a"
  },
  {
    "url": "assets/js/24.d8a133ed.js",
    "revision": "21d603199f9c01f240abea8f1130532b"
  },
  {
    "url": "assets/js/25.554c5ebb.js",
    "revision": "5df142e16f9b437224ac1b1efb4d7a10"
  },
  {
    "url": "assets/js/26.fd9891bf.js",
    "revision": "cc8113ab76c74370d3f557d83af02d54"
  },
  {
    "url": "assets/js/27.193f855e.js",
    "revision": "b8f3a22f75412bb37a4d3cc6a5023728"
  },
  {
    "url": "assets/js/28.405c117e.js",
    "revision": "612e9e2713d8b7ac258c33bd727226b1"
  },
  {
    "url": "assets/js/29.9e8a9898.js",
    "revision": "5c2c90c38ab3b17dceb5a74896514696"
  },
  {
    "url": "assets/js/3.51c1781e.js",
    "revision": "fd2f819feec0d41971d76b2c1fec9f10"
  },
  {
    "url": "assets/js/30.025a02db.js",
    "revision": "d0fd25c3a4b00a1ab41e7cf718885e4c"
  },
  {
    "url": "assets/js/31.33ca16f0.js",
    "revision": "aa3a6752391bad8c9d48b6f2721e3b22"
  },
  {
    "url": "assets/js/32.f9cd4324.js",
    "revision": "bd6bf4a14f53d5b4108e0be175992424"
  },
  {
    "url": "assets/js/33.a8202bfc.js",
    "revision": "10770c3a12f5956d206b0a4ca6c5c19d"
  },
  {
    "url": "assets/js/34.17dc0f3e.js",
    "revision": "b826c3772bf5053e448b30516f56a023"
  },
  {
    "url": "assets/js/35.2cb82861.js",
    "revision": "72cda7eb3cccf931c2c34d8631c5dacc"
  },
  {
    "url": "assets/js/36.24b77b29.js",
    "revision": "200eca937e82aee4d97039d54abf2f66"
  },
  {
    "url": "assets/js/37.258fa531.js",
    "revision": "ba5577feea3076c1c13649ea377085e9"
  },
  {
    "url": "assets/js/38.88a66356.js",
    "revision": "6b879cece1e479e6fe498f91ae3c2dcf"
  },
  {
    "url": "assets/js/39.65d4e28d.js",
    "revision": "7a719836e0bddb0b7ea4bf1aabcd07c1"
  },
  {
    "url": "assets/js/4.1a591468.js",
    "revision": "8502a4ab8cfeefa79b1c6dbb52f8efd1"
  },
  {
    "url": "assets/js/40.799bbe61.js",
    "revision": "e63e3849c426575d08b9e193c5179f9e"
  },
  {
    "url": "assets/js/41.dc19245a.js",
    "revision": "802eb36dd4dcdc2f72e76fb5b66dbba4"
  },
  {
    "url": "assets/js/42.d23db5c2.js",
    "revision": "3ae06aec3c26eaaa84f0fd5075253da0"
  },
  {
    "url": "assets/js/43.91c480b8.js",
    "revision": "f6a9236466e41ac12ca9ccb25b17975b"
  },
  {
    "url": "assets/js/44.b27a942c.js",
    "revision": "0bd424eb0648fbde1474c915a1e4525d"
  },
  {
    "url": "assets/js/45.b2ff4afe.js",
    "revision": "b79ae36e83aca53ecf8d62937d0c1cf3"
  },
  {
    "url": "assets/js/46.d48a5008.js",
    "revision": "490142a28bc730cdec0fffa4c32f2c4d"
  },
  {
    "url": "assets/js/47.60147917.js",
    "revision": "b202c0558f1c5e68d04fcc7550e5a982"
  },
  {
    "url": "assets/js/48.b9875b4c.js",
    "revision": "f1391e0949df16a359311dec303dd9cc"
  },
  {
    "url": "assets/js/49.3ac44c9c.js",
    "revision": "a42bb6df8da51a8fb00b4241a5bb58a0"
  },
  {
    "url": "assets/js/5.193edfcb.js",
    "revision": "d11b109a97c643b714bea139ae328a60"
  },
  {
    "url": "assets/js/50.c019fd24.js",
    "revision": "f73d1ef4569fd71c0be960ec96a3d7f1"
  },
  {
    "url": "assets/js/51.46b9687c.js",
    "revision": "dbf039483ea6536d9a88cb44fdf97556"
  },
  {
    "url": "assets/js/52.55b7da51.js",
    "revision": "28fd636f23280c340d81f9fed9336083"
  },
  {
    "url": "assets/js/53.5885d9e1.js",
    "revision": "17713630da1124ef01dad8c8d2896969"
  },
  {
    "url": "assets/js/54.1d093bee.js",
    "revision": "ac2035e6ddc0d962f501b0cf0b2737a5"
  },
  {
    "url": "assets/js/55.4f025369.js",
    "revision": "64fd01dc9ebc18487c725bae16423786"
  },
  {
    "url": "assets/js/56.f1a27d4a.js",
    "revision": "320e793d2eb3c53fb94ae2e91b4ee391"
  },
  {
    "url": "assets/js/57.a137f3c2.js",
    "revision": "68a1d9b10fc2d39ef9bb32f3254e5c9b"
  },
  {
    "url": "assets/js/58.d6750a4a.js",
    "revision": "3c7dc61a9885f5b71e7f2629c582d3e4"
  },
  {
    "url": "assets/js/59.db2a6497.js",
    "revision": "bc58a56d35e0e81237e29dc2e7c72fee"
  },
  {
    "url": "assets/js/6.8836c250.js",
    "revision": "eabdc3c4fe3f11118353d1298ee38aa5"
  },
  {
    "url": "assets/js/60.ad56e710.js",
    "revision": "9043eb5f6d8ece4b7cefc0f5c320e471"
  },
  {
    "url": "assets/js/61.53111a6d.js",
    "revision": "d998c81a1d14fb92e9fc3135eb0559e6"
  },
  {
    "url": "assets/js/62.3c9871ab.js",
    "revision": "70b006541c47c72e8d0a4dd68f43be44"
  },
  {
    "url": "assets/js/63.84732c57.js",
    "revision": "c9b1c1fb000f80c626efe4206d9b03cb"
  },
  {
    "url": "assets/js/64.b6b8994c.js",
    "revision": "6ad858bd2f7e84cdb388b06d61e8c82d"
  },
  {
    "url": "assets/js/65.951e2c6d.js",
    "revision": "e9e333a17b73f69f120516c40d3d43cb"
  },
  {
    "url": "assets/js/66.14761ec8.js",
    "revision": "da3fef4cfc32d6fc0d0e8c813576c19e"
  },
  {
    "url": "assets/js/67.481a58aa.js",
    "revision": "3803b320ae24fedcadea1f8f43c647da"
  },
  {
    "url": "assets/js/68.c8eb5984.js",
    "revision": "2dc145f10b92240800eb51423d291612"
  },
  {
    "url": "assets/js/69.b2b3bd3d.js",
    "revision": "9152c910410a2a4349f595547093fe8e"
  },
  {
    "url": "assets/js/7.57bbc117.js",
    "revision": "677e9a7143f477495224dfdc86260d34"
  },
  {
    "url": "assets/js/70.7f358532.js",
    "revision": "da5917b166edbbe96dd41b47cf6269dd"
  },
  {
    "url": "assets/js/71.86ddab89.js",
    "revision": "48d14d4f32a1bd503594daf943ed7689"
  },
  {
    "url": "assets/js/72.150c5b4c.js",
    "revision": "b0ecfdf68332ddfb6e58e4f09ac7f312"
  },
  {
    "url": "assets/js/8.6f4ef2df.js",
    "revision": "8163770da1a8e28ebff81b412d0c5591"
  },
  {
    "url": "assets/js/9.d180393c.js",
    "revision": "9949e1f5907fd9f5b176bfc6e57214ea"
  },
  {
    "url": "assets/js/app.ca1da154.js",
    "revision": "cd556759b872aa65ce476e909ec71db8"
  },
  {
    "url": "index.html",
    "revision": "a55840ec5972b4857ac2febcace9fcfe"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "89b39c3e55c9cc5732248b070e89d26f"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "236b32dd56bd6550202876a8bc4e4de7"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a851ef04c64c8175ffd9405b097f53e9"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a3368ed440501f95ad981d7aff9556cf"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "2908e39dc808bfeb5423330ddc397621"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "7def82c584d8772fdc3084a55c15f75c"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "93de235937e5243b956b8c64486135b9"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e715b63acc4cbc573a0ce373e4c2d5f2"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "996b4b05c8fd4a925b0bb0507e6fb581"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "5e2a032b7e24c78312571fb00e67d9a6"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "edaa34ec26382280c77d07116be85563"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "dfa823d200b31b0da9fcf381a9153470"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "d03a4330476752b1e77be13b8eafa645"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "3f18459158cc8357914baacf44cb93b0"
  },
  {
    "url": "memo/memo.html",
    "revision": "ff7d1a12bb91cc36a8de63b932c9fa5a"
  },
  {
    "url": "post/test.html",
    "revision": "d3fb42dd8b0e98447f29627ad96ea054"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "cced0ae91a2d1f816721321566fc1543"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "4f94a39e6b5c93163565bd3b54528db5"
  },
  {
    "url": "study/english/words.html",
    "revision": "0b716df8e6054a31fe6b566f4c1daf17"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "229bd51424645a8f3f5ae66eb889ebfa"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6abfe5166761310a5dfca7f42602c373"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3600bc3fcf1ebfc6766ec218bf7dac50"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c826480ebe8f511d9cd39f7ee2f1ce33"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "4c67e2dc4afefe9af96198b84d4baed6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "aabfc4ff9640ac3b63470dfb5f54d610"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0e1647af57297c099fdfe5156cf4b019"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "d93da16b0e5cbbe62ebce740a06ad98e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "1bd08d3d336ac12ae2520a1e12e1bd6c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b6861960d4c5f312b29422d9ea891beb"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "969beeea5e2a2150b40bf10472f41c09"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e58d2d68065c8a90b7de23116f754674"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "7ae15c9a46b526388a5b28e073784b17"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "4099a7386020aebd75a0190c0308d38c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "40a67527585850bb89ddcde24036bd2d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "999ccdf9458afc00251bac8f00f5ce88"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ec24022ae0639ef3dc0d2d03c8918701"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9a478e05d27e6a0cd2729d40551344f8"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "8305e8835e7411634d8e9fdc7f66d75e"
  },
  {
    "url": "task/2021511.html",
    "revision": "b2fb82cf311586bf964b8a9af84816fc"
  },
  {
    "url": "task/2021514.html",
    "revision": "e70a1f0e57a7beeb649fd152a800fd2b"
  },
  {
    "url": "task/2021515.html",
    "revision": "05f75967e06b366f3475015ba8bd40cd"
  },
  {
    "url": "task/2021518.html",
    "revision": "46c283e80a6f2638cae6916284f854fc"
  },
  {
    "url": "task/2021519.html",
    "revision": "06ad25143d6c77cca7ef205a94df0569"
  },
  {
    "url": "task/2021520.html",
    "revision": "aa4daf7f054dc9ba9eedd5a0a1dcea74"
  },
  {
    "url": "task/2021521.html",
    "revision": "2b508f8b13bb08fcaafc1179b6980637"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "1ffe8d3c2905f87c9bb029b3351b425b"
  },
  {
    "url": "task/2021524.html",
    "revision": "5b975f2fcd0b3947e64a0cdc9b55e125"
  },
  {
    "url": "task/2021531.html",
    "revision": "181af4c0f7b89dffc18842df2cc6a237"
  },
  {
    "url": "task/2021628.html",
    "revision": "0c25b2a8c1c468de2a3e8f69b359240e"
  },
  {
    "url": "task/202164.html",
    "revision": "f07abd60a5f43e784781c44bd63040b5"
  },
  {
    "url": "task/202169.html",
    "revision": "8bbf089685c5a91dbf76eb48b799b7f1"
  },
  {
    "url": "task/2021717.html",
    "revision": "d4d9a6bb95570e85a4189e082a46dc33"
  },
  {
    "url": "task/2021721.html",
    "revision": "5295fa3530dd39379d0519195a7a2b54"
  },
  {
    "url": "task/2021722.html",
    "revision": "e686f81fa20974392343edf7500d3815"
  },
  {
    "url": "task/2021724.html",
    "revision": "1e83074f6b9b677b79a3e28bfbfef6bf"
  },
  {
    "url": "task/2021725.html",
    "revision": "4d70e5e4c45085a5264b3c594ae54318"
  },
  {
    "url": "task/202181.html",
    "revision": "9efed475d083a719d9be2fdc4a7120c7"
  },
  {
    "url": "task/2021811.html",
    "revision": "316b4384c320ab0d68a9f0dbf95a07de"
  },
  {
    "url": "task/202183.html",
    "revision": "3479dac09c592b8efd5a78bd96cbc571"
  },
  {
    "url": "task/202187.html",
    "revision": "dfc61c3c7f284996176b8b59bac3c48c"
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
