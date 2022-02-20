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
    "revision": "c83f8a6795018a6c0f351a6a01c9ed06"
  },
  {
    "url": "assets/css/0.styles.79c99c3f.css",
    "revision": "ed363941a0d7902da7443b6ea8ffe3e7"
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
    "url": "assets/js/33.24af46e8.js",
    "revision": "0bfcdce1f6dd450600477299154504d3"
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
    "url": "assets/js/37.68d2f871.js",
    "revision": "da8a0f1cbc175e11c3c10b2d9ba3365c"
  },
  {
    "url": "assets/js/38.665f9fee.js",
    "revision": "3c85d483898339d6c2969533f7db86a8"
  },
  {
    "url": "assets/js/39.56fb0b7c.js",
    "revision": "9d51cb1506d920e2e0f975ed99e58652"
  },
  {
    "url": "assets/js/4.e2ae5594.js",
    "revision": "daa88547d343034748f232ed229ad2ce"
  },
  {
    "url": "assets/js/40.22662f4d.js",
    "revision": "982e08c399313dcf333cb179cd846cfd"
  },
  {
    "url": "assets/js/41.ac887290.js",
    "revision": "9588a7d6e2c14b157a39a4c899401f9c"
  },
  {
    "url": "assets/js/42.72887a38.js",
    "revision": "77268deae02c60ca465e71f0fcd7e2b2"
  },
  {
    "url": "assets/js/43.f1147e77.js",
    "revision": "ec27c871c202012e6782753d96651518"
  },
  {
    "url": "assets/js/44.a2dc0243.js",
    "revision": "fce953568ce10a2912d26fb0f88e24f7"
  },
  {
    "url": "assets/js/45.a8b64393.js",
    "revision": "78272647c2c406b4050027fcfdb5f2fd"
  },
  {
    "url": "assets/js/46.faffa0ef.js",
    "revision": "e74b769b611b46d7f03f5173e85a1c58"
  },
  {
    "url": "assets/js/47.9218bed0.js",
    "revision": "bbcb4d18d36c525bdbee89004e4424b5"
  },
  {
    "url": "assets/js/48.4516857a.js",
    "revision": "273c268475fb9b5062af882cd69bdf57"
  },
  {
    "url": "assets/js/49.3b0ed222.js",
    "revision": "ef480d232d5cd04726d83d0d4609d1e5"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.a9bc86c2.js",
    "revision": "9471902f81cfbb7309f360ca388e6a9f"
  },
  {
    "url": "assets/js/51.98f47758.js",
    "revision": "3f809effc7d26dcb9dfec32166d73dd9"
  },
  {
    "url": "assets/js/52.f430caf3.js",
    "revision": "4737359c1224b69109dc8c88e32821c4"
  },
  {
    "url": "assets/js/53.af547b09.js",
    "revision": "f50d212840882242b97d6c166d6a6d7d"
  },
  {
    "url": "assets/js/54.bb168605.js",
    "revision": "487f780238b14f2baf6cb38dc5b38de3"
  },
  {
    "url": "assets/js/55.a470dfac.js",
    "revision": "e2268e01da68024b861653e6a9da094f"
  },
  {
    "url": "assets/js/56.9c8b908c.js",
    "revision": "f5d7a6e0924937646c34ebae0709e205"
  },
  {
    "url": "assets/js/57.ca64905c.js",
    "revision": "dc9ca7922fc3f4f0c7c8253adaa6d0d0"
  },
  {
    "url": "assets/js/58.27463cf1.js",
    "revision": "c2208275db058055babdf33de794fe09"
  },
  {
    "url": "assets/js/59.0f15dd3c.js",
    "revision": "c33c71c2abc044f0b6b60d1940561790"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.697bba44.js",
    "revision": "f9b9a1d4f8385c66d34be9bd67277107"
  },
  {
    "url": "assets/js/61.04589c93.js",
    "revision": "c9632f82527d283d618f30cf7c00cb0e"
  },
  {
    "url": "assets/js/62.799da14a.js",
    "revision": "eead097468b52d8f1779f267dcd4dd80"
  },
  {
    "url": "assets/js/63.ae079687.js",
    "revision": "ffa5153c05fd061fdbd5da91157a8eb3"
  },
  {
    "url": "assets/js/64.4c79d80e.js",
    "revision": "8f04350621a02a4d2b1cbbd63fad59f9"
  },
  {
    "url": "assets/js/65.da57b325.js",
    "revision": "3a8a1acaf70c5a29e5172eb3a5e2f2f1"
  },
  {
    "url": "assets/js/66.86bed32d.js",
    "revision": "68b7d102f5e7abc5552ab7eb1ebc0e78"
  },
  {
    "url": "assets/js/67.6e2ce286.js",
    "revision": "e5c3977da09cf11d18ab023c359d9536"
  },
  {
    "url": "assets/js/68.10154cdb.js",
    "revision": "e0a9f09af9df4dbf45431bba8db9ed20"
  },
  {
    "url": "assets/js/69.c0c6f3c5.js",
    "revision": "22ddb477c90c3b49d6a1d6d9a8d0ba1d"
  },
  {
    "url": "assets/js/7.6b31ab21.js",
    "revision": "c504d36b19c41904b93a913ff32b2f56"
  },
  {
    "url": "assets/js/70.ce69a176.js",
    "revision": "f852b291e4d2856989feac0e20f3340a"
  },
  {
    "url": "assets/js/71.215674b2.js",
    "revision": "b45a17b4ae0d782a99e4303a0fd86fd3"
  },
  {
    "url": "assets/js/72.220035e1.js",
    "revision": "444496a41582a1f1da712baad4e4cdf6"
  },
  {
    "url": "assets/js/73.510df245.js",
    "revision": "6ae36c64d0a0af30b8b77c1a59d82d04"
  },
  {
    "url": "assets/js/74.e5c1cf84.js",
    "revision": "1d43a75176872130fc95707083b5285c"
  },
  {
    "url": "assets/js/75.c53ae61f.js",
    "revision": "5ef19be3f916438f0defc51f73690ba8"
  },
  {
    "url": "assets/js/76.55e4be7b.js",
    "revision": "2664048867b24c64044f05fc8aa48853"
  },
  {
    "url": "assets/js/77.d0eea5ab.js",
    "revision": "9b87bd2de9ec76a460bfa82f51e5a26f"
  },
  {
    "url": "assets/js/78.1889b3ad.js",
    "revision": "ce95c62738e5d4f3f56985f85c8847bd"
  },
  {
    "url": "assets/js/79.ac1bf40e.js",
    "revision": "c51e75d1cda01e08d15d888275410677"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.16532480.js",
    "revision": "c4e73a35bc7690dc95343fcc8b2d7ca1"
  },
  {
    "url": "assets/js/81.89aa737c.js",
    "revision": "ec02c628ce9803724144e446ffabc868"
  },
  {
    "url": "assets/js/82.dc3ccb90.js",
    "revision": "ce802f350b7b61894963b3600dbb89fd"
  },
  {
    "url": "assets/js/83.f4f9e16a.js",
    "revision": "e07a9701472e8ff0838c48f6a449caf3"
  },
  {
    "url": "assets/js/84.959a3a9c.js",
    "revision": "7022bd7768ebe319054a460b08a664cd"
  },
  {
    "url": "assets/js/85.c02e0b2c.js",
    "revision": "3d37bdfd6bd3fc11bfda7d8317346ffd"
  },
  {
    "url": "assets/js/86.a3a56cb0.js",
    "revision": "595f41cd3f7150d415cc762b8db97feb"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/app.41efc58a.js",
    "revision": "a4b414f955fc0c64c5cea53a621368f7"
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
    "revision": "cbb4514db46329837ccd81b938ad4d76"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "009d8e573b778dd1f11bdc036eaff07e"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "822c29c54408a526eaf38be8acd72a0d"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "a43b638d6e5253909d3eaab59e3cb77e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "bb21ac026b3ac2c8a702494430452b19"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "1d2b4345bc9600046233e4c5487cfc1b"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "27032862cc2194800d98bffe46f2a891"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "90d32ed5c712852a328eb86273f4f352"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "2ea34613bcdb2d0fa594ed0242df73f6"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a65ab040955fc486d87b3eb4a94789fa"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e2ad26434e372d72e9d3b273874adb1f"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "3a8dd9cc8f6dce81a5063ea842ca61f3"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "3e2d97289ab4e343910735e5a391d73a"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "4bdff30451afc8dea0e3d8229d10d3e4"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "caefe128aacc43d6737863c2f1c287b0"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "4e3489ce0b6de0351dc4161bfa73fccc"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "5724ee003f222630dd3af93701d75791"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "a86f5d96a2f5428f90e6dac928ec5317"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "b9db2fee8c2fc4ae674859cb91ab79fd"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "9c6f1d90f2b59fd728935b2e1cba21f8"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "ae357c7f65c59e9c30cdbf9b3f511a53"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "8259be6aa737ff87403eb1f919502d08"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "141a9c606cb74fc92c273f161ae9a157"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "595557eb70d793c7050523efab01d708"
  },
  {
    "url": "post/plan.html",
    "revision": "1e2a04ce5302c033215e233d23485f4a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "9cb89b8b912be8a844c418e27590cda4"
  },
  {
    "url": "study/english/words.html",
    "revision": "d30c82730049848ddc104a717123dfc5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c602b947bd085eca58c645ddb5913745"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "26ea33d8d0eae565e892111aee2b642a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b8f695fcd81cd0a634a1e8c0b363f644"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c50df46de653c94a5975995bb73fd130"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "57887d83656536d7bbaf51aaa3c27da1"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7aeb4bbee00781da0acdf83fc589e0a5"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "02d76e2c55a74da0e987638626f331a9"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "1ba0bb4323da9ae553eab796c39bfdaa"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "4749f082b8646dadc12aa09d3bd7065d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "2d74a1ab70532d1cefaa621db3bc4c45"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "9520c9d57de79d327d89737df916d8d4"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "00669ced14ed18d655b1c5de04ec1dbe"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "23655626f36c967ef664ef263d64b106"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "21e68583b64162ceef66d608f6f447b7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "e795d4a460ef7b2c3095201d8bdf77d4"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d0ddb6caee4fa9b885166b385410c032"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "a627f80e21d6148135691e043c301047"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "3759f218e063fa831cf646220201c768"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "fb443c0c3d08cfc56aef207db34e0855"
  },
  {
    "url": "task/2021511.html",
    "revision": "28ccf15e3202e731e588ed8b26fe72ac"
  },
  {
    "url": "task/2021514.html",
    "revision": "888d37583c7ab58989664e23c2464b89"
  },
  {
    "url": "task/2021515.html",
    "revision": "7578c0b382d2e950c5971433ef45d4fc"
  },
  {
    "url": "task/2021518.html",
    "revision": "6f22c65e37b3835aa26640e46c048433"
  },
  {
    "url": "task/2021519.html",
    "revision": "7c4e9f6ece6c1165619432d5d14a6e97"
  },
  {
    "url": "task/2021520.html",
    "revision": "8561b45467a30fd5de9d48f0736d8385"
  },
  {
    "url": "task/2021521.html",
    "revision": "230851cfa7659b37f6793c425db72cce"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c409af5dc180bed3b208f3ae7504d705"
  },
  {
    "url": "task/2021524.html",
    "revision": "a835d290ac49b6e0b39981d74ecb5407"
  },
  {
    "url": "task/2021531.html",
    "revision": "ebea0b618544a9b39f83dea09320e942"
  },
  {
    "url": "task/2021628.html",
    "revision": "cbdfdabee76c9752e374767b11aed7d5"
  },
  {
    "url": "task/202164.html",
    "revision": "6ebdec5069b9fceff0fcfe15ae369eab"
  },
  {
    "url": "task/202169.html",
    "revision": "ba81d5ef5754ad15c5e7e4e0fdf672cb"
  },
  {
    "url": "task/2021717.html",
    "revision": "f8654f0b12340d8aa6e957945a7bce36"
  },
  {
    "url": "task/2021721.html",
    "revision": "7f2d645a74dc601b5101b14b2003ca4b"
  },
  {
    "url": "task/2021722.html",
    "revision": "de82d93f49c399e36bd4781b845303b4"
  },
  {
    "url": "task/2021724.html",
    "revision": "08fbd8b7e7860cd6d265953fb3519ba5"
  },
  {
    "url": "task/2021725.html",
    "revision": "9efbcc5826e0414f02e64bf7cc83abb3"
  },
  {
    "url": "task/202181.html",
    "revision": "936784f947c3dbfd931f6a2996b59bdc"
  },
  {
    "url": "task/2021811.html",
    "revision": "7b25246ea8a64647b76793bd77eeae86"
  },
  {
    "url": "task/2021812.html",
    "revision": "b937c06a390e1811f1ad792edc34e843"
  },
  {
    "url": "task/202183.html",
    "revision": "8ada5e1e5882db74b7c6ac72a83eea72"
  },
  {
    "url": "task/202187.html",
    "revision": "907efd7dc52dee304f6adbfc0c106375"
  },
  {
    "url": "task/2022218.html",
    "revision": "878c15841505d72f37128bb57c4441cc"
  },
  {
    "url": "task/2022219.html",
    "revision": "c2a03387346acca44b95d9b3028d3420"
  },
  {
    "url": "test.html",
    "revision": "808c5f75f62be1014b27f77c491cac9b"
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
