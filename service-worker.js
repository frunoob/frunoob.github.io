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
    "revision": "af87b76dda2c55084b687b54fcacfa8e"
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
    "url": "assets/js/16.dc292837.js",
    "revision": "458307958a713fa1c2d9b2b823a038d4"
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
    "url": "assets/js/app.89ade869.js",
    "revision": "61ff9bc2a61c9f075b8e84d1b1c5a3b8"
  },
  {
    "url": "index.html",
    "revision": "42e8a8c29f7a682ff91e160fe09adb95"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "b3c47a6363e4e28307d700e977e06d98"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "0177398f6cbaa5200913b1704c0460ea"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "43c504add69e0c464588403a517e5061"
  },
  {
    "url": "memo/memo.html",
    "revision": "bea16a660ec13db2748ab698fff99a94"
  },
  {
    "url": "post/test.html",
    "revision": "94ceac51fcea963d1c1e017fc57f2bcb"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "77c26a810d9878c30ef9a9d9125bac7e"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e2ee3e2763b4ae95c76c4e4aee3d41c7"
  },
  {
    "url": "study/english/words.html",
    "revision": "968394aece2c28251ed6e68047cab7fd"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "1e7bb62fb92dd5495f86be79986b7893"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "2d8e13f48d5cb2eb4f7c90ce32b33a7e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d70f0112ac3769e1dc1fbaca67736f8e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e79bbd7f9c325d915c93a8ab5db8ecb4"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "a5e3670ee7b5f64b7855121cc5ac7482"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d00e5ee11b54ab6695421a6346e54e58"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f6bfffd28620fec0d907ce159eb39e8b"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6a55559dc8fc024ea1e8bb9c1ff1b7c8"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "455e281f2ad606876d35f3ea5f89e585"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b350b4ff540e8666fa107ea38dfb1f31"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "a997fdd0f564fe4184bdb14badcffa4f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "54a3af04cda2d47fce331e9d7c746d05"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c30f094dd8c3fe1bc6dc5b60a8a55ce0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d27afc7e52819f700d3f9a819f70e953"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4e7764c267e3a6644ff045aa136eef23"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f5482dfa0c24dffb2daab8c592735bfd"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1e5de96dec9d68767ac11cc053975c80"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2fca60c7706d38cb6aeee9c6d15cb69d"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d8faee0966fe43fe611095157e416d32"
  },
  {
    "url": "task/2021511.html",
    "revision": "0eef1c46d50c6eed081cb7d8bd0cf024"
  },
  {
    "url": "task/2021514.html",
    "revision": "9e9bd4372b722902de18c99248ab73b9"
  },
  {
    "url": "task/2021515.html",
    "revision": "dad30830230826a024596f787a57f938"
  },
  {
    "url": "task/2021518.html",
    "revision": "b0e13cf467e583a01a9afa532d149b00"
  },
  {
    "url": "task/2021519.html",
    "revision": "3aa9327d9e52970296d2f3cf67ef6c0d"
  },
  {
    "url": "task/2021520.html",
    "revision": "1f9f5a729cde1f4fb46f37083259d830"
  },
  {
    "url": "task/2021521.html",
    "revision": "9aa3fdc53b2fb463bd91f35a40fe1307"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "700d56128af8d27a4262fbc5e4dc1c12"
  },
  {
    "url": "task/2021524.html",
    "revision": "b978fc881ddaa405a7d96479ced94d8d"
  },
  {
    "url": "task/2021531.html",
    "revision": "5345d7ebc633b2ed5dfc31facd0c8eb9"
  },
  {
    "url": "task/2021628.html",
    "revision": "cb4cffe52a50906e12bb5d61739bf96d"
  },
  {
    "url": "task/202164.html",
    "revision": "9e582dfbb223c58c99f746f87d5dd0c0"
  },
  {
    "url": "task/202169.html",
    "revision": "4b7372e2a1e0259393c02b339f86a90d"
  },
  {
    "url": "task/2021717.html",
    "revision": "55f9b74905164cc2538ddc3b63dcf3ea"
  },
  {
    "url": "task/2021721.html",
    "revision": "773a26b0d51ae06279c8a2071c4b4710"
  },
  {
    "url": "task/2021722.html",
    "revision": "f3702a6b4668c38be1d9c5ebbd860af4"
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
