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
    "revision": "9a5a3c1e2c5a13fb64a8258b4b05d262"
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
    "url": "assets/js/100.f828bb5e.js",
    "revision": "08c00901e4c6e5e0800900a486c9257d"
  },
  {
    "url": "assets/js/101.5baa2a95.js",
    "revision": "e674e61597704bbf4a67486431cf6c73"
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
    "url": "assets/js/40.4da5c780.js",
    "revision": "fd07c40a8dc9f4228db4ca7770081759"
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
    "url": "assets/js/49.fb308e3b.js",
    "revision": "6a34e01c9d81344aac93c667def32070"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.e541a7f5.js",
    "revision": "6628e65cbee4d980d21db5fb633caa1c"
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
    "url": "assets/js/7.8dbc208a.js",
    "revision": "e5727613a595b633f7687b1397649615"
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
    "url": "assets/js/app.77fe60fc.js",
    "revision": "39b3edbd9840e1f85c89d9563102a8f6"
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
    "revision": "94a13ace73c0035c28181aec5c87adca"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "52b351a318b87aeffbe0ba2d33f70ea7"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "2ebc9c0473aaa30757d8cd52b2fabd0a"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "c9b5a8fa6dc8b119651e0cfdccf50340"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "f966606243a91dd3bd3a865c75017e33"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "6bf2189764fa6b28640b9f67c00b04d8"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "f91d4e7dac984c0d9f169137284a7c3c"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "311de779ee1f167b11a903007d170cae"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "05463d1f61419ef263e77c933c788f81"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "b419cedfcca8b88fa1bbfb068791603c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "3881f24d6822ebcb5310842c64f29cb4"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "53bf682ebb2b21f6025449b6835ac67f"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "b53e88c35a0615cc3ad532b2c6cfa4a8"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "e3edb840660aec442f119f9475df11e3"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "e6e72a7778890522d6e3d6ba4de5bdf0"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "7675b486bc1bc75995e09bcf866bf470"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "27552cf32095cb9919707c44e1f68e7e"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "86a25aaf59da2be0835e4bc9972ebf42"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "4a49d38c3e86ea589a0f48b3c33f8f47"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "d87fe8df20bf898f6966f759ab840305"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "5dd549cc8468473d8771a040cded3766"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "0d531ad68d6143fc8935c5f90d4ab414"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "5b7aaa50b580320a7ad43df456b511cf"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "e3dda3e20c810cdf09473a549a621ffb"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "6e01b3a79478d1d1e72b8cec7ca98c66"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "702ee310e194c4838434e78e5b3aa1b1"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "995bceafc5337f94d662e605706a7213"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "2d44535a3ef6dfa99feebc8968f09a85"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "26f97558eaacae50d991497e1e4b73e7"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "4638a589cbd73ea122d7a0271e24a4ec"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "156cc7ff8f35961409a3d3772747c735"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "d3d5d3a283d0a2d645b00fdccf07ab64"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "cef645517d3c67f949bb56c7887f7e58"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "57ce94e9691b8171b15e04ddd8652fd0"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "82ecf2e442592bd3c0f93c72741df83d"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "ae2f020c662fb5f79050a8d27c43f9bb"
  },
  {
    "url": "post/plan.html",
    "revision": "6a3a91115871d1f51d28063ef2b28d81"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "657f0226ed252f2dd7c38782caa01fd3"
  },
  {
    "url": "study/english/words.html",
    "revision": "d9d5ec01471ad203534087eca9d0d4e3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "0bd689b82c4b490008a54fca3a83a9a4"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "09bcd660cc7126e9ecb2d95be3921484"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "655fabca8f89a67baf58e903b6399e67"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f55705f8c7d06200123b84ab0a0e4dc8"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "eed260a452fdf81fdf61275aaeaccfc5"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "9e2345745151f5f1bcb68ae21e04482b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "1ba2bf8b75888bc238408b9589554ee1"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5c783634822ebb304cf3093a33e05207"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "00dd332873f2390273ca5231f51badf0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "d4c1b6f306330586d983fd2a7ec883fd"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "4702905868cf64f8da73fcc70cddc732"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ae458ea6acf1510450d4488c50c3df3b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "cc3cc4411653ed46a697080f4b146d64"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "501243ddb434203e3d0bd1bd7f3387e9"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "16eb10abeb23827d0d45bdd34df51215"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d481675220db49a040ab73daa69b038d"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d5d8372b43279b9f643fd95c8ce51080"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2b7b60d7686426627f8aa8680e13aacf"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f7fd982232e6a58dacd369d5e4299163"
  },
  {
    "url": "task/2021511.html",
    "revision": "01c991edbdcefde73d2ae70f203715cd"
  },
  {
    "url": "task/2021514.html",
    "revision": "6e4257201acc3824c3cbd4ce519c1639"
  },
  {
    "url": "task/2021515.html",
    "revision": "9ecd1cfd497cf8a7eba7fe8c52b32d1e"
  },
  {
    "url": "task/2021518.html",
    "revision": "075f9edf420047bddf2c35cee3312529"
  },
  {
    "url": "task/2021519.html",
    "revision": "0dd71bb97b44aa0086d0ecb68664505a"
  },
  {
    "url": "task/2021520.html",
    "revision": "a392e4699942ea8a3b5b1496b6c6831b"
  },
  {
    "url": "task/2021521.html",
    "revision": "e4cba50575e66e4aca05d58fd0c1d464"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "77d8e0b01ded1e874bd9157ea5f853ff"
  },
  {
    "url": "task/2021524.html",
    "revision": "933ebe114625011611708c9267be03a3"
  },
  {
    "url": "task/2021531.html",
    "revision": "745c0908d3610c39e19e9439c45b64c1"
  },
  {
    "url": "task/2021628.html",
    "revision": "a0937f27044161dd593a9b23866abe3f"
  },
  {
    "url": "task/202164.html",
    "revision": "c6360ea954da87dca5734084c361a3dd"
  },
  {
    "url": "task/202169.html",
    "revision": "2d355542ab431223fa196ed264150d35"
  },
  {
    "url": "task/2021717.html",
    "revision": "1a41c154dedc6d2668522576141f9d5d"
  },
  {
    "url": "task/2021721.html",
    "revision": "63c9c802cf3dc88a02ed9daab1162fa8"
  },
  {
    "url": "task/2021722.html",
    "revision": "d0535a8c6c4059424ce7e5ed90c85e0a"
  },
  {
    "url": "task/2021724.html",
    "revision": "2bf4c9bb193c6cb2ab3befbc990cc372"
  },
  {
    "url": "task/2021725.html",
    "revision": "3383e2686633dae29c25c7aa50e99be9"
  },
  {
    "url": "task/202181.html",
    "revision": "3ae2b0e89c4738e7e540061002b301f8"
  },
  {
    "url": "task/2021811.html",
    "revision": "55cdf09f8515be89ce9e0b5c2eaf0324"
  },
  {
    "url": "task/2021812.html",
    "revision": "afb5f19087513e072e8649f8921c7726"
  },
  {
    "url": "task/202183.html",
    "revision": "0c83f9a22f7dfc0e09e5aba3905e31bf"
  },
  {
    "url": "task/202187.html",
    "revision": "1693b573d46b83c859247c0b4cceb61b"
  },
  {
    "url": "task/2022218.html",
    "revision": "9e57a86a4b0e2a20206414689ef73532"
  },
  {
    "url": "task/2022219.html",
    "revision": "f4273f80247c63cba57394cbebf9e20b"
  },
  {
    "url": "task/2022222.html",
    "revision": "ab8a9624baa8603174dc699b2942565b"
  },
  {
    "url": "task/2022224.html",
    "revision": "bfd3c24006a8336745821db83c6dbd7f"
  },
  {
    "url": "task/2022225.html",
    "revision": "8635b59ebbca27cc6726c22eb0462d32"
  },
  {
    "url": "test.html",
    "revision": "18e79d2d9184c2d13ef62197584305e6"
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
