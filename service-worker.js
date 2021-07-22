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
    "revision": "026b003af51425063f53332568140e72"
  },
  {
    "url": "assets/css/0.styles.9b1a8771.css",
    "revision": "c0252a718ed0babf466ad7e32e459a5e"
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
    "url": "assets/js/16.6d5069df.js",
    "revision": "d4ab54bdfba8b13e9f1c15463969bcf5"
  },
  {
    "url": "assets/js/17.1ba0acd9.js",
    "revision": "7156c3fb0b07305249a9d93c8ea7127d"
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
    "url": "assets/js/54.d53a6dea.js",
    "revision": "8e3ef251260c4d2e7df080fafc4e7756"
  },
  {
    "url": "assets/js/55.cbe36f50.js",
    "revision": "790c7eb09866b1cc83011af47c929db1"
  },
  {
    "url": "assets/js/6.3afdcfa5.js",
    "revision": "b7cbcac2c133d05ee755d1f2a8c33835"
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
    "url": "assets/js/app.87a338ba.js",
    "revision": "8011cf90ebf66dbaa6eb42e3e19f97a7"
  },
  {
    "url": "index.html",
    "revision": "0925dfb1903ebe4cfe98acbf58cbeeaa"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "cd62e44b7e7fc94db14e6c3213dbf35f"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "92855bea5946e5ebb9c91bc7d9078a69"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "96e825885cc49b8950cd974fcb604955"
  },
  {
    "url": "memo/memo.html",
    "revision": "134566af40a8389f1c29876ef7d81bac"
  },
  {
    "url": "post/test.html",
    "revision": "4df7520dc3ff4e282b61c1cbe21c8f92"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "c88e269d9f5cb9dac7fa30b6e8388e15"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "7a98f12f8e1087262929a7bbbae53b07"
  },
  {
    "url": "study/english/words.html",
    "revision": "82e5e04f617277fe412ef614dd6a1058"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "8a3b1151870cd1b7249679fca608e2ac"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c6616e83b06a2411bbf5acefacc4aa72"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5fbb25d3d006c1a928a5c68a722efb08"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7baa8eb57027b12e0386f1a0e1feb4ee"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "63ee84f3aceceb863f203e2d290dfcc6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "83b325c795e047084c29cd25997c2cdf"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e2f0d7b6beb26967507806b696700def"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "00c78f5e8ed6820b367f09d9e62414ed"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ad5b44a8c83e1d40952f1de03af6a4f2"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a1c60f498649cf1d4fede60a1751e808"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ff14cee3d24360c15eba5d56461567ea"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "dba9d7b91aed6c160d055fab1dfc42d1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ac3c9b8baca6ce1f242f95171cfa5811"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "f29835fe4448c79ca32cfb5a358a05a3"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "a0c809af9e1f2d3370b416f0b6c18d2e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2f44156b369d9b16d7ee900dc4a1c698"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "a89d65ac57a27a7396452e6372191c41"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "a61643a62bd74c4e681a2dd6d5360113"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "5d3c2a43b7ef07fcceed32d2e5a4c720"
  },
  {
    "url": "task/2021511.html",
    "revision": "950cae8dab308308502fa40966119b02"
  },
  {
    "url": "task/2021514.html",
    "revision": "579f9967ef43b05e783ea97b1e11297b"
  },
  {
    "url": "task/2021515.html",
    "revision": "b9a9ab5e6d0da6b0a0559d2d7aca721c"
  },
  {
    "url": "task/2021518.html",
    "revision": "12176d73008c19dbd626e523609e3d3d"
  },
  {
    "url": "task/2021519.html",
    "revision": "fda30bb50dcd18ef22b1473c68d8e0e8"
  },
  {
    "url": "task/2021520.html",
    "revision": "4fc9768c9105990bd9614f78cb4750f5"
  },
  {
    "url": "task/2021521.html",
    "revision": "b5851f56c5f29a86b139598701b12335"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "2745319c769f501b199c468faf5ce25a"
  },
  {
    "url": "task/2021524.html",
    "revision": "cfa719ca6b5fa45ae0f71248637bdd23"
  },
  {
    "url": "task/2021531.html",
    "revision": "577f939415ee18c6557a4433c2c8f6aa"
  },
  {
    "url": "task/2021628.html",
    "revision": "e20439824bc32aef119d24ffcb49b0e9"
  },
  {
    "url": "task/202164.html",
    "revision": "39fe85e0669f3db01360457e105547f8"
  },
  {
    "url": "task/202169.html",
    "revision": "08ac77bc3c49f5ec46863641b4ac6f8f"
  },
  {
    "url": "task/2021717.html",
    "revision": "c4bcea8627672fa421cb57cf5de1e4ff"
  },
  {
    "url": "task/2021721.html",
    "revision": "fc57bcf298e3b5a458b22533924d373a"
  },
  {
    "url": "task/2021722.html",
    "revision": "c5603183cff0b2922b8b6646bf2e1bb3"
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
