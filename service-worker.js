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
    "revision": "2338bb228667961083d41f52af4c351c"
  },
  {
    "url": "assets/css/0.styles.f4b1f116.css",
    "revision": "89264b2a639def05750e1d2baf2f5916"
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
    "url": "assets/js/3.21d23516.js",
    "revision": "ad4332ef9cbcf588b4fde3954c4494a1"
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
    "url": "assets/js/5.5179996b.js",
    "revision": "c9275140ed6d56fc44f80bd5573a44a2"
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
    "url": "assets/js/6.d03ae9a8.js",
    "revision": "5aff4f35564dbe15d344639ad0481f01"
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
    "url": "assets/js/7.d343b27b.js",
    "revision": "e98515ed1a77a4decf957b4ee7566878"
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
    "url": "assets/js/72.764b360f.js",
    "revision": "98090f40e60fb8111fc5cce159dcb801"
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
    "url": "assets/js/app.b5341942.js",
    "revision": "b3607d34281f4a180b1450b62b0b0508"
  },
  {
    "url": "index.html",
    "revision": "048df861d17a7a7b0d867aa2c1aa1962"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "18852aac8e7f6de77471125b19bfa0a1"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "d24e2653dc4b4e662c629c98ba7aef9a"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "9b12dfbe8b3956944336eaf7893bd960"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "5a68957760018fc135ff8b915e39842b"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "db563db3ef002bcea86d4d200cce512f"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "96e886fe3756d784fab062c19d232ac6"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "74dd43826a4d816c11421b14abbcb9d4"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "1e4c400fd0d523e2651dd09b988a1d74"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "c2b63b12464754bd1ce4a96cf4d443bd"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "66c95ddf676a08a8470a12b0d2ae68ea"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "dce84b192e21942912573bdfaf3b1a15"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "eed33afb7ff24d7b3e6e7196ad6b02ba"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "b0735603e19f20dfa0e388d6bf24b34c"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "fba8a2e3d9a5068bc583161f049d6d59"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "86a5cdd2e91e9329d1353a8b82c80915"
  },
  {
    "url": "post/plan.html",
    "revision": "1a8f06f3c75ccf4690b848e458294a13"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e1c57ffa0b50d39b8ee91b49df176b58"
  },
  {
    "url": "study/english/words.html",
    "revision": "98c86b46b9b0fa55c694d64b4671fef4"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2300e31d4d60298b406c8476d08f0e39"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c861d3330d88c256893200a01fc6c749"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "28250faaf2374d5c5e24d4afab4d6445"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "92bf201426757e227c698e6afa5abf98"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "8aaeafbcdd3990fda9e3c53a081df582"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ffe0a3378a7864c17856e36ca3cc9d30"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "93446b9b6280dbf8bc04aaaf4c584e8a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2fb9da839e28d2f5d5d7fac9af15325f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "293f82e88215b167aa435945794cd3b1"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "99ada6ddc99dee7c91621b7499b8fd4c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "6d3229dad59f2f476d311230da890a78"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "967dd2334bc2738bd4c67a40bcd3ee36"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "729136b04edd2b2b1b9800431bf6b662"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "72464dd9b741b1742434d446fe6db2e7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1ccb9ac6759bd69b59949d0604461be5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e1f54ae91d9fdee16afd8088d3d8eca6"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "03881f8a29896526cbe87598d917d3ac"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d5935fa8b0e5ccbc5d8217bb82a1fba4"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "4070e450b8a2a4f526a84445224a8ebb"
  },
  {
    "url": "task/2021511.html",
    "revision": "b41e030b93456c6554a6eb432b6f4a56"
  },
  {
    "url": "task/2021514.html",
    "revision": "d0c6faf89de010f9a5ff185b03cc2d05"
  },
  {
    "url": "task/2021515.html",
    "revision": "d0b20d9d5a3b688ea8f9c871389300b3"
  },
  {
    "url": "task/2021518.html",
    "revision": "4bc06464f6a3df20feecff567ca2f759"
  },
  {
    "url": "task/2021519.html",
    "revision": "ce93a62a5145efd82264c4a6b0245e42"
  },
  {
    "url": "task/2021520.html",
    "revision": "d79f373fe58f90472b7361e4f15c060c"
  },
  {
    "url": "task/2021521.html",
    "revision": "c3c4833e656061063088b41fcd50a03d"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5f4dbc0bb377875bd59715f44082f188"
  },
  {
    "url": "task/2021524.html",
    "revision": "f3e9bcb9bf10886720dc3e5a08b85521"
  },
  {
    "url": "task/2021531.html",
    "revision": "2324a8e2d5b42883c25447bf89b21ab3"
  },
  {
    "url": "task/2021628.html",
    "revision": "3e367e285c40b8e232ae35b56517d594"
  },
  {
    "url": "task/202164.html",
    "revision": "7e00859a584135d1f139f0d797364a34"
  },
  {
    "url": "task/202169.html",
    "revision": "62036e42c7595a531854a7b132243b1a"
  },
  {
    "url": "task/2021717.html",
    "revision": "dca8068dba1a0300cc5926da4500d9b6"
  },
  {
    "url": "task/2021721.html",
    "revision": "d660e820936dd6f809f2860dc8f0142c"
  },
  {
    "url": "task/2021722.html",
    "revision": "ed4c5983e223ee13eacc40677b0fd4e9"
  },
  {
    "url": "task/2021724.html",
    "revision": "850107c44cd4ff56684451a2de38becb"
  },
  {
    "url": "task/2021725.html",
    "revision": "569bdd49d623de6165ee04158320b012"
  },
  {
    "url": "task/202181.html",
    "revision": "4edb0766457b90e671779d666d401555"
  },
  {
    "url": "task/2021811.html",
    "revision": "21637338aaaf8ec74c1ac5b7e0afa2af"
  },
  {
    "url": "task/2021812.html",
    "revision": "72a7aabe6a7d23f3e921dcf563bc7434"
  },
  {
    "url": "task/202183.html",
    "revision": "63da1ae7dc8919481b7a17fde9a59fa4"
  },
  {
    "url": "task/202187.html",
    "revision": "682e025339118dab1349b7b7a41bcd3f"
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
