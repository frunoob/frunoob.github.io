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
    "revision": "2ae8f04cccc213b438d98271758e737e"
  },
  {
    "url": "assets/css/0.styles.78f988f3.css",
    "revision": "24f0ef4a81c1f36c190e44f826c0233b"
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
    "url": "assets/js/12.dac3bab3.js",
    "revision": "4ab3ddad2ba4430ce19ffa07f6723b05"
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
    "url": "assets/js/4.205a1c08.js",
    "revision": "71aa705a24001c78142fed51b35b918a"
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
    "url": "assets/js/5.c3b4a9f4.js",
    "revision": "45de03dbc28181e443e5c93c8418ae55"
  },
  {
    "url": "assets/js/50.7abe61d1.js",
    "revision": "d01f5871ec82740f25d1e3e502bdefef"
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
    "url": "assets/js/8.3ca588b0.js",
    "revision": "cdfe41c49029877319154662838ab7bf"
  },
  {
    "url": "assets/js/9.606d0b00.js",
    "revision": "85a1faf6f1e4296091616cf8b2cc62ec"
  },
  {
    "url": "assets/js/app.c80b9024.js",
    "revision": "2b99128e82d62e749f90502730c7ac9d"
  },
  {
    "url": "index.html",
    "revision": "ca367e187692f6fd4e35dd7fa7537e61"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "93b8f21a1deec550ad2b2f4d9d4de5f5"
  },
  {
    "url": "memo/memo.html",
    "revision": "1b1ec5f1f1ea8bdc31f9bf5e7ce0bd32"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "77f8f8491dbea774056feb60f152ece4"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "12d6f5bff99577e99117bb1b0b28b29c"
  },
  {
    "url": "study/english/words.html",
    "revision": "dca97943cc2a438204d1608448bd4334"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "496c9c5df59a96f2f5903afd53b3d6ce"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "128e7844b8ba434450ae205603d71f9e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ecc1a0b7d9e14c65ba1661d91eb2d5de"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0195188e2e36a04cc2be9255af6d9d9a"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "0838c1e2c6ce03afcfd617c328644859"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "47886b5000b4ba623e97a8dcc5070aae"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "74c8da38c70512258e173c19230955e7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9237d7a2e1ba14284c7dccd2671566fb"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "fffe3e476ddd67d2a61d532cc3059b78"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "0bb8faf683bd6441b9124d214d9e0469"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2f360b193c2aaa83dffd8695f3c1f11b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "044deb9e225b6e23451f47926c4958cc"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "83d42c700bf44c69b4d6c3acd4b17f30"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "14cdc3eb2b38b68b53254e842ac7f4b7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "eab31ab957f9ad9304180b9c150086e8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "242752c170a9366d897c90cde7cbd263"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f7fa0cd329e18b4f95428080479a2d46"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "5e8e58421422775cf14c2ac9d69dc3e9"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c953b353ae8c00008e18b9ffaa0197cb"
  },
  {
    "url": "task/2021511.html",
    "revision": "a1a2db4011a7047d52358eb61bd8bcbd"
  },
  {
    "url": "task/2021514.html",
    "revision": "34c1c58ddb3a4a6c17312c23fc3aaf14"
  },
  {
    "url": "task/2021515.html",
    "revision": "5ac3c6079521b07606edb71c6c867356"
  },
  {
    "url": "task/2021518.html",
    "revision": "b7009e12fb426085d6ad5e78166c9d59"
  },
  {
    "url": "task/2021519.html",
    "revision": "8ac27e6961ff150cb9d40b8bf065eb47"
  },
  {
    "url": "task/2021520.html",
    "revision": "9a48e1e0b18618f09c8d02f6a1670364"
  },
  {
    "url": "task/2021521.html",
    "revision": "131bbf583b6cb9784f6834adebe01a8f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "305a971a557322306801228db0b8e240"
  },
  {
    "url": "task/2021524.html",
    "revision": "39a8327afc9e9322a716b7296ddbfc07"
  },
  {
    "url": "task/2021531.html",
    "revision": "3f635394e132d98ef787f046c8537158"
  },
  {
    "url": "task/2021628.html",
    "revision": "6a9945b0a7377f03358b45da254bd472"
  },
  {
    "url": "task/202164.html",
    "revision": "78b2ecdc4d3856e34b98f1aff04c4e99"
  },
  {
    "url": "task/202169.html",
    "revision": "5eb4ee57239f942987523babd9535b0a"
  },
  {
    "url": "task/2021717.html",
    "revision": "b063e17c3cbd0b90d87770eacbd7feaa"
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
