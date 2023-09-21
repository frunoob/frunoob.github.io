(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{540:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据库自动分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库自动分区"}},[s._v("#")]),s._v(" 数据库自动分区")]),s._v(" "),a("h2",{attrs:{id:"partition-的一些限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partition-的一些限制"}},[s._v("#")]),s._v(" partition 的一些限制")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("分区所涉及的列必须是"),a("strong",[s._v("每一个")]),s._v("主键和唯一键的子集")])]),s._v(" "),a("li",[a("p",[s._v("关于InnoDB引擎的限制\nInnoDB存储引擎中，分区和外键不兼容，不能同时使用。\n"),a("code",[s._v("ALTER TABLE ... OPTIMIZE PARTITION")]),s._v("语句不能正常使用，用"),a("code",[s._v("ALTER TABLE ... REBUILD PARTITION and ALTER TABLE ... ANALYZE PARTITION")]),s._v("代替\n不要给任何分区或任何子分区指定存储引擎，因为同一个表的所有分区的存储引擎必须一致。")])]),s._v(" "),a("li",[a("p",[s._v("关于一些sql函数的限制"),a("br"),s._v("\n只有以下函数能够在分区表达式中使用（注意不是mysql语句，是创建表时的分区表达式）\nABS()")]),s._v(" "),a("p",[s._v("CEILING() (see CEILING() and FLOOR())")]),s._v(" "),a("p",[s._v("DATEDIFF()")]),s._v(" "),a("p",[s._v("DAY()")]),s._v(" "),a("p",[s._v("DAYOFMONTH()")]),s._v(" "),a("p",[s._v("DAYOFWEEK()")]),s._v(" "),a("p",[s._v("DAYOFYEAR()")]),s._v(" "),a("p",[s._v("EXTRACT() (see EXTRACT() function with WEEK specifier)：有个BUG：指定单元为 WEEK 时，不允许将其作为分区函数")]),s._v(" "),a("p",[s._v("FLOOR() (see CEILING() and FLOOR())")]),s._v(" "),a("p",[s._v("HOUR()")]),s._v(" "),a("p",[s._v("MICROSECOND()")]),s._v(" "),a("p",[s._v("MINUTE()")]),s._v(" "),a("p",[s._v("MOD()")]),s._v(" "),a("p",[s._v("MONTH()")]),s._v(" "),a("p",[s._v("QUARTER()")]),s._v(" "),a("p",[s._v("SECOND()")]),s._v(" "),a("p",[s._v("TIME_TO_SEC()")]),s._v(" "),a("p",[s._v("TO_DAYS()")]),s._v(" "),a("p",[s._v("TO_SECONDS()")]),s._v(" "),a("p",[s._v("UNIX_TIMESTAMP() (with TIMESTAMP columns)")]),s._v(" "),a("p",[s._v("WEEKDAY()")]),s._v(" "),a("p",[s._v("YEAR()")]),s._v(" "),a("p",[s._v("YEARWEEK()")])]),s._v(" "),a("li",[a("p",[s._v("关于"),a("strong",[s._v("锁")]),s._v("的限制\nselect 只锁包含要查询的数据的分区\nupdate 只有当"),a("strong",[s._v("没有分区列被更新的时候")]),s._v("才不用全表锁\ninsert 只有要被新增的分区加锁。但如果设置了自增列，则全表全分区锁")])])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" employees "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    fname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    lname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    hired "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1970-01-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    separated "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9999-12-31'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    job_code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    store_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" RANGE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("store_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p0 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n")])])]),a("p",[s._v("通过sql语句来创建带有分区选项的表。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("创建分区的提示")]),s._v(" "),a("p",[s._v("分区的定义需要从低到高来排序，不可以打乱顺序。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提高查询速度的建议")]),s._v(" "),a("p",[s._v("where查询条件最好包含分区列 并使用"),a("code",[s._v("=,<, >, <=, >=, and <>")]),s._v("或者"),a("code",[s._v("IN ()")]),s._v(" 表达式，这样查询的时候mysql会自动忽略不包含目标数据的分区，只查询包含目标数据的分区，从而提高查询速度")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意null")]),s._v(" "),a("p",[s._v("在list分区中，插入null数据会导致报错， 必须显式定义一个包含null的list分区")]),s._v(" "),a("p",[s._v("在hash 和range中，null被当作是最小的 存放在第一个分区")])]),s._v(" "),a("h2",{attrs:{id:"使用分区遇到的一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用分区遇到的一些问题"}},[s._v("#")]),s._v(" 使用分区遇到的一些问题")]),s._v(" "),a("p",[s._v("数据库表使用了主键，但是由于主键必须包含分区列。此时可以删除原有主键，创建一个新的联合主键，新的主键不能是null；")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("column1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("column2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);