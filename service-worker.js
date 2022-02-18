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
    "revision": "a547e6c6b8562d51fdd1fd356d22ff4e"
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
    "url": "assets/js/9.3778294e.js",
    "revision": "e01a4cf2fd860fbbf315ae0d679d1eb0"
  },
  {
    "url": "assets/js/app.662f8c29.js",
    "revision": "6e73aab9367e619c10a6db15d9b63681"
  },
  {
    "url": "index.html",
    "revision": "659b19743ad8bdf271413e4ee5c8fdfe"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "44a23e3a5d0c08c0c8e88e8b61b710ef"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "5cd046a8e8987aa1c01e8bae326dcd42"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "030cd7bfbe555083e39b883d3e334de4"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "90f687e063aa9e5670c44cf0cc94cc1f"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "faeb035610e557b61e3b3f1c8fed3192"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "6d4adb71a708d4032d01962465f9d3e4"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "3312db07576beba1eae588bc0e26c96a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "1cfe47555ae4df726fa417d84e388e26"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "0e4111ba470d9b613629b4ce15b43d0c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "1f0ba3afdb587d5042a0584e74460c26"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "aa6196ca36a80766bc2690ea980dd769"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "2cd4dd5a23949c0aa5346aeb889faf0c"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "097ea6d2d9776cf1f8a11fea5227dcd6"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "5d75cd4534cb60505d612b823b696ef1"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "0634a3a63de2398de12a0021e522fe76"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "b8a00faff0f56d49859022765d04373a"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "1d7477b6fbefae3547ba184f48bfc7a8"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "067f915ab2d28aa29da044575548287e"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "0b9f6c6a771ec91c6897331dbe7ec8e5"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "f26c3adbd5e39069a85f4e90d63a9813"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "57a04e60840f7dd772ddd488a2351fb5"
  },
  {
    "url": "post/plan.html",
    "revision": "ec671c9199d74139abe8cf7e46541b16"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "cef25131416fd8541aa04313ce9ce096"
  },
  {
    "url": "study/english/words.html",
    "revision": "4a468fa8eb0155211d0ee3e7f2a779fc"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "58c2f1f3cd21ed4a66a0781587072f66"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "efb4ee10c7f079fb5376d350b8d6a031"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8d87d3b6b085352a9bed8123641ae980"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c912bf0426009c25f215486202f79876"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "1bfeb46ee65a020d6bc47da2f7227a43"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "441c3d908877d90b6af497eda029fb29"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "23407c520aca0d9aeead2a20cd78a0d5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "780636314c00a6d0551ed4c8c9c23eec"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d334152a888487c689d7afc544529241"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "e58375a19f1d969a0a64ed0f36601ed7"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "a9aea6b2cf085ee7a2661ff1528ec518"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9207890a78ac84824d0aafd25443706e"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "bcc43c2619e0622f73c3ab64e0ea27ee"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d195c434937cff261dff25d2699759a1"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "226921d2955d691137ff3f702b8c979d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "48a743d8042e6c2f6291f57ad4c59057"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d23aa05f260e586989b37d583d3d30dc"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e4e87494b7bea963df6084dbaf2626ef"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e6c9fbf667a6464c86f73899bff03b80"
  },
  {
    "url": "task/2021511.html",
    "revision": "e6a204a978cd9b57b163484dd1921f51"
  },
  {
    "url": "task/2021514.html",
    "revision": "3d24ff51cacb815862f74457412c6888"
  },
  {
    "url": "task/2021515.html",
    "revision": "ba65a5c499798bef48dde708ce741be5"
  },
  {
    "url": "task/2021518.html",
    "revision": "4289ecdf140a97eda46857e0e562300c"
  },
  {
    "url": "task/2021519.html",
    "revision": "76f6fc552b94aa45bdba437739e84508"
  },
  {
    "url": "task/2021520.html",
    "revision": "80d0dc1336c5046ac4b1392ae491572a"
  },
  {
    "url": "task/2021521.html",
    "revision": "16c646c19b696b4c0f2d11b641d531c1"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "89a3e932319b0daf053ac3dadb6d87d0"
  },
  {
    "url": "task/2021524.html",
    "revision": "475d58688a2ba1abfcf0732bb134f252"
  },
  {
    "url": "task/2021531.html",
    "revision": "1b56a272f6494f0d1bab861ceaa9e9a2"
  },
  {
    "url": "task/2021628.html",
    "revision": "a4f5e213c1c411a864b4a6635ba1c0ae"
  },
  {
    "url": "task/202164.html",
    "revision": "ee026ec872f8656133f0e4a7a3a6c87e"
  },
  {
    "url": "task/202169.html",
    "revision": "326810fe5d083bee5133bea46fd36b40"
  },
  {
    "url": "task/2021717.html",
    "revision": "81954842baf2639b572b493aa3f57226"
  },
  {
    "url": "task/2021721.html",
    "revision": "9a017c4047d64de12256751391192f51"
  },
  {
    "url": "task/2021722.html",
    "revision": "0888da71ee1db2f3e8aa575edfc1688d"
  },
  {
    "url": "task/2021724.html",
    "revision": "fab324ea424a932cda62005a9b5b7830"
  },
  {
    "url": "task/2021725.html",
    "revision": "d49e784f26d46a1ebb2192bccdb9e669"
  },
  {
    "url": "task/202181.html",
    "revision": "afd1362e34611d7cc5a15e6e17c7ec3a"
  },
  {
    "url": "task/2021811.html",
    "revision": "8ef4e9aaf7918d0755f230199b27207d"
  },
  {
    "url": "task/2021812.html",
    "revision": "290d54837f5a84f0b20ec9057a848afd"
  },
  {
    "url": "task/202183.html",
    "revision": "37a4cec148ba11d9bd9b28a8600b3cf7"
  },
  {
    "url": "task/202187.html",
    "revision": "0e2ebe426034f8925af746bb7b654914"
  },
  {
    "url": "task/2022218.html",
    "revision": "1dcfc4ec3abf556a22abc908634b8094"
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
