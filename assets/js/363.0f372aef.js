(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{567:function(e,t,n){"use strict";n.r(t);var s=n(5),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"命令行管理node版本快速切换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令行管理node版本快速切换"}},[e._v("#")]),e._v(" 命令行管理node版本快速切换")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"}},[e._v("microsoft documents"),n("OutboundLink")],1),n("br"),e._v(" "),n("a",{attrs:{href:"https://github.com/Schniz/fnm#:~:text=Using%20a%20release%20binary%20%28Linux%2FmacOS%2FWindows%29%201%20Download%20the,variable%203%20Set%20up%20your%20shell%20for%20fnm",target:"_blank",rel:"noopener noreferrer"}},[e._v("fnm from github"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" fnm use --install-if-missing 18.0.0\nerror: We can't find the necessary environment variables to replace the Node version.\nYou should setup your shell profile to evaluate `fnm env`, see https://github.com/Schniz/fnm#shell-setup on how to do this\nCheck out our documentation for more information: https://fnm.vercel.app\n")])])]),n("p",[e._v("把"),n("code",[e._v("fnm env --use-on-cd | Out-String | Invoke-Expression")]),e._v("加到"),n("code",[e._v("profile")]),e._v("文件中")]),e._v(" "),n("p",[e._v("在命令行中执行"),n("code",[e._v("notepad $profile")]),e._v("命令可以打开"),n("code",[e._v("profile")]),e._v("文件")]),e._v(" "),n("h2",{attrs:{id:"设置全局默认node版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置全局默认node版本"}},[e._v("#")]),e._v(" 设置全局默认node版本")]),e._v(" "),n("p",[n("code",[e._v("fnm default 18")])]),e._v(" "),n("h2",{attrs:{id:"设置当前命令行node版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置当前命令行node版本"}},[e._v("#")]),e._v(" 设置当前命令行node版本")]),e._v(" "),n("p",[n("code",[e._v("fnm use 16")])]),e._v(" "),n("div",{staticClass:"language-powershell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# installs fnm (Fast Node Manager)")]),e._v("\nwinget install Schniz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("fnm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# download and install Node.js")]),e._v("\nfnm use "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install-if")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("missing 18\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# verifies the right Node.js version is in the environment")]),e._v("\nnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# should print `v18.20.3`")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# verifies the right NPM version is in the environment")]),e._v("\nnpm "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# should print `10.7.0`")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);