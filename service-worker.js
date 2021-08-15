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
    "revision": "d0c75a1d4923a98a6dabd9581f3779fd"
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
    "url": "assets/js/28.97d57aaf.js",
    "revision": "1cbebc77f9f01d727556b80388b7f1be"
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
    "url": "assets/js/app.b63b35a7.js",
    "revision": "9341683b57c3bebadd6f49887526f353"
  },
  {
    "url": "index.html",
    "revision": "38e89e0de2921c5897939837ff14395f"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "446cb4908d35353476ae45ee2df7caa1"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "84c9b1ded5474a2694f9f1bbeb400ccf"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "23e1ec0fb9e9d6d497f0864b3d45d057"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "ec478b7056383d02529d6de17f4c2103"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "93d05d590d879640310abf087b4f8737"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "7a900334c58150bed6ea5a59f30de4d9"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "5c1307e0db03c7851ab0cac45422c187"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "8a15c261d39e042343089753b55c836c"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "ecaad0f20b4e37a9ad3b188bf3fedde9"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "f6fb990205dc2ecc3c63c91f51207de1"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "93b1fd8c12d52aa28aea5655f51f59f8"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "82315d5b243f195a39b2551ae8126680"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "dd7cc0951a835a6758c09edb6252314e"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "dc44049b37a0e4d69018bcc68aba4198"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "664188362e7dc5ce9423712ccda5d292"
  },
  {
    "url": "post/plan.html",
    "revision": "a1c2b7ddf9ae533fd50ea9f6f1ac91be"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "240d8882ae5f672c0bb96037f3373894"
  },
  {
    "url": "study/english/words.html",
    "revision": "b0871c03d3c4e5d34266f3f792b1360b"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "739e0b676848cc13e8b67f8357860532"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "0ae960a84186ca03483e397d2f061a44"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "afb09cfec1e9a82fefe9e96e563403fe"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "f2bf777d92b2906f68f19c12aed1db28"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e1e67d137658300949b28f214ce56006"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f4492450d8b196644b747d1712ea31c5"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "690ae59457d4765e58f9663933cb4751"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "51f06040b6e176c2a1720b5bd8352184"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c0ff487fcea5ba7170539b22942874d6"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "5388889cbaf585b08681a4ada2bc226b"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "96d6f5a79a732abcbe553710e7c8b506"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "5506c4a21a1336998db9f55df27dd8fb"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "12cf3681fe6c2f068f25e5f6ce5e8a33"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "68ebe93542bc9c6a05948bbe10108d57"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "dae39fa6efbff2956201a0e05332a568"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "c1ad4acf92afea169c5ce640715251b8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "eba52e9cb7a1988148e752fdcf746942"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "52454a2aeb67f54052acc77d416e267e"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "ec52cca3ae0631865489af3ee380ddfb"
  },
  {
    "url": "task/2021511.html",
    "revision": "d3d55d5da1ae5d23b1f5d03c1034069b"
  },
  {
    "url": "task/2021514.html",
    "revision": "c8c07ab0fa834cd39ec5a1f011169913"
  },
  {
    "url": "task/2021515.html",
    "revision": "253404b040d5996bcdeb47340dc7e877"
  },
  {
    "url": "task/2021518.html",
    "revision": "6306d5a456d8f41593ba8c3ec87b0708"
  },
  {
    "url": "task/2021519.html",
    "revision": "5067cabec454e286349e7fab864fad7a"
  },
  {
    "url": "task/2021520.html",
    "revision": "d7fd34cdef571bc1cd74a8d420e81834"
  },
  {
    "url": "task/2021521.html",
    "revision": "24ca5564983d5d038698e10175b58123"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "f72d4abbe1c20471aefe83e0d1de7964"
  },
  {
    "url": "task/2021524.html",
    "revision": "5e86cb1f0907c129add769131b7a6dac"
  },
  {
    "url": "task/2021531.html",
    "revision": "4398d57bf820d9b076eb2f5c5392fcbd"
  },
  {
    "url": "task/2021628.html",
    "revision": "1583bd5dc7d7ae88586a33c33b2f538d"
  },
  {
    "url": "task/202164.html",
    "revision": "35dbc15baaed07dcb01016d032ec6ec0"
  },
  {
    "url": "task/202169.html",
    "revision": "7543c574204c81c5f9d2f6529fa94d0d"
  },
  {
    "url": "task/2021717.html",
    "revision": "e6ea2e2be4074b819e317ecd9b80c5e8"
  },
  {
    "url": "task/2021721.html",
    "revision": "fa89078410de997d054233b389f79839"
  },
  {
    "url": "task/2021722.html",
    "revision": "f2e5e78e806f05dccde165a2af4e75a5"
  },
  {
    "url": "task/2021724.html",
    "revision": "21d8df4ceab6a079c62cd3c2181f7e6a"
  },
  {
    "url": "task/2021725.html",
    "revision": "ff81c255e0a7a989de955654c350508f"
  },
  {
    "url": "task/202181.html",
    "revision": "0ad172afbf2d061ec5e9c29dff3da94c"
  },
  {
    "url": "task/2021811.html",
    "revision": "4f079dda8fbc4c79b6bebb375d6d506a"
  },
  {
    "url": "task/2021812.html",
    "revision": "80d0ad9353704ed884d4e09ce1a65fcb"
  },
  {
    "url": "task/202183.html",
    "revision": "aaaf4bc121d5d89e8f4affcf0e5862a9"
  },
  {
    "url": "task/202187.html",
    "revision": "379086bce46be8666badbc2189f4aba9"
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
