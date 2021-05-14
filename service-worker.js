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
    "revision": "47895e576771692e42f1a3cf0ec5d100"
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
    "url": "assets/js/app.de34efc1.js",
    "revision": "dac23fd61353ba70257ae4befb1b4877"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "4fe7aecd0378447463f5cbf93c5835bd"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "e9dc5c2a561321c9d96b0a1603974d08"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "dbb0e2463d83cba966b7f92de127b2f0"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "5bbf92a27b50f343d50e8a58cbf3141a"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "affd008694aafc74b619f03a6148344a"
  },
  {
    "url": "book/index.html",
    "revision": "d3719eddf986c2b30517ee28a9a279d7"
  },
  {
    "url": "index.html",
    "revision": "e5eaaca2ef99cff86835637a2317d5fd"
  },
  {
    "url": "memo/memo.html",
    "revision": "ca56c0de1faca228a2aa67d0eaa8271f"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "a0e5068d9c8e508aab08d9ff06d9e2ba"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "5ab0f4844d71293dadc0bb48a9878c0e"
  },
  {
    "url": "study/english/words.html",
    "revision": "e86622f58ff6f3f14ec4373348be6cf9"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e7b32722b4d3054201e162da5982f22c"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "afee1739220c9ea8c4b1b34b06ee86fa"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "0fb6898a103698617f55037cc3100a09"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "1893f2730ffd6b86cd341915d7c3670f"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2005fdb8dade7bd04262e6c48bcfb957"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "453fb35bb91890c8281fb950d0545dba"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "ac276dab18b63c238e207503bd5dbc59"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "6ca763e1e6ac01b082ece6a01a2087b1"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "95ed821987a1a40b392125e68b586c34"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2afce7d9f6a0a230832cf1826be7862b"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "69871cf3aac38548a6c5df4f3bee29df"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e7edcf72e48464b75d1a8a05f7f1d8a8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5f9cfe4203ae76904b03a9bae0cf1893"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "cae83ec5711ca2a5b0ea709c2c330850"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "27c4fc338401c3a44b865ca345a8d451"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "803b4735301727ff401d986dd4b9e2fd"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "4870d609eabcf78f6b0f03091217d26a"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "5f0d0861b2e670ffad08a54a9c91aa5c"
  },
  {
    "url": "task/2021511.html",
    "revision": "e20bbed7135d2e49d4d5b9f7d1f589a8"
  },
  {
    "url": "task/2021514.html",
    "revision": "81b786c082e3329b6bfc1d9a619c89b7"
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
