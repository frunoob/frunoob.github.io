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
    "revision": "3ab9eec82d4b9c73a2e7e1ef790d27db"
  },
  {
    "url": "assets/css/0.styles.da4ef3bb.css",
    "revision": "b9487ac8d050f0d7fc1363cb748447f8"
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
    "url": "assets/js/6.f2d66893.js",
    "revision": "a24e0938c02799e8c5570c51173553fa"
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
    "url": "assets/js/app.e1a90aae.js",
    "revision": "1935d079cfea6f43259530ff35a136c8"
  },
  {
    "url": "index.html",
    "revision": "61cb1473633308dc998126abc4be114a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "3fed57580c237a593acdc5312ce882dd"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "12c065ab16ca1c41f7a7c2cdad0f369b"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a9a15bb1e27e564957f4b4d3f0805b17"
  },
  {
    "url": "memo/memo.html",
    "revision": "be1184c0499349ca484c38ab7774e66f"
  },
  {
    "url": "post/test.html",
    "revision": "f16cdfce1996cfad7dff1929429fe37a"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "0d8216d787727f19080e22f693f25902"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "0e9a7a3707c3921770f7602f374ff8ef"
  },
  {
    "url": "study/english/words.html",
    "revision": "e61bd3319dfdcb86688070b75377b2cf"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d91d0c55dc7ca9a0435d1e787713aa45"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "fe33d578293724d19c22474645ab7f87"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "fed6801b9329c45b11298bcc8b1d3dc8"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "13b9914d627e08147da3c2e470267d3f"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e6131257895354963605a53bfb0aa4a2"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d8b1929bc7f6a8c9419868dc699d6b38"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2feb7793930164d2b9fb481ed0c9e0f5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cb13de104614ed8e0346147da68f4bbb"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ae796d2663e732d8548e93864f07123a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "41e29224dd6e8af3acf9371244354c55"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "1b03f59f25b97b089128e37ac1566914"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "85ce576068c20ba2904c5621400602ba"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ef54e7b284556eb3184abcc7c31e7033"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "198b16b6089f79aff60d03fc445f23bb"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d9c30f0170501f170ccd12142a2104fc"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2be5f7a6c1fe3217cca4bd532a61eb61"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3d348ad61108ef604ead64779ec27da6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e5f313fba3b5603b139b417a5904d515"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "396195095b8deb8aeb85f7a4febd88cb"
  },
  {
    "url": "task/2021511.html",
    "revision": "f958f2c23b5dc5fdcedae1a500e79b4c"
  },
  {
    "url": "task/2021514.html",
    "revision": "d235fe37a74ede521e970b0c7711e606"
  },
  {
    "url": "task/2021515.html",
    "revision": "4572e5ce44210f278dc68092eac18905"
  },
  {
    "url": "task/2021518.html",
    "revision": "20e33d156874c2cd6c87b44e7439ccad"
  },
  {
    "url": "task/2021519.html",
    "revision": "4865539f1a91b463e81875002463da86"
  },
  {
    "url": "task/2021520.html",
    "revision": "591f2e757ad349821b917fbb375385c8"
  },
  {
    "url": "task/2021521.html",
    "revision": "2a59505aae0ea6d12fdfc0bbf8029e31"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "ea8963ab0c60f8dfb5c63134c9626f5b"
  },
  {
    "url": "task/2021524.html",
    "revision": "9a3cb2c8f39e71ca7c920b6e14015454"
  },
  {
    "url": "task/2021531.html",
    "revision": "459f921518dfb387b6c14393808b5a8c"
  },
  {
    "url": "task/2021628.html",
    "revision": "6cd0b643592c0303dbdcc273fafa4be7"
  },
  {
    "url": "task/202164.html",
    "revision": "f3f5b3139fa2311601a768f986dbf874"
  },
  {
    "url": "task/202169.html",
    "revision": "c6b7b0dda10892fc445f4c379addcd29"
  },
  {
    "url": "task/2021717.html",
    "revision": "b857bbb5ec6c4acda658988f122f9d51"
  },
  {
    "url": "task/2021721.html",
    "revision": "d7f009804f90de9feaeab088433274aa"
  },
  {
    "url": "task/2021722.html",
    "revision": "3172a705622167a6166f01d665e93f36"
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
