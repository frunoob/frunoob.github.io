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
    "revision": "6ecb9971e8856819828778fea06a22f9"
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
    "url": "assets/js/25.2838cef8.js",
    "revision": "d26a38c1f82af684400965d1a0a94ad1"
  },
  {
    "url": "assets/js/26.fd9891bf.js",
    "revision": "cc8113ab76c74370d3f557d83af02d54"
  },
  {
    "url": "assets/js/27.708ff178.js",
    "revision": "21268d643fe6fe9a315284e8d9146a19"
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
    "url": "assets/js/app.3abd2c9c.js",
    "revision": "3ca14099e7bb06a663fc638da30c10cd"
  },
  {
    "url": "index.html",
    "revision": "55b28231976a0c2abb31a66a9e5adf7d"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "bb73fa042ff14c06dfcc3faa7a915792"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "79fb954194c42afea30fa7cc64414540"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b377852b97d123f22aab41c09ac889de"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "23ade73b6f5c50af5f6f5f2049f9204c"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "434037d3af320e5b3b612cd196ada400"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "d5c1d383f4e4ac87fcde6eaa196efd0e"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "cd923c1388b16fe629e5acf754e5f4f8"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "17fbe221c82d83193f35857a8bb20d6e"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e187064849c2299abafa8129aa5e1b6d"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "4b1b82ea6b034223398e9dff92db349c"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "2550fcdcc70517a227914fcbe042316e"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "fb106e410fce97f8f698054cf8e0dd9e"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "f7cb043d007425767ff157e73514582c"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "3e95086a7929ea3810bf8a769ec8ab78"
  },
  {
    "url": "memo/memo.html",
    "revision": "e9b524624c36d70f9b4547b18d448348"
  },
  {
    "url": "post/test.html",
    "revision": "680e5fc3842a5404da68cc81f0673077"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "eb08c17c0098e1c1706a0be8a43a0223"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "ad55ced2ead61b4aba6bcc0abf8c9f37"
  },
  {
    "url": "study/english/words.html",
    "revision": "09fba68d9b27458298bce608eefc1b10"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4248fd3ccd66fdaf02a98d169fc0bcae"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "41b9a5c5bc5f41cd892d77b54f841d8b"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "645e3b2faf030c2bb07784a99bfa8c01"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d4f99f76af0cacef8ed0b667659120a0"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "a6d12045e71a1a037b24103849e9681b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "27a0c09435053698bc8437ad9fcbe55d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "c637f2f965c7051f9ddc6e95e5e78810"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f2a9efe01c66586fc8fadac9279bafa2"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "2102e7af2e82054c9c570a8a9cfa2923"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ad22a9b2fbecdd1b6e612b3abe8f44c0"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d8933f9ad61cb5e97e54bf341487703f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "b387d68805994e6479b71079bc51a612"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f018eb4298aa76a7e12c325529608c0d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e2e2e81c451b0b883414589c2649c82c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "67b7af2569282ce1a9b90a39f4676ab3"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "661560c8e959aa7c60f8134028c92845"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "90c24d021ab936346f88ac19c7c1390d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "adfb7bebe7cad454ed85afec7b94d5c1"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "fe5b7d514a45c0b8e8c147939b716b23"
  },
  {
    "url": "task/2021511.html",
    "revision": "cc0ea2e63cf04b2311c69c3adde14645"
  },
  {
    "url": "task/2021514.html",
    "revision": "4a754e14da442ce51dce406b81802dd2"
  },
  {
    "url": "task/2021515.html",
    "revision": "00c011957587c0b68057f009f8911df8"
  },
  {
    "url": "task/2021518.html",
    "revision": "80b1511da123d819bdf78755d62d769c"
  },
  {
    "url": "task/2021519.html",
    "revision": "a077f78b0b442963267e4084c4d203ea"
  },
  {
    "url": "task/2021520.html",
    "revision": "ea021cdc11767ad26d87f66c65704ed8"
  },
  {
    "url": "task/2021521.html",
    "revision": "9194b3a7dd3f777381f1bd9c0113cbbb"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "3164f0d9ece709f4da9cf0e28ec8bfeb"
  },
  {
    "url": "task/2021524.html",
    "revision": "39fe12d269e9d903d6c09498ae274440"
  },
  {
    "url": "task/2021531.html",
    "revision": "d9f1e1fee941c7d60c0528add33cf3f4"
  },
  {
    "url": "task/2021628.html",
    "revision": "8b9d0a88eb4b73edb1575f57ab3ca2cd"
  },
  {
    "url": "task/202164.html",
    "revision": "562d46e6307d05ac3f3bc3cc8087ae51"
  },
  {
    "url": "task/202169.html",
    "revision": "affb6ddf4051c02ba96a6b71c1c263bc"
  },
  {
    "url": "task/2021717.html",
    "revision": "abd5bfed706106e1141dfda3f83d8a10"
  },
  {
    "url": "task/2021721.html",
    "revision": "31831f05aacb6047c911893635568ad4"
  },
  {
    "url": "task/2021722.html",
    "revision": "f744ce2f55c83da7173ebc4891e0ef2b"
  },
  {
    "url": "task/2021724.html",
    "revision": "326b5b0e889e2671cac17f5c08a6afac"
  },
  {
    "url": "task/2021725.html",
    "revision": "ccb78c65c59c569e70574e1c547379ed"
  },
  {
    "url": "task/202181.html",
    "revision": "09e010114f286c42bfe6c24d25f27bf6"
  },
  {
    "url": "task/2021811.html",
    "revision": "9369a7c429d8f4de85527bc01ba60b9c"
  },
  {
    "url": "task/202183.html",
    "revision": "c5ff573f27b4014a2092d923c1fdfd53"
  },
  {
    "url": "task/202187.html",
    "revision": "a14f67a3168a59ea0963fa1ade9a4412"
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
