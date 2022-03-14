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
    "revision": "bf4755f7d860c49be8cb17e952fa6ce2"
  },
  {
    "url": "assets/css/0.styles.a54d33b6.css",
    "revision": "370977dc51edf0cdf3e005bd44b52140"
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
    "url": "assets/js/10.5f3a76f7.js",
    "revision": "38d907241bed74cc2086d29268190a36"
  },
  {
    "url": "assets/js/100.5d3c3ffb.js",
    "revision": "c025bead1251e69504c092184ba7b3b9"
  },
  {
    "url": "assets/js/11.bea036dd.js",
    "revision": "6854ff13094eb1a9c3d02e625053eab9"
  },
  {
    "url": "assets/js/12.a2ce7019.js",
    "revision": "4c1bdfb4cf8ecbabd75df00068372f12"
  },
  {
    "url": "assets/js/13.7879ac45.js",
    "revision": "c4a3765c18aa0f5cefb356887dfa6f6a"
  },
  {
    "url": "assets/js/14.25860ca4.js",
    "revision": "bbd6febf733d087904bca1a0154ce69c"
  },
  {
    "url": "assets/js/15.3b3608ae.js",
    "revision": "f9e10e0fca741eaa1714675064f93dba"
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
    "url": "assets/js/31.719a532c.js",
    "revision": "a2f5c43ab182ac812ddc8c77111b2ace"
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
    "url": "assets/js/40.b3da8af0.js",
    "revision": "cc328356c917e54b4ecd90b56f0d64e2"
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
    "url": "assets/js/44.957fa1fe.js",
    "revision": "23d6f2f67c0c83a7960dd975d54f2409"
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
    "url": "assets/js/49.e5a08a0d.js",
    "revision": "f780439ec40e61c430d649c393cdc69b"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.b7283d81.js",
    "revision": "6602f940a8c45b0a35f83d3750eead11"
  },
  {
    "url": "assets/js/51.470f3574.js",
    "revision": "44fcc14796041b60352a071f9cf26902"
  },
  {
    "url": "assets/js/52.587af571.js",
    "revision": "cf97f031a88a971b075b25c5aa2f28dd"
  },
  {
    "url": "assets/js/53.5c55522c.js",
    "revision": "c08782487b8af7171834be8e1bf3fee2"
  },
  {
    "url": "assets/js/54.67267b46.js",
    "revision": "33289a4aa36fb3fae135ca8d0fe20534"
  },
  {
    "url": "assets/js/55.19b91feb.js",
    "revision": "9b34797562b45dfa0860f4c91521991a"
  },
  {
    "url": "assets/js/56.ee4d8f2b.js",
    "revision": "cf6f59ae083524b1395aa546ae4bc1cb"
  },
  {
    "url": "assets/js/57.db291d0d.js",
    "revision": "a6cc76136337d481f21ae83fdff53718"
  },
  {
    "url": "assets/js/58.9b3624cc.js",
    "revision": "292105a770bd31ecadc4aa2a2b308ed4"
  },
  {
    "url": "assets/js/59.d536f1ed.js",
    "revision": "13e80c5ef81c42faa1ea07339b233dc0"
  },
  {
    "url": "assets/js/6.5e1bc5dd.js",
    "revision": "d1ad75ff6013ba08ef320c0cdb22c5c2"
  },
  {
    "url": "assets/js/60.8d477caf.js",
    "revision": "ab707ae486f2fdbb8e0b49b4cd0c094a"
  },
  {
    "url": "assets/js/61.29177ed8.js",
    "revision": "0ebb8d9304714c93558e4718a4f6da8c"
  },
  {
    "url": "assets/js/62.6e3d34ec.js",
    "revision": "5b50daa9dd2eca705588b9e6983788cc"
  },
  {
    "url": "assets/js/63.27f8d04e.js",
    "revision": "050d04971d39a05f47d2e8793ddf9ead"
  },
  {
    "url": "assets/js/64.ec7b06a6.js",
    "revision": "aa53faf7be6ea1fbd0afbb8736bb8e0a"
  },
  {
    "url": "assets/js/65.9434a40a.js",
    "revision": "2b425a65e8aa06443014fe2af53217dd"
  },
  {
    "url": "assets/js/66.13de2980.js",
    "revision": "b3462e0bd16fed3457030f2d66dd9a15"
  },
  {
    "url": "assets/js/67.1885b2d0.js",
    "revision": "8650276ad4f0699695d615558229522b"
  },
  {
    "url": "assets/js/68.8f1253fa.js",
    "revision": "74dc5e0cb8aa58dcdd20a813430c3cb1"
  },
  {
    "url": "assets/js/69.7871f976.js",
    "revision": "4e0183238020c9e3a453cbd44e56a84f"
  },
  {
    "url": "assets/js/7.41cc1af7.js",
    "revision": "7c16de65551e2d71d4719e7a24cb9ece"
  },
  {
    "url": "assets/js/70.48a338b8.js",
    "revision": "a36c1674c3c633a9c19d70d85eadf45b"
  },
  {
    "url": "assets/js/71.c9d9f61a.js",
    "revision": "fda935e4ebac45b4b23a55ee9af1a39c"
  },
  {
    "url": "assets/js/72.0dff7d3a.js",
    "revision": "23c2368f0f12efd2d0e0446481a98f2c"
  },
  {
    "url": "assets/js/73.59afefc0.js",
    "revision": "8ffe1afdbb307adaf78d81e605ac6369"
  },
  {
    "url": "assets/js/74.daedabe3.js",
    "revision": "67f27e11ebcc7926daa0b0fdda6ab390"
  },
  {
    "url": "assets/js/75.588f7231.js",
    "revision": "5b08a5bf5a00b75f3477e5848acf7410"
  },
  {
    "url": "assets/js/76.5f009838.js",
    "revision": "6b162618ba72ceaa15a84ad28e9ca379"
  },
  {
    "url": "assets/js/77.8c846fbb.js",
    "revision": "f73bee747a441d741d3976ac2d9b67c1"
  },
  {
    "url": "assets/js/78.f199fefd.js",
    "revision": "7c6e3a8c3dea52431c11dab62c3dd0cb"
  },
  {
    "url": "assets/js/79.4f3e8fa0.js",
    "revision": "b5285bb35eb8b0f9464c32a5b15b6a0e"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.8cd89e18.js",
    "revision": "4b043d3b604db1b8b56d8db52bad28a0"
  },
  {
    "url": "assets/js/81.a6bb18e7.js",
    "revision": "e44007545ccbb88579526da754d59c3f"
  },
  {
    "url": "assets/js/82.e67f1595.js",
    "revision": "bed95f7d53ccbe531f8c8cafa388c2f9"
  },
  {
    "url": "assets/js/83.9200920f.js",
    "revision": "36aef4350688efe0afac518dcebd59b7"
  },
  {
    "url": "assets/js/84.0143c600.js",
    "revision": "ef6f73f94bea409cd6b0b23db2a5ba66"
  },
  {
    "url": "assets/js/85.60447f1d.js",
    "revision": "1e24254957a84d225f7f4b763f396a96"
  },
  {
    "url": "assets/js/86.bbc70815.js",
    "revision": "b8443309177eb36b15893b85f4c25835"
  },
  {
    "url": "assets/js/87.a55308fa.js",
    "revision": "6999c01291452842510149be83697bbe"
  },
  {
    "url": "assets/js/88.8483ee68.js",
    "revision": "6c33b7afabca48a4c90695cc284b531c"
  },
  {
    "url": "assets/js/89.4dc86f99.js",
    "revision": "d9c055a5df4f8b9f443eabeb53c68cc5"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.fd40e98e.js",
    "revision": "38c2349367d82ce0ca155cff766932fb"
  },
  {
    "url": "assets/js/91.02c888f9.js",
    "revision": "0b562fcb0feb827a60efd5eebf1c249d"
  },
  {
    "url": "assets/js/92.228d6001.js",
    "revision": "6fd839662339ce6b9bc75e6608c6a7f5"
  },
  {
    "url": "assets/js/93.437e9483.js",
    "revision": "2a4bfc91f706682af86562b49bbe020a"
  },
  {
    "url": "assets/js/94.f9a50b61.js",
    "revision": "0801d418454cdcde74bb9b353d30bc76"
  },
  {
    "url": "assets/js/95.c7ad14cc.js",
    "revision": "a138252c8c88be0dfafb527c5391bb18"
  },
  {
    "url": "assets/js/96.2d03a8a2.js",
    "revision": "61420d57f77c3e6a64d44d07ddfb3e6d"
  },
  {
    "url": "assets/js/97.7aae6624.js",
    "revision": "42a9bad03fd31014449efcb2a44940f7"
  },
  {
    "url": "assets/js/98.f7026942.js",
    "revision": "8268fded6ceb644d20826832eef6c141"
  },
  {
    "url": "assets/js/99.55f9cf64.js",
    "revision": "acf20bc860a7bc70a49adf3134462323"
  },
  {
    "url": "assets/js/app.97db2d16.js",
    "revision": "db9ebd476be8049245e1b06e7aa7b0d3"
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
    "revision": "182ec7e9f9faf331f9657a2e41237cc1"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "1f3721e9ede95f262c9ae2c88875c20f"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "91e8b7b610acf08ad584d0a35e910d44"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "e4d38b659c69397af28e4593692defd2"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "2f4e0b140fcf68e8236abfe934e8e994"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "51e630abff5dd432cb61440c6411d0a7"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "bf29a42c619a0b1a216f50951f5241dd"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "61afa763704d3158005d3118b7e3dcc4"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "b945659a69af6b357fa04fa8eccb7ee0"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "f7e93d4709bb2c617b84cf39c4a5b756"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "7f43a2ffafdfa9a56127b7b59e94c883"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "6697cad7b04d5010773fbd3e4b08d681"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "45d11f01f30896340d72f9551db39f0c"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "0e0a87ffc9d667933fb0fb6f35d95d3b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "c6a5c1ec26b5b1623aa46695e555c0b8"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "bc3de78fa81c12abc9fa4844ea11a854"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "df64b2f05dd5d101c0b00e376f333ea8"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "e11297ea3560b3aef2b0f37669c480a6"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "2fe3e7df000c4ef676b7579b2c1fe035"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "92adde60e3f9c6491158b98aca0329be"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "fa9cf42867a885359e2e5d80f02888f5"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "7879f3d71d8391aba766912db1b4de65"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "7b2e6c0c41bb63a545a83cc2b7cb7452"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "540ba60d56b2b62a5f6720dd237aaad8"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "81bb9e217a395694ed8f92acda9af7c9"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "ed258866ed53ced8772c269d8f2f0bad"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "1ac90eae58b55c1abe366626dedb811b"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "6c0d1f4ea1cbcc026d81d72864ba4f72"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "499d866d5e0775d60f72bfa7da72caab"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "04e5d54b79ff8e2a1a58f19b713bd020"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "226b4c0bdf1147faca8b7338f63bec60"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "fbb95f4a88e350f76c279e7b5adf6865"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "374c166f0d258e44e27123b0e8b0c926"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "bb320d1c81280c17287650c52b27c4cd"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "8e191b7939d3bce7359921daff013d2d"
  },
  {
    "url": "post/plan.html",
    "revision": "aacd03f89dc6c35fee343ed9d63554b2"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "62176dff65be167f982d25a26ca74e46"
  },
  {
    "url": "study/english/words.html",
    "revision": "71ad62a98f16efd6ea5f0026dbe2b206"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4a4791bdfc0b6fd4ea0131eb2f2ecf10"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3fde412329d0b058bf5e5e78b12d5bcc"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b1f5bb0d80e3a30d0ee0450ebb6dde18"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "62cc5bf735b7dbb3e3e973d33f158697"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "8207df01b7397498c29db2b7542c7421"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "889cfcc6ff1c973a2a99d2cc0eb1cc55"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "880df65c2f0cbd72fae5814e62f0f505"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "4a7ed33fc311c4656f7749d172d36176"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "46b03fa837223906129bbb05f3575c25"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "d60d191f7b547dc13146d2fd91250c64"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d46ad8e17960d022c1330b6e58319692"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "76c3d1c7caf2e43b482598f14c341cd7"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6bcd9dca34937241812e240029bca6bf"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5bb422a5dab1a1ca9397eefff5225bf9"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "9d18b307212379341b66bbb1e035dca1"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "62689c7fcf3c7b1da72f9eb5aa49a3f8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3158cc98138fe0d3590d27e76c3568ff"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "187f543907591b8c491d938f83ada94b"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "206bb5dcda7f7cf9f5c0f4f9906a9847"
  },
  {
    "url": "task/2021511.html",
    "revision": "e41e41f09aebca4e329c29f8084927d5"
  },
  {
    "url": "task/2021514.html",
    "revision": "570ca74a3961572225e1741d18503912"
  },
  {
    "url": "task/2021515.html",
    "revision": "1d52401721ef5282696c33b68205a097"
  },
  {
    "url": "task/2021518.html",
    "revision": "36db348a583454640587143365712c2b"
  },
  {
    "url": "task/2021519.html",
    "revision": "770a14d5cad54673d5ea19f3f0d08ffe"
  },
  {
    "url": "task/2021520.html",
    "revision": "299d10c419ed2bf9adb3cbfa2034f6d9"
  },
  {
    "url": "task/2021521.html",
    "revision": "b3ba800fac5162a1652d7b7e319306cd"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5fb05e624aa577c50c22c3876768d1ae"
  },
  {
    "url": "task/2021524.html",
    "revision": "556cfe2ca07f410ebf529dc1fa32b73a"
  },
  {
    "url": "task/2021531.html",
    "revision": "e92c25c48eadadd6cec1d49d16c34a6b"
  },
  {
    "url": "task/2021628.html",
    "revision": "d7c50898bed4b78cd29af059912a5255"
  },
  {
    "url": "task/202164.html",
    "revision": "ca19beb9702013137358fb2719e60fbf"
  },
  {
    "url": "task/202169.html",
    "revision": "136272ecf7ee207b05e6e4bdfbf6b8ff"
  },
  {
    "url": "task/2021717.html",
    "revision": "51014ab7231b77e31c0a462ecb06b60b"
  },
  {
    "url": "task/2021721.html",
    "revision": "ea44dfea84d56c4d73dd8c33f453c89d"
  },
  {
    "url": "task/2021722.html",
    "revision": "193b27c16c84891bbe9870af60fcc5d5"
  },
  {
    "url": "task/2021724.html",
    "revision": "12775cd44678e20511b6d04e151743db"
  },
  {
    "url": "task/2021725.html",
    "revision": "45910f4529aa92403e6d51acca1ca400"
  },
  {
    "url": "task/202181.html",
    "revision": "cdfb9a81efbb094a0efdcff8d56abd10"
  },
  {
    "url": "task/2021811.html",
    "revision": "74a1e8589ca91271e547704903b685a4"
  },
  {
    "url": "task/2021812.html",
    "revision": "c648b8e41fa7c7295fa71610b7c5ae69"
  },
  {
    "url": "task/202183.html",
    "revision": "e2ad36017c140fa91b7c6a53a57239e4"
  },
  {
    "url": "task/202187.html",
    "revision": "a130010d71afc3a0e8e1969a6eef37f4"
  },
  {
    "url": "task/2022218.html",
    "revision": "3a3495e37cfbdb1bf665fe2ff916cc6c"
  },
  {
    "url": "task/2022219.html",
    "revision": "78b0dfec8214790b5e2252aa039de6a2"
  },
  {
    "url": "task/2022222.html",
    "revision": "093b9427a6f0e2a32cc97c918ae358f7"
  },
  {
    "url": "task/2022224.html",
    "revision": "7890a3dd22953db0a6e6813eac146dac"
  },
  {
    "url": "task/2022225.html",
    "revision": "bc7b2b6663529f646a121c4ff83c5d45"
  },
  {
    "url": "test.html",
    "revision": "3b537851dff1a1bf6c39515f86a9a926"
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
