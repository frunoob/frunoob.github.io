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
    "revision": "e6e38e7960bc5563bc30c41c8039322c"
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
    "url": "assets/js/35.90ec7ffa.js",
    "revision": "7f637aab9a724395a806b07be05e006d"
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
    "url": "assets/js/app.2a1d859f.js",
    "revision": "f7f810733c8a5d853d05318e9fbbbd22"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "a5af957a57220c15dc9fce35b9a24949"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "88d9c68436dddd9dd1f79094cc29905b"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "69e51e17e21e6de064a5852ddec3cde7"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "07722b25ccd8058ab57514d2b085776f"
  },
  {
    "url": "book/index.html",
    "revision": "e407426ab576a21dbb1cc888c8c36250"
  },
  {
    "url": "index.html",
    "revision": "13dfcb5beb8e8863021ef29c48c05b9e"
  },
  {
    "url": "memo/memo.html",
    "revision": "728066316ec2d0a66a402e3e03823d1e"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "6af06ea6a3c82725d02685baa7565409"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "06a24054139aef089edbd8a7b7be0204"
  },
  {
    "url": "study/english/words.html",
    "revision": "5bb0ea637fbbcd4cbc9734751b22c32e"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "7e8d8b3c4f04bc8a6035f53644fc222f"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "94f27d0a169ffd426c2da061c5ef8ff0"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "e11515330b2b3dbd31385f9014edb635"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "8f7b8652a0d2881e059c4afd758dce7c"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "d023abacdd8fff7ef60c2f955adc8e98"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "017aaec7c432039e2ec943649e5b0e5d"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "838782f49e992f9453c4fab1c0b6ba17"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "2dd2141c616a93e204b828d3f75e1e67"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "918d3937356f5b9d6bbcc6d2f2ef26b8"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "6cd281fadfabb22843fd222a4148b5e1"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "1b7141f951c121127f64f7193a0f8f91"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "79c9bcf3d08e80550a05350fb044c53d"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "4c8ac2ddab67d335996d3fd2618f599c"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "22ccb47699d27e08f36a9f3abd2ec327"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "09cb3f4bda2b301f494c44b0a33b6746"
  },
  {
    "url": "task/index.html",
    "revision": "c8af5098fa573246c96ddcfaa6c55c95"
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
