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
    "revision": "75269242e3fd66e21adb4cbf00864f22"
  },
  {
    "url": "assets/css/0.styles.7de316bc.css",
    "revision": "9b3249340e70ca0899c1bb412904058b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8b0019d.js",
    "revision": "f6e33bb315bfd265c1bd07775bf5fa11"
  },
  {
    "url": "assets/js/11.bc024dc1.js",
    "revision": "5fab61cca6f6f669679ce19df72c409b"
  },
  {
    "url": "assets/js/12.4dc81c85.js",
    "revision": "c6b5ec522e9bb20495bc97863a773482"
  },
  {
    "url": "assets/js/13.32dcf543.js",
    "revision": "46be09d4ce5f17f85a844ad69184b9e3"
  },
  {
    "url": "assets/js/14.4320e9f9.js",
    "revision": "4c6dabbe3403749e89f517694dcac805"
  },
  {
    "url": "assets/js/15.9010ffdb.js",
    "revision": "e989bc9daee0320298ed0ba107491bb1"
  },
  {
    "url": "assets/js/16.eb8589a6.js",
    "revision": "f79a2c4b2f12adea2ac2d4908275e2f8"
  },
  {
    "url": "assets/js/17.d7a33f11.js",
    "revision": "5a92bfe0be179c9c262d1ff11da9c8c8"
  },
  {
    "url": "assets/js/18.bd6de505.js",
    "revision": "73396bf7d7c8d063cae2d170ab6c4999"
  },
  {
    "url": "assets/js/19.abafc196.js",
    "revision": "b081f3770edc081223d5a0e786b1f7b2"
  },
  {
    "url": "assets/js/2.ba57fe09.js",
    "revision": "4c780d831a9098d3a912c769f21730eb"
  },
  {
    "url": "assets/js/20.066dd09f.js",
    "revision": "348e66a1ca44b44585e1badcb3479fdf"
  },
  {
    "url": "assets/js/21.26eb5ecb.js",
    "revision": "46c2b6f1aef16d78ce1bdc63ebb59d9e"
  },
  {
    "url": "assets/js/22.953ed75e.js",
    "revision": "931d36fb7988c5258ac0c14e23a7b852"
  },
  {
    "url": "assets/js/23.960460d3.js",
    "revision": "4c5d9d072d07f57cf6e37de7f7efb47a"
  },
  {
    "url": "assets/js/24.d8a133ed.js",
    "revision": "21d603199f9c01f240abea8f1130532b"
  },
  {
    "url": "assets/js/25.2cd25273.js",
    "revision": "44b758b54acc8fcab44e841cfb18976f"
  },
  {
    "url": "assets/js/26.c7a74dec.js",
    "revision": "d44d8f401a6ea1d59b51cf0f209ec097"
  },
  {
    "url": "assets/js/27.b6e545fb.js",
    "revision": "e6227f5817086829b14c50a1a5917a12"
  },
  {
    "url": "assets/js/28.fcc31c59.js",
    "revision": "44dc0c8c58e16d2d946358645f652cd4"
  },
  {
    "url": "assets/js/29.dada868d.js",
    "revision": "36c257495b2458a687a1824c35d46807"
  },
  {
    "url": "assets/js/3.51c1781e.js",
    "revision": "fd2f819feec0d41971d76b2c1fec9f10"
  },
  {
    "url": "assets/js/30.309e0d83.js",
    "revision": "4cec5f08dcb699e6d8a103a49ceaeca1"
  },
  {
    "url": "assets/js/31.ddf1017d.js",
    "revision": "98ab55e40320b50791cadfa86930a409"
  },
  {
    "url": "assets/js/32.50526c28.js",
    "revision": "638841a43b0fd7331308c0b9eb83424e"
  },
  {
    "url": "assets/js/33.5016ef38.js",
    "revision": "f941aae0282b1e9c31b805492f30b400"
  },
  {
    "url": "assets/js/34.f00c5f5d.js",
    "revision": "a9eb6f8657c101021ac2f79049334aeb"
  },
  {
    "url": "assets/js/35.edf17562.js",
    "revision": "172e06e1fe4c5724472683769af91f41"
  },
  {
    "url": "assets/js/36.130c503a.js",
    "revision": "9552a8d419f477a9d773f2baf63f7172"
  },
  {
    "url": "assets/js/37.f7dcb36b.js",
    "revision": "f068c1ffd00ed6cb7798e976355b2a8f"
  },
  {
    "url": "assets/js/38.3534ea74.js",
    "revision": "6d3aa3a8cd4357fa4aba83a813205c2b"
  },
  {
    "url": "assets/js/39.85d1e5f9.js",
    "revision": "869f6512f6531af3a2f459324f9218d0"
  },
  {
    "url": "assets/js/4.1a591468.js",
    "revision": "8502a4ab8cfeefa79b1c6dbb52f8efd1"
  },
  {
    "url": "assets/js/40.8ac97aac.js",
    "revision": "e8fc9804bad6f17f607f629d3769178d"
  },
  {
    "url": "assets/js/41.21e0e113.js",
    "revision": "6faa9b1a20399a4b31df1a051e6a1247"
  },
  {
    "url": "assets/js/42.4fc116a2.js",
    "revision": "13c29f2f6cb2fec61d66bd4167b221bd"
  },
  {
    "url": "assets/js/43.55f5e4b3.js",
    "revision": "42f2bccfc40b77bdce53593333c3dbf5"
  },
  {
    "url": "assets/js/44.1da11718.js",
    "revision": "6c867816a07b6582323fc301cdf0d7e1"
  },
  {
    "url": "assets/js/45.78944f6e.js",
    "revision": "2c00e7298bcff8afbe7e3827b06233ed"
  },
  {
    "url": "assets/js/46.9db661ff.js",
    "revision": "c1a64d65559097dace08ad97abf3c974"
  },
  {
    "url": "assets/js/47.451447bc.js",
    "revision": "16575f13863b2dab1cf8e9c04ec4869c"
  },
  {
    "url": "assets/js/48.33f5131b.js",
    "revision": "8027d0b8a7c3fc53562767f51f833556"
  },
  {
    "url": "assets/js/49.6522bd09.js",
    "revision": "1feed82eea4b811533ab9ea8e4a72e1f"
  },
  {
    "url": "assets/js/5.838b6288.js",
    "revision": "4efa1a865c816876449f89b5d38190df"
  },
  {
    "url": "assets/js/50.f7d8d210.js",
    "revision": "d88d2ad2915fa2ad03926149bac3f02d"
  },
  {
    "url": "assets/js/51.ec7c8e3f.js",
    "revision": "8ba187a025d4b47ad8b8f7f23c3736ec"
  },
  {
    "url": "assets/js/52.7864529d.js",
    "revision": "a6111badc2f14b96eaf7b059b8f44053"
  },
  {
    "url": "assets/js/53.3d46ed1f.js",
    "revision": "12a80d22af75bf84a78b002bf3df4373"
  },
  {
    "url": "assets/js/54.a677f7bb.js",
    "revision": "69848fe73bcb1b5d85ef0941e7688c01"
  },
  {
    "url": "assets/js/55.aea9bb89.js",
    "revision": "9905005245b60dbd5870f02ca8a49d67"
  },
  {
    "url": "assets/js/56.180e9c2c.js",
    "revision": "d6c5c591851f40c787ee456539c6ca4a"
  },
  {
    "url": "assets/js/57.4eda3766.js",
    "revision": "ef30af1917812b5c5b65ce9ae56f4a8c"
  },
  {
    "url": "assets/js/58.ea2c44c6.js",
    "revision": "0e3d543ad264054096d02ecb721714d5"
  },
  {
    "url": "assets/js/59.fb1e81d1.js",
    "revision": "3dc23dcfd05eca205e586398036ce246"
  },
  {
    "url": "assets/js/6.8836c250.js",
    "revision": "eabdc3c4fe3f11118353d1298ee38aa5"
  },
  {
    "url": "assets/js/60.be99fcd1.js",
    "revision": "aafbc97a2459ae981b75ff3d4c1df4b7"
  },
  {
    "url": "assets/js/61.89347a85.js",
    "revision": "edf634d821da6a2d3ff61a2e9da494f5"
  },
  {
    "url": "assets/js/62.6bd510c8.js",
    "revision": "ff9442493868b4b7637d008cbd3c0953"
  },
  {
    "url": "assets/js/63.327ee234.js",
    "revision": "808618fd8f20cc94ddbde42c72eb1379"
  },
  {
    "url": "assets/js/64.696f94c8.js",
    "revision": "c028d951b8b3c14696f10033a5acee7b"
  },
  {
    "url": "assets/js/65.5fd5b370.js",
    "revision": "6c3e73768408ef8da72848e845faeff4"
  },
  {
    "url": "assets/js/66.96e7da5a.js",
    "revision": "8fcf730765ecdbff3c6fcedb8cf166e8"
  },
  {
    "url": "assets/js/67.29e736fd.js",
    "revision": "cd336f920fb1020a1af45480d044f461"
  },
  {
    "url": "assets/js/68.e93f9c75.js",
    "revision": "8550a538ad1ef6911215bbce79771918"
  },
  {
    "url": "assets/js/69.95f48891.js",
    "revision": "d4c1b002f53924366021f9e8e3cd0c81"
  },
  {
    "url": "assets/js/7.57bbc117.js",
    "revision": "677e9a7143f477495224dfdc86260d34"
  },
  {
    "url": "assets/js/70.f7978534.js",
    "revision": "6ddaca9ff75126538041daaaf29cb2b7"
  },
  {
    "url": "assets/js/8.6f4ef2df.js",
    "revision": "8163770da1a8e28ebff81b412d0c5591"
  },
  {
    "url": "assets/js/9.d180393c.js",
    "revision": "9949e1f5907fd9f5b176bfc6e57214ea"
  },
  {
    "url": "assets/js/app.025587fd.js",
    "revision": "4835dacd6c4f44e8ae265702a0769de8"
  },
  {
    "url": "index.html",
    "revision": "cfcd4a520e37c6bbc9b844f72d770def"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "a9a17bf71e8a2c045927945750dbdcca"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "0459d19128b903faeade6a48b6be3486"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "117862e0be2ce5d280a84795a6771c64"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "b6a4c15711a3873ec59fc922d97f42f1"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "546ca9528e48bb09d401822d9fb0c25a"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "6a7a94c6720510ef9d5b47a15a3f3fb6"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "e6b9fb00888173129b9407c9db007d39"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "32e015753aa200b3ba6e85de86e69ccd"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "037f7fb3f7541d79a71ee7c7f985be72"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "4d64365e448ed5449443d24ca96e1a00"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "c0806d878c16230b4346a8f854431d4e"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "9adc292e2754ff4cfbfaa325f005c29e"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "1729cd48e5970540e383339741ad038f"
  },
  {
    "url": "memo/memo.html",
    "revision": "d781d14a50b5261a23c05b7b0d515053"
  },
  {
    "url": "post/test.html",
    "revision": "98659e14ed93e7549b7c986050092957"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "7fe57c970cc3a6f987cd404c65dc15c3"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "46aab0b3fe317c55766dce9d16b35ebb"
  },
  {
    "url": "study/english/words.html",
    "revision": "ab66a8552d04dfae5bda643d94e4ed66"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "1a06927b7bd2e90457b81c5172f4e566"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "5b81c7b2d7ab26b6dc22fc23b8a98b41"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "860d3f8e84b5bff1f3f73d908ddb00b4"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "084aa14a1d6db4be2c11d519b6e90486"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "ba4f2fd110bc19d5e1b53e84b8abb8b3"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "33516ac6a06c0ca03f2eb79132ec2593"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "b660844eb6ff0427bbfca377002d3bd1"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "90476a39c86709c4006acd1bde8ccb21"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "1c35216f7896fb93d94f6f272d131e9a"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "45f6c14532f2a339fd3e380e0cae960f"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "d931b2c6f059e08ff498b08adc4a13da"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "e8cb50f6974f72361e7b8b61e4b6772f"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "0d53ac9b6af6e64e50dc744b50a23d30"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "2adf87a58317b5cad9bbf08f9be5a16a"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "81ed035c4b865c70e89fabe9cceb85d0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "335d90a523262991095e8d9df9aa2cc2"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "d2f338441622a6f2b8327a9540174704"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "b42d585a5196c0ead5cb8d3a7f44d8ad"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "79e488135915e3dcff89fd48f89f2cc3"
  },
  {
    "url": "task/2021511.html",
    "revision": "fa8797a85bb03d8d960f6e775cbe8bcb"
  },
  {
    "url": "task/2021514.html",
    "revision": "052e4c4da00991370400f44aba302a9b"
  },
  {
    "url": "task/2021515.html",
    "revision": "f9503e16fb3c53bea8a4f70f96ec0233"
  },
  {
    "url": "task/2021518.html",
    "revision": "835703ad8ed9758206ba751a77be9129"
  },
  {
    "url": "task/2021519.html",
    "revision": "866cff17e9027138e0ef05805753ba46"
  },
  {
    "url": "task/2021520.html",
    "revision": "71d128d6ebcc53c72d3174c15c540c9c"
  },
  {
    "url": "task/2021521.html",
    "revision": "ec7e35d383cc5a9b0c2d844e8d29b8ce"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "1c19fa8619a8c2484c5b878a54da41b2"
  },
  {
    "url": "task/2021524.html",
    "revision": "042e665bae7a34783c1f8a573e5d4fc0"
  },
  {
    "url": "task/2021531.html",
    "revision": "65b155fad8cedae46a1153ab91d8c38b"
  },
  {
    "url": "task/2021628.html",
    "revision": "b220eb8223ffbe94e9b8f8ef2e591ec0"
  },
  {
    "url": "task/202164.html",
    "revision": "441bdbb44897443cb6b97314fabb49d7"
  },
  {
    "url": "task/202169.html",
    "revision": "3933589fe15945dcc094d845dbe8cb54"
  },
  {
    "url": "task/2021717.html",
    "revision": "ce3c8b14acdbea112b02df0955bff1b7"
  },
  {
    "url": "task/2021721.html",
    "revision": "9f612035457e300c59b138c70b33d120"
  },
  {
    "url": "task/2021722.html",
    "revision": "40190fdc4439d39426697f32294fda1e"
  },
  {
    "url": "task/2021724.html",
    "revision": "82e8edce7d39c70270935d5f6f2d0307"
  },
  {
    "url": "task/2021725.html",
    "revision": "7c399354497fcc1d2f9e714629852f29"
  },
  {
    "url": "task/202181.html",
    "revision": "3c287ddc03179d30f42bf029c3853215"
  },
  {
    "url": "task/202183.html",
    "revision": "e1ba06e0c2144df6465244ffb2b05f4b"
  },
  {
    "url": "task/202187.html",
    "revision": "6f8fa956e5ca150f528384b9bec53bd7"
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
