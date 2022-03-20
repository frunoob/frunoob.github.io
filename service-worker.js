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
    "revision": "e3bed4aecc7d5445a9526810370b3dd1"
  },
  {
    "url": "assets/css/0.styles.6af54cec.css",
    "revision": "d6d1cd8b717b2ded5a5d3e0aa86812d7"
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
    "url": "assets/js/10.4c83ac67.js",
    "revision": "88f3615d65e700ce83bd90e7bd943442"
  },
  {
    "url": "assets/js/100.2a01308f.js",
    "revision": "e3d9d34b8356e9f345d4513f50c4c091"
  },
  {
    "url": "assets/js/101.2cfa9729.js",
    "revision": "de8d5101b555f7dd417c224f36d69e1e"
  },
  {
    "url": "assets/js/102.873f415e.js",
    "revision": "623f2bc7f57548adc0c9e1852c36ff14"
  },
  {
    "url": "assets/js/103.b71559c7.js",
    "revision": "3b6aa90299b92364b7296bce0ed04f58"
  },
  {
    "url": "assets/js/11.bea036dd.js",
    "revision": "6854ff13094eb1a9c3d02e625053eab9"
  },
  {
    "url": "assets/js/12.a2ce7019.js",
    "revision": "4c1bdfb4cf8ecbabd75df00068372f12"
  },
  {
    "url": "assets/js/13.7879ac45.js",
    "revision": "c4a3765c18aa0f5cefb356887dfa6f6a"
  },
  {
    "url": "assets/js/14.7f354830.js",
    "revision": "4e45f1fd851862fcff6f425bf7908230"
  },
  {
    "url": "assets/js/15.3b3608ae.js",
    "revision": "f9e10e0fca741eaa1714675064f93dba"
  },
  {
    "url": "assets/js/16.31be3896.js",
    "revision": "a3cd4bfa218a7bab82eec9e04ec0beec"
  },
  {
    "url": "assets/js/17.ca55e837.js",
    "revision": "a0ad0ff48b8f22123fe9f9e8fa357eca"
  },
  {
    "url": "assets/js/18.9567031f.js",
    "revision": "0cf7749416cdec4a73cdef4823d12c82"
  },
  {
    "url": "assets/js/19.5fa5cf03.js",
    "revision": "1280bd63a6825fc8d4b308ff1cb95a49"
  },
  {
    "url": "assets/js/2.13b0f1ec.js",
    "revision": "d325007966b7000c32085b27c7630035"
  },
  {
    "url": "assets/js/20.a9348756.js",
    "revision": "34a778db54d14239f3b0fe0083f1fa2c"
  },
  {
    "url": "assets/js/21.e823b40f.js",
    "revision": "2edb864d563f2c1c7c6a353b8cc691e9"
  },
  {
    "url": "assets/js/22.21b18d3f.js",
    "revision": "1583617f8d377ebdc0b603bcf0f58f93"
  },
  {
    "url": "assets/js/23.bfb71abc.js",
    "revision": "ff3fb7bfb56cba7a2b9f72a510a5c7a8"
  },
  {
    "url": "assets/js/24.a7505efd.js",
    "revision": "e2086aea848123907dfe0b752b454788"
  },
  {
    "url": "assets/js/25.57d3b973.js",
    "revision": "421d841e650262e6184df673fa8af02a"
  },
  {
    "url": "assets/js/26.fc49ffc8.js",
    "revision": "d848ecfd2557a7e892635701dd7ea9c9"
  },
  {
    "url": "assets/js/27.eb05f41b.js",
    "revision": "a4a708c20faf90940c3c15bc9c4c16f2"
  },
  {
    "url": "assets/js/28.08da7ebf.js",
    "revision": "d5768d0f22cf990633296eb797fa4602"
  },
  {
    "url": "assets/js/29.4d61af18.js",
    "revision": "dde1f423e1a9254ebb28a9f2290ab721"
  },
  {
    "url": "assets/js/3.9a2ec5a7.js",
    "revision": "8bfecd5ae78b5a0f79a4de02de6039ec"
  },
  {
    "url": "assets/js/30.6629dba4.js",
    "revision": "43e255bbb77d3ad0a5afb844a763bce0"
  },
  {
    "url": "assets/js/31.46e18f16.js",
    "revision": "196d9651d8f187f70ee90e0ac65d3732"
  },
  {
    "url": "assets/js/32.1121664c.js",
    "revision": "3bbc36be461fade5dbb1e3528fa3ceeb"
  },
  {
    "url": "assets/js/33.675d0b94.js",
    "revision": "c7cbd879162e20f4f9a12aeae99153c6"
  },
  {
    "url": "assets/js/34.b96ec4f2.js",
    "revision": "7f2abbd8a639f73cd488b30e759f47f4"
  },
  {
    "url": "assets/js/35.8f2dca01.js",
    "revision": "dfc1eadd86bdf629e810c2c86f1eab99"
  },
  {
    "url": "assets/js/36.335b14da.js",
    "revision": "20feb87e3ea9599854a09cdd64e1a45d"
  },
  {
    "url": "assets/js/37.ad811147.js",
    "revision": "e368789fb16d4fb5f69f408049af6aee"
  },
  {
    "url": "assets/js/38.ed90ee99.js",
    "revision": "199319ad4863470a0fbdb8d79dc9f643"
  },
  {
    "url": "assets/js/39.121700ec.js",
    "revision": "0aef4a68e1c81b6a8f83e4527c8147e9"
  },
  {
    "url": "assets/js/4.ea027014.js",
    "revision": "84722b45626dc6122e296a933487ab53"
  },
  {
    "url": "assets/js/40.cd4e76b8.js",
    "revision": "cf01290fe6a17ccb7ea3fe2c12a830d4"
  },
  {
    "url": "assets/js/41.4b86bcfe.js",
    "revision": "beaee38f3c469fdf6e90c8e6fc31347c"
  },
  {
    "url": "assets/js/42.63428771.js",
    "revision": "6db446f68d1f2407474efad84f389dd0"
  },
  {
    "url": "assets/js/43.554181df.js",
    "revision": "a7e1435f0e41ac1678da11ffdefa9c60"
  },
  {
    "url": "assets/js/44.50bad0e9.js",
    "revision": "71485d8dd3e2f8c7e374e29242985906"
  },
  {
    "url": "assets/js/45.77850456.js",
    "revision": "0afff09ce3845274f353309a9cc654b2"
  },
  {
    "url": "assets/js/46.351f7dc1.js",
    "revision": "55d6011a2f3da12b239303ba6aeea4a9"
  },
  {
    "url": "assets/js/47.a3c3c581.js",
    "revision": "34077572f1ad2bc753298c9ab0e29bb2"
  },
  {
    "url": "assets/js/48.615a84b2.js",
    "revision": "eb8969e29a42b75f312a1c41d4b0915c"
  },
  {
    "url": "assets/js/49.2bd68465.js",
    "revision": "7e7c8610d233fe9862ca2244ffe3e273"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.7c626047.js",
    "revision": "c7a1c1de1830e4492c9564c554437081"
  },
  {
    "url": "assets/js/51.f0948895.js",
    "revision": "c7f07f820a900ca543af81c988c13bef"
  },
  {
    "url": "assets/js/52.3bd8db15.js",
    "revision": "e10b120758f0a848cd6c32aa590d1e65"
  },
  {
    "url": "assets/js/53.beea3ddc.js",
    "revision": "5b67c7ee97de70ba89161f99bd886f98"
  },
  {
    "url": "assets/js/54.ff70a403.js",
    "revision": "061d21bcde40c1e0fd1218478284629e"
  },
  {
    "url": "assets/js/55.77ecf767.js",
    "revision": "4c4c94e3653d714db255dc005525d62d"
  },
  {
    "url": "assets/js/56.5c4c0c7d.js",
    "revision": "c18a95bed69c4674c3f7f4925b962082"
  },
  {
    "url": "assets/js/57.f32aef28.js",
    "revision": "c7a238f2474d54f43f63d5d0b160903f"
  },
  {
    "url": "assets/js/58.7c3e547e.js",
    "revision": "ea64c244baf73cc60f6fc5ab5de87738"
  },
  {
    "url": "assets/js/59.5b45b309.js",
    "revision": "ec957b0c89a255ba8b03f94564b9d8b9"
  },
  {
    "url": "assets/js/6.194eca8e.js",
    "revision": "94ef69bfbee1722ec0b21fda75baa614"
  },
  {
    "url": "assets/js/60.ac942d5f.js",
    "revision": "2e955ab8d3068a0a89ea74dd24a3e83e"
  },
  {
    "url": "assets/js/61.ce22ff1d.js",
    "revision": "e3f16aac464c73ab60c85b7a3bf4fa7b"
  },
  {
    "url": "assets/js/62.5f886a32.js",
    "revision": "0ac3f67d6ad375a391774681cc1a8712"
  },
  {
    "url": "assets/js/63.a47922c5.js",
    "revision": "78e0521f225363263ff7fb3e7d8e248f"
  },
  {
    "url": "assets/js/64.3e969b1d.js",
    "revision": "c13d095c8e2ea1d6f5968155f93187f8"
  },
  {
    "url": "assets/js/65.4d4cd01e.js",
    "revision": "90b9c7c36b435401116207e41cb60a40"
  },
  {
    "url": "assets/js/66.03308890.js",
    "revision": "39f8ffe58ecad044e93bd9a0fcdf3bed"
  },
  {
    "url": "assets/js/67.0da54000.js",
    "revision": "bfe3eeeb2876aaf91bee6a5ff8e09af1"
  },
  {
    "url": "assets/js/68.e88fc0bd.js",
    "revision": "5a7178389a2bea0038fa3bbe499e3dd5"
  },
  {
    "url": "assets/js/69.975bee94.js",
    "revision": "b8e007429b0d8f5d8a3cd35e93943b28"
  },
  {
    "url": "assets/js/7.89989005.js",
    "revision": "af9b40b8877920d17343c42393c632d7"
  },
  {
    "url": "assets/js/70.bda29c35.js",
    "revision": "cd4f7a284cf1adccca5b554ac5d213f9"
  },
  {
    "url": "assets/js/71.4b28dc83.js",
    "revision": "c8f7164c2ce1541d42cffcb14f4f85f0"
  },
  {
    "url": "assets/js/72.e7818764.js",
    "revision": "14e4b9bf215e5c42c30219b8eaa69dcd"
  },
  {
    "url": "assets/js/73.2126eaa9.js",
    "revision": "8bb6fbf59e77963ddbe1f902344f11be"
  },
  {
    "url": "assets/js/74.f6cc6eec.js",
    "revision": "ef2778e0b3326c758035e524816d381f"
  },
  {
    "url": "assets/js/75.0806a8ed.js",
    "revision": "68a41ea3d58ad95f56e209cef6e663b5"
  },
  {
    "url": "assets/js/76.51b67b91.js",
    "revision": "6ef77ea8172e85495dff47dbc213267a"
  },
  {
    "url": "assets/js/77.7b5b6530.js",
    "revision": "d7b490cba95bae8b1713a59f58c106ec"
  },
  {
    "url": "assets/js/78.6f4833e9.js",
    "revision": "f7c560e6214140e0f75e1c39add876b1"
  },
  {
    "url": "assets/js/79.1a191fcc.js",
    "revision": "ed5b7295bd91907debecf7fec386ed38"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.e9d21b7f.js",
    "revision": "e56843b8d5de0dad62e4ba596737651e"
  },
  {
    "url": "assets/js/81.5b7e9243.js",
    "revision": "a71b7d49ecc859c4dbb68e1bff512ca3"
  },
  {
    "url": "assets/js/82.908ac568.js",
    "revision": "f5f459b309a7b8d247b9425c9bea0d68"
  },
  {
    "url": "assets/js/83.b087cd9d.js",
    "revision": "93eacfeca7ba44b1e714aad6546db17a"
  },
  {
    "url": "assets/js/84.e8f28fc7.js",
    "revision": "b371001f59d962df5fc16f1a181a1f0e"
  },
  {
    "url": "assets/js/85.b827de45.js",
    "revision": "fc14ab6f56f15374e729b62a0b6e9a04"
  },
  {
    "url": "assets/js/86.52309986.js",
    "revision": "3ffb6c573bb28fbd5020d1084c677e3b"
  },
  {
    "url": "assets/js/87.08ce75ac.js",
    "revision": "41ac7c8160fb6354667cd79abdc5f02d"
  },
  {
    "url": "assets/js/88.61c4779c.js",
    "revision": "3986830c44166f245d7c3bad944453bd"
  },
  {
    "url": "assets/js/89.2394c1fa.js",
    "revision": "7b7f684518745c69bd27b905715420e1"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.34353ca9.js",
    "revision": "d38454247df0ba0a55da5f26c416ce5d"
  },
  {
    "url": "assets/js/91.e2ddd41c.js",
    "revision": "e8e2f247b2a9fd812c1071dba47f1cc1"
  },
  {
    "url": "assets/js/92.096bd54d.js",
    "revision": "2f2a24971e7127f3bbc5cdfaf98f5ebf"
  },
  {
    "url": "assets/js/93.d11d2a22.js",
    "revision": "de7556af0bda40ce4d75b842e22a654c"
  },
  {
    "url": "assets/js/94.71b7994b.js",
    "revision": "9f27d0c3341d94f637a6a412d8afe539"
  },
  {
    "url": "assets/js/95.53b4d73b.js",
    "revision": "a9055b277ae2b0aac6ac3bc315f0130a"
  },
  {
    "url": "assets/js/96.725baa9b.js",
    "revision": "27fb080360dfa16a5473c78f1585a34e"
  },
  {
    "url": "assets/js/97.3c8b4936.js",
    "revision": "ff238d4266e732cd972e6211d495f55a"
  },
  {
    "url": "assets/js/98.a5cbd788.js",
    "revision": "74a5267f5a1951fad8c7aceef0275ceb"
  },
  {
    "url": "assets/js/99.90b15a9d.js",
    "revision": "ea289fb36bc85ed4064a6879e48d1052"
  },
  {
    "url": "assets/js/app.5024a9a8.js",
    "revision": "65fee3e5acb222b06e23aa02fc28a19c"
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
    "url": "assets/prism.css",
    "revision": "c5ee0e8297d73ae3c2f4d9c4dd0483dd"
  },
  {
    "url": "assets/prism.js",
    "revision": "fb33cb3d7dd5b173a1db124871432967"
  },
  {
    "url": "index.html",
    "revision": "3a8c22949e782ea0508708f5f5ddd81c"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "b0b2c83e179ab6c025d12b0147486ae0"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "2ab893fa489acefe2a6563f821d1b78a"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "befde06799508e79f95c7acfb47ebac7"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "53ad73c3d6e8daa8cdde4589ac91365c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "7eaf53451823510e07e2d05dbb064347"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "839814d02081f4f1ee08311e7eab00df"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "84019a113f382ca62175e0f9401a9fc6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "a5c70b647a7fcf0698514cfd5d7f78bb"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e4a345e333156a158d948cdf8080719b"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "40c4fe4af35c84741637e0cc91e173eb"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "c0a877140e8a537656c321ae39c6bef8"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "c1e6baefe4da50abf44de4a00d01a2fd"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "8f4c3853fb8087fcb4b80e1db0230786"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "60e0bc2e383ab9f638ec446bce36833e"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "570b463b8537ecbbdc8627955ab4b99e"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "11c11f1e70b7723617af74af40e15ee8"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "0857fcf59742fdbe6cf402e92d0ba6d3"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "1648776ceb869e62296612b652fbe186"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "44d8cc87c4a1c2aa8ea074ded0079de6"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "08ca19a711194f4299c9d817b589d8d7"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "1b0bbdea9436a9f2d6e8be4b525e9475"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "200cf9b6365a37993a64a5d9e30f9306"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "4550b0cf11d7ff6e6e49ae2b9e110e5d"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "e55328f882e07c89ed0c3634713e5aa1"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "2519a71e322c7729c8663d68ca131d4e"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "f16c76ba57af8afce340606aa5965ad3"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "8e8a768de77cc0815d5b8b140ad91f35"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "7c1d0ec0b707c9ce22c1d5e4b4f4f38d"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "97c8363403a42524b6807034cc9ac7c2"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "79917cc038e23fa4c15c537f5d48f9b6"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "65e9e9a7c4db0a68241c12d22095de78"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "1653e6d5833995acf19f1edbe87c757e"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "295e66306db768b66fbcda2119b779ef"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "b4da17ddb56df34ea93541fed3607904"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "67d9b69dfaaddffd768486047eca05bd"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "44a280cb996d8332453f40d2c5ed3a7f"
  },
  {
    "url": "post/plan.html",
    "revision": "3b173038e2ac1f9bad323c23c7c7c978"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "111185ea79c8059b8284b7e9eb23623a"
  },
  {
    "url": "study/english/words.html",
    "revision": "bede19d297d91ceea09df93b8eb0b140"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "add3ae3dfb1423c986aa91ecd1a44e63"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4dcd56403c90d39e13e10d4f2b908c0a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f3d987d8ac8b27682fdacb374fd7e610"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ac0dfdb49eee94f2c6d7aaae816c1950"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ba0b94c4c0af0e3bb0dda2335398fae3"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "605146890de834c6ce6ad55dcbcbb544"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "1fb48c77c446256dfebf551fd28a9da3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6083f17e65a2c8aa965cf9cb04a4d04d"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a13fff36bbefc9372bb906bdf8cbb93d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "cebf2e4f5c7cafa49fc7558a940bf1c4"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e310cf65a44a8458d5231eb63cb22ab2"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "190eb5222afa8e4def53ee05b67399de"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "74f3f7595ad1e9576e507bdc0c25fe8d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "08f822c85a5d2c1c82791f2fbaeea50f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ea75b39e3245cc64feba68403ba40542"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "86ad00b7abc0957420407a2ac87578d8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f9f5c746bd1d199f811cc137d3796fc4"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0ba2bfa05e9039f45a1e6cac5d6b1a76"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "de5f9501274079504ac5361ae23bac99"
  },
  {
    "url": "task/2021511.html",
    "revision": "8cd73b392b76b77f551b96d1761d273d"
  },
  {
    "url": "task/2021514.html",
    "revision": "24c925c77892aa74b8206843f1db5c8b"
  },
  {
    "url": "task/2021515.html",
    "revision": "1050f4280bfcd226b0729bc64a771219"
  },
  {
    "url": "task/2021518.html",
    "revision": "a9c6ba8d2b7efd40054daf504d6994ff"
  },
  {
    "url": "task/2021519.html",
    "revision": "a66d1ee4be1aca79d8fca11c2a88f92d"
  },
  {
    "url": "task/2021520.html",
    "revision": "58d454805b474a362cf7d2f47fc1925d"
  },
  {
    "url": "task/2021521.html",
    "revision": "fbeb681b8425deca4c2797d90f79d9bd"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "1b3693ff716c2d2e894936e61ea6b8d4"
  },
  {
    "url": "task/2021524.html",
    "revision": "965cd7016270a1fe575b8e02331e44eb"
  },
  {
    "url": "task/2021531.html",
    "revision": "5f64459ad3d87326f906bdb149262973"
  },
  {
    "url": "task/2021628.html",
    "revision": "f308ab3b6912cf91a48af5da4581c8b9"
  },
  {
    "url": "task/202164.html",
    "revision": "12af25aecf03e58996233b6c0fab5660"
  },
  {
    "url": "task/202169.html",
    "revision": "782710dfc0fde6ff5cc087fff15aaadb"
  },
  {
    "url": "task/2021717.html",
    "revision": "4065b83e255059f18f77880021e5fbf9"
  },
  {
    "url": "task/2021721.html",
    "revision": "b84ac62d1f183d34503f813470b945a6"
  },
  {
    "url": "task/2021722.html",
    "revision": "b2f7e62bc32c0a2d4b77643ed2842120"
  },
  {
    "url": "task/2021724.html",
    "revision": "bbfcc8df28238f692b815f575a709330"
  },
  {
    "url": "task/2021725.html",
    "revision": "ae809d3b847b4c95b618a2f7cbba3b4a"
  },
  {
    "url": "task/202181.html",
    "revision": "dc9cba7dd25458c21422ea07d44894d8"
  },
  {
    "url": "task/2021811.html",
    "revision": "370090798d5f221389c8b1595b18a950"
  },
  {
    "url": "task/2021812.html",
    "revision": "e974f6834f7d63aa6ac964b0f15b3fc0"
  },
  {
    "url": "task/202183.html",
    "revision": "17ce863ba821ead354657c7b774df012"
  },
  {
    "url": "task/202187.html",
    "revision": "7d53543079e7b88288f00c67b2180a6c"
  },
  {
    "url": "task/2022218.html",
    "revision": "970e93ce00886eea6e76c4c1707c2d12"
  },
  {
    "url": "task/2022219.html",
    "revision": "049b154865fc236f2330e1026c83aa9c"
  },
  {
    "url": "task/2022222.html",
    "revision": "16b4e70b224d8d3fc17e568df2fcc22d"
  },
  {
    "url": "task/2022224.html",
    "revision": "f71c3357fc4f996932c09d7dbeb74883"
  },
  {
    "url": "task/2022225.html",
    "revision": "5ad3c71fa1ad3dfb3a95b4fdb8f462f5"
  },
  {
    "url": "task/2022315.html",
    "revision": "0c6e864e865541964b592813b15dd4da"
  },
  {
    "url": "test.html",
    "revision": "d8ffdf1ca35c361bcba53bead7f3c5a0"
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
