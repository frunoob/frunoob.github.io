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
    "revision": "9e19f6470fded6fbd4b588289a3d6233"
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
    "url": "assets/js/17.1ba0acd9.js",
    "revision": "7156c3fb0b07305249a9d93c8ea7127d"
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
    "url": "assets/js/app.14565115.js",
    "revision": "15fdd66770f419ea8a584aacc082af9d"
  },
  {
    "url": "index.html",
    "revision": "51880ead4a02bb60fadd534dd2a50a07"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f763519fa4bb470a67ba6199245718ae"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "cedcd48c2aee1a256491ee288a1530e6"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "ff2a7af7e44023bced80e041f0f0f14c"
  },
  {
    "url": "memo/memo.html",
    "revision": "8332d97b8e13c6265e8907a4b0e9345b"
  },
  {
    "url": "post/test.html",
    "revision": "c87b5ed9443dc5df6dd30461456ea192"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "14b6bc1ead7e96f8e75dc8d0a8f3b9b1"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "629eb8a36580a87e136f5f32ad141a8c"
  },
  {
    "url": "study/english/words.html",
    "revision": "ce3cf6f1ac98361f8be718bc7b37d0f2"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "cd98f3c8b1241afb66e3c180c8a5eec9"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "763cae086ef6ae7668a14d111d25de9f"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "74c9c8d4a7893861c06771ed91fcacef"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9907d01d39908b3a81de358bb1e499b9"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "665e375b219fa567bc264aa4b77e0162"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "515146fe3b087c510a620cc9d09de4d2"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f91de87403b723fd8e35c04582eb863a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5b6149b9340645ea6a729e09c4035f20"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d7ab3079b72e239fd5e00d216a32d121"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "e42d437524b23bebdfd6a16f734018e1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "5f651481de86de83ac8bcbec045089f3"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "45f3b7c647e26e6357bd1d1f978162fb"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8d8b56d9dce72a0e2bacc32bbb033726"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "7472246de94b79f1f94ed676bbebdcda"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3819e2fb1dbef0757643b4dc61974d55"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f868de73a5fa2b45a2a01e88710c81ed"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f1dc998e96e0b4a1c4ac2a0e7470b362"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b1f38788c71486daf413573891d24180"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c1321181b7700bd608ee78c9a7189fd1"
  },
  {
    "url": "task/2021511.html",
    "revision": "a1a9fde61c95c453d359ab8ad79d9b79"
  },
  {
    "url": "task/2021514.html",
    "revision": "14735cc2957c8e6d896508e87c01fe23"
  },
  {
    "url": "task/2021515.html",
    "revision": "bcb79568687dfe0d4713f977edd54d3b"
  },
  {
    "url": "task/2021518.html",
    "revision": "62ce0aca0cb7cd552fa74ca04f06cc38"
  },
  {
    "url": "task/2021519.html",
    "revision": "3af85e9fa2c2e1d4a2e87bfcd90cd672"
  },
  {
    "url": "task/2021520.html",
    "revision": "4a2775436661ed141dc1f5af08b8afa7"
  },
  {
    "url": "task/2021521.html",
    "revision": "d6bf9e8615b3df7b001ac35a8e14ad53"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "50de90a0dde321506366c8ee85a57373"
  },
  {
    "url": "task/2021524.html",
    "revision": "a9f51c264ffe83afc9977de36735cdf6"
  },
  {
    "url": "task/2021531.html",
    "revision": "4af8e8f47d8b6f1ec11d7d9dc19fbc9b"
  },
  {
    "url": "task/2021628.html",
    "revision": "9046244b978e7a5e97f7a2ad719c735d"
  },
  {
    "url": "task/202164.html",
    "revision": "4d639a1a14b8c8b0e7c20d83b3e1aa97"
  },
  {
    "url": "task/202169.html",
    "revision": "7e073931ad7b1e20aa314bc66867a816"
  },
  {
    "url": "task/2021717.html",
    "revision": "1595022c54686c0fdecf89204a18cd8e"
  },
  {
    "url": "task/2021721.html",
    "revision": "67384eee13d7ce2755275bae9eb4e7c8"
  },
  {
    "url": "task/2021722.html",
    "revision": "112164a7db0dd0dbdfa67ace23ef026a"
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
