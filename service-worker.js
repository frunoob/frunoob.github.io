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
    "revision": "48cbba097eb5609d807051dacfca771a"
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
    "url": "assets/js/42.43177e9a.js",
    "revision": "bdddaa68672424874cf822d9c89f39d8"
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
    "url": "assets/js/app.187e5635.js",
    "revision": "85fee902a32a45f50143e1a85d0032db"
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
    "revision": "23155f63497bbbd4fcf551cd7236d65b"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "13b751b3398100874dd7fea493013cef"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0b7cfda1182d39d603157bf99060ac51"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "1a15612f13d7e18cfac41c8b827d740c"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "1cddc386bff17c5e3f2e057d92083e3b"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "825edc0a41ff3f4cf60d65efad09d349"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "f0dbf746f189aa9a6ec890c8b013a93f"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "7e0536b73a0c748dbef9bcb0a626a3e0"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "9a3d2e82605d07abbd06bb7f8d903b1c"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "1923abcf895530feeb525957a53e0d19"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "ff7b69be0c6f9682160f67c7e83c2ade"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "450e05ae8a945402f67df8133bfa7797"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "5479111a431226bce7c3f42d58199870"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "80a36425dcd6d3a6a1fef3cce180cf5c"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "4aabf0b4c873772dee5a4b509b10c528"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "08bcfcb770fc73a4e43bbe72bbb3b42a"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "d3387185f7b6e3a60166d936ab1667e9"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "5046d2a75d21ec1c7c0292b565eee578"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "620e5b149ca89ff07ff261430ca66b81"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "d41a76ca20f5df3be94756c07b9af088"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "fa422eb798cc20e023658f6c11fd8399"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "3c94b49ce53788e74b9aaf9bcb5a67aa"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "738dc5a0ea8d90831034f15dbb26fd05"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "51d53568935665d35a441e3e79bc272e"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "b4cc2e0abf12277e3e3f054b8600fe24"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "70f3af0d59cec85ed7518ea12413bb03"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "9b73cfd3e2dea300f374427793c26eec"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "2ab991fa93de780500db271797fd093b"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "693b352eade0937dd4b5b0f5254d4516"
  },
  {
    "url": "post/plan.html",
    "revision": "2c4cdb929c85ae4064057327ebd7662e"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "dd5d966ca8e3e37fdc80f62bcda35d27"
  },
  {
    "url": "study/english/words.html",
    "revision": "0c3189d06538cac7f7b71506eddfde7d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d0b0f5290cbb969c2a93fe6f065bf04f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "13e27b4b67f85982d9620862ad5b5f08"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "990f62eb3b27bcdc3a90bf08d3236581"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3fbc42eed33382f113fb640137f74b30"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "c4d4ae3f62c237c1ecb6d5f6ec5d202a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "bc54f197b1966bc6f72f0f9a8a8a3737"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0b7b1c67447beb08a7c00ae5ce418082"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "81155092cf82f3c157de8745ae4f9efb"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "e72c0a75f8d445b12441e4bf50d9151e"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "c4255134ad16b5c77345eb583d8a57f9"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "638f9fb3f918351c93962491d9a9ab78"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f1388e95d76d798e01b070f1f4264050"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "077fa6d56c03ab1f6b398978238e9d56"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "063dc169d25d15c49ee64df26a9fe47f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "f07d59c3fb3cbd63b264c6820bbd4e22"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "59e795dfe75d9d78c75041023cf2ad6d"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "069f257e98dc4607e70840557483d4d5"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "de38166041f9100aa26a15c84661587f"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "b43e34537278a68d73857519f90463f5"
  },
  {
    "url": "task/2021511.html",
    "revision": "11974fa80669e0df641eb87dd44286b5"
  },
  {
    "url": "task/2021514.html",
    "revision": "dce599838afb17b6cf4ede232a6c1628"
  },
  {
    "url": "task/2021515.html",
    "revision": "cad965b46a522c40e5d89fae592c706b"
  },
  {
    "url": "task/2021518.html",
    "revision": "73c658e6e89e2d9a4ebfda13f832934d"
  },
  {
    "url": "task/2021519.html",
    "revision": "163faeabc3ff8970d7393872a660a803"
  },
  {
    "url": "task/2021520.html",
    "revision": "4aaf2e0a3a238cd0154d3de988dd733f"
  },
  {
    "url": "task/2021521.html",
    "revision": "7bb180ce9a2124f320d80d70cb087b2b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "b2b5c9b1efebfe50bd64aa9e31526d20"
  },
  {
    "url": "task/2021524.html",
    "revision": "5342d9468ae97edabcb30e89ddcb435d"
  },
  {
    "url": "task/2021531.html",
    "revision": "c1b4f8749d7106f4d9a3fe435e4dea3a"
  },
  {
    "url": "task/2021628.html",
    "revision": "d6139343e3e872479184617c75b5cdb7"
  },
  {
    "url": "task/202164.html",
    "revision": "7b9618b19a74230d19ea350fed337c36"
  },
  {
    "url": "task/202169.html",
    "revision": "02f3478eac0185ad5bd240f2fa08cc5b"
  },
  {
    "url": "task/2021717.html",
    "revision": "29c8dfe11eb5cb2eb22ee6343c999b41"
  },
  {
    "url": "task/2021721.html",
    "revision": "393b8f8cf7ef5cf7115e39f5a7111abe"
  },
  {
    "url": "task/2021722.html",
    "revision": "723673294e4ab4baf75da63ba578d0b4"
  },
  {
    "url": "task/2021724.html",
    "revision": "80a1d6e4b70cb37a1755697a7c8d102b"
  },
  {
    "url": "task/2021725.html",
    "revision": "28a65a97b01e384bb4b704eeefe07e00"
  },
  {
    "url": "task/202181.html",
    "revision": "851f43cca4a370a914f23808e9b9f127"
  },
  {
    "url": "task/2021811.html",
    "revision": "ef5c9592509ee005ac845d58f8e3760a"
  },
  {
    "url": "task/2021812.html",
    "revision": "793df7fe9e74ee2de68b3298a2c7d83c"
  },
  {
    "url": "task/202183.html",
    "revision": "070846542d2d13817420194e95b7d629"
  },
  {
    "url": "task/202187.html",
    "revision": "2d038d7159134b51747f574a2c79c7d3"
  },
  {
    "url": "task/2022218.html",
    "revision": "349cc034e1bf92a06f0a28dc86524d41"
  },
  {
    "url": "task/2022219.html",
    "revision": "6d41d914d20fbd1edeb9411554bd7136"
  },
  {
    "url": "task/2022222.html",
    "revision": "0f40831e04fb3e479d70e999cf2d27a7"
  },
  {
    "url": "test.html",
    "revision": "426508fbc1e7440e0875da0cb5cd42e9"
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
