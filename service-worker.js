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
    "revision": "8c607e186cba7305f14b6d095ec585a5"
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
    "url": "assets/js/43.33bf036f.js",
    "revision": "4d2b5407369d102c2ff5cee22ad38a7b"
  },
  {
    "url": "assets/js/44.957fa1fe.js",
    "revision": "23d6f2f67c0c83a7960dd975d54f2409"
  },
  {
    "url": "assets/js/45.f486cc54.js",
    "revision": "b0f6979b84f51b516a9ac1e947388948"
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
    "url": "assets/js/app.468ee9a3.js",
    "revision": "f2aa87045da7def779ebab71b5936602"
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
    "revision": "c510b8501934481bacab65f48fd92145"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "f9054d2223260bfef99be875f24cefbe"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "ffdec25f71c007224f65ad7b7525b877"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "8a04e40b6a8e6fa2d90924f64aeab7b5"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "235ad350ab00f7426c19358091506940"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "6c5c5ddbc39f8f104874853f979c4d0a"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "1d580f4167564819f52eb786e405d11f"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "d9eae3b2cbe53f9989461f297289f6a4"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "9c3ba46db47875099b42beaea8f4088e"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e1558e738e3c37f70c821272317465cf"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "0da395adab55f821fc55b3e2b5192a5e"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "58a87f5d80ab7da21865c8e6dea02c24"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "f7d0db13be3e2a20ba783f16b48640a4"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "3b08c5647675d02a825476a14f98418c"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "4cc1f5e336704a02ac8f675033c6c971"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "f425a9240e6d1ca6204969d90d01b8a4"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "c4da9b44c3a594c8fd8ceaaa8d47e7f6"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "2adece1bb4fe7a9bfbfdbf23b4c8c872"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "a09816f646762eacb1043f389636cd6c"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "f63119a16cdcf259606bdf060b3964e6"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "834ec18391793fe6da35bc1d410f3d97"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "dcb4e713a4557da2f01c641e0c0b3eab"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "089d0de6e6d04d46e38f3c56125bd25d"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "f8c64143a10f42a3ee7b141defd6c61e"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "98f2369683e03b4d26724c0c4893ab43"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "786c3d590ba9eba4371519c514694c1f"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "30a67fb4428dec815baf23e9698ec07e"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "c8179e19a7f8d5431e2e8ac257075740"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "a5f50b9f529536ad7fc12777eebb5ec5"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "27a61a88abcf3cde16274ad0b2ab0181"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "e816df008de6fe731eb68730ec8e3444"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "c39399edc674e01479e559cb92c16c95"
  },
  {
    "url": "post/plan.html",
    "revision": "16295d23bd18f3ae9569c7a84f2e3970"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "9822a4764432fb2707d23523a42983b2"
  },
  {
    "url": "study/english/words.html",
    "revision": "d5d03c5bdb04c043ff489af7bfd43652"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "5b619cf67132391293de5106bfca91d1"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "92cbb2207b338181bc5280868626ca18"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "c96a580c254b7f1f5cae7d5a5c054aa1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "cd611f776fb535671c17fd2cc2764173"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "40c960280e57512e532f50ad53d3304a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "24b69d2003edd364032e67960fd425e8"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "023da0261240703ba89c548b89c21ef0"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "e65631b928773dab945b8bb1a2495a86"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d0ef4fd1aa1dc5a3c06125fb102c25cc"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "0370a044e99553207e09a7a7fc296402"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "51d8287a39a972c87ea07f133dbfc610"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "50bdfb55e72ecf493c4063c5c0a36b69"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f07d27eb82a0a6438d0e13ec8a76f451"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "04318638f85a078f5fe05ec6cff5c085"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "a08f1889844e6919700d57dccd6705fd"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "b33b46af6c600fe47dabf1f0365ba3e1"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ae9fb8c15627096e04c05718cabaa81d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0e35b815e49d2a02c24dc55dd8760ab0"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "14b47a4f1350662bcb0d09bd3d69a21f"
  },
  {
    "url": "task/2021511.html",
    "revision": "0bc2540b5c4aec9553370a56012f3fdb"
  },
  {
    "url": "task/2021514.html",
    "revision": "32f10d9c706ff81318e0ce0461b49613"
  },
  {
    "url": "task/2021515.html",
    "revision": "bc34111f74289ee94933e02b1ba1a0de"
  },
  {
    "url": "task/2021518.html",
    "revision": "0a42a167fae771d92aeac88fee0e8ebc"
  },
  {
    "url": "task/2021519.html",
    "revision": "ad4c74f29208accbd220ebf44994383b"
  },
  {
    "url": "task/2021520.html",
    "revision": "af0b39041495b9a45a6fc2458fa5498d"
  },
  {
    "url": "task/2021521.html",
    "revision": "daf1c3b889d192185fc322737bf1c3a7"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "0a6b3930825f8f417b311766edf282f7"
  },
  {
    "url": "task/2021524.html",
    "revision": "62ed1172e5febece1cff4810252715df"
  },
  {
    "url": "task/2021531.html",
    "revision": "6b0145d2ab192cd829c6ac32dba4286b"
  },
  {
    "url": "task/2021628.html",
    "revision": "875e25dac5a15c3163ebe6f4743a0d85"
  },
  {
    "url": "task/202164.html",
    "revision": "ecf3b35b4864921d0c28cf006dde62a8"
  },
  {
    "url": "task/202169.html",
    "revision": "35b0189b7276a987c8a88ed55fcc038e"
  },
  {
    "url": "task/2021717.html",
    "revision": "eecfe0e405e3b6ad644acbde61038cc8"
  },
  {
    "url": "task/2021721.html",
    "revision": "08ce5706bd02ceb5fcb0643aad9b05f0"
  },
  {
    "url": "task/2021722.html",
    "revision": "89a82b60d8caf0cb92fa5c10132e6042"
  },
  {
    "url": "task/2021724.html",
    "revision": "db4fb51ef2e6a68a99fb1b9bd80d79cf"
  },
  {
    "url": "task/2021725.html",
    "revision": "a4b99ff1f8d3a19d53b2cb4d60f6fcf9"
  },
  {
    "url": "task/202181.html",
    "revision": "b926d7ede3de874ce4f3965654f10b8b"
  },
  {
    "url": "task/2021811.html",
    "revision": "df5185b1596ea31728fcc502fe8cbb3b"
  },
  {
    "url": "task/2021812.html",
    "revision": "b633af163091a1af9f221442869ed7f3"
  },
  {
    "url": "task/202183.html",
    "revision": "24a101afdddda90074af7057d4caadc5"
  },
  {
    "url": "task/202187.html",
    "revision": "6b70b479b041c1a394540d6e05b1e94d"
  },
  {
    "url": "task/2022218.html",
    "revision": "03848adc47b85b05079e13aad801a5c9"
  },
  {
    "url": "task/2022219.html",
    "revision": "7289e858b4652d8a48d44c3ba9b84edd"
  },
  {
    "url": "task/2022222.html",
    "revision": "7bd75b944fd7d1d93c36d85af3a730df"
  },
  {
    "url": "task/2022224.html",
    "revision": "56037a2ca7044c2802fa7542a834f8d9"
  },
  {
    "url": "task/2022225.html",
    "revision": "1f1754ab1230910912d6f95fdfa2d698"
  },
  {
    "url": "test.html",
    "revision": "cd288da4eb990a1e6c7665386a827a3a"
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
