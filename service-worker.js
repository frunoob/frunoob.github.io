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
    "revision": "3720099a9afaf34e51e62d4971570581"
  },
  {
    "url": "assets/css/0.styles.78f988f3.css",
    "revision": "24f0ef4a81c1f36c190e44f826c0233b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af5430a9.js",
    "revision": "b9befd712ae4537387247b229bffe6f8"
  },
  {
    "url": "assets/js/11.bdc6d13c.js",
    "revision": "8b6634a6e692397f120f89a4d3d66ade"
  },
  {
    "url": "assets/js/12.a13fed71.js",
    "revision": "c919b7d5eb607d4d473656e49763f3cd"
  },
  {
    "url": "assets/js/13.a986b35b.js",
    "revision": "1369d98c1da9c745871a1749515a2d57"
  },
  {
    "url": "assets/js/14.b76bbaf0.js",
    "revision": "02d0b3628769fe5f34b71c86103e5afa"
  },
  {
    "url": "assets/js/15.06ea73b2.js",
    "revision": "476fe7ec0f08f76ece672ccb923e86ac"
  },
  {
    "url": "assets/js/16.15352c15.js",
    "revision": "21399a162d2a87b2ace1d4af92e277a0"
  },
  {
    "url": "assets/js/17.c16bd2ce.js",
    "revision": "7e21f149c76bb32522b6eae76ae1c6cb"
  },
  {
    "url": "assets/js/18.01537fc3.js",
    "revision": "e4e48cd3eadb770e3511ce45cc008c03"
  },
  {
    "url": "assets/js/19.778be8ad.js",
    "revision": "04c3fe8f0819166ef4832f0df628b31f"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.700e0dd6.js",
    "revision": "9c54d8fe1a5e92e30120dc2165e7cf8f"
  },
  {
    "url": "assets/js/21.ab4d6379.js",
    "revision": "a14fd84641ebd605cc87c49b149bafe6"
  },
  {
    "url": "assets/js/22.fc47b00a.js",
    "revision": "154ec731115cbe9045066c266f63bcbb"
  },
  {
    "url": "assets/js/23.96d1fa6d.js",
    "revision": "94aac06822f1c8b0a8ec40f889778621"
  },
  {
    "url": "assets/js/24.223ddb27.js",
    "revision": "f75f27a84490d67683388f7f371b0390"
  },
  {
    "url": "assets/js/25.630d1224.js",
    "revision": "57481c41df533795988c69902f161d62"
  },
  {
    "url": "assets/js/26.6cc41cab.js",
    "revision": "f3f836f5e63f86b550049e938f5aab40"
  },
  {
    "url": "assets/js/27.15caf752.js",
    "revision": "04fd47c4f81fccde276f0810df9b381b"
  },
  {
    "url": "assets/js/28.79caffa4.js",
    "revision": "101cd8ae3fd75461bae6384664d4c284"
  },
  {
    "url": "assets/js/29.a69835d2.js",
    "revision": "2263c7758dda08bc61dca81a52ca5f32"
  },
  {
    "url": "assets/js/3.585a5d7a.js",
    "revision": "2dd765a6e71d3f28f52565845b6eadb7"
  },
  {
    "url": "assets/js/30.60244871.js",
    "revision": "fc022a8dfac63eb83520c9f5cc875a3a"
  },
  {
    "url": "assets/js/31.d9196401.js",
    "revision": "4b935185b4335a41aac768e237efda2b"
  },
  {
    "url": "assets/js/32.7f19a67b.js",
    "revision": "e2f6a4fdc59df1f80d39f9d88173f3a8"
  },
  {
    "url": "assets/js/33.e5d0776a.js",
    "revision": "aea082a71cf89b7f29a982ba8c664b20"
  },
  {
    "url": "assets/js/34.ff634529.js",
    "revision": "4f1717727ea99e332c34be9026d4e2cc"
  },
  {
    "url": "assets/js/35.14c968d1.js",
    "revision": "a263dedd62119bbbd10af4566073a335"
  },
  {
    "url": "assets/js/36.f665f55b.js",
    "revision": "a21a9ce71020cfa54f3d6fd62ad19dd0"
  },
  {
    "url": "assets/js/37.9681e21f.js",
    "revision": "feda422bab306c3a788731907f767f13"
  },
  {
    "url": "assets/js/38.793533cf.js",
    "revision": "c344c602ec8b9a5dea4211a9c96c7bcd"
  },
  {
    "url": "assets/js/39.891e89ea.js",
    "revision": "2d102ec9252ec0de0628e35cc972b12d"
  },
  {
    "url": "assets/js/4.ce6a8b24.js",
    "revision": "f55151abfa3308bfda3c96b9ebac2640"
  },
  {
    "url": "assets/js/40.2509469a.js",
    "revision": "99a5154be5d2df517ef6360a45ca69b6"
  },
  {
    "url": "assets/js/41.e2f910b7.js",
    "revision": "fccfd8a15aa1f716090d88c766b31944"
  },
  {
    "url": "assets/js/42.45968183.js",
    "revision": "8fb146198d3f60c7bf89c5a800fde7e5"
  },
  {
    "url": "assets/js/43.d16dd844.js",
    "revision": "63f20ae1b478a6887dd2013be0b10d22"
  },
  {
    "url": "assets/js/44.6dcc36a9.js",
    "revision": "239f95ae6389aac1b63c39b43f107f04"
  },
  {
    "url": "assets/js/45.fd6e5cea.js",
    "revision": "c10e95d12725cd90918fa592bc7d78f6"
  },
  {
    "url": "assets/js/46.9ac50b98.js",
    "revision": "339769090d08974e1670093554c0818b"
  },
  {
    "url": "assets/js/47.cb452003.js",
    "revision": "6d6269150077304def435d306763c4f3"
  },
  {
    "url": "assets/js/48.8063370f.js",
    "revision": "a3047d0a79f0e1c7c2d2f6065939e870"
  },
  {
    "url": "assets/js/49.3281fa62.js",
    "revision": "cab446bed8c2a242e6fc1522f8193bb0"
  },
  {
    "url": "assets/js/5.c3b4a9f4.js",
    "revision": "45de03dbc28181e443e5c93c8418ae55"
  },
  {
    "url": "assets/js/6.d87f12b1.js",
    "revision": "d6118606391355202021eaa40e0d2c25"
  },
  {
    "url": "assets/js/7.a4d388c9.js",
    "revision": "3f6295de867d12b4268d4d6fc9f4e187"
  },
  {
    "url": "assets/js/8.3ca588b0.js",
    "revision": "cdfe41c49029877319154662838ab7bf"
  },
  {
    "url": "assets/js/9.606d0b00.js",
    "revision": "85a1faf6f1e4296091616cf8b2cc62ec"
  },
  {
    "url": "assets/js/app.34ac12e5.js",
    "revision": "690a5e66b66c525824b0eb2badf9aba4"
  },
  {
    "url": "index.html",
    "revision": "a369797a553afa97c8f7fe238c3fbe7b"
  },
  {
    "url": "memo/memo.html",
    "revision": "e474f7b6babc594783df426458ee38d7"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "6dedd59a7d395852f6665c9eb1e7866a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "fdcb7acc3c61b963b4bad55112f9f2b5"
  },
  {
    "url": "study/english/words.html",
    "revision": "5fc9684096784c3d92a6b384d4dc7cab"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "6952d2a76a983389c0604657c0b37d77"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "aa97f6ffc3d7c5ba2cf8930b7a6de3bf"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ff64a05fa7125f27e6552a51d528f4ac"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "61c68898f2f83b56db56594f3527ed4c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e59c8e434e723ea38549cc5477b4ed53"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "9aeee695f166c7a442423a35772a193f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "c4d260a177a821bcf163d892e3b97cc9"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2253b202b31c9d9cb837370807ca21d5"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "ceed30762158086f0ca705f77cc59a9b"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "1a4a3a665933132b58d8b9728ab5257d"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "26c17b6b7c8ba05edfd3377f7e1765d5"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7c36164359f999ab8d644d567bc80d04"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "e7d2a8dc2ed77ad4b3362950537e5f91"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "6a6be0981a223ce32a7d419c6ac1dfaf"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "98bd5d8c1f54bd41b69e455288548b82"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0bfdbffd6fc258b109a09c4e05b154fe"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "7a6cf41d7a00486895dda895079451fa"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "a04c3542280225db9ee21ba101e26823"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "729a807d4922b009f27e42f8a9b79cfc"
  },
  {
    "url": "task/2021511.html",
    "revision": "53497fb8e63a8ac1a6cc32d7a20b66d5"
  },
  {
    "url": "task/2021514.html",
    "revision": "7111718a5212d10c963c9c2194c21875"
  },
  {
    "url": "task/2021515.html",
    "revision": "a65af82bcd6acabb5f6ad4d4bf311b18"
  },
  {
    "url": "task/2021518.html",
    "revision": "bf3edc9d6a455b4a69cffe281e00d5f6"
  },
  {
    "url": "task/2021519.html",
    "revision": "447f031aa96426ae70ca0c4303f801ca"
  },
  {
    "url": "task/2021520.html",
    "revision": "bf64cb268c23aaa6418cc9729fd7b7e9"
  },
  {
    "url": "task/2021521.html",
    "revision": "e5e0492f73dc01da22208bd85ada5311"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "6f5bfcf199dd3a1abb0d71acf872c42b"
  },
  {
    "url": "task/2021524.html",
    "revision": "a7188e0688c8457f1b8b1b1ebb05fa52"
  },
  {
    "url": "task/2021531.html",
    "revision": "bba09368d6388fe374d2c82610193c8e"
  },
  {
    "url": "task/2021628.html",
    "revision": "48e2e0f452cf50e4a70347d62089d1d3"
  },
  {
    "url": "task/202164.html",
    "revision": "c62aa407563a74888d55f9eee38f0767"
  },
  {
    "url": "task/202169.html",
    "revision": "33fb1c3e02ef14264259446397b056f0"
  },
  {
    "url": "task/2021717.html",
    "revision": "4dc5b5e08cb120c164072f29e9d53310"
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
