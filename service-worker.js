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
    "revision": "304fc96aa340de82481f53120e9e946e"
  },
  {
    "url": "assets/css/0.styles.f44afe0e.css",
    "revision": "71b55e2bf614120082f416050fdabd62"
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
    "url": "assets/js/15.4d155abf.js",
    "revision": "ee6e3487a44677d879b0e60d08ae1931"
  },
  {
    "url": "assets/js/16.0c1211a0.js",
    "revision": "6a178d603918aeff765fc7a3bd8f502a"
  },
  {
    "url": "assets/js/17.c47c9abb.js",
    "revision": "03076ae3f1a4b0435086b83550d79a0b"
  },
  {
    "url": "assets/js/18.a2f8d7b3.js",
    "revision": "100bff77f54e4ad68d99825db4a7e7dc"
  },
  {
    "url": "assets/js/19.b7a2ae4f.js",
    "revision": "ddc5b22d4c399cc048b5461822187824"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.1dd37c3a.js",
    "revision": "6bd8c45d8c2842d1fae04452b6c7b214"
  },
  {
    "url": "assets/js/21.c7f7e9bc.js",
    "revision": "ef7a3fc634329d6355691826a8a137ed"
  },
  {
    "url": "assets/js/22.96af060a.js",
    "revision": "7e3917bc449bfdfa5fbcd5386a79464e"
  },
  {
    "url": "assets/js/23.7d172993.js",
    "revision": "912f8e4ae2e5f254bb5db9e23518754b"
  },
  {
    "url": "assets/js/24.6f5c9356.js",
    "revision": "04c1b3f2d81755dfe5e3255101001f23"
  },
  {
    "url": "assets/js/25.ee85a5a1.js",
    "revision": "8aee21837a4b53697d60d64909aea982"
  },
  {
    "url": "assets/js/26.94b4eb12.js",
    "revision": "f0f55f4da60bc5f402184883a6fa1639"
  },
  {
    "url": "assets/js/27.354cbc27.js",
    "revision": "deaa7928fda22bb9115d6bd1afdc37ba"
  },
  {
    "url": "assets/js/28.15344a41.js",
    "revision": "7a430ea26dbc08b7d5ec5f92cc7fae0b"
  },
  {
    "url": "assets/js/29.4a2cb3e7.js",
    "revision": "f55fb91be469ef0f39126d19f0df2979"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.b68c679b.js",
    "revision": "5b171fbb9a29db2a46d52ce58b1d0418"
  },
  {
    "url": "assets/js/31.d993a152.js",
    "revision": "10b51bfb194f934cf39cc620e7768165"
  },
  {
    "url": "assets/js/32.0ad336d7.js",
    "revision": "e5b15dbe9d71a35da6684d033ed74985"
  },
  {
    "url": "assets/js/33.1e99c89c.js",
    "revision": "09e6873e7b3cef88888cdec24dc743a2"
  },
  {
    "url": "assets/js/34.09d98cea.js",
    "revision": "85c2612f32f029dba4801ba222ae3db3"
  },
  {
    "url": "assets/js/35.c0c1d075.js",
    "revision": "557afd241d9e547eb6e0c3b6121bfbe1"
  },
  {
    "url": "assets/js/36.5ca5a5e0.js",
    "revision": "3ee9059366188b677178f6f48166e9a5"
  },
  {
    "url": "assets/js/37.cc27c0a7.js",
    "revision": "efca9bf7c110e9a10a83f63500fb6218"
  },
  {
    "url": "assets/js/38.9542425c.js",
    "revision": "8384f384bca9185aaf4c47152468923c"
  },
  {
    "url": "assets/js/39.abad7986.js",
    "revision": "cb06ba2bcea6f3858acd7d56722e743b"
  },
  {
    "url": "assets/js/4.163ec0c9.js",
    "revision": "e959f518c58906a8c1f5f7be4659a55a"
  },
  {
    "url": "assets/js/40.96d34cb7.js",
    "revision": "ab73f106a3069598162401d0d144aab3"
  },
  {
    "url": "assets/js/41.5e0955ad.js",
    "revision": "f1d2e5f93642a8cbfb8f614059c8d919"
  },
  {
    "url": "assets/js/42.419168b2.js",
    "revision": "6cc622e69d7266cd1dafdc4e2322ba98"
  },
  {
    "url": "assets/js/43.878d83a6.js",
    "revision": "de7737a5b743a98e4b7340e171aaa180"
  },
  {
    "url": "assets/js/44.d780dbf3.js",
    "revision": "ddc60912b2eee10aeaff47f25b855bb8"
  },
  {
    "url": "assets/js/45.f057eb3c.js",
    "revision": "924fb6ff97235001eb5dc01c833a5e0f"
  },
  {
    "url": "assets/js/46.37641032.js",
    "revision": "66a24dea67edf51673f8945a370a954f"
  },
  {
    "url": "assets/js/47.cddb0f8a.js",
    "revision": "e59e76a0e613925fb2ecd4b19e063092"
  },
  {
    "url": "assets/js/48.68d5329b.js",
    "revision": "942fd45d2dce95bc72263a911ffdeae7"
  },
  {
    "url": "assets/js/49.0f47ff23.js",
    "revision": "44273269e236891904ffd682780ea00e"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.8eb9cd6c.js",
    "revision": "c50bd854ba14ff23859dabf1f3cb2cce"
  },
  {
    "url": "assets/js/51.7757be20.js",
    "revision": "2ea080b6955b311ea4c3129fa6e14e7d"
  },
  {
    "url": "assets/js/52.8dc636a7.js",
    "revision": "5c0749f1080c9fae72b86725d69b3278"
  },
  {
    "url": "assets/js/53.52e76894.js",
    "revision": "5e5d102e42c085ab03fe4a3ff4698438"
  },
  {
    "url": "assets/js/54.16dadd6c.js",
    "revision": "e27ca84872eac89fe985f5baac471842"
  },
  {
    "url": "assets/js/55.596d5e89.js",
    "revision": "575d3bbd439a5127f8a4c019c54b9d50"
  },
  {
    "url": "assets/js/56.52954f43.js",
    "revision": "ae745472fdd8a89ed5bfcc357022d29c"
  },
  {
    "url": "assets/js/57.28f2c4a8.js",
    "revision": "89bf592f9f31486356ee07b139bc538e"
  },
  {
    "url": "assets/js/58.e545060c.js",
    "revision": "9ee81be8898c0cc4f14b14c994462940"
  },
  {
    "url": "assets/js/59.3f6a1e87.js",
    "revision": "f6419b2ce1c53c505e9a63e6969015d8"
  },
  {
    "url": "assets/js/6.06f53c15.js",
    "revision": "007acd36f4f324b469b0fca856142a96"
  },
  {
    "url": "assets/js/60.48c5b494.js",
    "revision": "0ca5c3c56ba21511724aa9934358ca54"
  },
  {
    "url": "assets/js/61.581e6ee5.js",
    "revision": "6dd55965af19e13caecf269f2990408a"
  },
  {
    "url": "assets/js/62.56b3d158.js",
    "revision": "3758f9973c12971e33a9e382088d1a4f"
  },
  {
    "url": "assets/js/63.e3100eca.js",
    "revision": "3d274955f254f0a3d38ada73d15fd802"
  },
  {
    "url": "assets/js/64.c3b5ba33.js",
    "revision": "47e66fc0cb4e842b1460844a2f08ed64"
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
    "url": "assets/js/app.6fac995a.js",
    "revision": "fb5008a5f2b515ba3951cfacef37db38"
  },
  {
    "url": "index.html",
    "revision": "ccd3e932ce731bfd948940a2e6b1a769"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "530b95e5ca7c890bda269257fa7b0bc1"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "1fdcd743f4bc2a050350a4f44ac66c67"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "e753046bffbdbfbeca3c3c6bed1c7f94"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "cbe5fdfad9c906c774e319c78ff12424"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "b970c0e02ba9d317d3b4e080b2666ad1"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "d76bde682b4413fdc9a96f092a10ac1a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "377debdc840166aee3ba55d6463216b0"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "d73f93c0ec134ce72a0bfd1de5784fb6"
  },
  {
    "url": "memo/memo.html",
    "revision": "f75651ad431da8d7d8dbe3ac903e6ac0"
  },
  {
    "url": "post/test.html",
    "revision": "62d742330516e7f75a0dfaa6883c0f60"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "2106d90426ce823a1b7b6865def493ba"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a1703d2d74832cf1ad707454df77fe82"
  },
  {
    "url": "study/english/words.html",
    "revision": "ef60d7b65f0c1c4c72fd26863a8b1d29"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "747ea4542c192ccf32c53616015e957c"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "e42be55336c045ad9db186bcba1f3fe8"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b308b42a8e6a2535d42a26b896dc4dca"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "6ff5aa72938b010d18c61e9e1e6bb232"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "eebaae36e25dae18d69cbfb1cfa16fc2"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "8cf0b3772d26207d291654cf1f38ab38"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "fc1fb25af490d538f93de9e8351aa12c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "dd93e251a6adfdffd7850cc09774717f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d29a52adf47d4fe4a91ecd24452b691c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "7341dce040313de7312a85e33d9c8bf6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "f03fab1819cb653ad857d6b1220034b0"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "3f45bd9c0d348d488fabcbfb0ed1b5d1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "0eb488f791f7d23af824ff24206be278"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "f11cc792069a509851219d58bc47e71f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "35ac2a489b8088c3d3df6424ff9def93"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "ca2201f7edc6948104683007929df862"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "dbe3ef6f608d2a1923c7628bc0292939"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d2545cc0010ed17bdddba0a0925d2840"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "95099b662f52cba766773d57e9911bff"
  },
  {
    "url": "task/2021511.html",
    "revision": "7f4b4e631647e59a37b638a0d83723bd"
  },
  {
    "url": "task/2021514.html",
    "revision": "ca895297863f15a6597cb0567ea28d1f"
  },
  {
    "url": "task/2021515.html",
    "revision": "dd65c3d378e0300e8c68b0abc4e466c9"
  },
  {
    "url": "task/2021518.html",
    "revision": "65b5e51db3126c27ad7caede8f533405"
  },
  {
    "url": "task/2021519.html",
    "revision": "af4543abe61ad602b53a66d769a24508"
  },
  {
    "url": "task/2021520.html",
    "revision": "3021b5e0a428586908ada98dd42078b9"
  },
  {
    "url": "task/2021521.html",
    "revision": "d840ac8b5d33772eac57f049ecc7d9ee"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5393323bf67dd6b4f515713d71fb5800"
  },
  {
    "url": "task/2021524.html",
    "revision": "26390fb59b65d0c7e9ab8a935c5ab958"
  },
  {
    "url": "task/2021531.html",
    "revision": "4c5b8adc2254a59ad5926aa4436274cd"
  },
  {
    "url": "task/2021628.html",
    "revision": "c590f97cfd3edaf406dc9436d7581791"
  },
  {
    "url": "task/202164.html",
    "revision": "7e7dac9ccfa89beda6399f5af4ff15fc"
  },
  {
    "url": "task/202169.html",
    "revision": "e0bccd0246be19c16c4019e3c29ca5c8"
  },
  {
    "url": "task/2021717.html",
    "revision": "0a1d0f051934bdb18abf1a8c5a3afb7c"
  },
  {
    "url": "task/2021721.html",
    "revision": "6e99fa2c25f52db47a0529612f0c82f2"
  },
  {
    "url": "task/2021722.html",
    "revision": "fbed23006d81b2b449f6f6d06c5dcf08"
  },
  {
    "url": "task/2021724.html",
    "revision": "d3c6869533d2c25f47307236860c80e9"
  },
  {
    "url": "task/2021725.html",
    "revision": "91c27d2428f5186353feb6e3317337ba"
  },
  {
    "url": "task/202181.html",
    "revision": "f8d026a36238d565b96e4cef9e7b1890"
  },
  {
    "url": "task/202183.html",
    "revision": "c7b745f0d57670e43b911f1689c91fd1"
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
