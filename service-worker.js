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
    "revision": "40d7edfdd2bdf8ee926a0d022e03ff71"
  },
  {
    "url": "assets/css/0.styles.cf1688a7.css",
    "revision": "0c71f4531f35bf995cb9e2fd5b0ea9bf"
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
    "url": "assets/js/18.a2f8d7b3.js",
    "revision": "100bff77f54e4ad68d99825db4a7e7dc"
  },
  {
    "url": "assets/js/19.b7a2ae4f.js",
    "revision": "ddc5b22d4c399cc048b5461822187824"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.7a391f59.js",
    "revision": "f1307b3a9e38c5f0b4f4b92a7c79a8b1"
  },
  {
    "url": "assets/js/21.5a1c18e7.js",
    "revision": "a86c08360ed39f722d700af9de9b740b"
  },
  {
    "url": "assets/js/22.6fd386ea.js",
    "revision": "c7c181d00d57472d65a077f8a6927ab3"
  },
  {
    "url": "assets/js/23.471a0177.js",
    "revision": "c36bb71d49a01cdacb85c749476658d1"
  },
  {
    "url": "assets/js/24.074c1d33.js",
    "revision": "f6c1a568352ce1f36e3ddb25ada570b9"
  },
  {
    "url": "assets/js/25.f75fabe9.js",
    "revision": "4fc9f373b0b3c9a857191fa8cf04f960"
  },
  {
    "url": "assets/js/26.36dedea2.js",
    "revision": "0c839d2c8317de4bde91d52692b66855"
  },
  {
    "url": "assets/js/27.be8d687f.js",
    "revision": "ebbfb3f1f37f1d84ac83a6fbfb761f98"
  },
  {
    "url": "assets/js/28.6814169b.js",
    "revision": "f84b5657d37d7f95e4f7dcf1f2915868"
  },
  {
    "url": "assets/js/29.3c1bb3f0.js",
    "revision": "e4074262ed90974e2169753a8482d3a4"
  },
  {
    "url": "assets/js/3.445cc3bc.js",
    "revision": "34cd572f6be615b591a4947d1e7e4740"
  },
  {
    "url": "assets/js/30.e54bcda8.js",
    "revision": "3a5550ccfb28780371bd2a40fe4480a7"
  },
  {
    "url": "assets/js/31.83b66cce.js",
    "revision": "34af49bfa85852c77972c964a6fc5e31"
  },
  {
    "url": "assets/js/32.0ca9b7eb.js",
    "revision": "b2216d981c6ba6607860ae630a9237a0"
  },
  {
    "url": "assets/js/33.f23b7bbc.js",
    "revision": "d8bff071cab3f37832770cfb9f492b09"
  },
  {
    "url": "assets/js/34.02a66125.js",
    "revision": "fc0d2ca3ef562aee3a3c7a4664d0174e"
  },
  {
    "url": "assets/js/35.21d225ae.js",
    "revision": "88b3d7f2c186b6409024003800aaed07"
  },
  {
    "url": "assets/js/36.8c488b34.js",
    "revision": "264b1b6b5d9219c6bea9ec6b1da073ae"
  },
  {
    "url": "assets/js/37.3bee9f98.js",
    "revision": "085c43a26c47a9249f0171b2911eb8ec"
  },
  {
    "url": "assets/js/38.162c14ad.js",
    "revision": "c92074fbeaec615f58b4a594ff3ffe4f"
  },
  {
    "url": "assets/js/39.1fbbf9da.js",
    "revision": "33c3ae307fc7983d45a42ebe003ebcc0"
  },
  {
    "url": "assets/js/4.c13e80ae.js",
    "revision": "ee5f2ae277e851efeafb2147b4ded0d3"
  },
  {
    "url": "assets/js/40.d68ffe34.js",
    "revision": "5665fe161a4dd1669c62748319dde002"
  },
  {
    "url": "assets/js/41.821d9bab.js",
    "revision": "6601b7017c14ffe0fcc969095b26ff8d"
  },
  {
    "url": "assets/js/42.38371456.js",
    "revision": "3097c9ec4c93631062a7544613f67a19"
  },
  {
    "url": "assets/js/43.9ccc25d1.js",
    "revision": "52759a0848a12caecaff520b0d528598"
  },
  {
    "url": "assets/js/44.0c7ee655.js",
    "revision": "30f00ec4ce22156d8efc92d76021ed4a"
  },
  {
    "url": "assets/js/45.2d4c5df7.js",
    "revision": "9d13d2c44ab77edb2cc2f1511759763e"
  },
  {
    "url": "assets/js/46.98639e52.js",
    "revision": "a2aeac7ed2f23f177626c65ef4e62fc1"
  },
  {
    "url": "assets/js/47.c7684671.js",
    "revision": "574096fb221e82d521ad91fe6a2f3cd7"
  },
  {
    "url": "assets/js/48.d4c7e224.js",
    "revision": "aac44acc8bea22fe29ed7ac6a65153f6"
  },
  {
    "url": "assets/js/49.7efad510.js",
    "revision": "00ec24af46e7cbaf9330815fc66ab0ab"
  },
  {
    "url": "assets/js/5.2e4923c4.js",
    "revision": "24180da4a5d4769a57d5685445ea2455"
  },
  {
    "url": "assets/js/50.6a678db6.js",
    "revision": "f169855626d2aa8de974b5f1fc075f95"
  },
  {
    "url": "assets/js/51.ed67d42b.js",
    "revision": "be9057a72defec6eef3607a9fb02b9af"
  },
  {
    "url": "assets/js/52.299c8fac.js",
    "revision": "edb3b6f9e234536a6501b9005fe91591"
  },
  {
    "url": "assets/js/53.d6a1c427.js",
    "revision": "fd8a897282333680a759cfdda1ec53a1"
  },
  {
    "url": "assets/js/54.05945996.js",
    "revision": "3eb857d1da0868fbaefca862771ca3b5"
  },
  {
    "url": "assets/js/55.13c28209.js",
    "revision": "5063c3bc894ba23dd9a9640a15820805"
  },
  {
    "url": "assets/js/56.271d2a24.js",
    "revision": "ec12b5830562f1b5c7b038e0e2b88022"
  },
  {
    "url": "assets/js/57.2a85ba5d.js",
    "revision": "a00a7fbf8d14a39908894d8b8e27ca56"
  },
  {
    "url": "assets/js/58.e45824ee.js",
    "revision": "38d5c423af1ebb71881dd940f4a9c27c"
  },
  {
    "url": "assets/js/59.d2e44224.js",
    "revision": "82bd93366d02150170cbb7ea35ec09af"
  },
  {
    "url": "assets/js/6.06f53c15.js",
    "revision": "007acd36f4f324b469b0fca856142a96"
  },
  {
    "url": "assets/js/60.8e723601.js",
    "revision": "97ebed3552b3f9b8f3a7ba824fee1a38"
  },
  {
    "url": "assets/js/61.7d7c3fe4.js",
    "revision": "0351b7a960cca1dcaeec3cd973d49596"
  },
  {
    "url": "assets/js/62.1e22a4c0.js",
    "revision": "88d1d215bacbdc48552ce095ec3f4a51"
  },
  {
    "url": "assets/js/63.695595a7.js",
    "revision": "11f3c3138d96b17ff2813f1f40976dff"
  },
  {
    "url": "assets/js/64.ee60bb2d.js",
    "revision": "bbb557de2b8df52aa1ccd6dde3a48481"
  },
  {
    "url": "assets/js/65.3b3acda2.js",
    "revision": "e52d6f93efa4c7c72ce33c46af3861d7"
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
    "url": "assets/js/app.a3ce94a8.js",
    "revision": "7acd9a6070e98d3216748dc3c9516234"
  },
  {
    "url": "index.html",
    "revision": "d3e4adb511feb766fbeade89e82b3280"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "29a8089bc53967594c141d3b2ae9008b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "88bad80a98e267631bf272c325ef9114"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "718b3d169384768b7000938e3302936e"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "b4c978b03a4b5ba9a65ad56f67ed2a8e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "44906b1aa1416d9501dc4a8c1dfaa19e"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "8ab4ef6bcbc98a7fc5b1f4470d34f4ed"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "93375c04aede358dc984e1705112134d"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "8ca3f5062a7032fa475b6f273b64361f"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "99dec168fc849b39e624b250980f6c39"
  },
  {
    "url": "memo/memo.html",
    "revision": "44e38587853557dd5f3e3fd33a3a1b98"
  },
  {
    "url": "post/test.html",
    "revision": "c6968596a90026ad6f48d929d146c35b"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "09ee330ad77dc0df807b8a2ef5d0afb9"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "21b0040971196c4066d67bead3cfb98d"
  },
  {
    "url": "study/english/words.html",
    "revision": "5f7abecb68143868d4956d1f68bc7d28"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d664ff2c473646a6755be02ba08ea725"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "99c7907704e6f2a1cad9635ca37ff176"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "1b78dfeb2297576558c29dedf7b9c1c3"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "fcb889376487c996bdbe290302921283"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "74debe7a3194bf2ac461e38ac14469ac"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "494c61feeefa16e632a0feb5afddba12"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "936908537a1b84238f56ceccfe642fee"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b1410c6b0af95f2d51d4ff65787ebd93"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "3515595db2217aba709a2ce9a2068586"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "d3b8ed401e990fd6040811fc7a993245"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "35716cbfef3e6005e1eef89f9f04618c"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "476e1a7e234d66931dcc7340999ef9cc"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "cdbc45dacfdce370931cd43702c611b8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "cab101911dd9e001bb56667490af2daf"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "faeb9f052df2bc3e72538f2efe2fae22"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0af14a76da58464e73240dbe7887d0f0"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "20b9bce0adf2e6baa11562854deb74bb"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "37ff6aa52a343785c1fdec4ee8898eac"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "c556b40d06e1ae24cdb3f26855e71728"
  },
  {
    "url": "task/2021511.html",
    "revision": "f6f1abedd51f0991af2e2708e0a4d763"
  },
  {
    "url": "task/2021514.html",
    "revision": "960555eb74d019c2f0216c63bb9035cb"
  },
  {
    "url": "task/2021515.html",
    "revision": "519ea6ef521e30f4c36e4d5a3b6421ce"
  },
  {
    "url": "task/2021518.html",
    "revision": "8878be371a66c58f1c04b9b61d1c06c8"
  },
  {
    "url": "task/2021519.html",
    "revision": "5b6f038e89f545c3654444ce837adafa"
  },
  {
    "url": "task/2021520.html",
    "revision": "a4af39f5184e0f4d79b48fb5fa676122"
  },
  {
    "url": "task/2021521.html",
    "revision": "815ce709d13f6b4482b0551144db1205"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e68957281ff4408ee095c6f10a923606"
  },
  {
    "url": "task/2021524.html",
    "revision": "b9ae1a40ffe24c7e7fbf6aaf51315ff8"
  },
  {
    "url": "task/2021531.html",
    "revision": "af64f645a0e5d5cb2a9ac3a48d08f081"
  },
  {
    "url": "task/2021628.html",
    "revision": "129d77b28e672501ad523eb1eff38e3d"
  },
  {
    "url": "task/202164.html",
    "revision": "869d066c135bf25b2515f4851a04ee9e"
  },
  {
    "url": "task/202169.html",
    "revision": "f192e1c60c7eaed7314f7df54faf9099"
  },
  {
    "url": "task/2021717.html",
    "revision": "4d6d8bdb7cc0e9c3eaa5739871d10848"
  },
  {
    "url": "task/2021721.html",
    "revision": "13482cb2a0bb7d99de9259173d0bc9e6"
  },
  {
    "url": "task/2021722.html",
    "revision": "86079141c86e328a73087d1810e93dd5"
  },
  {
    "url": "task/2021724.html",
    "revision": "85c3cad5bef0b17b0296f81e0c9c7195"
  },
  {
    "url": "task/2021725.html",
    "revision": "1a699994ebf265d9fed6e837a3f6358c"
  },
  {
    "url": "task/202181.html",
    "revision": "272e5f310969213921bc252d781aab8b"
  },
  {
    "url": "task/202183.html",
    "revision": "e141f964d4e0f1f5191e8f2cdca618d9"
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
