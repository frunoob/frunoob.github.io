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
    "revision": "3b3117a7ccdb2d53d82f0742d9625bb0"
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
    "url": "assets/js/31.7ce71a12.js",
    "revision": "23e36cd5dd4d3cdda7670d945d7ff096"
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
    "url": "assets/js/34.513e0ad2.js",
    "revision": "2197ef26c55c7ac175beea332dc61942"
  },
  {
    "url": "assets/js/35.e08e8c2a.js",
    "revision": "76a3a4e6f5b02e45c8a3f5d75faeef6c"
  },
  {
    "url": "assets/js/36.5290a53e.js",
    "revision": "47d49d5e90c341d43fcee4716a13dc8c"
  },
  {
    "url": "assets/js/37.00915e63.js",
    "revision": "0128fb4b61826a19166af8767f204955"
  },
  {
    "url": "assets/js/38.6af80bcb.js",
    "revision": "f0c30e272db13a70ce313e5eadb4c6aa"
  },
  {
    "url": "assets/js/39.3461233d.js",
    "revision": "2fb007c11f483c74e0772ab778b355ef"
  },
  {
    "url": "assets/js/4.6b078159.js",
    "revision": "baa41fc2f1f4e68575de328d7a539699"
  },
  {
    "url": "assets/js/40.09b27494.js",
    "revision": "861ee9b1a918221b304328b132d3cd1c"
  },
  {
    "url": "assets/js/41.1703c613.js",
    "revision": "5664f04552b2908a644c474d29225d85"
  },
  {
    "url": "assets/js/42.6750e561.js",
    "revision": "1d3e47f383fe0eb62c1dcb11135b504c"
  },
  {
    "url": "assets/js/43.f10d2f85.js",
    "revision": "3e766c0a2315ac1f7c69ae6e331bc622"
  },
  {
    "url": "assets/js/44.02660c7b.js",
    "revision": "70df216051263a0203b5f2c2933145c3"
  },
  {
    "url": "assets/js/45.7625b492.js",
    "revision": "711accde7f02a2c43fe9f703265528e8"
  },
  {
    "url": "assets/js/46.42ef087a.js",
    "revision": "083e385215f5900e18ffbdc335294a65"
  },
  {
    "url": "assets/js/47.cda36e78.js",
    "revision": "d49cad4543deb97aa5d4929e72895132"
  },
  {
    "url": "assets/js/48.77d25cfe.js",
    "revision": "49c1978e70dd178a07b8b2ac205f5544"
  },
  {
    "url": "assets/js/49.b743bcb9.js",
    "revision": "c4015cef53420a2364ea3bfb61ea33f7"
  },
  {
    "url": "assets/js/5.089647f9.js",
    "revision": "6c050c5394f14c815323c7b87022f1ea"
  },
  {
    "url": "assets/js/50.8c3037ea.js",
    "revision": "42e6fb645d81f8217107399b56b8dd27"
  },
  {
    "url": "assets/js/51.f91ca086.js",
    "revision": "a1f90086c33be9f7cd7250871666ba02"
  },
  {
    "url": "assets/js/52.911ead61.js",
    "revision": "c931dc7d225b1fad622dfb0e9365438a"
  },
  {
    "url": "assets/js/53.9ed81c1b.js",
    "revision": "f2f1654bf79acef4174dd7d4399556a6"
  },
  {
    "url": "assets/js/54.f3a680ad.js",
    "revision": "94369974f1dca4d66efb8380ef4f2728"
  },
  {
    "url": "assets/js/55.357aab67.js",
    "revision": "ee763873c63eac39ca86c5255ab638ff"
  },
  {
    "url": "assets/js/56.4c2faab7.js",
    "revision": "14ca2a3d3404f54eb81ebd37e012e412"
  },
  {
    "url": "assets/js/57.6fc7f60a.js",
    "revision": "31ccb283a15f6e1b21afb4adf586cdd6"
  },
  {
    "url": "assets/js/58.394ade6f.js",
    "revision": "b7cf1ae1a4b3d2859ff2506fba0ca9ad"
  },
  {
    "url": "assets/js/59.afe2fbd7.js",
    "revision": "3f568b2ad238efb7b3c8f49b5f63d87f"
  },
  {
    "url": "assets/js/6.a6b9eb56.js",
    "revision": "8bfc1271cd203ec30be0622ec123941e"
  },
  {
    "url": "assets/js/60.92ad3958.js",
    "revision": "75d3b584c075957dadd1160d98122424"
  },
  {
    "url": "assets/js/61.0f2ca3e8.js",
    "revision": "b78047f9b0b9cfb87bae2d4e8e03691e"
  },
  {
    "url": "assets/js/62.fe8bd7f3.js",
    "revision": "5ea609d7a293384e44171334350f95a8"
  },
  {
    "url": "assets/js/63.f6e0b13c.js",
    "revision": "a4d971539a35289e9f59eb0aa0672e4d"
  },
  {
    "url": "assets/js/64.917ca1ca.js",
    "revision": "06e9a3172f3ec81e00ef7ea0ebc29884"
  },
  {
    "url": "assets/js/65.a7256000.js",
    "revision": "60ae6f771ef291254999c6c86c744fb5"
  },
  {
    "url": "assets/js/66.ae917c63.js",
    "revision": "15f7110afac6f5215ccdcba949e2e974"
  },
  {
    "url": "assets/js/67.35be0424.js",
    "revision": "3434b3a95847499c2f86cb76ec69f290"
  },
  {
    "url": "assets/js/68.dffd0d5c.js",
    "revision": "aa5f6eb4774fe0388ef56d916e35d7fd"
  },
  {
    "url": "assets/js/69.a8a53a8c.js",
    "revision": "7601d0a8894c3bb37beed576f2e28ca2"
  },
  {
    "url": "assets/js/7.a21ab910.js",
    "revision": "1e505f114af556b7108e933a3787280f"
  },
  {
    "url": "assets/js/70.9a8ba34b.js",
    "revision": "59a24d9d9bf1dbd38794751594e46fff"
  },
  {
    "url": "assets/js/71.548ef613.js",
    "revision": "58ab161f9656a4eaefacb163497460ad"
  },
  {
    "url": "assets/js/72.f8728de5.js",
    "revision": "557785f4591a051e0f16c1260f66fdda"
  },
  {
    "url": "assets/js/73.10cc9ef3.js",
    "revision": "237370d708dc830df0431eaf67156942"
  },
  {
    "url": "assets/js/74.69cfc41e.js",
    "revision": "24d19fc41c3b07822a34f3fccd00b709"
  },
  {
    "url": "assets/js/75.ba60cdc5.js",
    "revision": "1b7fd54824479fdc66ff4bc6a0fb4095"
  },
  {
    "url": "assets/js/76.c35b93f5.js",
    "revision": "f236515fe1ccf50697ee7fc46ed1957d"
  },
  {
    "url": "assets/js/77.9290fdf6.js",
    "revision": "77bc3cd8b3ea560aa5559e4709d56f8a"
  },
  {
    "url": "assets/js/78.d9d04538.js",
    "revision": "a54f2b2f2cab5d3cce6e515c47cea446"
  },
  {
    "url": "assets/js/79.256655c1.js",
    "revision": "c154a1d8857c7f1b3e5960512e1f87af"
  },
  {
    "url": "assets/js/8.7a2e3ba7.js",
    "revision": "60d343c43f746a46095a62acf0d896d6"
  },
  {
    "url": "assets/js/80.73a4316a.js",
    "revision": "27dafa5d191a77bd0b1ce114fc285bd0"
  },
  {
    "url": "assets/js/81.b02f664a.js",
    "revision": "efd256f1c4988e1127c8a1a32cb15986"
  },
  {
    "url": "assets/js/82.bf835f2b.js",
    "revision": "3ca1eb38f9efe8f1bb5a564ae6c67cb3"
  },
  {
    "url": "assets/js/9.2ca3d114.js",
    "revision": "0a60491fa22dd57a06625fde91fa9d78"
  },
  {
    "url": "assets/js/app.1ae86914.js",
    "revision": "3696d1be650825b9dbdc5bc9ba8a1ff3"
  },
  {
    "url": "index.html",
    "revision": "e1d8566d39518ffa9e2ff79bb2cb2cc3"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "6399564ec33574fe4952411405577f56"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "06ee4b0e46ebf1b200b600a00c7ea353"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "c2cc920de8e1985c968e0013e757f6a8"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "bfc204e7a43269a657c8b6f9d6569a20"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "804f8e4d5ae714114187160da3104917"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "576469509ad0c246e418c6e58db0b5a7"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "994e1ffb3169edbc2617138ee8d009a6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "4d49ff4eb81c8507903ecb5517dbbd7d"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "3d1345ea562b7ecd2d72bbc10f76b589"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "d62fdf31af414f56bd82b1df8db03ed0"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "3ef6a7821c8979bce75f1ac13d9f1e0d"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "2f58a19634ad75b379334e5ceda89300"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "4def5b61ceb44fc38e44d566a6bc9e35"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "dad4614f9629fdcbe0f14a7dc1dc5761"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "ec7931c83880c51e744015e1502896c3"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "005f0a5199cb6710c9d48e655ef09397"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "8ea2674da6a44f6cc3c5dde512838fc1"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "6db835fcf924be6ed8ac97affc6e991c"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "708008fea3637c48fad6a5a2ef9e7e5b"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "644da9a9b35ed9ccf40d95ef613686f2"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "ccc48138878da49a60d2bdf4d9cbd598"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "c59d90704f4855a96a2e06b1cef845c2"
  },
  {
    "url": "post/plan.html",
    "revision": "84c37dcc936f7a47e67e466fd0e1f87a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "59e7f040d3504d83bb131e08f3d920db"
  },
  {
    "url": "study/english/words.html",
    "revision": "801475aa243530cb6cde58def9970145"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "1cfdd34d148e5a884d45914de053bbb6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3637c19f0194c22ff2b6d068e7f1d43f"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "c4740092e7aa306045ed13cdbf51c891"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c83cda5971af67ca37e28cf033b2dfa6"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "11ec539895a13c9f9e0422b4a1e2f73e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "8b9f9f3e005c76fd0276f373d9a500a7"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "61d5aaa8835342e219e88b458ce6c4f5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f73597468044399298f1d6f5722c0b28"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "b21fe3606f3050700e4bc63ed7c2d020"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "eb68be7cdadf17ac3e0fb5a8d4bf18a7"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "82d2dfbb89225b1423ada468595a6ef5"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "984999b4f80252806a150994d9eb2ecc"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "d967d2ceca97ea61b23e49ddef0d6c2f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "64ecab8bde1d8e785dfc6ab6fdfcd353"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "aadcb1434ff692c62cec287c0f09fff7"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "44ba23d5bd884fd33ddba4e497619e2f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1b6be1370b5602ba1e530bf55b12ce1b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "1fc2d01421b52258239420455b2b8006"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "1aabf733401a5e3b7161d09ea8a30622"
  },
  {
    "url": "task/2021511.html",
    "revision": "f0673e384d9e188b25ff052c50c55732"
  },
  {
    "url": "task/2021514.html",
    "revision": "b370712ed63c17f6d533f0772a1b210b"
  },
  {
    "url": "task/2021515.html",
    "revision": "f62dd73230b9aac6a3e2e0bfb784758c"
  },
  {
    "url": "task/2021518.html",
    "revision": "cc700dd7bb7bc327d946385f0b5fde48"
  },
  {
    "url": "task/2021519.html",
    "revision": "d4f82dcff1db0b5d4b247809ba4ad27e"
  },
  {
    "url": "task/2021520.html",
    "revision": "af32d14188cbbdf6dc62e7aa3d857144"
  },
  {
    "url": "task/2021521.html",
    "revision": "855188dafe4390e44b29e06fdf0ba495"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "b733f39cf1343b64cca3538e548d07a5"
  },
  {
    "url": "task/2021524.html",
    "revision": "be786ff04041afa0cd29834bce8f59df"
  },
  {
    "url": "task/2021531.html",
    "revision": "a6c90a6d02dd824852931d49644fb0bf"
  },
  {
    "url": "task/2021628.html",
    "revision": "7c1072e03ee497efb94e4fdeb344ed61"
  },
  {
    "url": "task/202164.html",
    "revision": "de1e4a6afefaf0fcb9946af4f7a38079"
  },
  {
    "url": "task/202169.html",
    "revision": "7440f9aef148951f99f0d75bc7a23d99"
  },
  {
    "url": "task/2021717.html",
    "revision": "d9f3db3b85b4d6121b0254eda9e21f42"
  },
  {
    "url": "task/2021721.html",
    "revision": "744cc9e800ee323d224fef1f36d53b5d"
  },
  {
    "url": "task/2021722.html",
    "revision": "1cae8c3bb691c3e4763c5363fb89e6c4"
  },
  {
    "url": "task/2021724.html",
    "revision": "13321bb2653895d88460e564a2376893"
  },
  {
    "url": "task/2021725.html",
    "revision": "fa190ec2d5d7040675015aab39663b61"
  },
  {
    "url": "task/202181.html",
    "revision": "1a2a3f65902caa48c1c5afd80dd09bc8"
  },
  {
    "url": "task/2021811.html",
    "revision": "88ff490f4c8f183a6792934423ec949f"
  },
  {
    "url": "task/2021812.html",
    "revision": "33ddb30269c057818da24f65102b72d8"
  },
  {
    "url": "task/202183.html",
    "revision": "f6b5caaa3934a753dbf6ea1216a5c3e0"
  },
  {
    "url": "task/202187.html",
    "revision": "9244c329e56935e9963a905bf39e2f5f"
  },
  {
    "url": "task/2022218.html",
    "revision": "91b947960c6f50edd7cc82151ac17bf1"
  },
  {
    "url": "task/2022219.html",
    "revision": "867d551e4820a26c8b795c774cafc940"
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
