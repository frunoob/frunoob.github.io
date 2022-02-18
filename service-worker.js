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
    "revision": "367b44f3e38b5d417c6b359662309a19"
  },
  {
    "url": "assets/css/0.styles.9ce6ca09.css",
    "revision": "9cc04b9da67772908ac273402170caa6"
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
    "url": "assets/js/10.2de8d4b9.js",
    "revision": "b978806f69552e147cb3edcdc4800560"
  },
  {
    "url": "assets/js/11.90947bab.js",
    "revision": "f55c3340ba85f2b9223e98bd4bf4c78f"
  },
  {
    "url": "assets/js/12.a79d419b.js",
    "revision": "bd6a5d45f2e05fea1d337ddd55a1f439"
  },
  {
    "url": "assets/js/13.d60cf873.js",
    "revision": "fae557c7723a23d01a9f0f194503744f"
  },
  {
    "url": "assets/js/14.3065a8b7.js",
    "revision": "f05737498956c28f7b309c88d9b6df66"
  },
  {
    "url": "assets/js/15.72c4c01f.js",
    "revision": "445bbf63bfec257484ea2c74d8a7fe4f"
  },
  {
    "url": "assets/js/16.7743602e.js",
    "revision": "4a44b5d9e1bfab95c17b93adc825cd86"
  },
  {
    "url": "assets/js/17.6eb0be02.js",
    "revision": "d5565106d0ae9034aefb650ff935ca4d"
  },
  {
    "url": "assets/js/18.636b4034.js",
    "revision": "4258b124d93bb4e0d0a25cd1f6e3b81d"
  },
  {
    "url": "assets/js/19.68912a54.js",
    "revision": "8a075bc269d92fa134cddfd62dac38b7"
  },
  {
    "url": "assets/js/2.3f4079a2.js",
    "revision": "55219e24afeb70de665d3d492c0ceead"
  },
  {
    "url": "assets/js/20.6231dd9e.js",
    "revision": "9fda9236d8226664a62ab697fd16fcd3"
  },
  {
    "url": "assets/js/21.0d889689.js",
    "revision": "21fd934800aa233be99c9be58e4219dd"
  },
  {
    "url": "assets/js/22.090b8630.js",
    "revision": "3fbc3796c3f612804967985521470924"
  },
  {
    "url": "assets/js/23.2ffe5f07.js",
    "revision": "5b33c96d13104f492ba52569d4bd6c00"
  },
  {
    "url": "assets/js/24.396ee398.js",
    "revision": "4062486b3e9a330e1f4870301490040f"
  },
  {
    "url": "assets/js/25.4b1201f9.js",
    "revision": "66425a8830d7719aaf00f515ec11df7e"
  },
  {
    "url": "assets/js/26.112bef2c.js",
    "revision": "95cff491cc4e13a733bf2b041a623d92"
  },
  {
    "url": "assets/js/27.a14a89ff.js",
    "revision": "400966f8c7bf75613c3627979cf68b77"
  },
  {
    "url": "assets/js/28.391c773e.js",
    "revision": "31af5d6a4a269f86a9dcdafa413636f8"
  },
  {
    "url": "assets/js/29.7509033e.js",
    "revision": "462bb2c8b506bb4fba5e69312f4cab7a"
  },
  {
    "url": "assets/js/3.d31210fa.js",
    "revision": "54486061097fc3b2e91dbf7dfe89a12f"
  },
  {
    "url": "assets/js/30.9853c08b.js",
    "revision": "2cd6913dceea887b324d468c44801ee1"
  },
  {
    "url": "assets/js/31.c028e7e6.js",
    "revision": "274f3a68426a85e232ec3578d58daf9f"
  },
  {
    "url": "assets/js/32.974862b0.js",
    "revision": "2467e9238e6890d4901023a6432985b8"
  },
  {
    "url": "assets/js/33.2c17eb66.js",
    "revision": "a2c730a9f7ca8483986a4a917e1b41df"
  },
  {
    "url": "assets/js/34.6e5b4cb4.js",
    "revision": "c4596c7e49feba9a1117c0683b613134"
  },
  {
    "url": "assets/js/35.32dedff9.js",
    "revision": "31e566c7d329d96f958322c2480afd74"
  },
  {
    "url": "assets/js/36.f4766e09.js",
    "revision": "a9e6e9f2d3c32cbe8509b245a3613697"
  },
  {
    "url": "assets/js/37.327395da.js",
    "revision": "8266e7771de66877bc29c14fd5d75317"
  },
  {
    "url": "assets/js/38.9b335c97.js",
    "revision": "6d70985c770c6cca6025d12058653408"
  },
  {
    "url": "assets/js/39.6fa96c45.js",
    "revision": "884193f6ce30a35c8b43b665a74eb795"
  },
  {
    "url": "assets/js/4.6b078159.js",
    "revision": "baa41fc2f1f4e68575de328d7a539699"
  },
  {
    "url": "assets/js/40.d4234ead.js",
    "revision": "46f1e991ffe6a38f8d0d7eaa46bfaa89"
  },
  {
    "url": "assets/js/41.0dcf6b36.js",
    "revision": "02840bb702ad55f5ff7383b387582a9f"
  },
  {
    "url": "assets/js/42.640019cb.js",
    "revision": "de3e2203db60bee28d85c746605ce88d"
  },
  {
    "url": "assets/js/43.12661435.js",
    "revision": "aeb24d9b50b247d408127c83980f2b4d"
  },
  {
    "url": "assets/js/44.b04fb218.js",
    "revision": "57f0f3f60c59dd18f568af0cea013a4b"
  },
  {
    "url": "assets/js/45.43e5ae44.js",
    "revision": "66c84435ae4745f60126f250e91bbc4b"
  },
  {
    "url": "assets/js/46.0a42c2a7.js",
    "revision": "402f02315d41ccc751dda5be1c1007e5"
  },
  {
    "url": "assets/js/47.d6a9cc90.js",
    "revision": "60d9c92eca6ad23dc5a518d4101fcdc2"
  },
  {
    "url": "assets/js/48.dfce244e.js",
    "revision": "7b0add9abc5b2b242981aec1e5fb6568"
  },
  {
    "url": "assets/js/49.7df12d4c.js",
    "revision": "82dac7a3108118b73d4ebb00047a9fe9"
  },
  {
    "url": "assets/js/5.a5c5e254.js",
    "revision": "03c6ffbd6dbcb912f8247e5447be2a4e"
  },
  {
    "url": "assets/js/50.8f850201.js",
    "revision": "81b918cf31eabab0119acf7750e9e419"
  },
  {
    "url": "assets/js/51.3ef3a25a.js",
    "revision": "113bef29de49456d08b8bf7c6b5362d5"
  },
  {
    "url": "assets/js/52.0c8f4214.js",
    "revision": "fe3576d5537f46de85e5c03c832339d2"
  },
  {
    "url": "assets/js/53.551b93c9.js",
    "revision": "c2ecae16c2596a41b2197723f2c4646e"
  },
  {
    "url": "assets/js/54.660c9ebd.js",
    "revision": "9dd4ebb296c658044e55dff50f13c1e9"
  },
  {
    "url": "assets/js/55.97d2a557.js",
    "revision": "f141f6e0711e1d5a8eb90a9308fbc5d5"
  },
  {
    "url": "assets/js/56.93860b05.js",
    "revision": "31bb491731965bd3080d575476ce493a"
  },
  {
    "url": "assets/js/57.a1490baa.js",
    "revision": "ba46ca91ee37c8e1998a663d63a48e12"
  },
  {
    "url": "assets/js/58.be41254a.js",
    "revision": "f07168703bc0b7b5a7eabca3b4e07a54"
  },
  {
    "url": "assets/js/59.8919964c.js",
    "revision": "69d0fbd36b0ccd83c3db4cb83edc6ff5"
  },
  {
    "url": "assets/js/6.a6b9eb56.js",
    "revision": "8bfc1271cd203ec30be0622ec123941e"
  },
  {
    "url": "assets/js/60.2b162ee6.js",
    "revision": "4564625877d4b45b8598b54dd270919a"
  },
  {
    "url": "assets/js/61.74eb0d37.js",
    "revision": "5e862964acc3d309e0e63010e9150685"
  },
  {
    "url": "assets/js/62.a8ae792e.js",
    "revision": "e4c38eab538061b26a395e804bff854e"
  },
  {
    "url": "assets/js/63.335731aa.js",
    "revision": "924c49bb2635cf1c04e49652c47a7e21"
  },
  {
    "url": "assets/js/64.a89d9d65.js",
    "revision": "8a89720385587d0cbd477e5ca7e69701"
  },
  {
    "url": "assets/js/65.b792e8ff.js",
    "revision": "dd7ddd4ed0bd27b14c8bf9852fea38c9"
  },
  {
    "url": "assets/js/66.6e1804b3.js",
    "revision": "dcc6fa135f6c9f06cbd2ddc9b6ad4682"
  },
  {
    "url": "assets/js/67.d5dd3a19.js",
    "revision": "7180706262dc7f70cad4c9112653d6e3"
  },
  {
    "url": "assets/js/68.abbbac91.js",
    "revision": "56c5d89914aa2203ead710ef802ff5d0"
  },
  {
    "url": "assets/js/69.2d9086cc.js",
    "revision": "3dbce21ce5ff6fdc7c83824907f7fbf1"
  },
  {
    "url": "assets/js/7.a21ab910.js",
    "revision": "1e505f114af556b7108e933a3787280f"
  },
  {
    "url": "assets/js/70.0f9b1480.js",
    "revision": "0cf47ef3a5faa800bb6135c3b3c8167c"
  },
  {
    "url": "assets/js/71.443a5bc2.js",
    "revision": "69e470e814ac437aecb117643f862e44"
  },
  {
    "url": "assets/js/72.9caad032.js",
    "revision": "f4e40713e4476e9347041bf974ce60c6"
  },
  {
    "url": "assets/js/73.839ec5ed.js",
    "revision": "0e5bf0117b7b05e272e840c34bf71f1d"
  },
  {
    "url": "assets/js/74.0cb76061.js",
    "revision": "cc5b317738f3a66b695dfeaf53efa04f"
  },
  {
    "url": "assets/js/75.9864e4e4.js",
    "revision": "708d58abed10fec9e4d3b6e7463d229d"
  },
  {
    "url": "assets/js/76.61359367.js",
    "revision": "23d7705cb79c0b0fa6b166a1f1c524f4"
  },
  {
    "url": "assets/js/77.2df8e771.js",
    "revision": "83b613a752aa1d5cb0a70c1d9ef7988d"
  },
  {
    "url": "assets/js/78.e22595b2.js",
    "revision": "36f6c3e5b1d520f28e6fc2949e006c83"
  },
  {
    "url": "assets/js/79.e61a0080.js",
    "revision": "eba5fe4e7a0c8a220916328156a773b5"
  },
  {
    "url": "assets/js/8.7a2e3ba7.js",
    "revision": "60d343c43f746a46095a62acf0d896d6"
  },
  {
    "url": "assets/js/80.62a4a5fa.js",
    "revision": "6bdadc8317fb61de12d6527edff86445"
  },
  {
    "url": "assets/js/9.2ca3d114.js",
    "revision": "0a60491fa22dd57a06625fde91fa9d78"
  },
  {
    "url": "assets/js/app.1c1d9587.js",
    "revision": "14681d2b762568413411cac5c71b2bd8"
  },
  {
    "url": "index.html",
    "revision": "39258d045049ba38aa8baa64363a7fbb"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "2a30ad6f99f3d242bf911bde5b996b26"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "8880517c82fbd87622d5ccd436641c8f"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "6978e1be7cfd39055d1d2130bbfdb78c"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "09705f64140d132fef326e8d3c589711"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "bd328af8fdcc3106a79a08c2ac58cbe1"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "80faf7e4294beacf1f6ef2990b5de56f"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "c85170531767d6e4b7730ec2b8535e83"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "b9a060c5739e751e8a0302ddf4bddfe2"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "5f7c38cb5618feb462298d0267f44818"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "c07d9eaa381fb39c2de26a78a85af8c3"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "d5d3b210997fd78b379c52f610d5302a"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "65243f2a9e854815133cf61375ef936a"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "5e6fc179327067c5ca9e0930a8e953d3"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "4dd6ad60b65bb0eb73793c5733e4aa65"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "27ff1c789e97e3887b193d30b765f3df"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "80cfa5dc632a342215f4685931a454ed"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "a98a9f68363eb88366dd68358ec4c23f"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "5c66d3a48ecd35f67e904c9d66fd21a2"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "4025971c25ee20307a572ff5f640c8e6"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "063da9d6664434070080865446a8f28f"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "e3c142dd7147678f91d586d5411c17af"
  },
  {
    "url": "post/plan.html",
    "revision": "c5c1eca856e5fdb59e0bbe269dcaec9c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1555ce4b0574093ea09310fa9928fd1a"
  },
  {
    "url": "study/english/words.html",
    "revision": "204006f638662bca02697996611d7247"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "217bd78fd2e4bffdbdf77e673dfbba02"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "b26b13410c837392abefdf32040759ff"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2c84b0a3989323fed9ff4db32077570b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "950953da53fce0ded2adf34a9f125f32"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "f7d7523e7ea792193e76f4a642b47150"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "096d9c64f95773909cf4896714485450"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "390dd8a662cb64b151916b2d34189bab"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "655f202974aabb673be1954f791fcc4e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d3986a61b23ccf157dd5ca785e066724"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "8476625248615e304b06f8562eb8f285"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "0f36bbbfd508757b4bd5e0f845cf734b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "0eb940c44148445713f9eb79c8a710f4"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "affb22c49a2e7490c41e0287284be28a"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "88cb4a60b94b69a3a49c1459f510e18e"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "f6c32f0da3db6b00c122cca8131376bb"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "8d31966b74dc8eba8c4c3360cc0a6f6e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "93e2027abe32402a6404319c24b18645"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "820bf68d94e848d0e077957fbf2e2259"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6d2adebc9764b24d3c9abbfd07f82973"
  },
  {
    "url": "task/2021511.html",
    "revision": "fdeaecb417c1e5836ed1beb68085a0d1"
  },
  {
    "url": "task/2021514.html",
    "revision": "536b6d0ea2453ca4ffe317fac809fe7c"
  },
  {
    "url": "task/2021515.html",
    "revision": "a4fb29046c95b5dc94b26c672864e7b4"
  },
  {
    "url": "task/2021518.html",
    "revision": "d506f65693aa34e33d37c1d25c160f5f"
  },
  {
    "url": "task/2021519.html",
    "revision": "4d5b40fc18b976179e4ffeeec7d8b74f"
  },
  {
    "url": "task/2021520.html",
    "revision": "bc63aa8e6a343aced3f28d1942ce8131"
  },
  {
    "url": "task/2021521.html",
    "revision": "648972a72c57e452ec60da3b3a30ffad"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "b2aadf20033967d7e797f2c578d83b54"
  },
  {
    "url": "task/2021524.html",
    "revision": "3b3147697e65d1061ba139a84751120a"
  },
  {
    "url": "task/2021531.html",
    "revision": "b54aaaab8a4a8e901f04b135ef4b8c97"
  },
  {
    "url": "task/2021628.html",
    "revision": "0343dff4b70f6d599df65c97e7a95848"
  },
  {
    "url": "task/202164.html",
    "revision": "f0e8bcc74aaa185f58cc26dccb5b5711"
  },
  {
    "url": "task/202169.html",
    "revision": "e619b31b5ff4aa0ff5f846b4b587c5a5"
  },
  {
    "url": "task/2021717.html",
    "revision": "4487547078ce94f2ef927f613c0199c3"
  },
  {
    "url": "task/2021721.html",
    "revision": "041cd035bf512b0392a321f80831e5a9"
  },
  {
    "url": "task/2021722.html",
    "revision": "dd7d7a00b2614ead9954643b097a3a99"
  },
  {
    "url": "task/2021724.html",
    "revision": "4f67557d546c78a2be1378b9d33e2b81"
  },
  {
    "url": "task/2021725.html",
    "revision": "402ca8c1c58be56397e75a91ad85a712"
  },
  {
    "url": "task/202181.html",
    "revision": "6cd18fc528557a554df273162c92147c"
  },
  {
    "url": "task/2021811.html",
    "revision": "eee6b2b233cee1d5c6daec4c46692a1a"
  },
  {
    "url": "task/2021812.html",
    "revision": "77e37724d22bd6f6df04f641577dcbed"
  },
  {
    "url": "task/202183.html",
    "revision": "be8bb1b1e61aaca7497e1d2cb875c511"
  },
  {
    "url": "task/202187.html",
    "revision": "d1b676b3ab769ed6b981cd314a28d9d9"
  },
  {
    "url": "task/2022218.html",
    "revision": "c0c55f39d7f04a09f53348c01fb5545e"
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
