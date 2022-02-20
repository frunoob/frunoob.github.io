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
    "revision": "dd8f996ffacdc31d9ee6a29bdf4d9ced"
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
    "url": "assets/js/39.4d4817ec.js",
    "revision": "494987519da14693520f0c33f54de726"
  },
  {
    "url": "assets/js/4.e2ae5594.js",
    "revision": "daa88547d343034748f232ed229ad2ce"
  },
  {
    "url": "assets/js/40.dc25df79.js",
    "revision": "5173c46f357eef69ed67f8f5bb6f3468"
  },
  {
    "url": "assets/js/41.53a249bd.js",
    "revision": "5120901fae69adf19cdbd3590472ab32"
  },
  {
    "url": "assets/js/42.79d12afd.js",
    "revision": "2d4fdbf988010d7defb0d664c22f99ed"
  },
  {
    "url": "assets/js/43.d1694087.js",
    "revision": "fab4ef6c0b3a1e90b40ff1c532e6738b"
  },
  {
    "url": "assets/js/44.0f78c397.js",
    "revision": "dbeb24ed26d0ef4d5983708dbe786748"
  },
  {
    "url": "assets/js/45.cef059e9.js",
    "revision": "60a0932c10ef8f389f694198aface20f"
  },
  {
    "url": "assets/js/46.1d18f287.js",
    "revision": "808ef590f570830a3509f74cfd3cf5d2"
  },
  {
    "url": "assets/js/47.e8141c1f.js",
    "revision": "21828b2a8860487d6e772f1437a08413"
  },
  {
    "url": "assets/js/48.84355ab7.js",
    "revision": "efa437f9952a12d2924605a77adf745d"
  },
  {
    "url": "assets/js/49.029c06b3.js",
    "revision": "c2c163cbe1f11a7981da68bbf8ac5d2a"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.f8bbf443.js",
    "revision": "4c3a39db6675eeaf3fe42d3d588562d3"
  },
  {
    "url": "assets/js/51.b96058f0.js",
    "revision": "0bafd4baa58dcca204d98873b6e3f4e3"
  },
  {
    "url": "assets/js/52.f90e79ed.js",
    "revision": "f87b18ea31c096f1d394117f3c46096c"
  },
  {
    "url": "assets/js/53.6267c8a9.js",
    "revision": "dff5a5da202401c4901e283fb9c88917"
  },
  {
    "url": "assets/js/54.45282664.js",
    "revision": "858a141f19be82b5bd13faed4ab19f63"
  },
  {
    "url": "assets/js/55.3fa43b58.js",
    "revision": "8a7f79826c383fb8a08df37f4527e42c"
  },
  {
    "url": "assets/js/56.62ce9dd6.js",
    "revision": "86a82da5e052d3c05596b3af3d45224c"
  },
  {
    "url": "assets/js/57.072c1d3e.js",
    "revision": "4e6758cadc8f728ae8d93c226817df9d"
  },
  {
    "url": "assets/js/58.440238b2.js",
    "revision": "40f7463f6224c7a9170e40acff145df4"
  },
  {
    "url": "assets/js/59.3038de61.js",
    "revision": "bfc7c67a423e8209fe7439225ce0e5e8"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.efefcf45.js",
    "revision": "e38e40359cc2a1d17a3658681d871456"
  },
  {
    "url": "assets/js/61.8a4271cd.js",
    "revision": "8ea155603c4a83dc4be1f49307a65143"
  },
  {
    "url": "assets/js/62.781a42a9.js",
    "revision": "6da8acf30174af4ddfd477ad0860b0f3"
  },
  {
    "url": "assets/js/63.8e7ba185.js",
    "revision": "424e9bbb71168cae3e6b26ee975565c4"
  },
  {
    "url": "assets/js/64.5fe643e1.js",
    "revision": "70fcf98d28ae0e3ea00f9237f5ed4009"
  },
  {
    "url": "assets/js/65.d9bb54c8.js",
    "revision": "7c1f13b9e2bddafda16dbf67ead59f73"
  },
  {
    "url": "assets/js/66.02157cf7.js",
    "revision": "13970f472f3c925f06e83b0be2e88e43"
  },
  {
    "url": "assets/js/67.8d8d41cc.js",
    "revision": "c2e471ccc13bf43f651e14247fe4acc3"
  },
  {
    "url": "assets/js/68.5fb01d08.js",
    "revision": "21ef314f23316a505abc8907ce42d21e"
  },
  {
    "url": "assets/js/69.957f47e9.js",
    "revision": "83ea9c70698a3c0d81d16fe1cecc91a4"
  },
  {
    "url": "assets/js/7.c779248d.js",
    "revision": "61248d2e4fe2db262275c31712cf2a77"
  },
  {
    "url": "assets/js/70.25527a71.js",
    "revision": "d12baaad7ee37690cfbe53535db3799f"
  },
  {
    "url": "assets/js/71.06d4e904.js",
    "revision": "dd84d381779c57c3321e20bc45cd5c7e"
  },
  {
    "url": "assets/js/72.e4dea06d.js",
    "revision": "374d15f1b9c13f276a64614d1ccccc42"
  },
  {
    "url": "assets/js/73.a20276f9.js",
    "revision": "0c45e974ebff167676d54b93949d1e2e"
  },
  {
    "url": "assets/js/74.3d9dffb7.js",
    "revision": "d28a336f06ed2f28cf2c925aa01cc4f8"
  },
  {
    "url": "assets/js/75.50adbd1d.js",
    "revision": "c4573fa5a8d5a57d46103bd3afa1f123"
  },
  {
    "url": "assets/js/76.fce44934.js",
    "revision": "b93e6ac71937b12a9d1f0736d236b757"
  },
  {
    "url": "assets/js/77.d11326f4.js",
    "revision": "537c17ed3c747312043bc72ed851e572"
  },
  {
    "url": "assets/js/78.778e8bfd.js",
    "revision": "a3ad4c36b004a8394a52b7835406447c"
  },
  {
    "url": "assets/js/79.c0e90fe8.js",
    "revision": "8e773dd2b32b94aa7e81670ce096a301"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.ee14e71d.js",
    "revision": "0efc69e1cec73f44359df0fe5e942b1c"
  },
  {
    "url": "assets/js/81.0a686349.js",
    "revision": "0fe9e6c83940d49a0f65f8182a42ae1a"
  },
  {
    "url": "assets/js/82.2d6aa74c.js",
    "revision": "c559053ae0bdc7ee37e8350486ee9603"
  },
  {
    "url": "assets/js/83.d98f0c44.js",
    "revision": "3b4065dc73c811e7b38f9e7e7dbe18a4"
  },
  {
    "url": "assets/js/84.6dbe0faf.js",
    "revision": "843c2cb09df272e43e87f51742f0f06a"
  },
  {
    "url": "assets/js/85.6cfbe907.js",
    "revision": "e46320250e06e446b693a4f40fb89955"
  },
  {
    "url": "assets/js/86.6816ae27.js",
    "revision": "e6a4f97ea792028ca2768db54d1657cb"
  },
  {
    "url": "assets/js/87.ea6c2a2f.js",
    "revision": "faa7f6acca16b7a2fe240990b2c5ef6b"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/app.9f96c478.js",
    "revision": "7d8e01264068093cd00bbda2c5e56fd2"
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
    "revision": "65192b4ede3a922b7350f5cb3fea8b96"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "ffb4bbd149442cfcd698da9988b4c2dc"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "1bc5bcca450641e08286236fa6fac690"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "697762f898306e053156a2844f1b5afc"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "736aa2aa9154f7a4cd2e7f6230c53d61"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "36961c3dc494035fb71f596a6e3649cf"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "656af3bb9421fb145123c586c66a38a2"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "f0545737e6ff85a3a5ce668b87dee7de"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "2a1620972af84efc526469a75b5a91a4"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "6336bd1a33649406239d15e6f37404ab"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "5ba4510e0ba3393fd71c377077b89274"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "1b0cdb50e39701f67463b2811f609c8f"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "813859ad3d0740e96e41499ccf6a2998"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "a418459442393a825d490b2ed2eb9878"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "64d0ea12f30464202ecdd7fe868049e0"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "d4e34c97a2f07ea3734bdf1097393ffe"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "887a27286225bdca947eb4da6a7d1e8f"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "e1a1cbf2f19438369cc4bad01cddcf23"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "eba92cc52e5201f7677891ade55d27a2"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "835da7c249ec4ed77c2cdd4f626c5305"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "ab7f6b1a9b43fea63d38f78cdb46dbea"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "d2616961f8035c2c9692a805291dd427"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "943596ff42d8d3b76ad5cce41c4af2c6"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "e1d0ffef1831d119f299071e2570494a"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "c7e631b1f638f02607f209ee77a670fa"
  },
  {
    "url": "post/plan.html",
    "revision": "754d06c04ff806a190107f1e197c2f52"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6e7fde8b2ffcb47645558ab1adf78013"
  },
  {
    "url": "study/english/words.html",
    "revision": "cd8dd1bc6958a7ef2039f84636820bd6"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "7cb7b38cec6b800a028185a3390b34da"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "ef54e74a556e5daf70fae3b4b4797d1c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "815bebab3eb32439da3f3457bb0154b1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "683700185e96a9c4f332a5d88dc69dfc"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "53782ea0827c281c1cf5c8d6d3c5cc74"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d78c9cf5078e207b46c50360b5bc7359"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2597006d677bde06f9dff00a6fd87e7a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "739b6c35f418cd23e5edbb6d71c01ca8"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "0499d232856c3b254e1d96235fdf784a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "3707f43070cde1baffece82f890b6a99"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c96d65bad366654cc524dcacc1ac41b1"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "3dabd2566ef5fc62f26698307259628b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8b6456adb4c7527cf8987a02e78f9f27"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "562ca67705bd24372c9131cb8ce8c5c9"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "0fb21faf844946267e32e133282d061e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "152e968e6725214bbe56c5cacb0cda62"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d7f1a2b64346b0d2026958ed12d74e2a"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "a8996b92d55b034a6bd40a52d0f08762"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ffe49c0596d150614a3705015bac9099"
  },
  {
    "url": "task/2021511.html",
    "revision": "84348cb4102a535b0b106989bebae069"
  },
  {
    "url": "task/2021514.html",
    "revision": "4601ee2d9d7528b6cb20181e2a0d7cbe"
  },
  {
    "url": "task/2021515.html",
    "revision": "dacf6c3949e0fb7953f203ca4849f3f1"
  },
  {
    "url": "task/2021518.html",
    "revision": "e3749a20cfd33fc5509aff4cd69969b3"
  },
  {
    "url": "task/2021519.html",
    "revision": "5e73d2b2ed5e1b5f73d390163f66fbbd"
  },
  {
    "url": "task/2021520.html",
    "revision": "0b3240487938390a1165f7d7ca3220ac"
  },
  {
    "url": "task/2021521.html",
    "revision": "061c2ed5480a0bef3c0f7aeb463b20af"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "1f8d11b917eff59a1b5c671d03bcfbcb"
  },
  {
    "url": "task/2021524.html",
    "revision": "4afaaff2e21c2737801ea0a22ff5b942"
  },
  {
    "url": "task/2021531.html",
    "revision": "dbcedbf62c221f3d580a4108a3159934"
  },
  {
    "url": "task/2021628.html",
    "revision": "07b0f8e4f927d5d31daf8fa0058fefb6"
  },
  {
    "url": "task/202164.html",
    "revision": "19be5fa5f1e8f73dc1b51907a928ce0a"
  },
  {
    "url": "task/202169.html",
    "revision": "2eb54b8a86af613d30030fc96d1bda10"
  },
  {
    "url": "task/2021717.html",
    "revision": "df9fcf66b218c9845209302fdfb20c7c"
  },
  {
    "url": "task/2021721.html",
    "revision": "9b7cc711431eb4c38cc57f2caf40ac31"
  },
  {
    "url": "task/2021722.html",
    "revision": "eca1e707c327168f2859ea2ba3928900"
  },
  {
    "url": "task/2021724.html",
    "revision": "f2822998fc262df893dd270c1fc77913"
  },
  {
    "url": "task/2021725.html",
    "revision": "ba0236ad1c87e279d96c51c3f05ec356"
  },
  {
    "url": "task/202181.html",
    "revision": "e42010dd41745f55912f039e867d8dbf"
  },
  {
    "url": "task/2021811.html",
    "revision": "eb3493b200a7b275d1e508e8c1c30557"
  },
  {
    "url": "task/2021812.html",
    "revision": "4530573879025af5853e277d414926e4"
  },
  {
    "url": "task/202183.html",
    "revision": "c7f4911e8747b6f009d58019ef7eab0f"
  },
  {
    "url": "task/202187.html",
    "revision": "d134d6b8057250b06fb7449af8be5393"
  },
  {
    "url": "task/2022218.html",
    "revision": "ac755d158293e9af0506fe9c0d58ff13"
  },
  {
    "url": "task/2022219.html",
    "revision": "1743a13d83dfaad6f1a78ba02bdabdf2"
  },
  {
    "url": "test.html",
    "revision": "64ff7a2c2f4c932109c017bddd536934"
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
