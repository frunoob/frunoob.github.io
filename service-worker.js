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
    "revision": "f7d4f962b8ababcbb9f8dc95b52e31a6"
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
    "url": "assets/js/13.8a3b6943.js",
    "revision": "db544d0a986b1aeb6160342d8e783fc1"
  },
  {
    "url": "assets/js/14.7075fe31.js",
    "revision": "3aeb453a1e02b869dc8a91e619ec0d93"
  },
  {
    "url": "assets/js/15.79814c96.js",
    "revision": "e7bd01d881faf4ebbb67eb1f4885b965"
  },
  {
    "url": "assets/js/16.227506b1.js",
    "revision": "3ae765ad82983bfc8603a2d6432980d5"
  },
  {
    "url": "assets/js/17.211cdc20.js",
    "revision": "05cb97431db705b56b0c39cd663afbb0"
  },
  {
    "url": "assets/js/18.a310ab8f.js",
    "revision": "7f64e397095220f0843e0be7263854b5"
  },
  {
    "url": "assets/js/19.df4e16c9.js",
    "revision": "2045be5beed7e75ff94d1caa84f27d0b"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.cd09380c.js",
    "revision": "ace133faabdc64c90a40f79506e54fda"
  },
  {
    "url": "assets/js/21.0b1d65ca.js",
    "revision": "7026c321003677231cb8f19a287ad4af"
  },
  {
    "url": "assets/js/22.082932fe.js",
    "revision": "97d635872d4c4b78b3dc361c7846957f"
  },
  {
    "url": "assets/js/23.94a12960.js",
    "revision": "c49e09d62a00e3e91c5510243f3167eb"
  },
  {
    "url": "assets/js/24.e6c360c0.js",
    "revision": "29809cec7b74e3f989eabeabf6748980"
  },
  {
    "url": "assets/js/25.47e9a329.js",
    "revision": "5dc09954d33becb98837e5105728d04e"
  },
  {
    "url": "assets/js/26.bbe9e2ed.js",
    "revision": "25a3e88d68dda7175c3f00ce335d10fd"
  },
  {
    "url": "assets/js/27.e52c1417.js",
    "revision": "a986453e0339520a6c01c1368c83b045"
  },
  {
    "url": "assets/js/28.8d639eb0.js",
    "revision": "d77da7cf7d74ceee42dbf273296f11ab"
  },
  {
    "url": "assets/js/29.27e7d106.js",
    "revision": "fdcdd6cae92e43a9436053c2f1f5a158"
  },
  {
    "url": "assets/js/3.585a5d7a.js",
    "revision": "2dd765a6e71d3f28f52565845b6eadb7"
  },
  {
    "url": "assets/js/30.c254a8c2.js",
    "revision": "447eb074bd4d6e4baf9fbab3aea454ac"
  },
  {
    "url": "assets/js/31.66be3ad8.js",
    "revision": "690348116f8dcf88c5c10f710ef3187a"
  },
  {
    "url": "assets/js/32.b9ff8848.js",
    "revision": "63e93f54a61427fdd880f5b161bfdc8f"
  },
  {
    "url": "assets/js/33.d33ab9e7.js",
    "revision": "9c659589dde14f22eda2b5b8af9cebb3"
  },
  {
    "url": "assets/js/34.526f51c8.js",
    "revision": "c17dc2850940b7c9b4378b1ac7a2fd5e"
  },
  {
    "url": "assets/js/35.f8598727.js",
    "revision": "ffcb11e7b055c2e6eff697584ad7dfca"
  },
  {
    "url": "assets/js/36.d362e759.js",
    "revision": "c93591bbbe767250910c7cfed7fa5038"
  },
  {
    "url": "assets/js/37.f9e84385.js",
    "revision": "335fd19bda605b9e65e15edc9de5f260"
  },
  {
    "url": "assets/js/38.9b2c490f.js",
    "revision": "b7cd1991a17b2d8bc76f83b5a1cf7b82"
  },
  {
    "url": "assets/js/39.d0b58d0a.js",
    "revision": "4692d9d75c80aa6bab31a310be41c261"
  },
  {
    "url": "assets/js/4.04dc7e15.js",
    "revision": "ea61d37258a6e3a7f493916c4efa18f4"
  },
  {
    "url": "assets/js/40.7510e44c.js",
    "revision": "bf3f3533add6f8f7e774da0ac9b87d19"
  },
  {
    "url": "assets/js/41.1b03c41d.js",
    "revision": "029a9f0175fae875b8dd08a4122eef1d"
  },
  {
    "url": "assets/js/42.27845b7d.js",
    "revision": "c46e3166dcb0c7e9806ef39d2156ce0d"
  },
  {
    "url": "assets/js/43.38af79ee.js",
    "revision": "9571be68686525d5a8fd4ac4a2011073"
  },
  {
    "url": "assets/js/44.2ee1061c.js",
    "revision": "d8d903e0b64102e0f62b9fdf8125d0c3"
  },
  {
    "url": "assets/js/45.6331ae58.js",
    "revision": "4114f488a8762e834dfcc41b3301fd98"
  },
  {
    "url": "assets/js/46.05d7426b.js",
    "revision": "ad8c4df9cbda1cad7575206cf3413097"
  },
  {
    "url": "assets/js/47.306d73fe.js",
    "revision": "7dead09fddfeb869211b89f36832875f"
  },
  {
    "url": "assets/js/48.236b134c.js",
    "revision": "b7c6a5c527bf127531b01d513b6bdf34"
  },
  {
    "url": "assets/js/49.81fd5431.js",
    "revision": "41f740689bec9ebedb69ae0d36836689"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.05e5bdd6.js",
    "revision": "b30c13ec6d8c7ff87aa9c4ef53e8147d"
  },
  {
    "url": "assets/js/51.0569a83f.js",
    "revision": "43f853660c4366bb15db163d9a1c7bf4"
  },
  {
    "url": "assets/js/52.e0ab9634.js",
    "revision": "95b22b49b133e17f3fd5ef0e7d297a33"
  },
  {
    "url": "assets/js/53.d831465b.js",
    "revision": "1301c02d685607cab3f393f17ec7815f"
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
    "url": "assets/js/app.cd18d44e.js",
    "revision": "7467ce96a15dcbc38b9004655f700321"
  },
  {
    "url": "index.html",
    "revision": "4bd3167e727d99e893eceae8e926d2be"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "d5b9540c4f1af9bc27a1799fa47a526d"
  },
  {
    "url": "list/20210722000432.html",
    "revision": "207ea36c6cc4ef5f214c6961b149cc92"
  },
  {
    "url": "memo/memo.html",
    "revision": "ca0ea8fb2850b5c1b72a3ba282931b97"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "a8f70dfe03195262a6dca1908c02071a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "0202875e7d4ae8a92527b61c4e172f58"
  },
  {
    "url": "study/english/words.html",
    "revision": "b9c1ca642ce6da6ed764161f3bb75005"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2aa604ca8014fd85ea2aa4d5945bece0"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f26839b2279c302874a56c9ef2d2adbf"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "15674e8b2b08c73df5dcbd258bb038bd"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d962e7e2156e1b1a4e4d2077b85f1ce6"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "9cf189a1901f07fdb87485606b8a5c96"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0ffcd89ec0f9b56b37c79d25f706aabc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "3f995f72cb4acd81c0c8d99f3fa9f8ff"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "a78fb78562f8f914326a2a66d1749213"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "6cf8bacfefc8285c259fd6ba496d0d39"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "dfa8afd8cc2fa7f43bf069563361e741"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "b4846d196334cf5f67428a21297c4bef"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "50e68b6a404d470a7418186cdbacd35b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c5e45292dfaa8c36a1921d45a635348f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "daa5568f0eef79054a8e65552597c89b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1ee7f8331a569de3e5d8a2b1c7b02f24"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d9e8db3846d85155ee0b7bb2b88aff74"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "98dd961bceeca602b0096bfc6564e09c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "36c011d859fa5512324567bf795fb87e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "7f096b1f088aaae33e6d275c400db437"
  },
  {
    "url": "task/2021511.html",
    "revision": "d850bbe65d633e10192ec738d70ba173"
  },
  {
    "url": "task/2021514.html",
    "revision": "433bc79a57162924088c47be3bad6e68"
  },
  {
    "url": "task/2021515.html",
    "revision": "41740b7f8dbb74b5f897d640693a4008"
  },
  {
    "url": "task/2021518.html",
    "revision": "2680576b5a4026595c30071206b1ba91"
  },
  {
    "url": "task/2021519.html",
    "revision": "fb664cb62b5107f272d703c61d0c8754"
  },
  {
    "url": "task/2021520.html",
    "revision": "7482351b7f0d8863afac715cf2a9d317"
  },
  {
    "url": "task/2021521.html",
    "revision": "7934266c81bbf25069dc7d01ca95f2c7"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d2b3c35c75bc5a3ba55c8451bb2062c8"
  },
  {
    "url": "task/2021524.html",
    "revision": "374d792559f7c8d1c38758ff9574efb4"
  },
  {
    "url": "task/2021531.html",
    "revision": "e8e5607db323651a3c560b6f262518a0"
  },
  {
    "url": "task/2021628.html",
    "revision": "b5ffccac134440be035a703b2698858a"
  },
  {
    "url": "task/202164.html",
    "revision": "6a40b1b9a044a85d1928221e6258ebd4"
  },
  {
    "url": "task/202169.html",
    "revision": "08e684645c31d24f0f8900b4d4e45e68"
  },
  {
    "url": "task/2021717.html",
    "revision": "cf53bd2949fdb32e893059ba8fe96cc0"
  },
  {
    "url": "task/2021721.html",
    "revision": "670e28b32eceadfb11f3c057cb808137"
  },
  {
    "url": "task/2021722.html",
    "revision": "4bb9bbdbd8cd2ee2d8c5e7ceb2c0c186"
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
