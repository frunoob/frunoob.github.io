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
    "revision": "000589c52d0c01dbb0bc7b1a885eaf9a"
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
    "url": "assets/js/41.db314f1f.js",
    "revision": "b5138674bbddb1d939bdb49e0a3ac85d"
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
    "url": "assets/js/app.c3557074.js",
    "revision": "c5ec8321e59475d27a4bb8879c911ec3"
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
    "revision": "1fa44d98ff67fa1bb760a6aaa0ca3f4b"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "0486f1beb731712026913bbe395479a0"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9849a10100a02c45ce24ccfa729c70de"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "fb1b6ba31233327fd2c0df19be17a95b"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "1ab89fcadba92720c9859b1e708bc36c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "61abfbfeba30836ef1ee2de150972f22"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "6022f4a2c2de9f11e76e066a06e00bf0"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "467d37cf9462a58785121efe20cf4285"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "c57c310d6226e057cd01b8f4ca3c7b8d"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "8d9ce193f6b4470f35e22854e10a3e6e"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e08fcca5f45611e03cc1beb5fb782907"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "22a79608477fcefcb3438fae6045c3b0"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "a23e9c66a495ce3ead80c1df4c8298f4"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "da1c8b3f530303d9f640c22ae017267a"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "eea611f186545a08663e784f100f04ea"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "cf6237a3077153ab1eee899eb1c08735"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "66c7a6d14939dedc46a4d75c55986249"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "314041a48b6535741eb796526db36062"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "19f11006dcc681e066c12384b8c658f3"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "5a408fadf00ddaf9073490899aec0938"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "054bf13850700860f02b25598ed7e94b"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "7eae29f5e46c3efb4d85223e9c4cf062"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "0fab36edc14aa675d69eca7c7f3cb15d"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "5634fca6921e3de6c2a8e57c47cbb9c1"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "6d70117d5266ec681ea32f301bdecc13"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "858d011bb586e08ed354e509368808f9"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "4c9211c9480942502c042a07b8fb2df5"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "62e06118cd68b6a808af65e45ecc7872"
  },
  {
    "url": "post/plan.html",
    "revision": "90c3cd41bf3252ab77d16e41eb8c72cf"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "404c64212fc1910df834b094db649614"
  },
  {
    "url": "study/english/words.html",
    "revision": "87abf5870fbc007e363ae060d7a59c6a"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "3e202cf442bc2f8bb095b52472832e28"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "e3eafc293e713b58ff1be8d0e367fb4d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e5eb81f4de801ad87ec12b5dc6e481fd"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "bb81e297ab09bc2c55ce03210babacd8"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "599ecb08897e8980171d8fa422088928"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "16936eda674d518e7b9cea344ea1f4d6"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "96d3fd66f6a37f5278704aa9701d96a9"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "584872f2eaf397ce674958e005e370e8"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "3a2c0c0fc1f49662a677f4b18e25b216"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "1c568422e8585429cfed3e655d2f8dc5"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "53a538e2c3b615f263f963283f7e1afa"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f8107c852bc59923fb33852753ea2a87"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "d9212b7b56a6517c92b07b59a2d528fe"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "799c657841ee6bd01954cdd60169a099"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "99b5b5a6a81085f9a3b5bfbfe4d124cd"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "abcd30dc4a9c75c1b017a102edff11fa"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ea027692a82ea25e5f63c21378389b53"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e3d13b6425811c2705780ee34555a67c"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6f56a150e22dba1d31d9e5d59874dad2"
  },
  {
    "url": "task/2021511.html",
    "revision": "b1c004c9fb643b9a436369e98fecc5f5"
  },
  {
    "url": "task/2021514.html",
    "revision": "1a92e4a1ebb7a62c1ee78b62d420a1d1"
  },
  {
    "url": "task/2021515.html",
    "revision": "7d0cf00de5496824901da455cc68c39a"
  },
  {
    "url": "task/2021518.html",
    "revision": "750515af3c4b25258b34d06b47ff9df4"
  },
  {
    "url": "task/2021519.html",
    "revision": "233e5a6e04aa24d563570db96135453b"
  },
  {
    "url": "task/2021520.html",
    "revision": "237b8cdfbf3647b75b9fe388623e3263"
  },
  {
    "url": "task/2021521.html",
    "revision": "acf7b96082ef9d7bad6e52180409d0df"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "7305a09903714cd115f77a9c715692e6"
  },
  {
    "url": "task/2021524.html",
    "revision": "12dce68a77e10f58b21639c2da5ff74b"
  },
  {
    "url": "task/2021531.html",
    "revision": "311801f56ae89d0e838476622860100a"
  },
  {
    "url": "task/2021628.html",
    "revision": "2d310f8a33a90ddb8eb37c3922379cda"
  },
  {
    "url": "task/202164.html",
    "revision": "2821ec083c34e7ead92cff8f877b2691"
  },
  {
    "url": "task/202169.html",
    "revision": "2b4dbb5d01865699d084454af8732548"
  },
  {
    "url": "task/2021717.html",
    "revision": "835e74cff782884a096a25f7cf5f2c02"
  },
  {
    "url": "task/2021721.html",
    "revision": "6034752f37f84f314fbeb20355cc00df"
  },
  {
    "url": "task/2021722.html",
    "revision": "7662d5824df6c0ad5ca47b475569db7c"
  },
  {
    "url": "task/2021724.html",
    "revision": "2170280709bab5c0acf5e828e690cfd2"
  },
  {
    "url": "task/2021725.html",
    "revision": "6c2c10b742e984320995475796e48076"
  },
  {
    "url": "task/202181.html",
    "revision": "895cf0a2ac85929bd7382e38ca41b081"
  },
  {
    "url": "task/2021811.html",
    "revision": "caf19fd0053379e6234e4f6b4ac14571"
  },
  {
    "url": "task/2021812.html",
    "revision": "d7d6e3e4ff7533ad51f296f3c1f0ce66"
  },
  {
    "url": "task/202183.html",
    "revision": "bb466a1ea97ec470064154b9174e218a"
  },
  {
    "url": "task/202187.html",
    "revision": "803253b3ca09a0559157a1d170cc5646"
  },
  {
    "url": "task/2022218.html",
    "revision": "01bde86c8d115628b0893b47e4c7eb79"
  },
  {
    "url": "task/2022219.html",
    "revision": "e5e4ea34275c4a6cca9c4a8446788b9f"
  },
  {
    "url": "task/2022222.html",
    "revision": "3fadb4c606fda9ec273ba985edb3c821"
  },
  {
    "url": "test.html",
    "revision": "98ea5cedce5157c3bb04affbea12d406"
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
