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
    "revision": "42a403502e0d945cd22a78185c954665"
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
    "url": "assets/js/39.dacd1daa.js",
    "revision": "f5482d70171f8c8e07b37dcc35afcd33"
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
    "url": "assets/js/app.c55a7cfd.js",
    "revision": "fe9e0fc5f2397784747fff7d9f479465"
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
    "revision": "cbbb517dbc3555d61f30acf7e1dc7b85"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "ac9e61352a7f5935eb6b7b653b575618"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "1a3e394096a14729079f953c2259db15"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "c61f9921b4f4be44c31283ad80e5f0a0"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "0f5c678b3a2cbd6398ad9d7293d05b72"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "642e9fdbc064720afc5441bd1bbbab69"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "78ddcd937d46d0235c6880ac42110b39"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "ff3f2668dcca93944334d0792ba30747"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "62be0d2f0b5cf0135e81b49c336aaa2d"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "8f7c3b0019122e7e798da0758030f34f"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "dc4fbf900b8edeaa43c5c16af30b0d38"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "70dfa898dde030fdf4554e46adcff603"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "f6905d4a2cd3baceb4207dde420d4086"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "ab9a1d3801a623da9311f95f8aaaf0e9"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "7862ca8e2b5a6a18626ec6cc02ec7a14"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "cac46e3a769b66a46c1462d4b33b188b"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "0135eaf9da5302121b371d3f77e69b21"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "a4417e57ddb59f3661de01ccad3dede7"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "b93f7e8b0e6f50fa0c0d4d33c0cc45c6"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "be2b30c66d74e9b595f46f43e9fb6a45"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "4a0ae1967ad105e59c95df4c2932e21a"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "8af7e8c68f564ad7011fbd958265c670"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "dd45c03869790b3de07137cf372c3baf"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "b26521880a3dc8d39cfa69cb92b7d7ca"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "9704d6dc6f94be6b5284a0ddddf01775"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "766f6e1525e94162c5d9c662de60990f"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "55a2929a0338ef5fa2c3625ed7995f6e"
  },
  {
    "url": "post/plan.html",
    "revision": "99ad99ead41c7b00daba5ebfccb9b8d6"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "15e139f5326197049fb0734053db515b"
  },
  {
    "url": "study/english/words.html",
    "revision": "2e568775c8001c078f76b49cb6b6711e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "0f876fa44652ff02913cf06ba43f5f33"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3b6d1d15f5c231311ff3280f98222868"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "004ea34e14b23a1dbc77121d127e1ce2"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a14f3a4a50fbb41472118be752b1735f"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ec0f63e4d45d21d6125e0657163807ca"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "b09585709490ab5607521d7c6ab6907a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "c7309086845dfe7b4b8d9e8c47d59e18"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "974bacf6e05514296ad8c3b3ca5b151f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "344d7c6260917f680b4fc4263e9266ba"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "614f2b25a2647be588ba8696eea30c42"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ef0f9d2b46b36260f385c876f82b8c4b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "a8620964a9439abf3e773f52609dad29"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "658b0169a7eefd75e55defcaa75e190e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c78316547bf04a94ccf3868cae5cc6c7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "6f395ddf00c644566ebaa758e8eebfeb"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "1d6ce25e3a3e8f7db33039c2aa7920ff"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "77f963e369aaebf0122546febbf8f99b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e223466a29b243fdd670cd1e6dd0e025"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "8f36c83f4e84daa9d7823ccc6ec25948"
  },
  {
    "url": "task/2021511.html",
    "revision": "298ad087c40a760d5a135434036151c0"
  },
  {
    "url": "task/2021514.html",
    "revision": "0e1db1ca0b4b166cab62a1b68839b196"
  },
  {
    "url": "task/2021515.html",
    "revision": "87ae3f25977fad74217e4568557e7f1f"
  },
  {
    "url": "task/2021518.html",
    "revision": "b74f15515a218782804a754228fd96d8"
  },
  {
    "url": "task/2021519.html",
    "revision": "2a71f744dc10fa75bf020270a44b34fc"
  },
  {
    "url": "task/2021520.html",
    "revision": "c8a0c37fd850ca6e457ccf9237f9f873"
  },
  {
    "url": "task/2021521.html",
    "revision": "2e527d0917f0a4ad2dcad7095f80cab4"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "4a5a1b4f6eaa00d60b126bb1c344e1aa"
  },
  {
    "url": "task/2021524.html",
    "revision": "2efc5201301d0d949e48b157c6d88c66"
  },
  {
    "url": "task/2021531.html",
    "revision": "5f242dc17778c829d8631fb5c594c00f"
  },
  {
    "url": "task/2021628.html",
    "revision": "16039bc3054bcb0c0cb7c867467181b6"
  },
  {
    "url": "task/202164.html",
    "revision": "ddbb492edea129b52e97750c1d6b8173"
  },
  {
    "url": "task/202169.html",
    "revision": "62d8af1f8d2a65096ad87926d1431c18"
  },
  {
    "url": "task/2021717.html",
    "revision": "9d0b9663ae535dd48de9d447090e5943"
  },
  {
    "url": "task/2021721.html",
    "revision": "7dc07179d60876be9d5b58fa43289fdb"
  },
  {
    "url": "task/2021722.html",
    "revision": "ea1285fad26c3fddb88b140b09d29a02"
  },
  {
    "url": "task/2021724.html",
    "revision": "6f99d886b2e37745fd4ccae4b184f08e"
  },
  {
    "url": "task/2021725.html",
    "revision": "30880f922a610d48ada86fb3d0c26042"
  },
  {
    "url": "task/202181.html",
    "revision": "a3e63ce747bfc686c854964ddb3b7972"
  },
  {
    "url": "task/2021811.html",
    "revision": "a4f468745488a99bf0b87245be318b36"
  },
  {
    "url": "task/2021812.html",
    "revision": "1dd68e7efcf0a60e10b8cd23d160338f"
  },
  {
    "url": "task/202183.html",
    "revision": "404228a29f428bfdde66a30a6f19bfe3"
  },
  {
    "url": "task/202187.html",
    "revision": "d3579e42c09d38a23685923109bb5333"
  },
  {
    "url": "task/2022218.html",
    "revision": "e16822b8e1234ecd89d38427b3601b40"
  },
  {
    "url": "task/2022219.html",
    "revision": "600e19001ca36788c5ecfc91673e244a"
  },
  {
    "url": "test.html",
    "revision": "6ab8e8aa4ce02b5c8f6dc60a7e38c002"
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
