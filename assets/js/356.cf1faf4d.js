(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{561:function(s,t,e){"use strict";e.r(t);var a=e(5),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"spring-cloud-alibaba-学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-alibaba-学习"}},[s._v("#")]),s._v(" spring cloud alibaba 学习")]),s._v(" "),e("p",[s._v("首先通过vmware安装三个ubuntu22.04虚拟机，选择ubuntu22.04的原因是其支持到2032年。")]),s._v(" "),e("p",[s._v("直接安装宝塔，安装好了之后 安装mysql8.0(mysql 5.7 于2023.10.25停止更新了)  再安装个jdk 8")]),s._v(" "),e("p",[s._v("然后开启mysql远程访问")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -u root -p\nuse mysql;\nselect host,user from user;\nupdate user set host='%' where user='root';\n \n//刷新权限\nflush privileges;\n\n")])])]),e("p",[s._v("宝塔 防火墙 开启 3306")]),s._v(" "),e("p",[s._v("然后就可以愉快的远程登录 mysql 了")])])}),[],!1,null,null,null);t.default=r.exports}}]);