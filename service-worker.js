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
    "revision": "24ce18b27a7a8e14ac63a1f67ff6f834"
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
    "url": "assets/js/13.f51123c6.js",
    "revision": "971851e5fe705fb4571024cc30223af2"
  },
  {
    "url": "assets/js/14.c8f19841.js",
    "revision": "a2dba0cc1281a249bda9df76315c456a"
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
    "url": "assets/js/29.0757a831.js",
    "revision": "74290575404fbe850c99ec7224908f15"
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
    "url": "assets/js/32.5d9317f9.js",
    "revision": "556edb5c6734a15ae61e2ea419f9a2e7"
  },
  {
    "url": "assets/js/33.b3d33c84.js",
    "revision": "e63dbea193824b1c2affc529879d5a5a"
  },
  {
    "url": "assets/js/34.bf3b1e05.js",
    "revision": "c05d5f5005c122517081eb594468a2b0"
  },
  {
    "url": "assets/js/35.959b7107.js",
    "revision": "617545add295dc26e0cc75c00abef9d0"
  },
  {
    "url": "assets/js/36.91505841.js",
    "revision": "1b4c1b23cb522c6353921d3e8ffcbb31"
  },
  {
    "url": "assets/js/37.6351001c.js",
    "revision": "6d6d5055e07b7d6592fe69794f74195a"
  },
  {
    "url": "assets/js/38.8cfc7623.js",
    "revision": "e98d887f4aa5790100147d18b7509235"
  },
  {
    "url": "assets/js/39.9750ba02.js",
    "revision": "c71f5e3f053b20e1b420db6ab5ef28e7"
  },
  {
    "url": "assets/js/4.7d3d7c8b.js",
    "revision": "d1af6725981ac423814f02ec4a8c26ea"
  },
  {
    "url": "assets/js/40.ae1e5670.js",
    "revision": "17e0bc8bee93b27f6949ee314e5d2699"
  },
  {
    "url": "assets/js/41.e26ccf8c.js",
    "revision": "2c5b6c014bc7367ea6c04153bd996173"
  },
  {
    "url": "assets/js/42.c72d1bad.js",
    "revision": "a7004d583239a3b2aef0d5200235bc4a"
  },
  {
    "url": "assets/js/43.ef913121.js",
    "revision": "baf81ff14c9f39d81ef55d2f93400830"
  },
  {
    "url": "assets/js/44.908998d5.js",
    "revision": "ba716bb7000113a260995f45d4e851e3"
  },
  {
    "url": "assets/js/45.356f9307.js",
    "revision": "a2fa52c2e39844eef9678ae10a97c25e"
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
    "url": "assets/js/71.5a2fd1ac.js",
    "revision": "df2032a62aaa086f76669aae9c1d8267"
  },
  {
    "url": "assets/js/72.d4d8369c.js",
    "revision": "06828b965b74e21d835ca619706896fd"
  },
  {
    "url": "assets/js/73.39dd4a82.js",
    "revision": "6a6073aeddb9b87305905923d9ade625"
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
    "url": "assets/js/app.261f8714.js",
    "revision": "54f57159bfca2a9422fca6387bda33cb"
  },
  {
    "url": "index.html",
    "revision": "8564fee4d2acf790f12784a98b90db6c"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "6281af74ddf284db69c538989603808a"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "aa83788e16e0864ff6a1c9cb9870e98b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "b631d5aa05a6e2b7251952895998b7f6"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "ec92d800639cd25f0098e8c43e1e8f4e"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "882ccbc2e7c636689ab481dca6cc13d4"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "36c2cdd02d340c8c81d74b56ec6cda72"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "8e3031b0da9d3bc8abb6dd9394e2aafc"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "24ba7ed5c61f0c2ad5af5ccb7ad8eab7"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e39b9e8637cc6594deae9283fa0e774d"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "7c007003a30d249c6c98a4f4d819c235"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "a3d23bbceeb605f4a36ec72c0883620e"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "c3c20c799d0b55eb88c1a2ee87c49153"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "daaf2c035ca677ac0d57e845a41ae2df"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "1964081ef2b0452a78671a50b99c6510"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "09f59943d916b39dd4e267f2644fbb8e"
  },
  {
    "url": "memo/memo.html",
    "revision": "80106718a9d052693037250b531dfac3"
  },
  {
    "url": "post/plan.html",
    "revision": "8ae34468fe7bd0a70ff4916d6b50562c"
  },
  {
    "url": "post/test.html",
    "revision": "15c71569d06d92c2b1ea82aee98095a7"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "383e1a6ad5f38ce4b7e044c79c755e77"
  },
  {
    "url": "study/english/words.html",
    "revision": "1b77af5d48bc6878f9858e0edcf72554"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "55b05493c901927ea36a45064867a988"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "8ec5d78eb0fbc38b191fe0c18699771a"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "308776b85a084ca2efcf84f471d6120b"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "11a67731f1ac8e7c69076cadb3b39065"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "8343c25ee7c56ac67d2b3d3c2a3c55ca"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "b8b9066758cfc17bc70eb6d82c91aaf5"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7d25c86c17d75aa6654ec137382d2e50"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b80e882c3c92b928111cf4e5850fc1ca"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d5da3871c1754858323df3d501a8acff"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "6cc04a51c80248b7c08bbf52c4c331a8"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "2ec7c6619ab4e3e3c8f44b173cb11d46"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "aeaef9b7c6ff43b92b86fea7fea9e03e"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c84abf86f18533b656528726491428f4"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e91e82df1f6c316aa8dae2811e8b8675"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "9a868a04d10bb887d7043d16715cb37d"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "22d34de57b550cb07e96da3492069975"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "8e3787de33511913bd6a8fe8bcf29457"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "1e76a16427fcddcb6f5683c23e23bf8c"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "68e587f9ec39afc2f0374489ea9be0d1"
  },
  {
    "url": "task/2021511.html",
    "revision": "c2759fb693383b93efd05c2f6cff9dcc"
  },
  {
    "url": "task/2021514.html",
    "revision": "0bb3bd0918d8efd7e068c5f25b3b9515"
  },
  {
    "url": "task/2021515.html",
    "revision": "4e833338b45bfd610056bf08352158be"
  },
  {
    "url": "task/2021518.html",
    "revision": "0d945f863074546311eb8430734a0d64"
  },
  {
    "url": "task/2021519.html",
    "revision": "c410bd3110e5ac0f86d60eafcf406b3a"
  },
  {
    "url": "task/2021520.html",
    "revision": "011356216a4aee9374ad49dde0937fd7"
  },
  {
    "url": "task/2021521.html",
    "revision": "2160637ef1ee247aeb9ca8bd108240e7"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "428c26d179b64b6d3a6d1ac852f0aa2d"
  },
  {
    "url": "task/2021524.html",
    "revision": "31245b6af34f42b8ecdccb26177e79d3"
  },
  {
    "url": "task/2021531.html",
    "revision": "c40ea478ee04104808ce7e393a067aef"
  },
  {
    "url": "task/2021628.html",
    "revision": "83a023487bd551e51ee368465290c3b2"
  },
  {
    "url": "task/202164.html",
    "revision": "ea099714d48f4f1e3b627e072e76cb4e"
  },
  {
    "url": "task/202169.html",
    "revision": "0d5407aebb9906c6a63e9acd6fa1ec0a"
  },
  {
    "url": "task/2021717.html",
    "revision": "4d7fdc664e8adfc3863223cdeeb433d2"
  },
  {
    "url": "task/2021721.html",
    "revision": "2dc90ef1aef07ef4b175351a0417f3ec"
  },
  {
    "url": "task/2021722.html",
    "revision": "63007ea31fcec9f945d767d6ffe72be7"
  },
  {
    "url": "task/2021724.html",
    "revision": "ae7e66af31a8b99f56e2fd6f647f0c21"
  },
  {
    "url": "task/2021725.html",
    "revision": "dab3983cb9bf6be4c3c642eb18860b99"
  },
  {
    "url": "task/202181.html",
    "revision": "c864076a6baa00d053bbf4fad427a9fd"
  },
  {
    "url": "task/2021811.html",
    "revision": "c0149cb4f0a1fc5762f6cae8570be3ac"
  },
  {
    "url": "task/2021812.html",
    "revision": "f8f4a14bd1c92f0b206688b5112108ac"
  },
  {
    "url": "task/202183.html",
    "revision": "5ddc0770d48a17baf7718abf281b543d"
  },
  {
    "url": "task/202187.html",
    "revision": "0be71c938def9ef065ab2afe28d26a88"
  },
  {
    "url": "thought/oneDayOneStence.html",
    "revision": "57ae3937d28bc8298ecb7fb2d72d0d47"
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
