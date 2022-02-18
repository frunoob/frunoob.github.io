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
    "revision": "f0cc766a346573b971146d398380a31a"
  },
  {
    "url": "assets/css/0.styles.44fb43de.css",
    "revision": "c996bbb890cd8222c53f2129ec9e0a79"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e866263a.js",
    "revision": "cd3244521216fac8dd7d6958652ff0da"
  },
  {
    "url": "assets/js/11.35c4e688.js",
    "revision": "b9e8651ffe2562c9d7bff590ddd2a3d9"
  },
  {
    "url": "assets/js/12.66f0eff4.js",
    "revision": "332ccd498f61ad08b60ff718b23c7c6c"
  },
  {
    "url": "assets/js/13.2dd870da.js",
    "revision": "4b9647ea121e6113d9775d8202aa18b2"
  },
  {
    "url": "assets/js/14.9226470f.js",
    "revision": "2ff7285da6682b59011ba62222e92636"
  },
  {
    "url": "assets/js/15.09ef2ae5.js",
    "revision": "bfb2cf1a20b008f055e457957d1cdd74"
  },
  {
    "url": "assets/js/16.078e648d.js",
    "revision": "183e748aeda6c3d3e675ef081f4e5512"
  },
  {
    "url": "assets/js/17.389ff758.js",
    "revision": "eeed5b457c9e684a1eb7802115ebb0ce"
  },
  {
    "url": "assets/js/18.78138adb.js",
    "revision": "182403516110b90b2f6b9cb90bff071e"
  },
  {
    "url": "assets/js/19.acd720ce.js",
    "revision": "c809955e67dcfa6ba44004169562ad5d"
  },
  {
    "url": "assets/js/2.1cf517e5.js",
    "revision": "3c9de1807c0f65fd0cd4f1db1a6228fa"
  },
  {
    "url": "assets/js/20.7d2c521d.js",
    "revision": "126f8e1a699b7e0172e5eb1ffc2f1af8"
  },
  {
    "url": "assets/js/21.3738e1f7.js",
    "revision": "5692a0cbb1896a9d511c520e9b4a1ca8"
  },
  {
    "url": "assets/js/22.3b7472fa.js",
    "revision": "6c6faba7862763f006968b9c3f0d7157"
  },
  {
    "url": "assets/js/23.3d05b315.js",
    "revision": "ef9acb8fe3975f9241ba33a0dbd4a6da"
  },
  {
    "url": "assets/js/24.cf6edc15.js",
    "revision": "f88ed5ef114b48aa34e691761447af3e"
  },
  {
    "url": "assets/js/25.7d64435e.js",
    "revision": "22bb6dfda3e1dbb2b45315a36e0f09c3"
  },
  {
    "url": "assets/js/26.d27b9097.js",
    "revision": "58e59667848bbd4f108f8965db105b0f"
  },
  {
    "url": "assets/js/27.fb5c4674.js",
    "revision": "e28352c3c9cf6951839cdb060a13249f"
  },
  {
    "url": "assets/js/28.ae4b0f6b.js",
    "revision": "161bba65aed4d75243bc795ecd7065c5"
  },
  {
    "url": "assets/js/29.32899d32.js",
    "revision": "a602959c8fa03a946399c645d95262e6"
  },
  {
    "url": "assets/js/3.7d335372.js",
    "revision": "17b9adb6e931cda9bd3a68e373e3d563"
  },
  {
    "url": "assets/js/30.89ca1d45.js",
    "revision": "54bcbe8cc3401e76b70c0162894b4e28"
  },
  {
    "url": "assets/js/31.4846bce1.js",
    "revision": "e3995912581eec0a04f149b1a9d24fff"
  },
  {
    "url": "assets/js/32.60251a79.js",
    "revision": "36110e2796695a632f8a7b0faed01bda"
  },
  {
    "url": "assets/js/33.e13ee046.js",
    "revision": "e30f0bff618eddedf1bb74b55809af92"
  },
  {
    "url": "assets/js/34.1034dd84.js",
    "revision": "7d4a7115fb496dd18a32f617260da571"
  },
  {
    "url": "assets/js/35.e9e562b2.js",
    "revision": "98118e1fc970f6d50c72878b3a7bc242"
  },
  {
    "url": "assets/js/36.9f05d23a.js",
    "revision": "3f53b9b99aa0b0b0bce4330567fd0743"
  },
  {
    "url": "assets/js/37.df26a62d.js",
    "revision": "50e4b31fd1ff58002827779a4257b6b1"
  },
  {
    "url": "assets/js/38.99304b5c.js",
    "revision": "11de8bfd91257dbc78138be4392d564d"
  },
  {
    "url": "assets/js/39.390944d7.js",
    "revision": "1e4d23b990d75bdce348e7aa5f387930"
  },
  {
    "url": "assets/js/4.79da93f8.js",
    "revision": "4bfedd3e0df8e8070b9b8f7c036b6d87"
  },
  {
    "url": "assets/js/40.6b7282fe.js",
    "revision": "72da33d7173761dd89130a5e93c7584d"
  },
  {
    "url": "assets/js/41.f9854523.js",
    "revision": "b77a04658b3c60a8f57ccbf135f07a7e"
  },
  {
    "url": "assets/js/42.97e0c364.js",
    "revision": "dec26780b0b8921aae8718dff58bf467"
  },
  {
    "url": "assets/js/43.47456a26.js",
    "revision": "12ab69459dc642af7ac60e77ee99e993"
  },
  {
    "url": "assets/js/44.2fe15566.js",
    "revision": "8a1c284ecceded478f144ef540577ef0"
  },
  {
    "url": "assets/js/45.a804c695.js",
    "revision": "53fa11d16a7ab35817a79502dc5f5201"
  },
  {
    "url": "assets/js/46.ab85a126.js",
    "revision": "54a31ca094a86471623adc99e9c3f3e5"
  },
  {
    "url": "assets/js/47.677942be.js",
    "revision": "196550913f10c5ca366696b2d2c32928"
  },
  {
    "url": "assets/js/48.597f9cf5.js",
    "revision": "3146ce106460a6fa1afee9efb6ed91af"
  },
  {
    "url": "assets/js/49.7cdc0728.js",
    "revision": "d008d432733524aa685209cb66627d3f"
  },
  {
    "url": "assets/js/5.eef84525.js",
    "revision": "875a6462866a43314522b4700a03d99c"
  },
  {
    "url": "assets/js/50.c552f8f3.js",
    "revision": "4ab3f04adf91198c0e78255473ad8582"
  },
  {
    "url": "assets/js/51.da9e2d3f.js",
    "revision": "2250a17a45d15716bc58e033c8d8981e"
  },
  {
    "url": "assets/js/52.636fdcd2.js",
    "revision": "492fe72feb46b0d976e7edc43a3d8f4a"
  },
  {
    "url": "assets/js/53.b0dcc106.js",
    "revision": "4fd738e77c3318dc171e97a0558068df"
  },
  {
    "url": "assets/js/54.0cb7c35a.js",
    "revision": "a98e0258829b6808a54d878a61bba3b1"
  },
  {
    "url": "assets/js/55.05df8f52.js",
    "revision": "e7856ecbc414e7bd439c6f1b750aeb0c"
  },
  {
    "url": "assets/js/56.ba67d5c5.js",
    "revision": "658a388f8f25fd3afe15f483b7e7fd16"
  },
  {
    "url": "assets/js/57.f96487a2.js",
    "revision": "92bcf5b222a4a06b3b358f9a12bf5d88"
  },
  {
    "url": "assets/js/58.b535d8d1.js",
    "revision": "9883e4c58be8cd9dfaeefa2ea8278b37"
  },
  {
    "url": "assets/js/59.5ad20fda.js",
    "revision": "5e1f4a8d5d110359634af7d17198f419"
  },
  {
    "url": "assets/js/6.31c64cda.js",
    "revision": "dda85b5b232d182c8ca5c4a7710766e1"
  },
  {
    "url": "assets/js/60.08d33987.js",
    "revision": "febd1e2f6a73f9855363a019e9e23885"
  },
  {
    "url": "assets/js/61.eb117413.js",
    "revision": "52761bb457487478832c6fb3a496a42f"
  },
  {
    "url": "assets/js/62.24c5016a.js",
    "revision": "7eafeb2a975a9c9562907f76cc9ca5a3"
  },
  {
    "url": "assets/js/63.b800b190.js",
    "revision": "5ab6a6b8b3cfbdd6b757cc1cbb8e53cc"
  },
  {
    "url": "assets/js/64.076a8613.js",
    "revision": "6f88248312491dea96a9f05b1643860b"
  },
  {
    "url": "assets/js/65.4e793318.js",
    "revision": "9ef0df5c98bc6a32dafb91f7a6acb6d3"
  },
  {
    "url": "assets/js/66.5c503fab.js",
    "revision": "7315f0737f06974dc4c46e581355b2e3"
  },
  {
    "url": "assets/js/67.822ad638.js",
    "revision": "95c440b7f4b31c6d272bcaf5f93cf1a7"
  },
  {
    "url": "assets/js/68.687ac739.js",
    "revision": "d0b21b5b04ca6e41762506172aa509f1"
  },
  {
    "url": "assets/js/69.d0ca8974.js",
    "revision": "9bbe25c75a63a58054e292fd6467ec06"
  },
  {
    "url": "assets/js/7.b75e0492.js",
    "revision": "7130ed44d55509fb31a8b82b06a0dd88"
  },
  {
    "url": "assets/js/70.05d99c2b.js",
    "revision": "ac9881ce6d8a1eafd65105790cdc7c42"
  },
  {
    "url": "assets/js/71.43b1e7ca.js",
    "revision": "c5f957c2d9f0309b67fe9708c28eab5c"
  },
  {
    "url": "assets/js/72.ccbcc4cf.js",
    "revision": "91b935dc9e8b1bed64ad49164d1a884a"
  },
  {
    "url": "assets/js/73.8774e5e3.js",
    "revision": "78f2d1aef704be9d81068a32533aa9e0"
  },
  {
    "url": "assets/js/74.fc543813.js",
    "revision": "48f7ccd513aa30a6c82c7a4cb0cacdd5"
  },
  {
    "url": "assets/js/75.c762b436.js",
    "revision": "75ec4c49c1e14bef4be608843549dd82"
  },
  {
    "url": "assets/js/76.00eef61b.js",
    "revision": "2076b819b183461fa9b5adb3639e0fe4"
  },
  {
    "url": "assets/js/8.5bc02e15.js",
    "revision": "70ee5abb76c1f0d84d7f653b9b116b90"
  },
  {
    "url": "assets/js/9.93c35660.js",
    "revision": "caf4d2b319a6ad161ad12e2206ee8682"
  },
  {
    "url": "assets/js/app.8149300f.js",
    "revision": "ff7f088db8448bafc329dd9a02b5e40d"
  },
  {
    "url": "index.html",
    "revision": "e2e20d1a80066ef563021fb60b89efc6"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "602a8e53f037a1c2e1fc0ab298f5117a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0150867f95a1d37c48d698fc6e44f070"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "947ecad2d4b1beb54b5d60140c6e17e6"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "cbeddab0f7598df69cadee0930cc1af3"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "82a2218c9120c4d9a4f9b7c8db5c6535"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "e425fe7dc97ded5299c0f2482e2e3b73"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "ea675d6518cd53be2516eb682e3f3d0c"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "37c65cb364d94e44e279ea91e127e1dc"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "9037472b5f5967f2be4af94a2697ef34"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "6cd1c737d534f3e97d9515cb28683d2f"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7b6c2efeef567a08cf64207cb248c1a2"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "0754d7cbf3c55a4b66f2b45b82231979"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "3419c29a110b4d5cb241826a52139bb0"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "6d4e72c5da90e45198d08637420a284f"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "c044375ce6fbaba20a3afee27d57af00"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "69578cd32775e5342c2fe63a6a947b8a"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "9e46e8d7716b217f555d29a0b4c1fdec"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "0d19dbd76131f203cb3a3caf7493dbc0"
  },
  {
    "url": "post/plan.html",
    "revision": "d9fead571254c14b84f52d8f6c7ee593"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "2c253a7231a17b2623be420f01bf0ffa"
  },
  {
    "url": "study/english/words.html",
    "revision": "af1b72773108b50e2d90d52d6edefb84"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "92bf10224d324948fafe00db2209400d"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "2a33e0b30865f4bbb9fb492bd9e9f51a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ddbbb350aaa534feede9bb551ef4e79d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "76eef9e4661c8c65cb08502d88166bbd"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7e0609b4a6ed83a84245c0387b45b04c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ad9922f025a5a43bbad4203ef81cab8f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "5372851a5c441faa1e2d5b1a2a22c94c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b85a1a44d98aad5857b2290312e781fb"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "1dc2f5290bbf7da36f0c2de07334c384"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "872bb856d95b00ead05af5a928b21606"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "9eaa87ae0dae11b3c0effbe99cd46cd1"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "86b1b12dde2b06f1c37ce12db53c129a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a7dcd580088ec224fe31acddecd832d0"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "d756be55bcc1ef9595973b37cac0795e"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "e8edefd0df3c525f483a54a2242de332"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "3160ad91acf6e96ae5cda960edeec6ec"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "752c929fe83d50f05c37196cdd2dc020"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "25f1aba2a91646f35be21a068635dc0d"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "b9469175241a7f9f685f3a215950c675"
  },
  {
    "url": "task/2021511.html",
    "revision": "d6ac03ac4e5d2195047d21162a0f3c93"
  },
  {
    "url": "task/2021514.html",
    "revision": "9bf0285ca44f6d53e11d85bdc2f429b4"
  },
  {
    "url": "task/2021515.html",
    "revision": "45aeceae3b7fbfe3e15dcec8376014e1"
  },
  {
    "url": "task/2021518.html",
    "revision": "5ec596c6882b865a2d720083ccb9b759"
  },
  {
    "url": "task/2021519.html",
    "revision": "cc03dffbe3b7a720fdc9e91c10ab556d"
  },
  {
    "url": "task/2021520.html",
    "revision": "25ead53f9f7ecd75c62eb3d10727dab3"
  },
  {
    "url": "task/2021521.html",
    "revision": "46b1fe3fdbd3551942c0da699982770e"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "feb897ee2a1da15765cd77c9b24e2062"
  },
  {
    "url": "task/2021524.html",
    "revision": "53abc75926e81fef4a70f41cdba9e428"
  },
  {
    "url": "task/2021531.html",
    "revision": "f2c6cff9694cf886d86d4ed271326754"
  },
  {
    "url": "task/2021628.html",
    "revision": "c7b39906a1665a7f270041efbe42c350"
  },
  {
    "url": "task/202164.html",
    "revision": "1c4455df9dfcd4134f0704d25257855b"
  },
  {
    "url": "task/202169.html",
    "revision": "f8eb28a48d131a5b65f8a410c773616f"
  },
  {
    "url": "task/2021717.html",
    "revision": "cf7c7e18e5f5f1d45fecf643e35bf3d4"
  },
  {
    "url": "task/2021721.html",
    "revision": "ab22c777e0496c68d1b5e19d452eabbc"
  },
  {
    "url": "task/2021722.html",
    "revision": "a9937f9fea600839720d94ae7cd965fd"
  },
  {
    "url": "task/2021724.html",
    "revision": "3d7114e3403fac9b18a4f67d045d506c"
  },
  {
    "url": "task/2021725.html",
    "revision": "375c94ba502b4d8463ab13f4a434f7f6"
  },
  {
    "url": "task/202181.html",
    "revision": "206427d635f67e707fd9fb1aaef713b6"
  },
  {
    "url": "task/2021811.html",
    "revision": "c5e120701b10edd49fa237b607166f19"
  },
  {
    "url": "task/2021812.html",
    "revision": "fdad26234c5b43548f149742947c1828"
  },
  {
    "url": "task/202183.html",
    "revision": "9763546e68a5eb5e581407801e8aad1a"
  },
  {
    "url": "task/202187.html",
    "revision": "6dbfcc2e1306d1c60615ed877524f66f"
  },
  {
    "url": "task/2022218.html",
    "revision": "a0d1d309ca25cbf9130913cd7882a0ca"
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
