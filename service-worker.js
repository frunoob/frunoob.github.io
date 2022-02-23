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
    "revision": "a10972161ad0b745c26de15966ec189a"
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
    "url": "assets/js/42.32e489ed.js",
    "revision": "46679e13d7265ec1f47f2ab00d103147"
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
    "url": "assets/js/app.1a710e20.js",
    "revision": "139a15f2c67b89e4f86eab3c5303ef61"
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
    "revision": "f76ba22bb881993680eb36a311b7468b"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "6a76ce560b4f5980007d616ba249fa8e"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9f3cbc6546f9e08abb2c54bd25b3a7d5"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "d21be13af0933de6ea721287dffe534f"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "d2220b1905ae72d98de45bec0d4f5c41"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "8eb46e589e8b261572ff34fc95c49c38"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "810b67081ddaa6e81955aa9ec0b15a62"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "5c1b538a4f00415543b4b6ae6c25f3bb"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "b502fe3b03d20c03a0fd8bba6676ac18"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "601e966805104f9d6e2d6cfcb9cb70b5"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "099b5ff99440abc43d3bc289d383368d"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "56f5380a8cfb2e48919beb0286bee431"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "e1456e2deb383604959d0d7cff496971"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "4d135f8dd799c6bce9170667cea53913"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "ab88f0cbd59bfd7bc85cfeb9ed84587d"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "56937f6b7666d90f3f38bfcb53a8d162"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "15cfa3582f013ba1e800c7c9ce287f99"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "a336c7c3a83e00d48d99f3a447b27990"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "b057ca9e73c23e38ac6aa26519333b24"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "9044c8e01bdc5211103ed066f0fff64f"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "a136acc01d89371f360f56ee3af95519"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "872398c7645f27ec49073f1316dd6401"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "207c3bf56483f847dc0c4971b7d29680"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "2dfb83e3d2b3b7c8784223ae15d47a1e"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "578cfa88cb7be305836a1bfe2bb2a712"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "d11867adec9b8053c95422e8a9cd85ab"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "a76a4af91c5a94975777c33b321a1183"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "14e86e16b9b3eba65adfc28ecbf1d515"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "387175fc8d0c061bf1cfda50c46a6f24"
  },
  {
    "url": "post/plan.html",
    "revision": "246afc9f622a534d864b49cdc6349d2b"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "7d4b920742f49f407159b5f29c2723fd"
  },
  {
    "url": "study/english/words.html",
    "revision": "04ff6564916e9a7f71b5891e73023607"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "68abfd3897721ffd8a6a8e70f3d9ebb8"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "eb2b5cf29e73f329c05b61e4b79c6393"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "31c38d3de90c169016cd1b7cb066f4bd"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "8ab15337a6852669ca438080533ad367"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3c9f58e41876827cbc13050dede93f99"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7e4343eb8f6c092bb0b49cb4cfe6948f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "72b8050ab10e537e3762af7cf6134e0f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "04db1f76c969c67730412c4ef97586b6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "07ebc2b36e213953389c07a687212bd4"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a9ff63c2430f349110ccd517fc04c46d"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "5d2f78db91dc091a7c23fdd64b15d632"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "cf9b492cca4ca4cd747d9de527aa350b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "3bdbf233e5931203fd1f5e1e890e19d6"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "222f066ee601943c9bacc00c38bb9d53"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d121c6f50bf4c9925bdf61e79e9074ff"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d2f8dc479855c67a0729d56cde184d91"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "7050ad36d471ab8b480f60c2ad511d07"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d172a1f3fd0d496d4363119df2be33fd"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ef898271ed07c7de7e32afc359d65ddb"
  },
  {
    "url": "task/2021511.html",
    "revision": "53afc3f2af408d64f4b5daab3b2b3196"
  },
  {
    "url": "task/2021514.html",
    "revision": "645792340b8ef02633bb468b3e250ce8"
  },
  {
    "url": "task/2021515.html",
    "revision": "777c41c7478225330395fb7bdaf68301"
  },
  {
    "url": "task/2021518.html",
    "revision": "c1ed3ca4e11315beb00e2711315c0acf"
  },
  {
    "url": "task/2021519.html",
    "revision": "e222d2a3cfd0f7b3de7966a172d0c83d"
  },
  {
    "url": "task/2021520.html",
    "revision": "6ed92d916825a3a99d728b54d924ec05"
  },
  {
    "url": "task/2021521.html",
    "revision": "53e3da1f671744ebceb6b84f66d37238"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "da75ee7af3ed8dbf20241ef502dca717"
  },
  {
    "url": "task/2021524.html",
    "revision": "0bb67a6139cc0cf82eb31bb8b76079c9"
  },
  {
    "url": "task/2021531.html",
    "revision": "abd401cf4be25d4e260e5981927ea79c"
  },
  {
    "url": "task/2021628.html",
    "revision": "de5ab38fee33f62d7c8d49a22b67cb1a"
  },
  {
    "url": "task/202164.html",
    "revision": "9ab30401b952bf73528499b01ad19f13"
  },
  {
    "url": "task/202169.html",
    "revision": "d24f9de6dfe08b23edc1c4a7ea295bad"
  },
  {
    "url": "task/2021717.html",
    "revision": "3cd6e9736f519267cf937c62d8272dc9"
  },
  {
    "url": "task/2021721.html",
    "revision": "745dd99925bf899eecc6ad47c45f8f42"
  },
  {
    "url": "task/2021722.html",
    "revision": "f2ee73bd794679f08eb3a0f935a8d05c"
  },
  {
    "url": "task/2021724.html",
    "revision": "e26f482f62b4766f50e6018234b72cfd"
  },
  {
    "url": "task/2021725.html",
    "revision": "7d953e75d5b59cfef10b334b99f5a98b"
  },
  {
    "url": "task/202181.html",
    "revision": "15779a9fe53a05f62123fc1965b80f4a"
  },
  {
    "url": "task/2021811.html",
    "revision": "f2ea44532ae194c6b98b6983be9d7184"
  },
  {
    "url": "task/2021812.html",
    "revision": "df8725674d0ec337e7ae3cd529f1710b"
  },
  {
    "url": "task/202183.html",
    "revision": "20609140f27aad8fecca52de22ceecc2"
  },
  {
    "url": "task/202187.html",
    "revision": "5629fbe6e0596a098ac919dea6542328"
  },
  {
    "url": "task/2022218.html",
    "revision": "23809d172fea160cbc55ec4c66ed4880"
  },
  {
    "url": "task/2022219.html",
    "revision": "48136fc951437a34e2d55dbe4885784a"
  },
  {
    "url": "task/2022222.html",
    "revision": "9a1ed3ed7b33c2a1af0a6f519b7ae748"
  },
  {
    "url": "test.html",
    "revision": "070a404c0f5a6eb73802a4eb821cff2b"
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
