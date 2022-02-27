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
    "revision": "6329e55f83e9e08f712917d09046befe"
  },
  {
    "url": "assets/css/0.styles.dc2d702a.css",
    "revision": "3ddfc0d341252cb3052035c49bfe54b0"
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
    "url": "assets/js/10.5f3a76f7.js",
    "revision": "38d907241bed74cc2086d29268190a36"
  },
  {
    "url": "assets/js/11.bea036dd.js",
    "revision": "6854ff13094eb1a9c3d02e625053eab9"
  },
  {
    "url": "assets/js/12.0ceae0fb.js",
    "revision": "88eddc2eb7bc033b0f9ef1ca979c610d"
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
    "url": "assets/js/15.3ff2c7a5.js",
    "revision": "3332729877914af762873d5a05087129"
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
    "url": "assets/js/31.719a532c.js",
    "revision": "a2f5c43ab182ac812ddc8c77111b2ace"
  },
  {
    "url": "assets/js/32.1121664c.js",
    "revision": "3bbc36be461fade5dbb1e3528fa3ceeb"
  },
  {
    "url": "assets/js/33.33a12889.js",
    "revision": "4c0fd849ea1feff64c6d00ccff003209"
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
    "url": "assets/js/36.a5d41f9c.js",
    "revision": "4830b4befa6417cbefe96665a540dd41"
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
    "url": "assets/js/40.b3da8af0.js",
    "revision": "cc328356c917e54b4ecd90b56f0d64e2"
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
    "url": "assets/js/43.c9695660.js",
    "revision": "3687c768e155699255446f7bd9ae91c6"
  },
  {
    "url": "assets/js/44.c26781ff.js",
    "revision": "69e7135c1eff0e6bd1cc5759d95fc9d2"
  },
  {
    "url": "assets/js/45.47edee16.js",
    "revision": "b2760806fbb448f07c4488a438cf27b4"
  },
  {
    "url": "assets/js/46.65e71ee5.js",
    "revision": "f54c570698858bea9933a5719a931298"
  },
  {
    "url": "assets/js/47.6287550e.js",
    "revision": "fbfb96b1c5f43580a494c650b4f0049a"
  },
  {
    "url": "assets/js/48.816a89a7.js",
    "revision": "039e50397b70737870192c392cbd1044"
  },
  {
    "url": "assets/js/49.3e82de9d.js",
    "revision": "37b97b048dd397b4030abf73047c1e0b"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.cde921ef.js",
    "revision": "f599ef70a755ea0456fa1a8dee6786c5"
  },
  {
    "url": "assets/js/51.130b8155.js",
    "revision": "f184d0ed836dbc8e607908fd2d024d3d"
  },
  {
    "url": "assets/js/52.b66c6291.js",
    "revision": "bfe33defafcc062e10ac2d909642d756"
  },
  {
    "url": "assets/js/53.9705742d.js",
    "revision": "ad7fd111e99c76d1001027a6e469cda0"
  },
  {
    "url": "assets/js/54.f6043131.js",
    "revision": "54471187d1a4981a73140636c67ad0a5"
  },
  {
    "url": "assets/js/55.3c499738.js",
    "revision": "65b7c75e3682e8a41457dd5cfcd76b64"
  },
  {
    "url": "assets/js/56.9afad64a.js",
    "revision": "84ccdeafe3aeea2361aecc34d4eab870"
  },
  {
    "url": "assets/js/57.ee8d6f34.js",
    "revision": "a9dfa630b70fc5aa61e07145359d2f86"
  },
  {
    "url": "assets/js/58.d9608694.js",
    "revision": "93b5d7c649d1f8295a91ded7f7a407be"
  },
  {
    "url": "assets/js/59.b1c45a2f.js",
    "revision": "d18d0c233a0d96ac640d501c6a27971a"
  },
  {
    "url": "assets/js/6.5e1bc5dd.js",
    "revision": "d1ad75ff6013ba08ef320c0cdb22c5c2"
  },
  {
    "url": "assets/js/60.b321089a.js",
    "revision": "7715475160326e7b19db973615357ba4"
  },
  {
    "url": "assets/js/61.e75b0228.js",
    "revision": "6687082225b6f97582c30a4827703b47"
  },
  {
    "url": "assets/js/62.8699dde2.js",
    "revision": "de835109f0b77a8c763916351926173e"
  },
  {
    "url": "assets/js/63.0a7f4c0a.js",
    "revision": "e9b5841e176eb2a5fe8f2eee20553217"
  },
  {
    "url": "assets/js/64.8f20c4be.js",
    "revision": "19d089ef66d2d3daf4fb126832b5ea54"
  },
  {
    "url": "assets/js/65.68eb59c5.js",
    "revision": "35224310150d109f78692c51807aa933"
  },
  {
    "url": "assets/js/66.8938cefd.js",
    "revision": "d859b1664bcf40e8b4e8f08d621c8f66"
  },
  {
    "url": "assets/js/67.5d08156e.js",
    "revision": "2c61f893cd462bd81af8938b5bae1547"
  },
  {
    "url": "assets/js/68.b1f43500.js",
    "revision": "337babafb223ea852296158496328699"
  },
  {
    "url": "assets/js/69.7dec6f06.js",
    "revision": "59202ed5746acd2db98f8842c21934b4"
  },
  {
    "url": "assets/js/7.fd94aa43.js",
    "revision": "076f2f4c4bc326a8b22e145c62cdf6c9"
  },
  {
    "url": "assets/js/70.6c6ce813.js",
    "revision": "22db3b3954f3a2af6e3ea4ef967b0a5c"
  },
  {
    "url": "assets/js/71.141e1094.js",
    "revision": "297303529acbe4cf2f08a681ee0876c9"
  },
  {
    "url": "assets/js/72.0f3dec02.js",
    "revision": "75ad53e96a399e581d2fb3263733e7c8"
  },
  {
    "url": "assets/js/73.32b89488.js",
    "revision": "39b4848d4c0f7995a46ee98ebbb19291"
  },
  {
    "url": "assets/js/74.cc46657a.js",
    "revision": "6159e40b8a77fe83cba32100fba50bd8"
  },
  {
    "url": "assets/js/75.b78557fa.js",
    "revision": "45a60157ac21e8058333ace1d9bb4736"
  },
  {
    "url": "assets/js/76.010aad72.js",
    "revision": "1102b42495cee7952640091265492c0f"
  },
  {
    "url": "assets/js/77.a0c1303a.js",
    "revision": "a1f7bf02a8d1edf42624dc2aaa2dbbe9"
  },
  {
    "url": "assets/js/78.2ded9099.js",
    "revision": "bd9789c6b8b95a8636e699dd57159a4f"
  },
  {
    "url": "assets/js/79.22a9bafd.js",
    "revision": "4851081c8db832125ac07ba8d9497808"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.73d4162a.js",
    "revision": "732c1ffe58f5c557298672d1217d7b00"
  },
  {
    "url": "assets/js/81.9512a57d.js",
    "revision": "8cda26fbf74d3918d667ebad79c7bd62"
  },
  {
    "url": "assets/js/82.1ac99a33.js",
    "revision": "5ef51a77a59e3a762dd344d5267b1477"
  },
  {
    "url": "assets/js/83.45eee602.js",
    "revision": "ca9c16357aa9591995e0c8428da662a8"
  },
  {
    "url": "assets/js/84.12589987.js",
    "revision": "b3bcf0a249bec6cef09480fb69fe196a"
  },
  {
    "url": "assets/js/85.190c4fe6.js",
    "revision": "1f9e6a4ae4b416d846be97b315bcadb1"
  },
  {
    "url": "assets/js/86.a4b317b2.js",
    "revision": "20e1f7e274754e78afdf48afc0e4bc55"
  },
  {
    "url": "assets/js/87.01341f22.js",
    "revision": "9eb3520ec54b812cb1aaa30bc87320ae"
  },
  {
    "url": "assets/js/88.7ac6725c.js",
    "revision": "df2702bac444f04dce683956e971e457"
  },
  {
    "url": "assets/js/89.795857c5.js",
    "revision": "ec65b3fc26bd86ec76768e33c9e404f2"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.225b1cb8.js",
    "revision": "1ebea44c7158cccfd17c42d86b6da68c"
  },
  {
    "url": "assets/js/91.f6af8720.js",
    "revision": "4905567caa0b2b0095f9241c40281d81"
  },
  {
    "url": "assets/js/92.5ff001c7.js",
    "revision": "a13e3373e434ac1cf599756820dc344d"
  },
  {
    "url": "assets/js/93.d3f058f9.js",
    "revision": "c6dc1031a0115fdfd49c9b55b1bd80cb"
  },
  {
    "url": "assets/js/94.12219bf9.js",
    "revision": "628ff250e56f0ddd67c93c048798f1bb"
  },
  {
    "url": "assets/js/95.d8923e9c.js",
    "revision": "86bf1282acee57eaca482215d343f658"
  },
  {
    "url": "assets/js/96.b3ecc405.js",
    "revision": "fcd70b012638163f5cc489f1c7b34f07"
  },
  {
    "url": "assets/js/app.b98f0ff0.js",
    "revision": "e58e00ad77f45fc192f11c95a026708f"
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
    "revision": "d5e8588a5442710932b7a852e8d4413c"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "3052b35c0adc469b2aed0b6bd751781f"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "2133fd217d74ba89cc3a61db695dbda5"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "3304697c8e4d276e6c42c31a807a8a2e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "037766f86f33a8e8ee0fc951a20469f2"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a34e39917a14b5b1a8b5f941f7a3a778"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "52728e5b4cd428c3c785fc472990042a"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "881d36b96d356471cfac9f2028d5c0c6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "d47e9feb163bb26282faa39312d25145"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "2fbcb7743289e65b36f01fff5e44a0bb"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "2c6bef6dc0ae1177ce2527cd082d2a27"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "b8828760ed45a91bd5d2e587c471cda1"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "5bdbf94df038264ccdb0dd5370c015df"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "ba3adba32e79aec53a4da4ce9ff333e3"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "7a918dec2916844bf4af0950e66e949e"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "42921465cb31373a25829796cc639f71"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "f29c0bbecb25b396963179796f34414c"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "890bfecb60c82b0357a758bb89eef7c1"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "056b5590886acf69075a9adf59c3e9e4"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "5efe44833ca9748390b04ac905ebf157"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "c313a1f44a43b9e1e2c517f9b265de46"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "30a8991b220fdc141dcaf05a888e5466"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "8f6c2dae2890cb4c400719dc628afe96"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "7b66b870c26fd5dbc5eb1993a615342c"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "642c66f923bf5b117bbe82b6d565af9e"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "2cb0f0c729c8fe53e4d28a0d5b465a01"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "5718418c5b8b84dea7ac175f4085f9d2"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "59d3445f3b6fc5850bc12f43459a5b71"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "474683c49e9a2fe6b652d05fe735a96b"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "6b8a9cddd0d785d179bac6c1ef7e8618"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "d7298eb8d5614f93c96ddfc86e9cf1a5"
  },
  {
    "url": "post/plan.html",
    "revision": "69ab8204f1d4c5e8733e58324f4009f2"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "bacd9dc90f5d539fc7cc537a989f6e15"
  },
  {
    "url": "study/english/words.html",
    "revision": "28c82b1857edce1ddbf5116bf95ddd3f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "3950bb36284e0b268cc9f8bd37d31fc3"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4bebbda6be922aa893f32efcdfc05f2e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "c9c71fe96f6d3fff70ca6c2503e19cca"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7f56a51380cd1a5dc9810b127733451b"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "cdfbf7c781118e8edb4e5903ef60cf6b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "96b1f981efb44cc45f800b80543dbd93"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "656cc224ad886bf06c554e386f729a37"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f660b374a0019c0e4b4416d2a461bdaf"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "02559b0bb9091bda922e25b332ae8cf3"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "94141185c1ea3329c2518305550ae2aa"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "6284ef8d0be81e7e3eb59ac6f9fa3233"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7e419ac2e9321cce552129907484c1f3"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "dccda9ce84ccdb7394ab5f533030d67d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "f0ea48aa0ff8c0958907a4317a5ad8bc"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "13c5ec87fa5860ffbc6f8353597b3aad"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "25d303f77481b228ede48835d7f1c420"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "391f64fc775237cebc6235be0f2f484d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "6607e098b8cf9edd2319dd1f60547694"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f5e236ea92585f6a4e47d16ed0db2d55"
  },
  {
    "url": "task/2021511.html",
    "revision": "f6259170acf4a7ccc2ce99304a3c4614"
  },
  {
    "url": "task/2021514.html",
    "revision": "ca5530d316638ca2990a8de6721f072e"
  },
  {
    "url": "task/2021515.html",
    "revision": "3ddb42734c9a2d1a887846d7dcb8ff0a"
  },
  {
    "url": "task/2021518.html",
    "revision": "10a46dc3fb3f28a0cc6fd52ef6eead06"
  },
  {
    "url": "task/2021519.html",
    "revision": "ef06af5170aa39fca506e7a9cb9ca073"
  },
  {
    "url": "task/2021520.html",
    "revision": "7f04037e2cd66560eb0058e7a8105f7b"
  },
  {
    "url": "task/2021521.html",
    "revision": "04919cbd8ffcc5e59e2c3c401d504f33"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "1e5bd60c8d96782134b3573f8750469c"
  },
  {
    "url": "task/2021524.html",
    "revision": "a400c4a0aeb2da53486ae5b9d805c8f5"
  },
  {
    "url": "task/2021531.html",
    "revision": "2f91614535eab706c817bb59d61d442b"
  },
  {
    "url": "task/2021628.html",
    "revision": "437c5c56a0f9d5738a8eab346eaf9781"
  },
  {
    "url": "task/202164.html",
    "revision": "dd668dd3dff008b6a2c0b567335c493c"
  },
  {
    "url": "task/202169.html",
    "revision": "017ace937eda4f56b4d36b45def74665"
  },
  {
    "url": "task/2021717.html",
    "revision": "a6e171637e7ebb5c4b24cd0204ef06a3"
  },
  {
    "url": "task/2021721.html",
    "revision": "f0f8cdb93e82873ef36211025cc891f5"
  },
  {
    "url": "task/2021722.html",
    "revision": "2a9cd7b84c46be6d60e6052e38274311"
  },
  {
    "url": "task/2021724.html",
    "revision": "97dd334586417d6b121b03d66714c9e3"
  },
  {
    "url": "task/2021725.html",
    "revision": "5e7a61f71fe5b8a6335fe38d7966c404"
  },
  {
    "url": "task/202181.html",
    "revision": "a60a5422ed55cf6e131e4606f79d42a1"
  },
  {
    "url": "task/2021811.html",
    "revision": "9ea2304618d1a4189a7f868899840d8d"
  },
  {
    "url": "task/2021812.html",
    "revision": "f0e0568465d57185e7b04ce3c55af3ea"
  },
  {
    "url": "task/202183.html",
    "revision": "7f9b3cbe5b30a4cb8f11582472ec20bd"
  },
  {
    "url": "task/202187.html",
    "revision": "5a13884c58f6ba0966c88bb6938beb7c"
  },
  {
    "url": "task/2022218.html",
    "revision": "2e91d99c66d0dd4f0b28a369f824d62a"
  },
  {
    "url": "task/2022219.html",
    "revision": "81c95c25178d61061669dce2cfbad403"
  },
  {
    "url": "task/2022222.html",
    "revision": "87b2bc7f10e63a5e67d08c74e32bf04a"
  },
  {
    "url": "task/2022224.html",
    "revision": "6bc15c83465ef2eb90ea2fa967803207"
  },
  {
    "url": "task/2022225.html",
    "revision": "557d3f5dd7e3170928c6988f963a70cc"
  },
  {
    "url": "test.html",
    "revision": "b6b183a97262f6555e46a35217760da7"
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
