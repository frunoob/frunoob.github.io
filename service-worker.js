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
    "revision": "6b8cd9eb9139d00e6d5dd5686975da7d"
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
    "url": "assets/js/43.33bf036f.js",
    "revision": "4d2b5407369d102c2ff5cee22ad38a7b"
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
    "url": "assets/js/app.cc8e84dc.js",
    "revision": "3bf2a791a249a03783c0c2877bf3eef4"
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
    "revision": "ab74d13e7d4ef62d3a6c881059e3028b"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "a628c4da5de33e5344ba05f1147a3cc0"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "37636246452d9ba1f5ecb266f6e1b093"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "fd75c4351307034d5d53103a82307534"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "c8ef0c1db6f52a1f8bbadc27ed528115"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "417a8128492ee82a3df65bdc794d1648"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "e3cad632f5374144279c9d8f57d977ef"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "fc2094e04ba8c629bdd0134d7629e094"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "53b94dd006ed2f6589a1e5dda268d135"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e965f862ab1d771238b736d68c718a86"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "959ea201acc1c57650c055ea15070e95"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "1d1ae054729aaa07707c04a3b01bf231"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ca52ca3616941a06446b32a93caeb06e"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "0c5b6fde11d29c4b564c7cdf209edd36"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a7a29dd297878865056d0052c45eaf4f"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "849d7c7138e376ee4c54a879c5d2bf78"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "2b9bda30c62770f382a12b44913e9464"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "93967a5735edb4b355d59a2a48cf5435"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "c28c80ed9ab785709c0781ff71ec093b"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "72f069c55035aa557af3743d2286f1e3"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "4b3b2153635c9162cbb1391a7afb6207"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "5e7b7df8338598703a41f1d4f7efe6e1"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "6a4a843a998a227cfa6b0913e5d9d762"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "88de5bdb8fe501d982520c6daeb4c62f"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "77698a36132467fc24c3d5d649da9f5d"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "bed43806cd7f7f7ff239cecd0dd513ee"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "c3038f5541c0ef0951bff9e72f5143a5"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "89b02e6254609730def92cc38c96288b"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "93c226f22b80ae4c8db517fa114a6484"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "41f50b9ea85b203f6a3aebc1ca987aeb"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "e49bab4d479effaddf7bf22dab3f0b2a"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "c3c5edb439caa5e664232729246ba150"
  },
  {
    "url": "post/plan.html",
    "revision": "e0f24f66bb5d1ba089199e97594fa543"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "ee03f7f529ac980ec9f960ceacf64830"
  },
  {
    "url": "study/english/words.html",
    "revision": "ff821088f285a8fd70c7e3555a965bf2"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "eb4fa0db8a2b177d3ba52b0447088cc6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3f22d60f937b19937ff36135d87da906"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "35579f17f7f94cfd1752d26b1c1367cf"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c1841a9ece7a355e6bd0426d12d80044"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "56a71bcf779d6394ff62a1e7c035b913"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "cfcc22adfc9fb7dccb860a8e8256693f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "62296dde577289265e606e2e2d8a0f9c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "30eca576feceb8b3e6b5787e51ebc448"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "b1abbcbd828bc1b2be86360a768f94db"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "df5445266683f269c0fe1a5f16aa097e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d134a1fdd1832357d6761e670f78588d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "741e14c2828374688228827c938e4e7b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "9f9ea07b9b4c8b2aa665dc65bf4887d9"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "428a27995dff2fa6abfcb589be0bdf9c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "9b7dccea954be1de6888c252c6ec1dac"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e15b7f9fe1f78fac49b0f9106600f530"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1d38173fecc5d434d99d5bcc2098bd2f"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "3ea34e108bf3b728e04a8f943c04f3d0"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "47f5d9d033d0d634720828aaa72010ec"
  },
  {
    "url": "task/2021511.html",
    "revision": "f07c6105eac1a5830c45cce257fa1c80"
  },
  {
    "url": "task/2021514.html",
    "revision": "3baaf41c1fe72025f1847121315dda15"
  },
  {
    "url": "task/2021515.html",
    "revision": "0f41992defed9bc6816769d3c06b109f"
  },
  {
    "url": "task/2021518.html",
    "revision": "ae23d0ca3b06018ded4657555ea459dd"
  },
  {
    "url": "task/2021519.html",
    "revision": "24a6d9652b38196725938cb074ae4043"
  },
  {
    "url": "task/2021520.html",
    "revision": "51faf7eb768d61ccebfd2d2b088bcc9d"
  },
  {
    "url": "task/2021521.html",
    "revision": "87c271368b7ba72b64ebb17e3036b73f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "3ee94e7d2de7ac1e027c1f995b657247"
  },
  {
    "url": "task/2021524.html",
    "revision": "a415fc046a4dff2252b07dca1de5e720"
  },
  {
    "url": "task/2021531.html",
    "revision": "6a76b8f361d257af9723fdaeedecd60a"
  },
  {
    "url": "task/2021628.html",
    "revision": "a8b7c430002f7bb66dc03e60b1c5f712"
  },
  {
    "url": "task/202164.html",
    "revision": "12d55ba798d27632d4210840e8749d61"
  },
  {
    "url": "task/202169.html",
    "revision": "34cf8fddc0beba50a5f1f2047513d047"
  },
  {
    "url": "task/2021717.html",
    "revision": "cac7ab67117a328e9b508a3479716f69"
  },
  {
    "url": "task/2021721.html",
    "revision": "572addca519f099c5366e91b647e0fe5"
  },
  {
    "url": "task/2021722.html",
    "revision": "2bdc6af3fc9b0f69f8192b00cca47ac2"
  },
  {
    "url": "task/2021724.html",
    "revision": "25e1035d773ea86a4439df07d059928b"
  },
  {
    "url": "task/2021725.html",
    "revision": "18f1dad6950b9cd7458f51007146763d"
  },
  {
    "url": "task/202181.html",
    "revision": "aaeb6ea675861d9117918379fdcc9aa4"
  },
  {
    "url": "task/2021811.html",
    "revision": "72d2a9187be4266d238e60030f43ab0b"
  },
  {
    "url": "task/2021812.html",
    "revision": "b364ab05118994d7ee79716e4bf0e389"
  },
  {
    "url": "task/202183.html",
    "revision": "ab3abd295cbccb0f017a9668d98e68e9"
  },
  {
    "url": "task/202187.html",
    "revision": "b9ada277c129054fb5d1c41d02c59799"
  },
  {
    "url": "task/2022218.html",
    "revision": "40a795691f32861e65164c38fbe3e4f7"
  },
  {
    "url": "task/2022219.html",
    "revision": "9b317ec23b05116ecc7ae0b3f9a1f315"
  },
  {
    "url": "task/2022222.html",
    "revision": "75119cdb82e5236340d90c0907863685"
  },
  {
    "url": "task/2022224.html",
    "revision": "36429a4ae46a15d4cc815c9cedd64c88"
  },
  {
    "url": "task/2022225.html",
    "revision": "23c7389cb0f9a366e8ba1871235cb49e"
  },
  {
    "url": "test.html",
    "revision": "a693116037ffa590037d588ae4b972ea"
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
