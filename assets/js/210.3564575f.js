(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{414:function(e,t,s){"use strict";s.r(t);var r=s(5),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"build-was-configured-to-prefer-settings-repositories-over-project-repositories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-was-configured-to-prefer-settings-repositories-over-project-repositories"}},[e._v("#")]),e._v(" Build was configured to prefer settings repositories over project repositories...")]),e._v(" "),s("p",[e._v("环境："),s("br"),e._v("\ngradle-7.3.3  android studio")]),e._v(" "),s("p",[e._v("添加了下面这个到"),s("code",[e._v("build.gredle")]),e._v("文件中")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('allprojects {\n\trepositories {\n\t\t...\n\t\tmaven { url "https://jitpack.io" }\n\t}\n}\n')])])]),s("p",[e._v("添加完之后，"),s("code",[e._v("syn now")]),e._v("之后就报错了")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Build was configured to prefer settings repositories over project repositories but repository 'maven' was added by build file 'build.gradle'\n")])])]),s("p",[e._v("解决措施：\n应该在"),s("code",[e._v("setting.gradle")]),e._v("中添加仓库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("dependencyResolutionManagement {\n    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)\n    repositories {\n        google()\n        mavenCentral()\n        maven{ url 'https://www.jitpack.io'}\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);