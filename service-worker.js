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
    "revision": "ff14762394d8191c03deab51fc85bc17"
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
    "url": "assets/js/45.5fa8b335.js",
    "revision": "a488a8d07ed0ba0839e1c34482722978"
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
    "url": "assets/js/app.6d4ef57c.js",
    "revision": "eab557afe9092efc48928435ff1a74a0"
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
    "revision": "455abe1b5bf9fdb4582a46d8b0f2d9a3"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "b3bf5006812bc09df4f1666a26ffb405"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "6256ad41177bc27de401438cd11d3b5e"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f7e9a4da6b70fc36c203f32ec551289d"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "c3430bf2984e6596efb25b5650e20d16"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "06b139db5601f63b4ca373fca3927596"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "16050b12dd45de8e175ce76940a3d548"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "24a093857eb23ec7a4e68a740d5b823d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "c4a545e131dd4596bc9606ad1d80fc67"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e099b6d1577a180d103c862863652529"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "6a17da3c350088d1855bd49113a642a6"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "8c43618d3180320021f4d44a32fa37be"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ad5e107e3e0d070995728eeedd90b756"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "707a7adb0063ca9d42a03872925ae2f1"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "628b5889e299f5a90ef4735098a75378"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "05085f9f3b436f20ed8b8a3ce375a988"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "e8ef20f76aed6942d58219afe8e2f2a3"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "8150355492f95d4db8ac703956b16ec7"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "1fc64db5f191aa51fca00afd97b31d21"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "67122df0d84ac52d677a6da059ae8427"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "de433576fcc45c7304e11aca36f49d18"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "20303cc608efa2b74c99463b4dd53504"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "f0182f5069da42373bfdd7b240402a74"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "659c4efa91432d176bea2ad1fea1ce18"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "8ef0433221ba840d50758e64b9168a0c"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "fb768ded238ffdc427a1022a4d9dc88a"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "d9b54eafd5edd38167d33055b8cafbc9"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "5414c0a2167882c07ee58ca105ecce55"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "f72db01066ff1c079b26c56973de2328"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "efa7f93fb8a7808416675e714596aded"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "006a5ff15f9c5618add454bf66c04e6a"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "21ee2e73600be960443d382fe18e9f01"
  },
  {
    "url": "post/plan.html",
    "revision": "c5f473ff7749d792e509f00392c71859"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "96b7faf41894e7ef1ee497b0e44370d3"
  },
  {
    "url": "study/english/words.html",
    "revision": "0aaa565fa526ad092c306b874bd441dd"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "58cd065df7cc1d421f10565df0cc3a07"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4504f9b117c327656f09ce5364f3dafb"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3f58d16bdfe22b365fb02ae6d49eb614"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d5a66d75f89f814a2029f1abf5484784"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "5bf236aa4045a6e6a7dbd23948903efb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "5108cea5b8f69fc31f46b6b394cd8a09"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "6fa8b814075fb5a96ccb9078557990b0"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9d19acccc35fb64ffebcf24ea3691b79"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8c97cc62fa6351fd604f858259653470"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "4e4e6ea986f1bb1f21f8c21196b88685"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "5caf53dcb9cb02175701ff5440f58f58"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "24251153bea4e539c5450ea129347eb9"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "525284b3b4a578b7bf3fe0449c048b6c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d988dfbce693b85c3c283c0032e7e462"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "270016b382a491f321d61c6a4319fd0b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d88ca9c7e389841a9643085ca368abba"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "4223dae6a70177e234814c7efeff85ed"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "20fa3f9da484551ba9d2c42602f4013b"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "642585c76f03b85b3e4eafd80ee4456a"
  },
  {
    "url": "task/2021511.html",
    "revision": "fda2c4a9cd16c8ec7b833465e5498bc3"
  },
  {
    "url": "task/2021514.html",
    "revision": "d1533ea7cb1bdbdbfbf60b909fa6be27"
  },
  {
    "url": "task/2021515.html",
    "revision": "12f638e00d7d03d266f9dad0a68360fb"
  },
  {
    "url": "task/2021518.html",
    "revision": "4a0de1bb2bfccb28df83bf31aa17cf00"
  },
  {
    "url": "task/2021519.html",
    "revision": "4cecf8d9dcfede891ea03cacc5863d8b"
  },
  {
    "url": "task/2021520.html",
    "revision": "447d91b68648572082a04c71b71ba840"
  },
  {
    "url": "task/2021521.html",
    "revision": "d579461673602e62eb61fd05e76d08cc"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d2a807a2beb57cff3de7ae08da5c99cd"
  },
  {
    "url": "task/2021524.html",
    "revision": "af8b6b3e5f54667847240e8c1901ae36"
  },
  {
    "url": "task/2021531.html",
    "revision": "ee79aca97fb7413d0b64618657838c4b"
  },
  {
    "url": "task/2021628.html",
    "revision": "371fc83161c802fc331a60539d1e72db"
  },
  {
    "url": "task/202164.html",
    "revision": "d8a47e8c302d2957c0679ba965db3389"
  },
  {
    "url": "task/202169.html",
    "revision": "831633a88a42d463d15b6a73dabfeeba"
  },
  {
    "url": "task/2021717.html",
    "revision": "6ae27e5b7c8fc3e78ad7c2c9cb5b8133"
  },
  {
    "url": "task/2021721.html",
    "revision": "23128ad247417f6647d6f8d3853b311e"
  },
  {
    "url": "task/2021722.html",
    "revision": "23668a28b0bbc2e2f6b01bb3bf2902bb"
  },
  {
    "url": "task/2021724.html",
    "revision": "8a153caec58e4585a5354de2dbe2d704"
  },
  {
    "url": "task/2021725.html",
    "revision": "9ef0753466f2f52382bc0b48bfaa4201"
  },
  {
    "url": "task/202181.html",
    "revision": "527440337eb96d4fde600198c71d1601"
  },
  {
    "url": "task/2021811.html",
    "revision": "74c5eb6523cfa8fe09710b67c2338ace"
  },
  {
    "url": "task/2021812.html",
    "revision": "f4190e692d122f199d742a18b73716e0"
  },
  {
    "url": "task/202183.html",
    "revision": "0be7d2c260a2d4e31e204dfc6b69f151"
  },
  {
    "url": "task/202187.html",
    "revision": "c771c7f65ff0eba7d68cfc057aca3294"
  },
  {
    "url": "task/2022218.html",
    "revision": "0a2b5eeb2fbc7a5fcf34b565d660f7dd"
  },
  {
    "url": "task/2022219.html",
    "revision": "b46c85fa1717498035d4538ff4f94e16"
  },
  {
    "url": "task/2022222.html",
    "revision": "e261aad566f5b1ca18adfe4585fd8f20"
  },
  {
    "url": "task/2022224.html",
    "revision": "ca7bba6c9546ae78c5e1087b12c36bea"
  },
  {
    "url": "task/2022225.html",
    "revision": "ebb3a3811e939dd8d36a2b6c96a69f7a"
  },
  {
    "url": "test.html",
    "revision": "b8fc31e919c6a5c38835deb4e4668ce7"
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
