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
    "revision": "362a897435e640efb9ab1d6d5aa2d168"
  },
  {
    "url": "assets/css/0.styles.c87a0785.css",
    "revision": "c375c8a7f24c5f059981f1a47354125b"
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
    "url": "assets/js/15.49973f84.js",
    "revision": "4b7094beff7e445f241cf5eb3f631823"
  },
  {
    "url": "assets/js/16.acc76aee.js",
    "revision": "eb1065ef9ef4fe3d006082330457796a"
  },
  {
    "url": "assets/js/17.248ce3a9.js",
    "revision": "a28f13b97bab01ac58593c48fc08d6aa"
  },
  {
    "url": "assets/js/18.99fe66f2.js",
    "revision": "c8da482c70dab245b1135f004419e576"
  },
  {
    "url": "assets/js/19.683cf9b0.js",
    "revision": "6832f3ed30535a7d0cc132b4c417a5d8"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.b94a884b.js",
    "revision": "b686ad44117a12b1abbd648e4f1c7069"
  },
  {
    "url": "assets/js/21.6ac07d82.js",
    "revision": "cfb87534323320ccc082e7461cb62d9c"
  },
  {
    "url": "assets/js/22.49cefd48.js",
    "revision": "b72d3a53f16d38c537331cce22c0ad20"
  },
  {
    "url": "assets/js/23.bd8c0be9.js",
    "revision": "09caba207d99810e8bda592a9bc8e762"
  },
  {
    "url": "assets/js/24.7aecb6fd.js",
    "revision": "49e9408dd05fae8c99f65f301f6b5662"
  },
  {
    "url": "assets/js/25.703e7a1a.js",
    "revision": "a5f18ac656898c32754a4027d2e2aef2"
  },
  {
    "url": "assets/js/26.566a9df1.js",
    "revision": "7121ac69bbb1a196c99b2826b067d26a"
  },
  {
    "url": "assets/js/27.61ab7fd3.js",
    "revision": "d8f05166f9adb04caf679480f3f61b64"
  },
  {
    "url": "assets/js/28.86a732fd.js",
    "revision": "b212be774a9bd4c078f8f1e42649a993"
  },
  {
    "url": "assets/js/29.cf89f13a.js",
    "revision": "3e482481850e9707ae67283ace371a8a"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.40466771.js",
    "revision": "64d933213cbb07a3faeb28b3989633d0"
  },
  {
    "url": "assets/js/31.69056ce4.js",
    "revision": "04f2c5e14924560f25bd61d31aa347f3"
  },
  {
    "url": "assets/js/32.63a3ffe7.js",
    "revision": "b5add937bb9095666299e180df07a936"
  },
  {
    "url": "assets/js/33.24a31add.js",
    "revision": "8c26397766265e8083c57b5d7e9f86f4"
  },
  {
    "url": "assets/js/34.8743ef32.js",
    "revision": "4c348ef7cc92ee442a797ee6fba73fa7"
  },
  {
    "url": "assets/js/35.f6f492fa.js",
    "revision": "22dcf4c21db5c444674f90301304ebb1"
  },
  {
    "url": "assets/js/36.2714094a.js",
    "revision": "7ad9883c12c766e39795f7c232f81c6d"
  },
  {
    "url": "assets/js/37.d58ab974.js",
    "revision": "58741d5bb2d3fa236b29d216ab233dfd"
  },
  {
    "url": "assets/js/38.50e0e56c.js",
    "revision": "0a49d984ac209217a3c0317ba738cd0f"
  },
  {
    "url": "assets/js/39.2d62b2f3.js",
    "revision": "4acb0db82f1e6f0342e607dfec26b8a6"
  },
  {
    "url": "assets/js/4.4594c12a.js",
    "revision": "925211e4dccdd7111e3cfa3f6782ab22"
  },
  {
    "url": "assets/js/40.3d8795a3.js",
    "revision": "2ed8bdc11af347b5e4e413215ba876bf"
  },
  {
    "url": "assets/js/41.de9a985c.js",
    "revision": "e249024301b9c3faad806df246bd3b22"
  },
  {
    "url": "assets/js/42.f849bf84.js",
    "revision": "447ffeeac4f03663c17e81558a8aa402"
  },
  {
    "url": "assets/js/43.e3ad5325.js",
    "revision": "93f6b2b3cfde7fc30fab7efea476e934"
  },
  {
    "url": "assets/js/44.36be9525.js",
    "revision": "322f872ded475573dd7de5363a1c4128"
  },
  {
    "url": "assets/js/45.24900554.js",
    "revision": "733d022bb6ffcdb1af8dff65c2769ad7"
  },
  {
    "url": "assets/js/46.8bd13225.js",
    "revision": "d5c4473fe37d06103c546d8c3dbea31e"
  },
  {
    "url": "assets/js/47.dc0a9358.js",
    "revision": "7b4d2b0121446d094b6658504aaae83e"
  },
  {
    "url": "assets/js/48.b75ac7aa.js",
    "revision": "2546acbca27f46930acd94a90946f6fe"
  },
  {
    "url": "assets/js/49.c9ba780f.js",
    "revision": "3e0132881407eeaca73cf338b27a4c15"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.3247bafe.js",
    "revision": "e2507fd09c54d2c3dc84ddd5d86eca02"
  },
  {
    "url": "assets/js/51.ed8e607d.js",
    "revision": "11458a22719ba21b87e6fc6dbba6227f"
  },
  {
    "url": "assets/js/52.28e640e8.js",
    "revision": "87646317861739f25e50fc4768173ef6"
  },
  {
    "url": "assets/js/53.4215e40f.js",
    "revision": "8b6046045ebe3b75eb2e7ab508352e97"
  },
  {
    "url": "assets/js/54.c30e2852.js",
    "revision": "bc4cbfaad98dbdb7a22fd07c401197c0"
  },
  {
    "url": "assets/js/55.ed849ad8.js",
    "revision": "cb9b2396540bef54081706939174fba5"
  },
  {
    "url": "assets/js/56.54e4386c.js",
    "revision": "f50be3264fbd54f52a9c23f38c6ee1c9"
  },
  {
    "url": "assets/js/6.6acef613.js",
    "revision": "b4628316291cdb547bbf1ff408b83ddf"
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
    "url": "assets/js/app.4f0539e7.js",
    "revision": "32593f47cb28950c80550b1a6bf37c6f"
  },
  {
    "url": "index.html",
    "revision": "597318d1839322bd84d5347fa9cf7268"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "b3baf4e0fd373839b34dfc5982383b9b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "6c13794f35e4d5d19c058f7ab0c1573e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "053cea4bcfc1efd884bc6424a7e0f3f3"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "24106895ff8706f2cae5591a32a7afbd"
  },
  {
    "url": "memo/memo.html",
    "revision": "baa93c7fef7ad0d97185098aea97a0a1"
  },
  {
    "url": "post/test.html",
    "revision": "f121561421f3ac7a2855246346a4002d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "1c57779647fe83b423daac066e8b1a72"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "df5a377303192736697e0c4fe6ef040a"
  },
  {
    "url": "study/english/words.html",
    "revision": "7cfcf68cbce9ad5186ba85218cfa2856"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "3a72f9fa540b5e66b6b00d7b539985c1"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "42ef2a206391ac5959b26d3a81c20912"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "38ab8ea5b724078ee687c6a11fc9dfa3"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "eae2dd265aefc69c8448149e1048cd3b"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "dec075aae01a9726dbba24fbf1344c34"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "3593e65e6b361f61092730345eceb213"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "9f6472fe6aa00e0b5e77b9a7bb44f285"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f710f85319fb57831d91839e58ec51df"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "437b20fdc8d6374e78c5d5d563515eed"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "838ca7236446bf0f0896f163e4d811c8"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "9ac3f69fcf8473a640fbde48b8fce98c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "a3a9a16ebf4a76e25ca9109f9b16040d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6abd4f56d9268c236f92b0efc0343481"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "78bb1f07cd4b573ca1c9220b3ad17e1c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "4412de9ecf2571354f5acf35c9684585"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "966aa36ece693aab0e891594bee807a2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "33b6c38a95519ed996cb9ac66fe73347"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "518cd1233b93f83a50f4500731dfb8c6"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2dad140206369b3468f8c34aa63f515c"
  },
  {
    "url": "task/2021511.html",
    "revision": "71b838d6b96c168fa1077783b29b2c8c"
  },
  {
    "url": "task/2021514.html",
    "revision": "90cfb4c230ff1eb1755c5d0420aa1e8f"
  },
  {
    "url": "task/2021515.html",
    "revision": "f34001be654bbb5f48b903a653fc1503"
  },
  {
    "url": "task/2021518.html",
    "revision": "ec60e4afbe40aaf2a8900ce90ed16757"
  },
  {
    "url": "task/2021519.html",
    "revision": "6fa5c09951aca631389e6ea5365df131"
  },
  {
    "url": "task/2021520.html",
    "revision": "e90f8fe838ef7bc2c0ec28e13a054d17"
  },
  {
    "url": "task/2021521.html",
    "revision": "3b8f7b086a380ce612d7e5a2cb67bf3a"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8256442f7f2c0b5fb80efda5f7a1b3e7"
  },
  {
    "url": "task/2021524.html",
    "revision": "cf1c293fdf6ff348f982245297f95bc5"
  },
  {
    "url": "task/2021531.html",
    "revision": "e74347c00738923b23ae1a18cb0f0bae"
  },
  {
    "url": "task/2021628.html",
    "revision": "94aeace5a7b3f05562184ee56a1c1fa3"
  },
  {
    "url": "task/202164.html",
    "revision": "c8615e9afec24d10ae4fab3ba29cebcd"
  },
  {
    "url": "task/202169.html",
    "revision": "d82d94b1f37c3e80b3c9a04065e5bef2"
  },
  {
    "url": "task/2021717.html",
    "revision": "8be5b0cce0bb93127201c946897dcc43"
  },
  {
    "url": "task/2021721.html",
    "revision": "a420c333e0cdef2ed88bfb785b0ad970"
  },
  {
    "url": "task/2021722.html",
    "revision": "a95ebe068ed25cbf2c9ed94711e5f831"
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
