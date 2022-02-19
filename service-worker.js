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
    "revision": "1128551edaa9736a90644e6d614186f4"
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
    "url": "assets/js/31.33b7f450.js",
    "revision": "8cad385aa50f23c8423acc9c50a6b4da"
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
    "url": "assets/js/app.a85ed341.js",
    "revision": "18f2c58f0bf4f37eee1d78e0a239dc03"
  },
  {
    "url": "index.html",
    "revision": "454bafaeee7bb299c8451445e71650f4"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "856fdf64f1b71aa6945a81fcc333d726"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "7602fafe704a6b9d0ef623d25b67d06b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "5432302a0a1960079468be460c2e12e8"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "636dde3f8e24df7bb80f1a40939f0d42"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "6a17158f30cec3dffdfa416c41df8eb1"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "186f3c8a5d4d1ed4a0b8c71f082a94bc"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "58c9865dd7864f0edb1e777e8d672548"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "b8a284cfc2b360ad0134d4266da32600"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "13ecffa49693fdc3f2aa2b65e6baf7fd"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "ae24e39ccb58ff4a80e4ccd0a9a89b39"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "0292775dd8aebf060f9714364c544382"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "0e02cc43be902674e78683c28304299b"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "73b83a5b4c4f92c7c915d038e1d8f469"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "8a67b7c31774e7b2fde9a49b7dc13347"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "2d367057da99c0463dbfe5737b6785b8"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "becd99a96359a091b9b0dd952af64ad8"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "666525b7e0a4aae88e811eae2a64599a"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "fe4d98712282b2f5d5563fb5f51e762b"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "0475d46cabbe48366bdd455cb9281b0a"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "e429e8b1960a2c79873ec73d03f93bfb"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "0f9960de5e12e792034ca0fefa220427"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "77796757b8ce7712b7170012e3386869"
  },
  {
    "url": "post/plan.html",
    "revision": "598899acac53f7a61c67ad14b72c0454"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "866ff937649963dd094a131ec548313d"
  },
  {
    "url": "study/english/words.html",
    "revision": "5b9fde6344a8e9bdec51b7ac5215b935"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "67fecb5988ffed27edc703439204288c"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "587ebdf34d4c9000b04abe84ab95b40c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e9183295d7b3978e31fb1e6db2908d18"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "dd6d714b781ed46e35d18430484908b2"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "df853e4c70b72baf303080935f8edc8a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f47225a3350fd7d9b677d28fa57980b9"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "1e689b855cbdbf66b2272b4793b5d71a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "604840115f12929222ce9b324ecd78d2"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "81e398c193c206a0ba3df61681840f67"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "89ca5991bfb030cd25097d277ceecaee"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "82604f1b341f1777290d5545f3768959"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e7ca152646ea73f2f16d10e61d478809"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "47d9e8611f44ef74dc2415a2b8f16942"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "521417894c15a279315cd473928676a5"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3be9eb15f21a24de2264c4d47bf6f9b2"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "be8a68e7d07193f77a721f0dfe77be6c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1db35a9b1b2927ac634eed37d3f21b3d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "11e5997f08de16cf4ef1e258b42fa1ef"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "832d51810edbadbb08e3f56f7a4d403c"
  },
  {
    "url": "task/2021511.html",
    "revision": "0005f361e7cc0be4757d1e0e5ba729bb"
  },
  {
    "url": "task/2021514.html",
    "revision": "093a88b3f6878977668963f366d0d391"
  },
  {
    "url": "task/2021515.html",
    "revision": "d2d4bcdff04bb299ab130eef4dda464e"
  },
  {
    "url": "task/2021518.html",
    "revision": "99ccc501c690504da76f3f662ea8bdab"
  },
  {
    "url": "task/2021519.html",
    "revision": "5d13d8ec29c5477e81a403ac5871e4f5"
  },
  {
    "url": "task/2021520.html",
    "revision": "9335f7d41a2156ab0d927ac6fda74af2"
  },
  {
    "url": "task/2021521.html",
    "revision": "08ff667130a6fe1b1139c704a0203186"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "89eb665ceb04a076fedc34d09ed6bd18"
  },
  {
    "url": "task/2021524.html",
    "revision": "340888d506576c3f22c71c12b19ea4bb"
  },
  {
    "url": "task/2021531.html",
    "revision": "78bc5ed1d91af6f7d9a86798ed71d920"
  },
  {
    "url": "task/2021628.html",
    "revision": "ba2776a6a60562e5c255a0b13af4813a"
  },
  {
    "url": "task/202164.html",
    "revision": "c9d0ea22ceda2bec83c568d6d543b776"
  },
  {
    "url": "task/202169.html",
    "revision": "3fea6f89d893238f07fb303fddf25529"
  },
  {
    "url": "task/2021717.html",
    "revision": "0dd32f1696d2d580610e975c1dc16959"
  },
  {
    "url": "task/2021721.html",
    "revision": "2a025cde1a6ab3fc04e25d77b9d63156"
  },
  {
    "url": "task/2021722.html",
    "revision": "ef2e44e350d2c2293a759708b8bb5a56"
  },
  {
    "url": "task/2021724.html",
    "revision": "62242735d56b69548c70d2db13a88c78"
  },
  {
    "url": "task/2021725.html",
    "revision": "9d65277ef89aef426024c7670e4bffea"
  },
  {
    "url": "task/202181.html",
    "revision": "960e8e0be9c37bd754b4bc9fcf71f098"
  },
  {
    "url": "task/2021811.html",
    "revision": "abd22ce222ba113ac5838f3cd0694520"
  },
  {
    "url": "task/2021812.html",
    "revision": "6c7d0ebe8aed0e312d955f9ce830037c"
  },
  {
    "url": "task/202183.html",
    "revision": "07035d880d01e21d78b46f97e3338bc2"
  },
  {
    "url": "task/202187.html",
    "revision": "c87f89bf721f4b8cb56ee5d90a2d14e0"
  },
  {
    "url": "task/2022218.html",
    "revision": "dec4d525e7fc24127a00a6cb56a6875e"
  },
  {
    "url": "task/2022219.html",
    "revision": "054e810718fb32c62b4090f7cd3fe3f7"
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
