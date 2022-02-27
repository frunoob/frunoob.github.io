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
    "revision": "5d770ae908e4a4469c847ddaf8cfc9a2"
  },
  {
    "url": "assets/css/0.styles.dc2d702a.css",
    "revision": "3ddfc0d341252cb3052035c49bfe54b0"
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
    "url": "assets/js/4.497a26ba.js",
    "revision": "b9eb0dd526a910e38063d7fc6d4fec54"
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
    "url": "assets/js/44.0bed32fd.js",
    "revision": "422104fce5c1158e19ba6190864a5fd3"
  },
  {
    "url": "assets/js/45.6ebaae22.js",
    "revision": "1416e3a784f223e6d21f09adcec28eb5"
  },
  {
    "url": "assets/js/46.24eeb69f.js",
    "revision": "645683aebaa54a76aa527dec07b07cf4"
  },
  {
    "url": "assets/js/47.48532eed.js",
    "revision": "78af5acbf8a28db0f9e994d9fc885aac"
  },
  {
    "url": "assets/js/48.35ccac0c.js",
    "revision": "1768c0b9b3bcb17ab9ccdd0a00c943c8"
  },
  {
    "url": "assets/js/49.80dda96b.js",
    "revision": "9b71e50d8492ff7f80cda84ce30f9c9c"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.d6b48e3e.js",
    "revision": "1fa9f94acb6629dd143f79ca73870ea9"
  },
  {
    "url": "assets/js/51.d2e4c2c7.js",
    "revision": "6d0da730c63d7f5957e9237ca4d67a77"
  },
  {
    "url": "assets/js/52.ad7f0031.js",
    "revision": "3617849b12c1d94e081cfbd376fa2b63"
  },
  {
    "url": "assets/js/53.7f96b9db.js",
    "revision": "3eac018cbefb8405b3f005fdd4ea2a0e"
  },
  {
    "url": "assets/js/54.aafa792b.js",
    "revision": "57b1e377fb7fc90c9e85d8212146d2da"
  },
  {
    "url": "assets/js/55.fab45623.js",
    "revision": "a55457ff83fe18c519abed3348963d2b"
  },
  {
    "url": "assets/js/56.2dfb1c26.js",
    "revision": "cbd6f2b00dbe084a970e1f64e8728fec"
  },
  {
    "url": "assets/js/57.b4b42626.js",
    "revision": "8cc4a30515305d0715b7e9f4617e1d92"
  },
  {
    "url": "assets/js/58.8b4383b5.js",
    "revision": "36353ce3f44026add08e8144ebf71be3"
  },
  {
    "url": "assets/js/59.ae4646de.js",
    "revision": "bce03543dde1afe41cde828bc9fe1e1b"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.04f5296f.js",
    "revision": "9a58caeee74c7469013a884cee05799b"
  },
  {
    "url": "assets/js/61.c2128276.js",
    "revision": "7fec446455597c8b5f02de8edfcc6c28"
  },
  {
    "url": "assets/js/62.e22d7d4f.js",
    "revision": "45073080a9f133d39cd7d16bb38a2e00"
  },
  {
    "url": "assets/js/63.ef75b509.js",
    "revision": "ada7f4f7e671953496db6ad70bd240e6"
  },
  {
    "url": "assets/js/64.e2729cb7.js",
    "revision": "c0e708698e27908540b2b58c77a9f18b"
  },
  {
    "url": "assets/js/65.3cfa4ddf.js",
    "revision": "6147a5293a739346f73de3c557b61327"
  },
  {
    "url": "assets/js/66.e7d76a90.js",
    "revision": "610061e454ba72ad61ed979b44c504b7"
  },
  {
    "url": "assets/js/67.32fbf295.js",
    "revision": "aa701e2347f7aeb6d67729452806248c"
  },
  {
    "url": "assets/js/68.19d36713.js",
    "revision": "20212d47c14499f435358ca019e70c42"
  },
  {
    "url": "assets/js/69.abf9051b.js",
    "revision": "df1e9514a9d083a99128a4c7774bf1b3"
  },
  {
    "url": "assets/js/7.1408376a.js",
    "revision": "ae306a5bfb60671c14c9d410966d7a23"
  },
  {
    "url": "assets/js/70.bf021da4.js",
    "revision": "bd4830d6d709cc0349d1e31e7eb866ef"
  },
  {
    "url": "assets/js/71.69c70c70.js",
    "revision": "ffac37593b08ccc5874b22bc9546f9a8"
  },
  {
    "url": "assets/js/72.10219e78.js",
    "revision": "a416109303f09ae07c722b65c192245d"
  },
  {
    "url": "assets/js/73.c15a1459.js",
    "revision": "8fe0e2da654c774e1810077587c8a858"
  },
  {
    "url": "assets/js/74.b0f4eb87.js",
    "revision": "d5dd48ff8b51d5f3123bb442dd37a01d"
  },
  {
    "url": "assets/js/75.8c104a5b.js",
    "revision": "efc325d9c5896f5b705628066b38112c"
  },
  {
    "url": "assets/js/76.111eb77a.js",
    "revision": "a43d1e2644e87fda6a4e61492dedee96"
  },
  {
    "url": "assets/js/77.a42aaa2e.js",
    "revision": "3f5b452b0be9b05ad68c276b93411695"
  },
  {
    "url": "assets/js/78.dd11270b.js",
    "revision": "a58568e8c0925ee73e3abffe9fa0ffb5"
  },
  {
    "url": "assets/js/79.f048b330.js",
    "revision": "b1a68ba38b4cdfcc9d0d277d4518320e"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.dc848df3.js",
    "revision": "93f6d04d7fce4c855fdc72f0db769f64"
  },
  {
    "url": "assets/js/81.beb9f21f.js",
    "revision": "8028bce3860eb74c319c1c93e628f80b"
  },
  {
    "url": "assets/js/82.29f2a337.js",
    "revision": "e9c477ad437fbf1a93f5d361896551f9"
  },
  {
    "url": "assets/js/83.563c81b1.js",
    "revision": "8e6ee0d0a896f5efc61c40ee797d9cf5"
  },
  {
    "url": "assets/js/84.76820305.js",
    "revision": "0b3baff00d298f105dfd0272280bee5d"
  },
  {
    "url": "assets/js/85.8c863c09.js",
    "revision": "262530e3ee2f5375a4ecf0e5e646a5f6"
  },
  {
    "url": "assets/js/86.4b3421e9.js",
    "revision": "4e7b8e4bebe927f26d87562592c290c9"
  },
  {
    "url": "assets/js/87.7646966c.js",
    "revision": "07616edd09fd74e33fa3caa27f576dc2"
  },
  {
    "url": "assets/js/88.01a6ea66.js",
    "revision": "393a6afe31731fb537a98ec34751d817"
  },
  {
    "url": "assets/js/89.c49ddd5c.js",
    "revision": "8217c2334235fa132422edc8b93a8ef0"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/90.f22846b4.js",
    "revision": "70e7188311c7f187dbf6ce809c597bf3"
  },
  {
    "url": "assets/js/91.0d1b4d7a.js",
    "revision": "aed7e8fbe582da3dbf7e5901e258b7b9"
  },
  {
    "url": "assets/js/92.8d85a905.js",
    "revision": "6d36fd550b069162b40c91158a795950"
  },
  {
    "url": "assets/js/93.d2235fa1.js",
    "revision": "e333f96b0c7616a5140beba7c762258c"
  },
  {
    "url": "assets/js/94.71063db5.js",
    "revision": "4ee291e0c8edd16becacdf5cdc8bf672"
  },
  {
    "url": "assets/js/95.1d7809ae.js",
    "revision": "f17e0cc04597bd518409c2700eb9a330"
  },
  {
    "url": "assets/js/96.0f277d78.js",
    "revision": "6b9b5916c305001a9e13b44f5c091ce7"
  },
  {
    "url": "assets/js/app.dbdcf90a.js",
    "revision": "54db87569ef9b8b314e3d19d50775b60"
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
    "revision": "54fd316ac1097433615359284b49f9f9"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "bba0a397de62bc40a5d033479d7301a1"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "b510d3f46d0b8a07ef03f464b02d7e90"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "abd2e9806e15dbe417f9896cf14ef110"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "efb879ee3f7de93ed82f96a85383a9ed"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "73dc3778d55c14ae5bc9eb3b36a7b8d2"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "8df180f1871abaac18be11aac4620d35"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "19f16c17dbdb27e64ecbe0f192ffc944"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "faa574d8f69ef142f4abde04683fcadd"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "249bd8107b0f79e281d8dd3813a337bd"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "91a8b0e594d4ebb7685e38dd27a24f4d"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "d81dfdb99c5f115ec1ca41e5aa65fe49"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "4a3820be68ab2b143f69ee8a8cf4fa78"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "3ebe74a61174ed9ca23d5a89fd1a5b57"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "2f29338d999b545729651f9435eaacb5"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "8935b4a8eda8e1d1355022a685be21d1"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "c9e2a93dc19c0265b4cb57e0ce2aac2a"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "88aaa3852103f733232ef992a5a8280d"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "395d62f6de18ddce37559f3b3e52a0e8"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "8e8de926fcd0bbc4d0658ed87f8af5f9"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "cb9992e2cb382567bc08e8365d3ceec1"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "c69e80c70000f4b5ccbb5e266e486506"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "9aa51ef359f3e3b4fc88bb10570c160e"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "ec275d2bd7d8eea2379fb12d7ee887f4"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "cb5e624fedcc48f9080782f6a4b65ff8"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "b56599fdfc90e78014486cdf1d584dcc"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "4501d0f8644b6c72185898bd3ca069b3"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "850e737050767d0a84ecd7b8db056582"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "45922c53e844e3aae75794f0ba057c06"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "9d968f4de03ffcd8df4fb7c5fce18747"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "0ed8a479eff22b459c603ef570424b19"
  },
  {
    "url": "post/plan.html",
    "revision": "e45769b924cf4ac2d71944562be7acd5"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "644ec8b59b939c4d1c2968b8f282e317"
  },
  {
    "url": "study/english/words.html",
    "revision": "cdc1473d181633fb865ff993bcf928ab"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f3d16f59bcd85b24fe2c9cbb4304617b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d7adf8318c7d63e5f8f89ca37fd215a8"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2ec4c6fa37da6f117230d4218908cd94"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "331eaf43e4b6e2a15768644d69d29041"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "9357e700b8a30c4ed550cd3d83499abb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "552a9ded7f8f771d666419a3e14b12da"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "058ecf9db44eba244c4114d917acbee6"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "8925e7ee34481178af9808e2e97c8c80"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "4d6e3b832a4bbc04e62bdcdbcd612994"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "9fdceaf51603db18f7ed64e0d2f1da81"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ea9ff379aa93872a2363b28ebc0e23d3"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "b6d50fb436f9f2d300f7958bce14727b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6ec91202a1d6cc225626876f723a1193"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "babeea1794aea3947bbbedbd2727c9b4"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "7bf2466ce8cff8290ab11b8641e997f8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "291cab968b23636d4d83d715768372fb"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "06c99693920380b9ed1dd113149844ef"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "66bd4359395df6b0ba42b4313e47b411"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "691ecbe05fd21444af555b35277b88c2"
  },
  {
    "url": "task/2021511.html",
    "revision": "1ac752582d3a9c250dd3b08c003a7dfa"
  },
  {
    "url": "task/2021514.html",
    "revision": "b24a12c0e086e3342d189f44c5bfc72a"
  },
  {
    "url": "task/2021515.html",
    "revision": "08d4b149a110476f2d9c95a5b24514f7"
  },
  {
    "url": "task/2021518.html",
    "revision": "c49c1227aa45573c55a6a6fabc50c491"
  },
  {
    "url": "task/2021519.html",
    "revision": "55523d849922bcadda4fed9058758a34"
  },
  {
    "url": "task/2021520.html",
    "revision": "95bd0fd13ac0c7a96a0a9b0929c6d3ac"
  },
  {
    "url": "task/2021521.html",
    "revision": "f5e0106c516c5f7ee5008fed6f702234"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "6686328a31da48bc38dca75d649def14"
  },
  {
    "url": "task/2021524.html",
    "revision": "b517940d220508e41fa1503777477ec2"
  },
  {
    "url": "task/2021531.html",
    "revision": "9eadf1e39d880732ba10ef6e9c807e77"
  },
  {
    "url": "task/2021628.html",
    "revision": "1047cdfc3ade433309a2141965b8c8e8"
  },
  {
    "url": "task/202164.html",
    "revision": "f7f7bea5aa49077de7d07197268a2e46"
  },
  {
    "url": "task/202169.html",
    "revision": "9e616c94a539f2bbc208440ad69aae42"
  },
  {
    "url": "task/2021717.html",
    "revision": "387f7514f93f61e725905830d5b154ca"
  },
  {
    "url": "task/2021721.html",
    "revision": "cb8f877bd54af6aa8eb8a50d1ea1b597"
  },
  {
    "url": "task/2021722.html",
    "revision": "46b6dac8df00b38761ee5dfaf63c4e9b"
  },
  {
    "url": "task/2021724.html",
    "revision": "0860a1cb0430ca26f7f6742d95a887d8"
  },
  {
    "url": "task/2021725.html",
    "revision": "f9bcb72f1f170e10827c46ec9c01041f"
  },
  {
    "url": "task/202181.html",
    "revision": "7b266a2837b93eaab0d376cd0fa312bc"
  },
  {
    "url": "task/2021811.html",
    "revision": "60a9c9be6c5b984a908a2f0c4786734d"
  },
  {
    "url": "task/2021812.html",
    "revision": "6491f8327e25799d1c8d11cf0c8a20c1"
  },
  {
    "url": "task/202183.html",
    "revision": "e4220fa6866015f48f0ecad335a3a255"
  },
  {
    "url": "task/202187.html",
    "revision": "45889309c796ac80736ae0fbf8b41a2a"
  },
  {
    "url": "task/2022218.html",
    "revision": "b47921c9342823404a7b28fc2315837d"
  },
  {
    "url": "task/2022219.html",
    "revision": "f3f4ced461f9dae2bb37156f5ea9e5de"
  },
  {
    "url": "task/2022222.html",
    "revision": "51733090b9632b26794073e50a5fce97"
  },
  {
    "url": "task/2022224.html",
    "revision": "ca9c04f738d2a61185f4ee6cd9223656"
  },
  {
    "url": "task/2022225.html",
    "revision": "808365dabf453632cddd8fb384a88edd"
  },
  {
    "url": "test.html",
    "revision": "3d61ab897f5f9a3bf46306bd02d7b5e6"
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
