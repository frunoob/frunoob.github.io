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
    "revision": "60bbbbb43b17b77e254696c6f3d4a729"
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
    "url": "assets/js/39.185341f9.js",
    "revision": "fa26453b26baad382902ca08b1b36bed"
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
    "url": "assets/js/41.a491a3b4.js",
    "revision": "fd51a9cb19e896292595a69f37ff0b03"
  },
  {
    "url": "assets/js/42.0c55c840.js",
    "revision": "34261781b63a80873b94822a9b3628f0"
  },
  {
    "url": "assets/js/43.3bb442c7.js",
    "revision": "1c0604e451685efd3363d7f19f6bec07"
  },
  {
    "url": "assets/js/44.76647efd.js",
    "revision": "5b89ddbb573df14451c09b9e6c36adce"
  },
  {
    "url": "assets/js/45.2f650ac8.js",
    "revision": "eb8073c8358bf5e32de74319b314f274"
  },
  {
    "url": "assets/js/46.d11a95c4.js",
    "revision": "b3472771272e2178dc800376af2bcae4"
  },
  {
    "url": "assets/js/47.a666f6d8.js",
    "revision": "af57761eb5314b9936570e6b519afb1d"
  },
  {
    "url": "assets/js/48.73ce9b0a.js",
    "revision": "ca4dd21cc9fd681c9416b4608a0f8db0"
  },
  {
    "url": "assets/js/49.4e4c6bf7.js",
    "revision": "07219202d099bf494ed10a4f1ca87ad7"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.34e85fc5.js",
    "revision": "29e810ee5f5053d9c62f9fc78d8db9e6"
  },
  {
    "url": "assets/js/51.67f5a002.js",
    "revision": "9390792b2e605b98d4eb960cb3004293"
  },
  {
    "url": "assets/js/52.f54efab1.js",
    "revision": "71701b637da06bff6a966305d8c90669"
  },
  {
    "url": "assets/js/53.b801ca99.js",
    "revision": "5df86bb09c42c7177f87e3c6a366c5c0"
  },
  {
    "url": "assets/js/54.af299fff.js",
    "revision": "e2e992016fa1e6875a61a911276a385e"
  },
  {
    "url": "assets/js/55.f37cc181.js",
    "revision": "ad02ad8bb26aad9ef04d61a359a987b1"
  },
  {
    "url": "assets/js/56.fb4c6701.js",
    "revision": "026e1d7e7fe86473d01a3e324423971f"
  },
  {
    "url": "assets/js/57.8d881d8e.js",
    "revision": "f710883df1d7002bc40569c265988b93"
  },
  {
    "url": "assets/js/58.de663188.js",
    "revision": "2dc6a7d7c6726f6cf83356c450b55e25"
  },
  {
    "url": "assets/js/59.5a8b0dd5.js",
    "revision": "fac4245448d514c5b1cee8ba7e100b15"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.15700edd.js",
    "revision": "8482155b2bcb78301e293bcd763183ef"
  },
  {
    "url": "assets/js/61.d6ef0249.js",
    "revision": "6dd311b4d3acd2920bd7e353ad487c9b"
  },
  {
    "url": "assets/js/62.7622de01.js",
    "revision": "9cda693892cae5c3d5cf625f9381a444"
  },
  {
    "url": "assets/js/63.2af331b9.js",
    "revision": "6c83ceac97cf819e7711735b6715c3b4"
  },
  {
    "url": "assets/js/64.933cfb6c.js",
    "revision": "d51dd41df9341fcec79a4f8c3b39bd64"
  },
  {
    "url": "assets/js/65.659b269b.js",
    "revision": "dc944d46a980d4e5c0a14e52e685060a"
  },
  {
    "url": "assets/js/66.1f362c27.js",
    "revision": "35656349ee327b469a58b17c946274c7"
  },
  {
    "url": "assets/js/67.e68593c3.js",
    "revision": "a80135ee38f84893fd4999d6cd8f02d3"
  },
  {
    "url": "assets/js/68.73f6d56b.js",
    "revision": "8d0ec5a12c7d2d66ff924659ff339c5e"
  },
  {
    "url": "assets/js/69.eb86807a.js",
    "revision": "d6a5791153cae6c3a8511bf162308fd8"
  },
  {
    "url": "assets/js/7.90c7d434.js",
    "revision": "9cf0683c1249f1330f4ceb7eb93043d4"
  },
  {
    "url": "assets/js/70.ea6b566b.js",
    "revision": "de7ca96a52611da97478b83bfcc34552"
  },
  {
    "url": "assets/js/71.ef43546b.js",
    "revision": "09ada34fc8af383ca7a4b3c2b8f0b058"
  },
  {
    "url": "assets/js/72.0d1bd21b.js",
    "revision": "46532574dea556e7c4ad8a185ef809bb"
  },
  {
    "url": "assets/js/73.72cf1a7f.js",
    "revision": "4cf3f5c6fea6caa7da21c0f839182934"
  },
  {
    "url": "assets/js/74.d2ceb356.js",
    "revision": "5fc0f3c4cc2be8d5cf92088afac261e9"
  },
  {
    "url": "assets/js/75.1b3298d3.js",
    "revision": "812f0f94def2c0c24e3f0a2bb50e5bac"
  },
  {
    "url": "assets/js/76.e3bc8699.js",
    "revision": "e7a95879919681c175e97f34c987a603"
  },
  {
    "url": "assets/js/77.09b6faaf.js",
    "revision": "c337e2d5c2c551235af16a0c3641a467"
  },
  {
    "url": "assets/js/78.1ace16b0.js",
    "revision": "108ba3cb01355f1599eeab5fc7521e8d"
  },
  {
    "url": "assets/js/79.5ebcde49.js",
    "revision": "a809657d8714ae68fd9e3af52ae2c13f"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.54951e5c.js",
    "revision": "211d5d5eb4a557af3c2d4d3f762471d8"
  },
  {
    "url": "assets/js/81.f924a0f1.js",
    "revision": "55811269cdfc987274e9e3b67bcb5ac9"
  },
  {
    "url": "assets/js/82.efcfb8ef.js",
    "revision": "5c5f75b81aaf345a46535405c3577530"
  },
  {
    "url": "assets/js/83.901376f1.js",
    "revision": "4bed28b643772aab071a08cf3fd4dd42"
  },
  {
    "url": "assets/js/84.7dc6e45a.js",
    "revision": "3dc9faede6573fd824ad5215a2304cb2"
  },
  {
    "url": "assets/js/85.27c8f93c.js",
    "revision": "f2b671318dc579930a0f33ca6adf6b1a"
  },
  {
    "url": "assets/js/86.a32de8f5.js",
    "revision": "6807b1ddc14cd329fee9949a1815a20c"
  },
  {
    "url": "assets/js/87.e6a58b2b.js",
    "revision": "7a2cf598bc9f617efa8aeaa583ac9f17"
  },
  {
    "url": "assets/js/88.d9d63107.js",
    "revision": "0dcaa79cfc61092a41ec5979e5c8ddd7"
  },
  {
    "url": "assets/js/89.698907ba.js",
    "revision": "a8d2a614d9b90bd61d393447fdf851dc"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/90.c6a723ed.js",
    "revision": "4f71c63726b43aa2f60a6a2a31d4490e"
  },
  {
    "url": "assets/js/91.dda560ce.js",
    "revision": "23bc0aca6f2257c3144707ec4c184c71"
  },
  {
    "url": "assets/js/app.b1acbc9b.js",
    "revision": "950120d90c18bf846b7836666a653005"
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
    "revision": "f8ad72cd038c3d7c94b719091e256b75"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "7fdd8decd3672d82c0233a203767528c"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f7f6e7c04788b09a136a023a23b0bc1b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f010f6c9bbb1fac5e44de44727f9e196"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "c4dabfddc17320ae5cc46c2abb5d10f3"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "6298bcb83ea6dfd3634f2ded4463c49e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "6ce93d6fb7ae0ed4303a7c249f861d26"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "a6c90aac1ceba915ef5da11c10e8c3e8"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "8705731aecf519e36a1cf31c7ffd6d9e"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "7bf3f1a40590840cedd2b84eea58946c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "0b5990625b16e5ce2f62cf33d77d790e"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "b3315ebb9d5de023b17b7748641d2125"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "63bee5fc77093287a9bb43e8893abc1d"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "c214aa80679e153671bc468eb1f18d83"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "ddeaa2811b6ded09b22e41d5d87f1e23"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "e0a0b68c135bbed0827e3c26cb1b39f0"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "f0de90f772b16189dae2db000a796891"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "855625600e7164ae5e60532bb3b0d431"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "01337167c348ea1ffae11e9602b5af5b"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "9afa032d6769367f408d160d690c5b58"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "579141f3e23767ab5cfaa163be005191"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "05473ea67b398c8a4b81dda0f6a7f6ee"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "47366b527fa01648b16992de6e225cab"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "9c29cc3154baa53c51d9a47ec2c877cc"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "04123a7fa79790e8dd1cd5d29c7330e6"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "5608a3cc5809932ae44f04295d62133e"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "80f8d98ea0c4d14e8c4a9359d2058e4a"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "295edf17f5f57338ce5429cb59cf85f0"
  },
  {
    "url": "post/plan.html",
    "revision": "eb20c1684e632974678023cf37aa0eb4"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "b92b80bf43c8135d74d313505d0986d8"
  },
  {
    "url": "study/english/words.html",
    "revision": "67a05899aad11c6ff5a724e97fb01598"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "528118a8bf1a88e67584c8422041284a"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5068d09290b3eaf72e7013ba3c9b58f9"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "006cf7786d236a861de4cca21df432e4"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "baf8666b55ef90671ab0ab98edbf8c71"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "92c66a99350c02cd3a9290bdd8f6743b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "dd14ddde599ecec5c6d487681854f22d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "91db1fe72b2bf36000d9a76a35433331"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "e25f9d4e5e8c64b945ec91a166b0a39b"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d4016e9a2069f251dd811915e5a44d31"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "3e0d337cf9ecf950a4d4c9a0d92b2b5d"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "29d9ae198577529881190505ab2b0305"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "1f1017416d5cfaeaf008ed07b3625d81"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f1c9352cf5e00ec82ba0ada375a0a09c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "31e804576bdc3aad81a1108492f00492"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c086ff41b8e46a7649130c49c6a8abcb"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c74b820f7ed1633fce1ef8d50e90ac02"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ea1ec7a526d3778500a8d4d7a68a087c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "331062c53a09293fd694ad1d70233b6a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "089df4b06cae9b851f4747a2a2c23d3e"
  },
  {
    "url": "task/2021511.html",
    "revision": "858ec6e73604551c0760a61b782302a9"
  },
  {
    "url": "task/2021514.html",
    "revision": "fec17f76fb73294ed2d0b8667be34b2c"
  },
  {
    "url": "task/2021515.html",
    "revision": "e39b00d3bd3566bc8e8816d0ef1bbb51"
  },
  {
    "url": "task/2021518.html",
    "revision": "fa8aeb9d1f68626c402085904549713e"
  },
  {
    "url": "task/2021519.html",
    "revision": "99a48474166cc0517bcf7470bab57e2a"
  },
  {
    "url": "task/2021520.html",
    "revision": "e9f403607e1b282068527022331c115a"
  },
  {
    "url": "task/2021521.html",
    "revision": "76f3f86fd7a693d413dffa0e024ff21d"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "241fa17befe99c77f4c5ce082c6fedf7"
  },
  {
    "url": "task/2021524.html",
    "revision": "838012c25e484fcdf620ed5851168796"
  },
  {
    "url": "task/2021531.html",
    "revision": "f457ba87d18d8641653c0e54d573d4d0"
  },
  {
    "url": "task/2021628.html",
    "revision": "0e8893076a2fd1f16e857ac2734e7a7a"
  },
  {
    "url": "task/202164.html",
    "revision": "9ba577ade52ad3e244bc592577c480da"
  },
  {
    "url": "task/202169.html",
    "revision": "551e79ee92b32889a9f80b5eb314ebc5"
  },
  {
    "url": "task/2021717.html",
    "revision": "fdd4bf3a8079ec53dbe0fcd5d7d2314b"
  },
  {
    "url": "task/2021721.html",
    "revision": "6aefdf38aaac38532e7039b9ad67a01b"
  },
  {
    "url": "task/2021722.html",
    "revision": "967691d4539f507700a49d9ac5f9be1f"
  },
  {
    "url": "task/2021724.html",
    "revision": "cc62a4407753adf9cc64eb5386e630fa"
  },
  {
    "url": "task/2021725.html",
    "revision": "f50252c91296e8ce5641e662a1aa0427"
  },
  {
    "url": "task/202181.html",
    "revision": "79ca8529cb9239948c60b7130498d330"
  },
  {
    "url": "task/2021811.html",
    "revision": "6d61292aad76898139b8100876e7d0a1"
  },
  {
    "url": "task/2021812.html",
    "revision": "7277221ec3478e85d21dc91f2232fccc"
  },
  {
    "url": "task/202183.html",
    "revision": "ef5fde8fabad04379246d40d2d411209"
  },
  {
    "url": "task/202187.html",
    "revision": "8912c811ae7c780f002b2d80fe7312aa"
  },
  {
    "url": "task/2022218.html",
    "revision": "93938c4d353d27470a30dd8b8539ee69"
  },
  {
    "url": "task/2022219.html",
    "revision": "e16322434f2113e227597897ff8ee868"
  },
  {
    "url": "task/2022222.html",
    "revision": "9634d10b857a836e04dd9b1e3466c391"
  },
  {
    "url": "test.html",
    "revision": "618d1622a3d152152ce41004e718b172"
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
