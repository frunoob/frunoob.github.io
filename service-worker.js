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
    "revision": "64b2de0851c86e41a77c6c1ee68a9d87"
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
    "url": "assets/js/app.49c8dd76.js",
    "revision": "c71fc3c3bac1e46ad58e5aae293f7906"
  },
  {
    "url": "index.html",
    "revision": "397ff5519abd359f5c8138e03e770520"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "b3590a01a6d26f167ea2a6e2b26cd43e"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "880a194724d8200ea220cf9063ff0bad"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f500e0123edb120ce2d6c93899bde840"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "d1538607bcfe8c8231c480f60c33ac22"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "062828c644f4d75446c7238c1d18daab"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "24fe4ab451235ff2b83abe0ae2d8fcd4"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "f08b0c07f93840d34fbd5c5a384d436d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "2898786a0c147c754cf1e1038ca3203f"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "457113c586e14b05bc037d4d61425bc6"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "bedb157e12d7013dc5fc84916f994f19"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "5ba72b3071e7fb1499e1d022d07e38a3"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "699a4875039a923668c66595817b603b"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "f8be668591a0cd9ad9863da91567a02f"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "893505cae56ab440b029a11394fcca05"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "c805d27121df4e9d9ee0fb4a9543d649"
  },
  {
    "url": "post/plan.html",
    "revision": "f43719ee5f84b8eccdea21700a6b037f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "65d1d14e57f118bb068325e9e1fba40e"
  },
  {
    "url": "study/english/words.html",
    "revision": "9941567c4b61f30ecd4b122cf2bdce49"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "6389b6c2ef65b4f66d4d763fb14b751c"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "199bce9d47d8571c87da2d9aa2bbbf2c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "c99a958ff68ab3ae9cb37b5efd61ba24"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d6ff859e00c5f07b1468722a09e4efb6"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "97a2ec0255e72e6d7924e7f06eac9c6d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "97b01e7c9f52f9f027a7579e241ba6bc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "6507ef47b6953428490f601a9904dd2f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6c529cdc6944a913e4ac7620fd087da9"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "f69c63c7fa4e6fa2817ca9f2c6f628a1"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "eed66b6a20dee06b622ba8cd6d9b7aed"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "7c32920047beadcb4239f1660edd8207"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "0ea88f6152287f91ca9c4ec6f1b64d97"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "647185cda1d0bc0c4260aa0ec68dfdc1"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "cfba455f3807e19676d3357d65a84341"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4fa227b1db423f878746e1d985397dbb"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "51008d2ebc48fbd9d19e9d646eebc4c2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "eca67783e98bfc3a23933d927bf95dac"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "bc13e3206d6fbcbf181612e19c4327eb"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "dc8c96ce375fa3387fdeea12808fba94"
  },
  {
    "url": "task/2021511.html",
    "revision": "d59ccc483eab8c7479a1d7915d73bddf"
  },
  {
    "url": "task/2021514.html",
    "revision": "2deabd3fd9566ce9bb193444988ac630"
  },
  {
    "url": "task/2021515.html",
    "revision": "89dfcf813bd9415d7107bc8a25e46150"
  },
  {
    "url": "task/2021518.html",
    "revision": "a0f90c5d9d98f59adc9a01a2af658dce"
  },
  {
    "url": "task/2021519.html",
    "revision": "55b97c901ca1bbf0cf018927728f4ff8"
  },
  {
    "url": "task/2021520.html",
    "revision": "439ec6139f17d678b73780e8d319b6e6"
  },
  {
    "url": "task/2021521.html",
    "revision": "3bde7d50ae0fe6d3692c815a7de0b3ee"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "0080762ebd2b49db229e0e57b82c8afd"
  },
  {
    "url": "task/2021524.html",
    "revision": "37f5289997922e423002baf5caf6e879"
  },
  {
    "url": "task/2021531.html",
    "revision": "26744a1019078d4991e49351be4024f8"
  },
  {
    "url": "task/2021628.html",
    "revision": "828a9e40dd33f25675151f8ffc09dfe6"
  },
  {
    "url": "task/202164.html",
    "revision": "d944aefa8aa5edef64ff888f06e4b5ba"
  },
  {
    "url": "task/202169.html",
    "revision": "5a25290412f5e279ca5da4c529561983"
  },
  {
    "url": "task/2021717.html",
    "revision": "0e011d67343c59df02f7d6e547dd3dbc"
  },
  {
    "url": "task/2021721.html",
    "revision": "268604251f2d04878345284866fb51ad"
  },
  {
    "url": "task/2021722.html",
    "revision": "1b7e29689dd7a280e7ed7f2155a1fb34"
  },
  {
    "url": "task/2021724.html",
    "revision": "c9d77f01747a03371baadcde3c8e1bdf"
  },
  {
    "url": "task/2021725.html",
    "revision": "5562c54c58e0734192cae970b5125502"
  },
  {
    "url": "task/202181.html",
    "revision": "a76d81e363d515dc50842a93a7d73015"
  },
  {
    "url": "task/2021811.html",
    "revision": "462c2300e11c474a7aeca270d1ebb940"
  },
  {
    "url": "task/2021812.html",
    "revision": "a12a24eba2db5595eef50a5b5aa5bc33"
  },
  {
    "url": "task/202183.html",
    "revision": "dec4fa7bd61a83ef673f8b27a774e6c3"
  },
  {
    "url": "task/202187.html",
    "revision": "74993aff86f0573c3e6312a3887ed8d1"
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
