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
    "revision": "983c919d60a9afb149b19e5819f45e0c"
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
    "url": "assets/js/38.ea0391ce.js",
    "revision": "c2740814c7038adac1637a1120186b7e"
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
    "url": "assets/js/app.5c455dd7.js",
    "revision": "5355a691899c8c17f3db8cbf4ae0046d"
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
    "revision": "e50489eda576f5d56238e7641ec02e95"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "384da07913385ae74f5129bac01f987a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "d49205f8ded3e17417dba942cc3c38e9"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "9923f62b72c3253b2c84846dd9c9f107"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "3ed0804af50f3102f9332098d465f287"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "dcc59030066d5a79497544a7b39c8a02"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "0fcd7d960a618f25170aeb9fb83bb949"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "2c2c5834374947645eb734e915bd3338"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "2da337f7ef6e1766ac2b5933dc4552c5"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "71112367c96fe18860c585b696fe185d"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "807000cf976bdd57dd23266f2ef0da20"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "b23921eb993498288975478e77f4d07b"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "91a047492318d14c9dcdf86d3843406e"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "e608d2b2790f0f0e72a1c96b72b1692d"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "f8275739d401b13e884509ef1f9b4361"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "1a16df465465d886a5dbce20798e8777"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "78864808863d0561f6c6ae4b217f8a64"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "60baacdd0f0faa839259f0998553fb34"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "ae7ac3e8c6234e0659f9884696eb7ad3"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "a0a4b676db704b554f681179d4187eb5"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "fd418b593dfe27879e862646c76d6f7f"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "1c6a3d4cbbbe701257644ad1f04d2f40"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "af8cdcf66cf4ae5b8e06d424180d6511"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "c7edefcf0db17017f3937c50810ea3cb"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "3ac2cfa96875e9d61266c95c0a7df4c7"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "3709e3a5ef8da2d858804f62cfeaefcd"
  },
  {
    "url": "post/plan.html",
    "revision": "57cb8fa7cae030e3f2d8d9933d01ad22"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "86c0e1f74b2e0170bc6ba01139878ccb"
  },
  {
    "url": "study/english/words.html",
    "revision": "0ef118b7704b18f3048d20ccd8b7a21d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "05358e2712b76ba5f94fdd1ded5a35be"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a92a13f58e8cd7a0ff3431615a1e52b2"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "713ac7f584d9bf176a839150540a9cb9"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a425b958ad307e6c1b97c73f8f070954"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "4bcb7cb03acf78b039d3398dc9737181"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d88ee010d0b98f007aa5c8970b4cab0d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "13f724a85487d00a33b45a086da4a704"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f13d89dc1e42a27bec59e7d8c8a254db"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a9a92467a0a9a9156ab1c69bc6dd969c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "52e3e1202ec3c2da7cb5a6a5e07d9164"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "faf0fa988496ce685f509a23e2b1364f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "0973e7b1329857f7f430ddc7873f947f"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5d321650ca241c7ca7b50f39ffe33e81"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "50210eb7b517977f1c948161c1fd2ac6"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c25f75ade5790f4454250282fc03f8b5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0ecf6209fd5031c391a9b7b2fd957246"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c3eaf78fd2cd0ea44a8e00e2ecef4df6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "67df7c6cee6918479d4d6a8edcad9b4d"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ed63e4bfcdb6e92bdf9db90f223abdf8"
  },
  {
    "url": "task/2021511.html",
    "revision": "b30bbaf6d24f36911696f60b29a7d80e"
  },
  {
    "url": "task/2021514.html",
    "revision": "870f451501e972a00f6674ed78372943"
  },
  {
    "url": "task/2021515.html",
    "revision": "89238d90ecb6aaec67dd242adbb2acff"
  },
  {
    "url": "task/2021518.html",
    "revision": "04a2a6b509e003f70aec83ef7ea2435e"
  },
  {
    "url": "task/2021519.html",
    "revision": "8bf8875c52ecd96594552f0e3a2710d4"
  },
  {
    "url": "task/2021520.html",
    "revision": "7eb23ebd534ae8fcbda1b0780d86a4d1"
  },
  {
    "url": "task/2021521.html",
    "revision": "d8233784c3587ebd93bbf17728a83721"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8fd902096672d17ea5d4f7be94afc562"
  },
  {
    "url": "task/2021524.html",
    "revision": "054d3d2fe4521c025d3de18bb9c5278b"
  },
  {
    "url": "task/2021531.html",
    "revision": "cd8d97f2d334a25a7fa2c3da3896224f"
  },
  {
    "url": "task/2021628.html",
    "revision": "9904f06ffe0fc719670710bce4139bb7"
  },
  {
    "url": "task/202164.html",
    "revision": "672bb1a5c41330fb8f598944ff39d6fe"
  },
  {
    "url": "task/202169.html",
    "revision": "9e5afc1809a05a3e8d9d15f87b5ae8ac"
  },
  {
    "url": "task/2021717.html",
    "revision": "efd72c5b0926cafb5d6fcf008e41656d"
  },
  {
    "url": "task/2021721.html",
    "revision": "27d04db73044c127432228bd564591e9"
  },
  {
    "url": "task/2021722.html",
    "revision": "00eb65cd9abf9708de505d52841af7c9"
  },
  {
    "url": "task/2021724.html",
    "revision": "4c78879cfd8715354cdd3408255502aa"
  },
  {
    "url": "task/2021725.html",
    "revision": "3dd2b2bb4543bfcaadf02d0280883a12"
  },
  {
    "url": "task/202181.html",
    "revision": "b5e0643ba297dd6046d591150f11d9f0"
  },
  {
    "url": "task/2021811.html",
    "revision": "411f8cb55d8753f77a7633e134b4e29e"
  },
  {
    "url": "task/2021812.html",
    "revision": "4197e2627261d1913f1128fb9d23b92e"
  },
  {
    "url": "task/202183.html",
    "revision": "e7ff1f4d36d4e7455edc47869c3b3c50"
  },
  {
    "url": "task/202187.html",
    "revision": "69be6e731b5ab8e51f55c2259d423015"
  },
  {
    "url": "task/2022218.html",
    "revision": "f7134ebf9c375711b57e572955f9a192"
  },
  {
    "url": "task/2022219.html",
    "revision": "88eba4470cb3657ff4c26963747ab565"
  },
  {
    "url": "test.html",
    "revision": "776ebdc5dc41f367266b09068c78519a"
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
