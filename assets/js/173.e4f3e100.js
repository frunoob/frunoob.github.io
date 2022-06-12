(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{378:function(a,t,s){"use strict";s.r(t);var e=s(5),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"javascript对象数组排序的一个问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript对象数组排序的一个问题"}},[a._v("#")]),a._v(" javascript对象数组排序的一个问题")]),a._v(" "),s("p",[a._v("已知一个数组"),s("code",[a._v("array=[5,4,3,2,1]")]),a._v(", 使用"),s("code",[a._v("array.sort.((a,b)=>{return a-b})")]),a._v(" 实现正序排序。")]),a._v(" "),s("p",[a._v("但是想要对一个对象数组按照关键字值进行排序，如下所示。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("array = [\n{\n  name:'1',\n  value:'asfadsfasd'\n},\n{\n  name:'2',\n  value:'askdfjas'\n},\n\n...\n\n]\n")])])]),s("p",[a._v("因为value是字符串而非数字，所以需要注意不能直接对两个字符串加减运行，需要使用大小符号进行比较。"),s("br"),a._v("\n需要使用命令"),s("code",[a._v(".sort((a,b)=> a.value>b.value?-1:1)")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("sort函数中的匿名函数的返回值必须是（正数，零，负数），三个之一，不能是"),s("code",[a._v("true")]),a._v("或"),s("code",[a._v("false")]),a._v("。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);