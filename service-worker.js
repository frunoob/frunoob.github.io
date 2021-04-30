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
    "revision": "37dc4fcaef8cefedc7c7b6fac27dd18a"
  },
  {
    "url": "assets/css/0.styles.631858e3.css",
    "revision": "dbb1d97cf08041d55d5b11ff2527359b"
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
    "url": "assets/js/app.5a36f2e1.js",
    "revision": "61b07ce0d03ee4fb7f09de6d7fec67dc"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "05f06b88e645f28dc28b5889bdd8137d"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "e422e20134f8fc446918641e4a8d23f9"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "9766afa7a98d5fe1d02bd165d28073eb"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "a9bd84c253a30a9e506edb10b7815119"
  },
  {
    "url": "book/index.html",
    "revision": "db6855dfb799876499377e60450bd8ee"
  },
  {
    "url": "index.html",
    "revision": "4a0d38319d8df88248d02bfc572694f0"
  },
  {
    "url": "memo/memo.html",
    "revision": "5d3970aea360c66661f0acef50afddf8"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "e9fa2bf651d516c347613d3611ed60f4"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "2a61825b633fba40960a0ac29b52eade"
  },
  {
    "url": "study/english/words.html",
    "revision": "e68a5b4d0827d74f3f06db6a02d8d4fc"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "ea17f709294d840797e36df1c6e74d40"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4eb5b39103dbd138f382301bf74032f8"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "2676d36d4612b421181458a1ed25627e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "50dd792867aaa11e9e28c7aa45ba5d16"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "f9853fa9cc8be0329de18c5c8b6d57e8"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6ab0f28193253ed90cad2c0b2d328c6c"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "0114612641229eae590e8c2da9c56ce8"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "87356e1e5161f4e9c3ce1fdbec5cffda"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "0e2a48d9e6203e6c63d1f964e7b04fe5"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "a88d0a5a41a9e2604a6485d5343aa5d6"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "e6844f5b08dee15e0d7991498cbc4b08"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "8e7f300c4ec396d4b0fe096235ea4744"
  },
  {
    "url": "task/index.html",
    "revision": "e6a02b849527250efd4a9467e0ae287c"
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
