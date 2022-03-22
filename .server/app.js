"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var vueRouter = require("vue-router");
require("@vue/devtools-api");
var serverRenderer = require("vue/server-renderer");
var axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
const clientAppEnhances = [];
const clientAppRootComponents = [];
const clientAppSetups = [];
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html$2;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const siteData$1 = {
  "base": "/",
  "lang": "zh-CN",
  "title": "FRUNOOB",
  "description": "living is to become stronger.",
  "head": [
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "sizes": "180x180",
        "href": "/assets/img/apple-touch-icon.png?v=1.0.0"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/assets/img/favicon-32x32.png?v=1.0.0"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/assets/img/favicon-16x16.png?v=1.0.0"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/assets/img/site.webmanifest?v=1.0.0"
      }
    ],
    [
      "link",
      {
        "rel": "mask-icon",
        "href": "/assets/img/safari-pinned-tab.svg?v=1.0.0",
        "color": "#5bbad5"
      }
    ],
    [
      "link",
      {
        "rel": "shortcut icon",
        "href": "/assets/img/favicon.ico?v=1.0.0"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#fffff8"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-title",
        "content": "F\u7684\u535A\u5BA2"
      }
    ],
    [
      "meta",
      {
        "name": "application-name",
        "content": "F\u7684\u535A\u5BA2"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#00aba9"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-config",
        "content": "/assets/img/browserconfig.xml?v=1.0.0"
      }
    ]
  ],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$1;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$1;
  }))
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404$1;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales, routePath) => {
  const localePaths = Object.keys(locales).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const routeItems = [
  ["v-8daa1a0e", "/", {}, ["/index.html", "/README.md"]],
  ["v-3706649a", "/404.html", {}, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales, routePath) => resolveLocalePath(locales, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
const data$1 = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "TypeScript",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": '"??"',
      "slug": "",
      "children": []
    },
    {
      "level": 2,
      "title": '"||"',
      "slug": "",
      "children": []
    },
    {
      "level": 2,
      "title": '"&&"',
      "slug": "",
      "children": []
    }
  ],
  "git": {
    "createdTime": 1647927698e3,
    "updatedTime": 1647927698e3,
    "contributors": [
      {
        "name": "frunoob",
        "email": "frunoob@163.com",
        "commits": 1
      }
    ]
  }
};
var index_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {}
};
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1>TypeScript</h1><h2>&quot;??&quot;</h2><p>NaN, 0, void 0, undefined, &quot;&quot;, null, false . above all of them are considered to be falsy in javascript. &quot;??&quot; is to omit null and undefined, until apear other value. so &quot;??&quot; is just use to jump over null and undefined, when appear first value that not be the (null and undefined), it will return that value.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>console.log(false ?? null); // false
console.log(null ?? false); // false
console.log(undefined ?? null); // null
console.log(undefined ?? NaN); // NaN
console.log(undefined ?? null ?? void 0 ?? false); // false PS. void 0 actually means undefined
</code></pre></div><h2>&quot;||&quot;</h2><p>&quot;||&quot; is use to discard values that are considered as falsy,return the true value.It will return the last one,if there is no true value.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>console.log(false || true); // true
console.log(0 || 1); // 1
console.log(NaN || &quot;A&quot;); // &quot;A&quot;
console.log(void 0 || 0o12); // 10
console.log(undefined || 0b11); //3
console.log(null || &#39;a&#39;); // &#39;a&#39;
console.log(false || 0 || NaN || void 0 || null || undefined || true); // true
console.log(false || 0 || NaN || void 0 || null || undefined); // undefined
</code></pre></div><h2>&quot;&amp;&amp;&quot;</h2><p>&quot;&amp;&amp;&quot; is use to discard values that are considered as true value, until apear false value .It will return the last one,if there is no false value.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>{
console.log( void 0 &amp;&amp; undefined); //undefined
console.log(null &amp;&amp; undefined); //null
let str:string =&#39;2&#39;; 
let int:Number = 1;
console.log(str &amp;&amp; int) // 1
console.log(100 &amp;&amp; true); //true
}
</code></pre></div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var _404_html = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
var _404_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html
}, Symbol.toStringTag, { value: "Module" }));
var _404_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "body" }, _attrs))}><p>404 not found</p><a href="/">HOME</a></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../vuepress-theme-simplest/lib/layouts/404.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
var _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  data() {
    return {};
  },
  methods: {
    getDate(timestamp) {
      var time = new Date(timestamp);
      var year = time.getFullYear();
      var month = time.getMonth();
      var date = time.getDate();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      return date + "/" + month + "/" + year + "," + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><hr></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../vuepress-theme-simplest/lib/components/Git.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Git = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
var ChatRobot_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      temp: "",
      Data: "",
      question: "",
      apikey: [
        "55b25e23082e441e84de8a373224266c",
        "291907d108d94321b55de817a84fff87",
        "b87725aedecb4889b2c30800f383c31c",
        "a0a8c0339c8d43ebb454e52cbce12795",
        "1114e398fb164e58aa24e219a37e1e3d"
      ],
      num: 0,
      userId: ""
    };
  },
  methods: {
    getResults() {
      axios__default["default"].get("https://openapi.tuling123.com/openapi/api/v2", {
        params: {
          reqType: 0,
          perception: {
            inputText: {
              text: "\u9644\u8FD1\u7684\u9152\u5E97"
            },
            selfInfo: {
              location: {
                city: "\u5317\u4EAC",
                province: "\u5317\u4EAC",
                street: "\u4FE1\u606F\u8DEF"
              }
            }
          },
          userInfo: {
            apiKey: "55b25e23082e441e84de8a373224266c",
            userId: "frunoob"
          }
        }
      }).then((res) => {
        if (res.data.code === 200) {
          this.Data = res.data;
        }
      });
    },
    get() {
      this.checkoutUserId();
      if (this.question != "") {
        axios__default["default"].get("https://www.tuling123.com/openapi/api", {
          params: {
            key: this.apikey[this.num],
            info: this.question,
            userid: this.userId
          }
        }).then((res) => {
          console.log("\u73B0\u5728\u662F" + (this.num + 1) + "\u53F7\u673A\u5668\u4EBA\u4E3A\u60A8\u670D\u52A1!(\u8FD8\u6709" + (this.apikey.length - this.num - 1) + "\u4E2A\u673A\u5668\u4EBA\u7B49\u5F85\u4E3A\u4F60\u670D\u52A1\uFF01)");
          if (res.status === 200) {
            if (res.data.code !== 1e5) {
              if (this.num < this.apikey.length - 1) {
                this.num++;
                this.question = this.temp;
                this.get();
              } else {
                this.Data = "\u54C0\u5BB6\u8EAB\u4F53\u6B20\u5B89\uFF0C\u54B1\u660E\u65E5\u804A\u3002";
              }
            } else {
              this.Data = res.data.text;
            }
          }
        });
        this.temp = this.question;
        this.question = "";
      } else {
        this.Data = "\u4F60\u5565\u90FD\u6CA1\u8F93\u5165\u5462";
      }
    },
    generateUUID() {
      var d = new Date().getTime();
      var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : r & 3 | 8).toString(16);
      });
      return uuid;
    },
    checkoutUserId() {
      if (localStorage.getItem("frunoob-kali-robots") != null) {
        this.userId = localStorage.getItem("frunoob-kali-robots");
      } else {
        this.userId = this.generateUUID();
        localStorage.setItem("frunoob-kali-robots", this.userId);
      }
    }
  },
  mounted() {
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../vuepress-theme-simplest/lib/components/ChatRobot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Layout_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "body" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(Git, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../vuepress-theme-simplest/lib/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
