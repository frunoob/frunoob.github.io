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
    "revision": "782061a858e0097ea9c19cece759f07e"
  },
  {
    "url": "assets/css/0.styles.7dc89c39.css",
    "revision": "04b589f8df00e917d01affae1a3b3082"
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
    "url": "assets/js/app.ef229b8a.js",
    "revision": "05d84b17449c5cfd0a76d99b37f90084"
  },
  {
    "url": "index.html",
    "revision": "30e0394fcc04e6ab5d618a3a8db45c84"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "cbec2bc9794d2a1a05367bd13ff4a47b"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "8bd8a4bcc0d75e2d1c178f75d4420bcc"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "4b856b8f673b56598ceb65634b2083a5"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "4a42c31498acf9e5b6887c48a2d58b4c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "89cc667bfb22118abb8c8c7b417a7f67"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "4a506c61dc138bc9e24988fc888741d4"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "4bf926a753a44cf356099b29d0a89c06"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "a3138fd4bb661a875e7ac01eb05939a9"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "3b259c9014770020751f4068f9ff8f67"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "db6a0ec5fc49c61399a7f0c6a9ad2e06"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "e14721c4251878e3f67c700c997b7cb2"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ad85c9773f643de82211aa7abc117679"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "4e7b812696989c422172095c8fbbf183"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "c170ede78dcdf75ad0f48d08cc45e52a"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "90345e8750953299c3a1f3f2f6982582"
  },
  {
    "url": "post/plan.html",
    "revision": "3225a18e8ae3914f3acc6d61473c0120"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "14cbbb58aff4c3b061273a4f21b0d43e"
  },
  {
    "url": "study/english/words.html",
    "revision": "177b597a378ed8546454e17fc1f2ed4d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "70b6d7a98062277d0f8aa5e52f164139"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "bc455547341efd445d5e3fcbc459e6bc"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "b76c883758b0b3461f077ea1db25055d"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c47e81dbbf0da5847ec19d3b7865d148"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "2b5fcf1199c6af467ffacdbd2727e027"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "523c806ab33a96968b0cca06737194dd"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "76f782c33d2633d21d04b759770166d8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "164155917dfb17958d55dcca1a66040d"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "f660f0e8bda3a46373d50d00c12179c6"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "d5b2fba8e17a7b35590fbc1348866d1c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "20fe7ebc269319817b8f8c36141a8ce3"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "ca2a785e2786036aa5a39b1b3b6d33b4"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "fbbfae1a916cc43d6c9433b9ccc63612"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "22245781e013084ec34ff494c3c91a4b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4cddbe5deaa26e92db7f7f3a92f341c5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5c19accc7ee7114d1b076a9215a41fb3"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "58e4e1606730df1bffa008344fbbba66"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "cc0bec07c42e1e43b53c22065711b3d1"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "641c6bed645f725ba9be92ded0a2efad"
  },
  {
    "url": "task/2021511.html",
    "revision": "c9711233c8c6a3f80cf33853fa35f749"
  },
  {
    "url": "task/2021514.html",
    "revision": "4ed93b6eb9624702bc1b907c06e1ad7d"
  },
  {
    "url": "task/2021515.html",
    "revision": "5b94cae04142c3fc9b1789c84bb420b2"
  },
  {
    "url": "task/2021518.html",
    "revision": "65592062c314ec96ad6913ca39563dc7"
  },
  {
    "url": "task/2021519.html",
    "revision": "77b5fe84781bfe2424b02d5f6c16a91d"
  },
  {
    "url": "task/2021520.html",
    "revision": "2f17803340e8dd7573855c6c8e7faaf7"
  },
  {
    "url": "task/2021521.html",
    "revision": "d463c0625742ad6efe899b0b6bc8d15f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "789aa1d4611bfcb8a2ab0576bee8aeac"
  },
  {
    "url": "task/2021524.html",
    "revision": "a02f0045caa0589c60e4576882fcb850"
  },
  {
    "url": "task/2021531.html",
    "revision": "735f76b829a7da5e69be64b5c1efb266"
  },
  {
    "url": "task/2021628.html",
    "revision": "e0be7a8fb698f3732bd555782ad4d36a"
  },
  {
    "url": "task/202164.html",
    "revision": "c291322c21dc2c2e994391dde179bc28"
  },
  {
    "url": "task/202169.html",
    "revision": "2f14f1e0d252338ea620af09c03ad5e9"
  },
  {
    "url": "task/2021717.html",
    "revision": "21b8068ef94e1acc020d5fead3786ab6"
  },
  {
    "url": "task/2021721.html",
    "revision": "802d0fedcdb09d959390c38b0e9bcc37"
  },
  {
    "url": "task/2021722.html",
    "revision": "8d46c48d962b35b71e2e4723d69fd9a9"
  },
  {
    "url": "task/2021724.html",
    "revision": "290ea514e2eff41a383c28b4ca8feb0d"
  },
  {
    "url": "task/2021725.html",
    "revision": "3f0802a27d8f12a87f9afefb9943b045"
  },
  {
    "url": "task/202181.html",
    "revision": "fa81c66bd3cd8b6fe0b5d1683113d8c7"
  },
  {
    "url": "task/2021811.html",
    "revision": "11efc3f8a07280e8f78f9e58f83e8569"
  },
  {
    "url": "task/2021812.html",
    "revision": "a6734c2607d0362e89560bebe07fc3a1"
  },
  {
    "url": "task/202183.html",
    "revision": "86b61848ba7f4106fb6c3282786ff118"
  },
  {
    "url": "task/202187.html",
    "revision": "7c79a6ee5f2e06df132a8b95e0726b9f"
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
