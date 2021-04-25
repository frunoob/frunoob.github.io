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
    "revision": "c78059e31e9f561f3a325904ae9f05bd"
  },
  {
    "url": "_post/book/index.html",
    "revision": "92b4391ed162c896e363ce03882a0719"
  },
  {
    "url": "_post/learn/math/index.html",
    "revision": "641ec931d89f0d865b1e4beb900b54f4"
  },
  {
    "url": "_post/post/20210421emoji.html",
    "revision": "9325d4f76381bd07010c460b9a016a3a"
  },
  {
    "url": "_post/post/20210423english.html",
    "revision": "9dd08d6af61e511b1c6a01f3e2d9120e"
  },
  {
    "url": "_post/post/20210423math.html",
    "revision": "7319489524ecb0b3517181b822430b6b"
  },
  {
    "url": "_post/post/20210424use.html",
    "revision": "896ae3ee33b85ac209c96a949d75c84b"
  },
  {
    "url": "_post/post/memo.html",
    "revision": "9741a1601d2ceccfe4fc13ccafcbde2a"
  },
  {
    "url": "_post/task/2021/04/21.html",
    "revision": "7f17a8f50aaaf28700d3f38db97677d1"
  },
  {
    "url": "_post/task/2021/04/22.html",
    "revision": "4647256e749e4e9a15077de392ac47a4"
  },
  {
    "url": "_post/task/2021/04/23.html",
    "revision": "4d9e655250562e84bbeca23eb4825f95"
  },
  {
    "url": "_post/task/2021/04/24.html",
    "revision": "4a934efb9f7e9a8ff9089fb6481241ab"
  },
  {
    "url": "_post/task/2021/04/25.html",
    "revision": "408404d1628d4cf3a3a8ab6de36e3b0b"
  },
  {
    "url": "_post/task/index.html",
    "revision": "cd16fb407061c9d086f31644b6516d2e"
  },
  {
    "url": "404.html",
    "revision": "ad125ce40cd54a0ac51eec3a32d3d98a"
  },
  {
    "url": "assets/css/0.styles.c83a6a87.css",
    "revision": "841688675c2132ad54d236fc0c530b2c"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",
    "revision": "2c50d7a0caadcdd36b063bd9f9268291"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",
    "revision": "3392cf39311b42f70073c2732b99a24c"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",
    "revision": "342a61e0c4dee016881d00d9fa69c335"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",
    "revision": "b27e354b9a940cfabb1cdad2f5d35eb9"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",
    "revision": "bd18bae257a88cfa6a36310cd585d0a0"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",
    "revision": "314623ce54a8a2654fb5df3c9cec01aa"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",
    "revision": "359e1e974d07f534d0665dc5add72209"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",
    "revision": "e2c9ac8504a2e0f1ec22e5904087174f"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",
    "revision": "6b53a2db48b3bbde91ec9c85590ccc44"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",
    "revision": "98d5da581ba8efea0934c92794c6c56c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",
    "revision": "a2be00f37608cf99fb1c0351dc4e9342"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.233f218e.woff2",
    "revision": "233f218ee616854f491c7195cd8fffcf"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.316611c7.woff",
    "revision": "316611c7a4afe59d3bcbe9e0f1a41613"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",
    "revision": "ed829b5fabfded4f5f943df1012da1b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",
    "revision": "09fa2c8f6a5a787648fcf62022b9e5c6"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",
    "revision": "ca23ba4b607268345b1f0b22bff41292"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",
    "revision": "cd5eb9a8d163f765f01c4b1a44567f4c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",
    "revision": "14ff9c98a820d988c169e27ca3eb78b8"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",
    "revision": "4dc3271d3627578d951ecd3fcdb7f762"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.4eee467e.woff",
    "revision": "4eee467e52c8113a7c48549dec426808"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",
    "revision": "6c094af9274ceccdc817400fdf49c5af"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",
    "revision": "ab80a08c3c6915afb4b4a3300a55ef8f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",
    "revision": "c89c643655fabf99f2b78eb9cc5cf4b0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",
    "revision": "7b481bb892d872c27234188b59ca8f10"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",
    "revision": "8bdd60921916168d5c53c2caf3931e86"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",
    "revision": "e1a2ff93bd15ea54164340e3d1b2f901"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",
    "revision": "1aa96e4e339118aad4153041adbd9947"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.68f671df.woff",
    "revision": "68f671df4bc4ab87b9f3e5111c28c49a"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f677173e.ttf",
    "revision": "f677173e00e38ef3151aa3156ef87507"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",
    "revision": "362d94c68887ef3079e3fa04abc7b505"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",
    "revision": "f1cea170c77d231b4ce249fcf850f3f4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",
    "revision": "f9ae435239a0933219b7dba4480141cc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",
    "revision": "07ffaec68ea2d7c3428eec8b12969925"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",
    "revision": "2c74297808a50220aa64d435d69006bc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",
    "revision": "e7aabbc7a3b86d947d8ad4436a81b348"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",
    "revision": "6087fc040fbe6c4e83da5ee2c1f8a803"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",
    "revision": "6f7840dc539b8786da712dc43a57051c"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",
    "revision": "e8735df90d494a81dfc1568c352b21bc"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",
    "revision": "5921f5ba7c02f3aeb478e4e87d2187bf"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.781730b2.ttf",
    "revision": "781730b2f066b5268a8fb75b4f7c479b"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",
    "revision": "ced4ee620859978fa1921c87d6dbd774"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",
    "revision": "54a80b37e92f14f32a33165c571f8e95"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",
    "revision": "24cbe093e557076be8c6c5ffee4aa61b"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",
    "revision": "b78c75bb4d0c95e4a87e006e83f187e4"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",
    "revision": "8073cf012f453ddf47d5b8776f6bb1e5"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",
    "revision": "90f78c1075e0cdb56287589112f56011"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",
    "revision": "b636fa487ef5e2f56bb3529bc9168be0"
  },
  {
    "url": "assets/js/10.41f61ee2.js",
    "revision": "4d7b7b20569b8b26264f71a4a0cb7905"
  },
  {
    "url": "assets/js/11.12f19a70.js",
    "revision": "87740705a19a7f93f0769c3eefed783e"
  },
  {
    "url": "assets/js/12.1cb53fe2.js",
    "revision": "ed7f4746fafc22889e1452185c404633"
  },
  {
    "url": "assets/js/13.6e72b75a.js",
    "revision": "b9a4130e7bed7ecd5a72c1392898e5c7"
  },
  {
    "url": "assets/js/14.044d63ee.js",
    "revision": "660c629b16c93ba25246bbb0340e0f0b"
  },
  {
    "url": "assets/js/15.462ce505.js",
    "revision": "0fe822f2abd15e0559c833fe1f0bf8b8"
  },
  {
    "url": "assets/js/16.a2378266.js",
    "revision": "4e71aa773d5302679cd64c8c18beda89"
  },
  {
    "url": "assets/js/17.c7b1a227.js",
    "revision": "a54b545924d0c0d61f82978aed41771d"
  },
  {
    "url": "assets/js/18.4523524a.js",
    "revision": "598594f2eb21ba722c2f1c84a8bd403c"
  },
  {
    "url": "assets/js/19.af4917a0.js",
    "revision": "05eaedc2ef7e8e872735d82f3df8e232"
  },
  {
    "url": "assets/js/2.1c4b0492.js",
    "revision": "5c5b965b640a07d8c73ba2dfe2801978"
  },
  {
    "url": "assets/js/20.02a3feac.js",
    "revision": "6092d6bf479e65fea543e3b918acae6a"
  },
  {
    "url": "assets/js/21.001e8afd.js",
    "revision": "7e4f465c5c5b7f222f17a8ef6d6711e5"
  },
  {
    "url": "assets/js/22.56d4f5d3.js",
    "revision": "287fbd304e1831197711fc00045ef9d9"
  },
  {
    "url": "assets/js/23.f6f58de6.js",
    "revision": "38ef61bb5e67f492f6cfff8ea74e67b2"
  },
  {
    "url": "assets/js/24.1eeaef61.js",
    "revision": "101d335f2f228a9a4b217d01d8818e59"
  },
  {
    "url": "assets/js/25.bd1cfe1f.js",
    "revision": "62a05ba6a1a9c30775b026dfe404c142"
  },
  {
    "url": "assets/js/3.f70b6511.js",
    "revision": "43c8b1a31d8d9152bf9524ea7e171ada"
  },
  {
    "url": "assets/js/4.4cc1bc9d.js",
    "revision": "77883b525724239eb450756feb84507e"
  },
  {
    "url": "assets/js/5.f2d0ca6b.js",
    "revision": "cfff7889c488387973d73a82e8f072d2"
  },
  {
    "url": "assets/js/6.83820ef2.js",
    "revision": "c4558093af4813724b71434f3b2ff782"
  },
  {
    "url": "assets/js/7.1e905e3d.js",
    "revision": "163e1eb0b3a5f5460bb827a356ba1063"
  },
  {
    "url": "assets/js/8.855035b3.js",
    "revision": "fa9e794ccef103dacce0a3da5bfcaa16"
  },
  {
    "url": "assets/js/9.c829e0dc.js",
    "revision": "b344cfff7384f91c10e92d7bdf22c11b"
  },
  {
    "url": "assets/js/app.86cc4135.js",
    "revision": "cef94fc69cddb69a59d90d08913c25a9"
  },
  {
    "url": "index.html",
    "revision": "73bc9aa3ad46f2a7142b66c1e38d218b"
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
