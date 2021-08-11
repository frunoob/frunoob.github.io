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
    "revision": "87c884f8fde3d3bd53466d7b5da03fd0"
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
    "url": "assets/js/69.2087a2dc.js",
    "revision": "669cfdd846c87825569321940e437192"
  },
  {
    "url": "assets/js/7.57bbc117.js",
    "revision": "677e9a7143f477495224dfdc86260d34"
  },
  {
    "url": "assets/js/70.6b0531ff.js",
    "revision": "0c0326fdcf0a37b96333442fa441f750"
  },
  {
    "url": "assets/js/71.68d85beb.js",
    "revision": "d9a90a74b46b683a9523f48ec5481b22"
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
    "url": "assets/js/app.6bdb88d6.js",
    "revision": "792847005e457f65cf37435a7d367bc5"
  },
  {
    "url": "index.html",
    "revision": "0658cc3b52584657d852cfa1419da17b"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "17a787134d4bc33a9f78a6a39753d043"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "b7839cb9069c44c472c010bf2eef38e5"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "8d9a35565544d064419208a153c2b4e5"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "933236ed3ccfacd24cae565d13cd0af5"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d81feaa7dc5d579ce35cce32b29c874e"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "8ac1a0672baf1cd791d8fa7c2a15c205"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "86684728be8d21e688a803ab75999e70"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "523234a810ec3ac15bbd712c74f5c272"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e154f654da87fd11f13301493439a9f0"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "606bd13adc89986d90374bf9003c19d1"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "5cd205bdb2748dfebd30e43efd8b014c"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "0e2c40e249efb4b2910afba627931be0"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "7311a56d0dcddfa8c1fb7e5a89edefb8"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "59e4cd4f387f3ca1bad64780d2056a50"
  },
  {
    "url": "memo/memo.html",
    "revision": "65e25d67c0d1e6cc9145bd97fbd4ea26"
  },
  {
    "url": "post/test.html",
    "revision": "61b384da7aa6c6c8ce30734727cd889c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "d983ace1ee13b8c86135998d2b18ff92"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "da568f78c10c8c202800c9ea97274741"
  },
  {
    "url": "study/english/words.html",
    "revision": "29615f390f1d171e6d60b50569ea6554"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "6699a9f707a62a39ebfc40d7dbeec996"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "e728ecd15f4a9b61ce58cc498a300a7c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "22c5843b44df451266a26d8e67a098b6"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9b6c08a0acc1a9e156e2040f3ab9e6ed"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "9b3079db764a6359acb4e07fb621952d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ddb8f2c0e4844f945078638d72dc4133"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "07d500e29c067e8652e25f747efb9024"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "7e86778ed3937df96d021dc10d9560fe"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "54ecac2df01a12ab8c642d7ba86c479f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b38a9c769c0028871c4cba74208d9ef3"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "0088d3ff4fb659a7fcad9f1fe5325203"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "cc8f393ae3cb2fd16c1d81a0f54be277"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "3a6c77e16b51e6ff75c733b74ea38e61"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "15d02896d2805ff4d089c99aa25f72d2"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "45be3ca0232db5887fc7f2c5d27a8257"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "6bcf93eab2374147ed85c06a52ab9b36"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "8c20288ab55960bb45e8ef3707c94e09"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "5f51385e5a27288425baf1c7b596ec46"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "250901a4e4c9f3dba346750b2d302471"
  },
  {
    "url": "task/2021511.html",
    "revision": "d3382fb1955a80de39f805f61a54f7d4"
  },
  {
    "url": "task/2021514.html",
    "revision": "bf3ddd10aea6df8d92944f9380a60331"
  },
  {
    "url": "task/2021515.html",
    "revision": "15443c1c8539601a848fc7002ef7189d"
  },
  {
    "url": "task/2021518.html",
    "revision": "9118313cfdcdf42b959e72859284a796"
  },
  {
    "url": "task/2021519.html",
    "revision": "170fc658efa3d8c8d1e9a2e5276237ba"
  },
  {
    "url": "task/2021520.html",
    "revision": "81c029999ec1300bd20f92da11ce8ec9"
  },
  {
    "url": "task/2021521.html",
    "revision": "497e257c70e2a07663704f708617ab52"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d83d2b560fe953976eae6e0fff44139b"
  },
  {
    "url": "task/2021524.html",
    "revision": "e50aa37edaf014d1e3d9005f138d9559"
  },
  {
    "url": "task/2021531.html",
    "revision": "b0543fdc3d5bb2704a730995374dd789"
  },
  {
    "url": "task/2021628.html",
    "revision": "ffcd6946fe8fef5fac571095f8084f80"
  },
  {
    "url": "task/202164.html",
    "revision": "f0854781e64307f2f1188e3856c8e187"
  },
  {
    "url": "task/202169.html",
    "revision": "204e4574ac0a4b509ab1fcb44c4da3b2"
  },
  {
    "url": "task/2021717.html",
    "revision": "1204d910cf562b3615a92f88f7986d2c"
  },
  {
    "url": "task/2021721.html",
    "revision": "0efa7c399f40adb055e0cccc2b278f82"
  },
  {
    "url": "task/2021722.html",
    "revision": "e4c2b3e44bbbf677816b081f3849b826"
  },
  {
    "url": "task/2021724.html",
    "revision": "ddba04617a7e4b2a87342ad65a3d1565"
  },
  {
    "url": "task/2021725.html",
    "revision": "018496653ba623249e36a0221c1a2308"
  },
  {
    "url": "task/202181.html",
    "revision": "44adb9d6751dc065a57089ba662fcb8a"
  },
  {
    "url": "task/2021811.html",
    "revision": "9881e9aa3ba8315fa597212de3523cf7"
  },
  {
    "url": "task/202183.html",
    "revision": "1ed69309ae7f9d93b930bd9b8b20b2b3"
  },
  {
    "url": "task/202187.html",
    "revision": "a7bd8158b84a5c380129e004a65a06ab"
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
