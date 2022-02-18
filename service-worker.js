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
    "revision": "41bafc913eaa0c0aea991cee27942ff8"
  },
  {
    "url": "assets/css/0.styles.ada7f688.css",
    "revision": "c811b7174268b8111894de9a851d3494"
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
    "url": "assets/js/app.531db424.js",
    "revision": "99408c8604bb2c214c096a03e29c3e2d"
  },
  {
    "url": "index.html",
    "revision": "abcd6fcbdb061b8a5b7a94e70dfc1cbc"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "c927559c035fe857eb1481bc15d77f8c"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "60dc738a7900fe3e4e0afab9f25b1605"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "0809e0383a4242743f7790236a5e195d"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "97b743a6b3ef68ac3cba3479bcb372e9"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "0928b6e4120a7a450374710a69e67b71"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "f73ff46c8c14fc211ea1451e89e86f46"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "1f089f9c554b964505afe3bd06d0405b"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "8ddb20a947707f13a82902e19fcd37af"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "93dc05957e84df747c1225ec2811b144"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "920639bbc041434e21fffa7aa3dfafdc"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "49c4402f1d4f0b15bd1f4a682656891e"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "860633d7273170b1ba546806cdc1b571"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "04dad18cbb8fa37002e9ba1fc7e15757"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "62ad5f140a0ebf2c33f69b449f0ed3f1"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "13a1ee3a1792e6678e18b10164fda6f3"
  },
  {
    "url": "post/plan.html",
    "revision": "a9dcfcc7c1a7ec21f4f4b30e447b8884"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "f70b278b3d8eaa28d0d85e761197b3b1"
  },
  {
    "url": "study/english/words.html",
    "revision": "a5b1d4895cd06ac19b21c8b770b386ad"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "09a997e0b85bbbfdc94b9fab8e5e6fe6"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "b87cf638dfef0ecd7d306a3dcc881627"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "03e6140221cc1bd8648ef36eb1619d57"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "802ccb81c306f63a1c4a590a34628e0c"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "eeec50ad5d8436aa5d04b248e0dda365"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "920f0533b074e5d08174090264b34047"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "62cf17c89913a9261ce2e72a5b57a999"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "c3c6ccc71f65734b817f87ac0f7e6814"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "6646720031094381d1c8ec92e6fb1a6a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "3c7830429c8cead7e43ca423a838a30d"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "60fcfd57d10fbf3ca70e3ff76f4203ef"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "14c69b4ed28b6339a7c4fa2cc801303e"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "61d8b7e804bb774fae629f32ec923643"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "69dfffd0a718b92f8c31df0002df2e9a"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "7f93ac39e24140a84d9d6541ee17e768"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0502482421a8e2ed4cb0ce4a33ee08e6"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "ada274432320ad658b032222d9fc733d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "d2be864b1005984fbbbcb81ba5b4eacb"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "305e4556a49f32cee4d1d6e15140d27c"
  },
  {
    "url": "task/2021511.html",
    "revision": "38d572ddff267469f08f326b1c6d56fb"
  },
  {
    "url": "task/2021514.html",
    "revision": "1280bcba973fbdcf9c667475e1a1a9ea"
  },
  {
    "url": "task/2021515.html",
    "revision": "199e97f6b83abd92999a2fbbc9b7c704"
  },
  {
    "url": "task/2021518.html",
    "revision": "d4ce1412f3fd5d0f3fc2757af892b564"
  },
  {
    "url": "task/2021519.html",
    "revision": "84f6aaaebd33849557af0884e14633af"
  },
  {
    "url": "task/2021520.html",
    "revision": "5d6d4c990750662c0ea163687fbf15af"
  },
  {
    "url": "task/2021521.html",
    "revision": "9d035c3794a03303c7d7c49b00d340ac"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "7f27dd2c0eaa1b46bd6a86d6ef7206b4"
  },
  {
    "url": "task/2021524.html",
    "revision": "2119163279a98b7a6601bdd5a4519a07"
  },
  {
    "url": "task/2021531.html",
    "revision": "26563f644a882a0939a242e9c0439b2f"
  },
  {
    "url": "task/2021628.html",
    "revision": "9d22a2f140e7adfa46a5824ee5b7a26b"
  },
  {
    "url": "task/202164.html",
    "revision": "8419d70900a7dd23258989c575d8c70d"
  },
  {
    "url": "task/202169.html",
    "revision": "c394ba111872afc31f36e5aef80bdf0f"
  },
  {
    "url": "task/2021717.html",
    "revision": "29341b586613dd9332406cd3f2c59ec3"
  },
  {
    "url": "task/2021721.html",
    "revision": "ef4146167d9b00a5d955433bf2beb199"
  },
  {
    "url": "task/2021722.html",
    "revision": "54311dcb2f3ad1ee11e1f3e8ec1ed7e4"
  },
  {
    "url": "task/2021724.html",
    "revision": "0a5fcb5067c96396dfb7731ccfa97938"
  },
  {
    "url": "task/2021725.html",
    "revision": "0396578eb927eaf9762f0d924486a9f8"
  },
  {
    "url": "task/202181.html",
    "revision": "c8eec05f1cf8d492afa10f7b12ab409b"
  },
  {
    "url": "task/2021811.html",
    "revision": "0a844c1c0b29db0f65cff09bb083cada"
  },
  {
    "url": "task/2021812.html",
    "revision": "23063b4b49df60e6caaf20c356bf1dfe"
  },
  {
    "url": "task/202183.html",
    "revision": "dc82fd1bae674f21be43175466fead5a"
  },
  {
    "url": "task/202187.html",
    "revision": "780a93e3f972b9a1e6d4071930d12b5e"
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
