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
    "revision": "95b0867b1e95b684fcc4b437a53658e5"
  },
  {
    "url": "admin.html",
    "revision": "6a361946ade3c0028b841ff571db6e11"
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
    "url": "assets/js/140.99e898df.js",
    "revision": "d6ad94ad818d1c02ff83c676ebaad82e"
  },
  {
    "url": "assets/js/141.3a9587d7.js",
    "revision": "ea14f09cf9f41833b4e123bf5aa570a5"
  },
  {
    "url": "assets/js/142.9f395686.js",
    "revision": "e37ca62b931403a023e57203147df1a0"
  },
  {
    "url": "assets/js/143.e2b5c2dd.js",
    "revision": "eddd39cc414c485fb3183a2ad96c7530"
  },
  {
    "url": "assets/js/144.19d6d001.js",
    "revision": "1eb0ee80c20b494ebe65f16a36a92de9"
  },
  {
    "url": "assets/js/145.e05c9f7b.js",
    "revision": "0981bcbca97ef98233d0ad9137c5adf2"
  },
  {
    "url": "assets/js/146.0138d70a.js",
    "revision": "82817d03d149f4b5c5e86b0a1e82b9d1"
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
    "url": "assets/js/149.4c87ae39.js",
    "revision": "687b555da380e89a009952e0a5ace190"
  },
  {
    "url": "assets/js/15.c0ac963d.js",
    "revision": "cc4a5c8210dea1b00e6307efeb6ee241"
  },
  {
    "url": "assets/js/150.fe038d41.js",
    "revision": "cac4730b952771eeff3f304e851dac13"
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
    "url": "assets/js/175.f7c2ec6d.js",
    "revision": "be9b02166d2ef00d558bf0b7def1c157"
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
    "url": "assets/js/18.b4d041d9.js",
    "revision": "3759786a521e1430e894a54651f56e51"
  },
  {
    "url": "assets/js/19.37728e82.js",
    "revision": "3eb4fd6c24858124dcd3627a1141bfd3"
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
    "url": "assets/js/9.89ab775f.js",
    "revision": "9f2c016304732f2e8609bbfb784b59e6"
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
    "url": "assets/js/app.b217fecf.js",
    "revision": "50adef9eb87d5f7fc8a6a47fbabfe43b"
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
    "revision": "492fe0ff31515239c5b66c87b3ae32b5"
  },
  {
    "url": "diary/20200701000000.html",
    "revision": "7743c8d1a7392550ce9bf30dc3827454"
  },
  {
    "url": "diary/20210421000000.html",
    "revision": "e1c5195dccfc3744ee0bae30a0b5db8d"
  },
  {
    "url": "diary/20210422000000.html",
    "revision": "329be8e7900919b5836c4eb618f1c17d"
  },
  {
    "url": "diary/20210423000000.html",
    "revision": "74aec5609f4f5d944889d409b203ce70"
  },
  {
    "url": "diary/20210424000000.html",
    "revision": "0ee3e76afbcbf640ca2a296e4f0d6a87"
  },
  {
    "url": "diary/20210425000000.html",
    "revision": "0c3bd298070e605fd4ebdb1ec72985cc"
  },
  {
    "url": "diary/20210427000000.html",
    "revision": "30e8981e2b9a1db5a3584aed9b247798"
  },
  {
    "url": "diary/20210428000000.html",
    "revision": "daf9429c4f970e0924840be0a5e152a9"
  },
  {
    "url": "diary/20210429000000.html",
    "revision": "1a358f90f667d93496df747b6430bfa1"
  },
  {
    "url": "diary/20210430000000.html",
    "revision": "c2fb4dd2f3ba665d6b0d56c5ecf425d5"
  },
  {
    "url": "diary/20210503000000.html",
    "revision": "f70950a89b7aa22b1b97d3dd6079280e"
  },
  {
    "url": "diary/20210506000000.html",
    "revision": "0fed677f2d535b0e337cfcc32c93c90d"
  },
  {
    "url": "diary/20210511000000.html",
    "revision": "72751449ab4c3a3340ccbfa614158266"
  },
  {
    "url": "diary/20210512000000.html",
    "revision": "c92339d02ccbc916453631ec1e1bd0d3"
  },
  {
    "url": "diary/20210513000000.html",
    "revision": "3b5500ec92376a06980d32e8f84f2806"
  },
  {
    "url": "diary/20210514000000.html",
    "revision": "8efce6101e85a6c0fab11984cb8c6e71"
  },
  {
    "url": "diary/20210515000000.html",
    "revision": "030f172c4d43a49075eb198e4722050d"
  },
  {
    "url": "diary/20210518000000.html",
    "revision": "eac30fe382d92b19a6e8cf39c2f32be8"
  },
  {
    "url": "diary/20210519000000.html",
    "revision": "bd7ad5dd5f1a9139ddbaa138cef8d0ef"
  },
  {
    "url": "diary/20210520000000.html",
    "revision": "c66bb84c60b7727f2c5c7975a584598b"
  },
  {
    "url": "diary/20210521000000.html",
    "revision": "2f1fdf74e116678a736f5eb7e0acba1e"
  },
  {
    "url": "diary/20210523000000.html",
    "revision": "88eb12b7c5cb75365dbaa0f846ac9ef6"
  },
  {
    "url": "diary/20210524000000.html",
    "revision": "0bd66607a76ee8f8071c08a02e288c74"
  },
  {
    "url": "diary/20210531000000.html",
    "revision": "251ad4ddcadf9de7df857aef0598e4f8"
  },
  {
    "url": "diary/20210604000000.html",
    "revision": "6de78d5e30d4ac20c83fde8df3bc48fc"
  },
  {
    "url": "diary/20210609000000.html",
    "revision": "83c62a683f8bad28f1db115d0ae7341d"
  },
  {
    "url": "diary/20210628000000.html",
    "revision": "cb874a59965ea21406afedea1b3e0982"
  },
  {
    "url": "diary/20210717000000.html",
    "revision": "fb331601518c94c6b6c5a6c5b0e74906"
  },
  {
    "url": "diary/20210721000000.html",
    "revision": "f1a4963313b04fca9699295f8d2d4159"
  },
  {
    "url": "diary/20210721161650.html",
    "revision": "0e8a0747391342a14968a0545de61305"
  },
  {
    "url": "diary/20210722000000.html",
    "revision": "450be5fdf664ed35fc4cc4d211ff6c3a"
  },
  {
    "url": "diary/20210722122356.html",
    "revision": "aa5b6c584d46a887232511d686705002"
  },
  {
    "url": "diary/20210722124216.html",
    "revision": "c468d0ff7c1894b90c886ae89b1b35d9"
  },
  {
    "url": "diary/20210723131524.html",
    "revision": "43800de408aa47334be9ff7a5a6a2c6d"
  },
  {
    "url": "diary/20210724000000.html",
    "revision": "45fff1b7a94d347f15a4e73a4684ce25"
  },
  {
    "url": "diary/20210725000000.html",
    "revision": "aad2ce0158e2007a29e6b2394ed3d039"
  },
  {
    "url": "diary/20210727182032.html",
    "revision": "f162782be6519a8cd888b083a87baa10"
  },
  {
    "url": "diary/20210801000000.html",
    "revision": "44e013c31336d1f5b55eee1aa9d7804e"
  },
  {
    "url": "diary/20210803000000.html",
    "revision": "fd2dd805f31b5b9717ed7c2f3afcd65c"
  },
  {
    "url": "diary/20210805130603.html",
    "revision": "fdb58ba29c6950041c08f5535ff2cfc9"
  },
  {
    "url": "diary/20210805163211.html",
    "revision": "c56d925d2376a6a9461e29eb22f9fce7"
  },
  {
    "url": "diary/20210805172839.html",
    "revision": "273e113d1207ec3986db6e512620f65b"
  },
  {
    "url": "diary/20210805181213.html",
    "revision": "d4c910c852607cfeea8d69caae2a2a92"
  },
  {
    "url": "diary/20210807000000.html",
    "revision": "d0aa3c6df06d4a4e6f1d0430d1b9cfa7"
  },
  {
    "url": "diary/20210807175337.html",
    "revision": "5fb83100c6af859640a6b1f75f46d9be"
  },
  {
    "url": "diary/20210807215030.html",
    "revision": "bfa3e68a84baf06b2c9b6e0d3c723447"
  },
  {
    "url": "diary/20210807222026.html",
    "revision": "daadb55d8ad2c105f173ce201fcec7ab"
  },
  {
    "url": "diary/20210808123419.html",
    "revision": "fef009943afebc0be3d2e52bd32e244b"
  },
  {
    "url": "diary/20210811000000.html",
    "revision": "023d4ade2c4cff910b9f7c4bd59271b5"
  },
  {
    "url": "diary/20210811175819.html",
    "revision": "5a1bf4a7eb6c6695f85c5a3e4c388b06"
  },
  {
    "url": "diary/20210812000000.html",
    "revision": "55b7e961e194e40a8c9193d21a965c3e"
  },
  {
    "url": "diary/20220218000000.html",
    "revision": "14e142fa767cf1708bd307a6a9555f71"
  },
  {
    "url": "diary/20220218135219.html",
    "revision": "020468b4cfe83dba6c29a5a62ef45211"
  },
  {
    "url": "diary/20220218143454.html",
    "revision": "6ccce00d363bb75fa2086dca52e3bd97"
  },
  {
    "url": "diary/20220218144829.html",
    "revision": "556763d2c4dd8809f052d2a05fd08045"
  },
  {
    "url": "diary/20220218153217.html",
    "revision": "1328e16f69afd6e0018d70ae7b86a494"
  },
  {
    "url": "diary/20220218153334.html",
    "revision": "45356b7e033706702c88276fb674183a"
  },
  {
    "url": "diary/20220218221737.html",
    "revision": "3a7f44ef530478462d7dee90c0af8345"
  },
  {
    "url": "diary/20220219000000.html",
    "revision": "ecf5b510fc26065590b168392bfc63b1"
  },
  {
    "url": "diary/20220219115441.html",
    "revision": "0afb010bff82ea8d41ee7cc9444275c9"
  },
  {
    "url": "diary/20220220150004.html",
    "revision": "f7dd7a27f97ace63c38be2fb78b2024d"
  },
  {
    "url": "diary/20220220235250.html",
    "revision": "04fbca02bfd311f7e70f56e45e0644fd"
  },
  {
    "url": "diary/20220221000030.html",
    "revision": "19822baa4ecf0257363da8f1528f8038"
  },
  {
    "url": "diary/20220221110932.html",
    "revision": "d9b63d0b9529ebae6bdc552a961aea41"
  },
  {
    "url": "diary/20220222000000.html",
    "revision": "4a2bda03c7942428a9ef3568b2bbb8ac"
  },
  {
    "url": "diary/20220222143459.html",
    "revision": "efdacca1bc7628b385543abb39a393a6"
  },
  {
    "url": "diary/20220223181058.html",
    "revision": "1b52ad83667429abc388456bff35caf8"
  },
  {
    "url": "diary/20220223195033.html",
    "revision": "0c6e5ad5e468c40ca8880b60ba61e1da"
  },
  {
    "url": "diary/20220224000000.html",
    "revision": "e78f00922f67b4c4caa2aa3b40dbeb6d"
  },
  {
    "url": "diary/20220225000000.html",
    "revision": "ce52f289ddf51a98f90b5fc99b03d9c6"
  },
  {
    "url": "diary/20220227191319.html",
    "revision": "9abd3289f7fa1a587724a3895f27be28"
  },
  {
    "url": "diary/20220227201810.html",
    "revision": "9e6b30395b10b316a2a84d279e15360d"
  },
  {
    "url": "diary/20220228165307.html",
    "revision": "9c4f55f084d0a0d3936f8d05bdd2492e"
  },
  {
    "url": "diary/20220305135058.html",
    "revision": "0af63aae750bcb56a4229f1ace573804"
  },
  {
    "url": "diary/20220312145553.html",
    "revision": "95725051070535322dc96d2f3c31a9c4"
  },
  {
    "url": "diary/20220314121500.html",
    "revision": "196c448ea2095cbfa9084685d487a30a"
  },
  {
    "url": "diary/20220315000000.html",
    "revision": "a33ab0e5747568515f72f8224b3c43c2"
  },
  {
    "url": "diary/20220318131950.html",
    "revision": "60ed3e8e4c6575e3f879d90fd67bcf28"
  },
  {
    "url": "diary/20220324015620.html",
    "revision": "126276349bb5c57b6e45d57f6dfe5715"
  },
  {
    "url": "diary/20220325183116.html",
    "revision": "4699b3e048a67e0533e1c8615909933c"
  },
  {
    "url": "diary/20220326204221.html",
    "revision": "8faa7aaca4a6ad044191ffe7210d3640"
  },
  {
    "url": "diary/20220327095515.html",
    "revision": "a6a9568a2eb7fd9b8f0a8ec56a64869f"
  },
  {
    "url": "diary/20220328191744.html",
    "revision": "a9e874fdd3916420c1fbbc741bc1bce5"
  },
  {
    "url": "diary/20220329160801.html",
    "revision": "3c9fe44b5e9c9bf8a0c53f7d740cb55d"
  },
  {
    "url": "diary/20220330134503.html",
    "revision": "d8a73f3136f0bb436f8cbdc5daa7be17"
  },
  {
    "url": "diary/20220402020904.html",
    "revision": "4a6da54b26723545c5c39972b26428b8"
  },
  {
    "url": "diary/20220403134818.html",
    "revision": "54fbca60104c3e05ee28d522fdf2b5d3"
  },
  {
    "url": "diary/20220403144915.html",
    "revision": "c20c8afbee22a7820374b670133ae636"
  },
  {
    "url": "diary/20220404014141.html",
    "revision": "902840da5e1e9ad693e8d9a8cbb1c414"
  },
  {
    "url": "diary/20220404033714.html",
    "revision": "18a71243492a5846f09ebf4b0b1cc165"
  },
  {
    "url": "diary/20220405142134.html",
    "revision": "c75cdc4af5591a2dc116cea87a5b55df"
  },
  {
    "url": "diary/20220406221538.html",
    "revision": "0ebf75dc64136cca18d1460e5c38ec4d"
  },
  {
    "url": "diary/20220409113449.html",
    "revision": "db2d3add5524c96f8444f6d5b3766cdd"
  },
  {
    "url": "diary/20220409143624.html",
    "revision": "ab6e03fd5065e6583b1e7eee43dcf62b"
  },
  {
    "url": "diary/20220409153058.html",
    "revision": "015867e83ae475727f21d3db2722590c"
  },
  {
    "url": "diary/20220409200156.html",
    "revision": "f104e433d61642847c23e15ae621d5c6"
  },
  {
    "url": "diary/20220409205430.html",
    "revision": "0451fe2f57c45f957aa5ff2da6b66804"
  },
  {
    "url": "diary/20220410140637.html",
    "revision": "874367e2bea6e154cc137368a12390a6"
  },
  {
    "url": "diary/20220410175542.html",
    "revision": "53b73d40b5a211e7675af724eb11e567"
  },
  {
    "url": "diary/20220413153303.html",
    "revision": "68d18b02feacee6f3a7ec3765c540bb0"
  },
  {
    "url": "diary/20220413204410.html",
    "revision": "dd74ca94bc68df7e385b334c0d3d00c5"
  },
  {
    "url": "diary/20220415074137.html",
    "revision": "0b53030393ecfed16cd6f60be2bf2918"
  },
  {
    "url": "diary/20220415221726.html",
    "revision": "315d7762930435d678c17bf3ed9eeae0"
  },
  {
    "url": "diary/20220416121303.html",
    "revision": "7faa7466c413d702d8132964cea1b9cb"
  },
  {
    "url": "diary/20220418010759.html",
    "revision": "546546fd0bbe1d76674ae676c19c7533"
  },
  {
    "url": "diary/20220418101948.html",
    "revision": "fb8d6c0bcba163735384c031c473fab5"
  },
  {
    "url": "diary/20220418120943.html",
    "revision": "1a3476d534f7b45d9d435d94b9926dba"
  },
  {
    "url": "diary/20220418143642.html",
    "revision": "e133ff3574c08e046e94489928af44f7"
  },
  {
    "url": "diary/20220418145530.html",
    "revision": "9452aa78395b5df3461132f1d9743f2b"
  },
  {
    "url": "diary/20220418152426.html",
    "revision": "06ac403dbbf6b55cc247c37b09573da8"
  },
  {
    "url": "diary/20220420013054.html",
    "revision": "9fc5c5ee6913cf78a33c478caa863f0a"
  },
  {
    "url": "diary/20220420021816.html",
    "revision": "80f534fac4f802df6201b31a9ab11642"
  },
  {
    "url": "diary/20220420142324.html",
    "revision": "d5ebba03c3120cde8ab68041f0dc1d84"
  },
  {
    "url": "diary/20220420143018.html",
    "revision": "23f751919102e5e3eae47c6650cf7a13"
  },
  {
    "url": "diary/20220421111606.html",
    "revision": "3fa25ec4f4e767bb7b067a54de6cef25"
  },
  {
    "url": "diary/20220421144504.html",
    "revision": "66a0fd6512adea6caab1eee7512bb82a"
  },
  {
    "url": "diary/20220423221819.html",
    "revision": "ab6b0466c3b771fa2de9b549ba0410f8"
  },
  {
    "url": "diary/20220424104506.html",
    "revision": "8897859baa873d112ef447dbbd85faa2"
  },
  {
    "url": "diary/20220425003534.html",
    "revision": "1cb2115a0e5c988c75cee07a72b59a62"
  },
  {
    "url": "diary/20220425003900.html",
    "revision": "f5dd68a52e53774b65d3171226540559"
  },
  {
    "url": "diary/20220428220724.html",
    "revision": "8cb182c70754c67a9097636444425d64"
  },
  {
    "url": "diary/20220429140409.html",
    "revision": "abc84179d1f61099d1b5ffe00a0a6c4f"
  },
  {
    "url": "diary/20220430005042.html",
    "revision": "c8908bd30d488132d67266d99e8748f5"
  },
  {
    "url": "diary/20220430174446.html",
    "revision": "4728bcc63071321d8a5c803b1bc90e0b"
  },
  {
    "url": "diary/20220501020004.html",
    "revision": "3b7bd5b8375c4277940002b8bfb90181"
  },
  {
    "url": "diary/20220501152312.html",
    "revision": "30580ac995c9057920b834ad0087564e"
  },
  {
    "url": "diary/20220502025207.html",
    "revision": "77f8e8de44126ae5c0953bb44f85724c"
  },
  {
    "url": "diary/20220503131246.html",
    "revision": "701f956b898713cf7ca337daec7b87d6"
  },
  {
    "url": "diary/20220507143308.html",
    "revision": "60ccba8902a30f363efce32571484c84"
  },
  {
    "url": "diary/20220510174737.html",
    "revision": "1358df493c3867640b7bcdd256bc4091"
  },
  {
    "url": "diary/20220512110013.html",
    "revision": "24bc68f2c762bc6bae2e1700da001543"
  },
  {
    "url": "diary/20220524050528.html",
    "revision": "efb9f71060851085e5b0226bdedd74a1"
  },
  {
    "url": "diary/20220602024150.html",
    "revision": "3f0cde8ee9c0ca8decc935568aeaab14"
  },
  {
    "url": "diary/20220605171426.html",
    "revision": "9a237cf6cc58796afcc3644bc91a06a3"
  },
  {
    "url": "diary/20220606191857.html",
    "revision": "1054f94e2bcf3036f579c9d39976b41e"
  },
  {
    "url": "diary/20220606200936.html",
    "revision": "fed74b4128b39fbede156754b63b4c7d"
  },
  {
    "url": "diary/20220606222359.html",
    "revision": "96912c711009a98de56c19fe993b38e7"
  },
  {
    "url": "diary/20220607022658.html",
    "revision": "84c57cb14a368bba0868ad3b4b037171"
  },
  {
    "url": "diary/20220607030217.html",
    "revision": "ed3d14afd7437ee38e958e5634ade3c2"
  },
  {
    "url": "diary/20220607052323.html",
    "revision": "1b25df1016dcc8c0f0ef1678226bc323"
  },
  {
    "url": "diary/20220607060054.html",
    "revision": "f55e3e147990436e3605016ea9a0f811"
  },
  {
    "url": "diary/20220607060831.html",
    "revision": "0fcda1c1425e848f1ce0e96b606e44c2"
  },
  {
    "url": "diary/20220608112545.html",
    "revision": "6c4f9f77b4c3ca0c7925541100278170"
  },
  {
    "url": "diary/20220608201506.html",
    "revision": "22b474afdd93e4ce93e003cd563850e9"
  },
  {
    "url": "diary/20220608212800.html",
    "revision": "98ed41a56f1bc07cef71b16ba46670b4"
  },
  {
    "url": "diary/20220609063943.html",
    "revision": "e6f2e56ce33d51eba98c09fdf5dc46f9"
  },
  {
    "url": "diary/20220609070011.html",
    "revision": "b2760396f3a088c6bdc8ae927c22ed67"
  },
  {
    "url": "diary/20220610142532.html",
    "revision": "3627f9237da0d90c261744b8e2ce528c"
  },
  {
    "url": "diary/20220611005543.html",
    "revision": "302610d39913a07fda2236efb3b58fe9"
  },
  {
    "url": "diary/20220611101107.html",
    "revision": "813bd5d04c655206a724e0be2568e01b"
  },
  {
    "url": "diary/20220611210753.html",
    "revision": "911ca55c1b3f188897693aba34131ed9"
  },
  {
    "url": "diary/20220611232150.html",
    "revision": "e9231c46c05cfe2096337444782c608a"
  },
  {
    "url": "diary/20220612010813.html",
    "revision": "9e0f910d9a0aa339bb84e796b9b9278c"
  },
  {
    "url": "diary/20220612124000.html",
    "revision": "3c0541641043db66e9c37c23ab2768b1"
  },
  {
    "url": "index.html",
    "revision": "f5d58e1a01748fc4cd85d07b8d4d888c"
  },
  {
    "url": "list/20220507141201.html",
    "revision": "9e662bdc24940e425d14d6b7b4867770"
  },
  {
    "url": "list/20220608112545.html",
    "revision": "3a89a262f6566337121eb56f571c87ba"
  },
  {
    "url": "list/20220609150039.html",
    "revision": "c813862712b4afc59697abed3c7e898b"
  },
  {
    "url": "post/handbook.html",
    "revision": "abb363e7b477b4e7f2d6d2cee1475dfe"
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
