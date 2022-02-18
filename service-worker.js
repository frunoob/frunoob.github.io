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
    "revision": "7a7beba7d45cc016c02a15a04800701d"
  },
  {
    "url": "assets/css/0.styles.27d287e6.css",
    "revision": "e71746dd74da659be0d51d78e893f3ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e866263a.js",
    "revision": "cd3244521216fac8dd7d6958652ff0da"
  },
  {
    "url": "assets/js/11.35c4e688.js",
    "revision": "b9e8651ffe2562c9d7bff590ddd2a3d9"
  },
  {
    "url": "assets/js/12.66f0eff4.js",
    "revision": "332ccd498f61ad08b60ff718b23c7c6c"
  },
  {
    "url": "assets/js/13.2dd870da.js",
    "revision": "4b9647ea121e6113d9775d8202aa18b2"
  },
  {
    "url": "assets/js/14.9226470f.js",
    "revision": "2ff7285da6682b59011ba62222e92636"
  },
  {
    "url": "assets/js/15.09ef2ae5.js",
    "revision": "bfb2cf1a20b008f055e457957d1cdd74"
  },
  {
    "url": "assets/js/16.078e648d.js",
    "revision": "183e748aeda6c3d3e675ef081f4e5512"
  },
  {
    "url": "assets/js/17.389ff758.js",
    "revision": "eeed5b457c9e684a1eb7802115ebb0ce"
  },
  {
    "url": "assets/js/18.78138adb.js",
    "revision": "182403516110b90b2f6b9cb90bff071e"
  },
  {
    "url": "assets/js/19.acd720ce.js",
    "revision": "c809955e67dcfa6ba44004169562ad5d"
  },
  {
    "url": "assets/js/2.bf69c9a9.js",
    "revision": "2e10652c65489f154d1d5b845bbda21d"
  },
  {
    "url": "assets/js/20.7d2c521d.js",
    "revision": "126f8e1a699b7e0172e5eb1ffc2f1af8"
  },
  {
    "url": "assets/js/21.3738e1f7.js",
    "revision": "5692a0cbb1896a9d511c520e9b4a1ca8"
  },
  {
    "url": "assets/js/22.3b7472fa.js",
    "revision": "6c6faba7862763f006968b9c3f0d7157"
  },
  {
    "url": "assets/js/23.3d05b315.js",
    "revision": "ef9acb8fe3975f9241ba33a0dbd4a6da"
  },
  {
    "url": "assets/js/24.cf6edc15.js",
    "revision": "f88ed5ef114b48aa34e691761447af3e"
  },
  {
    "url": "assets/js/25.7d64435e.js",
    "revision": "22bb6dfda3e1dbb2b45315a36e0f09c3"
  },
  {
    "url": "assets/js/26.d27b9097.js",
    "revision": "58e59667848bbd4f108f8965db105b0f"
  },
  {
    "url": "assets/js/27.fb5c4674.js",
    "revision": "e28352c3c9cf6951839cdb060a13249f"
  },
  {
    "url": "assets/js/28.ae4b0f6b.js",
    "revision": "161bba65aed4d75243bc795ecd7065c5"
  },
  {
    "url": "assets/js/29.32899d32.js",
    "revision": "a602959c8fa03a946399c645d95262e6"
  },
  {
    "url": "assets/js/3.7d335372.js",
    "revision": "17b9adb6e931cda9bd3a68e373e3d563"
  },
  {
    "url": "assets/js/30.89ca1d45.js",
    "revision": "54bcbe8cc3401e76b70c0162894b4e28"
  },
  {
    "url": "assets/js/31.4846bce1.js",
    "revision": "e3995912581eec0a04f149b1a9d24fff"
  },
  {
    "url": "assets/js/32.60251a79.js",
    "revision": "36110e2796695a632f8a7b0faed01bda"
  },
  {
    "url": "assets/js/33.e13ee046.js",
    "revision": "e30f0bff618eddedf1bb74b55809af92"
  },
  {
    "url": "assets/js/34.1034dd84.js",
    "revision": "7d4a7115fb496dd18a32f617260da571"
  },
  {
    "url": "assets/js/35.e9e562b2.js",
    "revision": "98118e1fc970f6d50c72878b3a7bc242"
  },
  {
    "url": "assets/js/36.9f05d23a.js",
    "revision": "3f53b9b99aa0b0b0bce4330567fd0743"
  },
  {
    "url": "assets/js/37.df26a62d.js",
    "revision": "50e4b31fd1ff58002827779a4257b6b1"
  },
  {
    "url": "assets/js/38.99304b5c.js",
    "revision": "11de8bfd91257dbc78138be4392d564d"
  },
  {
    "url": "assets/js/39.390944d7.js",
    "revision": "1e4d23b990d75bdce348e7aa5f387930"
  },
  {
    "url": "assets/js/4.79da93f8.js",
    "revision": "4bfedd3e0df8e8070b9b8f7c036b6d87"
  },
  {
    "url": "assets/js/40.3a088bc7.js",
    "revision": "b64183c2429870f6b08d9a17dc153f01"
  },
  {
    "url": "assets/js/41.2d145dbe.js",
    "revision": "14cd70966311ba0f84cb9d914fbd98e1"
  },
  {
    "url": "assets/js/42.97e0c364.js",
    "revision": "dec26780b0b8921aae8718dff58bf467"
  },
  {
    "url": "assets/js/43.47456a26.js",
    "revision": "12ab69459dc642af7ac60e77ee99e993"
  },
  {
    "url": "assets/js/44.2fe15566.js",
    "revision": "8a1c284ecceded478f144ef540577ef0"
  },
  {
    "url": "assets/js/45.a804c695.js",
    "revision": "53fa11d16a7ab35817a79502dc5f5201"
  },
  {
    "url": "assets/js/46.ab85a126.js",
    "revision": "54a31ca094a86471623adc99e9c3f3e5"
  },
  {
    "url": "assets/js/47.677942be.js",
    "revision": "196550913f10c5ca366696b2d2c32928"
  },
  {
    "url": "assets/js/48.597f9cf5.js",
    "revision": "3146ce106460a6fa1afee9efb6ed91af"
  },
  {
    "url": "assets/js/49.7cdc0728.js",
    "revision": "d008d432733524aa685209cb66627d3f"
  },
  {
    "url": "assets/js/5.eef84525.js",
    "revision": "875a6462866a43314522b4700a03d99c"
  },
  {
    "url": "assets/js/50.c552f8f3.js",
    "revision": "4ab3f04adf91198c0e78255473ad8582"
  },
  {
    "url": "assets/js/51.da9e2d3f.js",
    "revision": "2250a17a45d15716bc58e033c8d8981e"
  },
  {
    "url": "assets/js/52.636fdcd2.js",
    "revision": "492fe72feb46b0d976e7edc43a3d8f4a"
  },
  {
    "url": "assets/js/53.b0dcc106.js",
    "revision": "4fd738e77c3318dc171e97a0558068df"
  },
  {
    "url": "assets/js/54.0cb7c35a.js",
    "revision": "a98e0258829b6808a54d878a61bba3b1"
  },
  {
    "url": "assets/js/55.05df8f52.js",
    "revision": "e7856ecbc414e7bd439c6f1b750aeb0c"
  },
  {
    "url": "assets/js/56.ba67d5c5.js",
    "revision": "658a388f8f25fd3afe15f483b7e7fd16"
  },
  {
    "url": "assets/js/57.f96487a2.js",
    "revision": "92bcf5b222a4a06b3b358f9a12bf5d88"
  },
  {
    "url": "assets/js/58.b535d8d1.js",
    "revision": "9883e4c58be8cd9dfaeefa2ea8278b37"
  },
  {
    "url": "assets/js/59.5ad20fda.js",
    "revision": "5e1f4a8d5d110359634af7d17198f419"
  },
  {
    "url": "assets/js/6.31c64cda.js",
    "revision": "dda85b5b232d182c8ca5c4a7710766e1"
  },
  {
    "url": "assets/js/60.08d33987.js",
    "revision": "febd1e2f6a73f9855363a019e9e23885"
  },
  {
    "url": "assets/js/61.eb117413.js",
    "revision": "52761bb457487478832c6fb3a496a42f"
  },
  {
    "url": "assets/js/62.24c5016a.js",
    "revision": "7eafeb2a975a9c9562907f76cc9ca5a3"
  },
  {
    "url": "assets/js/63.b800b190.js",
    "revision": "5ab6a6b8b3cfbdd6b757cc1cbb8e53cc"
  },
  {
    "url": "assets/js/64.076a8613.js",
    "revision": "6f88248312491dea96a9f05b1643860b"
  },
  {
    "url": "assets/js/65.4e793318.js",
    "revision": "9ef0df5c98bc6a32dafb91f7a6acb6d3"
  },
  {
    "url": "assets/js/66.5c503fab.js",
    "revision": "7315f0737f06974dc4c46e581355b2e3"
  },
  {
    "url": "assets/js/67.822ad638.js",
    "revision": "95c440b7f4b31c6d272bcaf5f93cf1a7"
  },
  {
    "url": "assets/js/68.687ac739.js",
    "revision": "d0b21b5b04ca6e41762506172aa509f1"
  },
  {
    "url": "assets/js/69.d0ca8974.js",
    "revision": "9bbe25c75a63a58054e292fd6467ec06"
  },
  {
    "url": "assets/js/7.b75e0492.js",
    "revision": "7130ed44d55509fb31a8b82b06a0dd88"
  },
  {
    "url": "assets/js/70.05d99c2b.js",
    "revision": "ac9881ce6d8a1eafd65105790cdc7c42"
  },
  {
    "url": "assets/js/71.43b1e7ca.js",
    "revision": "c5f957c2d9f0309b67fe9708c28eab5c"
  },
  {
    "url": "assets/js/72.ccbcc4cf.js",
    "revision": "91b935dc9e8b1bed64ad49164d1a884a"
  },
  {
    "url": "assets/js/73.894c51f4.js",
    "revision": "711d55815b06506faf7ca517788c718a"
  },
  {
    "url": "assets/js/74.a8fd364b.js",
    "revision": "68fe8c972ef57e792875305f4ee604fe"
  },
  {
    "url": "assets/js/75.c762b436.js",
    "revision": "75ec4c49c1e14bef4be608843549dd82"
  },
  {
    "url": "assets/js/76.00eef61b.js",
    "revision": "2076b819b183461fa9b5adb3639e0fe4"
  },
  {
    "url": "assets/js/8.5bc02e15.js",
    "revision": "70ee5abb76c1f0d84d7f653b9b116b90"
  },
  {
    "url": "assets/js/9.93c35660.js",
    "revision": "caf4d2b319a6ad161ad12e2206ee8682"
  },
  {
    "url": "assets/js/app.8f879bbd.js",
    "revision": "60c16f4e5062fbf2342da64aa7cd313f"
  },
  {
    "url": "index.html",
    "revision": "79d2f141f924d39942a729fc38c58035"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "37f326d602165b0c4eb7d1723f98c9f2"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "893fa09e31bded6490b3700d8daddddf"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "2560f03c9e5f02573515f2d66301240a"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "125cd0bca40c51e306ed5fbaa2a9f939"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "fcc362473c946552b629266dbce6866e"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "d01b5c818ac1882e56ff8db7cc128360"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "c264487e71a7894b5ce9e3661891c06c"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "3a4e1864125d5a6694603bd74c3c7381"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "5b5c997c740a5bd9e5f75470eb13130f"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "b49f22956f134e7a29ddca6814f0cf53"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "17aeee2152c7724f96fc599b15031470"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "ac5cde473c5ffc2623870c37910bf0b9"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "4e643080c05d7afeefa02ca4bfe242d9"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "f70f42e2d7ae87813efdad15b1e563b7"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "c1f5bb310d705226ec9f93155905eb0d"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "288518a467239b8ac7260bafac935a43"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "cd9788a8e6031a307cca12a3403ca9ee"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "cb8befb50cce66d0ef4e1c8e9fd544b7"
  },
  {
    "url": "post/plan.html",
    "revision": "f3d7340191bd901c7cbee009a7756cce"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "71be929069cd43f81bd293d39e27eeac"
  },
  {
    "url": "study/english/words.html",
    "revision": "c006a213f224b6baa39a6d521f3d382a"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "289392d676761f9aec1a4a86e8508353"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "cba42494fd5a3ea346810922485ec8dd"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "c5b3a318c6fa9ea2e5c5905f8a34a6d1"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "ae29572bab83ed28b5b60c874085bd50"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "c8093721120b56d86ee4379ba0495d0a"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "0a73add76fe9c858f7885fc8b712d37d"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "2dd5f06edb5affd7f5d549dbe7a65be7"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "5043389cec84f6d5ab3923793fe5bec0"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "f6813a5f0ffa0583b456f38855366109"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "46ba1a2022a7640b0ee7669ae59162f5"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "8de3111e8112a9c24683b8c3f1ad7318"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "2ac52b2b8a7b726537040b64420c68ea"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "8b44e4450c232f45261cbc11bc297040"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "566c999f37a92264410af47114293502"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "671e523d5241f4183b68a506ea1052a8"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "7cd263da61c49a11e2fc24db86b746ed"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "4f518711faaf4829f7bdc83b0a842465"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "9a05d8715c2798acbc1d1a7039f8a193"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "63a9e9decf34f018eb9199d8bcaf949d"
  },
  {
    "url": "task/2021511.html",
    "revision": "cbc259f72514ab3a29c41e5991d6e1d7"
  },
  {
    "url": "task/2021514.html",
    "revision": "765309ebde4524125311f8167e82ba53"
  },
  {
    "url": "task/2021515.html",
    "revision": "54cc7ab941837d0bba65dd9af91c843e"
  },
  {
    "url": "task/2021518.html",
    "revision": "310a1446f34358e2c9e13a932514fda3"
  },
  {
    "url": "task/2021519.html",
    "revision": "8af9da5e00a6214176cc3155c5e94531"
  },
  {
    "url": "task/2021520.html",
    "revision": "357a01ee8e37d08c2661d412790e9a89"
  },
  {
    "url": "task/2021521.html",
    "revision": "6def554fb6cf60491eea928ba621933b"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "cec3e9012f95b5c39ddc48d1e2a31ddd"
  },
  {
    "url": "task/2021524.html",
    "revision": "cdeff4ff9aa98f7a97873a67e140b83c"
  },
  {
    "url": "task/2021531.html",
    "revision": "60e9bd99cd4866ddaea235f967249efe"
  },
  {
    "url": "task/2021628.html",
    "revision": "7592e4db696770e150679d98139f37ca"
  },
  {
    "url": "task/202164.html",
    "revision": "ec2f6bf5bd6915431e6da0cec4d33690"
  },
  {
    "url": "task/202169.html",
    "revision": "caef968f6778ce5fccb0ad540267c33e"
  },
  {
    "url": "task/2021717.html",
    "revision": "84948b35b867fd847435565785ee5d54"
  },
  {
    "url": "task/2021721.html",
    "revision": "3a7f2430ac519faf1b8227e82d3deea6"
  },
  {
    "url": "task/2021722.html",
    "revision": "6674d17770f65ec0e76f5cb684acca65"
  },
  {
    "url": "task/2021724.html",
    "revision": "910d04376638251bb9523e9696631085"
  },
  {
    "url": "task/2021725.html",
    "revision": "7e4ed249512d116d767ff7aee70a8f40"
  },
  {
    "url": "task/202181.html",
    "revision": "c5747674c819b7ad16087b625c6ef139"
  },
  {
    "url": "task/2021811.html",
    "revision": "a370df312a4e3bee9eb4ccbdda6af61a"
  },
  {
    "url": "task/2021812.html",
    "revision": "1e01c9af7434043ae667680cce5306dc"
  },
  {
    "url": "task/202183.html",
    "revision": "d7c594a22415bf4f242e695517d9a023"
  },
  {
    "url": "task/202187.html",
    "revision": "f7f0944165758a31d5e291355b30cac5"
  },
  {
    "url": "task/2022218.html",
    "revision": "2c59b779030ba4ff18e57f16b896b806"
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
