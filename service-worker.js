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
    "revision": "edc62a238810bb6825b5c6cda1c306f3"
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
    "url": "assets/js/16.d249cb40.js",
    "revision": "cd95655c7b6689243f4a6fc3e2be1e29"
  },
  {
    "url": "assets/js/17.5e08e458.js",
    "revision": "f9d24e4c295a8c935ac11d4dbca7980a"
  },
  {
    "url": "assets/js/18.98da108f.js",
    "revision": "8a9851f3c7686122af20e6e1c4d1c3af"
  },
  {
    "url": "assets/js/19.2391d69e.js",
    "revision": "4f302f20b2dbb2bb12283bcf311c03be"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.dab6ea79.js",
    "revision": "626a1921953d6d4e0fcb1824ff759c65"
  },
  {
    "url": "assets/js/21.6a2e9527.js",
    "revision": "8c36c641573299361f185a34d62acf54"
  },
  {
    "url": "assets/js/22.afeb7f5e.js",
    "revision": "6c1928061aa1e7c05dcdd1919b54f46d"
  },
  {
    "url": "assets/js/23.a5e10a2c.js",
    "revision": "6233f9b50e470c9db3c23f6b471804fa"
  },
  {
    "url": "assets/js/24.7f181862.js",
    "revision": "7057039936010d339e25f79187a09036"
  },
  {
    "url": "assets/js/25.59c0c682.js",
    "revision": "d872cdc8a5855ac1840cfe3e5650ba87"
  },
  {
    "url": "assets/js/26.03485a76.js",
    "revision": "3ea488a02272d6ad6a35e3949282687a"
  },
  {
    "url": "assets/js/27.7ae11ada.js",
    "revision": "15383ce5dff492d1e82e2df0c11c5414"
  },
  {
    "url": "assets/js/28.b4147b27.js",
    "revision": "ad5988ee0f7ffb6b2fa181c2f5fb9192"
  },
  {
    "url": "assets/js/29.de57a276.js",
    "revision": "f324e03363aea24d792185aa068baf9b"
  },
  {
    "url": "assets/js/3.2c95ad0d.js",
    "revision": "24b4e3c2d35dbcea3d49ccb1474ba2e9"
  },
  {
    "url": "assets/js/30.10c6b7de.js",
    "revision": "7cbd6931faf8fd5717bdabaf8d97bbbb"
  },
  {
    "url": "assets/js/31.c33088b1.js",
    "revision": "22bc15d58d70fd8cc16cc44917c74d65"
  },
  {
    "url": "assets/js/32.01313de9.js",
    "revision": "16d88089972a4af3cae8a123efbce00f"
  },
  {
    "url": "assets/js/33.1e884fa2.js",
    "revision": "90e9317be34e01d624a3118efba4c4a1"
  },
  {
    "url": "assets/js/34.1531a58e.js",
    "revision": "22499d6054c3999d12178a371566207e"
  },
  {
    "url": "assets/js/35.ff3975ad.js",
    "revision": "cf9e1f48b3b20d680c1eae148bdd9b53"
  },
  {
    "url": "assets/js/36.de555b97.js",
    "revision": "fbe7e9c2a1956ca282587e45bf7e8516"
  },
  {
    "url": "assets/js/37.bd9d2fc5.js",
    "revision": "047a9212650a7bd08a31d3e3405207a2"
  },
  {
    "url": "assets/js/38.02304a5c.js",
    "revision": "892fd8f995e429a8e03e946c05b392ae"
  },
  {
    "url": "assets/js/39.cbe94831.js",
    "revision": "d02f1e4d7d5a99ded3ae1bf5b0f74e87"
  },
  {
    "url": "assets/js/4.5b58d0c3.js",
    "revision": "6777cb92bd565dfca26b1883b9b6b6cf"
  },
  {
    "url": "assets/js/40.7d184636.js",
    "revision": "bad36bdd6392c5ca34c9c7684b69d1f6"
  },
  {
    "url": "assets/js/41.c9ff91aa.js",
    "revision": "afa49799b82fd0dd8dedc9c99decdcfd"
  },
  {
    "url": "assets/js/42.4c49bcd5.js",
    "revision": "b98a4a0a805d0fbb7114db9c8299c093"
  },
  {
    "url": "assets/js/43.b8c55e00.js",
    "revision": "690bfc8ccbde72581a626348dfb324cd"
  },
  {
    "url": "assets/js/44.bca4117c.js",
    "revision": "67208f319c8813db7b292054c78e6976"
  },
  {
    "url": "assets/js/45.83ef838c.js",
    "revision": "2e8ba8814f4d2a86a65388cb18b6fae6"
  },
  {
    "url": "assets/js/46.066b5bbc.js",
    "revision": "740867a5ce4e4b2ab7e4df20618b62af"
  },
  {
    "url": "assets/js/47.1fe179ba.js",
    "revision": "afa7220d86badf4b2e553746d6fc7822"
  },
  {
    "url": "assets/js/48.6603994b.js",
    "revision": "3fabb777a06c850710f02e495dda5024"
  },
  {
    "url": "assets/js/49.6892c86d.js",
    "revision": "ec08213a0684e487a4eee21e62564129"
  },
  {
    "url": "assets/js/5.e84f0a01.js",
    "revision": "5314e5204997c617533079617046d451"
  },
  {
    "url": "assets/js/50.1a1de07f.js",
    "revision": "c05a84a83830065aa5638bb594ea0a33"
  },
  {
    "url": "assets/js/51.ed8e607d.js",
    "revision": "11458a22719ba21b87e6fc6dbba6227f"
  },
  {
    "url": "assets/js/52.05b2a2e0.js",
    "revision": "58a9d5fb11810008ae329753cc914a2f"
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
    "url": "assets/js/8.086037a4.js",
    "revision": "a49a51a420957bc88f857ee11350daf2"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.70b47a88.js",
    "revision": "7366a878acad2a3af4db56103510aff2"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "3d5bc9e7ad2849532f4d6c04c75a7b7f"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "a71a3f38cf556b04dc9444480996b0d8"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "fb8f3c7357a633b7fa48115b8e9cc111"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "f536da9e563e0942c96fd438aaa9fb65"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "1a1c07300d239d91fb0aed5af1d91242"
  },
  {
    "url": "book/index.html",
    "revision": "d09fcc0c8e1a5240e870ba115e6f715b"
  },
  {
    "url": "code/cplus.html",
    "revision": "28527a8d9ab4418dfa32d63472056f05"
  },
  {
    "url": "index.html",
    "revision": "7387d721aa2c7bebd598962a1e1b14f8"
  },
  {
    "url": "memo/memo.html",
    "revision": "8ba773d01ef45f79994b9091c6087410"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "555f1807362a7b17a641e8798aac77a7"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "1be314fa2677d98981cd8f66121a8e2e"
  },
  {
    "url": "study/english/words.html",
    "revision": "1476afee95cfb46e6ecaebf1ae1a3fe5"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "31a214d4093855ca052164f57317f11e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "156ba9381175b1d00792ef8d6defee22"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "3f89e0ba653a0ce09cf5291e01e99aa7"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b23dc5f05678eac963a3e2f70bb8f416"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "6cba85b8195fb20686355808dacabaed"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "7dd32cd96c9ce6d9f0ebe6c581822df3"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "00c25bab1c1f79851e4587d0eb67b7c1"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "6059ba9c8d40d94b9337bd66b574caf6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "cc336d787cc56de2579cba4112c50096"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "690196e16cfb20c594c712cfa2ec171c"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "e332d305e11060d6bf8161b3a5495d42"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "aa2efbeb54f91362788849eccde569a5"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "6f4e0e6b08d6b02965eb55c2da9a53a2"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "24c5aa17d515fb8c9b3072cca32e1bad"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "b88104e05be03065bb7f65eb2ef01e14"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "6120d6bd56c28879225ce83f2790ec35"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "e9c4737f74dd0311d57438671d11ad02"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "aec324541b7a8b5845de62b8cf9cf580"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "f3923c311fbe853f7fb82fc4d31835d2"
  },
  {
    "url": "task/2021511.html",
    "revision": "f71984a08962b2223814a5041f036cb9"
  },
  {
    "url": "task/2021514.html",
    "revision": "a525cb22ed741ea819a8878ea41123e6"
  },
  {
    "url": "task/2021515.html",
    "revision": "4fcc78116802aa1afb2d336019ed9196"
  },
  {
    "url": "task/2021518.html",
    "revision": "35cd28bcad40e38d5033a2a1bffb9f24"
  },
  {
    "url": "task/2021519.html",
    "revision": "2c932b59aa2d0c735a06c45ff86ed12c"
  },
  {
    "url": "task/2021520.html",
    "revision": "b3a57023d6a84c99e45fd231fde9b225"
  },
  {
    "url": "task/2021521.html",
    "revision": "f972029decd708423e61723bc219de16"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "407cf3e1d3bc4b3906d6d627380a348c"
  },
  {
    "url": "task/2021524.html",
    "revision": "25a0c3b06e1909103bb74b3c73cdf265"
  },
  {
    "url": "task/2021531.html",
    "revision": "dfffec913fac09ac677af2ae0637882a"
  },
  {
    "url": "task/202164.html",
    "revision": "df2d3003ac93ab024d07faaf02844929"
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
