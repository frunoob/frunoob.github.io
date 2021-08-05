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
    "revision": "ddc48a6345d5b843afc95d2eae9ce4c7"
  },
  {
    "url": "assets/css/0.styles.cf1688a7.css",
    "revision": "0c71f4531f35bf995cb9e2fd5b0ea9bf"
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
    "url": "assets/js/app.197f06bb.js",
    "revision": "22e0801a13e8c1cfa582e66358964af2"
  },
  {
    "url": "index.html",
    "revision": "20bfb2a35d1f72e36f62ebcaf652989f"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "77ad4b00f38646ee62fdc9db680cabee"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "65182c9f9c8b3cb3bd797920ee82ee86"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b839c51d0cbe1e299e4c8122a2bc4750"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "6a94e1fce5521c8a6b66c61e880fb715"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "399fb9598699d0b89680f0b5ff32b30c"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "46f0300a17370b8147c012d59b7811f2"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "9cb878e101baa8ffa245bb1410cfb0b2"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "7a019c58899072c5f90da840d4f0cb35"
  },
  {
    "url": "memo/memo.html",
    "revision": "7e5cbfe4733a7be9e6665447ff1e3582"
  },
  {
    "url": "post/test.html",
    "revision": "2d1330d907733cb0bb5c0d1d2c11bfc4"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "925d240f32e7ca149068e2d5e5360243"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "9db89610e4e840297dc258b2f90b8fb5"
  },
  {
    "url": "study/english/words.html",
    "revision": "ad84795234835131aaaef5c3cc88ae70"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e4e40262284f9e24aca337a6bce2b49e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "9f843f23bfe9965c971815faa0368fe5"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2826b5b24ba0ff63d90b46c21d418dc9"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0dd50bf721fceaf160388fd55510fc6e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "2b61ab03b81d111c0b71da0545aed5bf"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f53ba5ec893e75045ced647ec11a7761"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "cdf3095f85553c64d13d3f001b387ac2"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ecfc6e2bdefeadd5596f2186c90bb32d"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8ecd587b24f71b3f71b6fbb1b5230126"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "774ee4ffceb79a260a7fc3e1f5140fd5"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "a0791c7b86614d5d0aed03c9c92b3d6b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "937bc172930ed8cc31d63417f658b6e5"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5f5765c5e1097466d446de032a7cae9c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e7ee30ba0b735617ba4c410d80c75236"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "0d0f55b1e15da95b8125bcf42835dab3"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "46e84387fca0d5251b7d9c0e2480176f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d30972a7cf4d2fc381dad276b3845341"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b8ab506ed05f184077c460be08020ee1"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "4288875e9602402e2f7586dc05b2f142"
  },
  {
    "url": "task/2021511.html",
    "revision": "471edeb506b749bf1e65b87430dff752"
  },
  {
    "url": "task/2021514.html",
    "revision": "25539484e7840d6649eb5c177f354c4a"
  },
  {
    "url": "task/2021515.html",
    "revision": "7864842a6128f0546b578ed8c6f1d8a8"
  },
  {
    "url": "task/2021518.html",
    "revision": "56715400027e497e4bddd95656734de1"
  },
  {
    "url": "task/2021519.html",
    "revision": "1e22c04e4d94521ddcf816ee3073abf9"
  },
  {
    "url": "task/2021520.html",
    "revision": "3dc47a6826400579aecc5ed28a5dea27"
  },
  {
    "url": "task/2021521.html",
    "revision": "a4380bd66644518fd4dab608ff5982ee"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "3eece6e4a6680ed8734aeb56a581742c"
  },
  {
    "url": "task/2021524.html",
    "revision": "a9c6bf46981a89914dbf47561a334ec3"
  },
  {
    "url": "task/2021531.html",
    "revision": "068aba35f1679b9bf1bfefdcb99d23ee"
  },
  {
    "url": "task/2021628.html",
    "revision": "835a6becbf26acbad351756ff7c01e3c"
  },
  {
    "url": "task/202164.html",
    "revision": "fcd741cfe608791754d59068ae3ad3a3"
  },
  {
    "url": "task/202169.html",
    "revision": "0dd92fbf94ccc038ec81277efa66f11c"
  },
  {
    "url": "task/2021717.html",
    "revision": "caf86c1efc944e0da80d1d8d4627adf2"
  },
  {
    "url": "task/2021721.html",
    "revision": "3d17836b67979781aba687d29343a575"
  },
  {
    "url": "task/2021722.html",
    "revision": "a0f18cf1631bdcbd7229f368306d3781"
  },
  {
    "url": "task/2021724.html",
    "revision": "d7cbcb71a79a19ab89f1484cd1d45024"
  },
  {
    "url": "task/2021725.html",
    "revision": "a3454dd99bd287c7abc83681f4788906"
  },
  {
    "url": "task/202181.html",
    "revision": "f55da5878d163774081a24a1c61c1bbe"
  },
  {
    "url": "task/202183.html",
    "revision": "2af4940a3f507a2f8336b2e9c62fcb56"
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
