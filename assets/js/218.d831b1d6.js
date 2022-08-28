(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{422:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux命令"}},[t._v("#")]),t._v(" linux命令")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#bash脚本"}},[t._v("bash脚本")])]),s("li",[s("a",{attrs:{href:"#进程管理"}},[t._v("进程管理")]),s("ul",[s("li",[s("a",{attrs:{href:"#xargs"}},[t._v("xargs")])]),s("li",[s("a",{attrs:{href:"#ps"}},[t._v("ps")])]),s("li",[s("a",{attrs:{href:"#crontab"}},[t._v("crontab")])]),s("li",[s("a",{attrs:{href:"#awk"}},[t._v("awk")])]),s("li",[s("a",{attrs:{href:"#nohup"}},[t._v("nohup")])])])]),s("li",[s("a",{attrs:{href:"#系统管理"}},[t._v("系统管理")]),s("ul",[s("li",[s("a",{attrs:{href:"#用户管理"}},[t._v("用户管理")])]),s("li",[s("a",{attrs:{href:"#ss"}},[t._v("ss")])]),s("li",[s("a",{attrs:{href:"#netstat"}},[t._v("netstat")])]),s("li",[s("a",{attrs:{href:"#sysv-rc-conf"}},[t._v("sysv-rc-conf")])]),s("li",[s("a",{attrs:{href:"#删除服务"}},[t._v("删除服务")])]),s("li",[s("a",{attrs:{href:"#系统温度监测"}},[t._v("系统温度监测")])])])]),s("li",[s("a",{attrs:{href:"#git"}},[t._v("GIT")]),s("ul",[s("li",[s("a",{attrs:{href:"#branch"}},[t._v("branch")])]),s("li",[s("a",{attrs:{href:"#config"}},[t._v("config")])]),s("li",[s("a",{attrs:{href:"#log"}},[t._v("log")])]),s("li",[s("a",{attrs:{href:"#diff"}},[t._v("diff")])]),s("li",[s("a",{attrs:{href:"#reset"}},[t._v("reset")])])])]),s("li",[s("a",{attrs:{href:"#文件管理"}},[t._v("文件管理")]),s("ul",[s("li",[s("a",{attrs:{href:"#tar"}},[t._v("tar")])]),s("li",[s("a",{attrs:{href:"#gzip"}},[t._v("gzip")])]),s("li",[s("a",{attrs:{href:"#scp"}},[t._v("scp")])]),s("li",[s("a",{attrs:{href:"#cat"}},[t._v("cat")])]),s("li",[s("a",{attrs:{href:"#chmod"}},[t._v("chmod")])]),s("li",[s("a",{attrs:{href:"#find"}},[t._v("find")])])])]),s("li",[s("a",{attrs:{href:"#内容编辑"}},[t._v("内容编辑")]),s("ul",[s("li",[s("a",{attrs:{href:"#wc"}},[t._v("wc")])]),s("li",[s("a",{attrs:{href:"#grep"}},[t._v("grep")])]),s("li",[s("a",{attrs:{href:"#sort"}},[t._v("sort")])]),s("li",[s("a",{attrs:{href:"#vim"}},[t._v("vim")])])])]),s("li",[s("a",{attrs:{href:"#磁盘管理"}},[t._v("磁盘管理")]),s("ul",[s("li",[s("a",{attrs:{href:"#du"}},[t._v("du")])]),s("li",[s("a",{attrs:{href:"#df-disk-free"}},[t._v("df(disk free)")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"bash脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bash脚本"}},[t._v("#")]),t._v(" bash脚本")]),t._v(" "),s("p",[t._v("Bash 这个名字是 Bourne-Again SHell 的首字母缩写，是对 Stephen Bourne 这个名字的双关语，Stephen Bourne 是 Bash 的前任之一的创造者。")]),t._v(" "),s("ol",[s("li",[t._v("对变量进行赋值的时候等于号的两边不能有空格。"),s("br"),t._v("\n错误示例")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a b c"')]),t._v("\n")])])]),s("p",[t._v("正确写法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a b c"')]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("function"),s("br"),t._v("\n如果可能的话，函数应该有提到描述、全局变量、参数、输出和返回值的注释。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#######################################")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Description: Hello function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Globals:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   None")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Arguments:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Single input argument")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Outputs:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Value of input argument")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Returns:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   0 if successful, non-zero on error.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#######################################")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('!"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("为了能够调试bash脚本，可以在执行脚本的时候使用参数"),s("code",[t._v("-x")])])]),t._v(" "),s("div",{staticClass:"summary"},[s("p",{staticClass:"title"},[t._v("[]")]),s("p",[t._v("bash -x ./your_script.sh")])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("jq JSON处理器")])]),t._v(" "),s("h2",{attrs:{id:"进程管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[t._v("#")]),t._v(" 进程管理")]),t._v(" "),s("h3",{attrs:{id:"xargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xargs"}},[t._v("#")]),t._v(" xargs")]),t._v(" "),s("p",[t._v("管道输入变参数")]),t._v(" "),s("p",[t._v("例如，删除当前文件夹下的所有文件\n"),s("code",[t._v("ls | xargs rm")])]),t._v(" "),s("h3",{attrs:{id:"ps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[t._v("#")]),t._v(" ps")]),t._v(" "),s("p",[s("code",[t._v("ps aux")])]),t._v(" "),s("h3",{attrs:{id:"crontab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crontab"}},[t._v("#")]),t._v(" crontab")]),t._v(" "),s("p",[t._v("crontab  is  the  program  used  to  install, deinstall or list the tables used to drive the\ncron(8) daemon in Vixie Cron.  Each user can have their own crontab, and  though  these  are\nfiles in /var/spool/cron/crontabs, they are not intended to be edited directly.")]),t._v(" "),s("p",[s("code",[t._v("crontab -e")]),t._v(" open the config file")]),t._v(" "),s("h3",{attrs:{id:"awk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[t._v("#")]),t._v(" awk")]),t._v(" "),s("p",[s("strong",[t._v("kill progress by name")]),t._v(":"),s("br"),t._v(" "),s("code",[t._v("kill -9 $(ps aux | grep 'top' | awk '{print $2}' | head -n 1)")])]),t._v(" "),s("h3",{attrs:{id:"nohup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nohup"}},[t._v("#")]),t._v(" nohup")]),t._v(" "),s("p",[t._v("忽略挂断信号，当ssh连接断开时，所有的子进程都会中断。"),s("br"),t._v("\nRun COMMAND, ignoring hangup signals."),s("br"),t._v(" "),s("code",[t._v("nohup COMMAND &")])]),t._v(" "),s("h2",{attrs:{id:"系统管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统管理"}},[t._v("#")]),t._v(" 系统管理")]),t._v(" "),s("h3",{attrs:{id:"用户管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[t._v("#")]),t._v(" 用户管理")]),t._v(" "),s("p",[s("strong",[t._v("useradd")]),s("br"),t._v(" "),s("code",[t._v("sudo useradd /home/test test -p password")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("无论是否设置了密码都要在添加用户之后，再次设置一次密码，否则远程登陆时无法正常登录。"),s("code",[t._v("sudo passwd test")])])]),t._v(" "),s("p",[s("strong",[t._v("userdel")]),s("br"),t._v(" "),s("strong",[t._v("usermod")])]),t._v(" "),s("h3",{attrs:{id:"ss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ss"}},[t._v("#")]),t._v(" ss")]),t._v(" "),s("p",[t._v("查看进程套接字信息。端口信息\n"),s("code",[t._v("ss")])]),t._v(" "),s("h3",{attrs:{id:"netstat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[t._v("#")]),t._v(" netstat")]),t._v(" "),s("p",[t._v("这个程序主要是为了打印网络接口信息，但是这个程序在2022年来看已经是过时的了。"),s("br"),t._v("\n目前可以使用"),s("code",[t._v("ss")]),t._v("来替换"),s("code",[t._v("netstat")]),t._v("， "),s("code",[t._v("ip route")]),t._v(" 来替换"),s("code",[t._v("netstat -r")]),t._v("， "),s("code",[t._v("netstat -i")]),t._v(" 可以使用"),s("code",[t._v("ip -s link")]),t._v(". 使用"),s("code",[t._v("ip maddr")]),t._v("来替换"),s("code",[t._v("netstat -g")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Usage: ss [ OPTIONS ]\n       ss [ OPTIONS ] [ FILTER ]\n   -h, --help          this message\n   -V, --version       output version information\n   -n, --numeric       don't resolve service names\n   -r, --resolve       resolve host names\n   -a, --all           display all sockets\n   -l, --listening     display listening sockets\n   -o, --options       show timer information\n   -e, --extended      show detailed socket information\n   -m, --memory        show socket memory usage\n   -p, --processes     show process using socket\n   -i, --info          show internal TCP information\n       --tipcinfo      show internal tipc socket information\n   -s, --summary       show socket usage summary\n       --tos           show tos and priority information\n       --cgroup        show cgroup information\n   -b, --bpf           show bpf filter socket information\n   -E, --events        continually display sockets as they are destroyed\n   -Z, --context       display process SELinux security contexts\n   -z, --contexts      display process and socket SELinux security contexts\n   -N, --net           switch to the specified network namespace name\n\n   -4, --ipv4          display only IP version 4 sockets\n   -6, --ipv6          display only IP version 6 sockets\n   -0, --packet        display PACKET sockets\n   -t, --tcp           display only TCP sockets\n   -M, --mptcp         display only MPTCP sockets\n   -S, --sctp          display only SCTP sockets\n   -u, --udp           display only UDP sockets\n   -d, --dccp          display only DCCP sockets\n   -w, --raw           display only RAW sockets\n   -x, --unix          display only Unix domain sockets\n       --tipc          display only TIPC sockets\n       --vsock         display only vsock sockets\n   -f, --family=FAMILY display sockets of type FAMILY\n       FAMILY := {inet|inet6|link|unix|netlink|vsock|tipc|xdp|help}\n\n   -K, --kill          forcibly close sockets, display what was closed\n   -H, --no-header     Suppress header line\n   -O, --oneline       socket's data printed on a single line\n       --inet-sockopt  show various inet socket options\n\n   -A, --query=QUERY, --socket=QUERY\n       QUERY := {all|inet|tcp|mptcp|udp|raw|unix|unix_dgram|unix_stream|unix_seqpacket|packet|netlink|vsock_stream|vsock_dgram|tipc}[,QUERY]\n\n   -D, --diag=FILE     Dump raw information about TCP sockets to FILE\n   -F, --filter=FILE   read filter information from FILE\n       FILTER := [ state STATE-FILTER ] [ EXPRESSION ]\n       STATE-FILTER := {all|connected|synchronized|bucket|big|TCP-STATES}\n         TCP-STATES := {established|syn-sent|syn-recv|fin-wait-{1,2}|time-wait|closed|close-wait|last-ack|listening|closing}\n          connected := {established|syn-sent|syn-recv|fin-wait-{1,2}|time-wait|close-wait|last-ack|closing}\n       synchronized := {established|syn-recv|fin-wait-{1,2}|time-wait|close-wait|last-ack|closing}\n             bucket := {syn-recv|time-wait}\n                big := {established|syn-sent|fin-wait-{1,2}|closed|close-wait|last-ack|listening|closing}\n")])])]),s("h3",{attrs:{id:"sysv-rc-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sysv-rc-conf"}},[t._v("#")]),t._v(" sysv-rc-conf")]),t._v(" "),s("p",[t._v("查看服务运行情况，并且可以开启或关闭指定服务")]),t._v(" "),s("h3",{attrs:{id:"删除服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除服务"}},[t._v("#")]),t._v(" 删除服务")]),t._v(" "),s("p",[s("code",[t._v("sudo update-rc.d ServiceName remove")])]),t._v(" "),s("h3",{attrs:{id:"系统温度监测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统温度监测"}},[t._v("#")]),t._v(" 系统温度监测")]),t._v(" "),s("p",[s("code",[t._v("watch -n 2 sensors")]),t._v(" 每两秒刷新一下信息")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Every 2.0s: sensors          penetration-fqq: Mon Jun  6 15:56:22 2022\n\ncoretemp-isa-0000  //cpu 两个物理核心\nAdapter: ISA adapter\nPackage id 0:  +37.0°C  (high = +100.0°C, crit = +100.0°C)\nCore 0:        +38.0°C  (high = +100.0°C, crit = +100.0°C)\nCore 1:        +35.0°C  (high = +100.0°C, crit = +100.0°C)\n\namdgpu-pci-0100  //gpu\nAdapter: PCI adapter\nvddgfx:      806.00 mV\nedge:         +39.0°C  (crit = +104000.0°C, hyst = -273.1°C)\nslowPPT:     572.15 W  (cap =  15.00 W)\n\npch_skylake-virtual-0\nAdapter: Virtual device\ntemp1:        +39.5°C\n\nBAT0-acpi-0\nAdapter: ACPI interface\nin0:           8.44 V\n")])])]),s("h2",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" GIT")]),t._v(" "),s("h3",{attrs:{id:"branch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[t._v("#")]),t._v(" branch")]),t._v(" "),s("p",[s("strong",[t._v("修改分支名称：")]),s("br"),t._v(" "),s("code",[t._v("branch -m [old_branch] <new_branch>")])]),t._v(" "),s("p",[s("strong",[t._v("显示全部分支")]),s("br"),t._v(" "),s("code",[t._v("git branch -a")])]),t._v(" "),s("p",[s("strong",[t._v("显示当前分支名称")]),s("br"),t._v(" "),s("code",[t._v("git branch --show-current")])]),t._v(" "),s("h3",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" config")]),t._v(" "),s("p",[s("code",[t._v("git config --global --edit")]),t._v(" your name and email address were configured in this file")]),t._v(" "),s("h3",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("                                                                                                        \n┌──"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log      \ncommit de14fcc22521e0c64bfdb4dccbda9e281efe2acc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":02:56 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    edit flagj\n\ncommit 1dbfdfb1d913a4c517f550fc65b9d24ee907c0ea\nAuthor: root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":17:31 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    flag\n                                                                                                        \n┌──"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --all\ncommit de14fcc22521e0c64bfdb4dccbda9e281efe2acc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":02:56 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    edit flagj\n\ncommit 1dbfdfb1d913a4c517f550fc65b9d24ee907c0ea\nAuthor: root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":17:31 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    flag\n                                                                                                        \n┌──"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ \n")])])]),s("h3",{attrs:{id:"diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("┌──"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD HEAD^                   \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/flag b/flag\nindex 3d18cbe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("4b30686 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/flag\n+++ b/flag\n@@ -1,3 +1 @@\n flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n-nihao\n-laskfjaslfj\n                                                                                                        \n┌──"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ \n")])])]),s("h3",{attrs:{id:"reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),s("p",[t._v("reset current HEAD to specific state")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("┌──"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^                                                                   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v(" ⨯\nHEAD is now at 1dbfdfb flag\n                                                                                                        \n┌──"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log               \ncommit 1dbfdfb1d913a4c517f550fc65b9d24ee907c0ea "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":17:31 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    flag\n                                                                                                        \n")])])]),s("h2",{attrs:{id:"文件管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[t._v("#")]),t._v(" 文件管理")]),t._v(" "),s("h3",{attrs:{id:"tar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[t._v("#")]),t._v(" tar")]),t._v(" "),s("p",[s("code",[t._v("tar -xf archive.tar")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Examples:\n  tar -cf archive.tar foo bar  # Create archive.tar from files foo and bar.\n  tar -tvf archive.tar         # List all files in archive.tar verbosely.\n  tar -xf archive.tar          # Extract all files from archive.tar.\n  tar -rvf archive.tar newfile # append newfile to the end of an archive\n\n Main operation mode:\n  -A, --catenate, --concatenate   append tar files to an archive\n  -c, --create               create a new archive\n      --delete               delete from the archive (not on mag tapes!)\n  -d, --diff, --compare      find differences between archive and file system\n  -r, --append               append files to the end of an archive\n      --test-label           test the archive volume label and exit\n  -t, --list                 list the contents of an archive\n  -u, --update               only append files newer than copy in archive\n  -x, --extract, --get       extract files from an archive\n\n")])])]),s("h3",{attrs:{id:"gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[t._v("#")]),t._v(" gzip")]),t._v(" "),s("p",[t._v("just work on single file\n"),s("code",[t._v("gzip -d archive.gz")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Usage: gzip [OPTION]... [FILE]...\nCompress or uncompress FILEs (by default, compress FILES in-place).\n\nMandatory arguments to long options are mandatory for short options too.\n\n  -c, --stdout      write on standard output, keep original files unchanged\n  -d, --decompress  decompress\n  -f, --force       force overwrite of output file and compress links\n  -h, --help        give this help\n  -k, --keep        keep (don't delete) input files\n  -l, --list        list compressed file contents\n  -L, --license     display software license\n  -n, --no-name     do not save or restore the original name and timestamp\n  -N, --name        save or restore the original name and timestamp\n  -q, --quiet       suppress all warnings\n  -r, --recursive   operate recursively on directories\n      --rsyncable   make rsync-friendly archive\n  -S, --suffix=SUF  use suffix SUF on compressed files\n      --synchronous synchronous output (safer if system crashes, but slower)\n  -t, --test        test compressed file integrity\n  -v, --verbose     verbose mode\n  -V, --version     display version number\n  -1, --fast        compress faster\n  -9, --best        compress better\n\n")])])]),s("h3",{attrs:{id:"scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[t._v("#")]),t._v(" scp")]),t._v(" "),s("p",[t._v("OpenSSH secure file copy")]),t._v(" "),s("p",[t._v("copy single file from remote.\n"),s("code",[t._v("scp <user-name>@<remote-ip>:<source-file-name> <target-file-path-name>")])]),t._v(" "),s("p",[t._v("copy entire directories.\n"),s("code",[t._v("scp -r <user-name>@<remote-ip>:<source-directory-name> <target-directory-name>")])]),t._v(" "),s("h3",{attrs:{id:"cat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[t._v("#")]),t._v(" cat")]),t._v(" "),s("p",[s("code",[t._v("cat -n <file>")]),t._v(" 显示行号")]),t._v(" "),s("p",[s("code",[t._v("cat -b <file>")]),t._v(" 显示行号（除了空白行）")]),t._v(" "),s("p",[s("code",[t._v("cat -b <file1> <file2> >> <file3>")]),t._v(" 追加前两个文本内容到3")]),t._v(" "),s("p",[s("code",[t._v("cat /dev/null > <file>")]),t._v(" 清空文件")]),t._v(" "),s("p",[s("code",[t._v("cat /dev/fd0 > <file>")]),t._v(" 制作镜像文件")]),t._v(" "),s("p",[s("code",[t._v("cat <IMG_file> > /dev/fd0")]),t._v(" 将文件写入到软盘")]),t._v(" "),s("h3",{attrs:{id:"chmod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[t._v("#")]),t._v(" chmod")]),t._v(" "),s("p",[s("code",[t._v("chmod u=rwx,g=r,o=r <file>")])]),t._v(" "),s("p",[s("code",[t._v("chmod u+r <file>")])]),t._v(" "),s("p",[s("code",[t._v("chmod -R 777 <file>")]),t._v(" 递归变更权限")]),t._v(" "),s("h3",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" find")]),t._v(" "),s("p",[s("code",[t._v("find ./ -name 'log.txt'")])]),t._v(" "),s("p",[s("code",[t._v("find ./ -perm -u=x -type f")]),t._v(" 查找类型为一般文件且可运行的文件")]),t._v(" "),s("h2",{attrs:{id:"内容编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容编辑"}},[t._v("#")]),t._v(" 内容编辑")]),t._v(" "),s("h3",{attrs:{id:"wc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wc"}},[t._v("#")]),t._v(" wc")]),t._v(" "),s("p",[s("code",[t._v("wc -w")]),t._v(" 显示字数")]),t._v(" "),s("p",[s("code",[t._v("wc -l")]),t._v(" 显示行数")]),t._v(" "),s("h3",{attrs:{id:"grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[t._v("#")]),t._v(" grep")]),t._v(" "),s("p",[s("code",[t._v("grep 'log'")])]),t._v(" "),s("p",[t._v("排除指定内容的行")]),t._v(" "),s("p",[s("code",[t._v("grep -v 'name'")])]),t._v(" "),s("h3",{attrs:{id:"sort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[t._v("#")]),t._v(" sort")]),t._v(" "),s("p",[s("code",[t._v("sort -n [file]")]),t._v(" 按照数值大小排序")]),t._v(" "),s("p",[s("code",[t._v("sort -r [file]")]),t._v(" 逆排序")]),t._v(" "),s("h3",{attrs:{id:"vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[t._v("#")]),t._v(" vim")]),t._v(" "),s("p",[s("code",[t._v("vim -r")]),t._v(" show temp file in "),s("code",[t._v("/tmp")]),t._v(", "),s("code",[t._v("/var/tmp/")]),t._v(", "),s("code",[t._v("~/tmp/")]),t._v(", './'")]),t._v(" "),s("p",[s("code",[t._v("vim -r flag")]),t._v(" 显示当前目录下的flag的缓存文件，当对flag文件进行编辑的过程中，意外强制关闭了vim编辑器之后，可以通过此方法来进行文件的恢复， 打开"),s("code",[t._v(".flag.swq")]),t._v("文件，并运行"),s("code",[t._v(":wq")]),t._v("命令即可将缓存中的修改应用到原文件中了，然后删除掉该缓存文件即可。若在编辑缓存文件的过程中，意外推出编辑器，则会生成新的缓存文件"),s("code",[t._v(".flag.swo")]),t._v(", 以此类推，若在编辑缓存文件的过程中仍然遇到了vim意外推出的状况，则会在当前目录下生成文件"),s("code",[t._v(".flag.swn")]),t._v(", "),s("code",[t._v(".flag.swm")]),t._v(", "),s("code",[t._v(".flag.swl")]),t._v(" ......"),s("br"),t._v("\n必须将换问文件全部删除之后才能正常打开原始文件。")]),t._v(" "),s("p",[s("code",[t._v("dw")]),s("br"),t._v("\n删除当前单词直到下一个单词开头(不包含首字母)")]),t._v(" "),s("p",[s("code",[t._v("de")]),s("br"),t._v("\n删除单词，直到该单词末尾（包含最后一个单词）")]),t._v(" "),s("p",[s("code",[t._v("d$")]),s("br"),t._v("\n删除单词一整行")]),t._v(" "),s("p",[s("code",[t._v("d2w")]),s("br"),t._v("\n删除两个单词")]),t._v(" "),s("p",[s("code",[t._v("dd")]),s("br"),t._v("\n删除一整行，并保存行到vim注册器中")]),t._v(" "),s("p",[s("code",[t._v("p")]),s("br"),t._v("\n将注册器中保存的行插入到当前行的下一行")]),t._v(" "),s("p",[s("code",[t._v("3dd")]),s("br"),t._v("\n删除三行")]),t._v(" "),s("p",[s("code",[t._v("2w")]),s("br"),t._v("\n光标移动两个单词至单词开头")]),t._v(" "),s("p",[s("code",[t._v("3e")]),s("br"),t._v("\n光标移动两个单词至单词末尾")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v("\n移动光标到行首")]),t._v(" "),s("p",[s("code",[t._v("u")]),s("br"),t._v("\n撤销动作")]),t._v(" "),s("p",[s("code",[t._v("U")]),s("br"),t._v("\n撤销当前行的所有动作")]),t._v(" "),s("p",[s("code",[t._v("CTRL-R")]),s("br"),t._v("\n重做")]),t._v(" "),s("p",[s("code",[t._v("rx")]),s("br"),t._v("\n替换当前光标下的字为x")]),t._v(" "),s("p",[s("code",[t._v("R")]),s("br"),t._v("\n输入并替换文本")]),t._v(" "),s("p",[s("code",[t._v("ce")]),s("br"),t._v("\n删除单词至词尾并插入")]),t._v(" "),s("p",[s("code",[t._v("cc")]),s("br"),t._v("\n清空本行并插入")]),t._v(" "),s("p",[s("code",[t._v("G")]),s("br"),t._v("\n移动光标到文件的最后一行")]),t._v(" "),s("p",[s("code",[t._v("g")]),s("br"),t._v("\n移动光标到文本的第一行")]),t._v(" "),s("p",[s("code",[t._v("505G")]),s("br"),t._v("\n移动到第505行")]),t._v(" "),s("p",[s("code",[t._v("CTRL-O")]),s("br"),t._v("\n撤销行跳转操作")]),t._v(" "),s("p",[s("code",[t._v("CTRL-I")]),s("br"),t._v("\n重做行跳转操纵")]),t._v(" "),s("p",[s("code",[t._v("%")]),s("br"),t._v("\n匹配光标所在的括号对应的括号")]),t._v(" "),s("p",[s("code",[t._v(":s/thee/the/g")]),s("br"),t._v("\n替换行中所有的thee为the")]),t._v(" "),s("p",[s("code",[t._v(":1,5s/old/new/g")]),s("br"),t._v("\n替换1到5行的old为new")]),t._v(" "),s("p",[s("code",[t._v(":%s/old/new/g")]),s("br"),t._v("\n全文替换")]),t._v(" "),s("p",[s("code",[t._v(":%s/old/new/gc")]),s("br"),t._v("\n替换之前会提示")]),t._v(" "),s("p",[s("code",[t._v("CTRL-G")]),s("br"),t._v("\n文档的状态")]),t._v(" "),s("p",[s("code",[t._v("?hello")]),s("br"),t._v("\n查找当前光标之前的所有的hello")]),t._v(" "),s("p",[s("code",[t._v("/hello")]),s("br"),t._v("\n查找当前光标之后的hello")]),t._v(" "),s("p",[s("code",[t._v("n")]),s("br"),t._v("\n移动到下一个查找结果")]),t._v(" "),s("p",[s("code",[t._v("N")]),s("br"),t._v("\n移动到上一个查找结果")]),t._v(" "),s("p",[s("code",[t._v(":!ls")]),s("br"),t._v("\n执行外部命令")]),t._v(" "),s("p",[s("code",[t._v(":w filename")]),s("br"),t._v("\n保存当前文件为指定名称")]),t._v(" "),s("p",[s("code",[t._v("o")]),s("br"),t._v("\n在下方插入一行")]),t._v(" "),s("p",[s("code",[t._v("O")]),s("br"),t._v("\n在上方插入一行")]),t._v(" "),s("p",[s("code",[t._v("a")]),t._v("\n在当前光标指向的字的后面插入")]),t._v(" "),s("p",[s("code",[t._v("y")]),s("br"),t._v("\n复制")]),t._v(" "),s("p",[s("code",[t._v("p")]),s("br"),t._v("\n粘贴")]),t._v(" "),s("p",[s("code",[t._v("j$``j0")]),s("br"),t._v("\n控制每次移动到下一行时，光标所在位置时行首还是行尾")]),t._v(" "),s("p",[s("code",[t._v(":set hls")]),s("br"),t._v("\n搜索结果高亮显示")]),t._v(" "),s("p",[s("code",[t._v(":set ic")]),s("br"),t._v("\n忽略大小写")]),t._v(" "),s("p",[s("code",[t._v(":set noic")]),s("br"),t._v("\n不忽略大小写")]),t._v(" "),s("p",[s("code",[t._v("/hello\\c")]),s("br"),t._v("\n本次查找忽略大小写")]),t._v(" "),s("p",[s("code",[t._v("CTRL-D")]),s("br"),t._v("\n显示所有匹配的命令")]),t._v(" "),s("p",[s("code",[t._v("<TAB>")]),s("br"),t._v("\n自动补全")]),t._v(" "),s("p",[s("code",[t._v(":set number")]),s("br"),t._v("\n显示行号")]),t._v(" "),s("h2",{attrs:{id:"磁盘管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[t._v("#")]),t._v(" 磁盘管理")]),t._v(" "),s("h3",{attrs:{id:"du"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#du"}},[t._v("#")]),t._v(" du")]),t._v(" "),s("p",[s("code",[t._v("du -sh *")]),t._v(" 使用合适的单位显示当前文件夹下的全部文件（不递归）")]),t._v(" "),s("h3",{attrs:{id:"df-disk-free"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#df-disk-free"}},[t._v("#")]),t._v(" df(disk free)")]),t._v(" "),s("p",[s("code",[t._v("df -h")]),t._v(" 显示磁盘容量使用合适的单位")])])}),[],!1,null,null,null);a.default=n.exports}}]);