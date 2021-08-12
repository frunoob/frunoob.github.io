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
    "revision": "fdedf8abd15ee7c206a96cb87c90d7c0"
  },
  {
    "url": "assets/css/0.styles.a2d97d6c.css",
    "revision": "277e371e7b70a2a5cfda11447ad25b32"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f85dccaf.js",
    "revision": "fe2099cb5ccf7dde2dd5f7b037800d93"
  },
  {
    "url": "assets/js/11.54fee6e3.js",
    "revision": "3bd991dcfc0d51b06446b1324ac5d72c"
  },
  {
    "url": "assets/js/12.adaab810.js",
    "revision": "c9c7d0711bde2c386617c1969c729b67"
  },
  {
    "url": "assets/js/13.fbd67491.js",
    "revision": "9ecb1b14be2d1f9be6a56f5faa574fbc"
  },
  {
    "url": "assets/js/14.d975813f.js",
    "revision": "064f2ec6042b10e113b345bea2f987c9"
  },
  {
    "url": "assets/js/15.3bad3e87.js",
    "revision": "899d47d54a01559249c4708f3f214156"
  },
  {
    "url": "assets/js/16.092fa445.js",
    "revision": "0f2da95a91c0e0fbf106505f91692edb"
  },
  {
    "url": "assets/js/17.40cc60a4.js",
    "revision": "9d6b7e176182c64ed0a3383da103d70c"
  },
  {
    "url": "assets/js/18.bb3c9f49.js",
    "revision": "067c753f70f59c34d6bc486e3b7367a0"
  },
  {
    "url": "assets/js/19.59d70cc8.js",
    "revision": "32c4e6cc029de734aab6d40723e3749d"
  },
  {
    "url": "assets/js/2.1d039c46.js",
    "revision": "b79c6430eae0732b35a9758e935fefdc"
  },
  {
    "url": "assets/js/20.95266077.js",
    "revision": "024b65c43c0c7d1d523f0a5b4ed9754c"
  },
  {
    "url": "assets/js/21.76634155.js",
    "revision": "e04e10e2b62b8e03310cf9215a3279fe"
  },
  {
    "url": "assets/js/22.d7aa6f68.js",
    "revision": "4cd3fc538d89f00384824a1a535d4a06"
  },
  {
    "url": "assets/js/23.f3d6502f.js",
    "revision": "7bfdec7902bc2c234e6c399c7e9ed7fb"
  },
  {
    "url": "assets/js/24.4eb02d0d.js",
    "revision": "85a22f94f230a0225f732b33fd4f072b"
  },
  {
    "url": "assets/js/25.d9957f9f.js",
    "revision": "152cadfcbce3857bd2bf1d89ded02e55"
  },
  {
    "url": "assets/js/26.4d42eafe.js",
    "revision": "d95257929778fedfcab1362f4131c469"
  },
  {
    "url": "assets/js/27.4c6ba769.js",
    "revision": "1cc98c34c3b5c5e010dcea989f1369cc"
  },
  {
    "url": "assets/js/28.8a16ba2e.js",
    "revision": "09f0611d76ec98dcbf10090a8d0d3992"
  },
  {
    "url": "assets/js/29.23d29191.js",
    "revision": "dbd6c2b7e5b076f1440ae341a843ab4d"
  },
  {
    "url": "assets/js/3.7a7e4248.js",
    "revision": "c106265def0046bd9e4bb7829271f4d4"
  },
  {
    "url": "assets/js/30.c94d8728.js",
    "revision": "35f04385996b037cfe1331bbcd57c853"
  },
  {
    "url": "assets/js/31.86504ff9.js",
    "revision": "c1199e309b3ad62d538b65c59feb7096"
  },
  {
    "url": "assets/js/32.64189a31.js",
    "revision": "ffea1d85fc08d3e82ec97f4d9bed8816"
  },
  {
    "url": "assets/js/33.f4e3017c.js",
    "revision": "4aabb5357d1ff812eaf1f8eae7015bf9"
  },
  {
    "url": "assets/js/34.a118e5a9.js",
    "revision": "375f2963f50e035fc0a16e837dcfff52"
  },
  {
    "url": "assets/js/35.0782a8f6.js",
    "revision": "026cab831760668f03ce3006dad9a400"
  },
  {
    "url": "assets/js/36.8f7d0189.js",
    "revision": "9dd974a25fabf66f96c76a397978bfbf"
  },
  {
    "url": "assets/js/37.8df2ec77.js",
    "revision": "d569e9a535259bac4c9bcd040e4cd540"
  },
  {
    "url": "assets/js/38.baba2469.js",
    "revision": "bf2950f5d71a9aae3bee751f12949bb8"
  },
  {
    "url": "assets/js/39.9f000f18.js",
    "revision": "0e3ba7bdd36f0f7a562bdab9af66723a"
  },
  {
    "url": "assets/js/4.7d3d7c8b.js",
    "revision": "d1af6725981ac423814f02ec4a8c26ea"
  },
  {
    "url": "assets/js/40.772394f8.js",
    "revision": "dfc12a9a0db84547f9c33fa30bfb91fe"
  },
  {
    "url": "assets/js/41.b0b3a508.js",
    "revision": "5825522573eabcec818f3293965c9f6d"
  },
  {
    "url": "assets/js/42.cb707e30.js",
    "revision": "e74b39e073acfbe5ee9aa85b9d3e77cc"
  },
  {
    "url": "assets/js/43.3f9387e2.js",
    "revision": "4f1f01f3fbb32d245fc5dc1e74b56ca2"
  },
  {
    "url": "assets/js/44.d8796cae.js",
    "revision": "814fe1082681f929179d425161e637ca"
  },
  {
    "url": "assets/js/45.4fbae459.js",
    "revision": "37a4b99a5728d3b25e00236fb0f62cec"
  },
  {
    "url": "assets/js/46.724a640a.js",
    "revision": "2984ec374d0c1ea334f591dd107e8da6"
  },
  {
    "url": "assets/js/47.9eed76e7.js",
    "revision": "a38ef56bd2017957695f3397912458e7"
  },
  {
    "url": "assets/js/48.311aff37.js",
    "revision": "86c3d1b73fe3856cdf258cd047acb179"
  },
  {
    "url": "assets/js/49.b0ddc4fd.js",
    "revision": "4537304e225bf5259208c171638d3dd9"
  },
  {
    "url": "assets/js/5.fb92f577.js",
    "revision": "982ab95fb1cff71afb0cb471bbe345d9"
  },
  {
    "url": "assets/js/50.be3e1358.js",
    "revision": "5c2d5952ce332f0cc64e3e0c0f220ed4"
  },
  {
    "url": "assets/js/51.d5d068a5.js",
    "revision": "76556951f9774c4a9458353865482078"
  },
  {
    "url": "assets/js/52.e2fc4dd4.js",
    "revision": "dbed69f0c72ac64f503b446e9cdf5cd1"
  },
  {
    "url": "assets/js/53.5ea37445.js",
    "revision": "8f72ebce91b69086277ca3dbc5023763"
  },
  {
    "url": "assets/js/54.ca71d725.js",
    "revision": "472dfb9024c3b52c92f91bf9c061ea5c"
  },
  {
    "url": "assets/js/55.7cd820b7.js",
    "revision": "29d842dc0dada3ad016b8395de4edde5"
  },
  {
    "url": "assets/js/56.0f138e1d.js",
    "revision": "abbfbb780c5eba12693f129f218f2ab9"
  },
  {
    "url": "assets/js/57.76026108.js",
    "revision": "b830715eba4414241e6e5f53e07a18e6"
  },
  {
    "url": "assets/js/58.cc20b108.js",
    "revision": "ba9a74409b17562a1ffc162aaa496c0f"
  },
  {
    "url": "assets/js/59.0a9956b4.js",
    "revision": "8d7cf4d1cec6810cc362b9e45e7230ce"
  },
  {
    "url": "assets/js/6.3b763fee.js",
    "revision": "1a1d20284eca3d2737a3b3163aba58a4"
  },
  {
    "url": "assets/js/60.9ab3c704.js",
    "revision": "3c9dc860f5e1fe109ff53035030ca237"
  },
  {
    "url": "assets/js/61.c077ee6a.js",
    "revision": "06fdbedbda28249c5b7e5df544393a97"
  },
  {
    "url": "assets/js/62.c120ac82.js",
    "revision": "ffdf46400b3f8c01768a983273c9e11d"
  },
  {
    "url": "assets/js/63.b905c2ea.js",
    "revision": "060e224df8a6365833a2be98f2ff225a"
  },
  {
    "url": "assets/js/64.f8d1e4a2.js",
    "revision": "89c45a5c562e3b60b33f740799952ace"
  },
  {
    "url": "assets/js/65.918fef03.js",
    "revision": "35ab500bdc63ac1800e1f7088aedf204"
  },
  {
    "url": "assets/js/66.b2ce88b5.js",
    "revision": "7559d060f65fad57e9d1ce6e1127d1bf"
  },
  {
    "url": "assets/js/67.a0e3c4b7.js",
    "revision": "fdb116b99c14c3984ac267fe71543765"
  },
  {
    "url": "assets/js/68.fb71c594.js",
    "revision": "2bfd3949b41b70f9d08dff1394677fdb"
  },
  {
    "url": "assets/js/69.ae018ab5.js",
    "revision": "9cfc4f9bff0761dc9f2774a091c2ba90"
  },
  {
    "url": "assets/js/7.7c5b09e8.js",
    "revision": "56bb2f6eebe5e1aa6701cb58caf8a9c6"
  },
  {
    "url": "assets/js/70.3b22d304.js",
    "revision": "27c853f958f3021fc6187445a65b0db1"
  },
  {
    "url": "assets/js/71.c102362b.js",
    "revision": "27acbda6d7127f30210215ee46f76cae"
  },
  {
    "url": "assets/js/72.2094028b.js",
    "revision": "f9c1bf0eb80ea5501a192e1ec5375efd"
  },
  {
    "url": "assets/js/73.c03ec61b.js",
    "revision": "3a7dabad918add7d409112260a0c244f"
  },
  {
    "url": "assets/js/74.3b845799.js",
    "revision": "43a8b06969d605903318cd82fa6ff436"
  },
  {
    "url": "assets/js/75.74c66096.js",
    "revision": "13b57b18db3fb35a3d062594bc28de33"
  },
  {
    "url": "assets/js/76.a74190d2.js",
    "revision": "4dd4be10d1b114646b5690f47775edf3"
  },
  {
    "url": "assets/js/8.4ebee468.js",
    "revision": "abba6eeb910b8fe77aad4edbe644eb87"
  },
  {
    "url": "assets/js/9.e67b74e8.js",
    "revision": "c3f6d4d3a99aa5be042d74f3a677a9c7"
  },
  {
    "url": "assets/js/app.1aeab9a5.js",
    "revision": "57e2516f3ae89d3beb2cf8a4f2e9902b"
  },
  {
    "url": "index.html",
    "revision": "b3c7136350f551960aa0288e06933f52"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "71a008332eec406831215cbc03710f26"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "26d3a0fd899dc22787bcb99d54c9d5e3"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "8515ff8ee1c47e286dbad5c295076b6c"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "482454d5e4bad4bbc7a7bb96d99cdf2c"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "e8d1ef441573f6d4907be1ce6a7bf60b"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d749eb88ca735be8e0120bc4f04f4e5d"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "32b28961648d8e1472bebe1fd30abee2"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "16bf87eeb735ed15ccfc1dd6b2fbc1ca"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "a65e4a8b39c09b3e81991f0cbe385f47"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "26be561597e3e22987e1cee42ce54629"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "e844822f5dfad1eed1ce14b1296f5f45"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "d8687e9103ce3986537bbb6d90c6853a"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "98ef9040c375fa9bb21d7e973dadfa47"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a76975e8005815de4c943ffdedb31096"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "8e769f4f5b5fa0c4e4571f7225b06019"
  },
  {
    "url": "memo/memo.html",
    "revision": "cdd6982912ba271fb2a1c058f0d01a20"
  },
  {
    "url": "post/plan.html",
    "revision": "243396948886a666e9ae5c2f61872756"
  },
  {
    "url": "post/test.html",
    "revision": "398213f879f725846aca946f737f79d1"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "69473589f850b376825aced72c9e49fb"
  },
  {
    "url": "study/english/words.html",
    "revision": "ebcc1a00f2adcc5b6f9dfc73708abb78"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "a7c26ae96413d35b4938b108196af3c3"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "fcbb3864e3cc5406c908673c4a0c6313"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "dd99f99fb5a4d42929a9e9c0caa59f50"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "20d9265cf5a5a1782854025d050fb809"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "3e93f192c45e93939e9f8a01ab4f5a07"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "e39021a1b7e6a566498fad9bd79a741d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "685cfeb1aa603364b2e0a482082babf4"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "1a74bab562a5aa8e3365f60cc4c5fab4"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "25dcb4db158255d8ab131927634919fa"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "bbced1c897e328d2cec472ccb5f5f887"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "18ab9c1a4f8aa69810f07adda0692c7a"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "41a1c4a181b7f70226b3cba1291c146c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6f5f58a8c561c24ea74baaf8d3f1a0de"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5b1ca526b45d73fabc8d13a7dd726ff7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "97e9366cf20bcda8b773549784ae14d9"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "955b2b9a016a6e6cd2f4679b13f8ae41"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "788bcd9494877cbd0bb90acb1e97b5ba"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "8a82ff86296d567c1668cdd01bf51c43"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "54da094624eccbcf5cbf8b3f8d20f42b"
  },
  {
    "url": "task/2021511.html",
    "revision": "f3ccb7fcafc9e0b8e562a4273235c31d"
  },
  {
    "url": "task/2021514.html",
    "revision": "e545c71de66476013f65d8fef56dea2c"
  },
  {
    "url": "task/2021515.html",
    "revision": "531c12c9e2bfada61faadfd32bbbf605"
  },
  {
    "url": "task/2021518.html",
    "revision": "ad197c5563d90e143ee9855404c50414"
  },
  {
    "url": "task/2021519.html",
    "revision": "43a30ca23f9d90e1df68c20e6f241b0f"
  },
  {
    "url": "task/2021520.html",
    "revision": "8df37267974bfcfff97eaea88236876a"
  },
  {
    "url": "task/2021521.html",
    "revision": "5d943980c93bfcb4336c2e4f689f666b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "20314ea996580dfc24c91c24b47f7091"
  },
  {
    "url": "task/2021524.html",
    "revision": "d68d9034caf265546d7e65427282911c"
  },
  {
    "url": "task/2021531.html",
    "revision": "c988e13b743533818fd896948cb0cb97"
  },
  {
    "url": "task/2021628.html",
    "revision": "4318005fc63d565ab779aa39ae0131c8"
  },
  {
    "url": "task/202164.html",
    "revision": "7385fc488e14248b936cb374984b2884"
  },
  {
    "url": "task/202169.html",
    "revision": "0bae23aea8a01c0252832a569230df66"
  },
  {
    "url": "task/2021717.html",
    "revision": "3147dcc88cebb961c3660bd3544cfc8b"
  },
  {
    "url": "task/2021721.html",
    "revision": "99ef070cb34123aeb7b644a83cf5f93f"
  },
  {
    "url": "task/2021722.html",
    "revision": "7af9e75831bdef576a4e33de3d958f90"
  },
  {
    "url": "task/2021724.html",
    "revision": "188ee2abdb8323ce042b87dd266f45cd"
  },
  {
    "url": "task/2021725.html",
    "revision": "b70d706fcbe55f255f9de9000484e2ad"
  },
  {
    "url": "task/202181.html",
    "revision": "a92556aa9c0ec91e913cd28c29c64a67"
  },
  {
    "url": "task/2021811.html",
    "revision": "f8ac550438b3521ee121b54d46f78906"
  },
  {
    "url": "task/2021812.html",
    "revision": "7201fe6c9d221bddc994b83ddf2e5429"
  },
  {
    "url": "task/202183.html",
    "revision": "566bb16815e0a8077dc5854fdeef5313"
  },
  {
    "url": "task/202187.html",
    "revision": "26ba64f30305697b72b7ff7f9770478f"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "59899d5c8139be59573d2de63317dbd4"
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
