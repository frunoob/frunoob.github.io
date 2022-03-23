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
    "revision": "03999254209359d15a282dee6d7bef49"
  },
  {
    "url": "admin.html",
    "revision": "6e758c0b3cd828529e4e02122fcd7d13"
  },
  {
    "url": "assets/css/0.styles.6af54cec.css",
    "revision": "d6d1cd8b717b2ded5a5d3e0aa86812d7"
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
    "url": "assets/js/10.4c83ac67.js",
    "revision": "88f3615d65e700ce83bd90e7bd943442"
  },
  {
    "url": "assets/js/100.00f6b4e1.js",
    "revision": "de96780b968e75718db9a89bdeab8eb3"
  },
  {
    "url": "assets/js/101.546b6cd4.js",
    "revision": "7a7ef74510e00d742e2c6bfa14804248"
  },
  {
    "url": "assets/js/102.55ca7077.js",
    "revision": "f7689b22e615d27670f2d7d66053c288"
  },
  {
    "url": "assets/js/103.bd932978.js",
    "revision": "b02540d78b67876e82d9ccc7e138ce57"
  },
  {
    "url": "assets/js/104.0a2649fd.js",
    "revision": "1ac0e881419f603c094c903f77c6b36b"
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
    "url": "assets/js/14.fb9cc0ef.js",
    "revision": "e1de31d90ad983f39975808bc3f0796f"
  },
  {
    "url": "assets/js/15.bb5a3135.js",
    "revision": "cbf7bae6a306ed9979ec70260350eb60"
  },
  {
    "url": "assets/js/16.711ac59d.js",
    "revision": "1221ea0367acb5e90778fdb1a79042b2"
  },
  {
    "url": "assets/js/17.304e4293.js",
    "revision": "748783037aeb672641613351e1d14020"
  },
  {
    "url": "assets/js/18.3f727eba.js",
    "revision": "8c3a5371389258c0a76720e4baa73967"
  },
  {
    "url": "assets/js/19.8e9a0d60.js",
    "revision": "973f0ab2dbf54ebbd493466393c02f1a"
  },
  {
    "url": "assets/js/2.13b0f1ec.js",
    "revision": "d325007966b7000c32085b27c7630035"
  },
  {
    "url": "assets/js/20.2eb8ae01.js",
    "revision": "46bf94a41672a32c043ad7f7c2dbcbea"
  },
  {
    "url": "assets/js/21.4ebbde39.js",
    "revision": "c8e9ae226fe221479488278467d98c0e"
  },
  {
    "url": "assets/js/22.8aa9131b.js",
    "revision": "860253a74dae084b30662994dd94cc59"
  },
  {
    "url": "assets/js/23.eca284aa.js",
    "revision": "ff6aca433f72d4697e366550a8357cba"
  },
  {
    "url": "assets/js/24.6148bc49.js",
    "revision": "444c5c67b0fa2622b40d962ddb1afa58"
  },
  {
    "url": "assets/js/25.18bc715c.js",
    "revision": "679995a8cf80ec8245fc41b1a7135ff7"
  },
  {
    "url": "assets/js/26.9b88c937.js",
    "revision": "4ab4d11a0d99e58508525863dd7da018"
  },
  {
    "url": "assets/js/27.1e353728.js",
    "revision": "cfd4e0b244777a86b7ec976d4be5078c"
  },
  {
    "url": "assets/js/28.0dea2477.js",
    "revision": "26f68263d87008b9a13f40cf2b15fc27"
  },
  {
    "url": "assets/js/29.d1e8126c.js",
    "revision": "d32d365984118d9799552c308749e474"
  },
  {
    "url": "assets/js/3.9a2ec5a7.js",
    "revision": "8bfecd5ae78b5a0f79a4de02de6039ec"
  },
  {
    "url": "assets/js/30.f755a9c7.js",
    "revision": "de65a930189f4d0183b992c04b228f58"
  },
  {
    "url": "assets/js/31.df77e1e3.js",
    "revision": "c40880d18b25eec545dcd2fee6bb6e6d"
  },
  {
    "url": "assets/js/32.f9979d58.js",
    "revision": "1df2cf55584533f8093c55344cff97bf"
  },
  {
    "url": "assets/js/33.3aa0d9ed.js",
    "revision": "fab03dcde5ad4bb3880e44cf7b1242a7"
  },
  {
    "url": "assets/js/34.6a397fd4.js",
    "revision": "a0f7788077c5957475b5656938f4c681"
  },
  {
    "url": "assets/js/35.5a1f0875.js",
    "revision": "017129c9805eb631394194581bd25648"
  },
  {
    "url": "assets/js/36.f7148629.js",
    "revision": "a3e7c7f20d3ce28383bfbcb0928ca0e1"
  },
  {
    "url": "assets/js/37.a8428245.js",
    "revision": "ebe6126bbb501cfe576f4d12cccd79e8"
  },
  {
    "url": "assets/js/38.6fc8f913.js",
    "revision": "9e3d9124e99358994f08eb285323b36c"
  },
  {
    "url": "assets/js/39.1fadba48.js",
    "revision": "b9f8e1153685a85fdff9f35965d485f2"
  },
  {
    "url": "assets/js/4.ea027014.js",
    "revision": "84722b45626dc6122e296a933487ab53"
  },
  {
    "url": "assets/js/40.52ca44df.js",
    "revision": "cf59b9fed84f76859f5e4ad209ddff2e"
  },
  {
    "url": "assets/js/41.78457eaf.js",
    "revision": "720ab4f5463fa52dbe795de3c54e0317"
  },
  {
    "url": "assets/js/42.1800e5d2.js",
    "revision": "68bb9553679cf72233a58cf172691ad1"
  },
  {
    "url": "assets/js/43.6ee3ad4f.js",
    "revision": "8003beb6d0dbaee5aebc106adfbf3b9e"
  },
  {
    "url": "assets/js/44.d24f9567.js",
    "revision": "7a3216fbfd7cd2dad17eb2f3bdd6a70b"
  },
  {
    "url": "assets/js/45.4ff02edb.js",
    "revision": "66e44589e2a49906dbe7407b9bf85aae"
  },
  {
    "url": "assets/js/46.f9f0a1b9.js",
    "revision": "1151cc70e554def4c2854f141263451b"
  },
  {
    "url": "assets/js/47.225891c6.js",
    "revision": "92e07d2d811c6aa8a04a77abdb0b2596"
  },
  {
    "url": "assets/js/48.86cce4f4.js",
    "revision": "8ed93f50db726aedae0faac67ab72923"
  },
  {
    "url": "assets/js/49.c0a50dce.js",
    "revision": "133cbd00624889281b77891516595c55"
  },
  {
    "url": "assets/js/5.99342248.js",
    "revision": "2a4337206061790a10fc47de6198be84"
  },
  {
    "url": "assets/js/50.75b76f23.js",
    "revision": "09c114859bf76ee2934095fd5134e024"
  },
  {
    "url": "assets/js/51.40b01c93.js",
    "revision": "bf7aea3edf8e6a849fd1ab7339c3bed2"
  },
  {
    "url": "assets/js/52.929c1db3.js",
    "revision": "749a5d5872d9d38325eb1dd2480fe7f3"
  },
  {
    "url": "assets/js/53.c9eff6df.js",
    "revision": "93e322bdf1cc37d0a35cab578dc2e426"
  },
  {
    "url": "assets/js/54.b25a7bff.js",
    "revision": "7e0a7841249a89c48a2ddba24b24be20"
  },
  {
    "url": "assets/js/55.51285df5.js",
    "revision": "0ed3e190118c8a66191c710f904b1bfb"
  },
  {
    "url": "assets/js/56.80e61e4c.js",
    "revision": "6fa1df147b5b5efb7153f4555e4da42f"
  },
  {
    "url": "assets/js/57.64ce51f4.js",
    "revision": "230c769bc2995c7e8ea26848537fb838"
  },
  {
    "url": "assets/js/58.5437374a.js",
    "revision": "d5478af0bcdc82874358da71354c6f24"
  },
  {
    "url": "assets/js/59.fdea5806.js",
    "revision": "aca3216a31b623ef375a2ecdb006b98e"
  },
  {
    "url": "assets/js/6.194eca8e.js",
    "revision": "94ef69bfbee1722ec0b21fda75baa614"
  },
  {
    "url": "assets/js/60.0572ae89.js",
    "revision": "d5e901d1e5b60cef46af8ebde558053b"
  },
  {
    "url": "assets/js/61.7fe5536b.js",
    "revision": "cb25f433b63bee18b60f9d0004c70138"
  },
  {
    "url": "assets/js/62.9ebb22b7.js",
    "revision": "03773766a42cce434fa5102ddf0e9091"
  },
  {
    "url": "assets/js/63.f462c674.js",
    "revision": "9a6190f3c749955fcd5fa69dc9b057d6"
  },
  {
    "url": "assets/js/64.5bd76d99.js",
    "revision": "1a72d9819aed92fd42affb2a6b162878"
  },
  {
    "url": "assets/js/65.5d440589.js",
    "revision": "141c4866df522cb0f87492678ee7ad35"
  },
  {
    "url": "assets/js/66.775847fd.js",
    "revision": "ef38b9807baa0c2428d405e17b91b295"
  },
  {
    "url": "assets/js/67.87b784e2.js",
    "revision": "e07d1f38e6f6832482372b49fbe97a3e"
  },
  {
    "url": "assets/js/68.85312d6c.js",
    "revision": "a657d2d295844d1959634b3c182b7787"
  },
  {
    "url": "assets/js/69.794728c3.js",
    "revision": "4f7a1bd57b858e44d5a44b8034903a6e"
  },
  {
    "url": "assets/js/7.0b5e9573.js",
    "revision": "f891b482d3206e8c5b600af55d0a3ed1"
  },
  {
    "url": "assets/js/70.83e1a67e.js",
    "revision": "d9e9d0658d48ee17f5b95f7a22ab62f6"
  },
  {
    "url": "assets/js/71.94ea0206.js",
    "revision": "c9f5ef4d88c1e818c11a8cbc8c422027"
  },
  {
    "url": "assets/js/72.b062677c.js",
    "revision": "6b2fe351a84da415d24f0b3fa9b91d41"
  },
  {
    "url": "assets/js/73.ce1408ca.js",
    "revision": "8736e78ad62cfeae6d337b2417bd10a0"
  },
  {
    "url": "assets/js/74.09719ff0.js",
    "revision": "2de7094609e9821cd7f2378fbc6ed64a"
  },
  {
    "url": "assets/js/75.9bbba634.js",
    "revision": "36ed299942bd6366a9c59ea77362c8dd"
  },
  {
    "url": "assets/js/76.3414343f.js",
    "revision": "c4710cb73c18956f34fe7c095b4de1b3"
  },
  {
    "url": "assets/js/77.741b912f.js",
    "revision": "8b3d69adfdbe41c667061b9d3d6d28cb"
  },
  {
    "url": "assets/js/78.18c8ea15.js",
    "revision": "627320e6957cc8309c25a1e6138ecf30"
  },
  {
    "url": "assets/js/79.d4b7a990.js",
    "revision": "58ab407e078f3ae7ed512543380a3b84"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.10f6d2a1.js",
    "revision": "b9d580fc8c98042143d7b70c1b9d179d"
  },
  {
    "url": "assets/js/81.0aa878b1.js",
    "revision": "447a1e62581368ef3601cd5f445eee8a"
  },
  {
    "url": "assets/js/82.b3aeb2f2.js",
    "revision": "a7714ed0e0e8bd64bf89b08597fcdd6d"
  },
  {
    "url": "assets/js/83.ba64adb3.js",
    "revision": "98b637667989e7d4e6c66eb087af4ad5"
  },
  {
    "url": "assets/js/84.c8c40cd5.js",
    "revision": "bc65302960bef8836b8c836fa7eea452"
  },
  {
    "url": "assets/js/85.91c58f6e.js",
    "revision": "1d62c7c12696c00ab420a2765b4d2e37"
  },
  {
    "url": "assets/js/86.d6e28f96.js",
    "revision": "e6d6e7b125ad72f2e38784ee920ec9cf"
  },
  {
    "url": "assets/js/87.4b76eb7a.js",
    "revision": "d14184713aba9ae394a69c0c5685e958"
  },
  {
    "url": "assets/js/88.aba5ff31.js",
    "revision": "ba3c7f793a81bbd86029265a46054427"
  },
  {
    "url": "assets/js/89.374a0742.js",
    "revision": "e6225b493544c3237d3b8f4457470757"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.c9841222.js",
    "revision": "35692d2d6b7a40db895f3f4d1f48cba3"
  },
  {
    "url": "assets/js/91.25bbde72.js",
    "revision": "365d1d78b634c110baf15309442d02ac"
  },
  {
    "url": "assets/js/92.93de5cab.js",
    "revision": "3d69a3c28c22ebbbad007ea0f2347434"
  },
  {
    "url": "assets/js/93.3d3980d3.js",
    "revision": "d73c441207d1586111b2831e9e7b9f9e"
  },
  {
    "url": "assets/js/94.f59aa8eb.js",
    "revision": "8a10e8f48405d96981beb6956836c54e"
  },
  {
    "url": "assets/js/95.39e61d41.js",
    "revision": "a510e7a9072ba82624518b0e3cac6516"
  },
  {
    "url": "assets/js/96.39308251.js",
    "revision": "a999f5cfeb4cae388745981a8e57b45f"
  },
  {
    "url": "assets/js/97.92fc19de.js",
    "revision": "44f6924133face43b7467af1479359f2"
  },
  {
    "url": "assets/js/98.bea50335.js",
    "revision": "5e17e98005fd8fd5f0aa889c1a92b638"
  },
  {
    "url": "assets/js/99.327c289d.js",
    "revision": "3c0d4b513ce3882dff9f67f637a4c315"
  },
  {
    "url": "assets/js/app.31cadc5a.js",
    "revision": "c5c00780b5ccee6603197a3d27e16d5d"
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
    "revision": "863dcb3fd8eee99535bf05323a626fa1"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "e47de1322a1bd0fc660d332af2766564"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "7175da5aabd294da4635eedfcfde12c4"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "e1f5cd2367b6fe08a3fe5cfbbc5d03b3"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "e35aa716af7e6319b80df6d59e9cb9c6"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "2ea27c32832fa6220ae4782654a6e75d"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "684834b07a5febc50ca8292204f8bc60"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "63148a204e54c77b6788a39c3d545fa9"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "d8e62bb60d11a9cabb8351c42ecbe80a"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "23bca125e04d1bb8f1ca025d020b6257"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "1acb9dcde6474b923adf2f28f328f095"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "2f1d9c1757ad0f2b77523bffc99d9c88"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "8d08411ee5d5fcdb7f73cb141ae5f2b0"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "94f17159353cf1c6195ad9f65c856a64"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "ac55a9718314f8a83833f322ecb73d6f"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "4a6ea8211890db7cea1305b236c88758"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "ced601d4c2ae1c2e4fc6b74ca9da6100"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "1e127c3bf1a0cbeee5d6ff997493998c"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "11368433628e681f2853d8c395d47673"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "7dbc283ca5316c6fa67390ad4aa5edb0"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "a20e17815942b76b7d98790a05f0311a"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "a5d5cd47c82c406c1d3ecc3df32b1cb9"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "eb4cc6e7a1d8d5b6e9f2950a7e792668"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "971a97d2f05b479b35fda2e8bf005df5"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "caa78bcf5d80d356b3210ac008a5039b"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "097a2d1f32312698937d6172ce5a5c25"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "a21ac7204ddeb237a329bff684c98187"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "7644fc0151f27857dafaee5eb6e0514e"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "8cec81c78d886af7d7d747f120b4d802"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "f20ef2ea47450d9543cfbd2556b77b54"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "019d5298c0a909d87e6942bf4b4153ef"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "ebb7c74aaeffee2c0247526f611adb4b"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "f6cd30d71d5dc721850229465146a070"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "7e63c5013f0eadada482ec741712b1c2"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "799eb9a6d0744ae35edf158a214aa010"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "2d3098fa9dee9eb813136d123b3203c3"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "27dfc9d158fea7233bdcc9a3141941b5"
  },
  {
    "url": "list/20220324015620.html",
    "revision": "89b23b855313ad5241279acad7cd78a0"
  },
  {
    "url": "post/plan.html",
    "revision": "79ab608a18f01a6bb27979a4c7c76d49"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "55682ab9ffcc83d79872a09f392fc9e3"
  },
  {
    "url": "study/english/words.html",
    "revision": "91bb0f601b822092f574a15b1f2b28c9"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "150b9c02322e2d89127fa278fa8b240b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "2daeca7362f9f5d341213e20b85a92d3"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a66b732937c009ac4b696a92ddb41964"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "636ca6ac7e7e12019f30ab754f9ee138"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "f7475e58da606101bafeffb2e3dd78e5"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "cec2b454a0f56538f9f978c45a349c29"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "40b6818fc79f9a7ab30acb407f506318"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "e8637684dd4d398a5d2e40afe393bca5"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "77b4e57558a0ef0a417cda0827d03b4e"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5e7db8313ef4e72b4afa8198494e05c3"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "a7d5fdeab63c44a01509567e3e80a25c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "233ea7ab0938de34413a211150470858"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "79736794fa5d0b867351dddeeb3cdba5"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "1cc73851552e3ec91c2a65d973bc6a68"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "93d66c6944ca87f668cb74fd6baff52e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2ad0ee24b81778ca5f115534315bf491"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "dd71dfd480d737c336b6ea6e1daff6d9"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "33b6441a4a98283fb20ffa3bbd056ef6"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a1b49437a0d8fd11e1945a6b0c7fd880"
  },
  {
    "url": "task/2021511.html",
    "revision": "98149a104562261f23b47161c673372f"
  },
  {
    "url": "task/2021514.html",
    "revision": "36a88f20c55386e2937ce1e0015693d9"
  },
  {
    "url": "task/2021515.html",
    "revision": "9b79b87adfab6c5fc5da5bb19547aa5d"
  },
  {
    "url": "task/2021518.html",
    "revision": "e6efd9f210d7365eff7fa35de41252b4"
  },
  {
    "url": "task/2021519.html",
    "revision": "544dc69d5daba4dd8f1ec73d6bfa0219"
  },
  {
    "url": "task/2021520.html",
    "revision": "545121dab59a5bba39809c6b838a80e6"
  },
  {
    "url": "task/2021521.html",
    "revision": "e6d407a66804893b2b76ac8a1fbbf43c"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e03e94594d1112bd3716afec78c7ac8c"
  },
  {
    "url": "task/2021524.html",
    "revision": "cea666f4c3cafc6e893512f0f92ee16a"
  },
  {
    "url": "task/2021531.html",
    "revision": "caabbb68134da1ba0264bea63b45f90a"
  },
  {
    "url": "task/2021628.html",
    "revision": "a2956fe35c3f271ce3efd43934f9d1da"
  },
  {
    "url": "task/202164.html",
    "revision": "8e7b7503cdf698072ffb23cf991078e9"
  },
  {
    "url": "task/202169.html",
    "revision": "04cfe40b7212f70edad46104bcd8c900"
  },
  {
    "url": "task/2021717.html",
    "revision": "75fb585e2cf134ceb21b243983e9a017"
  },
  {
    "url": "task/2021721.html",
    "revision": "0443de451bfd9d60e8cc66214c79629b"
  },
  {
    "url": "task/2021722.html",
    "revision": "e6a893491f367f9e6dbc871d6ba46841"
  },
  {
    "url": "task/2021724.html",
    "revision": "78af11f700ebd1e7d31c48a0587edf32"
  },
  {
    "url": "task/2021725.html",
    "revision": "912bcf4ab837af13ca86ccacb05da8cd"
  },
  {
    "url": "task/202181.html",
    "revision": "cd12b9f17c7417008eba400b67a2c847"
  },
  {
    "url": "task/2021811.html",
    "revision": "7bbc93928d8e9cea95b19d8286f1338e"
  },
  {
    "url": "task/2021812.html",
    "revision": "18218a10d8b049fdbbcda8e2b298075f"
  },
  {
    "url": "task/202183.html",
    "revision": "4fdeeb9bbe74a659016613ce6a090623"
  },
  {
    "url": "task/202187.html",
    "revision": "2470f221ad6d08f381b1764c3b63235e"
  },
  {
    "url": "task/2022218.html",
    "revision": "bf58a1d6431ffa7fa827dd94abcd4e88"
  },
  {
    "url": "task/2022219.html",
    "revision": "053668a950b72ea09817c33b01f70bc6"
  },
  {
    "url": "task/2022222.html",
    "revision": "49a0b3b9e26430bccd13635e5a83f480"
  },
  {
    "url": "task/2022224.html",
    "revision": "2d779907fa05a246c4e0b2881c006912"
  },
  {
    "url": "task/2022225.html",
    "revision": "c2653ff650017ecad499cf9eddd00996"
  },
  {
    "url": "task/2022315.html",
    "revision": "f3941d5c8cf9aa092fbd4e0f711bc264"
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
