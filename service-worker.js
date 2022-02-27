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
    "revision": "2ae0af7126cc080eb382f6ac07ab7885"
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
    "url": "assets/js/12.078e2ad6.js",
    "revision": "22b0f07446284517ac930efcacbeab93"
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
    "url": "assets/js/app.cd1abd3e.js",
    "revision": "06867ad50d3a7befac9b656f259dda90"
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
    "revision": "ca4ae5b789c39f5936a56c3e5c83b3a1"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "aa8a3c0caff5035cb8486ac5f6c2b125"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "9bc28ff7d8853cbe94a6a0e7b7fc4863"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "9a04b771a1dbb360630c5d3f5598ae35"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "3770c419e57c21d135d77f69fd4bc923"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "06d627b0c4d052108e9a226014242484"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "75b95bc86200ad84eda12bd0f813f1b2"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "f96bea01d328f8567492fdfbaf98f152"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "da9b644c37d651ba7172df00c1ca6c09"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e0d4e3ceb99d8a2199e556a2d5e90465"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "1120df18ea4ed678ba1bb31f70ed044a"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "9a9ca2b10a873576d142bd759d7c2e24"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "fa796b8ac974b78869a82ae6aab5ff87"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "705ef6121d75256775541fb36d5aa985"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "e042b76c075c2528b0be199caa3d04d3"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "6ce1d005c58e829c79fb35b72a8045d8"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "e6de526b3b38e1b25d5a3fb8b1ce5566"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "31503e594ff5ca97cbb0f540a408eabd"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "1331092802d73a894769c7289380ce46"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "e235be0d2779cbd232952b6de1619691"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "daff94adf62460b1e683c66416e823a8"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "1f9c368480aa973d68d4417e5b9dbee8"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "f8517dcaf1a1a33dfd6adcf85d732b95"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "8007abd0212b6009428a1116cd2fcdcb"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "748df6073bcf0fc5112c3b3014b0e91b"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "e02c9e9433e2b3ff84a0900a52cf8a46"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "6403528dde076c8a96b5a05c39307bf8"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "38ff24a250d1168047ada0a96c9b2815"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "eec76539ec11a19248a47613ed5d1423"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "427c52dc34e897acafbf1218a8a7c2e4"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "6f9894fd75cd584d84c8e33613723404"
  },
  {
    "url": "post/plan.html",
    "revision": "add12feb5da1869b5b920a4783b09dc8"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d9cf67d7a8dcb92e8c2bb77b6cca5de4"
  },
  {
    "url": "study/english/words.html",
    "revision": "61215aca5d18cd6ab5e2fb0527f24071"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "35cde258d18dad1e31678e1259a0a8fd"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d2f309ddcd2fe49021b0b7e0b6aad027"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "c09e5ed83d71163d53de65d0fdec407a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "922f4a0e2f40d63a5544722d21402895"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "8fcbc11cdf2bf5781393267873a81d85"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "5aa6f01170a078323a642f9ac14aa32c"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d766e780653d089ee4f5dd6129ff4363"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "7e07d65f55bf4aead3de95b0249daad9"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "43609cf9b19126bf72d0e4db33bc0036"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "c7ae63d32b21bbd2775ee2c98f67399f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "5054e1ef1bea0578249d28be16aa9939"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ae5ea2b929bcbba4ef97b8fe2be6b6b2"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ada06af3c2605a159014da4446176b61"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c41fbcd83dc6a4c1d222945d73dff30b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d5b382fb170d3761b917e92dd587de2f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "905d5e47313dfb960f34c72cb9e5f8a3"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "750471e9aa54380f0ef404aa8e0b4d57"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "33b36ba4d28040c705e50f10b6c2ee2a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "b15aabcf8f36aaf5a640a2a1d26e347b"
  },
  {
    "url": "task/2021511.html",
    "revision": "9bbb11026ecf6e8d827f191ee5be256c"
  },
  {
    "url": "task/2021514.html",
    "revision": "14299af340cc9bdb5017ebf32afb5412"
  },
  {
    "url": "task/2021515.html",
    "revision": "f7e94a79449bfdbd219e113d7b0129a4"
  },
  {
    "url": "task/2021518.html",
    "revision": "6aabca36a46b0946a347393e601c4db4"
  },
  {
    "url": "task/2021519.html",
    "revision": "c24cefdf78a0d0038494d72443cbd5c3"
  },
  {
    "url": "task/2021520.html",
    "revision": "1a8dbc2c6cf2bc969919384711f037bb"
  },
  {
    "url": "task/2021521.html",
    "revision": "38d3a6402c49d883eecf77259d9a1d69"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d2c14a1a6b54729e5410b134c0c1a397"
  },
  {
    "url": "task/2021524.html",
    "revision": "7f716ca97bfc13c3848a417d403d25e8"
  },
  {
    "url": "task/2021531.html",
    "revision": "d6baa36fa1ea7add513fd19a28917645"
  },
  {
    "url": "task/2021628.html",
    "revision": "d3b0b6e0e50b3d29aaad0df31a19cb47"
  },
  {
    "url": "task/202164.html",
    "revision": "2c47e16d30a192120a5c1173f626718a"
  },
  {
    "url": "task/202169.html",
    "revision": "5838100b21d63607bb013bf5e7f846fb"
  },
  {
    "url": "task/2021717.html",
    "revision": "1d9853e1f8429c9ebfcf5560599e440b"
  },
  {
    "url": "task/2021721.html",
    "revision": "e71ebe7642531516a408d565f16ee54c"
  },
  {
    "url": "task/2021722.html",
    "revision": "7abc0891fd06145dc5f0dbf2aea3ef5c"
  },
  {
    "url": "task/2021724.html",
    "revision": "94ea2e00e5aa427a3a634ad1127b94a8"
  },
  {
    "url": "task/2021725.html",
    "revision": "30f040da9909f0efa76921a81fc5dc3b"
  },
  {
    "url": "task/202181.html",
    "revision": "9cfaeee2f237d4239b91396343926361"
  },
  {
    "url": "task/2021811.html",
    "revision": "2ec86b88ff8f10995f079128f7dc4598"
  },
  {
    "url": "task/2021812.html",
    "revision": "d546b0e11c32daf694f02086ae4928d2"
  },
  {
    "url": "task/202183.html",
    "revision": "608e636d5a5e796f185dcdadb6e343b7"
  },
  {
    "url": "task/202187.html",
    "revision": "4fb3161bb7b34ab3761c0298c4a1800d"
  },
  {
    "url": "task/2022218.html",
    "revision": "916849cb6ee8e6d1f847f05d38d75677"
  },
  {
    "url": "task/2022219.html",
    "revision": "044ce264c874cbe25ce7309b6f88440d"
  },
  {
    "url": "task/2022222.html",
    "revision": "17a1a91fca1cfcab6d7b02cb67968c02"
  },
  {
    "url": "task/2022224.html",
    "revision": "8e368e5521601e0d501b1a0a7c31db6c"
  },
  {
    "url": "task/2022225.html",
    "revision": "a74246b59fc3f2b8a215b9a54e5c88b2"
  },
  {
    "url": "test.html",
    "revision": "8e894f035d55923abd2c08b737438fb4"
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
