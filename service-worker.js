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
    "revision": "41ca33943676b52a2ae0fdab61a4cf2a"
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
    "url": "assets/js/11.bc024dc1.js",
    "revision": "5fab61cca6f6f669679ce19df72c409b"
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
    "url": "assets/js/app.ff547ede.js",
    "revision": "0a98ada0e229cce222585607df82fe33"
  },
  {
    "url": "index.html",
    "revision": "a9590d92d0b08ba39832c706c3a5e3bd"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "ab9a1295c3fd64fd6571962ab4b3e8fa"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "d0fd9f3f884602e5606280e2aab4636e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "99fe0798f26fa8d9479ef93edd1ee749"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "6e9b172e364ad24c5f505dffd25291b5"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "389f293d4c5181d88227ccde19b0bdd2"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "dea17482a05117af6911844c371e9f75"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "40016d4a42c41cd0251602a272bad943"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "ef04bc8e4c891ac1727d2ae890d238ac"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "2b4ac0a9c6112c98eb1f24076fbdc629"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "1610d3128ed5d344fba0ff4ba156ecc2"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "76241dee843d48334c1ecd90d56284cf"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "4803862fd2c6e40f4896d449585cb7e3"
  },
  {
    "url": "memo/memo.html",
    "revision": "e822ec3f5843ffb302a1f7cbe799a5c5"
  },
  {
    "url": "post/test.html",
    "revision": "ff96babdf5607ba36993f7c7001be23d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "687a41781ffffee62d54a97733ed81ce"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "04b5f8545e737c9bddc6077c8e41211e"
  },
  {
    "url": "study/english/words.html",
    "revision": "5260e18c83a4fb3d1505ccc15391d37b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "70bc7ad8cf8618d26e7dd25e70cb1dd1"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "8710d15252e109c6f05bf114687675bb"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "16acd4103dc9685d8f88f990da1c5536"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "fc290a451190a4fb10cac13561ae1a56"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "f477f8c6e2f1e4d6ab699cf214c58a05"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "afb79c0c00df9e948493678b4c8e4863"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "46ead5d86ab6178facdfca33a88ff0e8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "dd96a3e8ccfb1bf569f9c555fce107f3"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "cc6da26c87204ad2a784cba978a25598"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "da3befce9b60673a2761612d6bb2362f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d7f80fb668a9f3cf845ce85ecfd35b38"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "d0aa64e59d969ee0443a5dbbc22a3559"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a1d8e5d1c2bbbcfd925bc77808721c45"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3002123eac44c2e178733f294382c708"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "cdb0ce926f9aef0086f6eb728736ddab"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "d844d4f0d597f38f04508db96691661e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6e0becb4eddfcf59fee8fe1804d01bdb"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d8959b418faa688fad69a5aa72031641"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d4365a76de679ce90da8b5c3a447864a"
  },
  {
    "url": "task/2021511.html",
    "revision": "2931cfd008340fde9113b62d973011c5"
  },
  {
    "url": "task/2021514.html",
    "revision": "fd66f7ec14fcbb91c3ecec7224f9905b"
  },
  {
    "url": "task/2021515.html",
    "revision": "5771b91bc9ada75ee1a1824ff8625608"
  },
  {
    "url": "task/2021518.html",
    "revision": "d0dcf40071ba556d20af76917bc9e29b"
  },
  {
    "url": "task/2021519.html",
    "revision": "ba6d0739dd57291a9a1fadbc6e1ad9fa"
  },
  {
    "url": "task/2021520.html",
    "revision": "154da6e49fc3c9cf0fa91e8c20ff46d8"
  },
  {
    "url": "task/2021521.html",
    "revision": "59badc8d1288b7dd8f13f7869b1697f9"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "819effe238182a753b0548cee239eae9"
  },
  {
    "url": "task/2021524.html",
    "revision": "0260d1a75fe928d93ca6e786b848d6fa"
  },
  {
    "url": "task/2021531.html",
    "revision": "b41f1d378f55cfbe3c961d904e704de9"
  },
  {
    "url": "task/2021628.html",
    "revision": "07a0c32416cad8140235ebd24d16fc6d"
  },
  {
    "url": "task/202164.html",
    "revision": "1c06cf60a149f56ed9554ed14643173d"
  },
  {
    "url": "task/202169.html",
    "revision": "5395d277f934f3864fef10f31df524f3"
  },
  {
    "url": "task/2021717.html",
    "revision": "c2126e1a9077b1d14194cd76fa9b45d5"
  },
  {
    "url": "task/2021721.html",
    "revision": "2010f0a9ea5599aaa7f7ec1f2999550e"
  },
  {
    "url": "task/2021722.html",
    "revision": "2c8a3631d9ce46ae5f6c73962543d90f"
  },
  {
    "url": "task/2021724.html",
    "revision": "fbea266cd995b0bd2e8a5b928ba766c4"
  },
  {
    "url": "task/2021725.html",
    "revision": "a1a592923d4128d25cab6387b6d216d8"
  },
  {
    "url": "task/202181.html",
    "revision": "3af59c08ad047da489eec546f072d2c2"
  },
  {
    "url": "task/202183.html",
    "revision": "d641cb8ce7e6bd142fdc546b0cd5cff3"
  },
  {
    "url": "task/202187.html",
    "revision": "11c6ffcab099f433e4307fcdbda51449"
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
