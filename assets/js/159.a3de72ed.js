(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{364:function(s,t,e){"use strict";e.r(t);var a=e(5),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux新建用户之后无法使用ssh登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux新建用户之后无法使用ssh登录"}},[s._v("#")]),s._v(" linux新建用户之后无法使用ssh登录")]),s._v(" "),e("p",[e("strong",[s._v("创建用户")]),s._v(": "),e("code",[s._v("sudo useradd /home/test test -p password")])]),s._v(" "),e("p",[e("strong",[s._v("远程登陆")]),s._v("： "),e("code",[s._v("ssh test@192.168.1.6")]),e("br"),s._v("\n结果：登录失败，许可拒绝")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("PS C:\\Users\\fqq13> ssh test@192.168.1.6\ntest@192.168.1.6's password:\nPermission denied, please try again.\n")])])]),e("p",[s._v("原因可能是密码问题，需要重新设定密码")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("frunoob@frunoob:~$ sudo passwd test\n[sudo] password for frunoob:\nNew password:\nRetype new password:\npasswd: password updated successfully\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);