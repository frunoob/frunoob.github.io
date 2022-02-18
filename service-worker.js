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
    "revision": "e1ba7f2636f209296a05b238e1036121"
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
    "url": "assets/js/app.d8c5d97f.js",
    "revision": "1eb3827bb4c5e9064915553952859762"
  },
  {
    "url": "index.html",
    "revision": "8b525fca84597e0a6684d1e73755bd2b"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "de69d1c9ac6e39e3266cd4dad6893c35"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "5e0345703c67de03516b63c0889fc57c"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "6079def5e4e826ac0c39513ecc62d562"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "d88e630ecc37a32f3d8e0fb45b7facd3"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "a310ec7ddf3280599a6d422f27ce2f5f"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "4edb18cf10db672b2feb1be1d6124464"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "ddba212c6c0ebf5073dc04145b03541f"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "7dfe0314a0b6fc1c52d5f02cb3597293"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "6dd88bbd26c414dfeaa13bb8d17be78e"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "59872c4645cdfb77ef262e145ce4c5ce"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "687b2c27163eea36adccb8920796fe48"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "2281d4bfd68c4c41d5936e27bd1b873f"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "969ffacafd88b71410592d8e61042907"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "2d2ae0275928fc1c701e9aaa37381f6b"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "f2659896d661eb05e686c205ad3f8bf6"
  },
  {
    "url": "post/plan.html",
    "revision": "b77248ca9b15727ae8f7518d6cb3c04d"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "8c12794b2842ec8249403cf3b5f85c0e"
  },
  {
    "url": "study/english/words.html",
    "revision": "224c2998bbb19e586b4648c51a8aaed3"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "43554d031d0acea7a69dbfe342a16386"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "0d0b4454d4b879313506e3512bff4c0d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "026b2727dfac0329f3c8bfce719f4344"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "9173a246eb7de0781024ca447c962cd6"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "e13f3fa702e53ec6f7d61c7d810ac11d"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "9f3f0584b8730a45f62b736c60f7ad8b"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f204a20da8b597ed51d6e935b5793f58"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f883abcc853919c692ad1b6237f74cde"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "c6dfd7d07e10bbac5f61035a6bef1a0a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "46714ba458016b07f84b055a1a279fe1"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "aae45fd6a0c9b322d62f4d8deae40389"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "5492fa3ff1c26efde012cf90c9c2aebe"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "a5e141396d071cd0b0cc15f346edfbed"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "8c3b5f00f2daeb91620b278e63a62ebe"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "25aeda3e1e0e08919b2e0139551ebb0f"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "3fa3658fd7aa1416f51a8b404a7dbefd"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c1c445440c64f756304a3582e8e74c46"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "75c480b7949fbce5237668152ce888f1"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "fa3b73129c3aa70dac20a06508848099"
  },
  {
    "url": "task/2021511.html",
    "revision": "9741debbe3c96c4a7406a94cbd49c7e9"
  },
  {
    "url": "task/2021514.html",
    "revision": "6eb2bbbf3d9b48c08d1aadae9327b34c"
  },
  {
    "url": "task/2021515.html",
    "revision": "e56c58c30acb9c07454f05b4a971b043"
  },
  {
    "url": "task/2021518.html",
    "revision": "c044656f9990c2e18d8ab14124401991"
  },
  {
    "url": "task/2021519.html",
    "revision": "a1162828ee9edfdc2ff52f07b40208c7"
  },
  {
    "url": "task/2021520.html",
    "revision": "0dedda0d297e5930bcdec339f0d191b5"
  },
  {
    "url": "task/2021521.html",
    "revision": "d3d792e85472409c626f7e1da7d57ae0"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e39affcce04c1398bbe8e1d17c62af6a"
  },
  {
    "url": "task/2021524.html",
    "revision": "b0885ef430ec0e84e3ac04438c7643ac"
  },
  {
    "url": "task/2021531.html",
    "revision": "b05359120160f4ef0d644324f702b719"
  },
  {
    "url": "task/2021628.html",
    "revision": "d96ba41c56deabde03054e0128425ce3"
  },
  {
    "url": "task/202164.html",
    "revision": "dd109b495307629264dcbb0f03783214"
  },
  {
    "url": "task/202169.html",
    "revision": "2f667b8038bcfeb14fc001ae362bf533"
  },
  {
    "url": "task/2021717.html",
    "revision": "1cd880f50aa5a7cf11f122bb0e0cb6dc"
  },
  {
    "url": "task/2021721.html",
    "revision": "ee4ea21441f7c684ef559e426f08cb51"
  },
  {
    "url": "task/2021722.html",
    "revision": "62167064030788b408e4c274a62445f1"
  },
  {
    "url": "task/2021724.html",
    "revision": "776bff0c2e12d69bfe403733b6448056"
  },
  {
    "url": "task/2021725.html",
    "revision": "65abf646b21f77c79aa9210b50bda919"
  },
  {
    "url": "task/202181.html",
    "revision": "c71600543cf8a708c792a56f8ea0467f"
  },
  {
    "url": "task/2021811.html",
    "revision": "b76b043cf0923477f2ba29b1806d35fd"
  },
  {
    "url": "task/2021812.html",
    "revision": "0661d7fd664b1001434c68b6b10f8306"
  },
  {
    "url": "task/202183.html",
    "revision": "d1af4bb09f95ca0120486c0641946d77"
  },
  {
    "url": "task/202187.html",
    "revision": "c249374a71ab67e44022abb0000d7565"
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
