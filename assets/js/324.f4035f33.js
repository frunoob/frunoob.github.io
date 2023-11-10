(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{528:function(t,e,a){"use strict";a.r(e);var n=a(5),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql自动备份到远程服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql自动备份到远程服务器"}},[t._v("#")]),t._v(" mysql自动备份到远程服务器")]),t._v(" "),a("p",[t._v("先备份到本地服务器")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@echo off\n@chcp 936\nset NAMES=utf8\nset hour=%time:~0,2%\nif "%time:~0,1%"==" " set hour=0%time:~1,1%\nset now=%date:~0,4%%date:~5,2%%date:~8,2%%hour%%time:~3,2%%time:~6,2%\nif "%1"=="" echo "please input database name, using comman like  (mysqlbackup.cmd <database>)" \nif "%1"=="" goto:EOF\nset database=%1\nset outFileName=%database%_%now%.sql\nmysqldump -q -u root --password=root  -r D:\\auto_backup\\mysql\\%outFileName%  %database%\n\n')])])]),a("p",[t._v("通过工具openssh使用SSH协议安全传输文件")]),t._v(" "),a("p",[t._v("工具下载网址 https://github.com/PowerShell/Win32-OpenSSH")]),t._v(" "),a("p",[t._v("安装工具之后会在计算机的防火墙中添加一个规则， "),a("code",[t._v("OpenSSH-Server-In-TCP")]),t._v(",此规则将允许放开端口22.")]),t._v(" "),a("p",[t._v("需要开放端口 配置ssh密钥  对于ssh服务器端有window版本限制 操作过于繁琐 考虑到一般在局域网中进行备份所以改用ftp协议作为文件传输的的新方式")]),t._v(" "),a("p",[t._v("ftp是window自带的功能，直接在window功能中添加即可\n在window下创建ftp服务器教程  https://zhuanlan.zhihu.com/p/411646279")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@echo off\n@chcp 936\n\n\n@rem backup  destination\nset ftpip=192.168.8.84\nset ftp_name=ftpuser\nset ftp_pwd=ftpuser\nset ftp_path=.\\auto_backup\\mysql\\\nset ftp_local_dir=D:\\auto_backup\\mysql\\\n\n\n\nset NAMES=utf8\nset hour=%time:~0,2%\nif "%time:~0,1%"==" " set hour=0%time:~1,1%\nset now=%date:~0,4%%date:~5,2%%date:~8,2%%hour%%time:~3,2%%time:~6,2%\nif "%1"=="" echo "please input database name, using comman like  (mysqlbackup.cmd <database>)" \nif "%1"=="" goto:EOF\nset database=%1\nset outFileName=%database%_%now%.sql\nmysqldump -q -u root --password=root  -r %ftp_local_dir%%outFileName%  %database%\n\necho open %ftpip% >ftp.up\necho %ftp_name%>>ftp.up\necho %ftp_pwd%>>ftp.up\necho cd %ftp_path% >> ftp.up\necho binary>>ftp.up\necho mput %ftp_local_dir%%database%*.sql >>ftp.up\necho bye>>ftp.up\nftp -s:ftp.up\ndel ftp.up /q\n@rem pause\n')])])]),a("p",[t._v("备份文件的管理，自动清理多余备份")]),t._v(" "),a("p",[t._v("!n! 和setlocal enabledelayedexpansion搭配使用，批处理命令按行处理，最先进行的是变量的赋值，即将%x%替换成明确的值，然后在执行语句")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('pushd %ftp_local_dir%\nsetlocal enabledelayedexpansion\nset n=0\nfor /f "delims=" %%a in (\'dir /a-d-h /b /o-d %database%*.sql\') do (\nif !n! geq 7  del "%%~a"\nset /a n+=1 \n)\npopd\n')])])]),a("p",[t._v("最终完整版本")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@echo off\n@chcp 936\n\n\n@rem backup  destination\nset ftpip=192.168.8.84\nset ftp_name=ftpuser\nset ftp_pwd=ftpuser\nset ftp_path=.\\auto_backup\\mysql\\\nset ftp_local_dir=D:\\auto_backup\\mysql\\\n\n\n\nset NAMES=utf8\nset hour=%time:~0,2%\nif "%time:~0,1%"==" " set hour=0%time:~1,1%\nset now=%date:~0,4%%date:~5,2%%date:~8,2%%hour%%time:~3,2%%time:~6,2%\nif "%1"=="" echo "please input database name, using comman like  (mysqlbackup.cmd <database>)" \nif "%1"=="" goto:EOF\nset database=%1\nset outFileName=%database%_%now%.sql\nmysqldump -q -u root --password=root  -r %ftp_local_dir%%outFileName%  %database%\n\n\npushd %ftp_local_dir%\nsetlocal enabledelayedexpansion\nset n=0\nfor /f "delims=" %%a in (\'dir /a-d-h /b /o-d %database%*.sql\') do (\nif !n! geq 7  del "%%~a"\nset /a n+=1 \n)\npopd\n\necho open %ftpip% >ftp.up\necho %ftp_name%>>ftp.up\necho %ftp_pwd%>>ftp.up\necho cd %ftp_path% >> ftp.up\necho prompt yes >> ftp.up\necho mdelete  %database%*.sql >> ftp.up\necho binary>>ftp.up\necho mput %ftp_local_dir%%database%*.sql >>ftp.up\necho bye>>ftp.up\nftp -s:ftp.up\ndel ftp.up /q\npause\n')])])]),a("p",[t._v("后记，windowftp服务器搭建以及计划任务程序注意事项")]),t._v(" "),a("p",[t._v("添加Ftp功能: 启用或关闭windows功能-internet information services-FTP服务器 + web管理工具\n添加用户: windows管理工具-计算机管理-本地用户和组-用户（右击-新用户）：用户名ftpuser 密码： ftpuser 仅勾选用户不能更改密码和密码永不过期 其余不要勾选\n建站： 管理工具-Internet Information Services (IIS)管理器\n网站（右击）：添加ftp服务器-规定物理路径 (随意)")]),t._v(" "),a("p",[t._v("数据库所在服务器要手动创建文件夹D:\\auto_backup\\mysql\\")]),t._v(" "),a("p",[t._v("计划任务  taskschd.msc")]),t._v(" "),a("p",[t._v("服务  service.msc")]),t._v(" "),a("p",[t._v("计算机管理  compmgmt.msc")])])}),[],!1,null,null,null);e.default=s.exports}}]);