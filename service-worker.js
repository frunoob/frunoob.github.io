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
    "revision": "fc16d689a23b7c397e5edc64cf22224a"
  },
  {
    "url": "assets/css/0.styles.74a93b37.css",
    "revision": "44150627f04e59a94ac9bc6563dc2c54"
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
    "url": "assets/js/27.4cddb391.js",
    "revision": "d3277634ae1a4190a916bcec119aa29c"
  },
  {
    "url": "assets/js/28.ae4b0f6b.js",
    "revision": "161bba65aed4d75243bc795ecd7065c5"
  },
  {
    "url": "assets/js/29.c0932232.js",
    "revision": "f5d307ae30f7914d7b9016884e62057d"
  },
  {
    "url": "assets/js/3.7d335372.js",
    "revision": "17b9adb6e931cda9bd3a68e373e3d563"
  },
  {
    "url": "assets/js/30.9ce39b95.js",
    "revision": "2bb242610fb83aeb1342689b27063360"
  },
  {
    "url": "assets/js/31.5f334c9f.js",
    "revision": "d2298f58a1899d866cb4202542a012cd"
  },
  {
    "url": "assets/js/32.6cbd5f30.js",
    "revision": "a0d2e15703ae57155c958d60ef35b2d1"
  },
  {
    "url": "assets/js/33.878f49e4.js",
    "revision": "eb484d39f2e6a3c618594d9355b41245"
  },
  {
    "url": "assets/js/34.31fad8d3.js",
    "revision": "f78e5fcc15b221e309567f51511f6f7d"
  },
  {
    "url": "assets/js/35.9e836082.js",
    "revision": "8eb5d9218bb4f9e8ecad6ae20f0f2c87"
  },
  {
    "url": "assets/js/36.45b35dac.js",
    "revision": "787a97e1d8c0a43b0b71d20ed3ebb1f9"
  },
  {
    "url": "assets/js/37.a18be069.js",
    "revision": "1219e14a6f49cbbb17c0205c972c237f"
  },
  {
    "url": "assets/js/38.9998b35a.js",
    "revision": "11ed95a759794666968a97cd3a11e1e0"
  },
  {
    "url": "assets/js/39.bad2c93a.js",
    "revision": "9a8579cfa13d3b3a56bd197e2d4308b1"
  },
  {
    "url": "assets/js/4.79da93f8.js",
    "revision": "4bfedd3e0df8e8070b9b8f7c036b6d87"
  },
  {
    "url": "assets/js/40.8e6473b2.js",
    "revision": "025a06c63928b9dbad874104474476cc"
  },
  {
    "url": "assets/js/41.cf0f4ce4.js",
    "revision": "e6001634c8c20bf00807db3d0bba1e81"
  },
  {
    "url": "assets/js/42.f0e0a565.js",
    "revision": "6bd6cb3e0e0660dad8f522774b2ad0ff"
  },
  {
    "url": "assets/js/43.bb1a02e2.js",
    "revision": "86df26b7b07013701efdae7e1352fc86"
  },
  {
    "url": "assets/js/44.26090429.js",
    "revision": "b70d63edff572733be76403b5b04317e"
  },
  {
    "url": "assets/js/45.f86c99e5.js",
    "revision": "f2153e50c28f675e2a20ebea6d9ba560"
  },
  {
    "url": "assets/js/46.3249a408.js",
    "revision": "97a65f4aed660ac0d7cd39a982cc4075"
  },
  {
    "url": "assets/js/47.ef37bf60.js",
    "revision": "5df34800d1f67b82c29040e6ac267078"
  },
  {
    "url": "assets/js/48.7e1a5ff7.js",
    "revision": "c6ba03510998d99ada81dca9e33fcfa4"
  },
  {
    "url": "assets/js/49.814a8029.js",
    "revision": "ac2c6d827af036f6ad772fa481a0750e"
  },
  {
    "url": "assets/js/5.65878da0.js",
    "revision": "60a9fb502dba2f6f42ace3f916107782"
  },
  {
    "url": "assets/js/50.931d1a10.js",
    "revision": "c36f236e9119a1fb4353ff7949a3940b"
  },
  {
    "url": "assets/js/51.de063bd9.js",
    "revision": "1b9963e99c435e8593de2ed1991b11ac"
  },
  {
    "url": "assets/js/52.9acc5d8a.js",
    "revision": "901e1e613a9452bf0205e6f752121d40"
  },
  {
    "url": "assets/js/53.9a8a20bc.js",
    "revision": "162fa9d0641735c03cf372cca4c854ad"
  },
  {
    "url": "assets/js/54.c15ab190.js",
    "revision": "5c59cb25f603a766adf74684a734f5b2"
  },
  {
    "url": "assets/js/55.4e087d84.js",
    "revision": "51d54170dddb77cc291ad59e04f5139a"
  },
  {
    "url": "assets/js/56.15e82488.js",
    "revision": "07a20ebd6de1c3d2403019d965fbc646"
  },
  {
    "url": "assets/js/57.9f6fe8b8.js",
    "revision": "eeac6e4dd7ae5820f365243e4dd8434a"
  },
  {
    "url": "assets/js/58.9af56fc0.js",
    "revision": "b5f2467d0eb7c3a164ff59ef1cbb1b04"
  },
  {
    "url": "assets/js/59.c2c6c653.js",
    "revision": "e53ad2d57a1816643527a8145cb8ac43"
  },
  {
    "url": "assets/js/6.31c64cda.js",
    "revision": "dda85b5b232d182c8ca5c4a7710766e1"
  },
  {
    "url": "assets/js/60.e449807a.js",
    "revision": "38be5a3d190c42979361940bb860e55e"
  },
  {
    "url": "assets/js/61.dd8a24ab.js",
    "revision": "0c90aba41464f53cee7e6cf18d9fff84"
  },
  {
    "url": "assets/js/62.c675414b.js",
    "revision": "d57b18a54f15702ccefe5de69ccd39e7"
  },
  {
    "url": "assets/js/63.431d4c6b.js",
    "revision": "463018f77276e8dd30292e8c26bcce1d"
  },
  {
    "url": "assets/js/64.1f3b6e05.js",
    "revision": "70efe2e73018e5f63537b75d81e7f374"
  },
  {
    "url": "assets/js/65.38f1dd89.js",
    "revision": "3b327431fd414f5c29a518e019cc9475"
  },
  {
    "url": "assets/js/66.5a1c45e9.js",
    "revision": "6594e245a23145ba835716aeb132f091"
  },
  {
    "url": "assets/js/67.80388067.js",
    "revision": "6543b5c28a486fc07d4eece800f32643"
  },
  {
    "url": "assets/js/68.0faf747f.js",
    "revision": "4c2091e0036a159e73645a9c11c17162"
  },
  {
    "url": "assets/js/69.9061bab1.js",
    "revision": "3e330c914919746befc9e715e878e293"
  },
  {
    "url": "assets/js/7.b75e0492.js",
    "revision": "7130ed44d55509fb31a8b82b06a0dd88"
  },
  {
    "url": "assets/js/70.2039035d.js",
    "revision": "726d378d82bfb5ee14179f98bca5ed5f"
  },
  {
    "url": "assets/js/71.6691b3e8.js",
    "revision": "0d20dd75a3c81f764c8b636b570f56aa"
  },
  {
    "url": "assets/js/72.c46b642e.js",
    "revision": "0db9a8822a73fcc93f84fcee8e4d69af"
  },
  {
    "url": "assets/js/73.68e6d11c.js",
    "revision": "c7cd68029432afbb875540aa1e5ea0bb"
  },
  {
    "url": "assets/js/74.13900944.js",
    "revision": "a5c73f81e3bd26cea1efc101a6cc0b8b"
  },
  {
    "url": "assets/js/75.a9222978.js",
    "revision": "9742e5d6e48c39bdbcad3b10601b9997"
  },
  {
    "url": "assets/js/8.974d5e8c.js",
    "revision": "79a2b528d453552d5166aefdea76eafb"
  },
  {
    "url": "assets/js/9.93c35660.js",
    "revision": "caf4d2b319a6ad161ad12e2206ee8682"
  },
  {
    "url": "assets/js/app.56022d9f.js",
    "revision": "ea1fa6588c0b7dac27b39e1e1012c96f"
  },
  {
    "url": "index.html",
    "revision": "393376ac0ea8511584f2798d9cf38015"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "8e3ad702da4a19997663944f18b16ab5"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e8465bea9852d67b0f36660af98bef66"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "c0b18f210f86b4a1a65cdc3c00fbc0f4"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "4c3aa21e3e51c75c763449fb79b8cfbc"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "26a3151c622e9bbca8847fa169fd7738"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "68920ee20985e3a7e9122842cb14dfae"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "6553eecc56012a927400129f8c25b003"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "8e7deb5dce2b4caf9aa01c1df6cb381c"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e010300ab78c17870a43d3575c1e81b5"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "18b4f95b7e02b483fcb88a4a8f6a2f53"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "e88a4dfcfcd545b35b25bcbde0a23f37"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "01e5ee975d79bf4be480ddc6f29a5715"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "64550b99a03344797e8f3993c0378d15"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "5b29ba65e38220b9d2459fe0dc09b047"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "e67b3230ab10333d4771214d57e37b74"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "03219fdd178e434cfe18682a94443bc0"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "220e36e3dbca64dac1435b5fe540da28"
  },
  {
    "url": "post/plan.html",
    "revision": "ecb3667d7a8611e1c6b4a1a1bb83a537"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "175cffbb30715e715f0901dafe364c9a"
  },
  {
    "url": "study/english/words.html",
    "revision": "ef60fe40d02731697e4db4516b4d4f35"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f0b0971456b6c58ee9634ca62992dc95"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "552caf636ddc8e29c432e1eb1291f517"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "383e47f7a82bc5043a7fc9dfc92260eb"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "67a6234db32afc84e4e7b13e79585abf"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "bf5dc52745cbc6e71767284d7a648b14"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7e1f5e36a700c96a6dde5ddbd0686f0d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "6f5c1b1060944d8043092287919990ba"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b518330c7f42ca506a441e07ec94419a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "018b087fa53b26c640a52ecd99eb986a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "0360aaabe50a55161b0f21f7091b38a3"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "b63d9ecd7e2a7363f0af0d6de4951892"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "fa38e9a65ea65f9a4299916436001f66"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "011807c6aa23cb4e9b60d3d06552efe9"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "eecd25f9a5be2660beb8f8bb0a356e49"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "baa95960b2d1d774684411ab3d771243"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d9e0d1d2fe0de0df078d86334ed89009"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "abfc618298e654d5c1861ac01bee1da2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "f34b7379547e12c61664b65ad98212b5"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9d15aef095e3e4788ebfcc066d6d3550"
  },
  {
    "url": "task/2021511.html",
    "revision": "4454380f376d5f96dd4addfc6c79a723"
  },
  {
    "url": "task/2021514.html",
    "revision": "7e971131408a07ea7fbb583605c3f2df"
  },
  {
    "url": "task/2021515.html",
    "revision": "720e0202ddf9529917d056ee1ae8d2da"
  },
  {
    "url": "task/2021518.html",
    "revision": "e6d4cb93b0b5a05f272368611684afe8"
  },
  {
    "url": "task/2021519.html",
    "revision": "20db98c7812bdbf8720e84e0cc6fce4a"
  },
  {
    "url": "task/2021520.html",
    "revision": "4d257e3452d63c83c51122e2ecb22eee"
  },
  {
    "url": "task/2021521.html",
    "revision": "d1f28615c3d050785ef3dc79de5ffca1"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "aa2c51836c7ad0be423533a0e7d0e791"
  },
  {
    "url": "task/2021524.html",
    "revision": "f7d756667262f5dd0ee00a1357c3361a"
  },
  {
    "url": "task/2021531.html",
    "revision": "ed92161b9dff23e9c9e656b476433a33"
  },
  {
    "url": "task/2021628.html",
    "revision": "9df682b42928fecead9892e3bbb26c28"
  },
  {
    "url": "task/202164.html",
    "revision": "51dcb059b1739ccffa116c68d2dfbb1e"
  },
  {
    "url": "task/202169.html",
    "revision": "84303ddc81cf3c060ccaea15d12d6c75"
  },
  {
    "url": "task/2021717.html",
    "revision": "3dc15c680aec37da4862ea890ad81693"
  },
  {
    "url": "task/2021721.html",
    "revision": "035f19f97b2e8ef4f3b3a7ac036b88bb"
  },
  {
    "url": "task/2021722.html",
    "revision": "f9e6eaeb7bc27b6deeba5190b634982d"
  },
  {
    "url": "task/2021724.html",
    "revision": "d64eb6e3278c50802d60bb304c36a57b"
  },
  {
    "url": "task/2021725.html",
    "revision": "e26b83ca5a973fbc19218cba96bb1ace"
  },
  {
    "url": "task/202181.html",
    "revision": "2a0dcf7eebbe7ce318cd929db4bb6d2c"
  },
  {
    "url": "task/2021811.html",
    "revision": "199fd62b6fe9925a2304ac1dd6be59d2"
  },
  {
    "url": "task/2021812.html",
    "revision": "6be5134e7a6af45c509af7761e975435"
  },
  {
    "url": "task/202183.html",
    "revision": "63cfe1eb04ca2cb4f83643ee3f306fb4"
  },
  {
    "url": "task/202187.html",
    "revision": "5132cac0c7e42c40c00f0319d729b002"
  },
  {
    "url": "task/2022218.html",
    "revision": "fec254890a47698ab020e48a377bb913"
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
