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
    "revision": "cb1948525aed326b9b253f8acf726cc9"
  },
  {
    "url": "assets/css/0.styles.d57f9178.css",
    "revision": "8dfaea8a9e7b27b5ad155b581248cd17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.38da730a.js",
    "revision": "da4ddcc5206ba3b6fd6d740e721237bd"
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
    "url": "assets/js/9.ddebdb61.js",
    "revision": "38002207581f12ab21003fe5d4302fb9"
  },
  {
    "url": "assets/js/app.2ddbb106.js",
    "revision": "f220873da60dbe6ad710effa87355e9d"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "acbd56d4d07b7b90daf2e8c34888e35e"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "b69472a69de61f773e329a017cd8cc42"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "a6b3471fb3c63d3c381dd6f503785905"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "e01fdc30abfc8c8021ca1a1887f6d561"
  },
  {
    "url": "book/index.html",
    "revision": "62dde7386902b5d2eecfa6eeef13793f"
  },
  {
    "url": "index.html",
    "revision": "48323b392a0872813bad182c4176a5d1"
  },
  {
    "url": "memo/memo.html",
    "revision": "e310186fdff8e7c6f668cbd96f06b92c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "e3b33673c89fe4e740bb8087c05627e1"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "41841e9ed70101c93a85c78b16108cab"
  },
  {
    "url": "study/english/words.html",
    "revision": "cffab6989e4a66f728a17de957a2a694"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "42cd05a9cb9d031522dd81e5ffb22d22"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c34415fab37cb269649e602fd55a773d"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "8bd7fa2d1fd7b8601203f233196894ad"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "57102bfd7cebfa2cb6612d52a3b910eb"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "a0e1832c4b6b72427c07f88fd1714fbc"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "0489da32be9a8ee296ea3e63fa451449"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "b1cb4d43c51e75a7eb56a9bbe08a8303"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "28248d73a57805112eae06845a164cf6"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "902b8e3f49bb05e13c77b57553d0feed"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "c6dab196b215d60085a7a44ccc53806b"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "5b615a4fc667806c3bc471e23a317efe"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2a455d08707115ea2df9cccf1836a8e1"
  },
  {
    "url": "task/index.html",
    "revision": "dd594fe99ed763cf60659ce08763053f"
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
