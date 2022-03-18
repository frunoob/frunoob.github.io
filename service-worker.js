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
    "revision": "082fbf86ae77a624f90923d16cbc72e5"
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
    "url": "assets/js/97.58978e97.js",
    "revision": "899cdc83699d210494a7fb1d2495e23a"
  },
  {
    "url": "assets/js/98.b953b6ea.js",
    "revision": "dc44ae2e6ef25d51d4c69af3c132ab7f"
  },
  {
    "url": "assets/js/99.db26bf94.js",
    "revision": "f6f5be2b5ef5fd87b19c7ea4cbe8e2b0"
  },
  {
    "url": "assets/js/app.d72d7a70.js",
    "revision": "6165168a2a8800810bb9cbd70f1dbee4"
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
    "revision": "bda6467190deeebaf8ea04527bc10e9b"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "d9c1b8f408753b4b30f02d1b204232f8"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "b93cebc9bd64a9653c37224741b682a6"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "538cd014c8b1888fe571a48684c94664"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "5e27fba235e3e2c982f6ab1771a5bc6f"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "76af35d0371c9521d2f61edac2a5eba1"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "e9eee628d131930f3e9522e3a2e9d4d7"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "61bd5335b90efd1ded7e018e0fcb4576"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "28811e5c4ca5ddcbac8343b6ceb14692"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "3d834089c73543a394539a09e55cf7c6"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "b5695a845bc7586fa6c36d87f4048e92"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "93ad60846b1590a51f5d036b8539e1a4"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "0af28329b7de286ed9ceb403dbe599da"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "28fcb5294998f61f4ef1e330b22f1ee3"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "48b86edd0f17342d756cbb0cc2e82dc5"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "1693ab921fe2aae5fc26b39419319266"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "f575f4c193a14a4aae60b268804c0574"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "38e49d39b199e2a4f611070a914f0e3e"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "49a59dd725d062399d5bbf8d034e42ea"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "52ce53d03a5fc57cf2aa0dc1f7624083"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "53b2c7b4f98c088518ed8bc99d05a9c3"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "fa64168168275c8f74f965e715678f63"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "5a6d02522fcc8600af4da608c7d533f5"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "fd8c7fca0a06aaf8dc928c640196c594"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "9b971da0f1423883ddeb106acefe3dc5"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "71e1c733adbcb06a5595759ad45442fb"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "300bdc9b8642f5df90f06ef528ac2ef1"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "8971f079c80d0a7071d1a9a4e9c48b35"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "a8e9413aa3a1aa4b67c8917af75f09b8"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "7c335bb1460f864edcc746a449b887c5"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "95b098295b0950d2e01869416bc4a26e"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "582f93035a960a565b1ee7e193d67e82"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "542d133e525b43d6b2c64722f1fcd874"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "6ee4b6cb4614b03aecf2aa3783c2c611"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "aa858bb789bc8412de46d88a007c72ba"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "b0dd2b55b5bea1d1aa1045303afdb373"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "3cd2cea7c9e41821d8ae90074958628d"
  },
  {
    "url": "post/plan.html",
    "revision": "d5a09c680452459811c15e70c371439c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6170af821a6c18325fb0557d3342a405"
  },
  {
    "url": "study/english/words.html",
    "revision": "88d04fe4e5dbe1a2df049d687507c188"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c037204e38ea5338cb98e979bf645900"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "0da6e7ef972142a926d11e1393a43c8e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5c86cf2318aac394575c2e20ac994542"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3ad402c7cb14aba77c63c911f0348535"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "c3f711bec2fd48628feb4dd6612a59c0"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "db8934a11fc5539133312c6529e1bb07"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "fe3ffa09430a6d298daeb358a36cb28b"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "18479c0e6d1dd2a3ef307b1d10353361"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8c003349939d6d61c43a023ad47bf582"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f2c04bea7c3b636d5a2f9a2ab9c03535"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "91264b8aeae3de484968dbdd3212446b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ac2347a73bd29ffd189b95b52c919bda"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8fb56edcaa3523ca22c567967180e1ea"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "0229321433aa1105d795b6c5fff443db"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "307adae704d9ac23ceb0371f99c16423"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "128055f02b4340b856345839a7282c2f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "a67c259a03c7482a90c2a260c62830b5"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d07257ab1b06f4b0c5a93adb691294c8"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "eeda5cd45e2e09e8cfbbeb451ca50035"
  },
  {
    "url": "task/2021511.html",
    "revision": "e89d4ac1075af86f3f012db404bfe3c1"
  },
  {
    "url": "task/2021514.html",
    "revision": "fe00b45c0092b8eec98f4fdf166a7672"
  },
  {
    "url": "task/2021515.html",
    "revision": "2607472d1451d25915747e6713119c31"
  },
  {
    "url": "task/2021518.html",
    "revision": "9134e8b0470dc0239da3f431775a39f8"
  },
  {
    "url": "task/2021519.html",
    "revision": "c099442af64f3ce04e36e13c2d914889"
  },
  {
    "url": "task/2021520.html",
    "revision": "0369e2c0f26ba1bf86030ba8627aeca7"
  },
  {
    "url": "task/2021521.html",
    "revision": "da954c76044fd1032ce5dbabf69361f0"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "609ad811ed3cbafd5c7cc5136ca4299c"
  },
  {
    "url": "task/2021524.html",
    "revision": "34c9d680543b11ba15a0d85f94a306be"
  },
  {
    "url": "task/2021531.html",
    "revision": "a6ae5ecc3e5d41d68328839e4e4f931c"
  },
  {
    "url": "task/2021628.html",
    "revision": "1705055eafd1d60a20ddc248bb74b534"
  },
  {
    "url": "task/202164.html",
    "revision": "4cbb9c0f8401c323ac37c4079c45180b"
  },
  {
    "url": "task/202169.html",
    "revision": "735a7463a28268c08b8d68d1e43ccb13"
  },
  {
    "url": "task/2021717.html",
    "revision": "e70a42153d68d10f802934e22fe4c622"
  },
  {
    "url": "task/2021721.html",
    "revision": "f68f9b36f34434362f2c66b26a61177b"
  },
  {
    "url": "task/2021722.html",
    "revision": "b5b8e508a63771af229e5f6260a52cea"
  },
  {
    "url": "task/2021724.html",
    "revision": "2c332f3d6d5a6859b240efe0eda34a81"
  },
  {
    "url": "task/2021725.html",
    "revision": "e4b0d4c36346979058b9300b6aec0f4e"
  },
  {
    "url": "task/202181.html",
    "revision": "8ddf99bca18d84fe5a3116ba5067a77c"
  },
  {
    "url": "task/2021811.html",
    "revision": "46836a6b90db8e8ddd33a9ac37dc2928"
  },
  {
    "url": "task/2021812.html",
    "revision": "01b94133b96b70b586e72f0c01be4290"
  },
  {
    "url": "task/202183.html",
    "revision": "3e9ded5a34c77ae10deee96cb081ca96"
  },
  {
    "url": "task/202187.html",
    "revision": "b05ce79eeaf9b6501181c23a5a037090"
  },
  {
    "url": "task/2022218.html",
    "revision": "a47c24bd2e8da4e10658a2bf16c7e072"
  },
  {
    "url": "task/2022219.html",
    "revision": "5c693b47649eb682eecf33fbc137730c"
  },
  {
    "url": "task/2022222.html",
    "revision": "a1739133872096adb2136adff7484f8b"
  },
  {
    "url": "task/2022224.html",
    "revision": "5dad9503edf4939c518ba8c3478281b5"
  },
  {
    "url": "task/2022225.html",
    "revision": "fbfae381872d6a474c0efc27a2d8b3b6"
  },
  {
    "url": "task/2022315.html",
    "revision": "c271f522a9ca382b4c9e42a0b2e91ee9"
  },
  {
    "url": "test.html",
    "revision": "5400dac54f45cefd8f71b77812996ac4"
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
