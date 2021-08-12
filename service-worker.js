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
    "revision": "d115c5d1c00af32becaa6bd0b80b078d"
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
    "url": "assets/js/app.1d6cd298.js",
    "revision": "5062b28054069e2777b19e5098bacd3c"
  },
  {
    "url": "index.html",
    "revision": "c073a7e469c7a352cfc664f375a65cc7"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "b847553828369cba6ce41268825617d5"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "048f551d2d4cea5f5a891b6dc9290921"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "2cdda9fd7ca92f8cf48260b984b67939"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "c8476e954cc97e2c2adc4c6da19841e4"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "2dccfd237e91d2d472ee0054c3fd7eef"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "30e101813e4942c41f7e9b31a28e9ad6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "0a75231807d60f587e5c3001fe5ab4a9"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "72577863af21294e70b163451185b684"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "f298664914c666e66104fc4d25cf2ce1"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "d059add8b869cf6186b94642ee1cde02"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "133d59c7892d5bca20fe115cee7e21fe"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "ff01d4a89adac7b329f701fa83793aba"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "caf1ecc0409e61d888af01946ef65152"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "9c2b88a93088204cd2cc253af477a296"
  },
  {
    "url": "memo/memo.html",
    "revision": "cb3a84cae327f034ec7f65d492b419ed"
  },
  {
    "url": "post/test.html",
    "revision": "ff005a1a617092860377349e7ee80d00"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "2de8fa9b7ddce273fe30d512a48eec6b"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "2fc5faf34ddc2c76550ec56031c01f53"
  },
  {
    "url": "study/english/words.html",
    "revision": "8c2f995f597206f19b9cd5bcfce7a7c1"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "2a9012ea8712c3d1abcd6053482ae0a0"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4681b8e1c650d66e3e660cebc4108340"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f9cc64091d06064ae5cc66e72a6e3e79"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ddf9dfc22565a474c122262b47c95ecb"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e07816b9208fb4614f9eea35fc65394b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "3ebc3256a2d20afbb94aa9ff5fe42a35"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "8aca92eb7340f0a38bc4c37eaa04f6c5"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "96f94daf904e6e95b1267e94387a5b6c"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "e31b6fa81f6925761799990003636872"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5f58cb41049953b010c733a3e45244c6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d5348c8d0564e7e4ef9776a732da7dc1"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7aa9f941fc1701ea413b1e78e74712d2"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e6df0675a76824a943cac1407fc544c4"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "a98b88ccd3b43c6f15209a1f9f953d7c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "9b773983c505ab00c3de478ab828ee3b"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e0795cee825d56309764a6157698ee07"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "504a424aacb63f190923b1d6a93b836c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "81c91222f9c570d5d1320164189bf123"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6da918b6479df83d572797c190c13a52"
  },
  {
    "url": "task/2021511.html",
    "revision": "c09a1d827e82c70d3aea31c4149b6116"
  },
  {
    "url": "task/2021514.html",
    "revision": "34741ab405aa7e20d14f26c676b203c3"
  },
  {
    "url": "task/2021515.html",
    "revision": "e1f0a59c4b2008fadf658346b7ce1cc4"
  },
  {
    "url": "task/2021518.html",
    "revision": "50de4606d27948d5afb5c2af727abaa4"
  },
  {
    "url": "task/2021519.html",
    "revision": "9586c07d29a8213ec85eb8740947355f"
  },
  {
    "url": "task/2021520.html",
    "revision": "47ecd878b56231b008363c3106761678"
  },
  {
    "url": "task/2021521.html",
    "revision": "8122a2b2225942b51594311bc792dbc3"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "fa3ac7db5f1ceb21af95a7a150d8c518"
  },
  {
    "url": "task/2021524.html",
    "revision": "4bc6eadca36c29fb57716c0a1f87a9cf"
  },
  {
    "url": "task/2021531.html",
    "revision": "d923d49d4d2eb50d995316742bbc5f0a"
  },
  {
    "url": "task/2021628.html",
    "revision": "b230aab677b83654bd85cf0b7fe9e675"
  },
  {
    "url": "task/202164.html",
    "revision": "16da2755691ccc7abc7ee3c57c8cbc96"
  },
  {
    "url": "task/202169.html",
    "revision": "73a6444447b00601083de9e4234fb572"
  },
  {
    "url": "task/2021717.html",
    "revision": "8baccdcf4b6caf6f04582daf2d0d20a8"
  },
  {
    "url": "task/2021721.html",
    "revision": "74baf079e6404f0d7ccb0ac187d18809"
  },
  {
    "url": "task/2021722.html",
    "revision": "8226ed3eda725031d32a415fbedc5187"
  },
  {
    "url": "task/2021724.html",
    "revision": "8ff3135a74d988d6daf8bb5721728b42"
  },
  {
    "url": "task/2021725.html",
    "revision": "1ca3cace2ec54cc6b7ca7e883414dcd2"
  },
  {
    "url": "task/202181.html",
    "revision": "875e9e8b176376b6e95df389a2e932d2"
  },
  {
    "url": "task/2021811.html",
    "revision": "2046bb68a3d3352b6078746ac510165d"
  },
  {
    "url": "task/2021812.html",
    "revision": "44ce1711cc930336e571dc3d31f38bd8"
  },
  {
    "url": "task/202183.html",
    "revision": "b70cb554bdb966baf4b815651b9f9a51"
  },
  {
    "url": "task/202187.html",
    "revision": "dd50e78c4cf10f63eb02b82ab385b83a"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "6447e0efdb40ae03fb654a795f27114a"
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
