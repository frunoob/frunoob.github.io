(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{453:function(t,s,n){"use strict";n.r(s);var a=n(24),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"spring-framework"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-framework"}},[t._v("#")]),t._v(" Spring Framework")]),t._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[t._v("Spring总结起来"),n("strong",[t._v("优点")]),t._v("如下：")]),t._v(" "),n("ul",[n("li",[t._v("低侵入式设计，代码的污染极低。")]),t._v(" "),n("li",[t._v("独立于各种应用服务器，基于Spring框架的应用，可以真正实现Write Once，Run Anywhere的承诺。")]),t._v(" "),n("li",[t._v("Spring的IoC容器降低了业务对象替换的复杂性，提高了组件之间的解耦。")]),t._v(" "),n("li",[t._v("Spring的AOP支持允许将一些通用任务如安全、事务、日志等进行集中式管理，从而提供了更好的复用。")]),t._v(" "),n("li",[t._v("Spring的ORM和DAO提供了与第三方持久层框架的良好整合，并简化了底层的数据库访问。")]),t._v(" "),n("li",[t._v("Spring的高度开放性，并不强制应用完全依赖于Spring，开发者可自由选用Spring框架的部分或全部")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202202231843617.png",alt:"spring-overview"}})]),t._v(" "),n("h2",{attrs:{id:"spring开发环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring开发环境搭建"}},[t._v("#")]),t._v(" Spring开发环境搭建")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202202231849277.png",alt:"图片描述"}})]),t._v(" "),n("p",[n("strong",[t._v("Spring 三个核心的部分")]),t._v("是spring-core、spring-beans、spring-context。")]),t._v(" "),n("p",[t._v("Spring IOC 的本质就是“解耦合”方式的发展。")]),t._v(" "),n("p",[t._v("关于对象和类（或接口）之间的耦合关系，我们经历了以下三种方式：")]),t._v(" "),n("p",[t._v("通过 new 创建不同的实例对象。")]),t._v(" "),n("p",[t._v("通过工厂模式获取不同的实例对象（需要自己写工厂）。")]),t._v(" "),n("p",[t._v("通过 IOC 容器获取不同的实例对象（只需要配置）。")]),t._v(" "),n("p",[t._v("为了避免创建的对象到处分散、对象和类强烈的耦合在一起、每一次使用新对象前都得先实例化( new )一次，我们可以将“创建对象”这一过程提取出来，由一个工厂 Factory 来统一创建，以后如果需要新的对象，就可以直接从工厂中获取。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CourseFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 根据不同的课程名称获取不同的课程实例\n     * @param name 课程名称\n     * @return 课程实例\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ICourse")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaCourse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mysql"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySQLCourse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202202231945570.png",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202202231955254.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);