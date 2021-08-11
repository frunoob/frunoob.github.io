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
    "revision": "48d7790fe4a4a2ce6550d974b76d7573"
  },
  {
    "url": "assets/css/0.styles.ca0a5d81.css",
    "revision": "da41d3d77cb1eeb10fbf30afc92d6943"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.377781bc.js",
    "revision": "6e37de92f988464fbdcd8504369d5d7d"
  },
  {
    "url": "assets/js/11.54fee6e3.js",
    "revision": "3bd991dcfc0d51b06446b1324ac5d72c"
  },
  {
    "url": "assets/js/12.b3e2498e.js",
    "revision": "4b899961b968ac280ba3d3e538cd6c88"
  },
  {
    "url": "assets/js/13.c985b299.js",
    "revision": "145c7fd20f9163f45b5d5e4fd2b02788"
  },
  {
    "url": "assets/js/14.1f3e16bf.js",
    "revision": "83f4cb91bbc10e87a3f37146663419b6"
  },
  {
    "url": "assets/js/15.c74257b2.js",
    "revision": "05973bc2e6be833576b2478fae47786b"
  },
  {
    "url": "assets/js/16.5cc45be0.js",
    "revision": "d05e0c57c7130b7e86a9750158587550"
  },
  {
    "url": "assets/js/17.c73f46c6.js",
    "revision": "d68ea4ae7e6e6fd181dc1bf3a3f2d290"
  },
  {
    "url": "assets/js/18.6dc9a067.js",
    "revision": "9bc0e224d2b491715856caa0fcd2e34e"
  },
  {
    "url": "assets/js/19.20456053.js",
    "revision": "0384cd039932dc99fef928d424df47f3"
  },
  {
    "url": "assets/js/2.1d039c46.js",
    "revision": "b79c6430eae0732b35a9758e935fefdc"
  },
  {
    "url": "assets/js/20.35d1cd4a.js",
    "revision": "350fab62b96721eb3599e898129884fa"
  },
  {
    "url": "assets/js/21.b0c49868.js",
    "revision": "74fa944baca5bcaff5e9d91d539dfc86"
  },
  {
    "url": "assets/js/22.99125a1e.js",
    "revision": "5f9c9d21e3c78c98b1928b7f8198cd66"
  },
  {
    "url": "assets/js/23.5f1a2b67.js",
    "revision": "92b661714a351ffdea18c910280471cf"
  },
  {
    "url": "assets/js/24.1ef1dd2b.js",
    "revision": "7c66013821df3e5de680a23344cdc39d"
  },
  {
    "url": "assets/js/25.4a5bb77a.js",
    "revision": "ac3d870a4846d749352ddd2d97c6c9f1"
  },
  {
    "url": "assets/js/26.37d24310.js",
    "revision": "b97f3aa318e2a7dcb3781bdc0c25caa1"
  },
  {
    "url": "assets/js/27.12fd43be.js",
    "revision": "dd349e29bc3827c1acd5d6f6138919a0"
  },
  {
    "url": "assets/js/28.0e160a34.js",
    "revision": "bd8ebcd9a0e3c44ae15f9384e0a85a90"
  },
  {
    "url": "assets/js/29.caf2cace.js",
    "revision": "fdcc07870424098c49366285596e4d7f"
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
    "url": "assets/js/4.3bd94dad.js",
    "revision": "7d5fc818da6dd4e842554e406fdce4af"
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
    "url": "assets/js/5.6cd944c3.js",
    "revision": "185600b55d8ad31d31bdd1674ea7aaee"
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
    "url": "assets/js/71.e1788f88.js",
    "revision": "2708ece34e54bec9f9926ea595d2bdb8"
  },
  {
    "url": "assets/js/72.e71bd002.js",
    "revision": "14412c616f25d91c5240b1285779af59"
  },
  {
    "url": "assets/js/73.0181fc0b.js",
    "revision": "426a91fbc493513e542ab8b09d19d681"
  },
  {
    "url": "assets/js/74.8d1c4f44.js",
    "revision": "c03808b6759ebe0282a6f8a28ec2c1b2"
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
    "url": "assets/js/app.c5ffa138.js",
    "revision": "640d9ec762dd9b2fcd1948e30a094fe6"
  },
  {
    "url": "index.html",
    "revision": "66d77aeefcade4074f558844e983fb94"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "6fbe96f28c8a2cdada37b6ab81f9ba78"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "21b0d61acb6b18f8e9ae8c20b42dd5a4"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "13cc8a17a78e3ff6ef8f9f7ad510c585"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "0d1e4377309e8924e2c74a6e921ac3a6"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "124fd301dff65a634b4298ea07b8302b"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "391507f2a7023bfc96a65ad5a4fa4ce6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "cce565a7c83979f471882a1b7165ff8f"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a5e7c4b0d01f2016f414385fcfba3c6e"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "673a08f4a569f9dd389cff377d0bd163"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "4170516415a86e789c11917a5b01b8c1"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "4a9d8bb5cfccefaa0f518535ce179b37"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "780cd987ce899cdd4362b7669337a3d9"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "c9144f39e9a7d525ba187d0037295b46"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "b15597530b1a5b4e70808add9f78dccc"
  },
  {
    "url": "memo/memo.html",
    "revision": "872dbb5c56acc5e4dbca040248ba8973"
  },
  {
    "url": "post/test.html",
    "revision": "e0697ca23752219305fe9bd405c527aa"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "886710a453f5a17d12d7d7a9e6bbec72"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "43d9f28b70bfe3ccfa05130c48ffdf59"
  },
  {
    "url": "study/english/words.html",
    "revision": "85ede814079d0f73fa869cc60562f42f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c2486bad6d8902582867066e5a73752b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "74d3d2006b869792ec4bd5999e72d458"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "acecbce8714a848c768c01a425e9b491"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "4eb029729d0f06aca2457b9a90fbae11"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "9e3c6ba02c8a1cc4bb40baa72ea37bda"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "625f9c140cbe1d44f980d04f635c0230"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "3ddefc925593d4c9fb1520e76b4d82c8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b3bd5f81f8d24af5d7d9e8c7ffa79715"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "0a9e0c8774015ca1007c360dd1f030e4"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "290b94fff75c56dc3bd5ede3c6fa5ac9"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "56dbc6821450d1d6cdfcc9516555333f"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "30635e950095dc808bf87994b26de148"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "d8b76ebe6057cfdb1ae99bdb14e261a7"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "0d49d6185c706de31fac0d9342a6b89f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "e548698a80844d717c03712b0d1bd5e4"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5bf0edac14c96df0d228693faea5d97f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "38c033a802b48faea5c25362ebad65c1"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e23d18830a5f268ae3ba14b540ba8398"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "0864626997b0f60a8092c196d49e644c"
  },
  {
    "url": "task/2021511.html",
    "revision": "0b3d8a06d1e1b4c1dacfd1263e5a43e5"
  },
  {
    "url": "task/2021514.html",
    "revision": "014a5f2f22bba78de72b789b0c713497"
  },
  {
    "url": "task/2021515.html",
    "revision": "95a5d312a396afac53dbf75d8cffb0c7"
  },
  {
    "url": "task/2021518.html",
    "revision": "af6f2b76261a22fe2f5f7a03adfa0be9"
  },
  {
    "url": "task/2021519.html",
    "revision": "07c5e35eeebbf3b78cefa6f6bc5c9314"
  },
  {
    "url": "task/2021520.html",
    "revision": "40b46a66a6cef325716815c59a3089b6"
  },
  {
    "url": "task/2021521.html",
    "revision": "61c117a299b1b392492675b150ac6021"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "4809627ff47024a344d94498718a271a"
  },
  {
    "url": "task/2021524.html",
    "revision": "ca45724a8daa05f7fd79b47bff2e8d50"
  },
  {
    "url": "task/2021531.html",
    "revision": "e1f59142a6678b22609bc8e05e0b30f1"
  },
  {
    "url": "task/2021628.html",
    "revision": "847af7cda4f43c38d917045e350678c1"
  },
  {
    "url": "task/202164.html",
    "revision": "34b0e79d25ba3e003cc232b5e3e56497"
  },
  {
    "url": "task/202169.html",
    "revision": "86dd0d92dd1c70c8e52505c330e0177e"
  },
  {
    "url": "task/2021717.html",
    "revision": "1084910313778d7e28d335c870a77518"
  },
  {
    "url": "task/2021721.html",
    "revision": "6ec1715122dffceeb287c83a8e4f384c"
  },
  {
    "url": "task/2021722.html",
    "revision": "d4db607edfac5ec343b088f90c633265"
  },
  {
    "url": "task/2021724.html",
    "revision": "9b9af4196d41f52345fe1f5747f6117f"
  },
  {
    "url": "task/2021725.html",
    "revision": "95604d435e9e33f8405add523832fbbb"
  },
  {
    "url": "task/202181.html",
    "revision": "6991d50a8a2fb84ac219db9c104a3809"
  },
  {
    "url": "task/2021811.html",
    "revision": "109dd40fc3d89ae22f48f4118e8f0a61"
  },
  {
    "url": "task/202183.html",
    "revision": "74de9de075c287a9f7a10cdf701f923b"
  },
  {
    "url": "task/202187.html",
    "revision": "4c854a1f64515e75f871de03d207a424"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "decadadd6b03175225182388f2c3d571"
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
