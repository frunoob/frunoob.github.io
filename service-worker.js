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
    "revision": "07a1856f634eb9fd5027131923b90ef1"
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
    "url": "assets/js/27.e3d7d804.js",
    "revision": "0fdcd72608a7a7cb52681ff6b06b6203"
  },
  {
    "url": "assets/js/28.2ebd2a8a.js",
    "revision": "18fa653d0a7337d4812f3495d0f115f6"
  },
  {
    "url": "assets/js/29.329cb4da.js",
    "revision": "e9c1716db0589ba87d24adcac34f191a"
  },
  {
    "url": "assets/js/3.7d335372.js",
    "revision": "17b9adb6e931cda9bd3a68e373e3d563"
  },
  {
    "url": "assets/js/30.ec2f6567.js",
    "revision": "5eddfd921be237077ac53def9dfbb8cb"
  },
  {
    "url": "assets/js/31.9961ccb5.js",
    "revision": "a39b0ebe19d44a5c7d3af26dfa7c23c4"
  },
  {
    "url": "assets/js/32.00077d92.js",
    "revision": "02a83f18a684085b5d046dd4ae909a3a"
  },
  {
    "url": "assets/js/33.a52645f5.js",
    "revision": "4d640eeb38ec1eedf8410f6acac50a74"
  },
  {
    "url": "assets/js/34.f23c5ead.js",
    "revision": "a62650c358e0ebcb17e9ec6aaf584a84"
  },
  {
    "url": "assets/js/35.4ddfef01.js",
    "revision": "e9d1a8f2bb6ace95e89878cdacba62dd"
  },
  {
    "url": "assets/js/36.a120a91e.js",
    "revision": "ca8e38be098dbbeb7686593268ce1255"
  },
  {
    "url": "assets/js/37.5f50142e.js",
    "revision": "61c4ad1d7260bbc46f920ce302b611e0"
  },
  {
    "url": "assets/js/38.c8e5d8cf.js",
    "revision": "951a935409148ec3da342b3bd00ef478"
  },
  {
    "url": "assets/js/39.f530a2d0.js",
    "revision": "6c40eb15079b95093c66136a24628965"
  },
  {
    "url": "assets/js/4.79da93f8.js",
    "revision": "4bfedd3e0df8e8070b9b8f7c036b6d87"
  },
  {
    "url": "assets/js/40.539d761d.js",
    "revision": "a9f7b00995a62ae9adb36349fdad8d41"
  },
  {
    "url": "assets/js/41.974046f4.js",
    "revision": "69ea5f8ab3b174c86cfa9190b962b2a9"
  },
  {
    "url": "assets/js/42.7a5ecd59.js",
    "revision": "b90cc010f4459d83ee785e3d06937123"
  },
  {
    "url": "assets/js/43.c8e9d8a6.js",
    "revision": "b3ef5a4beb6fa1dcf2d538475a7e7f22"
  },
  {
    "url": "assets/js/44.9f0bf1fa.js",
    "revision": "c97f367524323e3769be16943a0abe16"
  },
  {
    "url": "assets/js/45.7a07ff59.js",
    "revision": "1c5db884eb31f2ad13bdae8500435601"
  },
  {
    "url": "assets/js/46.bcd2d101.js",
    "revision": "24ba6d976ca686c5b8ac30d4a954f216"
  },
  {
    "url": "assets/js/47.dfaf69ab.js",
    "revision": "40222ef12b694cf8f77174e2d6c34070"
  },
  {
    "url": "assets/js/48.2f57cdb7.js",
    "revision": "87efc630da4dd61862078e5af22c57a5"
  },
  {
    "url": "assets/js/49.c62161bf.js",
    "revision": "259d0f9ee80b87b0e1c832b8030a261d"
  },
  {
    "url": "assets/js/5.a125ee3d.js",
    "revision": "d1dd8306ae24d64691f72737ae24c8e6"
  },
  {
    "url": "assets/js/50.c329723e.js",
    "revision": "acbe87413b2c82a0181bb43412a92c5c"
  },
  {
    "url": "assets/js/51.4d028490.js",
    "revision": "72e50946ea1b8098eeb73c8880832af0"
  },
  {
    "url": "assets/js/52.ff6021ba.js",
    "revision": "aa3f6562c8951583325be268ac59f5be"
  },
  {
    "url": "assets/js/53.6d9c6b06.js",
    "revision": "80f7d2eb53bb5461ff8545d0b39bd3c4"
  },
  {
    "url": "assets/js/54.cda2554c.js",
    "revision": "830532723d9a50c10d0dd819a9cb47ca"
  },
  {
    "url": "assets/js/55.e73d3931.js",
    "revision": "902b709e97af8dc8df668f77cf016904"
  },
  {
    "url": "assets/js/56.d17a2cbe.js",
    "revision": "6715c1626dcdb40ee0f21b45b02ad45b"
  },
  {
    "url": "assets/js/57.cc6e2a23.js",
    "revision": "b28ca913aacd36cac0fcfb7231492370"
  },
  {
    "url": "assets/js/58.08261b9f.js",
    "revision": "8bedb6e16784a2a9d25755907f10c192"
  },
  {
    "url": "assets/js/59.7628dd3f.js",
    "revision": "07bd027e0eaa724c81716f7cac5cb290"
  },
  {
    "url": "assets/js/6.31c64cda.js",
    "revision": "dda85b5b232d182c8ca5c4a7710766e1"
  },
  {
    "url": "assets/js/60.09aa51d0.js",
    "revision": "8b2b907c83aa8cba3a1789a889f1a259"
  },
  {
    "url": "assets/js/61.6e2eb61b.js",
    "revision": "c1ab208cf2bf45d2df503c24307a6d6e"
  },
  {
    "url": "assets/js/62.2f9e53f6.js",
    "revision": "1cf6d52cd6614943727daffe6eb0a054"
  },
  {
    "url": "assets/js/63.91f5aab8.js",
    "revision": "160d17a5c2f53e2bce2547634a54f8ff"
  },
  {
    "url": "assets/js/64.ac1e87fd.js",
    "revision": "6784dda4133cc91cb71a7743a7119444"
  },
  {
    "url": "assets/js/65.c4d10494.js",
    "revision": "ca861fc0874cb353ee3bbf4974c53999"
  },
  {
    "url": "assets/js/66.c58b7730.js",
    "revision": "0f9f4595f318d529482e2f772fb0a1d5"
  },
  {
    "url": "assets/js/67.69805536.js",
    "revision": "4165d7af660f6fd1123fc26e5fb7c7f1"
  },
  {
    "url": "assets/js/68.6444255e.js",
    "revision": "eea2923f564a47fbadc814dcb0899236"
  },
  {
    "url": "assets/js/69.816c42da.js",
    "revision": "61b6c059d455051025e7e5c220d63d39"
  },
  {
    "url": "assets/js/7.b75e0492.js",
    "revision": "7130ed44d55509fb31a8b82b06a0dd88"
  },
  {
    "url": "assets/js/70.b57474f1.js",
    "revision": "7f1493e95c5c1d3325a6778b439cdcbb"
  },
  {
    "url": "assets/js/71.a444cb3a.js",
    "revision": "88cb3c715b5f2a83f6a04fac2142271a"
  },
  {
    "url": "assets/js/72.bf14a63b.js",
    "revision": "6c4a514adcf0c0e666814e552f800a61"
  },
  {
    "url": "assets/js/73.f4c130a0.js",
    "revision": "489400c03f2bdd9b820c14a75a0dd59a"
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
    "url": "assets/js/app.667573f4.js",
    "revision": "2b04378bebfb4ab16966bda0fcdb3d01"
  },
  {
    "url": "index.html",
    "revision": "d28c2bc59de0e44fab89aa145a7da748"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "145e7e7736459d3ec856df2a1f610ce2"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "45e11cd8869f0919c3d4cfa800f3eb2c"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "6c43069b6f8fee235cebec36f2711edf"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "4de58d70febaad1edf20945cc6b2b118"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "7a7f9ff840694f3100f1dd74a307bf31"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "8e8618b092bf9197bcbc3a6450229203"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "989db999874b346645b8363103c63634"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "1bbec78dc27690ac9a127ee6bc83ea7b"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "81f06d1ab00f38b9af37168dfa8ebae9"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "97bd059f68e7933689736e136b5f1c65"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "511111ce9acdbb5fa909550ca3a522c9"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "3228ffb76306a882c05b0faab0f5cb5c"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "3981b9a61dd72b48719387c5f149a474"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "745be9eb23bb19228a54c1a41afde769"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "01b19e29969c1f0e5d705f114fe6394c"
  },
  {
    "url": "post/plan.html",
    "revision": "cf6b3317fa9f76e1984d890d5e50cbc0"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a611d299b779d313bb6474e5405be91c"
  },
  {
    "url": "study/english/words.html",
    "revision": "1190f8e4367e2bc7bd388bcf5b18feff"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "9071f7299a714552f9df1d443fa4734b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6634159c7db6621fc38cd731ed1a5fac"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ede9abd9c4c9fcdad69ed2775e9943c1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c57961dc0ac027e05b605cf8245ac567"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "903f16bc5ab64e74389e1e4d8396a45b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d3cbde2e29fbbed391a6c710af544480"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "514565fb6b55deeec71085934a6ae653"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5e8a93ee21e9c112517c524045f52b61"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c1c97c0b31475f35c86d90d57cf213b0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "20aa346ffe6f5ece065670085baa3bd6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c1540c4caf3b21f7ddc1e8b500aa1d6c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e6aab44bd60703abf0ca1d8d1164d71f"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "cd7b43b712c28ee7b244c8afae52f066"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "7add8b08bbb20d8f779f61ace3cf8bac"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "486db6e215cce2b605d0b7bd368fba25"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e907d840d0460bc6fac56a6ad37246cd"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "19181c9e94cfee28835210951c89cc67"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "4628c1fdd2e0bf0f4b505e1708b62e0b"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "4b423b8c1dbe040be392d9c5077506d6"
  },
  {
    "url": "task/2021511.html",
    "revision": "8e0f984d0e54b032b9926fdaf84f0124"
  },
  {
    "url": "task/2021514.html",
    "revision": "5dc0b285b60b56f4dde43b5bedc90e6c"
  },
  {
    "url": "task/2021515.html",
    "revision": "e4cfb11572dbe6edbafa4a70f53b3d74"
  },
  {
    "url": "task/2021518.html",
    "revision": "faef870cfb1cbd18602b683d75688644"
  },
  {
    "url": "task/2021519.html",
    "revision": "1b143d88a5f3c6033835a168b0f5d230"
  },
  {
    "url": "task/2021520.html",
    "revision": "2f3c1c01a32cb7194de48ac466a0ee71"
  },
  {
    "url": "task/2021521.html",
    "revision": "9519d50b47a45266bd79e63e39cca9c3"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e8606a815a365ccd80c161e968968253"
  },
  {
    "url": "task/2021524.html",
    "revision": "b5343d172dab6b621cdc6758ce89c961"
  },
  {
    "url": "task/2021531.html",
    "revision": "a68114eda20ca71cf46beca1d4447e2b"
  },
  {
    "url": "task/2021628.html",
    "revision": "5f49335f138a9a90c77ce2faaac1d381"
  },
  {
    "url": "task/202164.html",
    "revision": "cd4a7f8b51961fd8126136cf152d18bd"
  },
  {
    "url": "task/202169.html",
    "revision": "794ef6b33e0a405321e15cef392e49d4"
  },
  {
    "url": "task/2021717.html",
    "revision": "bb11e46a1c34d4edcae310b232a7a6ec"
  },
  {
    "url": "task/2021721.html",
    "revision": "e10c780f0fb5340beed52f9b8161e06b"
  },
  {
    "url": "task/2021722.html",
    "revision": "a51e48c2bc323353d42fcf9537000a5b"
  },
  {
    "url": "task/2021724.html",
    "revision": "5b7cfc9149cfb0d30c37a77b5c731484"
  },
  {
    "url": "task/2021725.html",
    "revision": "06f47d5085e3e3cdf1901954b3716006"
  },
  {
    "url": "task/202181.html",
    "revision": "cb5bdbbb88458ef29c22e33a203c5a2b"
  },
  {
    "url": "task/2021811.html",
    "revision": "27cfd8fdc72ba3cc21e8a4da7b2aa3f2"
  },
  {
    "url": "task/2021812.html",
    "revision": "5451c49fd396da1aa600034d834a90f3"
  },
  {
    "url": "task/202183.html",
    "revision": "c14e1b9be31bb26a7b79ebd5959accc7"
  },
  {
    "url": "task/202187.html",
    "revision": "5a5c500bad8fc1f4fe869de31deb8912"
  },
  {
    "url": "task/2022218.html",
    "revision": "1d6f3bb97ad9c3406c974a915e774c70"
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
