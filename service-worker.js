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
    "revision": "caad9b67d06879f5bbc5317559ee7dc6"
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
    "url": "assets/js/41.1b86c4ce.js",
    "revision": "8a2e6ed5e00f05acb59205b5d8d1b69e"
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
    "url": "assets/js/7.22e4ef31.js",
    "revision": "1d707850647bb71f0a646ab7ed22e0ec"
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
    "url": "assets/js/89.1a07ce6b.js",
    "revision": "5207cd11231b4a4d100c254419971f39"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/90.7c244e11.js",
    "revision": "f2cc7f7e290384dcf2636695dd1e2a02"
  },
  {
    "url": "assets/js/app.f4867323.js",
    "revision": "c22bd775e7a5ec15b1aa67bdfea507b0"
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
    "revision": "cdfbe2919d98aa8749b04fc7cd24c22b"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "adbf97fa3f944d91399f5882c3d6b0e4"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9c7f9f9cabefd4f79d174f01f77c0678"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "1325d220fee177bbafd2796a2bc7ae55"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "968d7a0a41f99b86f0bb9aebfa653b1d"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "417715dd10fc636ece3f8739f54260d3"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "123b834c6bb42df70359d00b7cc07f6e"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "985a7272a8c4e315b14e8fbd9a47198d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "1f232fd9b0a81c82f621318b6dd412d8"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "ad425e1348caba6d6ebcfe7d7664aef9"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "aedfe2d277c66e4769ee6380434580ea"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "cc10773f0f5c81f59e82828427e40101"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "d2510dd203b5c6da01a554908a7f809f"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "a64a5249d5d10080843ad1424441ff63"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "fbbd7598afd5947b7e0e147ef6062c20"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "f6016a77b69bf73297bd7d2cd30cc553"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "950d5ad8f81aa200804786d2dfefd59a"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "ee956111e7d92a05e48168c09010c58a"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "5ade4aaa5b2d7b186e62622be4dd6f4e"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "6e23bb3e120f287fff0acd2942a95468"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "81da35a10bc897ee927a9579e34e27ad"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "abbb50c138fdbdacc196aee5280aca35"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "9e36049a01f1a6dd7dd8cb03f2279266"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "bb728f328c52c49bf635b815b6583492"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "b4f036c7795adcb21647e2b2687208a6"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "c6b8399bf6f426642241a41a0e42aa0d"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "3d989c4637be2ae21a8001e91f05224a"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "594ca2a30fddcb3f252bf6e816ddfd81"
  },
  {
    "url": "post/plan.html",
    "revision": "36597d7cd9ab81a345f0bd53a91fb995"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "03b8d03f0f9c42063d5635a833ec2923"
  },
  {
    "url": "study/english/words.html",
    "revision": "914dbaebd72e9ec5b0c609987f63faf6"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "80a484101fe151af2bde1a447c57669f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "96681f60f995ca743a1416e4542056a6"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2456d07cd6a6fce7c0705d3777a8dd2a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a84e912f7f0397bb4869b0505fe460be"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "451ec95067a855d91c3ec12469699610"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7fcad936484b8f4974c92835a85df52a"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "75ac47eb7ad064d247488b7b493fa91a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "30974a332d7a265a9e60feea7b15f896"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "3e6eada36e714ba04e0d9530dd4c9d24"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "0104311d9a5b8fbcc2492a5135194ab7"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "a221d54c1bb5373ad82ffba50806c835"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "6738d0738db6150ec8b9b55adcdbb676"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a1fe77b24bcf464db76ab5a84e263077"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "eeb9d46927b016f42a59394d7a3e049d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "6475fc975c0bd39c36ecc19f8ead1653"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "816e0ac37b46d6168e35f7a6413bd906"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "cc057a08e601d4b5a9628ae6958d8895"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "1a202694f03c9fa308257c615972b8af"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "97202dea2c68d42fcd614636a2d40f9d"
  },
  {
    "url": "task/2021511.html",
    "revision": "47405ca102020706190fc019e3668327"
  },
  {
    "url": "task/2021514.html",
    "revision": "ac001f143882a5930baa14b92e5ea3bd"
  },
  {
    "url": "task/2021515.html",
    "revision": "dda9b23a6c75e8ea2bc218142dc17c62"
  },
  {
    "url": "task/2021518.html",
    "revision": "104a6da70d5b76033d5d9b47667a63c7"
  },
  {
    "url": "task/2021519.html",
    "revision": "48ce6b4f1758c92781bf719c3208bb78"
  },
  {
    "url": "task/2021520.html",
    "revision": "260a6a82c331bcd93b8421f2a340147a"
  },
  {
    "url": "task/2021521.html",
    "revision": "44a74d845e6f15a80bff516b1825e37b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d52b03936157ca1b3f22f55ac911c987"
  },
  {
    "url": "task/2021524.html",
    "revision": "f9c9ec684ba335bd1f498b6fd4f38ce9"
  },
  {
    "url": "task/2021531.html",
    "revision": "d4a8e178e929c6481b54629a0709334f"
  },
  {
    "url": "task/2021628.html",
    "revision": "b314910f1bfb3304cd35e0a917b5cdb8"
  },
  {
    "url": "task/202164.html",
    "revision": "b8b977edfbc7fd67b2aacfe8e2242aeb"
  },
  {
    "url": "task/202169.html",
    "revision": "6c7b2972a6b29753ccdc546995a5347b"
  },
  {
    "url": "task/2021717.html",
    "revision": "7c6b6c0f1096333b7e935f01fd351508"
  },
  {
    "url": "task/2021721.html",
    "revision": "cfdc6c7c409f31398e29ab32957b4489"
  },
  {
    "url": "task/2021722.html",
    "revision": "1d0d5faec80ba540cb748db693ef35dc"
  },
  {
    "url": "task/2021724.html",
    "revision": "029c57f13f4ece2e0438af0720ceaff8"
  },
  {
    "url": "task/2021725.html",
    "revision": "e86ed576f007bfbd3f74847cf3305ac5"
  },
  {
    "url": "task/202181.html",
    "revision": "0f758e3c50a7aa7560def15bfe3bb357"
  },
  {
    "url": "task/2021811.html",
    "revision": "71cc4cfef4682dc956ddf2457807048d"
  },
  {
    "url": "task/2021812.html",
    "revision": "35ce2f06ec0c4f9ebc776ddf3fe446ba"
  },
  {
    "url": "task/202183.html",
    "revision": "9a9fa05763a2377e4819292d953fd50f"
  },
  {
    "url": "task/202187.html",
    "revision": "0fe320560f1e35242968c81fb66d5951"
  },
  {
    "url": "task/2022218.html",
    "revision": "11e4a694b3317fbbd6825c548be481eb"
  },
  {
    "url": "task/2022219.html",
    "revision": "007e982cecfe76f2faa49a4941fa61b2"
  },
  {
    "url": "test.html",
    "revision": "89072e9940ba84693937b1db59840dd5"
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
