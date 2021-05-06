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
    "revision": "1cf56c4d19633a7f8b1ed7587dbfe819"
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
    "url": "assets/js/24.3263007f.js",
    "revision": "8e7540e672632460ad57be4f32e46cda"
  },
  {
    "url": "assets/js/25.0d449f56.js",
    "revision": "c7811272c7951a3d93b2ccd0763d74c9"
  },
  {
    "url": "assets/js/26.d82ed32d.js",
    "revision": "9fdf9307c0252a0085c458fea28ec956"
  },
  {
    "url": "assets/js/27.2715cb3b.js",
    "revision": "6904464bbfe97d77f72b2a5f84ca1a27"
  },
  {
    "url": "assets/js/28.937fc5ae.js",
    "revision": "305b2bd7a8332758310396abc2c91c04"
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
    "url": "assets/js/app.04b79cf8.js",
    "revision": "871998015ab29408fe530aa1194e2be8"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "756f343c95742b349d190766ef608832"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "8735225442a795a64fe3627bef7edfa8"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "f509765d8472807700176493d15c9d25"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "4c871c182bcd8588dc2dbf4e0b8cb32b"
  },
  {
    "url": "book/index.html",
    "revision": "6bf4eb71d6780e3942d52840eca6613b"
  },
  {
    "url": "index.html",
    "revision": "37203663283b91c8405de99ec8637b76"
  },
  {
    "url": "memo/memo.html",
    "revision": "90eaec55f80add09bcbd205cf8db9264"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "09cfe5d0a2b4b3a1548453720d283719"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "e51004a07d8c7c97baa6653c768be302"
  },
  {
    "url": "study/english/words.html",
    "revision": "4f831a06dd930862a94efea76ed2f784"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "678ef78c64611c72bd299e3770510fb0"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "1480d02d3771c4e1b3abb46bd76aed88"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "1737173f991669c0536b3d8e449cb213"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "d7e8ab523913fed530718ffcc20b39b1"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "e06813b5c3b0c2f0d8fcf0ffda7a31dd"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f919ba5cfff602fe7381603381674f1e"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "a308aafe8818a32eb067be2f04c8f2b4"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "94282e1c81017c33009f70166bc65a1d"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "c81f1528d968ad6273394a4dadb781fc"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "13feeabc5a810dda3f0adceab9975115"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "63089a05a760ac7be310aa30a5eea0a9"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e1a51346fb4739b4a3d734947eba818a"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "f617058c014e6a131c9e9bd500697d41"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9b20a417c8475f4ff4409b9877d1c5ae"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "d42497d35741e57ed27e157b4c3d5d8b"
  },
  {
    "url": "task/index.html",
    "revision": "e85d8f44ca54fafc6c5606fa3f01249f"
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
