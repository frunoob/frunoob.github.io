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
    "revision": "8c36db484e259fd6a6e71e19a6237491"
  },
  {
    "url": "assets/css/0.styles.ebd1058f.css",
    "revision": "fdf1f5b6bb4ec68ca340b52b86238504"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af5430a9.js",
    "revision": "b9befd712ae4537387247b229bffe6f8"
  },
  {
    "url": "assets/js/11.bdc6d13c.js",
    "revision": "8b6634a6e692397f120f89a4d3d66ade"
  },
  {
    "url": "assets/js/12.f5210a08.js",
    "revision": "0a57ba65f15e00f1e7fd723ec1f8ab0d"
  },
  {
    "url": "assets/js/13.db6c31ab.js",
    "revision": "b041c7b003a25afb20454f87f722d561"
  },
  {
    "url": "assets/js/14.b3268b79.js",
    "revision": "84818060022f68b74d1d9d224f278517"
  },
  {
    "url": "assets/js/15.4d155abf.js",
    "revision": "ee6e3487a44677d879b0e60d08ae1931"
  },
  {
    "url": "assets/js/16.0c1211a0.js",
    "revision": "6a178d603918aeff765fc7a3bd8f502a"
  },
  {
    "url": "assets/js/17.c47c9abb.js",
    "revision": "03076ae3f1a4b0435086b83550d79a0b"
  },
  {
    "url": "assets/js/18.a2f8d7b3.js",
    "revision": "100bff77f54e4ad68d99825db4a7e7dc"
  },
  {
    "url": "assets/js/19.bc7886d6.js",
    "revision": "f9e411c6772d64fa53e4e75e950cc019"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.0a8eeadb.js",
    "revision": "1e0402a72f02d2cb9c895d4d00bad9de"
  },
  {
    "url": "assets/js/21.90946566.js",
    "revision": "3411c4b19d6c9ed1e63ee9be3ce23f11"
  },
  {
    "url": "assets/js/22.cc9b3dfd.js",
    "revision": "bdbc4a2f7466dcb8ce11e61e7e10fa74"
  },
  {
    "url": "assets/js/23.59079548.js",
    "revision": "5653c70310cefd78039f56aa7df0f2c2"
  },
  {
    "url": "assets/js/24.133c6cd4.js",
    "revision": "f96483dd23ff8b9fe631fedbdd862ec1"
  },
  {
    "url": "assets/js/25.280c1f8c.js",
    "revision": "1fa32954ccae6e53b14d3bb42dff055d"
  },
  {
    "url": "assets/js/26.f92d7a2a.js",
    "revision": "3ea095b50027d1a7f846278420971527"
  },
  {
    "url": "assets/js/27.2ab45f6d.js",
    "revision": "9dc5a9142706871ee337dbf272451a79"
  },
  {
    "url": "assets/js/28.2e3cff98.js",
    "revision": "c8357f625cb428bdee6d8e76b3a6c853"
  },
  {
    "url": "assets/js/29.5f4a3304.js",
    "revision": "7008aca1f4678eaa498dc7ab38c44967"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.1a6448e6.js",
    "revision": "4cbac8d64aee7cc3aaea248fde2ac41d"
  },
  {
    "url": "assets/js/31.96ad0d11.js",
    "revision": "af176b190e5a900e5557b648fc182de5"
  },
  {
    "url": "assets/js/32.c675ecac.js",
    "revision": "a4fbaf322d6cea85555042ca5e8eb208"
  },
  {
    "url": "assets/js/33.006c6d93.js",
    "revision": "d2130cba6510784e387034166c3e5da5"
  },
  {
    "url": "assets/js/34.2a25e112.js",
    "revision": "d19b88016ff9de0c842979cb168cce57"
  },
  {
    "url": "assets/js/35.b062c915.js",
    "revision": "2051a0fb4da7e56f4ca32749118d039f"
  },
  {
    "url": "assets/js/36.ce77bc09.js",
    "revision": "a4d41cba4a20ca12f95b10f1a40ce058"
  },
  {
    "url": "assets/js/37.c288e8f8.js",
    "revision": "983dc9cddd13de357fe098813fbd3913"
  },
  {
    "url": "assets/js/38.1faf4faa.js",
    "revision": "14c44f3715b41b3d2fe01b978f79909d"
  },
  {
    "url": "assets/js/39.1e65f92f.js",
    "revision": "057045f7aba876400bc944467beea2cb"
  },
  {
    "url": "assets/js/4.20418ba5.js",
    "revision": "fbd90e9ec2af400f12b5d9aeb1f81b28"
  },
  {
    "url": "assets/js/40.c866ea88.js",
    "revision": "fe9bb02dc1be5ccbd9e7d996b1907973"
  },
  {
    "url": "assets/js/41.85b3e72e.js",
    "revision": "42d8f1d8773be91f0d6e6a403b9880cd"
  },
  {
    "url": "assets/js/42.590de5b4.js",
    "revision": "e149ae810319822a18052e3b2e442d57"
  },
  {
    "url": "assets/js/43.ab6548c8.js",
    "revision": "55a4041d1e000b0bb4dc37e79c1f854a"
  },
  {
    "url": "assets/js/44.3ed00631.js",
    "revision": "0884be78c21e866db80928e7aed67927"
  },
  {
    "url": "assets/js/45.da12c972.js",
    "revision": "d20e5287e82c06c9de12cd50cd925972"
  },
  {
    "url": "assets/js/46.5da1a7b6.js",
    "revision": "26db2f3147aba12807588eba81b2a654"
  },
  {
    "url": "assets/js/47.b8f24116.js",
    "revision": "1d07d1ccda45be8ddafc215c38022cfa"
  },
  {
    "url": "assets/js/48.0a947032.js",
    "revision": "3186a85e76bfc49be8155dd865452d74"
  },
  {
    "url": "assets/js/49.cabca754.js",
    "revision": "a3ffc0849aab1a67e1798af81c99d299"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.0b76ce86.js",
    "revision": "d1300bcd2eb77ffd833cf543ff4d6172"
  },
  {
    "url": "assets/js/51.d2fb4d7a.js",
    "revision": "79a83ae11110b6b98bff0e4b95d6c94a"
  },
  {
    "url": "assets/js/52.164565e8.js",
    "revision": "c110f14acd8940d2accd2181540d363d"
  },
  {
    "url": "assets/js/53.1e8246c5.js",
    "revision": "737099ee50fc92fb2716a025d9e12845"
  },
  {
    "url": "assets/js/54.f0121490.js",
    "revision": "911fe389ad51adcfe3bc964bad955fb2"
  },
  {
    "url": "assets/js/55.50732a28.js",
    "revision": "3382ec3589c8a2dca10407657ac03575"
  },
  {
    "url": "assets/js/56.4e11bf8c.js",
    "revision": "2cb1c98d1f4882708d0452c1d03a0fc8"
  },
  {
    "url": "assets/js/57.6ac6db87.js",
    "revision": "68ed917723b6f84447029a765859639b"
  },
  {
    "url": "assets/js/58.9747e446.js",
    "revision": "89ec7e4d31ae5a16abdeb9383c32f975"
  },
  {
    "url": "assets/js/59.c84af786.js",
    "revision": "17318937c0194abd3e59cffa701415b3"
  },
  {
    "url": "assets/js/6.06f53c15.js",
    "revision": "007acd36f4f324b469b0fca856142a96"
  },
  {
    "url": "assets/js/60.75b4f622.js",
    "revision": "cd2363364128c9bce12d763c81b2df6a"
  },
  {
    "url": "assets/js/61.a487cd49.js",
    "revision": "fa4b9387996613250010bdecc2afb117"
  },
  {
    "url": "assets/js/62.8ca5523f.js",
    "revision": "5edf75fdbbd162c6709bb70a67759879"
  },
  {
    "url": "assets/js/63.c87a2430.js",
    "revision": "c5d771cbb4d3be9be65ac0fd1061f52f"
  },
  {
    "url": "assets/js/7.a4d388c9.js",
    "revision": "3f6295de867d12b4268d4d6fc9f4e187"
  },
  {
    "url": "assets/js/8.d84f27c8.js",
    "revision": "c452b15c9bf25d02587a413ce37a3056"
  },
  {
    "url": "assets/js/9.cc580a6b.js",
    "revision": "6090a79c923c3ffdef238a7aeccf4481"
  },
  {
    "url": "assets/js/app.f7d3ce91.js",
    "revision": "53f783a6c435ff257d962bcf749354a8"
  },
  {
    "url": "index.html",
    "revision": "7745fe6c5c3f48966d8c8fdf933839b9"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f076072eabc9d3ac8d910b53b1905030"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "13f6c47ed6dfd924fca8a928051c3de8"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b7d96c8b4bc88637c9633c6d4b5d4288"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "c46c3fd8615775923792030bd54f0d86"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "68b67d4c00375d77551fc469e8e904dd"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "171723efe55c988d27371644b4fcdad4"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "02e9be8e5eae8e897aa63b0a9b36d15c"
  },
  {
    "url": "memo/memo.html",
    "revision": "64bbf3acd0ef98bb106715c9e3005caf"
  },
  {
    "url": "post/test.html",
    "revision": "20f72916ac2929abc4357c801a58b68c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ff59ca1ba62cf71aa8eafcf606179363"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "82a18d57b6d0f395c4cc721f9dad7a60"
  },
  {
    "url": "study/english/words.html",
    "revision": "0cd7765c6558171b2609a309f2b34a74"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "17beee04bbd95f9457d3768f196da0fe"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5492c33739705c8814fd086d60443848"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "c3e047576d1e68825f1e85f31309d8cd"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0e25d39f15942275836cd7e5f93f9def"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "4e6003405b4ad171b4336833d140bdd6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0b555e9fabd3838644bcf84e5fd3796c"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "02ef9884232164b14645682726b8f124"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ffcfdf62dcbb0d7b5a9954071961f3fc"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "09d6380da4232667f01da1e71831b3a2"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "a86f92585586f310d223e4a7a9c302c9"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "b3e0f50302cb0502c6a7f70f4bebe167"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "53f3aea700c7ff05e09e12389b3ef525"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "943fed521682f832465023072ccba3fd"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "bfb353eb558cca0ee1c1e7e24f06053d"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1f3d08dc945e00be9ba79f49a3e8e467"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "78e97ac71f7ec9de45c5bd9031e6bce9"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "76017765b3dc591bfde77c58d488fb68"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "68f91a742122523a11e5df45fb8b2858"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "8d1423204812920b75d1efe1742daf8d"
  },
  {
    "url": "task/2021511.html",
    "revision": "8f3896197be6726cf93c6b332f965994"
  },
  {
    "url": "task/2021514.html",
    "revision": "aed09a3b28af157130e4b1b9d6b7a80d"
  },
  {
    "url": "task/2021515.html",
    "revision": "43a2967567d93e0976568473cc9d819f"
  },
  {
    "url": "task/2021518.html",
    "revision": "08d31bff385725ecfb6a556abc1d2396"
  },
  {
    "url": "task/2021519.html",
    "revision": "4e5e35ba086f357070e8525c5f8d05ad"
  },
  {
    "url": "task/2021520.html",
    "revision": "c2c456f4d39635bc387dbf36c7d38c03"
  },
  {
    "url": "task/2021521.html",
    "revision": "57675ed4b76d10458c7e28345bcff5f8"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "5ab525d474d6027f7cb60312c2faad40"
  },
  {
    "url": "task/2021524.html",
    "revision": "574906ba1dc262f4669af3900b54db09"
  },
  {
    "url": "task/2021531.html",
    "revision": "7b53c321d7131b249d667d79118d7526"
  },
  {
    "url": "task/2021628.html",
    "revision": "324bbea99257befd364a40e34a03f349"
  },
  {
    "url": "task/202164.html",
    "revision": "77a926c7b1e17cf9ffb208fa82927ee2"
  },
  {
    "url": "task/202169.html",
    "revision": "90fb7623302834a3e0d92bbe03c590ff"
  },
  {
    "url": "task/2021717.html",
    "revision": "1690e1ea917657881d250890a326c14a"
  },
  {
    "url": "task/2021721.html",
    "revision": "42756fd4dd9e71de8d64def2fd027487"
  },
  {
    "url": "task/2021722.html",
    "revision": "a2ca7deeacdcaebd3b4b7a759ad20f4e"
  },
  {
    "url": "task/2021724.html",
    "revision": "30cb7fa8dd499b1d244188080d4d6590"
  },
  {
    "url": "task/2021725.html",
    "revision": "e5363865d2856d84cdbd021f6778aa03"
  },
  {
    "url": "task/202181.html",
    "revision": "6e6f775317a9c1fb80d71786ae096e42"
  },
  {
    "url": "task/202183.html",
    "revision": "55098ac167409c650444df9d71eede0c"
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
