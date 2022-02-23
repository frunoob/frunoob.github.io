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
    "revision": "43507ce4d2f1b6dc0b5030f2bffdd37c"
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
    "url": "assets/js/38.f0b4eac3.js",
    "revision": "908bc622c21fd4aa788c3bbc27b8bf19"
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
    "url": "assets/js/app.728fee6e.js",
    "revision": "b268cc11b5d344031c980949016b4e8b"
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
    "revision": "73434cba7b62b4322cf4460ec997fbe0"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "d34454f2ec589dc5c096251da9497e55"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "757e43dd1e86c6678b5b13484d141793"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "473c63ce08c96e6bd14fc072eeb481dd"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "817ccce64aea402a390c3442300bf3cd"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "38515d68b0b186695ee8cf95684a8b7e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "83640763defbdc11e014dc36af34c3f8"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "a36744c451418c97d253d99f470f75cb"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "10c140e37f72e36c7aa09ba5150c2b2c"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "4435678ab2038d89afd3f0abe280e592"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "2adf51cf7fcff21fb6717085442dcf2b"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "9cbc49cb16898389d8a4d406dc9aa2ae"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "8142525ce5e63cdfc5011f358675eb98"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "53557f96c13224fbc33d1284932aa439"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "6365862885ae65f381e8791dfd0da43e"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "b7cabf6488583a0f7afdfcffa5fa9f13"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "012eeb558e2335eb3eb266031cbe5ff3"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "86f40cc3ac18e2377417f03f1fee2a2b"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "135ee1bdeeee3aaf2a608f4cf27315dd"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "67f6ed3d2d052502f4183ca1e7fbac3c"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "ac66e6558f23b0371b3565b0991e04d9"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "08d776243bdebb6f6371093df9a50f1a"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "1aa58bb78bfea0ffebec1589e193f4b2"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "7c63a17fe6961a75334f8d032d21f676"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "27a8ecfa49898159f55399d36d32db43"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "3161ea406c8b02d3135035ef57126682"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "840018c090c03f307654c612f0b20a11"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "be17eaab948e1ab877eeabeae5d433f8"
  },
  {
    "url": "post/plan.html",
    "revision": "4d338173e5e4e87f639effd5aa07823c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1f548ccc55510b3a17aca8bd9dbfa2d4"
  },
  {
    "url": "study/english/words.html",
    "revision": "bd2b49e93b78db0c9e9a0321f1df3785"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b0ff404d7320f1a2f68da7f0ab10e562"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "b70f2cf543a603af36129247aaccb0d4"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f5cfd2f8f1fbdd36319670e4d8915c7c"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "1ba583ec61aeae8502b4c984486db4da"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "f7004ca04ffe63d1b098dd5a158dad0a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "b5b2d8364be0086e9568f480765240eb"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9a30c80c5a750d0f411dfe248ea88694"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "11b650fcabfe36bfa9994447e81f554d"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d2f9bd89aa0e6dd52a9792e4e3edc432"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5f5e08ed56dfc6f0dd3a6f8eed3495a4"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "4d126f55f0a3590f9e9ce55b9399517d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "759f9659b745c96c009064d9238917a9"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "1811aa0f3a7e0d98f08ab042e3efcfd6"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "94c6d376d7f8727e42d7c80b1880d889"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3d8f553781e2ef8081c9ee6ad36bf80b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d1f7906f91f90b034617a29a28795ea2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "63a22c6b21ad778397fcea8e38ffdde7"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "debf1cdbefb1926b8f58a7236c68dd00"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "cf52fa9adfc25d9b1b0034806272ab65"
  },
  {
    "url": "task/2021511.html",
    "revision": "edd34e25cc70b8394726fd9be2bc56a8"
  },
  {
    "url": "task/2021514.html",
    "revision": "90fd06bd91eaab97c45d638d8d470a77"
  },
  {
    "url": "task/2021515.html",
    "revision": "4fb6986e9d3f8f720a38cd2e1bf51f71"
  },
  {
    "url": "task/2021518.html",
    "revision": "1d58d61ae6b01f17ee1a76ab4bbecc5f"
  },
  {
    "url": "task/2021519.html",
    "revision": "ffc5076217aa270498459bd96c8c14ea"
  },
  {
    "url": "task/2021520.html",
    "revision": "77caab4ed03dd9a99ecfe0fa1b2bf235"
  },
  {
    "url": "task/2021521.html",
    "revision": "bff1bb16d265986e7652ffdd4f1c4069"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "9cfe39cb2417bc19ca8445c02edafa6a"
  },
  {
    "url": "task/2021524.html",
    "revision": "bdb59441be85cbb828f91384c3640d41"
  },
  {
    "url": "task/2021531.html",
    "revision": "8fde018e20a38c7ced41b37306110118"
  },
  {
    "url": "task/2021628.html",
    "revision": "da7f94e4d3af5029322c3164e9c381cb"
  },
  {
    "url": "task/202164.html",
    "revision": "fd5e44e91e56d5eb10d053aa9946ccdf"
  },
  {
    "url": "task/202169.html",
    "revision": "a2c030ca004b571bf5c8876389de5aab"
  },
  {
    "url": "task/2021717.html",
    "revision": "1814987591eb688c3e272ec236aab137"
  },
  {
    "url": "task/2021721.html",
    "revision": "588d3f741ece2813c69b43977d991e3d"
  },
  {
    "url": "task/2021722.html",
    "revision": "a86e0767f7b6f239eb87a6c07db27378"
  },
  {
    "url": "task/2021724.html",
    "revision": "13625689838489299a13c118b77d4077"
  },
  {
    "url": "task/2021725.html",
    "revision": "c44fc570f1cf222d15d4e545b98002d0"
  },
  {
    "url": "task/202181.html",
    "revision": "632103acf87c868975fea9bf7487e7d6"
  },
  {
    "url": "task/2021811.html",
    "revision": "5877ab70b5ff7ab4d07303c0c0c29a88"
  },
  {
    "url": "task/2021812.html",
    "revision": "806b8a01a25dc34cf56cdfc41914c394"
  },
  {
    "url": "task/202183.html",
    "revision": "f2fcf0478602d5c7e9bee61a8a209fdc"
  },
  {
    "url": "task/202187.html",
    "revision": "edc4e781539604c46f7e5574c5d0b6d1"
  },
  {
    "url": "task/2022218.html",
    "revision": "44fd163207b2f56fd1ca571f9fba3ba4"
  },
  {
    "url": "task/2022219.html",
    "revision": "213a69089ad9e934f3795663347008fb"
  },
  {
    "url": "task/2022222.html",
    "revision": "dda86de08c59e5be38799950db0a3d8c"
  },
  {
    "url": "test.html",
    "revision": "260041be9f34087924f98ac75905aa84"
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
