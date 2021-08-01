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
    "revision": "8ebae6e4a0c728049bcb2952f58002d9"
  },
  {
    "url": "assets/css/0.styles.cbd5f82e.css",
    "revision": "e2bda26176d3743b071560c964a6e120"
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
    "url": "assets/js/17.c1a7b5c8.js",
    "revision": "ddef1a84ea6a5afeb12a99213611d08a"
  },
  {
    "url": "assets/js/18.4725e648.js",
    "revision": "bafbfae412b9d870402ad5cd1ccbd1dd"
  },
  {
    "url": "assets/js/19.16d25e2c.js",
    "revision": "b416e6e80b7bc694385886a374c047fd"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.dab6ea79.js",
    "revision": "626a1921953d6d4e0fcb1824ff759c65"
  },
  {
    "url": "assets/js/21.6a2e9527.js",
    "revision": "8c36c641573299361f185a34d62acf54"
  },
  {
    "url": "assets/js/22.afeb7f5e.js",
    "revision": "6c1928061aa1e7c05dcdd1919b54f46d"
  },
  {
    "url": "assets/js/23.a5e10a2c.js",
    "revision": "6233f9b50e470c9db3c23f6b471804fa"
  },
  {
    "url": "assets/js/24.7f181862.js",
    "revision": "7057039936010d339e25f79187a09036"
  },
  {
    "url": "assets/js/25.59c0c682.js",
    "revision": "d872cdc8a5855ac1840cfe3e5650ba87"
  },
  {
    "url": "assets/js/26.03485a76.js",
    "revision": "3ea488a02272d6ad6a35e3949282687a"
  },
  {
    "url": "assets/js/27.7ae11ada.js",
    "revision": "15383ce5dff492d1e82e2df0c11c5414"
  },
  {
    "url": "assets/js/28.b4147b27.js",
    "revision": "ad5988ee0f7ffb6b2fa181c2f5fb9192"
  },
  {
    "url": "assets/js/29.de57a276.js",
    "revision": "f324e03363aea24d792185aa068baf9b"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.10c6b7de.js",
    "revision": "7cbd6931faf8fd5717bdabaf8d97bbbb"
  },
  {
    "url": "assets/js/31.c33088b1.js",
    "revision": "22bc15d58d70fd8cc16cc44917c74d65"
  },
  {
    "url": "assets/js/32.01313de9.js",
    "revision": "16d88089972a4af3cae8a123efbce00f"
  },
  {
    "url": "assets/js/33.1e884fa2.js",
    "revision": "90e9317be34e01d624a3118efba4c4a1"
  },
  {
    "url": "assets/js/34.1531a58e.js",
    "revision": "22499d6054c3999d12178a371566207e"
  },
  {
    "url": "assets/js/35.ff3975ad.js",
    "revision": "cf9e1f48b3b20d680c1eae148bdd9b53"
  },
  {
    "url": "assets/js/36.de555b97.js",
    "revision": "fbe7e9c2a1956ca282587e45bf7e8516"
  },
  {
    "url": "assets/js/37.bd9d2fc5.js",
    "revision": "047a9212650a7bd08a31d3e3405207a2"
  },
  {
    "url": "assets/js/38.02304a5c.js",
    "revision": "892fd8f995e429a8e03e946c05b392ae"
  },
  {
    "url": "assets/js/39.cbe94831.js",
    "revision": "d02f1e4d7d5a99ded3ae1bf5b0f74e87"
  },
  {
    "url": "assets/js/4.261f49dd.js",
    "revision": "61abc401be16123e0bf6df278667a6b0"
  },
  {
    "url": "assets/js/40.7d184636.js",
    "revision": "bad36bdd6392c5ca34c9c7684b69d1f6"
  },
  {
    "url": "assets/js/41.c9ff91aa.js",
    "revision": "afa49799b82fd0dd8dedc9c99decdcfd"
  },
  {
    "url": "assets/js/42.4c49bcd5.js",
    "revision": "b98a4a0a805d0fbb7114db9c8299c093"
  },
  {
    "url": "assets/js/43.b8c55e00.js",
    "revision": "690bfc8ccbde72581a626348dfb324cd"
  },
  {
    "url": "assets/js/44.bca4117c.js",
    "revision": "67208f319c8813db7b292054c78e6976"
  },
  {
    "url": "assets/js/45.83ef838c.js",
    "revision": "2e8ba8814f4d2a86a65388cb18b6fae6"
  },
  {
    "url": "assets/js/46.066b5bbc.js",
    "revision": "740867a5ce4e4b2ab7e4df20618b62af"
  },
  {
    "url": "assets/js/47.1fe179ba.js",
    "revision": "afa7220d86badf4b2e553746d6fc7822"
  },
  {
    "url": "assets/js/48.6603994b.js",
    "revision": "3fabb777a06c850710f02e495dda5024"
  },
  {
    "url": "assets/js/49.6892c86d.js",
    "revision": "ec08213a0684e487a4eee21e62564129"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.1a1de07f.js",
    "revision": "c05a84a83830065aa5638bb594ea0a33"
  },
  {
    "url": "assets/js/51.8ee55eba.js",
    "revision": "9e4a3a0d9cd1e1ff467d502d71820c08"
  },
  {
    "url": "assets/js/52.7797980a.js",
    "revision": "fc86aa0c6782e99c2b2035fd0525035a"
  },
  {
    "url": "assets/js/53.e217dc9e.js",
    "revision": "279d94672e8ec62ad8c050db77c60e2f"
  },
  {
    "url": "assets/js/54.04a360c5.js",
    "revision": "98ce6db978875451f657938bb200dcfe"
  },
  {
    "url": "assets/js/55.518b97a5.js",
    "revision": "4e8ac7e0e15ad4e2af74403b94f03cdd"
  },
  {
    "url": "assets/js/56.cdd69320.js",
    "revision": "85a512e80b219a7689dd5e5d4f198cc2"
  },
  {
    "url": "assets/js/57.9334d585.js",
    "revision": "6fd2ca9b9356ef4b2a818c3e69069a64"
  },
  {
    "url": "assets/js/58.80006b6c.js",
    "revision": "61ca7c94e30e03106c4fc71bcdbec014"
  },
  {
    "url": "assets/js/59.af7069f9.js",
    "revision": "be3d0df091c5835472c7d4133eeaa4bd"
  },
  {
    "url": "assets/js/6.cfe15cbd.js",
    "revision": "1efbe5d6dfd6a2cf91a8f8983e4ae082"
  },
  {
    "url": "assets/js/60.b4830967.js",
    "revision": "225748f87dd22c0336ec64ef60865a2f"
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
    "url": "assets/js/app.2506a5fc.js",
    "revision": "c5092fb7444261dab41739bb3cb4bf77"
  },
  {
    "url": "index.html",
    "revision": "53aa4d377c7d18799730b5f278a32540"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0413de5a1566b561f1ebd0690db5e92b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "bb78dbd7736b53479e539e6ecc00db8d"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a3c598574b8b00dfe97949ac47d4a16d"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "08e33a48db4a8347aa61a89a5c95b034"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "f51fc91bb53c7aee207e851a2988d31d"
  },
  {
    "url": "memo/memo.html",
    "revision": "a6a2c91ad401b80405b5893cc0c473de"
  },
  {
    "url": "post/test.html",
    "revision": "437db7068eba7dc0222e0c760519a889"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ff48f2bb8b9260d2a63099112545766b"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "df0d7b8d59585536824edfa6a2be2bd1"
  },
  {
    "url": "study/english/words.html",
    "revision": "da32ad2c67a5b03d4a493a604d228c3f"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "30e52e2ceb2e9dba340db35c64049587"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c9ab61e83cbe5c35f0476ee6616f661b"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "0d17a72b5e822c848c71a1baed802181"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f16a4e891f74807d102dbfb5456faed4"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "993baa131285e0c09d035ddc162e7aff"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "a3ae89754b22ce5a5bbb034cc539b7a2"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "29675898a717f7a9571d0a1030b92d5d"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "3dcf4575d75f7c48b9e542eeb44ead90"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d00d4d2f766c9f4d2638c90574b0105d"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "498df74bb6c4a2d0ddbfa3e9951f2f31"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "7818ed3be2eb46a5aa82c85181bf334a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "6f8f7c5bec5850a32e183e42007eb707"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "95d4620a4268993e018eb945676bbb09"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c6977f4f1a8aac7dc404e34d97c34c86"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "27e9836c02ba0a78ccc2b1351221a494"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "b3076a3a9589fa51336af1db33ec8075"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "8c289ae31f1192f25a848f4d022e9316"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "ea08435eccabf4e128d8212622efdd33"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "df4679526f0b6079f9bacd8e9a895de4"
  },
  {
    "url": "task/2021511.html",
    "revision": "19ba2a5ad30b500ce04104785b3b3e1b"
  },
  {
    "url": "task/2021514.html",
    "revision": "b0323f624df38cd9b8a1ef5ee8a54110"
  },
  {
    "url": "task/2021515.html",
    "revision": "65ab44e4fba99e891c2fe631a7636ff1"
  },
  {
    "url": "task/2021518.html",
    "revision": "cfb61e3529456c03ef796987036668e5"
  },
  {
    "url": "task/2021519.html",
    "revision": "cc0099476de176ebb23492b95645c874"
  },
  {
    "url": "task/2021520.html",
    "revision": "6488153bb78e04262c25f643c98b6860"
  },
  {
    "url": "task/2021521.html",
    "revision": "3b8e6672b9e2c1f4d139bea43befbc1f"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "86b9e43897e16d5d33144014d3e99c4c"
  },
  {
    "url": "task/2021524.html",
    "revision": "2579b3b5882116d52c194be7c8c099c1"
  },
  {
    "url": "task/2021531.html",
    "revision": "e35c7272bf9f3164f9596c9f458428f1"
  },
  {
    "url": "task/2021628.html",
    "revision": "878d426f3f29d684ee2f30d2ecf831f8"
  },
  {
    "url": "task/202164.html",
    "revision": "1cf1e7eb75e5f0c561b80ffa786a5e38"
  },
  {
    "url": "task/202169.html",
    "revision": "9e95e62abcc67e1bbfc6854b26fff04a"
  },
  {
    "url": "task/2021717.html",
    "revision": "8dde3f5cd9207569fed4310503bdc41b"
  },
  {
    "url": "task/2021721.html",
    "revision": "1c3861dc5e108d311910c8528ba278b0"
  },
  {
    "url": "task/2021722.html",
    "revision": "de2b01665c25a8e7692c9f0c995de314"
  },
  {
    "url": "task/2021724.html",
    "revision": "172e8987a351f3e1509c57cbfceb0d29"
  },
  {
    "url": "task/2021725.html",
    "revision": "236de900eab31a4e4cb0e943f2748616"
  },
  {
    "url": "task/202181.html",
    "revision": "afe404575daa52053e4a3d09b80b94e0"
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
