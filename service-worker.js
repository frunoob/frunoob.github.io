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
    "revision": "cd60e1bc04a573440df33d59084dd1d4"
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
    "url": "assets/js/33.24af46e8.js",
    "revision": "0bfcdce1f6dd450600477299154504d3"
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
    "url": "assets/js/38.e73cdb49.js",
    "revision": "7b3e2405c57939e4579e8ad9e67454df"
  },
  {
    "url": "assets/js/39.8d8160aa.js",
    "revision": "4f50fd69747a05555985de5e5739e9c9"
  },
  {
    "url": "assets/js/4.e2ae5594.js",
    "revision": "daa88547d343034748f232ed229ad2ce"
  },
  {
    "url": "assets/js/40.af6ea9cb.js",
    "revision": "4b87cac81279fdbf86c1dfe2fef9d92e"
  },
  {
    "url": "assets/js/41.f31ce9fb.js",
    "revision": "85f3942979b71566b7fc32c61c82a6a0"
  },
  {
    "url": "assets/js/42.b0d6abda.js",
    "revision": "a143194635e4dbc529d7613cf8aa29b7"
  },
  {
    "url": "assets/js/43.1de7d640.js",
    "revision": "a6299f9fb5de4060a364fa9d3b16ec11"
  },
  {
    "url": "assets/js/44.d270829c.js",
    "revision": "f809b6b9db94fca753f82c3c9dfde05e"
  },
  {
    "url": "assets/js/45.b41fe583.js",
    "revision": "e1ddfc2077e454969db01456a07a713e"
  },
  {
    "url": "assets/js/46.b8d123ba.js",
    "revision": "55036d6f65689064614f6620fb4ef252"
  },
  {
    "url": "assets/js/47.0e3c0766.js",
    "revision": "2e0ba696959e110a83457a70e75874f0"
  },
  {
    "url": "assets/js/48.1db50f77.js",
    "revision": "cbd4c20875e5c56bc6cf078abb972f71"
  },
  {
    "url": "assets/js/49.c6e9d413.js",
    "revision": "04cf9fe5ccead5eda11670e1c82a8952"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.fab84c59.js",
    "revision": "605bad2e8529e64ee0f762cbfd0a60b5"
  },
  {
    "url": "assets/js/51.975d55a9.js",
    "revision": "23546324a1b6cf6206983e24887eceac"
  },
  {
    "url": "assets/js/52.262e7ee9.js",
    "revision": "16a6fa6f39ee722cd3c55d9eb2b70ee1"
  },
  {
    "url": "assets/js/53.d00754b2.js",
    "revision": "d6b21e38c83387445209de3068f30d85"
  },
  {
    "url": "assets/js/54.29386e0f.js",
    "revision": "7613a1ad70795dc8e306e4d1cc2014cc"
  },
  {
    "url": "assets/js/55.b939acc2.js",
    "revision": "92816b09a71b851d36cef545736d298f"
  },
  {
    "url": "assets/js/56.cab95f7c.js",
    "revision": "ace02ce1249fa15966638f0d4f3cfa20"
  },
  {
    "url": "assets/js/57.a160077d.js",
    "revision": "2a16ed988784195cf91868d981970367"
  },
  {
    "url": "assets/js/58.9e0dd2dc.js",
    "revision": "02cc4ec2c97392fca4dff6deecd0083c"
  },
  {
    "url": "assets/js/59.bcbd5e79.js",
    "revision": "c3b730d6b3b291bb1807731b5eca61af"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.a8e5a0d2.js",
    "revision": "88fca6439d64613d5557135f2219cab1"
  },
  {
    "url": "assets/js/61.038311fa.js",
    "revision": "1ec97bffad8d3b7c167eb572b290c948"
  },
  {
    "url": "assets/js/62.d67c0a59.js",
    "revision": "0b36402e0e4a7027d60b9e61189ab309"
  },
  {
    "url": "assets/js/63.60447f6d.js",
    "revision": "16c0a213e64cf6a0b3a9b9110bbf01d9"
  },
  {
    "url": "assets/js/64.bd1a613f.js",
    "revision": "4ddf4121ee2acbf043b583cc3abcc4f3"
  },
  {
    "url": "assets/js/65.0d7d38c5.js",
    "revision": "7d5b8cdecf92cd8065ede4909df98827"
  },
  {
    "url": "assets/js/66.c7a9a5e7.js",
    "revision": "2b943dda5811b2cc325630d2c3dde185"
  },
  {
    "url": "assets/js/67.5597005d.js",
    "revision": "0fd82302900c97d264e3cd45f53b24c1"
  },
  {
    "url": "assets/js/68.4b168940.js",
    "revision": "3429801a027323a2d9b2d240e7181ff2"
  },
  {
    "url": "assets/js/69.44db0a95.js",
    "revision": "34fbfe246186f46166c4aa37501371b4"
  },
  {
    "url": "assets/js/7.75d9b65a.js",
    "revision": "c3c3bcc1a6177fa778a2bffd95a7ce9a"
  },
  {
    "url": "assets/js/70.a26ddcda.js",
    "revision": "3817baa8a1da715190d55e040dcf8d93"
  },
  {
    "url": "assets/js/71.f0443a7e.js",
    "revision": "66b789d8d6a414a2ca9992730ca265ed"
  },
  {
    "url": "assets/js/72.052c2d42.js",
    "revision": "5c4d53d2449936d54851501383caf8a8"
  },
  {
    "url": "assets/js/73.13cb651a.js",
    "revision": "9e9f9ecaf331f0ecf091eae31f1b117f"
  },
  {
    "url": "assets/js/74.a0c8cd6d.js",
    "revision": "c498dbff1ebd68930f0ab3db1f5dc089"
  },
  {
    "url": "assets/js/75.06274b55.js",
    "revision": "2de47810bf1f694c4504a8c96e10e600"
  },
  {
    "url": "assets/js/76.52f9bf2b.js",
    "revision": "b392b4d399bed16526740dbcbbe1b11b"
  },
  {
    "url": "assets/js/77.d5099cd7.js",
    "revision": "e9ab612a703aaf1f1e1e39f0f5d385ca"
  },
  {
    "url": "assets/js/78.4c75862f.js",
    "revision": "8fdc3b0fe2d877cb70b7e8b3648ce13f"
  },
  {
    "url": "assets/js/79.c17116e2.js",
    "revision": "22ce6ca6fb5ea3252d3e835520caaca3"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.90348fa3.js",
    "revision": "36b3e77618106c795357c66db5d78ed3"
  },
  {
    "url": "assets/js/81.8a00380a.js",
    "revision": "20a8604dedca73ddff01e109a06edcee"
  },
  {
    "url": "assets/js/82.3d78fed5.js",
    "revision": "6f5e24531e7bacc27440405d25b5766e"
  },
  {
    "url": "assets/js/83.c2600ff9.js",
    "revision": "8a789743c8c4a5d117e644a561810890"
  },
  {
    "url": "assets/js/84.5f19932c.js",
    "revision": "7913129294576247fabfd73254ce4b39"
  },
  {
    "url": "assets/js/85.f59363fd.js",
    "revision": "958cd1d18f1855349cabb82d0e4232e5"
  },
  {
    "url": "assets/js/86.102728a1.js",
    "revision": "0bd8175f5bc294bf8b3a22536f6736ab"
  },
  {
    "url": "assets/js/87.4ef37bcf.js",
    "revision": "59849b52ba8ec773aa21ed76fd94ec83"
  },
  {
    "url": "assets/js/88.08af6089.js",
    "revision": "64f43fc23e6fb3725e4bf5fcc5d32159"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/app.cf20da6c.js",
    "revision": "bb5e586cbd14bc6bdfe4d063c5a9c146"
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
    "revision": "2a965423a3ed49224e5f5bca4218f73a"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "21b3f3637d748bc123b460fa6498328e"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "47414236a388862381eccb2afcc24efd"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "7b850e50e3ea7e3a4fda5a5811a056b5"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "9199d73e15ae2ea741f8cbbb1c27d20b"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "76c15b8a7ee27e92ee6abdea37e97ad0"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "388e772abeaf95d335f44f905d1e7286"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "3efa4662581f2430e1313aebe75928d9"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "556ff08604cd5c4d7b80a1532b96171b"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "db44872e4152020e2190cfc2db075e58"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "5697e0783238f90af76db1230b21cbc2"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "96103efb83ad76f68cfa590eddb5f100"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "215857426fda7d20f40220805f32e407"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "9c6c81132b8a040b1036334137241555"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "0e59c00d6320953390ba1b62d773a0b1"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "0ef193b58a00eed84ce3881d14c08d4f"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "6c920e597868c76cddbef56259c6c53e"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "a088ef784f4a152f65ec991ee69eba74"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "922e616c98af61bc2f9670997e3f5657"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "eb5dd2c2f987fc11558023acf81fdd6b"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "bd12fbe525629b2cb44c2bb701a85778"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "cb79c97fa4d1a3b4c3d264a773301d3a"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "91f763b2ebe040117ced8b37572a1ad1"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "2d9aa9815a72c8432ded544fee9a7846"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "aa4b77be854a4814c6062b26209d04cf"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "a1e4a7f0c073d07dbe0011565d873f1d"
  },
  {
    "url": "post/plan.html",
    "revision": "b23c3116fe508c0dc9c624f3328b5514"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "62f975b222f8c3dfed91da86f1b52a8a"
  },
  {
    "url": "study/english/words.html",
    "revision": "6683c1f033ddb795c953cca6eee051c9"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "ba36f0c75b3da431e270d6aff9d0b8bb"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "16ccbadaa0555c3271e23b7bd9a11d6b"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4cbb229309c05f3440d8826531411490"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "726c4b488564eff2861bd70e042e6f20"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e27c1b7bffce903ebd53a6a8aec23f51"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "99cc78090ec7ff0f6a970ef4f7af7ad9"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "362ae5ac26ebb81a2c66ab7fffef8367"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "0ea85066f8e6ee6af6ef7ba30c39bf36"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "81a26257f1314a5c5320e1c964470ecd"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "93380b6ace3d0fd8ddabf16a69bc76cf"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "acc43828dab529a396f3670c1a74b666"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "941ee28c88d17383b224ea1d0f5d4b30"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "678b6294ed5583b8d4e0e6cd1e596ab2"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "a89cfa91843ebf05b0c7a73b59a8fe06"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "8ef7c50e75b3f71a7a359bed1fbfdd32"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "1c132a52f9f95bb57c8129e93cf53934"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1c27aacd5dcc448e1b63c7d8bb035aeb"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "6ce28ab8bdc4300bb6f1548840cfc824"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f401e0098cd624e84a61808528189566"
  },
  {
    "url": "task/2021511.html",
    "revision": "7473bbc39d92f8108415ebd1907cff45"
  },
  {
    "url": "task/2021514.html",
    "revision": "1822daee9077e851a882ef1a86f7e8c0"
  },
  {
    "url": "task/2021515.html",
    "revision": "46324474c7a0066f56dc0ac3c3b84c17"
  },
  {
    "url": "task/2021518.html",
    "revision": "7d2809729858c20674c5ec4723c2ed32"
  },
  {
    "url": "task/2021519.html",
    "revision": "bb44f40ccc6990f0a5b934b6cb45f56c"
  },
  {
    "url": "task/2021520.html",
    "revision": "7690b895515caa166757aa8b0958996a"
  },
  {
    "url": "task/2021521.html",
    "revision": "b0a038fb97735e01753f86f6eb657a3e"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "daa82798a3048b2a0c4b34d7b2dd6d1c"
  },
  {
    "url": "task/2021524.html",
    "revision": "d2603248aa907c532857c12e40f0e421"
  },
  {
    "url": "task/2021531.html",
    "revision": "423616284a26d32dbf017764210f9d93"
  },
  {
    "url": "task/2021628.html",
    "revision": "ee186a22ecae4c1297d65fb3344cfe02"
  },
  {
    "url": "task/202164.html",
    "revision": "cf7c2e13639923e2ced990e1241e7205"
  },
  {
    "url": "task/202169.html",
    "revision": "e75fcaed9fcaa56337a8592c83d7b3f9"
  },
  {
    "url": "task/2021717.html",
    "revision": "ef94a9e996ddbc4d069f2844597b76f2"
  },
  {
    "url": "task/2021721.html",
    "revision": "84b09a4c7e04ddf2fab5069c4dcd861c"
  },
  {
    "url": "task/2021722.html",
    "revision": "10510b6f542a769989cebfe24f1a2270"
  },
  {
    "url": "task/2021724.html",
    "revision": "fe9731450af08b4bd3cfe5003887e7eb"
  },
  {
    "url": "task/2021725.html",
    "revision": "95b75503ca682e88645f66eb59fdf9d5"
  },
  {
    "url": "task/202181.html",
    "revision": "6a6c08446231b7629e166abcfddda4f0"
  },
  {
    "url": "task/2021811.html",
    "revision": "1e34aac629a3b7374f0b4cbd4d8e2df7"
  },
  {
    "url": "task/2021812.html",
    "revision": "c55a9ef3be46612e9019e13b129ab919"
  },
  {
    "url": "task/202183.html",
    "revision": "decfd297a29d9528339cf2fbb581c8aa"
  },
  {
    "url": "task/202187.html",
    "revision": "a254a007209afa8b847bbcd04ab4737f"
  },
  {
    "url": "task/2022218.html",
    "revision": "da820ed767b1a2b16a6c2eeb97fdbbeb"
  },
  {
    "url": "task/2022219.html",
    "revision": "f7740f53e974f91bc5473ef9ca409210"
  },
  {
    "url": "test.html",
    "revision": "155c78c60db93961c2a8fe83f7c22939"
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
