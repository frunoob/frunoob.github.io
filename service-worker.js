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
    "revision": "3573cf1c4130aeee95b0b9bdb7c4374b"
  },
  {
    "url": "assets/css/0.styles.b82f6649.css",
    "revision": "dcb80d3ada5fb93c729fce0c3ab33e72"
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
    "url": "assets/js/15.b8b608fe.js",
    "revision": "d5be49339eb9e7ad5d4595addeabbd84"
  },
  {
    "url": "assets/js/16.b7d62ef0.js",
    "revision": "2d5e27dc99a0eff915fe6b9ac293b277"
  },
  {
    "url": "assets/js/17.82985c11.js",
    "revision": "33478292f02cfb63af9d8fb39d7e3f72"
  },
  {
    "url": "assets/js/18.30fe0dfc.js",
    "revision": "274a53388488fb1ae3d2611e09ceeef6"
  },
  {
    "url": "assets/js/19.2e4420d4.js",
    "revision": "6af3f91fd895ee356c1ed742d24685e4"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.d87d207d.js",
    "revision": "babb66f1c3adba569b4d27f82754ad68"
  },
  {
    "url": "assets/js/21.02731269.js",
    "revision": "d066229b9a5b8b480aad624927cce797"
  },
  {
    "url": "assets/js/22.42d09c41.js",
    "revision": "dc17147a33ed4f8bf5973cbecd31371e"
  },
  {
    "url": "assets/js/23.781727a9.js",
    "revision": "3c305fa499adfef73efde766c4d34dc7"
  },
  {
    "url": "assets/js/24.86a44619.js",
    "revision": "f44d8322e6a06ff0725881be8bbe9b2c"
  },
  {
    "url": "assets/js/25.84cf3eb6.js",
    "revision": "89421068247a930d863bceb4116ca149"
  },
  {
    "url": "assets/js/26.af94b493.js",
    "revision": "8d434cb842b4688c574e22bb89db13f9"
  },
  {
    "url": "assets/js/27.19173685.js",
    "revision": "c4986365fbe29fca00719808b4456278"
  },
  {
    "url": "assets/js/28.b9c193d4.js",
    "revision": "0c89534e6c805f196381fdb4f3c071de"
  },
  {
    "url": "assets/js/29.cc646802.js",
    "revision": "1a2ed4292c008e102c76d1d7b9116cac"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.e921c463.js",
    "revision": "8ce4b04b7ee91dbcf80c3db3d2cd5a7a"
  },
  {
    "url": "assets/js/31.47296141.js",
    "revision": "861f2dac8b38d1da5e73e845c84c35e3"
  },
  {
    "url": "assets/js/32.327f7640.js",
    "revision": "66889e4923fc76abe6c0e4fff460b2c6"
  },
  {
    "url": "assets/js/33.1ecad7b5.js",
    "revision": "fdc8dbcca7f145e147c1610cf8710fee"
  },
  {
    "url": "assets/js/34.d4b4948c.js",
    "revision": "74acd3a236edd69bbaed5f0209b6a788"
  },
  {
    "url": "assets/js/35.c9175545.js",
    "revision": "3f1b45cc69de0ed8ac3a940308bc73d5"
  },
  {
    "url": "assets/js/36.ce92ee16.js",
    "revision": "eb8ff523b9d9aeaeb6d06bd5d8e9efe6"
  },
  {
    "url": "assets/js/37.9c6a7d78.js",
    "revision": "9c1901f4c27ee3858bc6d6a111dc7c13"
  },
  {
    "url": "assets/js/38.c5841653.js",
    "revision": "eccc4c5c6efc446fe279fd556a3085db"
  },
  {
    "url": "assets/js/39.9fd011d1.js",
    "revision": "98a725b2cf3b3b0a9adee5e7521a69d7"
  },
  {
    "url": "assets/js/4.e0a8cd34.js",
    "revision": "a3249d122e8bc4455035289382480233"
  },
  {
    "url": "assets/js/40.de3b5142.js",
    "revision": "219f17f0cb2f2729e26bcb7b41ac3333"
  },
  {
    "url": "assets/js/41.b5295003.js",
    "revision": "31188b6109182fb4ea29b4ac5ebf8b6e"
  },
  {
    "url": "assets/js/42.8e36e5bf.js",
    "revision": "0eb01226c901a355a963170401eb5107"
  },
  {
    "url": "assets/js/43.5e520b00.js",
    "revision": "4b9ec50996b81284b553659d1a530ea1"
  },
  {
    "url": "assets/js/44.18c1bf34.js",
    "revision": "434cf107d2c1a74c349889ac1f283376"
  },
  {
    "url": "assets/js/45.504a5c3c.js",
    "revision": "952eea7d85b79e641987e2f354fa6e0f"
  },
  {
    "url": "assets/js/46.c53fae12.js",
    "revision": "faa7da54b9db58217fe3fcfd39ee7c1f"
  },
  {
    "url": "assets/js/47.66c10bf4.js",
    "revision": "eee997d902641a122e7cf4811f75211c"
  },
  {
    "url": "assets/js/48.8944db31.js",
    "revision": "54f005cb1dcfd793d7a0e898b05ef2b1"
  },
  {
    "url": "assets/js/49.21d5e002.js",
    "revision": "d5d5d278fc6ef3257251a7ac887ddb4f"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.5912ba31.js",
    "revision": "f3ed5be9266be00af94efe6f6422a743"
  },
  {
    "url": "assets/js/51.f8c2bc83.js",
    "revision": "269d9089c3ddc2cecfb229ecee617872"
  },
  {
    "url": "assets/js/52.fe9609b9.js",
    "revision": "b34d35d3b170dd8423f9f15ebe4d3fd8"
  },
  {
    "url": "assets/js/53.df0a8dab.js",
    "revision": "8cd420dbbf605af84dcf4916be898080"
  },
  {
    "url": "assets/js/54.64fac057.js",
    "revision": "24578eba5c5c9d62f4b83cafc3b915aa"
  },
  {
    "url": "assets/js/55.cbe36f50.js",
    "revision": "790c7eb09866b1cc83011af47c929db1"
  },
  {
    "url": "assets/js/6.f4087568.js",
    "revision": "9b251c7d1553f435d49739861a1a6806"
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
    "url": "assets/js/app.1b8e9ca8.js",
    "revision": "9f40da5d0b446bc3b874e10b58b32463"
  },
  {
    "url": "index.html",
    "revision": "b9199116642d8241c713e5ea44394898"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "637c500de2f2951dbff84e5949421ac1"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "dae0688de9ede722860106e888742d68"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "ea5a6b3842b2c8723f374a4effa5848b"
  },
  {
    "url": "memo/memo.html",
    "revision": "0ae9237a58f788cc0f4c4b229231390b"
  },
  {
    "url": "post/test.html",
    "revision": "1b51bee76e87c90b186cfc2b7fa66e1c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "693be5f7c2a2cade4e6b3e07fd82f4ac"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "ef857d6d0a7573718231a6467f732367"
  },
  {
    "url": "study/english/words.html",
    "revision": "b78855df9b37d41305115cefbf13f905"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b174e0914dafce9c476d82fcd5da2dfa"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "191e86d7eb412d60cadcb57da1e4d965"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "225e17a9bdad7a6e00011b098aa07a77"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "32f3cb3ae091de49a7c86c508c09376d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "22fc9eaa3a493d51092b3b12e566817f"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "75c401244788c7c2ec5b4250bda7ee9e"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9916abd87cb8de62433e04aa23a8a7c3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "db58b74ff8b3ea5593fe8a3440b499f9"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8aedf7e7cbb03d9dbf6198fb67c3cc70"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "90bb4c8f51f13f323b74e53fdb078a14"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e64fa819c22532f778ce3dd5c455b963"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f38ab7d7b9e5b2cfbb164d557461bbfe"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4144a08ceb07b8318511b3e39a2cfdd0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3338fe6ae34a7053645bb05073ef4b02"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c54dcbd55a8a9e182e083dee57266c3a"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0b5ed735d8e79c80fb5aa71eadc87e3f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f098de7c91aebff324f1fd770afde675"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e6e8edce7c5d645446e8178f065c6784"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "47d2fc15aad17c6f3c443533c1601296"
  },
  {
    "url": "task/2021511.html",
    "revision": "f3c79b576559a0088fb8caeead493435"
  },
  {
    "url": "task/2021514.html",
    "revision": "bb9a0a0eca7a613ab8050558fdbf2813"
  },
  {
    "url": "task/2021515.html",
    "revision": "df56b2cf03be2f76d246ae0df6797dbe"
  },
  {
    "url": "task/2021518.html",
    "revision": "c5f5d787eedb0cd849ccd56d8d1088d7"
  },
  {
    "url": "task/2021519.html",
    "revision": "132bc5d137a9a1a12f7fc11e5632d388"
  },
  {
    "url": "task/2021520.html",
    "revision": "c0e07352be67c3572c899da828295c48"
  },
  {
    "url": "task/2021521.html",
    "revision": "9b8527de6ca5c6adb533c0e54a441e9a"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "930eb048c7b8f09abc7ba3ff5611d141"
  },
  {
    "url": "task/2021524.html",
    "revision": "5736e75ff31ac13a99ca2a4f4bc8fb29"
  },
  {
    "url": "task/2021531.html",
    "revision": "d7599892a31fdc8bee5b53daef807d24"
  },
  {
    "url": "task/2021628.html",
    "revision": "4255a72a9c7f0ece646efed39b8b9041"
  },
  {
    "url": "task/202164.html",
    "revision": "fddb07f1267cfe469e74ea2587567d68"
  },
  {
    "url": "task/202169.html",
    "revision": "82de9ed75c53fbf997a1959055d4885f"
  },
  {
    "url": "task/2021717.html",
    "revision": "6f31641731d79bc25a5a61bda43c73c4"
  },
  {
    "url": "task/2021721.html",
    "revision": "f6c24b51ee623b89f2e63aeb3677e9c3"
  },
  {
    "url": "task/2021722.html",
    "revision": "bf619336b25de1afd04056035315a690"
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
