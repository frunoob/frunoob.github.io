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
    "revision": "81ea0b1af84b4ba91b999dd026188acb"
  },
  {
    "url": "admin.html",
    "revision": "fa6a40981c13c0539b276c86d6b8dab6"
  },
  {
    "url": "assets/css/0.styles.4792064c.css",
    "revision": "5a0318b94359b1859d2cad08e9266ba1"
  },
  {
    "url": "assets/css/video.css",
    "revision": "ed2bac56c7358a769e3b0425cea636fd"
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
    "url": "assets/js/10.253eb977.js",
    "revision": "eaf38324757e307c1aac558337ba32ef"
  },
  {
    "url": "assets/js/100.9ec22e8b.js",
    "revision": "2bb959949a6be09eeea09c90088a5b63"
  },
  {
    "url": "assets/js/101.3fa2906e.js",
    "revision": "d80717a95eb01f76fa3d36f674848c80"
  },
  {
    "url": "assets/js/102.5687d134.js",
    "revision": "727162f2a86f779728a92ad7cf841730"
  },
  {
    "url": "assets/js/103.9dacb8b1.js",
    "revision": "464acb43e2ebe45762bd54d841e8de34"
  },
  {
    "url": "assets/js/104.6142839b.js",
    "revision": "21f78dfcd8ad70e550e1428c595d960f"
  },
  {
    "url": "assets/js/105.e92bb533.js",
    "revision": "68223126e6a568d900997cb5e896aa54"
  },
  {
    "url": "assets/js/106.472d5443.js",
    "revision": "c17903c9d6500f38416dd58ce1ef50ab"
  },
  {
    "url": "assets/js/107.f11e2a5a.js",
    "revision": "35b2ba9dc22fc61522b1fc26f9f79afe"
  },
  {
    "url": "assets/js/108.9e763c9a.js",
    "revision": "68a3c194e5aa97e9c890f9317c58abed"
  },
  {
    "url": "assets/js/109.1d29f41a.js",
    "revision": "972d88591e4ecec647b44b133489ba55"
  },
  {
    "url": "assets/js/11.fbece9d4.js",
    "revision": "2a9baae1c413449a33ff5b5a9e09e620"
  },
  {
    "url": "assets/js/110.0e1872c4.js",
    "revision": "392fbfe9c8dff1595841588adf9c191b"
  },
  {
    "url": "assets/js/111.22bbac1a.js",
    "revision": "12148e7baae2f6b3bf93d2ba1e84c3c9"
  },
  {
    "url": "assets/js/112.f076a14f.js",
    "revision": "547abc2e3e1bb31b9e793b0681c1571d"
  },
  {
    "url": "assets/js/113.0431b465.js",
    "revision": "a264cd53c67048fb5313af8bddbd9c2f"
  },
  {
    "url": "assets/js/114.f6e4bf4f.js",
    "revision": "aea98f00581a20bedfae7d3cd7016495"
  },
  {
    "url": "assets/js/115.22951064.js",
    "revision": "a1c99be6f887a6baf352aa28c743f316"
  },
  {
    "url": "assets/js/116.909459ed.js",
    "revision": "f0b450cba200794e82a567929922c2cd"
  },
  {
    "url": "assets/js/117.0e7acec2.js",
    "revision": "bb00ae5910a31d9216488d6deb4a3f89"
  },
  {
    "url": "assets/js/118.04eae805.js",
    "revision": "cd4a6c27146b1f2633cf49a3b3cbe310"
  },
  {
    "url": "assets/js/119.751000ec.js",
    "revision": "0b220d0fe9865050fc21a2d83baa1130"
  },
  {
    "url": "assets/js/12.a833e45b.js",
    "revision": "51df9434b266cba915795711e137335a"
  },
  {
    "url": "assets/js/120.53084319.js",
    "revision": "8a27fd0789e704ac8fade238202c614d"
  },
  {
    "url": "assets/js/121.fd6dd114.js",
    "revision": "5365e05cb2a7375c125ddfdba0aae7d7"
  },
  {
    "url": "assets/js/122.2cee038b.js",
    "revision": "676dc620e41e140f8be27ec95396f650"
  },
  {
    "url": "assets/js/123.1838cd13.js",
    "revision": "ffd2b52e6325d3ad58f893df6ba51083"
  },
  {
    "url": "assets/js/124.e6ddd7d4.js",
    "revision": "ed62c10e7d3365c372f706a16ccbe664"
  },
  {
    "url": "assets/js/125.5756420a.js",
    "revision": "6a7eabe60bd0747c686a2c512c841495"
  },
  {
    "url": "assets/js/126.044d1d49.js",
    "revision": "451a4723597a564e420f66f0665689e0"
  },
  {
    "url": "assets/js/127.ebdbf453.js",
    "revision": "f3a64e9ae4b876e22b976af7cef1d176"
  },
  {
    "url": "assets/js/128.20a91f4e.js",
    "revision": "13ec4ac8ba895c29e20ec54ab1fa0b88"
  },
  {
    "url": "assets/js/129.b61c6a8c.js",
    "revision": "97625ffe46cc9b51900b22bd47b3c4ef"
  },
  {
    "url": "assets/js/13.31248cfe.js",
    "revision": "d7b5c0400d646936c7d68656a3f37cfc"
  },
  {
    "url": "assets/js/130.05efb432.js",
    "revision": "c7eff451529762a81294b706d400f6d0"
  },
  {
    "url": "assets/js/131.5e623337.js",
    "revision": "82b2237b8ebd6820c2b91f71ac8028d2"
  },
  {
    "url": "assets/js/132.470d1711.js",
    "revision": "739e398d2394b7775f3d6a9032bf3f6e"
  },
  {
    "url": "assets/js/133.c576a636.js",
    "revision": "a32eb9d2fe7e00dde6d45aad8fdd7dfe"
  },
  {
    "url": "assets/js/134.b3e5d4f4.js",
    "revision": "52c85f4ac9c30b205ddfbc9636b719cf"
  },
  {
    "url": "assets/js/135.5e295caf.js",
    "revision": "179ca39dfa792d7a639567d73208e0fe"
  },
  {
    "url": "assets/js/136.932cc8dd.js",
    "revision": "95ecf1e2618213dcaf6a3975149cbaea"
  },
  {
    "url": "assets/js/137.d7ef0a80.js",
    "revision": "0fc1dfe506b5646b06be35bc9659fa43"
  },
  {
    "url": "assets/js/138.d4471f9b.js",
    "revision": "989d43c23a0b41b5039f6bf5a8d00da5"
  },
  {
    "url": "assets/js/139.84b5dfe3.js",
    "revision": "37072fda6ef03d48a2e984ecef2d6bbd"
  },
  {
    "url": "assets/js/14.b548d280.js",
    "revision": "f826d4604e604a646aac5c54780d1474"
  },
  {
    "url": "assets/js/140.279aa296.js",
    "revision": "3b02c37d6d06129adfccd0d90aea3c06"
  },
  {
    "url": "assets/js/141.87de5bf8.js",
    "revision": "581f0787e8bbd5cdd7bdb89381af943c"
  },
  {
    "url": "assets/js/142.2a6512dd.js",
    "revision": "a31fe28f927de50620d5bf6e6967c886"
  },
  {
    "url": "assets/js/143.e0918949.js",
    "revision": "d14d5c1c43f6fd5e9331de6ad3dde9e8"
  },
  {
    "url": "assets/js/144.19d6d001.js",
    "revision": "1eb0ee80c20b494ebe65f16a36a92de9"
  },
  {
    "url": "assets/js/145.7525cdc5.js",
    "revision": "a9ba3f0b58f18d88490eb1354ba34538"
  },
  {
    "url": "assets/js/146.c1002f06.js",
    "revision": "baa6d69a84663bad45eca2ee4d3496ac"
  },
  {
    "url": "assets/js/147.dc1e6d3f.js",
    "revision": "8036af8d9b17e10d0e5d5373a28ad8ed"
  },
  {
    "url": "assets/js/148.3a00cc96.js",
    "revision": "85ddffa9f136fb8b530dfc76f24eb270"
  },
  {
    "url": "assets/js/149.fd28e69d.js",
    "revision": "73994bcf45d3105e6374f445a0023e46"
  },
  {
    "url": "assets/js/15.c0ac963d.js",
    "revision": "cc4a5c8210dea1b00e6307efeb6ee241"
  },
  {
    "url": "assets/js/150.5a9f414d.js",
    "revision": "05bb3880d0a049c3aacbfee1f127a62c"
  },
  {
    "url": "assets/js/151.426d23ad.js",
    "revision": "4d90f0f5c7bc489a874f57455a0b5276"
  },
  {
    "url": "assets/js/152.5b91cf13.js",
    "revision": "33f019bdb111b78e918701e801738206"
  },
  {
    "url": "assets/js/153.ad34b652.js",
    "revision": "ecb98174842175f753250b4ad35417ec"
  },
  {
    "url": "assets/js/154.32134687.js",
    "revision": "01be9324c55a6b01b7c86215886cbc66"
  },
  {
    "url": "assets/js/155.6a64a56e.js",
    "revision": "b40552a0a35e2ea943f1bf9fe4db803e"
  },
  {
    "url": "assets/js/156.54d37d55.js",
    "revision": "9b90c0de359014468accaf1ca8eb97db"
  },
  {
    "url": "assets/js/157.8bbe33e6.js",
    "revision": "a31a0327d3f00f7130551a320c15001c"
  },
  {
    "url": "assets/js/158.31cdeed9.js",
    "revision": "c077f04d5e598294495be6d57dfadaf2"
  },
  {
    "url": "assets/js/159.a3e7e84c.js",
    "revision": "46c923e7f40122186765825ecd4a96ac"
  },
  {
    "url": "assets/js/16.88311161.js",
    "revision": "8e76e0dad300b320fa22b1203e5eb21a"
  },
  {
    "url": "assets/js/160.e11f6c45.js",
    "revision": "35c4803898a8440163420e1932e8bcf7"
  },
  {
    "url": "assets/js/161.9c3e78c8.js",
    "revision": "34d689ad3ea7f255dfaca56e6f873dee"
  },
  {
    "url": "assets/js/162.01085f01.js",
    "revision": "740f4c6c5653914823a19047230e90a6"
  },
  {
    "url": "assets/js/163.f1bbd2de.js",
    "revision": "468a3a47809ac0370eab4cb11e5fd77a"
  },
  {
    "url": "assets/js/164.fdd18dc4.js",
    "revision": "69b3728c80a419d81dff2802f8b6b8d8"
  },
  {
    "url": "assets/js/165.ca009629.js",
    "revision": "fbc6fdbe362dede0186ebaf706b33c4f"
  },
  {
    "url": "assets/js/166.0731b31a.js",
    "revision": "12d23c0d90bf1458210f30b2cfd24cc8"
  },
  {
    "url": "assets/js/167.fc90acf2.js",
    "revision": "1a5cd9bb2a9bb48155d6a1284a7c150c"
  },
  {
    "url": "assets/js/168.d052c8a7.js",
    "revision": "0aa14a8d610871a50a34c50cdc879c92"
  },
  {
    "url": "assets/js/169.78721b4f.js",
    "revision": "bf32fe549eafa03285dbbd7e6b026d6d"
  },
  {
    "url": "assets/js/17.5cfa5e77.js",
    "revision": "7526c33bf181325cbae8fb531aa878fb"
  },
  {
    "url": "assets/js/170.afbbda19.js",
    "revision": "b446559429ae45016bbadc5ac1386ad4"
  },
  {
    "url": "assets/js/171.244b75e2.js",
    "revision": "f0bda6765eebe91d653560f7b89cbf92"
  },
  {
    "url": "assets/js/172.dc6ba2ee.js",
    "revision": "cfc442357bd1f76624f76c9de48dd67b"
  },
  {
    "url": "assets/js/173.b5a72e13.js",
    "revision": "1e21caf9d0a1a970864151e81dd090e7"
  },
  {
    "url": "assets/js/174.998bd64f.js",
    "revision": "89800cd1e1138eead1bff50a2d9fc731"
  },
  {
    "url": "assets/js/175.df0fc6a2.js",
    "revision": "d94eadf2892fbdc810bed0f185bf8c17"
  },
  {
    "url": "assets/js/176.2f3620f1.js",
    "revision": "598a5aa6d82d410b16e76281a0a9b125"
  },
  {
    "url": "assets/js/177.81dfe375.js",
    "revision": "f110fe6c28f51e23f73557aa3b4ef268"
  },
  {
    "url": "assets/js/178.dbc341a3.js",
    "revision": "75e8b1025cea1b9f062308afe968d1c7"
  },
  {
    "url": "assets/js/18.cb5a6ec8.js",
    "revision": "a4c9d8b2f6fa9a16220107f76add6596"
  },
  {
    "url": "assets/js/19.fbbbb9b4.js",
    "revision": "b5bdc2a8aad8d5feb912290cdf644a27"
  },
  {
    "url": "assets/js/2.5ec82450.js",
    "revision": "dc2be6fc7272b8efae8077f56dd05983"
  },
  {
    "url": "assets/js/20.c7620f4f.js",
    "revision": "966cf5ab8998ddff5e6962a9a7cbc561"
  },
  {
    "url": "assets/js/21.30ff0efa.js",
    "revision": "a328453a10f704cd1a000cb9e0cef275"
  },
  {
    "url": "assets/js/22.951e6eec.js",
    "revision": "c334522c33301044edc66767b0bfc3bb"
  },
  {
    "url": "assets/js/23.b4d774ab.js",
    "revision": "39992ae9639744a84d6422ee44f4fd5d"
  },
  {
    "url": "assets/js/24.c5c6ab14.js",
    "revision": "5925eafe3343df023b1075cac41970e7"
  },
  {
    "url": "assets/js/25.cdcc3d89.js",
    "revision": "f47495cadffc9b9c0510fe7897234aaa"
  },
  {
    "url": "assets/js/26.9f3220b3.js",
    "revision": "79635d02912c734aecf717f4d76f8afb"
  },
  {
    "url": "assets/js/27.72859b0d.js",
    "revision": "1134483795d4b55aed5237b48719c4dc"
  },
  {
    "url": "assets/js/28.24c1117f.js",
    "revision": "3b3f0ebd82262da7027a8bae1a546b08"
  },
  {
    "url": "assets/js/29.a45ff872.js",
    "revision": "f79f27869648e12528a5e5b3e7a91a7d"
  },
  {
    "url": "assets/js/3.b6271af5.js",
    "revision": "0674a3ee28f6b54ae49a8250c4c40ff7"
  },
  {
    "url": "assets/js/30.2bae8387.js",
    "revision": "32a918748024ae3ce257427fe34c2601"
  },
  {
    "url": "assets/js/31.57b43565.js",
    "revision": "3559c0d6d3045afd79ee331b61156d34"
  },
  {
    "url": "assets/js/32.3a2e2ee8.js",
    "revision": "adf8c6961bbcd8a54d7abba450b91591"
  },
  {
    "url": "assets/js/33.02da0b3e.js",
    "revision": "258d76ef15950c938e843c0e6ff6cb0d"
  },
  {
    "url": "assets/js/34.b163b0f8.js",
    "revision": "fa006094fe9941b69e7f5603fdc50caf"
  },
  {
    "url": "assets/js/35.39589a02.js",
    "revision": "1b45a0c0c3b180f495ac437080349522"
  },
  {
    "url": "assets/js/36.c39c910f.js",
    "revision": "2ddc37ddddff69d77ee142618eb70e47"
  },
  {
    "url": "assets/js/37.764c5092.js",
    "revision": "b9f8cd30bcdfb8a18a0d6af621289643"
  },
  {
    "url": "assets/js/38.e66198c5.js",
    "revision": "491ba090236369d8827af45083cf82eb"
  },
  {
    "url": "assets/js/39.440b9d89.js",
    "revision": "0be0e6182d8572045576276de78f87c4"
  },
  {
    "url": "assets/js/4.f3f71eb2.js",
    "revision": "a3f3f68a117935ad411fd03db9277636"
  },
  {
    "url": "assets/js/40.b05dadfe.js",
    "revision": "b5522e9308c04eb570349f062e9ea22c"
  },
  {
    "url": "assets/js/41.f62243b3.js",
    "revision": "5ba2b79d5586bfda60baa2d8d0bbebda"
  },
  {
    "url": "assets/js/42.b670d223.js",
    "revision": "606fa5474ff40e0fc626a0ae6dd18f20"
  },
  {
    "url": "assets/js/43.f50e455b.js",
    "revision": "83c8a7851befdd06031cb722a8bdf104"
  },
  {
    "url": "assets/js/44.f31a29ea.js",
    "revision": "614685b1b65e7a2eb798c67f99820702"
  },
  {
    "url": "assets/js/45.18d72035.js",
    "revision": "81a9f4726b4f2ac2ff5761e703f9dee3"
  },
  {
    "url": "assets/js/46.cbb20af0.js",
    "revision": "a7fe5774de5bf57f2908ce6f7dd7513e"
  },
  {
    "url": "assets/js/47.e113e2a0.js",
    "revision": "ae5308ae7fc22841d33c3e92f929fcd8"
  },
  {
    "url": "assets/js/48.16a16e1b.js",
    "revision": "361d8ef141a5b9483650d98f95c46e4f"
  },
  {
    "url": "assets/js/49.7c83ce0b.js",
    "revision": "46ae9b701185f9159f3af98e4dab0dcb"
  },
  {
    "url": "assets/js/5.26833a97.js",
    "revision": "83ba4effc22404ee43644d3e858a3247"
  },
  {
    "url": "assets/js/50.812ec269.js",
    "revision": "9158d318295daf2740d2379dbad261ea"
  },
  {
    "url": "assets/js/51.cff9677a.js",
    "revision": "21f26e4c20cd5428771b9a2d1c52c0c3"
  },
  {
    "url": "assets/js/52.9472df0d.js",
    "revision": "add824de003fcfdf9ec63f7639f1199c"
  },
  {
    "url": "assets/js/53.df4a791a.js",
    "revision": "1d62b26bf263d69605ef3d4c37131a76"
  },
  {
    "url": "assets/js/54.06042b84.js",
    "revision": "e4c99f3b5e26eb1e194cef124bd0f89b"
  },
  {
    "url": "assets/js/55.16e26ef2.js",
    "revision": "efe735fc589d52daa95707d2b4669545"
  },
  {
    "url": "assets/js/56.f1e76579.js",
    "revision": "7ca4609a4618d1273f94cc49f2010a9e"
  },
  {
    "url": "assets/js/57.5d0a5787.js",
    "revision": "b5b3624036ef2c37730b719378dfa052"
  },
  {
    "url": "assets/js/58.1bfa5679.js",
    "revision": "2c423e252b9c602fa7824c30ff539a92"
  },
  {
    "url": "assets/js/59.48249cd6.js",
    "revision": "6d32b3ec60ab9f20053d74c09b4c68cd"
  },
  {
    "url": "assets/js/6.f0a775a3.js",
    "revision": "3654a8c4117464951888180c80ca56f2"
  },
  {
    "url": "assets/js/60.1934550f.js",
    "revision": "c770580d21c1b99af6751b50b7dcf089"
  },
  {
    "url": "assets/js/61.7d2d7f6e.js",
    "revision": "0e5d13209b2c106712377dc40ae7cbc5"
  },
  {
    "url": "assets/js/62.53e1100c.js",
    "revision": "5925d801d2b244a323d06de31b3ef762"
  },
  {
    "url": "assets/js/63.d46e48a3.js",
    "revision": "cae466ede8b3e100a3516927ed61c418"
  },
  {
    "url": "assets/js/64.cd2dddb3.js",
    "revision": "1d59efd4cf20de71f87fa2cf75633b56"
  },
  {
    "url": "assets/js/65.ee78e69d.js",
    "revision": "6b1328f33d8c3e90fdac8ddef14f6bb6"
  },
  {
    "url": "assets/js/66.c5825254.js",
    "revision": "ebd03962e04fa36f0dc015c948825853"
  },
  {
    "url": "assets/js/67.c4984f2e.js",
    "revision": "66787509808c47858950ee7143765f63"
  },
  {
    "url": "assets/js/68.606f40bd.js",
    "revision": "8e3d30139c6b96aeef600f373710e400"
  },
  {
    "url": "assets/js/69.deec41cd.js",
    "revision": "86ceded10998538f4614aa3df5655b74"
  },
  {
    "url": "assets/js/7.be292a6e.js",
    "revision": "e1c36f9e616f748a5d584b2d77a5c4da"
  },
  {
    "url": "assets/js/70.e61bb03b.js",
    "revision": "d21a51a662aeab061834669eb223c465"
  },
  {
    "url": "assets/js/71.22576eb6.js",
    "revision": "2dc138c8cbdb41e8ff701f63c796fe00"
  },
  {
    "url": "assets/js/72.13d72d92.js",
    "revision": "76058c27d722536285a099ec372c5d8e"
  },
  {
    "url": "assets/js/73.095c6a22.js",
    "revision": "c5bd548d57356562ae8f17cad9304951"
  },
  {
    "url": "assets/js/74.d02c2b07.js",
    "revision": "12f3b4b88d58011ee95c0723192f79d1"
  },
  {
    "url": "assets/js/75.c56a3caa.js",
    "revision": "1bb1a0ce82550127f7cb0850666a4d27"
  },
  {
    "url": "assets/js/76.845105ae.js",
    "revision": "18f1972b9475b2a69e9aa9afb7e75d53"
  },
  {
    "url": "assets/js/77.3a4f16e8.js",
    "revision": "9d62000623b5ddf92bd4a998ac845c7c"
  },
  {
    "url": "assets/js/78.67885e49.js",
    "revision": "0349ab911b17ed8b4f170b336dc34a7d"
  },
  {
    "url": "assets/js/79.922d360d.js",
    "revision": "81dd6001746ff89c57c373c9a6665f9d"
  },
  {
    "url": "assets/js/8.33e2aa52.js",
    "revision": "06215608121d19dedc2b6bba0838b0fb"
  },
  {
    "url": "assets/js/80.12e71dc4.js",
    "revision": "401186a6499c9c4263c18a31791b051b"
  },
  {
    "url": "assets/js/81.7a281fb4.js",
    "revision": "6c83ece6805db27c6bc75f878303547a"
  },
  {
    "url": "assets/js/82.119ac835.js",
    "revision": "d052b6f1806576f79460b8d29420b85f"
  },
  {
    "url": "assets/js/83.f9db7ef9.js",
    "revision": "713b4b118e862056248aaee39a5e77a1"
  },
  {
    "url": "assets/js/84.8f339922.js",
    "revision": "a63932ad8c9b72a87f715c07874bf7ba"
  },
  {
    "url": "assets/js/85.77741070.js",
    "revision": "1ae012c1071a28355385328bf498f714"
  },
  {
    "url": "assets/js/86.7d485a13.js",
    "revision": "9ed6d17647e304feaf9d5001abe7861d"
  },
  {
    "url": "assets/js/87.d133e70c.js",
    "revision": "45fda70390bf225e90f197ebdbde26c8"
  },
  {
    "url": "assets/js/88.d247a352.js",
    "revision": "f03cc61d6f6c1ad7ee529baf316eb892"
  },
  {
    "url": "assets/js/89.db0f3cda.js",
    "revision": "51fc704fd51c12f3d84ed6ac7f1eb369"
  },
  {
    "url": "assets/js/9.4306bbc1.js",
    "revision": "4639d7718a3ee369a25d136026ee4c7e"
  },
  {
    "url": "assets/js/90.39bbed12.js",
    "revision": "806dde04109ffe16c483c8f265371cd4"
  },
  {
    "url": "assets/js/91.b0cd523a.js",
    "revision": "67510bc08f413ee6b3e82a1623e44e5e"
  },
  {
    "url": "assets/js/92.e2e5ca00.js",
    "revision": "8889c24456f3970cdb7b37269bb0f64f"
  },
  {
    "url": "assets/js/93.7f863f33.js",
    "revision": "0258900228b7b6c5264e67bbb57fa63d"
  },
  {
    "url": "assets/js/94.d1b461e1.js",
    "revision": "808b2a07f2c8c99e9f6e541c16d3e824"
  },
  {
    "url": "assets/js/95.c2c18c46.js",
    "revision": "4d84cdb05603dd85145c5492aaaf6198"
  },
  {
    "url": "assets/js/96.bb3a3531.js",
    "revision": "aecac70940584fb55557f884750b7418"
  },
  {
    "url": "assets/js/97.7a1d53a1.js",
    "revision": "b7d5fdc9032d93715be7eaf1e351feb6"
  },
  {
    "url": "assets/js/98.99b2bab7.js",
    "revision": "84f82a1233e297074a6bb38cfdca84d1"
  },
  {
    "url": "assets/js/99.438c6e33.js",
    "revision": "19ee17c1bd8d4d951f2651f7e2da13a9"
  },
  {
    "url": "assets/js/app.603f5dbe.js",
    "revision": "be30a2eae1742d66d7c90d07603a2712"
  },
  {
    "url": "assets/js/streaming.js",
    "revision": "cfc015e432278d50bda0efead48168df"
  },
  {
    "url": "assets/js/video.js",
    "revision": "e5d0c2b560ccb06b1c8ba810adc87707"
  },
  {
    "url": "assets/prism.css",
    "revision": "c5ee0e8297d73ae3c2f4d9c4dd0483dd"
  },
  {
    "url": "assets/prism.js",
    "revision": "fb33cb3d7dd5b173a1db124871432967"
  },
  {
    "url": "diary.html",
    "revision": "c15ad1b087adcfc707c76b630f77b2e8"
  },
  {
    "url": "diary/20200701000000.html",
    "revision": "3aa309f5626d8ec46eeca5d1c463446f"
  },
  {
    "url": "diary/20210421000000.html",
    "revision": "748b09f5bdcc120f6f9e997ec8f51a7d"
  },
  {
    "url": "diary/20210422000000.html",
    "revision": "f4481a7f869a8cb9ce01ae1ea8ff612d"
  },
  {
    "url": "diary/20210423000000.html",
    "revision": "859014c84e8960f4399f381464fc241e"
  },
  {
    "url": "diary/20210424000000.html",
    "revision": "317628e2198b78a65fc5db17142cdf43"
  },
  {
    "url": "diary/20210425000000.html",
    "revision": "384df1ee6abc70fdf48c2d5712faa97f"
  },
  {
    "url": "diary/20210427000000.html",
    "revision": "6dd9f88b01de3e7d0c91e60770e2177f"
  },
  {
    "url": "diary/20210428000000.html",
    "revision": "b4787176821bb019266f1f95ea44eea9"
  },
  {
    "url": "diary/20210429000000.html",
    "revision": "a096c98a41e3e342eeda9f69a5dc5b81"
  },
  {
    "url": "diary/20210430000000.html",
    "revision": "92f5e406ab96b0fb5042268f7f3edce7"
  },
  {
    "url": "diary/20210503000000.html",
    "revision": "0a1ec481ce4f32276b97146e4873cd9a"
  },
  {
    "url": "diary/20210506000000.html",
    "revision": "f3766b0848e43f639f640314856555e9"
  },
  {
    "url": "diary/20210511000000.html",
    "revision": "1ac7da70d4aba1bd28149dc4eada5db7"
  },
  {
    "url": "diary/20210512000000.html",
    "revision": "7329ae264c0a313b33f9e99db57ff368"
  },
  {
    "url": "diary/20210513000000.html",
    "revision": "4d9e8f71c4d1e1e1e95ddead835f290f"
  },
  {
    "url": "diary/20210514000000.html",
    "revision": "489a3cbf1befc3f54793ada6fe305be0"
  },
  {
    "url": "diary/20210515000000.html",
    "revision": "42c65a8ef9823fe95167f796c5137a11"
  },
  {
    "url": "diary/20210518000000.html",
    "revision": "e4153d654a83e58628b3a4c41922b2c4"
  },
  {
    "url": "diary/20210519000000.html",
    "revision": "6354af05b89ea9e5c6b923e4bb4656f4"
  },
  {
    "url": "diary/20210520000000.html",
    "revision": "d608649549b25886d6b0f71a5229efa6"
  },
  {
    "url": "diary/20210521000000.html",
    "revision": "7b8b664959779482942580f5773fa787"
  },
  {
    "url": "diary/20210523000000.html",
    "revision": "d50de25889c15a79a2f77ba94aecfe36"
  },
  {
    "url": "diary/20210524000000.html",
    "revision": "e15ed85e48fcdcc28cd9025fff2ced45"
  },
  {
    "url": "diary/20210531000000.html",
    "revision": "9e6b555997787480c8fc98b9d3ee4249"
  },
  {
    "url": "diary/20210604000000.html",
    "revision": "b77d502a0660c1af3a5dd9518537be4f"
  },
  {
    "url": "diary/20210609000000.html",
    "revision": "1b3df1e43d9df3bfd95a0a96078e8344"
  },
  {
    "url": "diary/20210628000000.html",
    "revision": "4004e0359f8d90ee04ae7bdcd35d8f86"
  },
  {
    "url": "diary/20210717000000.html",
    "revision": "25fa728c2fdc0aeb62184c3022b6062c"
  },
  {
    "url": "diary/20210721000000.html",
    "revision": "63bb4e4f6a8ca107fac1b5c9a08bc1ea"
  },
  {
    "url": "diary/20210721161650.html",
    "revision": "e04ca2eeaf28eb503ad56005e3640877"
  },
  {
    "url": "diary/20210722000000.html",
    "revision": "252f8eee9d9e3fe6370f9a509793290d"
  },
  {
    "url": "diary/20210722122356.html",
    "revision": "63a3201d91b0f75060d2a31b1981f584"
  },
  {
    "url": "diary/20210722124216.html",
    "revision": "f2b39a275550c1b207e2dd49af947c3f"
  },
  {
    "url": "diary/20210723131524.html",
    "revision": "16567084ea3e3fbcaff6721362e4b3c9"
  },
  {
    "url": "diary/20210724000000.html",
    "revision": "3463b55bd528318059585d2bf93df46a"
  },
  {
    "url": "diary/20210725000000.html",
    "revision": "643c8a7df64eeb659e039b6412b879bc"
  },
  {
    "url": "diary/20210727182032.html",
    "revision": "4dcb895359ffac640fd5737217eb272d"
  },
  {
    "url": "diary/20210801000000.html",
    "revision": "02f074eb3f63a9ea03e4f0bb0ea34bd2"
  },
  {
    "url": "diary/20210803000000.html",
    "revision": "90239ce0f88757a4dd0a45d020610922"
  },
  {
    "url": "diary/20210805130603.html",
    "revision": "da202b18596d0646eac4fbb7cccb4f09"
  },
  {
    "url": "diary/20210805163211.html",
    "revision": "635e746bbceb7fde87c30ff661971c22"
  },
  {
    "url": "diary/20210805172839.html",
    "revision": "a038348f71f76fcf5f606d8b626ed06b"
  },
  {
    "url": "diary/20210805181213.html",
    "revision": "aecf7734315ea3064c92cd97d7b32d8a"
  },
  {
    "url": "diary/20210807000000.html",
    "revision": "9be4390fe33dc41ce10a756791390e64"
  },
  {
    "url": "diary/20210807175337.html",
    "revision": "4410bc099fe04c2fe32e31c9667a0c70"
  },
  {
    "url": "diary/20210807215030.html",
    "revision": "a240986faf0ab4d8659c081be1fc52f0"
  },
  {
    "url": "diary/20210807222026.html",
    "revision": "3d065374ce08027ae3aac6a2174e8215"
  },
  {
    "url": "diary/20210808123419.html",
    "revision": "c4692e2f80f2995a3f82675496871bc9"
  },
  {
    "url": "diary/20210811000000.html",
    "revision": "6a671ef9718451af6f251adb030e897a"
  },
  {
    "url": "diary/20210811175819.html",
    "revision": "337a99512a9eeeb841bc5e3035089dfd"
  },
  {
    "url": "diary/20210812000000.html",
    "revision": "41a6bac9ddada024d1b45fb76e240663"
  },
  {
    "url": "diary/20220218000000.html",
    "revision": "861d6f2f672a75a4e461284be6c29396"
  },
  {
    "url": "diary/20220218135219.html",
    "revision": "6d6310eca5d364a2b98d8a331c619736"
  },
  {
    "url": "diary/20220218143454.html",
    "revision": "cb840cae77f3f64b59034b203c042db0"
  },
  {
    "url": "diary/20220218144829.html",
    "revision": "a0303cca3df23e12eb63896f0b40f114"
  },
  {
    "url": "diary/20220218153217.html",
    "revision": "029d54f3951d69136ac29eec1361ffd7"
  },
  {
    "url": "diary/20220218153334.html",
    "revision": "8edcb85707aa7d4eec9718e92c6ad61a"
  },
  {
    "url": "diary/20220218221737.html",
    "revision": "52435b68027b000882957f9bd1c51b0d"
  },
  {
    "url": "diary/20220219000000.html",
    "revision": "ea301d363a010b33d311db9899c2298d"
  },
  {
    "url": "diary/20220219115441.html",
    "revision": "cca044c4d15204b943ce977263d56720"
  },
  {
    "url": "diary/20220220150004.html",
    "revision": "6091627d2a757bfe48313f2ad578da98"
  },
  {
    "url": "diary/20220220235250.html",
    "revision": "b0d5bcbcccdea33ad375071256638dab"
  },
  {
    "url": "diary/20220221000030.html",
    "revision": "3eaafe7dca1462861ad520d224c7fcde"
  },
  {
    "url": "diary/20220221110932.html",
    "revision": "db1bea61bc0d96d108ec37dde10d718c"
  },
  {
    "url": "diary/20220222000000.html",
    "revision": "bf380a8d74ec69442b515efa75d4bcb7"
  },
  {
    "url": "diary/20220222143459.html",
    "revision": "f18eb66496e1d14b7f09e1a2ea84b599"
  },
  {
    "url": "diary/20220223181058.html",
    "revision": "93ede3f909836daf0914ba894a9d54ae"
  },
  {
    "url": "diary/20220223195033.html",
    "revision": "64ead37df383517528fc9a505be219f3"
  },
  {
    "url": "diary/20220224000000.html",
    "revision": "7e848fd4e86f0e40753d4acfd7c19a80"
  },
  {
    "url": "diary/20220225000000.html",
    "revision": "ffe9bb0185b055169d9883f8845afbfb"
  },
  {
    "url": "diary/20220227191319.html",
    "revision": "46f6c71a4ecd056afe0a2da32bb9042f"
  },
  {
    "url": "diary/20220227201810.html",
    "revision": "ad6f5ebf479e3bc2096196221dac386b"
  },
  {
    "url": "diary/20220228165307.html",
    "revision": "d0d67d3d3dae788509388a5885834b10"
  },
  {
    "url": "diary/20220305135058.html",
    "revision": "cfe9492fa41b02445d67244ed2fb83c9"
  },
  {
    "url": "diary/20220312145553.html",
    "revision": "6fc7109b3c85146f73d6d0d29d264da2"
  },
  {
    "url": "diary/20220314121500.html",
    "revision": "3b89f1c4448065fe005e666d1d82ef96"
  },
  {
    "url": "diary/20220315000000.html",
    "revision": "fcaa392c45a0352378b56ca44f66c33f"
  },
  {
    "url": "diary/20220318131950.html",
    "revision": "6a4743aa96ee561929a60b472c6d1bf3"
  },
  {
    "url": "diary/20220324015620.html",
    "revision": "b3f4b96b2b543aaf9ba053a3dc058cfd"
  },
  {
    "url": "diary/20220325183116.html",
    "revision": "6dbf3f0af3e73666346a94340285e8d8"
  },
  {
    "url": "diary/20220326204221.html",
    "revision": "f63de977d08c35422bc2b2d2caf4c468"
  },
  {
    "url": "diary/20220327095515.html",
    "revision": "e4661629f4592d39983008f6c297d33e"
  },
  {
    "url": "diary/20220328191744.html",
    "revision": "ccd44f78cf5cb39d3f95e85bb35a6975"
  },
  {
    "url": "diary/20220329160801.html",
    "revision": "f73fbd214e63bea1ab822249cbda266d"
  },
  {
    "url": "diary/20220330134503.html",
    "revision": "4bb29ac2b3e2c7df4222f9e47d85b47e"
  },
  {
    "url": "diary/20220402020904.html",
    "revision": "42c5c027c67a48262334c8d04127eaf6"
  },
  {
    "url": "diary/20220403134818.html",
    "revision": "e5aed96e825750dc8a730886d9b35888"
  },
  {
    "url": "diary/20220403144915.html",
    "revision": "7a6a21a7a0f65a801e283b383e28272c"
  },
  {
    "url": "diary/20220404014141.html",
    "revision": "8760a01cd8f5c092c05f86a27c0a8707"
  },
  {
    "url": "diary/20220404033714.html",
    "revision": "2c578184bef6bf439bf0b434be9da174"
  },
  {
    "url": "diary/20220405142134.html",
    "revision": "7b6f3d11f98c577667b8277db0081294"
  },
  {
    "url": "diary/20220406221538.html",
    "revision": "12436f140133a1ccb6c56342d5d04d3c"
  },
  {
    "url": "diary/20220409113449.html",
    "revision": "05f89daa9bdd7e1a8e9b71082eedcfca"
  },
  {
    "url": "diary/20220409143624.html",
    "revision": "26e77c9814b8740c1f6263a7ae5e81b9"
  },
  {
    "url": "diary/20220409153058.html",
    "revision": "852dc4dd55ffc768e71d0a1b450ca9cd"
  },
  {
    "url": "diary/20220409200156.html",
    "revision": "9d7e00c6844c7df5f6b0bf80b9a197f2"
  },
  {
    "url": "diary/20220409205430.html",
    "revision": "839be9e798257c08b726c321e2e1d9fd"
  },
  {
    "url": "diary/20220410140637.html",
    "revision": "1139715d5033168e39d5cc7c8b398deb"
  },
  {
    "url": "diary/20220410175542.html",
    "revision": "4710b3ad5940a6c1efca0e7d79bc2de1"
  },
  {
    "url": "diary/20220413153303.html",
    "revision": "4c68b23c2def314d688c40fd9eafa815"
  },
  {
    "url": "diary/20220413204410.html",
    "revision": "8cb07973abcfaa8c91f107038e50729f"
  },
  {
    "url": "diary/20220415074137.html",
    "revision": "e6462c610bfbc196b09f466a947bafb1"
  },
  {
    "url": "diary/20220415221726.html",
    "revision": "71cd4b7a74988b1c7f33c1ba7ee152b2"
  },
  {
    "url": "diary/20220416121303.html",
    "revision": "6f75a69dd667b9ac89df6994f4c9a02d"
  },
  {
    "url": "diary/20220418010759.html",
    "revision": "774d7f0a3c7254a869253015374a3bfd"
  },
  {
    "url": "diary/20220418101948.html",
    "revision": "f2a7ea5826ccfe61624c0ed5a141385f"
  },
  {
    "url": "diary/20220418120943.html",
    "revision": "dea40ad3b2b438ee21284f88f741ec35"
  },
  {
    "url": "diary/20220418143642.html",
    "revision": "4a9a0af9993b9a0f5041898bd0a9b18a"
  },
  {
    "url": "diary/20220418145530.html",
    "revision": "fe1ff52a3bc1dcc3e316582fe8bce53d"
  },
  {
    "url": "diary/20220418152426.html",
    "revision": "cc9e6cd105bc8c6dcfcddf8ef7736274"
  },
  {
    "url": "diary/20220420013054.html",
    "revision": "8727249e80d0e7a0f4684a59a345ff78"
  },
  {
    "url": "diary/20220420021816.html",
    "revision": "ad671a7fbfb9f8cd0119f4ce642b9d67"
  },
  {
    "url": "diary/20220420142324.html",
    "revision": "bac4e7489cb5e5bfa19ba1d8505a918a"
  },
  {
    "url": "diary/20220420143018.html",
    "revision": "e24014ce63c019dbeffbd3fe72440a0b"
  },
  {
    "url": "diary/20220421111606.html",
    "revision": "0f6ef1983068d1b2f2fb605ee1600e3d"
  },
  {
    "url": "diary/20220421144504.html",
    "revision": "14ac2e9c5635cae120c294546bdc5957"
  },
  {
    "url": "diary/20220423221819.html",
    "revision": "d1bfeb9ef87b182edafdaf566805f209"
  },
  {
    "url": "diary/20220424104506.html",
    "revision": "02125a7f2c4902ba026aa06a827b7353"
  },
  {
    "url": "diary/20220425003534.html",
    "revision": "99d1770b3e5c30c37a3111b6dce141a7"
  },
  {
    "url": "diary/20220425003900.html",
    "revision": "5dbd877b7a7d13cf1848c364062d7d2f"
  },
  {
    "url": "diary/20220428220724.html",
    "revision": "a0a64b4b4ab025a6af778356edb8d8d9"
  },
  {
    "url": "diary/20220429140409.html",
    "revision": "90f6e340334cea54864a2ab90c048069"
  },
  {
    "url": "diary/20220430005042.html",
    "revision": "772a29a0a2e7194a2fdf2d08ac8a24a8"
  },
  {
    "url": "diary/20220430174446.html",
    "revision": "1b5731c8875d7939e494b26d2ec5c451"
  },
  {
    "url": "diary/20220501020004.html",
    "revision": "057203710618358c81e28f23438282db"
  },
  {
    "url": "diary/20220501152312.html",
    "revision": "cad83836f9301e04d2d83a5f9251743c"
  },
  {
    "url": "diary/20220502025207.html",
    "revision": "7cd63432700331841f585495dc6fe61c"
  },
  {
    "url": "diary/20220503131246.html",
    "revision": "1fb610f1eadabf550573cbbbe64754bd"
  },
  {
    "url": "diary/20220507143308.html",
    "revision": "f30c74fcfd1c383905e9655f14f62aab"
  },
  {
    "url": "diary/20220510174737.html",
    "revision": "aef1735402e6a222b2ee5def573b1676"
  },
  {
    "url": "diary/20220512110013.html",
    "revision": "0b21627d725a1a856ec866fed906be8b"
  },
  {
    "url": "diary/20220524050528.html",
    "revision": "83d5390e5eca81b3c8ef8f80025ce0ef"
  },
  {
    "url": "diary/20220602024150.html",
    "revision": "ff5ee11844a7227b660c372494918e5c"
  },
  {
    "url": "diary/20220605171426.html",
    "revision": "9abcf770189c5b7610d07e9249a21106"
  },
  {
    "url": "diary/20220606191857.html",
    "revision": "aa6bd77602cd5e0550e834a726ae2c6a"
  },
  {
    "url": "diary/20220606200936.html",
    "revision": "66d2c5511dc283a110021e50102e5f18"
  },
  {
    "url": "diary/20220606222359.html",
    "revision": "71478e76feaa937a18a9f7002b97f9c6"
  },
  {
    "url": "diary/20220607022658.html",
    "revision": "4b00b4d6abaf95be340acefdf940d60a"
  },
  {
    "url": "diary/20220607030217.html",
    "revision": "aa563bb3c3a0881d99741f9700c37cd5"
  },
  {
    "url": "diary/20220607052323.html",
    "revision": "84f1983fae86186689c91c0a9b5850ff"
  },
  {
    "url": "diary/20220607060054.html",
    "revision": "c2144a875ea04922a63b1cd657663276"
  },
  {
    "url": "diary/20220607060831.html",
    "revision": "ff3492a2282a25752a74f262da56e7a1"
  },
  {
    "url": "diary/20220608112545.html",
    "revision": "ebfd572017a74443d95e303ee958fabe"
  },
  {
    "url": "diary/20220608201506.html",
    "revision": "2573e1f75ee1c8ba3f35730236570b37"
  },
  {
    "url": "diary/20220608212800.html",
    "revision": "4539b97b68b23ffa1bac1a5502d6050c"
  },
  {
    "url": "diary/20220609063943.html",
    "revision": "4c0c2d683497316215e69b53c031adb9"
  },
  {
    "url": "diary/20220609070011.html",
    "revision": "ff363d686691f526e2965057279a5139"
  },
  {
    "url": "diary/20220610142532.html",
    "revision": "ead215ea426d85c5a00425933be976a1"
  },
  {
    "url": "diary/20220611005543.html",
    "revision": "ddabd5ad097133df18f1de60918f98ed"
  },
  {
    "url": "diary/20220611101107.html",
    "revision": "024b72af8f6b37e6aa14fdecef764e8c"
  },
  {
    "url": "diary/20220611210753.html",
    "revision": "e3676a681b2e92deff8659d1b1f039bd"
  },
  {
    "url": "diary/20220611232150.html",
    "revision": "18954de69578ed1f480c36386635c5bc"
  },
  {
    "url": "diary/20220612010813.html",
    "revision": "63db4db0fc320fd66e630ad55775fb69"
  },
  {
    "url": "diary/20220612124000.html",
    "revision": "b035aaa7195563018e78da066a8d4e8a"
  },
  {
    "url": "index.html",
    "revision": "600fa681e0742a030e5cf89625b1f738"
  },
  {
    "url": "list/20220507141201.html",
    "revision": "fad93702626206779f6e04af22d03348"
  },
  {
    "url": "list/20220608112545.html",
    "revision": "8216665bf4058474aa042abae5712d49"
  },
  {
    "url": "list/20220609150039.html",
    "revision": "e82bd758457e13520079d8aa4525b26e"
  },
  {
    "url": "post/handbook.html",
    "revision": "af6f7b9fe1fc25973629679c548e9f9c"
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
