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
    "revision": "a5ca4646f1bd1202ee762d9445b4d52c"
  },
  {
    "url": "admin.html",
    "revision": "f913538d87da6560221047b928003201"
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
    "url": "assets/js/15.bb5a3135.js",
    "revision": "cbf7bae6a306ed9979ec70260350eb60"
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
    "url": "assets/js/53.c9eff6df.js",
    "revision": "93e322bdf1cc37d0a35cab578dc2e426"
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
    "url": "assets/js/app.2b42a37e.js",
    "revision": "e32b806a991a343c2a4747bdec3144a5"
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
    "revision": "8adf056dc8a1cd7c66668c869dd936ea"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "2f84fc7aa042e9af8b420950d3af8142"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "df7bcb508f1670320897eb2d78cbd0da"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "517602fb039a50d59c4073caab4db710"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "8ba24e26ba4e483f5ec85afa3d5a9e07"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "b120f8bc66e76cb0b76ddd924bfdfc58"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "597b4e1c646cde94a3ec8df28de29c0d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "6a0f4dc77d8bc12d5e8af7558f5c7afc"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "bd5302769c2376eff4052340a0b8d32f"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "535d26b4935139970286d977886f1d1e"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "601d0c3bfba6bd1c2d4b25c1593e3912"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "1ef24c4aa21fe07194a5a4859b37ebeb"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "98184fd7ee813b0765160248cca9584e"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "3796c10446971c4fe0271a8e0b41412d"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "d56908f298e38b0e9900ff91becdbdac"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "4c4083b1bcb707c360eb52121b6e7d82"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "af8f89a19dc487a2bf0b91f7659a2267"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "0bf0b41ce68a7150d42bee9be7487a55"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "cb0863df951c0ce17c29bc7542eb0dcb"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "58fac67bd0599717ab64e8e9e7f2f2db"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "2b43b9a64a46a07f1392f61b8eab8789"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "d8dccf69aab5be4b5dfe8839bb4e8ca4"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "bb475b1cccb6f0509302486b030d9e08"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "ea8e4a378ff562ebb3d57982db19e4ef"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "90b200d52d3e4aaddcf5a37075d3fe21"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "ccaf9703d3ebe700deef285e1ad2fcba"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "91fad6e2235292a42fcd56ea02f5c5fd"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "fecab3a4f16985f90011077b35db89b8"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "72d06cd91e64c99b339ede0ae348e913"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "f9c16e548510f90f8ee6c864a65c34e9"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "def3cc2121a60846e2390bbfd0e89aee"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "009af5ea0a464983284dbd7c05c2623a"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "f36451be977e64cd6f7eb3547cc34ac2"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "23077c42651a95f4684b5abd7cea1e0a"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "ba5a7875dae12561266efc3744e39791"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "6b5be9b9fd848a0acc652b9c625ef057"
  },
  {
    "url": "list/20220324015620.html",
    "revision": "afbea4e86815c61ad97747ce24a1898b"
  },
  {
    "url": "post/handbook.html",
    "revision": "ffc04942ea423197b7d22ea87d1fa078"
  },
  {
    "url": "post/plan.html",
    "revision": "ca8f246ba77e8aecaacf5148a72cfa76"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "177f7347b9a7a0bfe4cb3f4b2a86059f"
  },
  {
    "url": "study/english/words.html",
    "revision": "58cbad605ccdbe79047d29e6b737420c"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "5fbecb8df977d2cebbeebdd25d94cabe"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "274fc7d589884664dc9b4a81e69db89e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f5943a69053313b75459d257dd34211e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "43b3410d9a310e63b48c6d3096e1f9b9"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "d739b31f9925fa11a2a7e9abd417034c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "b7d110f06bfff2e92fb218af5eeac1e8"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0daebc44865368333cc437275ad395a3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "87e7a33af033869deab7ae588c3ad43d"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "63527092a95eac69ad7c4b51c6288182"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "e206cf254b18792882acf0e13234e199"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "428379b0a1c64e6958bd99d9d266adff"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4a5ad5b9878c131bc695e0fad70a700a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e81843877ea88a8d3b4c4c93ae08cecb"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d97a5c3a03fe14de89613979b0d20557"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "8ba6ab401cf87919252549f3824688c9"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "3cdec889bb9d629645eb019706cad2a2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f939ff62da9c754ffc2cb16848f48219"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "f1c34f266d67c39b8688c5f621f45529"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "8901b26465dd8a1c73fd525f36c6fefc"
  },
  {
    "url": "task/2021511.html",
    "revision": "c7f23f49bf89ae63f5fe4519078607ad"
  },
  {
    "url": "task/2021514.html",
    "revision": "5d8889ec34a9fb558d700771ef83525b"
  },
  {
    "url": "task/2021515.html",
    "revision": "f1f7866260adf3aa7b68a8451ffee798"
  },
  {
    "url": "task/2021518.html",
    "revision": "7ee6416f0ba9a82b1dcd0a6bd1aa05e3"
  },
  {
    "url": "task/2021519.html",
    "revision": "d9102d497b250aa736578987f08b9eea"
  },
  {
    "url": "task/2021520.html",
    "revision": "9985b870896597ab072be7d737530ac7"
  },
  {
    "url": "task/2021521.html",
    "revision": "a145dc83e79b4dca3467683df91eb200"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e774196c7a97dd567ab8487ab9caf91c"
  },
  {
    "url": "task/2021524.html",
    "revision": "362bc73c2736af8a20885d4d5f2f0bda"
  },
  {
    "url": "task/2021531.html",
    "revision": "e61d2b0670a5a59c9963a73c32798b52"
  },
  {
    "url": "task/2021628.html",
    "revision": "985edfa95ab1d5c1bedf469cb91bb078"
  },
  {
    "url": "task/202164.html",
    "revision": "744a646f8334ad361620c9c1817ee151"
  },
  {
    "url": "task/202169.html",
    "revision": "d9e31ca3935ed459b73657fcaed283d1"
  },
  {
    "url": "task/2021717.html",
    "revision": "814d1b36f455e0e2b2654911a7dd3115"
  },
  {
    "url": "task/2021721.html",
    "revision": "dcf0d870854c0217abf437187096c17f"
  },
  {
    "url": "task/2021722.html",
    "revision": "cc1256a1a9925d1c6cbd5afec5622f04"
  },
  {
    "url": "task/2021724.html",
    "revision": "447b57df2266d492a5a54361ab460303"
  },
  {
    "url": "task/2021725.html",
    "revision": "81c026d0c55c71e70b6cbb4c44373919"
  },
  {
    "url": "task/202181.html",
    "revision": "c90525f2826e4def1e5e138b9ed7735d"
  },
  {
    "url": "task/2021811.html",
    "revision": "871e3c9da0cd63c647bf576c4288ba4a"
  },
  {
    "url": "task/2021812.html",
    "revision": "3ddf3e6183a957bdca16becf681a88bb"
  },
  {
    "url": "task/202183.html",
    "revision": "8b82404368af39dce0c4bc0475d01edd"
  },
  {
    "url": "task/202187.html",
    "revision": "36ca3c6c53236aff336fb26fdc8216ea"
  },
  {
    "url": "task/2022218.html",
    "revision": "8da04dd7d05bb73267437f65dfb71d70"
  },
  {
    "url": "task/2022219.html",
    "revision": "8b8f87ed34b0535c02c14cdb1c5d437d"
  },
  {
    "url": "task/2022222.html",
    "revision": "1480fb873bb9d2372ec6a94c1d54e277"
  },
  {
    "url": "task/2022224.html",
    "revision": "36cbd98e6779142570e4935f54c6bd86"
  },
  {
    "url": "task/2022225.html",
    "revision": "4eeb59cf0b5d5afa965a9f5106de2823"
  },
  {
    "url": "task/2022315.html",
    "revision": "70987a783fc64f37a201508d692e5090"
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
