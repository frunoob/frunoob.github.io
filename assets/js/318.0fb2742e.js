(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{522:function(t,e,a){"use strict";a.r(e);var s=a(5),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-spring-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-spring-boot"}},[t._v("#")]),t._v(" react|spring boot")]),t._v(" "),a("p",[t._v("https://spring.io/guides/tutorials/react-and-spring-data-rest/")]),t._v(" "),a("h2",{attrs:{id:"immutability-react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immutability-react"}},[t._v("#")]),t._v(" immutability|react")]),t._v(" "),a("p",[t._v("底层数据不变性。"),a("br"),t._v("\n我们可以直接对原数据进行修改，也可以生成原数据的副本，对副本进行修改，最后将整个副本覆盖原数据，那么，这么做的意义是？")]),t._v(" "),a("p",[t._v("首先我们要知道，每当修改属性state时（前提是使用useState函数声明并初始化属性），react都是重新渲染该属性所在组件。")]),t._v(" "),a("p",[t._v("react的setState是异步的，在当前已经执行的代码里面可能不会立即生效，虽然渲染视图了，但是代码里调用这个变量，他仍然是原来的值。")]),t._v(" "),a("p",[t._v("这时，就要创建副本来记录值的变化，并能够被获取得到。")]),t._v(" "),a("p",[t._v("html tag 写在 js中就叫做   jsx javascript xml")]),t._v(" "),a("h2",{attrs:{id:"nextjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextjs"}},[t._v("#")]),t._v(" nextjs")]),t._v(" "),a("p",[t._v("最新版本的next框架不再使用pages作为路由目录，而是改用app路由  "),a("a",{attrs:{href:"https://nextjs.org/docs/getting-started/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("layout.tsx相当于模板，所有页面都建立在该模板之上，由next框架自动生成，而page.tsx则是next框架所必须的文件，用于展示首页，就是通过 http://localhost:3000/ 连接会直接打开page.tsx这个文件，如果没有page.tsx这个文件，在执行\n"),a("code",[t._v("npm run dev")]),t._v("这个命令的时候，就会自动生成该文件。")]),t._v(" "),a("p",[t._v("next不再通过 文件名字作为路径的访问地址，而是page所在文件夹的名字，例如 想要打开以下路径的文件的内容 "),a("code",[t._v("app/page.tsx")]),t._v("，就需要访问地址 localhost:3000/,\n再比如，想要新建一个路由叫做 "),a("code",[t._v("/test/")]),t._v(",那就需要在app目录下新建一个目录，名字叫做"),a("code",[t._v("test")]),t._v("，然后在test目录下创建一个名为"),a("code",[t._v("page.tsx")]),t._v("的文件，注意page.tsx必须叫page不能叫别的名字，不然无效。")]),t._v(" "),a("p",[t._v("想要了解更多有关路由的信息  https://nextjs.org/docs/app/building-your-application/routing/defining-routes")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("/test/hello 和 /test/hello/ 一样吗")]),t._v(" "),a("p",[t._v("不一样，对于接口来说后者是错误的，无法访问的，找不到的")])])])}),[],!1,null,null,null);e.default=r.exports}}]);