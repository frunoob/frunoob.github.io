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
    "revision": "caa1d9d874f1ca31e246277ea8b30105"
  },
  {
    "url": "assets/css/0.styles.7de316bc.css",
    "revision": "9b3249340e70ca0899c1bb412904058b"
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
    "url": "assets/js/2.ba57fe09.js",
    "revision": "4c780d831a9098d3a912c769f21730eb"
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
    "url": "assets/js/23.960460d3.js",
    "revision": "4c5d9d072d07f57cf6e37de7f7efb47a"
  },
  {
    "url": "assets/js/24.4ef2486b.js",
    "revision": "cd4418534234972be05a80dabe72b910"
  },
  {
    "url": "assets/js/25.bd27c313.js",
    "revision": "fd65de5879a6dc11e5542d2ffea169ff"
  },
  {
    "url": "assets/js/26.65ad7fdb.js",
    "revision": "219aa9cbb3817e2da3b61786cc4423d2"
  },
  {
    "url": "assets/js/27.9a882226.js",
    "revision": "69f837b7bf0ae539eb7992ae06400c0d"
  },
  {
    "url": "assets/js/28.13e045ff.js",
    "revision": "13244001a273329c0db16942c96a6ea6"
  },
  {
    "url": "assets/js/29.697827e0.js",
    "revision": "e73b2b44beec61e2178e9c2f3414d871"
  },
  {
    "url": "assets/js/3.51c1781e.js",
    "revision": "fd2f819feec0d41971d76b2c1fec9f10"
  },
  {
    "url": "assets/js/30.830fc5f1.js",
    "revision": "02b0e84f20991fb36b90a85598daf579"
  },
  {
    "url": "assets/js/31.8b0d3112.js",
    "revision": "7e6ae21cdf7b87ab28d0cc9bae5de428"
  },
  {
    "url": "assets/js/32.f323f814.js",
    "revision": "dd5c30c463eb1bcaf1c9b6e1252475c5"
  },
  {
    "url": "assets/js/33.387f7f8b.js",
    "revision": "6c9f19000007fb38f225cb6590b9f6b8"
  },
  {
    "url": "assets/js/34.35f30b91.js",
    "revision": "4ebbcdab84b663bcc1fb99761996afaa"
  },
  {
    "url": "assets/js/35.ace51545.js",
    "revision": "b130cddbffc0a1e7fd75108b6a452b32"
  },
  {
    "url": "assets/js/36.b9b9f083.js",
    "revision": "ce88ba0c55eab3b266169178b5b8fa72"
  },
  {
    "url": "assets/js/37.1eaeb27c.js",
    "revision": "6cfe7bc173fc06bdaa3dd9fd4956a231"
  },
  {
    "url": "assets/js/38.e7083436.js",
    "revision": "62e6ecf808bea9066ce86607a81dce2c"
  },
  {
    "url": "assets/js/39.13a72805.js",
    "revision": "16909bd218f41a477f9a98798e1f8c11"
  },
  {
    "url": "assets/js/4.1a591468.js",
    "revision": "8502a4ab8cfeefa79b1c6dbb52f8efd1"
  },
  {
    "url": "assets/js/40.574e2dfc.js",
    "revision": "2382ee0740e6afde1a374f25b58133e1"
  },
  {
    "url": "assets/js/41.4e0b190c.js",
    "revision": "43a6bcda5540035458cfd44b4dcca32f"
  },
  {
    "url": "assets/js/42.a7e4ba0d.js",
    "revision": "743d08b47cf3547309258db58884cdf7"
  },
  {
    "url": "assets/js/43.0b1547f1.js",
    "revision": "adf2296b08ba090e8d96ebf1efb3f748"
  },
  {
    "url": "assets/js/44.13791a41.js",
    "revision": "596f5bb8a8e841abe3ae07a3ee95dd09"
  },
  {
    "url": "assets/js/45.c1dea8ff.js",
    "revision": "42c034061e5850e7dc67ba688adae4cb"
  },
  {
    "url": "assets/js/46.e0cf9cda.js",
    "revision": "d82aa9135b2c4b649fc96729203d038f"
  },
  {
    "url": "assets/js/47.9a169e44.js",
    "revision": "95e9be073faec50082aba8a270968666"
  },
  {
    "url": "assets/js/48.1024631a.js",
    "revision": "3c46c775949e93628663e76b5af357ca"
  },
  {
    "url": "assets/js/49.de7e6452.js",
    "revision": "ff4054beda0910f3a03f5fd6dfade755"
  },
  {
    "url": "assets/js/5.5963b4ff.js",
    "revision": "112c1fc4f611b02b8ea6d026f4545028"
  },
  {
    "url": "assets/js/50.9f9a4273.js",
    "revision": "36dba4ede2651b8f376c22214fcf5d73"
  },
  {
    "url": "assets/js/51.39f6bf98.js",
    "revision": "de388eee23b6543bc9b5e34bf5482ac8"
  },
  {
    "url": "assets/js/52.7999297c.js",
    "revision": "4428c43906521271730f2d8b035a0ffd"
  },
  {
    "url": "assets/js/53.5e7ea92c.js",
    "revision": "ff30e2c8d24eb6646c464e6f366f2595"
  },
  {
    "url": "assets/js/54.1a5ddb63.js",
    "revision": "95f5115174af544b00b1ba2ae27b9719"
  },
  {
    "url": "assets/js/55.4d253192.js",
    "revision": "a6cb528a8fe10118bdca7f5458b38de0"
  },
  {
    "url": "assets/js/56.ec657ea0.js",
    "revision": "44534547dc41fd55f2e807e71ff74f75"
  },
  {
    "url": "assets/js/57.29b23be4.js",
    "revision": "22c055c28084fc622d81392f2aaf898d"
  },
  {
    "url": "assets/js/58.ea02e53c.js",
    "revision": "d7f7e3b66f94cd1c8e8978832ff181e9"
  },
  {
    "url": "assets/js/59.20fefd68.js",
    "revision": "f731f0a100eeaaddeed2090af6141fd0"
  },
  {
    "url": "assets/js/6.8836c250.js",
    "revision": "eabdc3c4fe3f11118353d1298ee38aa5"
  },
  {
    "url": "assets/js/60.cb8ba589.js",
    "revision": "6c0b48f4755697066aae2c2fa1ec4140"
  },
  {
    "url": "assets/js/61.3fac9062.js",
    "revision": "7ae623ac06b099f37ae32d1744cdebc0"
  },
  {
    "url": "assets/js/62.a7592098.js",
    "revision": "3eb1e74f495b7d30eabec764619a5796"
  },
  {
    "url": "assets/js/63.d5f029e3.js",
    "revision": "cb92c36b083f15b61cbc7bc8c4e373d2"
  },
  {
    "url": "assets/js/64.0c4c6569.js",
    "revision": "f95a6f86792b849cba6fef47b990ea51"
  },
  {
    "url": "assets/js/65.245f45ae.js",
    "revision": "42b6bacdbbb01edfa9e306bd09c780d5"
  },
  {
    "url": "assets/js/66.522c7dfc.js",
    "revision": "6f56a864ee6d9d5c493b680ab4394e80"
  },
  {
    "url": "assets/js/67.9ab75fa5.js",
    "revision": "08bb98a318f7d1634519b5a0840315fa"
  },
  {
    "url": "assets/js/68.0e0f9b28.js",
    "revision": "d2ff534bf992e49ba31fb3696875200b"
  },
  {
    "url": "assets/js/69.85d1d929.js",
    "revision": "ac192ff75bc5dab8f124ba3acdcaef71"
  },
  {
    "url": "assets/js/7.57bbc117.js",
    "revision": "677e9a7143f477495224dfdc86260d34"
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
    "url": "assets/js/app.36431834.js",
    "revision": "07ab302e702a50e3de7327d1a7bec8f1"
  },
  {
    "url": "index.html",
    "revision": "4979a87ec71664fdab462dd1d46b212a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "681a391d25799e13e791b74965ab94ea"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "50a3f79dcde8e381db50babfa8c5951f"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "7abc96fa674d0f29aeb7b7504a3bc7ad"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "205e1680e1a41ea1a1f06a82b7b257d1"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "90c7665e675dde658da97e1fe98b6aaa"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "bacd85ab5b6c796af68bce4073684761"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "0fca9cd81d85b4175cc4ffcbdb35c603"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "2caa3ca57bdc7ebd412bc4c09cc5a1f7"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "15bb5c2e444a8d6e4fd25caa04ed3993"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "9b6b7ddbf9f5144791d3159a5b42e211"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "8d594f35b49b1de473ded5b139b6b833"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "1e410e36e2787fc3c492caa239d1aaf7"
  },
  {
    "url": "memo/memo.html",
    "revision": "8d1d12e3ede5e293a65fbbc375331090"
  },
  {
    "url": "post/test.html",
    "revision": "b8ca921032ea70c1692b8410fb789c61"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "b04f4e8b5a1dd27f937c955e7db00e4e"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "3bd4aa54c599092a36546409889cc7b4"
  },
  {
    "url": "study/english/words.html",
    "revision": "5998b83a3d702656647b7685dc5767aa"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "91caa409b99c76370008a5ba2f27d6fb"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6c9e01bbac80821077ef02088e69d549"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "32b20afd1177fd17e87c5ae8e41156a7"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "48ec177b03a0e0eacd35616b8cec54e3"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e17420aa6ef5d94d46726f8e5ae15942"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "2a59ea3f64d7d06cbb45bfb69b6568ad"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "46fa1c797269e2b5525c54d63eb3a21c"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "95b3fb6309f8e26a125ffb69bf835b09"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "cca4fdf2c4127bb5b9d73a5cbf81cd4f"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f70040c35bbea17538f36193d2c9cc91"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "866b82040b06d04304c71aa105d36a5d"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "d3ad4e26b3ab7db4ed6e7764601e78ab"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "86ff04d0b2bd7bd32850be3a720ec011"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "48c025adc5c1fb7dd0c2c60b7a6319ad"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "526ba24a9d5e4b19a57493abb3305b9c"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7bf947eff5cac19f91ca1236fea3a2c8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "4745fc66fcbec1f165f9149b4f577177"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b257495eb2133b4eae0f4cd25fc985bb"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2686f4ec8cd316a7925774059e8da171"
  },
  {
    "url": "task/2021511.html",
    "revision": "eb4de6c776d38c7261b324d0787ac15f"
  },
  {
    "url": "task/2021514.html",
    "revision": "8ab1b7a72b7f0c70ef6a9c6cbc081e67"
  },
  {
    "url": "task/2021515.html",
    "revision": "1fa95945a49b663b27bbbd19553d3fa6"
  },
  {
    "url": "task/2021518.html",
    "revision": "5a2ee53f215a553a106859d5b961012c"
  },
  {
    "url": "task/2021519.html",
    "revision": "b3ddb7fcbc9cd47257a5899731cf9782"
  },
  {
    "url": "task/2021520.html",
    "revision": "1efd5d8a87fe435d8fb5701667c1e1d0"
  },
  {
    "url": "task/2021521.html",
    "revision": "a3f35cd390272dff108940adaea8ec5d"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "7db49e4c5b0b38ba4be9b9c10c7e486a"
  },
  {
    "url": "task/2021524.html",
    "revision": "09cea22c677e1d19b8e2e622c8f35d12"
  },
  {
    "url": "task/2021531.html",
    "revision": "d5ce91790776e971d34a7e92eff724c1"
  },
  {
    "url": "task/2021628.html",
    "revision": "95db8634ed9b19509b25458af09952da"
  },
  {
    "url": "task/202164.html",
    "revision": "86338838b66e859326929e69e987e085"
  },
  {
    "url": "task/202169.html",
    "revision": "71ae0af2e3da36054842e1960c37d0bb"
  },
  {
    "url": "task/2021717.html",
    "revision": "386e4cc28bcca00c9b2b8a97bad3fc12"
  },
  {
    "url": "task/2021721.html",
    "revision": "d82c11fd044bebfcaef7f8dd55c6627f"
  },
  {
    "url": "task/2021722.html",
    "revision": "3fb78de51d991e48b4eca1e273cde26d"
  },
  {
    "url": "task/2021724.html",
    "revision": "3e235b6ef5434d3ec6b8510329345898"
  },
  {
    "url": "task/2021725.html",
    "revision": "17f7c5ca5b8b0bda848675e8c9211676"
  },
  {
    "url": "task/202181.html",
    "revision": "d46c0b8b9dad22719772f922683a82c6"
  },
  {
    "url": "task/202183.html",
    "revision": "d9074e11838d7213abaf74cfcd6ffebc"
  },
  {
    "url": "task/202187.html",
    "revision": "d1b112fa09e7c38362d88b4968791b0b"
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
