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
    "revision": "0ec6571cad8d6ebf65a8d85e5a3aa533"
  },
  {
    "url": "admin.html",
    "revision": "d58950f32c2667dd97a839a0eb00fc41"
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
    "url": "assets/js/103.bb27dc98.js",
    "revision": "4f6c8af62da5146f17164220ce496e19"
  },
  {
    "url": "assets/js/104.b0b6a51f.js",
    "revision": "3ba8f8039c94a809d5a40b594b7790bb"
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
    "url": "assets/js/132.ca861297.js",
    "revision": "b999b02bbc72f20ab8c8f46a10d68fb4"
  },
  {
    "url": "assets/js/133.b95a0017.js",
    "revision": "4d2dc8f050744a464455945f064edd52"
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
    "url": "assets/js/136.d2145576.js",
    "revision": "c2d1fc616c5a19d42a3f7ab8cd3198a4"
  },
  {
    "url": "assets/js/137.d7fd6a2d.js",
    "revision": "539406173e906521956b2ffcaa8d14c1"
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
    "url": "assets/js/161.a36a4211.js",
    "revision": "6e7473346654f40c5eea610856be7fd9"
  },
  {
    "url": "assets/js/162.61756a02.js",
    "revision": "9442cad5c42749df5a8ffb574fbacef6"
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
    "url": "assets/js/17.6afc25c6.js",
    "revision": "1b243a4da3fd3b7eda6c2f10fd0084b8"
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
    "url": "assets/js/173.e4f3e100.js",
    "revision": "fe75b1fd9945b648a004a32e15d0e322"
  },
  {
    "url": "assets/js/174.82160ebb.js",
    "revision": "c8d09f723cbd278e199e4077d1cd36e1"
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
    "url": "assets/js/18.c8753204.js",
    "revision": "9a42f80ccb6713101fe6fe0687a0c610"
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
    "url": "assets/js/27.9d047bfa.js",
    "revision": "45f6f035efb399fbfeba50568a80b008"
  },
  {
    "url": "assets/js/28.7be36188.js",
    "revision": "e11d47d9dead7be462045be639262e22"
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
    "url": "assets/js/45.ed677134.js",
    "revision": "09a7e656fc95d9b568a83f7cb9a85e3e"
  },
  {
    "url": "assets/js/46.51d68dca.js",
    "revision": "ae49ac7ed0b46d9a6840157e2152a93c"
  },
  {
    "url": "assets/js/47.4e77f715.js",
    "revision": "c75440124cabb6597f42b83a8484f3a7"
  },
  {
    "url": "assets/js/48.f30ebae9.js",
    "revision": "a3ef4514e745e3187c919fa5f6406988"
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
    "url": "assets/js/app.115c0c9f.js",
    "revision": "46942332f9e7b5f61a90995fea2d24f5"
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
    "revision": "4b2021b66b09d6246c78efe84b4d6956"
  },
  {
    "url": "diary/20200701000000.html",
    "revision": "8004af597e5ad97c5690d3111577e8c0"
  },
  {
    "url": "diary/20210421000000.html",
    "revision": "20aa1b54bf29375c6c30f6f83e3c884f"
  },
  {
    "url": "diary/20210422000000.html",
    "revision": "30bbb3ebe9bf8869d971e5ee6d8c7e50"
  },
  {
    "url": "diary/20210423000000.html",
    "revision": "b27df4e8ae39e54e342bd32c56a43773"
  },
  {
    "url": "diary/20210424000000.html",
    "revision": "05297daaf227269011ae13ae5223d99d"
  },
  {
    "url": "diary/20210425000000.html",
    "revision": "9f5cb1ba155fb0d00ecb2f28240688a7"
  },
  {
    "url": "diary/20210427000000.html",
    "revision": "a113418a0024365eb27da79afa60a892"
  },
  {
    "url": "diary/20210428000000.html",
    "revision": "40d499e2dcba82eacfc39efe35bfc6bf"
  },
  {
    "url": "diary/20210429000000.html",
    "revision": "f348f68aad272ea9fd610296f638878f"
  },
  {
    "url": "diary/20210430000000.html",
    "revision": "a34b498dda41d498b476b49bb8f5444f"
  },
  {
    "url": "diary/20210503000000.html",
    "revision": "3ddf46bb1cba78ccf33568f19d1da46e"
  },
  {
    "url": "diary/20210506000000.html",
    "revision": "3a5af059c03039a238b9b693fb291da6"
  },
  {
    "url": "diary/20210511000000.html",
    "revision": "ca4979bfd6b9b070c1c515d0aa47ed76"
  },
  {
    "url": "diary/20210512000000.html",
    "revision": "ba0cf7dd13038e6413bf1086a4f26c8e"
  },
  {
    "url": "diary/20210513000000.html",
    "revision": "40eebe6ce90db0f3c27131eabd8b7193"
  },
  {
    "url": "diary/20210514000000.html",
    "revision": "357fc080a0ac828e9c5edce38183f39d"
  },
  {
    "url": "diary/20210515000000.html",
    "revision": "78c87d104cbb81291bf02a90e795fba5"
  },
  {
    "url": "diary/20210518000000.html",
    "revision": "f5e46998de66df68fc4d55ded08c3192"
  },
  {
    "url": "diary/20210519000000.html",
    "revision": "d3b04af5365aca4fda1dd9fb42aa7dc5"
  },
  {
    "url": "diary/20210520000000.html",
    "revision": "6e74ae021f2c154bb1aa5e62cf6c3d17"
  },
  {
    "url": "diary/20210521000000.html",
    "revision": "be86ca48197cc58caf080e5adc21e034"
  },
  {
    "url": "diary/20210523000000.html",
    "revision": "553c042f577ccfc8f25bbef5e3b3fa6e"
  },
  {
    "url": "diary/20210524000000.html",
    "revision": "6ed78add1e14627020475eb822dce587"
  },
  {
    "url": "diary/20210531000000.html",
    "revision": "6c48ec140072ccc9198a21a165d36e2d"
  },
  {
    "url": "diary/20210604000000.html",
    "revision": "265bc00ef6fed727bb920c9dd3517df6"
  },
  {
    "url": "diary/20210609000000.html",
    "revision": "9527ce703bf989dccb924517698f6a40"
  },
  {
    "url": "diary/20210628000000.html",
    "revision": "9741f2f176a234504b62c3dd3a708c88"
  },
  {
    "url": "diary/20210717000000.html",
    "revision": "d97bc61084f28b764c39042a563bca5c"
  },
  {
    "url": "diary/20210721000000.html",
    "revision": "172dccd1147eeb43a855cf66f4d11655"
  },
  {
    "url": "diary/20210721161650.html",
    "revision": "516b1d46815a7c073901a2ac8b3c9551"
  },
  {
    "url": "diary/20210722000000.html",
    "revision": "0215a79b44e55173dafcabe3491af9f8"
  },
  {
    "url": "diary/20210722122356.html",
    "revision": "83eb60998c868d5070a1be457819f081"
  },
  {
    "url": "diary/20210722124216.html",
    "revision": "a2686177855692be25175c3813e1048f"
  },
  {
    "url": "diary/20210723131524.html",
    "revision": "ffac309db4a877e089ae18e3bb722a40"
  },
  {
    "url": "diary/20210724000000.html",
    "revision": "1c7c1bcf3e09f0c6154cc641bc5ca010"
  },
  {
    "url": "diary/20210725000000.html",
    "revision": "5972f505902b7184533c94a4697b46a3"
  },
  {
    "url": "diary/20210727182032.html",
    "revision": "726cdceadfcbcf229d216cc9819ff4b5"
  },
  {
    "url": "diary/20210801000000.html",
    "revision": "a91bf80f59b69c1b085fef8b71b88ca0"
  },
  {
    "url": "diary/20210803000000.html",
    "revision": "0d547e3f9de0bbc2dd6a52b3ca4b6eee"
  },
  {
    "url": "diary/20210805130603.html",
    "revision": "17446ded0bb0087b53e8b02dde8843d9"
  },
  {
    "url": "diary/20210805163211.html",
    "revision": "798147ee708243dc1c4d985353f79b87"
  },
  {
    "url": "diary/20210805172839.html",
    "revision": "554aa5e4b8e5cccdb71d0f053ee9c69a"
  },
  {
    "url": "diary/20210805181213.html",
    "revision": "8cc7fe0c899296ab027fa9f3aaef764d"
  },
  {
    "url": "diary/20210807000000.html",
    "revision": "aeb72d6416ac96d2a563847c58516cd8"
  },
  {
    "url": "diary/20210807175337.html",
    "revision": "1edbdc54de16d4c90271fd9e51040f10"
  },
  {
    "url": "diary/20210807215030.html",
    "revision": "ad5197be8199a5360b113e37d5ddcd92"
  },
  {
    "url": "diary/20210807222026.html",
    "revision": "889e3130be2c0a351522903cce0a4d71"
  },
  {
    "url": "diary/20210808123419.html",
    "revision": "d93e66463e31c58907bc43612952b2b1"
  },
  {
    "url": "diary/20210811000000.html",
    "revision": "6257955e54470e33c47ac01b72c363b8"
  },
  {
    "url": "diary/20210811175819.html",
    "revision": "ef489e6dcebc3549e29d350316534f5f"
  },
  {
    "url": "diary/20210812000000.html",
    "revision": "89bd213c597c3e6ed8a0f232d35dbc4c"
  },
  {
    "url": "diary/20220218000000.html",
    "revision": "a466f8b03ad9fe2d47c1141ae0a42358"
  },
  {
    "url": "diary/20220218135219.html",
    "revision": "92a124293e690abcb2164d75056272cf"
  },
  {
    "url": "diary/20220218143454.html",
    "revision": "01f25bdf4c53e684438ab86c757bd87d"
  },
  {
    "url": "diary/20220218144829.html",
    "revision": "d874a8a8487122ce765cf9b062b59d36"
  },
  {
    "url": "diary/20220218153217.html",
    "revision": "311390a87a0e803fc8212948c65bcf98"
  },
  {
    "url": "diary/20220218153334.html",
    "revision": "37924e340b037d50277e5969f6e51db1"
  },
  {
    "url": "diary/20220218221737.html",
    "revision": "b1d6bcdae9fb8cba657491c0440ca1a2"
  },
  {
    "url": "diary/20220219000000.html",
    "revision": "f6f0ef5334eef6045f1971cc2db0226f"
  },
  {
    "url": "diary/20220219115441.html",
    "revision": "ae574b4faa077adc80d98d46c1681e48"
  },
  {
    "url": "diary/20220220150004.html",
    "revision": "d636adfcdbbe925ba84142c731c876f9"
  },
  {
    "url": "diary/20220220235250.html",
    "revision": "73215a12686ac8b643a3f9ba5c223460"
  },
  {
    "url": "diary/20220221000030.html",
    "revision": "81f477fa543862b7555185df2e133a1d"
  },
  {
    "url": "diary/20220221110932.html",
    "revision": "9e31c822ddbf31e2dc04f7b846cdad3d"
  },
  {
    "url": "diary/20220222000000.html",
    "revision": "213d311fb5def789af877a2f00f77284"
  },
  {
    "url": "diary/20220222143459.html",
    "revision": "7784b05bf7d1e024aa44aa895162f1be"
  },
  {
    "url": "diary/20220223181058.html",
    "revision": "e6546aadc3924f25715655586813ac8f"
  },
  {
    "url": "diary/20220223195033.html",
    "revision": "84eb45e6115e1f20cce9f277b8af496c"
  },
  {
    "url": "diary/20220224000000.html",
    "revision": "530daa6672b98c9da8992a6be9a45469"
  },
  {
    "url": "diary/20220225000000.html",
    "revision": "d40e478483d28938df12f815e6d1e3cc"
  },
  {
    "url": "diary/20220227191319.html",
    "revision": "b642676666b86bcea665dd568ef743fd"
  },
  {
    "url": "diary/20220227201810.html",
    "revision": "e734478f9402807f3821544746429487"
  },
  {
    "url": "diary/20220228165307.html",
    "revision": "f9bc13be1717ea098937961c757e1f52"
  },
  {
    "url": "diary/20220305135058.html",
    "revision": "b800692188794a90230f7a2957df3a4c"
  },
  {
    "url": "diary/20220312145553.html",
    "revision": "9588621546296213304b80d312710a29"
  },
  {
    "url": "diary/20220314121500.html",
    "revision": "fad5b0a384d22798b4dcb759e93c677e"
  },
  {
    "url": "diary/20220315000000.html",
    "revision": "d001dc41361384789ba5308886841edf"
  },
  {
    "url": "diary/20220318131950.html",
    "revision": "3775ac9185ba2309dd53e2993d9ea73d"
  },
  {
    "url": "diary/20220324015620.html",
    "revision": "2d7dba1b847c3ee2213a8815b4cbc981"
  },
  {
    "url": "diary/20220325183116.html",
    "revision": "ff5089af8be417eb0eabc536d223161c"
  },
  {
    "url": "diary/20220326204221.html",
    "revision": "1c09e3e433d2770e5f184b6e6a204ecc"
  },
  {
    "url": "diary/20220327095515.html",
    "revision": "0c3c678c53e8c92b5f5dedb70266ab83"
  },
  {
    "url": "diary/20220328191744.html",
    "revision": "09cbc87975a535d8064a6b6d322cbff1"
  },
  {
    "url": "diary/20220329160801.html",
    "revision": "03411b6dc45009055ccb2e441d889c45"
  },
  {
    "url": "diary/20220330134503.html",
    "revision": "c269f16b7a82478ac51544b7fbb48323"
  },
  {
    "url": "diary/20220402020904.html",
    "revision": "f7606289c53867295dc842249551c5f0"
  },
  {
    "url": "diary/20220403134818.html",
    "revision": "ab22985c52f3ec971e5ac46f651940e2"
  },
  {
    "url": "diary/20220403144915.html",
    "revision": "f3d472b3c3b6863ce67d85bd179e2a60"
  },
  {
    "url": "diary/20220404014141.html",
    "revision": "d93b6ce697d23c9f8d043d8f8a8ddecf"
  },
  {
    "url": "diary/20220404033714.html",
    "revision": "8795e9c11b7241b8525506afa16ff3bc"
  },
  {
    "url": "diary/20220405142134.html",
    "revision": "4b4e9430a6d84ee513b4fbadf4ff974f"
  },
  {
    "url": "diary/20220406221538.html",
    "revision": "3c966025484269ed87a2fc1474ef0965"
  },
  {
    "url": "diary/20220409113449.html",
    "revision": "e0799bd3240d051b7e21bead968bfc2a"
  },
  {
    "url": "diary/20220409143624.html",
    "revision": "3fd6329deedfae98789290414c0d2eb9"
  },
  {
    "url": "diary/20220409153058.html",
    "revision": "9000d1bfdb6d67aeb4ed9c41de204db6"
  },
  {
    "url": "diary/20220409200156.html",
    "revision": "129fb59068019dff25b58ea2d653ddaf"
  },
  {
    "url": "diary/20220409205430.html",
    "revision": "dd9e9c87a6063e35b20580655bba0c3f"
  },
  {
    "url": "diary/20220410140637.html",
    "revision": "6a237ea3c461910f6e0fe85a102f73d2"
  },
  {
    "url": "diary/20220410175542.html",
    "revision": "81f6699d490125f4a0e479370f77bad7"
  },
  {
    "url": "diary/20220413153303.html",
    "revision": "08e5ee880eee049f9c82c41efb360684"
  },
  {
    "url": "diary/20220413204410.html",
    "revision": "628ad1441c47c3c6ba10c46a15e2a5ea"
  },
  {
    "url": "diary/20220415074137.html",
    "revision": "36be2e19549b55508dcc5788cc23a21b"
  },
  {
    "url": "diary/20220415221726.html",
    "revision": "edb24d44e63f38d2181d202e96afacae"
  },
  {
    "url": "diary/20220416121303.html",
    "revision": "d7839ed1e36518b8d128a090d4893aee"
  },
  {
    "url": "diary/20220418010759.html",
    "revision": "b4dad32c31e3c0da4601b727d07e8a99"
  },
  {
    "url": "diary/20220418101948.html",
    "revision": "8037d8c35d051feb2b22e627ba3b66d9"
  },
  {
    "url": "diary/20220418120943.html",
    "revision": "6093554fcb1fb0599725d20df55a8871"
  },
  {
    "url": "diary/20220418143642.html",
    "revision": "d615a7ac9719676733872a47b9b1a6c9"
  },
  {
    "url": "diary/20220418145530.html",
    "revision": "b956dff6ed215038b88299af39ef4a5e"
  },
  {
    "url": "diary/20220418152426.html",
    "revision": "1e7dbd4221f12c48fe171606884f7e20"
  },
  {
    "url": "diary/20220420013054.html",
    "revision": "97b4df0ece14b8bf97543fd420484520"
  },
  {
    "url": "diary/20220420021816.html",
    "revision": "86b76ccc32fe912b07827c84cf3ff269"
  },
  {
    "url": "diary/20220420142324.html",
    "revision": "220eda98c19d2229667c6449a1e798e6"
  },
  {
    "url": "diary/20220420143018.html",
    "revision": "27e32f99ab83e7c37440aae20db1b92f"
  },
  {
    "url": "diary/20220421111606.html",
    "revision": "bf9afd96c9c176c8ef0bd5fd19d3b7e6"
  },
  {
    "url": "diary/20220421144504.html",
    "revision": "d85751fd46897dabab38c857cbcec663"
  },
  {
    "url": "diary/20220423221819.html",
    "revision": "c659d5d2895a04246d6c0938c05b6c26"
  },
  {
    "url": "diary/20220424104506.html",
    "revision": "96be6b459e92c2cd32b3a9b734207f85"
  },
  {
    "url": "diary/20220425003534.html",
    "revision": "fd89f8f5adf338837c34c83e713b4886"
  },
  {
    "url": "diary/20220425003900.html",
    "revision": "6345331ad099c200bceb10a99701fb80"
  },
  {
    "url": "diary/20220428220724.html",
    "revision": "55fba25025b73b37f908e875c50cc9a0"
  },
  {
    "url": "diary/20220429140409.html",
    "revision": "25d77178f250dbd8503dd1f0414137f5"
  },
  {
    "url": "diary/20220430005042.html",
    "revision": "4c0b83314c462359c9e9bddb36d52f43"
  },
  {
    "url": "diary/20220430174446.html",
    "revision": "06442b0d7876c0f783601771bfb21700"
  },
  {
    "url": "diary/20220501020004.html",
    "revision": "8494eec832d86b3e76ae7d31bdc42cc8"
  },
  {
    "url": "diary/20220501152312.html",
    "revision": "b1d6a6659d5fcc94b40240f60c2f7fab"
  },
  {
    "url": "diary/20220502025207.html",
    "revision": "9f09c7182723a6995caa2b3bc63312ed"
  },
  {
    "url": "diary/20220503131246.html",
    "revision": "78e005cda75923199ecc8646b02c02ff"
  },
  {
    "url": "diary/20220507143308.html",
    "revision": "e2b5f1e2650beb92d150342f329761a3"
  },
  {
    "url": "diary/20220510174737.html",
    "revision": "ef5f277f630a0e8a0749593059ad8e0c"
  },
  {
    "url": "diary/20220512110013.html",
    "revision": "8347a35fa7fcaf57d8303e8af3d7b228"
  },
  {
    "url": "diary/20220524050528.html",
    "revision": "d9e37153b3c6bb8e82166f0124627def"
  },
  {
    "url": "diary/20220602024150.html",
    "revision": "cd1b59c0d37ef153f22811a328574197"
  },
  {
    "url": "diary/20220605171426.html",
    "revision": "918229a3d603079e97c5dbcd03959e86"
  },
  {
    "url": "diary/20220606191857.html",
    "revision": "bbe8127d999521cc3d3b2c8bc45ffe6a"
  },
  {
    "url": "diary/20220606200936.html",
    "revision": "43347104d908bc7d5d505daa351be6ee"
  },
  {
    "url": "diary/20220606222359.html",
    "revision": "f605505db3c5aacdca465910c6182db3"
  },
  {
    "url": "diary/20220607022658.html",
    "revision": "ab14a3766d984baa23d49047452972dc"
  },
  {
    "url": "diary/20220607030217.html",
    "revision": "95f7c6b668a62998e8bc6360c9ecdb58"
  },
  {
    "url": "diary/20220607052323.html",
    "revision": "15500bba26bc176ad76c65bddb7fc01b"
  },
  {
    "url": "diary/20220607060054.html",
    "revision": "d4abc025defdf80a9ca87117d12f5086"
  },
  {
    "url": "diary/20220607060831.html",
    "revision": "683fdf92e73761b81839cc489fc693e3"
  },
  {
    "url": "diary/20220608112545.html",
    "revision": "b17824f609e0da5ea40e8d8d3367b822"
  },
  {
    "url": "diary/20220608201506.html",
    "revision": "4942765d37a000c7242514bdb0a55fb4"
  },
  {
    "url": "diary/20220608212800.html",
    "revision": "09a454748cb72a4cdabb52d710f73ba3"
  },
  {
    "url": "diary/20220609063943.html",
    "revision": "d0a30617c513f165769e3926f40d2a94"
  },
  {
    "url": "diary/20220609070011.html",
    "revision": "6f2f1dd6adf025ad8bb5180ee03d41d9"
  },
  {
    "url": "diary/20220610142532.html",
    "revision": "b6ec1fc7036b96b039560b491ba17b48"
  },
  {
    "url": "diary/20220611005543.html",
    "revision": "232a0e4f9744840d8cd59b9c1518c82f"
  },
  {
    "url": "diary/20220611101107.html",
    "revision": "7644d9b95f22824429ae4bd067e68f38"
  },
  {
    "url": "diary/20220611210753.html",
    "revision": "79358a275931628819abf7c9c35baf99"
  },
  {
    "url": "diary/20220611232150.html",
    "revision": "574364265ce4466836fb45c43548d933"
  },
  {
    "url": "diary/20220612010813.html",
    "revision": "c4c47088029d7e7b269d361b861ba7c1"
  },
  {
    "url": "diary/20220612124000.html",
    "revision": "f005dbb1a2400475362ab1ec32cab20f"
  },
  {
    "url": "diary/20220612220941.html",
    "revision": "5e650fda70aa3905d7a4ab965f043b6c"
  },
  {
    "url": "index.html",
    "revision": "cabc3723e804749cdf71355ab7eeaeae"
  },
  {
    "url": "list/20220507141201.html",
    "revision": "dc4d7f9a412645646ada1ccc6bed8930"
  },
  {
    "url": "list/20220608112545.html",
    "revision": "216c0190820d1fa9183ff0e088d86745"
  },
  {
    "url": "list/20220609150039.html",
    "revision": "c74c19829c7095e8a4fbd0417a0f965b"
  },
  {
    "url": "post/handbook.html",
    "revision": "8df7225923f5975de063d8b01a9960bb"
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
