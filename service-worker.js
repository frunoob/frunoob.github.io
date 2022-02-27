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
    "revision": "a628bf8611494a9c3e1ac55831f7c9c4"
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
    "url": "assets/js/12.772f55ed.js",
    "revision": "6266bf732adf4bd7aeae3662519640ba"
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
    "url": "assets/js/44.957fa1fe.js",
    "revision": "23d6f2f67c0c83a7960dd975d54f2409"
  },
  {
    "url": "assets/js/45.ed434d62.js",
    "revision": "f8436a3973db774b91ad8ebfee0bc446"
  },
  {
    "url": "assets/js/46.fc50f5ad.js",
    "revision": "59c2bb547cdc01d85b65e5d2ac40a566"
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
    "url": "assets/js/app.17699422.js",
    "revision": "f0c61351a508ce6937a45c66756b60f3"
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
    "revision": "666fb2f669904f7613f0873edc6062c4"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "8218eeda3d460839efa31312bac4a105"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "11e4b8eb0ea45a798618e7c59d7a7969"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "ce94e9b48f3eb0e8a9b308b062ace7c9"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "47a3c3ec1e84d288769f5ba85bc0c726"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "997dd5eb6ed2deb9f9265c02e5317813"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "76cf2ddc13ad6997354d22088c6e85a2"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "d4b7749494330968ac4fe419a8d9466b"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "13d555d73d1e82ecee48f34c331a6145"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "715e29bf1fbfb975f9e0a52a5b6c4439"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "4f064fb40a686eaed562c3f3d490eb51"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "5cdab07160bc1baa0f221fcbd881ae0b"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "92d3d4f140addeef9344a01f00f99fb0"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "e6cf68dfd428d0ef6bdcc31b4b7d86c0"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "c88bc265536c3657753b30477f2edc26"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "2942583ba0cfe5c73d3b7859e4cc1330"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "cdf5f442ba43e6ca797ec2cd08324ff6"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "63e76c125a20f91ac4fd01def6fbff1f"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "f6520c6507ab7176b3b1534c3cb9a5a0"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "5fcb1f7fb607efde2000998b4e10113a"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "39076f154859c468548efa1a16726766"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "7cbf63209932277a3ac54a473bc56828"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "3abd1c0bb847999863473e61a8b55839"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "45960d42b9d4b11006f2d9576ebf021c"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "5b8987d595953f9a78fd1c9f173f265b"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "e35e600d5dcb07b6489cdd7e87ca063c"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "2f35e6f6732c3e24225e0802b6e1ef79"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "28a6c831601b5908a70472621a91cff5"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "144c45f39193476b05017dfc310e63c1"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "b9b0ae509bf1ccec9a6c3f1bcd721df3"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "200a4080878869065f23c3a3d25e762e"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "2a47b8647a1348ad2a218c6e88dbb463"
  },
  {
    "url": "post/plan.html",
    "revision": "7d370dbbed0697064673df72792a9b9d"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c8c913d9c6fc95c50b8e2bbf68784a8c"
  },
  {
    "url": "study/english/words.html",
    "revision": "ffdba3ebb597df94dba46ef1f145249c"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4d7361b0d953bf401f640bba8abf756c"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a6e2bcb48f8d5a2e424a7e889392ac60"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "081e0e6199b04ef44b07fdb4bcbfad2c"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9a11a9b1b1ba504a5e2a570a89d8e7af"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "892b6baed5b83d73717e963d525ffe57"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "06777d909c8b13a2c2341dc58ff7bf69"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "3e4e09324ac4e22a7e56ad1a4303a2b0"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "dff7d1559ac234266043ac5dbc38f50c"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "9c40a35aab4cb7c74bf71eee94106810"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "9d7775046d78864c2ff5cce684a5981a"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "417e2f6f8a23070dde032b0f0221e4d2"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f33de822552387710ed29c3d75f8ce64"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "40fdb9e901e32320e896a684539237ef"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "84ef6752b3980e2c634c0754f637e64f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "64202dd09120852285a3ccc8493d59f0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "02aa229414097a8ac29726d7ed85abd6"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "10e24fe0636b8dd52f359c66d2d7f6de"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ddcedb12708befe152c7051a61614dd8"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "90c68e0801537e64533df13626f50714"
  },
  {
    "url": "task/2021511.html",
    "revision": "9940a39e0b2499581d597331dcf905dd"
  },
  {
    "url": "task/2021514.html",
    "revision": "763f6cba96ad2492534fdfe2adaae2d7"
  },
  {
    "url": "task/2021515.html",
    "revision": "fe891a6938a5b3c651adcf8b5e9dad1f"
  },
  {
    "url": "task/2021518.html",
    "revision": "67d47d51da4854b7bd662676a0e694b7"
  },
  {
    "url": "task/2021519.html",
    "revision": "134349f28551a89c9d59c668297aa5b6"
  },
  {
    "url": "task/2021520.html",
    "revision": "6355163aaa19324240f89fcef30f3c33"
  },
  {
    "url": "task/2021521.html",
    "revision": "41282ffcafc0b88fdf61d9f07dc85c45"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "52c87ac4394674006086f60dc13c3a50"
  },
  {
    "url": "task/2021524.html",
    "revision": "4cc1ac85b399b6b5acd41eac0dcff00f"
  },
  {
    "url": "task/2021531.html",
    "revision": "c535da035bdb7c06c517abce6d3f52de"
  },
  {
    "url": "task/2021628.html",
    "revision": "9b28da4b8a7b043df82b2ccc33740711"
  },
  {
    "url": "task/202164.html",
    "revision": "533633be8d0205aeeec0756c55f81493"
  },
  {
    "url": "task/202169.html",
    "revision": "0fc473207d5efc496ef79945ff391d7d"
  },
  {
    "url": "task/2021717.html",
    "revision": "13342bc2afb21dc6cb01fde2bd085ecb"
  },
  {
    "url": "task/2021721.html",
    "revision": "0bc1fbf2a4ff142952311388eeb6c5d0"
  },
  {
    "url": "task/2021722.html",
    "revision": "3229c6bff0efe074cb315ee80f05504f"
  },
  {
    "url": "task/2021724.html",
    "revision": "cc89a50048d0b9151108354bf142514d"
  },
  {
    "url": "task/2021725.html",
    "revision": "b0115dcd59beeda23ba1dcc295ad4ac7"
  },
  {
    "url": "task/202181.html",
    "revision": "bbeb572a09a07fcf9dbd1c1f14ddb75d"
  },
  {
    "url": "task/2021811.html",
    "revision": "e2c2196246bcd634e3ed6f08459357cd"
  },
  {
    "url": "task/2021812.html",
    "revision": "eb8ddcfbe45116f6f062a8c05b26e0a3"
  },
  {
    "url": "task/202183.html",
    "revision": "8ddcd833b1ecf65670cfd204a93ced73"
  },
  {
    "url": "task/202187.html",
    "revision": "d39b34daa595a97354e081826db3c87d"
  },
  {
    "url": "task/2022218.html",
    "revision": "91f39af884e60a55d43e9cc107811888"
  },
  {
    "url": "task/2022219.html",
    "revision": "00a70912275204578a3ee22f0072dc21"
  },
  {
    "url": "task/2022222.html",
    "revision": "9145a71e3f185e8ab86078b6d7b50bea"
  },
  {
    "url": "task/2022224.html",
    "revision": "8240f918a3165aeff1adeb9b46188d90"
  },
  {
    "url": "task/2022225.html",
    "revision": "7e2839ab5d36633bb907df0bba6ae97f"
  },
  {
    "url": "test.html",
    "revision": "d3d0aa6dc69725b847a16731a2636ad7"
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
