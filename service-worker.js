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
    "revision": "29d925007209a324c61c9e52b4cc1cbc"
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
    "url": "assets/js/8.9d74c288.js",
    "revision": "5ade34dfffb05f736359330662ba53d0"
  },
  {
    "url": "assets/js/9.cc580a6b.js",
    "revision": "6090a79c923c3ffdef238a7aeccf4481"
  },
  {
    "url": "assets/js/app.ef086252.js",
    "revision": "284e8dbd8af864a00cf928b8a90b48d9"
  },
  {
    "url": "index.html",
    "revision": "b23f311f8f1f13dde2b4475348562704"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "3733c59bea9ee65ab86622bbdbb32119"
  },
  {
    "url": "memo/memo.html",
    "revision": "56f5dcfe07486d1911b50b4cb5d0bff3"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "285595ec8bd6d4c8f342f63c9cf2e6d0"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a6b611c3f6ba4b60ad04c29786edc8c1"
  },
  {
    "url": "study/english/words.html",
    "revision": "f0a973f0e7e03f02065edf2c9a4fbfe0"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e0c5e2e808988dbd6403e1dc53adfc14"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "cfb569084018024cef225041d41a9825"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d805baacbd4752a09100d8ec4bc0c136"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d6560212812eb9b98d2b6fade1d1df4e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "5cf1f750066b1f70b3136dbc695569a6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2db00eb8b2e52275f10a120821a65bf8"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "66bb496fb454019d02a299eea40b1a4e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "62a2e14a74ea85ec76c2916af69a381a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "945ce392239abf7c034ba4a0034d38ed"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "fb8377de4b22f27996fc7670463aa011"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "76a74ea62e3fcf7451d7ae0e70e007f6"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "dc26f7bc801af0ed987e57c9ef62f869"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "547c200aa82f17f0d86dbd7ce8c5d35c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "a3821a24a68d15fd36e8820a7a53b40f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "6cf1be65393fa9ddd1351fc0332fa554"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5b653cc9c8f89adcc1864d50539fd2fa"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "02240faae9d5607618aafc856e238164"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "afecb22adb2e167b2a162b8a46428b29"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "44f10caea3a86cc6f6864a8c21539715"
  },
  {
    "url": "task/2021511.html",
    "revision": "9a9117ca3fdfef2b45516559893330a8"
  },
  {
    "url": "task/2021514.html",
    "revision": "4426db5f8d51b3091202b32d68989dc5"
  },
  {
    "url": "task/2021515.html",
    "revision": "9c2eca55d33e94f084f0cf61016b0193"
  },
  {
    "url": "task/2021518.html",
    "revision": "924c2a852727eca6be533b58a27c3cec"
  },
  {
    "url": "task/2021519.html",
    "revision": "2ef293ef1fb987c89d63f474e9da77f9"
  },
  {
    "url": "task/2021520.html",
    "revision": "f2d45e92e132e9a338e96111d895ea95"
  },
  {
    "url": "task/2021521.html",
    "revision": "6366e3964f791f2b80cb401c040196db"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c22a26b8c3baf99b9099ae937f5a5d50"
  },
  {
    "url": "task/2021524.html",
    "revision": "97dc9842347410d0301ead6e4502cda3"
  },
  {
    "url": "task/2021531.html",
    "revision": "c2fd49f746a97e6e04bfd873c3c78906"
  },
  {
    "url": "task/2021628.html",
    "revision": "3f6d57f9af5933dad22d7e24e7adcfa0"
  },
  {
    "url": "task/202164.html",
    "revision": "e05a4ac6c0c843b52ce5630eeb1ee79f"
  },
  {
    "url": "task/202169.html",
    "revision": "1ec1d55abfe6802290627659748939c4"
  },
  {
    "url": "task/2021717.html",
    "revision": "4a958f036a57041e2e68fffb907e8f7d"
  },
  {
    "url": "task/2021721.html",
    "revision": "b1f32b7697a3281c52cd5328779683fc"
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
