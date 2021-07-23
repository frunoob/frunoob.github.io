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
    "revision": "b688fc001ee2c8f21f5de758fe326886"
  },
  {
    "url": "assets/css/0.styles.8c3bd19d.css",
    "revision": "8d70f312fb187d89a68d5bc9cd56eda9"
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
    "url": "assets/js/6.635f6375.js",
    "revision": "4208bc04c4bb00650ad4625b11550afd"
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
    "url": "assets/js/app.db1d62c3.js",
    "revision": "91698b1614b6c08ffabaa70f6ca1eda0"
  },
  {
    "url": "index.html",
    "revision": "1cda55a549b3937b0bb0dc80c7a89222"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "dcc4274d0d57c604b421f961355b8960"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "606c4accc03800fb64a5f88f8871aa77"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "c265106501219919f64e85d3dbb485c2"
  },
  {
    "url": "memo/memo.html",
    "revision": "2c0af04804e359cf0d61a76c00724fed"
  },
  {
    "url": "post/test.html",
    "revision": "56643be00ffe48502ab5ca39a688ee6b"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "b84f05afc28bf37ec59d11d6cee015ce"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3ac5d4b9ae721c07aa1307e2884f73fa"
  },
  {
    "url": "study/english/words.html",
    "revision": "3314209b2d3e7563e6d069786b406328"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "86497ffad4bcd752ae49182011ac5db6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "51efca47527ca3a2bb9303bf3bd6bf03"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "fcd19c2a7fd1c80e4021e4b14336e0a6"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "4174ae8b31e6832ea137c8137a6795c6"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "6514a9b3f7629d08aaf3dbcd6d6b554c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d10349c13ee143d3d785b427cca3fadf"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d0f8279a5234059d06f7619adcfdc99b"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "3e9263f76132d3a74759f227da2d7ca1"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "119f7d9d1c35e4f0f52ddd5a5198474a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "c96e8498c2b6b30cf9ddb7ea7c6be41c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d59f24e079e6b466ba3625fa8086f451"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "2c76921ced9a5922d51f7262f8f7e45c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "3554dee358ff3fcf7d1a712858e969b7"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "a2b38feb5c5d62be94c2cac07b994d9b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "0d6274b89ab645a513e0999871fc831d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "1bae3617006eddf26dc80e0af3b5dce5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ab13965ac44e646cc185952e4705856e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "3f6a66060590fdfd7e51412b4e891bdb"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "79fa0e86299b1e660240397ccd2f4a8e"
  },
  {
    "url": "task/2021511.html",
    "revision": "175703513f368bf8d28c3f878428034b"
  },
  {
    "url": "task/2021514.html",
    "revision": "b2e02b08f4d6487eacb9a8e1fce789b0"
  },
  {
    "url": "task/2021515.html",
    "revision": "678e35b6f010668e860066cfb1872cd2"
  },
  {
    "url": "task/2021518.html",
    "revision": "73bb904c1c21ea5a6d9910b95078c853"
  },
  {
    "url": "task/2021519.html",
    "revision": "8b22f8f67d5b43c51ea4fa85840a711c"
  },
  {
    "url": "task/2021520.html",
    "revision": "78bb7fe3c237e88a66c403c9a5fa3591"
  },
  {
    "url": "task/2021521.html",
    "revision": "77484127e1a45ece90b5d3a4e1ada195"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "67697abfae5839bad501ede473d544f0"
  },
  {
    "url": "task/2021524.html",
    "revision": "a65dea2c02e10fafde9ed4504a421c0b"
  },
  {
    "url": "task/2021531.html",
    "revision": "67b84f7a3e7081f8824017668650646b"
  },
  {
    "url": "task/2021628.html",
    "revision": "7d0abd2f27ee4f5c8ef422a000851d84"
  },
  {
    "url": "task/202164.html",
    "revision": "959fa12dc2bdc3e1c0d0cecff778705f"
  },
  {
    "url": "task/202169.html",
    "revision": "9c9d2aac03a023a4f2916ac6d72689c3"
  },
  {
    "url": "task/2021717.html",
    "revision": "406b066fbb4daa283b4315515082e616"
  },
  {
    "url": "task/2021721.html",
    "revision": "197a743c413459b2d98023fbfeca6e55"
  },
  {
    "url": "task/2021722.html",
    "revision": "ee557d78a0e113712130ee8a2158c482"
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
