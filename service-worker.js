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
    "revision": "d94985ebbd697e95cfdeee20d3278267"
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
    "url": "assets/js/37.68d2f871.js",
    "revision": "da8a0f1cbc175e11c3c10b2d9ba3365c"
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
    "url": "assets/js/app.dd10e6e6.js",
    "revision": "14cfe46b34987a8d69a3346d89148db3"
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
    "revision": "31d061c412dcf91cfc908d3dc997babd"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "45c160d0866586de1bc8bfcf6fa645c6"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e3450d4b7024d518b43fd69ce4751e04"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "9a101630f47e415497de33b7a9f457a1"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "d1238c55d09cece676b307f923cf803a"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "30b811e5c275da63c78d36c583549964"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "1468537d1342b5b25aa353c30c2aa747"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "e60c69423cc19fa4cdd607851c563e14"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "8cd11fbbee56589a83128708129674e4"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "d01128bb9e5f127d2a22341d3b48062b"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "054c89f95a29d43421fdbbbfb0a717aa"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "e307218edf586bac2653fa0015de2bf3"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "1bb0d3764d55facdd8b02aa8e75842cd"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "af32d2483b8d74d2c27ff39006e137db"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "b9c5698b9dd70838fd57a2f7718cf724"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "7a83438586b11f844173b5e125e39cc4"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "e3d5356a7c69e2b416d82844005773d1"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "a1301929c7db8ea3457f9568d322eea7"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "f70a5f42d4fe9ff75b8950fccaaa7a51"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "f5ae022011184bb979cb3a8a37560282"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "0345a41c108a7533780ff11aa63cb8ed"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "35608fde927801d2dab9d492efc7979f"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "97ef7b7139189a1b1195d949e98032cd"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "484f7c4ef8d83dda8872557e93402fb1"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "650b001bcb942c25c02de068b0ee1175"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "f59efb9064fa5ecbe12c0f0118282ec2"
  },
  {
    "url": "post/plan.html",
    "revision": "5668fe975d7240815ff133732d1172fe"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6c41ac7126490242d7b511fecbc45023"
  },
  {
    "url": "study/english/words.html",
    "revision": "dbcb02ad524c26fd307f5f458f6a3fed"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f4257d6dd0426f8e534ba491b9ac22ca"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3a20b27c58894d27658e5ceaac1a245b"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "de7f6ca05d47cea23f5ced803a38da05"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "186254a31e9a4a728113a026100b602c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ee2e1bba76f8666c1021610d776e2b47"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f2e1af8220f9077a0f5fc71b2aff671d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2bfd13d6b0158e0d867663945fbebc2b"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b071465312d56fad4cf503a474cb3c68"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "7709a24ba6ef1b616eb6f6fd71ef3918"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "fe5b5fde48c19764e4b2e099bd27f01e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "46c4d0148f5fee5e78c73d171db7722f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e5c112c85ee7873b521293a92b377cfb"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "afd3e771aa3a49004a9ed31506d1e4c0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c1f001effc03164f3ce0755bb1db0af4"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "fb2661f7167da3dc85aa64f22e4e5a29"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "44b3c8732f343652e6c8b6161c6d29d2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "49d4ddf7a5333efc1451ffc56f43a3ae"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "1c610ecc3db49cdf29d6a017881a8274"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "56821094f2fcc065519a9be115cd8675"
  },
  {
    "url": "task/2021511.html",
    "revision": "52b8a9f6d091fd293a888219a951196b"
  },
  {
    "url": "task/2021514.html",
    "revision": "e709a697087f6996dd2266601384ac7f"
  },
  {
    "url": "task/2021515.html",
    "revision": "1c441aa51c927898ba1dd732962fb6c2"
  },
  {
    "url": "task/2021518.html",
    "revision": "4e3b94fc4298f7e5f94ed6352e3e7268"
  },
  {
    "url": "task/2021519.html",
    "revision": "8ec6159077867aef9e55357f2c0df838"
  },
  {
    "url": "task/2021520.html",
    "revision": "79cfb8d49a6e701458a78835ded2d1a4"
  },
  {
    "url": "task/2021521.html",
    "revision": "a223e4f723d42a7df8431097090f0721"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "a4f1544634e7e16a4535f84e63432a12"
  },
  {
    "url": "task/2021524.html",
    "revision": "88e7878a615b8bb05fcc3b60b1e3f87a"
  },
  {
    "url": "task/2021531.html",
    "revision": "6fb5e76145e03785ddfdcc455b693cd4"
  },
  {
    "url": "task/2021628.html",
    "revision": "4a3f84c70d0c47439a35cec942ad769f"
  },
  {
    "url": "task/202164.html",
    "revision": "06788817a3b640a0411076417e1d6af8"
  },
  {
    "url": "task/202169.html",
    "revision": "7e5dbcd12bdebdb24b315d7b7a80afe9"
  },
  {
    "url": "task/2021717.html",
    "revision": "b9265e919170f9184f9a55c944bc9237"
  },
  {
    "url": "task/2021721.html",
    "revision": "3a4abf03d7f7ef1cf0c0ec234e5beb56"
  },
  {
    "url": "task/2021722.html",
    "revision": "1dc95722d7e0c1edf15bc3de46f9ff56"
  },
  {
    "url": "task/2021724.html",
    "revision": "9d22b99a3a5baccadc718ac8f9b673ed"
  },
  {
    "url": "task/2021725.html",
    "revision": "a616db0ddd50322e74d566010d2da78a"
  },
  {
    "url": "task/202181.html",
    "revision": "21c3c083fa123f44525406d2df242f72"
  },
  {
    "url": "task/2021811.html",
    "revision": "c8164fad92a3032ad131ef7214e1eb4f"
  },
  {
    "url": "task/2021812.html",
    "revision": "55dc30faa1f753bb7f87688884339cf8"
  },
  {
    "url": "task/202183.html",
    "revision": "f84f703f53dc49df500ff606ab87449f"
  },
  {
    "url": "task/202187.html",
    "revision": "961f3ef4b3ee382ac2603ad0b5b0decb"
  },
  {
    "url": "task/2022218.html",
    "revision": "6925987c5d108980bcdf9bc0f0bd99c2"
  },
  {
    "url": "task/2022219.html",
    "revision": "99b0b93070a5b7d82d06d15b291f450d"
  },
  {
    "url": "test.html",
    "revision": "a19e9eb0ca15480dec15523122fe7f2c"
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
