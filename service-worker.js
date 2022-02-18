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
    "revision": "7e2fb0b5a1442dca0032f51cf8b3c04f"
  },
  {
    "url": "assets/css/0.styles.0d4c152b.css",
    "revision": "0cd208280d48d7c84974adb7df86f917"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "e5829aa35b6065969c746466af7c8ed5"
  },
  {
    "url": "assets/img/android-chrome-256x256.png",
    "revision": "a8b8bf3eb668b4d21eaa94333129070e"
  },
  {
    "url": "assets/img/apple-touch-icon-120x120-precomposed.png",
    "revision": "d71b19cfbb7dfc937228cf9258aaabb8"
  },
  {
    "url": "assets/img/apple-touch-icon-120x120.png",
    "revision": "a88eaf58b1d605e2be14d0abd3b829a2"
  },
  {
    "url": "assets/img/apple-touch-icon-152x152-precomposed.png",
    "revision": "3f3fd1ab553abab720c667261b92b945"
  },
  {
    "url": "assets/img/apple-touch-icon-152x152.png",
    "revision": "47b395a2875206123438e4201639a453"
  },
  {
    "url": "assets/img/apple-touch-icon-180x180-precomposed.png",
    "revision": "39ac324b496aebeedacb42915c049a7e"
  },
  {
    "url": "assets/img/apple-touch-icon-180x180.png",
    "revision": "e9822e8cc486be4ad5a240bf49a12721"
  },
  {
    "url": "assets/img/apple-touch-icon-60x60-precomposed.png",
    "revision": "e3e00c994d77512b541eefc4dd872874"
  },
  {
    "url": "assets/img/apple-touch-icon-60x60.png",
    "revision": "2b93c66c74e8cf9dcc60b1573d63a4d1"
  },
  {
    "url": "assets/img/apple-touch-icon-76x76-precomposed.png",
    "revision": "0cf28cf0b78de79db690468e07055629"
  },
  {
    "url": "assets/img/apple-touch-icon-76x76.png",
    "revision": "eebb078bde405f43773c29b7833bc75a"
  },
  {
    "url": "assets/img/apple-touch-icon-precomposed.png",
    "revision": "39ac324b496aebeedacb42915c049a7e"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "e9822e8cc486be4ad5a240bf49a12721"
  },
  {
    "url": "assets/img/favicon-16x16.png",
    "revision": "4a99ad13953e60fc22c52d705bd158d0"
  },
  {
    "url": "assets/img/favicon-32x32.png",
    "revision": "673b8b88d09335f94ac28351662cc407"
  },
  {
    "url": "assets/img/mstile-150x150.png",
    "revision": "8dd6c568db0014f593e647240e943548"
  },
  {
    "url": "assets/img/mstile-310x310.png",
    "revision": "838b87fbc366577cf27c2ac3cc0970c6"
  },
  {
    "url": "assets/img/mstile-70x70.png",
    "revision": "d1c8deccc25d08f75ac6fab1da5e7f0c"
  },
  {
    "url": "assets/img/safari-pinned-tab.svg",
    "revision": "afdc9a19d25ec4d5c110e2c7bf67dfa8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2de8d4b9.js",
    "revision": "b978806f69552e147cb3edcdc4800560"
  },
  {
    "url": "assets/js/11.90947bab.js",
    "revision": "f55c3340ba85f2b9223e98bd4bf4c78f"
  },
  {
    "url": "assets/js/12.a79d419b.js",
    "revision": "bd6a5d45f2e05fea1d337ddd55a1f439"
  },
  {
    "url": "assets/js/13.d60cf873.js",
    "revision": "fae557c7723a23d01a9f0f194503744f"
  },
  {
    "url": "assets/js/14.3065a8b7.js",
    "revision": "f05737498956c28f7b309c88d9b6df66"
  },
  {
    "url": "assets/js/15.72c4c01f.js",
    "revision": "445bbf63bfec257484ea2c74d8a7fe4f"
  },
  {
    "url": "assets/js/16.7743602e.js",
    "revision": "4a44b5d9e1bfab95c17b93adc825cd86"
  },
  {
    "url": "assets/js/17.6eb0be02.js",
    "revision": "d5565106d0ae9034aefb650ff935ca4d"
  },
  {
    "url": "assets/js/18.636b4034.js",
    "revision": "4258b124d93bb4e0d0a25cd1f6e3b81d"
  },
  {
    "url": "assets/js/19.68912a54.js",
    "revision": "8a075bc269d92fa134cddfd62dac38b7"
  },
  {
    "url": "assets/js/2.16e02db3.js",
    "revision": "533c586f1670632427d3c457ed1c6d61"
  },
  {
    "url": "assets/js/20.6231dd9e.js",
    "revision": "9fda9236d8226664a62ab697fd16fcd3"
  },
  {
    "url": "assets/js/21.0d889689.js",
    "revision": "21fd934800aa233be99c9be58e4219dd"
  },
  {
    "url": "assets/js/22.090b8630.js",
    "revision": "3fbc3796c3f612804967985521470924"
  },
  {
    "url": "assets/js/23.2ffe5f07.js",
    "revision": "5b33c96d13104f492ba52569d4bd6c00"
  },
  {
    "url": "assets/js/24.396ee398.js",
    "revision": "4062486b3e9a330e1f4870301490040f"
  },
  {
    "url": "assets/js/25.4b1201f9.js",
    "revision": "66425a8830d7719aaf00f515ec11df7e"
  },
  {
    "url": "assets/js/26.112bef2c.js",
    "revision": "95cff491cc4e13a733bf2b041a623d92"
  },
  {
    "url": "assets/js/27.a14a89ff.js",
    "revision": "400966f8c7bf75613c3627979cf68b77"
  },
  {
    "url": "assets/js/28.391c773e.js",
    "revision": "31af5d6a4a269f86a9dcdafa413636f8"
  },
  {
    "url": "assets/js/29.7509033e.js",
    "revision": "462bb2c8b506bb4fba5e69312f4cab7a"
  },
  {
    "url": "assets/js/3.405edf1d.js",
    "revision": "b66e6275c1b2f80c89e85f157b06fdb3"
  },
  {
    "url": "assets/js/30.9853c08b.js",
    "revision": "2cd6913dceea887b324d468c44801ee1"
  },
  {
    "url": "assets/js/31.c028e7e6.js",
    "revision": "274f3a68426a85e232ec3578d58daf9f"
  },
  {
    "url": "assets/js/32.974862b0.js",
    "revision": "2467e9238e6890d4901023a6432985b8"
  },
  {
    "url": "assets/js/33.a1f128b6.js",
    "revision": "da8d3d8f2c77e8a9b189f31ff5801872"
  },
  {
    "url": "assets/js/34.2e594eff.js",
    "revision": "0c7e8ed60936f7fac65da35a472b63f2"
  },
  {
    "url": "assets/js/35.74e7c756.js",
    "revision": "acfcecd0fabcda6306db15a103ccb5e9"
  },
  {
    "url": "assets/js/36.a2997ade.js",
    "revision": "48d65a287511b95dfa2257cb4bbf9fbc"
  },
  {
    "url": "assets/js/37.fa4f6b40.js",
    "revision": "995ff5f5ff1972d3d44c40a44792a7af"
  },
  {
    "url": "assets/js/38.815c551f.js",
    "revision": "a2f8b70030780c3472f092d8a787e653"
  },
  {
    "url": "assets/js/39.897811b4.js",
    "revision": "1fb0927f7f0c2213fe9b0f88c5b0a9d5"
  },
  {
    "url": "assets/js/4.6b078159.js",
    "revision": "baa41fc2f1f4e68575de328d7a539699"
  },
  {
    "url": "assets/js/40.d7c9d352.js",
    "revision": "f5eda7a2f7bc57f3dcbaeb8bebd5cae1"
  },
  {
    "url": "assets/js/41.7bb855b8.js",
    "revision": "966f525d21f41b851098cfd36c54619e"
  },
  {
    "url": "assets/js/42.fe38cfa2.js",
    "revision": "973df1e5e587383263833cd50589613b"
  },
  {
    "url": "assets/js/43.47a71dd1.js",
    "revision": "0c5489087d6f8f7207725b0b3f83994c"
  },
  {
    "url": "assets/js/44.ada88c09.js",
    "revision": "bad74d6d2488960236f69a943b784cd3"
  },
  {
    "url": "assets/js/45.108ca83e.js",
    "revision": "d555bf00bf61a6fd1d779a9099f58bfc"
  },
  {
    "url": "assets/js/46.1779ca0d.js",
    "revision": "2b11029052051b10dc0078624e0ddb05"
  },
  {
    "url": "assets/js/47.5956ec1e.js",
    "revision": "ce2da01c163bcac6ddf5714d89ec0040"
  },
  {
    "url": "assets/js/48.8fd19902.js",
    "revision": "f44c6c01148d132cadcfc0eb1c76035f"
  },
  {
    "url": "assets/js/49.dd120c7d.js",
    "revision": "2d701211113b451d547d53c1b9d79c7f"
  },
  {
    "url": "assets/js/5.8cec0cdd.js",
    "revision": "31349fb67af9f186d2991de683a99d66"
  },
  {
    "url": "assets/js/50.e8d3c2e9.js",
    "revision": "d9f3a15279447d288d0c7ab64087d159"
  },
  {
    "url": "assets/js/51.7f83e4b7.js",
    "revision": "ead6e29dede3c286916414276d2ba276"
  },
  {
    "url": "assets/js/52.c3ac0e14.js",
    "revision": "885c291bb74b0d631d003b568af40719"
  },
  {
    "url": "assets/js/53.a19b05b1.js",
    "revision": "29c6c2191225e1c0129f81cf5a674b67"
  },
  {
    "url": "assets/js/54.97fd2fb2.js",
    "revision": "a97cdfd713787b76c6cf88d5f993b0be"
  },
  {
    "url": "assets/js/55.aa9ad38d.js",
    "revision": "a683223436bf223a5e8a2e500fa00736"
  },
  {
    "url": "assets/js/56.6e62bcf6.js",
    "revision": "6a27b0a2e1459eccc9137cb7eb4fbdf3"
  },
  {
    "url": "assets/js/57.e766c9e5.js",
    "revision": "c139ff8c67d8326cb14cb535c7583612"
  },
  {
    "url": "assets/js/58.ff95b7b0.js",
    "revision": "1d476a83bee5d44e1c24c61f43003e3f"
  },
  {
    "url": "assets/js/59.c9371347.js",
    "revision": "64928ca211c9b813b1e459b657947659"
  },
  {
    "url": "assets/js/6.a6b9eb56.js",
    "revision": "8bfc1271cd203ec30be0622ec123941e"
  },
  {
    "url": "assets/js/60.417bac2a.js",
    "revision": "49d515ce7b2890e66982adb759de2e9d"
  },
  {
    "url": "assets/js/61.d719ab4f.js",
    "revision": "daf89222317246a86bf515f4ea5df343"
  },
  {
    "url": "assets/js/62.7cfb7c32.js",
    "revision": "d1691be6284cbd64af6401d5c1e8c3de"
  },
  {
    "url": "assets/js/63.62949ba5.js",
    "revision": "1b16a0ca1c08134f3e94921672757c4a"
  },
  {
    "url": "assets/js/64.8b0d82b9.js",
    "revision": "1b23cb97978f0ebd779e315369122517"
  },
  {
    "url": "assets/js/65.1c276475.js",
    "revision": "a7d062c998d41905a069e213ecb82f98"
  },
  {
    "url": "assets/js/66.87fc7ab6.js",
    "revision": "b003400ececc241d1eb86c916bc260f5"
  },
  {
    "url": "assets/js/67.c1115c07.js",
    "revision": "af94acc7a16899bd32f691d0090de137"
  },
  {
    "url": "assets/js/68.809c83ba.js",
    "revision": "bca076b3b284c6ab491680b3a1a62ff6"
  },
  {
    "url": "assets/js/69.30ae0a39.js",
    "revision": "c7279735af2f4b03daa9badf81660b24"
  },
  {
    "url": "assets/js/7.a21ab910.js",
    "revision": "1e505f114af556b7108e933a3787280f"
  },
  {
    "url": "assets/js/70.e3fd9b5f.js",
    "revision": "365933633179fc4aa26eb94e8159d9d7"
  },
  {
    "url": "assets/js/71.57293ac5.js",
    "revision": "136dc1b6c7d588ec5879f929606f8197"
  },
  {
    "url": "assets/js/72.f137f6b6.js",
    "revision": "f457d44635abdd8bd8f60fa7ec03277c"
  },
  {
    "url": "assets/js/73.147e0e8b.js",
    "revision": "447e75942e7b35493f1101ced975b81c"
  },
  {
    "url": "assets/js/74.0e2822d9.js",
    "revision": "e0585a76cc31ec70733bf3760cd4807c"
  },
  {
    "url": "assets/js/75.e4efc11d.js",
    "revision": "75f57952927b40d38320cb3114bcc431"
  },
  {
    "url": "assets/js/76.8883344f.js",
    "revision": "9692043e1f7d635bdb104ec632b5d034"
  },
  {
    "url": "assets/js/77.c6a83542.js",
    "revision": "04b5024dd24c3c7c05e9ba3e37572fb1"
  },
  {
    "url": "assets/js/78.54d0ebf1.js",
    "revision": "89d098ff8bfd70cfefad8ddb1b67028e"
  },
  {
    "url": "assets/js/79.ff8508f0.js",
    "revision": "2bffbedab559c7e39bd2f589f16ab775"
  },
  {
    "url": "assets/js/8.7a2e3ba7.js",
    "revision": "60d343c43f746a46095a62acf0d896d6"
  },
  {
    "url": "assets/js/9.3778294e.js",
    "revision": "e01a4cf2fd860fbbf315ae0d679d1eb0"
  },
  {
    "url": "assets/js/app.dede66ff.js",
    "revision": "b93120b03317159d29112de4d3af2c69"
  },
  {
    "url": "index.html",
    "revision": "02e29a8f875a9cd6476f514dd1c3c4c8"
  },
  {
    "url": "list/20210301000000.html",
    "revision": "0f884a1e456abb97cd092960937bb4ae"
  },
  {
    "url": "list/20210721161650.html",
    "revision": "092fd0f29e67042e4669f5db7239f7eb"
  },
  {
    "url": "list/20210722122356.html",
    "revision": "3d864bc88ab0a4bd516f53315708937b"
  },
  {
    "url": "list/20210722124216.html",
    "revision": "a11c57b7f9007d156958cda28fcfe216"
  },
  {
    "url": "list/20210723131524.html",
    "revision": "be8c75ac1232f8597ec5a234000a8b8c"
  },
  {
    "url": "list/20210727182032.html",
    "revision": "517794ebbfa2cb857318ab56ecb8f9a7"
  },
  {
    "url": "list/20210805130603.html",
    "revision": "79a1cb967f8260685804fd002336e84d"
  },
  {
    "url": "list/20210805163211.html",
    "revision": "380980145c0906252ea51846b1dd92b1"
  },
  {
    "url": "list/20210805172839.html",
    "revision": "56632755a14a6e5d1833fb59b15d0f2a"
  },
  {
    "url": "list/20210805181213.html",
    "revision": "527532e642e61ae482e2e272f5a275dd"
  },
  {
    "url": "list/20210807175337.html",
    "revision": "fd650cd57475cf750d15f0c2247d237f"
  },
  {
    "url": "list/20210807215030.html",
    "revision": "83dbfdb7d4f53bf9ed203fa59ae91a8f"
  },
  {
    "url": "list/20210807222026.html",
    "revision": "6057b15862ffdfb74fb78b5b40d4851a"
  },
  {
    "url": "list/20210808123419.html",
    "revision": "f60e89aa55623c33609576769c205d76"
  },
  {
    "url": "list/20210811175819.html",
    "revision": "44fb8c0b224d76c8e12582c70f0203ec"
  },
  {
    "url": "list/20220218135219.md/20220218135219.html",
    "revision": "a1c143f6e79f1c9c43f041edd077598e"
  },
  {
    "url": "list/20220218143454.html",
    "revision": "d139ba59a4771855dcac79b393a8cede"
  },
  {
    "url": "list/20220218144829.html",
    "revision": "07e68dde3ea1d13da06e7e2e3689cc73"
  },
  {
    "url": "list/20220218153217.html",
    "revision": "71618cc73a8fddb6d53732d20505f444"
  },
  {
    "url": "list/20220218153334.html",
    "revision": "10690ec8803dbb0ef7b17409046ef904"
  },
  {
    "url": "post/plan.html",
    "revision": "e31a755092d68d5796baa36890515274"
  },
  {
    "url": "study/dilixinxi/xiti.html",
    "revision": "6d7256f7e46482a6e5232974163e9d6f"
  },
  {
    "url": "study/english/words.html",
    "revision": "2771faf741d345acf45a3ca092a096d6"
  },
  {
    "url": "study/jisuanjiqianyan/zuoye-01.html",
    "revision": "c5adfb95ad7b1e3e70124bc9ea7defb8"
  },
  {
    "url": "study/math/cuoti.html",
    "revision": "bf800b0b8bca530c0a9363c9cf7a974c"
  },
  {
    "url": "study/math/gaoshu.html",
    "revision": "748c6b5031d155a20c901b01d640e4da"
  },
  {
    "url": "study/math/gongshi.html",
    "revision": "97e7aea7e24f585c09ad4e89d0c672dd"
  },
  {
    "url": "study/shujvjiegou/zhishidian.html",
    "revision": "0cad17991eb4777cef4e448e7c511a2e"
  },
  {
    "url": "task/2020-7-2021-3.html",
    "revision": "10ffcc3902a6690a8f0aa5fc1fd671ac"
  },
  {
    "url": "task/2021-4-28.html",
    "revision": "1551844b8521846f08856cf6e3b92ebc"
  },
  {
    "url": "task/2021-4-29.html",
    "revision": "a7aaf7766789bfc195f7a5b9e23926a6"
  },
  {
    "url": "task/2021-4-30.html",
    "revision": "6ff59ecc392c881fe09f547a11e096c9"
  },
  {
    "url": "task/2021-5-12.html",
    "revision": "1018d717b4a2e667904d56634e7e43e8"
  },
  {
    "url": "task/2021-5-13.html",
    "revision": "0b038f688e2ab3ba5562bdf6301d2af8"
  },
  {
    "url": "task/2021-5-3.html",
    "revision": "22bd89b6bbb8a6294dd0e0c8564f0053"
  },
  {
    "url": "task/2021-5-6.html",
    "revision": "3e9574b8c95b63024dabab9f41267b69"
  },
  {
    "url": "task/2021/04/21.html",
    "revision": "e1ef9a1ec144f776735563da0460a141"
  },
  {
    "url": "task/2021/04/22.html",
    "revision": "3cd3af86cad265ec9e25485c7598c0e4"
  },
  {
    "url": "task/2021/04/23.html",
    "revision": "8ca1ec82aa900d0a7c8ab3c9784ab123"
  },
  {
    "url": "task/2021/04/24.html",
    "revision": "9fb7642cf13da120b4effb739a440fa9"
  },
  {
    "url": "task/2021/04/25.html",
    "revision": "90fce9f1d1cf6379250fbcb9fdd201d7"
  },
  {
    "url": "task/2021/04/27.html",
    "revision": "05040665dd492b964c5ab0db0fe230ca"
  },
  {
    "url": "task/2021511.html",
    "revision": "c9bb2270d78ed94ba7e22b07beda53b8"
  },
  {
    "url": "task/2021514.html",
    "revision": "12e690d4ccb2d7bf372f0f81b618f48a"
  },
  {
    "url": "task/2021515.html",
    "revision": "2075ced2af89da7101e509bd03edb57c"
  },
  {
    "url": "task/2021518.html",
    "revision": "4ffa02604cf7e823c453336c1e8f73de"
  },
  {
    "url": "task/2021519.html",
    "revision": "a6831e60d7f539f9ec85015c7169f744"
  },
  {
    "url": "task/2021520.html",
    "revision": "f8de95caf994cb8dd0977b434bdd8b03"
  },
  {
    "url": "task/2021521.html",
    "revision": "6f127872bf4573bf8057c18efcc14380"
  },
  {
    "url": "task/2021523.md/2021523.html",
    "revision": "e610c5f4b0b294415d97f27d76e93816"
  },
  {
    "url": "task/2021524.html",
    "revision": "0c55c249744c187bf67f5999cf601a31"
  },
  {
    "url": "task/2021531.html",
    "revision": "74402a388ca8e3e1dbd486d9d4d46fe4"
  },
  {
    "url": "task/2021628.html",
    "revision": "fb509e07f87e1c399f869c846bf35ae4"
  },
  {
    "url": "task/202164.html",
    "revision": "cbbb35b3a2881f0bfe1fece983fc607e"
  },
  {
    "url": "task/202169.html",
    "revision": "ff89ff8406490f463369abf1d202096f"
  },
  {
    "url": "task/2021717.html",
    "revision": "8243693fee3f37ea88ca166b7d696e8c"
  },
  {
    "url": "task/2021721.html",
    "revision": "a6abbe5978e0319578a396a99761b867"
  },
  {
    "url": "task/2021722.html",
    "revision": "e27358a1d845bed2fd9e80b399e09e9a"
  },
  {
    "url": "task/2021724.html",
    "revision": "f2a1df261dd54c02633571c84309553f"
  },
  {
    "url": "task/2021725.html",
    "revision": "73ae67fcb75f6e7266b6e5184f1b1bf6"
  },
  {
    "url": "task/202181.html",
    "revision": "88bb155d75d5efaa3dd69e20e8e078e3"
  },
  {
    "url": "task/2021811.html",
    "revision": "9bed3eecbc9d1732c0caafc850a20e46"
  },
  {
    "url": "task/2021812.html",
    "revision": "5b4842e171b5c12c2f1ac5a000133336"
  },
  {
    "url": "task/202183.html",
    "revision": "c70230cf49c000def77f2910539697a1"
  },
  {
    "url": "task/202187.html",
    "revision": "9ff580b740dfa63979921363de73bbae"
  },
  {
    "url": "task/2022218.html",
    "revision": "345692e44007258e905293fd72ab2436"
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
