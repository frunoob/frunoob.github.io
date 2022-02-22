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
    "revision": "239c5307220689dc0a1811ba58293f61"
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
    "url": "assets/js/38.e73cdb49.js",
    "revision": "7b3e2405c57939e4579e8ad9e67454df"
  },
  {
    "url": "assets/js/39.0182707e.js",
    "revision": "0fcc1df6a7a42eac3b2b3dffcdb37ca9"
  },
  {
    "url": "assets/js/4.e2ae5594.js",
    "revision": "daa88547d343034748f232ed229ad2ce"
  },
  {
    "url": "assets/js/40.60d8cf3c.js",
    "revision": "b584cef0d9641723b2ea372691c136ac"
  },
  {
    "url": "assets/js/41.31644b38.js",
    "revision": "9121b5f24c6468889bd9f66e0fc4ce47"
  },
  {
    "url": "assets/js/42.09e5ad05.js",
    "revision": "f2e7786e815bdc34ea46ba2af3e187c3"
  },
  {
    "url": "assets/js/43.ee355a26.js",
    "revision": "b4070805857512f939ae42d29ef6032e"
  },
  {
    "url": "assets/js/44.099e20f3.js",
    "revision": "4c22a4fa22003d4a2e4523c10c20772a"
  },
  {
    "url": "assets/js/45.4cbb0c77.js",
    "revision": "e0c37cf342e018899a981baa2feaeba9"
  },
  {
    "url": "assets/js/46.45113951.js",
    "revision": "a45ee0fe9d3243c5c5077fe825778044"
  },
  {
    "url": "assets/js/47.81b0c7bc.js",
    "revision": "3a7912d0896c2864e3c42ea57e767d67"
  },
  {
    "url": "assets/js/48.dde2b64a.js",
    "revision": "aa800ebc768a63c6f421d71afcb60b3f"
  },
  {
    "url": "assets/js/49.d4a391cf.js",
    "revision": "4b603a935d59c4d0a28984ce373a7b39"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.e81b7c6b.js",
    "revision": "bfbab96a2f0ca4e72af8ba2f2e7d00f4"
  },
  {
    "url": "assets/js/51.4e03dc07.js",
    "revision": "4fb1f958349730df7b19b3c720b293d0"
  },
  {
    "url": "assets/js/52.12ed0897.js",
    "revision": "d49bef934b24aa6e116e47522c9028b9"
  },
  {
    "url": "assets/js/53.165e210d.js",
    "revision": "734177cb50c0320bbcc3cb26ed67bb33"
  },
  {
    "url": "assets/js/54.47bb335f.js",
    "revision": "f6dd21059ff6b49c964bac1e06ca7cd6"
  },
  {
    "url": "assets/js/55.27a3e73d.js",
    "revision": "ed9b1dc15218311c1046f0df94876f1a"
  },
  {
    "url": "assets/js/56.60572f26.js",
    "revision": "f41102438514f56fb3bb36b4f4942063"
  },
  {
    "url": "assets/js/57.4efd697a.js",
    "revision": "0a936b546969f585e0a3e4349b1b8b2b"
  },
  {
    "url": "assets/js/58.05f8df8a.js",
    "revision": "8ff1b0ca097a08427e56d6145837c706"
  },
  {
    "url": "assets/js/59.a4a3ebc9.js",
    "revision": "9cc0de2fe46433f8112515b76e8e235d"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.30bf3118.js",
    "revision": "021f259d1a0b077d842e6806dbdc1db0"
  },
  {
    "url": "assets/js/61.16f412b8.js",
    "revision": "bdd98c0f86a1d472a2b5fa4296185fc3"
  },
  {
    "url": "assets/js/62.f4eb1785.js",
    "revision": "2ddc7bf46c5e890b86becfff0ba94635"
  },
  {
    "url": "assets/js/63.a18ee409.js",
    "revision": "fcf29014851e12d497e374d9c060e11e"
  },
  {
    "url": "assets/js/64.f54967be.js",
    "revision": "d9c0f392f84da104f610ddc467acf81d"
  },
  {
    "url": "assets/js/65.79510d52.js",
    "revision": "e705929145a79980a28f3d20bfd9ba6e"
  },
  {
    "url": "assets/js/66.c31c1857.js",
    "revision": "b116cd7c8f87b8d64de087bd41b3157e"
  },
  {
    "url": "assets/js/67.a2065f40.js",
    "revision": "720fea39481bc8a13bb5e2a5f3adf0b1"
  },
  {
    "url": "assets/js/68.d08889b5.js",
    "revision": "2402c27e83f8282b552303ab2821c169"
  },
  {
    "url": "assets/js/69.499e1d6c.js",
    "revision": "fd1adba44f55ea2abac0522eb0f69752"
  },
  {
    "url": "assets/js/7.6f8b6209.js",
    "revision": "972ab5272fb421cf42ef03517c129890"
  },
  {
    "url": "assets/js/70.bfdb97c4.js",
    "revision": "574c10dc63fde72ef70e68e1c0a4a62e"
  },
  {
    "url": "assets/js/71.1964f6f2.js",
    "revision": "7a16804be71c4ca3607772c2dd22a950"
  },
  {
    "url": "assets/js/72.a5cf63db.js",
    "revision": "6fd58beca0d5339cb1b6f9c4ab19ab54"
  },
  {
    "url": "assets/js/73.ec31c325.js",
    "revision": "772d1165b2979196ca9f36e242204944"
  },
  {
    "url": "assets/js/74.a2dfe8ee.js",
    "revision": "5fc9c72c515dc5dae554b001fbea8263"
  },
  {
    "url": "assets/js/75.614f5d17.js",
    "revision": "ffb019fee6ead0c20c345232be161a29"
  },
  {
    "url": "assets/js/76.e6f80bbf.js",
    "revision": "cab1dd4c0c6ea37a3e55a99ae084b443"
  },
  {
    "url": "assets/js/77.25d69de3.js",
    "revision": "dffea52817cfba0d479d20f84b87f5c2"
  },
  {
    "url": "assets/js/78.1aa4c30c.js",
    "revision": "b9b5e6e646fe8161d16885ffd3b48c13"
  },
  {
    "url": "assets/js/79.e9c67424.js",
    "revision": "83bfb802e2e40bd27db83a13368b933e"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.efdc6c08.js",
    "revision": "f13fc08a19972a95f9c73187db5d986e"
  },
  {
    "url": "assets/js/81.886bee6a.js",
    "revision": "c4d5afbecd6406d32d98e838fa7d517a"
  },
  {
    "url": "assets/js/82.4baad3bc.js",
    "revision": "a1813f152e4abf33b9847b3f2439c192"
  },
  {
    "url": "assets/js/83.c96e4754.js",
    "revision": "8e79ea6c194660669ec99feb93be3c4d"
  },
  {
    "url": "assets/js/84.80c231fa.js",
    "revision": "356ff9e929de37e6ef9207f682a6b2e2"
  },
  {
    "url": "assets/js/85.17a80db2.js",
    "revision": "f027ab8af6958a690f96ac89f157b7e2"
  },
  {
    "url": "assets/js/86.04c32b79.js",
    "revision": "189f99a3883d5aea75aecd621d28dd82"
  },
  {
    "url": "assets/js/87.ffd9a68e.js",
    "revision": "64f197324344eee96db8c2e4c86d099a"
  },
  {
    "url": "assets/js/88.daa66c6e.js",
    "revision": "0c5425c24df2cf0f2644e8731885ed6c"
  },
  {
    "url": "assets/js/89.e295186a.js",
    "revision": "9acdfb8eab7d03bc6e32f7794d5b00e1"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/app.268f1dc4.js",
    "revision": "7e5d8b8efba6d3c30b6e1d07c358f944"
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
    "revision": "537b68d9de0de1215ba95d847de3d00f"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "8d170124a57a59e37cfef997215d8bd7"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "bfcb665fd9e34e99526d377eea89fe02"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "6c254151f875a3c98b58844b43aa7b3d"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a036cd21d6a83eeaf9db38b3f1557316"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "c5a5103562580d90f78cd69e25960b1f"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "715358c4e2920c8127d71ca5456483bc"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "a6ec0ae30517ba462bcef72cae59d04b"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "52b8b63e35998afd2379ff4678fcfd1d"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "030d0b22b9985426657cf3cbf7d08151"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "402c6c5cd3d95dc8edccf7bb3f6c1416"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7c73af3e1af07954da104c751e6a56e8"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "f1052c90280d7ffb76f85c7c9bb737bc"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "de3652d265fe7d9b5bb90d677693b4e5"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "14d4a5ed394d154f88a605f3f9faeb4f"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "86a9c637cecb6c4cba37bb00a44200de"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "b2607ca77bc87299b772045950fd3bd8"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "9eae328e8216dccb1d75acb9e9be57ba"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "b1b0ea1970932aafd0cbba8321c30b0f"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "5be1c52384e7cd4f71c02b4f904f846e"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "1efcf687ffa3b756cd1f37314887d304"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "9fc0cc0a0637842ab448b773f347fb15"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "6952c67c69630ac602235673a561db29"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "b4102afcc24d41846b31558197d0b75a"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "f2fc083d62962dedf7711bc8be2d215d"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "f31a95def0c0ce8c2e75f76502526efb"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "28cde147316cf6776aa0e0d8553bb9b1"
  },
  {
    "url": "post/plan.html",
    "revision": "8418f488e358a3fd9b91bbd1862d4e7f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "07e8681c93eff836b3ab737a0107f0b9"
  },
  {
    "url": "study/english/words.html",
    "revision": "706f46ab5b3c8d519b6e06a978787b26"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "8a4b39f883e546dd5e82b68f2ec7c3c9"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "475711b97797f555b321a9c6ec906e14"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "1cdd2a9f5e2c0ae41855aad06a5b890b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b29bd4de0edcb2cfc77ba78e81b57b19"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7bdba8527fa808c4a6e8b562da22dd71"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "996c80cdc7596bee5cce8d75b548401b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2de9e222bfca4e50a8672a7f6ef63a23"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2a76633eac9a20c4fba745c70cf96cee"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8f0b02a52c3259435e6fbc7b7187ad9b"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ef1648ec29e740021e17ac27a6b2eb24"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "6ff51fe230a1d426dfdd72dc3302054a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "1682569a02451e75585079a8af88c6f1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c3634e442922cf48ec2b64ce4416a852"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3ba52ef9767904b41458064697e481e5"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b20e8fe66c7edfbbd644bdf7b667ff2a"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "9c55282a90f5c357fb3efcac809dd3ce"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "7ec8827a4a215e4cc4cd7aaead133ccc"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "1f261bb141a50045d54e686a35aaee6e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c8d8a3695f18a30d0657e7950388bdff"
  },
  {
    "url": "task/2021511.html",
    "revision": "9b19ee560a61e9389b4a49125fb59707"
  },
  {
    "url": "task/2021514.html",
    "revision": "439a76f1e42f96a0a991b2c01fb59505"
  },
  {
    "url": "task/2021515.html",
    "revision": "1149fb019d4b9b1ecb50726fdf7c1d45"
  },
  {
    "url": "task/2021518.html",
    "revision": "8ef6149935b5715dc30fbec45f47d4ec"
  },
  {
    "url": "task/2021519.html",
    "revision": "36ae5da9e746af1560e883daf599164e"
  },
  {
    "url": "task/2021520.html",
    "revision": "c45987f6d57be49637e69007ee48264d"
  },
  {
    "url": "task/2021521.html",
    "revision": "4a046611ed1364f905f23bc3afd63345"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "0fb6bcc21770bbc9d6e71f7b9651a3c2"
  },
  {
    "url": "task/2021524.html",
    "revision": "d12241bc8dee1f9a993f462cc1349d30"
  },
  {
    "url": "task/2021531.html",
    "revision": "257244cd6268ea202988d78ecf6b0089"
  },
  {
    "url": "task/2021628.html",
    "revision": "2e996dbc3d86e0a1dd364cddc51d7721"
  },
  {
    "url": "task/202164.html",
    "revision": "a86e000b25c0692d52f530485fd575ce"
  },
  {
    "url": "task/202169.html",
    "revision": "1089d1bc7c66cd44cb96bcc775a6ee33"
  },
  {
    "url": "task/2021717.html",
    "revision": "71208e16cd69c010ffa6ff6d4dd7b339"
  },
  {
    "url": "task/2021721.html",
    "revision": "91a74592fe824b93f460b77fe3806fa4"
  },
  {
    "url": "task/2021722.html",
    "revision": "0a047b49fa70a7ab1343e8f292e61a79"
  },
  {
    "url": "task/2021724.html",
    "revision": "6d768133d14379254e17bd344eef7cd1"
  },
  {
    "url": "task/2021725.html",
    "revision": "b3338c35ece7bc3408d1d3c15d50e542"
  },
  {
    "url": "task/202181.html",
    "revision": "38beab0a830680d7093482c207f348b7"
  },
  {
    "url": "task/2021811.html",
    "revision": "dd5b971c976bbb18eb50a003c173cd5c"
  },
  {
    "url": "task/2021812.html",
    "revision": "01707d68b041ee13ebe1c13ab96a19f1"
  },
  {
    "url": "task/202183.html",
    "revision": "e9dc8d072b2953820ce249e06f9b936a"
  },
  {
    "url": "task/202187.html",
    "revision": "6c6ebe977ebdf5accebc47c9c9a3de3a"
  },
  {
    "url": "task/2022218.html",
    "revision": "6c57f14cbee7d05374c0f29eeb3f654b"
  },
  {
    "url": "task/2022219.html",
    "revision": "e437ced98e7182fcca7ffa37ef80d53f"
  },
  {
    "url": "test.html",
    "revision": "01a2ec0f4c591d5c26da7c18dfd40a6b"
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
