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
    "revision": "6a38b595bdd16b57c671a369a224ab07"
  },
  {
    "url": "assets/css/0.styles.9b1a8771.css",
    "revision": "c0252a718ed0babf466ad7e32e459a5e"
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
    "url": "assets/js/16.dc292837.js",
    "revision": "458307958a713fa1c2d9b2b823a038d4"
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
    "url": "assets/js/54.d53a6dea.js",
    "revision": "8e3ef251260c4d2e7df080fafc4e7756"
  },
  {
    "url": "assets/js/55.cbe36f50.js",
    "revision": "790c7eb09866b1cc83011af47c929db1"
  },
  {
    "url": "assets/js/6.3afdcfa5.js",
    "revision": "b7cbcac2c133d05ee755d1f2a8c33835"
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
    "url": "assets/js/app.f929e9fa.js",
    "revision": "77f2802f26a12b9d43f4686310a4b28b"
  },
  {
    "url": "index.html",
    "revision": "eaa3a46a923ac96ffafd3e1bb61ce854"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "60b6fbdc8d6745c5d460c3c3c62e5289"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "a5bacd34297e82d02e28ddca40ac1b32"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b682af83e402525457685bc707e459fc"
  },
  {
    "url": "memo/memo.html",
    "revision": "46d70e4e37ebec932a7616fd4033edba"
  },
  {
    "url": "post/test.html",
    "revision": "13235f0c15e4c74519bf637f55f319d8"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "0a45871167c7fbf815ba27a1c7f978f3"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c3c0e7007bb67ce292e4a0647447a8a5"
  },
  {
    "url": "study/english/words.html",
    "revision": "8d142cea27f226831a44ea9188669756"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "26f4c3103f1e5833a039ac4f8c987c59"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "e3e28ee46728eb7b5e48a5e81b2cdcf8"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "bd196b2400f9e5dbdf3b278cbc84d906"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "958bf21a58a870daf9b9fa988ca15d33"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "bfb0b95c1622220b8d72373cf6119776"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f2f3f0e4e86ddd82eb5dcd8d498560f1"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9025e61715d7c02a8f232134a52d2393"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "063f0fbfd815d020db68308c47fd960a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "1da76290cfedebe9b1d4062e00d0bbcf"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "3bd52ecef43c3c836b48beb87b314f75"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "74493cf53939e10f3dd38c4158ef7d2d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "877b9c6452578f366e5954a0388f9d54"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ae64573264615e03219a228ffc5bb805"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "82869cc5883e6b8b5c28555af20a6ede"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "bc0ce74c86a894aab527c940aea7d5bb"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "996111c972e8d9accbf5448e990a4948"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1bae1e723de2f63d8ea65ba983953736"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "f0943d8f70e10ce4a2561678fe9e123e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "33836cb5801b8d8bd8cc32bbbb833e7b"
  },
  {
    "url": "task/2021511.html",
    "revision": "a275b0158c2a3e5f97ed88468907ac33"
  },
  {
    "url": "task/2021514.html",
    "revision": "bcf5b0560c5a2f3cee258ab613bca693"
  },
  {
    "url": "task/2021515.html",
    "revision": "26916120a42ccc9660e0a247f52733c2"
  },
  {
    "url": "task/2021518.html",
    "revision": "a7278ac70ee8b0493b3f570146c2df6a"
  },
  {
    "url": "task/2021519.html",
    "revision": "f2680370768be785e584b6272abbe34e"
  },
  {
    "url": "task/2021520.html",
    "revision": "fd9cc5e4d591ab833e02ff752587e1f4"
  },
  {
    "url": "task/2021521.html",
    "revision": "51dfbb75bb232576d8cb4c832c85f763"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "52fac1bcfa073b53744417c8e68519b8"
  },
  {
    "url": "task/2021524.html",
    "revision": "2dc7037aa4e2c97615d9d6fc84500044"
  },
  {
    "url": "task/2021531.html",
    "revision": "db7dafd6bddaae3da35ec1266fbcb883"
  },
  {
    "url": "task/2021628.html",
    "revision": "10923b62610f33d6d4b92a8d3fb067ea"
  },
  {
    "url": "task/202164.html",
    "revision": "dd37f8a0950b55dba70649771c59c76e"
  },
  {
    "url": "task/202169.html",
    "revision": "7c5908d34d6ec33b2fc7ab31df21cb12"
  },
  {
    "url": "task/2021717.html",
    "revision": "93531db2ed6802d73364b6c5004eb3db"
  },
  {
    "url": "task/2021721.html",
    "revision": "854a3a332ea94bf180a3784ece03f27a"
  },
  {
    "url": "task/2021722.html",
    "revision": "c1d37cbd2144bfe5a3a1d8b41214d5a3"
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
