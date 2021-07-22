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
    "revision": "46862442ef34e5dde51be9ca2aa2f0fd"
  },
  {
    "url": "assets/css/0.styles.9b1a8771.css",
    "revision": "c0252a718ed0babf466ad7e32e459a5e"
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
    "url": "assets/js/14.7075fe31.js",
    "revision": "3aeb453a1e02b869dc8a91e619ec0d93"
  },
  {
    "url": "assets/js/15.4099145d.js",
    "revision": "708ce60cdada963af57d841e3f79030a"
  },
  {
    "url": "assets/js/16.e1d2d5b4.js",
    "revision": "329027fbf3045e864c0cad5b371dd1f3"
  },
  {
    "url": "assets/js/17.26d8cb13.js",
    "revision": "54484848734bad9fe26cf3930a27318b"
  },
  {
    "url": "assets/js/18.53a466f3.js",
    "revision": "c175b5f4438eb7f8037cc6211fc58905"
  },
  {
    "url": "assets/js/19.f46b6b1c.js",
    "revision": "abc66d056b15d5a2f3d9025ee65d0307"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.d16b562a.js",
    "revision": "b1c8ddbfb65cb4fb669282bb8964cbb5"
  },
  {
    "url": "assets/js/21.8bc85581.js",
    "revision": "f79540e538acc5a46e7b51a56fcbd2b4"
  },
  {
    "url": "assets/js/22.9b857365.js",
    "revision": "afad6ad753d74b99cbb432c0fed2e2b8"
  },
  {
    "url": "assets/js/23.b46e74f5.js",
    "revision": "d2bab83afeea685ab86503b24860e880"
  },
  {
    "url": "assets/js/24.2be024e4.js",
    "revision": "c3ec1948c5875f955dc979d40dbeaa7a"
  },
  {
    "url": "assets/js/25.91b8666f.js",
    "revision": "36e7f9e656f39bc189b0f95207eddc0c"
  },
  {
    "url": "assets/js/26.2706255c.js",
    "revision": "1499456a6b8ea15cf5701bbe3f5fdeda"
  },
  {
    "url": "assets/js/27.e932805b.js",
    "revision": "9eea12be714af1a9bf6cad8d0b7b99ad"
  },
  {
    "url": "assets/js/28.94dcaadd.js",
    "revision": "29ab265e723e79fa590d2e6fa059567d"
  },
  {
    "url": "assets/js/29.801f2619.js",
    "revision": "5b81e7311b431fd0ff17e43c1569e34b"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.4d88e62f.js",
    "revision": "dc50d3b6c1800a1fed6bebd6df3b003f"
  },
  {
    "url": "assets/js/31.8d9686d4.js",
    "revision": "4726f735d0895516a26d0e950bb86d4c"
  },
  {
    "url": "assets/js/32.6287a1f0.js",
    "revision": "e4a29ad8811def2635eff26cf18c6491"
  },
  {
    "url": "assets/js/33.73337da4.js",
    "revision": "acaa2473ce498d8917f3cf85ec17be8d"
  },
  {
    "url": "assets/js/34.60607bda.js",
    "revision": "f4610dc351f32c4b8741a9011a798da0"
  },
  {
    "url": "assets/js/35.f84cfcfc.js",
    "revision": "56543368cee4d8909438e4e5a800f977"
  },
  {
    "url": "assets/js/36.a3474820.js",
    "revision": "260bcd952f827b23cd52d292e3d3e276"
  },
  {
    "url": "assets/js/37.910f4efb.js",
    "revision": "52f3b28674a7d03b018e456f6ae5f47e"
  },
  {
    "url": "assets/js/38.9e8f4b91.js",
    "revision": "716c304268b6b9ffee19a259aa76167c"
  },
  {
    "url": "assets/js/39.897618be.js",
    "revision": "94768bbab6e8a631ab80d64ed696c3b9"
  },
  {
    "url": "assets/js/4.71f90130.js",
    "revision": "dc4f216e1d6946135d68c97481da7aee"
  },
  {
    "url": "assets/js/40.d53e3bcf.js",
    "revision": "47c3c1e5e5dfbe2871b3f9e1729916db"
  },
  {
    "url": "assets/js/41.d34c085f.js",
    "revision": "0df4434f22ac45e91cccc6af3926743e"
  },
  {
    "url": "assets/js/42.af327709.js",
    "revision": "c51a42a6d32757448a624ace908dbaf0"
  },
  {
    "url": "assets/js/43.b8ba740a.js",
    "revision": "cd72ec3376d15362210812ed5943e202"
  },
  {
    "url": "assets/js/44.a607a90a.js",
    "revision": "73108bd5aa683b1f793df32f215c9e8a"
  },
  {
    "url": "assets/js/45.0738baec.js",
    "revision": "309fa3db1ea372f96f07c63cfc9be633"
  },
  {
    "url": "assets/js/46.207e08be.js",
    "revision": "ec8cbded7fd7a774208301df32b221de"
  },
  {
    "url": "assets/js/47.532728fd.js",
    "revision": "e5bf67853ec38ac88a48740a88715930"
  },
  {
    "url": "assets/js/48.ded3bfe6.js",
    "revision": "018071b29178b0688082d6be259a0f52"
  },
  {
    "url": "assets/js/49.73f62ec1.js",
    "revision": "57879cc2bf5b695665db90b6376f0d03"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.60493795.js",
    "revision": "83bd6fdd8cc40137544d0aa6379f3c42"
  },
  {
    "url": "assets/js/51.7609a709.js",
    "revision": "14a1277d230ba017321c8d1b36f1cffc"
  },
  {
    "url": "assets/js/52.2dfaab4f.js",
    "revision": "65040af99423eaf9cc75fcc09f2f170b"
  },
  {
    "url": "assets/js/53.f2096b12.js",
    "revision": "f84feeedd54ec4143a8f39aaa362675c"
  },
  {
    "url": "assets/js/54.2f29feca.js",
    "revision": "b766844c9bdcccb6a7f902d8cd82654b"
  },
  {
    "url": "assets/js/6.3afdcfa5.js",
    "revision": "b7cbcac2c133d05ee755d1f2a8c33835"
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
    "url": "assets/js/app.396a356a.js",
    "revision": "6450ed50b32d7ce6dfbe2645a32b5318"
  },
  {
    "url": "index.html",
    "revision": "59eab658d64db80c1985ad3de7c5140b"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "dfd4ebd88c2f39984fec32603853ad96"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "fb71d7fdf96c008f584297560aa84f3d"
  },
  {
    "url": "memo/memo.html",
    "revision": "cb4286ca6b3d457699d31c9161037f69"
  },
  {
    "url": "post/test.html",
    "revision": "b290fa4bb0c9091fb34899406aa54869"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "2b49c532a722c5626b6c144c1bd56600"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "082ccd0d15132b48f3a72944d14e77f8"
  },
  {
    "url": "study/english/words.html",
    "revision": "98af20f4be4be5cbb7d5e090c2294128"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "dec147225ca4e5c846ceaef485621a6d"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6fc8f826df8a180d6bcb9dec1e4dc985"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "44f9e7c7cda0435f474d88665d410c43"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "4e69e344a90c37a94c4f331f0bb1139e"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "43ce41ceab892f21a7f8f977a7bcca36"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "c96744b0bea9cd604f1f49b82399f37c"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "fda1df0f5b9eb6c60baef1e51343ebca"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "0468f9951eb21b7b86dda702eabf2359"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "72db8b0b6678dabe4887c21ab796f56a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "f92d95a77186c4c6d1010b6923a2a138"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "c464845d284252d85a117de9760a6b24"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "046f387b0d83f1184c9c9514ff63d012"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "db483e78e48977e573f93d2379f13881"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "998c67c3e41a9b07a87bdd9406176e47"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "157143c2251c28f1a8c69b349101b78c"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "1834a6c3437c809533a09e8081b9261f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "e651226a04e1b5f02d38cbb7210b74c0"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b15b245dc1ea42bf266e606716c08269"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "866719e3aac6183642c2019050cb816f"
  },
  {
    "url": "task/2021511.html",
    "revision": "2d30918950aec178be5eebdef062cf37"
  },
  {
    "url": "task/2021514.html",
    "revision": "59e2c7df80b60cf59902f3c851c4c9b9"
  },
  {
    "url": "task/2021515.html",
    "revision": "15165f95d988758f14a980d1de9b3523"
  },
  {
    "url": "task/2021518.html",
    "revision": "1d8c2306aa4a64f002e92faa24747712"
  },
  {
    "url": "task/2021519.html",
    "revision": "0ba50d5cd0455537b715deac182ae949"
  },
  {
    "url": "task/2021520.html",
    "revision": "256246ee443c440ed3dbee080718ffde"
  },
  {
    "url": "task/2021521.html",
    "revision": "3fb4d17595769fc32a20c68e18a4f9b0"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "cfac9637ec3ae64812a5cb03955bffbe"
  },
  {
    "url": "task/2021524.html",
    "revision": "da970acdc770bc39ab0b1aeb1a972d90"
  },
  {
    "url": "task/2021531.html",
    "revision": "0ec8792ad9f0b0cbd9d4b43e096009f8"
  },
  {
    "url": "task/2021628.html",
    "revision": "dfde82e119987a98fa261e1c1c5ed1a5"
  },
  {
    "url": "task/202164.html",
    "revision": "385dc9c599d702266b06b8af92c75ed1"
  },
  {
    "url": "task/202169.html",
    "revision": "65392be3649c86e5242d4788b32dd642"
  },
  {
    "url": "task/2021717.html",
    "revision": "2e8ebbb0fe380ca142b6a6d334bccf68"
  },
  {
    "url": "task/2021721.html",
    "revision": "71bc503c28dd903c5a6297c8683a3f3e"
  },
  {
    "url": "task/2021722.html",
    "revision": "39ef7c3936b1f65490174df494ddfcf0"
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
