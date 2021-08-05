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
    "revision": "340d359fb33c877a3443b328f2f846f9"
  },
  {
    "url": "assets/css/0.styles.ebd1058f.css",
    "revision": "fdf1f5b6bb4ec68ca340b52b86238504"
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
    "url": "assets/js/12.f5210a08.js",
    "revision": "0a57ba65f15e00f1e7fd723ec1f8ab0d"
  },
  {
    "url": "assets/js/13.db6c31ab.js",
    "revision": "b041c7b003a25afb20454f87f722d561"
  },
  {
    "url": "assets/js/14.b3268b79.js",
    "revision": "84818060022f68b74d1d9d224f278517"
  },
  {
    "url": "assets/js/15.4d155abf.js",
    "revision": "ee6e3487a44677d879b0e60d08ae1931"
  },
  {
    "url": "assets/js/16.0c1211a0.js",
    "revision": "6a178d603918aeff765fc7a3bd8f502a"
  },
  {
    "url": "assets/js/17.c47c9abb.js",
    "revision": "03076ae3f1a4b0435086b83550d79a0b"
  },
  {
    "url": "assets/js/18.98da108f.js",
    "revision": "8a9851f3c7686122af20e6e1c4d1c3af"
  },
  {
    "url": "assets/js/19.959116f2.js",
    "revision": "24fb1617d64d6b6016f3bab978eb669a"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.c8d973c1.js",
    "revision": "722f1d23c4716168b82f77a226480925"
  },
  {
    "url": "assets/js/21.f4a82c6f.js",
    "revision": "28f09771a217388047b63407f9b6f498"
  },
  {
    "url": "assets/js/22.1e6626df.js",
    "revision": "611eb1d7c62adbabc389faf82533cd18"
  },
  {
    "url": "assets/js/23.01241938.js",
    "revision": "22c87157a41181e7831bbfff6b75874d"
  },
  {
    "url": "assets/js/24.9d5ec0e0.js",
    "revision": "636f1eb6280077d156088bc3b7fad277"
  },
  {
    "url": "assets/js/25.a03ea74a.js",
    "revision": "7dff717f8980159ebd53865be1792427"
  },
  {
    "url": "assets/js/26.da95a359.js",
    "revision": "9e73922bf462873dc2ff41217dd269ef"
  },
  {
    "url": "assets/js/27.deae0cf3.js",
    "revision": "739dee965b65a2e642497bb526c5dfec"
  },
  {
    "url": "assets/js/28.ee47352f.js",
    "revision": "6efd2c8bb5081fc25ef9f4fad9b6771c"
  },
  {
    "url": "assets/js/29.3dc2e450.js",
    "revision": "3b7f8d0c0c4a61493eb642a6d1395bfe"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.06a87be0.js",
    "revision": "623259b1c3f6e6193c0e36b72d9aa8f2"
  },
  {
    "url": "assets/js/31.81699b5e.js",
    "revision": "08cc157845c85ef5f329924c613fc4b2"
  },
  {
    "url": "assets/js/32.af233cc4.js",
    "revision": "2d472c32b945e0554627bf4786e6f220"
  },
  {
    "url": "assets/js/33.826e0e42.js",
    "revision": "e60c7ba094a6221a99533bf4e63c9728"
  },
  {
    "url": "assets/js/34.dfa8f057.js",
    "revision": "5a652cd52dfdc8f4c744543011be7d1b"
  },
  {
    "url": "assets/js/35.4595b2da.js",
    "revision": "2aefe6dcfe2948e881f8f7140bc7dd31"
  },
  {
    "url": "assets/js/36.d3964297.js",
    "revision": "501c260437b16e39e4cc46c26ade086a"
  },
  {
    "url": "assets/js/37.ef58c603.js",
    "revision": "916d180414b212eb6fce65027ec24ab6"
  },
  {
    "url": "assets/js/38.d6808c52.js",
    "revision": "216d407e17a1fa73c6e184a170d461ab"
  },
  {
    "url": "assets/js/39.b3d8210b.js",
    "revision": "024dd58c532dd03bdd90a5b4291aa3ef"
  },
  {
    "url": "assets/js/4.bfdc5f45.js",
    "revision": "020867f01e08ef94c921441fba5131a1"
  },
  {
    "url": "assets/js/40.4b6ca887.js",
    "revision": "3b958330ddce112341be9d7a60636e13"
  },
  {
    "url": "assets/js/41.70917cef.js",
    "revision": "fdb764ca2bf22069f2aaf87097fd7efb"
  },
  {
    "url": "assets/js/42.bfb00eb0.js",
    "revision": "4fe3c2509fa05b0fdf5979df36e2e457"
  },
  {
    "url": "assets/js/43.96e9622a.js",
    "revision": "1e9db95f6b8b63fce64ca86d0162a198"
  },
  {
    "url": "assets/js/44.31caa2fe.js",
    "revision": "763df3bd259abfbf174f09b984e03afa"
  },
  {
    "url": "assets/js/45.8204c1ba.js",
    "revision": "43fca55f354b33d93d5483331bd1f36b"
  },
  {
    "url": "assets/js/46.239846b5.js",
    "revision": "04416e06bb572250bf8aebb4decbaab0"
  },
  {
    "url": "assets/js/47.1c95280d.js",
    "revision": "043f96f2abdd8c5cd191dd7e10fa0882"
  },
  {
    "url": "assets/js/48.2b94cd47.js",
    "revision": "f83d7d68259259f60d7c02e1fdf32bfd"
  },
  {
    "url": "assets/js/49.992ebd74.js",
    "revision": "10b1cb3016eeeee84ee2e71501ae018d"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.c33729ab.js",
    "revision": "8cd05b158b26714bc0240104d35fad14"
  },
  {
    "url": "assets/js/51.a25c9d43.js",
    "revision": "ce1be3740a3ab9fdc4fdde3fafe91d43"
  },
  {
    "url": "assets/js/52.36a6fe01.js",
    "revision": "7b5580f211e59a0c7ef00867a3bb2378"
  },
  {
    "url": "assets/js/53.1019873d.js",
    "revision": "fd973a76d54b2f1c401cdb0f2d101fea"
  },
  {
    "url": "assets/js/54.6f17cfb3.js",
    "revision": "2d1bddd12a238995fc658d6e014ffaee"
  },
  {
    "url": "assets/js/55.7a0b2e52.js",
    "revision": "86d9987b1b8330c8fdcb2a0831f37b78"
  },
  {
    "url": "assets/js/56.14b2bb4c.js",
    "revision": "63f98fb290e823be9427701688d9a099"
  },
  {
    "url": "assets/js/57.7ba2c50b.js",
    "revision": "9938ee46aa343fee67eb152c9c516468"
  },
  {
    "url": "assets/js/58.64ef865d.js",
    "revision": "6dd6725a28de4c275781109c60629153"
  },
  {
    "url": "assets/js/59.87c3c0d9.js",
    "revision": "cb68c1d2afebfaa51d607ed615b6ab67"
  },
  {
    "url": "assets/js/6.06f53c15.js",
    "revision": "007acd36f4f324b469b0fca856142a96"
  },
  {
    "url": "assets/js/60.cb894251.js",
    "revision": "9797a31a8d9ae395090c89c9e56114e8"
  },
  {
    "url": "assets/js/61.f26ca305.js",
    "revision": "fb2da450547a6264696b1410bd038d4b"
  },
  {
    "url": "assets/js/62.1137aeea.js",
    "revision": "b57b754c746dcbc5e53238d8cbf421e9"
  },
  {
    "url": "assets/js/7.a4d388c9.js",
    "revision": "3f6295de867d12b4268d4d6fc9f4e187"
  },
  {
    "url": "assets/js/8.d84f27c8.js",
    "revision": "c452b15c9bf25d02587a413ce37a3056"
  },
  {
    "url": "assets/js/9.cc580a6b.js",
    "revision": "6090a79c923c3ffdef238a7aeccf4481"
  },
  {
    "url": "assets/js/app.671ee9d5.js",
    "revision": "861931cd1409fb482ef6c26a0a8d8f46"
  },
  {
    "url": "index.html",
    "revision": "9b2288c441f164c82fa34fc5ab834628"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "530c1dee0cda93a64ce563b29b3ee35c"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "f56dbd3cc96be3557df55d88544d1599"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "61f45534854bc29f1e952646b8a5fc20"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "c85702c70ec18c8524010c6c87ebadf1"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "eeede737b9939a0d9c99b9cc0a4ed03d"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "8d076acd1708a15699671983c4f9de9e"
  },
  {
    "url": "memo/memo.html",
    "revision": "923e6bc7f3b556a1fae4dbb57f67fb04"
  },
  {
    "url": "post/test.html",
    "revision": "1853b6d40b378dd62ce2b596c01deb27"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "39ced83d0d8ad53d15c993728266b73e"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "bba80553ade4a36d7ea00798c729d494"
  },
  {
    "url": "study/english/words.html",
    "revision": "21b22b6c80a5e3fcc3e2dd99bcbf0fc4"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "da8b385d96d9ebb4239de4fee13da4ec"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "00a21e216134abd361ae5a9e68703a1f"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "9f9b9e0dceff651f4741fe8e876c5e83"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0e26939395e5b97c342720195c39798f"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ef22ace163c51a411a1d62e251b496e7"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "01f7997e366eb03e804b0fb1d133f2e0"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "3b287916152c959a4d83bca0ddd517a4"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b160738719dfce1225710e400a8f41a8"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "7b94787d97e1145a2c07f1b51955a2aa"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "31c38db106174ad01ba3a80ed0ae0d3e"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "bd2ab3ddbdac0cf595a993f1db14e1ce"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "72866005ed763cd94d0375f3648c78c3"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a02d90b7cfb7ca2584dfc4d5b0028e60"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5509c52a3a889338e348bf03187074a3"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ad8585bf672e0875863df837dc95c270"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "bee97c02dc621888a369669a14d0f7bf"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "5bb348b05fed28a491228f7c8558cafb"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d7b6fb2a3e3bb25e62bac35703813137"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "feea0a6bf36b28e7d2db69a71fa5e076"
  },
  {
    "url": "task/2021511.html",
    "revision": "47ae9e96a7fff15cbcfdd434fc6fbdf0"
  },
  {
    "url": "task/2021514.html",
    "revision": "b633d043bb969139968f16c9ee0dbafc"
  },
  {
    "url": "task/2021515.html",
    "revision": "7cd1ffeab40fe3957d09b0dc0a39d99a"
  },
  {
    "url": "task/2021518.html",
    "revision": "f1f3e3f8672ab02862e1d421975e35ae"
  },
  {
    "url": "task/2021519.html",
    "revision": "6510343ad798a2f7aa94ba7e0253666a"
  },
  {
    "url": "task/2021520.html",
    "revision": "fef54dfaa1bdcd0abf4ea6cce175f379"
  },
  {
    "url": "task/2021521.html",
    "revision": "07a5588b792cb22c8324d4c0f961eb94"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "ea7956cf1a81b2e8d297baf9acc994cb"
  },
  {
    "url": "task/2021524.html",
    "revision": "88143028faa6aff3070e3cae42ad9978"
  },
  {
    "url": "task/2021531.html",
    "revision": "85afc8487498105bfc4fd47730975076"
  },
  {
    "url": "task/2021628.html",
    "revision": "20b375adbbd051d8ccc6d718b1dff33e"
  },
  {
    "url": "task/202164.html",
    "revision": "0ed1fdcaf871bd3382f4ee12566a3f36"
  },
  {
    "url": "task/202169.html",
    "revision": "d873fb99c6e9e7f425bd4d36f5cf1da7"
  },
  {
    "url": "task/2021717.html",
    "revision": "012a2dee880274a53ca9c7520826fcd9"
  },
  {
    "url": "task/2021721.html",
    "revision": "ecdd919c47fe6168392552b135496ef1"
  },
  {
    "url": "task/2021722.html",
    "revision": "6f3f6c89e26c6d1e1c2f4d84f40e7a6c"
  },
  {
    "url": "task/2021724.html",
    "revision": "3828bec62e5465e70026eb4203d950b8"
  },
  {
    "url": "task/2021725.html",
    "revision": "a8da17f0e81b5099014b4ae9996f74ab"
  },
  {
    "url": "task/202181.html",
    "revision": "9d233280518db204005c12ef7781b9ad"
  },
  {
    "url": "task/202183.html",
    "revision": "4e43c4aa0b7ec0cdadf9d57576cd53ec"
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
