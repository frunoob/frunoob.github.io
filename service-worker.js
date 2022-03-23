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
    "revision": "47fdc3624e0941f353e7143b26289398"
  },
  {
    "url": "admin.html",
    "revision": "342492ff6d4fb7c65cbb64cc01a28e72"
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
    "url": "assets/js/100.f111feed.js",
    "revision": "e03cce9c5efced25ea46775e3b2123c0"
  },
  {
    "url": "assets/js/101.2ff1cd3a.js",
    "revision": "a91571cf18ca1472cfc50c4531918ed3"
  },
  {
    "url": "assets/js/102.6c9aaa9c.js",
    "revision": "6aa0492654cb45d3bb48810f6f83c5b1"
  },
  {
    "url": "assets/js/103.b71559c7.js",
    "revision": "3b6aa90299b92364b7296bce0ed04f58"
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
    "url": "assets/js/52.4880e17a.js",
    "revision": "268af701a76af63ccd00bfb19850b218"
  },
  {
    "url": "assets/js/53.16da2ad6.js",
    "revision": "afea48bd15620cd039d8fc8e851d37e5"
  },
  {
    "url": "assets/js/54.38d927ac.js",
    "revision": "50a24fd369fffd69cd146c513f6518e8"
  },
  {
    "url": "assets/js/55.a78f8ab5.js",
    "revision": "aa09169a6ac9d36b88b3a0c0a17afefc"
  },
  {
    "url": "assets/js/56.cf9a2c2c.js",
    "revision": "064418b301ae2052fb57a0b3053d26d3"
  },
  {
    "url": "assets/js/57.f44dcde0.js",
    "revision": "3c4a9d0b293678c6340aa6ae762eec7a"
  },
  {
    "url": "assets/js/58.905b547a.js",
    "revision": "2c8961db5611c1c059a8b49915803ed9"
  },
  {
    "url": "assets/js/59.1af67f4d.js",
    "revision": "bcbb529ceb5559bb85a51bc75ab1c66e"
  },
  {
    "url": "assets/js/6.194eca8e.js",
    "revision": "94ef69bfbee1722ec0b21fda75baa614"
  },
  {
    "url": "assets/js/60.84e34287.js",
    "revision": "2ac021ab477ce05f6b0dc9658d23fb4c"
  },
  {
    "url": "assets/js/61.facc6534.js",
    "revision": "8b0f28fdabe8c6a1b746e82dcaee02b5"
  },
  {
    "url": "assets/js/62.5b6f297d.js",
    "revision": "8562ce79b81af4cb89d2e39e36b89ef8"
  },
  {
    "url": "assets/js/63.91897e1f.js",
    "revision": "fd52fc794cb0fccafc6479a11eaa1718"
  },
  {
    "url": "assets/js/64.0843291e.js",
    "revision": "37009bd88f44a64e341a09640f6602f2"
  },
  {
    "url": "assets/js/65.ae4f75fd.js",
    "revision": "79563eb158743d2e880b6cf44fff4da5"
  },
  {
    "url": "assets/js/66.d7f33b15.js",
    "revision": "d7035add7674b04497934f9df5919693"
  },
  {
    "url": "assets/js/67.efa26955.js",
    "revision": "fc7ee608a4e6054f21a5167424bef47d"
  },
  {
    "url": "assets/js/68.798d54d9.js",
    "revision": "14d0a2bacf2b04447e297af867a70762"
  },
  {
    "url": "assets/js/69.2f043e9a.js",
    "revision": "ef71543edb4a0d015c22557a5ff95057"
  },
  {
    "url": "assets/js/7.89989005.js",
    "revision": "af9b40b8877920d17343c42393c632d7"
  },
  {
    "url": "assets/js/70.1ab0c808.js",
    "revision": "d264eb121896c4b3977d9387173ee71a"
  },
  {
    "url": "assets/js/71.6bf85d87.js",
    "revision": "baeebdeb2bf5c3dbc6e5f1005bea906c"
  },
  {
    "url": "assets/js/72.df368a58.js",
    "revision": "fd9b762cbd0b3461c50c5efea68751f7"
  },
  {
    "url": "assets/js/73.03e5abb6.js",
    "revision": "1648225ec3214feea37ce6529456885a"
  },
  {
    "url": "assets/js/74.a58c2eb2.js",
    "revision": "57972ff284b9716342eb63c7f57f7d4e"
  },
  {
    "url": "assets/js/75.599f3381.js",
    "revision": "63a82bccc7560dc6e9497850196c6462"
  },
  {
    "url": "assets/js/76.e4e71791.js",
    "revision": "f499f2be71debab120202d41786e7f13"
  },
  {
    "url": "assets/js/77.81697aa9.js",
    "revision": "9c9d9601e73c93b745e3d6912a5c3759"
  },
  {
    "url": "assets/js/78.0ad46ce4.js",
    "revision": "262e047a54ec2c63046f67d1da166f01"
  },
  {
    "url": "assets/js/79.22e50e3f.js",
    "revision": "8458537b8290960b7f0f2eef26dac478"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.cc8a21ff.js",
    "revision": "def1016a155c3c1e6253265388abe129"
  },
  {
    "url": "assets/js/81.90e61601.js",
    "revision": "f2280a8340720f15060477091b371ab4"
  },
  {
    "url": "assets/js/82.3f1ca37e.js",
    "revision": "37919c5005b0f1e635f7995fb8cf30dd"
  },
  {
    "url": "assets/js/83.7376fc14.js",
    "revision": "e973ab6ba3d33182a1460b515fe01920"
  },
  {
    "url": "assets/js/84.218da858.js",
    "revision": "9851162d474b0fb29a1fde3eb7400d33"
  },
  {
    "url": "assets/js/85.aee5240e.js",
    "revision": "60894780a632ad6c174913993d48e94a"
  },
  {
    "url": "assets/js/86.baab3fef.js",
    "revision": "cd861d6d5738f274148ff30d16ba0112"
  },
  {
    "url": "assets/js/87.252a1624.js",
    "revision": "6b92954ee2db9608036505a148241af3"
  },
  {
    "url": "assets/js/88.f71acdae.js",
    "revision": "4b6c56de1ff98a0a0b00d091d4de1ec3"
  },
  {
    "url": "assets/js/89.cbce01f0.js",
    "revision": "ac753a61c76eeafe4765cd665af83eb8"
  },
  {
    "url": "assets/js/9.0bf00313.js",
    "revision": "67f25a1efe009928acb27a472f17c84e"
  },
  {
    "url": "assets/js/90.ea9e5a90.js",
    "revision": "b8ef7ac924da573e103b533caed7a257"
  },
  {
    "url": "assets/js/91.c49ec193.js",
    "revision": "35244364a89972f8d09218df5e4d29f2"
  },
  {
    "url": "assets/js/92.9e5183ec.js",
    "revision": "5c768199172960faf8e520b9bed354fb"
  },
  {
    "url": "assets/js/93.abc2277b.js",
    "revision": "0afa3de011ec27fd3fe32783c1592eaa"
  },
  {
    "url": "assets/js/94.f41fbe35.js",
    "revision": "404ed249b38e20b710241957bf04ebb5"
  },
  {
    "url": "assets/js/95.292a5381.js",
    "revision": "1057ebe7e33344fd0e4684681339734c"
  },
  {
    "url": "assets/js/96.6fe0a1d6.js",
    "revision": "3a732f308906d05fd476e3d665d1efd8"
  },
  {
    "url": "assets/js/97.e474fed2.js",
    "revision": "c6f370029bdd3195d55077ddd85854ad"
  },
  {
    "url": "assets/js/98.9905ca52.js",
    "revision": "8ab3e216b2845862e977b004d763af2d"
  },
  {
    "url": "assets/js/99.f5116536.js",
    "revision": "98361979ccbcec1a209a9c9314a0b7f1"
  },
  {
    "url": "assets/js/app.0f2495c2.js",
    "revision": "8cba937aa76305aa6ef255160f1f13ec"
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
    "revision": "b789e3ce3552e3cb1f948fa2dc9c81c1"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "61db273a7d1a59aa7a4e7c6bd2a035df"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c679c0730e97d23fe677296fb68fbfc1"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "3a5130c3a059b59670d9e348c8f57f0e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "2f5bee9b35e03fe7884c007a7137d970"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "8f80119f083bf984765c4b6cf23278d3"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "cd6dd72b927e769fd05bd4a5baf185c9"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "d474a120058a345899fac6209f676e91"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "9364a7d44d1298f9ef0c3c44cb44df33"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "31c13094fc4623ac9ad42e03bf25394f"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "ea98b213a3ccc47a416dd5d85c5240fb"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "c3234f463c2e24360286c1b4224eb62e"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "07f52184f3360ca28f6c215ef79649e7"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "d20d1cf0119a4a2c36f61e1ee6404d1d"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "679ecbc8c3bfd4596dd9a7cc1c25e32b"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "619c05443514a294d6933da03631c202"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "cf126023d2f192c934062eac01cb10d0"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "be8fd4d6d06d4bd6dfeacf63e3e43126"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "3fe0c4c605cd5de483af70f10d58bb5e"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "402e3b9c54a7a5a2ada437caa40562b6"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "0735f239c19c3d95ebe16f6755c258de"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "f04ddb9b12af0efc72646afff9a7b80e"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "c4bc3bb6e4f4eb1811e4c641f0bec968"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "ac522b2014b7aa1dba96a32dfee474d9"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "9b15cb81b6f7edc55bb54d3978ccbb66"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "3ce6e7d004c230f89231ee34587d3238"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "cbdd44b95ae50673c038ad06643527aa"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "6b60568096077ee40d08b22c42a97be0"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "3a66ba77ce95db5c007ea8bb5eb33732"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "c0854d68af0ba7874ca6c91ce2e66575"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "255147ff584a2ca4ee202d4f83766390"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "c1c6882f1d4c0065e445e69bb40d882f"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "404a4b076d7677206ea505a0b9ce82ac"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "a99b41b2b67cf80a19ecef917d2c542a"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "f6a632786e39a784aee1305c5b47059f"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "9ab5ee101d92e30fcf4461a520c358ca"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "84a386b5db2bf18ab5cf5fc1e41fa4e9"
  },
  {
    "url": "post/plan.html",
    "revision": "3dd87609719799a6ca4bcfd6c948585b"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "2cf220c0a83c00ce56a3f20682ca83ec"
  },
  {
    "url": "study/english/words.html",
    "revision": "9f201fc4adf62c71fa6f6a2495b031e5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c606460dcff35e573889ff7ac1585aa5"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "1fa9c136f4db58432ffaf0fe7ffd1246"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b4fa53076b20765da9a230775f597d4b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "48f214df0a81da214894a568fe69457b"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "dff99e1a0f6bd50c5cbab0f30da506ba"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "a4db7da8876d7fbbe5e8975568fd77a7"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "36d581b6fe1e8568ae85c76978218ef6"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "52695ae5fd3742b8c473fd08904953e9"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "097daf5d49914c87d047152af86ec554"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a621c55598af112f7d18d229de9ac1dd"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "73fb8696f37b37583f8fef71a98aa409"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "64ce13ccbf31bbf6d1d38cc96a5ce539"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "3c44db4669ca6d0569100e3e9b0d6ec2"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "079d29f07cb1ed4e9fa706cb97d6d36c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "857d221bfd178cb8205525a10392a6f6"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "75f92e361a80240e87a92cb117b89c4a"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3ad7303f63a212776a8c9808a76a3bb6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "200c087f1026828ac907c8d7b8c5ccda"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "0d7816509f962287291ada0aaa257ed9"
  },
  {
    "url": "task/2021511.html",
    "revision": "7d76f16acd0f3a7310af2ec11a9cc3b8"
  },
  {
    "url": "task/2021514.html",
    "revision": "be61319e7d3b6afcba1bc0a29284a166"
  },
  {
    "url": "task/2021515.html",
    "revision": "76780bbc4749e6105a90bd2d2b811a45"
  },
  {
    "url": "task/2021518.html",
    "revision": "2042787d8405a59ae7b393c9232e432f"
  },
  {
    "url": "task/2021519.html",
    "revision": "64b41cde766f4c1f792be851583b2028"
  },
  {
    "url": "task/2021520.html",
    "revision": "e74c8e32b49e50d97b42e104f30bd765"
  },
  {
    "url": "task/2021521.html",
    "revision": "7b95b9bd77f4a5b1325e8047c7911b7f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "67aad7a06a6937701ebbf19bf2b6c374"
  },
  {
    "url": "task/2021524.html",
    "revision": "fc0dc8c1007201d8c00ff3c7ae8fd1d0"
  },
  {
    "url": "task/2021531.html",
    "revision": "c6c780e4e223614bcf6e2f1ded544691"
  },
  {
    "url": "task/2021628.html",
    "revision": "22c6b6b1bc35f0fb47bd2659dd12066b"
  },
  {
    "url": "task/202164.html",
    "revision": "07772aff0592518cd248e38609d402d5"
  },
  {
    "url": "task/202169.html",
    "revision": "3e9bcb9fab908cc2c68cfe83fc457565"
  },
  {
    "url": "task/2021717.html",
    "revision": "d4c1784c63009319b0ea352abac05445"
  },
  {
    "url": "task/2021721.html",
    "revision": "b5f32a1dc20fc290f585298028abf50a"
  },
  {
    "url": "task/2021722.html",
    "revision": "169fc65650827d03652aeb1f2e380aaa"
  },
  {
    "url": "task/2021724.html",
    "revision": "4f0a9e41b9dc6acaa363fba23db76114"
  },
  {
    "url": "task/2021725.html",
    "revision": "743d7b42ee7ffda33522d84de25fa548"
  },
  {
    "url": "task/202181.html",
    "revision": "37ebf1d3aaa3efcee0a4f8b9da50c76c"
  },
  {
    "url": "task/2021811.html",
    "revision": "e4e0b62c1953a76b56bbd85a009c9d1f"
  },
  {
    "url": "task/2021812.html",
    "revision": "ad02652388c3b3f59c946c7f0888cfa1"
  },
  {
    "url": "task/202183.html",
    "revision": "4c0e1861daa515ecea10c16bd2249047"
  },
  {
    "url": "task/202187.html",
    "revision": "4ebaf73a0e6a534a458a6fcd5c8e52fe"
  },
  {
    "url": "task/2022218.html",
    "revision": "beda7cfdb75d9b338d0cbd28142260c2"
  },
  {
    "url": "task/2022219.html",
    "revision": "733b92a777f66ec67b2b4c7e8796d527"
  },
  {
    "url": "task/2022222.html",
    "revision": "29b183a8ede1b2114032152a1292f288"
  },
  {
    "url": "task/2022224.html",
    "revision": "0cc9a4d1f1c5a9b821a7707cfb48600a"
  },
  {
    "url": "task/2022225.html",
    "revision": "8851db78b7737b339365f304990dd975"
  },
  {
    "url": "task/2022315.html",
    "revision": "92fd8f62e4a143fc39066d0a765254bc"
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
