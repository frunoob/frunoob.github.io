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
    "revision": "d35d91fb2ae255eef4902507ed506972"
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
    "url": "assets/js/40.83cad994.js",
    "revision": "752b523cd45a999e2751b795e60d073d"
  },
  {
    "url": "assets/js/41.5845333f.js",
    "revision": "202986d3df2ad3e35631a2f468d4a54b"
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
    "url": "assets/js/app.c2044ffb.js",
    "revision": "7045e8a6115ae3518d628d985abfe455"
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
    "revision": "3bb688619e76642585d83672de74ff11"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "b831f0c419590571f265f37a0c2a9bbb"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c66a73fd13722c64386e2b5541fef106"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f7c292998d21df8103b3fdc21edd9cb8"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "880c3fbc377f0684329b69efaf09564c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "581cac88b57f518830bacbdd11cbc3d8"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "1dae3969b21bd925a7cfb4fe9b7079d8"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "45f96c458739251532ac0f7e804ec60e"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "aad7d25b69b27b729f6249e44a43367a"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "1a4dbf6afde360bbcfb804f791f7b4f4"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "b06de4623be71b3a519368881ffaa036"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "655c1cc373d6151e5b9649b511fd223d"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "2d92a8bee0c230460fec5758799bbcc6"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "fcd0c2f420b5a7d7d4aa840fd891c38b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "8bfaa0bc1693d6aa95d24fe1dd3d8c77"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "be060d7932a593f0a1422cf4f786bd23"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "b08b3b3190cc81ba78f401afb2095d73"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "64793c8361e4287c14e15e34866ff8b7"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "4f4389e1205a22de81061d0def34e433"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "0df9207ab647f284fd211ef269e475d5"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "3f56e68e49eaa3af36ae2cc68043dfc2"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "08b1ebf9370684ba1b491b8b3123bbce"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "6b62eabfbfdbdd1b9563470abfb86f50"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "261bd42fe8a5f2dc33e963b2e748aa2d"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "a025ca57d8bce9b3081dab9d183fca16"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "2b0aab556f9611245724f1a2294aa41a"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "097d832a9d3513e77892e16c6faefa71"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "1faad1c21c14adc5e84fc1d06ac48475"
  },
  {
    "url": "post/plan.html",
    "revision": "347753dd55eab6a37137ad4263e2eb30"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6312ac89984851bbedc8189bc53f3903"
  },
  {
    "url": "study/english/words.html",
    "revision": "51f1947e32cc1aafb30e5cbf194bb81e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "85c04c9b9276e0f6f2dbf3072ff19f6b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3cbc694e7efddacf1b50c302bd639e1c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5c1aa361981c7526b6a2efdca6e53bbf"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e50590b0459054c6465db8e7f1d94ce3"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "662d70a3e5cd8b5c44bd1e3e7c706d9a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "3f1c2f4c63571975ddb74ef185b80bb1"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "36afbd19dd7c1fd256e47bf33402c244"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "dd312ca15e8a3cf1c2eb8a5037da96a4"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "15ca26818ccbc59a5952e01cfe3efce3"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "d55d91eda88ef981f27ec70dadd2fb6f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "80d9d6fb2f494fab33c33468963931fa"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "8848bae0990c7a2f9c584924501768cc"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "bc6648cb5009d0a204bae7e71b86d45d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "86dc8f697f699a551e4e84904be24c4d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3384927e57178235d4680443be433ce2"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c40d62765bf78de57204a99bc6dcb225"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "2c2f08d64c30bdda4c2bf3a46a9b89d5"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "7f43f2dc9112b3a445c8e5ecfe065f35"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "09de117d98d16e9bda7638856e9ebb2b"
  },
  {
    "url": "task/2021511.html",
    "revision": "f18c5ea1cfe33e22ff471a44867fd895"
  },
  {
    "url": "task/2021514.html",
    "revision": "b261d210fb1cb66290252e25b40a6c29"
  },
  {
    "url": "task/2021515.html",
    "revision": "bf023d4095d0e1a08d0d65f96180073a"
  },
  {
    "url": "task/2021518.html",
    "revision": "9b862c6cfd0e2bea1c0114f1a9098077"
  },
  {
    "url": "task/2021519.html",
    "revision": "f5c077a26c6aa5b5d4d8e8955561e20c"
  },
  {
    "url": "task/2021520.html",
    "revision": "bb4e879ea36c2aac670474ec83e6c62f"
  },
  {
    "url": "task/2021521.html",
    "revision": "625e1d42b5331068b51f75c571b8be09"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8dc04f9c201cabeb2959b66684aab84c"
  },
  {
    "url": "task/2021524.html",
    "revision": "5a3bcfe6c2d41c61cfe333c5281fef15"
  },
  {
    "url": "task/2021531.html",
    "revision": "662486828dea442e0cc7a66a77c8f7dd"
  },
  {
    "url": "task/2021628.html",
    "revision": "ed748f3d484e4faa3684c89802189ca5"
  },
  {
    "url": "task/202164.html",
    "revision": "9efb117c1774f1bb9ec78904a6f4bb32"
  },
  {
    "url": "task/202169.html",
    "revision": "d1d8b670870e8d75460f53436838c7a1"
  },
  {
    "url": "task/2021717.html",
    "revision": "b36ae63e030da056556d874feb459dd8"
  },
  {
    "url": "task/2021721.html",
    "revision": "99a7537eef6fcadbe8d1e2796fa7de64"
  },
  {
    "url": "task/2021722.html",
    "revision": "d23f1def720d22008bcf3ef6588764e6"
  },
  {
    "url": "task/2021724.html",
    "revision": "2c03024c9a30e8f6aade9825478db200"
  },
  {
    "url": "task/2021725.html",
    "revision": "d157ce30823b323aed94356510401191"
  },
  {
    "url": "task/202181.html",
    "revision": "313e99bf2f386df12e7c710943cafdf8"
  },
  {
    "url": "task/2021811.html",
    "revision": "cfb05c04b5fc9b1f4f6b945c83f43abc"
  },
  {
    "url": "task/2021812.html",
    "revision": "c5ef2f5f36497c1e7f3b1e3406781bff"
  },
  {
    "url": "task/202183.html",
    "revision": "81934ceedb16a29e500c649f16f56d52"
  },
  {
    "url": "task/202187.html",
    "revision": "893d7bc477aaf3af4374f061b7694831"
  },
  {
    "url": "task/2022218.html",
    "revision": "77cbb1f6aa97e03b9879e6361909ba99"
  },
  {
    "url": "task/2022219.html",
    "revision": "6b1a749c8cb45ef78c6628b227e1bd85"
  },
  {
    "url": "task/2022222.html",
    "revision": "ee566facab941f8f547af1d4320f790d"
  },
  {
    "url": "test.html",
    "revision": "15f982e49f8ad5d36c7172742636fb16"
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
