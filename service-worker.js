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
    "revision": "1e39c595447f6a2988c045a4beb20796"
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
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
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
    "url": "assets/js/8.9d74c288.js",
    "revision": "5ade34dfffb05f736359330662ba53d0"
  },
  {
    "url": "assets/js/9.cc580a6b.js",
    "revision": "6090a79c923c3ffdef238a7aeccf4481"
  },
  {
    "url": "assets/js/app.0872be64.js",
    "revision": "54622d09cad433119aeaf0811ec2e290"
  },
  {
    "url": "index.html",
    "revision": "9ce05f358bdce4cc8c522dc314278212"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9204cb7419a8563e2a8696bb3f0320e5"
  },
  {
    "url": "memo/memo.html",
    "revision": "d27c9bf806864c61224fdf5d71bfa159"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "0c815b072f98b7ffed8ca23f6e926678"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3fbb674fe43c533c493deb22e3208693"
  },
  {
    "url": "study/english/words.html",
    "revision": "2a49bba90f595add9e276497728b32e8"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "5fcfdaddb116af82ece43bb5e05f06b0"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5fb6694da455202e161ba5fef7a29122"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2bc8738eea8f4a3ccb03f7596070d361"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9a25a9a388c03566e2866820fdfc8dfa"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "da94cf2909da68d2de5b3c9fb9e13aa8"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "6ef0ded65e489924202bab0d385f8a52"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "fef27e1e99484423d52be921719de974"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "11786270774cd2a52063caa705aa3078"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "2360672b15e68c49874a4dc37224f15d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5425ad6a401fc42412dabf6a6d9d9bd1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2ad9a9ecd7450e321e8f234737d0574e"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "99b1b0e02c74381dcb0c554776a627d8"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6446bd0ccb64244db3cd1ed4d08402e0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "83062563a46848dc1afc3de94227451c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "5b7139b596536ad6dac9f1bb7b167e3e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2ef5210a24a5a742b25b0269c168557b"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d7ff12afce1bd13509bef668402eda72"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2caa455cc793f64c7ef0a29594b90527"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e0fbd1d9f572a702b212bce08d491e0e"
  },
  {
    "url": "task/2021511.html",
    "revision": "1a5c7fdb2d73e529353ea3bef533b80c"
  },
  {
    "url": "task/2021514.html",
    "revision": "b2c0d03a8bab421bb29559c3689b40dc"
  },
  {
    "url": "task/2021515.html",
    "revision": "181b6e620c13da46c29e6e80469dc56b"
  },
  {
    "url": "task/2021518.html",
    "revision": "7ff8003dc253476ba638eb82d8d32d68"
  },
  {
    "url": "task/2021519.html",
    "revision": "89c398e70230e531a23f36d040f3bd87"
  },
  {
    "url": "task/2021520.html",
    "revision": "0c7b416cea59c4558eb1f34673c4da4e"
  },
  {
    "url": "task/2021521.html",
    "revision": "9a72923397d4fafdca3e106e4c7c79ea"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "080108769fdfe9b666d21d8bb9cb054d"
  },
  {
    "url": "task/2021524.html",
    "revision": "1513eba5ab856be0c3b124971160ba66"
  },
  {
    "url": "task/2021531.html",
    "revision": "c7d9acc4780f2f11fab7ce0ddec4f10a"
  },
  {
    "url": "task/2021628.html",
    "revision": "13188380f119314ea1524625db4c218e"
  },
  {
    "url": "task/202164.html",
    "revision": "a1de73e1cf4cdfe98cfb382442810ef1"
  },
  {
    "url": "task/202169.html",
    "revision": "1b12e63ad1873bed7e623bff01b3a198"
  },
  {
    "url": "task/2021717.html",
    "revision": "39f797d4743fda16949b2328e2fb988f"
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
