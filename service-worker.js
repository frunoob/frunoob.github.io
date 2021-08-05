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
    "revision": "2a3c1c75a2df0def4db8bff01196b449"
  },
  {
    "url": "assets/css/0.styles.0d47f2ef.css",
    "revision": "5c104319d0fe5f7dde128cef6d476f23"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8b0019d.js",
    "revision": "f6e33bb315bfd265c1bd07775bf5fa11"
  },
  {
    "url": "assets/js/11.54f4be51.js",
    "revision": "18d6afe50038bd1fa707d5d18c88b797"
  },
  {
    "url": "assets/js/12.4dc81c85.js",
    "revision": "c6b5ec522e9bb20495bc97863a773482"
  },
  {
    "url": "assets/js/13.32dcf543.js",
    "revision": "46be09d4ce5f17f85a844ad69184b9e3"
  },
  {
    "url": "assets/js/14.4320e9f9.js",
    "revision": "4c6dabbe3403749e89f517694dcac805"
  },
  {
    "url": "assets/js/15.9010ffdb.js",
    "revision": "e989bc9daee0320298ed0ba107491bb1"
  },
  {
    "url": "assets/js/16.eb8589a6.js",
    "revision": "f79a2c4b2f12adea2ac2d4908275e2f8"
  },
  {
    "url": "assets/js/17.d7a33f11.js",
    "revision": "5a92bfe0be179c9c262d1ff11da9c8c8"
  },
  {
    "url": "assets/js/18.bd6de505.js",
    "revision": "73396bf7d7c8d063cae2d170ab6c4999"
  },
  {
    "url": "assets/js/19.abafc196.js",
    "revision": "b081f3770edc081223d5a0e786b1f7b2"
  },
  {
    "url": "assets/js/2.229fc8bd.js",
    "revision": "987e124822522997ae1fc9346b52dfda"
  },
  {
    "url": "assets/js/20.066dd09f.js",
    "revision": "348e66a1ca44b44585e1badcb3479fdf"
  },
  {
    "url": "assets/js/21.88fe4a02.js",
    "revision": "e2f1d667b51964792853fa17128b7019"
  },
  {
    "url": "assets/js/22.2dcbc222.js",
    "revision": "7835f346c829e9d1d71232e5cf106bc9"
  },
  {
    "url": "assets/js/23.48ed4425.js",
    "revision": "49a3315713e6f778848032d581506927"
  },
  {
    "url": "assets/js/24.6937ecf6.js",
    "revision": "c906a6616755572f1c323724e7f3637e"
  },
  {
    "url": "assets/js/25.a43318ac.js",
    "revision": "8835c8077816cef88dc07ce62985db44"
  },
  {
    "url": "assets/js/26.d7c6ac8e.js",
    "revision": "c712164637ed52dd829039448b0a93c2"
  },
  {
    "url": "assets/js/27.a480d40a.js",
    "revision": "116c7abe07585e74fab336c59d62ae96"
  },
  {
    "url": "assets/js/28.b1a16553.js",
    "revision": "ff63789e8fba26c21f0267d11f438333"
  },
  {
    "url": "assets/js/29.0d9611dd.js",
    "revision": "f72aad48fc005848ffcbb7531e98bb89"
  },
  {
    "url": "assets/js/3.51c1781e.js",
    "revision": "fd2f819feec0d41971d76b2c1fec9f10"
  },
  {
    "url": "assets/js/30.d7e293b2.js",
    "revision": "7e17d79b675b21f09bc36337361e4b65"
  },
  {
    "url": "assets/js/31.ace4dfce.js",
    "revision": "91ebb9b28f688ebeb6b4f786e1df09c4"
  },
  {
    "url": "assets/js/32.08d34dfc.js",
    "revision": "1d273f468ab3b03410863bed358c6922"
  },
  {
    "url": "assets/js/33.f631eb0f.js",
    "revision": "640d785fc6d02d1f7a7e8a75de6fe278"
  },
  {
    "url": "assets/js/34.5f9d2798.js",
    "revision": "84c4b8da7dee98b7ab1460bab1c72451"
  },
  {
    "url": "assets/js/35.3f61d4c5.js",
    "revision": "36161c2347db2942500da28d898b73c6"
  },
  {
    "url": "assets/js/36.75d174b1.js",
    "revision": "ebc8c2477705e57a5e161e6e804a81e1"
  },
  {
    "url": "assets/js/37.daf157ab.js",
    "revision": "47b36c6eff38e62bda84389a7d2f90e0"
  },
  {
    "url": "assets/js/38.e163d70c.js",
    "revision": "ccdb576e1dea728e9924ef34c4ec25f3"
  },
  {
    "url": "assets/js/39.16052097.js",
    "revision": "c44edf3c013fdcb84d4b818db608ed7d"
  },
  {
    "url": "assets/js/4.1a591468.js",
    "revision": "8502a4ab8cfeefa79b1c6dbb52f8efd1"
  },
  {
    "url": "assets/js/40.d881723a.js",
    "revision": "4ac7d666e354977eabf914190f84af0b"
  },
  {
    "url": "assets/js/41.a277c65f.js",
    "revision": "4ace0824ba02b5def5836c5ed30b167f"
  },
  {
    "url": "assets/js/42.f6f85d9e.js",
    "revision": "48d880341fef8f4e40cb0c1ffd0e88d4"
  },
  {
    "url": "assets/js/43.5fda52f3.js",
    "revision": "094b799fc53b4337f2172215d4c52886"
  },
  {
    "url": "assets/js/44.b513a2ca.js",
    "revision": "69ae83443635744eb4ee165f18958813"
  },
  {
    "url": "assets/js/45.725bb295.js",
    "revision": "5298cdbec2cf43aa4dc87ec4bf6a61e5"
  },
  {
    "url": "assets/js/46.379fb443.js",
    "revision": "7f500671328c7f9f2f4ae9736aa3fa8f"
  },
  {
    "url": "assets/js/47.77deb3fe.js",
    "revision": "27dd27aa514a9b25b555412ede361c51"
  },
  {
    "url": "assets/js/48.49887a55.js",
    "revision": "4cdaee166a6af79d3bebb5003eb10a32"
  },
  {
    "url": "assets/js/49.cb0a20d1.js",
    "revision": "cfa24680095b15b9f75f1000b7c3757b"
  },
  {
    "url": "assets/js/5.a205a248.js",
    "revision": "90c0fe0eb3c3e8e23a24877a597c3686"
  },
  {
    "url": "assets/js/50.c5b9b364.js",
    "revision": "3d9483c68ec7278fccfe0d1775361acc"
  },
  {
    "url": "assets/js/51.d1cbd81d.js",
    "revision": "724dfdb02ce166d59cc50dc3dc59fb00"
  },
  {
    "url": "assets/js/52.c698f395.js",
    "revision": "2fe5c9ebf970c95f43d7e565393913fe"
  },
  {
    "url": "assets/js/53.95dbb08f.js",
    "revision": "bd9860f882ff5665080b57aa0b5f13f6"
  },
  {
    "url": "assets/js/54.f8233b7f.js",
    "revision": "ada96c223cb9d151df91c4df84af2f68"
  },
  {
    "url": "assets/js/55.9fb57415.js",
    "revision": "b5eefe710d438debcd19e12e9a29523d"
  },
  {
    "url": "assets/js/56.509ce494.js",
    "revision": "0eb5a11c52018356c1034be555916b73"
  },
  {
    "url": "assets/js/57.f8e8af7e.js",
    "revision": "0bc7bddff0682a0a920353cd6f50b426"
  },
  {
    "url": "assets/js/58.dd011680.js",
    "revision": "888a6c1a2427eeda8adcd64249d1ff29"
  },
  {
    "url": "assets/js/59.19edb166.js",
    "revision": "d3231c946ef949b5e8ad7707da4d71bc"
  },
  {
    "url": "assets/js/6.8836c250.js",
    "revision": "eabdc3c4fe3f11118353d1298ee38aa5"
  },
  {
    "url": "assets/js/60.5c046935.js",
    "revision": "31db6c04bc71416585c8f34589ee47c5"
  },
  {
    "url": "assets/js/61.dc3ee8e4.js",
    "revision": "10069d233d311386477a05cf14bd5954"
  },
  {
    "url": "assets/js/62.de183946.js",
    "revision": "7914a0faf3c99107c9597abeae62db33"
  },
  {
    "url": "assets/js/63.f9b6435e.js",
    "revision": "c246a0fb64d26823cf8f9b3114d74e11"
  },
  {
    "url": "assets/js/64.bd764919.js",
    "revision": "1154778905a5b6bc143a3f84ebe264db"
  },
  {
    "url": "assets/js/65.21441818.js",
    "revision": "9f519d8e570a1b85281704aa50e86d4c"
  },
  {
    "url": "assets/js/7.8624efeb.js",
    "revision": "4e63602cee56beee10d2915038e5a102"
  },
  {
    "url": "assets/js/8.6f4ef2df.js",
    "revision": "8163770da1a8e28ebff81b412d0c5591"
  },
  {
    "url": "assets/js/9.d180393c.js",
    "revision": "9949e1f5907fd9f5b176bfc6e57214ea"
  },
  {
    "url": "assets/js/app.e8436545.js",
    "revision": "11d5cb5d6462b0df0a2b257a9730b127"
  },
  {
    "url": "index.html",
    "revision": "346de06121e967854364a866f2e76063"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e8853c39451d5003ee34db80d88e0aea"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "9304a9b905a0f63e4703a77c52490624"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "278f71b7af062e517dc05393cd1fdc5d"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "0e19ff71601b1f2bcea507e76288ad7f"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "22fc0e27de762003dcddacfa7fe616b2"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "a4e3bcae9859d4e847d519d26a4db483"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "283a1ff0b90e16839ece479f9455ad25"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e88362d548271c31d3c1ff9c84324026"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "fafbcc321fc3699e209c96e07fea2681"
  },
  {
    "url": "memo/memo.html",
    "revision": "fccdef8de8b9e24a57b9c12cd8b6f83d"
  },
  {
    "url": "post/test.html",
    "revision": "c000aac26af1254a77b352da3e55f6b9"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "617b5c93e868ea1892335573dd6d119d"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "fd63024852810c471acdf71453a52878"
  },
  {
    "url": "study/english/words.html",
    "revision": "7d58d345f0d42814917ae5842e3f8cb5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "853fd40b94c1a93412e677a54cfc594d"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "9733e379eafe4a778661372aacbe8efb"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4e47922f43c3bcbb175eb412a4dd748c"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d744de326f74a9dc3670310c33efc506"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "8c12805731704d781ec00a7c085b2b7d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2b0351ee6049df290e5bdb620cdda3c3"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "256f2584bac95995c796d22c39a18535"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5a131e5730b0d76014935acbc344df00"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "02de25d20ee318c3c11c8ec14bd3f1b9"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "0a30ed1451bd93f445d6c26febbb8549"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "6489a9a372d39b3d8e4d008c450d8a40"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7e3f06169e94422581d14189bf196e7a"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "d914a4c0d87eefc81bef9193caed0ede"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "dbca808e46098cf6bc1a02735c6bf09a"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "dda58a469b725a6ad6e549f28ae94dcc"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e4f9c734bcbcee38ac11e7b7c2f56a56"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "50a9a5aa35c91795d6d6b2a764503db6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "cc7e3a80deee02ef526450a82693359d"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "25f079c183be055fff83358a16008903"
  },
  {
    "url": "task/2021511.html",
    "revision": "c3e9a717ed3bf0541b13d61a6150aed8"
  },
  {
    "url": "task/2021514.html",
    "revision": "cdcac8159c3661a8922ecaf455e7ee14"
  },
  {
    "url": "task/2021515.html",
    "revision": "34e530361219bbf021b915453cea6a68"
  },
  {
    "url": "task/2021518.html",
    "revision": "86c2674012d2e365d3b610790f634214"
  },
  {
    "url": "task/2021519.html",
    "revision": "d1189c1f6c087058f0ceb3f44b6666d5"
  },
  {
    "url": "task/2021520.html",
    "revision": "f033b15bbffe6ff49ac53cd9d57ec5a5"
  },
  {
    "url": "task/2021521.html",
    "revision": "2006a7ab2c93598b17e088591b88698b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "de87e9e211ac9e4b7f07cfcdec63300c"
  },
  {
    "url": "task/2021524.html",
    "revision": "e5bde2f1d86b76f715305b25d4f40cd7"
  },
  {
    "url": "task/2021531.html",
    "revision": "0489b6cef92191207b7fabf55d7b9c5b"
  },
  {
    "url": "task/2021628.html",
    "revision": "24372ae3b36d362ae5761bea2e0df4ee"
  },
  {
    "url": "task/202164.html",
    "revision": "69ed57c3e416b0f72d446986331130c1"
  },
  {
    "url": "task/202169.html",
    "revision": "4ea84e6e8b570dac79fe7fe1119075e4"
  },
  {
    "url": "task/2021717.html",
    "revision": "b5258c47c8482ce35d4e23f0daaec852"
  },
  {
    "url": "task/2021721.html",
    "revision": "92f7075dc04677a11cfa1b36df653c06"
  },
  {
    "url": "task/2021722.html",
    "revision": "83cb39c3f93f1194c459663f10a2dcfe"
  },
  {
    "url": "task/2021724.html",
    "revision": "16dfbfc626aaf3b3da84caf9f8da4b0a"
  },
  {
    "url": "task/2021725.html",
    "revision": "84467f2e523b240af600f8e9bb031bc7"
  },
  {
    "url": "task/202181.html",
    "revision": "1f71198aefc49cc99431e584957a881a"
  },
  {
    "url": "task/202183.html",
    "revision": "f5dccead679b857cc8332546ebe304fd"
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
