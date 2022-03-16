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
    "revision": "73f4211536493fb13d1efbb5950f0ff4"
  },
  {
    "url": "assets/css/0.styles.d6f71764.css",
    "revision": "53cdf5b9ff0b6d68b3eab26eb08ea0c3"
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
    "url": "assets/js/10.4c83ac67.js",
    "revision": "88f3615d65e700ce83bd90e7bd943442"
  },
  {
    "url": "assets/js/100.26e6c496.js",
    "revision": "0d1d7a24dd2ff91dc7dcd4e67b184082"
  },
  {
    "url": "assets/js/101.e30404b4.js",
    "revision": "1a90ba31fe1244187084724be7464d95"
  },
  {
    "url": "assets/js/102.76dddc47.js",
    "revision": "1062ff92257d1dec94fd84d01b639364"
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
    "url": "assets/js/44.dc8d94c5.js",
    "revision": "0240e562f2b564a7dfdd1059accb1e85"
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
    "url": "assets/js/50.4c9c73ab.js",
    "revision": "5941f46f5a127f2c0db8d5014583bcfb"
  },
  {
    "url": "assets/js/51.e12ca807.js",
    "revision": "1fe00bb84e1482c78882688e62705bd0"
  },
  {
    "url": "assets/js/52.de5a0d6f.js",
    "revision": "cd9cffbe72be1869788b08cdc0f1c7b2"
  },
  {
    "url": "assets/js/53.f9f529f6.js",
    "revision": "a98808841e3f342c6b7d3b0c1bb7c358"
  },
  {
    "url": "assets/js/54.32e6d26f.js",
    "revision": "e1cc8d8f7653cb3a1a22752f961686a1"
  },
  {
    "url": "assets/js/55.8bd46b7f.js",
    "revision": "7baa64c3ef5c11fe42761eb94b5755ae"
  },
  {
    "url": "assets/js/56.7b279ee9.js",
    "revision": "5a1bf20b7fb34f7be43d2364c8dc1e7f"
  },
  {
    "url": "assets/js/57.3c473eb4.js",
    "revision": "830a3177f218551774f3aa58a096ad6d"
  },
  {
    "url": "assets/js/58.f56a25c9.js",
    "revision": "08c2d1489e99aab4196c80baae5e4fc5"
  },
  {
    "url": "assets/js/59.4d013b0d.js",
    "revision": "04be960407a623730fbcf8e3bf2ea047"
  },
  {
    "url": "assets/js/6.5e1bc5dd.js",
    "revision": "d1ad75ff6013ba08ef320c0cdb22c5c2"
  },
  {
    "url": "assets/js/60.e9b24596.js",
    "revision": "397c05c8c27e72a7a540ecd2cd7f72e7"
  },
  {
    "url": "assets/js/61.f9606d1a.js",
    "revision": "1661015bfad9b7a6dfe0ae71471dcffd"
  },
  {
    "url": "assets/js/62.152476a4.js",
    "revision": "448b9bf535474721458cde3f7b2360b8"
  },
  {
    "url": "assets/js/63.92950f64.js",
    "revision": "40afcdf58895c780a8f4dcc8eebf50f6"
  },
  {
    "url": "assets/js/64.8a93a442.js",
    "revision": "77f5c37885afefcfa1b0ae117ce29920"
  },
  {
    "url": "assets/js/65.c78b66e4.js",
    "revision": "2637bae71009256e688541628eca280a"
  },
  {
    "url": "assets/js/66.79bb0276.js",
    "revision": "5382ccf4e57b86fd566550d208b66533"
  },
  {
    "url": "assets/js/67.fa3ba9e6.js",
    "revision": "e0b0aa71fb53f21d45363609eb3cc413"
  },
  {
    "url": "assets/js/68.3747af4a.js",
    "revision": "2347c91a902d74a3c082a04586b84538"
  },
  {
    "url": "assets/js/69.77ce9722.js",
    "revision": "9006db533916d1f2f77ef6b39bb2d356"
  },
  {
    "url": "assets/js/7.d9077b66.js",
    "revision": "acb1778748d281fa14769fe077699c35"
  },
  {
    "url": "assets/js/70.e740ea14.js",
    "revision": "c977852eef251305045adccfece96b9a"
  },
  {
    "url": "assets/js/71.6f1de686.js",
    "revision": "4b265359592352e2cf53aa82d57c4ad2"
  },
  {
    "url": "assets/js/72.f06b2603.js",
    "revision": "ffb7c3dc6d023d7893e03d85d7212924"
  },
  {
    "url": "assets/js/73.91743844.js",
    "revision": "395ab9536e410b1946a2ea08fbc2716d"
  },
  {
    "url": "assets/js/74.92a2664e.js",
    "revision": "bf0eb42f02df3e81d486c5a920420bc0"
  },
  {
    "url": "assets/js/75.d3190072.js",
    "revision": "32da9d151a5ee9e747ec47fb7f374c69"
  },
  {
    "url": "assets/js/76.ef0a829e.js",
    "revision": "9b81cc16875dc68c2cf25efb275025b3"
  },
  {
    "url": "assets/js/77.a72a8a86.js",
    "revision": "1396d51cb9b0a05084fd145e75f34653"
  },
  {
    "url": "assets/js/78.89456291.js",
    "revision": "38496ba35104738a8cd24050f69a134e"
  },
  {
    "url": "assets/js/79.4be269fe.js",
    "revision": "684533f9d2d04ff9da8c6b609d3b15ca"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.906072ed.js",
    "revision": "6c480d73484a54cf6fc13c94e7233fb3"
  },
  {
    "url": "assets/js/81.0aaa5530.js",
    "revision": "8ebe15dd683f450513ebefd487a019cd"
  },
  {
    "url": "assets/js/82.3f4426a2.js",
    "revision": "410c4e26cfb89a36d2c4cbe387896ea6"
  },
  {
    "url": "assets/js/83.56421523.js",
    "revision": "0ca5fed7ac68a7f3c24d93c421e4c1a6"
  },
  {
    "url": "assets/js/84.e7a3c3f1.js",
    "revision": "dbac5df774be945fe7da6d73bc7066d5"
  },
  {
    "url": "assets/js/85.ff023665.js",
    "revision": "2f6b0e470e47ad51539ad21b7fb00e64"
  },
  {
    "url": "assets/js/86.a2d5f057.js",
    "revision": "09e74eb313834244e7851c424a3f61fb"
  },
  {
    "url": "assets/js/87.cc477dc0.js",
    "revision": "19df702228a48765c26557334c80754b"
  },
  {
    "url": "assets/js/88.b979dd79.js",
    "revision": "bd12f6e6cfb27d1499d7140d1d8c1370"
  },
  {
    "url": "assets/js/89.e5b2c58f.js",
    "revision": "0b8528a6d72984bc38d8bc20c357db70"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.61652e30.js",
    "revision": "14ad642179e7de02adcad43876a04390"
  },
  {
    "url": "assets/js/91.325f71bc.js",
    "revision": "3e3b4e6c9845ce67312da474582ef3ce"
  },
  {
    "url": "assets/js/92.ac379fca.js",
    "revision": "4c45ae6199ffa0284380bf1068688a3c"
  },
  {
    "url": "assets/js/93.1a3cb048.js",
    "revision": "165fee5c82b96c7d509d5f5a72bb4790"
  },
  {
    "url": "assets/js/94.30c24017.js",
    "revision": "817e59a8d13c4c8dc81ee896fcdc427b"
  },
  {
    "url": "assets/js/95.12dd741d.js",
    "revision": "44a771f4789ca4394b2c865d9dbd529e"
  },
  {
    "url": "assets/js/96.502b3267.js",
    "revision": "6098fbfac972f30f6c37528e35d6a05b"
  },
  {
    "url": "assets/js/97.5ebbd18c.js",
    "revision": "208cacc7c80fb641486d1b7330470ae5"
  },
  {
    "url": "assets/js/98.1fff68da.js",
    "revision": "3470d4ac88e17d55ba36644d5739576e"
  },
  {
    "url": "assets/js/99.8fdeab4c.js",
    "revision": "72635847b42cabd33cddb79aa7f241d7"
  },
  {
    "url": "assets/js/app.a09314bd.js",
    "revision": "d855aac72292e63c0d7bb73a8893611e"
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
    "revision": "34a8832b04a5ff551e2f53610afb9e52"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "ac69b168102421eb76c61f2de1fa42fe"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0bb7cd33a87a3c8a74da3af5fd501c39"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "4f96fd60be92517d1196757249dcb2dd"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "0968649d2df9115636fd5a336f17b1ef"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "1a5603df19fc5c0e495cbf3c41cf7d5e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "154b8abe79feb8062b07421e1e85749e"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "878c3e95e777e7ef67bac6aee934bc21"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "10e049d0dd595e3e3652ff76319a39d5"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "61bebb3843bd3231fbfa7d53969b64a0"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e5f14d8ed28a50620e5e979a2f3d7676"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7c732b289b9e9d21f5ed91bff89fb84d"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "a78e9a2817f442e2871995ca61ff65f2"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "525827f11b3dab5a71953af8b6696d79"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "36d51a10c502b46d54465e50e62b2017"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "0f0f843601850027023e91a6684f4bd0"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "09057de1f581ef63918b4328ab47e83b"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "82933212a9a7257df13ca88d4378190a"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "abb224cfee2aab9eba68c882a7c8a4a5"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "30b02ccdc83f119352a0041e8dcd3df0"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "186d3b952635f5a0974da49c509ebe1d"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "492511b16df961c8856ccff8823e69c9"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "930e0a368c5a49b83cb35afc74226971"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "d1911ed9d2e09d812bc2c7e1e01fa933"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "0503db9b99143e68fb2d4c2878754b00"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "452244972b58bf3ebcf92bc913e99ece"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "12a1a425a6032417d3d129d386045aee"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "fe9faccefa5519957479b8b7c1b2c018"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "84a1ffd835827f2f669fb3c60e66b58e"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "89467df5ba1233d443efce6fb5852301"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "bba5abe671730f9e54192a2f2da0340a"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "70158e63ffc59d326ae76ef3b872522a"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "f878d6491544fbff88918c3b1d928a7d"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "e9138460a71476faf5356c814d8f27e1"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "a8db238764e2cfad19b10a753f86710a"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "7ca434f5854e4f6bb4d2001ee2bd17a1"
  },
  {
    "url": "post/plan.html",
    "revision": "ec2ed1ee1f4adb44833dbf4cdcb574c0"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d0e7a363abdb5b5ea102fe5c05b7a6c5"
  },
  {
    "url": "study/english/words.html",
    "revision": "d2472d95a06f85141398c6356e7a82e7"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "ade85684f1ccf46f7272e394cf4bb342"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "da876622dafcba5c67ca662f5b5646a7"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "91fd127754ff872178867ceaf5015d44"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "705d90d9c792182fa5dc8f41a7ed230d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "bc48bbe08c3314b3837f606910a5a886"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "9bcff0cff30b76ccf6f7a7219f2e4f00"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "6073cd500c35e0b4a76956f311296d92"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "a5af7a3360e0fcaf8331f0d8f917e1b5"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "3f0d20c8e3b4014f73818293aae3e9ed"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a16975c92cf51948497389abc219811f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "5f36cbf2ef9bb423ca87170d10a15d83"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "5e081f59478076bf67464eb808a510bf"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "700e859d514c339965d9d4ed7d026c71"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "146041c821a5c1d14f7ca7ae616e1172"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ad4cb9b7c3582a905f7106d0832cb809"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "8c2cf3bec2086501e7b12f9d7599c12e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1be70bb286e6e82764159baf92e094b8"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ea25cb4c2398fabe19feb4d502240688"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "3bda789e6849f23d1916ae89fbceccf0"
  },
  {
    "url": "task/2021511.html",
    "revision": "f24c32bc8f7791b5a4b1c4ecb4580bd4"
  },
  {
    "url": "task/2021514.html",
    "revision": "9332b1b50123772dc51c62647c6a9faa"
  },
  {
    "url": "task/2021515.html",
    "revision": "402992335c7b1c6e70e1c0e5515428b4"
  },
  {
    "url": "task/2021518.html",
    "revision": "f1ed9ffd45ed7652df1804987947d763"
  },
  {
    "url": "task/2021519.html",
    "revision": "a6a833b1ed5c3598b8adc28ff5cad541"
  },
  {
    "url": "task/2021520.html",
    "revision": "68b2f96d3f66666057baedd6524d3b1f"
  },
  {
    "url": "task/2021521.html",
    "revision": "834fadbff5cde42d33761949f3a3ff93"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "802d1b5c0cd4e25e921eccb568543d9f"
  },
  {
    "url": "task/2021524.html",
    "revision": "70f698fdd33da0c37c65ca0cb7b0d3a8"
  },
  {
    "url": "task/2021531.html",
    "revision": "0c993a32f6a0d954b064f6ce14b5047d"
  },
  {
    "url": "task/2021628.html",
    "revision": "38e8cde909823e2b8d51f811024c729c"
  },
  {
    "url": "task/202164.html",
    "revision": "2cce75e40561c69760e4b20a4e3f7fda"
  },
  {
    "url": "task/202169.html",
    "revision": "aa814329657ee9752c4809556648dfc8"
  },
  {
    "url": "task/2021717.html",
    "revision": "a91492b02ceced99782fdb5060409028"
  },
  {
    "url": "task/2021721.html",
    "revision": "fa05549887a76ee541dc08132de22a4f"
  },
  {
    "url": "task/2021722.html",
    "revision": "56e29009a51a0ca19b4a573c5e50b7cc"
  },
  {
    "url": "task/2021724.html",
    "revision": "03c8d8f9c2503494e6794da22bccc214"
  },
  {
    "url": "task/2021725.html",
    "revision": "73794c03c36dd494ebed05925580250e"
  },
  {
    "url": "task/202181.html",
    "revision": "f145fb856bfa71fc722980bc40cf3cbc"
  },
  {
    "url": "task/2021811.html",
    "revision": "0674a957637afe90746b77e2462cc959"
  },
  {
    "url": "task/2021812.html",
    "revision": "ad2153229ae70be77614741cf98e6c82"
  },
  {
    "url": "task/202183.html",
    "revision": "c41026e87ad30f43b79b01d87d84ec35"
  },
  {
    "url": "task/202187.html",
    "revision": "ca57e0e8427d1b5b7a1cddb0086a3045"
  },
  {
    "url": "task/2022218.html",
    "revision": "b9b0f391a6ec66cac4e26a5c6de3cf62"
  },
  {
    "url": "task/2022219.html",
    "revision": "351dbd1b4f6fd482ac78974befc9caf8"
  },
  {
    "url": "task/2022222.html",
    "revision": "7557dee5349fa41edee74f5f68c27bae"
  },
  {
    "url": "task/2022224.html",
    "revision": "7d5be0834fafa3e8dfad28a0b24e4f7d"
  },
  {
    "url": "task/2022225.html",
    "revision": "0974035a86bb763c6f062607b1554091"
  },
  {
    "url": "task/2022315.html",
    "revision": "30554a8ff49e85c249780c676b270356"
  },
  {
    "url": "test.html",
    "revision": "de1e5495e04f4c466e795b064075f44b"
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
