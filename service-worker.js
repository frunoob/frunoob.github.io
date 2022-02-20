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
    "revision": "82b1a16234d47d83485d2d4e1daed0d6"
  },
  {
    "url": "assets/css/0.styles.79c99c3f.css",
    "revision": "ed363941a0d7902da7443b6ea8ffe3e7"
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
    "url": "assets/js/10.9400c9db.js",
    "revision": "189bedd10c2b398a6e9d074f929223b8"
  },
  {
    "url": "assets/js/11.1b38cccc.js",
    "revision": "5e3d79d665b5fa37d2cc976ed9f6f679"
  },
  {
    "url": "assets/js/12.152e7c07.js",
    "revision": "b1f7a35ba8910bd6354cc7e05154c3ff"
  },
  {
    "url": "assets/js/13.4d1f1fe3.js",
    "revision": "861dfbb782f5f693ec2aa70f74aaa9a4"
  },
  {
    "url": "assets/js/14.99f913a2.js",
    "revision": "86c1bcef91b4a6be6ade1ef7510b3b16"
  },
  {
    "url": "assets/js/15.36ee395a.js",
    "revision": "d938ea78c63a41edf2f6f620e1aac060"
  },
  {
    "url": "assets/js/16.e4bd2d58.js",
    "revision": "4e0a63534536ef3d7350db613eeb8c9c"
  },
  {
    "url": "assets/js/17.f0ddd1d0.js",
    "revision": "738e2df80c205151f975251fb94cb70e"
  },
  {
    "url": "assets/js/18.4b0f9377.js",
    "revision": "44995b4a6dac1dbf7fcf3e196df05683"
  },
  {
    "url": "assets/js/19.100408d6.js",
    "revision": "17ca59385b47ea8365f9c376f26077c2"
  },
  {
    "url": "assets/js/2.2fdd7d8c.js",
    "revision": "2989a6bf8267ec1e0751d21b52d91753"
  },
  {
    "url": "assets/js/20.63d7a445.js",
    "revision": "697deeeb5bb1ce1bcb49e646df6d362b"
  },
  {
    "url": "assets/js/21.eb967d08.js",
    "revision": "a463743dc0770461507d847a76a4daae"
  },
  {
    "url": "assets/js/22.5204230d.js",
    "revision": "a991590938a296a2bbbd3479397be39d"
  },
  {
    "url": "assets/js/23.f2a6cfa1.js",
    "revision": "d3ecda3e6d93bec0bf62f68adb2f9bb8"
  },
  {
    "url": "assets/js/24.f6346353.js",
    "revision": "869c23f88b0fffc9f88e612a7d39baa0"
  },
  {
    "url": "assets/js/25.0cd1a7eb.js",
    "revision": "f4396fc4656f3c710a867cfe931cfd75"
  },
  {
    "url": "assets/js/26.451c5328.js",
    "revision": "dc733db8b657d138844d6429f692b784"
  },
  {
    "url": "assets/js/27.82d8c56d.js",
    "revision": "56edda2735cc9fccfe23bbc75a14be0e"
  },
  {
    "url": "assets/js/28.ea385989.js",
    "revision": "2980f11ea142ea51ce29a76600f92480"
  },
  {
    "url": "assets/js/29.ab1c0af4.js",
    "revision": "9b12c6c40f7ccdcbda2e2ec99e48d204"
  },
  {
    "url": "assets/js/3.1d5acd2f.js",
    "revision": "1cf76ac0bfd9e77ab6fcf25267ea4ea2"
  },
  {
    "url": "assets/js/30.c0235623.js",
    "revision": "2425da1d8afac0afd9f68b011701e6f2"
  },
  {
    "url": "assets/js/31.15d15d71.js",
    "revision": "dccb38613b15902ec83a4707542c1167"
  },
  {
    "url": "assets/js/32.43ea9936.js",
    "revision": "1798839994bd14f03ae49586f25e42ad"
  },
  {
    "url": "assets/js/33.24af46e8.js",
    "revision": "0bfcdce1f6dd450600477299154504d3"
  },
  {
    "url": "assets/js/34.3dac9eca.js",
    "revision": "3808b0499664c2480c918eef6beff702"
  },
  {
    "url": "assets/js/35.a7e8fc2d.js",
    "revision": "c26719a55adc39b228cb6946f306e6c5"
  },
  {
    "url": "assets/js/36.7ea86bf5.js",
    "revision": "173b41aa6206bd7c1ab045b98fe8c2a4"
  },
  {
    "url": "assets/js/37.ffd172f5.js",
    "revision": "96063c451ee4586b89e5b989081b6fe5"
  },
  {
    "url": "assets/js/38.40eb9f7e.js",
    "revision": "55647c299419c7f86edbba74b746d94b"
  },
  {
    "url": "assets/js/39.5a536158.js",
    "revision": "67fc1581f24d43134910afa304180c6c"
  },
  {
    "url": "assets/js/4.e2ae5594.js",
    "revision": "daa88547d343034748f232ed229ad2ce"
  },
  {
    "url": "assets/js/40.c3232951.js",
    "revision": "accc45092f73c847a03897bb5dc33306"
  },
  {
    "url": "assets/js/41.6fa78a1f.js",
    "revision": "5bc03b0697d271629b322fb8067af749"
  },
  {
    "url": "assets/js/42.291bcf7f.js",
    "revision": "a5b799dfb13fd70de87b1e5e619bdddf"
  },
  {
    "url": "assets/js/43.1d156bc0.js",
    "revision": "f18f309f9cd715ccb0d82ffb0c2d64d0"
  },
  {
    "url": "assets/js/44.7258afa1.js",
    "revision": "90a53cd1ef152e650479db5e141d7844"
  },
  {
    "url": "assets/js/45.6b4b42c3.js",
    "revision": "3e43a2e98d66ac99763bb2407e02a51f"
  },
  {
    "url": "assets/js/46.7511cb80.js",
    "revision": "c29aeb16faaa401a850180bb1ddac8b1"
  },
  {
    "url": "assets/js/47.1413779e.js",
    "revision": "e036535db718205a1654aaa8a7dd52d1"
  },
  {
    "url": "assets/js/48.3c863573.js",
    "revision": "6a3124d630683d4344a8099967a05e72"
  },
  {
    "url": "assets/js/49.20831f69.js",
    "revision": "8cfde4fcfc012d23f7c28a8e75f03bed"
  },
  {
    "url": "assets/js/5.af6d804d.js",
    "revision": "2c79532319ca659f76444bd5532edd14"
  },
  {
    "url": "assets/js/50.2b504ffd.js",
    "revision": "9eb26153139a3355174f3d5efb25108d"
  },
  {
    "url": "assets/js/51.16ae8191.js",
    "revision": "7e36c3524b62d6836f3079c4491ef46d"
  },
  {
    "url": "assets/js/52.573342b4.js",
    "revision": "b1af0dcf775f8e63959d02e4b6606fef"
  },
  {
    "url": "assets/js/53.ae5fa894.js",
    "revision": "21cd2e2dbee1596470e3d4f99c806393"
  },
  {
    "url": "assets/js/54.f286b2fb.js",
    "revision": "3f1446647b4234ebc4f93b57854d9687"
  },
  {
    "url": "assets/js/55.3af1ca85.js",
    "revision": "2448185c104e352293ac0c599985ef71"
  },
  {
    "url": "assets/js/56.d9bfcbab.js",
    "revision": "7cd647ee99c52ae3d92e440c71adfdee"
  },
  {
    "url": "assets/js/57.d2561d69.js",
    "revision": "b3c5b7c153e57e5c2e9f9e7e81e679a5"
  },
  {
    "url": "assets/js/58.f3bf857a.js",
    "revision": "b9384108f0834d4a29932f66ce5b004b"
  },
  {
    "url": "assets/js/59.1ba27957.js",
    "revision": "5cad86f480693a529d9e5be100888809"
  },
  {
    "url": "assets/js/6.ee344f79.js",
    "revision": "c8d55dbcec234880e6644b9b90a4427f"
  },
  {
    "url": "assets/js/60.e49d980c.js",
    "revision": "12ad687bd0f13fecbe349dbd2d562e3d"
  },
  {
    "url": "assets/js/61.39a540ff.js",
    "revision": "b7f65906ed7fbaf3e07aca1c17b8d2a8"
  },
  {
    "url": "assets/js/62.d2ed943b.js",
    "revision": "e7b711c6ded788324ed27672394fc89d"
  },
  {
    "url": "assets/js/63.754712e6.js",
    "revision": "4c0251ad9364b72191c2aef22bcf2eb4"
  },
  {
    "url": "assets/js/64.090e531b.js",
    "revision": "89e4f7b81595ec061d6c32c157e62d35"
  },
  {
    "url": "assets/js/65.bdbd6668.js",
    "revision": "ff527ca23bb42c25ef5fc58ee124e605"
  },
  {
    "url": "assets/js/66.b4817569.js",
    "revision": "a61af86329510321d26f4eb3364e89c3"
  },
  {
    "url": "assets/js/67.139d12ba.js",
    "revision": "42f579c77c72f71d4d0a49d1b4e214f6"
  },
  {
    "url": "assets/js/68.d9fe036d.js",
    "revision": "b23b8cd9eba9971e24c062f17af95ddb"
  },
  {
    "url": "assets/js/69.3c35dc9e.js",
    "revision": "c66a05200b54de908318b85ab8018aae"
  },
  {
    "url": "assets/js/7.b9f81f8e.js",
    "revision": "90c84836f981224cdd4a6941c6114478"
  },
  {
    "url": "assets/js/70.5e74ce6e.js",
    "revision": "f9bf8644baf7ffed83a9ffcdba660fb3"
  },
  {
    "url": "assets/js/71.a0fa5c62.js",
    "revision": "f59e9635fec40abc28d725d48009ec9e"
  },
  {
    "url": "assets/js/72.e87e4ec6.js",
    "revision": "c97257c353af93100a0c25acda9d7658"
  },
  {
    "url": "assets/js/73.60d20251.js",
    "revision": "22c93bb70497579c9b2ec3c096b19784"
  },
  {
    "url": "assets/js/74.6a549cd6.js",
    "revision": "6dfd59eb4c3cb6adf278f6a0491916d9"
  },
  {
    "url": "assets/js/75.c9f0a00c.js",
    "revision": "4b640ed1d1eac8cd089dd3ce901cc0ab"
  },
  {
    "url": "assets/js/76.f2276d5d.js",
    "revision": "cfa60da6d86b64b846e64f98511b7bb7"
  },
  {
    "url": "assets/js/77.5db5f59f.js",
    "revision": "1d1f1803a791c9368ff589021f661ef8"
  },
  {
    "url": "assets/js/78.444d5355.js",
    "revision": "3c9ff1f034ba6cc5f10a9a267c4b212c"
  },
  {
    "url": "assets/js/79.976f3bb9.js",
    "revision": "acf69d7782ea2b18d4d08e56f7db6813"
  },
  {
    "url": "assets/js/8.63ccb682.js",
    "revision": "f9d08554eea121581325098283806b74"
  },
  {
    "url": "assets/js/80.1d0f57be.js",
    "revision": "c41d8d0a72176965428200a858791128"
  },
  {
    "url": "assets/js/81.8d7f62c6.js",
    "revision": "4ff286f7ed2349c10abe3e1b71854f8a"
  },
  {
    "url": "assets/js/82.569749f3.js",
    "revision": "c03dd6d8d376d68c5e0679be64320c12"
  },
  {
    "url": "assets/js/83.044e1a17.js",
    "revision": "e77fc4d5363950b9940747c5483c85fd"
  },
  {
    "url": "assets/js/84.1a1bcad5.js",
    "revision": "7a2eaa5d2db6a2aa5c318cfd9847c9ba"
  },
  {
    "url": "assets/js/85.e7b7ff1e.js",
    "revision": "e22a56a1d471eb1cf1de2d8a13243230"
  },
  {
    "url": "assets/js/9.fc34508c.js",
    "revision": "1b0a65923094b89eaabf359d4b061d12"
  },
  {
    "url": "assets/js/app.7fe1a01b.js",
    "revision": "d930c398dd93a3620b9f641e2ee5495f"
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
    "revision": "d28a5bc649626b5215c75a6d209aac85"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "0d5d67bfbc93a91b07d35a86d89b9e25"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "5bee6c7177cd51fea6f18f551cafa832"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "fd693152a8d9c4584f423635b6768f82"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "1abc576aaa96cd9ab485c9872b07f1a4"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "f89fc4feea6d94c089e08a2a429b9482"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "ed25630ac305d797f981b2f66d6e13dc"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "4d0bafc4de026f7f228b05575013c248"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "54c3a0addde0fb895f8617a19dc84278"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "6126fbf7105b6f2d48e199d4e082cbb3"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "a1ada344fdab4f72f56f0fcae5b8ae77"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "d87249f0a14b743eda48f7e52cdec858"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "20a079916ce1fbb26685ae7720bb836a"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "62c8ccd605c4ee362db8559dd4fe27af"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "435393b78e0f490ae7dce92a4b763e7e"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "b7431c8810f4d6dbae7f31f0fd715538"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "00d7d951346fd8771490199f9c181163"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "57d495389ab7deb4e9d03b6e7abd7242"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "5811b5555ee9c883a1c6a58ab04c29c1"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "edf19b3d319ee9ef053dff5b12527fe5"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "fdf2e4c8581e3fa05cb83a7aadcd2e2b"
  },
  {
    "url": "list/20220218221737.html",
    "revision": "9580ac04f9c6bc470b1e2193d09174a1"
  },
  {
    "url": "list/20220219115441.html",
    "revision": "c62a38a197298b8cda7b9c0b09338b37"
  },
  {
    "url": "post/plan.html",
    "revision": "6e5768deba8e3221fc079030667c70e2"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "369a398fed01d78a2d5c8cec1426bba7"
  },
  {
    "url": "study/english/words.html",
    "revision": "7881bb469c485b72d169cae2dc137605"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "7932ed380d2ee9103af9c0f5c9cc6e5a"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "d03cf68d72bd7648d86b6d59ccf3ce94"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "aa4598b7df68775411d83d439db9846d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "18d29d8c27181a12a748b0ad78a41102"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "dbe251fbf0c70a146dd718991821c405"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ef39d7e1c10073dfb44437f5e9994cda"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "8e189da76f61b5adb5494b72c3de1ea8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cf5a2f2d7ab44abf3897ab66d6c91afb"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ff6ab851c033550cd23920b6ec2e7627"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "2fd8f90eb2107d0603fec118a7e26c47"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "0c74572d40d180e089222d9c5c3003ba"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ad716a471c0e78101875d6464fa9f066"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e68ef24eb70139e47c27eeac794cca53"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c05a3053f31d5e8ed79a70900636f198"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "02adb6d40155437bc33aacb6baa4ee52"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "404498eb51f4b67dfc4342a762d04051"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "e16591660f8ba39e30ff34cc3a80958e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0ef15a6532f9c7552cb26f6b94cee35e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f2d80233dbb07a2cfb73cf3b8d4ccee5"
  },
  {
    "url": "task/2021511.html",
    "revision": "00102e287c9a339cc3e83842ee26d816"
  },
  {
    "url": "task/2021514.html",
    "revision": "282ffe95b08834f62acd92f16794b378"
  },
  {
    "url": "task/2021515.html",
    "revision": "a01d73927d2da6d76918ef31fda69b09"
  },
  {
    "url": "task/2021518.html",
    "revision": "177074e987daf7ed2cbf9dea90901f3d"
  },
  {
    "url": "task/2021519.html",
    "revision": "73a7a059da3834ea76c5bb9a5aa2f601"
  },
  {
    "url": "task/2021520.html",
    "revision": "0da49013120cb6f819f4c5483c05264e"
  },
  {
    "url": "task/2021521.html",
    "revision": "546969883d4ceadf8ece20b0c2091d3d"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d113778ded9eb0f1d4028c7106ad9a3a"
  },
  {
    "url": "task/2021524.html",
    "revision": "679a2f3ac1545a1022e39716b4b4f1fd"
  },
  {
    "url": "task/2021531.html",
    "revision": "6d4d260677319fe744e95eaf9e2dae48"
  },
  {
    "url": "task/2021628.html",
    "revision": "c68a736ba8827104470b155736a6fd25"
  },
  {
    "url": "task/202164.html",
    "revision": "cc869ae22c9a3b3a138a7f9c8db6ae5e"
  },
  {
    "url": "task/202169.html",
    "revision": "6822505ed51ca81dd3956d1772f85e44"
  },
  {
    "url": "task/2021717.html",
    "revision": "a56347303024cdbbcb44e4a4b5ebb26e"
  },
  {
    "url": "task/2021721.html",
    "revision": "47beaaebbb386b6608a55028d9916abe"
  },
  {
    "url": "task/2021722.html",
    "revision": "c774c08c7abbc749647c325027dc91b6"
  },
  {
    "url": "task/2021724.html",
    "revision": "5069c7884c0ff9244c0837df790831d2"
  },
  {
    "url": "task/2021725.html",
    "revision": "c577498491ef472fdbe8c11422affed5"
  },
  {
    "url": "task/202181.html",
    "revision": "9128d2f838e15a0a91f560c8b8716798"
  },
  {
    "url": "task/2021811.html",
    "revision": "ab887055f598eda9439e3c4093665b3f"
  },
  {
    "url": "task/2021812.html",
    "revision": "09e023e2ed7d8551a64b6a446bac48a0"
  },
  {
    "url": "task/202183.html",
    "revision": "14272979d2091752043ce2f52d256ad8"
  },
  {
    "url": "task/202187.html",
    "revision": "c8a790d9ea28c5f444f1c3b58a7a4f14"
  },
  {
    "url": "task/2022218.html",
    "revision": "1316c8f5d8ee2ca6d3e454cf448b1a77"
  },
  {
    "url": "task/2022219.html",
    "revision": "d883a0f4233c83288810666760107081"
  },
  {
    "url": "test.html",
    "revision": "7167dbc3723212870abaae517aa99925"
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
