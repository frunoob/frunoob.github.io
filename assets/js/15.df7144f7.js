(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{338:function(t,v,a){"use strict";a.r(v);var s=a(26),_=Object(s.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"博客使用备忘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#博客使用备忘"}},[t._v("#")]),t._v(" 博客使用备忘")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("目录")]),a("br")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#时间戳timestamp"}},[t._v("时间戳timestamp")]),a("ul",[a("li",[a("a",{attrs:{href:"#transformer"}},[t._v("transformer")])]),a("li",[a("a",{attrs:{href:"#moment-js"}},[t._v("moment.js")])])])]),a("li",[a("a",{attrs:{href:"#使用容器"}},[t._v("使用容器")]),a("ul",[a("li",[a("a",{attrs:{href:"#例子"}},[t._v("例子")])])])]),a("li",[a("a",{attrs:{href:"#插件"}},[t._v("插件")]),a("ul",[a("li",[a("a",{attrs:{href:"#vuepress-plugin-container"}},[t._v("vuepress-plugin-container")])]),a("li",[a("a",{attrs:{href:"#vuepress-plugin-medium-zoom"}},[t._v("vuepress-plugin-medium-zoom")])]),a("li",[a("a",{attrs:{href:"#copyright"}},[t._v("copyright")])]),a("li",[a("a",{attrs:{href:"#vuepress-plugin-mathjax"}},[t._v("vuepress-plugin-mathjax")])]),a("li",[a("a",{attrs:{href:"#last-updated"}},[t._v("last-updated")])]),a("li",[a("a",{attrs:{href:"#back-to-top"}},[t._v("back-to-top")])])])]),a("li",[a("a",{attrs:{href:"#样式调整"}},[t._v("样式调整")]),a("ul",[a("li",[a("a",{attrs:{href:"#代码块自动换行"}},[t._v("代码块自动换行")])]),a("li",[a("a",{attrs:{href:"#鼠标放到图片上显示提示文字"}},[t._v("鼠标放到图片上显示提示文字")])]),a("li",[a("a",{attrs:{href:"#超链接"}},[t._v("超链接")])]),a("li",[a("a",{attrs:{href:"#表格"}},[t._v("表格")])]),a("li",[a("a",{attrs:{href:"#代码段"}},[t._v("代码段")])]),a("li",[a("a",{attrs:{href:"#滚动条显示"}},[t._v("滚动条显示")])])])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"时间戳timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间戳timestamp"}},[t._v("#")]),t._v(" 时间戳timestamp")]),t._v(" "),a("h3",{attrs:{id:"transformer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transformer"}},[t._v("#")]),t._v(" transformer")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("(timestamp: number, lang: string) => string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")]),t._v("默认情况下，本插件为每个页面生成一个 13 位的时间戳，你可以传入一个 transformer 将其转换为你想要的任何格式。")])]),t._v(" "),a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v("js")]),a("pre",[a("code",[a("p",[t._v("module.exports ={\nplugins:[\n[\n'@vuepress/last-updated',\n{\ntransformer:(timestamp, lang)=>{\n// 不要忘了安装 moment\nconst moment =require('moment')\nmoment.locale(lang)\nreturn moment(timestamp).fromNow()\n}\n}\n]\n]\n}")]),t._v("\n")])])]),a("h3",{attrs:{id:"moment-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#moment-js"}},[t._v("#")]),t._v(" moment.js")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装依赖"),a("br"),t._v(" "),a("code",[t._v("npm install -D moment")])])]),t._v(" "),a("li",[a("p",[t._v("在vuepress中引用\n"),a("code",[t._v('plugins: ["@vuepress/last-updated"]')])])]),t._v(" "),a("li",[a("p",[t._v("在需要使用时间转换的页面定义")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const moment = require('moment')\nvar createTime = '2019-11-08 12:08:09'\ncreateTime = moment(createTime).format('YYYY-MM-DD')\nconsole.log(createTime) // '2019-11-08'\n")])])])]),t._v(" "),a("li",[a("p",[t._v("常用的时间格式")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("格式代码")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("返回值例子")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("M")]),t._v(" "),a("td",[t._v("数字表示的月份，没有前导零")]),t._v(" "),a("td",[t._v("1到12")])]),t._v(" "),a("tr",[a("td",[t._v("MM")]),t._v(" "),a("td",[t._v("数字表示的月份，有前导零")]),t._v(" "),a("td",[t._v("01到12")])]),t._v(" "),a("tr",[a("td",[t._v("MMM")]),t._v(" "),a("td",[t._v("三个字母缩写表示的月份")]),t._v(" "),a("td",[t._v("Jan到Dec")])]),t._v(" "),a("tr",[a("td",[t._v("MMMM")]),t._v(" "),a("td",[t._v("月份，完整的文本格式")]),t._v(" "),a("td",[t._v("January到December")])]),t._v(" "),a("tr",[a("td",[t._v("Q")]),t._v(" "),a("td",[t._v("季度")]),t._v(" "),a("td",[t._v("1到4")])]),t._v(" "),a("tr",[a("td",[t._v("D")]),t._v(" "),a("td",[t._v("月份中的第几天，没有前导零")]),t._v(" "),a("td",[t._v("1到31")])]),t._v(" "),a("tr",[a("td",[t._v("DD")]),t._v(" "),a("td",[t._v("月份中的第几天，有前导零")]),t._v(" "),a("td",[t._v("01到31")])]),t._v(" "),a("tr",[a("td",[t._v("d")]),t._v(" "),a("td",[t._v("星期中的第几天，数字表示")]),t._v(" "),a("td",[t._v("0到6，0表示周日，6表示周六")])]),t._v(" "),a("tr",[a("td",[t._v("ddd")]),t._v(" "),a("td",[t._v("三个字母表示星期中的第几天")]),t._v(" "),a("td",[t._v("Sun到Sat")])]),t._v(" "),a("tr",[a("td",[t._v("dddd")]),t._v(" "),a("td",[t._v("星期几，完整的星期文本")]),t._v(" "),a("td",[t._v("从Sunday到Saturday")])]),t._v(" "),a("tr",[a("td",[t._v("w")]),t._v(" "),a("td",[t._v("年份中的第几周")]),t._v(" "),a("td",[t._v("如42：表示第42周")])]),t._v(" "),a("tr",[a("td",[t._v("YYYY")]),t._v(" "),a("td",[t._v("四位数字完整表示的年份")]),t._v(" "),a("td",[t._v("如：2014 或 2000")])]),t._v(" "),a("tr",[a("td",[t._v("YY")]),t._v(" "),a("td",[t._v("两位数字表示的年份")]),t._v(" "),a("td",[t._v("如：14 或 98")])]),t._v(" "),a("tr",[a("td",[t._v("A")]),t._v(" "),a("td",[t._v("大写的AM PM")]),t._v(" "),a("td",[t._v("AM PM")])]),t._v(" "),a("tr",[a("td",[t._v("a")]),t._v(" "),a("td",[t._v("小写的am pm")]),t._v(" "),a("td",[t._v("am pm")])]),t._v(" "),a("tr",[a("td",[t._v("HH")]),t._v(" "),a("td",[t._v("小时，24小时制，有前导零")]),t._v(" "),a("td",[t._v("00到23")])]),t._v(" "),a("tr",[a("td",[t._v("H")]),t._v(" "),a("td",[t._v("小时，24小时制，无前导零")]),t._v(" "),a("td",[t._v("0到23")])]),t._v(" "),a("tr",[a("td",[t._v("hh")]),t._v(" "),a("td",[t._v("小时，12小时制，有前导零")]),t._v(" "),a("td",[t._v("00到12")])]),t._v(" "),a("tr",[a("td",[t._v("h")]),t._v(" "),a("td",[t._v("小时，12小时制，无前导零")]),t._v(" "),a("td",[t._v("0到12")])]),t._v(" "),a("tr",[a("td",[t._v("m")]),t._v(" "),a("td",[t._v("没有前导零的分钟数")]),t._v(" "),a("td",[t._v("0到59")])]),t._v(" "),a("tr",[a("td",[t._v("mm")]),t._v(" "),a("td",[t._v("有前导零的分钟数")]),t._v(" "),a("td",[t._v("00到59")])]),t._v(" "),a("tr",[a("td",[t._v("s")]),t._v(" "),a("td",[t._v("没有前导零的秒数")]),t._v(" "),a("td",[t._v("1到59")])]),t._v(" "),a("tr",[a("td",[t._v("ss")]),t._v(" "),a("td",[t._v("有前导零的描述")]),t._v(" "),a("td",[t._v("01到59")])]),t._v(" "),a("tr",[a("td",[t._v("X")]),t._v(" "),a("td",[t._v("Unix时间戳")]),t._v(" "),a("td",[t._v("1411572969")])])])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("更改时区\n"),a("code",[t._v('moment().zone("-08:00");')]),a("br"),t._v("\n在原有时间戳的基础上 加8小时。")])]),t._v(" "),a("h2",{attrs:{id:"使用容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用容器"}},[t._v("#")]),t._v(" 使用容器")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("::: <样式名称> [标题名]  \n文本、链接、图片等内容   \n:::\n")])])]),a("div",{staticClass:"summary"},[a("p",{staticClass:"title"},[t._v("可选列表")]),a("p",[t._v("样式名称：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("summary")])]),t._v(" "),a("li",[a("p",[t._v("code")])]),t._v(" "),a("li",[a("p",[t._v("right")])]),t._v(" "),a("li",[a("p",[t._v("toshow")])]),t._v(" "),a("li",[a("p",[t._v("tip")])]),t._v(" "),a("li",[a("p",[t._v("tocenter")])])])]),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("ol",[a("li",[t._v("样式名："),a("strong",[t._v("summary")]),t._v(" ; 标题名为："),a("strong",[t._v("感悟")]),t._v("  ; 内容为："),a("strong",[t._v("美好的第一天")])])]),t._v(" "),a("p",[t._v("以下是显示结果：")]),t._v(" "),a("div",{staticClass:"summary"},[a("p",{staticClass:"title"},[t._v("感悟")]),a("p",[t._v("美好的第一天")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("样式名："),a("strong",[t._v("code")]),t._v(" ; 标题名为："),a("strong",[t._v("Hello.c")]),t._v("  ; 内容为："),a("strong",[t._v('printf("Hello world!")')])])]),t._v(" "),a("p",[t._v("以下是显示结果：")]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v("Hello.c")]),a("pre",[a("code",[a("p",[t._v('printf("Hello world!")')]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("样式名："),a("strong",[t._v("right")]),t._v(" ; 标题名为："),a("strong",[t._v("-- 爱因斯坦")]),t._v("  ; 无内容")])]),t._v(" "),a("p",[t._v("以下是显示结果：")]),t._v(" "),a("div",{staticClass:"summary"},[a("p",{staticClass:"title"},[t._v(".")]),a("div",{staticClass:"custom-block right"},[a("p",{staticClass:"custom-block-title"},[t._v("-- 爱因斯坦")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("样式名："),a("strong",[t._v("toshow")]),t._v(" ; 标题名为："),a("strong",[t._v("hello")]),t._v("  ; 内容为："),a("strong",[t._v("你好")])])]),t._v(" "),a("p",[t._v("以下是显示结果：")]),t._v(" "),a("div",{staticClass:"summary"},[a("p",{staticClass:"title"},[t._v(".")]),a("div",{staticClass:"toshow"},[a("span",{staticClass:"left"},[t._v("hello")]),a("span",{staticClass:"right"},[a("p",[t._v("你好")])])])]),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("样式名："),a("strong",[t._v("tip")]),t._v(" ; 标题名"),a("strong",[t._v("welcome")]),t._v(" ; 内容："),a("strong",[t._v("大家好")])]),t._v(" "),a("p",[t._v("以下是显示结果：")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("welcome")]),t._v(" "),a("p",[t._v("大家好")])])]),t._v(" "),a("li",[a("p",[t._v("样式名："),a("strong",[t._v("tocenter")]),t._v("  内容是：”这个文本将会居中“")]),t._v(" "),a("p",[t._v("以下是显示结果：")]),t._v(" "),a("div",{staticClass:"tocenter"},[a("p",[t._v("这个文本将会居中")])])])]),t._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("h3",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[t._v("#")]),t._v(" vuepress-plugin-container")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("可以多次配置这个插件")])]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v("config.js")]),a("pre",[a("code",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[\n  'vuepress-plugin-container',\n  {\n    type: 'toshow',\n    // info 代表了标题变量\n    //before指的是要插入到内容前面的\n    before: info => `<div class=\"toshow\"><span class=\"left\">${info}</span><span class=\"right\">`,\n    // after表示要插入到内容后面的\n    after: '</span></div >',\n    defaultTitle:{\n      '/':\"点击显示\"\n    }\n  },\n],\n")])])])])])]),a("h3",{attrs:{id:"vuepress-plugin-medium-zoom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-medium-zoom"}},[t._v("#")]),t._v(" vuepress-plugin-medium-zoom")]),t._v(" "),a("p",[t._v("实现了点击图片放大的功能。")]),t._v(" "),a("h3",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" copyright")]),t._v(" "),a("p",[t._v("当网页访问者要复制网页中的内容时，此插件控制了用户能否复制，最多复制文字数量，能否拖选文字，或者当复制的文字自动添加上版权标识。")]),t._v(" "),a("h3",{attrs:{id:"vuepress-plugin-mathjax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-mathjax"}},[t._v("#")]),t._v(" vuepress-plugin-mathjax")]),t._v(" "),a("p",[t._v("支持数学公式")]),t._v(" "),a("h3",{attrs:{id:"last-updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-updated"}},[t._v("#")]),t._v(" last-updated")]),t._v(" "),a("p",[t._v("显示文章最后提交的时间")]),t._v(" "),a("h3",{attrs:{id:"back-to-top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-to-top"}},[t._v("#")]),t._v(" back-to-top")]),t._v(" "),a("p",[t._v("当页面向下滑动了，便会出现回到顶部按钮")]),t._v(" "),a("h2",{attrs:{id:"样式调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式调整"}},[t._v("#")]),t._v(" 样式调整")]),t._v(" "),a("h3",{attrs:{id:"代码块自动换行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块自动换行"}},[t._v("#")]),t._v(" 代码块自动换行")]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v("index.styl")]),a("pre",[a("code",[a("p",[t._v("white-space: pre-wrap;\nword-wrap: break-word;")]),t._v("\n")])])]),a("h3",{attrs:{id:"鼠标放到图片上显示提示文字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标放到图片上显示提示文字"}},[t._v("#")]),t._v(" 鼠标放到图片上显示提示文字")]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v(".md")]),a("pre",[a("code",[a("p",[a("code",[t._v('![vue官网logo](https://cn.vuejs.org/images/logo.png "vue官网logo")')])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v('此时缩放不起作用，需要将"vue官方logo"这个文本删掉才行。')])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cn.vuejs.org/images/logo.png",alt:"vue官网logo",title:"vue官网logo"}})]),t._v(" "),a("h3",{attrs:{id:"超链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超链接"}},[t._v("#")]),t._v(" 超链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v("百度链接")]),a("pre",[a("code",[a("p",[a("code",[t._v("[百度](http://baidu.com)")])]),t._v("\n")])])]),a("h3",{attrs:{id:"表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v(".md")]),a("pre",[a("code",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("表头|表头|表头\n:---:|:--:|:---:\n内容|内容|内容\n内容|内容|内容\n")])])])])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("表头")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("表头")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("表头")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")])])])]),t._v(" "),a("h3",{attrs:{id:"代码段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码段"}},[t._v("#")]),t._v(" 代码段")]),t._v(" "),a("div",{staticClass:"tocenter"},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/blog/20210424161901.png",alt:""}})])]),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v("C")]),a("pre",[a("code",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('printf("你好");\n\n')])])])])])]),a("h3",{attrs:{id:"滚动条显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动条显示"}},[t._v("#")]),t._v(" 滚动条显示")]),t._v(" "),a("div",{staticClass:"code"},[a("p",{staticClass:"title"},[t._v("css index.styl")]),a("pre",[a("code",[a("p",[t._v("overflow auto")]),t._v("\n")])])])])}),[],!1,null,null,null);v.default=_.exports}}]);