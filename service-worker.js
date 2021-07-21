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
    "revision": "2a410b97700b3f748cd404c7ff0558e7"
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
    "url": "assets/js/4.5b58d0c3.js",
    "revision": "6777cb92bd565dfca26b1883b9b6b6cf"
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
    "url": "assets/js/app.9cf3b9e9.js",
    "revision": "e5ede2a3d1e50e211251b5a0e5b0cfc1"
  },
  {
    "url": "index.html",
    "revision": "3205b9e0fa9d6bc0ec60cd71066e20d2"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "23c82afa9bdaa38e1e90a7b1ffdb41db"
  },
  {
    "url": "list/20210722000432.html",
    "revision": "d34d0eb743514e7d494317b6bf228b0d"
  },
  {
    "url": "memo/memo.html",
    "revision": "d6f58521c9d46b305c2f852e6b7aa125"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "c864c04590eba2196537950033017677"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "20b874c3c15ff5605f3f174b8674d2c2"
  },
  {
    "url": "study/english/words.html",
    "revision": "c57856426b5c72afd591a276f6aca99c"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "41be9ba570fbbb88eab249bd1224b357"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "bf35533852899c2f3f1e3bf137183164"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "523567fafe0dec3f45f7de733f0a6d09"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "cc18d816aa9c6773cb66fc7f7451d410"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "5269e37164cdf91f704fa7dcfb16255e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "720596cd37981456ab86a29e230f383b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "5a64c9b93f1066d3b748b1d3cc2cf7fb"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cce44a920d156d9ca8aed380d029fc06"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "24b0bbcb786a1ca4eafd59e0c6417711"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "10c08cbbf92acb74364ecafbc4aec00c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "73b67627714d1c095053310ad562e00d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "723b676342f3fcd1588b8f1c90faaa98"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4b37dec1cdfb4479a56f7a723ab73f46"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "ec10530e8db01d5c98ac6953a6c46ef7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b0be19f1bda8d1a2d2d331dc130eaaac"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "73a9ea4de9a3f8908cedcf8d7d5e7abb"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "baac9e41f49e3aa6108a49f5c446e618"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2ef50912fb399b499b60930a04fde8e2"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "dc35f1f9fba58829dd05c75301af2837"
  },
  {
    "url": "task/2021511.html",
    "revision": "8f9f8458724a616e023725093f0335f5"
  },
  {
    "url": "task/2021514.html",
    "revision": "03faa39ce0ff5b995648d064eb9ef3da"
  },
  {
    "url": "task/2021515.html",
    "revision": "4b0ff3926f5029083d022751ac69681c"
  },
  {
    "url": "task/2021518.html",
    "revision": "150da5d584022fd8cf4af7518e744dd7"
  },
  {
    "url": "task/2021519.html",
    "revision": "6c8501607b577f0df380e60a1d5bbee5"
  },
  {
    "url": "task/2021520.html",
    "revision": "754a28ca10318833c42eae48b71df6f7"
  },
  {
    "url": "task/2021521.html",
    "revision": "c1d3f6e89e6e3aa1c4414f0860321d57"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "41b8b8e1cbe47d04e2b8cba47dbfabff"
  },
  {
    "url": "task/2021524.html",
    "revision": "c10e75fe6ad65d6ee15f49313cde0b04"
  },
  {
    "url": "task/2021531.html",
    "revision": "35b753d1fba373a1f2d102e1d30c123c"
  },
  {
    "url": "task/2021628.html",
    "revision": "a8bd524ba3da4ef74fd28f72b17b7c30"
  },
  {
    "url": "task/202164.html",
    "revision": "aa26eac2f40a45b9d7196a724bc3ffc7"
  },
  {
    "url": "task/202169.html",
    "revision": "6f1128f224567ae1317e1f0c0a720f10"
  },
  {
    "url": "task/2021717.html",
    "revision": "cd573964df182d5c105b84b770c2531a"
  },
  {
    "url": "task/2021721.html",
    "revision": "4b8aa133806ebff50e606a32a5426be6"
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
