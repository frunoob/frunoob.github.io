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
    "revision": "4b4abf8d5750c86a5c8fee6cdf4e7052"
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
    "url": "assets/js/42.1b13ba21.js",
    "revision": "25e88d199fc0c940f901b2a4e1561407"
  },
  {
    "url": "assets/js/43.1fcf62e1.js",
    "revision": "8ebbf04a7608d5631c6966f08ea86dd9"
  },
  {
    "url": "assets/js/44.825e4a7c.js",
    "revision": "13b8367173a707ae428af4b0980bcf54"
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
    "url": "assets/js/7.836221c7.js",
    "revision": "4332a0e222dbfbdcf97788eaa6d16e87"
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
    "url": "assets/js/92.a73c7ce5.js",
    "revision": "8b7aa39e289c7662ee621b82fbf23e1b"
  },
  {
    "url": "assets/js/93.421dd1e9.js",
    "revision": "d27b4729719ecea64f54aa2b9a8088e8"
  },
  {
    "url": "assets/js/app.3d36b7e5.js",
    "revision": "86d4b46864f7d487152980b374ea6fce"
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
    "revision": "105e1e18b62f52c3b394ce30ca8f2265"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "1e1c4898dbacfb5175109cea1d58beab"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "202a67f5654cdd782fe396a9157b7db2"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "07924ecdacd88c4642142b35f665d9f7"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "8b9a7fba82abe91aa353fbdde895fae2"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "ee78cbe73021ec8d2cb3846991abccb4"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d4039757009f1ab4ac07ef15082e3de9"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "792a6480781120ae9125e50a9247a15a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "c86fbf64e64335d620af5f2d9fd60f1e"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "b21d844d0de671e9b05350a829d90869"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "c996c8865beb457452c4fce38f26078f"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "a0673c002f1e2c62aa0c206bd2f48ae2"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "364b6c5d2905c14e8f0b1fe1b7552ba2"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "844c883e6e5d8e320cc6f59bcc0f9a7d"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "b5affe4e9900a58b3e47dfc45b85f8d7"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "ccf88ec2395214a29ae6670a52d792ef"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "daad3cb17b76a4cc71aa7f66b27b9b1b"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "4ebd256afd33115c926e42a5a41ac1d9"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "376f24fcae140d041ac3f2a682eb0fe6"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "83aeff4b7ee629a656f0562113869325"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "ce848c7754fd3d6663abe9f1b3ca8442"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "74a1d411f7ad53f2cea752691396bf31"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "14c3c2aa2bdf495237414cbdab58450b"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "4b7780bbbfe3bdfcbb0d6a80f3402a92"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "7d2c4d24749f865c0872cbafaeb8f59d"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "47afdc93eee2830ec6e7bc6549304ed5"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "768a14b6106c915ced63f5bf4b63c4ff"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "7c3bc631f5393b7afd174bc8c837f43a"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "376e9ef7c40bf0398d8c229cd4fac67f"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "ceeb22605a33f73222c6f70d8f7e7780"
  },
  {
    "url": "post/plan.html",
    "revision": "0f2de61adda44430386665f89b8f86af"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e6052f8e5aba13ac2c87581612b4e400"
  },
  {
    "url": "study/english/words.html",
    "revision": "27f91c89386ea7c2c8dad1e96706a430"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "bda36a77e9df66e66cc356e95857966a"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4d9374627650bae5730e3f6629beea67"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5d8416629ab89e29ff60ac65d79d3f55"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3876a257728c5c147bb7837f8951c8ac"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3c46706f159fceba5605cceb6cff93b1"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d067fc38907c602a1ea0b9a0d2aa63d9"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "a0d51b25826a34952981945be0ed0b57"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "95b849445e89bbd7ac339a77eee9a4c1"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8edc4486874e4bc7e3b03cf00a456f69"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "d372103f1a2bae9f40c7e886121dfce3"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "7a3a32506663e6e739e64e1ed7a46f02"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9fc6a5891af15c2b273696f68a370307"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "007e3558cc6eab7f55681911f7b04ccc"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b8556a6206de0b45a5557b604486d761"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "96695839be90063db88b6ce31b10a6a8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "207bcd4a651380ce389e4f6a8fb1e5a8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "206ee81ac5eca5f9573405b3a59ce3fd"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "cea83efda518dab9e3f2184f0b2ef874"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "b9079c2000a06cfd02dec850fd08f8fb"
  },
  {
    "url": "task/2021511.html",
    "revision": "c6492603f14264b8511eec4709d5e0ef"
  },
  {
    "url": "task/2021514.html",
    "revision": "86b4cb47c31e7407e0bc23c4dc2fb8bd"
  },
  {
    "url": "task/2021515.html",
    "revision": "1bf380c4a8d1696d8b1bb535f8a9c856"
  },
  {
    "url": "task/2021518.html",
    "revision": "5d1f3f458966abbc217930f05997ec85"
  },
  {
    "url": "task/2021519.html",
    "revision": "c98c3a76f1e574747b56b38a58eb7219"
  },
  {
    "url": "task/2021520.html",
    "revision": "99ec24c9a7079935fd68421d50d6ff1e"
  },
  {
    "url": "task/2021521.html",
    "revision": "2dbde632a70d2db53f5df29e3c677e0f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "0a97d14f1a18fabd3e719fa40d3b7ca4"
  },
  {
    "url": "task/2021524.html",
    "revision": "42bdc4925b94e9ea7eb8caafa9d8852d"
  },
  {
    "url": "task/2021531.html",
    "revision": "7b1be33fd298cc688351f89f3227a725"
  },
  {
    "url": "task/2021628.html",
    "revision": "d556c1ea68c2fe0a87437a2372275a94"
  },
  {
    "url": "task/202164.html",
    "revision": "4e94b774a846ead17163c7e9d03f6b6f"
  },
  {
    "url": "task/202169.html",
    "revision": "da31f8913664c220800955d58a5ae6d2"
  },
  {
    "url": "task/2021717.html",
    "revision": "ac1047fcd7d9bf49cdf2b15a838c9e47"
  },
  {
    "url": "task/2021721.html",
    "revision": "f5f63275ce0bb18c26a8d90f3df24ba5"
  },
  {
    "url": "task/2021722.html",
    "revision": "5a0ff5aee06789618e8f07f844d71d25"
  },
  {
    "url": "task/2021724.html",
    "revision": "1b1ac847dec4836a123a9e04875220ed"
  },
  {
    "url": "task/2021725.html",
    "revision": "12bf935d37392cf05f40683890f60d00"
  },
  {
    "url": "task/202181.html",
    "revision": "7e93f750d04c322cc50764c9b26bfb49"
  },
  {
    "url": "task/2021811.html",
    "revision": "951555209bea5d815a05a656ed6388b0"
  },
  {
    "url": "task/2021812.html",
    "revision": "e2558a5a5f18de8130bdf4368ebf279a"
  },
  {
    "url": "task/202183.html",
    "revision": "d4699095017f28a6ab6b8755e4d4256e"
  },
  {
    "url": "task/202187.html",
    "revision": "3bc9219b375b97ad1135ccde6a09ac77"
  },
  {
    "url": "task/2022218.html",
    "revision": "01b45e0de0bec9a6d1cc004d0ec6d15f"
  },
  {
    "url": "task/2022219.html",
    "revision": "5f4d131cdbf1be0abcd8b81323964ce2"
  },
  {
    "url": "task/2022222.html",
    "revision": "16fa82ec08adceeb9db0e6828726c8d3"
  },
  {
    "url": "test.html",
    "revision": "90e52e80cb0fa2fbe98f6d7b6f05002f"
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
