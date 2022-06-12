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
    "revision": "c8818f7cf2b5a8689b8bfc3c1ab66292"
  },
  {
    "url": "admin.html",
    "revision": "f9fbde26c45821049e0fb3100a1ffddd"
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
    "url": "assets/js/107.afa4f6c5.js",
    "revision": "9bc94a8324f70457b99020a58ae8ea2a"
  },
  {
    "url": "assets/js/108.052a945f.js",
    "revision": "9b9a6cd2006a2eb673a2e871bd9d2f1b"
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
    "url": "assets/js/111.aed952be.js",
    "revision": "315ec45c93e78edf5b051d0a230a096d"
  },
  {
    "url": "assets/js/112.852e980d.js",
    "revision": "434ea8b91c4c78a45571235f9ec69ca8"
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
    "url": "assets/js/126.2e926c34.js",
    "revision": "8ca02a2e5194b1a2dac32433fd997b69"
  },
  {
    "url": "assets/js/127.4354ba73.js",
    "revision": "2a0a9bf2bdad10bd519aedccd24b4294"
  },
  {
    "url": "assets/js/128.ead95e04.js",
    "revision": "ca2ee71f550cfcd5821ca60a92780ebb"
  },
  {
    "url": "assets/js/129.16e31c49.js",
    "revision": "d33acdfe5abb638c15a13e843ceec4e2"
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
    "url": "assets/js/141.56a2becc.js",
    "revision": "436a1813e63a18858e0b86deea5c57da"
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
    "url": "assets/js/144.a31fc1ef.js",
    "revision": "794e9f1bbaba6624b7c25d0e1011f4e4"
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
    "url": "assets/js/174.a540946a.js",
    "revision": "2f5e5c97fffd4efe67ba40d127fce5ee"
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
    "url": "assets/js/app.8615ea52.js",
    "revision": "e664838a6aa6a4eb42a5518195ce7c3b"
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
    "revision": "229a471ea9c657e08973d74738153986"
  },
  {
    "url": "diary/20200701000000.html",
    "revision": "661a130092602839aca0651bdc8ab8f1"
  },
  {
    "url": "diary/20210421000000.html",
    "revision": "2eecf550a55a36e9b37541371229efa5"
  },
  {
    "url": "diary/20210422000000.html",
    "revision": "bb25516b66cf5e16fd800528eb09bc0d"
  },
  {
    "url": "diary/20210423000000.html",
    "revision": "d8536a9ea172ce53ce9841f2e32ef97d"
  },
  {
    "url": "diary/20210424000000.html",
    "revision": "b845f8e93ee1018520419fd86db41a48"
  },
  {
    "url": "diary/20210425000000.html",
    "revision": "0b12b8bbfbdae9ef2a8ecf91afa63595"
  },
  {
    "url": "diary/20210427000000.html",
    "revision": "78001889284cd99f31194845169728c9"
  },
  {
    "url": "diary/20210428000000.html",
    "revision": "e1d5e68a5d37f88818ac0e7341ece65e"
  },
  {
    "url": "diary/20210429000000.html",
    "revision": "8b49cae8ad035927eac2039dbe13fe6c"
  },
  {
    "url": "diary/20210430000000.html",
    "revision": "ff940e092efaaeaa26186ea3e77992a1"
  },
  {
    "url": "diary/20210503000000.html",
    "revision": "0196ab21b1bdec8e3c7545170b00eee1"
  },
  {
    "url": "diary/20210506000000.html",
    "revision": "7312b647bff04b0ee2039f7c58eb34a6"
  },
  {
    "url": "diary/20210511000000.html",
    "revision": "61304f5d49f35cea24bdd7554b400254"
  },
  {
    "url": "diary/20210512000000.html",
    "revision": "1489dfafc5cf0bb4931e03256cfc567f"
  },
  {
    "url": "diary/20210513000000.html",
    "revision": "4972bed7fce26fa6c523dfbfe3c21223"
  },
  {
    "url": "diary/20210514000000.html",
    "revision": "5a4b72ab3c8a03da12c9badd0ba5ef4a"
  },
  {
    "url": "diary/20210515000000.html",
    "revision": "bffcfc9375635abd7b734fe06fd3a163"
  },
  {
    "url": "diary/20210518000000.html",
    "revision": "fc7aa703497c609972c7e6aadfc619f7"
  },
  {
    "url": "diary/20210519000000.html",
    "revision": "910f635334b08510c2a29747c681e67b"
  },
  {
    "url": "diary/20210520000000.html",
    "revision": "aaf35f2a3ef390322cb8ffb0086601bd"
  },
  {
    "url": "diary/20210521000000.html",
    "revision": "fcd1686d73dcaac6bee38a17ad4cab2c"
  },
  {
    "url": "diary/20210523000000.html",
    "revision": "ffede0c8c60e92679e0d777f4d43a01d"
  },
  {
    "url": "diary/20210524000000.html",
    "revision": "94583205a53c3d79ea6093a4d4357690"
  },
  {
    "url": "diary/20210531000000.html",
    "revision": "0331c4250e0655f5f62faa44c263983a"
  },
  {
    "url": "diary/20210604000000.html",
    "revision": "931dc5ec5d94619e04dc41db5e4af198"
  },
  {
    "url": "diary/20210609000000.html",
    "revision": "548afe299ed7411ed4e64795e499abcb"
  },
  {
    "url": "diary/20210628000000.html",
    "revision": "4cb1f1ee7c27c1af7d4791e329273860"
  },
  {
    "url": "diary/20210717000000.html",
    "revision": "822e5de42123e6feacd79e0c4ab9884f"
  },
  {
    "url": "diary/20210721000000.html",
    "revision": "2f2e532ba8d38e02be8d2ae3c7f7cee2"
  },
  {
    "url": "diary/20210721161650.html",
    "revision": "39940e62747f54eb0c931f54bc22b370"
  },
  {
    "url": "diary/20210722000000.html",
    "revision": "ce59ac8c44e5d6919cf85f9d663a2857"
  },
  {
    "url": "diary/20210722122356.html",
    "revision": "6e101cea3c7ac291a63b502db4d1e66d"
  },
  {
    "url": "diary/20210722124216.html",
    "revision": "9d3a858e6cd1fd5775af02e26cfe11ed"
  },
  {
    "url": "diary/20210723131524.html",
    "revision": "b9d49dae8c06f79f3f443a2779c6e95a"
  },
  {
    "url": "diary/20210724000000.html",
    "revision": "c205603e6118992dc9b6a75fb6ffc32a"
  },
  {
    "url": "diary/20210725000000.html",
    "revision": "a369d743ee946873eda1239853101427"
  },
  {
    "url": "diary/20210727182032.html",
    "revision": "d037b662911e25a34e33ecae2454743a"
  },
  {
    "url": "diary/20210801000000.html",
    "revision": "2836520a55e90c27543733d2a97796d5"
  },
  {
    "url": "diary/20210803000000.html",
    "revision": "9d6b607ffd3785b6d35a445b98e26404"
  },
  {
    "url": "diary/20210805130603.html",
    "revision": "bfa2533d562b75adf863f8f6dd8a8275"
  },
  {
    "url": "diary/20210805163211.html",
    "revision": "71213326ab19b71d6e20c99079415f9c"
  },
  {
    "url": "diary/20210805172839.html",
    "revision": "0089f9a7aa14800f3200f360ed1dee72"
  },
  {
    "url": "diary/20210805181213.html",
    "revision": "94188710c77b724b31dec74ea340964e"
  },
  {
    "url": "diary/20210807000000.html",
    "revision": "9b0787286b1ca3bcccd9ce50a382d13a"
  },
  {
    "url": "diary/20210807175337.html",
    "revision": "2416ecdbf6928793f3c298b78037297c"
  },
  {
    "url": "diary/20210807215030.html",
    "revision": "3bd0bdf7a43f4ba97a23e5b4a839d4a8"
  },
  {
    "url": "diary/20210807222026.html",
    "revision": "633569e5746426c72418c16260f83e9c"
  },
  {
    "url": "diary/20210808123419.html",
    "revision": "30111d00b4262286e33aa350cb821d97"
  },
  {
    "url": "diary/20210811000000.html",
    "revision": "f6257261614e31d678ec2e4ba49ba0d5"
  },
  {
    "url": "diary/20210811175819.html",
    "revision": "76a1f06b801b3d6005680c5a0f2af12f"
  },
  {
    "url": "diary/20210812000000.html",
    "revision": "625c9786a2775628a136ba9d32d829fb"
  },
  {
    "url": "diary/20220218000000.html",
    "revision": "5df190c1a31839859fb6375ce1578a76"
  },
  {
    "url": "diary/20220218135219.html",
    "revision": "9465c594ea74fc9e717dc08832f15852"
  },
  {
    "url": "diary/20220218143454.html",
    "revision": "81188f83dcb7a110372cd9ed87a3e69b"
  },
  {
    "url": "diary/20220218144829.html",
    "revision": "7dc95a54e54b0e3bd1c16ed07b1cdb91"
  },
  {
    "url": "diary/20220218153217.html",
    "revision": "d818c1dc1465e58a5b521d684d8938cd"
  },
  {
    "url": "diary/20220218153334.html",
    "revision": "16a614cac76b1140416c8b74e7a0adc0"
  },
  {
    "url": "diary/20220218221737.html",
    "revision": "985d1aea4861e6a634e1d745412955bf"
  },
  {
    "url": "diary/20220219000000.html",
    "revision": "282ca7b9961727675e9642dcb9bd9b9d"
  },
  {
    "url": "diary/20220219115441.html",
    "revision": "93e3db7eeadd97db415facb588676349"
  },
  {
    "url": "diary/20220220150004.html",
    "revision": "21e7cfaa18510d78f780e83702f81c3e"
  },
  {
    "url": "diary/20220220235250.html",
    "revision": "6fa3d50e6f0df2795019a8b8178692a1"
  },
  {
    "url": "diary/20220221000030.html",
    "revision": "064044234cd25e72765bb616ef9beda0"
  },
  {
    "url": "diary/20220221110932.html",
    "revision": "cbfb760c31ae21c34b54ee31a30964f1"
  },
  {
    "url": "diary/20220222000000.html",
    "revision": "64adcc811295b17c38455eeddd87630b"
  },
  {
    "url": "diary/20220222143459.html",
    "revision": "f1ee03a85907bc6f194781b3902cad55"
  },
  {
    "url": "diary/20220223181058.html",
    "revision": "bfa9284eb49763f6bb837fa835384ede"
  },
  {
    "url": "diary/20220223195033.html",
    "revision": "0924d02fc213d0557394901312d3fbfc"
  },
  {
    "url": "diary/20220224000000.html",
    "revision": "341cb9b54990407473473c52aac8e3e2"
  },
  {
    "url": "diary/20220225000000.html",
    "revision": "14420a047548187c20feebfca79c820e"
  },
  {
    "url": "diary/20220227191319.html",
    "revision": "9c7c854ec9ba1a308d03b40aa5067303"
  },
  {
    "url": "diary/20220227201810.html",
    "revision": "4ecf447014d4fd83d01a9ba5842b943e"
  },
  {
    "url": "diary/20220228165307.html",
    "revision": "b9954559f141959ac4d5508161ef922d"
  },
  {
    "url": "diary/20220305135058.html",
    "revision": "2e5af05c3929a3899898dc5d6b681ba0"
  },
  {
    "url": "diary/20220312145553.html",
    "revision": "553fe888dd8e01c1e76993dfb4be3448"
  },
  {
    "url": "diary/20220314121500.html",
    "revision": "d2e8d2bf296fde494e7c873298514d2c"
  },
  {
    "url": "diary/20220315000000.html",
    "revision": "125cca7b87450fe00312a484970f98ff"
  },
  {
    "url": "diary/20220318131950.html",
    "revision": "2fd1d31c3543f69a1a0bf1dcca3fd40f"
  },
  {
    "url": "diary/20220324015620.html",
    "revision": "cccad005899076954305cf4f6923e84f"
  },
  {
    "url": "diary/20220325183116.html",
    "revision": "fcb1918a57c2fe4b48b5f9468c72b155"
  },
  {
    "url": "diary/20220326204221.html",
    "revision": "42e6bdea02849b25df3b2cba0093a455"
  },
  {
    "url": "diary/20220327095515.html",
    "revision": "258ba3d4143a1a93012a87d0bd6eedd7"
  },
  {
    "url": "diary/20220328191744.html",
    "revision": "a92544f46f661273842366c578f34ff0"
  },
  {
    "url": "diary/20220329160801.html",
    "revision": "8360153abab4509203f89cbf76c822eb"
  },
  {
    "url": "diary/20220330134503.html",
    "revision": "26d665608ce5c09d40d2b3a6b98cd05c"
  },
  {
    "url": "diary/20220402020904.html",
    "revision": "c0ae59bb8fd04ebdbd2fceae55b6544c"
  },
  {
    "url": "diary/20220403134818.html",
    "revision": "eb3d569fe0876a5941acf7e791cf379f"
  },
  {
    "url": "diary/20220403144915.html",
    "revision": "ca042c4ce8d0e8e9659a8b28889060bd"
  },
  {
    "url": "diary/20220404014141.html",
    "revision": "80b12ff5bea157fd0bef5a764477714e"
  },
  {
    "url": "diary/20220404033714.html",
    "revision": "00c087f706753a1ff7bca42eb4cbb638"
  },
  {
    "url": "diary/20220405142134.html",
    "revision": "2b8902be16708e5c6a6f2450600a05e9"
  },
  {
    "url": "diary/20220406221538.html",
    "revision": "eb4f63f5c861c23a9d05a2b63f1d268e"
  },
  {
    "url": "diary/20220409113449.html",
    "revision": "e5f7303d76083a0f711dfbf0ef9c762f"
  },
  {
    "url": "diary/20220409143624.html",
    "revision": "1ad73a0a8beed59eb977669e2d5d3c4e"
  },
  {
    "url": "diary/20220409153058.html",
    "revision": "b71bf50981a5cf31f9e90cfc1df01dab"
  },
  {
    "url": "diary/20220409200156.html",
    "revision": "eae037530a58eafc2686819b0559ae06"
  },
  {
    "url": "diary/20220409205430.html",
    "revision": "032edeeac2f544b2390f275a2aebe704"
  },
  {
    "url": "diary/20220410140637.html",
    "revision": "2a9abd708e6e0f9a07cf2f233fc298e3"
  },
  {
    "url": "diary/20220410175542.html",
    "revision": "02730ae4d1b3ac2da47ca97997f942a1"
  },
  {
    "url": "diary/20220413153303.html",
    "revision": "f6025fb34f3465c2ad063fd399aa4a44"
  },
  {
    "url": "diary/20220413204410.html",
    "revision": "8cd03829a871d02f2ee19a8206cc2a96"
  },
  {
    "url": "diary/20220415074137.html",
    "revision": "beac34a26af4bbfcec2df8dd17c0039f"
  },
  {
    "url": "diary/20220415221726.html",
    "revision": "c1f541c5119875d3bd1f3f4026a1080b"
  },
  {
    "url": "diary/20220416121303.html",
    "revision": "c02aec14cad41672f0a20c57043f882a"
  },
  {
    "url": "diary/20220418010759.html",
    "revision": "763666077324280af23819dda6126cdb"
  },
  {
    "url": "diary/20220418101948.html",
    "revision": "3b8bf1bf0219336300c22a324e0976f7"
  },
  {
    "url": "diary/20220418120943.html",
    "revision": "346cc2c398aa02e3e2920e2ba223c2a3"
  },
  {
    "url": "diary/20220418143642.html",
    "revision": "917127430e366abb502d6f9a7b0de781"
  },
  {
    "url": "diary/20220418145530.html",
    "revision": "a3c5ff6cfcfcec0bf5b887cff246d08a"
  },
  {
    "url": "diary/20220418152426.html",
    "revision": "e7949401cb96e98613a56c21f7cba99f"
  },
  {
    "url": "diary/20220420013054.html",
    "revision": "7c9ae9a5a93518ce1ad4738c1bab981d"
  },
  {
    "url": "diary/20220420021816.html",
    "revision": "b8235a9d4de8c7f0a797fe741455b9e0"
  },
  {
    "url": "diary/20220420142324.html",
    "revision": "67126e8aea916317ee95f58d4fd89d2a"
  },
  {
    "url": "diary/20220420143018.html",
    "revision": "1eb620015834d1faa661ee2e68ad4dc7"
  },
  {
    "url": "diary/20220421111606.html",
    "revision": "d771cb013cf0f2258796f6f3e4ab9a1d"
  },
  {
    "url": "diary/20220421144504.html",
    "revision": "15e76489ade4c179ab2d12189b712f47"
  },
  {
    "url": "diary/20220423221819.html",
    "revision": "578a4a57ab521c2b14e3c56a08871748"
  },
  {
    "url": "diary/20220424104506.html",
    "revision": "e1cf65fe6d8a12fa4c24636971d3b4aa"
  },
  {
    "url": "diary/20220425003534.html",
    "revision": "0fe044f5c2bfe36c725d3cbd8de5a664"
  },
  {
    "url": "diary/20220425003900.html",
    "revision": "b8fd4fcf12d825c773b35646b040e869"
  },
  {
    "url": "diary/20220428220724.html",
    "revision": "72b10425a2015d58dd4e244c1dfb47b3"
  },
  {
    "url": "diary/20220429140409.html",
    "revision": "c0bb25bcaf2a183f9c4d72da4de12fce"
  },
  {
    "url": "diary/20220430005042.html",
    "revision": "9707ce3b205f1403249fad5f39d05a44"
  },
  {
    "url": "diary/20220430174446.html",
    "revision": "57730b1813c52bdbf793089c6f828cda"
  },
  {
    "url": "diary/20220501020004.html",
    "revision": "128935f46d1265cace8a988956422a14"
  },
  {
    "url": "diary/20220501152312.html",
    "revision": "6285652ae9401ee317da5e6996aae058"
  },
  {
    "url": "diary/20220502025207.html",
    "revision": "a3b454f5401d818920352906951bf666"
  },
  {
    "url": "diary/20220503131246.html",
    "revision": "d2909ac058765204d488f961da2a7eca"
  },
  {
    "url": "diary/20220507143308.html",
    "revision": "5fbf91fba49ebc80b290574a8a70dbdc"
  },
  {
    "url": "diary/20220510174737.html",
    "revision": "3343c2edcffb9992f7e0828be07e3e03"
  },
  {
    "url": "diary/20220512110013.html",
    "revision": "baf34974ee704125af5dd2e8e15d9ed4"
  },
  {
    "url": "diary/20220524050528.html",
    "revision": "2fe2571475a96d61c9ae30802575d386"
  },
  {
    "url": "diary/20220602024150.html",
    "revision": "1a4d32badf2a154703e3bb86e0e0e1df"
  },
  {
    "url": "diary/20220605171426.html",
    "revision": "c4c93368643994f73d657a5e43d30bf7"
  },
  {
    "url": "diary/20220606191857.html",
    "revision": "ace0a72e45bccd6d6a63cff6d009360f"
  },
  {
    "url": "diary/20220606200936.html",
    "revision": "f71291979f8a954cbc93070993f9478b"
  },
  {
    "url": "diary/20220606222359.html",
    "revision": "f1335e30d0594b292a10fd96b2910d9d"
  },
  {
    "url": "diary/20220607022658.html",
    "revision": "b1d896018ca638eb967d8cf39b3b5d26"
  },
  {
    "url": "diary/20220607030217.html",
    "revision": "7a047b0f40a84e4be33a9f9b4a25f568"
  },
  {
    "url": "diary/20220607052323.html",
    "revision": "a4d56790f39c35d2c19942727c39b602"
  },
  {
    "url": "diary/20220607060054.html",
    "revision": "0f4a9ab619e753151ba0bccd62ca4d9c"
  },
  {
    "url": "diary/20220607060831.html",
    "revision": "86f7b6cb43f53d6124398b145027eb0d"
  },
  {
    "url": "diary/20220608112545.html",
    "revision": "6d4f64cd94354ef75adddf7674b3ddbe"
  },
  {
    "url": "diary/20220608201506.html",
    "revision": "ef57a976b38567e0749b24de0f495300"
  },
  {
    "url": "diary/20220608212800.html",
    "revision": "d107912663563f78e716ec6c55f5cdb3"
  },
  {
    "url": "diary/20220609063943.html",
    "revision": "42a1233a4f0c706cdc47df4dd6dc0917"
  },
  {
    "url": "diary/20220609070011.html",
    "revision": "097f7a091986de28f0adbe50516063e5"
  },
  {
    "url": "diary/20220610142532.html",
    "revision": "7b37deb9583f65d254e6ecb44727d0a1"
  },
  {
    "url": "diary/20220611005543.html",
    "revision": "60719aab74979c244dd90f169941b9cd"
  },
  {
    "url": "diary/20220611101107.html",
    "revision": "e0336134e547674d4cbefa33f2be10ed"
  },
  {
    "url": "diary/20220611210753.html",
    "revision": "059af59dd6b16e79e271b43b79b8f596"
  },
  {
    "url": "diary/20220611232150.html",
    "revision": "763a1604a16dd1b41e19e199e5bc7d72"
  },
  {
    "url": "diary/20220612010813.html",
    "revision": "023b8f7510b7364371c202e26dee36e1"
  },
  {
    "url": "diary/20220612124000.html",
    "revision": "e37bfab49b2c461da2e63d6f7fba8881"
  },
  {
    "url": "diary/20220612220941.html",
    "revision": "123d8e958c358081ba931e72b8d038a2"
  },
  {
    "url": "index.html",
    "revision": "aef7b90158f8727a008550039f66ac5f"
  },
  {
    "url": "list/20220507141201.html",
    "revision": "ccefed6c727c9613b4746caadf2c5638"
  },
  {
    "url": "list/20220608112545.html",
    "revision": "8da3a07b1980dfbcc21997fabe591cd4"
  },
  {
    "url": "list/20220609150039.html",
    "revision": "e849bfb258041d94039dc7afdc6e957a"
  },
  {
    "url": "post/handbook.html",
    "revision": "bb6ef0f1fa8ea5691dc5932b3603896b"
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
