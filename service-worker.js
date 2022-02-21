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
    "revision": "08f3bb18dadfa456476f3ffce0c6d8c8"
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
    "url": "assets/js/39.cdeb39ae.js",
    "revision": "ab0ca34b9e88898c0640b37e4b66f3e4"
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
    "url": "assets/js/app.9682fb7f.js",
    "revision": "76d489dd96bb57ad73ecccb850c7e3e1"
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
    "revision": "f349fba8c85b88776cb5cb200ec38fd6"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "8856c03255f53698d876ca04c64bccb6"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9e459a87badb70f39a1c4529caa82a0c"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "63f8a91c44cde9c562ff529397d04c1a"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "ed977d70192a7fdd5083d4feec8fed78"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "427b3daee6c7ef83e0da7f843296fdfa"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "7e0d074281afd67e798755880e6be2b5"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "e46553be845aef813134f1605dc10ae4"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "4a77e2ddb696f2e5cf4b42e6c77ffdc6"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "c0e8dc3602e92a2f807a23cd9d22a35c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e0b28b97fd568fb87b9d80887cf605c6"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "e9fac4bfdd5915bd705cf36a97407409"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "99243d8cacff7ea24fde2e402f4e2f5f"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "b4237c7a19ebeeee89eb4b97fe43b646"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "ee3307ff32077e33fdfc0ca3bc921817"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "61ccf09318ffdb2cc9f1a8eab2f0836d"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "31964d666a7d6647085412878388c5b2"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "405d215052e451e4eae3eafbb6a97326"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "c2abc63fe78dbca6eea1572b8aa3a696"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "0c680258368920ab0ee0ebc3a61c1419"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "b54fbc06ac4a2b01d0c50fdc208e66f6"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "64d398a7ebb184b47c3f7c7e7d20024c"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "f3de809e30ecf3626fdfa65e7a515514"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "dea304f02f9040831749e797f29b6a0c"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "49f781538b2915234750d01075af61d0"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "103d0668e2e52b49bdde9cb31b2752f9"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "d1d5265a8bac2acaf4d2b3f3b5984143"
  },
  {
    "url": "post/plan.html",
    "revision": "4c2e33b306eb147b18387c3cc246c709"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "77e9fb3f74aab539dd45c7b892c377e9"
  },
  {
    "url": "study/english/words.html",
    "revision": "4519f7167c8310e4f7b9f6948d64ae48"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f4d623c6a0e69819188016bf3978bb16"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "7ded9c5e31e6a2b548f3c30450956fcd"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "92648a269d239c6bb98096a44884543f"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3bb70b34aa2ba74441ac948ffda69d93"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "02e8228c4557c299b732815cbca15620"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7ec45a430a364b962a3c9288e7787469"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "5fb54160b7de7074f4e6711b76771585"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "555428bc5bd8d9dedcafe92f9897edb6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "689d66b1586ecd239443e9c39d143db9"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "25515e09d5f526c41b50758f244cbf48"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e0561e309dc04b7d7799f8678405cc3b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "d783652b322ab2af8d740aade41867ee"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "57438515eb41cfd98867c7f9c67e2281"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c83e048380aeab16e9a3ecb812a0d73f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b67e34e3b7fa7b0f287e4242ae8886fc"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "1b8925b31730c02b40fb03c56cbff1d9"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5a972204c0aeddf5ea4771875998dcd2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "66c47ae0af78cf15b46cc6607681ecca"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a84ed304d796b390feaff4320ef2f621"
  },
  {
    "url": "task/2021511.html",
    "revision": "ec2460e4539ced6b9d8a2453f8e90aa2"
  },
  {
    "url": "task/2021514.html",
    "revision": "2e17d9ab5cd7387b1557bee43c05bc4f"
  },
  {
    "url": "task/2021515.html",
    "revision": "d862dd7e22f8eb70e0708da29cc3feef"
  },
  {
    "url": "task/2021518.html",
    "revision": "c6f40c12fb1fa95d6a9ed9993fe64a59"
  },
  {
    "url": "task/2021519.html",
    "revision": "9c9eedff701ad891ffad54660e36d662"
  },
  {
    "url": "task/2021520.html",
    "revision": "30a13274b3899dbcdce4bdad71bf5f2a"
  },
  {
    "url": "task/2021521.html",
    "revision": "1c4045b60500be04c277ec3f0af0ef36"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "bbc034ac1a23d6689b9c5d4b5ce5d648"
  },
  {
    "url": "task/2021524.html",
    "revision": "bdfb22189261c60eca2f1e38dc8456a1"
  },
  {
    "url": "task/2021531.html",
    "revision": "cbbdab64ec1298790c28a89c4b0946d9"
  },
  {
    "url": "task/2021628.html",
    "revision": "51d2452423db86af6d8eb2e595eb9d49"
  },
  {
    "url": "task/202164.html",
    "revision": "7e07cf609ea9c239965f3a8ffff60195"
  },
  {
    "url": "task/202169.html",
    "revision": "3bacc454cdc314dca46317b5c2d4af15"
  },
  {
    "url": "task/2021717.html",
    "revision": "ba1e838ee2de0e0fc01011b7c7a146be"
  },
  {
    "url": "task/2021721.html",
    "revision": "bd783e797e395d0eda5c035e59b8d9e7"
  },
  {
    "url": "task/2021722.html",
    "revision": "ba1eb08789d0f1adae51bfc151946e73"
  },
  {
    "url": "task/2021724.html",
    "revision": "b88caf616bb792b1dad1694d7b9ce44a"
  },
  {
    "url": "task/2021725.html",
    "revision": "daa728e88a01774b0d1cd1b14f418e20"
  },
  {
    "url": "task/202181.html",
    "revision": "fd24924c10f9285d07fdaa3ca48a00fa"
  },
  {
    "url": "task/2021811.html",
    "revision": "1e9522b2914b7d506d1ca51507ee8f3f"
  },
  {
    "url": "task/2021812.html",
    "revision": "5f3e76f6bd2322edd59c280fb565a07d"
  },
  {
    "url": "task/202183.html",
    "revision": "4ecfa223e4d1888a80b49da722a8f824"
  },
  {
    "url": "task/202187.html",
    "revision": "a88391a319f9b588a4314de889e12ce9"
  },
  {
    "url": "task/2022218.html",
    "revision": "04da8c4f2714ef3b2779a2d74659064e"
  },
  {
    "url": "task/2022219.html",
    "revision": "498859f18bf9b3a16b5ffae9db1fa304"
  },
  {
    "url": "test.html",
    "revision": "58e70c037d698528f6bc6a36ecf3cbf0"
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
