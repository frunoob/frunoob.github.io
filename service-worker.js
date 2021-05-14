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
    "revision": "c6fb8c73f7ce96186586598bf38359b6"
  },
  {
    "url": "assets/css/0.styles.92760145.css",
    "revision": "99707eb9199d5cf164085eba3dc5d36c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16550103.js",
    "revision": "fa3b21fa530e8d8bd5cb033475bd1011"
  },
  {
    "url": "assets/js/11.f2702b8a.js",
    "revision": "4e94f8c93b083d7d50ad6ae198bcfd63"
  },
  {
    "url": "assets/js/12.9a1a94e9.js",
    "revision": "b1a3da83a23a33b605f8fcd20ab81533"
  },
  {
    "url": "assets/js/13.621504c2.js",
    "revision": "7c60f310031efc700d4674dd590261ed"
  },
  {
    "url": "assets/js/14.3284b063.js",
    "revision": "6f9e8bcb1d245ecd52a967dd20ffa3f0"
  },
  {
    "url": "assets/js/15.532d8f28.js",
    "revision": "8fb60f305d3ea370e63bca27d681b272"
  },
  {
    "url": "assets/js/16.f50d3e7a.js",
    "revision": "1d9dd690fbc4d0a5c3acf688925798a8"
  },
  {
    "url": "assets/js/17.ab59410d.js",
    "revision": "ede18e7648fe51422ba597c552ce59dc"
  },
  {
    "url": "assets/js/18.02e606b6.js",
    "revision": "af06dd3bf5c504c7203f5ab6fd23e1c4"
  },
  {
    "url": "assets/js/19.683cf9b0.js",
    "revision": "6832f3ed30535a7d0cc132b4c417a5d8"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.31604627.js",
    "revision": "ef64c3984eb0a1b89714bb80117fefa3"
  },
  {
    "url": "assets/js/21.6ac07d82.js",
    "revision": "cfb87534323320ccc082e7461cb62d9c"
  },
  {
    "url": "assets/js/22.49cefd48.js",
    "revision": "b72d3a53f16d38c537331cce22c0ad20"
  },
  {
    "url": "assets/js/23.bd8c0be9.js",
    "revision": "09caba207d99810e8bda592a9bc8e762"
  },
  {
    "url": "assets/js/24.5cf6b9a4.js",
    "revision": "8c9964961ea286a95bde9ca4da96648c"
  },
  {
    "url": "assets/js/25.84cf3eb6.js",
    "revision": "89421068247a930d863bceb4116ca149"
  },
  {
    "url": "assets/js/26.af94b493.js",
    "revision": "8d434cb842b4688c574e22bb89db13f9"
  },
  {
    "url": "assets/js/27.19173685.js",
    "revision": "c4986365fbe29fca00719808b4456278"
  },
  {
    "url": "assets/js/28.b9c193d4.js",
    "revision": "0c89534e6c805f196381fdb4f3c071de"
  },
  {
    "url": "assets/js/29.cc646802.js",
    "revision": "1a2ed4292c008e102c76d1d7b9116cac"
  },
  {
    "url": "assets/js/3.2c95ad0d.js",
    "revision": "24b4e3c2d35dbcea3d49ccb1474ba2e9"
  },
  {
    "url": "assets/js/30.e921c463.js",
    "revision": "8ce4b04b7ee91dbcf80c3db3d2cd5a7a"
  },
  {
    "url": "assets/js/31.47296141.js",
    "revision": "861f2dac8b38d1da5e73e845c84c35e3"
  },
  {
    "url": "assets/js/32.327f7640.js",
    "revision": "66889e4923fc76abe6c0e4fff460b2c6"
  },
  {
    "url": "assets/js/33.1ecad7b5.js",
    "revision": "fdc8dbcca7f145e147c1610cf8710fee"
  },
  {
    "url": "assets/js/34.d4b4948c.js",
    "revision": "74acd3a236edd69bbaed5f0209b6a788"
  },
  {
    "url": "assets/js/35.c9175545.js",
    "revision": "3f1b45cc69de0ed8ac3a940308bc73d5"
  },
  {
    "url": "assets/js/36.ce92ee16.js",
    "revision": "eb8ff523b9d9aeaeb6d06bd5d8e9efe6"
  },
  {
    "url": "assets/js/37.9c6a7d78.js",
    "revision": "9c1901f4c27ee3858bc6d6a111dc7c13"
  },
  {
    "url": "assets/js/38.c5841653.js",
    "revision": "eccc4c5c6efc446fe279fd556a3085db"
  },
  {
    "url": "assets/js/39.9fd011d1.js",
    "revision": "98a725b2cf3b3b0a9adee5e7521a69d7"
  },
  {
    "url": "assets/js/4.fd03a620.js",
    "revision": "55d8c90ab34a2f5cc4ec94c3ce1e7cb2"
  },
  {
    "url": "assets/js/40.de3b5142.js",
    "revision": "219f17f0cb2f2729e26bcb7b41ac3333"
  },
  {
    "url": "assets/js/41.34fbd9ef.js",
    "revision": "453fda51bca76ee9c56d995074850948"
  },
  {
    "url": "assets/js/5.e84f0a01.js",
    "revision": "5314e5204997c617533079617046d451"
  },
  {
    "url": "assets/js/6.4c971fa6.js",
    "revision": "d22284561b7bfdcc936c8b55ae97dbe0"
  },
  {
    "url": "assets/js/7.a4d388c9.js",
    "revision": "3f6295de867d12b4268d4d6fc9f4e187"
  },
  {
    "url": "assets/js/8.48513329.js",
    "revision": "49c3d57e7be850ea7fd8798e7fc43836"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.cfa6d0e8.js",
    "revision": "ffcb6fe4e1bfec468d9073d8b53a23cc"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "67bb92b35baa2abde5bc042f91ee5286"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "98128052b3677c65f5a92bd3b95b975a"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "8985006ae27c63f200028d0ff90e6e86"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "4d275b247e5658700e4b1357ffdb8608"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "a1bcd616d6087ce756ec6f884544d3a4"
  },
  {
    "url": "book/index.html",
    "revision": "9fc74396f64300de25cb2eb087399aad"
  },
  {
    "url": "index.html",
    "revision": "0bf2de99e1681f1a15b0f5282b53b3e0"
  },
  {
    "url": "memo/memo.html",
    "revision": "24a9574b87aeb5d6187ee7e3f5c4914c"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "3fbe1b31a2c1cb0591d66927bf895b30"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "715724b414154ec3ff05ee9baa345765"
  },
  {
    "url": "study/english/words.html",
    "revision": "db2202920e9caf4ad276b1277ee76eef"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "d58fe148e2a3a17808ac8b4aef4bb8eb"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "f7a46be1e2f690b07a1900ab172037dc"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "7c492ea221938c3c4612ac96875d26bf"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "3dedbfac2dd4953b05a7cb1fcc57179c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d0cc45b36f7df4314ab2fbd25e68c2f3"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "a411df7a7c0844298fb1af7eb0eebf00"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "555aba657d0323022a13a277a1319b7e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "b44a43baa91d818b1a5276c946a17cb4"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "50cf88d86ab2d8de8d8291d6c8741e3c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "82c9ae7f673bf49ef0b05f0ab08b2974"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "df7456d616b69ec18d004d7fa0b4d8fc"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "22933acb899319fa8915ea611ef8e76f"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "8bfee960c3330f13aaea2c62d50d6948"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "a91219c51f59cad13b6ce6fe89ca7dbf"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "5e76baac387bc328db39521865faaa1c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6f748f4d4fc2a9b36e4f76db39bc76df"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "cf29816447d672277c5bff0b54c2b38b"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "2f445b5ec2222542081c284d87c68086"
  },
  {
    "url": "task/2021511.html",
    "revision": "f3d5e9298e50cc7f6ef0322e3c3d9137"
  },
  {
    "url": "task/2021514.html",
    "revision": "88c277d8566e505b70c099cc1f53b2af"
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
