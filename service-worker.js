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
    "revision": "f099809c4a9320d169a3de1b4bae2de3"
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
    "url": "assets/js/25.7becb4af.js",
    "revision": "9e60fc2d10a441de40e38696c39f6f5c"
  },
  {
    "url": "assets/js/26.2f830c1d.js",
    "revision": "0e31e4ce6fb02651e118eceead0d13dc"
  },
  {
    "url": "assets/js/27.4c853b45.js",
    "revision": "5c877e0a850bd16c01e26c283d103df8"
  },
  {
    "url": "assets/js/28.3cff9f94.js",
    "revision": "871e71822e1bdf5d428be2835dec33fa"
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
    "url": "assets/js/8.c3f31230.js",
    "revision": "8387a8ea7f4b9c6ed5ff51127ba53a68"
  },
  {
    "url": "assets/js/9.33785dda.js",
    "revision": "950ca764c4537c0aed54ea3779910654"
  },
  {
    "url": "assets/js/app.383b2c6a.js",
    "revision": "ff3e2be21d06d4fab028944404793ec5"
  },
  {
    "url": "index.html",
    "revision": "33912795e2a46fd5611b616e011906b6"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f738161940543c7409acfccbd76a7442"
  },
  {
    "url": "memo/memo.html",
    "revision": "f48b70812a8f4efe25dce8ce4888cd3e"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "658cbd987f0e1bfe18612a2acb5c8f81"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "625e7e2a6c9476f5b3ae513682d2de02"
  },
  {
    "url": "study/english/words.html",
    "revision": "76594b939381d263ca775d3858d738d1"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "07318dbf8cafa8a39619c01e0014573f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "062d469e9d1890cc4a49db31f0cc07cf"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "da565971d80cb03517a5a937f8735610"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "04218b83928a4c50bd81e4d16f4c48ff"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "a21b493b83489f60b2d473733c70de45"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "79c63b6b3da2c23db86b5e96ec2c1228"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0eac4361bd3dc8704cdbfdc5c739014f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "04964995133516c49cf00d79a8744591"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "19f7bf45c78eb6ae7c84b91b909b9815"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "277585e7b104ffe2fb726a9d2549bde6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "4633fd6a2ee97d74ef7aa7cf7ead9c3c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "6c2c9b2284a1191c96ef9e73a6798cb2"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "b3ea82623174eb213464cdf42869f179"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "7f351bee42713e47e808af237888ac61"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "5b454c90ef49ec5298422c1cd0ad9aea"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "3ecc52f85cea153839c85a3bde31be23"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0ae748f0ab15b7ee2bd80f15fea90230"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ac80eef9d305f5911f34b742a3027d43"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9fdf0ab91d3e68a3f7a86b0a9121624e"
  },
  {
    "url": "task/2021511.html",
    "revision": "301d57ee356e05eaf6ec7e90995e2a45"
  },
  {
    "url": "task/2021514.html",
    "revision": "d1aed6f4f1b8e4bd376fa5c3e7b1f877"
  },
  {
    "url": "task/2021515.html",
    "revision": "d140f30dfd8b349d569ab477db5fd8e9"
  },
  {
    "url": "task/2021518.html",
    "revision": "5dd0bb6c1adf5ee395ae5a7b64fc507f"
  },
  {
    "url": "task/2021519.html",
    "revision": "11317b84a908fed01eb0ad131271155a"
  },
  {
    "url": "task/2021520.html",
    "revision": "6b4be3c324217cf379a2e672f0ffee10"
  },
  {
    "url": "task/2021521.html",
    "revision": "ac29aaa0c8fee1a58768b906ff34266b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "56b136eeee4d540881c7a1e166bcdc56"
  },
  {
    "url": "task/2021524.html",
    "revision": "09dd17864fb862608e3052c9aaae6eef"
  },
  {
    "url": "task/2021531.html",
    "revision": "ef1cb738f9e79fcf155cbe3d3da0099d"
  },
  {
    "url": "task/2021628.html",
    "revision": "19ce5c1b107e91bccf1c4dbf822cb12d"
  },
  {
    "url": "task/202164.html",
    "revision": "ddd6d5cba2a843559c35fa50bd96aaac"
  },
  {
    "url": "task/202169.html",
    "revision": "e7a6b6cef2b0b73c0d477d38ab17580d"
  },
  {
    "url": "task/2021717.html",
    "revision": "16bd8992338c770aadb67ebab175020f"
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
