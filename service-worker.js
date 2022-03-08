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
    "revision": "1d24007209a2797d32e63d46f4d53304"
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
    "url": "assets/js/45.77850456.js",
    "revision": "0afff09ce3845274f353309a9cc654b2"
  },
  {
    "url": "assets/js/46.351f7dc1.js",
    "revision": "55d6011a2f3da12b239303ba6aeea4a9"
  },
  {
    "url": "assets/js/47.a3c3c581.js",
    "revision": "34077572f1ad2bc753298c9ab0e29bb2"
  },
  {
    "url": "assets/js/48.9dd21727.js",
    "revision": "a0b47cb789ebd8b0b93469ca39919aa1"
  },
  {
    "url": "assets/js/49.873609f3.js",
    "revision": "3ac697ca3601dd06ce2cf2319e980724"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.4b440a71.js",
    "revision": "59019e3705d41f199d15353fbde7ce97"
  },
  {
    "url": "assets/js/51.27d3de60.js",
    "revision": "d9b873d539e8f1dc6dd23b97bc281c25"
  },
  {
    "url": "assets/js/52.ecf398dc.js",
    "revision": "6710140dbee3e605fc333dec9449993a"
  },
  {
    "url": "assets/js/53.e12ebc07.js",
    "revision": "aac02eb8d27410214be8cc07f30b01be"
  },
  {
    "url": "assets/js/54.2ae39728.js",
    "revision": "d754574d8c7f32eeed5c0127a36fcc43"
  },
  {
    "url": "assets/js/55.b9afedfd.js",
    "revision": "cf31126f84e1dfb32819057a3e7af4df"
  },
  {
    "url": "assets/js/56.e8343817.js",
    "revision": "e85a7c2bc243d813560fe405ec4d3119"
  },
  {
    "url": "assets/js/57.1af4dc89.js",
    "revision": "eeb66ae7bdbeffc88c19fcc49c9aa372"
  },
  {
    "url": "assets/js/58.142b6034.js",
    "revision": "767e473d8b5097cf4bb094d75ce3392a"
  },
  {
    "url": "assets/js/59.1ed3d8c9.js",
    "revision": "fa2db7e5866bc8bc03ad4fb78fb8f197"
  },
  {
    "url": "assets/js/6.5e1bc5dd.js",
    "revision": "d1ad75ff6013ba08ef320c0cdb22c5c2"
  },
  {
    "url": "assets/js/60.05888708.js",
    "revision": "e3bc29109019800bdcd203a4b93f009c"
  },
  {
    "url": "assets/js/61.0e85bdec.js",
    "revision": "5143fedda4b5c4aa03a70263ee433e39"
  },
  {
    "url": "assets/js/62.6dcdde6a.js",
    "revision": "4fca1207178a4b5248ce6191875e6581"
  },
  {
    "url": "assets/js/63.15cf1565.js",
    "revision": "c4bd7f89a58340ffe40ba3e8d8e4f931"
  },
  {
    "url": "assets/js/64.a9e5a610.js",
    "revision": "f025d15cb280aa39e2e579d68074d25c"
  },
  {
    "url": "assets/js/65.b979d32f.js",
    "revision": "fad7bb84c56f319e4ef2efa044c2ec75"
  },
  {
    "url": "assets/js/66.8310bf7c.js",
    "revision": "9e297be32f3ec62cfcf5e40d663f224a"
  },
  {
    "url": "assets/js/67.1aa59f8a.js",
    "revision": "bc7e158681d5a1a122bbb08774729577"
  },
  {
    "url": "assets/js/68.7fa9b477.js",
    "revision": "1727c939257ab5bac72f534a29f55f20"
  },
  {
    "url": "assets/js/69.10bc5c14.js",
    "revision": "8a2c3d2da7d55bd6c6bfa4320f2aa487"
  },
  {
    "url": "assets/js/7.5b0c6e4b.js",
    "revision": "e3495a3baab91db4374f17e72a4fc087"
  },
  {
    "url": "assets/js/70.2e0bab1f.js",
    "revision": "9f96f41480cf0d37fe280af65f5c85c4"
  },
  {
    "url": "assets/js/71.6b5c1ff4.js",
    "revision": "4b02234a88589942803a63e2a0575180"
  },
  {
    "url": "assets/js/72.a7b5ff4d.js",
    "revision": "9549302f8c5766ea4f21ab112fbe854a"
  },
  {
    "url": "assets/js/73.a23fb938.js",
    "revision": "d73cb698448aa8144a1c179d0543d5d8"
  },
  {
    "url": "assets/js/74.fb6ecf5a.js",
    "revision": "fad504eba8bac0db13b3048afe943e9b"
  },
  {
    "url": "assets/js/75.1d6717d0.js",
    "revision": "9cddaf2f07a20b6a20e126cba4d7e3b4"
  },
  {
    "url": "assets/js/76.7bd419df.js",
    "revision": "afae7a0965daccd5a97f0cc2f81b868c"
  },
  {
    "url": "assets/js/77.1a8fcd88.js",
    "revision": "613e6ef3e6026bd9d87889f130d8f88e"
  },
  {
    "url": "assets/js/78.ba48fd03.js",
    "revision": "14ef8ea23a0f9aabf5849f0845e21220"
  },
  {
    "url": "assets/js/79.00c92078.js",
    "revision": "9641063ee73cb5fadb40e2622491b755"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.6db84183.js",
    "revision": "a91d961e4845d62fa15d5b5593739775"
  },
  {
    "url": "assets/js/81.3f890329.js",
    "revision": "b784ff974d10ccd9476069563394c30d"
  },
  {
    "url": "assets/js/82.41ed73bc.js",
    "revision": "06729eea6415642c1cc3f01158ca511d"
  },
  {
    "url": "assets/js/83.ab4c4424.js",
    "revision": "e91c7e7f4c906409e0a90b7320b9a5f0"
  },
  {
    "url": "assets/js/84.55d480e7.js",
    "revision": "1dd2517eaf39cb8da48085e0a78fe2ba"
  },
  {
    "url": "assets/js/85.487f7456.js",
    "revision": "ce793464ae6971038d5baa2d4dfa8c74"
  },
  {
    "url": "assets/js/86.a094e748.js",
    "revision": "59bdbaaec2c552f38217a306c2d8416d"
  },
  {
    "url": "assets/js/87.8a232e79.js",
    "revision": "fc558938b0f76ebce0ca0e33042ac349"
  },
  {
    "url": "assets/js/88.2bc58455.js",
    "revision": "b47a149c2c894718f12e9369190bd11b"
  },
  {
    "url": "assets/js/89.d6d6abfa.js",
    "revision": "7f68867ac0504d3b1464af972b490b15"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.49c5ec07.js",
    "revision": "54ef65b6ffb1915967acfbed872177fc"
  },
  {
    "url": "assets/js/91.2384e7a5.js",
    "revision": "3317e8255a90e7abcad9e78f618f479c"
  },
  {
    "url": "assets/js/92.d3b478f4.js",
    "revision": "f3e9f5535cdbee9d3c7ba5ad493ccae2"
  },
  {
    "url": "assets/js/93.1e9c2c29.js",
    "revision": "5a9e573ad3edfa2073d97743113e39e8"
  },
  {
    "url": "assets/js/94.f06da3ea.js",
    "revision": "ff1ecf4604f3a1cfa0404981437fd19f"
  },
  {
    "url": "assets/js/95.2512954f.js",
    "revision": "975a314e923a3cdf0d369b31f9fcacdd"
  },
  {
    "url": "assets/js/96.9634d970.js",
    "revision": "90e06f83a435ac039882cc152ac366c6"
  },
  {
    "url": "assets/js/97.6014da8b.js",
    "revision": "ebe2f44d2c5036a561ebb3bf84418591"
  },
  {
    "url": "assets/js/98.03be6944.js",
    "revision": "22e42ad63d7c2f56451a68c0ead7d64c"
  },
  {
    "url": "assets/js/99.401d411c.js",
    "revision": "8385e2b6b07dd981c2d89a5f64ff1dfe"
  },
  {
    "url": "assets/js/app.6a699227.js",
    "revision": "8d780696b1dcba148722af8e0d330b71"
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
    "revision": "ad1b63858a46411d7c8bd6de62528223"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "d1f45e13dce5398b853837db506daa73"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0033c335a80fb83bac604800bd59323b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "365202a7b3339e1c3d22f89d3bbda1c2"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "e3bc980359f7cb04205e8c150d08b903"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "87db103c4307e93ff717bc0d006c0a7e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d1d3785720f231c97c6805d439dbf495"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "af6fa74c2f339d671fdffb371597fc1a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "8eba153ac61c0d03ee77b8ec1ee15052"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a1524a64cca279e636ccbebeee0c940c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "6b95ee677b08b7186fcc34b56deace6e"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "964f83e61895a65a3a3af836896105c9"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "a049aced0bdbb429a6846f2ec9d2c67f"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "d703647a814c7acd47ca5378359aa180"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a52502b95bf91a7e61cedf96c0e3f218"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "abe722759bbe4f133af4d6ce1db2f31d"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "09678b5fcd532c14e01794b4111caa32"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "4970e1ecb413bc4899aec403d28bfb07"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "e29fc9248533f1f29b31d5c91c108e28"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "06ea97f5c8d2dc4aa5a0531a0acfd257"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "57a28b4c84707236268b00eca62c6704"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "bd2dea2e533e1e62f29878ef23d15344"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "c603390764e8e21db98f17bb5f894406"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "1ec0dba1e69f504c5c3851a08e1b87b0"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "ea66e0c10df06b72bb137b6bd190752c"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "4e0c264369524aec603c74a259a82513"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "93aafafb3b2267bccea4c09a4780abb2"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "44e31cbbe5fe214307e834fcee994850"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "a6660043ccf50c5d8ded624d1537bb23"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "5391342d560a3d40a83a298e84dd2902"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "acf22ebd3f5a6169c821be66363ed895"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "b6cfaae1eee1ae4fe379d701a007dc74"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "af0a5b8f966bec48c943df74cb5a25de"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "06ab77647e6f05a663d417fcfacc4a57"
  },
  {
    "url": "post/plan.html",
    "revision": "2e923b07232bd6f05501e37ec62d2cd2"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "29577f141c7516bc411540065cd77aa5"
  },
  {
    "url": "study/english/words.html",
    "revision": "16a1b2ee2f39e19a9d3576080a79061d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "205ada09472b723cab7e5568129c950f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5664efbda5c4889266a3e005d461f38a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "fda02f6def49fbe510d28f47a29cef5d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "60f9ac92618b8d25ad66ece1c0e636b7"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "1ec559aa2253ac3dc30d0c866764cb89"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "8e0595ea71b2950febadba3cc7062aee"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "98a4cd54d2dd0f483d534285bf303dd7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "33539c52a8809c6cc209b3f463f1da44"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8cdfc525ec83328340ce792340240074"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "1cf12623e4548a941cc0beddbe4af0e6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2281298d543e383778dfd29160b3b8af"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "16219fee48283ac740f671097eb4eb0a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "bab14ee2517866ac0f16fd50397009ed"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "78fba9bdf3a6dc9f95cf275c37cbbb27"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "0b8af81ad29c3d968bbb4b1782184db8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "a419b673d97e01830a92c1961a81af9b"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "7861f530cdf1e64e6a1d14fb8e25665f"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "22c60a30c65624f9984e03c9f8f4f500"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "bfea783b7e2a50bef0ea865d189f0f4d"
  },
  {
    "url": "task/2021511.html",
    "revision": "b993f585f319ed3e2521bb6eb7bea8de"
  },
  {
    "url": "task/2021514.html",
    "revision": "1c136a97b1a52c2d4d94c18a81904011"
  },
  {
    "url": "task/2021515.html",
    "revision": "964224c5d2864d771301db09dcb15803"
  },
  {
    "url": "task/2021518.html",
    "revision": "c5f1ab68fc9c1aba4e07f5d270866da3"
  },
  {
    "url": "task/2021519.html",
    "revision": "9e5d78119ecdc803574986fe269cb0b3"
  },
  {
    "url": "task/2021520.html",
    "revision": "a788ad7cf26689407822207aa256d51f"
  },
  {
    "url": "task/2021521.html",
    "revision": "cb84919384699f7680a9e031dd8bd165"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5d08b44fb5f209160bf27cca1b78ac53"
  },
  {
    "url": "task/2021524.html",
    "revision": "1700fe821a5edf8048ce53df456bb330"
  },
  {
    "url": "task/2021531.html",
    "revision": "dabc838c0d3e9ce737c8bdeb1b1ce24c"
  },
  {
    "url": "task/2021628.html",
    "revision": "1003e6a02a51698047cb5d180495fd91"
  },
  {
    "url": "task/202164.html",
    "revision": "6fd0558b4358d619e96ae1cc24df2ee3"
  },
  {
    "url": "task/202169.html",
    "revision": "e9d2053cbd4be45488828a5eb6909023"
  },
  {
    "url": "task/2021717.html",
    "revision": "f4c9cfc987a550868be2fb31966000ac"
  },
  {
    "url": "task/2021721.html",
    "revision": "0d3f9a3bde1b1e0fda4e8d17cf464bec"
  },
  {
    "url": "task/2021722.html",
    "revision": "f5827e58710ab9af7db10665adbc8efb"
  },
  {
    "url": "task/2021724.html",
    "revision": "30d7a988cc92861a1ea9a9611b9e0bcf"
  },
  {
    "url": "task/2021725.html",
    "revision": "2ef76ecdc9274da96bd08262a22e9576"
  },
  {
    "url": "task/202181.html",
    "revision": "d4acf10a24d946c3e433a5e0e3c294f5"
  },
  {
    "url": "task/2021811.html",
    "revision": "db9c34b5f6d756f05077f36a04c534f3"
  },
  {
    "url": "task/2021812.html",
    "revision": "ca34dacea95dad2554a643650ffebe32"
  },
  {
    "url": "task/202183.html",
    "revision": "e26bc6295313801366f2a86a6c429677"
  },
  {
    "url": "task/202187.html",
    "revision": "460b5d97c09c437425f6efd2147b41a2"
  },
  {
    "url": "task/2022218.html",
    "revision": "972271e9383199b6c5e21b0c838a316b"
  },
  {
    "url": "task/2022219.html",
    "revision": "d2ca34286c669ba91e2bd3f64d33a20c"
  },
  {
    "url": "task/2022222.html",
    "revision": "eb4918736a8197f10bc62209eb7934c5"
  },
  {
    "url": "task/2022224.html",
    "revision": "1cafea5ac407c0313e621e36baf6b1b4"
  },
  {
    "url": "task/2022225.html",
    "revision": "fa78b556c82ab7c27e2b9481b8678a52"
  },
  {
    "url": "test.html",
    "revision": "17ef3bf5224a594ba2d9375012cda2c7"
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
