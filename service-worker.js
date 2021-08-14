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
    "revision": "2d20b41721a6e7779d498e1b60a04947"
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
    "url": "assets/js/28.e580fb90.js",
    "revision": "8c03aa845e03805f8fbd7349c1151f2d"
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
    "url": "assets/js/app.f3e1e604.js",
    "revision": "2f49ae353d699771850949d337c31247"
  },
  {
    "url": "index.html",
    "revision": "aae4b85a17fb4bdf535a68a13efe0c63"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "8f41da85f6811c1aa1a3b259183b0ecb"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "26a7dd50bd386915bbe495f082025ced"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "ee8b95cb5896c88bb2d0da6c0fc4bb97"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "c9f50b57c40ccceae6415170ec7531de"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a9c90c3535bb1b3c44eb8a969dc86ac0"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "3d6a0f773b7cd31030b609942450d6ad"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "46eb8212638e31ad87e8a7d70b94f47a"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "7eb329a3328f075193d837a253f88ae5"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "457dbb7f5d7172672bb70268055230bd"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "125eb9fde5e7410e400518ceb6f9f3ef"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "0175d9e14be71be2a80eb7aa6448965d"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "0443188978615d5450c6ad56b2c8350b"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "37d31c697b50d8cc2c0547da4fbb33f2"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "b8b30336c960ac9eb0169bd80fe6d8e3"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "244165128e40533012c3b4214b437404"
  },
  {
    "url": "post/plan.html",
    "revision": "b65a617ee3765211eb63bc848b4e0971"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "a22839466dadda72f2f5663e74eeefce"
  },
  {
    "url": "study/english/words.html",
    "revision": "dba8d45703a1274c516f72fb8b6074c9"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "b78ae5b587aeee543d19a22bfa72529c"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "bd5af003995cd98c572641a1762bf529"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "84b53fe2e7712910685479d5ec8b4e64"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "0886a5d7960e7127a0de005a69a3ba46"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "90e8cbd0ab7cf14e2113013b57f588ae"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "f4a209373e531d0fcea6b6810236c9c0"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "076e0b075ddbfa75398d0625745400da"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f43831875baa3a1ab5136105edf74905"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "0de4482987fd57e5be912ff02461c6a5"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "098764a30baec962f48d09b5ce986c19"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "177f33114e71670fbe43173a8cc012a2"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9a918d8fe0990794b0c95fe2113ebc3b"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "4daea35c6308af7beea1a9fd58519d4b"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "3c69ba8357687d76bff7d3e0e5ca7f87"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d461fe97079bc153c1b6e9fb731bc5d2"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "968fb732acc020fb35c300877ae2e1d8"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0e44a1619915403d67d8e4a27fb3f1c2"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "4dbd6c7fe0ee0c65437de001af77eeab"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "faf32aab914f14d383e88f0ecaf3cc3b"
  },
  {
    "url": "task/2021511.html",
    "revision": "52af90cbe59aee42fd0b6998640fff55"
  },
  {
    "url": "task/2021514.html",
    "revision": "adbc7c839996c9a9af2dd91c20fb34d1"
  },
  {
    "url": "task/2021515.html",
    "revision": "1f40221ead133034bd964fc11366d166"
  },
  {
    "url": "task/2021518.html",
    "revision": "3c26d0549424f2cb08e8ab747b2290fa"
  },
  {
    "url": "task/2021519.html",
    "revision": "99d643d26d6e97b080815b2bc7c18201"
  },
  {
    "url": "task/2021520.html",
    "revision": "22f52f24a3eee161b43e57b08e76f794"
  },
  {
    "url": "task/2021521.html",
    "revision": "198f77b1002885cdd01cab37f3e90276"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "c236088e5a8dd87581b2122b63a39c1a"
  },
  {
    "url": "task/2021524.html",
    "revision": "03d1b557d288891884f8641def4e41c1"
  },
  {
    "url": "task/2021531.html",
    "revision": "a4e49ebce22043dba030e3a3bb66eea9"
  },
  {
    "url": "task/2021628.html",
    "revision": "8e92d2faaefb7df5bdb9919fc9584df6"
  },
  {
    "url": "task/202164.html",
    "revision": "b5158db91e562a353384db29b0c89730"
  },
  {
    "url": "task/202169.html",
    "revision": "f14b6488f41551933f7e2b8adeec53c5"
  },
  {
    "url": "task/2021717.html",
    "revision": "ef50b0eed4fcec3d112daaa8c56d3ba2"
  },
  {
    "url": "task/2021721.html",
    "revision": "532541bd3e82ccd788bfb35b45e4109b"
  },
  {
    "url": "task/2021722.html",
    "revision": "ec08990aceec91429c98178052874616"
  },
  {
    "url": "task/2021724.html",
    "revision": "867c0e0f22cd7fc9e4d06deacd6373cc"
  },
  {
    "url": "task/2021725.html",
    "revision": "6289f6bba802016d4f6a7e1b32415c07"
  },
  {
    "url": "task/202181.html",
    "revision": "d7031bf3589855fd27f7320a6085429a"
  },
  {
    "url": "task/2021811.html",
    "revision": "e7d7a287a97b08c032899e2815b0d354"
  },
  {
    "url": "task/2021812.html",
    "revision": "9124cf379d66583f8d52a30b5e540238"
  },
  {
    "url": "task/202183.html",
    "revision": "3f1b184ce41e076b3a50234a3dd3d3a9"
  },
  {
    "url": "task/202187.html",
    "revision": "cab4f48153d824c3fe9872023a90267b"
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
