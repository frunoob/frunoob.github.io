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
    "revision": "23ed98a878bbedb14ce065300870b936"
  },
  {
    "url": "assets/css/0.styles.a54d33b6.css",
    "revision": "370977dc51edf0cdf3e005bd44b52140"
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
    "url": "assets/js/31.719a532c.js",
    "revision": "a2f5c43ab182ac812ddc8c77111b2ace"
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
    "url": "assets/js/43.ec258d72.js",
    "revision": "01781da7d1c8976689cbfef6c497fff0"
  },
  {
    "url": "assets/js/44.956d349d.js",
    "revision": "b6235c3677188922f68c98a164bb0a90"
  },
  {
    "url": "assets/js/45.dc637e07.js",
    "revision": "8ab9590a4e0eb97376c3c7e0e4f081bc"
  },
  {
    "url": "assets/js/46.041185e3.js",
    "revision": "4b3ee72d3d42520226d0e0b333216bc3"
  },
  {
    "url": "assets/js/47.3de9f8ca.js",
    "revision": "5384257b3764eeb2734ab277cbb99045"
  },
  {
    "url": "assets/js/48.028fd84a.js",
    "revision": "7a38e25fe6a4ccc9b414122c4756c6c4"
  },
  {
    "url": "assets/js/49.df4cd183.js",
    "revision": "27b7bb620a9b8bb0bc41793dfec34253"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.41085da5.js",
    "revision": "a8c7232c61dcb98f7df5e7aa89b3fe7c"
  },
  {
    "url": "assets/js/51.c318ec77.js",
    "revision": "37ffe5c509dd24d7c4a8c4cd802eba95"
  },
  {
    "url": "assets/js/52.37d93fbc.js",
    "revision": "18e95cdae3a2777ba4db896c7e66805a"
  },
  {
    "url": "assets/js/53.27670a13.js",
    "revision": "37e23452720f6453177a9338ca3a5f70"
  },
  {
    "url": "assets/js/54.fe21c115.js",
    "revision": "7e0df06553808ac2bcb9113134176d8d"
  },
  {
    "url": "assets/js/55.03f34978.js",
    "revision": "acc7e92aee9767a11dfae36f65af1874"
  },
  {
    "url": "assets/js/56.1c3cda73.js",
    "revision": "d019a63ceff59738e04bcc645e7574c4"
  },
  {
    "url": "assets/js/57.f96883f4.js",
    "revision": "c1c2704801e255b8a967a05dc0ef5e51"
  },
  {
    "url": "assets/js/58.2d5b235c.js",
    "revision": "f6295150e798312337e4354353c228b2"
  },
  {
    "url": "assets/js/59.01ed08b0.js",
    "revision": "5b6bf7ddc44adb4c2530e43bcd96fff4"
  },
  {
    "url": "assets/js/6.5e1bc5dd.js",
    "revision": "d1ad75ff6013ba08ef320c0cdb22c5c2"
  },
  {
    "url": "assets/js/60.2798e7d8.js",
    "revision": "bd01b074a692dd2f22e466b3aa336b26"
  },
  {
    "url": "assets/js/61.fc7328e1.js",
    "revision": "4aa85e0ad70e6327a5f7ee8f7be3d4eb"
  },
  {
    "url": "assets/js/62.a6fedbae.js",
    "revision": "0c7a33052db6b0b00ba6d95b9221a97b"
  },
  {
    "url": "assets/js/63.b538bf7d.js",
    "revision": "59370a70a47cf5836d0fb368aec537b5"
  },
  {
    "url": "assets/js/64.c9235042.js",
    "revision": "ec34fbbb6a8e8e5362d3b9c9c2f08aff"
  },
  {
    "url": "assets/js/65.a29c0e5d.js",
    "revision": "850745bca58d449c5f87eb45a4180125"
  },
  {
    "url": "assets/js/66.6c050c25.js",
    "revision": "a065fcc3fe5e9795c174ea265007f0f7"
  },
  {
    "url": "assets/js/67.ebd4143e.js",
    "revision": "4b73588f3cfa5114f1621f4007087125"
  },
  {
    "url": "assets/js/68.ddfaeefc.js",
    "revision": "1c07b5f0f038d3279ed9ade69297d4ff"
  },
  {
    "url": "assets/js/69.45c8f8c2.js",
    "revision": "67c46f4b5fcfd9d9358d94a532243948"
  },
  {
    "url": "assets/js/7.6d01cca5.js",
    "revision": "3d57988fdfc34b70e899e54ed51f8920"
  },
  {
    "url": "assets/js/70.504c32f7.js",
    "revision": "4b8eb3450a04e84945c2fe37dd8bd405"
  },
  {
    "url": "assets/js/71.103698d5.js",
    "revision": "a6c95e43b68c05cee8ad7d8f61ead952"
  },
  {
    "url": "assets/js/72.4729859c.js",
    "revision": "3f4942635f053b5ce7645fbd725f3eb2"
  },
  {
    "url": "assets/js/73.4829c403.js",
    "revision": "216677fdb94e08ba5b4d9254c2810cbe"
  },
  {
    "url": "assets/js/74.23d47081.js",
    "revision": "656bd0c1060f735a2032f09adffe039c"
  },
  {
    "url": "assets/js/75.3871a05d.js",
    "revision": "28a3a5de418e786c4da602e2681eb02c"
  },
  {
    "url": "assets/js/76.71cb46d3.js",
    "revision": "7da23c0bfbaa9fb91f0a82cad31bf6cb"
  },
  {
    "url": "assets/js/77.f3acfe28.js",
    "revision": "cdcde59576e33c495060b5e91a5d26f4"
  },
  {
    "url": "assets/js/78.b508ce32.js",
    "revision": "bf13b8de63a23489b0ef765584ce88eb"
  },
  {
    "url": "assets/js/79.9f9927d2.js",
    "revision": "34d0523b29c4463858eae9eddd1187a6"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.a152dab7.js",
    "revision": "251982838fed0c2c9dd29af301d73748"
  },
  {
    "url": "assets/js/81.53ea167c.js",
    "revision": "ba22ca5df17f551ec08e93e7569fc7ec"
  },
  {
    "url": "assets/js/82.6a01792d.js",
    "revision": "a0750398ab5bd25d436a1f3b8c2aaf6f"
  },
  {
    "url": "assets/js/83.c265bc07.js",
    "revision": "df810db98a4c8c17b183fed864cef4b6"
  },
  {
    "url": "assets/js/84.a2fd709b.js",
    "revision": "e1f76eb1ca1244ee0cdd9ca783ae6fe5"
  },
  {
    "url": "assets/js/85.4d6eb338.js",
    "revision": "3ff2ca7a7198712378716f59f29e61e4"
  },
  {
    "url": "assets/js/86.eae541f9.js",
    "revision": "89f010e528a9060fa61bd474b38bbe7b"
  },
  {
    "url": "assets/js/87.c2939c6c.js",
    "revision": "5914e97384bba83afb6f9a6043821e73"
  },
  {
    "url": "assets/js/88.ff0e5c3c.js",
    "revision": "64623ae2efb1a56b48098f899e83f49c"
  },
  {
    "url": "assets/js/89.89da69e9.js",
    "revision": "a981826331cb1dc08930d73afcc417f3"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.9ad2030d.js",
    "revision": "f70de6b179e51f1d638e705c023a4bb7"
  },
  {
    "url": "assets/js/91.ab7d308f.js",
    "revision": "3936365ca1146647f24143ca4cb3da9e"
  },
  {
    "url": "assets/js/92.6c45882f.js",
    "revision": "b3dc07b8534182a13e686403367133d7"
  },
  {
    "url": "assets/js/93.b600d721.js",
    "revision": "5f82ec42b8d5019af6eb2a0f7154d683"
  },
  {
    "url": "assets/js/94.938f33cc.js",
    "revision": "6e59fa690d204bb6b81454f69411f49d"
  },
  {
    "url": "assets/js/95.e85b0fd1.js",
    "revision": "111c994288d4ea94132b26679f0787b8"
  },
  {
    "url": "assets/js/96.eb611ff1.js",
    "revision": "1f61be5de630b97df4ba76e9833debe3"
  },
  {
    "url": "assets/js/97.3bd882d2.js",
    "revision": "f82eae0c2cef010e86cd37b54a1c8f3a"
  },
  {
    "url": "assets/js/98.d9eb132a.js",
    "revision": "3aa2b33e38a79e193864a46e66c7b045"
  },
  {
    "url": "assets/js/app.7cfb4a74.js",
    "revision": "9bf208842bb52fac580cb46b259ab64b"
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
    "revision": "8409eb3f1a1ef1ad6d3ca9d37aba899a"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "2ff536e68d2ceabe7cf3eb98f2685d85"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f7754b31cb4bd9287642070130347de4"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "4bfa80acfa04f4db0f3efbee96911bd4"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "02983a25d0f93af0e720bc653b214d75"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "80b7ad03e9e8a6a576c13e774b4c9b90"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "a9955173ae0c607a88bbe2fb5b0cece0"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "7a0d3ecca1fefbb4bc7fe1778f530f19"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "af5692cc47cad7396cb85562bd17557b"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e9ba8e0a4779928f31e3f8501c02aa6c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "d6244d96b23b4f339c292d7ba59e1364"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "33c14241d5419acc01a13076077f2074"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "e57055723d023f79927f510e0ab35fbe"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "3a475ce507aa156601025dea6453899a"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a89a9eadbfda9092fd2ebea40368967d"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "2e00997b803ed7416e47180ef2a19420"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "45bf52386ce6e05f098e0dc50bfabce3"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "b02eb4455630c0b53b93b1e8ea81d52a"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "f8548f1d9c4b0a20a90eeb3e7b627713"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "0f4ffca7621614de46aa00f434772692"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "ef5c4cf83da10b8ab0b02e2849e07057"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "b0ab675c0474eb00426b3ea66deef58d"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "dbfb7efc64746892843f7c82ba580232"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "622e64ad9634c4f9d11a6803d0b11be2"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "da08bb707eba487266690d68dc6e3271"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "b57664ffb3fdc28f862856d344a406fb"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "8e9e2b489cf95f8b54e99bdf84a0e8c5"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "7bd33413c87d0da7614a1d3b2e797a77"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "cfe7c88cd6c4cdf43bb290522d6b5d00"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "ed33ceea742ff973b62aa5b76c00b1cf"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "fa047d6e702bef75ece426423dd65560"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "bd7a558dc66428e6259b3c8e20b6dff0"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "7b912c8fcfbe77e98271cbaf58c98db4"
  },
  {
    "url": "post/plan.html",
    "revision": "d8fd9c5ac7b8d36921b64886d02ec014"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "5ec57befe8ab165e39a2d6fe0a071e6a"
  },
  {
    "url": "study/english/words.html",
    "revision": "7e418616f88f0632c578235f3ef936e9"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "191421e46c8f4bf49ee359f249ef7bc6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "fc68bdae46d2dff1ccf693dc20b35035"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "42acc18828d611793f07f786500f779f"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "5b84e0bcb00e111fda5e6526b1dbd267"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "914b928855557932012d83e4e5b78360"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f5f4e9c286dda4160a399f9ca2dfaf70"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f4cae7b975afeab8455a5a4773a1cdda"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b19c2611e2fc28a643fc8d5bef4ae0ce"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "697fd519b9a7e04ea5cd5c447d4ba19c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "9535f616404b100c75b673d9f4255da1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "5638205e6315ea1b7dddf2da5b758b6c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "0c88b2709db5ce4aaef0fdcd77d89353"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4c2fd74bd216b7a54407849c3629e30f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d5eb77991773a8fb45a4a9c5adf1b390"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "fdafffd9902df36acc029176b9fdf929"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "21428232deb55e05d26ef3d31616c02e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c94cd07323f673117ceb6c9fccfaf8ee"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "5fdb75572ae05e275fe5268c1a10d0b3"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d185bcacce1ffcff8a96cbf6ebacb4b1"
  },
  {
    "url": "task/2021511.html",
    "revision": "d4e714e4a472e13cf9af55bfaab62d5f"
  },
  {
    "url": "task/2021514.html",
    "revision": "916d9194f5490fc3e54716616fec064e"
  },
  {
    "url": "task/2021515.html",
    "revision": "fa228ac8ac718286766d147b31795234"
  },
  {
    "url": "task/2021518.html",
    "revision": "28f70c6ff296dfd9c4db68720c6fd025"
  },
  {
    "url": "task/2021519.html",
    "revision": "a92ff8dc5d53bef64d0e97187d221d40"
  },
  {
    "url": "task/2021520.html",
    "revision": "31497a37438135c3727a67fd029b0ffe"
  },
  {
    "url": "task/2021521.html",
    "revision": "14771d94cca2f2381e8b039b7d06ba19"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c047eb093cccface01e886bf352bfdde"
  },
  {
    "url": "task/2021524.html",
    "revision": "342e1517f510a43a18f3d3dd2ac9a8f3"
  },
  {
    "url": "task/2021531.html",
    "revision": "836a64d38875e052e521e545c56aa0a8"
  },
  {
    "url": "task/2021628.html",
    "revision": "a180a971a30eb3725dcd6097ea321a4c"
  },
  {
    "url": "task/202164.html",
    "revision": "6b7edb64217a448b8c6019c90e99bfe3"
  },
  {
    "url": "task/202169.html",
    "revision": "8817d4ceb002adfebc925af8eb56032d"
  },
  {
    "url": "task/2021717.html",
    "revision": "d404cf3e78b6acc7bd6c5e8aa844b51a"
  },
  {
    "url": "task/2021721.html",
    "revision": "52e2b396aade2527b5cb6acf87a5a3f8"
  },
  {
    "url": "task/2021722.html",
    "revision": "e02a93eab43203414357eebff1cb47cf"
  },
  {
    "url": "task/2021724.html",
    "revision": "689c61b495f579eeab032ef54334db9a"
  },
  {
    "url": "task/2021725.html",
    "revision": "5899ca60482f71878836916393ae50ed"
  },
  {
    "url": "task/202181.html",
    "revision": "0de7b0c321a4c11ec502b4bc22d5b234"
  },
  {
    "url": "task/2021811.html",
    "revision": "1d801d3edeee2e3b916124cea104fc1f"
  },
  {
    "url": "task/2021812.html",
    "revision": "a9fe435b7c749768704acf26b6d86392"
  },
  {
    "url": "task/202183.html",
    "revision": "d6c52650a7aaea66d44b2c61ba90b1d6"
  },
  {
    "url": "task/202187.html",
    "revision": "a57440c54fefe5bb3b50c74611ec2105"
  },
  {
    "url": "task/2022218.html",
    "revision": "c8a9d27a0cefa8b7487287df1041b08b"
  },
  {
    "url": "task/2022219.html",
    "revision": "45d874a12305bc92886ccbe82e56e37f"
  },
  {
    "url": "task/2022222.html",
    "revision": "f046f4e1b2a649f0aaa23c5e7c90165d"
  },
  {
    "url": "task/2022224.html",
    "revision": "08b18a1e69a75166f8305cec05002f3c"
  },
  {
    "url": "task/2022225.html",
    "revision": "25365945567d28f71c51a607d92329a0"
  },
  {
    "url": "test.html",
    "revision": "63ae3099f540d7f27d7e14acd60e98c1"
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
