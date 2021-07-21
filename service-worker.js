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
    "revision": "42145dad09b483b01f226561aae0c471"
  },
  {
    "url": "assets/css/0.styles.2a86404f.css",
    "revision": "a3247461b59d5940bf5904c768103fcd"
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
    "url": "assets/js/13.0eed367c.js",
    "revision": "241de2c8ff68bb01a54cab995bafc96d"
  },
  {
    "url": "assets/js/14.70327f35.js",
    "revision": "163031365c54e1ba6d2cb6bf8c4ee5ab"
  },
  {
    "url": "assets/js/15.3f5a55ba.js",
    "revision": "878e9d798409e1b6dfc381a67f9cf400"
  },
  {
    "url": "assets/js/16.1119b234.js",
    "revision": "83a18135aa5efd32db483b4f24c8999a"
  },
  {
    "url": "assets/js/17.4db8e359.js",
    "revision": "a5590baeb0d05dfddfe8be1510597ad0"
  },
  {
    "url": "assets/js/18.48d0632c.js",
    "revision": "e0ef821bfdba8080f3748dcb5dc6e4b0"
  },
  {
    "url": "assets/js/19.e67ab841.js",
    "revision": "11f7f2558525efd4a0a8d484b859e9c2"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.9865bec6.js",
    "revision": "69bf4d45924a82603523dc80c9a3a8de"
  },
  {
    "url": "assets/js/21.4813be55.js",
    "revision": "c0eef54eaa948d4bcdcbd6b13bc5713d"
  },
  {
    "url": "assets/js/22.4a749492.js",
    "revision": "aa7c2124420392023d69b7df69c6cece"
  },
  {
    "url": "assets/js/23.b6c23182.js",
    "revision": "f0ca7726da9a45cffb48e6bfd49061d2"
  },
  {
    "url": "assets/js/24.8c1a6d49.js",
    "revision": "02a361d633c5647ea00b486f61f35d3c"
  },
  {
    "url": "assets/js/25.24dfbc06.js",
    "revision": "48369e9188e1f5d81fbe5a6a2b1ff6a6"
  },
  {
    "url": "assets/js/26.ff6168bc.js",
    "revision": "2144e859c5bbf9d1492b17bd856aff8b"
  },
  {
    "url": "assets/js/27.f433237d.js",
    "revision": "3aa367a171b15a596f4c25836f966068"
  },
  {
    "url": "assets/js/28.9fe7d947.js",
    "revision": "fc03cfb0c22e36d148f6bd1704a2ecaa"
  },
  {
    "url": "assets/js/29.325b5c27.js",
    "revision": "597a227b397d128ff1fd2eaa92de36e7"
  },
  {
    "url": "assets/js/3.585a5d7a.js",
    "revision": "2dd765a6e71d3f28f52565845b6eadb7"
  },
  {
    "url": "assets/js/30.0fff17fb.js",
    "revision": "01041c62928ecdb9ef3a764817eea9c3"
  },
  {
    "url": "assets/js/31.8755465c.js",
    "revision": "dbd5ccbb60e074f586c01c1c1a1fc862"
  },
  {
    "url": "assets/js/32.02f3f596.js",
    "revision": "575ac30c1073d2710da9d547a0f399f6"
  },
  {
    "url": "assets/js/33.3dfade43.js",
    "revision": "e5a4233089bac6594848e9173602e1b0"
  },
  {
    "url": "assets/js/34.c0a8aff1.js",
    "revision": "7b9a3556ea01f3ec991136db4489af2f"
  },
  {
    "url": "assets/js/35.5013fec1.js",
    "revision": "9e2658c2ab6f44497ae9f4a18596f6eb"
  },
  {
    "url": "assets/js/36.6bcd3aa5.js",
    "revision": "8085cdb94d13ab20b064ab7cad20b306"
  },
  {
    "url": "assets/js/37.9c7d22b2.js",
    "revision": "0931c888f37d8e24266bcc65f7542869"
  },
  {
    "url": "assets/js/38.db5ff610.js",
    "revision": "ee8af27171eba22b01c11b0a549f56ce"
  },
  {
    "url": "assets/js/39.40672554.js",
    "revision": "8793f50302a9313b8e936b1967c628f4"
  },
  {
    "url": "assets/js/4.9ef7230f.js",
    "revision": "784bea58b9e91b78741fdd7e99648869"
  },
  {
    "url": "assets/js/40.7ecc043e.js",
    "revision": "31568c56d4dd2c8f644e029ec1cd25b4"
  },
  {
    "url": "assets/js/41.793f11a4.js",
    "revision": "f4153df3096f946c9ae1165a238e2375"
  },
  {
    "url": "assets/js/42.7833ed47.js",
    "revision": "37a5cfa3bb73fc2c3f6154d1595b8874"
  },
  {
    "url": "assets/js/43.79808379.js",
    "revision": "931bf13c2374b8ab0e13ef6e77bc5c75"
  },
  {
    "url": "assets/js/44.51870383.js",
    "revision": "f4f64252b67c7ab1774cdb21f2ea82b0"
  },
  {
    "url": "assets/js/45.bcdb54c1.js",
    "revision": "1f3473744dddced1a1abc17876ba9bc4"
  },
  {
    "url": "assets/js/46.3872c6ae.js",
    "revision": "fedb8f0a9e3dffaf18252543ff483af9"
  },
  {
    "url": "assets/js/47.38f0ece7.js",
    "revision": "97b24627aa72057a48d66b145d128724"
  },
  {
    "url": "assets/js/48.af9d94ef.js",
    "revision": "ecf7a35945dd63db72fac68f5c08058c"
  },
  {
    "url": "assets/js/49.fea0564a.js",
    "revision": "171e2b30c29391ca2e586d2d8c7eaadf"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.ba55fab6.js",
    "revision": "d6ad9c890cdb617247171ccd976373b3"
  },
  {
    "url": "assets/js/51.9cae60b9.js",
    "revision": "5e5c48864dbcba9ca5b71ce891d47c28"
  },
  {
    "url": "assets/js/6.d87f12b1.js",
    "revision": "d6118606391355202021eaa40e0d2c25"
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
    "url": "assets/js/app.7b736f8e.js",
    "revision": "4abe1ed27b3a3ad0d05cfa57281bd9c9"
  },
  {
    "url": "index.html",
    "revision": "159edbdec83a8a061b44617d2d273314"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "bbcf40b2e3bd3b359c7dfd9e2fad6a7f"
  },
  {
    "url": "memo/memo.html",
    "revision": "0cfc9fe0e92ec9440bd1f5169ab69810"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "717b73a619ca78c171807b45f47ce056"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "ef33524fc36e6e4fee87405acdb913c3"
  },
  {
    "url": "study/english/words.html",
    "revision": "8001c6c2bcb3421a2a02797c440b01fe"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "36fbfcb9de93cdc8a5f60c65591591a1"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "e46626dfa4b4b0062bbd6e6c3e7f7ad3"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "96b692921212a63516807b1b5b44de00"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b227067aa56f9345ed3c98f3b7793568"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7be155656bb88bfe2bd723c22ee5abf2"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "409d46acdf2cb663b1c912f90137321c"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "168cd4e4b912ede879e386b38b5b9216"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "4523c5ecc6988970377c2cc52a0c0535"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d7d9ceb8964763e6cc067579e5c06784"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5c8c33352a4006a980416369d346dba5"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "09fa1cc1effe15613df1fa3e244c0203"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "8ae46480dbbb017b6796330bf3f4e0ed"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "bbfb6da06ba26bcbcdcb35f332158d2e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "0d7dc7f9a55ecdb3df7eaecce2a1bf18"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "88ecd09ed2a5d48434c3310acafb498e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "09bec61a0c175eb407445de5ac3a8aef"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0c4cb018547a00cbd948cfe9e5d14ccc"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "46bbfd83318f4859fbab171b3771b2f8"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "dec524e13e7dad75b49c957bd40d1d1a"
  },
  {
    "url": "task/2021511.html",
    "revision": "7904c7580a92801fbd86519a99d9bd0e"
  },
  {
    "url": "task/2021514.html",
    "revision": "2b82a6be3f4e9f81d1deebcf294fdce1"
  },
  {
    "url": "task/2021515.html",
    "revision": "b6823bb9bda5f01c960582c61812c9fc"
  },
  {
    "url": "task/2021518.html",
    "revision": "4a33941a474295cb8405a69c56571401"
  },
  {
    "url": "task/2021519.html",
    "revision": "6d087e40e5c36bd357c1794fe08fc86c"
  },
  {
    "url": "task/2021520.html",
    "revision": "79af08c2fde2e28ec248e3b14d7692f0"
  },
  {
    "url": "task/2021521.html",
    "revision": "01770e6d05d5c4ecad3b518fbfa166ad"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "89fffc0c08a31632c71fdd8ac97073ef"
  },
  {
    "url": "task/2021524.html",
    "revision": "7e6f3b3930d2723f817ee41081587d7d"
  },
  {
    "url": "task/2021531.html",
    "revision": "dd5fb176202d04abc8081ab25537dea4"
  },
  {
    "url": "task/2021628.html",
    "revision": "99845ea63400c2357b5a973307c8d418"
  },
  {
    "url": "task/202164.html",
    "revision": "dc4a05e746ceb6c164f0cc4316fb3452"
  },
  {
    "url": "task/202169.html",
    "revision": "134055db4b015ae68f33c5311ba3d050"
  },
  {
    "url": "task/2021717.html",
    "revision": "20071d1591364d51336fc01194ff43d8"
  },
  {
    "url": "task/2021721.html",
    "revision": "7c579aec7f42fc333e5cfb17238576ce"
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
