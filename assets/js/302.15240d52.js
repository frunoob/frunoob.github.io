(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{508:function(t,s,e){"use strict";e.r(s);var a=e(5),l=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql插入速度的影响因素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql插入速度的影响因素"}},[t._v("#")]),t._v(" mysql插入速度的影响因素")]),t._v(" "),e("p",[t._v("表的大小会以logN的速度减慢插入索引的插入。")]),t._v(" "),e("p",[t._v("bulk_insert_buffer_size 的值也会影响插入的速度")]),t._v(" "),e("p",[t._v("如果列含有默认值，插入数据的时候如果插入的值和列的默认值一致 那就不要明确指定其值，忽略不写可以减少解析时间从而提高速度")]),t._v(" "),e("p",[t._v("导入数据到InnoDB时，关闭自动提交模式，它会在每一条插入之后更新日志。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SET autocommit=0;\n... SQL import statements ...\nCOMMIT;\n\n")])])]),e("p",[t._v("当使用批量插入的表有自增列的时候，将"),e("code",[t._v("innodb_autoinc_lock_mode")]),t._v("设置为"),e("code",[t._v("2")]),t._v("。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("表中有9600万多条数据 ，开启100线程插入147000条数据    ，用时最久的一次sql执行时间是360ms  ，表的大小影响了B-tree索引的插入速度，二者满足logN的关系。所以插入索引的速度在数据量从千万数据到十万兆数据才会差出一个数量级，将大量数据汇总成一个sql执行的话可以将索引的更新延迟到最后")])])])}),[],!1,null,null,null);s.default=l.exports}}]);