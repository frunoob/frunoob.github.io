(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{359:function(t,e,a){"use strict";a.r(e);var r=a(21),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript高级程序设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript高级程序设计"}},[t._v("#")]),t._v(" JavaScript高级程序设计")]),t._v(" "),a("h2",{attrs:{id:"var-let-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-let-const"}},[t._v("#")]),t._v(" var-let-const")]),t._v(" "),a("p",[t._v("let 声明的范围是块作用域，\n而 var 声明的范围是函数作用域。\nlet 与 var 的另一个重要的区别，就是 let 声明的变量不会在作用域中被提升 。"),a("br"),t._v("\nconst 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且\n尝试修改 const 声明的变量会导致运行时错误。"),a("br"),t._v("\nundefined 值是由 null 值派生而来的，因此 ECMA-262 将它们定义为表面上相等，如下面的例\n子所示：\nconsole.log(null == undefined); // true")]),t._v(" "),a("h2",{attrs:{id:"boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" boolean")]),t._v(" "),a("p",[t._v("ECMAScript 中 ，布尔值不同于数值 ，因此 true 不等于 1，false 不等于 0。"),a("br"),t._v("\nBoolean()转型函数")]),t._v(" "),a("p",[t._v("（参见后面的相关内容）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("false")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非空字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""（空字符串）')])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非零数值（包括无穷值）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0、NaN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任意对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A（不存在）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")])])])]),t._v(" "),a("h2",{attrs:{id:"number类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number类型"}},[t._v("#")]),t._v(" number类型")]),t._v(" "),a("h3",{attrs:{id:"浮点值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点值"}},[t._v("#")]),t._v(" 浮点值")]),t._v(" "),a("p",[t._v("要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不\n是必须有整数，但推荐加上 。"),a("br"),t._v("\n。ECMAScript 中科学记数法的格式要求是一个数值（整数或浮点数）后跟一个大\n写或小写的字母 e，再加上一个要乘的 10 的多少次幂。比如：\nlet floatNum = 3.125e7; // 等于 31250000"),a("br"),t._v("\n① ECMAScript 2015 或 ES6 中的八进制值通过前缀 0o 来表示；严格模式下，前缀 0 会被视为语法错误，如果要表示\n八进制值，应该使用前缀 0o。"),a("br"),t._v("\n浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。例如，0.1 加 0.2 得到的不\n是 0.3，而是 0.300 000 000 000 000 04。"),a("br"),t._v("\n之所以存在这种舍入错误，是因为使用了 IEEE 754 数值，这种错误并非 ECMAScript\n所独有。其他使用相同格式的语言也有这个问题。")]),t._v(" "),a("div",{staticClass:"summary"},[a("p",{staticClass:"title"},[t._v("值的范围")]),a("p",[t._v("ECMAScript 可以表示的最小\n数值保存在 Number.MIN_VALUE 中，这个值在多数浏览器中是 5e324；可以表示的最大数值保存在\nNumber.MAX_VALUE 中，这个值在多数浏览器中是 1.797 693 134 862 315 7e+308。")])]),a("h3",{attrs:{id:"nan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan"}},[t._v("#")]),t._v(" NaN")]),t._v(" "),a("p",[t._v("有一个特殊的数值叫 NaN，意思是“不是数值”（Not a Number），用于表示本来要返回数值的操作失败了（而不是抛出错误）")]),t._v(" "),a("h3",{attrs:{id:"数值转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值转换"}},[t._v("#")]),t._v(" 数值转换")]),t._v(" "),a("p",[t._v("有 3 个函数可以将非数值转换为数值：Number()、parseInt()和 parseFloat()。Number()是\n转型函数，可用于任何数据类型。")]),t._v(" "),a("p",[t._v("isNaN()函数。该函数接收一个参数，可以是任意数据类型，然后判断\n这个参数是否“不是数值”。")]),t._v(" "),a("p",[t._v("不同的数值格式很容易混淆，因此 parseInt()也接收第二个参数，用于指定底数（进制数）。")]),t._v(" "),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("div",{staticClass:"summary"},[a("p",{staticClass:"title"},[t._v("转字符串的两种方法")]),a("p",[t._v("toString()"),a("br"),t._v('\n用加号操作符给一个值加上一个空字符串""也可以将其转换为字符串')])]),a("h3",{attrs:{id:"模板字面量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板字面量"}},[t._v("#")]),t._v(" 模板字面量")]),t._v(" "),a("p",[t._v("跨行定义字符串：反单引号。")]),t._v(" "),a("h3",{attrs:{id:"字符串插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串插值"}},[t._v("#")]),t._v(" 字符串插值")]),t._v(" "),a("p",[t._v("字符串插值通过在${}")])])}),[],!1,null,null,null);e.default=n.exports}}]);