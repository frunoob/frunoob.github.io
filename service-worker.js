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
    "revision": "b7dffed1fbf7ded5b0d760a2469ef98c"
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
    "url": "assets/js/12.f6d74dff.js",
    "revision": "ddaa517fdf69b24d286243fc05ab5d39"
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
    "url": "assets/js/app.6eed25bd.js",
    "revision": "924add1382b9e205c553894907e2cafd"
  },
  {
    "url": "index.html",
    "revision": "3b0242db364f3682a56d5af51b1d00e4"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "09146927846016b781c6ce3c5087f259"
  },
  {
    "url": "memo/memo.html",
    "revision": "2dbe97ab5c777bb96ed15b3ba1b80cce"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "be532c7229a3f6efe6792948e52a283c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "cbc035083598558f540de1fa7206ee42"
  },
  {
    "url": "study/english/words.html",
    "revision": "d1d2302dee803a0440ca916ecc2dcabe"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "71737fd6f79433147973557e5be77187"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "05aad380dd78297399abaf8ec7c80518"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ce62072931ac4ef6d4fda1925cb33a32"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "83602e792c31921865695bd78b72704c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ebcaed56cbf476044bbc8ad5c7080ca8"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "49af138cbc54a9a2d92d0e0efa6fd830"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "ead14aa7426e9d36673e72e91db9ae92"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "c789618e71e246680a8169a5996beb2b"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d18f8f524bd87fcbe083826516dc7674"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "589a38ecdafb7a6202d88d0c68e5729e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e449f9f5b3d72b903a766924aac57a82"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7f1a94baff9c5bc8edf5e39550129e17"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e4efa972004c9ad991687b9e79a7d690"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "827a459a1a22ab49888b6a258ab88995"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "8e76c684ce9499e5c8c5f4d3b349ffb7"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "00157d596704b52e0b41f36566a70156"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "acbb7f6776009b77a9b79f46070f51f1"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ad9f4d276205f0b0bc0f609bab0a9963"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "4223a3264458d1001e6b0b9d7934bc22"
  },
  {
    "url": "task/2021511.html",
    "revision": "1a099839583545fc2f9cf6494f3961df"
  },
  {
    "url": "task/2021514.html",
    "revision": "cdf81f77077c2c21613337f8440234a9"
  },
  {
    "url": "task/2021515.html",
    "revision": "224df9d93b925c2a97f8f0989937357e"
  },
  {
    "url": "task/2021518.html",
    "revision": "8a7ad19a7e14e01d2d7b8666b440179d"
  },
  {
    "url": "task/2021519.html",
    "revision": "007edeec0344a3bf649c36a711d04f4d"
  },
  {
    "url": "task/2021520.html",
    "revision": "2d9e1239ed2ddd3508536ea00364833c"
  },
  {
    "url": "task/2021521.html",
    "revision": "24217f735d1f32bda1135fdcc216c956"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d15a9f95c17307c2162901bb38061292"
  },
  {
    "url": "task/2021524.html",
    "revision": "fd6b451828520f4548275b541e091354"
  },
  {
    "url": "task/2021531.html",
    "revision": "d21743fa5a660e281ec21d39a618d515"
  },
  {
    "url": "task/2021628.html",
    "revision": "0bbcc0aa76f0d0cb07998b04372e4fc4"
  },
  {
    "url": "task/202164.html",
    "revision": "6c1370e1d943f1963327af9305e93d92"
  },
  {
    "url": "task/202169.html",
    "revision": "3fe2fcce2d3ad786e56e1a6a92dae833"
  },
  {
    "url": "task/2021717.html",
    "revision": "dc5235495f82baf7386e45acb94e995a"
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
