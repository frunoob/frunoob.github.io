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
    "revision": "fb289677bebc9393a54ba85eb91718b5"
  },
  {
    "url": "assets/css/0.styles.d6f71764.css",
    "revision": "53cdf5b9ff0b6d68b3eab26eb08ea0c3"
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
    "url": "assets/js/6.5e1bc5dd.js",
    "revision": "d1ad75ff6013ba08ef320c0cdb22c5c2"
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
    "url": "assets/js/app.7b2f3de7.js",
    "revision": "aa6761113d62b203fdecdcc72aab508b"
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
    "revision": "086eaacf196fec709fc29932ecc63ade"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "158d709f918328cab0fc41e21a3e1868"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c41828d021e750279b8d48c1a99da0ce"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "426375c58bf9a13f5941dcf3583f4553"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "c2d18211cac825c5c9f3c9d2b2080790"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "f7f4977e2b1a22feeb69901d953c99ee"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "7c19deea860cb30c6c06d83370dd8af2"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "5d492d52f1d76e71dfef942dcf30fcb3"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "6d9898033206fbfd046b8407e29f4f2f"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "846556f79d551799326f038b501ca993"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "6eb50766687dfe6e07dfe78a0d0f6c75"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "fe2ebef0177b65ba9b2f4fe287728614"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "8eab9859d5418a3194fb5ef270ac3bdb"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "6205a5ae5bbbb32ecc650541151bc548"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "397eb68d839b86b72e13ce5d346fe2e7"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "367a9de488137fcfbf51ca23388ab383"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "d9a25e75ea26b85c2fa23c3d4b7901cd"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "7f5c9ea9a591ea1180a6da252507726e"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "137652807f2c446acc1adfd3fd595ad5"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "0f7c1137ffa7f24ef949588337d82f94"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "dcc4d2418f66fe5a7a42d1b73b4da28d"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "90d6892c2c9576d183b1fea62bd6bc0f"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "297f08448f0f44bdb45a29d0639f0976"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "7c9e68bb47893bf159067ea6bf307736"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "4fc8c5c8926bcc18311955c361a85b1a"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "a5eafc26abf8eff27a1e09a7264902b1"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "db27ab9d006ad463e0e762f5998d2aa7"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "185f93a85cea72d2dc26a11ee2599064"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "4794ea228610ab6bbd61d08a660d6bb3"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "e2eeab6e367c4f7e0d5feb45ea61b10c"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "f1560a55b2a496b76878e051b914a68a"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "4fc0590049caa88b443c3aade9cbf8ec"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "488c2e5ea673e3c00bb394e498647022"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "7fa01e14ffc4367a2534c4e25ffebd0f"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "2276c8d2226a4491c80f58d6c8110b49"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "6b4680221119e51e246449da3fc527cf"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "00ae98ccd151d60fb2bac3fa773a58d1"
  },
  {
    "url": "post/plan.html",
    "revision": "eb2b57e8ec5cb22b5c1ab2464b5ca358"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "bd448d818bcd874f78c5b3aed32ecea8"
  },
  {
    "url": "study/english/words.html",
    "revision": "9012fd2d6ac855e87f0cdb9c30ffa7a3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "8c30c1fc119ec1257109c32dd695fe8f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d6598b05c948a3020ed30f68f61e5871"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d974e36e2ffc3227b670103c53cb20e5"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a59b9575ca2526a83a54c12c9395e5fa"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "2df73773f69aae4457bcc72d23450f31"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7f8a21be3eea093017946741c1fabc23"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "1791e335685f22939a38c71b43d6959d"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "037860e8445f6070fe9655c7c1588944"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "0ff5b2ffbf6aa2b98edd0ea7921c43a2"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "dc1c7d3eb1dbd2e2f8d0c744a90b1ca2"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "03731533065dba41a762528baf6ba6b1"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4b17fbcda378ce104a682eb481cf7dd1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "74ff74b70ceea9dc0a130ea3b128ea16"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "640ed8d8ba79a2e352b2cd702ca6a2d4"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "8e29e73725c33512b1f1c79f2f92a89e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "158c8fb289f1cd3c057a9384ec5562ec"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c9981209083dcfcdcbff56ad90950177"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "1c3f94438d38b4d50d4df4b32ed96ccd"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a0c1e8b2cbd4a9a6078af0cee788c7ce"
  },
  {
    "url": "task/2021511.html",
    "revision": "3cdade373c6feb9f7a39378caf388045"
  },
  {
    "url": "task/2021514.html",
    "revision": "5ace3c4d73c3c15874818c4fea201fbe"
  },
  {
    "url": "task/2021515.html",
    "revision": "e7f28fb0a619de5a6f9ba2fb21979e13"
  },
  {
    "url": "task/2021518.html",
    "revision": "79f342ba265d887cb567a2046857bdb9"
  },
  {
    "url": "task/2021519.html",
    "revision": "b6dd8667d89a891fb865c0bf314623d4"
  },
  {
    "url": "task/2021520.html",
    "revision": "ddc5cbd87f89eae62b3461d654e43410"
  },
  {
    "url": "task/2021521.html",
    "revision": "19fa68748bac91b9da2f59ef34922134"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "f7175c96a25e231d74b85ea49176af1a"
  },
  {
    "url": "task/2021524.html",
    "revision": "0b4ac8b0131adae9b6009cebec5a9ba8"
  },
  {
    "url": "task/2021531.html",
    "revision": "b0176b51233fb9690d30d149a8da6148"
  },
  {
    "url": "task/2021628.html",
    "revision": "24beef30c4b104ff152e49707128861d"
  },
  {
    "url": "task/202164.html",
    "revision": "e44064918d7cd84a704f04eea0c9a6db"
  },
  {
    "url": "task/202169.html",
    "revision": "f451c631070453ef5c31f2bd77f69c8f"
  },
  {
    "url": "task/2021717.html",
    "revision": "b80c9c2b8ae1c7d175d79625c38c2974"
  },
  {
    "url": "task/2021721.html",
    "revision": "a7a558e8fbe219286a3d7e95729b4692"
  },
  {
    "url": "task/2021722.html",
    "revision": "a72f3aa6efb995794cd7041448fb22a5"
  },
  {
    "url": "task/2021724.html",
    "revision": "e3973629cbf1480057f023ee209801c7"
  },
  {
    "url": "task/2021725.html",
    "revision": "80df564c723f4d9dad9dac2a9db54b9c"
  },
  {
    "url": "task/202181.html",
    "revision": "7a31f2a69c7ea91321b94bb95b688de6"
  },
  {
    "url": "task/2021811.html",
    "revision": "3b26da4eaa4d41698b53b6abf2e3cb82"
  },
  {
    "url": "task/2021812.html",
    "revision": "0ae08aaafa73c482c5c0ccf5733f175d"
  },
  {
    "url": "task/202183.html",
    "revision": "f0cb033d1862af010346946944e13ce3"
  },
  {
    "url": "task/202187.html",
    "revision": "08ca54fac760d4d06f4d957a75e491f7"
  },
  {
    "url": "task/2022218.html",
    "revision": "2cbff642ff57060f81bcb050463bcbd1"
  },
  {
    "url": "task/2022219.html",
    "revision": "9c83f65349893db7074612ed2855b729"
  },
  {
    "url": "task/2022222.html",
    "revision": "64d4dd5ed3c81b9c461dba08df69a8b4"
  },
  {
    "url": "task/2022224.html",
    "revision": "db77e4ec88ed54745b4b9d067389b975"
  },
  {
    "url": "task/2022225.html",
    "revision": "0f80e07fc4fa8d00fbc06599490b0ac2"
  },
  {
    "url": "task/2022315.html",
    "revision": "ace106f5a1158cc14d9008b938b6945e"
  },
  {
    "url": "test.html",
    "revision": "700d5237206b3b456937475f25883b2e"
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
