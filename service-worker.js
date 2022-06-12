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
    "revision": "89c7f92b5536143231f4205c7ebb9eac"
  },
  {
    "url": "admin.html",
    "revision": "0a0c4c58a662b6a5605f830843dcbe41"
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
    "url": "assets/js/10.c5a650f6.js",
    "revision": "b853f86fe41348ade8f684a242296f87"
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
    "url": "assets/js/115.5fd88b6e.js",
    "revision": "bad5504f3df3020ff7e5e14d217960bd"
  },
  {
    "url": "assets/js/116.539e866e.js",
    "revision": "81bfd71574fb661716515e00b852fe62"
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
    "url": "assets/js/126.2e926c34.js",
    "revision": "8ca02a2e5194b1a2dac32433fd997b69"
  },
  {
    "url": "assets/js/127.4354ba73.js",
    "revision": "2a0a9bf2bdad10bd519aedccd24b4294"
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
    "url": "assets/js/136.633c443a.js",
    "revision": "c7e0b7d3e0ad0b6d2b15eabeaef330fc"
  },
  {
    "url": "assets/js/137.d7fd6a2d.js",
    "revision": "539406173e906521956b2ffcaa8d14c1"
  },
  {
    "url": "assets/js/138.0eba37f1.js",
    "revision": "aa40db768184ff023ff9c87d715b1ef4"
  },
  {
    "url": "assets/js/139.bb395358.js",
    "revision": "0764560b6758715a7907b33a17ad8cfb"
  },
  {
    "url": "assets/js/14.b548d280.js",
    "revision": "f826d4604e604a646aac5c54780d1474"
  },
  {
    "url": "assets/js/140.b0ccabb1.js",
    "revision": "c17873c648c62739a43e46ad5577a18c"
  },
  {
    "url": "assets/js/141.3a9587d7.js",
    "revision": "ea14f09cf9f41833b4e123bf5aa570a5"
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
    "url": "assets/js/144.99f04944.js",
    "revision": "13846f6fd270b046eb058935c269d5ca"
  },
  {
    "url": "assets/js/145.a1797f8b.js",
    "revision": "3db02edaeb663d0e710134698d63d0d2"
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
    "url": "assets/js/17.585238f2.js",
    "revision": "b0a7a8dafa4d82cd60b1545f49db8291"
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
    "url": "assets/js/173.c63e13b2.js",
    "revision": "e9dcb743d57f8a6a2dd9893995672d6d"
  },
  {
    "url": "assets/js/174.73debdd0.js",
    "revision": "f1b2310b531b860114276745b435ac23"
  },
  {
    "url": "assets/js/175.a099671b.js",
    "revision": "442b395930ce25f03cebe23ad3426ae5"
  },
  {
    "url": "assets/js/176.eeb41788.js",
    "revision": "5694e10c8db5c44193057ad9b8498dba"
  },
  {
    "url": "assets/js/177.281f17e4.js",
    "revision": "f9fa2e671b274fa31d5bcff43ca707cd"
  },
  {
    "url": "assets/js/178.f788da92.js",
    "revision": "bd95ae66309feca08d43799df8bfaa29"
  },
  {
    "url": "assets/js/179.404846ac.js",
    "revision": "755e0e7544323b8e97169fee12cdd010"
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
    "url": "assets/js/49.de1e8632.js",
    "revision": "eeba621f6d0713ffc48b284dac236424"
  },
  {
    "url": "assets/js/5.26833a97.js",
    "revision": "83ba4effc22404ee43644d3e858a3247"
  },
  {
    "url": "assets/js/50.4facb0e2.js",
    "revision": "0924a49badfae69b42a217fea521fc7e"
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
    "url": "assets/js/54.825ae458.js",
    "revision": "77c6da0044db0f25f006d095f9167ad8"
  },
  {
    "url": "assets/js/55.731455cf.js",
    "revision": "8077b09f9d9aa48c14cf56669a733f9d"
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
    "url": "assets/js/71.6fa9ef1a.js",
    "revision": "3fb02a1954d4d16c0ff744157592200d"
  },
  {
    "url": "assets/js/72.b2c10c21.js",
    "revision": "92df31d83ae0d31960241be554e88db4"
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
    "url": "assets/js/86.94345bda.js",
    "revision": "bc0da109a1718e1f6a086220fc0cef4d"
  },
  {
    "url": "assets/js/87.ff1f8bbe.js",
    "revision": "24a6d7acfdc0f748e71c4865952c81ca"
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
    "url": "assets/js/app.1a06ef5d.js",
    "revision": "a317c09b2c27fc31a80ced2278d70f18"
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
    "revision": "63861c5cdb4abcff2a135f999312ff96"
  },
  {
    "url": "diary/20200701000000.html",
    "revision": "9b1e8d6613b3aa2371c5c4e0763d79fc"
  },
  {
    "url": "diary/20210421000000.html",
    "revision": "6280588815edac179faa380b1f0a1d86"
  },
  {
    "url": "diary/20210422000000.html",
    "revision": "a4c7694a91b8a19af2fef3488b61610d"
  },
  {
    "url": "diary/20210423000000.html",
    "revision": "a439c6bc8a0293cc36a2735de7218702"
  },
  {
    "url": "diary/20210424000000.html",
    "revision": "c2cc2e5789f6281d55c23862781c0486"
  },
  {
    "url": "diary/20210425000000.html",
    "revision": "f17bb25c49e270455f87c736a8c5ed55"
  },
  {
    "url": "diary/20210427000000.html",
    "revision": "c9dda432c329bf4dec6c67931c062b6c"
  },
  {
    "url": "diary/20210428000000.html",
    "revision": "2d06edd4b3cd12ea989442d8bc0b4f65"
  },
  {
    "url": "diary/20210429000000.html",
    "revision": "0de1972fb2ad9d48336e25aef8f45cc0"
  },
  {
    "url": "diary/20210430000000.html",
    "revision": "36a75b82555abb8f071a76e098a46a86"
  },
  {
    "url": "diary/20210503000000.html",
    "revision": "9950af6e76ae4338e5358bb99dda3c69"
  },
  {
    "url": "diary/20210506000000.html",
    "revision": "d6d1dc7b3afcd56c5a255a8eed6f50e8"
  },
  {
    "url": "diary/20210511000000.html",
    "revision": "44dfc8c2a599fcc175bb5bc08e013acc"
  },
  {
    "url": "diary/20210512000000.html",
    "revision": "d30f7ff12a12d13e475dc8745af08cad"
  },
  {
    "url": "diary/20210513000000.html",
    "revision": "7430c913ec03cf0251b6b36117d69bfe"
  },
  {
    "url": "diary/20210514000000.html",
    "revision": "1aebef628de4b8d4b8db013796378529"
  },
  {
    "url": "diary/20210515000000.html",
    "revision": "8da879f8a0549cf315676fd2d654e06c"
  },
  {
    "url": "diary/20210518000000.html",
    "revision": "372b380726559ddd9a24d63e4d79bbde"
  },
  {
    "url": "diary/20210519000000.html",
    "revision": "33f75e221245eeaa13233f258c6cc6a7"
  },
  {
    "url": "diary/20210520000000.html",
    "revision": "75d5137c1b323b437b0677c1b024b37b"
  },
  {
    "url": "diary/20210521000000.html",
    "revision": "1542d60f9da2671b39470897687784b2"
  },
  {
    "url": "diary/20210523000000.html",
    "revision": "d7af6afeda9991098bb250c0b7a20fee"
  },
  {
    "url": "diary/20210524000000.html",
    "revision": "f76075a8d96f5738cbe3ce874dc3833a"
  },
  {
    "url": "diary/20210531000000.html",
    "revision": "76c79a3152d9408cfb059d252657929f"
  },
  {
    "url": "diary/20210604000000.html",
    "revision": "64cc10de1b8c83c592e553800b19bd53"
  },
  {
    "url": "diary/20210609000000.html",
    "revision": "2dae059b7e5e274d891b496bedb3ebe0"
  },
  {
    "url": "diary/20210628000000.html",
    "revision": "532f2540ec42c381a37fdee24d3bb70c"
  },
  {
    "url": "diary/20210717000000.html",
    "revision": "e982c78dc3fba51c8540be30a888a09f"
  },
  {
    "url": "diary/20210721000000.html",
    "revision": "40a69307e0867fc6a79715d1155a32c5"
  },
  {
    "url": "diary/20210721161650.html",
    "revision": "56080517b73b7f641121203e2723a6ce"
  },
  {
    "url": "diary/20210722000000.html",
    "revision": "d58ed1d8c83daea242b24ab61c06a045"
  },
  {
    "url": "diary/20210722122356.html",
    "revision": "c0f8ea19673a1e1bb5d1cef892202b8a"
  },
  {
    "url": "diary/20210722124216.html",
    "revision": "3715c903cef54a60fbdc1513a7b5ec9a"
  },
  {
    "url": "diary/20210723131524.html",
    "revision": "148e8d22f5dc0cfee8fb6d59d3e33b5c"
  },
  {
    "url": "diary/20210724000000.html",
    "revision": "c446185dd47b3f1ca711ee741ab41b58"
  },
  {
    "url": "diary/20210725000000.html",
    "revision": "b9e622b411740367a5b03d4deb60d727"
  },
  {
    "url": "diary/20210727182032.html",
    "revision": "d3024f70c4a6f2607cb80ab1491eaa95"
  },
  {
    "url": "diary/20210801000000.html",
    "revision": "f03e87d6a90e2bfb73bd8de9498c401f"
  },
  {
    "url": "diary/20210803000000.html",
    "revision": "741918e05f4804a462bf5e6d996985e4"
  },
  {
    "url": "diary/20210805130603.html",
    "revision": "9b1b26f4786b8dfd78c59afa67eb5c6b"
  },
  {
    "url": "diary/20210805163211.html",
    "revision": "803d82d56f3192dbcb8e6698b5f78a08"
  },
  {
    "url": "diary/20210805172839.html",
    "revision": "02a384ce763ab2728345d04e67ba517d"
  },
  {
    "url": "diary/20210805181213.html",
    "revision": "b5aa8527c427bd32a32192107d09142a"
  },
  {
    "url": "diary/20210807000000.html",
    "revision": "3e39ecc68ec5d4e2319462422262ccad"
  },
  {
    "url": "diary/20210807175337.html",
    "revision": "7b8571e7ef1e0cd712bc8a696d8826c5"
  },
  {
    "url": "diary/20210807215030.html",
    "revision": "b3c8dde24b117784c41baf6800d86d11"
  },
  {
    "url": "diary/20210807222026.html",
    "revision": "21d62af90e5753d279f865955550a30a"
  },
  {
    "url": "diary/20210808123419.html",
    "revision": "bdfcca8405aab3e8cbe10d66054ac755"
  },
  {
    "url": "diary/20210811000000.html",
    "revision": "c3d7d00270a037756d4fdd874958c38c"
  },
  {
    "url": "diary/20210811175819.html",
    "revision": "a3b457963172d1c517da97aae8f75641"
  },
  {
    "url": "diary/20210812000000.html",
    "revision": "6c79bf2022633072296f144585932167"
  },
  {
    "url": "diary/20220218000000.html",
    "revision": "a3203d2551df0cc62e2c3e653e7939ad"
  },
  {
    "url": "diary/20220218135219.html",
    "revision": "94a9a888136551bdd9d1f396c93eae0f"
  },
  {
    "url": "diary/20220218143454.html",
    "revision": "63401f26bf241c989c5202c80a64e6d7"
  },
  {
    "url": "diary/20220218144829.html",
    "revision": "44eb0bec9be556edeb0a697db0ea1c4a"
  },
  {
    "url": "diary/20220218153217.html",
    "revision": "022abf0ef11b7551fef0014634204cad"
  },
  {
    "url": "diary/20220218153334.html",
    "revision": "c3b1bcd8fd3f628c11665b3af999580c"
  },
  {
    "url": "diary/20220218221737.html",
    "revision": "e6bd5e146257418a7f8ccb1af8f9b941"
  },
  {
    "url": "diary/20220219000000.html",
    "revision": "00f9cb7fe3f2a245843616e306b02a14"
  },
  {
    "url": "diary/20220219115441.html",
    "revision": "67fd522712ee348dcc3f8d9f1a29d6cd"
  },
  {
    "url": "diary/20220220150004.html",
    "revision": "b903f1fc1cf6e594d21b1de30e4a6b89"
  },
  {
    "url": "diary/20220220235250.html",
    "revision": "bdfa8ed45f8cdfbfb9f7e24afdd0286b"
  },
  {
    "url": "diary/20220221000030.html",
    "revision": "a550cc7651e43e4b884e593eb5356c75"
  },
  {
    "url": "diary/20220221110932.html",
    "revision": "92d1e79e5c906c27e173e26b8a105be7"
  },
  {
    "url": "diary/20220222000000.html",
    "revision": "27b0abb1988f7335201c76c30ce14090"
  },
  {
    "url": "diary/20220222143459.html",
    "revision": "64d96a9d0d3fa2bdb52b6f5dfb036f41"
  },
  {
    "url": "diary/20220223181058.html",
    "revision": "294bb18be2ffbca7335aabb013b9a010"
  },
  {
    "url": "diary/20220223195033.html",
    "revision": "d1f797b6f86d23acf47739ea12fd0f89"
  },
  {
    "url": "diary/20220224000000.html",
    "revision": "6dbb5b11d6a98fcf9532accec9c73dc0"
  },
  {
    "url": "diary/20220225000000.html",
    "revision": "a224df2e4d51e7b578a0b7d41d912306"
  },
  {
    "url": "diary/20220227191319.html",
    "revision": "6d17c373f17a605b945f73e40da90e36"
  },
  {
    "url": "diary/20220227201810.html",
    "revision": "cd204e77581a13490e497288d0345c72"
  },
  {
    "url": "diary/20220228165307.html",
    "revision": "14af0e4d212037ae76408025194aa423"
  },
  {
    "url": "diary/20220305135058.html",
    "revision": "9f8f033dcf8c2f281705112dd2e22342"
  },
  {
    "url": "diary/20220312145553.html",
    "revision": "71c525b8071ff65ae7ed72da12c46dbe"
  },
  {
    "url": "diary/20220314121500.html",
    "revision": "5e7eb630bcb65f5e04896a377c94fc75"
  },
  {
    "url": "diary/20220315000000.html",
    "revision": "2d87ed590d6b01f3d9e076718a5fa299"
  },
  {
    "url": "diary/20220318131950.html",
    "revision": "183a7f75d757befddc237a6cc4620cf0"
  },
  {
    "url": "diary/20220324015620.html",
    "revision": "e54bdbf426007576e6a7137705e837df"
  },
  {
    "url": "diary/20220325183116.html",
    "revision": "ef4a53228e334cb31f02aa3587533063"
  },
  {
    "url": "diary/20220326204221.html",
    "revision": "b8a3d8fe0bd6421067065d30c5c70e80"
  },
  {
    "url": "diary/20220327095515.html",
    "revision": "8099f4280ae1983cccd1d677f32a3c49"
  },
  {
    "url": "diary/20220328191744.html",
    "revision": "03f5e575b085d9d75617fe5af6f2b497"
  },
  {
    "url": "diary/20220329160801.html",
    "revision": "e76073a95153733ad4ff336dae353207"
  },
  {
    "url": "diary/20220330134503.html",
    "revision": "c9aa13296b2bcff29e4ddc4f56e2a261"
  },
  {
    "url": "diary/20220402020904.html",
    "revision": "8e37654d7c2ea531297cdefcd7470112"
  },
  {
    "url": "diary/20220403134818.html",
    "revision": "24999b4b7429d07a02598598124e181c"
  },
  {
    "url": "diary/20220403144915.html",
    "revision": "5c688cbe970492bb3dca4a0c62305cf9"
  },
  {
    "url": "diary/20220404014141.html",
    "revision": "dad7300ec3bf403bf0182c210bf32a75"
  },
  {
    "url": "diary/20220404033714.html",
    "revision": "a3fd42a5640746b4356f4ff6aacabd2b"
  },
  {
    "url": "diary/20220405142134.html",
    "revision": "b9b674ca5790b8aa3ba4b30ddaa666ff"
  },
  {
    "url": "diary/20220406221538.html",
    "revision": "c3d7b2de1fd07db0e5f2dc38860ef97f"
  },
  {
    "url": "diary/20220409113449.html",
    "revision": "52ea2f5cb24bab55891b3adb62517d41"
  },
  {
    "url": "diary/20220409143624.html",
    "revision": "3bde3024bdc6d9101888e9708baf7b6c"
  },
  {
    "url": "diary/20220409153058.html",
    "revision": "dd027ea0ba7aaee96840f26fb84d2c91"
  },
  {
    "url": "diary/20220409200156.html",
    "revision": "11aacdb9b88cdd692c1c7582372ffcb2"
  },
  {
    "url": "diary/20220409205430.html",
    "revision": "4d3c0f27bc617fdcc74d11e8a5640ebf"
  },
  {
    "url": "diary/20220410140637.html",
    "revision": "4b7627e64d07d076eece05546452f7fc"
  },
  {
    "url": "diary/20220410175542.html",
    "revision": "920432105a2f71ec9d97b58d1d70dc91"
  },
  {
    "url": "diary/20220413153303.html",
    "revision": "ed5f4a1de0be2305b35888372a55cd90"
  },
  {
    "url": "diary/20220413204410.html",
    "revision": "75bc42fde81d2dbe4c91a441c5b3b920"
  },
  {
    "url": "diary/20220415074137.html",
    "revision": "aa57d381e70777a7d59b832ff9ab658e"
  },
  {
    "url": "diary/20220415221726.html",
    "revision": "cc66d0b6f20241759a54a38cf5dfd5e1"
  },
  {
    "url": "diary/20220416121303.html",
    "revision": "ca6b8c0d017e97713e78c5345bae460c"
  },
  {
    "url": "diary/20220418010759.html",
    "revision": "4ea1ad9e14653be2891aea8c90e669b6"
  },
  {
    "url": "diary/20220418101948.html",
    "revision": "0471ee03ea6c9ab78f435a341f2a0487"
  },
  {
    "url": "diary/20220418120943.html",
    "revision": "68674d8e54c1b46620ed09daf587bd36"
  },
  {
    "url": "diary/20220418143642.html",
    "revision": "045c554337b506e5977c519e833c16c4"
  },
  {
    "url": "diary/20220418145530.html",
    "revision": "ac6d6776e1578fa121cc8a603480053a"
  },
  {
    "url": "diary/20220418152426.html",
    "revision": "f02c966004cdeb5bb239b6a44ed0f9f9"
  },
  {
    "url": "diary/20220420013054.html",
    "revision": "2b2bf33475358492c4e6f348368c28f1"
  },
  {
    "url": "diary/20220420021816.html",
    "revision": "5cf5ce32b0b737fd507bb8d6108359d2"
  },
  {
    "url": "diary/20220420142324.html",
    "revision": "2ab7b09341d6c7dc3e184d6275094c75"
  },
  {
    "url": "diary/20220420143018.html",
    "revision": "03c153e7b2a307f91bbdc1422ff9ae64"
  },
  {
    "url": "diary/20220421111606.html",
    "revision": "bc9420877753efe49930decb6e834315"
  },
  {
    "url": "diary/20220421144504.html",
    "revision": "464e996d7c2ae91ed202ea7eb87d5e4a"
  },
  {
    "url": "diary/20220423221819.html",
    "revision": "211de112ca3feb826c612870121f9c3d"
  },
  {
    "url": "diary/20220424104506.html",
    "revision": "9909aed7d5c3085f81ae83acea4bc9b5"
  },
  {
    "url": "diary/20220425003534.html",
    "revision": "a6863dadb4ef0e5600a7f60902d68b23"
  },
  {
    "url": "diary/20220425003900.html",
    "revision": "b29fc5ae93912949ccda7dcb3b4cddb6"
  },
  {
    "url": "diary/20220428220724.html",
    "revision": "e47f0a12a22e2e62665a8c53bc817122"
  },
  {
    "url": "diary/20220429140409.html",
    "revision": "43b761107bd9b9e340ebc33933b406e0"
  },
  {
    "url": "diary/20220430005042.html",
    "revision": "6b25686f83aa8f0252afa12ca5a1770b"
  },
  {
    "url": "diary/20220430174446.html",
    "revision": "4040295e1810150eb661928bb6fdf9d9"
  },
  {
    "url": "diary/20220501020004.html",
    "revision": "6ba63069c5eb482031aca5a0766d23fa"
  },
  {
    "url": "diary/20220501152312.html",
    "revision": "88ea2e987ef824fc9176fda8c586851a"
  },
  {
    "url": "diary/20220502025207.html",
    "revision": "7b55d6f3297449ab72db6651fd6a9cab"
  },
  {
    "url": "diary/20220503131246.html",
    "revision": "7171afd67ba9f1f37899adbf191283a2"
  },
  {
    "url": "diary/20220507143308.html",
    "revision": "f36f442d5995608ea0417fbf6056a460"
  },
  {
    "url": "diary/20220510174737.html",
    "revision": "5a0e67c70262b17eac0f5dc5418c701d"
  },
  {
    "url": "diary/20220512110013.html",
    "revision": "3ea099bd49173ce8a8c4c0962cd14d3d"
  },
  {
    "url": "diary/20220524050528.html",
    "revision": "be2a395d4dfc5b2299c3b76b662789e6"
  },
  {
    "url": "diary/20220602024150.html",
    "revision": "fd7e59d185503c80cbfd8c66e8a3006d"
  },
  {
    "url": "diary/20220605171426.html",
    "revision": "cf3da98c711ed1fc24e2cd6e67aff179"
  },
  {
    "url": "diary/20220606191857.html",
    "revision": "b7b76955a58d6830ce5240e759070b30"
  },
  {
    "url": "diary/20220606200936.html",
    "revision": "8efee99d02269a51d30b588678640dc7"
  },
  {
    "url": "diary/20220606222359.html",
    "revision": "daf7e4ba86cc3b81fc375f107a432056"
  },
  {
    "url": "diary/20220607022658.html",
    "revision": "1c5c6f52c0583b444ce33005aa89047b"
  },
  {
    "url": "diary/20220607030217.html",
    "revision": "eea464b7660d88669ff2e94fc7fc11ff"
  },
  {
    "url": "diary/20220607052323.html",
    "revision": "10e4cdc7faf03a48c7cb284c6a9d6d61"
  },
  {
    "url": "diary/20220607060054.html",
    "revision": "4272619d69820a6e5c1bd93473ea0ed2"
  },
  {
    "url": "diary/20220607060831.html",
    "revision": "3f1a83fb97c4ad05f86805ef825b5e1a"
  },
  {
    "url": "diary/20220608112545.html",
    "revision": "ca98434671bafc46fbb1e7c683451e6e"
  },
  {
    "url": "diary/20220608201506.html",
    "revision": "c95e2db1e286b96e4f42d12e871a817f"
  },
  {
    "url": "diary/20220608212800.html",
    "revision": "40977247d798e9c31840b1e1c5ba042f"
  },
  {
    "url": "diary/20220609063943.html",
    "revision": "5457d8eda7e196029faafecd92593164"
  },
  {
    "url": "diary/20220609070011.html",
    "revision": "ce9656754fd874bc2e5e6d3eb3365453"
  },
  {
    "url": "diary/20220610142532.html",
    "revision": "74c4114266fcb4a05b9eb5ff33ca386c"
  },
  {
    "url": "diary/20220611005543.html",
    "revision": "9722101c01282c7ce2096bd481596ea1"
  },
  {
    "url": "diary/20220611101107.html",
    "revision": "58a881740323d0f84fab4c3942886a13"
  },
  {
    "url": "diary/20220611210753.html",
    "revision": "343ef54542407a642bbd50cadfa48f3d"
  },
  {
    "url": "diary/20220611232150.html",
    "revision": "51048581a0b4d159c2e28b790a4caa07"
  },
  {
    "url": "diary/20220612010813.html",
    "revision": "d3d7fe02df71e67d636ecb4661b93ff5"
  },
  {
    "url": "diary/20220612124000.html",
    "revision": "3e7bee29c779eeb2be97db59267900c1"
  },
  {
    "url": "diary/20220612220941.html",
    "revision": "a04eb2603940f3903949b8f48e91e413"
  },
  {
    "url": "index.html",
    "revision": "d6a6b3736750d59f13d64e5e214b4551"
  },
  {
    "url": "list/20220507141201.html",
    "revision": "0e20fd108cd24a96de98f3e624112d2a"
  },
  {
    "url": "list/20220608112545.html",
    "revision": "eddae7786e17af555b231852a46167b2"
  },
  {
    "url": "list/20220609150039.html",
    "revision": "35d0ecdbbbd1c771958c25d48c1d023e"
  },
  {
    "url": "post/handbook.html",
    "revision": "c481689f9c413eeca9e1c9fbd5532b0d"
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
