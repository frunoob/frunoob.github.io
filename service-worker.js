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
    "revision": "74d3c95977c1a1da50ef0ed6a90dc817"
  },
  {
    "url": "admin.html",
    "revision": "34a808d66d13ba7242cfdd92ff68e6e9"
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
    "url": "assets/js/15.2bade82f.js",
    "revision": "76f3dcc6ada083d675333bc0f4ed71ae"
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
    "url": "assets/js/20.69685061.js",
    "revision": "b6a8ab63ebddd2abbe30549271f289ad"
  },
  {
    "url": "assets/js/21.01550aba.js",
    "revision": "309e57e0e8eea6faeb0ecdcd84962eac"
  },
  {
    "url": "assets/js/22.ee3700b0.js",
    "revision": "440316dd3330fab101aa8ad2a76149ad"
  },
  {
    "url": "assets/js/23.a856ce9a.js",
    "revision": "14176d9b92e873a0e7033217568b2e87"
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
    "url": "assets/js/27.b3d4d43e.js",
    "revision": "bef2de9f0f1828adfcd189e34f2154fa"
  },
  {
    "url": "assets/js/28.b6809d38.js",
    "revision": "9a6e06b603252a27ba6c8efc2d81f63a"
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
    "url": "assets/js/36.642e307b.js",
    "revision": "8c8cc72c3c9defa06ef6cbca05f86d3f"
  },
  {
    "url": "assets/js/37.9714f603.js",
    "revision": "0bc638105a97e7eba2992ed968952cb5"
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
    "url": "assets/js/64.807ec4b5.js",
    "revision": "7bfe0fb84a560984b3c32ff7772afd6e"
  },
  {
    "url": "assets/js/65.d8d8de98.js",
    "revision": "24266dc53299ce9bd0ba3733e96ac14d"
  },
  {
    "url": "assets/js/66.4cd2c012.js",
    "revision": "20926067a07733631998337f6b6373c6"
  },
  {
    "url": "assets/js/67.ba5bef15.js",
    "revision": "ca9332d3cdd2bf076a90fd37c13d379f"
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
    "url": "assets/js/71.db8eff65.js",
    "revision": "79bd7a0fffb96205212dd9224c6bdd7b"
  },
  {
    "url": "assets/js/72.fd392d52.js",
    "revision": "862c52239cfd62d48ff67543c5c74067"
  },
  {
    "url": "assets/js/73.c1988504.js",
    "revision": "46501b0ec2096fc958ba579ca993a66d"
  },
  {
    "url": "assets/js/74.3012db21.js",
    "revision": "3a4c6430c53ae805b9307dbba04ffee3"
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
    "url": "assets/js/78.514a5f02.js",
    "revision": "5a29d6826be325d54910626a705b5ade"
  },
  {
    "url": "assets/js/79.5d8fa925.js",
    "revision": "70a63f7a7eb60c2e64af71f52193765f"
  },
  {
    "url": "assets/js/8.a3be066d.js",
    "revision": "b911d15f63a017cfd1c976b9316dc52c"
  },
  {
    "url": "assets/js/80.d049b8d2.js",
    "revision": "a05906716e154284870c8ce2e28cb647"
  },
  {
    "url": "assets/js/81.09f81def.js",
    "revision": "15cc0a7281542ac49decf3f66e9f2acd"
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
    "url": "assets/js/97.ef56cdc1.js",
    "revision": "d7d1f0991ce6c0cb1e5bec75dfde3c35"
  },
  {
    "url": "assets/js/98.acdd588e.js",
    "revision": "420ec99e9cfcba2eb813b405fb4b0b47"
  },
  {
    "url": "assets/js/99.f5116536.js",
    "revision": "98361979ccbcec1a209a9c9314a0b7f1"
  },
  {
    "url": "assets/js/app.0d0178eb.js",
    "revision": "6fd3827a1be4a7c9ff8879e0e0fe4ac6"
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
    "revision": "427dc406e3fa13d21c8781c5421898fd"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "eefe43e4ff4586bceedfa91b1bec6ed0"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "96e2b5c005acbb2aea09649df935dba8"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "d92cc973585e0bfccb1846ae2a19d4e9"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "dfe77542bdfc05f4ca9afbdf0bea2132"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "542dd4a94571dc38c8d6a1ba5fe41244"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "4d70d07f70942aefcd63a716e6b7880d"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "f7e5038b1c8cc6a29f949f5439e55432"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "da80f6d7f5a1f3ea888dc01bd1a23556"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "de237206740db4819b27079f299098eb"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "89783daece43870e3a29fa44067f1b9d"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "ed04bee632a724ebe1047e67d94026b1"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ef892f5bc8a4c40f30317999ad99f738"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "fa4ba0518f0e1edfe1ab6066e4483571"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "c730f89386685b80ef92aa31962ec781"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "76e72a26e985d329418dcb607215dce8"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "8125d07096bb303e081e7e9ebbced29b"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "f4448c186ed2ff344f3076de50326a5a"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "b29b918494a289ef169d6bb1111c7fdd"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "dc739ded01c05408a7e772bf9f092da1"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "cd30f8ca176a330cce20f02963756d9c"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "b7a4cb12aabbaf022bd39595f0484a07"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "4d5f02b6d427c5ec1b6f37e88ef8b6f1"
  },
  {
    "url": "list/20220220150004.html",
    "revision": "e29e231dbace59b99d8f7ea17ca64067"
  },
  {
    "url": "list/20220220235250.html",
    "revision": "8922708626529ce68ad3192acab2c4b2"
  },
  {
    "url": "list/20220221000030.html",
    "revision": "0bc35ddfb5968ec8b3b2797bde5b2368"
  },
  {
    "url": "list/20220221110932.html",
    "revision": "080bdbbb7eb195c795818168cf8178ca"
  },
  {
    "url": "list/20220222143459.html",
    "revision": "984cbb8a1d08338822c7b3f34e8cec7b"
  },
  {
    "url": "list/20220223181058.html",
    "revision": "e3c0b0ffa5ee14a114d05f897e9994b2"
  },
  {
    "url": "list/20220223195033.html",
    "revision": "92f6181fcadf7b30831043464f697228"
  },
  {
    "url": "list/20220227191319.html",
    "revision": "9291cf2de67cd0ab4aa0660694206885"
  },
  {
    "url": "list/20220227201810.html",
    "revision": "7c5c62ca458685adb6d64d7b1e8f51f0"
  },
  {
    "url": "list/20220228165307.html",
    "revision": "b2a56f922e3852fd3d98b1e44f3cd87f"
  },
  {
    "url": "list/20220305135058.html",
    "revision": "8bf3a6dd41e484ebebc9a5b4b502df09"
  },
  {
    "url": "list/20220312145553.html",
    "revision": "e39a2ae5df5cdf8e4ec9dcf4126b41f9"
  },
  {
    "url": "list/20220314121500.html",
    "revision": "cf4e3cdb1b4131e7704296ba073a4fbf"
  },
  {
    "url": "list/20220318131950.html",
    "revision": "fe380b87b4fcf016237351a3b5da8d8f"
  },
  {
    "url": "post/plan.html",
    "revision": "c0224ae3a1eb3a91bffbb455228e43ab"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "4f21fc0202f53ee8120fa16549e8b22b"
  },
  {
    "url": "study/english/words.html",
    "revision": "3df9f6a93f2593ca9be3071b7556076b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c48c10fd3efb1b8019bc40bc248d7f7f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "e15f8c788a7e6db1e6fdc36b07f25220"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5a6be6b0c6eeb547d583b8f28863b2d4"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e72afd7ac44291cbac64266f32916edd"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "5d344ef22f780502da76de12014d9a61"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "848ba99cb1f1310165b3add50cee8d3b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "90da39601d5cb6abab148e28866e9fe5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "4e1a1e56f0abfc3918f66c1e3e7711b2"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "fc6eed46cb423c305caac72569ee69e8"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "47164c265e1a2fa80edfdb3a0b017a46"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "9f2a89810ec68f93f76beba16346c7d8"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ddca448da71734d28cc71f761c31ab29"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6ae0b764358a1876ff029ce63f3d1526"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "283819487ee4f892d460d3083f697d9f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "113d342ae420d1260031725565b01177"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "275a1d00808f25e83ce087300cfccfbb"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "783a57c2d875de09f1f742c45eba8ca5"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "fc4fd30ecb4d37f8003a7b6a2d4df048"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6f3d0636ee211080bfa0cd9b30d19a84"
  },
  {
    "url": "task/2021511.html",
    "revision": "91ef53958d43fd4809933e6739b82fa8"
  },
  {
    "url": "task/2021514.html",
    "revision": "004eb902d4800e18d4830573659f7e5f"
  },
  {
    "url": "task/2021515.html",
    "revision": "c4f2bb5040bf0da95f79a48aa6fc6344"
  },
  {
    "url": "task/2021518.html",
    "revision": "dde6106f88fdb779cc7e57c636db1abb"
  },
  {
    "url": "task/2021519.html",
    "revision": "194fc3a24d8c83d6d601eda2a322803c"
  },
  {
    "url": "task/2021520.html",
    "revision": "1f1ce943dd21724af82ed4fef23e9f92"
  },
  {
    "url": "task/2021521.html",
    "revision": "593d5865be26a1d0ee5d814f1caadd95"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5877b4afae704c967bca6be9f8ac7be8"
  },
  {
    "url": "task/2021524.html",
    "revision": "1362a2301cf5d3a7e9ae35adf65d9119"
  },
  {
    "url": "task/2021531.html",
    "revision": "6b67f04dd8cbad4c5ff1a99c09fcf882"
  },
  {
    "url": "task/2021628.html",
    "revision": "7b4af1a4c39c27ced10a63e6cd00cc8d"
  },
  {
    "url": "task/202164.html",
    "revision": "3a809e5f23ca69efece9e50c2d94d21b"
  },
  {
    "url": "task/202169.html",
    "revision": "bacfb0b0f29ac4b0bf48ad6c6471e74d"
  },
  {
    "url": "task/2021717.html",
    "revision": "2765fde8b181a728463891d33d7e619c"
  },
  {
    "url": "task/2021721.html",
    "revision": "d1cb3f3f77da0ebaa63c18dc381e4ec2"
  },
  {
    "url": "task/2021722.html",
    "revision": "186943902747a09765ac47241e0361fa"
  },
  {
    "url": "task/2021724.html",
    "revision": "b47325caaef473b7b2e3651649468bc5"
  },
  {
    "url": "task/2021725.html",
    "revision": "e4297c9bd386c6de70f917b096484a56"
  },
  {
    "url": "task/202181.html",
    "revision": "ee839854a4d649b23c19a30e05cf545a"
  },
  {
    "url": "task/2021811.html",
    "revision": "81791be38743fcb2b7a5d72d7f8e450d"
  },
  {
    "url": "task/2021812.html",
    "revision": "0b019a9a209aabbfde9d2b5823c29224"
  },
  {
    "url": "task/202183.html",
    "revision": "3e6d6b3d1e68eb67f3610e5e5dc3a570"
  },
  {
    "url": "task/202187.html",
    "revision": "cc7f04191722da334d2841179bfdd337"
  },
  {
    "url": "task/2022218.html",
    "revision": "57920eda08350b6233a957ec425c7ff5"
  },
  {
    "url": "task/2022219.html",
    "revision": "197e7ec50cf850f978cd7c80980fb1bc"
  },
  {
    "url": "task/2022222.html",
    "revision": "47fcf12436a699fc410cd09a36979174"
  },
  {
    "url": "task/2022224.html",
    "revision": "f9eaffd89ac33f4d6ce1fda540d9fb87"
  },
  {
    "url": "task/2022225.html",
    "revision": "b89814154aa2ce689d37476300c48182"
  },
  {
    "url": "task/2022315.html",
    "revision": "9cc72735279cfc4462351a9069778c3e"
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
