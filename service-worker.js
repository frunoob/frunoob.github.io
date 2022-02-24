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
    "revision": "2fe157dbbe5a7009c27575d2b04f553b"
  },
  {
    "url": "assets/css/0.styles.7ab25c49.css",
    "revision": "ffb1eea6d95a6c6042d9b737b87c138a"
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
    "url": "assets/js/10.9400c9db.js",
    "revision": "189bedd10c2b398a6e9d074f929223b8"
  },
  {
    "url": "assets/js/11.1b38cccc.js",
    "revision": "5e3d79d665b5fa37d2cc976ed9f6f679"
  },
  {
    "url": "assets/js/12.152e7c07.js",
    "revision": "b1f7a35ba8910bd6354cc7e05154c3ff"
  },
  {
    "url": "assets/js/13.4d1f1fe3.js",
    "revision": "861dfbb782f5f693ec2aa70f74aaa9a4"
  },
  {
    "url": "assets/js/14.99f913a2.js",
    "revision": "86c1bcef91b4a6be6ade1ef7510b3b16"
  },
  {
    "url": "assets/js/15.36ee395a.js",
    "revision": "d938ea78c63a41edf2f6f620e1aac060"
  },
  {
    "url": "assets/js/16.e4bd2d58.js",
    "revision": "4e0a63534536ef3d7350db613eeb8c9c"
  },
  {
    "url": "assets/js/17.f0ddd1d0.js",
    "revision": "738e2df80c205151f975251fb94cb70e"
  },
  {
    "url": "assets/js/18.4b0f9377.js",
    "revision": "44995b4a6dac1dbf7fcf3e196df05683"
  },
  {
    "url": "assets/js/19.100408d6.js",
    "revision": "17ca59385b47ea8365f9c376f26077c2"
  },
  {
    "url": "assets/js/2.2fdd7d8c.js",
    "revision": "2989a6bf8267ec1e0751d21b52d91753"
  },
  {
    "url": "assets/js/20.63d7a445.js",
    "revision": "697deeeb5bb1ce1bcb49e646df6d362b"
  },
  {
    "url": "assets/js/21.eb967d08.js",
    "revision": "a463743dc0770461507d847a76a4daae"
  },
  {
    "url": "assets/js/22.5204230d.js",
    "revision": "a991590938a296a2bbbd3479397be39d"
  },
  {
    "url": "assets/js/23.f2a6cfa1.js",
    "revision": "d3ecda3e6d93bec0bf62f68adb2f9bb8"
  },
  {
    "url": "assets/js/24.f6346353.js",
    "revision": "869c23f88b0fffc9f88e612a7d39baa0"
  },
  {
    "url": "assets/js/25.0cd1a7eb.js",
    "revision": "f4396fc4656f3c710a867cfe931cfd75"
  },
  {
    "url": "assets/js/26.451c5328.js",
    "revision": "dc733db8b657d138844d6429f692b784"
  },
  {
    "url": "assets/js/27.82d8c56d.js",
    "revision": "56edda2735cc9fccfe23bbc75a14be0e"
  },
  {
    "url": "assets/js/28.ea385989.js",
    "revision": "2980f11ea142ea51ce29a76600f92480"
  },
  {
    "url": "assets/js/29.ab1c0af4.js",
    "revision": "9b12c6c40f7ccdcbda2e2ec99e48d204"
  },
  {
    "url": "assets/js/3.1d5acd2f.js",
    "revision": "1cf76ac0bfd9e77ab6fcf25267ea4ea2"
  },
  {
    "url": "assets/js/30.c0235623.js",
    "revision": "2425da1d8afac0afd9f68b011701e6f2"
  },
  {
    "url": "assets/js/31.15d15d71.js",
    "revision": "dccb38613b15902ec83a4707542c1167"
  },
  {
    "url": "assets/js/32.43ea9936.js",
    "revision": "1798839994bd14f03ae49586f25e42ad"
  },
  {
    "url": "assets/js/33.a47f66a0.js",
    "revision": "a4faf632159095431f6e3b2e03eb483d"
  },
  {
    "url": "assets/js/34.3dac9eca.js",
    "revision": "3808b0499664c2480c918eef6beff702"
  },
  {
    "url": "assets/js/35.a7e8fc2d.js",
    "revision": "c26719a55adc39b228cb6946f306e6c5"
  },
  {
    "url": "assets/js/36.7ea86bf5.js",
    "revision": "173b41aa6206bd7c1ab045b98fe8c2a4"
  },
  {
    "url": "assets/js/37.119660dd.js",
    "revision": "d248255180e4c41ae08b40d93dbbc2a0"
  },
  {
    "url": "assets/js/38.f0b4eac3.js",
    "revision": "908bc622c21fd4aa788c3bbc27b8bf19"
  },
  {
    "url": "assets/js/39.185341f9.js",
    "revision": "fa26453b26baad382902ca08b1b36bed"
  },
  {
    "url": "assets/js/4.e2ae5594.js",
    "revision": "daa88547d343034748f232ed229ad2ce"
  },
  {
    "url": "assets/js/40.83cad994.js",
    "revision": "752b523cd45a999e2751b795e60d073d"
  },
  {
    "url": "assets/js/41.5845333f.js",
    "revision": "202986d3df2ad3e35631a2f468d4a54b"
  },
  {
    "url": "assets/js/42.47cd4693.js",
    "revision": "64c659c72f08316e7af06d791fc87498"
  },
  {
    "url": "assets/js/43.1fcf62e1.js",
    "revision": "8ebbf04a7608d5631c6966f08ea86dd9"
  },
  {
    "url": "assets/js/44.1b7308a5.js",
    "revision": "2e6c176f23216f320a999a5d6640e84b"
  },
  {
    "url": "assets/js/45.cc43d104.js",
    "revision": "70c9451f3d0955426dc13ebbdb4e71c8"
  },
  {
    "url": "assets/js/46.73947aef.js",
    "revision": "700349bf5a7c741e8daf91745fbaee19"
  },
  {
    "url": "assets/js/47.3c2d5150.js",
    "revision": "9403079415b9626cffe261e2015552fb"
  },
  {
    "url": "assets/js/48.1ef633ac.js",
    "revision": "ed2f42166182395890b9a64976bc0657"
  },
  {
    "url": "assets/js/49.6a918d15.js",
    "revision": "7f4ffde5b3b2cfd2174993b1d41a8849"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.8efd390c.js",
    "revision": "4cccf95731f99fff99d3989804184532"
  },
  {
    "url": "assets/js/51.148643a4.js",
    "revision": "e151e0ef16b2f88d83e42a33743fb18a"
  },
  {
    "url": "assets/js/52.1bf60bde.js",
    "revision": "f091bf4ad953654bb8b9cfebc0516864"
  },
  {
    "url": "assets/js/53.d2f32aa6.js",
    "revision": "32ae56c49ac38857a6db00431bd59ca0"
  },
  {
    "url": "assets/js/54.a114b92e.js",
    "revision": "a54528d3a1b75cc282be0706c0cfc6b9"
  },
  {
    "url": "assets/js/55.2f44b6b8.js",
    "revision": "246fdec6e97d6d037efa22e203c3e998"
  },
  {
    "url": "assets/js/56.05edcf87.js",
    "revision": "a9b1c595c1ef56eb072601c9e0291552"
  },
  {
    "url": "assets/js/57.bc4027e9.js",
    "revision": "934353a41c063e7c8ba4c02d91ac23b0"
  },
  {
    "url": "assets/js/58.41dc8f2a.js",
    "revision": "dd480a6eab79f6e9f542fa5e26cfc50e"
  },
  {
    "url": "assets/js/59.a45b6a80.js",
    "revision": "0c9300ed86ed0c230b179f2e18e6646a"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.52a999ee.js",
    "revision": "598f150160be7d427e1e83153a76179f"
  },
  {
    "url": "assets/js/61.7a8e5218.js",
    "revision": "a677573f89ee0a817287bb868271d622"
  },
  {
    "url": "assets/js/62.508ff0bb.js",
    "revision": "34e4889e9a9c35770c804873813c1dce"
  },
  {
    "url": "assets/js/63.1f6298b5.js",
    "revision": "db46857b760e2780cd66d08c0b3a5167"
  },
  {
    "url": "assets/js/64.8fab735a.js",
    "revision": "a7b407c3180bc1f3aa41ad0cb2f3ffad"
  },
  {
    "url": "assets/js/65.a5745558.js",
    "revision": "9213d4fcb22e854627b4230d2c8982d7"
  },
  {
    "url": "assets/js/66.0f77181d.js",
    "revision": "4055c41a215e3da3dce49b7b4bab6d75"
  },
  {
    "url": "assets/js/67.6a2a5003.js",
    "revision": "8ad74c56c953baf96043dc98316ab6fb"
  },
  {
    "url": "assets/js/68.8bb2143b.js",
    "revision": "e019fffdff1c3d58d462d3a6a1938e11"
  },
  {
    "url": "assets/js/69.1b00a1ff.js",
    "revision": "56e72f12f92ca0f863444c58d31e184a"
  },
  {
    "url": "assets/js/7.28e6bdd7.js",
    "revision": "e4ccc608d22fabdc8f4c098704ec7e50"
  },
  {
    "url": "assets/js/70.e2d7235c.js",
    "revision": "473a1b3555dfb50c67b1c1d3d00bf880"
  },
  {
    "url": "assets/js/71.11998793.js",
    "revision": "b68426a3d940d3b8714b1cdc045ed23d"
  },
  {
    "url": "assets/js/72.2f6a4631.js",
    "revision": "7fac5de0340f26664b6788c26a133dbe"
  },
  {
    "url": "assets/js/73.eea20b34.js",
    "revision": "3ccbc2bfb73c832c25f278cd665be542"
  },
  {
    "url": "assets/js/74.1f99d8ca.js",
    "revision": "c62b0143a4aa43064e5990caa0ff170d"
  },
  {
    "url": "assets/js/75.0499353b.js",
    "revision": "2883794274df689c2a11bb7157ea3c9f"
  },
  {
    "url": "assets/js/76.69a315f7.js",
    "revision": "84b6519eb62bfd9488e6934c456de93b"
  },
  {
    "url": "assets/js/77.e41633a9.js",
    "revision": "28d21b1247b91f7c3ec5da944fb1ab2b"
  },
  {
    "url": "assets/js/78.fb26fac2.js",
    "revision": "bb9e84739c9ca27f67dbb2afea5133df"
  },
  {
    "url": "assets/js/79.18ed3cb4.js",
    "revision": "84536a0ab6e0e66cfb6deec7e9d0a2e7"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.c6396f17.js",
    "revision": "d597d399414142205602c22331daf4c6"
  },
  {
    "url": "assets/js/81.9074bb1e.js",
    "revision": "00c4816b5eca050d076d42c7d201498d"
  },
  {
    "url": "assets/js/82.fb476fd8.js",
    "revision": "6c0fc5698eb4170926403eb9d134fa2c"
  },
  {
    "url": "assets/js/83.0db68429.js",
    "revision": "2fbd1a12bf5d57095b81f15c3fb6d264"
  },
  {
    "url": "assets/js/84.d581ae62.js",
    "revision": "98a0427ea8a712ab7c25326e13bc26d5"
  },
  {
    "url": "assets/js/85.024b0670.js",
    "revision": "3fe107059e636531dfcd020095768741"
  },
  {
    "url": "assets/js/86.f81530b1.js",
    "revision": "e14a2787134a87b7e611da3505c81e34"
  },
  {
    "url": "assets/js/87.8a3ccf36.js",
    "revision": "ac9f84bae3cee57bba6ed8f3eb680395"
  },
  {
    "url": "assets/js/88.cd7c1ef3.js",
    "revision": "f64d20eb816d81b588cc90b7127768de"
  },
  {
    "url": "assets/js/89.f3047a45.js",
    "revision": "f2e884b0101fc621921852ddc218ba3a"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/90.151cc203.js",
    "revision": "324681fc6cf900c281aafc396738a0dc"
  },
  {
    "url": "assets/js/91.79bd7b7f.js",
    "revision": "dc5005e935483aad448bfb18f90b8084"
  },
  {
    "url": "assets/js/92.e5f57234.js",
    "revision": "6f6bf6f5f6f4ca0818ea1ef96f6ca105"
  },
  {
    "url": "assets/js/93.31af3cf7.js",
    "revision": "a7f32888e6ddac0dac7f044ac274855b"
  },
  {
    "url": "assets/js/94.d355b159.js",
    "revision": "73d7b4d0ac829db773a0d0a9e922b749"
  },
  {
    "url": "assets/js/app.dbf6a38f.js",
    "revision": "faa529430644cb99df15187bc5811be2"
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
    "url": "index.html",
    "revision": "9a53c08048a611d2bd91af69e3833057"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "de84de0133baf47dd35a5037abd74b5d"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "b9b8c057dcc6de12117689f812d4b438"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "fcfb61d62a70665a0e1781a9b549323a"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "7c1a44f7f416fe0e8e7660e67353af31"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "2606dd6cb5459c8826de60075fef02d8"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "f788d4aff1b067cd118f24de187e8c80"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "7fc838005a0784e690cde06f4e21e324"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "7c4e6660ee3a5731194862e15f5cde8c"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "4e5081586b8902d03f168efa299f4a5c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "fe9153caa64a487243366a44ca00728c"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "6587e14dc3d6549549b2a7e840c5f7b1"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "07801eb50d408f74440a24230f27c378"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "74e32b5bf33d82908e166d321007b15b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "e764daa46288e7c9295404ba93f234fd"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "70e27026c14f4075f5566841079fa013"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "37704117beec32ab70666b97f52b78e0"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "1b9958f7b4e3531abee5624afd09e942"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "f934c3f476f45967af53d7488220fc83"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "594a54ff9be77c8d2b0fd5bc4e2cff09"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "66610a185a12c5736fbc29e2a5fdcfdb"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "1253f9411071eb826dd55331b9a7fe4f"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "3806171ea1c114389ca8f968449fa50b"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "6664fc37f794f153f236d97af44102bb"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "9c31443dcc660d58b78fa96d4c0e0623"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "3e9471c68e0ec25d87cab4ef5b6f3344"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "f585aee72b9d7310f8fa45dac41de056"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "7325e678e4f4f034c37ffcc0b9f97b1a"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "d116ae290ca6fb70a9d4e75fa13dcc81"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "85629d5dd8d850fb2c73a4f53695970a"
  },
  {
    "url": "post/plan.html",
    "revision": "9cead916c605d09c13ce298a33c5abf8"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "24fb8b3a9ff22ef934a234af5d787c2e"
  },
  {
    "url": "study/english/words.html",
    "revision": "9efc6cf9c34d2a04a5192936a4964b17"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2d9083359a00a597ecd97a674c0aba45"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "ee5fc3f8728dbbfbd639eaf95e05588d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "9e8e4a74e12445a647d9a4be4de65ff8"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "20b7c3fe9c12876286933686db3e1b93"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "deadd65de02c4078e295f3f5893fafdb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2647f06c60e4cf680713772e42bb83db"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "b1e433a21366347c952cb9e9928b2dd5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6a92864eb91ad5bef2be58a8e9c01a4a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d972b8e531877b1271b697d22a429bd2"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b2abf262cf45a425a293f346cfebd86f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d9eab6d631839de0055e61ac1634c841"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9cc51e94fb3d58d5334aff6d8fe665ed"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "1e64abb9cb1bd237895e7b16e6755013"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d84445dfe41efcce50fbc4d00141670e"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "80e6fe26f25588d8cd5dd13e5ec4c9a6"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "18f05074dbaf891119de1c7feec9e393"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c68d7f0e26cd75c3223ee2add4c6cdf9"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "70019b96d96da98c7f58d7afe373ee15"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ad640c514d58fca931571463d5a784f6"
  },
  {
    "url": "task/2021511.html",
    "revision": "3c4ea0597c09097cfdd1de080dba1ea8"
  },
  {
    "url": "task/2021514.html",
    "revision": "488e92f26e2b81e5dd850cf077c9031d"
  },
  {
    "url": "task/2021515.html",
    "revision": "3268b8df5336e7c63703ed5b97b888e2"
  },
  {
    "url": "task/2021518.html",
    "revision": "e133750520f3e6bd1c42d1bf60396aea"
  },
  {
    "url": "task/2021519.html",
    "revision": "a8f256c74289c85ceb40756482ea7653"
  },
  {
    "url": "task/2021520.html",
    "revision": "b8f974c32f9686e79a95b3663264b29b"
  },
  {
    "url": "task/2021521.html",
    "revision": "e56277f4903543f4c09ddfa0ace7f00a"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c6ebd2ff238934e8ef2e10636f7a9eeb"
  },
  {
    "url": "task/2021524.html",
    "revision": "646e2d4f3be7a1308920310bfb7f1bbd"
  },
  {
    "url": "task/2021531.html",
    "revision": "2594097ed4571535b627ee1ac8d7c112"
  },
  {
    "url": "task/2021628.html",
    "revision": "0cc3522d205c57d2744df76eb281bcfa"
  },
  {
    "url": "task/202164.html",
    "revision": "b99e04d062b4edb30c33ae599a5ab093"
  },
  {
    "url": "task/202169.html",
    "revision": "b0632e74094f56265cb7a26af4d0a55a"
  },
  {
    "url": "task/2021717.html",
    "revision": "7419d8fdb2ab69f4514ad1abd5a6607c"
  },
  {
    "url": "task/2021721.html",
    "revision": "64690a05b7be14036f3298627edf0fc5"
  },
  {
    "url": "task/2021722.html",
    "revision": "223ec6abc40988f5ce6de0d613aa94d8"
  },
  {
    "url": "task/2021724.html",
    "revision": "ea5c61ec49c6a0dc2119f65b8aba051f"
  },
  {
    "url": "task/2021725.html",
    "revision": "b871d8176346654ae69b97ea5ad9ed11"
  },
  {
    "url": "task/202181.html",
    "revision": "b347deac6620b60a19b3103431a29735"
  },
  {
    "url": "task/2021811.html",
    "revision": "0a70980eb097887dbf8ff694f55d5f86"
  },
  {
    "url": "task/2021812.html",
    "revision": "f88bbe4bb545e4f6900b497b11ff23dd"
  },
  {
    "url": "task/202183.html",
    "revision": "6d50e70f4cfb4ae1f499f7fd469670c0"
  },
  {
    "url": "task/202187.html",
    "revision": "6c357c1304e6d4daa152b5fa010c45f9"
  },
  {
    "url": "task/2022218.html",
    "revision": "c189125cc95ce864e08cf4e8bc3c7439"
  },
  {
    "url": "task/2022219.html",
    "revision": "a1ce684393cfd9777cb74429eb3dcc03"
  },
  {
    "url": "task/2022222.html",
    "revision": "c0817018549a688b237a642f352413de"
  },
  {
    "url": "task/2022224.html",
    "revision": "4fadbbf0f6fa63609754eb0c5d098b70"
  },
  {
    "url": "test.html",
    "revision": "743f405dd6ec4b43a2343b1005a88b4d"
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
