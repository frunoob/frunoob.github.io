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
    "revision": "237f330bb655d64c742c7c71d7a5f9c8"
  },
  {
    "url": "assets/css/0.styles.a1cc749b.css",
    "revision": "a1c59bc492c442aef1ee529199d0a6ab"
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
    "url": "assets/js/6.91a995fc.js",
    "revision": "9c590a71e54394432f42f9bdc03a03bf"
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
    "url": "assets/js/app.a5f41dd7.js",
    "revision": "2424b178a173e64968c20e8ad7559bef"
  },
  {
    "url": "index.html",
    "revision": "c15a2fc59d8f1719fd7de72364174cfe"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "cb7a0d70a6e94f281ecfb3d3054cca3f"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "677af54ce05c58cd093a8e3d50510314"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "26b9708b10ade9a5b8c3b5331d53c444"
  },
  {
    "url": "memo/memo.html",
    "revision": "05f8e5f49fe4739016e028fda0edd944"
  },
  {
    "url": "post/test.html",
    "revision": "206677dc213652d78dc17d06eabf9a74"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "2b3e5d04c2dfbbbe61ffc251091f4669"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "060ee8171273295ad85902a6939a14f8"
  },
  {
    "url": "study/english/words.html",
    "revision": "3c54396342b6bf1fefdc5b49e328e37a"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "28e2431537cb00f57a507cf17ea831a0"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "7fc77aad0a9ed75bc3d95de3a733f118"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "6f977adc59b6fe7fc823f15ba7d4429f"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "640eca8979b0ab6171238cf67f41d816"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "45d7bd2a3e555d39df6517de81958f89"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "07113c85901a87a2a69bcef100066c4a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "91698cb6cfb9a325d19f8ee4593199ae"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cb826d19a30bb347bee4570d55503e24"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "759feb9c5178d855468401f19d7c8734"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "8eaf04d901c738bd9c59862837e4a1b8"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "cfce0b318822be3bef0bd0c16f201a83"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "51ddc6b4158567654c9a40bc9087f4c5"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "fcf404cc8a1005f32223fd82ed43a27f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d79a735ab616e9780c3b63a75368424d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "829857cf1d10def653a93b36f719c1a5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "8f73a1e5d3bbdfaac40feb7b7bbab969"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5e3aeaa6f3ab531ab2bbe2df764345eb"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "c5c5c0403cbdeae8574a7cbb402ac802"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d1e87d0693739b101c2beff4ecb7dbf7"
  },
  {
    "url": "task/2021511.html",
    "revision": "6a22dbb53ca4d6ce7c296ce5851c780f"
  },
  {
    "url": "task/2021514.html",
    "revision": "7d3261fd3c911709496c57165ab126d8"
  },
  {
    "url": "task/2021515.html",
    "revision": "c1c1ed5bcb99275c4ce4aac3f040b794"
  },
  {
    "url": "task/2021518.html",
    "revision": "f33cd8323e4f9a02700883845a53fa38"
  },
  {
    "url": "task/2021519.html",
    "revision": "a647b54d7b96398ae0c9701c8de8cd09"
  },
  {
    "url": "task/2021520.html",
    "revision": "bd25999e0e6fc2112b855dd917af4a1d"
  },
  {
    "url": "task/2021521.html",
    "revision": "c5685285200ef7563a944fb39e3db25b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c1631c00b6220a7b5442b142fd4ff8f1"
  },
  {
    "url": "task/2021524.html",
    "revision": "d0c14a394ba67285fb0a70d6a87fa403"
  },
  {
    "url": "task/2021531.html",
    "revision": "64cbb498d1a8d207b493d593bc835ab6"
  },
  {
    "url": "task/2021628.html",
    "revision": "e32b054e826d2e31711275bc7ffbf74d"
  },
  {
    "url": "task/202164.html",
    "revision": "7dc236b4ea14fdda4a43b51c06322c5e"
  },
  {
    "url": "task/202169.html",
    "revision": "a995cc98d73ecf39e3d78e963281ffc1"
  },
  {
    "url": "task/2021717.html",
    "revision": "073c5cf28a7da32ce6c650c03f25b78d"
  },
  {
    "url": "task/2021721.html",
    "revision": "d8ea5a8e1bb3966be1a932ad989382f4"
  },
  {
    "url": "task/2021722.html",
    "revision": "106b35c1c1e20f580dce9b1367a62df0"
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
