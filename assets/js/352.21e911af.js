(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{557:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库自动分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库自动分区"}},[t._v("#")]),t._v(" 数据库自动分区")]),t._v(" "),a("h2",{attrs:{id:"partition-的一些限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partition-的一些限制"}},[t._v("#")]),t._v(" partition 的一些限制")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("分区所涉及的列必须是"),a("strong",[t._v("每一个")]),t._v("主键和唯一键的子集")])]),t._v(" "),a("li",[a("p",[t._v("关于InnoDB引擎的限制\nInnoDB存储引擎中，分区和外键不兼容，不能同时使用。\n"),a("code",[t._v("ALTER TABLE ... OPTIMIZE PARTITION")]),t._v("语句不能正常使用，用"),a("code",[t._v("ALTER TABLE ... REBUILD PARTITION and ALTER TABLE ... ANALYZE PARTITION")]),t._v("代替\n不要给任何分区或任何子分区指定存储引擎，因为同一个表的所有分区的存储引擎必须一致。")])]),t._v(" "),a("li",[a("p",[t._v("关于一些sql函数的限制"),a("br"),t._v("\n只有以下函数能够在分区表达式中使用（注意不是mysql语句，是创建表时的分区表达式）\nABS()")]),t._v(" "),a("p",[t._v("CEILING() (see CEILING() and FLOOR())")]),t._v(" "),a("p",[t._v("DATEDIFF()")]),t._v(" "),a("p",[t._v("DAY()")]),t._v(" "),a("p",[t._v("DAYOFMONTH()")]),t._v(" "),a("p",[t._v("DAYOFWEEK()")]),t._v(" "),a("p",[t._v("DAYOFYEAR()")]),t._v(" "),a("p",[t._v("EXTRACT() (see EXTRACT() function with WEEK specifier)：有个BUG：指定单元为 WEEK 时，不允许将其作为分区函数")]),t._v(" "),a("p",[t._v("FLOOR() (see CEILING() and FLOOR())")]),t._v(" "),a("p",[t._v("HOUR()")]),t._v(" "),a("p",[t._v("MICROSECOND()")]),t._v(" "),a("p",[t._v("MINUTE()")]),t._v(" "),a("p",[t._v("MOD()")]),t._v(" "),a("p",[t._v("MONTH()")]),t._v(" "),a("p",[t._v("QUARTER()")]),t._v(" "),a("p",[t._v("SECOND()")]),t._v(" "),a("p",[t._v("TIME_TO_SEC()")]),t._v(" "),a("p",[t._v("TO_DAYS()")]),t._v(" "),a("p",[t._v("TO_SECONDS()")]),t._v(" "),a("p",[t._v("UNIX_TIMESTAMP() (with TIMESTAMP columns)")]),t._v(" "),a("p",[t._v("WEEKDAY()")]),t._v(" "),a("p",[t._v("YEAR()")]),t._v(" "),a("p",[t._v("YEARWEEK()")])]),t._v(" "),a("li",[a("p",[t._v("关于"),a("strong",[t._v("锁")]),t._v("的限制\nselect 只锁包含要查询的数据的分区\nupdate 只有当"),a("strong",[t._v("没有分区列被更新的时候")]),t._v("才不用全表锁\ninsert 只有要被新增的分区加锁。但如果设置了自增列，则全表全分区锁")])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" employees "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    lname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hired "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1970-01-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    separated "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9999-12-31'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    job_code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    store_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" RANGE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" p0 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" p3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" LESS THAN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])]),a("p",[t._v("通过sql语句来创建带有分区选项的表。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("创建分区的提示")]),t._v(" "),a("p",[t._v("分区的定义需要从低到高来排序，不可以打乱顺序。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提高查询速度的建议")]),t._v(" "),a("p",[t._v("where查询条件最好包含分区列 并使用"),a("code",[t._v("=,<, >, <=, >=, and <>")]),t._v("或者"),a("code",[t._v("IN ()")]),t._v(" 表达式，这样查询的时候mysql会自动忽略不包含目标数据的分区，只查询包含目标数据的分区，从而提高查询速度")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意null")]),t._v(" "),a("p",[t._v("在list分区中，插入null数据会导致报错， 必须显式定义一个包含null的list分区")]),t._v(" "),a("p",[t._v("在hash 和range中，null被当作是最小的 存放在第一个分区")])]),t._v(" "),a("h2",{attrs:{id:"使用分区遇到的一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用分区遇到的一些问题"}},[t._v("#")]),t._v(" 使用分区遇到的一些问题")]),t._v(" "),a("p",[t._v("数据库表使用了主键，但是由于主键必须包含分区列。此时可以删除原有主键，创建一个新的联合主键，新的主键不能是null；")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("column1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("column2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"自动定时分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动定时分区"}},[t._v("#")]),t._v(" 自动定时分区")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("show variables like '%event_scheduler';\n\n# 开启时间定时计划\nset global event_scheduler=1;\n\n\nALTER TABLE  bn_load_profile  PARTITION BY RANGE (to_days(value_time)) (\n        PARTITION blp_his  VALUES LESS THAN (to_days('20230903')+1),\n        PARTITION blp_20240630  VALUES LESS THAN (to_days('20240630')+1),\n\t\t\t\t\n        PARTITION blp_other  VALUES LESS THAN MAXVALUE );\n\nALTER TABLE bn_load_profile\nREORGANIZE PARTITION blp_other INTO (\n\t\t\t\tPARTITION blp_20240701  VALUES LESS THAN (to_days('20240701')+1),\n\n        PARTITION blp_20240731  VALUES LESS THAN (to_days('20240731')+1),\n\t\t\t\t\n\t\t\t\tPARTITION blp_other  VALUES LESS THAN MAXVALUE );\n\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);