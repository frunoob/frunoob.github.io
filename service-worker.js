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
    "revision": "1fa584bb0c697f3567f7b70d41ec2b80"
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
    "url": "assets/js/21.26eb5ecb.js",
    "revision": "46c2b6f1aef16d78ce1bdc63ebb59d9e"
  },
  {
    "url": "assets/js/22.c8c0fd8b.js",
    "revision": "c6407d6efe2f2eab8f2bb46fad35d456"
  },
  {
    "url": "assets/js/23.f8543fad.js",
    "revision": "eec3d629dacef2139d87725d7fb12b0e"
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
    "url": "assets/js/app.62e48707.js",
    "revision": "cbc509abb9c9624aec3cf002293883e3"
  },
  {
    "url": "index.html",
    "revision": "09fd01f2d0c6a2f4f2ef129bcfc5bbe7"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "1e396fb2096473cd91c3e0117ecd888e"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "bff57fb11d7124b57e14542a208b3262"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "806ca6573b713d0f0504a46ecbabc98c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "661c95683c6f14e0f37bcef933a79d8a"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "7784351149f39c60bc7b6971a76a5673"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "30e7d4d3cf364eb3fae6e45c442e55a5"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "17cfbeeb5ae50b2c13148be33c2135ee"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "870d7b000476ad1663008500b3297fab"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "1de82e800b3f1d84b5e6212388bdeefe"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "a8d264246e81d25c5e02d5116a07c448"
  },
  {
    "url": "memo/memo.html",
    "revision": "e4db4c07e6add8cf66ddbc249e2ba1a5"
  },
  {
    "url": "post/test.html",
    "revision": "e7903ac5ae962408c367c3966e9d76cf"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "21710fc911d7ff09ded36569dbe56fdd"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "8eade8404c27f9ae2815d1215b80d824"
  },
  {
    "url": "study/english/words.html",
    "revision": "29d5ed7eff82ba3ebd7724bdf74de1a2"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "e4755ccb563a5785c3e876b0c155238e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "64b2fd77dd36e10306acb7c45af61363"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "9ca35d0c0629aa11a800d599493fecba"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "7f8d8a312d0386049c49b28d0d9b6060"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "5e136a07b344db3393f5c5c9d34b923f"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "6ecd17c1ea184cf8214a81383968eb06"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "25cb69c66096105daf5db7f543497134"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "afe6da883748b81cac23396fb115fad7"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "82fab0ccdbe5e186475dc408098ab9a0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ca916a2ba206ff17d867f0eae9f15624"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ed1635ff29290920d445bf1f91b84d9d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f70066ed402200c4ef95adf5f8334f4e"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "61d3b7ef488d626bed79eb5d110ed952"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "695b5f702a8e29c598e741b3c253688f"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "73ba80616dc90c387c7a14de712e93fe"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2b39c9bc40ebd7edc0a9a32017b8ef58"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5e23b6d2668fbd86595262eb9b77e284"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8f54b5aa818549d55a598a48fb57ab53"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ace772f25a234677dcfa41d1260e2454"
  },
  {
    "url": "task/2021511.html",
    "revision": "7e3d1949efacdaa273ee442f7b1bacda"
  },
  {
    "url": "task/2021514.html",
    "revision": "0ab815dac157bbcce8058283386c1d33"
  },
  {
    "url": "task/2021515.html",
    "revision": "56742a77b66a14e5b8317fa407054432"
  },
  {
    "url": "task/2021518.html",
    "revision": "32a05fe83cb0fca208a0b6be152fddb0"
  },
  {
    "url": "task/2021519.html",
    "revision": "52c3733bd7a7eb47b70c3f93d1e3353c"
  },
  {
    "url": "task/2021520.html",
    "revision": "7d35042002b7a614b4663492f68ccbac"
  },
  {
    "url": "task/2021521.html",
    "revision": "d8ca423968c72f78c9427f481fb7d405"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "b75443d8913a7bebeb1fd51ade0fa84b"
  },
  {
    "url": "task/2021524.html",
    "revision": "ca29f2b6d93d64c93361fdb49c26eca1"
  },
  {
    "url": "task/2021531.html",
    "revision": "d95ff045d3681fd08390daa2027d637a"
  },
  {
    "url": "task/2021628.html",
    "revision": "1173fdff6e62ffcd5e67fb735e9688de"
  },
  {
    "url": "task/202164.html",
    "revision": "bedec807d4dc2df6248040421ec0c3c7"
  },
  {
    "url": "task/202169.html",
    "revision": "8dee3307ba3cb91ba93d88e5a81a6388"
  },
  {
    "url": "task/2021717.html",
    "revision": "26374f96f9e2bd40bc2dad9c177483ab"
  },
  {
    "url": "task/2021721.html",
    "revision": "c138e25366b90ef5ef23f4dba57f79c4"
  },
  {
    "url": "task/2021722.html",
    "revision": "ec7730b25d29b31aea1ee461b1fae849"
  },
  {
    "url": "task/2021724.html",
    "revision": "87088dd79efaec1b0119e15184322773"
  },
  {
    "url": "task/2021725.html",
    "revision": "5d8d5f331776ff8b9f4bb643904fa94e"
  },
  {
    "url": "task/202181.html",
    "revision": "d29d682fb500037407dc31f446a3472d"
  },
  {
    "url": "task/202183.html",
    "revision": "98cf99ca17df9d9baa4ee9740d449700"
  },
  {
    "url": "task/202187.html",
    "revision": "bacd227db2c796584b9f6ad080353068"
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
