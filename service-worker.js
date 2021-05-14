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
    "revision": "ea972f11e5316f52427148462a7b2745"
  },
  {
    "url": "assets/css/0.styles.d57f9178.css",
    "revision": "8dfaea8a9e7b27b5ad155b581248cd17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.652f69e6.js",
    "revision": "d3051b845db1adf7e0ca251597519bd9"
  },
  {
    "url": "assets/js/11.16ba7079.js",
    "revision": "ba5e623f3b72a25a6d87903e3992a492"
  },
  {
    "url": "assets/js/12.2c5bc93a.js",
    "revision": "76cf75b58a85289862a50ded45ffec37"
  },
  {
    "url": "assets/js/13.35387a71.js",
    "revision": "276797c34f7ae8bbc45861c4e552e094"
  },
  {
    "url": "assets/js/14.f639190b.js",
    "revision": "8cb55ae24ee39fb4d9874250a612956a"
  },
  {
    "url": "assets/js/15.46ac4614.js",
    "revision": "b811175052170fe3c357dbc47d0bfa03"
  },
  {
    "url": "assets/js/16.ac4bac5a.js",
    "revision": "49bfc9ec336e97cecabf7ca60a60331f"
  },
  {
    "url": "assets/js/17.d468fb9a.js",
    "revision": "ccbf1ff26ab08ea516170f0857b6d925"
  },
  {
    "url": "assets/js/18.e40bc432.js",
    "revision": "6d6cab78cc6d08f4a0eae8fabb514536"
  },
  {
    "url": "assets/js/19.a6fc313d.js",
    "revision": "03b155e62a33cd06aceb70d9ab3c82be"
  },
  {
    "url": "assets/js/2.dedd3d19.js",
    "revision": "1cf822e0f80df5929325f8af64f94ffc"
  },
  {
    "url": "assets/js/20.5e1e4826.js",
    "revision": "870ffa57567f86e8737851b7d7b3e324"
  },
  {
    "url": "assets/js/21.aab07dee.js",
    "revision": "f3ed7032c4d0632968de3f469f92f93b"
  },
  {
    "url": "assets/js/22.5bd56b7a.js",
    "revision": "c69414af449c61b22273b002c974d39c"
  },
  {
    "url": "assets/js/23.9c3f859d.js",
    "revision": "7871f9248ea3e412366679a997b2ddf7"
  },
  {
    "url": "assets/js/24.3eb0f564.js",
    "revision": "afd7b12fd3b5e74c9f8383e4e6e343c7"
  },
  {
    "url": "assets/js/25.d0de2941.js",
    "revision": "d686b9e73bef24559c5ea5fd5577a455"
  },
  {
    "url": "assets/js/26.6b2a6345.js",
    "revision": "2322149fae4a96dad7f3cba36611e4b2"
  },
  {
    "url": "assets/js/27.f24543ed.js",
    "revision": "443950f5c7ed74f12a9fba423223f885"
  },
  {
    "url": "assets/js/28.2f003013.js",
    "revision": "e7237e73ab18dfc52b55982f3b417655"
  },
  {
    "url": "assets/js/29.903a9875.js",
    "revision": "ab5c78b2e455bbd64df304bebd6f5f21"
  },
  {
    "url": "assets/js/3.b923fc64.js",
    "revision": "d9ba5ca9056bb59c962b63dddc17a0dd"
  },
  {
    "url": "assets/js/30.280f5061.js",
    "revision": "3900ae613a41b8c6c9406dfd22af3905"
  },
  {
    "url": "assets/js/31.45212d3b.js",
    "revision": "d164e5b24f0ff49ec26969cab673b3a7"
  },
  {
    "url": "assets/js/32.e4f97e13.js",
    "revision": "b3fc8ccc88a0127387cf2ca0424a724b"
  },
  {
    "url": "assets/js/33.0cc7d2c7.js",
    "revision": "34bd5ba45f8edfd171751fd4633279dd"
  },
  {
    "url": "assets/js/34.f6c0274c.js",
    "revision": "b8890eae051fc79ce32ac7ff1111752e"
  },
  {
    "url": "assets/js/35.fa99c5a6.js",
    "revision": "6eab943aadeae527cdb71f4cccbe2015"
  },
  {
    "url": "assets/js/36.de004d8e.js",
    "revision": "835c4781ab15bfe0106197ec599e2ca3"
  },
  {
    "url": "assets/js/37.5b4fa00e.js",
    "revision": "81df3cfdbb96a5eec5d7ced83b6020a5"
  },
  {
    "url": "assets/js/38.dc17a949.js",
    "revision": "580ce66a505e59415096d557353f9e4f"
  },
  {
    "url": "assets/js/39.cb68fcd3.js",
    "revision": "e5a9263cda156ffefc0c9bdb5081f209"
  },
  {
    "url": "assets/js/4.f68e656a.js",
    "revision": "da75f82e818272eb73ec19c537da9524"
  },
  {
    "url": "assets/js/40.ab182c1e.js",
    "revision": "2ea679f828f8ba89f127833a3ae51b6a"
  },
  {
    "url": "assets/js/41.563ea87e.js",
    "revision": "05f8f1473fe3a99377c9c848e3321339"
  },
  {
    "url": "assets/js/5.ccfb7414.js",
    "revision": "237c5a39f2e51b03c15fe2125805c4fb"
  },
  {
    "url": "assets/js/6.44af4953.js",
    "revision": "389680027f534fe7c2c712bfeddd5370"
  },
  {
    "url": "assets/js/7.5e47868e.js",
    "revision": "5082cfbdd09cd4ccdffb052e9a4bdf46"
  },
  {
    "url": "assets/js/8.3a2a9618.js",
    "revision": "cfee08bc4ac056623132b83f34deb958"
  },
  {
    "url": "assets/js/9.c4260a30.js",
    "revision": "7365ce572a1022abfd6bb365c2dd68b5"
  },
  {
    "url": "assets/js/app.5834b03d.js",
    "revision": "2e88b29bb3ef3988d55e0d821d5e639f"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "6ba316ebe65e411cab7c104fcca7d65e"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "0288ccad8edfe2663632803269a043ec"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "5f6852be6f8ce154b077a76b1b4421d9"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "69128201f7e8fc5d12c22a31a3bb22f2"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "3e6691f35771e4b64a9411479c7453e4"
  },
  {
    "url": "book/index.html",
    "revision": "ab4aeb39d2804e0f3000e8988f01adc2"
  },
  {
    "url": "index.html",
    "revision": "6b01624c9ae959118255754bc65502a5"
  },
  {
    "url": "memo/memo.html",
    "revision": "9fc6ec2d8b16473c51588b171c5fcaf4"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "c8619a62b3cf570937e39ad8aa537f12"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3c569051b8868c46269491889ba1fa5a"
  },
  {
    "url": "study/english/words.html",
    "revision": "e335f6d88fcfd5b36e29eacfa61065a7"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "46840b03c59162e23574b8dd35ebb6bf"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "2b23edd41a4ac4d364bd7ccb7a12987b"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "84674a4695f2ae0061692b5e25dd0a3b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b2a9579277d4d75cf44aabcadb4a4ca4"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "78e21b9431fa6f0a9ac16094327e3f8e"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "78f394f131c8496822a90e32c8b9b47a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "444c8445d82d91c20bbb523f64a24517"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "facdf5bcfa3f9ae773bf513bd2076b99"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "4880def0b75f8b0ee6f2c8808f554761"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ec6c387fa077bf8c440f7c298b177594"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "6fb805478123c4cf11e834c29bea8e76"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c26928aa6b19ba00820fe19f290dfa45"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "61d003930f85fc657caaf2d0848ed9da"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c5ad60ac47181cfe26893cd2a3b1ca5e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c0be7637b6b2a4e670a3f54a5cec7dd2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "783690ef93d1042dc1ee8e27c6c21af1"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "04a86e8891ae9ed461fffa7c73553185"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "b4de9d301c70d699c34a5b568e5dc41a"
  },
  {
    "url": "task/2021511.html",
    "revision": "24043be71fd88ba681bb536527f7edf4"
  },
  {
    "url": "task/2021514.html",
    "revision": "1c9d27b4211d4fa8ad5addc8ef472027"
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
