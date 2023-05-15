(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{339:function(v,_,e){"use strict";e.r(_);var n=e(5),o=Object(n.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"vim常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim常用指令"}},[v._v("#")]),v._v(" vim常用指令")]),v._v(" "),e("p",[e("code",[v._v("dw")]),e("br"),v._v("\n删除当前单词直到下一个单词开头(不包含首字母)")]),v._v(" "),e("p",[e("code",[v._v("de")]),e("br"),v._v("\n删除单词，直到该单词末尾（包含最后一个单词）")]),v._v(" "),e("p",[e("code",[v._v("d$")]),e("br"),v._v("\n删除单词一整行")]),v._v(" "),e("p",[e("code",[v._v("d2w")]),e("br"),v._v("\n删除两个单词")]),v._v(" "),e("p",[e("code",[v._v("dd")]),e("br"),v._v("\n删除一整行，并保存行到vim注册器中")]),v._v(" "),e("p",[e("code",[v._v("p")]),e("br"),v._v("\n将注册器中保存的行插入到当前行的下一行")]),v._v(" "),e("p",[e("code",[v._v("3dd")]),e("br"),v._v("\n删除三行")]),v._v(" "),e("p",[e("code",[v._v("2w")]),e("br"),v._v("\n光标移动两个单词至单词开头")]),v._v(" "),e("p",[e("code",[v._v("3e")]),e("br"),v._v("\n光标移动两个单词至单词末尾")]),v._v(" "),e("p",[e("code",[v._v("0")]),v._v("\n移动光标到行首")]),v._v(" "),e("p",[e("code",[v._v("u")]),e("br"),v._v("\n撤销动作")]),v._v(" "),e("p",[e("code",[v._v("U")]),e("br"),v._v("\n撤销当前行的所有动作")]),v._v(" "),e("p",[e("code",[v._v("CTRL-R")]),e("br"),v._v("\n重做")]),v._v(" "),e("p",[e("code",[v._v("rx")]),e("br"),v._v("\n替换当前光标下的字为x")]),v._v(" "),e("p",[e("code",[v._v("R")]),e("br"),v._v("\n输入并替换文本")]),v._v(" "),e("p",[e("code",[v._v("ce")]),e("br"),v._v("\n删除单词至词尾并插入")]),v._v(" "),e("p",[e("code",[v._v("cc")]),e("br"),v._v("\n清空本行并插入")]),v._v(" "),e("p",[e("code",[v._v("G")]),e("br"),v._v("\n移动光标到文件的最后一行")]),v._v(" "),e("p",[e("code",[v._v("g")]),e("br"),v._v("\n移动光标到文本的第一行")]),v._v(" "),e("p",[e("code",[v._v("505G")]),e("br"),v._v("\n移动到第505行")]),v._v(" "),e("p",[e("code",[v._v("CTRL-O")]),e("br"),v._v("\n撤销行跳转操作")]),v._v(" "),e("p",[e("code",[v._v("CTRL-I")]),e("br"),v._v("\n重做行跳转操纵")]),v._v(" "),e("p",[e("code",[v._v("%")]),e("br"),v._v("\n匹配光标所在的括号对应的括号")]),v._v(" "),e("p",[e("code",[v._v(":s/thee/the/g")]),e("br"),v._v("\n替换行中所有的thee为the")]),v._v(" "),e("p",[e("code",[v._v(":1,5s/old/new/g")]),e("br"),v._v("\n替换1到5行的old为new")]),v._v(" "),e("p",[e("code",[v._v(":%s/old/new/g")]),e("br"),v._v("\n全文替换")]),v._v(" "),e("p",[e("code",[v._v(":%s/old/new/gc")]),e("br"),v._v("\n替换之前会提示")]),v._v(" "),e("p",[e("code",[v._v("CTRL-G")]),e("br"),v._v("\n文档的状态")]),v._v(" "),e("p",[e("code",[v._v("?hello")]),e("br"),v._v("\n查找当前光标之前的所有的hello")]),v._v(" "),e("p",[e("code",[v._v("/hello")]),e("br"),v._v("\n查找当前光标之后的hello")]),v._v(" "),e("p",[e("code",[v._v("n")]),e("br"),v._v("\n移动到下一个查找结果")]),v._v(" "),e("p",[e("code",[v._v("N")]),e("br"),v._v("\n移动到上一个查找结果")]),v._v(" "),e("p",[e("code",[v._v(":!ls")]),e("br"),v._v("\n执行外部命令")]),v._v(" "),e("p",[e("code",[v._v(":w filename")]),e("br"),v._v("\n保存当前文件为指定名称")]),v._v(" "),e("p",[e("code",[v._v("o")]),e("br"),v._v("\n在下方插入一行")]),v._v(" "),e("p",[e("code",[v._v("O")]),e("br"),v._v("\n在上方插入一行")]),v._v(" "),e("p",[e("code",[v._v("a")]),v._v("\n在当前光标指向的字的后面插入")]),v._v(" "),e("p",[e("code",[v._v("y")]),e("br"),v._v("\n复制")]),v._v(" "),e("p",[e("code",[v._v("p")]),e("br"),v._v("\n粘贴")]),v._v(" "),e("p",[e("code",[v._v("j$``j0")]),e("br"),v._v("\n控制每次移动到下一行时，光标所在位置时行首还是行尾")]),v._v(" "),e("p",[e("code",[v._v(":set hls")]),e("br"),v._v("\n搜索结果高亮显示")]),v._v(" "),e("p",[e("code",[v._v(":set ic")]),e("br"),v._v("\n忽略大小写")]),v._v(" "),e("p",[e("code",[v._v(":set noic")]),e("br"),v._v("\n不忽略大小写")]),v._v(" "),e("p",[e("code",[v._v("/hello\\c")]),e("br"),v._v("\n本次查找忽略大小写")]),v._v(" "),e("p",[e("code",[v._v("CTRL-D")]),e("br"),v._v("\n显示所有匹配的命令")]),v._v(" "),e("p",[e("code",[v._v("<TAB>")]),e("br"),v._v("\n自动补全")]),v._v(" "),e("p",[e("code",[v._v(":set number")]),e("br"),v._v("\n显示行号")])])}),[],!1,null,null,null);_.default=o.exports}}]);