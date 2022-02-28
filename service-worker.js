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
    "revision": "2d1c6628f8c10eff5c319f815ea91ff4"
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
    "url": "assets/js/46.457be4b4.js",
    "revision": "2eabf5bffb0ef0f59ec7a2462b753afc"
  },
  {
    "url": "assets/js/47.bd39253b.js",
    "revision": "fe2efcd8ad4f8d37812a182c60e529a6"
  },
  {
    "url": "assets/js/48.c3a6d6a1.js",
    "revision": "ce6a5f72e602843474d67668a62f6499"
  },
  {
    "url": "assets/js/49.85322e2d.js",
    "revision": "96c96c19419678f31697b77719f75d9a"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.b0bbde75.js",
    "revision": "9c96bc90fb0f580be283865c40bdf408"
  },
  {
    "url": "assets/js/51.2c1ca7d2.js",
    "revision": "ecc9a4387e0f773ca7e105a659d123b0"
  },
  {
    "url": "assets/js/52.3f1253c2.js",
    "revision": "1495837cd35545568a9e0795730b6e79"
  },
  {
    "url": "assets/js/53.daf45b01.js",
    "revision": "2d4f9d638e0a7a60de3275c24516b33b"
  },
  {
    "url": "assets/js/54.f7ca787a.js",
    "revision": "83fd41cd5f52f37f1021ec412ce8d948"
  },
  {
    "url": "assets/js/55.a3558a62.js",
    "revision": "9cbff249e1f540b57444283dd92bd368"
  },
  {
    "url": "assets/js/56.8bbbd74b.js",
    "revision": "8b6858560e933fc57c6b112efbef3ee6"
  },
  {
    "url": "assets/js/57.3d9a654a.js",
    "revision": "cc7a688ae87dd0a5385c83714201746c"
  },
  {
    "url": "assets/js/58.371aba3f.js",
    "revision": "e10d09acee88951033fa0eed618059c1"
  },
  {
    "url": "assets/js/59.144e39c6.js",
    "revision": "ac3f0c5daf279a8bee040cfd0dc083d2"
  },
  {
    "url": "assets/js/6.5e1bc5dd.js",
    "revision": "d1ad75ff6013ba08ef320c0cdb22c5c2"
  },
  {
    "url": "assets/js/60.206644a5.js",
    "revision": "466406414bc0bf18a194439cf872b385"
  },
  {
    "url": "assets/js/61.409ad486.js",
    "revision": "9286fd56a5dde89caeb6c5a219ffd04a"
  },
  {
    "url": "assets/js/62.f532e815.js",
    "revision": "4152ae9661eed6a9f8dd38d308b35896"
  },
  {
    "url": "assets/js/63.dec8c82f.js",
    "revision": "b22620fcfc30dd5e4186e2ffbfffa75d"
  },
  {
    "url": "assets/js/64.5d3f2f49.js",
    "revision": "afa5546f1f0a0771e21a0d979651d12b"
  },
  {
    "url": "assets/js/65.ad8dc4ad.js",
    "revision": "bfb9f36866d21d720421477aa95b5924"
  },
  {
    "url": "assets/js/66.7b6aea9c.js",
    "revision": "51641a74f5e73836b738efeb2dc55da9"
  },
  {
    "url": "assets/js/67.85eb514e.js",
    "revision": "5b1b611145824a75f2194dabee195aa6"
  },
  {
    "url": "assets/js/68.f38ca162.js",
    "revision": "83fb9526fc5ce9c352717a1cbc9fd4af"
  },
  {
    "url": "assets/js/69.18d5a5e2.js",
    "revision": "927dff909f13cc9feae4cbeb12401130"
  },
  {
    "url": "assets/js/7.f44fb539.js",
    "revision": "9ee2fc464074f3b1e1e6e33cc2632396"
  },
  {
    "url": "assets/js/70.47094fe0.js",
    "revision": "59c23002d55fc55ff0ca4b31be5a738d"
  },
  {
    "url": "assets/js/71.c36c918d.js",
    "revision": "66930395a346b97af62cb5f562f26945"
  },
  {
    "url": "assets/js/72.8701896c.js",
    "revision": "cb73ae6ddf9bf9f13397bfeca060501b"
  },
  {
    "url": "assets/js/73.3aa5c30a.js",
    "revision": "8d2678e3090ed0162eb647138f95e182"
  },
  {
    "url": "assets/js/74.49e45faf.js",
    "revision": "615bb9cf9cfc17787764108eb3e37d44"
  },
  {
    "url": "assets/js/75.07010724.js",
    "revision": "b54392bd8330537c7df52805f78455d4"
  },
  {
    "url": "assets/js/76.0b1af361.js",
    "revision": "4a30b61b015210077dc314a3f159a1cf"
  },
  {
    "url": "assets/js/77.1665c6ee.js",
    "revision": "7cbb59a8c682dc1e0683977a78cbc8d5"
  },
  {
    "url": "assets/js/78.92c97532.js",
    "revision": "e4aad02059c48412f333399575b34d54"
  },
  {
    "url": "assets/js/79.13a640b6.js",
    "revision": "095bdbf5687ee3fe1f3f25c5987bfcfb"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.69a92bd1.js",
    "revision": "5a86f47977635fd28b36ee9fefc5caa7"
  },
  {
    "url": "assets/js/81.0017df37.js",
    "revision": "82ae5383aa5c891d15a2a771a2c90c6c"
  },
  {
    "url": "assets/js/82.a9a9f1fe.js",
    "revision": "7b50dffb313808484ec564a284216986"
  },
  {
    "url": "assets/js/83.55e47978.js",
    "revision": "c9067fc47885c301b72929a03dd66067"
  },
  {
    "url": "assets/js/84.cdd65e20.js",
    "revision": "68403a5d7b5f159479aa58e39f93237d"
  },
  {
    "url": "assets/js/85.395b9c80.js",
    "revision": "33a8f543a9ff4bb9f29fb29ef7588b4f"
  },
  {
    "url": "assets/js/86.359dbfb0.js",
    "revision": "07b97f64a430650782a841aa97bb4d01"
  },
  {
    "url": "assets/js/87.9cc8a410.js",
    "revision": "2361b7cc9de88591c79a307065f8cdff"
  },
  {
    "url": "assets/js/88.0486dff5.js",
    "revision": "50fd4e1646e35225766814fce4886d38"
  },
  {
    "url": "assets/js/89.161db210.js",
    "revision": "ecf60d53ea7716b228eba00ffa53669f"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.06ad8d79.js",
    "revision": "48cda4167e2c6650fe0ca2d8343b906a"
  },
  {
    "url": "assets/js/91.40a45aaf.js",
    "revision": "f8dff9581efc977db0b444a7ff978446"
  },
  {
    "url": "assets/js/92.2e5b1536.js",
    "revision": "c2ebdd2f433d5c4a4daca81b45b91487"
  },
  {
    "url": "assets/js/93.37f734ad.js",
    "revision": "e4a9d054676b3e7fb997730eb5815e92"
  },
  {
    "url": "assets/js/94.645fc157.js",
    "revision": "428693fc491af4fab7f2ae2526dd4da5"
  },
  {
    "url": "assets/js/95.bad31250.js",
    "revision": "9c4de07e361186115d5457abcf6e8b27"
  },
  {
    "url": "assets/js/96.04455800.js",
    "revision": "58482b4e3effb4ada518a937d7d23f11"
  },
  {
    "url": "assets/js/97.6694059d.js",
    "revision": "3aab7544b96b4a774c5061e3a5400974"
  },
  {
    "url": "assets/js/app.42784d71.js",
    "revision": "f52bb3878229e1a3300b9aba392c8475"
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
    "revision": "8127f45a2f870e4795a67809e92bdbde"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "511bfc0bb81edd656fe9a2a2df8da36f"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "7e2188deb98baded14b0fb3eed6ad45f"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "3fd47820f0383d664b17665eb027fab0"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "fb481a865335dd04ea82959b1bce75e1"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "ed3c1d6a4b0640ee82552af3f89d0d5e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "64695624fe5d18ee5b6678895c50e39d"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "de184b3a812fe7e2e162b20eb9b3d928"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "05b3e40a428b364626eaf69d4f4e6004"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "809b9f58aacd0d4434869555787bbc5d"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "9feb4f33d7db7d2e3d28cf4eb38b2eb0"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "e31b4d2e5d2fd79bf47533c935b1b310"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "6f8456d9e88ce4e1a64ce55a24acdc10"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "f2bb4b92414e632cbe595af1ef8bf98b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "744d837f3879f36fc71f09619db7b3bf"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "a38973a56a1bf898725b3912f611a244"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "2d3124e373523d7949516d50bd048a6c"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "4146fa46b0a62c3d3cfad331653a25bc"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "a9258069c7c2eb7adb6854e5e507226e"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "df6b122c703b71340dbc26d694aad369"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "4bbb0b7a56cee5d24f08eb1492e6d888"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "d94f3474acc5174062c9c95f7db1e7d1"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "a15e9fd62385f7063a94bb7b7a6dd6a7"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "b9785521e96c1a9edd4ce28921559de2"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "90706370a6d4aaca5ffc945247dbda94"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "b9816f9b0b2032ea4fb466e958f11120"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "46cfc90264ac28ecc4741cd5b0c8d271"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "c38c10c131ca85033014395c4d1de956"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "04adcf40dc973a63b53e1720dd714087"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "53503a5c40a4c00495155dbdb0006e74"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "f75662335371e023639ff096cda2ce84"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "6eac832242562e72b1143d6855219bdb"
  },
  {
    "url": "post/plan.html",
    "revision": "9729e5f5cb972a9d951f49e021cf3a4a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "04b7babba0a628baabb948298885b394"
  },
  {
    "url": "study/english/words.html",
    "revision": "ebe06bf5f6ec273738131f4a534aeb09"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "dd094467e6debc3acf2b97018e90cbc1"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "686eb628abb478447747d86823742367"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4661eeaff82c7be07228dd9668f860ed"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a0a46485f0674218c9c79c1c3d33d7cc"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e500d43d69b043d7149c88de4c3152df"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0f59a3e7451e8141c5c60de15d9c82ba"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "4ff456f41e24d2af23bdeaaeb697c8c6"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cbe613bfb1ec7b08ed33d96185c32901"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "7255f6ca8c33dcea3747b2afaf9aefd1"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a205b0da8ea6be36dbc4b701a8798edd"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c43e711f5cdca3fe560448fa210dc761"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "bebfb526c338696adce9d0837d2a70c1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "34fb3bac33c8afef09b3f9310b032ee6"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "ed8aa21f94267cc1b39e11f6c4601584"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "01fa0cbe96e2c19fdd6bc34b3038f0e2"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "544206c6c1b87526730aa6fd935ceb2c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "09a3e6422c2fd57da383e73b86e117a3"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "3a460e3afc805503a678276945400b20"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "91f6b77a11d4d830da428b648d43189f"
  },
  {
    "url": "task/2021511.html",
    "revision": "d8534209a56fca03cc27eb5249e5d053"
  },
  {
    "url": "task/2021514.html",
    "revision": "b2a0f2b9fd7f6d78183737f55b821ee9"
  },
  {
    "url": "task/2021515.html",
    "revision": "0f0b30611a65a2d9005db617b31056a9"
  },
  {
    "url": "task/2021518.html",
    "revision": "f62dfd998d270198cead00189dbc5d52"
  },
  {
    "url": "task/2021519.html",
    "revision": "58a6e2191ac4939d14a2c3c27b9eed93"
  },
  {
    "url": "task/2021520.html",
    "revision": "60588750dc9f79273abca949c34b04be"
  },
  {
    "url": "task/2021521.html",
    "revision": "b39ebc44e5d21c9168a25ab821610baf"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "bd191a7ee87646f3c070b67c8bd8653d"
  },
  {
    "url": "task/2021524.html",
    "revision": "987a42c3f827a912a1b95e4fbef2f5cd"
  },
  {
    "url": "task/2021531.html",
    "revision": "086288b9948a8c3fc21d9c62ca7335fd"
  },
  {
    "url": "task/2021628.html",
    "revision": "12cbd6cfc0c3ae2fa5dff0870e7343eb"
  },
  {
    "url": "task/202164.html",
    "revision": "934dc4230ae6d5f3edd873c7b404df15"
  },
  {
    "url": "task/202169.html",
    "revision": "da668acce1fe9bd7dbcef1a7c35573ab"
  },
  {
    "url": "task/2021717.html",
    "revision": "ecf1031fd833f8b9d56a50f3483580bd"
  },
  {
    "url": "task/2021721.html",
    "revision": "15f50a7dd76720e9293ae710cbb0c213"
  },
  {
    "url": "task/2021722.html",
    "revision": "5164dfbbff1589472e3cd9ad6c846272"
  },
  {
    "url": "task/2021724.html",
    "revision": "1bccffe1e495f778c5521dfc0c78f82b"
  },
  {
    "url": "task/2021725.html",
    "revision": "a40be510076eafdfc9ed984c104717cd"
  },
  {
    "url": "task/202181.html",
    "revision": "1bfd479294542e2142e26701dd10c042"
  },
  {
    "url": "task/2021811.html",
    "revision": "59a160d644d717d14464a3eaf41f32b4"
  },
  {
    "url": "task/2021812.html",
    "revision": "e93c7d11c7fdc85db021a2438f667b84"
  },
  {
    "url": "task/202183.html",
    "revision": "c8acefae2ef5df5110ec98ed1fb3ec01"
  },
  {
    "url": "task/202187.html",
    "revision": "ad4ceb4e5ceeb99c4e2b157dad0b8735"
  },
  {
    "url": "task/2022218.html",
    "revision": "09334bb55eb4c58c6f9a43d246ee27fe"
  },
  {
    "url": "task/2022219.html",
    "revision": "246a2b38bc2f5f62fa66ed34e36001c1"
  },
  {
    "url": "task/2022222.html",
    "revision": "04059f9ba5538c271e366457df9f1e0f"
  },
  {
    "url": "task/2022224.html",
    "revision": "c1b9a9fe4940aa9a45e5e5a6267c23b3"
  },
  {
    "url": "task/2022225.html",
    "revision": "ec142c9d4de909361bb54c6f0b3c9f87"
  },
  {
    "url": "test.html",
    "revision": "cf24b18c59c757f2aa4ff5c8b7a7486d"
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
