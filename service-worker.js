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
    "revision": "ef739614f6529c9d3aebcd40a8f8b646"
  },
  {
    "url": "assets/css/0.styles.14a3de68.css",
    "revision": "c6d1164263c8a7bf46d713db99cbc2d5"
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
    "url": "assets/js/7.41cf7652.js",
    "revision": "df75c63eead15e5a98e32e3556b83287"
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
    "url": "assets/js/app.10ccb213.js",
    "revision": "4d787cd8620332de7d6139ba767a7f1f"
  },
  {
    "url": "index.html",
    "revision": "430b6e56f7b365f4b20f4601ccd631c6"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "c91ff79f853dcffd649496d6eadfd5be"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "62c79635830425c9c9f80080ad538983"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "3826a375818536c8ff8d63f3b0aebda1"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "0e0776a4a116ad5075886cd1c8f1b805"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "011d94111b2c461c132a413bfce11916"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "e3b94040baecd3aa66e6f10e6cb839dd"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "771f7f0d905bc3f8b37e49c9552c2b23"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a62291eeb871f2a9800d3b845664a2a8"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "568b7baac1cfec972ce20c2ff0d653a3"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "846eb39ff1ccc8da392b20584eb35a51"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "44093408fada92e0b4975ee5bc57dd4f"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "227e0c20d4dfa179a74208bf9da89e5b"
  },
  {
    "url": "memo/memo.html",
    "revision": "063cd0bf4e6d6a46aa4133961b4655dd"
  },
  {
    "url": "post/test.html",
    "revision": "a7cf989fa8ccc6507a6e0e799b838810"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "36ead2ac2ad5f9086095b66c658fae06"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "572a0b7371f3bd37fc413468f1cd8e76"
  },
  {
    "url": "study/english/words.html",
    "revision": "4de43a1d70b5e6e13fdf2dc00701160e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "5e95d602e27c28d274000f3b3d9e4628"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "487c55e6c581c63011dcca325a4f1e9d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3785f86db00e6dac8c0686416bff4259"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "661bba47b8c11f28f8033ad8e07ee29d"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "487748a2f375d6887709b857b200dd9a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "6ab24eba5154abd073920b3b688ac811"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "306a8e5bbb35dc8964205e59c3588bf7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "82fe735bc2450f3f68cf25848cf59c5a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "da60b7fa4682b2adabdc0219f8b5184e"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ce2a457788543f079c081b60c2b60a2a"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "ec52fcfc869ce32b7263197f8e1806c7"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "2962bbacea86ca001b142562cd273409"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "ff7a2381f3abed7a2c81f31b9da0700e"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "80bd08a495e38c365f6ec671309bf532"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "cef111f216800b364bd75ebec00d8f2a"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c4211e8e4c23b887f14162b7d8c16e0d"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "99223f5069c1213eb7187a30f5063194"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "13d1ed4857f4c89bb52a44933730db61"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ddd40ee457a288623ef7c67c729ffd0e"
  },
  {
    "url": "task/2021511.html",
    "revision": "f408351a0aabff76ebe546eaa54ce14f"
  },
  {
    "url": "task/2021514.html",
    "revision": "1e89805bd968d63319afa69fee952da2"
  },
  {
    "url": "task/2021515.html",
    "revision": "4f538026d5a490ce4476a85437c0886c"
  },
  {
    "url": "task/2021518.html",
    "revision": "dbd0cbb2f90a79a55260f1d63e904eb1"
  },
  {
    "url": "task/2021519.html",
    "revision": "a414a1c5ac7ae0c7880cb935723a6c9d"
  },
  {
    "url": "task/2021520.html",
    "revision": "33f38b0afaf0c1ddcbce1268445149f5"
  },
  {
    "url": "task/2021521.html",
    "revision": "9fd63813cd007876b61bef0e8810b715"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "d82aea0faebd6ffc821696c4ad7e7a33"
  },
  {
    "url": "task/2021524.html",
    "revision": "4d734a9e25923d45d0649eade426b1fd"
  },
  {
    "url": "task/2021531.html",
    "revision": "bcd90f51fbb047d450eba321f03d5462"
  },
  {
    "url": "task/2021628.html",
    "revision": "b0dc1cd0ede9ea5d181608eaa64e8f04"
  },
  {
    "url": "task/202164.html",
    "revision": "7fd097b4d719d17d517dea79ad1c992d"
  },
  {
    "url": "task/202169.html",
    "revision": "d29799a4cb17d50f0b1eff1012795b31"
  },
  {
    "url": "task/2021717.html",
    "revision": "438b0032ddc17d47a2e4c94cd9d240a6"
  },
  {
    "url": "task/2021721.html",
    "revision": "f5bf60360d6a6771d78029814a59aedb"
  },
  {
    "url": "task/2021722.html",
    "revision": "182b3a9f3a7ebe01774fb0b3195013f3"
  },
  {
    "url": "task/2021724.html",
    "revision": "7bccc35d6cb85a85a762a5c801447301"
  },
  {
    "url": "task/2021725.html",
    "revision": "cb9229331b9e1ff94cb9f89975ce7810"
  },
  {
    "url": "task/202181.html",
    "revision": "f86fc164e8319f2e4ba0ee9b86466b43"
  },
  {
    "url": "task/202183.html",
    "revision": "cfc9dd009d08b013dd22b5a675dfb544"
  },
  {
    "url": "task/202187.html",
    "revision": "8a323fc4d17a2a75d8507b645e5aad11"
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
