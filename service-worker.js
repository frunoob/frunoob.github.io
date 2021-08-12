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
    "revision": "399882be6381edc880105a0930ce60dc"
  },
  {
    "url": "assets/css/0.styles.15522727.css",
    "revision": "3d48c0a351bd48f53f3ffe9f09fa6ff2"
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
    "url": "assets/js/12.adaab810.js",
    "revision": "c9c7d0711bde2c386617c1969c729b67"
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
    "url": "assets/js/4.c4e52307.js",
    "revision": "99ea6b354360da44a17fc5561f88371c"
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
    "url": "assets/js/73.6ef7fc15.js",
    "revision": "81d2b5f5a390dd5138a256c31dea43bc"
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
    "url": "assets/js/app.7addfbaf.js",
    "revision": "e244a4f6cd8636cee00ebd762c414834"
  },
  {
    "url": "index.html",
    "revision": "cf1328b1c255ed5d5353f32ef3a94c51"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c17d98fe3c1f2817156ed895b24266ca"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "52ea762b91cb69ce667090a5f06f1ba0"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "4702ae7138684db46ab57c2c65ed414c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "800e504a1bcc78626e46bc0fc872662c"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "34c0d6fef0f4e6a06b261472cd81a569"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "8a210eef4dd60c11cbe700dcc882afb4"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "b20279e5fe3eb48a0799fa244c24ff06"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "1d864334d7f3e2a381ec32fe761b426a"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "3430f0fedf23a7a142c68ab5f8a12810"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7caf2daf33ab4aaa3fd4f6be6ec71a69"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "d92a2ec4464c48a1b87321ef94a4e5ec"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "075e22a3afbd477f0b28991616177ede"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a93bb69ab829994eb526268c2c0909ea"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "94ff155af90a2f36ecead21420bcca89"
  },
  {
    "url": "memo/memo.html",
    "revision": "24f25e1bd9d1566f3b29fac17d2e7a76"
  },
  {
    "url": "post/test.html",
    "revision": "7894987f24d8efbdbc1dd698d8634181"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "0e491fc7ec1d8418c74b786f4799bc0a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "00556a9500bdcd8cd1d0f8d3c2a00add"
  },
  {
    "url": "study/english/words.html",
    "revision": "6014b48edbcbf84695a269bfa1f953b0"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b950519061e8d919ab85159aaca7af61"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4831dea59d1db788d7765654ffaa1454"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8b38eda266899b261ba6ba2766712ab5"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a3643b97701b65b0b421329ba604f3d8"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "4ac1dd2447ab1f7e9119040510077931"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "145bd1bf1f40e62fa8b2a4294da5d542"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "179de2292757c1b9b913abcea7db2cad"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2571c0ebf85f0ac30d5381a87b29a47b"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ec48481d575ad04777e0cb67112771e7"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "7f41cd22814135380346b2fe93841891"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "778bc37dda7bb3fae26af2f1e16fa4cf"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "de054ebc28263a1f671238477cc02896"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "9b9e321e80b0eda6879f8392fc4c96a8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "7ec4910398c8d2ded110bf69a565f319"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "5e9ca2532e09fbce6726c135b57ada5d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5aaa6462ca517d2109b34a805f8c07b5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "630e9c08333f568f20af2761b0a577d8"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "05469452812fa7f70793e3421f8fdcf7"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "dcf57999b234974cf7fccef10b633f6f"
  },
  {
    "url": "task/2021511.html",
    "revision": "1041ca5232059cdc3935603760842bf3"
  },
  {
    "url": "task/2021514.html",
    "revision": "db45f3d3fe2b433d91fcf3233676f81d"
  },
  {
    "url": "task/2021515.html",
    "revision": "80cc674a416e050b4a780a411dea435d"
  },
  {
    "url": "task/2021518.html",
    "revision": "e49233ad434f55d594ed107b3cd6044e"
  },
  {
    "url": "task/2021519.html",
    "revision": "5dedbb2e27bce2a21c4b6deaf6cd389b"
  },
  {
    "url": "task/2021520.html",
    "revision": "e45989a06bfe4f465a99d474cce59dd9"
  },
  {
    "url": "task/2021521.html",
    "revision": "13d9dfca52b623953b02c0daac603346"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "23009d0ba1a5a82962dc3ef42072c5f7"
  },
  {
    "url": "task/2021524.html",
    "revision": "077a336baf35a68f1fdc8e7d9be6b516"
  },
  {
    "url": "task/2021531.html",
    "revision": "c5c145fa9492e36e95ab8635342ad9f5"
  },
  {
    "url": "task/2021628.html",
    "revision": "dd43932578960a8de1518c6b93b3fd1c"
  },
  {
    "url": "task/202164.html",
    "revision": "2d61551f5a5565c725e4507963514f12"
  },
  {
    "url": "task/202169.html",
    "revision": "31739885f01437b02336d3fea739bd2b"
  },
  {
    "url": "task/2021717.html",
    "revision": "67c007edc4e366cc0b2f6966e6a4857c"
  },
  {
    "url": "task/2021721.html",
    "revision": "656650caa9998f926c6479fe0bcfc46f"
  },
  {
    "url": "task/2021722.html",
    "revision": "f670204732c41ab9c3f0afb7180a95cb"
  },
  {
    "url": "task/2021724.html",
    "revision": "90b650266d2c9a1241979d956253f73d"
  },
  {
    "url": "task/2021725.html",
    "revision": "4cc700791b6a00563482639ba16c4108"
  },
  {
    "url": "task/202181.html",
    "revision": "d170a8cfd1ed1d781ac86a619d6e78d2"
  },
  {
    "url": "task/2021811.html",
    "revision": "8b3d49e28ce2346acaa14909cf60986f"
  },
  {
    "url": "task/202183.html",
    "revision": "36a04bdd94d5972ef1cb015a74920861"
  },
  {
    "url": "task/202187.html",
    "revision": "15c3d1c3fdc63569c37666cca2383023"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "ea3e548c8cbfdf01e569fbe46611fbc7"
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
