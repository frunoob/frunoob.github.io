(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{360:function(s,t,o){"use strict";o.r(t);var e=o(5),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h1",{attrs:{id:"ubuntu中安装mysql默认密码"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu中安装mysql默认密码"}},[s._v("#")]),s._v(" Ubuntu中安装MySQL默认密码")]),s._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[s._v("sudo cat /etc/mysql/debian.cnf\n# Automatically generated for Debian scripts. DO NOT TOUCH!\n[client]\nhost     = localhost\nuser     = debian-sys-maint\npassword = tYn1VD6Xj9txGAxZ\nsocket   = /var/run/mysqld/mysqld.sock\n[mysql_upgrade]\nhost     = localhost\nuser     = debian-sys-maint\npassword = tYn1VD6Xj9txGAxZ\nsocket   = /var/run/mysqld/mysqld.sock\n")])])]),o("p",[s._v("在ubuntu下安装mysql的过程中"),o("code",[s._v("sudo apt-get install mysql-server")]),s._v("发现："),o("br"),s._v("\n在"),o("code",[s._v("frunoob@frunoob:/var/log/mysql$ cat error.log")]),s._v(" 文件中，可以看到一句话"),o("code",[s._v("root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option")]),s._v("，大概意思是在创建root用户的时候没有生成密码，所以可以直接在root用户下直接登录msyql。")]),s._v(" "),o("p",[o("strong",[s._v("此时可以不需要密码就能进入mysql")]),o("br"),s._v(" "),o("code",[s._v("sudo mysql -u root")])]),s._v(" "),o("p",[o("strong",[s._v("进入到mysql后，为root用户添加密码")]),o("br"),s._v(" "),o("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<newpassword>';")])]),s._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[s._v("关于grant")]),s._v(" "),o("p",[o("code",[s._v("GRANT ALL PRIVILEGES ON database.* TO 'username'@'localhost' IDENTIFIED BY 'password';")]),o("br"),s._v(" "),o("code",[s._v("GRANT")]),s._v("用来为用户添加权限，它也同样有能力创建用户并修改用户的密码，但是这个用法是"),o("strong",[s._v("弃用")]),s._v("的。")]),s._v(" "),o("p",[s._v("在"),o("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/grant.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL5.7 doc中"),o("OutboundLink")],1),s._v("提到过，使用"),o("code",[s._v("GRANT")]),s._v("创建用户的方式过时的，应使用"),o("code",[s._v("CREATE USER")]),s._v("和"),o("code",[s._v("ALTER USER")]),s._v("来创建和修改用户的信息。"),o("br"),s._v(" "),o("code",[s._v("CREATE USER 'user'@'localhost' IDENTIFIED BY 'passw0rd';")]),o("br"),s._v(" "),o("code",[s._v("GRANT ALL PRIVILEGES ON database.* TO 'user'@'localhost';")])]),s._v(" "),o("p",[o("a",{attrs:{href:""}},[s._v("MySQL  8.0 ")]),s._v("中也提到过数据库管理员首选"),o("code",[s._v("ALTER")]),s._v("和 "),o("code",[s._v("CREATE")]),s._v("来修改和创建用户，使用"),o("code",[s._v("GRANT")]),s._v("来修改用户的访问权限。"),o("br"),s._v(" "),o("code",[s._v("ALTER USER 'user'@'localhost' IDENTIFIED BY 'passw0rd';")]),o("br"),s._v(" "),o("code",[s._v("GRANT ALL PRIVILEGES ON database.* TO 'user'@'localhost';")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);