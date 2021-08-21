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
    "revision": "0f82cae08fc17de3f20f9ca0e0370b96"
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
    "url": "assets/js/28.4e92e1fe.js",
    "revision": "939c62ca0680a5277100964bc6be7473"
  },
  {
    "url": "assets/js/29.f002585b.js",
    "revision": "0b6a9c5e433c76b9c8d235dc9b67c083"
  },
  {
    "url": "assets/js/3.7a7e4248.js",
    "revision": "c106265def0046bd9e4bb7829271f4d4"
  },
  {
    "url": "assets/js/30.77ab7c45.js",
    "revision": "e72bb6c6503d9e9a6844c40e5b4db75a"
  },
  {
    "url": "assets/js/31.962294b5.js",
    "revision": "a432feeebbd6762a23cfe8c3d984f530"
  },
  {
    "url": "assets/js/32.b375919f.js",
    "revision": "297638d40eeb9819857c35255d49e5f2"
  },
  {
    "url": "assets/js/33.d7b66257.js",
    "revision": "f0cfde9ef256734b0953732286b1d63c"
  },
  {
    "url": "assets/js/34.6cac8867.js",
    "revision": "32f841a0ad2736690b61de3a3523d726"
  },
  {
    "url": "assets/js/35.625f33b0.js",
    "revision": "da4428063a4dbd8c786b37203904ff4a"
  },
  {
    "url": "assets/js/36.b5fba925.js",
    "revision": "b7c5a02bc662d0aa8133e273a8098f8f"
  },
  {
    "url": "assets/js/37.0a05ab2e.js",
    "revision": "4706e798df0428040f5698376779d375"
  },
  {
    "url": "assets/js/38.76436172.js",
    "revision": "a4cbc2e186b03d681506984c80a968c1"
  },
  {
    "url": "assets/js/39.f5427ff3.js",
    "revision": "7d4eac459c1a76569033bb5f1c8215cf"
  },
  {
    "url": "assets/js/4.7d3d7c8b.js",
    "revision": "d1af6725981ac423814f02ec4a8c26ea"
  },
  {
    "url": "assets/js/40.fc8e8e32.js",
    "revision": "7ad5c1603594a2039372c01f8e7e0896"
  },
  {
    "url": "assets/js/41.82673b15.js",
    "revision": "baadde372cbb7daa13f83f16b90bbfff"
  },
  {
    "url": "assets/js/42.91989eef.js",
    "revision": "2f884d11fd6a6f75f5f408c688cc0a52"
  },
  {
    "url": "assets/js/43.989ecd0f.js",
    "revision": "b1167cd2b90288f8fbe2f18f1f98bc7c"
  },
  {
    "url": "assets/js/44.90d2a769.js",
    "revision": "5ad177f769fe7d8bc8f0148bf3e64503"
  },
  {
    "url": "assets/js/45.8c3ab1ed.js",
    "revision": "ed835e92d18c9a18bfc067dac6b69c88"
  },
  {
    "url": "assets/js/46.f8763c6a.js",
    "revision": "f32066281f616b04ce35143ba8f1e800"
  },
  {
    "url": "assets/js/47.154c4832.js",
    "revision": "e964f780d83982a02612b32f7ff0aa2e"
  },
  {
    "url": "assets/js/48.66c76662.js",
    "revision": "4d155f0a8d6944464c92a2b9dcde498a"
  },
  {
    "url": "assets/js/49.6e8bb275.js",
    "revision": "026ffc30669da50855351501b0e6f4f2"
  },
  {
    "url": "assets/js/5.938da123.js",
    "revision": "2d87be203d453a46a7da38563d20bc77"
  },
  {
    "url": "assets/js/50.89bb4d6e.js",
    "revision": "b5a95fd41961b6d32002f060485bcf7a"
  },
  {
    "url": "assets/js/51.57f5b735.js",
    "revision": "74f04f4a0e11bd80e5bcb7c22de4e2fe"
  },
  {
    "url": "assets/js/52.27215eb8.js",
    "revision": "a837b714ac3065f98e583cc26d579538"
  },
  {
    "url": "assets/js/53.dbf371a4.js",
    "revision": "77498de438d8d5f6f439bd9d794cdfed"
  },
  {
    "url": "assets/js/54.4aec2394.js",
    "revision": "1bd463ac1f3bb3d0117d05083037a777"
  },
  {
    "url": "assets/js/55.cced739b.js",
    "revision": "e8ddce42a747ffc7174a0ec320fe18ad"
  },
  {
    "url": "assets/js/56.4d0cb027.js",
    "revision": "c12203919b5ae9cc858623b0753bef49"
  },
  {
    "url": "assets/js/57.fe9d14a8.js",
    "revision": "6426d5780729378fd618242dce044b4c"
  },
  {
    "url": "assets/js/58.ae1e0eeb.js",
    "revision": "af1f49a804ec9b7550334570a3924739"
  },
  {
    "url": "assets/js/59.36113d07.js",
    "revision": "d5adc22d1f837f44fcf5bce837140ad4"
  },
  {
    "url": "assets/js/6.3b763fee.js",
    "revision": "1a1d20284eca3d2737a3b3163aba58a4"
  },
  {
    "url": "assets/js/60.c9f06c51.js",
    "revision": "07dda7540cf1df893eed520bda7cb4b0"
  },
  {
    "url": "assets/js/61.b66e94d8.js",
    "revision": "c79a972b23cccfab5e7e3490711f8a23"
  },
  {
    "url": "assets/js/62.6dc8aa3f.js",
    "revision": "19c44d82843f16c7ac5a951b4aa89235"
  },
  {
    "url": "assets/js/63.962a94de.js",
    "revision": "ce162286f9b745a6ef26fb0c8fc3aca9"
  },
  {
    "url": "assets/js/64.2abe989b.js",
    "revision": "fabc61a1311cf201be1ff040f14a2019"
  },
  {
    "url": "assets/js/65.332f717d.js",
    "revision": "5f957f8729da9e79d3125d7ae3659516"
  },
  {
    "url": "assets/js/66.7a452cf4.js",
    "revision": "ba704e51aacd79a167c5fdd33bc71c56"
  },
  {
    "url": "assets/js/67.6f966635.js",
    "revision": "4b11c748635de6bdfe51890af9b8e2cd"
  },
  {
    "url": "assets/js/68.4863a26c.js",
    "revision": "451e88332b97238ef9b7ca221de285b8"
  },
  {
    "url": "assets/js/69.789d7346.js",
    "revision": "a4dcf4a35ef9481889b1cfbb6a1c6072"
  },
  {
    "url": "assets/js/7.7c5b09e8.js",
    "revision": "56bb2f6eebe5e1aa6701cb58caf8a9c6"
  },
  {
    "url": "assets/js/70.2b9c8cd4.js",
    "revision": "719bb04982fae32dc313edb6a9f3896d"
  },
  {
    "url": "assets/js/71.e1788f88.js",
    "revision": "2708ece34e54bec9f9926ea595d2bdb8"
  },
  {
    "url": "assets/js/72.e71bd002.js",
    "revision": "14412c616f25d91c5240b1285779af59"
  },
  {
    "url": "assets/js/73.8db36cfe.js",
    "revision": "bb5a1a359c3418609333a84741ab45d7"
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
    "url": "assets/js/app.886d5333.js",
    "revision": "d6d59e443e31578669212634ac9eb164"
  },
  {
    "url": "index.html",
    "revision": "b3c42516103a09cd3cc98ce3fe4d127d"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "6fce05814f80dae3f6fc3c0fcbe20cea"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "072da63bee7323e5b3b138b7e8a97848"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "b2023799cf1bf80d68f525d45373c597"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "d529b69308088d4080da187361c3c21b"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "ab0c2886bd5683fadbcd56cc66371cca"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "b300a4e9e0d119c49011ecceb036ba6e"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "15dda27f77a54f0f066264e55023925d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "2544ef89d68614b9c8d821ac24dcd4ed"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "7f4bc48c199c4530e94c074585475dbc"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "c5795cdcf740a5e5da27cee845e70557"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "9f4dc53aa7b3ce74ea659157289af474"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "17f93f54b010981cb0499400ccc5e45a"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "2218afa265d13ba66a099dcece2c6c41"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "b085e8b201e1c121a2a81a2954ab676a"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "81b0bd277a4ee568c3943b5c064a4b02"
  },
  {
    "url": "post/plan.html",
    "revision": "bf570e32f2f18a2b97faaa7d970b7ff4"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "b9f179e2d87ba08493a1245a70bc2f4b"
  },
  {
    "url": "study/english/words.html",
    "revision": "a4f359f54852b672d1bcc41f8e380cff"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "10030bd3e9948dfbb685707d3465c71e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "9848469e0538e0fb4af4a620f6995cfb"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "a1ebb9a2952df6580bf9652b2963d618"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "2d219833548f6316cb3a640fecf2fcbb"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "7dee53567d1477deed7c843c9067b627"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "619816c3929b08b657743b17bd3d5d44"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "6c4a6eeb40120d7a4bd03e3b41a021d9"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "c308f96c55285abc5d5c0053bf8de6a2"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "657a448aa957bd5917ac1318b089e756"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "917d3b3acf0ae73a3096fc52c3ca9a5d"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "78eaaee451ca23c5f8a1f7d30fc53e64"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "6357cb3eeccb20f75d8874da99cb778b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4325b8bacde8abcb1ab08dbc0225fdc8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "c6ce08a21e0d224eb962fd84b3bb5a89"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "00d6b548fc9bbf6f208ea4aaa5a04d0a"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "6bbb6fe740acbf6477ceb993564029bf"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "1de577c13412f59d5e17c0aa2daab241"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b854679894a78d8938a82ffab701d986"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6efd47e9ab33ffee6b09c97da1084b39"
  },
  {
    "url": "task/2021511.html",
    "revision": "ac34cbce364c6566942b279f033dc776"
  },
  {
    "url": "task/2021514.html",
    "revision": "a2c49c440467800d640babf37c624ff2"
  },
  {
    "url": "task/2021515.html",
    "revision": "037ec8109eebe3d93a7c8fc8f7be1b15"
  },
  {
    "url": "task/2021518.html",
    "revision": "64813e11833fd3294493853d54860b7d"
  },
  {
    "url": "task/2021519.html",
    "revision": "39a5ed5c5f3cf8b524a2ab0febfca6d3"
  },
  {
    "url": "task/2021520.html",
    "revision": "40561b9ba16b3be89f7561aad79e4a3e"
  },
  {
    "url": "task/2021521.html",
    "revision": "725469c4d65ea6f6167ae8bcf2d90e35"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "8613934b26e2ffbb5c3bbb428197ff59"
  },
  {
    "url": "task/2021524.html",
    "revision": "f153bfa9e130542bf5104e0aa97392e3"
  },
  {
    "url": "task/2021531.html",
    "revision": "6d3b83a3f08a17893d58331f91e53237"
  },
  {
    "url": "task/2021628.html",
    "revision": "64e82b9951ff98c88ce439faf75e9b66"
  },
  {
    "url": "task/202164.html",
    "revision": "f9ef7870bc05c2acfd6034de53f1133c"
  },
  {
    "url": "task/202169.html",
    "revision": "3da1f3ea0834dd8682efd1ebad54ec30"
  },
  {
    "url": "task/2021717.html",
    "revision": "e8b011ab33d9841284e23596ae8a9852"
  },
  {
    "url": "task/2021721.html",
    "revision": "c2aa32188bb9e692abb4f9a2f6da9d76"
  },
  {
    "url": "task/2021722.html",
    "revision": "da5bd599658930fa01d3a674cda2ab94"
  },
  {
    "url": "task/2021724.html",
    "revision": "5f4a0db235d076108de8c0a6beb3d113"
  },
  {
    "url": "task/2021725.html",
    "revision": "2672d543a9ce94e2df3a1eff9b6be6e8"
  },
  {
    "url": "task/202181.html",
    "revision": "73846c4d97e868a1752ceaefba5e60ce"
  },
  {
    "url": "task/2021811.html",
    "revision": "076f53c134abfdc9b7fd81c773905e36"
  },
  {
    "url": "task/2021812.html",
    "revision": "04a1034039347f3bea8821d981d443d4"
  },
  {
    "url": "task/202183.html",
    "revision": "f8826109751ee53b8ca44c9f8a8beee4"
  },
  {
    "url": "task/202187.html",
    "revision": "88b98e0006f368ba1ae8b1fdfe9a4ee7"
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
