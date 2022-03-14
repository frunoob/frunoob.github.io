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
    "revision": "b0a3b1e6fcc16fb64735f7b5407db653"
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
    "url": "assets/js/app.04711da7.js",
    "revision": "b7c2b4ffe05cebb646d02d00c0738756"
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
    "revision": "8baae46b51b5fb890cb0056b8c3c3871"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "4aa94353170c4c8b1dbfff60714c7ca0"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f4aad047e07973c2c0b422f4e2bec7d4"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "dee9ae3411298e88430dc7658450ddc9"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a5ee034729c04e22e049d2f57e27e84f"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "ee4d787660c82c41c4bd239044ee8d99"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d8a99f67f1a0ba0f8e3ed9b0fbe1c263"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "cfd8c2d771ba68aa8d29884758f31183"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "37dfe533b4c3500246632e208d1f6635"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "b704907d517707b1df7d01e11f97ae08"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "706d12195b1cfb8bfefe86b875959121"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "660a121602f31041af11d11e9a9c7819"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "88b7761e250185566d3ab082ada6a0e6"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "2028f8af297dc5a4a9977abcdcee9151"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "11ac6b55c71c358297632a4d42782ef9"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "efc632dff8237e28a33734d2a027aa9c"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "6c8466c3433fc1271553f721bfe62194"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "c4313dc0ed47cb48efbe51ea68713569"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "856e318c4f52ae5a50db79762d5435d7"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "ec3153936fc501134d03b969cd3491a9"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "64165f56e84b9ebb889f5f8f5a554a62"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "77d7ff9381a4f6608abd4b1ca1ca67d5"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "bce7309e6b40964cda0d4205a93bfa90"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "557ece5827914d88bf0ebff0fff31a91"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "3f593e3711e16d243b75d5dd84746ee2"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "6c74964ce4aa370d23135b59ec2ae0f7"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "46e10a6ac5c4553e121392b3c6a3bc87"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "bf6c4015d19f1449c7234f8f7d27cc87"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "11ed28d752b8f360dab4852efe6d45e2"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "61938968a05c6b55f0a2116866eabadc"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "f58bac90151282b3f97b4c4b0b6e1710"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "9d50ef88d380f054f07fcf9f86ae142d"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "c51cec8ce1aef3b7d3609ff89bb975d6"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "9bc2ddedf6a7583726299bd113232398"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "3ea54e16ba4851e72a3f55c911cafd78"
  },
  {
    "url": "post/plan.html",
    "revision": "70b01978fab046880540b5ed7d916f73"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "4471095758c6e2f76fb001971ebafa1c"
  },
  {
    "url": "study/english/words.html",
    "revision": "1a6b44628ed5dba67a16a30c1bc0242d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b4ded18bf3f4910dc3762c7914d14221"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "9775eddb52d54a9057f52b8d91f07988"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "643f09b1b7c110f9e7af8a460de3de71"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a181c9a0b9c347974464fd1327e4f6fc"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "21d272c878fb4b074186e66135a622cf"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "719a316d9fc8b02706bb0746d9684b04"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "ba9dce820048694bae700b955883baf5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "39bc280d8926ec803ade30063b9c06a6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "00e050f42b354e746b9888c148c49274"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "54fe856b50b9525f1258c216d4e4deda"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "83a836cb51308db02062442d665c621e"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "c6ac5ea3ae3df56d6c0d1aa15e2adc57"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f509312810dc190c6b72b7d1d6d7ea61"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "21c4fcafefd279e0b45d27ad6e0bd49b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ca0c248d09ff8595eae2dbbe31e27092"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7b7f01aa57e980f160c3a26883c2cc4f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "804cb5b9d21349588b29ecfc4bb9ef97"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "dd81768300d0ea3f24e45d42db9735bb"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d0d9fd99ef741d85245bea44c4f62297"
  },
  {
    "url": "task/2021511.html",
    "revision": "017e846ac49c950766760c710c0975fb"
  },
  {
    "url": "task/2021514.html",
    "revision": "12994c9d633cd1d42dd3ec423d9f6e2a"
  },
  {
    "url": "task/2021515.html",
    "revision": "8e053fd4efc00b0a107ef9bcfa148939"
  },
  {
    "url": "task/2021518.html",
    "revision": "6a307373d2ea7fe68a245a0ddcb99c62"
  },
  {
    "url": "task/2021519.html",
    "revision": "19e15cc94cc21e8dc7f08c585d5ce51a"
  },
  {
    "url": "task/2021520.html",
    "revision": "efa03ea22664cbc90729dfab8c532b00"
  },
  {
    "url": "task/2021521.html",
    "revision": "52b59bba72f377615185fa6cfa1b4cea"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "2d0913ebdbaa72eb53d4c55cdae800e3"
  },
  {
    "url": "task/2021524.html",
    "revision": "8c97078b0ce768bcb4812aed24ea5280"
  },
  {
    "url": "task/2021531.html",
    "revision": "bce378c97e55bf2509e9618b325dacc7"
  },
  {
    "url": "task/2021628.html",
    "revision": "55441aacb33075f07fed2b172f2fdbf3"
  },
  {
    "url": "task/202164.html",
    "revision": "2f2c39a446734176cef0aeba289bdcd7"
  },
  {
    "url": "task/202169.html",
    "revision": "3599d2a6b1d366e809f270606f886298"
  },
  {
    "url": "task/2021717.html",
    "revision": "ca12ccfdbe626893c8f802df8f96c579"
  },
  {
    "url": "task/2021721.html",
    "revision": "ca4bcc50f4bf2b6194aa4a4a7b31cf1e"
  },
  {
    "url": "task/2021722.html",
    "revision": "ea5b56b5b7e2d2207ee32ec65fb401a7"
  },
  {
    "url": "task/2021724.html",
    "revision": "a9eb82592d4e1bab3a419dd085644da9"
  },
  {
    "url": "task/2021725.html",
    "revision": "13c3e5556afe064b6555d9374b26aff4"
  },
  {
    "url": "task/202181.html",
    "revision": "44e65308a85e856b65bc295ed1e7a9ee"
  },
  {
    "url": "task/2021811.html",
    "revision": "acef7c3a50e679febd064000fbfd648e"
  },
  {
    "url": "task/2021812.html",
    "revision": "6d8806d67ede937d382d874bd0f97fc6"
  },
  {
    "url": "task/202183.html",
    "revision": "457c6aa8b4518079045e4089ad67c0b5"
  },
  {
    "url": "task/202187.html",
    "revision": "19f8e143efbad92c40a557376ed6b861"
  },
  {
    "url": "task/2022218.html",
    "revision": "53b0a4cb2395d4c50407aa029a9a0c98"
  },
  {
    "url": "task/2022219.html",
    "revision": "02f5b90b177f10c6ecc586963524a805"
  },
  {
    "url": "task/2022222.html",
    "revision": "cd8909f38682fa9999e4dfcf1bc2d475"
  },
  {
    "url": "task/2022224.html",
    "revision": "fbfae4f8cef98d8f4a0f7eb729c4d494"
  },
  {
    "url": "task/2022225.html",
    "revision": "c6ed9ebcf858219d05b9d227a35dd18d"
  },
  {
    "url": "test.html",
    "revision": "f2a104a33fbd71b2aaaaa417f4be63f1"
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
