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
    "revision": "411f38004c3dbd7d11449ae7d6e2731e"
  },
  {
    "url": "assets/css/0.styles.b0940ad8.css",
    "revision": "51385cbf31f1d3645feb55dceb3fbd27"
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
    "url": "assets/js/22.f960c1fc.js",
    "revision": "c5f1c2987e99c3a2f6233cfb3035cd18"
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
    "url": "assets/js/5.bc153dc8.js",
    "revision": "9cd5943cf2eca410a140c029edb7eee3"
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
    "url": "assets/js/65.97a3d79c.js",
    "revision": "2246645aba7ef2e7792fe097207beb20"
  },
  {
    "url": "assets/js/66.b0aeb2f1.js",
    "revision": "aeff68afeed9ae36956573bc289727d0"
  },
  {
    "url": "assets/js/7.fc271e9d.js",
    "revision": "703b9d82f733290caadea57a4674938e"
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
    "url": "assets/js/app.ad88091b.js",
    "revision": "838f85f4fb8997715e32bea4daf44edd"
  },
  {
    "url": "index.html",
    "revision": "9e4cec5bc49ea19f552b5b2cddb78194"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "07f633874a76453c53d0861fa65e4be5"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "9351dee7daf58ac946e4319c41b851b2"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "5e6dd0a5bf86e259308debbf27866e58"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "66cfe4c56a7ff34e377443819ca660be"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "9c17c50edfbffef7ce71f66e02c733d6"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "3ea610b5f0d75162801b7b69d83cd133"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "4876d2fcd762925e2a92228881bbc0ad"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "ace9cacc210e52316b38802ecb87b108"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "be1cb3c7fd78b35791979a9fba80978f"
  },
  {
    "url": "memo/memo.html",
    "revision": "d679b2451ac5f85cb537b22a71d3e4c4"
  },
  {
    "url": "post/test.html",
    "revision": "3abde83cf5576f76b5dbdafac5b1b62c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "30dea41dc476a291bd871710439abe24"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "5a5ee15c8001ac853e31ecb55f5e2fad"
  },
  {
    "url": "study/english/words.html",
    "revision": "e358563fb2907136df02458646511110"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f693c7cf010166254af1a3113fe03e7b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4002cc0ed9cac03405a3c81a1f3940d3"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3bb1848ea4ffc0789464172fb102264c"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "07949dd4c50b7dd843a10bb3dc086aac"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "b388d39702e698253c41c775ff85c5af"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "c4b781433113a5edb4b34168b585f4dc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "45d22a76115f189a45871a2dc0db12bf"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "d46874fc8cdbf9e97fffa089b9195d50"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "48f9e3a9bce80857c644efb5daabb8ec"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "7086520faa6457abfccd09f61107b4cc"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "b12ba8f21cbbcdea6c7b6eb8d223a9eb"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "2cc7ef4f17a3bcab4277a10b85aaa587"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "822318deb43747f8781cba3d45f999bd"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e09c25c23235cff71724b55d40a81dee"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "41035756eef0897dda6582c143b48a51"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7b12f484ee8a324a98ec53c12b4dcb52"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5d56029e6e001dcd8ae247875b502f30"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "f144a471146925fb39b57acbe530d6ef"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "5a097ffe932d825f2e2cfc6b4c7bf207"
  },
  {
    "url": "task/2021511.html",
    "revision": "29e9e0e711b12eae50e1651682d51199"
  },
  {
    "url": "task/2021514.html",
    "revision": "61ab65462c18af04d24c75dc50c516af"
  },
  {
    "url": "task/2021515.html",
    "revision": "e20ada1e6b00c11f434e4ceceb63eb23"
  },
  {
    "url": "task/2021518.html",
    "revision": "8b09b54faeb5ce09cab987668f69162d"
  },
  {
    "url": "task/2021519.html",
    "revision": "c40f379b99fd8e0272942aaf711b7a85"
  },
  {
    "url": "task/2021520.html",
    "revision": "89c9e50ad070e907ef7b34d83b4eb361"
  },
  {
    "url": "task/2021521.html",
    "revision": "b9c951974917ddebb6940091d0716481"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "7793e5b110a6ff3334a08339729fb827"
  },
  {
    "url": "task/2021524.html",
    "revision": "140f2579ada4a4dad43010834db2e3bc"
  },
  {
    "url": "task/2021531.html",
    "revision": "01b81ea989438da1e28b593ca39b849e"
  },
  {
    "url": "task/2021628.html",
    "revision": "24e4fb696b1299ab55a0f4b2c85e47b5"
  },
  {
    "url": "task/202164.html",
    "revision": "710ae218ed9c7558373ac95e429f973a"
  },
  {
    "url": "task/202169.html",
    "revision": "aa55e44cd40692e10a463c37b89fa1da"
  },
  {
    "url": "task/2021717.html",
    "revision": "966401b8f0b66fe10851d04020216adf"
  },
  {
    "url": "task/2021721.html",
    "revision": "6c9720af8e044bcc19a160bcc827d705"
  },
  {
    "url": "task/2021722.html",
    "revision": "477392ecf51fc48d3a49083791691141"
  },
  {
    "url": "task/2021724.html",
    "revision": "db28cb687b44aeffa0bef2dd45a6fa40"
  },
  {
    "url": "task/2021725.html",
    "revision": "3adb7a2e8f60cb717138fb51f2a742e1"
  },
  {
    "url": "task/202181.html",
    "revision": "ca8bdc35bcf9363e8bc106b08810c8d3"
  },
  {
    "url": "task/202183.html",
    "revision": "473bdbce0fd20f6d7ac0b1019e60d097"
  },
  {
    "url": "task/202187.html",
    "revision": "311c8c1746c24ef80b11569418f37acc"
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
