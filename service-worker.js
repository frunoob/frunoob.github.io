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
    "revision": "e19b9bd0b7ca3b7519725a332217963b"
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
    "url": "assets/js/8.5bc02e15.js",
    "revision": "70ee5abb76c1f0d84d7f653b9b116b90"
  },
  {
    "url": "assets/js/9.93c35660.js",
    "revision": "caf4d2b319a6ad161ad12e2206ee8682"
  },
  {
    "url": "assets/js/app.f1431509.js",
    "revision": "019e5f710eafc773562e433fb0872494"
  },
  {
    "url": "index.html",
    "revision": "f63f463ec856daec25614fa48e3410ac"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "f5b15591406585765f67e5343968bad6"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "4f68f16ed3fe9849c4388183801f9b9a"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "9d0de4d230e78ce99e1d2873a81c1a40"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "1cba4e6b90d6a247ab1fa9b5f6330999"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "e3a6638f1c63cdeed2d7638d8746bbbf"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "6806211a48c2fb9464e940befac0a752"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "1186ef275f43e87b14e9269396ab4ae6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "02e8cf098c8c4f3f204b06f504409309"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "af3ead90e1c244bf25b3f3a81d535ae5"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "dd38689d9374595f875dc87d52e8d591"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "d5abc735042357794666050cb2f09cd9"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "458200210519529b89ad017dc3d203c9"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "c7d7d1fad164904c67805cfff361b183"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a372d73af0149c860d0d4ff3cd100ed9"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "60824d1797369fcf14423f7d036f0934"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "c3f6bf9816080fc223dbde5e194552b8"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "4fe62455fd7954f72bd4efd70b47a2ae"
  },
  {
    "url": "post/plan.html",
    "revision": "d46cf4d9aa4ef6f5e17548c77b5b69cd"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "09d645692b4d80af164d84250e195e86"
  },
  {
    "url": "study/english/words.html",
    "revision": "6fddeb31a3cb0bfb59535c02ee82ef00"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "165e2e712cb6fc413f494262c7198f50"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "7899bd8eabb1ea1678c07f533cad9413"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ee5e7bc89df95745e608fe190084caae"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "4e7456ed3f6a8e794dfb3e9b4cc14070"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "f44fdd820aa440d1cfc92265612f6ed3"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "a6a472f91c1b8a8eda407f71057241e5"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "592323ea1ac58673ee29a144d38e93fb"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2482a91ba8c3bcfb6e48fd1c66b054fa"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a4d15e696777d7a9d6014def1970ab7f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "478cfb68ee227b806dd8089a28664c4b"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e61543a0aba8c8b63e8eb1b0c8174173"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4a59abc095b7a1bcb241f4a313a6bc3d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5bd90a5f505eed44298d0db114de2d95"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "22b22d0d5cc83aa14783dec5aaa7221c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "f55730c47f7cfca5f83d06e6c6437408"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "ab6d22b957d9b52bf7e83ffe18391911"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1fed7c30b518f0d804248199bd590424"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "c49592a42dd905fc1aebe037fb0d3ef5"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e531a894535e8f6be36391c4a02186ae"
  },
  {
    "url": "task/2021511.html",
    "revision": "95b989ba52112929312df70f61261fac"
  },
  {
    "url": "task/2021514.html",
    "revision": "09ae1f3a70e2aa96650ea035008f2081"
  },
  {
    "url": "task/2021515.html",
    "revision": "9a188b280948579904f934ec64309e85"
  },
  {
    "url": "task/2021518.html",
    "revision": "32d29810233d2eac50d3ae863777cced"
  },
  {
    "url": "task/2021519.html",
    "revision": "1432fb7384432ab78e15452af8641301"
  },
  {
    "url": "task/2021520.html",
    "revision": "84ca3a003d0d29f7e2a8aa4050cff5d0"
  },
  {
    "url": "task/2021521.html",
    "revision": "f655d601590710687e3d737f0b9f56b7"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "106dd71f90de9f85cbb14880502b5ad0"
  },
  {
    "url": "task/2021524.html",
    "revision": "659d2adca812f5277d5913f921e46ca9"
  },
  {
    "url": "task/2021531.html",
    "revision": "56f1b011b6c7ca1ed3d488d916a675db"
  },
  {
    "url": "task/2021628.html",
    "revision": "ca5eacb45e4c1f18e892f8fc2fb449fe"
  },
  {
    "url": "task/202164.html",
    "revision": "80ca537e6756f1c8e57be0a93696b788"
  },
  {
    "url": "task/202169.html",
    "revision": "853bdb4478fc69ca198e655565a6b2ce"
  },
  {
    "url": "task/2021717.html",
    "revision": "0885f4dde01ef0c332831124f0f16893"
  },
  {
    "url": "task/2021721.html",
    "revision": "4e5f195b7d2abe63f339d8b1ddbe98bc"
  },
  {
    "url": "task/2021722.html",
    "revision": "b84db7dc8e3c1317cfcb818347805683"
  },
  {
    "url": "task/2021724.html",
    "revision": "b3450ac45b051a6e962514e288d47927"
  },
  {
    "url": "task/2021725.html",
    "revision": "6e57f3b161012ff25e21788138131042"
  },
  {
    "url": "task/202181.html",
    "revision": "ae69368edf7ff697be25dfab15fcffb9"
  },
  {
    "url": "task/2021811.html",
    "revision": "a7f55644d2ef058d88185e374f44642f"
  },
  {
    "url": "task/2021812.html",
    "revision": "7086ef80af2bf92fe0b34f7627a6b5d5"
  },
  {
    "url": "task/202183.html",
    "revision": "59baf5a729d8912ea07c34ff62a85fc6"
  },
  {
    "url": "task/202187.html",
    "revision": "b90ae19578fbc227340b46011af7a72d"
  },
  {
    "url": "task/2022218.html",
    "revision": "cb29da4b75b3d200c41271cbe8eaa951"
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
