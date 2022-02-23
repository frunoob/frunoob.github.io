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
    "revision": "1f35ed883425501f1f6d33057ad95f16"
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
    "url": "assets/js/app.971c7768.js",
    "revision": "5439ea897ce24131579bf3bf16a8eaf0"
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
    "revision": "706aa4665ff4d5cdb51de5bb2ab18978"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "41b4246430e180cc5f8ce49b60dc3365"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e02aa354228ac93dc35eecf9ba4bc32d"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "4a7df9a6fd8d315c5213e71f44c5b43e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "5667cb966f19c5820b61374fb521b796"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "2c747c2d6d331fb332a6a0dc7ba7640c"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "a5f93aa26a7bf68a4f0c8bef6873a2c6"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "ed7d37e5e3f886c561fcd5f24a7bf67f"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "127b939ebe4c982dff4341bc57682c2a"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "8d4bfbdc86ea97f8a70a0e36bc1aafb3"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "c5423fbb90039777ec487388e591d64f"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "72f398707bcca322cdc0042f99765335"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "54a64cde019571fa65c01c1e04f3211d"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "5ee61c7e8d035d687a57757f93f6592b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "f970860a6ff3f36b45516447c13ef409"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "b075503e580b83526be46e2dfe42191d"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "a2c56d1a34adce524a8a59d243f3d05e"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "c2f52b8404830322953f78deab47d917"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "aaf4b2922ff00bd160fbf5dfee02274c"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "932d0f7b6beb87f1eea1cefbaa925406"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "5e7b835d20f149c281af57498ad5fcae"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "4078145e7caedbe75e51972629376b6c"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "ff0038711379988e6843490d372134e6"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "2807de906c29c49592852fecc1b02f5d"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "6abd200905f2393cfc292a40a6a82bac"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "feb5d4cb05fc5a62f52da44855f5e75d"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "5c84fd32da0c29a86b600379cab589e7"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "421a39ee7ae41ecb62db8ab1ef0d4c08"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "9d4c0bf6b6495f258022331eac6d348c"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "ed8af709de707d62cd2542820292ee83"
  },
  {
    "url": "post/plan.html",
    "revision": "7831a1d81e2b1bd43e0893d504c7abf8"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6025dc3985c42b8294e8e2ebc9239627"
  },
  {
    "url": "study/english/words.html",
    "revision": "7cdbdfec3562ffa894f79870a54b65e2"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c9b8a900ad94c10da332651a6bea6cd1"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "1a989c2729dd877ec97f39e2515156ef"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8b526505c3fad4b0c534195c32ab2b9a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "5942c38b60a53b8c115bbce5e65f37f5"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "df25af90e9f19c21011aad0c8495a75b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "e23fb5637fa69be825cb750bd9c6ef65"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "dcf3fad3efd5b78895dc0190926e98f8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "3934407227cf759928e494d48c9b9e86"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "054e6144f4bbf7ccbcafa989170da3fa"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "fd84de7e8f257d4faf277d36d749130d"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "22c9537c5af07d66cd71f3af3e5766a7"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "68ebf5b93736531a5a24d6a300b0ccd9"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ebb9db91cab3ed78441d4fcc43fcded4"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5c0cc39a9755b66c734b261532671149"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3883ea00ab73b6f35f61b86e5c07a00f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7c26d3b2c3a565dff1cc47f63c0eaee0"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b27567a21dc7bff83dead0b4ba5f9965"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "67eb96521d489c8023f64e19726b5387"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9be0c43e6f9a5abd8332495158bea3e3"
  },
  {
    "url": "task/2021511.html",
    "revision": "12ac49b36c0593b7ed6d3fd23bb24933"
  },
  {
    "url": "task/2021514.html",
    "revision": "3c92beed70a0ce10cf5ef660ced064a3"
  },
  {
    "url": "task/2021515.html",
    "revision": "93da56e1ced544b2cd500a5005d04386"
  },
  {
    "url": "task/2021518.html",
    "revision": "950156dbb5eb96c33bf37b97798428e1"
  },
  {
    "url": "task/2021519.html",
    "revision": "f8d1569c5af816b30f2591ca3f06650a"
  },
  {
    "url": "task/2021520.html",
    "revision": "757fb0d502936628c6020e7bda1ea3fc"
  },
  {
    "url": "task/2021521.html",
    "revision": "8501f30a13bb811c968865867c611bdf"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "10ed6f749224528bb08a41d3fbcd5883"
  },
  {
    "url": "task/2021524.html",
    "revision": "7a7b9a90d792b6499f8a5abecf4a12fc"
  },
  {
    "url": "task/2021531.html",
    "revision": "7398ef04919f22ff650093f1c3564610"
  },
  {
    "url": "task/2021628.html",
    "revision": "8f7c268433f6edff79a65bf78c4f5c53"
  },
  {
    "url": "task/202164.html",
    "revision": "bcf0716019d8086eb66546625b8538e9"
  },
  {
    "url": "task/202169.html",
    "revision": "6d47abd98972a79917c62c99657e6c9e"
  },
  {
    "url": "task/2021717.html",
    "revision": "ffbcc72e842a4824b2c160f64807fcda"
  },
  {
    "url": "task/2021721.html",
    "revision": "63c9d85f66c2f0a64a4b69e3e2ae8cc0"
  },
  {
    "url": "task/2021722.html",
    "revision": "255c4ada8985347c2779c4abebdafde4"
  },
  {
    "url": "task/2021724.html",
    "revision": "e6e29b2e14bb28221e0d61aa8f808bed"
  },
  {
    "url": "task/2021725.html",
    "revision": "ff580210787acf4f50c134fc1817fe48"
  },
  {
    "url": "task/202181.html",
    "revision": "e4108510811812ba62a953123f53ff10"
  },
  {
    "url": "task/2021811.html",
    "revision": "11c026f88f67b7f0943cb98af47bceac"
  },
  {
    "url": "task/2021812.html",
    "revision": "32a73836c17132bbddf1f2a6d9c88b8e"
  },
  {
    "url": "task/202183.html",
    "revision": "467e7950bdd6aa69ea1c51c7db501ed5"
  },
  {
    "url": "task/202187.html",
    "revision": "90c7e30bd37b9ccd6c81e6518922cc1b"
  },
  {
    "url": "task/2022218.html",
    "revision": "634964265d8280802721720e13b4163e"
  },
  {
    "url": "task/2022219.html",
    "revision": "1e85e239160e6ef84feab1e0f7a9421b"
  },
  {
    "url": "task/2022222.html",
    "revision": "660ba07b534b8682f092142561ea8341"
  },
  {
    "url": "test.html",
    "revision": "ffe28cf5b36da82660fa929ce9d6d8ac"
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
