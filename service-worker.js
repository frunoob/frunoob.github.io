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
    "revision": "03139b4bdf277f449f07e599d5d71cee"
  },
  {
    "url": "assets/css/0.styles.c4207d0d.css",
    "revision": "8d8335ec1fb9bc0c719776d49fa0009c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9e2136e7.js",
    "revision": "39b4289107f4c236e8637840542172fd"
  },
  {
    "url": "assets/js/11.f774d609.js",
    "revision": "d39fbce07f99df1c1295375943a0a5ea"
  },
  {
    "url": "assets/js/12.7d1fa54f.js",
    "revision": "e932bd780e713ede79c3b9bfb2180dcd"
  },
  {
    "url": "assets/js/13.11505b5b.js",
    "revision": "113d50cbac161b3384294fd6d1ba06c6"
  },
  {
    "url": "assets/js/14.5de2b240.js",
    "revision": "facc8eaa634635aa3cde59858822a52c"
  },
  {
    "url": "assets/js/15.7a49e2e8.js",
    "revision": "4ae749e003557d6887e9a6d10f024731"
  },
  {
    "url": "assets/js/16.906d102a.js",
    "revision": "e4f3a865ddd3ac7c48907bfb047c0466"
  },
  {
    "url": "assets/js/17.c240c86c.js",
    "revision": "da37eb8c04a98a96e05df366bd28cf8d"
  },
  {
    "url": "assets/js/18.edd647de.js",
    "revision": "5b9832f1f4bac57d65c85d0934d7542c"
  },
  {
    "url": "assets/js/19.18f97307.js",
    "revision": "cf3a3959f69ce42ee51aee442ac878dc"
  },
  {
    "url": "assets/js/2.8ae09ef4.js",
    "revision": "cbe9284dec7d8f4cce76198f5c532680"
  },
  {
    "url": "assets/js/20.7180cb57.js",
    "revision": "ff3472353395ffb171377036493e33bd"
  },
  {
    "url": "assets/js/21.0589ab68.js",
    "revision": "2d238b8f83b3f5946502b0de02e377ff"
  },
  {
    "url": "assets/js/22.d4af73fb.js",
    "revision": "c048346ca8773aa702057d90412f8263"
  },
  {
    "url": "assets/js/23.3307e5cf.js",
    "revision": "06e5783f2739e75e84a5acad646c4fea"
  },
  {
    "url": "assets/js/24.941039ed.js",
    "revision": "cb1c60990e99b18a7021513649c48e8a"
  },
  {
    "url": "assets/js/25.a1b98371.js",
    "revision": "1634f33986e167e1e02bc79fb66106c0"
  },
  {
    "url": "assets/js/26.bf8b6e29.js",
    "revision": "2f8b8b3db0964717e113b8a5c626a605"
  },
  {
    "url": "assets/js/27.0ba4f396.js",
    "revision": "90902b3ef62c39185d90c357da53dee9"
  },
  {
    "url": "assets/js/28.d63b0565.js",
    "revision": "3085e65644437e13e46e381b304b9436"
  },
  {
    "url": "assets/js/29.df90f1a7.js",
    "revision": "8a5974642c043ea3fcfcf60ea51d2cd6"
  },
  {
    "url": "assets/js/3.a5879e3f.js",
    "revision": "f113c9f78cd5b30fcf3415958888b337"
  },
  {
    "url": "assets/js/30.231e8151.js",
    "revision": "0ee02c3f98a7733536e8b34bdbab5860"
  },
  {
    "url": "assets/js/31.7c11bb36.js",
    "revision": "afd8e8d9816121e34f942e09f33c12cd"
  },
  {
    "url": "assets/js/32.7444a63b.js",
    "revision": "54d2727e4b358db62bdac1616d15e0bb"
  },
  {
    "url": "assets/js/33.2fce66b4.js",
    "revision": "b8fc49a22c99003f07ae8508b849d9b5"
  },
  {
    "url": "assets/js/34.b7fce023.js",
    "revision": "944513b4dd2cf2a7162317223390703e"
  },
  {
    "url": "assets/js/35.a2acfa16.js",
    "revision": "ac6f6ea220098f6b356bb5f00d27c11b"
  },
  {
    "url": "assets/js/36.6ff7ed38.js",
    "revision": "0ae1dd6012a40feb9e62c82e235c2379"
  },
  {
    "url": "assets/js/4.b14a1f50.js",
    "revision": "7bd13f0dbe136473e0741503c3f89155"
  },
  {
    "url": "assets/js/5.dab300c6.js",
    "revision": "d8e38af07a06b516c56407e7e06f4161"
  },
  {
    "url": "assets/js/6.95e137c4.js",
    "revision": "500e9913400fdc7b14414f1df7f330b8"
  },
  {
    "url": "assets/js/7.6c0d9008.js",
    "revision": "0f92391f8fb2ee600dd5ecc63c28c2ae"
  },
  {
    "url": "assets/js/8.f2a91cca.js",
    "revision": "632008abe9b54298c5dea99d69c72784"
  },
  {
    "url": "assets/js/9.02b209a4.js",
    "revision": "ec3b82f206682e4b37e756bec89e5624"
  },
  {
    "url": "assets/js/app.6e7d189b.js",
    "revision": "97b6c96b930caf702a4d3ac462a0490b"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "addf12ae7d05c610c08712de0278b8f2"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "417a25091e19ab68143cb8295a692ea1"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "a11a62be82739fca146d9f58056b2e58"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "7e2a96c3968d6b2d2de80a5ff47cc935"
  },
  {
    "url": "book/index.html",
    "revision": "ce3da03f760665944274c948c544d9cc"
  },
  {
    "url": "index.html",
    "revision": "bbc54c217f1fa05238c31135495b7567"
  },
  {
    "url": "memo/memo.html",
    "revision": "8bbe57df0b56dc082c7c55139cfe77f4"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "a35a710804c94c2132634db79886e781"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "d38dbf61664799ec751cc3af110c8e06"
  },
  {
    "url": "study/english/words.html",
    "revision": "f1f578a2ab8ef9bef840396354b32943"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "bc7d0cdf793bc636995c02d005d7041a"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "6402300f0a3c163eed2eaf4ef30d4efd"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "f5c6fbc5ffa26e740317e5e2360a0288"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "c63681cde49772087b6d77903b37d397"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "90282da74c67dbcadbc3b33f97b21d36"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "0e51d042944182dcef9cca7f61c2c181"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b91114a8ae4b74980bc23b0b7d864160"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "17ad04a5c9652c293eabb0f20d7aa099"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "7b0b54bb7be69af95373526ea92ee8fb"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "718c897b82445aa7f6b90e31043d3ae1"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b97909bb7cfb89f6c32b17f9deb6a215"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "25def037f1203818e22cdfaf09ef0625"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "079849de46e797b7dbb4a6c4300f5dc7"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "3694af1c9b94c4896783a8e5f38b28d1"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "a70603f9ba9ea1da303d0b9cc49e9143"
  },
  {
    "url": "task/index.html",
    "revision": "1ef5ccc8e49ed2906cc36dd49bafb1bd"
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
