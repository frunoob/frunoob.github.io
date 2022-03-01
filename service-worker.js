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
    "revision": "3485c728b7f6975e42c2b6de2c0e9d31"
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
    "url": "assets/js/43.554181df.js",
    "revision": "a7e1435f0e41ac1678da11ffdefa9c60"
  },
  {
    "url": "assets/js/44.957fa1fe.js",
    "revision": "23d6f2f67c0c83a7960dd975d54f2409"
  },
  {
    "url": "assets/js/45.96933612.js",
    "revision": "058ee9f745e84c02b022fe10bd2064a8"
  },
  {
    "url": "assets/js/46.351f7dc1.js",
    "revision": "55d6011a2f3da12b239303ba6aeea4a9"
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
    "url": "assets/js/app.4d104b88.js",
    "revision": "8f2d0ea198627aadfe07572f978d1a47"
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
    "revision": "1e63d58bdab847180525c3792033a8f0"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "a65cae766eb481b8b24435d9479aafb6"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "4572b72a852e406246a2e14d7626034d"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "4c6a94cc7de68930a47e145e0f72218e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "bf580ed0fcfc5c08c63d07f56aa762bf"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "c2296cda8bf5243cdd70478b1c3b2348"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "91abd9e81bd91442e9c977798b3f06b8"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "669713ab84025995fcdc05ae7ab336a6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "cb5bca1ec9f1189860f00ce3bbb36e6e"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "9820e23d2837b0feace520abd73aebb1"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "df6b35ca4e4881c334268b9aa0066cbe"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "a82ca445fda29863da059e6b16385914"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "a941f745cc68f2990b02c4dbb08455c6"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "0ebd0848195219ab14118c23d4c3dce1"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "02411654298562ecb0df12498ae67d57"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "9bb9f7a56b57108cf35226de3e0f60c2"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "1f5562a4df0e6afde0f2e7c2696c49e8"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "fda8628ff896efd83961c1d8deb06e8f"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "741ba9ee2a82e44571efa3b756c9434c"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "94a65036d7be3db72f4540aeab25cf3a"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "f2060e1d278c3942f44e6a6078eab89e"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "abd41595eb99c484b4c052534df734bb"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "9dfc63236bf06d19b3e52ba89dcd1af0"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "bdd86aecc19b310a1c4fa549aa117e3d"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "3c01b5fee848e03f036319d81a160f4f"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "386b67578397ab50088983b8c22a85a0"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "77b4f0439f97d97da2d469faedad19e3"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "e19e529fc99eae2744ba0cdd537c9315"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "7e4e2087be43807bf75a232aa0ec4eb4"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "826ec8b207ca5b9d371d424d76273480"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "6a7b4a97b6bb55200c1cdc7b37a22402"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "7d6a3291961b41f4dd3aa12a8eef773b"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "a7687fbc960115dfbcd911cd56c38b85"
  },
  {
    "url": "post/plan.html",
    "revision": "69ee29853f1d9a27526bc645567b6289"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3f0ab051fc7c55e8e9d90d4f26ee0daf"
  },
  {
    "url": "study/english/words.html",
    "revision": "cb54d271a9c8ae05f6635f1d85ebbc5e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "79468d3b11586505f6c90daab092925e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "7ad751bf4bdb908652c9ce0e0c82360f"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8199188ee7d481ea86270511a15e122d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "057e2485343fc48ad296b9395f81fe0a"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "b1aebc2c8f1d17ae3a02989c0407d04e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "761bfbedee889b0a4ce875144190409b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "dbeb89d02cefcb6388423cbd6e4e4a56"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "7b71719d2ee0fb2af6571dfac639b74f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "473a6be2a6a6229f1e8ba871f5567029"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "dc04cd73309ee9175b3aadadc5df7aac"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "215167f53bf87aa52e5d7593acd373d8"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ea33a21586f9a9b73cfbb5c9580d816e"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8c87be6b44ad4d01e65cb61edbb0141f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "77647572c152c1bd5dd24b03b228a43e"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "8bea95e8d6dcabece3df08f00313c5b0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c95a876b904b1f92c05908eb92828c44"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c66ae8f960249d8dd7384b6b061b3662"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b35ac6d17a6d1e1752d36feb3c577986"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "bfbf6686b4307acf10eec9938fa32d5c"
  },
  {
    "url": "task/2021511.html",
    "revision": "71258f79f72a13055678c5edaa6cf44c"
  },
  {
    "url": "task/2021514.html",
    "revision": "4fa96cc2aec0b75cdd3d18795270fe1b"
  },
  {
    "url": "task/2021515.html",
    "revision": "1de002ab20ecb6cd311e1bebc4a36282"
  },
  {
    "url": "task/2021518.html",
    "revision": "9d129e93d525f3f2ec8a90294196d13f"
  },
  {
    "url": "task/2021519.html",
    "revision": "5d83c849340a3a98dd0a7eef5fe32da5"
  },
  {
    "url": "task/2021520.html",
    "revision": "b3c3771962403c98b520e7333b109af0"
  },
  {
    "url": "task/2021521.html",
    "revision": "2d4738502423d92cbd49380a49c3cd4e"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "ed63570c2a327d10e172d3b880d35dc3"
  },
  {
    "url": "task/2021524.html",
    "revision": "af318a6684ed95dd8016aa8b67608a04"
  },
  {
    "url": "task/2021531.html",
    "revision": "5e399f76b0054c6fc1aae17fc1e6b6ab"
  },
  {
    "url": "task/2021628.html",
    "revision": "7b9c7825dd3f26c4c16900259a15de4c"
  },
  {
    "url": "task/202164.html",
    "revision": "93187aea0d4d6bf81a4a91c9ded70314"
  },
  {
    "url": "task/202169.html",
    "revision": "53e58d0079f6c0c46a048cde78c57ac7"
  },
  {
    "url": "task/2021717.html",
    "revision": "e9e11fceb188ffe054c201ea14163b72"
  },
  {
    "url": "task/2021721.html",
    "revision": "e2da005c83ea3a2faf5868f4e2120498"
  },
  {
    "url": "task/2021722.html",
    "revision": "8132fe01d964515180ab87c9efae8a71"
  },
  {
    "url": "task/2021724.html",
    "revision": "735cf70deb996c2b858dd5893afc91d7"
  },
  {
    "url": "task/2021725.html",
    "revision": "63043d093236da3d97ff3cc93f6e5e3d"
  },
  {
    "url": "task/202181.html",
    "revision": "8108ee89278bd98f4cdfcd029361911d"
  },
  {
    "url": "task/2021811.html",
    "revision": "ba4dde02083aa6f66b8d46c8322f760f"
  },
  {
    "url": "task/2021812.html",
    "revision": "bed9398183b1273a45231a8080f74ab0"
  },
  {
    "url": "task/202183.html",
    "revision": "f15ba7756e8b25705ee522729c880932"
  },
  {
    "url": "task/202187.html",
    "revision": "cd34c84c3788f672f53c64ac87660920"
  },
  {
    "url": "task/2022218.html",
    "revision": "d337cc8b1d558a6848719fe8ed29c2e5"
  },
  {
    "url": "task/2022219.html",
    "revision": "2828e8fcd7e860fbfe5c4557e9320934"
  },
  {
    "url": "task/2022222.html",
    "revision": "387a3b73eea2ccf88a59d0352266b61a"
  },
  {
    "url": "task/2022224.html",
    "revision": "9155fa157a6c155d2c56064beee6e8b8"
  },
  {
    "url": "task/2022225.html",
    "revision": "de2aa7f70e2bfd190eb86e54a334c821"
  },
  {
    "url": "test.html",
    "revision": "a3314b4fe0c0eb0f47767ff6a66718fd"
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
