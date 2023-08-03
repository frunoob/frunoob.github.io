(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{525:function(t,a,e){"use strict";e.r(a);var s=e(5),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-spring-boot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-spring-boot"}},[t._v("#")]),t._v(" react|spring boot")]),t._v(" "),e("p",[t._v("https://spring.io/guides/tutorials/react-and-spring-data-rest/")]),t._v(" "),e("h2",{attrs:{id:"immutability-react"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#immutability-react"}},[t._v("#")]),t._v(" immutability|react")]),t._v(" "),e("p",[t._v("底层数据不变性。"),e("br"),t._v("\n我们可以直接对原数据进行修改，也可以生成原数据的副本，对副本进行修改，最后将整个副本覆盖原数据，那么，这么做的意义是？")]),t._v(" "),e("p",[t._v("首先我们要知道，每当修改属性state时（前提是使用useState函数声明并初始化属性），react都是重新渲染该属性所在组件。")]),t._v(" "),e("p",[t._v("react的setState是异步的，在当前已经执行的代码里面可能不会立即生效，虽然渲染视图了，但是代码里调用这个变量，他仍然是原来的值。")]),t._v(" "),e("p",[t._v("这时，就要创建副本来记录值的变化，并能够被获取得到。")]),t._v(" "),e("p",[t._v("html tag 写在 js中就叫做   jsx javascript xml")]),t._v(" "),e("h2",{attrs:{id:"nextjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nextjs"}},[t._v("#")]),t._v(" nextjs")]),t._v(" "),e("p",[t._v("最新版本的next框架不再使用pages作为路由目录，而是改用app路由  "),e("a",{attrs:{href:"https://nextjs.org/docs/getting-started/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("layout.tsx相当于模板，所有页面都建立在该模板之上，由next框架自动生成，而page.tsx则是next框架所必须的文件，用于展示首页，就是通过 http://localhost:3000/ 连接会直接打开page.tsx这个文件，如果没有page.tsx这个文件，在执行\n"),e("code",[t._v("npm run dev")]),t._v("这个命令的时候，就会自动生成该文件。")]),t._v(" "),e("p",[t._v("next不再通过 文件名字作为路径的访问地址，而是page所在文件夹的名字，例如 想要打开以下路径的文件的内容 "),e("code",[t._v("app/page.tsx")]),t._v("，就需要访问地址 localhost:3000/,\n再比如，想要新建一个路由叫做 "),e("code",[t._v("/test/")]),t._v(",那就需要在app目录下新建一个目录，名字叫做"),e("code",[t._v("test")]),t._v("，然后在test目录下创建一个名为"),e("code",[t._v("page.tsx")]),t._v("的文件，注意page.tsx必须叫page不能叫别的名字，不然无效。")]),t._v(" "),e("p",[t._v("想要了解更多有关路由的信息  https://nextjs.org/docs/app/building-your-application/routing/defining-routes")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("/test/hello 和 /test/hello/ 一样吗")]),t._v(" "),e("p",[t._v("不一样，对于接口来说后者是错误的，无法访问的，找不到的")])]),t._v(" "),e("p",[t._v("https://gitee.com/frunoob_admin/frunoobservice.git")]),t._v(" "),e("h2",{attrs:{id:"swr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swr"}},[t._v("#")]),t._v(" SWR")]),t._v(" "),e("p",[t._v("一个能在react客户组件进行fetch请求的库。\nhttps://swr.vercel.app/zh-CN/docs/data-fetching")]),t._v(" "),e("h2",{attrs:{id:"axios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" axios")]),t._v(" "),e("p",[t._v("更加方便的http请求工具"),e("br"),t._v("\nhttps://www.axios-http.cn/docs/instance")]),t._v(" "),e("h2",{attrs:{id:"expo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expo"}},[t._v("#")]),t._v(" expo")]),t._v(" "),e("p",[t._v("用于开发android  ios   webapp的框架")]),t._v(" "),e("p",[t._v("支持局域网下真机调试")]),t._v(" "),e("h3",{attrs:{id:"figma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figma"}},[t._v("#")]),t._v(" figma")]),t._v(" "),e("p",[t._v("https://www.figma.com/")]),t._v(" "),e("p",[t._v("To create a splash image, you can use this Figma template. It provides a bare minimum design for an icon and splash images for Android and iOS.")]),t._v(" "),e("h3",{attrs:{id:"detect-the-color-scheme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detect-the-color-scheme"}},[t._v("#")]),t._v(" Detect the color scheme")]),t._v(" "),e("p",[t._v("如果要项目自动切换主题颜色，需要增加一些"),e("a",{attrs:{href:"https://docs.expo.dev/develop/user-interface/color-themes/#configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import { Appearance, useColorScheme } from 'react-native';\n\nfunction MyComponent() {\n  let colorScheme = useColorScheme();\n\n  if (colorScheme === 'dark') {\n    // render some dark thing\n  } else {\n    // render some light thing\n  }\n}\n\n\nconst colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n\n")])])]),e("p",[t._v("useColorScheme：当项目的主题改变时，会重新渲染页面")]),t._v(" "),e("p",[t._v("Appearance: 当项目主题改变时，不会重新渲染页面")]),t._v(" "),e("h3",{attrs:{id:"animation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" Animation")]),t._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx expo install react-native-reanimated \n")])])]),e("p",[t._v("After the installation completes, add the Babel plugin to babel.config.js:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cache")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    presets"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-preset-expo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native-reanimated/plugin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("after that, clear bundle cache use command like "),e("code",[t._v("npx expo start --clear")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If you load other Babel plugins, the Reanimated plugin has to be the last item in the plugins array.")])]),t._v(" "),e("p",[t._v("for web, install the "),e("code",[t._v("yarn add --dev @babel/plugin-transform-export-namespace-from")])]),t._v(" "),e("p",[t._v("and add it to babel.config.js")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("plugins: [\n  '@babel/plugin-proposal-export-namespace-from',\n  'react-native-reanimated/plugin',\n],\n\n")])])]),e("p",[t._v("don't forget to clear cache, use command "),e("code",[t._v("npx expo start --clear")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("reanimated手册")]),t._v(" "),e("p",[t._v("https://docs.swmansion.com/react-native-reanimated/docs/")])]),t._v(" "),e("h3",{attrs:{id:"moti-另一个动画库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#moti-另一个动画库"}},[t._v("#")]),t._v(" moti|另一个动画库")]),t._v(" "),e("p",[t._v("https://moti.fyi/")]),t._v(" "),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=n.exports}}]);