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
    "revision": "aa38870c3dc3542a3ba2e129eaf33de8"
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
    "url": "assets/js/80.87501e0e.js",
    "revision": "c01d639cd3d52c377697fffbf270cdc8"
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
    "url": "assets/js/app.840a54e5.js",
    "revision": "5e203fdd765adb29652fcf1b27ddbb0c"
  },
  {
    "url": "index.html",
    "revision": "1f711bf3cf3f2b6b8080fd9963d17581"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "c74573ee2e4296bc7a8a80a1fd72bb7a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "4c3824b069499e4251e9d1d8703b29b7"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "0ca72fe8634e557f175a35c7a99f22b9"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "533e02c679659026544065288668e13d"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "002eb5630814687f53b6ba6345b807a7"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "8264b3f4cd7dbab5998843503427e412"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "30f1d79067bcfa645fecadafc6b80446"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "7f8ce2647f8d3fe10d4030def6577208"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "daa3dc7c6344db985ed4f691855dd582"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "d76966797e947185eb330a8a78d8c730"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "8185548c55c385a3c7c1347764773824"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "1d473cc67934336785dee5684833b0d3"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "8ec2303684be45818fd46e8c0b39e1b0"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "2a9dee7f861487a7479fc4cfe2cc4d04"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "dd62f1235ca3f512e37629679a7651e4"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "456238d22b2a94b7efd18ce18fb7db59"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "b5132af55a0452dd1a8504ead035bccb"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "5495dfaf661357d3a97d57140bc132fe"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "6e2dccc406927b0d9848d2becb206a5e"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "60da6c3530062951dd766fa423edc460"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "9dc07384a2e5f4bd1241daabf0a79558"
  },
  {
    "url": "post/plan.html",
    "revision": "696c29ec3cf3497fa9170a20ab0c7517"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "f34ea0ddd38dec6c791f43257bfe6bb5"
  },
  {
    "url": "study/english/words.html",
    "revision": "8b96a65c9bf2a6143db63668765b26e8"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e71cb7cfe462f064c4369573187b697b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "ecae99aafb0d541f533e3f6c05a6e328"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4acf703874aec497c592d4d393ac21cf"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7cd5b8646f7c40552bf3e8b66ce143d1"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ac2a3c0a9c850cb6199283c001edd672"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "14c91e8d0127ff163d9ecd568ea19737"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "28ea85a780d333270089b1c56842b15d"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "fb5d71c9ae5f77360661b3548bfc13aa"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "886cdd3afee8144a3fb37af8e8def384"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "80d913b5f7a22943cd97b6d0c174da47"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "fa2260390dcf7ee4c46f834d175f7093"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4f795b0cf68e8436b295abf1949cc058"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5713ef601729e8d7a40280e02a4e9de0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "55e20c2319b1c8f30299928c4665136c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c2268f6b823f5d2d196bbfa2a633fa9b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e8483aafb5a0904e8809acb1c210dffb"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6d9478788742d6d3dc634ba822540eec"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "29bbfbd8c58769d62ce8ef371fbdb4be"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c238a02c424a10df2c8a52a78bb830e4"
  },
  {
    "url": "task/2021511.html",
    "revision": "9812cd009750d7f0ceb50f7cd90d4097"
  },
  {
    "url": "task/2021514.html",
    "revision": "b53927459f7e9a83b5bce3bed9327881"
  },
  {
    "url": "task/2021515.html",
    "revision": "1ff0803b338fc0e285f49bb94b6a8509"
  },
  {
    "url": "task/2021518.html",
    "revision": "0d453cfbfd0c078a121a594e6e7f1a56"
  },
  {
    "url": "task/2021519.html",
    "revision": "2ba44e4f6113fb27b5079dca08d0b3ad"
  },
  {
    "url": "task/2021520.html",
    "revision": "6befffefe78b629c8785a6481ca2cc24"
  },
  {
    "url": "task/2021521.html",
    "revision": "e5178004a5f9334babc58102da27baa1"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "185285ac099961a3a9119eb9565a2633"
  },
  {
    "url": "task/2021524.html",
    "revision": "bce2f041047cf3b00376384a32a9ebd0"
  },
  {
    "url": "task/2021531.html",
    "revision": "4c0b8d67312e067b4e140087a3e73357"
  },
  {
    "url": "task/2021628.html",
    "revision": "02bbf899370e5a3d3b93788091caa9e0"
  },
  {
    "url": "task/202164.html",
    "revision": "c4b77c551a38ccdc90edde388cf90da4"
  },
  {
    "url": "task/202169.html",
    "revision": "60627957ca090c9eaf06dccf58cae1b0"
  },
  {
    "url": "task/2021717.html",
    "revision": "25a36f42aff5b6679b78613ebce550ea"
  },
  {
    "url": "task/2021721.html",
    "revision": "c89e83fc40d6cf17496c8505c1f1a48a"
  },
  {
    "url": "task/2021722.html",
    "revision": "f06cc796177e2d69a655bad67163b24a"
  },
  {
    "url": "task/2021724.html",
    "revision": "214943beff585a0d815a7a709bf70dfc"
  },
  {
    "url": "task/2021725.html",
    "revision": "2790a50281989a3e234873288dda085c"
  },
  {
    "url": "task/202181.html",
    "revision": "5d2ccc1c64972ee2c88f5ac81d08f830"
  },
  {
    "url": "task/2021811.html",
    "revision": "9afbfe7ac9512a91605d9619b6c250bb"
  },
  {
    "url": "task/2021812.html",
    "revision": "8d35ae8527e3aea454f73aec416f280c"
  },
  {
    "url": "task/202183.html",
    "revision": "0ff30d67b6140f629392f55d57e62ca5"
  },
  {
    "url": "task/202187.html",
    "revision": "d55e1ab9dcc09733629ca2ba10c2631b"
  },
  {
    "url": "task/2022218.html",
    "revision": "9b2b2238cc3bff5ad3fae9a07e221352"
  },
  {
    "url": "task/2022219.html",
    "revision": "5321ceb762fea79116d7d8c8d23f5d4b"
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
