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
    "revision": "d578314adf2ff7a3585447f4f0fe1aad"
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
    "url": "assets/js/33.7d21897e.js",
    "revision": "222a5d743bd6c5199e0a9c8c5de28708"
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
    "url": "assets/js/app.02e1fce3.js",
    "revision": "f8710e0c449667dd87aff5779a06eef3"
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
    "revision": "a08898dd9068ba24be0961df24609164"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "98ef6db74832b7bb8b86704899eea698"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "a5e53f5bf75f8e564256a88ce8128a90"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "64e5e8d7c81a2f319fa679c57409bdc5"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "c23c227a92c052d58102d3eecaf9025b"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "705f914f40a2e7579028dfe39384f3f4"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "a69154f50ac19f6f51916acbe6cbd991"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "cfad59b86fb09ac6203d4ea87033a826"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "931f810d28e4940bdaceff82385e624c"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "6b712ff73ed4a5482d4c7a38b81c5834"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "fab0b81cf4f363b7c193e5afada362bc"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "0b23790df6243190e5865a26ec5812f9"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "dcceb89b98bc0860f6d557b62787d156"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "292ccde81e8450489ccff38f20f44d2f"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "8d257d633f4a0d6e33c3df0126e7f270"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "f9696f8abdc56e1a298c99107cbfd892"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "8ba8c49641a3c4714ad6c42caf87f4b0"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "0189fad267f63849d2f2304c970fcdfc"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "9862d3381c300324bbd4de1797e9724e"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "eeb0cb2073b4d89ba06a45c0d71ecbd6"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "5e030396fc0012e54882ec4c2a1e5c12"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "b01ce1d87402fc735735b72d287276b3"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "7f01693a9ca79e9e6315e822798e3900"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "dc9b601640c5f9bde71db465ff43fdaf"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "98638035a60ebaff1b6d93188685dc75"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "8af80e38e025f3cc175429309b850f76"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "0ae375e60795e7a716262fa37b8d868f"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "235eab7380346b419ff6b8b7293107ff"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "f3a855cbeaf699e9ad0e63770c2612c8"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "d47ec07b95b01bc0eb6ab014251cde1d"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "714894c9a6550aa3412b5bc9ffba5923"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "1f0540fa0dc12d4bbd43cfead14effe5"
  },
  {
    "url": "post/plan.html",
    "revision": "aff0661ec4469256a5bcde9a36fb05fb"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "45d226068479f2419c0cbe241630f889"
  },
  {
    "url": "study/english/words.html",
    "revision": "e663c90e38e05f92fed4fd0715e0052c"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b8bbd7e228008214bc718b60f4573540"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "26eeb7a9d0c453531e047910ecb33987"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8beff1c9cc952ed600d4fc20ddb6ac6d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d6197b0d62d46dcd39a5e40121938439"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "23a57d9424e4a7ca458ef3c1619965b9"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "481b0d6b29c358141a15e961b19dc3ee"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d5ddeec41728f837dc3205ecbc775a31"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "81352180f4c1c89d035cc70318370e24"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "f6ca7f709b267fd8d869f80a55d38834"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "996b59dec3a0e265d87a450deb9674e7"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ca03e3c059b7a411358224a2162c222c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ec19304712519a871cd3ded040ace533"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "650d70dcc43d379db69da1d4a6acf3e1"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5d24498b34ee4e44f01664e21495f8d5"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "e6dfc7fb86e4fc0ca32aae890baa5fa3"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "30225d0d2c12918cc51b6a66bd44123f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "25597c0229cf4ea43437639fae447a79"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "53a973ca9077bb625fe4c4bc7f50f7f7"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "0a97cebc6d7d3b70fb4e2fa1b8796857"
  },
  {
    "url": "task/2021511.html",
    "revision": "13941a51ab08c62dcd5353e2a99b9fb0"
  },
  {
    "url": "task/2021514.html",
    "revision": "9d65d06a67214d6a474e7ac9b1821f72"
  },
  {
    "url": "task/2021515.html",
    "revision": "43c2d3bcdfe6745819a98c9edd1289eb"
  },
  {
    "url": "task/2021518.html",
    "revision": "52c89588eb436f9326f1172fa95c612c"
  },
  {
    "url": "task/2021519.html",
    "revision": "d64b7c96a5b237f9062c0e71a9dc027d"
  },
  {
    "url": "task/2021520.html",
    "revision": "c5f709b26f3ce9a03a9ee816c7f9d6df"
  },
  {
    "url": "task/2021521.html",
    "revision": "8d121bfee83e259fa2adf1edc902fede"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "b1c749e897e30c90cd853fbcba505a30"
  },
  {
    "url": "task/2021524.html",
    "revision": "eba0f62fa240f186c5b0161da9c81e79"
  },
  {
    "url": "task/2021531.html",
    "revision": "56491a28084e1c585ddc42f999229416"
  },
  {
    "url": "task/2021628.html",
    "revision": "f4dd9e590fde87701071ee8405ad9b7c"
  },
  {
    "url": "task/202164.html",
    "revision": "2c84e0d0085dfcb7f8fb9688d7649efe"
  },
  {
    "url": "task/202169.html",
    "revision": "c5846fa2b8a14db94812c906d3ab8450"
  },
  {
    "url": "task/2021717.html",
    "revision": "df3d367ebd8bcc573d763a42dc511162"
  },
  {
    "url": "task/2021721.html",
    "revision": "6813e52f221fd662f1bad8e48e800d1c"
  },
  {
    "url": "task/2021722.html",
    "revision": "0b03b1738817f57ffd8508504ff03019"
  },
  {
    "url": "task/2021724.html",
    "revision": "48b476c68947476776e842cfc085f02b"
  },
  {
    "url": "task/2021725.html",
    "revision": "c9d5cbfe0e05d74b108b885003a017d9"
  },
  {
    "url": "task/202181.html",
    "revision": "cff89fe8e3a27d1f11fa90e8de156712"
  },
  {
    "url": "task/2021811.html",
    "revision": "b6202397d678573eb04befdee68924ee"
  },
  {
    "url": "task/2021812.html",
    "revision": "2b5e918fd325f3d05eb39a55ede94464"
  },
  {
    "url": "task/202183.html",
    "revision": "f4a5fd369635bbdbcd1da1fea705fdcf"
  },
  {
    "url": "task/202187.html",
    "revision": "71e7208ec2706c16d5118f1b6d50069c"
  },
  {
    "url": "task/2022218.html",
    "revision": "830321bb57e72f3a7d74168dd140b9b6"
  },
  {
    "url": "task/2022219.html",
    "revision": "5fad5a66b6683f8e5f1fe6753f9a23d6"
  },
  {
    "url": "task/2022222.html",
    "revision": "e0cf9000d078967fd02bcf275461fc86"
  },
  {
    "url": "task/2022224.html",
    "revision": "c86b9c6a82cbe789f92057b705950183"
  },
  {
    "url": "task/2022225.html",
    "revision": "c29780d24c0c788ca43d0f6c04da90cd"
  },
  {
    "url": "test.html",
    "revision": "953a64758c1ca871bfd92477e5212e3f"
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
