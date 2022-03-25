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
    "revision": "9f1523312e6310259024e623d1fcfd40"
  },
  {
    "url": "admin.html",
    "revision": "52a635f57365cfe0caa1fa557bb942eb"
  },
  {
    "url": "assets/css/0.styles.fd441858.css",
    "revision": "1310e62e53e8cb86cc5e3f76241cb7f1"
  },
  {
    "url": "assets/css/video.css",
    "revision": "ed2bac56c7358a769e3b0425cea636fd"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "e5829aa35b6065969c746466af7c8ed5"
  },
  {
    "url": "assets/img/android-chrome-256x256.png",
    "revision": "a8b8bf3eb668b4d21eaa94333129070e"
  },
  {
    "url": "assets/img/apple-touch-icon-120x120-precomposed.png",
    "revision": "d71b19cfbb7dfc937228cf9258aaabb8"
  },
  {
    "url": "assets/img/apple-touch-icon-120x120.png",
    "revision": "a88eaf58b1d605e2be14d0abd3b829a2"
  },
  {
    "url": "assets/img/apple-touch-icon-152x152-precomposed.png",
    "revision": "3f3fd1ab553abab720c667261b92b945"
  },
  {
    "url": "assets/img/apple-touch-icon-152x152.png",
    "revision": "47b395a2875206123438e4201639a453"
  },
  {
    "url": "assets/img/apple-touch-icon-180x180-precomposed.png",
    "revision": "39ac324b496aebeedacb42915c049a7e"
  },
  {
    "url": "assets/img/apple-touch-icon-180x180.png",
    "revision": "e9822e8cc486be4ad5a240bf49a12721"
  },
  {
    "url": "assets/img/apple-touch-icon-60x60-precomposed.png",
    "revision": "e3e00c994d77512b541eefc4dd872874"
  },
  {
    "url": "assets/img/apple-touch-icon-60x60.png",
    "revision": "2b93c66c74e8cf9dcc60b1573d63a4d1"
  },
  {
    "url": "assets/img/apple-touch-icon-76x76-precomposed.png",
    "revision": "0cf28cf0b78de79db690468e07055629"
  },
  {
    "url": "assets/img/apple-touch-icon-76x76.png",
    "revision": "eebb078bde405f43773c29b7833bc75a"
  },
  {
    "url": "assets/img/apple-touch-icon-precomposed.png",
    "revision": "39ac324b496aebeedacb42915c049a7e"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "e9822e8cc486be4ad5a240bf49a12721"
  },
  {
    "url": "assets/img/favicon-16x16.png",
    "revision": "4a99ad13953e60fc22c52d705bd158d0"
  },
  {
    "url": "assets/img/favicon-32x32.png",
    "revision": "673b8b88d09335f94ac28351662cc407"
  },
  {
    "url": "assets/img/mstile-150x150.png",
    "revision": "8dd6c568db0014f593e647240e943548"
  },
  {
    "url": "assets/img/mstile-310x310.png",
    "revision": "838b87fbc366577cf27c2ac3cc0970c6"
  },
  {
    "url": "assets/img/mstile-70x70.png",
    "revision": "d1c8deccc25d08f75ac6fab1da5e7f0c"
  },
  {
    "url": "assets/img/safari-pinned-tab.svg",
    "revision": "afdc9a19d25ec4d5c110e2c7bf67dfa8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.68294634.js",
    "revision": "2bcd050f23d93479dcbbe44ebf1ee8da"
  },
  {
    "url": "assets/js/100.00f6b4e1.js",
    "revision": "de96780b968e75718db9a89bdeab8eb3"
  },
  {
    "url": "assets/js/101.546b6cd4.js",
    "revision": "7a7ef74510e00d742e2c6bfa14804248"
  },
  {
    "url": "assets/js/102.55ca7077.js",
    "revision": "f7689b22e615d27670f2d7d66053c288"
  },
  {
    "url": "assets/js/103.bd932978.js",
    "revision": "b02540d78b67876e82d9ccc7e138ce57"
  },
  {
    "url": "assets/js/104.0a2649fd.js",
    "revision": "1ac0e881419f603c094c903f77c6b36b"
  },
  {
    "url": "assets/js/11.bea036dd.js",
    "revision": "6854ff13094eb1a9c3d02e625053eab9"
  },
  {
    "url": "assets/js/12.993da05d.js",
    "revision": "8f84a5e41c5522a7ace9ec979866a799"
  },
  {
    "url": "assets/js/13.7879ac45.js",
    "revision": "c4a3765c18aa0f5cefb356887dfa6f6a"
  },
  {
    "url": "assets/js/14.25130a42.js",
    "revision": "3aab944e7e4b93d24ae8b5d4116b1b0c"
  },
  {
    "url": "assets/js/15.7f42f8e1.js",
    "revision": "4fc280b4cefa1c124badb07585907398"
  },
  {
    "url": "assets/js/16.31be3896.js",
    "revision": "a3cd4bfa218a7bab82eec9e04ec0beec"
  },
  {
    "url": "assets/js/17.ca55e837.js",
    "revision": "a0ad0ff48b8f22123fe9f9e8fa357eca"
  },
  {
    "url": "assets/js/18.9567031f.js",
    "revision": "0cf7749416cdec4a73cdef4823d12c82"
  },
  {
    "url": "assets/js/19.5fa5cf03.js",
    "revision": "1280bd63a6825fc8d4b308ff1cb95a49"
  },
  {
    "url": "assets/js/2.13b0f1ec.js",
    "revision": "d325007966b7000c32085b27c7630035"
  },
  {
    "url": "assets/js/20.a9348756.js",
    "revision": "34a778db54d14239f3b0fe0083f1fa2c"
  },
  {
    "url": "assets/js/21.e823b40f.js",
    "revision": "2edb864d563f2c1c7c6a353b8cc691e9"
  },
  {
    "url": "assets/js/22.21b18d3f.js",
    "revision": "1583617f8d377ebdc0b603bcf0f58f93"
  },
  {
    "url": "assets/js/23.bfb71abc.js",
    "revision": "ff3fb7bfb56cba7a2b9f72a510a5c7a8"
  },
  {
    "url": "assets/js/24.a7505efd.js",
    "revision": "e2086aea848123907dfe0b752b454788"
  },
  {
    "url": "assets/js/25.57d3b973.js",
    "revision": "421d841e650262e6184df673fa8af02a"
  },
  {
    "url": "assets/js/26.fc49ffc8.js",
    "revision": "d848ecfd2557a7e892635701dd7ea9c9"
  },
  {
    "url": "assets/js/27.eb05f41b.js",
    "revision": "a4a708c20faf90940c3c15bc9c4c16f2"
  },
  {
    "url": "assets/js/28.08da7ebf.js",
    "revision": "d5768d0f22cf990633296eb797fa4602"
  },
  {
    "url": "assets/js/29.4d61af18.js",
    "revision": "dde1f423e1a9254ebb28a9f2290ab721"
  },
  {
    "url": "assets/js/3.9a2ec5a7.js",
    "revision": "8bfecd5ae78b5a0f79a4de02de6039ec"
  },
  {
    "url": "assets/js/30.6629dba4.js",
    "revision": "43e255bbb77d3ad0a5afb844a763bce0"
  },
  {
    "url": "assets/js/31.46e18f16.js",
    "revision": "196d9651d8f187f70ee90e0ac65d3732"
  },
  {
    "url": "assets/js/32.1121664c.js",
    "revision": "3bbc36be461fade5dbb1e3528fa3ceeb"
  },
  {
    "url": "assets/js/33.675d0b94.js",
    "revision": "c7cbd879162e20f4f9a12aeae99153c6"
  },
  {
    "url": "assets/js/34.b96ec4f2.js",
    "revision": "7f2abbd8a639f73cd488b30e759f47f4"
  },
  {
    "url": "assets/js/35.8f2dca01.js",
    "revision": "dfc1eadd86bdf629e810c2c86f1eab99"
  },
  {
    "url": "assets/js/36.335b14da.js",
    "revision": "20feb87e3ea9599854a09cdd64e1a45d"
  },
  {
    "url": "assets/js/37.ad811147.js",
    "revision": "e368789fb16d4fb5f69f408049af6aee"
  },
  {
    "url": "assets/js/38.ed90ee99.js",
    "revision": "199319ad4863470a0fbdb8d79dc9f643"
  },
  {
    "url": "assets/js/39.121700ec.js",
    "revision": "0aef4a68e1c81b6a8f83e4527c8147e9"
  },
  {
    "url": "assets/js/4.ea027014.js",
    "revision": "84722b45626dc6122e296a933487ab53"
  },
  {
    "url": "assets/js/40.f8393784.js",
    "revision": "827b5886b2549fbb82f7b0fd3f1116a0"
  },
  {
    "url": "assets/js/41.4b86bcfe.js",
    "revision": "beaee38f3c469fdf6e90c8e6fc31347c"
  },
  {
    "url": "assets/js/42.63428771.js",
    "revision": "6db446f68d1f2407474efad84f389dd0"
  },
  {
    "url": "assets/js/43.554181df.js",
    "revision": "a7e1435f0e41ac1678da11ffdefa9c60"
  },
  {
    "url": "assets/js/44.50bad0e9.js",
    "revision": "71485d8dd3e2f8c7e374e29242985906"
  },
  {
    "url": "assets/js/45.77850456.js",
    "revision": "0afff09ce3845274f353309a9cc654b2"
  },
  {
    "url": "assets/js/46.351f7dc1.js",
    "revision": "55d6011a2f3da12b239303ba6aeea4a9"
  },
  {
    "url": "assets/js/47.a3c3c581.js",
    "revision": "34077572f1ad2bc753298c9ab0e29bb2"
  },
  {
    "url": "assets/js/48.615a84b2.js",
    "revision": "eb8969e29a42b75f312a1c41d4b0915c"
  },
  {
    "url": "assets/js/49.2bd68465.js",
    "revision": "7e7c8610d233fe9862ca2244ffe3e273"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.7c626047.js",
    "revision": "c7a1c1de1830e4492c9564c554437081"
  },
  {
    "url": "assets/js/51.db8d0f1a.js",
    "revision": "d59207ff7c012a8e6aad57655c99fffd"
  },
  {
    "url": "assets/js/52.d3d5b621.js",
    "revision": "2675771e3b1223ea5f3085e6fa95ed03"
  },
  {
    "url": "assets/js/53.cd6bf3ad.js",
    "revision": "163a11ed631789369e9427e8754cb419"
  },
  {
    "url": "assets/js/54.b25a7bff.js",
    "revision": "7e0a7841249a89c48a2ddba24b24be20"
  },
  {
    "url": "assets/js/55.51285df5.js",
    "revision": "0ed3e190118c8a66191c710f904b1bfb"
  },
  {
    "url": "assets/js/56.80e61e4c.js",
    "revision": "6fa1df147b5b5efb7153f4555e4da42f"
  },
  {
    "url": "assets/js/57.64ce51f4.js",
    "revision": "230c769bc2995c7e8ea26848537fb838"
  },
  {
    "url": "assets/js/58.5437374a.js",
    "revision": "d5478af0bcdc82874358da71354c6f24"
  },
  {
    "url": "assets/js/59.fdea5806.js",
    "revision": "aca3216a31b623ef375a2ecdb006b98e"
  },
  {
    "url": "assets/js/6.02a6eb70.js",
    "revision": "a864c034437f7f32d5c7cdc5b9b45d3a"
  },
  {
    "url": "assets/js/60.0572ae89.js",
    "revision": "d5e901d1e5b60cef46af8ebde558053b"
  },
  {
    "url": "assets/js/61.7fe5536b.js",
    "revision": "cb25f433b63bee18b60f9d0004c70138"
  },
  {
    "url": "assets/js/62.9ebb22b7.js",
    "revision": "03773766a42cce434fa5102ddf0e9091"
  },
  {
    "url": "assets/js/63.f462c674.js",
    "revision": "9a6190f3c749955fcd5fa69dc9b057d6"
  },
  {
    "url": "assets/js/64.5bd76d99.js",
    "revision": "1a72d9819aed92fd42affb2a6b162878"
  },
  {
    "url": "assets/js/65.5d440589.js",
    "revision": "141c4866df522cb0f87492678ee7ad35"
  },
  {
    "url": "assets/js/66.775847fd.js",
    "revision": "ef38b9807baa0c2428d405e17b91b295"
  },
  {
    "url": "assets/js/67.87b784e2.js",
    "revision": "e07d1f38e6f6832482372b49fbe97a3e"
  },
  {
    "url": "assets/js/68.85312d6c.js",
    "revision": "a657d2d295844d1959634b3c182b7787"
  },
  {
    "url": "assets/js/69.794728c3.js",
    "revision": "4f7a1bd57b858e44d5a44b8034903a6e"
  },
  {
    "url": "assets/js/7.0b5e9573.js",
    "revision": "f891b482d3206e8c5b600af55d0a3ed1"
  },
  {
    "url": "assets/js/70.83e1a67e.js",
    "revision": "d9e9d0658d48ee17f5b95f7a22ab62f6"
  },
  {
    "url": "assets/js/71.94ea0206.js",
    "revision": "c9f5ef4d88c1e818c11a8cbc8c422027"
  },
  {
    "url": "assets/js/72.b062677c.js",
    "revision": "6b2fe351a84da415d24f0b3fa9b91d41"
  },
  {
    "url": "assets/js/73.ce1408ca.js",
    "revision": "8736e78ad62cfeae6d337b2417bd10a0"
  },
  {
    "url": "assets/js/74.09719ff0.js",
    "revision": "2de7094609e9821cd7f2378fbc6ed64a"
  },
  {
    "url": "assets/js/75.9bbba634.js",
    "revision": "36ed299942bd6366a9c59ea77362c8dd"
  },
  {
    "url": "assets/js/76.3414343f.js",
    "revision": "c4710cb73c18956f34fe7c095b4de1b3"
  },
  {
    "url": "assets/js/77.741b912f.js",
    "revision": "8b3d69adfdbe41c667061b9d3d6d28cb"
  },
  {
    "url": "assets/js/78.18c8ea15.js",
    "revision": "627320e6957cc8309c25a1e6138ecf30"
  },
  {
    "url": "assets/js/79.d4b7a990.js",
    "revision": "58ab407e078f3ae7ed512543380a3b84"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.10f6d2a1.js",
    "revision": "b9d580fc8c98042143d7b70c1b9d179d"
  },
  {
    "url": "assets/js/81.0aa878b1.js",
    "revision": "447a1e62581368ef3601cd5f445eee8a"
  },
  {
    "url": "assets/js/82.b3aeb2f2.js",
    "revision": "a7714ed0e0e8bd64bf89b08597fcdd6d"
  },
  {
    "url": "assets/js/83.ba64adb3.js",
    "revision": "98b637667989e7d4e6c66eb087af4ad5"
  },
  {
    "url": "assets/js/84.c8c40cd5.js",
    "revision": "bc65302960bef8836b8c836fa7eea452"
  },
  {
    "url": "assets/js/85.91c58f6e.js",
    "revision": "1d62c7c12696c00ab420a2765b4d2e37"
  },
  {
    "url": "assets/js/86.d6e28f96.js",
    "revision": "e6d6e7b125ad72f2e38784ee920ec9cf"
  },
  {
    "url": "assets/js/87.4b76eb7a.js",
    "revision": "d14184713aba9ae394a69c0c5685e958"
  },
  {
    "url": "assets/js/88.aba5ff31.js",
    "revision": "ba3c7f793a81bbd86029265a46054427"
  },
  {
    "url": "assets/js/89.374a0742.js",
    "revision": "e6225b493544c3237d3b8f4457470757"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.c9841222.js",
    "revision": "35692d2d6b7a40db895f3f4d1f48cba3"
  },
  {
    "url": "assets/js/91.25bbde72.js",
    "revision": "365d1d78b634c110baf15309442d02ac"
  },
  {
    "url": "assets/js/92.93de5cab.js",
    "revision": "3d69a3c28c22ebbbad007ea0f2347434"
  },
  {
    "url": "assets/js/93.3d3980d3.js",
    "revision": "d73c441207d1586111b2831e9e7b9f9e"
  },
  {
    "url": "assets/js/94.f59aa8eb.js",
    "revision": "8a10e8f48405d96981beb6956836c54e"
  },
  {
    "url": "assets/js/95.39e61d41.js",
    "revision": "a510e7a9072ba82624518b0e3cac6516"
  },
  {
    "url": "assets/js/96.39308251.js",
    "revision": "a999f5cfeb4cae388745981a8e57b45f"
  },
  {
    "url": "assets/js/97.92fc19de.js",
    "revision": "44f6924133face43b7467af1479359f2"
  },
  {
    "url": "assets/js/98.bea50335.js",
    "revision": "5e17e98005fd8fd5f0aa889c1a92b638"
  },
  {
    "url": "assets/js/99.327c289d.js",
    "revision": "3c0d4b513ce3882dff9f67f637a4c315"
  },
  {
    "url": "assets/js/app.bb6f9fd6.js",
    "revision": "801298415d92045ef17fd3cd18b2e6f2"
  },
  {
    "url": "assets/js/streaming.js",
    "revision": "cfc015e432278d50bda0efead48168df"
  },
  {
    "url": "assets/js/video.js",
    "revision": "e5d0c2b560ccb06b1c8ba810adc87707"
  },
  {
    "url": "assets/prism.css",
    "revision": "c5ee0e8297d73ae3c2f4d9c4dd0483dd"
  },
  {
    "url": "assets/prism.js",
    "revision": "fb33cb3d7dd5b173a1db124871432967"
  },
  {
    "url": "index.html",
    "revision": "4a12424c8d06a0c9524d4e6a022f5f88"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "81e32a188e6262976ba4a0ecbbb9b0cd"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "027829688cb7be47ba0d163953fe2698"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "6435e576b9edacfc093d99f6e82e541e"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "f925646b567d050ddbc8d4ffe9a35a5b"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "b3d2dd2c57c3d90c5dbb6d63ebd260a1"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "c96ca512b12af693252a9bdda8304a4d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "55a00684bcb169df1515972d23815e1a"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "5d02a6af81a1b69b63790ed6c69a4ea3"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "c25444981deb7d6f551f95f3404f528d"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "8c9d48832749560a0f210ffe710bf5dc"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "5ac37a61e2d47babe04d7679eae41d06"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "d838a151e6edd4e310bfc9dcabf39a4f"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "4e70d523d6091a12c56517fe77662c84"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "73f0042987009f06af24931f16448fb3"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "5a5eea8bab55fc190179f4d8d287f357"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "3ad05aacacaaa14801c1bff93b20d051"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "c2d4671f00ba270884f2d267e191dca4"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "4a1c1e1d7ead3f22f38664cad831f591"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "a9b6ecd4ddab81712fdb34806d51fe4f"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "6c99063c031207b8ac519216499ef7af"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "9e5c47458dbf715edeb830747f3ffcfe"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "95a51e3d313e14f899e79e20569f1fe8"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "c5ae3d5f7182929ebcfc49305a725e8a"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "13d3bbfdd36997f14ab69edc7fd0a90b"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "6353d5595ab816b9c95a915ec3d7e901"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "b9590acd28e0a33b88754e83deb32294"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "1f73d57fea1af769fe0023c7d3022446"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "789094f71c03b8b9c05b98f20b377baa"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "3593eb2568a5673ce1eb10498f2061f8"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "b4d98bf00e1694daf79ec84b8a61b19a"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "7e7f7c1861ae317555b7759dc70f62f5"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "0619ad9ddf44b854904b7851a4572c2a"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "33654e184a32cf3a9be78c5094f75ca8"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "28b1dddc8eb001eb240269d49df59fce"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "2abe344f5e7b801f93c0256b9bffe340"
  },
  {
    "url": "list/20220324015620.html",
    "revision": "0976286331898678fd176d301bdbf573"
  },
  {
    "url": "post/handbook.html",
    "revision": "2323c37ef6d0e21cb40970b309544db7"
  },
  {
    "url": "post/plan.html",
    "revision": "23fd64d3b40c70ea9416c6688d0d4792"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a3ad3833692a7d7a38bf4a8e8af01607"
  },
  {
    "url": "study/english/words.html",
    "revision": "271823fcc716a3abd3c21c61ae9156e1"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "5ed96c25193940d2fb20568c97c0cc46"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3f8b357e44b9793fd22c8d3cb90b75c1"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4ae9f02c32b7f0515542ec15afac24ad"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a46bcc514074b8d732bda164ae74cfe1"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "305810dd84adf7e2d972746bec7e9c48"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0da8379f788f5ad5214271ae7f50bb44"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7346db7aa00d2f7a6b54b69e44d0a2d3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f74ee6bcbe4d64779c4c571008c48fb1"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c5108f2c1366f5605eb6c8bfab5676b3"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "c466ff97d2821e2ca70705c8d0343671"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c82170a7cfb8050354019fd5fa73c1c0"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "83a57c5e0f3f3901918d2a0fe93cf4b7"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a7280ce3a0f27ba5bd6cb6ed141224a5"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b1015669068b2c1b6f74984f6e62f63b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "eb8fb520683590f288be3a67aaf38802"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "81af0d2d3eeda96d5156ab56c615d0fd"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3c78d174b6cda0a92a0633b936c2f94e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "86a38d19fcda849436c1b7ddfd206a27"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "59e9904e1cc7f18cc5bd54565b88f88f"
  },
  {
    "url": "task/2021511.html",
    "revision": "6a788e567307309cbb072f5f6155e49f"
  },
  {
    "url": "task/2021514.html",
    "revision": "48e681e95a3222bfc81d75b0e96b4151"
  },
  {
    "url": "task/2021515.html",
    "revision": "1c7df3a4f6be5e0177ebd038ce0962de"
  },
  {
    "url": "task/2021518.html",
    "revision": "820c3b0fb783df8d28c3c2b3722fad4b"
  },
  {
    "url": "task/2021519.html",
    "revision": "728044e5da6a400adff8bdfb3839fc84"
  },
  {
    "url": "task/2021520.html",
    "revision": "3e6f2b1a78047778758310d47cdbb210"
  },
  {
    "url": "task/2021521.html",
    "revision": "6e4f7740690368b489a2ffa6d78b1f5e"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c69b0692efba2509c18d3a64105b8030"
  },
  {
    "url": "task/2021524.html",
    "revision": "6cf07b34c901d7c45bf2ef7ef9b48390"
  },
  {
    "url": "task/2021531.html",
    "revision": "22ae4ddfd554524712b0087859ea67b2"
  },
  {
    "url": "task/2021628.html",
    "revision": "47c79970170062818c8ebc73755875f9"
  },
  {
    "url": "task/202164.html",
    "revision": "f3d8cfb5be3241de83156b49da0dab79"
  },
  {
    "url": "task/202169.html",
    "revision": "1c33039b083256cb6e222f5e752725f7"
  },
  {
    "url": "task/2021717.html",
    "revision": "ec604e9149e765b6a7fc9efe1061618a"
  },
  {
    "url": "task/2021721.html",
    "revision": "abc0ebb32e33066882b6037ee6c5bcbe"
  },
  {
    "url": "task/2021722.html",
    "revision": "30042ff6a484fa7227c86f669f2cdcfd"
  },
  {
    "url": "task/2021724.html",
    "revision": "8810c18bc74797b7268727d852853ba0"
  },
  {
    "url": "task/2021725.html",
    "revision": "391fa1653bd7c95d663a5ac2d808b9c9"
  },
  {
    "url": "task/202181.html",
    "revision": "2865adbcb5ed52e462470f37ccf73749"
  },
  {
    "url": "task/2021811.html",
    "revision": "0d7df37df67cbb40c74b9a36cadadbdb"
  },
  {
    "url": "task/2021812.html",
    "revision": "d39aed8630111f7f3b10bded6bdc2678"
  },
  {
    "url": "task/202183.html",
    "revision": "a1668eaf9cae088c51c3ff8d707f6a39"
  },
  {
    "url": "task/202187.html",
    "revision": "6db129d968f9aa2d278e466b26fe9b77"
  },
  {
    "url": "task/2022218.html",
    "revision": "d1ea02f622cde0028fbf46cf9520ea8e"
  },
  {
    "url": "task/2022219.html",
    "revision": "24f3781dc01b35ad062bef146606d7ea"
  },
  {
    "url": "task/2022222.html",
    "revision": "744e3559f0647011290d4905281a2bda"
  },
  {
    "url": "task/2022224.html",
    "revision": "9fed8d203a3ee309241f1f1559d4d02a"
  },
  {
    "url": "task/2022225.html",
    "revision": "6946609f877bb204c6b470821b8e6047"
  },
  {
    "url": "task/2022315.html",
    "revision": "4373a04e4ca97a067bbfaf9294334200"
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
