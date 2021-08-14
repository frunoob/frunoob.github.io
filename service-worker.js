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
    "revision": "0446e8866b91e5a5549bbd0166015427"
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
    "url": "assets/js/10.f85dccaf.js",
    "revision": "fe2099cb5ccf7dde2dd5f7b037800d93"
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
    "url": "assets/js/28.25d1827b.js",
    "revision": "12a2edcc8f5f35d9faca543e62f7891d"
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
    "url": "assets/js/app.dab70128.js",
    "revision": "166463f26abc6b9c9e0108952f55112a"
  },
  {
    "url": "index.html",
    "revision": "87565ddead2ac2fe54320d64a118e639"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "eacd531eb762b9869f92a61b3e6c4801"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c25db160bad99f48be756657c9455225"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "2d86ea2ab601dd17d2f232aee740bb06"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "60540e2b6abc5c98bae2c04a3cd05e35"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "fe8b17fba1cafca1500811fa84b0a4c8"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "6da83f04a92fe026b03b77699425fac9"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "7f67f235b1d18168aa5b0cc4e0159a74"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "ac8e7ea46e1d8a3dae8ec51c80a88926"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "c80a18778e97fbb16ca9abfb56f24c46"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "ef769a0f15d5da6526094ead79291a71"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "9a6573a203b9e9f082ecdc80bcde12e5"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "f833465a1e8ecc068d99fd0fdbb247cc"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "1da21421e47eae225c6c20ea40ccc0f4"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "26d44df4bb46227f82f9fc8e96993b5a"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "b2adc7d6030479081a93ef273acd4573"
  },
  {
    "url": "post/plan.html",
    "revision": "64cc5e53ffb4ca94740c41bcbcdfc148"
  },
  {
    "url": "post/test.html",
    "revision": "e1842fbb5cc4e1b993b44b33f47aa56a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1daef27db34f4b965f9cb55cfff93b49"
  },
  {
    "url": "study/english/words.html",
    "revision": "81832df35cb88f9b35c706612fc0608b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "4d04a81fd9259bea4d796bdfe07b7a03"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5ceb49230df45a4e09434d943a36d57a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "79771b142da4f6d6b503878d054b56b4"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f57ff942128bfbfa3ee33f8ef41519aa"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "da62f9933e593a9ac8f8d3789510865c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "9652eded93dc21f03b7cccd431e19111"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "1a4072cf0c21d27872706f42d19c2cc7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f162fb6557dc4b78b7706f6f00a80d93"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c423b56a411811e2df04f9ba888a5b6f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "4242567a63efa33531c1d1719c286da6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e4b80a1235bf6ce4e372c7d4d82bee37"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "09b2b354ea68bf9e0c870659382ad67d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4ec361dacdfd3c5a5bd7c4a38ce797f8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e4aea1a19adee1045712eb755151bba2"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "467c11bfcf3a270bcb910ceaf53d32dc"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "380e0ed69e6a91f38b856f57f46eb388"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "945aeb8764186d7d980d8bccfe7806bc"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "fa30eddf9a34d0ca770aee0e34c58a75"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "91077656d50be283e759acc19c99efee"
  },
  {
    "url": "task/2021511.html",
    "revision": "0af12efb2c95352ad0ebbd048d974d0a"
  },
  {
    "url": "task/2021514.html",
    "revision": "898967ddbb8242eced3f850ff84d02af"
  },
  {
    "url": "task/2021515.html",
    "revision": "2cae8709baa15e6a9ffb1dc77da16e1f"
  },
  {
    "url": "task/2021518.html",
    "revision": "8c03f47d11064def9ddb28f49910eca1"
  },
  {
    "url": "task/2021519.html",
    "revision": "0c23325b3bd6afeae4bff6536fcbbb2d"
  },
  {
    "url": "task/2021520.html",
    "revision": "120a3e20eab71fa17df7e7b9f3271034"
  },
  {
    "url": "task/2021521.html",
    "revision": "43050854a7cc81b27486fedaa38ee918"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e8b193616050cf31f2d4ef9f88409ada"
  },
  {
    "url": "task/2021524.html",
    "revision": "33a2a1c397d7b94a59a9fb012d0cfc77"
  },
  {
    "url": "task/2021531.html",
    "revision": "d6e97fe24048196294b879806f05cd75"
  },
  {
    "url": "task/2021628.html",
    "revision": "238fa72599a359728e8ed6020df7fc0f"
  },
  {
    "url": "task/202164.html",
    "revision": "b67abd2318f4937534e997fdfafbd9c7"
  },
  {
    "url": "task/202169.html",
    "revision": "7fb19619367c8052af53a4de30eba4b9"
  },
  {
    "url": "task/2021717.html",
    "revision": "f82c63af81f72762e841b015d2687cc0"
  },
  {
    "url": "task/2021721.html",
    "revision": "fc94b96c345413db37ae422688df32f6"
  },
  {
    "url": "task/2021722.html",
    "revision": "05a7777ff75712613cac1eff77e79099"
  },
  {
    "url": "task/2021724.html",
    "revision": "2f9fe458c58e866ee8b03e8c763fbc4b"
  },
  {
    "url": "task/2021725.html",
    "revision": "097f6cb405d14ab9a7aa9e4399ca37a8"
  },
  {
    "url": "task/202181.html",
    "revision": "b573ff0c4597de6f0275b630ca689fa5"
  },
  {
    "url": "task/2021811.html",
    "revision": "e698c29a0ac834721151b64e6d6ba2c2"
  },
  {
    "url": "task/2021812.html",
    "revision": "c7b11895dac1a4feed9b0ece90e0b7b6"
  },
  {
    "url": "task/202183.html",
    "revision": "7e7a03e2781f9d955392d522004383aa"
  },
  {
    "url": "task/202187.html",
    "revision": "4f53ca33aac2b506ec1e53e635788a4c"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "7f0b3ba8a4de69e84dcfb54ae4e1ec1e"
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
