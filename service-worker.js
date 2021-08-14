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
    "revision": "9c0fc35fea68eda2cee0aa5f4abd4910"
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
    "url": "assets/js/28.25d1827b.js",
    "revision": "12a2edcc8f5f35d9faca543e62f7891d"
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
    "url": "assets/js/app.ef78855b.js",
    "revision": "ca2da69fa723a996e393dfecbc2168b7"
  },
  {
    "url": "index.html",
    "revision": "22bac0861301d1c56b67f4582180f0fb"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "f3ac85e4d64d0948c819289d40434779"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "0d50ebb8c56a104c83820884d221a2c2"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "d606e6e0f90d71f7f4ac85a4f430b84e"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "9ca19b576bcfb88e91abfd4baef66791"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "cc2e3a2d8e54767e3428faa7e5cbc65e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "33d0f583b07cb613badc84e9c12a72bb"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "f6d6b58bee0615cdffbd7eaf706b3f8d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "2597db5c4c76e3cbc6fc8f314d4f09a9"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e7a20d54fc86986aa4ef1558a2afc908"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "a89bb39f0ab2681ba001ffea74102177"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "e9b15e39d88017170d58ab1cd7788df9"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "4dfea6a381091022135587b9b2cd52c5"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "8c731de9b98c232115deef59e15c35db"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "48e240549873ae3d709e50a716df650b"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "12f5caeac9d9713ccf9026fd52f2342d"
  },
  {
    "url": "post/plan.html",
    "revision": "7cb150ff31b20d68891392214b09d84a"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "4f0e7fa3a85712b9d7bcee5c5a10eba4"
  },
  {
    "url": "study/english/words.html",
    "revision": "410e5c815b1f91987c6e8814c652a53e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "507a12abb99e0ef88cb85251154b874a"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "33088ab83da9d3b236fa48b9a32c32a7"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "ca817ddfe2ee6d7bab9019c9b144b83a"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "679bb004a970ace712956b828095d219"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "5948d3f644191586de46fcc4a6153916"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "5084d03616d25d248a6651051a7e28cd"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "4eafcb9f724cb1957d16626a59d7e156"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "2a4aa472dab0e7b8a2f83c36f790f024"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "bbfa31d3676c31e7f7db7dff1ac4fbe0"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "e0eb2c3468c2d66e97e3daef6b24e3c9"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "359416db9b91cf366d1568009ecf4847"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "d8fe700a4ec4dbb2eb89829295abc787"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "03f3ce77e0d933700f5d7115cf16d9bd"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "9ec57e7e87760e25d44726b6bba972b7"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "d67a75d545871e359377296ebee14c58"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "ec3616109a6bc1ef788482142e06c36f"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "393a393ece201b132648e5c0944132c9"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0debfb78921124ba46fb1eda74585f4b"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "6732f27d13cb5bcea56c836b6171fd46"
  },
  {
    "url": "task/2021511.html",
    "revision": "4b93061495c369742274af1900296d1c"
  },
  {
    "url": "task/2021514.html",
    "revision": "5790645b8577616e895cd6e1c1ca0929"
  },
  {
    "url": "task/2021515.html",
    "revision": "6851c4b252c011b49a8745fdb6dc0c7b"
  },
  {
    "url": "task/2021518.html",
    "revision": "519a17ed4d74596470439d94f122b9a9"
  },
  {
    "url": "task/2021519.html",
    "revision": "46e035185009655ed8b70bdd551d1cfc"
  },
  {
    "url": "task/2021520.html",
    "revision": "bf911d79ed3247a2f100cc7353bf1d85"
  },
  {
    "url": "task/2021521.html",
    "revision": "2ac8555a8ce1d14ca9c98de9b99d3c86"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "283adb843d4e7881301ea53508370d4f"
  },
  {
    "url": "task/2021524.html",
    "revision": "be47d14671ab804230cb73b3d998d008"
  },
  {
    "url": "task/2021531.html",
    "revision": "4f17737573fc5172f1463c2af73bbef8"
  },
  {
    "url": "task/2021628.html",
    "revision": "4283848ade82bc2e5df75a1065402ead"
  },
  {
    "url": "task/202164.html",
    "revision": "a63d60b7e0789c65402b60c4ae325abc"
  },
  {
    "url": "task/202169.html",
    "revision": "b1503aa8f4c75a9137135788c4710be0"
  },
  {
    "url": "task/2021717.html",
    "revision": "4efd6ea42e554314e5f0acd9cb556594"
  },
  {
    "url": "task/2021721.html",
    "revision": "2ef3ad635ac9ff091e5959b679515db2"
  },
  {
    "url": "task/2021722.html",
    "revision": "3bb71c1ee7e77dca78431b8dcad1d5fa"
  },
  {
    "url": "task/2021724.html",
    "revision": "f1ef3848f1005f58e9b0eff783bbe401"
  },
  {
    "url": "task/2021725.html",
    "revision": "9e086195e49d9b263c88968a094cf395"
  },
  {
    "url": "task/202181.html",
    "revision": "8d11e2047c2258c0af3271ac73a05bf5"
  },
  {
    "url": "task/2021811.html",
    "revision": "e6b8216feab8021dce13dedc02c76fae"
  },
  {
    "url": "task/2021812.html",
    "revision": "db177ecf66f1e182d89fcd38c2c64dad"
  },
  {
    "url": "task/202183.html",
    "revision": "90a4901c87efd1a935815e598f803f27"
  },
  {
    "url": "task/202187.html",
    "revision": "278eb5047e69fabce765e64f7c594cff"
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
