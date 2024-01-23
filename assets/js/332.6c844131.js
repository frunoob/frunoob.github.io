(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{538:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-备份-windows平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-备份-windows平台"}},[t._v("#")]),t._v(" mysql|备份|windows平台")]),t._v(" "),s("h2",{attrs:{id:"mysql自动备份到远程服务器-冷备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql自动备份到远程服务器-冷备份"}},[t._v("#")]),t._v(" mysql自动备份到远程服务器|冷备份")]),t._v(" "),s("p",[t._v("先备份到本地服务器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('@echo off\n@chcp 936\nset NAMES=utf8\nset hour=%time:~0,2%\nif "%time:~0,1%"==" " set hour=0%time:~1,1%\nset now=%date:~0,4%%date:~5,2%%date:~8,2%%hour%%time:~3,2%%time:~6,2%\nif "%1"=="" echo "please input database name, using comman like  (mysqlbackup.cmd <database>)" \nif "%1"=="" goto:EOF\nset database=%1\nset outFileName=%database%_%now%.sql\nmysqldump -q -u root --password=root  -r D:\\auto_backup\\mysql\\%outFileName%  %database%\n\n')])])]),s("p",[t._v("通过工具openssh使用SSH协议安全传输文件")]),t._v(" "),s("p",[t._v("工具下载网址 https://github.com/PowerShell/Win32-OpenSSH")]),t._v(" "),s("p",[t._v("安装工具之后会在计算机的防火墙中添加一个规则， "),s("code",[t._v("OpenSSH-Server-In-TCP")]),t._v(",此规则将允许放开端口22.")]),t._v(" "),s("p",[t._v("需要开放端口 配置ssh密钥  对于ssh服务器端有window版本限制 操作过于繁琐 考虑到一般在局域网中进行备份所以改用ftp协议作为文件传输的的新方式")]),t._v(" "),s("p",[t._v("ftp是window自带的功能，直接在window功能中添加即可\n在window下创建ftp服务器教程  https://zhuanlan.zhihu.com/p/411646279")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('@echo off\n@chcp 936\n\n\n@rem backup  destination\nset ftpip=192.168.8.84\nset ftp_name=ftpuser\nset ftp_pwd=ftpuser\nset ftp_path=.\\auto_backup\\mysql\\\nset ftp_local_dir=D:\\auto_backup\\mysql\\\n\n\n\nset NAMES=utf8\nset hour=%time:~0,2%\nif "%time:~0,1%"==" " set hour=0%time:~1,1%\nset now=%date:~0,4%%date:~5,2%%date:~8,2%%hour%%time:~3,2%%time:~6,2%\nif "%1"=="" echo "please input database name, using comman like  (mysqlbackup.cmd <database>)" \nif "%1"=="" goto:EOF\nset database=%1\nset outFileName=%database%_%now%.sql\nmysqldump -q -u root --password=root  -r %ftp_local_dir%%outFileName%  %database%\n\necho open %ftpip% >ftp.up\necho %ftp_name%>>ftp.up\necho %ftp_pwd%>>ftp.up\necho cd %ftp_path% >> ftp.up\necho binary>>ftp.up\necho mput %ftp_local_dir%%database%*.sql >>ftp.up\necho bye>>ftp.up\nftp -s:ftp.up\ndel ftp.up /q\n@rem pause\n')])])]),s("p",[t._v("备份文件的管理，自动清理多余备份")]),t._v(" "),s("p",[t._v("!n! 和setlocal enabledelayedexpansion搭配使用，批处理命令按行处理，最先进行的是变量的赋值，即将%x%替换成明确的值，然后在执行语句")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('pushd %ftp_local_dir%\nsetlocal enabledelayedexpansion\nset n=0\nfor /f "delims=" %%a in (\'dir /a-d-h /b /o-d %database%*.sql\') do (\nif !n! geq 7  del "%%~a"\nset /a n+=1 \n)\npopd\n')])])]),s("p",[t._v("最终完整版本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('@echo off\n@chcp 936\n\n\n@rem backup  destination\nset ftpip=192.168.8.84\nset ftp_name=ftpuser\nset ftp_pwd=ftpuser\nset ftp_path=.\\auto_backup\\mysql\\\nset ftp_local_dir=D:\\auto_backup\\mysql\\\n\n\n\nset NAMES=utf8\nset hour=%time:~0,2%\nif "%time:~0,1%"==" " set hour=0%time:~1,1%\nset now=%date:~0,4%%date:~5,2%%date:~8,2%%hour%%time:~3,2%%time:~6,2%\nif "%1"=="" echo "please input database name, using comman like  (mysqlbackup.cmd <database>)" \nif "%1"=="" goto:EOF\nset database=%1\nset outFileName=%database%_%now%.sql\nmysqldump -q -u root --password=root  -r %ftp_local_dir%%outFileName%  %database%\n\n\npushd %ftp_local_dir%\nsetlocal enabledelayedexpansion\nset n=0\nfor /f "delims=" %%a in (\'dir /a-d-h /b /o-d %database%*.sql\') do (\nif !n! geq 7  del "%%~a"\nset /a n+=1 \n)\npopd\n\necho open %ftpip% >ftp.up\necho %ftp_name%>>ftp.up\necho %ftp_pwd%>>ftp.up\necho cd %ftp_path% >> ftp.up\necho prompt yes >> ftp.up\necho mdelete  %database%*.sql >> ftp.up\necho binary>>ftp.up\necho mput %ftp_local_dir%%database%*.sql >>ftp.up\necho bye>>ftp.up\nftp -s:ftp.up\ndel ftp.up /q\npause\n')])])]),s("p",[t._v("后记，windowftp服务器搭建以及计划任务程序注意事项")]),t._v(" "),s("p",[t._v("添加Ftp功能: 启用或关闭windows功能-internet information services-FTP服务器 + web管理工具\n添加用户: windows管理工具-计算机管理-本地用户和组-用户（右击-新用户）：用户名ftpuser 密码： ftpuser 仅勾选用户不能更改密码和密码永不过期 其余不要勾选\n建站： 管理工具-Internet Information Services (IIS)管理器\n网站（右击）：添加ftp服务器-规定物理路径 (随意)")]),t._v(" "),s("p",[t._v("数据库所在服务器要手动创建文件夹D:\\auto_backup\\mysql\\")]),t._v(" "),s("p",[t._v("计划任务  taskschd.msc")]),t._v(" "),s("p",[t._v("服务  service.msc")]),t._v(" "),s("p",[t._v("计算机管理  compmgmt.msc")]),t._v(" "),s("h2",{attrs:{id:"热备份-xtrabackup-wsl-linux-window子系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热备份-xtrabackup-wsl-linux-window子系统"}},[t._v("#")]),t._v(" 热备份|xtrabackup|wsl|linux|window子系统")]),t._v(" "),s("p",[t._v("生产环境无法进行完整备份，因为数据库24小时都在周期性高强度运行，备份严重影响了系统的稳定性。")]),t._v(" "),s("p",[t._v("xtrabackup的优点：热备份 ，详细的看官网介绍吧")]),t._v(" "),s("p",[t._v("本地测试，搭建环境")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("环境")]),t._v(" "),s("p",[t._v("windows server 2019   version: 1809")]),t._v(" "),s("p",[t._v("数据库 mysql 5.7.38")])]),t._v(" "),s("ol",[s("li",[t._v("安装WSL（windows subsystem linux）,用于执行xtrabackup。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("参考教程")]),t._v(" "),s("p",[t._v("由于window版本少于1904 所以只能使用旧版WSL的手动安装方法，无法安装WSL 2，所以参考以下教程")]),t._v(" "),s("p",[t._v("https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用WSL功能")]),t._v("\ndism"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("online "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable-feature")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("featurename:Microsoft"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Windows"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Subsystem"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Linux "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("all "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("norestart\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 装所选的 Linux 分发")]),t._v("\n\ncurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("L "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o ubuntu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("2004"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appx https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("aka"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ms"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wslubuntu2004\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装linux")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-AppxPackage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\ubuntu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("2004"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后必须要手动点开开始菜单里刚安装上的ubuntu，等待它完成初始化之后，才能在powershell通过执行`bash`命令来随时随地进入linux系统")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但是如果是通过ssh连接的window，无法手动点击开始菜单里的应用，那么只能通过powershell来启动windows的内置应用了。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#该命令只能展示第三方应用")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为ubuntu属于universal windows app（UWP），因为windows自身限制所以很难直接找到其安装目录，所以可以通过以下命令获取到全部的UWP应用信息")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\Users\\fqq> "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-AppxPackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" findstr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ubuntu"')]),t._v("\n507:Name              : CanonicalGroupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows\n512:PackageFullName   : CanonicalGroupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows_2004"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2021"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("825"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0_x64__79rhkp1fndgsc\n513:InstallLocation   : C:\\Program Files\\WindowsApps\\CanonicalGroupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows_2004"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2021"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("825"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0_x64__79rhkp1fndg\n516:PackageFamilyName : CanonicalGroupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows_79rhkp1fndgsc\n522:Dependencies      : "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CanonicalGroupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows_2004"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2021"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("825"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0_neutral_split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("150_79rhkp1fndgsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Canon\n523:                    icalGroupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows_2004"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2021"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("825"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0_neutral_split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("100_79rhkp1fndgsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CanonicalGr\n524:                    oupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows_2004"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2021"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("825"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0_neutral_split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("125_79rhkp1fndgsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过以上命令可以得到ubuntu应用的name和PackageFamilyName，当然还有installLocation，但是该地址是无法访问的，紧接着，我们要启动它该如何做呢，通过简单的查找来直接启动")]),t._v("\nexplorer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe shell:appsFolder\\<PackageFamilyName>"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ubuntu "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只需要把PackageFamilyName替换成你刚刚查询出来的即可")]),t._v("\n\nexplorer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe shell:appsFolder\\CanonicalGroupLimited"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UbuntuonWindows_79rhkp1fndgsc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ubuntu\n\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);