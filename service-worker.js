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
    "revision": "5f7202b105de6f09091314afa705b370"
  },
  {
    "url": "admin.html",
    "revision": "1c1d4641676044a736e77849b7bdcbfc"
  },
  {
    "url": "assets/css/0.styles.fd441858.css",
    "revision": "1310e62e53e8cb86cc5e3f76241cb7f1"
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
    "url": "assets/js/10.68294634.js",
    "revision": "2bcd050f23d93479dcbbe44ebf1ee8da"
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
    "url": "assets/js/52.2f68c8b8.js",
    "revision": "1f1f01ba6c9a1d2a61e10a1a42c4dafa"
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
    "url": "assets/js/6.8817aea2.js",
    "revision": "f4eaad542c8a8464fc9e29c5f00d8f24"
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
    "url": "assets/js/app.0fb682ac.js",
    "revision": "36b409062f5b4445543db6ab91f1d38c"
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
    "revision": "f876a3e551014c7d120ba86fa87708be"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "7d02d9d0cf44811395b52a7d1ca13055"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "db45c00013823008666fd0cda436efa4"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "05d0574f4a4af63ebf2ce662ce8a8d91"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "5248f4919a3a2bb01bec3d893007e794"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "c3e884a9e5fdc8157f174447fe329a37"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "8912b01905140874af37b553bb1ae5f1"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "05a3406dc7fb86d2ec74b25d594606da"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "ec57d397d733a499de50b9ee4779d61a"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "0fdea31fadc1d3e90587038c1dba45f8"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "642c0a3384e3e8d5a681c82813dd5092"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "df829517f6fc4ffc6f95ccad18ce564a"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "618cd850ad252a91a3b5ebe8c010eaaa"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "52066f3b07a2afe8749debf57145388b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "8dc5fe21560a1d100902f75423d432c0"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "970639ceb4bce5059f488ec4513ea22c"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "7fd08ced59f2f16688261f728912713f"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "762feb01b1217fda3b3069f61863a050"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "488715107a6ef9972561a57f4ed8927d"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "c0e8d37ba154fd07ff4346d29e0eed77"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "1ce6d58e6b9fc7b5f14704ba2b21a17c"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "55096beb1d1a48b95b538843ab47d19c"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "a7bd009d9d2893c4e96f0615bea0b5bd"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "0259b61d4e24d3e645c0fe2a28708b14"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "ff8f7d7511677fd00806de7604cf27e5"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "a33b217fa3c9212abf7ecde475bb4ae8"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "5b106c936fc0fa709aeaa7317bbeb379"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "697fb0c30f73af21b0278a0c77c7e0ac"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "bad0b1a5d248651c730d8c455f0130ea"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "741983502108903e5b88b88bb2a5804a"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "a92694e7db6d4fa5fb542cf66dff122d"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "26ce338526c21a1db6d4071526c58043"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "d05315d23294c61fb4f0587394e1494c"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "82a40c966310505872e15f2aab2ae4ff"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "bba5d24afc0d426563793720329bceed"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "a6f501689de3ff3482e33dc6a511a1b1"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "f76480a9b7e7c951023f53abe4d0c59e"
  },
  {
    "url": "list/20220324015620.html",
    "revision": "d622e688e68d9b742be8f1849292edf5"
  },
  {
    "url": "post/plan.html",
    "revision": "bb873a7968ecafb70f893761b627ca4a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e3fcf7b41f83d5e56b24766c9ed33d4a"
  },
  {
    "url": "study/english/words.html",
    "revision": "c5707703cc0bea8e19b9741f1bd651fd"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "186f08d3fa055e3adb8fa2c41f8a3af4"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "69a54f9c2c6e9e6dc15f0f51c9fccf6e"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8b22414cf27620122eb559a25a11b2eb"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "12a43fe7a5c9448cb12cf25c1960f0e5"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "abf8ccd961ed0646e037c120b72f94cb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ce0fa0b97a332dfef3f5861a77627159"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "180d320d2c62e39f8418d140c6c6b3a7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b7def494384c844ab0c81c51a25d4154"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "07fd340d6ed887a17badd87607b5e70b"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b2ff091ca04fbb411bbb239a83ad63b6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "b88c88e4d0b390a2c49fed4fcece0ffb"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "edd1ce1795d07b3546dc213ce826b97b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "64e1b7bad6835b99d7a524eeeb57d12c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "90fb72ae3733c79ed8f0be27fc6c9d84"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4e74944557327d2e10a888eba045266a"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "54db54eb5088589c2f5a923e4122ee7c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b3fc7ae51b1cb90595b2748d708f510b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9ccf26ab054559b0419832b7e34e4907"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "1aea1ecbce201b679c1a34c166e8daa8"
  },
  {
    "url": "task/2021511.html",
    "revision": "fa63533bee0355e91fc83d679051d4bb"
  },
  {
    "url": "task/2021514.html",
    "revision": "7856bc94c9836b9b3ce290774a9838ed"
  },
  {
    "url": "task/2021515.html",
    "revision": "11d700679629625fe3848dbfec93aa3a"
  },
  {
    "url": "task/2021518.html",
    "revision": "65926df6245f85b11b1f6f7cdaa8dc32"
  },
  {
    "url": "task/2021519.html",
    "revision": "9109a026ac058115d8f6294238c5245a"
  },
  {
    "url": "task/2021520.html",
    "revision": "3d59aaaebffbedb126ee88d54782b2ad"
  },
  {
    "url": "task/2021521.html",
    "revision": "2ffacffb2659366e3e99c6b19f733a9b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "16be04c7d18d818f94c14ff5aa23d262"
  },
  {
    "url": "task/2021524.html",
    "revision": "78d494108eed8bad63c3d2723fe0bb63"
  },
  {
    "url": "task/2021531.html",
    "revision": "66612b7115a3633533c01a3d76e5ce75"
  },
  {
    "url": "task/2021628.html",
    "revision": "fbf2a23449bf336cdc59f91c32b896d6"
  },
  {
    "url": "task/202164.html",
    "revision": "cf04c84b1bf1a34ad473174614ef5597"
  },
  {
    "url": "task/202169.html",
    "revision": "ef549b244f27156784ef3f485d65b822"
  },
  {
    "url": "task/2021717.html",
    "revision": "c18c30c34533da5b227a39ae0ce83974"
  },
  {
    "url": "task/2021721.html",
    "revision": "8c2a8a1962aba1d6bb6924c9d542b6e1"
  },
  {
    "url": "task/2021722.html",
    "revision": "6e08316682a5cd7d3db949310e5a0f13"
  },
  {
    "url": "task/2021724.html",
    "revision": "d0855d861a556ec0618f00006e05b6c2"
  },
  {
    "url": "task/2021725.html",
    "revision": "a544716db691d1aef2c0c5c3d04b2a41"
  },
  {
    "url": "task/202181.html",
    "revision": "e7a407af9431fe869b930cb313bc49ef"
  },
  {
    "url": "task/2021811.html",
    "revision": "1080ac906ec81b4dc87bc1bacf6cbc30"
  },
  {
    "url": "task/2021812.html",
    "revision": "9d3cc62da99c888653c2ddbf3455806d"
  },
  {
    "url": "task/202183.html",
    "revision": "d41fd6f4594114f76cf8174d8d68ab0d"
  },
  {
    "url": "task/202187.html",
    "revision": "f367810369a6d44eca8e560a29346769"
  },
  {
    "url": "task/2022218.html",
    "revision": "b375529823dfe1ddb6298dbb74e83f88"
  },
  {
    "url": "task/2022219.html",
    "revision": "a1d60aa72883fb05b720cc9ad8b87efa"
  },
  {
    "url": "task/2022222.html",
    "revision": "e95f7fd6734ad63aa7ec77be89021832"
  },
  {
    "url": "task/2022224.html",
    "revision": "118bbd761fbed44919ebe2390ac955a0"
  },
  {
    "url": "task/2022225.html",
    "revision": "3155bbbae70e9188436ab563eacc9425"
  },
  {
    "url": "task/2022315.html",
    "revision": "eacb42383e2daf43ce5b1f86ef4f177c"
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
