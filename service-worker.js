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
    "revision": "0dcafc85b071c23dc7a40b3197810eee"
  },
  {
    "url": "assets/css/0.styles.b0940ad8.css",
    "revision": "51385cbf31f1d3645feb55dceb3fbd27"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8b0019d.js",
    "revision": "f6e33bb315bfd265c1bd07775bf5fa11"
  },
  {
    "url": "assets/js/11.54f4be51.js",
    "revision": "18d6afe50038bd1fa707d5d18c88b797"
  },
  {
    "url": "assets/js/12.4dc81c85.js",
    "revision": "c6b5ec522e9bb20495bc97863a773482"
  },
  {
    "url": "assets/js/13.32dcf543.js",
    "revision": "46be09d4ce5f17f85a844ad69184b9e3"
  },
  {
    "url": "assets/js/14.4320e9f9.js",
    "revision": "4c6dabbe3403749e89f517694dcac805"
  },
  {
    "url": "assets/js/15.9010ffdb.js",
    "revision": "e989bc9daee0320298ed0ba107491bb1"
  },
  {
    "url": "assets/js/16.eb8589a6.js",
    "revision": "f79a2c4b2f12adea2ac2d4908275e2f8"
  },
  {
    "url": "assets/js/17.d7a33f11.js",
    "revision": "5a92bfe0be179c9c262d1ff11da9c8c8"
  },
  {
    "url": "assets/js/18.bd6de505.js",
    "revision": "73396bf7d7c8d063cae2d170ab6c4999"
  },
  {
    "url": "assets/js/19.abafc196.js",
    "revision": "b081f3770edc081223d5a0e786b1f7b2"
  },
  {
    "url": "assets/js/2.229fc8bd.js",
    "revision": "987e124822522997ae1fc9346b52dfda"
  },
  {
    "url": "assets/js/20.066dd09f.js",
    "revision": "348e66a1ca44b44585e1badcb3479fdf"
  },
  {
    "url": "assets/js/21.000152ec.js",
    "revision": "f88fa71eb4cd6c38d09bdd0fe4aa3bd4"
  },
  {
    "url": "assets/js/22.c8c0fd8b.js",
    "revision": "c6407d6efe2f2eab8f2bb46fad35d456"
  },
  {
    "url": "assets/js/23.81948205.js",
    "revision": "21856171a96150bc39f5d47d19f981fb"
  },
  {
    "url": "assets/js/24.deb0de8b.js",
    "revision": "681a5d80386ea4c4941f25e9c9ca36ab"
  },
  {
    "url": "assets/js/25.0cf8333f.js",
    "revision": "c7bbc5386171449eac0ba136a057c7ab"
  },
  {
    "url": "assets/js/26.efff449c.js",
    "revision": "4b05d91590091cca143da7582d6396db"
  },
  {
    "url": "assets/js/27.08ad6fba.js",
    "revision": "8209075c009220e5f75c2f66a2082473"
  },
  {
    "url": "assets/js/28.d0c7b4e3.js",
    "revision": "1f8bb2352e60f9f768bea9788411346c"
  },
  {
    "url": "assets/js/29.d9b93fe2.js",
    "revision": "406d065844ed82f14f5d88abc404dc9b"
  },
  {
    "url": "assets/js/3.51c1781e.js",
    "revision": "fd2f819feec0d41971d76b2c1fec9f10"
  },
  {
    "url": "assets/js/30.29d43ee3.js",
    "revision": "d2f482db47e6989b5743c0cde87ecdc7"
  },
  {
    "url": "assets/js/31.3d1c5081.js",
    "revision": "e7fdad6257ac04602f8ab5055f341038"
  },
  {
    "url": "assets/js/32.1af7790d.js",
    "revision": "609d359a7e6d70e220ebdb84f766c46a"
  },
  {
    "url": "assets/js/33.a9683b85.js",
    "revision": "c36954f58151a71a522c1a3f3a9afc96"
  },
  {
    "url": "assets/js/34.487876ad.js",
    "revision": "f4c95a655ebdd7166fb7d527ab9db899"
  },
  {
    "url": "assets/js/35.12e05f02.js",
    "revision": "16b9e02159c6587c14edbd3d9b1670d5"
  },
  {
    "url": "assets/js/36.ca388e39.js",
    "revision": "acd6c4fe539a6a901841ea537f347d62"
  },
  {
    "url": "assets/js/37.4b4b1b76.js",
    "revision": "67e374455446bb62bdba5935cb72f3d3"
  },
  {
    "url": "assets/js/38.14765488.js",
    "revision": "67174aaff3db33a68761aa4dddb917a5"
  },
  {
    "url": "assets/js/39.b1d11bef.js",
    "revision": "652cda5b3c56420b53f00cf7ebb352d8"
  },
  {
    "url": "assets/js/4.1a591468.js",
    "revision": "8502a4ab8cfeefa79b1c6dbb52f8efd1"
  },
  {
    "url": "assets/js/40.32bf2329.js",
    "revision": "c5b1c267a47ac7ab12e202cfcbaec7d6"
  },
  {
    "url": "assets/js/41.abf27174.js",
    "revision": "cccd92bc8bb8fd6b77219ecefe1dfb69"
  },
  {
    "url": "assets/js/42.4ad97645.js",
    "revision": "942ea989a8058a4bf5e3c5f3a3eb1cc5"
  },
  {
    "url": "assets/js/43.7beb9256.js",
    "revision": "6cf9f77f7f9cd1b738bd2ffec8cb933f"
  },
  {
    "url": "assets/js/44.a3ef710f.js",
    "revision": "a6ed4874444ea09becae77b34ca7c0fd"
  },
  {
    "url": "assets/js/45.38e68a39.js",
    "revision": "4734ae460c36c2bb10247c1f65a9db04"
  },
  {
    "url": "assets/js/46.3fbb5cb3.js",
    "revision": "327b2c9c28177a679fd0888b9c087eb2"
  },
  {
    "url": "assets/js/47.598193ea.js",
    "revision": "5160079d17a2527541d1df51e8e997a3"
  },
  {
    "url": "assets/js/48.76b7d68b.js",
    "revision": "e06b087eac46a00d674c32cc43f6dae2"
  },
  {
    "url": "assets/js/49.84068bb2.js",
    "revision": "1cb18a7431cb46ee98af129116c8aa0a"
  },
  {
    "url": "assets/js/5.1ef41ebd.js",
    "revision": "b70b83c287fdc6aa12ee46d4c85312e0"
  },
  {
    "url": "assets/js/50.e641e87c.js",
    "revision": "b4ab31cfd4772a98e4ce052f94ff9238"
  },
  {
    "url": "assets/js/51.0a490ded.js",
    "revision": "3e894e16a2f27ca0c23bd1623f1f95cc"
  },
  {
    "url": "assets/js/52.07831027.js",
    "revision": "0c7dfb450f6afb7b380797ad94bb32e4"
  },
  {
    "url": "assets/js/53.6a320b1c.js",
    "revision": "ee6b881f430d85d9f9bb95443be07ddf"
  },
  {
    "url": "assets/js/54.463922d8.js",
    "revision": "d05e18abdfa9f69c4ab9e29c1247a69b"
  },
  {
    "url": "assets/js/55.6830e9a5.js",
    "revision": "8cbde021d3269a597015f5256cab5d49"
  },
  {
    "url": "assets/js/56.d8efefcc.js",
    "revision": "b4e000b663f042a4ab66c996f7b79155"
  },
  {
    "url": "assets/js/57.b00b1783.js",
    "revision": "f7171882cc5172c254d1b0cb9147818d"
  },
  {
    "url": "assets/js/58.52ca715e.js",
    "revision": "59c199c7a74cc01b8a04446833345641"
  },
  {
    "url": "assets/js/59.81b10d93.js",
    "revision": "732fe2312f8e153b64050ae49e39793c"
  },
  {
    "url": "assets/js/6.8836c250.js",
    "revision": "eabdc3c4fe3f11118353d1298ee38aa5"
  },
  {
    "url": "assets/js/60.d5110b15.js",
    "revision": "a2047748d78d17594fadcb66916fb5ad"
  },
  {
    "url": "assets/js/61.6580ea20.js",
    "revision": "8615df9fc54ab6fc3c341c62cc4ebbe5"
  },
  {
    "url": "assets/js/62.b5d568cf.js",
    "revision": "11271a001c4653393a3a3ce6a65934a7"
  },
  {
    "url": "assets/js/63.395b03ea.js",
    "revision": "b6fc86fb77760b3ce88e17892ccc44fc"
  },
  {
    "url": "assets/js/64.a0128922.js",
    "revision": "e6bdd0334b2aae61a53af4e3a670b806"
  },
  {
    "url": "assets/js/65.b4c50056.js",
    "revision": "520a79c96bfe5bb468e472c7f3548026"
  },
  {
    "url": "assets/js/66.51194dc0.js",
    "revision": "f2bb004264cec39f56ba7774edd732ee"
  },
  {
    "url": "assets/js/67.1418c791.js",
    "revision": "b0d6c00a67982dc98ac95983e9e2ad89"
  },
  {
    "url": "assets/js/7.fc271e9d.js",
    "revision": "703b9d82f733290caadea57a4674938e"
  },
  {
    "url": "assets/js/8.6f4ef2df.js",
    "revision": "8163770da1a8e28ebff81b412d0c5591"
  },
  {
    "url": "assets/js/9.d180393c.js",
    "revision": "9949e1f5907fd9f5b176bfc6e57214ea"
  },
  {
    "url": "assets/js/app.20fb24a6.js",
    "revision": "a6d4a7c2ec7b2c6dccc9205ffa2744ef"
  },
  {
    "url": "index.html",
    "revision": "0da1f734af402ef37df6973eb7538106"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "fd46607f5e45f0f534096f2bb5db4cdc"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "ce9a0d3b3ae687bccea9a295cedba71f"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "492975f9ea1a02cab8ae35cd060b794a"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "4d14b8bcd3a007268e665497b5624069"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "93ec04f0c9ccaa8e14143241be593452"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "158f233f51bc2aae4be9e3178784ee8e"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "1d80550f68267a365c15e04efa37cb58"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a10cd76c6436eb0f1d2c36eafd3eac44"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "0f39cc931dd8d90b81bbd9a780f4db13"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "cc06a4ccbf9b08d9772237d08ff36e13"
  },
  {
    "url": "memo/memo.html",
    "revision": "4c82fbbba86acf6b5c84b33f35b013c0"
  },
  {
    "url": "post/test.html",
    "revision": "2884fddf765da457c8b1e4f431955ca5"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "71b3d42b59ee940171e556f9f5717937"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3a456cf6ffbb4d689e4b58c738f08acd"
  },
  {
    "url": "study/english/words.html",
    "revision": "df1450fd2fed440905312fd34cb019a5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "21441d96b3652fb3a44e90b08809d239"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "fcad1122d000760b293856a8833c02a2"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "74b70415008b0c95f3456dc4ebc4b5ec"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e6075e21d852960de8a68fdad608ef19"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "40beca7d512d0fdead85d588c2f6485b"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "97107b168e1ae4f93d28bc3abcfc78a4"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "73b23a3d7e2c02e96f5d9b1223bd3b96"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "54e5c034b2427e4ac6a4fc8322a0a8fa"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "cdb1845c335aa5ce702209bdc3ddea6a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "1402d94a894f4c8cc599fdf0c018b582"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "9e1ea5fdf549d68cd5893ef793c084e1"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "4d621dd0d38380fc33cfa8b404719084"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a61301dd1c381a6b704d9653be05d0a8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "04fc27d3ed32cec470da7fba6463a9f8"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ec5fa4bdc5a4aa7bc15bbb324dc1cc6e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "4b811c9967dc3338843f02e9bfa447d3"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "73dbfbf6f0ad79b32d6e97e06adccd61"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "c77132802569ee30dcaf99c97b3956f4"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "029bfe5c69984d0cefa86e832e98ed45"
  },
  {
    "url": "task/2021511.html",
    "revision": "07fa88455ad8818c946adee313ae15e9"
  },
  {
    "url": "task/2021514.html",
    "revision": "2aa3ca70f052860f5ea5ac383a49fe63"
  },
  {
    "url": "task/2021515.html",
    "revision": "6502e88a2b8a07c6473ce4d30ef7cf1f"
  },
  {
    "url": "task/2021518.html",
    "revision": "dd99be91aa7f185ba4f7f3535378fdad"
  },
  {
    "url": "task/2021519.html",
    "revision": "9d7e13c8d8194bd31e4c46a346e23b22"
  },
  {
    "url": "task/2021520.html",
    "revision": "a8fd6d1948458713b35c6c2769eb48d0"
  },
  {
    "url": "task/2021521.html",
    "revision": "f07d54e161a81a3a9af4fa898ba760d9"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c9df54de730a5bf91b58b04dd40a9fd2"
  },
  {
    "url": "task/2021524.html",
    "revision": "8e167129a5ce7a0524232732cdca73cd"
  },
  {
    "url": "task/2021531.html",
    "revision": "fe189e1703a639a12b4831e45282cb7d"
  },
  {
    "url": "task/2021628.html",
    "revision": "6523f03004d180728dc218293a879ad3"
  },
  {
    "url": "task/202164.html",
    "revision": "c453add534d8b5480a70e6a0a2ea4c7b"
  },
  {
    "url": "task/202169.html",
    "revision": "ff276864c9f167e64bd773e6631717f5"
  },
  {
    "url": "task/2021717.html",
    "revision": "14f396eafedff207b5967bcab7b26464"
  },
  {
    "url": "task/2021721.html",
    "revision": "0b06fd138e46692bec8644cb9c0bf116"
  },
  {
    "url": "task/2021722.html",
    "revision": "e5482d353a2f082664066e0f60ad7c16"
  },
  {
    "url": "task/2021724.html",
    "revision": "4e39a05e4844ff8be243dc4c80564e80"
  },
  {
    "url": "task/2021725.html",
    "revision": "25e6adab3392c5289206de1a89991ba3"
  },
  {
    "url": "task/202181.html",
    "revision": "19e0306b8242f74404fda516b9394191"
  },
  {
    "url": "task/202183.html",
    "revision": "3a2f304ae7a675e9fcc011ecd71911c6"
  },
  {
    "url": "task/202187.html",
    "revision": "8ad244031a08133c50260a7da4334b45"
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
