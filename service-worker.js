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
    "url": "_post/book/books/what-make-love-last.html",
    "revision": "e8629a3a7dd8c571eb6b38a0ed26a17f"
  },
  {
    "url": "_post/book/index.html",
    "revision": "a63a2df877c647511e82f14bf4d43949"
  },
  {
    "url": "_post/learn/math/index.html",
    "revision": "561f9fa55aaf186a9bf19f3a73ce9556"
  },
  {
    "url": "_post/post/20210421emoji.html",
    "revision": "bdcde9fb8f23477a662bd8138f4db7a6"
  },
  {
    "url": "_post/post/20210423english.html",
    "revision": "919ee12a81dd3b9a6dba024d63481220"
  },
  {
    "url": "_post/post/20210423math.html",
    "revision": "9e5eb33a4606b80e6862a8905eb6a328"
  },
  {
    "url": "_post/post/20210424use.html",
    "revision": "43394a71f900b1e83c43ee3c011a70cf"
  },
  {
    "url": "_post/post/memo.html",
    "revision": "af906e108c0a611962bd5c9f1783e2cc"
  },
  {
    "url": "_post/task/2021/04/21.html",
    "revision": "a5316e2ffe23e0af179b5714baff53dd"
  },
  {
    "url": "_post/task/2021/04/22.html",
    "revision": "3a170c4522bb61c827a21f6edf3798bb"
  },
  {
    "url": "_post/task/2021/04/23.html",
    "revision": "24b25669b303e4919ed9e14ffc18d494"
  },
  {
    "url": "_post/task/2021/04/24.html",
    "revision": "5b257dd3f4648d457c5376099759b140"
  },
  {
    "url": "_post/task/2021/04/25.html",
    "revision": "1ccd75f9cf9b012d8404b05779a0e5d6"
  },
  {
    "url": "_post/task/index.html",
    "revision": "05077a5cbea696118b74ebacff46aaa5"
  },
  {
    "url": "404.html",
    "revision": "410bae9f417cb341dfca9e3e8c9e86dd"
  },
  {
    "url": "assets/css/0.styles.33f6e0ad.css",
    "revision": "0a2d1abf59b666b06b96c62fcfebbf49"
  },
  {
    "url": "assets/js/10.ff418dae.js",
    "revision": "6a4a070b53e281ed47d1299baae63656"
  },
  {
    "url": "assets/js/11.aab8ba2c.js",
    "revision": "dbe4ba095b594ade7087267375d9654b"
  },
  {
    "url": "assets/js/12.525bedf9.js",
    "revision": "e8e04053c4cf2366829a514517915613"
  },
  {
    "url": "assets/js/13.99f79846.js",
    "revision": "c5f76910c333e92b14093bc8878849b0"
  },
  {
    "url": "assets/js/14.147c6bbb.js",
    "revision": "74692cb2d2b05a71196f2d2943ae95c1"
  },
  {
    "url": "assets/js/15.5c061035.js",
    "revision": "6b296a0a10d3508efb8955dfc61eb191"
  },
  {
    "url": "assets/js/16.02672b86.js",
    "revision": "c347272b0425e86238cfcbdbe4fa5c1a"
  },
  {
    "url": "assets/js/17.1bccddf2.js",
    "revision": "9d8ae6c2fd6a2a5d5d2517dd92c26657"
  },
  {
    "url": "assets/js/18.d98f5e65.js",
    "revision": "4c421e2a2d949447c9fc784f54fd4c27"
  },
  {
    "url": "assets/js/19.dff0b482.js",
    "revision": "2099f25306299bba9c9c5a1ab4fd7a22"
  },
  {
    "url": "assets/js/2.07964376.js",
    "revision": "9f5be747be0c7fc26402a567ca90b9c4"
  },
  {
    "url": "assets/js/20.20e80aee.js",
    "revision": "caecb6ffb29e489e0259d36269cdd38c"
  },
  {
    "url": "assets/js/21.f77ec1d8.js",
    "revision": "80f35e207fad41b3b3a980d71d3b925b"
  },
  {
    "url": "assets/js/22.3454961c.js",
    "revision": "9f4ffb81a9e59719579c3b19eed8782a"
  },
  {
    "url": "assets/js/23.7e4b8117.js",
    "revision": "fd02701ab51cb018d7710917f3911c16"
  },
  {
    "url": "assets/js/24.7d82d133.js",
    "revision": "050ad41ebab2a12e388c10ece531303f"
  },
  {
    "url": "assets/js/25.397fbed2.js",
    "revision": "66cca58a289b6147029354d106eed556"
  },
  {
    "url": "assets/js/3.df96800a.js",
    "revision": "aa3d1805b6137928628dcc2f1a35b3f0"
  },
  {
    "url": "assets/js/4.04f92057.js",
    "revision": "6bfa5ea81a315a525a35795faa492148"
  },
  {
    "url": "assets/js/5.fd9a4e3f.js",
    "revision": "1a40a6415143d2d3c86e31f1c9703515"
  },
  {
    "url": "assets/js/6.9ea92bf3.js",
    "revision": "a2ac16ff57a012a1537145ce24aa186a"
  },
  {
    "url": "assets/js/7.117e16dd.js",
    "revision": "55f58865fc113cde7a23b7e163159ff8"
  },
  {
    "url": "assets/js/8.c64f05a8.js",
    "revision": "3820127bac61352d835d41ce1610cfe0"
  },
  {
    "url": "assets/js/9.cae8e92c.js",
    "revision": "a16e2267ae582d2f30ebaf112d72bb59"
  },
  {
    "url": "assets/js/app.b70a3f39.js",
    "revision": "1fedf2d7fc4d49e7879dde145ca849c6"
  },
  {
    "url": "index.html",
    "revision": "8cbded9b24f55958a4998ac6ed265af5"
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
