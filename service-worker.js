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
    "revision": "b1cadfc2511164f488c6d9922dfacae0"
  },
  {
    "url": "assets/css/0.styles.ebd1058f.css",
    "revision": "fdf1f5b6bb4ec68ca340b52b86238504"
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
    "url": "assets/js/21.c213c4c9.js",
    "revision": "259ce77380fe7c1b136f2da858696dde"
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
    "url": "assets/js/app.707f6564.js",
    "revision": "47e963636f4755cbf7bf821dea1e0b0f"
  },
  {
    "url": "index.html",
    "revision": "5e10db39a5f11ac33a772f37dedc566e"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c9243ed002410b4148714d3b728efe1a"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "d3d76f65a1ecd9b199e320d6fe2a02c0"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "545f62546fee17225d49e830fcfd6468"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "959124b72460f870c136cd24d26f07e7"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "e0cfc01931e4d049490f77ec96154afc"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "ba21ad6994b622679fd50585f9faa9ed"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "1412df11f5351ff9abe5aa1cb486ed51"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "db1da3d83176e627fd6622cbfd686a36"
  },
  {
    "url": "memo/memo.html",
    "revision": "f9c2647fa56b5f3ddcf1e4f949013f58"
  },
  {
    "url": "post/test.html",
    "revision": "737313f2287ebc734e0bb5c81a62f98d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "44390716a12a24c1477095840202ac00"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "9df390d9e17faa76cd5ba1f164e6705e"
  },
  {
    "url": "study/english/words.html",
    "revision": "2feefe814026e7ef12466ed94166a7f0"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "fe054bb8c7255e033002fc117d7d9154"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c5819a532ab51b88231d3e0162a46238"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "24774242036d34567d6a7beadb80d8f1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "80477cdb0349846fc07f39404e132b56"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7835d520454f763c883420b9106b39c6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "172b0696f38190b2c2ff4cc9e69ffced"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "3c00c9beb12627dc483c47c6f1ee7650"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "52b6e24eb425efeae6d66dd279f8648c"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "31aa51666c6e5b13f067469e9fbab10f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "8ffde838f16202e09a3427629fe22796"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2ae5096e4e5e5265a6306081a8921240"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9852d0f5dac3d1ef0e24c2543d26b896"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5bf2753f8a6410a039d5b0914f12628d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "f45880fdc67f391028097e0c9c8db3d1"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "34a8cf7736d624482ffb60f80d9d392b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e48e4f550fbd903ae7c5d0c653cc8e70"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6c1a56e8525c135953fd51f0e5a61f32"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "bb11ac4c735a5665d9b2e3389f341e0e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "0e5756e30e0947a94f097c588aca641d"
  },
  {
    "url": "task/2021511.html",
    "revision": "fcf7acd3698e1bfce241e2ea91197d2a"
  },
  {
    "url": "task/2021514.html",
    "revision": "fb30dbe07a1fae0dc6877385f073432c"
  },
  {
    "url": "task/2021515.html",
    "revision": "f9724004e9baa6a1b2b24afc4cc7b07f"
  },
  {
    "url": "task/2021518.html",
    "revision": "a6ac53bd193b3c87f6fadf0754a24de2"
  },
  {
    "url": "task/2021519.html",
    "revision": "51943709e5a04b6cd7af0f2e88018c90"
  },
  {
    "url": "task/2021520.html",
    "revision": "f9c1f37c7e3d1e10190119c056f90ee5"
  },
  {
    "url": "task/2021521.html",
    "revision": "7592e6381d4a162df3012d6eb00e5d2a"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "1813b78fc464edd11dde139602f051fa"
  },
  {
    "url": "task/2021524.html",
    "revision": "1d7a534abfa590efbf173cf71a953e36"
  },
  {
    "url": "task/2021531.html",
    "revision": "11169f0fb6c99211534747f6f02194bd"
  },
  {
    "url": "task/2021628.html",
    "revision": "7ea96d6bf8ecfe57b2810ae2738a9761"
  },
  {
    "url": "task/202164.html",
    "revision": "4d3147511d1c8d3a92deaebc833b5f37"
  },
  {
    "url": "task/202169.html",
    "revision": "dd527215aa91db9b1653c2584b1c707b"
  },
  {
    "url": "task/2021717.html",
    "revision": "e68cc66de2fc3920bed664541d8686dd"
  },
  {
    "url": "task/2021721.html",
    "revision": "12df9b6a53555283cc47f33096138f77"
  },
  {
    "url": "task/2021722.html",
    "revision": "4ea6a2772d69f8cb012cda39b0ad46b1"
  },
  {
    "url": "task/2021724.html",
    "revision": "e7828910c594b98421a384c5b0fff69c"
  },
  {
    "url": "task/2021725.html",
    "revision": "e3cc145a36b57de09422cb6fe036cedc"
  },
  {
    "url": "task/202181.html",
    "revision": "7869f42de1c3007424273fe952ebbc0e"
  },
  {
    "url": "task/202183.html",
    "revision": "e61f2b9a9193cce2e3bcf05a4ffca943"
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
