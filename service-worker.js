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
    "revision": "f5214f99a76d754e55f2602615cabd43"
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
    "url": "assets/js/23.960460d3.js",
    "revision": "4c5d9d072d07f57cf6e37de7f7efb47a"
  },
  {
    "url": "assets/js/24.4ef2486b.js",
    "revision": "cd4418534234972be05a80dabe72b910"
  },
  {
    "url": "assets/js/25.ec03c4a7.js",
    "revision": "dc83535331e50ef79957f9785d2b8745"
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
    "url": "assets/js/app.8e8789c4.js",
    "revision": "e91c4bb823019fe1a4543f3714249704"
  },
  {
    "url": "index.html",
    "revision": "93a809023ecdade5874d3c9bebcdc4ed"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "6a97edadcc88d062186c72a799d2243f"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "00b0278948d29e590eaf864cddf6071e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "7cebc2f7383ac45d3d4d4ace2c249c27"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "720a7abcbeac5c93883e095103972dba"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "44e2d39d37225fc1574166a2e63d05ac"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "b262737f08ce318dda98fe95c8aaaf3a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "ee8c6b1388c7843bb4d7849c279e22bc"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "6151b354206c23db6aba671a8fea7776"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "da8eb51e11176bca4fab312ff4746080"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "ae33542e832a0fffc52e5f69e60cbb23"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ebdbc0779bfc5883294be884adceeb8b"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "10821f74487b3174132fbb5bd018dbe3"
  },
  {
    "url": "memo/memo.html",
    "revision": "92298377d5b44408963d3005f64cf055"
  },
  {
    "url": "post/test.html",
    "revision": "5a4f52f14c747734fb595c043b1f7b4f"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "c1834221eacbc6f28980b76e645e8eb5"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "820351a391786bbd2d92c3df9d4ec012"
  },
  {
    "url": "study/english/words.html",
    "revision": "1056e920e361256c2c69157ff8b82486"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "93f68b570ada8d75cc62c2d0808d62d5"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6fbb87a2cb612edb9753184733057026"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8f5d5d7906dff9437403c86f5915ccf6"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "15666b2b9673e05dd64c485fa6a341bc"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "cd86dc04a296760ee9f8c216a13d3b08"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "de134d47bdcf5887bc2a929e298cfb34"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "8629002c43844e78151d3368ea830350"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "a254d7155d39c02207c56eb15dc1c79a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "01bba14fdcc8269d65bbfa9ad42345c0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "51b78d030f75b79d0677ea08592081d1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "56842fd974a849c81db7ce564e3d99b9"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "103a2f9ae1a0f998858c5fec10bb2d41"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "7099d1be48459a43d17a90deb0dbb055"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5175d5127bead56ba213931e326ed6c6"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "c09e21a36e357f769de09558133edbbf"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "406c4fcdbf343441010996f09f37b881"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "2804d197f17907435746d8730705121e"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "98d14478f2c7c0619e2fb63e28ef7ed7"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "61094463b2e81ffd5432d463b38e2eb2"
  },
  {
    "url": "task/2021511.html",
    "revision": "9690324d30e0df4a3201209bebc5f0b4"
  },
  {
    "url": "task/2021514.html",
    "revision": "8f6428be2bded35ad6088069810ec8bb"
  },
  {
    "url": "task/2021515.html",
    "revision": "f9191ec995d195e608cf6647bd8eb446"
  },
  {
    "url": "task/2021518.html",
    "revision": "df2979aa7e5c85ebe8f251daeb9bc226"
  },
  {
    "url": "task/2021519.html",
    "revision": "5cb139548a42a3850312c2fce609a47d"
  },
  {
    "url": "task/2021520.html",
    "revision": "62e69573d57aec2923c5ecf0d6a81e5c"
  },
  {
    "url": "task/2021521.html",
    "revision": "4f0deaafceaf9d422e2458f14ecc366b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8c6b771c6b3e2f6b644c526438c8128d"
  },
  {
    "url": "task/2021524.html",
    "revision": "c62013934bc03f6ee20c743fb72d091f"
  },
  {
    "url": "task/2021531.html",
    "revision": "f80f268b343333d4b653961f6cb351c0"
  },
  {
    "url": "task/2021628.html",
    "revision": "f067483eb08fc86bc6da1f4b8d6c5779"
  },
  {
    "url": "task/202164.html",
    "revision": "4819d0569488e2ee1bff260ec0ad5ea3"
  },
  {
    "url": "task/202169.html",
    "revision": "cff03cbe6b6aacea3728d6dae2643cd7"
  },
  {
    "url": "task/2021717.html",
    "revision": "14348fa74b84519b2f5eb3c659d6d66a"
  },
  {
    "url": "task/2021721.html",
    "revision": "cdce8acfcaab02c9633997c42be951c8"
  },
  {
    "url": "task/2021722.html",
    "revision": "9b4a94f65fdbbbfbb7eebebed88345f1"
  },
  {
    "url": "task/2021724.html",
    "revision": "f90c3d2c72c77bc53136cf09267da8cf"
  },
  {
    "url": "task/2021725.html",
    "revision": "933118b7931ad177cad86b9ffc32b7e8"
  },
  {
    "url": "task/202181.html",
    "revision": "bd49afb924dee6ca851c351ea36f462e"
  },
  {
    "url": "task/202183.html",
    "revision": "56b26a0e30ca05a3f09a8096e7908329"
  },
  {
    "url": "task/202187.html",
    "revision": "596bb24e051cebd2d6d48faf5f36e87a"
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
