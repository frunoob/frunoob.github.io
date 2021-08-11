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
    "revision": "66032c7bbe202fa034f672a18c02d046"
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
    "url": "assets/js/73.c3d3e9ad.js",
    "revision": "eccb7c0dcd48b59c943edea024668366"
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
    "url": "assets/js/app.3b2c96b6.js",
    "revision": "b0e1998b971daec2edcceae1ca217af7"
  },
  {
    "url": "index.html",
    "revision": "f4762cf548e00795f2e0cbc5a156f60b"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "f0f503a641300db862af546b19e160c5"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "011ca9c4ade74037071a7111fcb546a5"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a14e27016e3406d08200870db49418d0"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "b73a5bc389fa6e16617accdefcaae48a"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "9f0e0e73ad8be093a7d01a0711302490"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "461f1722ec9ca681e0cdaf2b0a36d3b9"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "86f019ec5e222c4724b1c82638194385"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "4296c606f66091b40b4fff497647c3db"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "d62dc25213e75166bc876bc8455d73ac"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "0f3c688829a0be8281eaab95756707c3"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "0fe42b349ef6f878aeea2f44126fcf9c"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "e326ee7a351a47f6a19e2ec0c86a34b8"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "d692209fa405e0364baae886ba240696"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "25c1f97deb79807776795984ff37fe69"
  },
  {
    "url": "memo/memo.html",
    "revision": "d5f7d68b5983475d08a04367041ae3ea"
  },
  {
    "url": "post/test.html",
    "revision": "dc2297999e6ee47e9bdee3f04757dc92"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "12166e9d171a490a451128b7e07bf4e2"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "5b82847ccfe42c4dec79760d0352420a"
  },
  {
    "url": "study/english/words.html",
    "revision": "542a697c519afa060a86153409e4e76b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "cb563696cf672d758c740635999f9b3f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "00b630091846b58e1499747482e5d9b4"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "7c2d22737df8a3b46f1f8be71e4279fb"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e4172420adca7f76a380ac474ee49fae"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3773f6b2d429d5facb3b0bf44fbfe937"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0bbb4ab83e9b6603b1726f7477473704"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "4d4d2615bec7cc44b41bfa10322827c3"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "d08fb7b25f6b2c103b3e1c78de2a0e56"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "8ac17640dedb2bb9dc43a6fea9a5a081"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "312ef76feba107e97425d8d76aadc42f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ec581649d3fc844e052dae8eadda09a8"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "57d939360193b5a14142e87df3588e4d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "06c9e33b8416ec0de71237fe3ee689f3"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e0be3313e73706cfa69ab2e786a21b67"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "e001035a0b2622140e5cdd76ebad4450"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "f70d2be8b6a884a9f95a92d27cb8987e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3f657478b7f6150c1d24727312805ffe"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2bc0eac1befcfc2510bcc96fb46a80fc"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "9c7d39b5ccf2f818d494bb4c797ead99"
  },
  {
    "url": "task/2021511.html",
    "revision": "0e578a4217bc5bd0f89c1eed9e118260"
  },
  {
    "url": "task/2021514.html",
    "revision": "4216ded72f2cd96bbe8c1b91dfd95e4d"
  },
  {
    "url": "task/2021515.html",
    "revision": "1c29244c0c6f2fdbbcdf8eb0bb9ac97b"
  },
  {
    "url": "task/2021518.html",
    "revision": "a0bd211f692539052898a121e58dff47"
  },
  {
    "url": "task/2021519.html",
    "revision": "fd2fe25cb29c8a534ac104273ad41263"
  },
  {
    "url": "task/2021520.html",
    "revision": "a70eefac83edcd0c28c131c74ba66ab1"
  },
  {
    "url": "task/2021521.html",
    "revision": "14d4f857b6734d2010ec21d99fb42beb"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "9376c3ecc9bedbe18a4d8825e6686b64"
  },
  {
    "url": "task/2021524.html",
    "revision": "267134af805575b6a471e29eed2a44dc"
  },
  {
    "url": "task/2021531.html",
    "revision": "34a0cc7a9398ba16e1470c31ee5024af"
  },
  {
    "url": "task/2021628.html",
    "revision": "aee09b8b9f148e8a3fb0f78d478dd914"
  },
  {
    "url": "task/202164.html",
    "revision": "7fc4ef5963c151eb0cb0efeba66c179c"
  },
  {
    "url": "task/202169.html",
    "revision": "5bd59cdc52cad76e71fe545d7348aee1"
  },
  {
    "url": "task/2021717.html",
    "revision": "0a27e8b4651e6265691c989d207b39e4"
  },
  {
    "url": "task/2021721.html",
    "revision": "2d05001ca311d93b3ee3750c4d9583d1"
  },
  {
    "url": "task/2021722.html",
    "revision": "f8cfaf8858753bce549c57199a5a0b67"
  },
  {
    "url": "task/2021724.html",
    "revision": "5763801d3ff530f10c50d05032252ac4"
  },
  {
    "url": "task/2021725.html",
    "revision": "f42a755b7decc71fea74bf755ca5ec61"
  },
  {
    "url": "task/202181.html",
    "revision": "2fa99116ac74ea3129405f4119d5db5d"
  },
  {
    "url": "task/2021811.html",
    "revision": "1225827156ce5febccbe95afd67c0fd9"
  },
  {
    "url": "task/202183.html",
    "revision": "25135d985651113a2f7140d0eaafb6ac"
  },
  {
    "url": "task/202187.html",
    "revision": "bd3d9d4ec724edd11dcdb4439e264558"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "4bc61a4ac07acf2403532b6aab3fad3d"
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
