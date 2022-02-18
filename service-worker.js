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
    "revision": "2f7b78645c1a8e20c6c14512af769e6b"
  },
  {
    "url": "assets/css/0.styles.569be676.css",
    "revision": "078f52336405cd7777a945234dac1881"
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
    "url": "assets/js/app.45fc22cf.js",
    "revision": "03a599fe8ff5eb69826df2c581862d8e"
  },
  {
    "url": "index.html",
    "revision": "0698e290a1f5422c6502677f60780023"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "4c4f0bc4b7c4bb82e5ac7db193ad4a82"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0bdd5d300125c4ddb118660ff8237521"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "704030e324bf1921e5b1c636915a0464"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "51e090091c70e4db9373b352e140371c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "bbb399b7a0bf2902631ab9c34cb5ebb8"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "aa61db6334315f2aec5d51225bbd37a8"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "25da8f4b88a00e1d9cac52221e71cfc9"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "edb8bad417451c8b7583a90d34d3d9c4"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "d10066a863442087fbc0e9aebb7e0fdb"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e65c7123d545432635ffd006ed33ca08"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7a58e101260344186ceb102cd86e65b4"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "669978aa40af749653ddc1e931107440"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "cd48d24569a20559caee9d2f080d3422"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "da4c237ab4827617b04d26f0ebeaeb26"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "bc285c04424f6e48c97bdbb5dbea3704"
  },
  {
    "url": "post/plan.html",
    "revision": "9f44ad440a88ab353a5535977a9476a7"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "57f61b233a3a16749322129c51037b17"
  },
  {
    "url": "study/english/words.html",
    "revision": "3268d503e000625e5b0a70aca4cb694d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "69b14d7060fa572bd8459eb2b510a521"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c54e156f8be9ffb359da38fa1b44f619"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2b0bb6d1a9258b6ed612c86b5f9a38f6"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "fcd2e7c21a8ab3689868d177b610bd0d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "46fcb22b3d90774d93f498dcfb68382c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "161a1bed342aec6c1772bddc141e586b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "d9224c81832206ed02211aca0061cb6b"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "18eef4f665b82f0c03ceae42db71c7dc"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "73723b4924358a04a87f8105d3849a97"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "945ad0e2dbae1cc109f74415f9c4c7b1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "6748d2702db4ca97f0844eb20f89eb77"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4ae128bcf8ce7dac786e9c1a520f2d6a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "5ee510f8862582075929ff682022bb29"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5364dd699637a6a14ddff30de83eaa41"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "0351c6c384d8f780049a803322072d45"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "cfaea31b72a55338c0df5e85ef41010f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "8092992ef060d9c88ce90f09b720f3b2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "90134307522666550836ca324089c93b"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2a8514ab075359a7b6d872c8ae1daffa"
  },
  {
    "url": "task/2021511.html",
    "revision": "dbd07a62cd23da3ed1428a919c4a9a15"
  },
  {
    "url": "task/2021514.html",
    "revision": "000b2f186ea74563c76a319830e6b706"
  },
  {
    "url": "task/2021515.html",
    "revision": "14438c597981122392e52bbd6ea760b3"
  },
  {
    "url": "task/2021518.html",
    "revision": "8ad2dd18727f8d9e1911dc1ff2aba06f"
  },
  {
    "url": "task/2021519.html",
    "revision": "a10bbde1f73662d613394b60e2e2aefa"
  },
  {
    "url": "task/2021520.html",
    "revision": "e157acf6a4c9c4af1a4449027650d13a"
  },
  {
    "url": "task/2021521.html",
    "revision": "752e591c4e91c9952a33667c766e7d42"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c9c32ffbc3f67d417ebdff1b681c525b"
  },
  {
    "url": "task/2021524.html",
    "revision": "c7fc5f29043e0a6884821a02a79d634f"
  },
  {
    "url": "task/2021531.html",
    "revision": "bda455362f005bc41bb5ee699c0839c9"
  },
  {
    "url": "task/2021628.html",
    "revision": "b723050f0de232e5cb858793ea823932"
  },
  {
    "url": "task/202164.html",
    "revision": "a41ab34566b6897530fe6689946186cc"
  },
  {
    "url": "task/202169.html",
    "revision": "9dd07bc5121710d6d8342d24ece04b73"
  },
  {
    "url": "task/2021717.html",
    "revision": "ceac520f0f669fa14ac9b69149abaf2b"
  },
  {
    "url": "task/2021721.html",
    "revision": "9f3fba036ed76e23a1408b5793b28977"
  },
  {
    "url": "task/2021722.html",
    "revision": "d24f655912a61cdc1a0f9534fa21cb4e"
  },
  {
    "url": "task/2021724.html",
    "revision": "5e76c550276fc6f9020f1407cead49dc"
  },
  {
    "url": "task/2021725.html",
    "revision": "eac4da27ad73f51699c050aa42dce19b"
  },
  {
    "url": "task/202181.html",
    "revision": "5326cc8dc030151cbe80e6e64d924ada"
  },
  {
    "url": "task/2021811.html",
    "revision": "d96cde73e4d8e03948ea1e2b233b163a"
  },
  {
    "url": "task/2021812.html",
    "revision": "626ffd08db9a1f715505ec5309762200"
  },
  {
    "url": "task/202183.html",
    "revision": "ca91b1e583262bc5ffca39fa1f11d79a"
  },
  {
    "url": "task/202187.html",
    "revision": "bafea18409d290e38a81d5d89f31bb09"
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
