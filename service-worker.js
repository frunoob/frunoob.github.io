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
    "revision": "c7efc1de7f8c2265eb36b954ec4b5113"
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
    "url": "assets/js/31.b40709b4.js",
    "revision": "ebf1e2c026aaab4c003b3ff4e18b9b72"
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
    "url": "assets/js/34.c89367be.js",
    "revision": "44f9475d0d309c57d8f25599e4e9bcb3"
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
    "url": "assets/js/5.e60e3321.js",
    "revision": "3d25716756821f9c61f69458efa10f96"
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
    "url": "assets/js/80.76714a9a.js",
    "revision": "d5a174b3b6bead2d662ee85929ff0f80"
  },
  {
    "url": "assets/js/81.9629b2bc.js",
    "revision": "e2d6c63bfda14f0f05275598c0970a8f"
  },
  {
    "url": "assets/js/9.2ca3d114.js",
    "revision": "0a60491fa22dd57a06625fde91fa9d78"
  },
  {
    "url": "assets/js/app.919d4ee8.js",
    "revision": "208c1c3b674d2562192ee296216f27f9"
  },
  {
    "url": "index.html",
    "revision": "c07894abd6b488006633d587cd0f2c73"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "ba93598abb213356d74e32ce8dbb5958"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9e4688e26baa8f7a8ad616ba44b4c8e8"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "7d360a75c1b4babc80d967ee5597c7c3"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "3feee6236000c4b6413144e109a73c8a"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a5e2cb9d6564bd17cc8cfae9993479d4"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "cd660a9cd2d6dcc81209a9f647593e7c"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "bd2ccdf64761b9e6e074bb777dd3b8a6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "f41da38b1ba82cdcb91a257733e96a05"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "8306dd1d3ca29d4e83e93e1806086a86"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "25e6686d7646d542f4f8a94b8aa90d3b"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "726c5e4ff6f4e42e8b159fa4ff0f1ab3"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "eb1b924d6b6ff138c205e24e0cef4988"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "af4099f5a5725fbccf1ccf2825c1bcf3"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "6097d2ef22124ee4f55866055352f103"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "7310322f9354600dbca9c005d6c0b78b"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "9a5c950fea1e1ef157dd005200514dd4"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "4d37a4d7a9641da72d06d7497bac6dfa"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "b849ba4c890acab6c9c1f9f8804daf46"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "0a2a9314c19bdb35ebcdf2e6b53312a9"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "603d3b588dddeb9e6db868a34bf32fac"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "e4ffdd4e4e6f3279194269fcbdb948bc"
  },
  {
    "url": "post/plan.html",
    "revision": "328c9498328f65e1bcbc2be87bb8fee6"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "8869492c624aeb9bc0014f26f0c420e8"
  },
  {
    "url": "study/english/words.html",
    "revision": "97adbb07178fb628c723cb31c568fee3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d06b034cf2cccef286a5b89557e7bc17"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "98e93bfc26ed6bd93ad291014daa97b1"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a588732d3a1297a8c2bfd150a0d73523"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9a13d015fc6fffb3684c4729c9d2d6f2"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7bcfd78f4e83f8ee95e171d1b28446bb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f95874d63b573eeeaa3336eccfa449cd"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e73da923b8c740a15d44f43d4ff7a03e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "77edced95f0686fa1868334d8508bbfe"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "f3909e2d22427ffb317191322c496083"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f01ddcf41717b4ca2105ad3a3862860a"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "4109f9e5455edd1018d47a827d84c49e"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "02d13cce8821c3d20e5d8b33a814bf38"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6118960d9e5205eb2fcbcd9a0b29f86b"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c12a8eec6fd9d19755e388f608fd750f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "05b3b6b529104882430786825b89cd73"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "fdf6adb1cb12a3cb52a2a7a0abee5858"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b7e3578bf243a75c84ba2fb49c9b89e5"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "426177efe4fbb2fb99cfc0994e08939f"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e36fbcf3cf8c2001bdb21dd081454e31"
  },
  {
    "url": "task/2021511.html",
    "revision": "19e5273d19c5543e9d80b7f4f6c82467"
  },
  {
    "url": "task/2021514.html",
    "revision": "7fb77e011ebf0eca287846fa794c4c28"
  },
  {
    "url": "task/2021515.html",
    "revision": "e213c3d3e4f9caaeb549c15b2e52cf1d"
  },
  {
    "url": "task/2021518.html",
    "revision": "dc561d6edf6abfa51103bb116990e360"
  },
  {
    "url": "task/2021519.html",
    "revision": "df9b03a9ef1d2ac8ebaad0dd57ec8598"
  },
  {
    "url": "task/2021520.html",
    "revision": "ca95e0909d232146fb10028b4363c0ac"
  },
  {
    "url": "task/2021521.html",
    "revision": "ab2490b1a973997e60395712df97bf57"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "55b16123d51ae8a651709740b657331d"
  },
  {
    "url": "task/2021524.html",
    "revision": "ac2fd7fc8899778b69208b4263f84e5e"
  },
  {
    "url": "task/2021531.html",
    "revision": "98372e317693550e39635681054d1c1c"
  },
  {
    "url": "task/2021628.html",
    "revision": "bd443e9190df7b5017a277645a58359b"
  },
  {
    "url": "task/202164.html",
    "revision": "3e8833e6641f4a248edb948211cedce9"
  },
  {
    "url": "task/202169.html",
    "revision": "69164dee64971d5fade94890de2bb3b3"
  },
  {
    "url": "task/2021717.html",
    "revision": "f657d48724253db0f5361d6b4bd5326c"
  },
  {
    "url": "task/2021721.html",
    "revision": "ed8d5001cde4e9e7302cdb76f3c08849"
  },
  {
    "url": "task/2021722.html",
    "revision": "2335acc494993045c4c269ca0c675e06"
  },
  {
    "url": "task/2021724.html",
    "revision": "2c7daa32dd8a908f92ce6c33bdd58e2b"
  },
  {
    "url": "task/2021725.html",
    "revision": "054450737cdcdc47266b78ce66911b38"
  },
  {
    "url": "task/202181.html",
    "revision": "c821ddcbed2185872aa9fe04f4745237"
  },
  {
    "url": "task/2021811.html",
    "revision": "083d8b9c3c2eb7c4545977005a54a3dc"
  },
  {
    "url": "task/2021812.html",
    "revision": "e6c7299b59154d48b9d04f4e8a30d2b8"
  },
  {
    "url": "task/202183.html",
    "revision": "57b2c3e93ca418ac5e8b6864c6b38e92"
  },
  {
    "url": "task/202187.html",
    "revision": "3a61492e1fe787766ed4bf5b94166211"
  },
  {
    "url": "task/2022218.html",
    "revision": "aa2bdbfad69f100775c5783079df727d"
  },
  {
    "url": "task/2022219.html",
    "revision": "f62521bd8b1bf3d22be4ccc7d2f02150"
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
