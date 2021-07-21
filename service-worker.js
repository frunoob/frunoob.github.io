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
    "revision": "4ccc82395e643f708f08b8b3690f8bb9"
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
    "url": "assets/js/18.94016615.js",
    "revision": "cad3792befd9e7df92f4d60acbba4ca6"
  },
  {
    "url": "assets/js/19.bc7886d6.js",
    "revision": "f9e411c6772d64fa53e4e75e950cc019"
  },
  {
    "url": "assets/js/2.3250d9bf.js",
    "revision": "c1ff2014f4ec5bf018004e93c6f7bebe"
  },
  {
    "url": "assets/js/20.190fb6fd.js",
    "revision": "041216604416c078b4a95230b3b32385"
  },
  {
    "url": "assets/js/21.f4a82c6f.js",
    "revision": "28f09771a217388047b63407f9b6f498"
  },
  {
    "url": "assets/js/22.1e6626df.js",
    "revision": "611eb1d7c62adbabc389faf82533cd18"
  },
  {
    "url": "assets/js/23.01241938.js",
    "revision": "22c87157a41181e7831bbfff6b75874d"
  },
  {
    "url": "assets/js/24.9d5ec0e0.js",
    "revision": "636f1eb6280077d156088bc3b7fad277"
  },
  {
    "url": "assets/js/25.a03ea74a.js",
    "revision": "7dff717f8980159ebd53865be1792427"
  },
  {
    "url": "assets/js/26.da95a359.js",
    "revision": "9e73922bf462873dc2ff41217dd269ef"
  },
  {
    "url": "assets/js/27.deae0cf3.js",
    "revision": "739dee965b65a2e642497bb526c5dfec"
  },
  {
    "url": "assets/js/28.ee47352f.js",
    "revision": "6efd2c8bb5081fc25ef9f4fad9b6771c"
  },
  {
    "url": "assets/js/29.3dc2e450.js",
    "revision": "3b7f8d0c0c4a61493eb642a6d1395bfe"
  },
  {
    "url": "assets/js/3.2c95ad0d.js",
    "revision": "24b4e3c2d35dbcea3d49ccb1474ba2e9"
  },
  {
    "url": "assets/js/30.06a87be0.js",
    "revision": "623259b1c3f6e6193c0e36b72d9aa8f2"
  },
  {
    "url": "assets/js/31.81699b5e.js",
    "revision": "08cc157845c85ef5f329924c613fc4b2"
  },
  {
    "url": "assets/js/32.af233cc4.js",
    "revision": "2d472c32b945e0554627bf4786e6f220"
  },
  {
    "url": "assets/js/33.826e0e42.js",
    "revision": "e60c7ba094a6221a99533bf4e63c9728"
  },
  {
    "url": "assets/js/34.dfa8f057.js",
    "revision": "5a652cd52dfdc8f4c744543011be7d1b"
  },
  {
    "url": "assets/js/35.4595b2da.js",
    "revision": "2aefe6dcfe2948e881f8f7140bc7dd31"
  },
  {
    "url": "assets/js/36.d3964297.js",
    "revision": "501c260437b16e39e4cc46c26ade086a"
  },
  {
    "url": "assets/js/37.ef58c603.js",
    "revision": "916d180414b212eb6fce65027ec24ab6"
  },
  {
    "url": "assets/js/38.d6808c52.js",
    "revision": "216d407e17a1fa73c6e184a170d461ab"
  },
  {
    "url": "assets/js/39.b3d8210b.js",
    "revision": "024dd58c532dd03bdd90a5b4291aa3ef"
  },
  {
    "url": "assets/js/4.4594c12a.js",
    "revision": "925211e4dccdd7111e3cfa3f6782ab22"
  },
  {
    "url": "assets/js/40.4b6ca887.js",
    "revision": "3b958330ddce112341be9d7a60636e13"
  },
  {
    "url": "assets/js/41.70917cef.js",
    "revision": "fdb764ca2bf22069f2aaf87097fd7efb"
  },
  {
    "url": "assets/js/42.bfb00eb0.js",
    "revision": "4fe3c2509fa05b0fdf5979df36e2e457"
  },
  {
    "url": "assets/js/43.96e9622a.js",
    "revision": "1e9db95f6b8b63fce64ca86d0162a198"
  },
  {
    "url": "assets/js/44.31caa2fe.js",
    "revision": "763df3bd259abfbf174f09b984e03afa"
  },
  {
    "url": "assets/js/45.8204c1ba.js",
    "revision": "43fca55f354b33d93d5483331bd1f36b"
  },
  {
    "url": "assets/js/46.239846b5.js",
    "revision": "04416e06bb572250bf8aebb4decbaab0"
  },
  {
    "url": "assets/js/47.1c95280d.js",
    "revision": "043f96f2abdd8c5cd191dd7e10fa0882"
  },
  {
    "url": "assets/js/48.2b94cd47.js",
    "revision": "f83d7d68259259f60d7c02e1fdf32bfd"
  },
  {
    "url": "assets/js/49.992ebd74.js",
    "revision": "10b1cb3016eeeee84ee2e71501ae018d"
  },
  {
    "url": "assets/js/5.e84f0a01.js",
    "revision": "5314e5204997c617533079617046d451"
  },
  {
    "url": "assets/js/50.c33729ab.js",
    "revision": "8cd05b158b26714bc0240104d35fad14"
  },
  {
    "url": "assets/js/51.a25c9d43.js",
    "revision": "ce1be3740a3ab9fdc4fdde3fafe91d43"
  },
  {
    "url": "assets/js/52.36a6fe01.js",
    "revision": "7b5580f211e59a0c7ef00867a3bb2378"
  },
  {
    "url": "assets/js/53.1019873d.js",
    "revision": "fd973a76d54b2f1c401cdb0f2d101fea"
  },
  {
    "url": "assets/js/54.6f17cfb3.js",
    "revision": "2d1bddd12a238995fc658d6e014ffaee"
  },
  {
    "url": "assets/js/55.7a0b2e52.js",
    "revision": "86d9987b1b8330c8fdcb2a0831f37b78"
  },
  {
    "url": "assets/js/56.54e4386c.js",
    "revision": "f50be3264fbd54f52a9c23f38c6ee1c9"
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
    "url": "assets/js/8.0089ece7.js",
    "revision": "9ca47bf5cd39782e8b704d5e787c02bc"
  },
  {
    "url": "assets/js/9.364a4ab7.js",
    "revision": "ae7d8c6043e89bb54b783b5581bc13b0"
  },
  {
    "url": "assets/js/app.2de0be43.js",
    "revision": "967209c2a4e3d5c5a23f558519c66fe7"
  },
  {
    "url": "book/books/hushitandushuyuzuoren.html",
    "revision": "785e518ff6ed46064d25de5d5276486a"
  },
  {
    "url": "book/books/javaScriptgaojichengxvsheji.html",
    "revision": "a1a81bcdc5b5f456d5034dd40a44bbf7"
  },
  {
    "url": "book/books/suanfatujie.html",
    "revision": "f60644537ac090ab398fb40562da77c9"
  },
  {
    "url": "book/books/tujieHTTP.html",
    "revision": "16b7851c9dbfcd64332a906afa3ed28a"
  },
  {
    "url": "book/books/what-make-love-last.html",
    "revision": "4816877c87837ae140854eec08f99426"
  },
  {
    "url": "book/index.html",
    "revision": "0a41021345a59845c74bde9e453436c6"
  },
  {
    "url": "code/cplus.html",
    "revision": "5a548fcad15ec772136a6758c9712a2e"
  },
  {
    "url": "index.html",
    "revision": "23fb6dabbdcfe4689467373e001ac134"
  },
  {
    "url": "list/2021721.html",
    "revision": "5988c5db3e571906eea7282fcd4bdd22"
  },
  {
    "url": "memo/memo.html",
    "revision": "5bd00251c5105cc45ed04df6399a2ebb"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "578fa0acd6c1598249b6ccce73f336ae"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "10b4ece99fc33ecf82dd2bf158144f19"
  },
  {
    "url": "study/english/words.html",
    "revision": "bde3d1e092239f72c3a34a73be656197"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "05fcebabc08e5a52c69b3476ad501940"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "c32736ae0b29bf7495047500234984e9"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "5f041845340c8e3cef7466d2bbe763fb"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "b8690b1bad359b947f4e16f720b281f2"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "dc96e2f4af1ea7c30ce1f7a767f74dfb"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "8fd72027dc5e455d838b59b852ac8c58"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "23c62de8d3657bf3d5e90aeac33d1d7d"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "f48675ab9c4c1c117d97755aaf1de26f"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "3e481e229963a30080af3442cbdd8ebc"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "ae60b7b08a4b4b9b9686b2f6b43d84d6"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "05320209a090779c59d9f513a35fc157"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "9dbb9276630f4b7413edd44e93afcee5"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "b916912615079bb75f068a6e173415a9"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "ded95b7ac9ba45550c091e67ed004ca3"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "304aea5849b768b61f4a8cf7ee3290df"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "e9905e27302b1ba174a64f2c69ea8705"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "6e5ec04934cb5a06eaa25c3ccc6220de"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "dc984db71f743250f9240d74411c4e5c"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "39ff62846277a507a1a763c6192ced46"
  },
  {
    "url": "task/2021511.html",
    "revision": "1e7480559e752fb31c714639c8cd353f"
  },
  {
    "url": "task/2021514.html",
    "revision": "40dbad37d3b6e68df28d9de42fa956aa"
  },
  {
    "url": "task/2021515.html",
    "revision": "2a9df931b1a38a9f69f408eccdad8c40"
  },
  {
    "url": "task/2021518.html",
    "revision": "a5610a47a984b3d65f8d63af3575586f"
  },
  {
    "url": "task/2021519.html",
    "revision": "d1a0310c4dcb08734cf69fd1caf4cd29"
  },
  {
    "url": "task/2021520.html",
    "revision": "5f1a65721a05e021ac4fcfdcd205e49b"
  },
  {
    "url": "task/2021521.html",
    "revision": "fdc047e8b63275a47cf12ec772be8086"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "2a4424c38162d7ed75f820fe9490e324"
  },
  {
    "url": "task/2021524.html",
    "revision": "366cafeb10762124a5f60ea6cafa2875"
  },
  {
    "url": "task/2021531.html",
    "revision": "1f5e5558004cdca9f818a91f87835817"
  },
  {
    "url": "task/2021628.html",
    "revision": "2cc4081eab685026561c07ea2b84af50"
  },
  {
    "url": "task/202164.html",
    "revision": "45dc2f097f11beada6c7ab248ca6f869"
  },
  {
    "url": "task/202169.html",
    "revision": "b739031437a6aa6e473ee3cf4f4b77e9"
  },
  {
    "url": "task/2021717.html",
    "revision": "cfd3b56a64c233f0605bf54f71182eb3"
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
