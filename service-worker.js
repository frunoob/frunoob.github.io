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
    "revision": "ac2a4a282b5808d2724fd9de4c217132"
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
    "url": "assets/js/app.adccb0dd.js",
    "revision": "d378e7030aca725c62f9088dcd5cde8f"
  },
  {
    "url": "index.html",
    "revision": "cc30c4b6dc38b887ddc632c226975bee"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "98224276797cca7f2d7c22785c463a78"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "63c40143a535ebcec97095d946cc70a9"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "5b6feefbdbb302ca43764278d7aa7aef"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "1ba3f8489cf7130bcd8df9287967d392"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "46a2a14fbc22e16f6858f7fcfa037cdb"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "66effcc246d0978d7ba6a0f8666bc006"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "b5aef118b4e736845407a8eaefcbebd8"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "aadc02195df9a26030e6c995e3766c71"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "dee4068ffc970f15ef60e873f2d49b3c"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "e4a030ae01bfae9db5f5c41d5e610f9f"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "dcfd27942b3166f332c8d10948074495"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "d501ad0b79f3d3ed2309f1a5250299a5"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "8a8b3e3fefe017073096e66278f24216"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "505d947ac76345eac2a6becfd715d1bc"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "1fb3d625be2878bf220e6fbce381b24e"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "367687b7e1147e21ec1964bb1fa8f024"
  },
  {
    "url": "post/plan.html",
    "revision": "656aa57693d8939f93711891f0b35f4d"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "f56eb2e8621314cc9729da41acc39689"
  },
  {
    "url": "study/english/words.html",
    "revision": "6898b4383dadb3a0e61c060f1641c1e8"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "101377db665ebb3b48c248c1b3bc227e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5418c9a54dc93e320348cf180cde2994"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "7868c869417e658d61754e516657597c"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "146383c2b8676573b973c654ea7d0439"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3169673342bfaa4cbe999040fe136639"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2f29e020490c71a96825b5499f069027"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "98f2f29ef0ecfc8fd15446ffe878f177"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f556b9e0dcc8dbbddf78eaefb046dd79"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "14930b1c0846b0f28fde288738c32b50"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "121640956ebd1ffb898bf72a3d594fe6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "43a6a55bec068d03cfe9c826de733da4"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "034338a8b67dc6bee3664013f0a7e16b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "0f24fe721abfdfebbc537c05e035577c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "db412e4ab608199e5235833f67759c87"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d7c3b6a7196239ca039e2b4499802b21"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "6bf932578c18691cc31444e2ad72eb12"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f5ae3095a72956b038a72afea8b77c6e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "76ef57d5968043495e7f0c737590dfe4"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "fe2cf9d2c0ceb0507a5ee1f1a3244374"
  },
  {
    "url": "task/2021511.html",
    "revision": "a8c1f0f903852de235d5283bcf968b95"
  },
  {
    "url": "task/2021514.html",
    "revision": "775224eabda0192eeded61f5c7706f83"
  },
  {
    "url": "task/2021515.html",
    "revision": "a4e449000981833cd2b16f224a1f0b1a"
  },
  {
    "url": "task/2021518.html",
    "revision": "039101dc7dffbadf8ed379fe356fcbb6"
  },
  {
    "url": "task/2021519.html",
    "revision": "fc10a66eae5b2e125927e2ad70cf07fc"
  },
  {
    "url": "task/2021520.html",
    "revision": "ea793263e4388d4d6b8756f9df4e711b"
  },
  {
    "url": "task/2021521.html",
    "revision": "90589fe3acd673fb983c8f85884c53cd"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c8581f49e5b61cc1f60c3649f71fc35b"
  },
  {
    "url": "task/2021524.html",
    "revision": "1291d472d592cc564a610d67542f8d73"
  },
  {
    "url": "task/2021531.html",
    "revision": "f8b27b73e9a309ef43fb5fe6f641d44d"
  },
  {
    "url": "task/2021628.html",
    "revision": "541251173a3473d8c6daeb8b65a76e4e"
  },
  {
    "url": "task/202164.html",
    "revision": "79b67e1cbc4d91ad4d3818fd0b9b7791"
  },
  {
    "url": "task/202169.html",
    "revision": "64c0c99e3db9e154b7844ce2c7535baf"
  },
  {
    "url": "task/2021717.html",
    "revision": "702b526aa9ed48450185de0913f5dc47"
  },
  {
    "url": "task/2021721.html",
    "revision": "9ffad2f4a47bb793bd69b33c6f7941a6"
  },
  {
    "url": "task/2021722.html",
    "revision": "43588bad08345676c4ffb319909c9a72"
  },
  {
    "url": "task/2021724.html",
    "revision": "1c2a29930311115c515b92d0ac8f5b34"
  },
  {
    "url": "task/2021725.html",
    "revision": "03f7ec6b0f524728267c2e06dde460c5"
  },
  {
    "url": "task/202181.html",
    "revision": "50656c90afe5508fea2dc89e5121b7da"
  },
  {
    "url": "task/2021811.html",
    "revision": "2084ce1407e743f48077747e5ed04fce"
  },
  {
    "url": "task/2021812.html",
    "revision": "9b55989d05cece37fca84a45deaebce1"
  },
  {
    "url": "task/202183.html",
    "revision": "61a5168fe1527d278985a630845809d9"
  },
  {
    "url": "task/202187.html",
    "revision": "fd4421c9b1ce21276978db6cf3815510"
  },
  {
    "url": "task/2022218.html",
    "revision": "983b0d797f4ec452d357bb2cc66f5ebe"
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
