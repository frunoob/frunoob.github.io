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
    "revision": "8dfc0c972b3707ba710d60c24a8c5cb5"
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
    "url": "assets/js/app.1747d224.js",
    "revision": "2bf991a7e4f2b581e73a370f6c03a9e3"
  },
  {
    "url": "index.html",
    "revision": "4c13783d0e23c1db2cd8f2da0bcaae76"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "de6f4a1cc050eac8de5d4112c162c6b5"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "fe83fc9106164fa6b5cc542348224163"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "2f3464ac111a8bf6afbbee674199a8d7"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "291547e64f84b969b2da04a86b32530f"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "3a64cb6eae297b679e5a3f19a13cf167"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "850b289eb8229dcf847df03342dd73b5"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "11c0a5479b8b4028a2a1362df9876886"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "fa0bd841a2e95e0c991fb4e59eef2c15"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "fe2ae3ac25bd9f5163832262af0e5b02"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "a8f70ab47deaaf37472fcaf841fe97ae"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "824f69b0aa50642c858ff3b5b0448db4"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "6fbff410302eea256496b4c07c4bb616"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "272681725622cfe01066646ffb063074"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "0bfc4962665df1edaeb88971879831f1"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "0684ad76a660e6c1cf37b2fbfac6b789"
  },
  {
    "url": "post/plan.html",
    "revision": "a342a4805019989bab8839db4c12b345"
  },
  {
    "url": "post/test.html",
    "revision": "5feb4ae25c828a0f023bc960a4494b96"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "0f164421d3e3cc811866a0d0c4f03c64"
  },
  {
    "url": "study/english/words.html",
    "revision": "3b48fa4fc1c61edd459640e6c5d37267"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "ea8a9d8a807be2ca5653ac02d363f353"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "740dc8057c3b561d3af73459a4534fbb"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "97b9c416899669e942b5142c95a13851"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "69ca6561fce4aefdb471bb2a91179c0e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "41ab6e87512f9eb1c6b371dede7b72de"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7a1c1d04eff13eef076e6b291e083e30"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0bb6a2c6a7a4c6d77326d215c746a705"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "761a018f0f3211236c6dad693c6a067c"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "aaf6203200e62207bd2e9f57d5a395fb"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "92d1c9fccd130da3e48463bbd25275be"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "66f61d9e0bd1aeb748e2e1725a0d9fe0"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e50a694f590ff735d9ac6495e6a7d632"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "878aaa4c2b11c87806e2407f2b78b079"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "944d9450e26e2e9922742131b1fd3b40"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ee3c7ddecd075401c1d7acfe032a93ac"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "ebd5726da7b0e53b74bae26935e742aa"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d6fc51fb79c808b518d17a2b363eb8e6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ef7c6e8766ea8468b924937b9479d125"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a76e424060cfed46a96dd49a93c5c4b0"
  },
  {
    "url": "task/2021511.html",
    "revision": "72acbbe2da16e843ef31210eb368dea2"
  },
  {
    "url": "task/2021514.html",
    "revision": "99107952bfafbd490ae34c78a8b04bc5"
  },
  {
    "url": "task/2021515.html",
    "revision": "f132b6001d7d6c7c6a2aef33efca4107"
  },
  {
    "url": "task/2021518.html",
    "revision": "452067528f5ee9c74ffed297589b9c3e"
  },
  {
    "url": "task/2021519.html",
    "revision": "ca161445c0698ef7fe5e3d02aa6a47e5"
  },
  {
    "url": "task/2021520.html",
    "revision": "0740a2eaf03ee77a387ce8b825a29c73"
  },
  {
    "url": "task/2021521.html",
    "revision": "2663271e71761924b38091c53f24f22f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "ed51ba3b26ba2190d15740ed96c51e0d"
  },
  {
    "url": "task/2021524.html",
    "revision": "f274149ab2214e5c1435416a73f381d8"
  },
  {
    "url": "task/2021531.html",
    "revision": "e3317a74bf1ed4e399c30c810a4ca711"
  },
  {
    "url": "task/2021628.html",
    "revision": "5ec53c6e207fa068c9315ac30226271d"
  },
  {
    "url": "task/202164.html",
    "revision": "4bfebf69bc6b93e932bbda74630501e7"
  },
  {
    "url": "task/202169.html",
    "revision": "27c2dc15b0e28602ceb421cc18b41623"
  },
  {
    "url": "task/2021717.html",
    "revision": "d4c30a9234ec01bf30de6ddcb3e7fa2f"
  },
  {
    "url": "task/2021721.html",
    "revision": "e6ae3d2c4b3d0edee34d0571f1834838"
  },
  {
    "url": "task/2021722.html",
    "revision": "7e4ee8cb65b13868b271f224ee23b337"
  },
  {
    "url": "task/2021724.html",
    "revision": "2015a7f7e8fcfa9dd6f800f0e2e89fd6"
  },
  {
    "url": "task/2021725.html",
    "revision": "39abc90030ce076329409f8eaaf5dd1b"
  },
  {
    "url": "task/202181.html",
    "revision": "842051678e6f6c8963b56400f5512195"
  },
  {
    "url": "task/2021811.html",
    "revision": "ba31adcf38222d74e26efa23ee27831e"
  },
  {
    "url": "task/2021812.html",
    "revision": "1456480f105a99a06bd5dcb434b1e946"
  },
  {
    "url": "task/202183.html",
    "revision": "c4024f283c51131fdd33fa43a77ec464"
  },
  {
    "url": "task/202187.html",
    "revision": "af6bc554200baf850022d121c522e866"
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
