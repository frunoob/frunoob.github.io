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
    "revision": "0da914dcb7df67852c86831bcbb42eb6"
  },
  {
    "url": "assets/css/0.styles.f7618250.css",
    "revision": "8c4b4873d0fac5601adeb278ed565ddd"
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
    "url": "assets/js/4.6131bd23.js",
    "revision": "857793c201b0917d73402b88aca0bcaf"
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
    "url": "assets/js/6.d186b650.js",
    "revision": "00d7f9d7b490b86df5d012ede45e6a23"
  },
  {
    "url": "assets/js/60.74313fbd.js",
    "revision": "c3945a716b466d6ca6b9c802a87c7960"
  },
  {
    "url": "assets/js/61.0913e5ab.js",
    "revision": "faef4862f940f6f97b50a93ef6aa24c0"
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
    "url": "assets/js/app.ea04fa32.js",
    "revision": "1b4c7fa2d2a5b7bdd7ef0a2403a71619"
  },
  {
    "url": "index.html",
    "revision": "cdea061c77572af894d40ce9a3ab382f"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "2c6d7baae62ebec50c4e29073674e879"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "70c0755ed1786edd6a018332be16c896"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "d6d74c9ff9219e635a0fb6f7a9a313e0"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "b4fc2a2d4ea76ac41bf5bf5025ad7c45"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "81c8f7734ef2792fa009baca18da804a"
  },
  {
    "url": "memo/memo.html",
    "revision": "25c8790b5dd830c3a04855cb7b55cdfc"
  },
  {
    "url": "post/test.html",
    "revision": "d1eb57bc025da9e00965cef548375153"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "ae03312781d50bc0daa33cf088f82264"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1a6e675428f3a28ba7b5a66b6f6e708b"
  },
  {
    "url": "study/english/words.html",
    "revision": "895484b342d017b6b33e0921c1338a4d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "f46e6ed040406fc055480844c994baeb"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "9193da2f691c05f7867d40bc059a9dbd"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "303c5c0d8ddefc0ee8d4f5790af48532"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "252abafb5c860bf3347d37e65aa5fe75"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "6d076c1eb6ac62c1e462aa1fded350af"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "407c46dbe0230634ec6de856e0e3883f"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7452f05d1246eba7406d2628b3a6a53f"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "da495cb9427e103e690506723910da7a"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "4301a4099f8894cca061450fb393afdc"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "fb0d75b21595520b4c0c66b4dedc44dc"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "55b0649c27d11243305be26af409c19a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "836c7e22bd8c59dbe397e4ada72c119f"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "1f07b8c70b1f43af00635ac5aa4b6585"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "4839f73f9c55694e53ab54c77b510d2c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "ea2a44a84b4cab53c03481f7aa54fd09"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "1d8519ce43cbbdf2eaea5822554f8a9c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "cefa5b50174141777cd4deda302f7c18"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "a89a35e7393938860b845634d1386492"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a5ef59a44e1b5dfd7a610cf7580f6a3d"
  },
  {
    "url": "task/2021511.html",
    "revision": "95a467a8b9411f6e6c5f7404c0ffb8c5"
  },
  {
    "url": "task/2021514.html",
    "revision": "a4aab5648e2721c82ba594ccc8532a3f"
  },
  {
    "url": "task/2021515.html",
    "revision": "eae969dd6591beb667e7327c8ceacd72"
  },
  {
    "url": "task/2021518.html",
    "revision": "9be50992f5cc71d124d6a8301f44b0f9"
  },
  {
    "url": "task/2021519.html",
    "revision": "f4745f8f0ba96c7560108ce349d8fb70"
  },
  {
    "url": "task/2021520.html",
    "revision": "fa28ff1cc0f5eafbd9e390dcd82d99df"
  },
  {
    "url": "task/2021521.html",
    "revision": "01179480fae3ce0b740f018710b19fa5"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "a10d45efbfe34556d51712359e0a75f9"
  },
  {
    "url": "task/2021524.html",
    "revision": "58301570dc0a1485ae49d312d55bdef2"
  },
  {
    "url": "task/2021531.html",
    "revision": "c5771d070c7ea3b963c99995d3f0e0ff"
  },
  {
    "url": "task/2021628.html",
    "revision": "caf2a584a6be23e786dca0ce65dad479"
  },
  {
    "url": "task/202164.html",
    "revision": "d8b7d680339c85268be545e9f77ddc94"
  },
  {
    "url": "task/202169.html",
    "revision": "9fef530024186a11608ec5abd4ff66ee"
  },
  {
    "url": "task/2021717.html",
    "revision": "2996b45b0ca6db1bf765e3328e99619b"
  },
  {
    "url": "task/2021721.html",
    "revision": "a85874cb49773eac63e1e9afd7118dbe"
  },
  {
    "url": "task/2021722.html",
    "revision": "bec8c85e2eb971eb2547eb6956cec69a"
  },
  {
    "url": "task/2021724.html",
    "revision": "53286c1c95af9b7715da0620b0321852"
  },
  {
    "url": "task/2021725.html",
    "revision": "097f6a1d891e455d78b33662fbd953c0"
  },
  {
    "url": "task/202181.html",
    "revision": "0cc593b5e35befa2a038f0cdc9ee60a4"
  },
  {
    "url": "task/202183.html",
    "revision": "7dc0f49f38546ff79b526113f819b03d"
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
