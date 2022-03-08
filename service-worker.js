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
    "revision": "46d7c669f308c6ac718476d8f1f39603"
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
    "url": "assets/js/48.f2901183.js",
    "revision": "22b1082df0203b507ee67f56c0e6cf8c"
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
    "url": "assets/js/app.310f4816.js",
    "revision": "64cb11439e2f0b1078e8fecbc3325dab"
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
    "revision": "bfdc79f0cb60154f2e621179f56d4288"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "f6250cf86092df692523824bfd13f303"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e680928e610e452660de3a7f980f9564"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f2df6e21230a5c185a764f4eed36b43b"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "f2ff38f8297f9c28a5dc40f748d9d438"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "21923639a67dc23b94de18276588907c"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "ff0b1bac6bd3493a12f20b41a6d36b79"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "3bf7a016d1f4dd957251ba4fdfda849a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "57616e8e54a8b37c641fc0b9cf47bd1f"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "6fde3018b861972c62ab512e1d156ca2"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "088a599720bd4a568415ad80b76f6eef"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "640dbc773a971a0cc612f52b7c363293"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "434046c911527d5cce0ef5f97c77a96d"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "2ec912265a036a0552ea4dc455dc5e05"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "4506d783ae6552a70e0e2fa22e614546"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "5d1ec2f2a905a134d28d827d4f906898"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "85d30f6b53446771bcbd8759bf784c79"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "37c24c4889153d0473ae5e26300c10d9"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "d3f57d32bbedd7e964e54c4c8ac69ee5"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "133d26098f4a28594972097e953acabb"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "c027bdc4a9a215ed3be1d2dabdc49493"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "6b64af06d78613d70dcd04fb8cf87e4c"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "4f0b3d1d3ab9f18f73095615e945871f"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "75dd06284aeab78e37646d9e7e401d39"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "b8ea8b3f71abac9128b5cfd64791ce66"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "4c29d0b7b11eae57b9660e5d4658b07e"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "8a86cd5b4dc0e5c20f5387358a76543e"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "fe4c26aaeddc18198b793388cbbf17d3"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "72a966422ccd3e1e05e668b614f885cb"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "0b510b99890e12f9d80245538cfe7c9f"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "df51181af3aa9aa17b585141a9a325a9"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "3df4b2e4e32fb77d204d208a7673a598"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "042ed708296f14f7ecc77c2a62f6dd13"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "d48a027b0e7bc950582727e427dc6f25"
  },
  {
    "url": "post/plan.html",
    "revision": "12d764268be5b0976349817b92a7fde4"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c4b16b690bbe90bcc6983b9d2096fb42"
  },
  {
    "url": "study/english/words.html",
    "revision": "99c9d6fa09112bfec931f44b24c02a18"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f201c358bc99e3632fc21d3e9c447563"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "83f359ab4729072189015816ddbb99fb"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a5957531f783999d2c04e85c9df1bf1e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "74a60cb30c95b4b8b7645b6e4e07bc91"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e62c2d73f8f5b5190059354b43375cf1"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "123ce6d5bb313a00d69a0de1dcf0d5c4"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0fd852514058935b704d2a6729302d4d"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "744d93db2b8d86d16f56777f7328acf5"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "6f95b8db32149ba99b988679f127648f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "8543afb6861cfb451c33288a50814dfe"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "645ed4dfd6fccc54c4b3188fb89338f9"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "a05d765ba6b2b1a17bbe6fef74599c08"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6f0f3581108e4c7248035726665b675e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "9d377d294f4ad0132c2d276a9ff6c6fb"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1b2b9c615f9855fcd2a8ea3744777b92"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d9690771eb4dec51fca6705f177b02ca"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ea2159e48afc16387de883b1d0489a1c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "f497d1da37066c6cb3714595803d84cc"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "7bd22898290965b367fa91e39c32f3bf"
  },
  {
    "url": "task/2021511.html",
    "revision": "39bc1ed812cb3503817b3724fe21c4ba"
  },
  {
    "url": "task/2021514.html",
    "revision": "38633d8e2146c8df09ac3b36c6768fa8"
  },
  {
    "url": "task/2021515.html",
    "revision": "0fa02be1a058e7032e7b42d64f2b39e8"
  },
  {
    "url": "task/2021518.html",
    "revision": "eb62e1f7ce7c086263cff5ea07c866c4"
  },
  {
    "url": "task/2021519.html",
    "revision": "b25145be03c41c6a5df2df065af260bb"
  },
  {
    "url": "task/2021520.html",
    "revision": "8f279728ac48e31a3cfa119c57004d96"
  },
  {
    "url": "task/2021521.html",
    "revision": "112a3e2aeae507babc5ff39c20157434"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "260400c120724ca259e7a515ec2ec89a"
  },
  {
    "url": "task/2021524.html",
    "revision": "9b3c1cb8f7214b77093f3f71b5af5eb3"
  },
  {
    "url": "task/2021531.html",
    "revision": "b81ca265d6a4eedb6a37f0e5f9594845"
  },
  {
    "url": "task/2021628.html",
    "revision": "e5ba79c93e4966b358f59e0f3fc272b2"
  },
  {
    "url": "task/202164.html",
    "revision": "7e2203e4611e2ac92a5b5640b8ea30e9"
  },
  {
    "url": "task/202169.html",
    "revision": "329e8b59b88de604675b214f06fa3bf3"
  },
  {
    "url": "task/2021717.html",
    "revision": "ce068160ed75640a5f10b0bd587b55b3"
  },
  {
    "url": "task/2021721.html",
    "revision": "6ff51ada6e09efaa5625f4e7d34b7a76"
  },
  {
    "url": "task/2021722.html",
    "revision": "9b2106acd7b2583f9b0cd0a0847c47a1"
  },
  {
    "url": "task/2021724.html",
    "revision": "89c0575525ad69bbd8236eb1211cc6ac"
  },
  {
    "url": "task/2021725.html",
    "revision": "d50ce2591adb90b6f39a6cf5e58d87e9"
  },
  {
    "url": "task/202181.html",
    "revision": "7b321b63ef929a46665d6eb304bb0111"
  },
  {
    "url": "task/2021811.html",
    "revision": "875e6bca39d81360d36278432b3df64a"
  },
  {
    "url": "task/2021812.html",
    "revision": "83e2b084d4646d2dd75162e326e44a54"
  },
  {
    "url": "task/202183.html",
    "revision": "056994e395cf5c7086cc1be2093704dd"
  },
  {
    "url": "task/202187.html",
    "revision": "0fbfeb350c7cbcc274c2555e77cf0769"
  },
  {
    "url": "task/2022218.html",
    "revision": "a3414b351900d6a3b964ee71c5a33f85"
  },
  {
    "url": "task/2022219.html",
    "revision": "4ff8ae05437db01418c88793498d043c"
  },
  {
    "url": "task/2022222.html",
    "revision": "ed89bdad6300de74de0e00361dfea8b9"
  },
  {
    "url": "task/2022224.html",
    "revision": "412ce09cef3e926b2fbcd8c2e95f68a3"
  },
  {
    "url": "task/2022225.html",
    "revision": "1c1725746b97890da8dfff6b182ed415"
  },
  {
    "url": "test.html",
    "revision": "fc7f27cfaf927e83e7fdb83024913396"
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
