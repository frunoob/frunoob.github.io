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
    "revision": "f94140553ac4c9e0ea46f601f600921a"
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
    "url": "assets/js/app.f1c2a229.js",
    "revision": "18236358c508ecaede40ab89fdfb9aea"
  },
  {
    "url": "index.html",
    "revision": "a880cafac450edf9215cace406043325"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c35731ee216a05ed6bdde0c269fc7c9d"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "400bdaff857aa4a4974b1c24ae90d37d"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "b12fae4625ff490485cf9a78a1742f84"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "151460a6cfada6771501a45abbc02a9e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "14d00d31f57791f7a9f13d5fbf8ee226"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "ff714397af947724a9f8adb76dbc9321"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "e20634b5738af3ed3e6d280bc14a6146"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "4ecd385058adb164d72ee87f5e2bdcd7"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "9a87a55ce411c7152e9f1fbaebfc0387"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "67a55f4a2365ee27f898f794098db290"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "377a9e1b7bda2fde27adeb855d33e58a"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "42c3dc89ce270ccd52895604ee0c5254"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a4b999b57fc65a86a9e5759f2c0507d2"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "74ef5137478299faab04bdacc6c8cb4f"
  },
  {
    "url": "memo/memo.html",
    "revision": "e87febf7871589eab231154e88bfa556"
  },
  {
    "url": "post/test.html",
    "revision": "030616620daa0094014000e696cc6bb3"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "e41ea7bd1be80a1faf5a1ca49d243937"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "ad683d1dabdbad52b0680ea2ed70f71c"
  },
  {
    "url": "study/english/words.html",
    "revision": "94fa738b16219d788ae039485ca17d79"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "745a818afb17b60bfd96ddf951e2a89c"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "319a0b3f554f6a73e06a67cd294334be"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3031d4bb07fb16547c67829d035205d7"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "6906a3e89e48c41eb9938534100c59ea"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "cd7c92bae458e00d830d0329b3c1724d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "ee980b53c31c1d631d1ca892033629c6"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "87d3312c1a5ea8ff481a34908a3d1e06"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5a135af25002af3926f0540b841a1ca5"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "bd3358d0d1063918912f3c85048be53c"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "d1a14749bfb47231562378c2e5476c87"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "371758e694834b783b141f91ab14bf6b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f804298608dff5f59942c6139a049158"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6bec47c6a047db137ca03a74a050ab12"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c2f9b8adfb196797d66ecf687ccd656b"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "2cf3bd8cbfa77dc84f8effb028f2e1eb"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c872c4d1d5c4f938ba9f0744dc08ad89"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "79f7823d6f30a37af9cb42513462704c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2f5db16aceeda0da451a33aa862fa85a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2e5b1700f16d0966d1789f20f36f2489"
  },
  {
    "url": "task/2021511.html",
    "revision": "bc0c33f664b1fd835ce51b6976721a05"
  },
  {
    "url": "task/2021514.html",
    "revision": "0d2e46d9096f895640f6ad0212b0b28f"
  },
  {
    "url": "task/2021515.html",
    "revision": "0597e6412ae2f5b13c6c79c819fe6074"
  },
  {
    "url": "task/2021518.html",
    "revision": "7598814d9bb8fbf4ddfc9a875892a899"
  },
  {
    "url": "task/2021519.html",
    "revision": "f9712947c603e58ff1d7203df1d81fc2"
  },
  {
    "url": "task/2021520.html",
    "revision": "c53dc97337c027b988bb03d8a604afe5"
  },
  {
    "url": "task/2021521.html",
    "revision": "4a326ba7a20a4ac2d75509423db2624a"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "68f60af3c422a3c61c5e2b87cfeffa6c"
  },
  {
    "url": "task/2021524.html",
    "revision": "8d2081da7ebdff6e39a7da19e18209f9"
  },
  {
    "url": "task/2021531.html",
    "revision": "8d7bedb6154b15a961e81821ee757202"
  },
  {
    "url": "task/2021628.html",
    "revision": "67a3271be21feaeb4cf709d76a9514f1"
  },
  {
    "url": "task/202164.html",
    "revision": "42fb16a031552a59e1ee0b17e5d09eb4"
  },
  {
    "url": "task/202169.html",
    "revision": "ee576074d98e80d9e19119f5d0565288"
  },
  {
    "url": "task/2021717.html",
    "revision": "8adbe051f207d0dd4ea38e31523b50ae"
  },
  {
    "url": "task/2021721.html",
    "revision": "06db6d9f7e934f2a33c24c325825e3cd"
  },
  {
    "url": "task/2021722.html",
    "revision": "b154e3774eb3b9aac02a586ece4dca99"
  },
  {
    "url": "task/2021724.html",
    "revision": "e6ce097f629f5f36eaf818b0ff571745"
  },
  {
    "url": "task/2021725.html",
    "revision": "b5d0d1bd14f3e337e6013ca079dab3b6"
  },
  {
    "url": "task/202181.html",
    "revision": "8e640ef74b0d93a4991f68a7074af994"
  },
  {
    "url": "task/2021811.html",
    "revision": "e36229f051d382529d1aa79f7679bf71"
  },
  {
    "url": "task/202183.html",
    "revision": "035991a06f8b907cb588426c4fabc8fa"
  },
  {
    "url": "task/202187.html",
    "revision": "62ad599fe8e2203a7b4a0e02e20ab00c"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "871d18a0e3068e74844c61618a707703"
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
