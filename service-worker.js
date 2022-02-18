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
    "revision": "4fce7d8bf0f720113cbfe52f7f33b52f"
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
    "url": "assets/js/27.37134f78.js",
    "revision": "6297e78579444aef03af09263a0b4d30"
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
    "url": "assets/js/app.0d6e72b9.js",
    "revision": "b4b5cd286caa6f9e8251d1a362dba9b2"
  },
  {
    "url": "index.html",
    "revision": "65a3363799882f21b2ba2cb11744e033"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "a76ca459afeaf3456a851dd7adb4d166"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "d2fe26ead3eee7999ecd4437dab38d35"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "cf2a29e35f10b3780d6e9df9dbf4fa7f"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "8a11f232a420ca382fa61432a3f2c219"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "1178234d181685fba11579cff3d0907e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "311183148281085a7158a75434d06d03"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "4d0c741ba106d1af0505cd1db01f84c3"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "b673ec921bc27a7a959672bbb37961c4"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a8679345a1fff1c734778ef8668e4a51"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "04fbf60820b09de4f0f990b114b9c234"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "637fddb3f6adc7795d49443c2665a940"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "3aa33a0f178fb131203ef8ab7fd70f39"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "990aa51c66b34930d3e9c9295eb0ab58"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "e512ce6dce22eb8327e217db951f2585"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "6e5c8514a4ef66f0e710e1c82e0ac765"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "7ec09e8624b8b02d6915b3e37e166a5d"
  },
  {
    "url": "post/plan.html",
    "revision": "de04b6672654f5eade363825e1706566"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d9d0593b3bfd069894b7ee18a8c928be"
  },
  {
    "url": "study/english/words.html",
    "revision": "776cd7c7c11bac08aa9ecadd510f483f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "dcfae42cf760fd8ffffc4689668bae57"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "74916224da3cffae90ce1123fa4bb79d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "777a05c5d4f87a8a8fe800efa09b5d4e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "375bd02cfc8543b2c4cf8204b81f6bef"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "94a31fd083f4f0b79f3a646a608f9f7c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "21efa72e1d0d36d37df6b1dc78eb073b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "78f12b3f8765e5937dc12f37d0bf630b"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "e26a49236f9394bafa69d367d82f1a7f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "1635df8142195f4e71bffaae8354ec53"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b00a231c7da5316484c94a271cab425b"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "fd8d1f1f68b765f396eebd239435ba46"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "45b6b76e65863e1c9adad00845f0606f"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "d9c3c5ad26ea55395636723aec50fa1c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e107582d3dcb16942535ce4054b274f9"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3aecb520b94b24098d6ee8f58cd4836b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f883d635fb6c24e5ebab4354a5452374"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5ee020ec1e4b937bb5cf3ac5ac5ad6b2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "945510b064ff2f87f183a06763c01294"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "1879bb3fd719490dfb0c5c843b494b0f"
  },
  {
    "url": "task/2021511.html",
    "revision": "d94533bad20f3ac7285d99896e5962e8"
  },
  {
    "url": "task/2021514.html",
    "revision": "3943beba2f8f172b35817808be7ab7d9"
  },
  {
    "url": "task/2021515.html",
    "revision": "71836fce5a949db2086ff27586966dda"
  },
  {
    "url": "task/2021518.html",
    "revision": "0623076f0407ec2cc1505962a340cbf2"
  },
  {
    "url": "task/2021519.html",
    "revision": "67e478b197deaf069dfc39506de74259"
  },
  {
    "url": "task/2021520.html",
    "revision": "502b590dffd4b913735311517d5e38b5"
  },
  {
    "url": "task/2021521.html",
    "revision": "ea40a5ce7e480e4c18d6c44441d529ae"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8d59f0b351420ea0176f30fe1111678b"
  },
  {
    "url": "task/2021524.html",
    "revision": "2d8639462eea9b71eed1af6bbcc1087c"
  },
  {
    "url": "task/2021531.html",
    "revision": "6bdbfe4c8727d6683b8beebd819f5fbf"
  },
  {
    "url": "task/2021628.html",
    "revision": "623455e6f3bbb5d13b2889b80a7e2600"
  },
  {
    "url": "task/202164.html",
    "revision": "2a7aea1ed59b470e8658db0616eeb25a"
  },
  {
    "url": "task/202169.html",
    "revision": "3b7c595a955c776c1e18a83fee9b69c4"
  },
  {
    "url": "task/2021717.html",
    "revision": "4cb475980841673d55e7850c2f6bda81"
  },
  {
    "url": "task/2021721.html",
    "revision": "2e0d3d64ac7db019cdf7daef31216d27"
  },
  {
    "url": "task/2021722.html",
    "revision": "f06160636915ab7c838c865f194df4ec"
  },
  {
    "url": "task/2021724.html",
    "revision": "0d215f5308021e66fa72d53c84d17061"
  },
  {
    "url": "task/2021725.html",
    "revision": "63c91d41263e53f8c3fe5742f007f88f"
  },
  {
    "url": "task/202181.html",
    "revision": "a41afb49fd324d9c6492cc7a0655a8bf"
  },
  {
    "url": "task/2021811.html",
    "revision": "c9e6930a0575cfc77cd5081a0868edb1"
  },
  {
    "url": "task/2021812.html",
    "revision": "98b2d4b83b02f93090f1b9c6e788071e"
  },
  {
    "url": "task/202183.html",
    "revision": "2521fb3a9f88741860f8666647c8017c"
  },
  {
    "url": "task/202187.html",
    "revision": "ceed0f64dbee5274b6f2889a041bc61d"
  },
  {
    "url": "task/2022218.html",
    "revision": "6a2efbb2a901c26665a04b005b146ebf"
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
