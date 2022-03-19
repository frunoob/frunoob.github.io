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
    "revision": "49bcf31e209edbc420801ab652c26019"
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
    "url": "assets/js/14.25860ca4.js",
    "revision": "bbd6febf733d087904bca1a0154ce69c"
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
    "url": "assets/js/app.76ca07eb.js",
    "revision": "7c6e8604183bf74fb6b123eb432ebd84"
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
    "revision": "b8567ef72e8e997f8471594170e4b250"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "cb17c83b1c802cbe6b2d366c1bea0db7"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "62dbfb14c050055af1ccd3649a15da9d"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "d2062231f12fa0aa0931ca4d5316acde"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "65151beb59da955d347e8ef6516c2725"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "e781b3bb1c2f3646ed7fd2fe450b4f9e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "734f82f2df3fca4d70bf9c6f67c30981"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "e9dcf08bb5b71e605bf147b6544ddaff"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "d2ac0682081ffe643c9643b6ec452ece"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "f3a7634fde74b3be4d8b8330492a3efa"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "bc7b82d509e946373dcb5211738b1fd4"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "0e73babd1aea24212e93b00d799925c4"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "966492e9e07d316127cce745818e5eb5"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "d125db349439471825089e35ef562049"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "24aa91141c6ca94ec01fb60f84544b94"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "d8c0091181cb04bce8325d0d7421459d"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "b492ff520e956e2acd0dd9bb688f137e"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "f3e3cf9b8d81dbdfd745e2d0208796e3"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "6f195ae4e143a2c80a8bbaec98a4fd15"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "3fbd3174fe8b5295e7669e549acb3272"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "23495729a29301950588db770b6fbed2"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "22433afeb5c84b8768162550534a4bfd"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "f3fe667cb9574b29e358d6d4545037d8"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "e657b1674c1d7142f8b5ff47abd0c383"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "56b6f38bee5bfe27ad5dc9479b2077d5"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "5721b0935b312cf2bacff82e58a79658"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "d525aea07b8c23ac5b57a9d6e1ee2c95"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "9d4625cd42c0e52c8cf4ef14614470fb"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "8fa40d5d8501e203e6cc547f4cde0829"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "96bd9aabdb837d8a9176efef4b878573"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "95d3b377285625022fc33e6ccb94f042"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "9a52b135c26d81a9e291599899872f4c"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "d65e307eff8218c6f799746f3b623804"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "836e843f5c781dd86c0cbc5d75524d32"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "71c07e806e421e0d43b7fe51b9cd984e"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "6f58de378fdb504fc997bd8695e2aa49"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "df0107e386417c3b90d86be976ec1d3e"
  },
  {
    "url": "post/plan.html",
    "revision": "3c3d2011db1ce143d6835a16b950ef7a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "97110026a9a2f2614805cc9f878b0385"
  },
  {
    "url": "study/english/words.html",
    "revision": "b5003ea8e9f42b0d56e826f75ff82e0b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "229a88e763d7b288eab7dfc262c91358"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "b7cb41a489b8d2855def56ac83249528"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "1a6afb70acc3a7afee766e3d9d5ee37d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "77ddf99d88553ed909b3a9e2521c988e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "22f09bf7796692f2ce78491f9f4bb6b1"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "1fc466edfd86a6245c16965804b97ce1"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "c00e2c8fc513a5dcee6cfb77957bac4f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "efc772d3d3f75016056e59c4e458ded1"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "48ec1a9ac6ee7c66ecd6597c6d7385e3"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "11a3419494317cb95525e90e50cfd27e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "877c0b13d84aeda9a633bbb2f3f4bbf1"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "618cfcf9334aa6c45bd64502581b3500"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "b38fea290f7a4caa98ffb7e10431b314"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "49ec7dbc64c94c7538023bc859d153cd"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "22d86ad4c73dc7f651ebca2607a27c2d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2b63e4318edcddc5bcdfcdaa91ac5ade"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0d5eca2f34615accecffb96349f8774f"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "f20014074ab45d4f2d2c1bfe847cd2b7"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "7adeca88392cc3fb3af10b60279ac206"
  },
  {
    "url": "task/2021511.html",
    "revision": "ffe9c149b06be42f6d54e2f3f9714852"
  },
  {
    "url": "task/2021514.html",
    "revision": "7c9bace556b898e1b9a26529c98b34c3"
  },
  {
    "url": "task/2021515.html",
    "revision": "420115ae4e9920cec383097b7c85e7c4"
  },
  {
    "url": "task/2021518.html",
    "revision": "777db801f1bd869a3f8d4a89630981d5"
  },
  {
    "url": "task/2021519.html",
    "revision": "cca9ae3cc95508fe912cf7b0a8942fbb"
  },
  {
    "url": "task/2021520.html",
    "revision": "bda995c9d659745f73c9abd9af31d09c"
  },
  {
    "url": "task/2021521.html",
    "revision": "62906d726c517a989a0d01891e1aa273"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8edaad268e99cd7a2010e46bc5b79f49"
  },
  {
    "url": "task/2021524.html",
    "revision": "1c9879f8199e2acbbc517ca6fbf929b9"
  },
  {
    "url": "task/2021531.html",
    "revision": "8859c566999da082a9d2ee223d9d11aa"
  },
  {
    "url": "task/2021628.html",
    "revision": "601d3f82e27cd7c627cf5f32d2f64ca7"
  },
  {
    "url": "task/202164.html",
    "revision": "51f6b955972bccab30713f464c9430e9"
  },
  {
    "url": "task/202169.html",
    "revision": "a2b506eb31df8d043463621b6f2ddc51"
  },
  {
    "url": "task/2021717.html",
    "revision": "714a2adae133d158676cfe459cfa8d6b"
  },
  {
    "url": "task/2021721.html",
    "revision": "29cd3092a241292fae98a33d6522c6a2"
  },
  {
    "url": "task/2021722.html",
    "revision": "e4011bb09e4e8f46c9effba44cfa1b97"
  },
  {
    "url": "task/2021724.html",
    "revision": "a65d5faa35cf22bd20a6da909e1ffa98"
  },
  {
    "url": "task/2021725.html",
    "revision": "60ef0b9eef51d817e1134d72735d6597"
  },
  {
    "url": "task/202181.html",
    "revision": "4de6018a06831d704e4aee3ed13fe472"
  },
  {
    "url": "task/2021811.html",
    "revision": "5fe732402123f03b2cff132d8baffac1"
  },
  {
    "url": "task/2021812.html",
    "revision": "8ccb6524126fd30fcef90519d00dd363"
  },
  {
    "url": "task/202183.html",
    "revision": "6e6ee1296c61d49465ff765bbf4a7b94"
  },
  {
    "url": "task/202187.html",
    "revision": "b8f447ac0c4d71e5cb25fc97bfaaf560"
  },
  {
    "url": "task/2022218.html",
    "revision": "9fc9e219062661eb90095a9a861a5c84"
  },
  {
    "url": "task/2022219.html",
    "revision": "7ee4ebd63e61798fda731d4af9b15b8f"
  },
  {
    "url": "task/2022222.html",
    "revision": "98d12ed26bba8b50ddec9f8200fdc477"
  },
  {
    "url": "task/2022224.html",
    "revision": "78ceed81eaf0cbe6a5e22ce9eb574f76"
  },
  {
    "url": "task/2022225.html",
    "revision": "1996c26a772b90d1c50ce8164c2be1de"
  },
  {
    "url": "task/2022315.html",
    "revision": "df5d20f4d5e87bfa619a320da7d9fa05"
  },
  {
    "url": "test.html",
    "revision": "844fcd35a8779180ae4fc4cc51777914"
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
