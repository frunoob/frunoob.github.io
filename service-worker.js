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
    "revision": "dbbb4adf6709a05e134bfb7e427dba8e"
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
    "url": "assets/js/48.424b6514.js",
    "revision": "338fb7a2894f13d99f6540c43e1c764b"
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
    "url": "assets/js/app.08bab5bc.js",
    "revision": "80094900d01634476117e9db284b9169"
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
    "revision": "4c2b9aad0ac1b18ba25bad3cd37f7f9e"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "3f57b8123aa509df32ee491b2fffb4b2"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "3aff78a50cabf5fb0a9f67b1958af1e4"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f8fe99eb9c0e3d7b5bb15774908a6593"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "7c6232d3d69f72c39a597ecf80348f98"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "fa1d24e0f884ace05678d6197fa23495"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "83bc78b2ef4ec58bbaa42a09cb14c337"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "2c3850497c4fe8fa7daf3d7ec64f4656"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "a14534b4bacad4769b6a6ce4c892e04e"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "bb2203b11a1ba533ae12b881e72a27ce"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "a79529cc287f25e41290bbdfa952e78e"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "3a7573f2d79f88bab66575191868ee2b"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "9a9e30c0d8fed458d709c007295f00b4"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "83b8f3a8093c22049e8d34b279242414"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "0a2e1073101c3a634e910bca79a607e3"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "f866b023b10e806a13e038b89867317f"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "dd66867ffee6259e8d6695073245c9be"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "51d3ff940045af22c199f89769efdddf"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "dd54b61a5499bc36304d88b009a11e5a"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "92a1eddefe26c713e0d00a9a26c49510"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "25ad83cb399812a41c2689a2b7c640f6"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "ab2500ec839eaf9c4ebc3e9d06c43d7e"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "2a53503bb083013ab097dcaab3704bbf"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "e56b76a82d0c93004585c5ec41705283"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "865a49f1c9f1e9d46d13834a7d0d4715"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "4a8e2618586d4172a13cb34094264ea2"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "017fc481415451ce546aa299c50d6913"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "95688a0c5e1828945f545f0327c739b7"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "f3b2ce8870b8713d264ccf08b96d1984"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "4bc103af9643b2d2f501be46509c2445"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "f0bee0f307939fc0248b9d5ab6c19719"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "cf92802195c5bdae4fe6e2193f2311ab"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "58a34be60416e3700872f8624fc967df"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "52fab6f3e4959adc9b3f76e8c3592168"
  },
  {
    "url": "post/plan.html",
    "revision": "699cf6cdfeac7b8d718af270d2fc82ae"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "0efc791197da5bd62a1e7f56d9d7f13a"
  },
  {
    "url": "study/english/words.html",
    "revision": "f9a5ed89299c8cd53cedea0ff25c6ae0"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "3d81e485ab9162c1e7058e6fbd70215d"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "81fbf8d6d0ee2213956bab40e2752daa"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f67c05b2df7ab133bdeff054968d0bb4"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7bd7066b8809a8c433981c5e34312af1"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "f3635ee350dced772f233104faa1d7f5"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "c5f53e02e4db7f6a70d698d11de25e35"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "cd4a9eea29fafeedd7e8873b2915afe0"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9472bd83aeda0479c461e80f8e86e029"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "9d847ba86f19bd131de9038f17b056ae"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f6a10fdfd606f5c816d0906c3d04048b"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "123f1766f20d263ecd4ba2cf69a9d328"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9ea3231851f7b3c692570c625e4eaf21"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5d2517cbad13bb47cbd2bd44c2fd98b0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3f8e995df07d953ef49b7ddf1d0ca781"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b92448928c94b242b4673fd888297c74"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "ac89c7fd650d17b68f12dcef6f413d2c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b0e42c5a7d933abb56dc8a8c5b0a8c20"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "47c1f263f2487c28adf7f373d0129170"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d268717887466e9994dab86fa117bfca"
  },
  {
    "url": "task/2021511.html",
    "revision": "aa70ed9a602f886895169003846110fa"
  },
  {
    "url": "task/2021514.html",
    "revision": "427f814ba1493235aa8dab2ad61c93f2"
  },
  {
    "url": "task/2021515.html",
    "revision": "698024520b65b88acafa9d9774de2265"
  },
  {
    "url": "task/2021518.html",
    "revision": "52abf5548098246ea653823f11c7a312"
  },
  {
    "url": "task/2021519.html",
    "revision": "dfc2d6492ebccc581220b31c4d4b16dc"
  },
  {
    "url": "task/2021520.html",
    "revision": "a97a8c5ca03a52f621e05b6051be83b4"
  },
  {
    "url": "task/2021521.html",
    "revision": "e9a5acf305b929ff95d51973b44f9dac"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c245570648ddef02c83b138995b19023"
  },
  {
    "url": "task/2021524.html",
    "revision": "51916ba669c4fbb79277bb97c1ae332e"
  },
  {
    "url": "task/2021531.html",
    "revision": "25cc49647cef78b5acc43f553b73080c"
  },
  {
    "url": "task/2021628.html",
    "revision": "c39f0ecd489adad28b9f64788d01a6c8"
  },
  {
    "url": "task/202164.html",
    "revision": "5c7498566e0bf697cc76a27e2d8ab9d0"
  },
  {
    "url": "task/202169.html",
    "revision": "faa49bfd08b474b6734d1005b486798d"
  },
  {
    "url": "task/2021717.html",
    "revision": "e344f272693851a0341f8f38ce0b1a97"
  },
  {
    "url": "task/2021721.html",
    "revision": "da755d3e045c4b9f578b85ff8b39590a"
  },
  {
    "url": "task/2021722.html",
    "revision": "be900f5d578486d9fc1dde7cbab71318"
  },
  {
    "url": "task/2021724.html",
    "revision": "2213fc20256879d7f1f5d5550701639b"
  },
  {
    "url": "task/2021725.html",
    "revision": "5ddda465e53f665090a0642c5347f4c5"
  },
  {
    "url": "task/202181.html",
    "revision": "9feb165e48f3dac392a1129830d197b6"
  },
  {
    "url": "task/2021811.html",
    "revision": "c398804fe4311fbc81b66556fed03b3b"
  },
  {
    "url": "task/2021812.html",
    "revision": "5c103eb480e5a7686ce9f53b100f4f0b"
  },
  {
    "url": "task/202183.html",
    "revision": "6176c45212b6d50495b40b08f19eed45"
  },
  {
    "url": "task/202187.html",
    "revision": "243bb52cfc22a64022d697ea9716ff67"
  },
  {
    "url": "task/2022218.html",
    "revision": "dc284e18d4bb54a27befdb92cb560c56"
  },
  {
    "url": "task/2022219.html",
    "revision": "bd57847937454abce5480b001e11fa76"
  },
  {
    "url": "task/2022222.html",
    "revision": "e90935607423e9d74b485afd47e9cbc8"
  },
  {
    "url": "task/2022224.html",
    "revision": "9d36e0274029460d5ff84d1831b09821"
  },
  {
    "url": "task/2022225.html",
    "revision": "181d0bc26a5f56e4c8de7f4946eebf06"
  },
  {
    "url": "test.html",
    "revision": "969a90e43ec4e6a73b28d9d42f4c0333"
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
