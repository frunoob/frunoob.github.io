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
    "revision": "e9b97035feee2ec097f738ddf75541c9"
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
    "url": "assets/js/app.d5b0ed1d.js",
    "revision": "1f6a59676ac2ef2904575d554f0a9b3a"
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
    "revision": "61b7ff52e7ce1577eba2af6a3eae0970"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "2dd6e90994b13a57f56bdbb3cdc2c071"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f293dc4fa736b4a0ca082a9f134066dd"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f3a9797be2841cbb32209cfaee5cd864"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b153da85807dacd1548e16cdb63bf670"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "29a3fb1b9b7249fcf6b61eed19d4f7bf"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "5e51b0143a77bcff7d3086d89e7863a3"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "8f8948d422b56f985b57ce8f3e4d3866"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "9f932cb0be5088a473545ab2df41d4fa"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "4a25380535a9c78d1b047d4e32fc0fc7"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "00886b6fc4a59ae9751492e62aed9cc4"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "6ffe5f83e1c11b2ed0d9202a1d670a79"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "830aef4f1dc70609f1ff26f64994bdbd"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "89f08154e911048de707b8cd1cca03d1"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a59e234cff841561de62b8d02601be8b"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "227715e27047a3a0721f3fa6d64a80d5"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "4723b9427ffbcb4c58723d3a07af5480"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "1cee8b18d4c2c808ec5ee4a7e6b39634"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "72652967080120ad0aa51b1420e215a7"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "4d91e471b7aa5e15d1cd9ff74f5b718a"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "6a1e84f2df8e84b53aad65dc321700fd"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "ea5ae4f0932bbd946f58daf5bab7d161"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "2b2d0b5734d2f239ba5db0180fe45fd8"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "f11822c8d0f19c7d2c15e269b5800410"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "4981d0203fc1507412b3c2ad83f28fbc"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "dec70fc582bcf2a970d2e390916b3777"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "63fce3785f887be878a3e14ebb546ff8"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "493a3ca496c24111f5eb05400b9640b5"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "89edb0b92c42021e676c24dbcef7a019"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "3fbd982ef1d4e49a8f1e95346db6e604"
  },
  {
    "url": "post/plan.html",
    "revision": "f17587ef405d3cf841e76d2211df79aa"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "fb38678530a2a410fa31417a346ddd7a"
  },
  {
    "url": "study/english/words.html",
    "revision": "94d47b706b670ea7cd994ad029bcf945"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2b64cde415adfab48bd0ce4e24eaf7ed"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "30ec41641c1188781574a6ba5522f9dd"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ab2bb495d05c73a54a797a53c114900d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3906148a9f8d54d58830565b79a9f23d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "800b4c1b76767b68cbeedb155a06b3a0"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ec5d9a214b62a46ad51aa95cade1ec23"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "12a984ef2075577472e150f1e5016e55"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f186d416a04a93e3a8053546d42088ae"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "b1c351e99d13067840e8ab0e36e04473"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "622b66c7ebab1cb5fda5e3a6a5bfab0e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "09a980b01d78af0fa5932d3693df3337"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f55fe8c1aee706e56f622ca23fc51bf4"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "d8baf30a8de39ebf573cbde9aceedaf7"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "755d4356ee65ab81a64eb34307ae0988"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "9a2bf941702e74fb72310003ebc7672f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7df170eac7f59dd1fcc7864184b85a42"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "afb3ab862fde81578b9d700b8b5e53a6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9c2d5a131e296a19bb06257cc442dd59"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6ed6a29414a5e0be079b44cb9d525cc1"
  },
  {
    "url": "task/2021511.html",
    "revision": "dbbc20fa2c4d4afa638e281d9dafa358"
  },
  {
    "url": "task/2021514.html",
    "revision": "9d414260d068a4488fc9175146bdadcb"
  },
  {
    "url": "task/2021515.html",
    "revision": "b4400e84e05caa2a74e87889e098077d"
  },
  {
    "url": "task/2021518.html",
    "revision": "f5b34033fff8fc42b9ec66ac06a1454b"
  },
  {
    "url": "task/2021519.html",
    "revision": "5dcf8ca426826a7890a51abe4dd236da"
  },
  {
    "url": "task/2021520.html",
    "revision": "8f75cecc53ef939356b3b2ad0927df19"
  },
  {
    "url": "task/2021521.html",
    "revision": "4b830dfa1b7162dd092be639fd266375"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "2130b908c3029019eed5acf58b8eafd5"
  },
  {
    "url": "task/2021524.html",
    "revision": "877d519c223caed043f99b88810d24c5"
  },
  {
    "url": "task/2021531.html",
    "revision": "6c838bb2087daa0aeb2409b08ecb0b6b"
  },
  {
    "url": "task/2021628.html",
    "revision": "8df9ee430431bc8dcf78808901e70197"
  },
  {
    "url": "task/202164.html",
    "revision": "a39c0fa095bb5f7c77cd29d712142e46"
  },
  {
    "url": "task/202169.html",
    "revision": "69f25fffbbdb59999918718351c509b2"
  },
  {
    "url": "task/2021717.html",
    "revision": "450462ff9bf4a4a784dd73302ec7ac47"
  },
  {
    "url": "task/2021721.html",
    "revision": "162e8f8d02fa3b92781cd77e8877e7a2"
  },
  {
    "url": "task/2021722.html",
    "revision": "0df503e5a83b5d9e70ce48206f160d73"
  },
  {
    "url": "task/2021724.html",
    "revision": "d8fc38aa3928931c6682fe0fb369e446"
  },
  {
    "url": "task/2021725.html",
    "revision": "0c1a3c62b1487125a6eca411cdcf3fc2"
  },
  {
    "url": "task/202181.html",
    "revision": "57e47bd7be15891001119d2b6e8855bb"
  },
  {
    "url": "task/2021811.html",
    "revision": "02d575d1d745cc9be37af2c77bd1b610"
  },
  {
    "url": "task/2021812.html",
    "revision": "7bc131e70374927b5276067214a1e876"
  },
  {
    "url": "task/202183.html",
    "revision": "b3dfa8afee7d937faedb483ed06e55d0"
  },
  {
    "url": "task/202187.html",
    "revision": "388620aa19ef003ffa1218bf0e35c2ee"
  },
  {
    "url": "task/2022218.html",
    "revision": "3c2a196b46e959b8ea0b747f497216d0"
  },
  {
    "url": "task/2022219.html",
    "revision": "a7c0e44d740ad6d1336edee0b888e687"
  },
  {
    "url": "task/2022222.html",
    "revision": "0cf502717a75c8faa3965f6b37182eb0"
  },
  {
    "url": "task/2022224.html",
    "revision": "30b484d6d3b2918f209edfb0af894b2c"
  },
  {
    "url": "test.html",
    "revision": "1f55695e562db1e047c62513809abe97"
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
