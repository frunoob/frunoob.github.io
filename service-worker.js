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
    "revision": "5a9eb7fe4fe2b9127f6231d05ddbb403"
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
    "url": "assets/js/43.ec39a6c2.js",
    "revision": "ab87629bee98f4805da4c8aed731853c"
  },
  {
    "url": "assets/js/44.957fa1fe.js",
    "revision": "23d6f2f67c0c83a7960dd975d54f2409"
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
    "url": "assets/js/48.0fef5a9b.js",
    "revision": "e9e65cbdb0fbdfa53a6351b9dc22e780"
  },
  {
    "url": "assets/js/49.94dc12a6.js",
    "revision": "96eb4e39b01b49bff1a6ac802f316ba5"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.14b864d9.js",
    "revision": "f2d26e2282dd4f75e06191e3c0d7d0ff"
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
    "url": "assets/js/67.97902faa.js",
    "revision": "3d89c555c5be748beab48ea653a94144"
  },
  {
    "url": "assets/js/68.cf120954.js",
    "revision": "5e5c16a3dc69b8cbe31e8cb5b3c72ab7"
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
    "url": "assets/js/72.5afeb2c2.js",
    "revision": "a4a78d7ecb020f1aa8613d174fdc2f52"
  },
  {
    "url": "assets/js/73.34eb526f.js",
    "revision": "785d636ccfaaae43af7939f4b6732ab6"
  },
  {
    "url": "assets/js/74.ca2dc034.js",
    "revision": "975bcc8acb8206e0bb94baa846e09b7b"
  },
  {
    "url": "assets/js/75.ddbf10b0.js",
    "revision": "efde3bd3f88cb965cf681b95584b5d2c"
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
    "url": "assets/js/app.35a18e03.js",
    "revision": "8e53fa2b5973091c064762186ed17a5c"
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
    "revision": "56ba526dc39b6e091803406c0ff3bfe0"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "ab7e91444240e15e6814fc74e4d941f4"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f2c86b5ac4dd41892e270301fa87b092"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "49d77e160a3fcc81cc5be245e7046868"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "6b93e9abfd53f5440ccee943bcda9e0e"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "99253a76cf633b9daa6be65525521cea"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d039b641ececf395132daa5f2523da62"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "8e40667d49679afcf48f50a12296c8e2"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "ddd203e993e69bc3bbf8d5d115d5b781"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "f81c1629b6622990b304c058cbef85d4"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "ba0258c77cc4b37d0feef83b9354c543"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "86eafe3ca02586e89fbfb1f74be8fc79"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ef04ed7696978061e0b23d1da15490f2"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "9bfa044e3013726e5ae86e7a0f8b27c5"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "4ab9d9f8032b6967df9773914f8bf822"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "bd4bca44b3b0959ce6613dfb5814c4fa"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "e02d10d05b3fc69f14b9038fc8483fc9"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "4a528af1ae92ed21a8b87ac5a34e9fc1"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "ff978d4cecae065556b99ed98e35a2d8"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "128bfa907dbad2a630fb9ed9996b3187"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "ff2a499191382b419a13dc835864af65"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "78c0c3c593a179a81f21eb1caf18e571"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "57f793572a5b353fc4f19e3109992356"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "28c6aaf625ce1fc945639dcfdb5c9bc6"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "f2e747194991b0cc8b0e4fa7b9a26309"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "13103b3f564620dbee187ea98599a58a"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "e231ea1b0ef3e9b9c9f74951bc052a4a"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "bcfe9a018c88b156800ce71b94c17185"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "2257a4d6bd677f5e1067a9b926b33c57"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "e708e6b42cc56f2a561a41af047df4eb"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "86215bddc86d806accd5a3d99c97e4ee"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "a0974b98fd494f851083e8f35230e631"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "701d2469648fa620e75d1e04d2fffbc2"
  },
  {
    "url": "post/plan.html",
    "revision": "e240cba82e0d832a00caa2aed134d4b0"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a72000097769c6a27c351b4591e1dc51"
  },
  {
    "url": "study/english/words.html",
    "revision": "b6474b9f60d8b636fd16ab668a547197"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2313122b21a5905b44f3da40b2e08327"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "58c1ab3edab9116f2f8a2ff72566ec95"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2517202618d160bbc98df726d1e57a8a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "68142eb79a3d24bf9c94db86661c3a8d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "334d64e49134d96222f20a52a7e6de02"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d761b81f61da65b1d47b767b52e08bbb"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "b3b0b2d27a1b16a18952d85eae7841c5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b6a15b8a85ada807754f41fbe89aa2d5"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "2beb3ef63afd3c6e04ae6edf3a820ea0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "4ea907b7e3883b1239dca77b94447f24"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "969859a9fcf9efde952d6d4194e6e888"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7bc08daf126deadee70a4f402931a19d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "dbed57c2fc3ba9f1ac60de2f7c8071b4"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "021e7b4363af89805dabb8219064e03a"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "455c5b1d7d9992360ea700bb03ac35da"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "05dfce2aaa3c949d81faed434585df86"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0095613ba1e73387d2b6d1dae9f1bf10"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "4d444e315c912b38e60495a77d82cc13"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f066f7128db95e5b4b2f6237faa8242b"
  },
  {
    "url": "task/2021511.html",
    "revision": "76321638a032a12fcc1fb999e929f2e3"
  },
  {
    "url": "task/2021514.html",
    "revision": "c3db9dbc8ac07b76d09914ec570aec0c"
  },
  {
    "url": "task/2021515.html",
    "revision": "471dc258b542ad72164a1eb7fe78d26a"
  },
  {
    "url": "task/2021518.html",
    "revision": "ffc05cf126457f7530889c0942d2a4e1"
  },
  {
    "url": "task/2021519.html",
    "revision": "685b51db78e99244956364dbc1869538"
  },
  {
    "url": "task/2021520.html",
    "revision": "060497400b44988e05639316278311ef"
  },
  {
    "url": "task/2021521.html",
    "revision": "372975b98a29205d77c5d6516a79f7d1"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "9832e89b8f9b893d53755f0be21ca013"
  },
  {
    "url": "task/2021524.html",
    "revision": "ae4fd024dc525e0e1f8c28dd46bd1cf0"
  },
  {
    "url": "task/2021531.html",
    "revision": "7357b7310ea8ba9d68903750e883f511"
  },
  {
    "url": "task/2021628.html",
    "revision": "80fd47d2048170c426f7280e149db2df"
  },
  {
    "url": "task/202164.html",
    "revision": "55abb7e727b39f30cabf82c0e3fe9c28"
  },
  {
    "url": "task/202169.html",
    "revision": "6562d9fb80523c5d827f2d6d50f7de1f"
  },
  {
    "url": "task/2021717.html",
    "revision": "7dc01ec3ebccaf3494167acfeafeb6f6"
  },
  {
    "url": "task/2021721.html",
    "revision": "0d66a627040daec9f9e155d844300806"
  },
  {
    "url": "task/2021722.html",
    "revision": "33ecc42454b009aecb1cdcff043bf574"
  },
  {
    "url": "task/2021724.html",
    "revision": "a8181d5992576bf6a9147cadd957e31f"
  },
  {
    "url": "task/2021725.html",
    "revision": "bea896ddcb606fd40295d53005bce81f"
  },
  {
    "url": "task/202181.html",
    "revision": "881e074b5f7933bad4e7649cad90baa9"
  },
  {
    "url": "task/2021811.html",
    "revision": "87ac4b1763fa3a00139c5c7d86efd547"
  },
  {
    "url": "task/2021812.html",
    "revision": "25575a7efca09420a7050e933be98bd7"
  },
  {
    "url": "task/202183.html",
    "revision": "c18c1daeb163f230bc0cb1ee8a1d3b33"
  },
  {
    "url": "task/202187.html",
    "revision": "b46fb9abe149591da4bd00c57bfcd235"
  },
  {
    "url": "task/2022218.html",
    "revision": "d9aeafe8a036a39a73f4abb033f40a32"
  },
  {
    "url": "task/2022219.html",
    "revision": "d35efae9ff3f550b74a67ca8c6e38f3e"
  },
  {
    "url": "task/2022222.html",
    "revision": "0a6b37d84d93e5bcd81c8f494efad2a0"
  },
  {
    "url": "task/2022224.html",
    "revision": "91e5819ef996cb46337f76ebb9064870"
  },
  {
    "url": "task/2022225.html",
    "revision": "dc7153a6e7e2063fa8760898bb7826aa"
  },
  {
    "url": "test.html",
    "revision": "277264d640718ef101da142e7e140f39"
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
