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
    "revision": "3a498b2257293ae8c3f1bcbeece54ce2"
  },
  {
    "url": "assets/css/0.styles.36e01abc.css",
    "revision": "d0e203b61ee4e1cf360495d3f504cfdb"
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
    "url": "assets/js/app.493eac9d.js",
    "revision": "cf6cb1af96d65792c83e6f6ecb0e13f6"
  },
  {
    "url": "index.html",
    "revision": "29b03e2eb2a6fff3c3ef6911501c7d4f"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "1be9c36c75007868ddcc97b2af049320"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f7697e57dad5b0439b087167c213fa2c"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "0555f18c0419c64bf7e43825d7d97a18"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "3bd0efee9644924ac09ec0a0293ce7c0"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "a541628ebcab70dc1d97de272baf4aff"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "054549d3ecc86c2b003141377b65c9d8"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "6cba3666dca3a88a53f45343aa4b5d06"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "1741f5372b80ddc0265df092dab2b70d"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "6a717e59a6d22408f6070b3fa5e3dc85"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "518377fd94476ef7456e115a17019e9e"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "394c292e4331b62ecdbf36beb3335f6e"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "faab73c21e46533160b9314f6f4f6baa"
  },
  {
    "url": "memo/memo.html",
    "revision": "9ca6cd7fd559f06f5a4c2479aa7a7f6c"
  },
  {
    "url": "post/test.html",
    "revision": "a734f63342622be91c34437233e131b7"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "74d7d6f6a0384b92f1521e7c2b14d95f"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e90293512ca7adbe6933010fec9df077"
  },
  {
    "url": "study/english/words.html",
    "revision": "58d016080ba7c97a01a81638cc933d0b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "38d3bfa56d32f7e3ff6e0e2a7bc53c4b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a290eaaa55ba44862ee1f2c6fa0acb82"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "d881db17989a17a8c413de34367db845"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0d6e14a54230009c812f5f10b349466c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "251d5ae6831267a4115bc9ed04b2a2b4"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "e79ae2e9de6eee1e57a1075fb30e9a37"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "b680f73666fba001ac850ab031f477b2"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2c17e83574c9212937609a8b96be18df"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d2831f4f33c9c71c4776088e5f794683"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "2614ab82059f5010eacd82674d1c47b3"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "137a336e828104b9b61f037cb2cb3802"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "df78c057635227b7c3ffd19da5a4c00c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4671c30add034db611aec0c80681d4e8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "95d58a48a234ac00794366353ee9066c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ac2c9b08461bf7dc02d79b19cda5b0b5"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e3d1dfea45968e1543a367a7220e52a2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "80c144a5c947afc3a84a175d4501240d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "1b82c0fc40bf573fef2edcc0af84efc8"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "7ff0a96391e38109614e85f4107a22d3"
  },
  {
    "url": "task/2021511.html",
    "revision": "66bffe597e80a0b53d44f0e6713159e7"
  },
  {
    "url": "task/2021514.html",
    "revision": "14259bed693a8c799997ee46cc4ce8c4"
  },
  {
    "url": "task/2021515.html",
    "revision": "9f5dee9b935c8c185934428c27af8e97"
  },
  {
    "url": "task/2021518.html",
    "revision": "8eb553ad4ff8705fd7c3efa79cfae89b"
  },
  {
    "url": "task/2021519.html",
    "revision": "1c668e56a127070a102efe34bec87a64"
  },
  {
    "url": "task/2021520.html",
    "revision": "e4967eea1bf890a1e44155743c6d8eaf"
  },
  {
    "url": "task/2021521.html",
    "revision": "f418e072bf6efa4f1c6abcdc9bc2315c"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e0ccb6fd52fe1498b63e442f09d7b932"
  },
  {
    "url": "task/2021524.html",
    "revision": "d818aa0719e72902fc0a3a7b852b1c24"
  },
  {
    "url": "task/2021531.html",
    "revision": "f911ce7fc850ec566d93f46ae8ba86df"
  },
  {
    "url": "task/2021628.html",
    "revision": "b1019e075759f208734471c472daf5a4"
  },
  {
    "url": "task/202164.html",
    "revision": "19589f84f712ea8d4603be73c79a698e"
  },
  {
    "url": "task/202169.html",
    "revision": "50e23b85160bc94f4d311d80b8aa07b8"
  },
  {
    "url": "task/2021717.html",
    "revision": "3b96f904a6f05227dbdb4eb5963bdc57"
  },
  {
    "url": "task/2021721.html",
    "revision": "313b2a53354fb6518cf28f867655dfe3"
  },
  {
    "url": "task/2021722.html",
    "revision": "c7d6c88f5b495c810ea58b7f6ab7fb46"
  },
  {
    "url": "task/2021724.html",
    "revision": "97bd79960cf122185060a9aa596653c9"
  },
  {
    "url": "task/2021725.html",
    "revision": "93bd860d487640c116eb2da67fd8b05e"
  },
  {
    "url": "task/202181.html",
    "revision": "030ab9e3207a4622eeca5e249063bbfc"
  },
  {
    "url": "task/202183.html",
    "revision": "08d806155741fedbbd2893b0f14eb4c5"
  },
  {
    "url": "task/202187.html",
    "revision": "ed531bb6439c8b511c491ca161392b73"
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
