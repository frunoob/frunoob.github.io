(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{489:function(e,s,n){"use strict";n.r(s);var a=n(5),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"dump-svn-serve-on-windows-在windows上备份svn数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dump-svn-serve-on-windows-在windows上备份svn数据库"}},[e._v("#")]),e._v(" dump svn serve on windows(在windows上备份svn数据库)")]),e._v(" "),n("h2",{attrs:{id:"_1-first-of-all-you-need-create-a-svn-service-on-windows-by-sc-exe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-first-of-all-you-need-create-a-svn-service-on-windows-by-sc-exe"}},[e._v("#")]),e._v(" 1.first of all, you need create a svn service on windows by "),n("code",[e._v("sc.exe")]),e._v(".")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("usage")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("用法:\n        sc <server> create [service name] [binPath= ] <option1> <option2>...\n\n选项:\n注意: 选项名称包括等号。\n      等号和值之间需要一个空格。\n type= <own|share|interact|kernel|filesys|rec|userown|usershare>\n       (默认 = own)\n start= <boot|system|auto|demand|disabled|delayed-auto>\n       (默认 = demand)\n error= <normal|severe|critical|ignore>\n       (默认 = normal)\n binPath= <.exe 文件的 BinaryPathName>\n group= <LoadOrderGroup>\n tag= <yes|no>\n depend= <依存关系(以 / (斜杠)分隔)>\n obj= <AccountName|ObjectName>\n       (默认= LocalSystem)\n DisplayName= <显示名称>\n password= <密码>\n")])])])]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("some errors")]),e._v(" "),n("p",[e._v("问题： "),n("code",[e._v("Set-Content : 找不到接受实际参数“binpath=”的位置形式参数。")]),n("br"),e._v("\n解决： 不要使用powersheell，直接使用cmd，在powershell命令行输入cmd回车后进入cmd命令行")]),e._v(" "),n("p",[e._v("问题： [SC] OpenSCManager 失败 5: 拒绝访问。"),n("br"),e._v("\n解决： 右击开始菜单，以管理员身份进入powershell，然后在通过cmd命令进入到cmd命令行界面")])]),e._v(" "),n("div",{staticClass:"language-cmd extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('C:\\WINDOWS\\system32>sc create svn binpath= "C:\\Program Files\\TortoiseSVN\\bin\\svnserve.exe --service -r C:\\home\\svn" DisplayName= "Subversion Server" depend= Tcpip start= auto\n[SC] CreateService 成功\n\n')])])]),n("h2",{attrs:{id:"_2-use-svnrdump-to-store-svn-serve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-use-svnrdump-to-store-svn-serve"}},[e._v("#")]),e._v(" 2.use svnrdump to store svn serve")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("svnrdump和svnadmin dump的区别")])]),e._v(" "),n("div",{staticClass:"language-cmd extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("svnrdump dump svn://192.168.1.1/svn > svnexport1.dump --username username --password password\n")])])]),n("h2",{attrs:{id:"_3-use-dump-file-above-to-restore-svn-on-new-svn-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-use-dump-file-above-to-restore-svn-on-new-svn-repository"}},[e._v("#")]),e._v(" 3.use dump file above to restore svn on new svn repository")]),e._v(" "),n("div",{staticClass:"language-cmd extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\nsvnrdump load svn://192.168.1.1/newSvn  -F svnexport1.dump --username username --password password\n")])])]),n("p",[e._v("自动备份dump到远程文件管理服务器中")]),e._v(" "),n("div",{staticClass:"language-cmd extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@echo off\n@chcp 936\n\nset local_dir=D:\\backup\\svn-backup\\\nset remote_dir=Z:\\svn-backup\\\nset svn_ip=192.168.30.9:3699\n\nset NAMES=utf8\nset hour=%time:~0,2%\nif "%time:~0,1%"==" " set hour=0%time:~1,1%\nset now=%date:~0,4%%date:~5,2%%date:~8,2%%hour%%time:~3,2%%time:~6,2%\nset outFileName=%now%.dump\n\nsvnrdump dump  svn://%svn_ip% > %local_dir%%outFileName% --username d02 --password 123456\n\npushd %local_dir%\nsetlocal enabledelayedexpansion\nset n=0\nfor /f "delims=" %%a in (\'dir /a-d-h /b /o-d *.dump\') do (\nif !n! geq 7  del "%%~a"\nset /a n+=1 \n)\npopd\n\ncopy %local_dir%%outFileName% %remote_dir%\n\npushd %remote_dir%\nsetlocal enabledelayedexpansion\nset n=0\nfor /f "delims=" %%a in (\'dir /a-d-h /b /o-d *.dump\') do (\nif !n! geq 7  del "%%~a"\nset /a n+=1 \n)\npopd\n\n\n\npause\n\n')])])])])}),[],!1,null,null,null);s.default=t.exports}}]);