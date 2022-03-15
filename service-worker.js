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
    "revision": "029d94c42e5255ed004ac5ada4a81f48"
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
    "url": "assets/js/50.d110a144.js",
    "revision": "6dde822680a88e9140e55c38ae6eeb5d"
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
    "url": "assets/js/app.e4fc0899.js",
    "revision": "22971bac344f24e7e72c701be6fe806f"
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
    "revision": "4458b837c755473e06dfd5c064ec98d7"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "ef94754547a1f03e12f2a3242c8c62b3"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0c7c891af9bd351bd88c25448945f22a"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "3ca707b2ea1ae249427a45e7594a49eb"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "17fe098cd103d6c6f97df6e97ae79230"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a7069e50a2488cb84a96b710ce8109d6"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "a8087361ef67983a6fe107b803221c58"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "a337fb9cdb25211232d0ebe5ee1a66bd"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "42bfc5f82a19fc8bcdf1809a43153fa8"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "b7c5c61461e4977dc1f42658aea1ca3f"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "374a3982a5b8c3826bf305747bc654d9"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "f5d2bf57da510c3a90e2a8ea2f9de61f"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "3709540834b922a064271fab10b8f651"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "9af9f909563ebb634479d36d7467ae75"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "eaaac0c12101d074b594ac4572a62069"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "1bb12b08610e3b89605d29dc51253fa6"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "bdfcb37d17ee989bc0c727717efb1930"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "800d14b99fe9fdaaccf8eea3cf5023ee"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "d176f0fcb100a82f6843db021b89ecd4"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "91777af44208b16c9a9df07f0a4fe131"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "ae8e1a1fa7b2d00fbe52a073ae6c3cf1"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "5e7c2067c4d62f394e7076518cd419d1"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "54c1d2b610f3dc4764f2a522cb7f5d41"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "b0a847120d82ed3c8e6b72b9275ac746"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "1258f2a1df9dd457f77e0850ae300907"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "251114631dceb454e4ab1881039e2b07"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "f5146475b73be8788bb9644f15d6ea07"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "09a1af17354c17163a36590f5dcbf502"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "861f3d1ff9abccf422cec237a00281eb"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "7169fbd531e38e65ce654a6583a05b53"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "73e30fb0abe9d577dda9dc5ccf80c950"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "2364a7c3f930971ab170f2bec4b8ddd4"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "42f830266873a28a51d34fa4c31851f0"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "9d008a4c1a1f5d06e83fa00131b7355a"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "d5c794a8f33c10242a198c3419138a9c"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "8f11b46e2befebe0697f875b14eda33b"
  },
  {
    "url": "post/plan.html",
    "revision": "7dcbfd84f75a05825ba05dc2dc482df9"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c293996543b49392538671ce0d095757"
  },
  {
    "url": "study/english/words.html",
    "revision": "6f1b5ab4e1db3e56afddf45ab020fc4d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "fed7f9ebe10d1cb4e4a315ba3e296e43"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "90908390b4de6c137806e7733be5e25e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "bcbbe3d88bcc99dbc63440ac5f61b94e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b1af2db62790d6c61c74379808d4ee5e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7900109ba0c5995833ff64ec8c134d0b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "56cabcfaf3ad1742e36c2af69b72662a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "4ea949fb59db9effbe339bdf9c3cd3f0"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "249577c73049df0d1739c69773d89894"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "857e0b38e37986d71a05ed8d97ae1920"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "8c957dad8ce78c86ba0ec24eadd45b53"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "701a9fa61c2bacfc97ee35ce9f3c8834"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "1bef3dd310f5c868685e20b26325927c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "2619c964369140dd11d9452452977c90"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "859bcf37d000fa2ff43dc64ad4280806"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1a7eafc8d3de07415dab00d93c64d53b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "66244c017cb999b990eb28372654e15c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0b0dcc77b002d2f1facae0d269c5c022"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "c786ac433cf4483364afd903f7d0a5c5"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "53cb0421b32ca0b33014a54899f20c19"
  },
  {
    "url": "task/2021511.html",
    "revision": "9afc09433f118b0d96971462468e08cb"
  },
  {
    "url": "task/2021514.html",
    "revision": "9f0ffc857f1233025fd6c43a12d86362"
  },
  {
    "url": "task/2021515.html",
    "revision": "7d858c6371eb49217c1fca18dca76208"
  },
  {
    "url": "task/2021518.html",
    "revision": "d124e2618b56d8680c72757f13200363"
  },
  {
    "url": "task/2021519.html",
    "revision": "52f5b872e20fa0542196fdb0ea731b35"
  },
  {
    "url": "task/2021520.html",
    "revision": "6da18e4658162a878e7824476771031e"
  },
  {
    "url": "task/2021521.html",
    "revision": "634d9f47c2a76b19ff2bb18438cf14ce"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "aafe234e2487b628256512afdc07e805"
  },
  {
    "url": "task/2021524.html",
    "revision": "f38d78abf06f097c010f8ac45c9d7978"
  },
  {
    "url": "task/2021531.html",
    "revision": "af46ff338efd2db920a53dee3f4d38c7"
  },
  {
    "url": "task/2021628.html",
    "revision": "eed4076e4b54b95a9fa85c58774594c5"
  },
  {
    "url": "task/202164.html",
    "revision": "500b5aa29c2ce6f500ae03aa06b69cdc"
  },
  {
    "url": "task/202169.html",
    "revision": "106def873325c4a1aa194f22e959b4ae"
  },
  {
    "url": "task/2021717.html",
    "revision": "6f73dc84849133fcfbad07dfa8ca5ed5"
  },
  {
    "url": "task/2021721.html",
    "revision": "213a0fd23d0599d0f4c796246983c1ae"
  },
  {
    "url": "task/2021722.html",
    "revision": "9165d39a4517bc10479dd9def01d082f"
  },
  {
    "url": "task/2021724.html",
    "revision": "27182ecb95a79a9dc1ffd72b59ec6cec"
  },
  {
    "url": "task/2021725.html",
    "revision": "f510a5663c6052c46b98ad4333b04824"
  },
  {
    "url": "task/202181.html",
    "revision": "7fbbd00d014da13351ee1d14ed3b1040"
  },
  {
    "url": "task/2021811.html",
    "revision": "dfa32d40017f98ee531fc5864cfaea37"
  },
  {
    "url": "task/2021812.html",
    "revision": "948e29ee67f814596e0a8f301a66104a"
  },
  {
    "url": "task/202183.html",
    "revision": "bde7bd5c4c0f942229615f85a8840c9f"
  },
  {
    "url": "task/202187.html",
    "revision": "c38661fd8ad238138a4c7efc96e567b7"
  },
  {
    "url": "task/2022218.html",
    "revision": "ba1116b2a8becbb0031cb1cedb9a3e3c"
  },
  {
    "url": "task/2022219.html",
    "revision": "f80620b39f13cb1c39b529830492d320"
  },
  {
    "url": "task/2022222.html",
    "revision": "4fd2f29091a9f87329338261ea00e525"
  },
  {
    "url": "task/2022224.html",
    "revision": "54d2201de4898390eda1026e374ffc1c"
  },
  {
    "url": "task/2022225.html",
    "revision": "ee22ae3cc451ebb7c1dffdf504a95239"
  },
  {
    "url": "test.html",
    "revision": "ae5229f4214221c9440c1438762948bb"
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
