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
    "revision": "613f28f9c4c186789c4bc367f0ac206a"
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
    "url": "assets/js/12.36391925.js",
    "revision": "6323138c41ee3a0ddfc4133952b36de0"
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
    "url": "assets/js/app.42b7ad7e.js",
    "revision": "461c097050210728253480661cc917d0"
  },
  {
    "url": "index.html",
    "revision": "ab5c60e02864f634fefb2e25d0a99859"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9556fa2bc70b8f199f66c5ef1d7d16dc"
  },
  {
    "url": "memo/memo.html",
    "revision": "ae136dde03c400fb582cbcf8b2a00803"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "474829d29fe989ad8891b6f25669319c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "463705a99bccec07385cda174d83994d"
  },
  {
    "url": "study/english/words.html",
    "revision": "5d0e132f2ef62c578ee0e3aa14ac98ff"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "db0869d5c2061926a2e16c142e21f2e9"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "58bd64b756dc7c7a63ad2960908e7eab"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2513e26aa90ab6cadeb3308b8063217f"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "cf7a38ed0579113ea19f66b135206f2e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ffb044797b44ca436179dcad30e27473"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "69ef8496dd275ad0f76c30eb6d29ea5f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "525081c1f5cc7e892a50adc8d03af8ad"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b9c65ecd6f63996721dec819d2e867c3"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "5e999ec14072691957e681e61528f3e0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "923fb356fd8b1ee5304aeccee27361ba"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c0cfa9f3f1f023d98335f342c7ef4c6a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "87bab8620f52503141cfdfb5c507696c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "bb385adddb8ec4ed498e356e6b5096bf"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "052a58c75b5ed5fced064c3803c69520"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "384c6faa1671292abc5d8ce7d9ba3470"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2b75b5b2a5ce9336be94ae39dd303ede"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6988d88a82bcbe93888b65178e097801"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "020b77a1a47b815f0851f4d40aad569f"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "088adc05c393529a4313e501226e16b5"
  },
  {
    "url": "task/2021511.html",
    "revision": "1dd87b010a560b652dfe3b35cb682a74"
  },
  {
    "url": "task/2021514.html",
    "revision": "39b3b74a95ce47aabfc2d38ec3e1be45"
  },
  {
    "url": "task/2021515.html",
    "revision": "037350bc7081ff23637fe1482104f5cb"
  },
  {
    "url": "task/2021518.html",
    "revision": "4e39a42c92c17a7b5f01953ea880adfe"
  },
  {
    "url": "task/2021519.html",
    "revision": "86b3e7680684d9bb8b97802deb1b68b6"
  },
  {
    "url": "task/2021520.html",
    "revision": "55096f73948aaa2cecc764566b605e11"
  },
  {
    "url": "task/2021521.html",
    "revision": "7c5ce670696480cef8c84825e42b453c"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "37825d62b0d408bff479475d44da7632"
  },
  {
    "url": "task/2021524.html",
    "revision": "ef3cbc7c36139c8f3c47101fd35450e8"
  },
  {
    "url": "task/2021531.html",
    "revision": "edb58816c0cc69593f5ac4fbc4efe41a"
  },
  {
    "url": "task/2021628.html",
    "revision": "46005819df1442b10352890f4408d2c5"
  },
  {
    "url": "task/202164.html",
    "revision": "fd64deefc906291b4b2d69913b67361a"
  },
  {
    "url": "task/202169.html",
    "revision": "00b2a4f914a1cc5c41504233d759d390"
  },
  {
    "url": "task/2021717.html",
    "revision": "4312ad57ec487def1523079438de3707"
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
