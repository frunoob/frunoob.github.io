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
    "revision": "0151a323a682351254ce18a4a1a43a26"
  },
  {
    "url": "assets/css/0.styles.0d4c152b.css",
    "revision": "0cd208280d48d7c84974adb7df86f917"
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
    "url": "assets/js/2.16e02db3.js",
    "revision": "533c586f1670632427d3c457ed1c6d61"
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
    "url": "assets/js/3.405edf1d.js",
    "revision": "b66e6275c1b2f80c89e85f157b06fdb3"
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
    "url": "assets/js/33.46153a50.js",
    "revision": "08825ff88c3500ab239d845e5446bba8"
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
    "url": "assets/js/79.3056ec63.js",
    "revision": "09694a8b884780ad179e5b21e26dbfab"
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
    "url": "assets/js/9.3778294e.js",
    "revision": "e01a4cf2fd860fbbf315ae0d679d1eb0"
  },
  {
    "url": "assets/js/app.547eeeaa.js",
    "revision": "bc18473faed00fb107b46231417a5310"
  },
  {
    "url": "index.html",
    "revision": "d394e82530541f535b3ec3e0e6ff7aa3"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "609b6b309c9c8e09fee845bbe924dd61"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "36c21792d44390bb3a58060ece5b2f0c"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "59ab5b38871c87a09499259bb5307e2b"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a3b54a7aa691ca52aa052d1841d42ab3"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "407638ec2e0e1c3a79d85d8991d84e41"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "6c6a54719eaafb0493fdc99e3d17a4f5"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "f68ff85f777a4fc3fc9807f7c1de7fd6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "c38b7442d5d92f3d77ccef2523ab1d1c"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a2def0b6de691b1d230077b270cc7ac4"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "ed17f9312bae804049d757d00b1de2fc"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "5357cd5c611ed4e55f6c331a1850a1fe"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "feea4419273a24fe4f0c9741032a02c3"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "18bfc6b6ba1dbaa6ef125936113bb3be"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "948e459f3ab4fc2718209f61980e7f92"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "b8ce83e8d01c66dcec037a8f47d5a9cb"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "46075b7d56b586b29bd3303e6563e614"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "2f0dc6e727a382b32ff7e8826975b6fe"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "a4cf61f12529e9f1133338bb65a73c23"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "e192b16d8d0662eac1b45aab24e27f5e"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "2b0bbc00ea43ca104a31756074786ae4"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "93c66e016bac61c24288b2c62680e237"
  },
  {
    "url": "post/plan.html",
    "revision": "7c9ce87b499afac6f21bf95a5bda24cb"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "7f7ca94c9b13d9c352d84b8431ae15ff"
  },
  {
    "url": "study/english/words.html",
    "revision": "f5830107ff227b4e9012cc836b1578c3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "938aa7673a06c4d41204e67a40bf9577"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "782ef9b96a9154a70b355474cf3504f5"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4bed7c439d2970205c4671f3f61251ec"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "751ea40da71a51e9bfb32b9efeda75ea"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e9d49c8b83a0a2aee68c3d95edc65387"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "420b22b93d3f1ffa98d20ab712bd0ae8"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "3f1204dd91716b79af0c1def0cb451ab"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "04919f2addc1210f9ab77cb69a7d9a37"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "3007434dd9d512eee7918a74284a101e"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "0268b9a4e263cec6549062e736f616a9"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "b9fffc16722c6d226decb27cdcac79a6"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "28d8c994c4faa781b50b7f5ba62661ae"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "0a0c97dc7b33c38db975b6ee1f5602da"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "8ec6cccc1ae4d3d414f2a6b1aa36ac71"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b56eea5e69baa1c557903d0c12fe8fb5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e8623285b34c46d1e102f574be066240"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c3a9b193ec397978a114a7aca5d2b83d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "26ccecedf57d0f19f818f308891c8dde"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a0432bd14b3d03f8a143fe55aee22fdd"
  },
  {
    "url": "task/2021511.html",
    "revision": "047ab5af850b498a12a520234495b893"
  },
  {
    "url": "task/2021514.html",
    "revision": "95307e3fcd1de9176e3c2efbc2149e34"
  },
  {
    "url": "task/2021515.html",
    "revision": "cc7452d536731f5d00a630ef31491115"
  },
  {
    "url": "task/2021518.html",
    "revision": "a9fd543363d27b10f7982ace8c26b1e3"
  },
  {
    "url": "task/2021519.html",
    "revision": "dfc2782386e7b7728aeca7e683f36446"
  },
  {
    "url": "task/2021520.html",
    "revision": "bd3d667dd54d87cd6df91cb66f2c7752"
  },
  {
    "url": "task/2021521.html",
    "revision": "b0d67a7e6e150e4057ad3ae0e77b9ce0"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5cf708fa859dd8a660028775bc754044"
  },
  {
    "url": "task/2021524.html",
    "revision": "25e30bd48a475dfb04aff7bb263c7b2f"
  },
  {
    "url": "task/2021531.html",
    "revision": "5bd2f68844b06aa75e5dc0605733d4d3"
  },
  {
    "url": "task/2021628.html",
    "revision": "d984857e5477a2bd3c256ce72fe3d841"
  },
  {
    "url": "task/202164.html",
    "revision": "8be8883b2681260f3bb51138d2ccaad4"
  },
  {
    "url": "task/202169.html",
    "revision": "bbbe8e4fbb7dfa0030dcfaf733494e49"
  },
  {
    "url": "task/2021717.html",
    "revision": "defe5de516d406c278a918bd788c0cfb"
  },
  {
    "url": "task/2021721.html",
    "revision": "4c5a90d617660d1db57831325459d175"
  },
  {
    "url": "task/2021722.html",
    "revision": "eda382b39b16d844784619c7fff3d609"
  },
  {
    "url": "task/2021724.html",
    "revision": "45bb134406561b85a4496e1bc2e72ff8"
  },
  {
    "url": "task/2021725.html",
    "revision": "3540fbbd21fde8d09060d5e3800f7655"
  },
  {
    "url": "task/202181.html",
    "revision": "b8316f33a9fc7db2fc4c59169c3e5992"
  },
  {
    "url": "task/2021811.html",
    "revision": "f3b7f2b5455d974d67578fd910cfe118"
  },
  {
    "url": "task/2021812.html",
    "revision": "32df096e8238908e8c9a8b8ebed07d3a"
  },
  {
    "url": "task/202183.html",
    "revision": "4d6d76f10f382a60f392389f735d7b0a"
  },
  {
    "url": "task/202187.html",
    "revision": "0974ec5c353c8a6339148b0aa46597a6"
  },
  {
    "url": "task/2022218.html",
    "revision": "46dafb1db28382308cfc99c8a6755474"
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
