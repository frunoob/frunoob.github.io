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
    "revision": "a933d0aa4f06963d6afbce6fcfe75f41"
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
    "url": "assets/js/23.37043255.js",
    "revision": "cb3d03d28c9ece339f69b11f041269f3"
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
    "url": "assets/js/53.63eca161.js",
    "revision": "ddb6906bcb78a8f9f28fc8b92485bf02"
  },
  {
    "url": "assets/js/54.e40e43ec.js",
    "revision": "d197ec7621aaa53adfecf1957d950c0e"
  },
  {
    "url": "assets/js/55.c7c3229b.js",
    "revision": "2a22b808675e103eac82ffe465f57b06"
  },
  {
    "url": "assets/js/56.344d54c9.js",
    "revision": "2a1e2bb1939baaf19588556b3e56a296"
  },
  {
    "url": "assets/js/57.9a723fee.js",
    "revision": "a41da9fc1d311531bbf2323089c6e02a"
  },
  {
    "url": "assets/js/58.fca1ff9c.js",
    "revision": "5b61b1ebc6d19b34740f3312d77729f4"
  },
  {
    "url": "assets/js/59.1c7e1263.js",
    "revision": "511199ee8e1d83aed344f926a81da48e"
  },
  {
    "url": "assets/js/6.8836c250.js",
    "revision": "eabdc3c4fe3f11118353d1298ee38aa5"
  },
  {
    "url": "assets/js/60.22f8f145.js",
    "revision": "39b55cebc861c210de763d8890ccb16a"
  },
  {
    "url": "assets/js/61.61fd4502.js",
    "revision": "59342547ca939bb8bb19a9cb89da27a5"
  },
  {
    "url": "assets/js/62.fa21bb22.js",
    "revision": "8f3380637244e1bd1a57b6128c0e1006"
  },
  {
    "url": "assets/js/63.aaa804d1.js",
    "revision": "13d2858593b0ee7afe297d8ed44af751"
  },
  {
    "url": "assets/js/64.e509e1e5.js",
    "revision": "ff018efabb5359160d723858f15d5038"
  },
  {
    "url": "assets/js/65.c3c7ddbf.js",
    "revision": "df0a8f03bc73cacf424fa284b7e92b13"
  },
  {
    "url": "assets/js/66.8756b57a.js",
    "revision": "8393810b4f07b3416ce76200cd7c56d3"
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
    "url": "assets/js/app.ac61ddd1.js",
    "revision": "98a4b297f29a1fa5c2bcd8e49a8acc90"
  },
  {
    "url": "index.html",
    "revision": "86e45c6d251abb591aaad87f5c2f3fee"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "911e2c176d54eda192ceb32d37736019"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "99b749d30b136ad1625d5664d4d9c136"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "70d13ce76711638303995f4dae5d0f4e"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "e25650b5d2d4789b0d7a9af3928306a4"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "873261cde64f55b5f953e39cc3a83b1e"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "dddea01ef9c8bb04edb31889b3b17156"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "d567009cb58b6441e4e3fcfdcab0798f"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "841ab616de68b676e02a269362b3379b"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "c6c4d533aeb1e550181229267b9ad178"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "76ad7fa02d21a85ff57499d23f2fc6cb"
  },
  {
    "url": "memo/memo.html",
    "revision": "a6b195c7719125bfdf73a57a13b84f22"
  },
  {
    "url": "post/test.html",
    "revision": "5a6e2a4c3e48ef3291ef4f32c70ea292"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "18beafa0e8366fec50a1cdfbf5231483"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "8a6fefa98bdb32f3b5189c1e0c0f6739"
  },
  {
    "url": "study/english/words.html",
    "revision": "f9115065aa3590870fbca4083fedb74e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "42d1090e927f762f99694c73afd08d51"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f459f71aae19382787f8c1ce14bb2cb4"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "81341778c96692983f20c2aa3ab87b6b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "465ea93f72f3ab0deb741580dfa8475d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "0c703cd4f01cb463e56434f9f43c34cc"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "c5e126064123e19a39d8e4f446016bb5"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "02b08f5688d5e2fe3b0e287923dd215e"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "0108fa40766623581762476cef92b118"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "0ec10231f4da2d6cee0e75c5049bd8da"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5261df67a03865af1fd74f77dba9308f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c97ece39b4b22e2174ecae4bcff33ad7"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "007c963cbed4b2c34a12efef3eaf1e74"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "b73d0f06614dd5b717bd4b633b9fd344"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "98339cd9cb4d699bd351b4807a132e70"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3e2e19a4129283a25a206e93efcf3031"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5849865df6fa1dec6696948c5b63b0c3"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "7d27f8e1cfd84abe876616689ca4e9d8"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "f78fe3564f671fb330468b03a3b7275e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c04433645b27eb43a21b632f2da34ce8"
  },
  {
    "url": "task/2021511.html",
    "revision": "b453ef6ad864021c27193f85f9385d80"
  },
  {
    "url": "task/2021514.html",
    "revision": "1ca63d9c97c8ca424cb8ffabfb306c56"
  },
  {
    "url": "task/2021515.html",
    "revision": "66d3f05644754ee207ea0b364fa931ae"
  },
  {
    "url": "task/2021518.html",
    "revision": "5598b258a4445aa350e2fe357e46c7b5"
  },
  {
    "url": "task/2021519.html",
    "revision": "cdc46e359e172f9167cc34fa8eec6cf7"
  },
  {
    "url": "task/2021520.html",
    "revision": "7e801c80b014bab6958aa9a5993ee9b9"
  },
  {
    "url": "task/2021521.html",
    "revision": "0ac178bf73e324940b6f284895335da8"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "a4833a577f7b3fe4ea3522ac4b4710e3"
  },
  {
    "url": "task/2021524.html",
    "revision": "1cc46c225f2da91d2cbcad98254886b9"
  },
  {
    "url": "task/2021531.html",
    "revision": "54fa754673fc09ff0e26c0f9392cb615"
  },
  {
    "url": "task/2021628.html",
    "revision": "053efa6a161f8c1876934dd151a60901"
  },
  {
    "url": "task/202164.html",
    "revision": "4e49d1965199c7de969ae78fde79ae22"
  },
  {
    "url": "task/202169.html",
    "revision": "fe3d839957cb06a769bc530dd123e1e5"
  },
  {
    "url": "task/2021717.html",
    "revision": "228f09fe63edd92aae3c4ebf3d342d8e"
  },
  {
    "url": "task/2021721.html",
    "revision": "79bd0d6c8d4cb3a4e60299fc2b2ca337"
  },
  {
    "url": "task/2021722.html",
    "revision": "8eec3f11a11bdf46bc5733524ebd7dfb"
  },
  {
    "url": "task/2021724.html",
    "revision": "d510c9710b2980329a8bb33fb37a14c5"
  },
  {
    "url": "task/2021725.html",
    "revision": "ee477c332ec020e7580d1159d8ffaf40"
  },
  {
    "url": "task/202181.html",
    "revision": "af941e665644fea80da71537bfb58fce"
  },
  {
    "url": "task/202183.html",
    "revision": "16327ad1d1d5572afe0239eaeea6d569"
  },
  {
    "url": "task/202187.html",
    "revision": "736167160c42b2014a1ad38d68d1e8ac"
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
