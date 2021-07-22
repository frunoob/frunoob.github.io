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
    "revision": "0a6f9952591f443588e981c1901bb3b3"
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
    "url": "assets/js/4.5b58d0c3.js",
    "revision": "6777cb92bd565dfca26b1883b9b6b6cf"
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
    "url": "assets/js/51.f9993726.js",
    "revision": "81ff0ed820707824f8cf09be39a3651b"
  },
  {
    "url": "assets/js/52.05b2a2e0.js",
    "revision": "58a9d5fb11810008ae329753cc914a2f"
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
    "url": "assets/js/app.c546f758.js",
    "revision": "00c322f502a9ffe0a3cdfa59d4de55ac"
  },
  {
    "url": "index.html",
    "revision": "6fde0aa462c2bd4ea1d8422fd3a33855"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "ccef6e67f514eb8eae16f84ebbb96166"
  },
  {
    "url": "memo/memo.html",
    "revision": "3998fc3431f6f7b33fc02c5f3ac70cdf"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "13a9b506ce164453d059212793f9a612"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a4886445301774dcf81b7aff253d3ba0"
  },
  {
    "url": "study/english/words.html",
    "revision": "e3475a5c2ff0da076c34de28585a0186"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "92c82196e31eaf5ab2e9cfc12d94e718"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "8e3114a0e6b6e027020f2ddd9e75a581"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2d1f1683c7c619ba5eb9311dc195a8b6"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "34fc9c42efe38c180c30afacb2a68878"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "2e3efafdb42b68304604f967f5cf4228"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2cdeadff2f6e29d78dd9d69338aa3e1c"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e79da7ca599fe26a3a7458d9f993d98e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "109cc0868e5eb32dca5a7b7d02189898"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "244e585bff5a381e690ba1f839644a11"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "4a6bf01584572a8b12c8c970ab1b0e6e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "aae22da4b515377ecf7dd8708c88488d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "2cb36bd8717d3416d291300b0dc28f01"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "fab0c7eeac81e2c4ef7b14897f085f69"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "a9ec30add4edbbb11b1ca2ec60419c16"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3b04f263d4debaabea17c77be74570a7"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "dfc4afe397ff93570ee731fde1b1fd3d"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1e95e1ec9d6e728c8081f40ab9eeb17f"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8ae5584da4a008bfdb6f945e7274c79e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "14ac3c912df33a35d2f5b384069ef593"
  },
  {
    "url": "task/2021511.html",
    "revision": "148331f11cefcd015efc5d5fa7aa9415"
  },
  {
    "url": "task/2021514.html",
    "revision": "900ff7f7478f33d122c3f52d662ec03a"
  },
  {
    "url": "task/2021515.html",
    "revision": "3d7f0140f3fbb785e0fb30953b27075b"
  },
  {
    "url": "task/2021518.html",
    "revision": "9ef4c9f03ac968f7a8bc36a14f8ae58f"
  },
  {
    "url": "task/2021519.html",
    "revision": "c95b798af5496f3f9151eb6be63d9af0"
  },
  {
    "url": "task/2021520.html",
    "revision": "50d585b52c699f03e95f93e58764ba72"
  },
  {
    "url": "task/2021521.html",
    "revision": "bbee3788e772cfa16cf14f1d73877251"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "33c984b80e1d7b4be5278598ef1e5826"
  },
  {
    "url": "task/2021524.html",
    "revision": "21ab8f6cac786d009adbf681423c057a"
  },
  {
    "url": "task/2021531.html",
    "revision": "27dc70a0f6b6e260631147b3ae374c51"
  },
  {
    "url": "task/2021628.html",
    "revision": "efd8f0249af3de2378b7498760aff46e"
  },
  {
    "url": "task/202164.html",
    "revision": "16328c2d790be6e95f122801b6b32083"
  },
  {
    "url": "task/202169.html",
    "revision": "df737ac0c0015ba7669be1f534ea5095"
  },
  {
    "url": "task/2021717.html",
    "revision": "c8f5fc699156957fe640ed68bd194a62"
  },
  {
    "url": "task/2021721.html",
    "revision": "9466dd0f0b72ccc601ad5e82dbcc1c81"
  },
  {
    "url": "task/2021722.html",
    "revision": "1025457b449d46cbd342da3b11b0f528"
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
