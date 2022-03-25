(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{312:function(t,a,s){"use strict";s.r(a);var v=s(4),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"password",fn:function(){return[s("p",[t._v("这是隐藏内容")])]},proxy:!0}])},[s("h1",{attrs:{id:"博客使用备忘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#博客使用备忘"}},[t._v("#")]),t._v(" 博客使用备忘")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("目录")]),s("br")]),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#时间戳timestamp"}},[t._v("时间戳timestamp")]),s("ul",[s("li",[s("a",{attrs:{href:"#transformer"}},[t._v("transformer")])]),s("li",[s("a",{attrs:{href:"#moment-js"}},[t._v("moment.js")])])])]),s("li",[s("a",{attrs:{href:"#使用容器"}},[t._v("使用容器")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1、summary"}},[t._v("1、summary")])]),s("li",[s("a",{attrs:{href:"#_2、code"}},[t._v("2、code")])]),s("li",[s("a",{attrs:{href:"#_3、right"}},[t._v("3、right")])]),s("li",[s("a",{attrs:{href:"#_4、toshow"}},[t._v("4、toshow")])]),s("li",[s("a",{attrs:{href:"#_5、tip"}},[t._v("5、tip")])]),s("li",[s("a",{attrs:{href:"#_6、tocenter"}},[t._v("6、tocenter")])]),s("li",[s("a",{attrs:{href:"#_7、warning"}},[t._v("7、warning")])]),s("li",[s("a",{attrs:{href:"#_8、danger"}},[t._v("8、danger")])]),s("li",[s("a",{attrs:{href:"#_9、password"}},[t._v("9、password")])]),s("li",[s("a",{attrs:{href:"#_10、details"}},[t._v("10、details")])])])]),s("li",[s("a",{attrs:{href:"#插件"}},[t._v("插件")]),s("ul",[s("li",[s("a",{attrs:{href:"#vuepress-plugin-container"}},[t._v("vuepress-plugin-container")])]),s("li",[s("a",{attrs:{href:"#vuepress-plugin-medium-zoom"}},[t._v("vuepress-plugin-medium-zoom")])]),s("li",[s("a",{attrs:{href:"#copyright"}},[t._v("copyright")])]),s("li",[s("a",{attrs:{href:"#vuepress-plugin-mathjax"}},[t._v("vuepress-plugin-mathjax")])]),s("li",[s("a",{attrs:{href:"#last-updated"}},[t._v("last-updated")])]),s("li",[s("a",{attrs:{href:"#back-to-top"}},[t._v("back-to-top")])]),s("li",[s("a",{attrs:{href:"#vuepress-plugin-table-of-contents"}},[t._v("vuepress-plugin-table-of-contents")])]),s("li",[s("a",{attrs:{href:"#解决单页面刷新404问题"}},[t._v("解决单页面刷新404问题")])])])]),s("li",[s("a",{attrs:{href:"#样式调整"}},[t._v("样式调整")]),s("ul",[s("li",[s("a",{attrs:{href:"#代码块自动换行"}},[t._v("代码块自动换行")])]),s("li",[s("a",{attrs:{href:"#鼠标放到图片上显示提示文字"}},[t._v("鼠标放到图片上显示提示文字")])]),s("li",[s("a",{attrs:{href:"#超链接"}},[t._v("超链接")])]),s("li",[s("a",{attrs:{href:"#表格"}},[t._v("表格")])]),s("li",[s("a",{attrs:{href:"#代码段"}},[t._v("代码段")])]),s("li",[s("a",{attrs:{href:"#滚动条显示"}},[t._v("滚动条显示")])])])])])]),s("p")]),t._v(" "),s("h2",{attrs:{id:"时间戳timestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间戳timestamp"}},[t._v("#")]),t._v(" 时间戳timestamp")]),t._v(" "),s("h3",{attrs:{id:"transformer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transformer"}},[t._v("#")]),t._v(" transformer")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("(timestamp: number, lang: string) => string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")]),t._v("默认情况下，本插件为每个页面生成一个 13 位的时间戳，你可以传入一个 transformer 将其转换为你想要的任何格式。")])]),t._v(" "),s("p",[s("strong",[t._v("用法：")])]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v("js")]),s("pre",[s("p",[t._v("module.exports ={\nplugins:[\n[\n'@vuepress/last-updated',\n{\ntransformer:(timestamp, lang)=>{\n// 不要忘了安装 moment\nconst moment =require('moment')\nmoment.locale(lang)\nreturn moment(timestamp).fromNow()\n}\n}\n]\n]\n}")]),t._v("\n")])]),s("h3",{attrs:{id:"moment-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#moment-js"}},[t._v("#")]),t._v(" moment.js")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装依赖"),s("br"),t._v(" "),s("code",[t._v("npm install -D moment")])])]),t._v(" "),s("li",[s("p",[t._v("在vuepress中引用\n"),s("code",[t._v('plugins: ["@vuepress/last-updated"]')])])]),t._v(" "),s("li",[s("p",[t._v("在需要使用时间转换的页面定义")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const moment = require('moment')\nvar createTime = '2019-11-08 12:08:09'\ncreateTime = moment(createTime).format('YYYY-MM-DD')\nconsole.log(createTime) // '2019-11-08'\n")])])])]),t._v(" "),s("li",[s("p",[t._v("常用的时间格式")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("格式代码")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("返回值例子")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("M")]),t._v(" "),s("td",[t._v("数字表示的月份，没有前导零")]),t._v(" "),s("td",[t._v("1到12")])]),t._v(" "),s("tr",[s("td",[t._v("MM")]),t._v(" "),s("td",[t._v("数字表示的月份，有前导零")]),t._v(" "),s("td",[t._v("01到12")])]),t._v(" "),s("tr",[s("td",[t._v("MMM")]),t._v(" "),s("td",[t._v("三个字母缩写表示的月份")]),t._v(" "),s("td",[t._v("Jan到Dec")])]),t._v(" "),s("tr",[s("td",[t._v("MMMM")]),t._v(" "),s("td",[t._v("月份，完整的文本格式")]),t._v(" "),s("td",[t._v("January到December")])]),t._v(" "),s("tr",[s("td",[t._v("Q")]),t._v(" "),s("td",[t._v("季度")]),t._v(" "),s("td",[t._v("1到4")])]),t._v(" "),s("tr",[s("td",[t._v("D")]),t._v(" "),s("td",[t._v("月份中的第几天，没有前导零")]),t._v(" "),s("td",[t._v("1到31")])]),t._v(" "),s("tr",[s("td",[t._v("DD")]),t._v(" "),s("td",[t._v("月份中的第几天，有前导零")]),t._v(" "),s("td",[t._v("01到31")])]),t._v(" "),s("tr",[s("td",[t._v("d")]),t._v(" "),s("td",[t._v("星期中的第几天，数字表示")]),t._v(" "),s("td",[t._v("0到6，0表示周日，6表示周六")])]),t._v(" "),s("tr",[s("td",[t._v("ddd")]),t._v(" "),s("td",[t._v("三个字母表示星期中的第几天")]),t._v(" "),s("td",[t._v("Sun到Sat")])]),t._v(" "),s("tr",[s("td",[t._v("dddd")]),t._v(" "),s("td",[t._v("星期几，完整的星期文本")]),t._v(" "),s("td",[t._v("从Sunday到Saturday")])]),t._v(" "),s("tr",[s("td",[t._v("w")]),t._v(" "),s("td",[t._v("年份中的第几周")]),t._v(" "),s("td",[t._v("如42：表示第42周")])]),t._v(" "),s("tr",[s("td",[t._v("YYYY")]),t._v(" "),s("td",[t._v("四位数字完整表示的年份")]),t._v(" "),s("td",[t._v("如：2014 或 2000")])]),t._v(" "),s("tr",[s("td",[t._v("YY")]),t._v(" "),s("td",[t._v("两位数字表示的年份")]),t._v(" "),s("td",[t._v("如：14 或 98")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("大写的AM PM")]),t._v(" "),s("td",[t._v("AM PM")])]),t._v(" "),s("tr",[s("td",[t._v("a")]),t._v(" "),s("td",[t._v("小写的am pm")]),t._v(" "),s("td",[t._v("am pm")])]),t._v(" "),s("tr",[s("td",[t._v("HH")]),t._v(" "),s("td",[t._v("小时，24小时制，有前导零")]),t._v(" "),s("td",[t._v("00到23")])]),t._v(" "),s("tr",[s("td",[t._v("H")]),t._v(" "),s("td",[t._v("小时，24小时制，无前导零")]),t._v(" "),s("td",[t._v("0到23")])]),t._v(" "),s("tr",[s("td",[t._v("hh")]),t._v(" "),s("td",[t._v("小时，12小时制，有前导零")]),t._v(" "),s("td",[t._v("00到12")])]),t._v(" "),s("tr",[s("td",[t._v("h")]),t._v(" "),s("td",[t._v("小时，12小时制，无前导零")]),t._v(" "),s("td",[t._v("0到12")])]),t._v(" "),s("tr",[s("td",[t._v("m")]),t._v(" "),s("td",[t._v("没有前导零的分钟数")]),t._v(" "),s("td",[t._v("0到59")])]),t._v(" "),s("tr",[s("td",[t._v("mm")]),t._v(" "),s("td",[t._v("有前导零的分钟数")]),t._v(" "),s("td",[t._v("00到59")])]),t._v(" "),s("tr",[s("td",[t._v("s")]),t._v(" "),s("td",[t._v("没有前导零的秒数")]),t._v(" "),s("td",[t._v("1到59")])]),t._v(" "),s("tr",[s("td",[t._v("ss")]),t._v(" "),s("td",[t._v("有前导零的描述")]),t._v(" "),s("td",[t._v("01到59")])]),t._v(" "),s("tr",[s("td",[t._v("X")]),t._v(" "),s("td",[t._v("Unix时间戳")]),t._v(" "),s("td",[t._v("1411572969")])])])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("更改时区\n"),s("code",[t._v('moment().zone("-08:00");')]),s("br"),t._v("\n在原有时间戳的基础上 加8小时。")])]),t._v(" "),s("h2",{attrs:{id:"使用容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用容器"}},[t._v("#")]),t._v(" 使用容器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("::: <样式名称> [标题名]  \n文本、链接、图片等内容   \n:::\n")])])]),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v("可选列表")]),s("p",[t._v("样式名称：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("summary")])]),t._v(" "),s("li",[s("p",[t._v("code")])]),t._v(" "),s("li",[s("p",[t._v("right")])]),t._v(" "),s("li",[s("p",[t._v("toshow")])]),t._v(" "),s("li",[s("p",[t._v("tip")])]),t._v(" "),s("li",[s("p",[t._v("tocenter")])]),t._v(" "),s("li",[s("p",[t._v("warning")])]),t._v(" "),s("li",[s("p",[t._v("danger")])]),t._v(" "),s("li",[s("p",[t._v("password")])]),t._v(" "),s("li",[s("p",[t._v("details")])])])]),s("h3",{attrs:{id:"_1、summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、summary"}},[t._v("#")]),t._v(" 1、summary")]),t._v(" "),s("p",[t._v("样式名："),s("strong",[t._v("summary")]),t._v(" ; 标题名为："),s("strong",[t._v("感悟")]),t._v("  ; 内容为："),s("strong",[t._v("美好的第一天")])]),t._v(" "),s("p",[t._v("以下是显示结果：")]),t._v(" "),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v("感悟")]),s("p",[t._v("美好的第一天")])]),s("h3",{attrs:{id:"_2、code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、code"}},[t._v("#")]),t._v(" 2、code")]),t._v(" "),s("p",[t._v("样式名："),s("strong",[t._v("code")]),t._v(" ; 标题名为："),s("strong",[t._v("Hello.c")]),t._v("  ; 内容为："),s("strong",[t._v('printf("Hello world!")')])]),t._v(" "),s("p",[t._v("以下是显示结果：")]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v("Hello.c")]),s("pre",[s("p",[t._v('printf("Hello world!")')]),t._v("\n")])]),s("h3",{attrs:{id:"_3、right"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、right"}},[t._v("#")]),t._v(" 3、right")]),t._v(" "),s("p",[t._v("样式名："),s("strong",[t._v("right")]),t._v(" ; 标题名为："),s("strong",[t._v("-- 爱因斯坦")]),t._v("  ;内容是：成功=艰苦的劳动+正确的方法+少说空话。")]),t._v(" "),s("p",[t._v("以下是显示结果：")]),t._v(" "),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v("成功=艰苦的劳动+正确的方法+少说空话。")]),s("div",{staticClass:"custom-block right"},[s("p",{staticClass:"custom-block-title"},[t._v("-- 爱因斯坦")])])]),s("h3",{attrs:{id:"_4、toshow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、toshow"}},[t._v("#")]),t._v(" 4、toshow")]),t._v(" "),s("p",[t._v("样式名："),s("strong",[t._v("toshow")]),t._v(" ; 标题名为："),s("strong",[t._v("hello")]),t._v("  ; 内容为："),s("strong",[t._v("你好")])]),t._v(" "),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v("提示")]),s("p",[t._v("试试将鼠标移动到“你好”上面。")])]),s("p",[t._v("以下是显示结果：")]),t._v(" "),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v(".")]),s("div",{staticClass:"toshow"},[s("span",{staticClass:"left"},[t._v("hello")]),s("span",{staticClass:"right"},[s("p",[t._v("你好")])])])]),s("h3",{attrs:{id:"_5、tip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、tip"}},[t._v("#")]),t._v(" 5、tip")]),t._v(" "),s("p",[t._v("样式名："),s("strong",[t._v("tip")]),t._v(" ; 标题名"),s("strong",[t._v("welcome")]),t._v(" ; 内容："),s("strong",[t._v("大家好")])]),t._v(" "),s("p",[t._v("以下是显示结果：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("welcome")]),t._v(" "),s("p",[t._v("大家好")])]),t._v(" "),s("h3",{attrs:{id:"_6、tocenter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、tocenter"}},[t._v("#")]),t._v(" 6、tocenter")]),t._v(" "),s("p",[t._v("样式名："),s("strong",[t._v("tocenter")]),t._v("  内容是：”这个文本将会居中“")]),t._v(" "),s("p",[t._v("以下是显示结果：")]),t._v(" "),s("div",{staticClass:"tocenter"},[s("p",[t._v("这个文本将会居中")])]),s("h3",{attrs:{id:"_7、warning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、warning"}},[t._v("#")]),t._v(" 7、warning")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("这是一个警告")]),t._v(" "),s("p",[t._v("警告")])]),t._v(" "),s("h3",{attrs:{id:"_8、danger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、danger"}},[t._v("#")]),t._v(" 8、danger")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("这是一个危险")]),t._v(" "),s("p",[t._v("危险")])]),t._v(" "),s("h3",{attrs:{id:"_9、password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、password"}},[t._v("#")]),t._v(" 9、password")]),t._v(" "),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v("例子")]),s("p",[t._v("：：： slot password")]),t._v(" "),s("p",[t._v("内容")]),t._v(" "),s("p",[t._v("：：：\n"),s("code",[t._v("<password/>")])])]),s("p",[t._v("效果如下：")]),t._v(" "),s("password"),t._v(" "),s("h3",{attrs:{id:"_10、details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、details"}},[t._v("#")]),t._v(" 10、details")]),t._v(" "),s("p",[t._v("折叠内容")]),t._v(" "),s("h2",{attrs:{id:"插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),s("h3",{attrs:{id:"vuepress-plugin-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[t._v("#")]),t._v(" vuepress-plugin-container")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("可以多次配置这个插件")])]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v("config.js")]),s("pre",[s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("[\n  'vuepress-plugin-container',\n  {\n    type: 'toshow',\n    // info 代表了标题变量\n    //before指的是要插入到内容前面的\n    before: info => `<div class=\"toshow\"><span class=\"left\">${info}</span><span class=\"right\">`,\n    // after表示要插入到内容后面的\n    after: '</span></div >',\n    defaultTitle:{\n      '/':\"点击显示\"\n    }\n  },\n],\n")])])])])]),s("h3",{attrs:{id:"vuepress-plugin-medium-zoom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-medium-zoom"}},[t._v("#")]),t._v(" vuepress-plugin-medium-zoom")]),t._v(" "),s("p",[t._v("实现了点击图片放大的功能。")]),t._v(" "),s("h3",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" copyright")]),t._v(" "),s("p",[t._v("当网页访问者要复制网页中的内容时，此插件控制了用户能否复制，最多复制文字数量，能否拖选文字，或者当复制的文字自动添加上版权标识。")]),t._v(" "),s("h3",{attrs:{id:"vuepress-plugin-mathjax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-mathjax"}},[t._v("#")]),t._v(" vuepress-plugin-mathjax")]),t._v(" "),s("p",[t._v("支持数学公式")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("公式")]),t._v(" "),s("th",[t._v("渲染后")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("$A\\stackrel{F}{\\longrightarrow}$B")])]),t._v(" "),s("td",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8.377ex",height:"2.948ex",viewBox:"0 -1291.8 3702.6 1302.8"}},[s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"41",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),s("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(1027.8, 0)"}},[s("g",{attrs:{"data-mml-node":"mover"}},[s("g",{attrs:{"data-mml-node":"TeXAtom"}},[s("g",{attrs:{"data-mml-node":"mo"}},[s("path",{attrs:{"data-c":"27F6",d:"M84 237T84 250T98 270H1444Q1328 357 1301 493Q1301 494 1301 496T1300 499Q1300 511 1317 511H1320Q1329 511 1332 510T1338 506T1341 497T1344 481T1352 456Q1374 389 1425 336T1544 261Q1553 258 1553 250Q1553 244 1548 241T1524 231T1486 212Q1445 186 1415 152T1370 85T1349 35T1341 4Q1339 -6 1336 -8T1320 -11Q1300 -11 1300 0Q1300 7 1305 25Q1337 151 1444 230H98Q84 237 84 250Z"}})])]),s("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(554.2, 711) scale(0.707)"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("path",{attrs:{"data-c":"46",d:"M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"}})])])])]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(2943.6, 0)"}},[s("path",{attrs:{"data-c":"42",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"}})])])])])])],1)])])]),t._v(" "),s("h3",{attrs:{id:"last-updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-updated"}},[t._v("#")]),t._v(" last-updated")]),t._v(" "),s("p",[t._v("显示文章最后提交的时间")]),t._v(" "),s("h3",{attrs:{id:"back-to-top"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back-to-top"}},[t._v("#")]),t._v(" back-to-top")]),t._v(" "),s("p",[t._v("当页面向下滑动了，便会出现回到顶部按钮")]),t._v(" "),s("h3",{attrs:{id:"vuepress-plugin-table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-table-of-contents"}},[t._v("#")]),t._v(" vuepress-plugin-table-of-contents")]),t._v(" "),s("p",[t._v("生成目录 ，再md和vue中直接使用")]),t._v(" "),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v("参数")]),s("p",[s("em",[t._v("includeLevel")]),s("br"),t._v("\n类型: [number, number]"),s("br"),t._v("\n默认值: [2, 3]"),s("br"),t._v("\n组件包含的标题范围。")]),t._v(" "),s("p",[t._v("例如，[2, 4] 代表 2 <= x <= 4 。")]),t._v(" "),s("p",[s("code",[t._v('<TOC :include-level="[2, 4]" />')])])]),s("h3",{attrs:{id:"解决单页面刷新404问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决单页面刷新404问题"}},[t._v("#")]),t._v(" 解决单页面刷新404问题")]),t._v(" "),s("p",[t._v("vuepress-plugin-redirect"),s("br"),t._v("\n自动重定向，非常的nice")]),t._v(" "),s("h2",{attrs:{id:"样式调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式调整"}},[t._v("#")]),t._v(" 样式调整")]),t._v(" "),s("h3",{attrs:{id:"代码块自动换行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块自动换行"}},[t._v("#")]),t._v(" 代码块自动换行")]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v("index.styl")]),s("pre",[s("p",[t._v("white-space: pre-wrap;\nword-wrap: break-word;")]),t._v("\n")])]),s("h3",{attrs:{id:"鼠标放到图片上显示提示文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鼠标放到图片上显示提示文字"}},[t._v("#")]),t._v(" 鼠标放到图片上显示提示文字")]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v(".md")]),s("pre",[s("p",[s("code",[t._v('![vue官网logo](https://cn.vuejs.org/images/logo.png "vue官网logo")')])]),t._v("\n")])]),s("blockquote",[s("p",[t._v('此时缩放不起作用，需要将"vue官方logo"这个文本删掉才行。')])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cn.vuejs.org/images/logo.png",alt:"vue官网logo",title:"vue官网logo"}})]),t._v(" "),s("h3",{attrs:{id:"超链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超链接"}},[t._v("#")]),t._v(" 超链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v("百度链接")]),s("pre",[s("p",[s("code",[t._v("[百度](http://baidu.com)")])]),t._v("\n")])]),s("h3",{attrs:{id:"表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v(".md")]),s("pre",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("表头|表头|表头\n:---:|:--:|:---:\n内容|内容|内容\n内容|内容|内容\n")])])])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("表头")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("表头")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("表头")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("内容")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("内容")])])])]),t._v(" "),s("h3",{attrs:{id:"代码段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码段"}},[t._v("#")]),t._v(" 代码段")]),t._v(" "),s("div",{staticClass:"tocenter"},[s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/blog/20210424161901.png",alt:""}})])]),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v("C")]),s("pre",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('printf("你好");\n\n')])])])])]),s("h3",{attrs:{id:"滚动条显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滚动条显示"}},[t._v("#")]),t._v(" 滚动条显示")]),t._v(" "),s("div",{staticClass:"mycode"},[s("p",{staticClass:"mycode-title"},[t._v("css index.styl")]),s("pre",[s("p",[t._v("overflow auto")]),t._v("\n")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);