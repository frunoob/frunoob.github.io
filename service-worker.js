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
    "revision": "e37c1006d8dc84248c774dee928479f7"
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
    "url": "assets/js/22.953ed75e.js",
    "revision": "931d36fb7988c5258ac0c14e23a7b852"
  },
  {
    "url": "assets/js/23.0ce939cf.js",
    "revision": "7e1ec7bf6047df95e2b107a591d541b3"
  },
  {
    "url": "assets/js/24.a4dac4a6.js",
    "revision": "b30c921eead0cccc72a04803dd4f729a"
  },
  {
    "url": "assets/js/25.2d7506ad.js",
    "revision": "093d1e1c06b51181917c9e8e4a9352d0"
  },
  {
    "url": "assets/js/26.97906e34.js",
    "revision": "cdc640c6e93314bb9e9f6140e7bb7d72"
  },
  {
    "url": "assets/js/27.65ede99d.js",
    "revision": "eea01cc8244e00ea89b7268b367e69a4"
  },
  {
    "url": "assets/js/28.181c27ac.js",
    "revision": "309a3f7d064557007a1bf500d37e263e"
  },
  {
    "url": "assets/js/29.3491a1e3.js",
    "revision": "cb9ef06ff3f506b2879bc57c68096d86"
  },
  {
    "url": "assets/js/3.51c1781e.js",
    "revision": "fd2f819feec0d41971d76b2c1fec9f10"
  },
  {
    "url": "assets/js/30.ad2c39e2.js",
    "revision": "e83f4f0483780fa962fa564e0bdc738f"
  },
  {
    "url": "assets/js/31.a1d58a80.js",
    "revision": "ed2fbc0d406838e33abdae95118d544f"
  },
  {
    "url": "assets/js/32.aabf52f9.js",
    "revision": "9c667b616e7d704b38e2dc0a1b8c818c"
  },
  {
    "url": "assets/js/33.1196eaed.js",
    "revision": "79a95d64a8ac0abb919647935aaf382b"
  },
  {
    "url": "assets/js/34.f9ddca1a.js",
    "revision": "d634ef3985bbe545343ce93e66664569"
  },
  {
    "url": "assets/js/35.1e2d6125.js",
    "revision": "d26bbb2f218256639da0027cacf02832"
  },
  {
    "url": "assets/js/36.fd84a001.js",
    "revision": "0667aedaa1c468e89ee35c5695d68864"
  },
  {
    "url": "assets/js/37.65367bfb.js",
    "revision": "c945fe8763b30a54da450b97205ecdb0"
  },
  {
    "url": "assets/js/38.dadfdcd1.js",
    "revision": "a2a0441bf4d99c26bf4a418c7028c1e2"
  },
  {
    "url": "assets/js/39.26aed930.js",
    "revision": "cf0fcf71a667b93838639bc932956e76"
  },
  {
    "url": "assets/js/4.1a591468.js",
    "revision": "8502a4ab8cfeefa79b1c6dbb52f8efd1"
  },
  {
    "url": "assets/js/40.d758ccc4.js",
    "revision": "3dce9da9e795ba8681d31f42e0d3eb91"
  },
  {
    "url": "assets/js/41.70673628.js",
    "revision": "3735ef68c8326a423b6918959b52b32f"
  },
  {
    "url": "assets/js/42.0b27eb1d.js",
    "revision": "a903a307b07bcae07ed789d28832e0a5"
  },
  {
    "url": "assets/js/43.df1d89cb.js",
    "revision": "b0a44d2230a9fce3167a5da25c6e75b9"
  },
  {
    "url": "assets/js/44.0b9d97b6.js",
    "revision": "6066ca02aa6b03b46d71ba0fdfcddca4"
  },
  {
    "url": "assets/js/45.f9d1b361.js",
    "revision": "d7a6a791ab3d5c6b924377638eccd195"
  },
  {
    "url": "assets/js/46.0564fe37.js",
    "revision": "faf29cc8039d312a7367bce319a38cdd"
  },
  {
    "url": "assets/js/47.72a7ad9c.js",
    "revision": "aff3b62cab655dbdd9b37b2e9e17b03f"
  },
  {
    "url": "assets/js/48.382b0689.js",
    "revision": "e21d99443cc52b7881cedbf8ffff9f17"
  },
  {
    "url": "assets/js/49.0afa7d05.js",
    "revision": "af700fe33976058a564fdde24a9ee3fc"
  },
  {
    "url": "assets/js/5.e5e17f1b.js",
    "revision": "872cb49ce3e5286ef9e08488e69a99e1"
  },
  {
    "url": "assets/js/50.3db0d245.js",
    "revision": "975385c4a0f61b35ad868835a44d6ad8"
  },
  {
    "url": "assets/js/51.6b8264db.js",
    "revision": "2ffbf4a6aa62ae8f7886d27a7fb8ef6e"
  },
  {
    "url": "assets/js/52.cd901837.js",
    "revision": "5db123005cec0c3f9aff0f2ca9106761"
  },
  {
    "url": "assets/js/53.ba511696.js",
    "revision": "a88b6c55c83ed67044d0bfef8b6f892d"
  },
  {
    "url": "assets/js/54.27557bbb.js",
    "revision": "3e262c4cc7dbdd13bc8eff0ec9b58ce9"
  },
  {
    "url": "assets/js/55.a83f6e49.js",
    "revision": "07c3c3fa53e0232aff351504a0b97654"
  },
  {
    "url": "assets/js/56.c242df94.js",
    "revision": "6f9f6a2153e9b43c5e38359928c135e4"
  },
  {
    "url": "assets/js/57.7ace670f.js",
    "revision": "4d2dba98a2f2a4f26633d8d79c341ee4"
  },
  {
    "url": "assets/js/58.02944524.js",
    "revision": "2ec390903b36b2790226eff84340791b"
  },
  {
    "url": "assets/js/59.b9c005fc.js",
    "revision": "5a19764eb25ac6062eef294d787cf1b6"
  },
  {
    "url": "assets/js/6.8836c250.js",
    "revision": "eabdc3c4fe3f11118353d1298ee38aa5"
  },
  {
    "url": "assets/js/60.da6feaf7.js",
    "revision": "1d14c599c327e3be6f88792b698c7bf3"
  },
  {
    "url": "assets/js/61.7419cc28.js",
    "revision": "60c43e92fc018ad0df34d06ff7d2e168"
  },
  {
    "url": "assets/js/62.407adbea.js",
    "revision": "65280fe97bac6b22f774512762b99289"
  },
  {
    "url": "assets/js/63.b4bf3172.js",
    "revision": "6d5ad722b710423312ba067ea5dbc72f"
  },
  {
    "url": "assets/js/64.0db42077.js",
    "revision": "d76ea863178652596335458e4c7d8dd4"
  },
  {
    "url": "assets/js/65.7d62380e.js",
    "revision": "81e0cf0af6424fb9c85cf4dcdae64dda"
  },
  {
    "url": "assets/js/66.908cba36.js",
    "revision": "ef9240ec40904f144e8d75f137ff33cf"
  },
  {
    "url": "assets/js/67.923286bd.js",
    "revision": "3c537f692c00d9d4e4afe387a6157c30"
  },
  {
    "url": "assets/js/68.37565dc9.js",
    "revision": "d49d10f1100072fe7f6d64a38168b623"
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
    "url": "assets/js/app.c9b21917.js",
    "revision": "2ed5fda908d254b8f4e7a71e19ddd1a4"
  },
  {
    "url": "index.html",
    "revision": "71bb378bfefa28dd7142c2a3e9928026"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "1e8ada6444b9c50ad94e013596007115"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "81b9ddbf2bb3dbe2c3c4dbe1cf697cd6"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "960fe3a462d5894bbfe4e77460e8d6d8"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "c73baf1b5f95cdb6ba9b16a57e5151e3"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "574ff0111cf27503d4250ffffc72053a"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "76927929dc7713babc4d9e54e4349d0a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "f89bf075b888e583251a620305baa4e1"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "5f49d4e31bf2a80d3ec8426ae076a22a"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "1ba8121bbb3d686bc8feff38ed60fb20"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "0d3aff428303f261825a4e4a2e473aba"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "f914fcd8741e3307388783b45bab1d62"
  },
  {
    "url": "memo/memo.html",
    "revision": "5742e78a1cdc2608910758767a5a4f89"
  },
  {
    "url": "post/test.html",
    "revision": "e371049f94a970c614da7594b3ffedf0"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "5db89339ff81f61163d738df5c12f215"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "22f7645a75a53d403574998bcc139f05"
  },
  {
    "url": "study/english/words.html",
    "revision": "3dbfa8d1dde7f680008c62ed991ce209"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "298ecdbb20bc2137a641749c6af11221"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "fd6a567f05d2693d11d9b5519c9c1fab"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "44a4d938c1139d1f36a7215267652ff9"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d45173bb3117bf8057637afbba94c771"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "917d3ee2fe1b62f2517578638f427451"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "c1556cc69de9ab1e82c548166903d640"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "78bfaa148c9d84842a7f1520ecfc6c5e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "67292df99c2d674196de22bec8ba340f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a5860d1efa7524e4e78f6db223cb909f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "efc14c2df2d3e802e3cff912d60861d8"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "947587f853f3090e9a8f69bbba02fc5c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "91503ceabf091306dd121714d363b1ba"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ddaa82fa4c05ffcc0da42714656ec189"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c9c345839dd2402c9ef11f01e3ca6170"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1a853769f2306efad52349cda7d9ace0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e1bd536932ed6a18cdc8c1f0389803a0"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3f2ef251d501ab6861d7dfbc03c455e8"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "4e4d710003f76317dafd5b23750dca0c"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "294bdd6aed205c4cd8f025e02a07b221"
  },
  {
    "url": "task/2021511.html",
    "revision": "09d9028b6a4101b84e8bc81f4ef7186f"
  },
  {
    "url": "task/2021514.html",
    "revision": "661e1152ad30326eff41634f0aa78e7f"
  },
  {
    "url": "task/2021515.html",
    "revision": "3dec4fe5013f4a598283ab36a743d4c4"
  },
  {
    "url": "task/2021518.html",
    "revision": "386bef5cc7f6990572f9f5114dd4a90a"
  },
  {
    "url": "task/2021519.html",
    "revision": "d3e33ddc57fbc83eafd67822a2cb2d73"
  },
  {
    "url": "task/2021520.html",
    "revision": "ae33835f1fb1fdf4e5c50d2d42ebf40c"
  },
  {
    "url": "task/2021521.html",
    "revision": "464b99e76137a4f8ec7492b169474368"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "fd3d44e83f0b7ac473379ce254aeed7d"
  },
  {
    "url": "task/2021524.html",
    "revision": "2ef484a936c6d2c7cc583419432370fb"
  },
  {
    "url": "task/2021531.html",
    "revision": "abc7b0a65df0eb2ca3a1793cae7261b2"
  },
  {
    "url": "task/2021628.html",
    "revision": "60ffb1ff6aeb77bcae8a80aa65852880"
  },
  {
    "url": "task/202164.html",
    "revision": "4878fbdd2e2502287f05bfd484ca0508"
  },
  {
    "url": "task/202169.html",
    "revision": "2261a7da1ab9af89d58e4ccb5ed0fda1"
  },
  {
    "url": "task/2021717.html",
    "revision": "e891512751ea7d778b276a417f77644e"
  },
  {
    "url": "task/2021721.html",
    "revision": "23648d71bbf92f583d7424929f4111ba"
  },
  {
    "url": "task/2021722.html",
    "revision": "21b673ab424bf72c24abfb2264b285b3"
  },
  {
    "url": "task/2021724.html",
    "revision": "8e0e55885e8ee35ee763c402d5ed43eb"
  },
  {
    "url": "task/2021725.html",
    "revision": "3939f8bbdc58933b16360c7963c8a3a0"
  },
  {
    "url": "task/202181.html",
    "revision": "3ab39efea0a232da23b5c22fe3307331"
  },
  {
    "url": "task/202183.html",
    "revision": "3211f58d6db00b21678fa1b8dc3ea29e"
  },
  {
    "url": "task/202187.html",
    "revision": "be5cf32fa3578684c34d6d350a9d33c8"
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
