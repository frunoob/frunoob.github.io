if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,d,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+e.slice(1)};return Promise.all(d.map((e=>{switch(e){case"exports":return a;case"module":return r;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(s){"use strict";s.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.7d90534d.css",revision:"95d597548fbd428455ba3b61d02f632d"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/10.3ac11bb3.js",revision:"c993850c345eac90277febce52438ba2"},{url:"assets/js/11.efbbf71d.js",revision:"676e3d72ea644753154e1f657ea0bd2d"},{url:"assets/js/12.94c16b1a.js",revision:"00951978805c94ddcd619ebe8fd0aafa"},{url:"assets/js/13.194e7220.js",revision:"19e840baf08f57a30eff0586025a10d9"},{url:"assets/js/14.3fe7ab5e.js",revision:"ccf1224e7f6638f66514af05c9adc0a3"},{url:"assets/js/15.cefb0424.js",revision:"a29b385bac758af71b1a8318e0cd29ba"},{url:"assets/js/16.0634265a.js",revision:"c90c00ff541b354577914f82428834d1"},{url:"assets/js/17.b1078a9d.js",revision:"f648d7a16d5e77eb751ec698c3b06663"},{url:"assets/js/18.b138cfe6.js",revision:"520f1c484a13a97b9b75e3588133a67d"},{url:"assets/js/19.dcc409c4.js",revision:"d828a3bb277f137af2684ef6ed84a85c"},{url:"assets/js/2.b7b73b02.js",revision:"1b92a016641422c09a063f1b77e6dfd4"},{url:"assets/js/20.dbc3ca28.js",revision:"f5ecddfad4a6ee5594b189b0879e0e96"},{url:"assets/js/21.cb281e63.js",revision:"1221469667db0fedb340f448b72847ef"},{url:"assets/js/22.dffcb4a2.js",revision:"c1e550620f4a5f62090dbc5d816596e5"},{url:"assets/js/23.f08aaec2.js",revision:"2dc332fba1c2648686f6f710127d135e"},{url:"assets/js/24.78e217ac.js",revision:"e21d1b729fd2b22511f75ac6810b230e"},{url:"assets/js/25.c96aaa39.js",revision:"63e51ee12d20c6e0d1f3d319afc235e6"},{url:"assets/js/26.c2ff047a.js",revision:"48aca8a0446330275c5f5e10a4f5304e"},{url:"assets/js/27.641040d8.js",revision:"98dfb380d33686ee8944d88700ad2e85"},{url:"assets/js/28.5daf7b41.js",revision:"568c9dd3824ad1fa8a454cd88a499a56"},{url:"assets/js/29.421581b1.js",revision:"9cb4bef306c621dfd23d8a32ab0e33db"},{url:"assets/js/3.b56c2ef0.js",revision:"699b7f164e4257b8b0420a5ee5cc1ac1"},{url:"assets/js/30.d6217c8b.js",revision:"d7e0d547c55b3db70aa2e2d738eb8259"},{url:"assets/js/31.55b2673f.js",revision:"7834387999c5a1ae9de8ffa10ecfe9dc"},{url:"assets/js/32.4fdd5b10.js",revision:"c9ff84a7968ce64aab6028e73aa0702c"},{url:"assets/js/33.2cf31b1c.js",revision:"7dfc3c76e9064e91307f4f316256a988"},{url:"assets/js/34.ff887c8d.js",revision:"0a3aa15ea1eb99bc188cabe8f6567dc0"},{url:"assets/js/35.ee620dbb.js",revision:"b5502b0547d9ea87f5f86eae72dc7097"},{url:"assets/js/36.787fe643.js",revision:"7264505715cc1628a652abab2a517169"},{url:"assets/js/37.068986d5.js",revision:"d211499695cdf6123f3bbb12964b5733"},{url:"assets/js/38.58db5461.js",revision:"b0dc36455b6460c6baa49a8b0e0aeb3b"},{url:"assets/js/39.54d36d75.js",revision:"3721346e9ed96be26f74b71b2f018f75"},{url:"assets/js/4.b9b17cef.js",revision:"81824bd37e523b74ebe30642c7f89901"},{url:"assets/js/40.6600b415.js",revision:"be92713b878d62826b08fe1d350052e1"},{url:"assets/js/5.afd833a2.js",revision:"704a167891f1ea0e7b5b3de1ac65aad3"},{url:"assets/js/6.d8035309.js",revision:"4e98338d43dc4a3116cc4af75d12ef78"},{url:"assets/js/7.e3702697.js",revision:"80f6d3204cf6d0c022622fab8482298a"},{url:"assets/js/8.e593bd5d.js",revision:"c5f034e233f549833778011d864d19bc"},{url:"assets/js/9.8818360a.js",revision:"e6b0b6e7bec7d515264b2dd5c707c430"},{url:"assets/js/app.4a6915c5.js",revision:"ca09a28693a1c5205498929cd6387075"},{url:"404.html",revision:"a0ec8db8faa0b8368973e1e185ec3919"},{url:"book/books/hushitandushuyuzuoren.html",revision:"d38290a28a369179edd7a4ca652abc9d"},{url:"book/books/javaScriptgaojichengxvsheji.html",revision:"7813192b053ba27fac8f93c29da95c16"},{url:"book/books/suanfatujie.html",revision:"4416b0e60ebb9640c92285d027f84d92"},{url:"book/books/tujieHTTP.html",revision:"2d13739e952447fe62f589d2a10dd7de"},{url:"book/books/what-make-love-last.html",revision:"1bd68784f421d8bb83d848985877a069"},{url:"book/index.html",revision:"8b34c04e31a1e8ac778ba4a1e58c0264"},{url:"index.html",revision:"926caed935576826faf5673c200cf485"},{url:"memo/memo.html",revision:"8a889da8dfe00c33257c13641f2b3737"},{url:"post/useOfBlog.html",revision:"ecac6db16a11f215c0ac4ca27ebe24f8"},{url:"study/dilixinxi/xiti.html",revision:"399dc7a9e7807251da66caa79be15160"},{url:"study/english/words.html",revision:"196af08a0bae9d336cbe3145fbff45e7"},{url:"study/jisuanjiqianyan/zuoye-01.html",revision:"2be30de41d143fa2f3fab7d475d8c311"},{url:"study/math/cuoti.html",revision:"1a8f0528393d39f7ebaf19b7418638a1"},{url:"study/math/gaoshu.html",revision:"ab13963297d848c1439e1d0bdfea5ca1"},{url:"study/math/gongshi.html",revision:"f198ec03ce7157d696d6b58977eef00c"},{url:"task/2020-7-2021-3.html",revision:"d7944f8802aa3fea998105ce81f50c00"},{url:"task/2021-4-28.html",revision:"1bcc3282705410eb730fb0be6eb5c8ac"},{url:"task/2021-4-29.html",revision:"072cc7c8c031fa9e0e2d5d10afc4a0ce"},{url:"task/2021-4-30.html",revision:"4f5bd773d06088fa43bf7ba0226e7ef2"},{url:"task/2021-5-12.html",revision:"70ae453576dfc620c03a3feaccc1bd04"},{url:"task/2021-5-13.html",revision:"3e4944b927f55ebd751a61bd07d5a549"},{url:"task/2021-5-3.html",revision:"22e333b6ab0dc8b992b9efdaa36cf997"},{url:"task/2021-5-6.html",revision:"bcadcd19d878f878c015a9a53be9ce92"},{url:"task/2021/04/21.html",revision:"65af1d5b3cd4a9ef69a2d5f164be7b83"},{url:"task/2021/04/22.html",revision:"a9ad879f9d153de371b59add9b0cab47"},{url:"task/2021/04/23.html",revision:"02c3dbc2b67e5db720d1643999d9253c"},{url:"task/2021/04/24.html",revision:"edc190aac614e6a63b11e9953fe782b4"},{url:"task/2021/04/25.html",revision:"ec4dda9f10c27f1f0da5758a3624f0d5"},{url:"task/2021/04/27.html",revision:"04a2a2dfc361f1a612e7a84bf540d42b"},{url:"task/2021511.html",revision:"ecdd4470b78c00ff9e0e8044afbd1b9b"},{url:"task/2021514.html",revision:"9796d9d5a70a1d27fbd70a56eca9a391"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
