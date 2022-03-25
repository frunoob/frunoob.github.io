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
    "revision": "53f5edee55f1873a80662f0d74eecb34"
  },
  {
    "url": "admin.html",
    "revision": "f9c16fcf2e46838ce889e2e18fdb8f26"
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
    "url": "assets/js/12.84eee497.js",
    "revision": "9a1f15020f9d85eea78e78d69c1a4f2e"
  },
  {
    "url": "assets/js/13.7879ac45.js",
    "revision": "c4a3765c18aa0f5cefb356887dfa6f6a"
  },
  {
    "url": "assets/js/14.fb9cc0ef.js",
    "revision": "e1de31d90ad983f39975808bc3f0796f"
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
    "url": "assets/js/40.cd4e76b8.js",
    "revision": "cf01290fe6a17ccb7ea3fe2c12a830d4"
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
    "url": "assets/js/app.f1b36c17.js",
    "revision": "5f1ee3d7053a84b6947c08a9579fca16"
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
    "revision": "e463016ff9443221f79d0bfe9dd4ba41"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "ca35b833b1efeac1b7a84ef2ab698166"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "6a7ab593a2f97b15672f9605dc4f7097"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "4c3476599db4633e0d0a23c1abdcb45f"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "7968e943df58c33162f791dd38a2a9e1"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "4189010e45c29bafb9efd58b2abcbd12"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "b1e68245645712b174a817f3ce8ab8c7"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "e2f828544a3e7a57028a1bcb83e19f40"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "10e712447d3d6a30eb4d4db4d54a8f83"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "6cf14f015164710a97e2c9be1d1a84d8"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "ebfad0d7b616be22b140e9aac6d037d6"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "770042cbcda761e0ae395cc8cf8b7b73"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "d342253c0549ed89b7b7e578a6a15df8"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "8fddbd7d153c761fe96d3e4d7b237f37"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "5b68aa1a600c8bbfa4884f479f48d39e"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "aff4d21b61dd0f358ed73768216b1873"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "f276da8de638304fe5a40b52ab9931eb"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "894c33a85a80a1ce47cfac12a2391df4"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "212aba2173e0f81662d0a5461d76b3db"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "d5f482f765503a8a50006eef21c13fb9"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "5bbcb1e67ddcdf3b006cdd94613fb97f"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "718db7960d6161eb74a58fc64a54892a"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "0fe2e7b86d685da1cc6103d9e6f6116c"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "62d75d89aa23c58618f52d34486a6b0a"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "586b14eaa0050c2d0d6022a8437e3396"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "1a88e5dea657ad33d77bf45b58dc93dc"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "82bdce697c291d8973870d115f7f3c24"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "10b975cedd10e35635b4228c463247bb"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "dc92c81d7d15876943e4df6555f71f65"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "b5b3daea80f9fa522b4489205438d568"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "82ef4871d538acb5c488a29df1441247"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "312684c98377571e06f8a49613fc6775"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "363483fa77fe3eef292545ab0c52fff6"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "8c91484fae5d9d68887499b31deaf592"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "f31b3cadccb28f077e7ce185618f4d67"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "f19d8b4ef67b982fd161b8a57675b16e"
  },
  {
    "url": "list/20220324015620.html",
    "revision": "64dce3b0f4a6e16ffd12ea06e4f66086"
  },
  {
    "url": "post/handbook.html",
    "revision": "d6c010c72ceed03489fbc1d0f25cc7a2"
  },
  {
    "url": "post/plan.html",
    "revision": "d3d2452066431980e41c04eedd808979"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "b37da1b1dfe8405f22e4e1ae91fae9a6"
  },
  {
    "url": "study/english/words.html",
    "revision": "34a716b6f8eeac87fbda7c7b9f4dbe0a"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d661c1b3757fb5488b56108d90827080"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "36b2a81863e0fdf4166eee7636f04010"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f5f147450720dd0d7d7b9b50821d40e3"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c319040f787d0d55c9e6d5fad44e724f"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "0b44b4fe25e5977421bec660ef051147"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "12d83f3ed9adf7a1e913ca54f900876a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "5823247efd096c9e483c84f191249efc"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "d1e0ab6ef836aee2b9b83b16db334e31"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "20dfca3bdbb624de2f5fffdf431fdcba"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a70ad7795d2178e8c348b27b1ed3c2d8"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "f1e0a546bf67d03e00ae3e52dd10a440"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ba82200bae6415721477e8fd3e0b4012"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ce442c0f16f5bfc1bff2ab38cbc83e61"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "2983af6f0b68ebcb205c2179f7401872"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b60e10d3582f4bffcaa9856f6f87560e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "8c283b42e7324f50d1af02786adc716b"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f628b727d5942ab61a2b37e0065b637f"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8d621057e4e2d11c54470916442e0cf6"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ea736418a7b3e0133b55ccaf431d6ed3"
  },
  {
    "url": "task/2021511.html",
    "revision": "636ecb42b296432d786001f2e3b5dfb1"
  },
  {
    "url": "task/2021514.html",
    "revision": "4b756afffcafc858336b18c34d260ec9"
  },
  {
    "url": "task/2021515.html",
    "revision": "afc813be789e65471f99f2d8c4c7c75e"
  },
  {
    "url": "task/2021518.html",
    "revision": "de84dd858207ef8164d09af1c439362c"
  },
  {
    "url": "task/2021519.html",
    "revision": "86ec74e0789ee8e9d478b23684b8c9ae"
  },
  {
    "url": "task/2021520.html",
    "revision": "cb26dc7f409d89e93ff322fec2dcdb47"
  },
  {
    "url": "task/2021521.html",
    "revision": "395b07597a9228fda1995d8d0a388ed9"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "dbcf6d5459ee477867261e00eebae166"
  },
  {
    "url": "task/2021524.html",
    "revision": "3b7f81460c93247a28b973e509fcb83b"
  },
  {
    "url": "task/2021531.html",
    "revision": "a4783d14eb22adb3c26633d48490dd58"
  },
  {
    "url": "task/2021628.html",
    "revision": "159f1c993f082d96668551f8cd13f409"
  },
  {
    "url": "task/202164.html",
    "revision": "9198236df059471c20061586b6bfdd32"
  },
  {
    "url": "task/202169.html",
    "revision": "8b9d80e15257aa70be314fac51a4e4f4"
  },
  {
    "url": "task/2021717.html",
    "revision": "6daa278808cea6bd584c4a207ccc8495"
  },
  {
    "url": "task/2021721.html",
    "revision": "f42d3938fd666e0cc8366f9092354c7a"
  },
  {
    "url": "task/2021722.html",
    "revision": "b3cb285e6e60500aae696d430087f7d1"
  },
  {
    "url": "task/2021724.html",
    "revision": "0d542c7d4897a9a1eadb393c20315c62"
  },
  {
    "url": "task/2021725.html",
    "revision": "c8462836f94d7cbd7465545d020f74be"
  },
  {
    "url": "task/202181.html",
    "revision": "b9b4e7216ea2c1009996894d96d7e0b6"
  },
  {
    "url": "task/2021811.html",
    "revision": "6b9394d80e8adf05a5c4171a4bfc495a"
  },
  {
    "url": "task/2021812.html",
    "revision": "3162e05ace7e3a1f14acdb1ed5dd913e"
  },
  {
    "url": "task/202183.html",
    "revision": "24f4d93511897488ea7a256c1d3923cd"
  },
  {
    "url": "task/202187.html",
    "revision": "be650850f9db64b3f0ac9298d41f4bbb"
  },
  {
    "url": "task/2022218.html",
    "revision": "7cbf893e6681095a2cd2144e8067926c"
  },
  {
    "url": "task/2022219.html",
    "revision": "7dcc6a1cf88405e9980728cb2b2e19f0"
  },
  {
    "url": "task/2022222.html",
    "revision": "caa655d942163bc53f56e79ae69573c3"
  },
  {
    "url": "task/2022224.html",
    "revision": "648a21ee55d5d4f5002d7049762d9a9f"
  },
  {
    "url": "task/2022225.html",
    "revision": "97cd4b34388a6344245c775334312c68"
  },
  {
    "url": "task/2022315.html",
    "revision": "4defadd00ca2de328572b918c90adb31"
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
