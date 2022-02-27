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
    "revision": "a44e7e0e88a84c2743d5fcadfba69f1a"
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
    "url": "assets/js/12.078e2ad6.js",
    "revision": "22b0f07446284517ac930efcacbeab93"
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
    "url": "assets/js/15.ef260ab7.js",
    "revision": "65a1bbec92d1901ed09ce0287677dafd"
  },
  {
    "url": "assets/js/16.8c407796.js",
    "revision": "752a0091f10d01df778f7faee8d7541d"
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
    "url": "assets/js/32.5a2fbd0e.js",
    "revision": "94bbb0011352e100746b79102c67a5f1"
  },
  {
    "url": "assets/js/33.3aa0d9ed.js",
    "revision": "fab03dcde5ad4bb3880e44cf7b1242a7"
  },
  {
    "url": "assets/js/34.e6e69820.js",
    "revision": "5c3c1dfdb0796c828d5285c426582326"
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
    "url": "assets/js/37.497b3bd6.js",
    "revision": "c68f5f4ce33e9f0a42a49c2d7477f6f9"
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
    "url": "assets/js/41.fa400d76.js",
    "revision": "08f558b7fb094e28fa1552b9f010f976"
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
    "url": "assets/js/44.30433820.js",
    "revision": "e131a24418b3e1f17cb35860af696c7d"
  },
  {
    "url": "assets/js/45.fc3dd51e.js",
    "revision": "0759fcbcd714bed1a0a0521f2a7b35bd"
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
    "url": "assets/js/app.6c4a987b.js",
    "revision": "1f7c0862624e2e059302756324eff963"
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
    "revision": "21553b0c2ab97538eb9f256e70bd4537"
  },
  {
    "url": "jdkhelper/docs/legal/dejavufonts.html",
    "revision": "546c88a7de420bc6aa0baf26af038842"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "5bd61306a25daecfa0bf0d32633c8864"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e5185d5c0dd205dfc3f43d50c9c7a9fb"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "ba2ce81a0e63f12124ff6831d541ac7a"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "4782e161d0c7ce8349668e99de09cd13"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "d7b1b55043d7f1696caa2f40f2b0e4ea"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "0ee4db03ae8dcb11639afb8dc6f28116"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "02a4bfb3817d8a219520c799a5d79b74"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "f3381fed4b3d3d04f7209c10bac7b32f"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "ca70611b1dd9a433fc9b77e37be9d820"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "ae2c7abf9e9e68ef5e9a4f5fd1f02dd0"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "76dcb702f07f85de2b4b940c28b55c9b"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "56abb7703ad83b619e1a916540a9449d"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "4078f112184de3bc0dce3bd96c317c37"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "87be17ffc5bd0792728121581fc1ee1c"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "e73477ef56c8b8b9c4204b27580e924e"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "93ad3db1e9014311cbaf70b93fa67e70"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "e05943e9593248f00ee968f46c1dc315"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "d934aa861d7a34cad8e61a39d2c0d114"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "229a7601822364b95b755713a555bf1e"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "7fbfbda7022bbbd34fdd2919afce1365"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "b02281c045d3e29520dc791ca9082136"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "260d17eed9b03d7b01dd37bb4d174cab"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "2bf2ddbc957a6e4fde0ad3d7e4fb14a9"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "397332de157f628a734a4ba710e81312"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "e4854d9961c45f6b85a143c291635f0e"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "9f1a0c2a24423b727f447eaf159dcfe0"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "ebf11ab4f4c5a2a54a846458b18298a2"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "f74f29b6ec2269151ff7ce4970fd0427"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "1eb0f5fcb7858baf93c085ce2d8cf507"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "c5c513f3eca38d0546f918c777b44894"
  },
  {
    "url": "post/plan.html",
    "revision": "5dcd44e0bf578ef6d26bbda38088c2fb"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "fac9b9387be1cde475013a4c6c3e415e"
  },
  {
    "url": "study/english/words.html",
    "revision": "1790d32d1c8e130bd3ca227d166f29a1"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "cddd9da33625a137f8770dc4579176b3"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c9817b933b444b7ee1f970ebc4631975"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "85721b588679b3451335cf9b1353eb8a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e51eb1abce2d5cac073aa14d4f290f8c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "d32f66147aa73693edaad7f812125505"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "78bad8b200788f02d32ba34ce10fc2bc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "c1e52af1a538fd8681e29323be04af7e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2f2a6c472a51dd5be0c65ac74a9641ee"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "6845f65eae9a1811b5f1a294d07a0c10"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f7cede3b164d6709b46dd0b2d55f9c95"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "39b676799e498c314c571e7cc65ff6c0"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "dfa525ce0f8cdea191c73a2c28f220dd"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "742267c5d202f108f1b301156260ace3"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "34a9e816872a6251a4d2eeb84c4fef6d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ba0f0098bc62929fcc045f1c5753f5b0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "cd8720af168e59da20576560710e8011"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "b0c99ed2588d368929afc6fdf19f159f"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "26c00ea0d7e2a1d91c8f9fccf016d15f"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "3c2c85b29a36d65c0fd4a5c8748a2a39"
  },
  {
    "url": "task/2021511.html",
    "revision": "262d5c25183ea637b1adbc61c72d71ec"
  },
  {
    "url": "task/2021514.html",
    "revision": "6cc453bc9507f1bb626cd0f6b3390ca5"
  },
  {
    "url": "task/2021515.html",
    "revision": "7762a25cd6838ae9edb07b007657bf6a"
  },
  {
    "url": "task/2021518.html",
    "revision": "c21986bff476d332097ec50ece54e88a"
  },
  {
    "url": "task/2021519.html",
    "revision": "cb8dd39f929c088d6929aa3d293a5256"
  },
  {
    "url": "task/2021520.html",
    "revision": "c98f37fbfd5756eb5e0da5aa1238787e"
  },
  {
    "url": "task/2021521.html",
    "revision": "9b2607aa6f972bacffc69a2e0215c397"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "83c5b873c749c5e0fd32e8eebd0be816"
  },
  {
    "url": "task/2021524.html",
    "revision": "8a4b33706734ec942c411310e69a1b6b"
  },
  {
    "url": "task/2021531.html",
    "revision": "7eb495e8c015a05721b760cd787f8ad2"
  },
  {
    "url": "task/2021628.html",
    "revision": "2b9ec5551adac87a553010b5f69412a9"
  },
  {
    "url": "task/202164.html",
    "revision": "1dbca92334541f4152149223251d7650"
  },
  {
    "url": "task/202169.html",
    "revision": "cf01b76bb415504f31ed5b9f689d3c52"
  },
  {
    "url": "task/2021717.html",
    "revision": "113ca766416d34ba2dff393e5d554e13"
  },
  {
    "url": "task/2021721.html",
    "revision": "9885e9afef435c97ae53b6a011b15eff"
  },
  {
    "url": "task/2021722.html",
    "revision": "fec3970b82ba77f659982274f92bab8a"
  },
  {
    "url": "task/2021724.html",
    "revision": "e77e4bd1fb176a7d07bdd727cee0fe25"
  },
  {
    "url": "task/2021725.html",
    "revision": "3d7067e9fce9d3ab43460dbba32eab16"
  },
  {
    "url": "task/202181.html",
    "revision": "ba561be586938e13be4ed2a2a4406906"
  },
  {
    "url": "task/2021811.html",
    "revision": "525d02ad8a9cb5244425d80efbd2507c"
  },
  {
    "url": "task/2021812.html",
    "revision": "9bc629a3b9a83f99b96cafad24db9c3a"
  },
  {
    "url": "task/202183.html",
    "revision": "0c057f9afa290fe728a99c95321adb05"
  },
  {
    "url": "task/202187.html",
    "revision": "317316c04972af71cd8bbf6f1ca83a0d"
  },
  {
    "url": "task/2022218.html",
    "revision": "0d885add18bd5166262d528cce6211be"
  },
  {
    "url": "task/2022219.html",
    "revision": "434a4b612a09731086a7b587c59e96db"
  },
  {
    "url": "task/2022222.html",
    "revision": "9e0341dd6f6e1640f2bbbc99d95346e1"
  },
  {
    "url": "task/2022224.html",
    "revision": "9dbee9fdbad94b9d5758f74a07ef9fb1"
  },
  {
    "url": "task/2022225.html",
    "revision": "7373c78bbc621fe37469fc28c942d4fe"
  },
  {
    "url": "test.html",
    "revision": "b4ebea14085f9a02b9307c7dc8a30813"
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
