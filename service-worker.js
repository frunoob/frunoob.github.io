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
    "revision": "00956c87307351a98c279383f67d86df"
  },
  {
    "url": "assets/css/0.styles.ba2484fa.css",
    "revision": "8482f19c8bddb5f5953a7fe4f919b775"
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
    "url": "assets/js/21.2ddde012.js",
    "revision": "c7433c5e25d5717c292d65326370195e"
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
    "url": "assets/js/app.c8b82fea.js",
    "revision": "dd71ba5dd9dab06541bb19c162813890"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "7ed3eefd61164592bc412e7017760722"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "77824f6548d52837bb86aeddec6efe1e"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "a407c5680250a5caa2a4c5721e215739"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "ca6be9963b3981c2699f008d5422b78c"
  },
  {
    "url": "book/index.html",
    "revision": "a20c92727a56b3ea6cb7afcc9d933485"
  },
  {
    "url": "index.html",
    "revision": "e460cccc93df6eae0c0fb51095440764"
  },
  {
    "url": "memo/memo.html",
    "revision": "3685fbe2c0e35a96837e850e655524e9"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "250771914fdbf425818a759df691cc5e"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "00bf99dd6d70d00685b13a2486bae16b"
  },
  {
    "url": "study/english/words.html",
    "revision": "5dff5bb5df0741d301d0849a5754578d"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "82f70334ea281852beddf4efd2ed2a87"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "a76624aeeaae49a900f7f0ee5c299079"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "0a4b11c9fda478c1e74c4b91910036d1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ffeeaafc58fda3d2b968792d66f81654"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f354ae6ae20f1ccd1478494db5844e13"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "82d873cc97d9935494ddc875229b8e8b"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "0df59fad538416680e6d9290d2687a5c"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "6edd34432be1eace8a278b38c262024e"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "2a565b88715b77ba81752a66f894697c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "0360cb9585faf3f705dd303ffc81e3e5"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "2a305cc905e8e1060b6df224ae607d7c"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "e46bd2b37236bd5dac8adbf70796fdb6"
  },
  {
    "url": "task/index.html",
    "revision": "bb5c007a80dc387788f5988b3266f857"
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
