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
    "revision": "12c510de1ca21bb9722439a80d103364"
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
    "url": "assets/js/5.1a68671d.js",
    "revision": "89cd01f4d987745668bb2d90d03d7d3f"
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
    "url": "assets/js/68.44fa4a4b.js",
    "revision": "8aa870428f6c31b27887765024387ecc"
  },
  {
    "url": "assets/js/69.133fbf59.js",
    "revision": "758191d567237621cbb39bb26093292a"
  },
  {
    "url": "assets/js/7.57bbc117.js",
    "revision": "677e9a7143f477495224dfdc86260d34"
  },
  {
    "url": "assets/js/70.01e1edc7.js",
    "revision": "4ecfdd263b3c923f370956b9169d7255"
  },
  {
    "url": "assets/js/71.cdc174a5.js",
    "revision": "8479c4a3d0d909dbb535526b4d9b1095"
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
    "url": "assets/js/app.5bbe8cbe.js",
    "revision": "8c81e1827e48550a93f38e4e5a6ab540"
  },
  {
    "url": "index.html",
    "revision": "fffd6c6309af8c67f25981d8bd2f8238"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "5619be548a69b798e8529cfb7d41369b"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "33d9497999e9ccec83165043b147ebf0"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "778de0423011d5e8d4346a8243a4f856"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "9c6915a18c5e85ba2b2083a72368cb16"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "2a0efd598852096fa2094e32a775bac6"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "9c6a65bce08feb4f53ec0b26c7e89036"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "dbcdd398b7491a5c42a009c01baa91ba"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "e994bd73a92789ee1fa2088c0da34394"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "2c43cf7dca3dee830012ed45f58a63dc"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "7b1f66dc85cf8925fc72eb9a33c85942"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "4bf032194090aa8c006e991abbfd7f46"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "0e31cde04b38c946557b1844991868fd"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "a1ae39a7f547efa5a5d5330b40020a5d"
  },
  {
    "url": "memo/memo.html",
    "revision": "1a96c99d20b28b97ee7d21228c988b25"
  },
  {
    "url": "post/test.html",
    "revision": "05bea1011d4beb386c5724ad40185abf"
  },
  {
    "url": "post/useOfBlog.html",
    "revision": "de51ef6907397a0d1d3dbbc821a11cff"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "176fb4d797e146bf9ff6fb85e80b6264"
  },
  {
    "url": "study/english/words.html",
    "revision": "40de43df98e298d3aeee517ded464543"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "54adc048d5424ac28bd85958fc64e96e"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "4043fa76e3df157def96566fc002360f"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "bab50add039ebd3812f3d0eb1a629a2e"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "e50533aa3d3c7a518c69d9a9d65aa413"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "faa561644e3da3d9c0244461fa244de6"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "5d7bc94348810d455f4e824147368e35"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "7bb705050b6a3053dc53e05b3d6d3479"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "b3a9f4cc312024aeb0683c5ab3610d22"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "d89ddb7938192dc13e93511994da60be"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "b3c8c225402ffca4e49580bf63bc02f7"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "5682b0dc3992e3a4ddaa7ed668958942"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "f77c762401d1f27cf4e9b5326a8d1a6c"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "b9473a2c6e2a2bde595875a13ae1b921"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "5964eb2bcc8a41599a9b5ffebc712e17"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "56b511c88a7d3d80ce677f928b57c2e0"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "99c3e71198fa04a52b95b852996da81c"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "afa32b4a622d7a7359401a40bea3b39d"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "bdf8c9227ac5888927f759421153aca1"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "87631281a3aed5067909d430171a3003"
  },
  {
    "url": "task/2021511.html",
    "revision": "77e76271cffccacfdd0fceac9fa24fb8"
  },
  {
    "url": "task/2021514.html",
    "revision": "459491bfd901eb8c2e36b565c1c9dd1e"
  },
  {
    "url": "task/2021515.html",
    "revision": "2ede0bc2734bc2fa8a937dcd788b9422"
  },
  {
    "url": "task/2021518.html",
    "revision": "57d14befef5e393b3a12efb5afdf0d2e"
  },
  {
    "url": "task/2021519.html",
    "revision": "c9e7b16c43617e432702d342c15acc0c"
  },
  {
    "url": "task/2021520.html",
    "revision": "15e9e0b4a81e0442c42f3241f882c334"
  },
  {
    "url": "task/2021521.html",
    "revision": "c73e3cfdfa4f34455071af120db9baea"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "953d3b0c833e8613303d05e6bbb62c16"
  },
  {
    "url": "task/2021524.html",
    "revision": "b8421ac152c0c2d98553bb2c0ed5d45c"
  },
  {
    "url": "task/2021531.html",
    "revision": "fb7eee949c356caa8eeb40773ecb46df"
  },
  {
    "url": "task/2021628.html",
    "revision": "c3549abf5b7d1f6e05f8ad956956648e"
  },
  {
    "url": "task/202164.html",
    "revision": "b80ffff56efc968afa0ec2d613bc52e0"
  },
  {
    "url": "task/202169.html",
    "revision": "d04ab498c5147a9f5c0500200e882bab"
  },
  {
    "url": "task/2021717.html",
    "revision": "ec41c5e8f830172061c2d9292a576b9c"
  },
  {
    "url": "task/2021721.html",
    "revision": "72904a3a3138e386c4d0d648d0b3e06c"
  },
  {
    "url": "task/2021722.html",
    "revision": "1610d8b9114c140d8607b240155c706d"
  },
  {
    "url": "task/2021724.html",
    "revision": "419943222285eb707014e3fadd5c53e1"
  },
  {
    "url": "task/2021725.html",
    "revision": "8c4644f3f150df820ba3001756ca832a"
  },
  {
    "url": "task/202181.html",
    "revision": "014ffcc75257d87dd05ebe43ec4316b5"
  },
  {
    "url": "task/2021811.html",
    "revision": "81268a11de02298b5a4295edad305615"
  },
  {
    "url": "task/202183.html",
    "revision": "24bd7569fc7bec4b1474bdd3b428d9d8"
  },
  {
    "url": "task/202187.html",
    "revision": "ce58c88adfa1e326508fbeba7b02a023"
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
