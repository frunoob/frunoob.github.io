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
    "revision": "bd31bca71e1ec012fbfdf30728cdf18a"
  },
  {
    "url": "assets/css/0.styles.cc184ab5.css",
    "revision": "091d0595bdddbfea0e09c30f1778379d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.279cc9d1.js",
    "revision": "0891364f601e701a72cb2dff47bc0fa4"
  },
  {
    "url": "assets/js/11.f8a635b9.js",
    "revision": "f671518690e1457d07bade8bc2fb0d86"
  },
  {
    "url": "assets/js/12.99c6246b.js",
    "revision": "98484ce65f91769403368d9a4694e8d2"
  },
  {
    "url": "assets/js/13.599dd7f8.js",
    "revision": "9ca3b2724b85912c6131f5bd0736d8fa"
  },
  {
    "url": "assets/js/14.4aab294d.js",
    "revision": "4ab932212e6cdae10d1d4f621b35b6f1"
  },
  {
    "url": "assets/js/15.3ae24990.js",
    "revision": "40e17ef8c35947fe10b0e93d2f3134a6"
  },
  {
    "url": "assets/js/16.7dcc26f3.js",
    "revision": "b2b4f49be83b7838d21e9876bc2e80b9"
  },
  {
    "url": "assets/js/17.4120b576.js",
    "revision": "5130bb3f5c72967e511d1e8f3cac5036"
  },
  {
    "url": "assets/js/18.5d312aad.js",
    "revision": "e3b3ae05c90662fc0315ed71c82ae96b"
  },
  {
    "url": "assets/js/19.625f592c.js",
    "revision": "0dd4ccc7a3e8d4a967a34c49df1b719a"
  },
  {
    "url": "assets/js/2.ea6f25f3.js",
    "revision": "f9f243fbca57448991e87a8158caf7e9"
  },
  {
    "url": "assets/js/20.873c0eda.js",
    "revision": "e96073e1633ff609f08fcb47e70620e4"
  },
  {
    "url": "assets/js/21.375d3343.js",
    "revision": "32bfb16caa3fcddea916693bc1d9b001"
  },
  {
    "url": "assets/js/22.4f34ade6.js",
    "revision": "e2e2df19aa1eec53f2bcce63a712db06"
  },
  {
    "url": "assets/js/23.8df4f8cc.js",
    "revision": "a692d7128a1f7233428cbe0f97e9c945"
  },
  {
    "url": "assets/js/24.6b00c196.js",
    "revision": "b7091eacfff56a78d71dccb59fabea2c"
  },
  {
    "url": "assets/js/25.fdd78f27.js",
    "revision": "8801d1658bc68968dab9fdab9843d432"
  },
  {
    "url": "assets/js/26.cda05549.js",
    "revision": "7541c4b4354d3f761e61fe4404c0debc"
  },
  {
    "url": "assets/js/27.8e91842f.js",
    "revision": "583735fe182b859e527ae21a26967fe7"
  },
  {
    "url": "assets/js/28.028a4743.js",
    "revision": "194e8cd7f8267f047ceb9b1cbe613006"
  },
  {
    "url": "assets/js/29.1cc48e06.js",
    "revision": "d0b9542420bae671080cda0c9abc58fd"
  },
  {
    "url": "assets/js/3.b923fc64.js",
    "revision": "d9ba5ca9056bb59c962b63dddc17a0dd"
  },
  {
    "url": "assets/js/30.6136e9f8.js",
    "revision": "c73d6a136404339bb2c6c10301a69e1d"
  },
  {
    "url": "assets/js/31.1d9c8017.js",
    "revision": "3132314faf6a24506f56c889caa2dfa4"
  },
  {
    "url": "assets/js/32.da4c60ab.js",
    "revision": "18675a2f0fb4d89f5274785039b67040"
  },
  {
    "url": "assets/js/4.a5adbfe0.js",
    "revision": "b57ebd995303a513322075b09f377107"
  },
  {
    "url": "assets/js/5.0868dbc2.js",
    "revision": "a7ac0fdf5e8d809af00b20139e6e3203"
  },
  {
    "url": "assets/js/6.44af4953.js",
    "revision": "389680027f534fe7c2c712bfeddd5370"
  },
  {
    "url": "assets/js/7.86b0ef45.js",
    "revision": "bc1270afb0b54fa0d8ed10edc03b6ee2"
  },
  {
    "url": "assets/js/8.4661adad.js",
    "revision": "b06167c6ef30b1281b9d2760bcb4a7cb"
  },
  {
    "url": "assets/js/9.ecf40e1f.js",
    "revision": "dcebd6e19e599096be02ee55b9b53727"
  },
  {
    "url": "assets/js/app.93add05b.js",
    "revision": "1ad4fd156945e4834636682cb6d60d15"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "2f6584fe43b6db13c128817db92d42aa"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "021cb21ed3127f42e45b329a708d7cf6"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "30de3690adaecda5e94a00d96869910e"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "92b93201bb4d49e3cf7acac4eac5df56"
  },
  {
    "url": "book/index.html",
    "revision": "e14126e387ffe0af18c4a27d9873d2b0"
  },
  {
    "url": "index.html",
    "revision": "c75630bc6a8046d486db5bd68ed2bcb0"
  },
  {
    "url": "memo/memo.html",
    "revision": "9ddf8260735ad9c2150213a41cd89d7d"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "1a202cdbf21ea8d72199869631e3bd74"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "172f583e834588e02222918d28be3304"
  },
  {
    "url": "study/english/words.html",
    "revision": "dcbb806592a2be98887302f35f4bd177"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "929a874e0ba187bd58a93a444e658e1b"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "3eb6e412b9838b9eadcfa7d380fd711d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "9a00a2a6d690578397cc68619e6a367e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ac96f013a29392058b995e70679d63cc"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e61cec456c280271904238ed9889d29a"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "cff6e0e7e44835f633def53c008df77d"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "201d96676c1d88ea28ca64a42e4c09b6"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "65d5e4b0a38b598012d263a893aad268"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "426c6988f36cda8af14bd535ede4056e"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0b9fb47a2b686dc6619b237d6f5aab26"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9c357203f4911147a1051ea7a27a6532"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "8318906e9d8a30731613268c249311fe"
  },
  {
    "url": "task/index.html",
    "revision": "e167c37cf9180908d6aa9761724e7d94"
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
