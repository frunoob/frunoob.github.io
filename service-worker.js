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
    "revision": "3b385867449d051ef2c4bbdd8c55c554"
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
    "url": "assets/js/15.03069607.js",
    "revision": "2e22f447bfce10a13ce1b43822ec8cb2"
  },
  {
    "url": "assets/js/16.32e0539f.js",
    "revision": "0d8656993ad957a96bc8f0cdd06f0e1f"
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
    "url": "assets/js/app.4fe7eb48.js",
    "revision": "843030fc0f09230ee3ff4f4a1d059538"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "2319b389d6f0f5dd15a03cc312cff083"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "33fe7aa1e44200a2ef9971cf48caea97"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "ff5c8f4d87504297c7624e92b7eb3f6d"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "28b942cb7f7604e1c71e393aa36d1644"
  },
  {
    "url": "book/index.html",
    "revision": "d93fe7653a52d83500fd11cd34838965"
  },
  {
    "url": "index.html",
    "revision": "daf38a4ff9ca8dcde3879dea01d930c8"
  },
  {
    "url": "memo/memo.html",
    "revision": "13fa9161e83a467b0b678285718e7286"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "918208ae8e56c911026d76c696ea6372"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "c0acefb03ada2305f219a217c3979061"
  },
  {
    "url": "study/english/words.html",
    "revision": "3760214c7d592ccc7d65b73ad54d62de"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "21287271d7e71c597ffcac71ac5bf85f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "e75f4f1b41bbe39610466a26a8210053"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e56738cc2b7dc8ac744459e2df54a69e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "a90ff78dd25c9f0c56bbeab8bdacaa78"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "aeb00198fb2f74fefd56234f6213f5ef"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "da4016cd5f24cb1001d239911c216b61"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "03b099622834d108123498810367fafd"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "328f616d63158fdcacfe9dd99aba5f53"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "11fc872220dc4b27fae2dc564d8967a9"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "9b1e187f2a9f95b02db08c974e79285c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "3e8742961ef266727c510b0e4d174893"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "089d9f1b7db3359e6d649fc131bba6ac"
  },
  {
    "url": "task/index.html",
    "revision": "febb13bdfab60c9d2f270c4b40c3441a"
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
