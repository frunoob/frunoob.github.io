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
    "revision": "811bef74ab86b47a2563a9abe3c5134f"
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
    "url": "assets/js/app.72cd634e.js",
    "revision": "2c25fed455a2e5db0160311ddab8f76a"
  },
  {
    "url": "index.html",
    "revision": "bd3835297e551dea6a7a7e8f147b604f"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f4e22a0ef2a0475121f1d20c6c07cb12"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "d2fff0d874909e22058921954e9e7db0"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "fff8dd6361857d889eeab9bef82370c6"
  },
  {
    "url": "memo/memo.html",
    "revision": "6f60236f85e731a2384ef1f3d7287605"
  },
  {
    "url": "post/test.html",
    "revision": "c6df8a45cbfeaa85018e7a1b52aaa3dc"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "bbbefde8112da28217a2f22216408437"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6a880b105b13255551368a0335cefec7"
  },
  {
    "url": "study/english/words.html",
    "revision": "7ae9872a198cc6db36d17136be56929f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "da53a6a1a9ff36ef36211dcc4bd60782"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "fc0efb33a9c0883767f2a6894ccc5d20"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a8cec324b51d0d31024905f1a9a45938"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "18682117fcea2fbc8a56703ee83eb64f"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "8c52545e25e15cd331ade84d3597760e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "00173d156a3e1e746fc865a3f366ccf6"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "fc0bfd6f099fc9f0aac21c55486222b3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2b3a9867d866dc6bda67047aa9d3ea12"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "2bb10bc6742263fa61d23bd76e48173d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "cca319a06c08e5a19d43fb5d75e63867"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c32221652c2946c732a5968d0a58046a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "372db55fc8209bfcbbea4ac69119be3f"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8651d2f0b2e87fd242ba16b8de3028ec"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b2f0cdabf6f3473853b988d6e5d97919"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "2c577d7faf15772d3810fe93b053c438"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "6e7dd94ad6b120927e1b0fe26698f1c5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3a1a9a1917b59b8e7272a6b88e677c4e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "904bc207c9373671feda04b990d7e93e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "4bda1bf05079ccb61c842097a2d24c5c"
  },
  {
    "url": "task/2021511.html",
    "revision": "a271e6af870c8faed55eb92b017ce11e"
  },
  {
    "url": "task/2021514.html",
    "revision": "1e8e39232cffcb2259d19f8c529a1168"
  },
  {
    "url": "task/2021515.html",
    "revision": "6850c278869268a32d459a1bead93e44"
  },
  {
    "url": "task/2021518.html",
    "revision": "4e1f5c57acbe8767022c52600cd043c6"
  },
  {
    "url": "task/2021519.html",
    "revision": "7372873c095b7b1c70346915d1a84652"
  },
  {
    "url": "task/2021520.html",
    "revision": "54591c141838dec4f388769a67fbdd65"
  },
  {
    "url": "task/2021521.html",
    "revision": "87f5ea06c62373223e7b7f80c86c08cc"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "f0bddfb84d5ebf0c240af9ce338a14d8"
  },
  {
    "url": "task/2021524.html",
    "revision": "c319da771f2f0a1900a978d8ac609d50"
  },
  {
    "url": "task/2021531.html",
    "revision": "ef0ce1dc3f422969ee9c9f4e1f3fc6f1"
  },
  {
    "url": "task/2021628.html",
    "revision": "5c18c541396352eb2ab16a269e85d061"
  },
  {
    "url": "task/202164.html",
    "revision": "c5b7e57fc0aed5fa6aa13afcd9a90e17"
  },
  {
    "url": "task/202169.html",
    "revision": "c43128859a59620e7643be16b8f5c488"
  },
  {
    "url": "task/2021717.html",
    "revision": "76e11ba347935008856ffbde63222257"
  },
  {
    "url": "task/2021721.html",
    "revision": "3028f94762246c8f187ce4941a8b0987"
  },
  {
    "url": "task/2021722.html",
    "revision": "75afd7f6e9e980ab493caab2b9565c3f"
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
