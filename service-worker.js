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
    "revision": "9310888e325e8c7bb99a13e65f855811"
  },
  {
    "url": "assets/css/0.styles.1def60c3.css",
    "revision": "892e1a633efa8b6f56c06cd096c7b04d"
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
    "url": "assets/js/7.5994d5ba.js",
    "revision": "66123f66b89c0ae4b08f782914d5b5d1"
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
    "url": "assets/js/app.322fdb64.js",
    "revision": "a0a9f04ab8d2cdd6c5523befe056f887"
  },
  {
    "url": "index.html",
    "revision": "dcf863d1603c3df6911072ccfc4aa3e8"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "dd3634c6f646359f620b2fca4ee8e5c1"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "7a3f3a7a455c6477a7cffb05e3fbfdc7"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "145622a52363ea423b238e795ca8ffa4"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "bc06a36733a778e4df141a5d0bc0a26b"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d449931afda9781f619537fe76383f2b"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "2506cce671c01e6be1455d643e06ae18"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "cbfeefb486061444227c682b585c6ed5"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "695a595561f40d36dd7787537ae53287"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "853beacce560b56a9ba3970900fc3e56"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "39ed8ce27af9cfcc59d4dec2a73f9750"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "e3f95338481f9ac935f3ead22bf2a3d9"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "5b78bc8446f36a31443949a019d200fa"
  },
  {
    "url": "memo/memo.html",
    "revision": "35b2db1cccce992b53eed85ccd7a1368"
  },
  {
    "url": "post/test.html",
    "revision": "be69d5304982c4299e805930c92c2d7c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "b9db4bd66f225a6141a9d35ee4961d5c"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "169f06189df8e24e0b4be574afd0e52d"
  },
  {
    "url": "study/english/words.html",
    "revision": "35ce3a7f33c6906eb0d2aae58e7c3818"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "6748de4de34e4b3f4bd62cfa4e7e9e53"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "57ddc1b6820a78cf281914312b9060fc"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5ad81684540a0d65d2c1d2a677ee13b1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b6b862dea3c3a41b43e6d81ba587eef8"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "6da19ebf24ed5104a2c838480773d7f3"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "5b66f1b11343d6bc1cc547a96654e9fc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "a596ad981369b2193a52e93f1b66a2b7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f87353c96c2a672e3623abfa4e1037c9"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "7e72f80ee32a072b94128a1db3cf7abb"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "e76ffacf2c145292757477dbd823285c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "196c5e67d284ff82495867ece4622ee8"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "8ed4bccd5d25061d74743bbe2e60d016"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "07bed74ab8690de12ebaf729d60ded73"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "2582688de1bb36ee57edf55336aa3496"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3d17433e0581690db86e1712da457d49"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "3edf3e18418c16be0f730019ca40e419"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "3a9e993f43f00e795fe826217adce827"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "24439f6581912b5f1243e63ea0bf1710"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "0e9309f3f49b5670a802b9c38957c75c"
  },
  {
    "url": "task/2021511.html",
    "revision": "03b5dcf986b4283c5af088178d39901a"
  },
  {
    "url": "task/2021514.html",
    "revision": "299a9244c86940b05fb5eb8d0f6d82d8"
  },
  {
    "url": "task/2021515.html",
    "revision": "446258a0bca7757e73e9e4fb3b9f7065"
  },
  {
    "url": "task/2021518.html",
    "revision": "82d176bdeaeca716f6feabb737c926d2"
  },
  {
    "url": "task/2021519.html",
    "revision": "c0b05e0e8d57676a954026093e1ace82"
  },
  {
    "url": "task/2021520.html",
    "revision": "cfb3ed46a00a33fefb1c47b8ebae34ba"
  },
  {
    "url": "task/2021521.html",
    "revision": "95734c07e0689f91fbd1f43fa8eff4d3"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "b00a9acd8300c36ae6af6324298fec6d"
  },
  {
    "url": "task/2021524.html",
    "revision": "781d9489a77c7ad6a1d4b1a5dce572fe"
  },
  {
    "url": "task/2021531.html",
    "revision": "fbc9ad3b45a0f49f98a0bab433ab5519"
  },
  {
    "url": "task/2021628.html",
    "revision": "0895b5bc0130845f1c24afd35eb637f8"
  },
  {
    "url": "task/202164.html",
    "revision": "ee54361e62d171ab85a933e8e86b613d"
  },
  {
    "url": "task/202169.html",
    "revision": "3f4eaece7f242d347a1a14af86336578"
  },
  {
    "url": "task/2021717.html",
    "revision": "76e6bac1ddf0eebefdf4f37f756e3e6b"
  },
  {
    "url": "task/2021721.html",
    "revision": "53d3359e3b52c2bbfe33fcb98a0be017"
  },
  {
    "url": "task/2021722.html",
    "revision": "09f4b84add63c1cbee1882acc2881004"
  },
  {
    "url": "task/2021724.html",
    "revision": "7b1e66a4c0738ec18f1b4fae8817be93"
  },
  {
    "url": "task/2021725.html",
    "revision": "47cd36e6e00cbee74434329b79a5f5c9"
  },
  {
    "url": "task/202181.html",
    "revision": "19fac0ca38a246fc04ab79bf5ac098d1"
  },
  {
    "url": "task/202183.html",
    "revision": "2fb8994ce1ab64320899600dcb436cf6"
  },
  {
    "url": "task/202187.html",
    "revision": "59a4a4f721317227fa39621aae4dbd62"
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
