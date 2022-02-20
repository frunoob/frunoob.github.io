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
    "revision": "66cd9f5e0933991c712702e4cac64e8c"
  },
  {
    "url": "assets/css/0.styles.79c99c3f.css",
    "revision": "ed363941a0d7902da7443b6ea8ffe3e7"
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
    "url": "assets/js/40.3eb8228b.js",
    "revision": "ca0c0e7c35f34399bf506769e7a4709e"
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
    "url": "assets/js/87.e4cd239d.js",
    "revision": "8877df1037837db9485df68436057dcb"
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
    "url": "assets/js/app.257e1002.js",
    "revision": "1b6dcfb645f9afef35560fb5a7f554cd"
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
    "revision": "93b40335bf675ccc37af3c78cd8319ab"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "4725d10491c8209deaa32daf9e5b3c32"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "ba59ca0fb259ea9e2e25e76ddd46be46"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "690e4826900734eae23c5461971fe644"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "136c5068bc36e1500eedd6eb1bed31b2"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "e770c1034b19552ea5f88ea9b5b062c3"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "37d739cf82faa839757325f6e1bc01f9"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "9f369e6286d2bc0fd40e910887de6059"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "04be0b67d0490dc994dacab3b9057d68"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "7783604820c2d4983848d36a8f66dd76"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "056347a4b67fe049df79a766b3671756"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7c15ab1093a1c92c33aae4cb002ff55b"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "7e802a42ac68d2d9f6120f1137c15b1b"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "f7efee5cf92013ecb51aad398cc542cc"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "1f4d34d7daf6f0939689b8158580b22f"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "9cb7ca501f396eb8665098e92e4c8843"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "6228ed76880dd97c89a3590901448df6"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "1ff5787f3f8ba1434065cfe7af6cb5fa"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "848c0cd6d32cd1fddadce39cb9d36274"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "b2df7dcb45ff648f400da696cb4e78ae"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "1907320947510be39253a87d73652605"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "15ee9a49fd8dab4b5b116dfa0a35c16c"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "2bc4fd5e13978c8231eb7c27a09aea70"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "ada488ee19f4bab40c9509a88084c9aa"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "5d115eaa087f62feb3af55c824ceef3d"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "670cafcb78403fa3fd1d54832a36472c"
  },
  {
    "url": "post/plan.html",
    "revision": "d2514786ec1b09f66608218c32f018f3"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "67831df44abf1fe4e46b55033c2c4252"
  },
  {
    "url": "study/english/words.html",
    "revision": "2621e08629c1c470d7360e72c2d125f2"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "15419b9232944764a8ae8fa15e76b137"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5178a0f22d33e4d7eb9bd7995d9b4eea"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b85d8e32ec8ae5c364cd1fc45acbc0ac"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ec042f9a1f352406e5ff09cf5d82c41c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ca927d56f6664134b6e8707296d97bb3"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f9098164e8a431d26425e3e6b09feca7"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "4d161bb9c3f197b76fb9703375fbcdab"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "e153b01a36a6f6a6c501e3df4fb59bdd"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d32502ec0a99c0438c15ef647a0840e7"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "9e6be655857c8c506d9c68705457efa9"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "4f2d3462ff6cb2536da2822557c3482b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "78d59b3ef770bd8737cc085884108c46"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "cf0f4762c14dba8147e2bb9fabe842a1"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "8c38f48b82efc4c57a0e3172b2d0025b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "29ddd9bcb370e0fc9d3282863d9ac6b4"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5cc994000fe171bda18604d436280c7f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "616d7c9a35335339e38b2a3a396124b7"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ce0b9f93df4e4afa1b50f91bedd57e66"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9fb63ac5ca1e470551251716b24fedf1"
  },
  {
    "url": "task/2021511.html",
    "revision": "bdc2b6136ce7c7e15eaff7b1639d96ac"
  },
  {
    "url": "task/2021514.html",
    "revision": "a02795f932cc48bc3c25f4f6c13e52a9"
  },
  {
    "url": "task/2021515.html",
    "revision": "2c21ca17cfcd10ef1f5d570c4917df5f"
  },
  {
    "url": "task/2021518.html",
    "revision": "f4a271fdce5d4d2853c1c9e8569b0996"
  },
  {
    "url": "task/2021519.html",
    "revision": "c16c50f57b40b934137ef955aa9b92bb"
  },
  {
    "url": "task/2021520.html",
    "revision": "9df90b07feef8695d8f517792ee37953"
  },
  {
    "url": "task/2021521.html",
    "revision": "620c903155ea2e6d2df363e0b67626c0"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "23a706c07017f0e2a836e2feefc15ee3"
  },
  {
    "url": "task/2021524.html",
    "revision": "51e2d56370902d5f3e73930aceab7b62"
  },
  {
    "url": "task/2021531.html",
    "revision": "2169418b3b86bc614fe30fbaa75f59fb"
  },
  {
    "url": "task/2021628.html",
    "revision": "3b58db49e17af902dc3262dbca473c24"
  },
  {
    "url": "task/202164.html",
    "revision": "d61b26af960c59956d62c4fae210495f"
  },
  {
    "url": "task/202169.html",
    "revision": "6d1218bc34106062e380c88ff19992a7"
  },
  {
    "url": "task/2021717.html",
    "revision": "451bf9e95be75654a04d3a9518b5d0b3"
  },
  {
    "url": "task/2021721.html",
    "revision": "70fb2d66b7e05e4d5bedcf101d1f78fa"
  },
  {
    "url": "task/2021722.html",
    "revision": "2971ee1d357c9920a581096228508597"
  },
  {
    "url": "task/2021724.html",
    "revision": "7c26064f4603101d70c1b03f02cacba8"
  },
  {
    "url": "task/2021725.html",
    "revision": "8fe7be5bd79f6e46ee0e97b0437fa07d"
  },
  {
    "url": "task/202181.html",
    "revision": "c40ed3d771ebc69586615ccc10755f73"
  },
  {
    "url": "task/2021811.html",
    "revision": "04590260cc83ea3b7d12dfaa8c48004a"
  },
  {
    "url": "task/2021812.html",
    "revision": "9248845492e8726868c02db4482015cb"
  },
  {
    "url": "task/202183.html",
    "revision": "4af1d5264e42396ce2d35bb27f930447"
  },
  {
    "url": "task/202187.html",
    "revision": "7e112557f14f901a073241c0c42389b1"
  },
  {
    "url": "task/2022218.html",
    "revision": "99d2330f7b07dbdf38441ab05dbd970a"
  },
  {
    "url": "task/2022219.html",
    "revision": "0db71fcb6411ba034f8e44b35d109888"
  },
  {
    "url": "test.html",
    "revision": "2573e5dc1ee2ebd6af7ce76e69efc2c8"
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
