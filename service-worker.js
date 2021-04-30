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
    "revision": "3d9ce056083c890ebc36ed766e7ac3de"
  },
  {
    "url": "assets/css/0.styles.73902e72.css",
    "revision": "0761955d34eec9cee11fe01407ea558c"
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
    "url": "assets/js/24.d4145f86.js",
    "revision": "f4e69d9546921685bc7682c43669f518"
  },
  {
    "url": "assets/js/25.740f1670.js",
    "revision": "3bb146a168b58e91b3cab994e1f6bc25"
  },
  {
    "url": "assets/js/26.e3c4412f.js",
    "revision": "86cc5f029c9eb8e378136635bf574d4c"
  },
  {
    "url": "assets/js/27.ac6e58d7.js",
    "revision": "a8b43e25b9debb9daef722714f0df13a"
  },
  {
    "url": "assets/js/28.29b999fd.js",
    "revision": "dd6aa58620d8a08082f85be3c80dbf15"
  },
  {
    "url": "assets/js/29.1cc48e06.js",
    "revision": "d0b9542420bae671080cda0c9abc58fd"
  },
  {
    "url": "assets/js/3.481a40d8.js",
    "revision": "67daacf5f4ed1638e1340d774baa3608"
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
    "url": "assets/js/8.2fbc1de4.js",
    "revision": "08ce80a7f5ccc14f51edd21d61f6d456"
  },
  {
    "url": "assets/js/9.ecf40e1f.js",
    "revision": "dcebd6e19e599096be02ee55b9b53727"
  },
  {
    "url": "assets/js/app.e78bb220.js",
    "revision": "a92c8ddb8c427316dc8bf4d66839fb07"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "5b6a98bab7206f66b8d6e3d218b02e7d"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "8e8a732716e19e99edd64c6055b21762"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "93569a73a439608cb5fa09ca87c041f0"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "8900f9020a03fcac34aaaaff19d58526"
  },
  {
    "url": "book/index.html",
    "revision": "a9622a8cbb1595a7343ba4d9ad64c9b4"
  },
  {
    "url": "index.html",
    "revision": "503a2171d243f7e60879d00878a26113"
  },
  {
    "url": "memo/memo.html",
    "revision": "48d04e748a425b18935c1b32baa279d2"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "08b26587940b06f6780b4398afc8a4e6"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "b577e346ce2266a1a080ab01bf7d6a79"
  },
  {
    "url": "study/english/words.html",
    "revision": "7887bd825d5ce6d2dbe22902ac477ecd"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "3d06948ea4a32be1e6f6b2b7f86a07f4"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "2dfa9f982a8c677356152d0aea01e6f2"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "4b0e9a62dcc248fffa1993a69d687395"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "20fd2490fa166a3d1a00ba01cea07ce2"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e81ba74630c78b9e9ec44d25a3f22d82"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "daa4d615e6330dc3050bb5dd58b21ec4"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "2816ea8e3f16aafaec16e74bfa7cd404"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "6b5cf9f6395ae19399d55867ecd20dde"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0710cf469bc26a82466a90351bc3f404"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "71c779d9b3d0de89c55d0d8479aa4a6c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "0d9b180c9983aa30b86c7ee5b582be1d"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "271b68f5f140c1aead3339922f19b142"
  },
  {
    "url": "task/index.html",
    "revision": "bd1e412e848ded36f63c0ce1c3c40cbb"
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
