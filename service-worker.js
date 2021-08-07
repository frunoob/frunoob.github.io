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
    "revision": "c5761b18cf863128dbd83d143c28c812"
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
    "url": "assets/js/65.137081db.js",
    "revision": "b2746b0434bf1e59eca4f734c0246a6b"
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
    "url": "assets/js/app.098ce35a.js",
    "revision": "a901ff0fc02cabeec178e73b719adb42"
  },
  {
    "url": "index.html",
    "revision": "349ea1ca758bb81f6f04bbc95552cce6"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "e7988b49c4cdedf39ac078dc21750369"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "66d3d3e14a9077b42dd6a55514b8b4ba"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "652ca261537342d08e65c7410f5c4b45"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "96daf58135e187b927275bdd17ee0c8c"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "7e86b27e748f894a5fc5b3499d10f927"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "2ae4081c9261202b3a398ec8b8ca5197"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "0db09c39ee50fa9ee4c817f890685054"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "0eb671680dd4b016b48eecb52343680e"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "4d61e20e12a60713b64a8f94f19dc995"
  },
  {
    "url": "memo/memo.html",
    "revision": "6b49d362b92102ae79150b7959fc3167"
  },
  {
    "url": "post/test.html",
    "revision": "0c51ca6b6f00c9a96dad90573076681b"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "e723a2871dcd02078f23bd3041158d08"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "73766ee75c8dad9acc5abda6ffae40b7"
  },
  {
    "url": "study/english/words.html",
    "revision": "0df17677a05863bc72d5b94cee104dbf"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f805fb407cac8f369472efd08a511cfd"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "65281f6bf455088e40e1bd2b992e94f5"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "676cda8b14b8bbd9421ac1154a9002ee"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "4900ed147a03ac13bd22eb2b75bdf177"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "88e07eb5d9914ea3866f1316cb4624ab"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "35cfafeb09d3f10c5193be82bf7d411b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "ab3c63700578302b0f38698a8197eddc"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "99e80d39ea44645b87ddb99475a32a89"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "94586fb6629b42c68e377b6ad7797a0d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "6da4f4088d54e4e6f5bb1232d75eaccd"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "f32f91487e7a9cd1d4d3904c747671d4"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4563b4eaafa09dd79f821b949db5dddc"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "f3e97fb1b8662f319d88e45c1bdc2d13"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c0b37aa2a4fcfeb38dd892485586d62a"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "776ea8eda93c3636e74194c2f11eafce"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "cb5976f0174228612e294e319a35f51c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "8e34dcc1eeefecbd3a9e5379841f2246"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "6ec45358dedca77b4502549e15bf5cb5"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "fd0971b8c473993866cf740ee02ea79c"
  },
  {
    "url": "task/2021511.html",
    "revision": "d192c3e43feccc8a5e5bc3de4000450b"
  },
  {
    "url": "task/2021514.html",
    "revision": "c617d62e88f02e4b25c36df7b2d1744f"
  },
  {
    "url": "task/2021515.html",
    "revision": "538a81bc701457e272706bbabd3a485c"
  },
  {
    "url": "task/2021518.html",
    "revision": "a9501e75bea0278339828fac74f0ff01"
  },
  {
    "url": "task/2021519.html",
    "revision": "955a66e1f2c3eee4870a88f5f4a051ab"
  },
  {
    "url": "task/2021520.html",
    "revision": "e6fc6db7cb79fc4a2b2974cd93a4eb2e"
  },
  {
    "url": "task/2021521.html",
    "revision": "cf489c4fb2d2ba273f5a183b5db28604"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e67edda6427b18eafdb27b7192d09c26"
  },
  {
    "url": "task/2021524.html",
    "revision": "7511b8574c5edd5db44fe6b9911d14f1"
  },
  {
    "url": "task/2021531.html",
    "revision": "f4743eb635e924abd7a3e654357aba4c"
  },
  {
    "url": "task/2021628.html",
    "revision": "bcaebb8234f2510fbe15abd19323cc01"
  },
  {
    "url": "task/202164.html",
    "revision": "83872c44b125eb269c38f6dfbd79db54"
  },
  {
    "url": "task/202169.html",
    "revision": "9e06e4e7473debb8343a3da63309d660"
  },
  {
    "url": "task/2021717.html",
    "revision": "a1e3ed476f4162bec100cf2cee0392b3"
  },
  {
    "url": "task/2021721.html",
    "revision": "12668da33db6e40e04b26e837f4dc4fd"
  },
  {
    "url": "task/2021722.html",
    "revision": "3e0ccc8192f6bafc91f1626501b2179d"
  },
  {
    "url": "task/2021724.html",
    "revision": "ad5eb08ffaa653c2a5fe8fcbd37a0c2a"
  },
  {
    "url": "task/2021725.html",
    "revision": "bb9da35c4bc0acd256bafa1d69ac2152"
  },
  {
    "url": "task/202181.html",
    "revision": "39265a13b46acd896c1ea71c4c5283ac"
  },
  {
    "url": "task/202183.html",
    "revision": "936aaa4a42ca5f8ce0ec91219efe7222"
  },
  {
    "url": "task/202187.html",
    "revision": "2fc2066a42b1004b9cae41925867ea84"
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
