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
    "revision": "c652311ce06cf4994e59bd069a08724b"
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
    "url": "assets/js/38.db5caa0f.js",
    "revision": "bdf84e904703260735ce702b9995b726"
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
    "url": "assets/js/app.3148a8fc.js",
    "revision": "1b0a107996a6a962fa5a9a0155071f3d"
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
    "revision": "ee523e8538f7edbcb910ea329ce4bccc"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "e69bb06d3331e9aedca8af8637a34616"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c509d1de68f1507a912ac229bbcf34a7"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "5793f3ef1e8a28d4c65b3bfdc8500efe"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b651993944d98bdda4712a33782cfd58"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "d3a86c5b2a8e4a2507c7c1e723e48cf5"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "497b0f76b21dcc04cb10fe06b950bfe2"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "5785004d6a4c8401d2333bca48b52a52"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "242606cd4e34924849b4d401b7479d36"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "c5e54d55f9f8a6a59bd516b02e051ce3"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "45effcf0e991af5fc53a5cc649a2cd17"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "159ff3c59debb91b35bfa8cf3234a2b2"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "b10c9660f6aa802aaa8589f714c093e8"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "650cdc8ce8ee1acfb89dbbdb81ddf79b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "fc5284ab62ccb0a96fd9a535c1c73a40"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "707e275c01927ff61efbd46bc3f54383"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "7f5b77117680ebfdfd0547376bec26df"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "bc2bf987de81fad9a75455122ef4d814"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "4b443dccc2115eba47ad63416eeb63a7"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "dd3f59081618c696cc59811c65112271"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "721183cdaf441b5ca8a74df91a6f3dfd"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "0cca0e5fb911783244de36e863a73638"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "ceb54480553ed3475c54089c708ecc80"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "e87680e237bc0bc3d7ca50e81d66232b"
  },
  {
    "url": "post/plan.html",
    "revision": "b92629d9bb86307a6c407138131befda"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e5c5a9f5078ddad9c9376a78c06677e1"
  },
  {
    "url": "study/english/words.html",
    "revision": "d1bd95a11bb338ac4cc5d58898194bfe"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4d03c1243d7597573bedfeeb66cb0c2a"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f6eb68334da8638721b5b90f648ef6b9"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "80be41d7652bb40336ce54d3b8dcb248"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "599eb4667696a3926761fc9ac400d675"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "cce09f30cf6753351e6552b7d208a77c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "088ee7c5ea005db8975585012157dd24"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "227b089d0ff3b7ead745ee9a22dcc20c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "0ae063aca8c133cf8117fe1f8a07702e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a5b6258e85bed52577b236b52807ee17"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "798d4b34e91bc8885ad526d61c3b13d0"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "bbff5dde4b969afd385116e3a5d446c0"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "cb9e52362d9e98903de547602ddeccfe"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f1ad5fa5995332ab5e62539c4b211c0b"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "01f86b0599effc87816289bb5eff446f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "e1937565a2b52b2fee935c73c2fabe83"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "cc9ebbd4c2af835dde7a634f554f98a2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "754931410767a713999f34dbba938e5a"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "086fd36f520ba803970c96a8eca3e231"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "b393638f7bef105255577b771ff70c59"
  },
  {
    "url": "task/2021511.html",
    "revision": "97e2290668cc769fcea9648e596016a2"
  },
  {
    "url": "task/2021514.html",
    "revision": "b71442e0360063d9befe24ba2f6a30db"
  },
  {
    "url": "task/2021515.html",
    "revision": "1f8d376f29a8661d19fb467eff549150"
  },
  {
    "url": "task/2021518.html",
    "revision": "e771f6ad1da9b739aabcd2e3814bbbbe"
  },
  {
    "url": "task/2021519.html",
    "revision": "279e625520d5d1920d1ad8cb29c969a8"
  },
  {
    "url": "task/2021520.html",
    "revision": "958bea8fb5334776c38c82da02bd5ac2"
  },
  {
    "url": "task/2021521.html",
    "revision": "49d5693f164bb1040ff8c5c12ad581b7"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e1ac03c03b3872859eb8ae178ca49752"
  },
  {
    "url": "task/2021524.html",
    "revision": "8c0d78fa70de32e8dec6ee8f0921fd6c"
  },
  {
    "url": "task/2021531.html",
    "revision": "942b4e5f7a9091fb6a9c4fd0cc00b222"
  },
  {
    "url": "task/2021628.html",
    "revision": "70ff69e2845fc51f72bcfc04ed1a7394"
  },
  {
    "url": "task/202164.html",
    "revision": "b6a7a13c5dd8b39f841f4eb7412e172a"
  },
  {
    "url": "task/202169.html",
    "revision": "4693c4072dfc4ae624cc4f90c33402f7"
  },
  {
    "url": "task/2021717.html",
    "revision": "6bac1ef7f70778ec0909215f6db0c146"
  },
  {
    "url": "task/2021721.html",
    "revision": "3eb183064f1510fea797b2e2aeae487b"
  },
  {
    "url": "task/2021722.html",
    "revision": "44d4da5b01526fddbb34896c7e7a1fc4"
  },
  {
    "url": "task/2021724.html",
    "revision": "56f45e0c6272296901d4667e92860b2f"
  },
  {
    "url": "task/2021725.html",
    "revision": "b0c36cbe39915d74de8982b6fa008e67"
  },
  {
    "url": "task/202181.html",
    "revision": "135c1213348576b4c61cb1e401a5836c"
  },
  {
    "url": "task/2021811.html",
    "revision": "d65b1c6fae8b31ed013c25457f2863b8"
  },
  {
    "url": "task/2021812.html",
    "revision": "f6122f459a9ed0dd5e8f79500f16ab4e"
  },
  {
    "url": "task/202183.html",
    "revision": "f8e7ef0cb65a85b739a5b553e8eb5eda"
  },
  {
    "url": "task/202187.html",
    "revision": "ad7fac8ad5a767b43c574716752c2e16"
  },
  {
    "url": "task/2022218.html",
    "revision": "05d0ea16b5a59946ca6b1f4355c78132"
  },
  {
    "url": "task/2022219.html",
    "revision": "6b8e4dd6d8bc94aa21824d4b87e1a45f"
  },
  {
    "url": "test.html",
    "revision": "e0298afa252f372bdde2dc68ef2a05e5"
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
