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
    "revision": "d24c44f2f5376c1a5dfd832788eeab8c"
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
    "url": "assets/js/28.7f88f08a.js",
    "revision": "a2465f19b79e49fd37a81264956d8961"
  },
  {
    "url": "assets/js/29.dc011fbc.js",
    "revision": "f25938516eada899a824a4ca0f1a2c92"
  },
  {
    "url": "assets/js/3.7d335372.js",
    "revision": "17b9adb6e931cda9bd3a68e373e3d563"
  },
  {
    "url": "assets/js/30.2fa73e7a.js",
    "revision": "ca22145f5c9dfa29f4333876fc80ad03"
  },
  {
    "url": "assets/js/31.e6e384ee.js",
    "revision": "f34e93052c960dc0c63fcd6ffee30d29"
  },
  {
    "url": "assets/js/32.dd4f86ec.js",
    "revision": "bc35451145d795562217eb0e71dd87a9"
  },
  {
    "url": "assets/js/33.39bb6bde.js",
    "revision": "ef695d46fcac44e28c6c8d0aeffe23da"
  },
  {
    "url": "assets/js/34.6c738907.js",
    "revision": "55cd08833d48a7fe95f868ce1673380a"
  },
  {
    "url": "assets/js/35.1665fca7.js",
    "revision": "b9dc1cc1b4259d3f3040ea0868ef70c9"
  },
  {
    "url": "assets/js/36.cc0d9a63.js",
    "revision": "490b314a7a75910980a96abada3294fa"
  },
  {
    "url": "assets/js/37.77a3fb30.js",
    "revision": "6aed27d76ecaeb11672f5ca3ec9ab17e"
  },
  {
    "url": "assets/js/38.6c935f0b.js",
    "revision": "18d5c6d298307bdd2379b375e834c79b"
  },
  {
    "url": "assets/js/39.15865e18.js",
    "revision": "380744719f02652b81bc5a71c1f4196d"
  },
  {
    "url": "assets/js/4.79da93f8.js",
    "revision": "4bfedd3e0df8e8070b9b8f7c036b6d87"
  },
  {
    "url": "assets/js/40.b2b9388b.js",
    "revision": "d56e15422adc6c66a30dccc3a26b84b6"
  },
  {
    "url": "assets/js/41.2781de53.js",
    "revision": "9e48bc8dbfa3e5389916d819774ccb14"
  },
  {
    "url": "assets/js/42.7bd63d22.js",
    "revision": "afbf2fd264df89c169c0c1eb14ea529e"
  },
  {
    "url": "assets/js/43.7002b99f.js",
    "revision": "fdb98300b36ccc90a30b199fb57e00ea"
  },
  {
    "url": "assets/js/44.8480ee2f.js",
    "revision": "9faee6d83adb551a1add94fcee6805d5"
  },
  {
    "url": "assets/js/45.7814cb2b.js",
    "revision": "c4122fa46be4010412b9b529dbcfe818"
  },
  {
    "url": "assets/js/46.c7e0ef34.js",
    "revision": "c06e5707c97aea1c90f4ffe803b8207a"
  },
  {
    "url": "assets/js/47.d5996af1.js",
    "revision": "a6006f22e9e72ba921054b533a194833"
  },
  {
    "url": "assets/js/48.f8332737.js",
    "revision": "6ba01e33914678f7950e875b84a2246d"
  },
  {
    "url": "assets/js/49.0b0bf525.js",
    "revision": "d3b6a578ae79e02f1dc751b56ad26c5a"
  },
  {
    "url": "assets/js/5.e2f277ae.js",
    "revision": "20c3c1df3ced6cf60bab8669fe10e020"
  },
  {
    "url": "assets/js/50.f498ff77.js",
    "revision": "a316d1c9df31e261dc4d15a8a49d6176"
  },
  {
    "url": "assets/js/51.3630d138.js",
    "revision": "8c1bb64e6d47711bd55e22f0a3ecc0b6"
  },
  {
    "url": "assets/js/52.50ed9480.js",
    "revision": "b29c0a3504edd697d810075360ca2ed4"
  },
  {
    "url": "assets/js/53.75774ace.js",
    "revision": "648c63b1db459b44be7cf8a9f93d0324"
  },
  {
    "url": "assets/js/54.0eeba016.js",
    "revision": "2333d87106dae4eb8c4b34884d6fbae9"
  },
  {
    "url": "assets/js/55.3938be77.js",
    "revision": "6474050ced5abfe210f56d82019f4b8e"
  },
  {
    "url": "assets/js/56.47a78f68.js",
    "revision": "42365cfdb5fed03eb733fbb98f1604c7"
  },
  {
    "url": "assets/js/57.0061d075.js",
    "revision": "c9c93fb443946f93a830568ddde8704b"
  },
  {
    "url": "assets/js/58.5f87c1cb.js",
    "revision": "afcb8cd009a358165afd9ca8f0dd9673"
  },
  {
    "url": "assets/js/59.ffd19b41.js",
    "revision": "9710a5400295c9e14be02ccff8be3b18"
  },
  {
    "url": "assets/js/6.31c64cda.js",
    "revision": "dda85b5b232d182c8ca5c4a7710766e1"
  },
  {
    "url": "assets/js/60.21588baa.js",
    "revision": "839548792e7afd557d64103168bd66da"
  },
  {
    "url": "assets/js/61.8885d966.js",
    "revision": "58bce9a12e5621ec23a83d2109719973"
  },
  {
    "url": "assets/js/62.6dff233d.js",
    "revision": "508d5f4562661de90ba9903c2c66a096"
  },
  {
    "url": "assets/js/63.aaf1f3ec.js",
    "revision": "b0aeb4bbb69272bd536bd6c07fe80a9a"
  },
  {
    "url": "assets/js/64.b3d8de75.js",
    "revision": "70e66262b7dd09d7a21133b230c347fd"
  },
  {
    "url": "assets/js/65.ad35f1c1.js",
    "revision": "01ac55157453f1b10cf2191f7d8668b3"
  },
  {
    "url": "assets/js/66.fd5408ea.js",
    "revision": "fe2d19f33862cb8495e23738f54cb1f9"
  },
  {
    "url": "assets/js/67.b858c32b.js",
    "revision": "be10f0bf959c7ec139c462ca96441d53"
  },
  {
    "url": "assets/js/68.717e298f.js",
    "revision": "a11d05dda1591472cac788272e80c382"
  },
  {
    "url": "assets/js/69.c2c64564.js",
    "revision": "1feb9181c14bd0095bff76eb7ac93a50"
  },
  {
    "url": "assets/js/7.b75e0492.js",
    "revision": "7130ed44d55509fb31a8b82b06a0dd88"
  },
  {
    "url": "assets/js/70.ab7f7ea1.js",
    "revision": "f2f27799767011b744766353e73a2833"
  },
  {
    "url": "assets/js/71.9e2215e8.js",
    "revision": "54dd08fea5e735146edf085e27c85498"
  },
  {
    "url": "assets/js/72.535546bc.js",
    "revision": "51f886d2deea2098875a48c34c65d681"
  },
  {
    "url": "assets/js/73.28874277.js",
    "revision": "d12f9dc69bb4909436a8498195ffae65"
  },
  {
    "url": "assets/js/74.e1e46e77.js",
    "revision": "72a56abed4354ed849bf625b94cec928"
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
    "url": "assets/js/app.059bc64c.js",
    "revision": "d065c70061f59cf0d379169593071d09"
  },
  {
    "url": "index.html",
    "revision": "0df384bbf9c4cba8ff15e112e7552867"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "205308082aab6036a56757ab9b960081"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "fa3c70a12ae537eb0d7a50af374db699"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "caced7564ffb0da83063536b32645acf"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "cef7ea7de28ef6676f0fbc188fad56a2"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "047626ea948b68066f02d1618ef7548d"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "305d8231283392dfb5885ca5473bee0c"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "04255c6b77b17c19e1c8fe9ae7f09b62"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "f2fc375a662b6b4fb32caeff512be118"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "f1666ccdfb78280eda4714ec989af8c0"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e2de43f0d3a5567421c3d784f28dfc0c"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "12ce2c77c924ae4ddf3403fce2e9faf6"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "189a780f81c36138b80107f7aab78559"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "8c4bf7212efebb20131f1201dee1b2ba"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "c561bd81f4ddaf9609205b587e00007e"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "d230cf53dae1c1975d762c24fd393ef4"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "4a1878169d42e8840e73400684fa691c"
  },
  {
    "url": "post/plan.html",
    "revision": "10b8f12f7bec690f6f58b64d564ea33d"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "9d9ac0c0fff5f30dddd1634177009301"
  },
  {
    "url": "study/english/words.html",
    "revision": "39b9837a88c24976f3880cd06e5afcb2"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "211cebf158b2581b9eea01c7b55126c1"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "88e5199be763844dd54b93256fc98a6f"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a3f69d86b4e6e3a361aee5acfe5be050"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ff885d195939c41b731220221e631e31"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "c5d2d5f9050714075175e32b3d509fff"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "c520b368d50ac6340b1b97bb8c1dbd0f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9d87a446825d19c23ff45664df067c95"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6495c56ced5a83ce2f050e6bb8926967"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "12452e5ff5236ae1c3969050cb44da4c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "7d9dc60c7a07e3aa74097a378ed195ac"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "339d3b5da6e0235d7f69f9f72268cc62"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "464f73797e8471277c76f7544cb31da1"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "72d9f8a19bbeaa456c139da08fb856ca"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e9007c7c723db056de0f9f9cf79ef986"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3f88c62a925f2ec70d6cf36600ee983f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "820ab60ca8f5b7cbdfd290be9c491538"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "2d7fe764511ea3ae81d959dbfb7a433d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0d6b8024a1b7e741bfab2c2b1c47e3c6"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9e0f43cd88de796f1b511489e4dd8cff"
  },
  {
    "url": "task/2021511.html",
    "revision": "45c9c5fd5679a4d0538e753275622d4e"
  },
  {
    "url": "task/2021514.html",
    "revision": "07bc19ee7842671024face4363162898"
  },
  {
    "url": "task/2021515.html",
    "revision": "afa0f10a6a2ef70a14d2ad11daed9f00"
  },
  {
    "url": "task/2021518.html",
    "revision": "ec69f57f6162fb231e5dec7f57af0d4c"
  },
  {
    "url": "task/2021519.html",
    "revision": "9a57c465849e5357c59c8d6649c6066e"
  },
  {
    "url": "task/2021520.html",
    "revision": "f271f2635cb03baa5683047cb6d5d7dc"
  },
  {
    "url": "task/2021521.html",
    "revision": "ca519aa9d6f0b4d7ff5bf5d68c6c695e"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "21e1597b7cbd2b71ac64755b0f7b3b88"
  },
  {
    "url": "task/2021524.html",
    "revision": "b4ad1ca51dbe42c7ce2dd675bf350293"
  },
  {
    "url": "task/2021531.html",
    "revision": "e26ff8a1e57540930ac14b23a597cfd0"
  },
  {
    "url": "task/2021628.html",
    "revision": "e0fc520c42115433b0c6d32fc84ec630"
  },
  {
    "url": "task/202164.html",
    "revision": "8092967c98d34811b0a1abae4788f143"
  },
  {
    "url": "task/202169.html",
    "revision": "ab8b93d3073aab1317f0d81e1a287af7"
  },
  {
    "url": "task/2021717.html",
    "revision": "e89e27f82c4fc324e54f57b27c1a400d"
  },
  {
    "url": "task/2021721.html",
    "revision": "209f917a440dcdfece52d6ef515cbfbc"
  },
  {
    "url": "task/2021722.html",
    "revision": "99e931a0e4efdda92c556228843e82b4"
  },
  {
    "url": "task/2021724.html",
    "revision": "58cee7b411aecd79098cfa0c867fa838"
  },
  {
    "url": "task/2021725.html",
    "revision": "a4755543a0cb027bc32b3686267f45b5"
  },
  {
    "url": "task/202181.html",
    "revision": "a9d1a548adb78f0d009493ba209700ac"
  },
  {
    "url": "task/2021811.html",
    "revision": "31daad9469104867c748f37d5d41f60e"
  },
  {
    "url": "task/2021812.html",
    "revision": "a3c420b18709ad7aec74e1db35787a05"
  },
  {
    "url": "task/202183.html",
    "revision": "d08184320abb94b2559d38099b241101"
  },
  {
    "url": "task/202187.html",
    "revision": "deab8c6c2b9e8ead64c4013ef3655b3e"
  },
  {
    "url": "task/2022218.html",
    "revision": "95f4b48a950cebd99d308a25c18188a9"
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
