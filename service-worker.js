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
    "revision": "c06b32930655f335d6e7e582202b66d4"
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
    "url": "assets/js/39.c4e0defd.js",
    "revision": "7e0d3617ac1797f1d75219fc5fa1c962"
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
    "url": "assets/js/41.e1a11836.js",
    "revision": "02d0d139efb84545529d0206deaab31b"
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
    "url": "assets/js/78.47539f4f.js",
    "revision": "7e4a2c2d93076b0ce168dff07623ba71"
  },
  {
    "url": "assets/js/79.7887be01.js",
    "revision": "b6688f819d2ebcd3cc077e8a9d415238"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.267cde98.js",
    "revision": "c7dcfc147acc13dbc13236d8d9076478"
  },
  {
    "url": "assets/js/81.13fafd9e.js",
    "revision": "49335df6cf1ebf779f4ba4bde1f54099"
  },
  {
    "url": "assets/js/82.4b8ab481.js",
    "revision": "922dffc60312610ee1ca7f0d0b82574c"
  },
  {
    "url": "assets/js/83.a5868b02.js",
    "revision": "7660a06b84f208ce155799e01221ca50"
  },
  {
    "url": "assets/js/84.2de11073.js",
    "revision": "7223a37aac0d427fd33085ea72b864de"
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
    "url": "assets/js/app.4ef567ff.js",
    "revision": "0493e99e26bfcab7919b09550b2fb8bd"
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
    "revision": "be6396a29eb18c48d66b273059b531b7"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "6fa9332fe8e4e294c37a940a31ccf946"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "aaff7750f9506fbe9e03e5d9c0917bc6"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "a9098b97c4b2a4320b79a945cc02a9db"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b569ca2fe1ee914edbe48b7fbd29804e"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "b37a8f2e35d98086e97daf91408aaf37"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "337ef0e55a2595a03cd0c2b183a999ea"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "e3e0942209e44ddca7f02c94d25f2425"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "ca67c00886ec7348f87c8b4d6403638d"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "0f6be31aca151ca984087c6840a5e818"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "3ed9212e05718172e645824da22e92cf"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7b6a4af835c7c19fd50a68ce9f330c0b"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "86e9e7d82a9bf6354a181c4139b074d0"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "9f70f06f059498cdf9c0763c21fb15ea"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "f9ac0fb23af382ad04c2a01bebebe71b"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "eecabdd0a7b5512aae245df71b62b455"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "307c7bd9053ae8d9e7c374cd02934ffe"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "21b3a0312a27792f7321824ea4d89347"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "3442a37f3c8ad467a8975f82033bf5fa"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "5e1f17ccee74d74e9e9b60ea73221a7d"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "cba3009c4c4eed32e8e7826162a99710"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "3d578d018068f484ecbb91dcae548d6f"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "20d84aa737a4e27b2332bdeebf464a0a"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "33617af28ab37455490cce1424d0cba4"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "f8293c72e278a0b69202f210e7a99f5a"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "d317793dcea557ac3305a42348362373"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "9e4264410217b86df6d42c358fe5eedf"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "3f3b35b8d6b0fe492c797fab5f2ff8c9"
  },
  {
    "url": "post/plan.html",
    "revision": "25a62857434d0fd5d4ad3b405a70dae1"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "532530734c7e25da838439085452598c"
  },
  {
    "url": "study/english/words.html",
    "revision": "a93234a4023c5c49662db14dcb1dedc3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2c98416dadd3bc18012b36eb88bb5c89"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "eab3e2ff96662b4f24ec8f1cec7f3e76"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4b742b85738f7e1d450020c49994ee8f"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "bcf1e782f1b435c65a9f72b08d7d2f6c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "6a2fbe5d6fe163d08fcae2b666b7b09d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d42a9bd61679977210767333d22147cd"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0aeaf893386f8eed9c6cfe3591dc6e0c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "57cb3b307b8f6d18057ba6fbb51eab94"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "30a023db88431f142540a447fb7d4c0f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "de5fc15d42ed98665e858b2b280b9d35"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "01c7edaaac5678b5120a694e9f009ce4"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "3f32ce57a158185528cb65bf3f24dd48"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "64b6d50ab70f878a7ecbcd94c78685bc"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "71176fb366a84875b9353671b72f9785"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b2dac285b22398fd17609d23fb784fda"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "25cfd53421e3a4ed57c108c139f46a73"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ec253375546a76874a14449f6d499826"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d9b6f798a987c678c9a558ce8cb91b65"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "517f607503bb15dc68337774cbefc463"
  },
  {
    "url": "task/2021511.html",
    "revision": "5fe72becef53bd69342a6734831f52c2"
  },
  {
    "url": "task/2021514.html",
    "revision": "bc9319405f774ee8110281a28a22cac5"
  },
  {
    "url": "task/2021515.html",
    "revision": "7ba0be08f9961291e67069ed0a99ef6e"
  },
  {
    "url": "task/2021518.html",
    "revision": "a7ade8a9dce53a8b7b7c4f04cd98870e"
  },
  {
    "url": "task/2021519.html",
    "revision": "ee36c7887e29218f0fb5b4a8baddd7df"
  },
  {
    "url": "task/2021520.html",
    "revision": "757eefa594705bbd2812195bc135670b"
  },
  {
    "url": "task/2021521.html",
    "revision": "0acc6c12764516c042b602c9893d1d71"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c8f700aa9d6a7ff1eb3fc4cedc7e5530"
  },
  {
    "url": "task/2021524.html",
    "revision": "292ce202c9a714f9d8d2a9e92f3eddb3"
  },
  {
    "url": "task/2021531.html",
    "revision": "7df4feae5fa2816c81df642f49db1621"
  },
  {
    "url": "task/2021628.html",
    "revision": "94096cc53ded80ea94332d9c2bedb425"
  },
  {
    "url": "task/202164.html",
    "revision": "da11091ff7be7168c60adbfbf0b65f5d"
  },
  {
    "url": "task/202169.html",
    "revision": "64e11358bfa486f5ef0224157e3db9a5"
  },
  {
    "url": "task/2021717.html",
    "revision": "7329bf919c1ed71e722a83fb5f1f427d"
  },
  {
    "url": "task/2021721.html",
    "revision": "2efd6cb421b7820b883d27c3e361d16a"
  },
  {
    "url": "task/2021722.html",
    "revision": "6962492f8b8bea9e02b6e0a6192e1ed6"
  },
  {
    "url": "task/2021724.html",
    "revision": "b6d25555ab6f84b6df9f0d8c694c2d34"
  },
  {
    "url": "task/2021725.html",
    "revision": "69cb2510e9995336eecb96719fee4ce8"
  },
  {
    "url": "task/202181.html",
    "revision": "17963f96cff46768b757810beec17e94"
  },
  {
    "url": "task/2021811.html",
    "revision": "67b0b9d32cdcc8a05e7bb108a25ea8e0"
  },
  {
    "url": "task/2021812.html",
    "revision": "3a75d31a2ef9f0c957aa7f9f5dab4c39"
  },
  {
    "url": "task/202183.html",
    "revision": "7151951ece219b87960927df3590c0b7"
  },
  {
    "url": "task/202187.html",
    "revision": "d1ad6e8fc7052c7bccbde0c461be5841"
  },
  {
    "url": "task/2022218.html",
    "revision": "25a7b67ea8ddcc985385fdd83baabdc5"
  },
  {
    "url": "task/2022219.html",
    "revision": "f6b8274d86cd3502ac86a9b5d4ecd976"
  },
  {
    "url": "test.html",
    "revision": "e875d6bab932d7aa973cc52182b1db4a"
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
