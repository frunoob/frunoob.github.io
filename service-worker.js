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
    "revision": "7fda293639b9a3ce57cf890cccaa693c"
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
    "url": "assets/js/12.a552f5b0.js",
    "revision": "4b7abbccfe769a1538576ad76066202c"
  },
  {
    "url": "assets/js/13.7879ac45.js",
    "revision": "c4a3765c18aa0f5cefb356887dfa6f6a"
  },
  {
    "url": "assets/js/14.0f129140.js",
    "revision": "a8238d096f8797209c88f1f4a998e791"
  },
  {
    "url": "assets/js/15.f37b731f.js",
    "revision": "f30dd36653c31f103b2e4edbdac4457b"
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
    "url": "assets/js/app.397624a0.js",
    "revision": "d8137b3b775941ade210ed28a7a5c767"
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
    "url": "docs/legal/dejavufonts.html",
    "revision": "873c50870bb3f243e1cc4ecc6be7da51"
  },
  {
    "url": "index.html",
    "revision": "42485de203af7d1ca6e20e4390877e76"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "d09a393718c8bdadfa292044d4a23a4c"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "00f480f81a91f6335c046f0445462f8d"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "5b36287aa1c760e56209eb4048d67090"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b4729db36f08383eb77bbaff717ec631"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "331fe0f6a1edc0dd0fde8acd8db88f43"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "baacab64f143292f641c2f33a9975839"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "f37077ee77608cd41c0163553a02b026"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "85cd727e11feb26969d88d4bb878753e"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "84d530d451d8b0c919056e0b1d71f47c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "0f34f6aae02cc303cce25b90b567d0c2"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "da464766912ffe6cb85d99f6f3964490"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "8423dec911ea6a7fc845cb36ca7ce1dd"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "ce7ea420dcda435aa635428aa440843b"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "8acba3efef7071049350febaf051ae66"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "08e38f5c8f75e117a734b171e5a5a0e1"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "aec977a4c7fffa4e50814bd96bf83816"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "da2e2897e64363d85d23a0b87991cf57"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "60e43c6931c98e5ac44cad426aac0a61"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "90d09cec3da8e7711f9bcf1506f3b55a"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "e26eb8823f09b3edd716ed2e508f4905"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "e3259f41365685017d0207ee6842e536"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "0f3e5cd82309887da31072daaee93feb"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "cffca6e91fb3f991d7830455f7e290e8"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "99fa8ece51caca7be39bcc87e0b37bb5"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "77d08c4b82292a2489572adb633df46e"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "2738d31f74182cc55f0e9fef7812e2d9"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "f6ef868f6e0795020ea1998d5dced883"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "56a1318f08515b2afd43288bc23d4856"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "4a95bfa80aeca70a78d71aa1688cb3f6"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "208dfad465bd815a07713ca6880b6a71"
  },
  {
    "url": "post/plan.html",
    "revision": "ae3dc44823c62d08a6d1fe7f6e4018dd"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a7f6f96d14e74263b0902d92ee45a77e"
  },
  {
    "url": "study/english/words.html",
    "revision": "eb045bd6aa0601634d40b5802a15fcca"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "388aaf3185d9d1d6bf1a5d16e09b7685"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "7ef35835b390195ef1b73287e3ddfa1a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "71db0b3c1907f7bd932ed0c75b4b2236"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c91f00ec5dadc6e25660a73a1ce11fae"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "293e4de8332c059a268b0d31714ed3cd"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0a20176e523316ef3981ab8376468316"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "73259cbb72e119202a8c289bbc615501"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "9a88e4a2f4d3e006f09023f4cf06b2f4"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8890bd5ca1ce8da674865778cd03b53d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5345e61a933f1788d80d834d4e37c3c3"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "f85e6343bb00d738ba40bc41051989b2"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ef9bc037a3b37d28b96219ddbc78eb2c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c674431f72b6541cab0388e56c94a5b6"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d92c51e3b638d11a55ca2cf5f537ed83"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "2891c0e4fb2f5f5e917bb2b652a4dbe8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "b61d75414c28444972f6441e5f5979f5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "fa989ba551f0ac491c4af7592b10c597"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ee8cdfc331be272ae9240b110df90392"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "255a7805a3c488f3ce0623d79c107796"
  },
  {
    "url": "task/2021511.html",
    "revision": "df4751c06f9d39fd049c828952a8df01"
  },
  {
    "url": "task/2021514.html",
    "revision": "c85b7974ea711703f9142888fa1f82c3"
  },
  {
    "url": "task/2021515.html",
    "revision": "4fc859e44b01f07bcc7995eb521dfd54"
  },
  {
    "url": "task/2021518.html",
    "revision": "8ed644a8e0cac9063a9026578c3304ad"
  },
  {
    "url": "task/2021519.html",
    "revision": "5ba1b9f279d6858204583fd300b6e803"
  },
  {
    "url": "task/2021520.html",
    "revision": "b6a67955e340edf318fd40e0f2e459cb"
  },
  {
    "url": "task/2021521.html",
    "revision": "9c39bee0272723d57930f4baa6eb839a"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "7ce949dbb8e46234a4a89a236d4f5da8"
  },
  {
    "url": "task/2021524.html",
    "revision": "71b3474e12c93610b6d38b8b700902f3"
  },
  {
    "url": "task/2021531.html",
    "revision": "d0d531d13acabf585cd7e4ce0ed5d01c"
  },
  {
    "url": "task/2021628.html",
    "revision": "c16fd672d9c15013a1be03627318e6b5"
  },
  {
    "url": "task/202164.html",
    "revision": "8004c6b2f3e244b141a57accadacfa79"
  },
  {
    "url": "task/202169.html",
    "revision": "3ba71843cd88e0316b8693a0127f6d1d"
  },
  {
    "url": "task/2021717.html",
    "revision": "21f6a63dc9c323e6dae4ab7af3604d7d"
  },
  {
    "url": "task/2021721.html",
    "revision": "f732b480afe0a13d0ed143be5657847a"
  },
  {
    "url": "task/2021722.html",
    "revision": "13fc6a6480dcec288b73cd4aa0d2b43b"
  },
  {
    "url": "task/2021724.html",
    "revision": "b6dbd539d558c68b5d20e57d710b313c"
  },
  {
    "url": "task/2021725.html",
    "revision": "8b011e2643c269b1b350de042009a90f"
  },
  {
    "url": "task/202181.html",
    "revision": "12c76f859171c67760c3a9c350f58b52"
  },
  {
    "url": "task/2021811.html",
    "revision": "080d609f94555003995a0c263ce82e14"
  },
  {
    "url": "task/2021812.html",
    "revision": "5d768b49dd4fe379e6768c3e26061bf3"
  },
  {
    "url": "task/202183.html",
    "revision": "f2d47fc6e453bea66f91bb52531c5e88"
  },
  {
    "url": "task/202187.html",
    "revision": "4d7ecedaef95f8bf29230d4e73730c4f"
  },
  {
    "url": "task/2022218.html",
    "revision": "90582fb89c8daafb1d03936d466d5639"
  },
  {
    "url": "task/2022219.html",
    "revision": "03636e977a495f14051fec77ed1b66e6"
  },
  {
    "url": "task/2022222.html",
    "revision": "483f78fd4492a6716c89465d6fa48b00"
  },
  {
    "url": "task/2022224.html",
    "revision": "2b882bd48c4a8abc01741a9afa37cb09"
  },
  {
    "url": "task/2022225.html",
    "revision": "9e3649c984d94243a38985abc70b97d5"
  },
  {
    "url": "test.html",
    "revision": "d4dc1379cecb25c29f7b5e3cb94354eb"
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
