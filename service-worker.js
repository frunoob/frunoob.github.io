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
    "revision": "0391561722dd42d3d2e124990158f7c5"
  },
  {
    "url": "assets/css/0.styles.a2d97d6c.css",
    "revision": "277e371e7b70a2a5cfda11447ad25b32"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aaf309a9.js",
    "revision": "da71181e7c72cf21e3147d4e05331c2d"
  },
  {
    "url": "assets/js/11.54fee6e3.js",
    "revision": "3bd991dcfc0d51b06446b1324ac5d72c"
  },
  {
    "url": "assets/js/12.adaab810.js",
    "revision": "c9c7d0711bde2c386617c1969c729b67"
  },
  {
    "url": "assets/js/13.fbd67491.js",
    "revision": "9ecb1b14be2d1f9be6a56f5faa574fbc"
  },
  {
    "url": "assets/js/14.d975813f.js",
    "revision": "064f2ec6042b10e113b345bea2f987c9"
  },
  {
    "url": "assets/js/15.3bad3e87.js",
    "revision": "899d47d54a01559249c4708f3f214156"
  },
  {
    "url": "assets/js/16.092fa445.js",
    "revision": "0f2da95a91c0e0fbf106505f91692edb"
  },
  {
    "url": "assets/js/17.40cc60a4.js",
    "revision": "9d6b7e176182c64ed0a3383da103d70c"
  },
  {
    "url": "assets/js/18.bb3c9f49.js",
    "revision": "067c753f70f59c34d6bc486e3b7367a0"
  },
  {
    "url": "assets/js/19.59d70cc8.js",
    "revision": "32c4e6cc029de734aab6d40723e3749d"
  },
  {
    "url": "assets/js/2.1d039c46.js",
    "revision": "b79c6430eae0732b35a9758e935fefdc"
  },
  {
    "url": "assets/js/20.95266077.js",
    "revision": "024b65c43c0c7d1d523f0a5b4ed9754c"
  },
  {
    "url": "assets/js/21.76634155.js",
    "revision": "e04e10e2b62b8e03310cf9215a3279fe"
  },
  {
    "url": "assets/js/22.d7aa6f68.js",
    "revision": "4cd3fc538d89f00384824a1a535d4a06"
  },
  {
    "url": "assets/js/23.f3d6502f.js",
    "revision": "7bfdec7902bc2c234e6c399c7e9ed7fb"
  },
  {
    "url": "assets/js/24.4eb02d0d.js",
    "revision": "85a22f94f230a0225f732b33fd4f072b"
  },
  {
    "url": "assets/js/25.d9957f9f.js",
    "revision": "152cadfcbce3857bd2bf1d89ded02e55"
  },
  {
    "url": "assets/js/26.4d42eafe.js",
    "revision": "d95257929778fedfcab1362f4131c469"
  },
  {
    "url": "assets/js/27.4c6ba769.js",
    "revision": "1cc98c34c3b5c5e010dcea989f1369cc"
  },
  {
    "url": "assets/js/28.8a16ba2e.js",
    "revision": "09f0611d76ec98dcbf10090a8d0d3992"
  },
  {
    "url": "assets/js/29.89fe3b3f.js",
    "revision": "60fc7746dafba3952df4ee073656592d"
  },
  {
    "url": "assets/js/3.7a7e4248.js",
    "revision": "c106265def0046bd9e4bb7829271f4d4"
  },
  {
    "url": "assets/js/30.4e3259ca.js",
    "revision": "1df7dd69e7abfc270107aafd3a075e95"
  },
  {
    "url": "assets/js/31.f2515f34.js",
    "revision": "416365c403d5eea6138637dfabc6ecb4"
  },
  {
    "url": "assets/js/32.22ee6f0d.js",
    "revision": "06484adba18347154c8230ee4f6174e4"
  },
  {
    "url": "assets/js/33.845c714b.js",
    "revision": "06be056ec3c2cdb9e5220b5ca3132515"
  },
  {
    "url": "assets/js/34.465a98c1.js",
    "revision": "a718c5c1dc8c4b1f842b03b4b10e5fce"
  },
  {
    "url": "assets/js/35.855e81c3.js",
    "revision": "412ba681a0a0bf126de2a8e049df04e6"
  },
  {
    "url": "assets/js/36.d94d9b90.js",
    "revision": "75099289aff136c2ef64521680136b16"
  },
  {
    "url": "assets/js/37.abc6e597.js",
    "revision": "96ac3738300ff36f0e51e87acaea94f6"
  },
  {
    "url": "assets/js/38.2e529674.js",
    "revision": "1f46e52eff84f80335c5c42ca2fdb605"
  },
  {
    "url": "assets/js/39.24d09d9f.js",
    "revision": "ab076f97f2b385f19fdb747bc64a6dec"
  },
  {
    "url": "assets/js/4.7d3d7c8b.js",
    "revision": "d1af6725981ac423814f02ec4a8c26ea"
  },
  {
    "url": "assets/js/40.737fb307.js",
    "revision": "9da6ff8025dc12d77e7afc3957ee8733"
  },
  {
    "url": "assets/js/41.a1ab0f57.js",
    "revision": "8b5f10a2293c230dcf39e9a4ecfa06d2"
  },
  {
    "url": "assets/js/42.10f3ba84.js",
    "revision": "807d5c4186266ef8c97c5bb4c46180c8"
  },
  {
    "url": "assets/js/43.98a38341.js",
    "revision": "573a59125bebecd0501e290bbee312b1"
  },
  {
    "url": "assets/js/44.0adf3049.js",
    "revision": "42b33762acd2501cd545f3db3d0cfb6b"
  },
  {
    "url": "assets/js/45.8fb060f0.js",
    "revision": "d0b25fe969aef39956d870055f84ed64"
  },
  {
    "url": "assets/js/46.8284eab9.js",
    "revision": "6fd633fba192e3c635f5cca059af871b"
  },
  {
    "url": "assets/js/47.b200dcb4.js",
    "revision": "7eff529cbaa142c5c55a65d7caf1c766"
  },
  {
    "url": "assets/js/48.40c6f0b4.js",
    "revision": "d2e52cb0baa6ddbd664252b1e1ae9f61"
  },
  {
    "url": "assets/js/49.f0d9cc5f.js",
    "revision": "4d6012b20094fc976ee33b413ec1dfdc"
  },
  {
    "url": "assets/js/5.13e16efa.js",
    "revision": "adc2f4274433f789d7265506caa7d473"
  },
  {
    "url": "assets/js/50.b9682dfd.js",
    "revision": "a5c46004ae7f0ab5f15ed4b076927f6f"
  },
  {
    "url": "assets/js/51.f63f2c66.js",
    "revision": "914fbc963e53e7a812d0ad18bcc6eae6"
  },
  {
    "url": "assets/js/52.38c833d6.js",
    "revision": "9c6c846db0c2efc4c8bf11ac9af587cf"
  },
  {
    "url": "assets/js/53.f9706e92.js",
    "revision": "1e6ddee5e75fb2ca331c8f43c45f3c34"
  },
  {
    "url": "assets/js/54.30dd505f.js",
    "revision": "0981bbfef8553591fcd8a6072930345b"
  },
  {
    "url": "assets/js/55.0c57bcc5.js",
    "revision": "666117fed7bedc2ef2b6917c1e99990f"
  },
  {
    "url": "assets/js/56.7d19cde4.js",
    "revision": "532bf1375091c6cbc8d6cb6c60dc7100"
  },
  {
    "url": "assets/js/57.e7b21b26.js",
    "revision": "28a91b61f3e1f2d2ebdb45e219f99e1d"
  },
  {
    "url": "assets/js/58.da55cb56.js",
    "revision": "bbe61fb80450100f4b9151adc414ae35"
  },
  {
    "url": "assets/js/59.86a0ddce.js",
    "revision": "ab92388d3e7a98cb7b3a9663e4a08dfa"
  },
  {
    "url": "assets/js/6.3b763fee.js",
    "revision": "1a1d20284eca3d2737a3b3163aba58a4"
  },
  {
    "url": "assets/js/60.69d74047.js",
    "revision": "d8516c6c5b934866032b7d87c4f8079e"
  },
  {
    "url": "assets/js/61.dcca7bd6.js",
    "revision": "7d4bc0ec81999b9f567e291c747ba342"
  },
  {
    "url": "assets/js/62.facd3cc0.js",
    "revision": "efd16aef6ff3dc0c74084fd6d0e15b85"
  },
  {
    "url": "assets/js/63.91f158d9.js",
    "revision": "bc0ef95b47902c06b2525c156f3fd15c"
  },
  {
    "url": "assets/js/64.45254a9b.js",
    "revision": "3d441cec7f0b1770f717f286cb753f5d"
  },
  {
    "url": "assets/js/65.12915424.js",
    "revision": "912f348ef78b86e725a919876de32743"
  },
  {
    "url": "assets/js/66.b2ea37d1.js",
    "revision": "e3435c66b02f7cac7a787b42113a2304"
  },
  {
    "url": "assets/js/67.eaa54e82.js",
    "revision": "92e8d71c004349e8fa0d357cbaa2d71b"
  },
  {
    "url": "assets/js/68.f91d77ed.js",
    "revision": "0df180b5473ba70c05e12fd6a6732bdd"
  },
  {
    "url": "assets/js/69.61a9a33f.js",
    "revision": "f12235945900a3ecc28bb249c4b61593"
  },
  {
    "url": "assets/js/7.7c5b09e8.js",
    "revision": "56bb2f6eebe5e1aa6701cb58caf8a9c6"
  },
  {
    "url": "assets/js/70.71d10315.js",
    "revision": "f8461321084580e7fe1f88d5b68c56ce"
  },
  {
    "url": "assets/js/71.2b1de198.js",
    "revision": "b46a78c6d24eba02c7350f6ceaae614c"
  },
  {
    "url": "assets/js/72.908c3ac0.js",
    "revision": "f409317bf3e3da91d3d7a6b3ffb204eb"
  },
  {
    "url": "assets/js/73.f37611a3.js",
    "revision": "c17ea389d1a39e6b8ee01f49e1809249"
  },
  {
    "url": "assets/js/74.b6b530b4.js",
    "revision": "6d29cf6a2240831535cd9e33a94c607b"
  },
  {
    "url": "assets/js/75.d636fb55.js",
    "revision": "fbc7adc697adfa391615607153f51d16"
  },
  {
    "url": "assets/js/8.4ebee468.js",
    "revision": "abba6eeb910b8fe77aad4edbe644eb87"
  },
  {
    "url": "assets/js/9.e67b74e8.js",
    "revision": "c3f6d4d3a99aa5be042d74f3a677a9c7"
  },
  {
    "url": "assets/js/app.3dca9360.js",
    "revision": "10f22f077430e97850604bda442ea843"
  },
  {
    "url": "index.html",
    "revision": "bbaab9684d7cb2491ca4fbe85b55ff9a"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "0e0bfef1e287d0687c61b1b7c2422c5a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "449b6cff75bda546fb47d6d268232ac5"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "7385ddc49361a565d1ac613df4f19c35"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b522980c611c9db45eb0224b79f3a892"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "fc4c3be8320a6e11eb7b8c7b10df1d92"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "7307ad90903209b4c999de885941b067"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "3abc892a020a3d2869ea6a9ccc346289"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "f5454d5cf747af2f9821a14786ef70b7"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a4db63ea77e1fa75a88e988d4a0b1989"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "3416ad41f118e4d1212f50b66f022961"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "c904f0ad7e36d7319e7d34c3a6918156"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "d22f70fcb42e05f00d050fec4ce1aeec"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "488a26a18e10a2037f39d650a7656713"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a3326ab50f60ed4a1c579ae059bcc493"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "53959a3b9bf3171cf400e463495f867e"
  },
  {
    "url": "memo/memo.html",
    "revision": "6a278e57e1af87b687c926cdc071a481"
  },
  {
    "url": "post/test.html",
    "revision": "908c4d54c1665002026228222ef0c930"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "83b3dc31a44b428c06eda448cb4c73af"
  },
  {
    "url": "study/english/words.html",
    "revision": "ecc465789971d98565c5a578d696a698"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e5eb178c88629f4d618198bf2cc28bf9"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a34e4014158bac28f7a93a95e7bfa834"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a2a5f750d30a4df590f8eb8fa6e043ff"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d7dec5eb782ed751ad1698ffccc55d9a"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "fbadcb39f9b3c41ba093e9161368472a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "6c5a8c1c3c6f20f00f10bf5847bcc357"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "8169332e4a71f0b086e157cfc484ab25"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "3e1a69c346db7d1ef51e1381126ab2a6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "86c5f1fd5b2ff6cc80903c87015ca53d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ec0f79d4bca911c592cc1adf8368bcdd"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2b7f04149810689e98868738f119e4f2"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "cfd71ed79782279956bc5d79a41ea992"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "2d86b4b896811b2189adeeeab95e82ae"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "0a62548c1e127ab1f947a9fb1f4ecd6b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d2c25560c755608673beb48f132b2a16"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "20a3d41f09603d652b56d4f9e832900f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "79263b3abd382bd0fc04d20e8fca1ee3"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9111fd92a60671a681a25d04681a5d40"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "4ad73c3cc3f8bd286f019c40d328be83"
  },
  {
    "url": "task/2021511.html",
    "revision": "f27ff19521476cd8eea87a56b73cd3dc"
  },
  {
    "url": "task/2021514.html",
    "revision": "54c21fac8c0bf7a894e254cec7c4ef43"
  },
  {
    "url": "task/2021515.html",
    "revision": "dafd383b142f383b411fe96fa6c7b678"
  },
  {
    "url": "task/2021518.html",
    "revision": "6987ee95ed922f7f19b4094dae49186b"
  },
  {
    "url": "task/2021519.html",
    "revision": "d6e1db5247bb549738ac498583aca100"
  },
  {
    "url": "task/2021520.html",
    "revision": "2c896e8e7535d5a3fdaa9499d1dcef68"
  },
  {
    "url": "task/2021521.html",
    "revision": "a00be15b443d5af21abd52076790547c"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e856eb5d8093776400678a8dc501a95d"
  },
  {
    "url": "task/2021524.html",
    "revision": "e286b8e8942a86625e26b7068d959197"
  },
  {
    "url": "task/2021531.html",
    "revision": "94a671d376f9ffea2381c213ee66fe0a"
  },
  {
    "url": "task/2021628.html",
    "revision": "2f43a14c99b44ec7a85fbe4fe151af70"
  },
  {
    "url": "task/202164.html",
    "revision": "9ecf4227e174bb1f15585f70d8fcfc70"
  },
  {
    "url": "task/202169.html",
    "revision": "51318d7a1fbfb4f4bbee392f231f5280"
  },
  {
    "url": "task/2021717.html",
    "revision": "e7e8ff63f0ee42b08906339a8d96aebf"
  },
  {
    "url": "task/2021721.html",
    "revision": "bab17b387c3bf5c0a6fc225a0e56c7db"
  },
  {
    "url": "task/2021722.html",
    "revision": "269c20b774f9775ec9b70c9fba66f9b2"
  },
  {
    "url": "task/2021724.html",
    "revision": "a291e47d67e144971af0953f5e07f10e"
  },
  {
    "url": "task/2021725.html",
    "revision": "5700d1a33f627529215e9f2bde485e79"
  },
  {
    "url": "task/202181.html",
    "revision": "ede0d862428691b785cb67d2388512de"
  },
  {
    "url": "task/2021811.html",
    "revision": "c9bb046344343f9464045fbdf333022a"
  },
  {
    "url": "task/2021812.html",
    "revision": "bcf8bb9c3b8cdbd94b22b3c3e5ba7f5e"
  },
  {
    "url": "task/202183.html",
    "revision": "a06297702c3ad6f62b41a32ba85a98b1"
  },
  {
    "url": "task/202187.html",
    "revision": "0bc79117e2e9c0a3b8b9c06b5abd3264"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "ee472e48a78e683ae9dfce728efdcaa0"
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
