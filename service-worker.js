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
    "revision": "5b35b7cd8a63276008fb3a45fb391c7e"
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
    "url": "assets/js/38.f0b4eac3.js",
    "revision": "908bc622c21fd4aa788c3bbc27b8bf19"
  },
  {
    "url": "assets/js/39.185341f9.js",
    "revision": "fa26453b26baad382902ca08b1b36bed"
  },
  {
    "url": "assets/js/4.e2ae5594.js",
    "revision": "daa88547d343034748f232ed229ad2ce"
  },
  {
    "url": "assets/js/40.83cad994.js",
    "revision": "752b523cd45a999e2751b795e60d073d"
  },
  {
    "url": "assets/js/41.5845333f.js",
    "revision": "202986d3df2ad3e35631a2f468d4a54b"
  },
  {
    "url": "assets/js/42.1b13ba21.js",
    "revision": "25e88d199fc0c940f901b2a4e1561407"
  },
  {
    "url": "assets/js/43.f21b6c79.js",
    "revision": "59f6ca92339896642186290d1c69b145"
  },
  {
    "url": "assets/js/44.4af622dd.js",
    "revision": "e690943635851c7f9209749da339cef4"
  },
  {
    "url": "assets/js/45.8150c8f2.js",
    "revision": "0bdde7cf43266945f9669638240d4a87"
  },
  {
    "url": "assets/js/46.c8d17ce1.js",
    "revision": "69a432a3fe4e2f1175f075533589589f"
  },
  {
    "url": "assets/js/47.f694fb22.js",
    "revision": "d4406c4cc6a847dedbb02e33f4910326"
  },
  {
    "url": "assets/js/48.a609ca5c.js",
    "revision": "f25f5c448df6b6e3a28937c73f33e2bb"
  },
  {
    "url": "assets/js/49.81ce2d19.js",
    "revision": "ede05c3f77f401abb9af892561d487a5"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.e7b2908c.js",
    "revision": "b2876abd477ef1cecb63f0f4a6fc6846"
  },
  {
    "url": "assets/js/51.bc497ae9.js",
    "revision": "a0a7ce3fe230e393343dd4e58a850e0d"
  },
  {
    "url": "assets/js/52.ae3e0e0d.js",
    "revision": "e25b01c6b5d7eee1aa189160a19bbc52"
  },
  {
    "url": "assets/js/53.bac7e4d5.js",
    "revision": "e6471971f3332de64836de79adc7fef8"
  },
  {
    "url": "assets/js/54.5f0f9e53.js",
    "revision": "c79595e79d743c384c973d29de431535"
  },
  {
    "url": "assets/js/55.285e72cb.js",
    "revision": "f66be97134be9691930ce6c94526cb4e"
  },
  {
    "url": "assets/js/56.0fe4d956.js",
    "revision": "950af35138976e5d75f88c941c6a0711"
  },
  {
    "url": "assets/js/57.507c385b.js",
    "revision": "714aef114ecd0663679df2a3646d6779"
  },
  {
    "url": "assets/js/58.3bd23ce9.js",
    "revision": "1afe969215f0e9a8b2291864c47f250b"
  },
  {
    "url": "assets/js/59.fa45ab43.js",
    "revision": "818f65201903591bb7120962b787846f"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.5fe4d8a8.js",
    "revision": "4b6836fdfed9f8001bc8e391cf3d4fce"
  },
  {
    "url": "assets/js/61.b5198fdf.js",
    "revision": "c698e2ecdc4eab3478df5c5600ed4124"
  },
  {
    "url": "assets/js/62.808a5168.js",
    "revision": "d45e8c3da6231005ae6f33ca3d7bcf7a"
  },
  {
    "url": "assets/js/63.8a4599fe.js",
    "revision": "89982e4a6da82acf636f64e1e8553f80"
  },
  {
    "url": "assets/js/64.a37c4e53.js",
    "revision": "259a0563e55845dbb841f7c9aff097fb"
  },
  {
    "url": "assets/js/65.2a4d4b70.js",
    "revision": "76831466bc2c94c00d4677bc2a44586a"
  },
  {
    "url": "assets/js/66.fbed87a4.js",
    "revision": "29fa647e46b0489764cb07719ae61d0b"
  },
  {
    "url": "assets/js/67.09fbcb14.js",
    "revision": "592c3b32d0ffaab6823db39a18c251f5"
  },
  {
    "url": "assets/js/68.1282e975.js",
    "revision": "7e204a1c5c8ddc15a8e0456428e564f4"
  },
  {
    "url": "assets/js/69.c6b7de89.js",
    "revision": "264be4d935c0b492f52efcefd4bb8c68"
  },
  {
    "url": "assets/js/7.c9892328.js",
    "revision": "20146919b1770ee544c220b972959432"
  },
  {
    "url": "assets/js/70.1b8826c0.js",
    "revision": "8a6a21f9e017ba2c4292f050d7ff4899"
  },
  {
    "url": "assets/js/71.3c477aa3.js",
    "revision": "f8e985e5cf62b0efb3d9d85048b0ffd6"
  },
  {
    "url": "assets/js/72.e1aaee9c.js",
    "revision": "6a80e06f0229656899456e31c7002321"
  },
  {
    "url": "assets/js/73.8165783d.js",
    "revision": "0032b36cdc502b43b9be38968ec353b0"
  },
  {
    "url": "assets/js/74.c627138e.js",
    "revision": "6136782d01ecf89110de5b56b601861c"
  },
  {
    "url": "assets/js/75.1111f187.js",
    "revision": "bfd735d25ae58534f243c182d721450a"
  },
  {
    "url": "assets/js/76.7ba46459.js",
    "revision": "9cb28a5373dc094b9442c26df6ac37f3"
  },
  {
    "url": "assets/js/77.3466aa0d.js",
    "revision": "0250a390b5a9f9c0efd8097334f9de15"
  },
  {
    "url": "assets/js/78.caacc776.js",
    "revision": "d3a389b1b563c6e0133329921a2405c5"
  },
  {
    "url": "assets/js/79.c9b403a3.js",
    "revision": "d39da5e0002313be700acb14e7c2bc49"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.e67c6bf8.js",
    "revision": "b9632acc2578aa8eb115e6ed71da4a40"
  },
  {
    "url": "assets/js/81.5102672b.js",
    "revision": "d9f0ad004554a7c32908e5a47201e374"
  },
  {
    "url": "assets/js/82.d7633e05.js",
    "revision": "859f220b0b172ad86daa91a0528cbc71"
  },
  {
    "url": "assets/js/83.16119c5e.js",
    "revision": "82385a8734ebd18ca56f5a36abb6baf5"
  },
  {
    "url": "assets/js/84.06f2ca6e.js",
    "revision": "4235136ca8e009f478a8cd008d2d0f22"
  },
  {
    "url": "assets/js/85.dc03f221.js",
    "revision": "7f1cd25332d0cbe8bd3858b860061a9b"
  },
  {
    "url": "assets/js/86.0f9399ed.js",
    "revision": "bb4f4dba7b51fefd11458759584dbcaf"
  },
  {
    "url": "assets/js/87.3c65ffe3.js",
    "revision": "871c044f91d8f9f2ffa28912eef17008"
  },
  {
    "url": "assets/js/88.23cdd4b6.js",
    "revision": "c5dd6f0079ea77a0f2008e1f84a28ec4"
  },
  {
    "url": "assets/js/89.7ac17270.js",
    "revision": "1e2e03c5dea9583966f2680a70e1bf22"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/90.bd2a37ac.js",
    "revision": "999fe53c74b2c40c4d7bce940ecc718f"
  },
  {
    "url": "assets/js/91.cd7af630.js",
    "revision": "0ed1f998bea60ae1c0d799524cf3a553"
  },
  {
    "url": "assets/js/92.25bb21fa.js",
    "revision": "69df78322de8e43980e9a9d5838080f9"
  },
  {
    "url": "assets/js/app.e31ca40f.js",
    "revision": "f2d77c0e999c7b06e414167fd36d3e04"
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
    "revision": "daffea466aae97e88f4ac7575424d580"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "f27c4b797f25482241c63df1529e0494"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c97cceca240fd3e1335ab7c8e277859c"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "e543dd7a5e3fa950493db1d7da7537c6"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "d60e8bd4ea00035a82cb59374bb4c33a"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "6a3471508ecc47a98e72b8defd8e6a62"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "2c3eb7ef1fd75005ef133a2fcbd47c85"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "b3ac74b7ff832a2fb98423ce0780c1d7"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "16ac9beb75f0e402b8165ce82a2b015e"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "0799ddaddffe26d6248ea84021a75de3"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "9f5c0bd403e8a516da659dcc18a359a9"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "c0cddf3ca082d9b37b93a78382e75c9a"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ab03101d4c56020f2e64e5f436c46b0e"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "b6fb0871b74ea9c16cce3faf0efd4d78"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "ec5cb3767b4417662fe952cbbec9b287"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "8e5dfa2cd979bf5a7a00318376a84d91"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "1bb3f5427d0098fe97a2051c49f89406"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "ac5f6f16c31983711b8509b4ddfd6663"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "91a9af7ef6f8917667642979caecbddf"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "4bf722e0029986962e95d479390c5143"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "fe6d89c845c4f1aeaa4fd066e3b62dc9"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "ee4fce1457a38fb12af6c1ad2e7f3432"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "639d59d1ecafea43db5da0795a871448"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "be65e88c56b8185f1efce57d2e3bde96"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "9adbea0fcc745da4ad9e4070d4b4216e"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "de0be4ed88135b63f08b5fdb1a696b51"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "315e6c334c254e417138ac79dbabdac0"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "4e00f19cb183070c1b4ca31ae700ac9f"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "2f44cff91da206a620a6745a2f0298c4"
  },
  {
    "url": "post/plan.html",
    "revision": "8a59e6317728e4fd83898913ec491c0f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d554f197300dc3999aec22d6463206f3"
  },
  {
    "url": "study/english/words.html",
    "revision": "d56156be73f740b6acc4fdc6d15c2b59"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2e88c6f5ecb77d2c1de18810f083be6a"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "2c6b07a0a9c175fc507e9135380d7422"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4e6d57c9dacd4d31b0f435f72decccf9"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "5828dfc67d866b2b7d6aa94237e29e19"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "fd0948348e0372ef889bc978ee8bfe4f"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "b45464f30bb96b7b48817d23fd2a5882"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "953e50d95aab65dc4498fca90e8b5964"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ff6ac0808c7fc41d914069182ddffaab"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "e5d05ddfa02e74cafdf6ee1b896f015c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "4abccc519011615487a7b516c4385be6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "9b0c82c7eca2fc91f7863fc878d5c70c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ddec5c4fbbbae8e37837f6ff52f5841a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a4a5d92d7cff35abbe6bfed5511d504f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "6bb4316dc873e541cab9235891e5ce90"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "aa22a0dd357681aa0d51e385a58d5fd5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "90fbe52ddfdc5f6ee1d9812107fb76e5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "33203d847d1100769d6389a5a3d25495"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "5eb116868faa66d97979f4f704162864"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "46c522abd0797e578c7a083427af50f3"
  },
  {
    "url": "task/2021511.html",
    "revision": "6424a1f2c958e8b086119b409ed53c46"
  },
  {
    "url": "task/2021514.html",
    "revision": "f2930ea1648ccf9dae435cc772a598cb"
  },
  {
    "url": "task/2021515.html",
    "revision": "1b40aab75b092bd8733e41d8d2e60632"
  },
  {
    "url": "task/2021518.html",
    "revision": "7f20e87720c47e23057c797488a3c7a4"
  },
  {
    "url": "task/2021519.html",
    "revision": "8778dc9b1441fb38c5abbcd452b0396b"
  },
  {
    "url": "task/2021520.html",
    "revision": "efe38d91dc0567cf7891a050fe48c6e6"
  },
  {
    "url": "task/2021521.html",
    "revision": "da23ebbc0e05a6c5348a8c896dc6333f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5f5d3bd64e0f1e3791fd4a5a8bb25e33"
  },
  {
    "url": "task/2021524.html",
    "revision": "7e0324836686c486a5947da15eb08dad"
  },
  {
    "url": "task/2021531.html",
    "revision": "c7929c4ba6311270ccc4675879e611b5"
  },
  {
    "url": "task/2021628.html",
    "revision": "97a3d983e38593bb057f066655a63f92"
  },
  {
    "url": "task/202164.html",
    "revision": "a862c2bf165ae7e054cb8b771b1d22b6"
  },
  {
    "url": "task/202169.html",
    "revision": "55fb13289dea45f50a0463b7dfeefa0a"
  },
  {
    "url": "task/2021717.html",
    "revision": "e0628d8766ee51f5512aa325fd4062db"
  },
  {
    "url": "task/2021721.html",
    "revision": "40b5921a227ba6704f4a6c6e0c299750"
  },
  {
    "url": "task/2021722.html",
    "revision": "247b32759e668df2e24fd40d7dbd46f3"
  },
  {
    "url": "task/2021724.html",
    "revision": "31ae5a5e81ce93e90f3ac0f753d2ed9a"
  },
  {
    "url": "task/2021725.html",
    "revision": "f6ba5b1254a3274de57bc31c887c8def"
  },
  {
    "url": "task/202181.html",
    "revision": "be552077c9102b6dfc736bcc92b157a8"
  },
  {
    "url": "task/2021811.html",
    "revision": "ab92158bce5c542c72f5dff4c6c95e8e"
  },
  {
    "url": "task/2021812.html",
    "revision": "9718619fb64beba4a5682a467383aff4"
  },
  {
    "url": "task/202183.html",
    "revision": "6d0df3281cf61f220228028a5c56c38a"
  },
  {
    "url": "task/202187.html",
    "revision": "df8bb931df2dbce4945e46041e7e749b"
  },
  {
    "url": "task/2022218.html",
    "revision": "706d3731112f940892a7ca0e3ab0013a"
  },
  {
    "url": "task/2022219.html",
    "revision": "7ff9e0dc270190696849bb57fdcb2b5f"
  },
  {
    "url": "task/2022222.html",
    "revision": "9d95babbabe3bee5eccbd16b5191e4dd"
  },
  {
    "url": "test.html",
    "revision": "080843265fe68a32cd92783f5aa7bda9"
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
