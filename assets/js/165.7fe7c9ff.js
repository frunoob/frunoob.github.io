(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{368:function(t,a,e){"use strict";e.r(a);var s=e(5),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux命令"}},[t._v("#")]),t._v(" linux命令")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#tar"}},[t._v("tar")])]),e("li",[e("a",{attrs:{href:"#gzip"}},[t._v("gzip")])]),e("li",[e("a",{attrs:{href:"#ps"}},[t._v("ps")])]),e("li",[e("a",{attrs:{href:"#crontab"}},[t._v("crontab")])]),e("li",[e("a",{attrs:{href:"#awk"}},[t._v("awk")])])])]),e("p"),t._v(" "),e("h3",{attrs:{id:"tar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[t._v("#")]),t._v(" tar")]),t._v(" "),e("p",[e("code",[t._v("tar -xf archive.tar")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Examples:\n  tar -cf archive.tar foo bar  # Create archive.tar from files foo and bar.\n  tar -tvf archive.tar         # List all files in archive.tar verbosely.\n  tar -xf archive.tar          # Extract all files from archive.tar.\n  tar -rvf archive.tar newfile # append newfile to the end of an archive\n\n Main operation mode:\n  -A, --catenate, --concatenate   append tar files to an archive\n  -c, --create               create a new archive\n      --delete               delete from the archive (not on mag tapes!)\n  -d, --diff, --compare      find differences between archive and file system\n  -r, --append               append files to the end of an archive\n      --test-label           test the archive volume label and exit\n  -t, --list                 list the contents of an archive\n  -u, --update               only append files newer than copy in archive\n  -x, --extract, --get       extract files from an archive\n\n")])])]),e("h3",{attrs:{id:"gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[t._v("#")]),t._v(" gzip")]),t._v(" "),e("p",[t._v("just work on single file\n"),e("code",[t._v("gzip -d archive.gz")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Usage: gzip [OPTION]... [FILE]...\nCompress or uncompress FILEs (by default, compress FILES in-place).\n\nMandatory arguments to long options are mandatory for short options too.\n\n  -c, --stdout      write on standard output, keep original files unchanged\n  -d, --decompress  decompress\n  -f, --force       force overwrite of output file and compress links\n  -h, --help        give this help\n  -k, --keep        keep (don't delete) input files\n  -l, --list        list compressed file contents\n  -L, --license     display software license\n  -n, --no-name     do not save or restore the original name and timestamp\n  -N, --name        save or restore the original name and timestamp\n  -q, --quiet       suppress all warnings\n  -r, --recursive   operate recursively on directories\n      --rsyncable   make rsync-friendly archive\n  -S, --suffix=SUF  use suffix SUF on compressed files\n      --synchronous synchronous output (safer if system crashes, but slower)\n  -t, --test        test compressed file integrity\n  -v, --verbose     verbose mode\n  -V, --version     display version number\n  -1, --fast        compress faster\n  -9, --best        compress better\n\n")])])]),e("h3",{attrs:{id:"ps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[t._v("#")]),t._v(" ps")]),t._v(" "),e("p",[e("code",[t._v("ps aux")])]),t._v(" "),e("h3",{attrs:{id:"crontab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab"}},[t._v("#")]),t._v(" crontab")]),t._v(" "),e("p",[t._v("crontab  is  the  program  used  to  install, deinstall or list the tables used to drive the\ncron(8) daemon in Vixie Cron.  Each user can have their own crontab, and  though  these  are\nfiles in /var/spool/cron/crontabs, they are not intended to be edited directly.")]),t._v(" "),e("p",[e("code",[t._v("crontab -e")]),t._v(" open the config file")]),t._v(" "),e("h3",{attrs:{id:"awk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[t._v("#")]),t._v(" awk")]),t._v(" "),e("p",[e("strong",[t._v("kill progress by name")]),t._v(":"),e("br"),t._v(" "),e("code",[t._v("kill -9 $(ps aux | grep 'top' | awk '{print $2}' | head -n 1)")])]),t._v(" "),e("h2",{attrs:{id:"进程管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[t._v("#")]),t._v(" 进程管理")]),t._v(" "),e("h3",{attrs:{id:"nohup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nohup"}},[t._v("#")]),t._v(" nohup")]),t._v(" "),e("p",[t._v("忽略挂断信号，当ssh连接断开时，所有的子进程都会中断。"),e("br"),t._v("\nRun COMMAND, ignoring hangup signals."),e("br"),t._v(" "),e("code",[t._v("nohup COMMAND &")])]),t._v(" "),e("h2",{attrs:{id:"系统管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统管理"}},[t._v("#")]),t._v(" 系统管理")]),t._v(" "),e("h3",{attrs:{id:"用户管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[t._v("#")]),t._v(" 用户管理")]),t._v(" "),e("p",[e("strong",[t._v("useradd")]),e("br"),t._v(" "),e("code",[t._v("sudo useradd /home/test test -p password")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("无论是否设置了密码都要在添加用户之后，再次设置一次密码，否则远程登陆时无法正常登录。"),e("code",[t._v("sudo passwd test")])])]),t._v(" "),e("p",[e("strong",[t._v("userdel")]),e("br"),t._v(" "),e("strong",[t._v("usermod")])]),t._v(" "),e("h3",{attrs:{id:"netstat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[t._v("#")]),t._v(" netstat")]),t._v(" "),e("p",[t._v("这个程序主要是为了打印网络接口信息，但是这个程序在2022年来看已经是过时的了。"),e("br"),t._v("\n目前可以使用"),e("code",[t._v("ss")]),t._v("来替换"),e("code",[t._v("netstat")]),t._v("， "),e("code",[t._v("ip route")]),t._v(" 来替换"),e("code",[t._v("netstat -r")]),t._v("， "),e("code",[t._v("netstat -i")]),t._v(" 可以使用"),e("code",[t._v("ip -s link")]),t._v(". 使用"),e("code",[t._v("ip maddr")]),t._v("来替换"),e("code",[t._v("netstat -g")])]),t._v(" "),e("h3",{attrs:{id:"sysv-rc-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sysv-rc-conf"}},[t._v("#")]),t._v(" sysv-rc-conf")]),t._v(" "),e("p",[t._v("查看服务运行情况，并且可以开启或关闭指定服务")]),t._v(" "),e("h3",{attrs:{id:"删除服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除服务"}},[t._v("#")]),t._v(" 删除服务")]),t._v(" "),e("p",[e("code",[t._v("sudo update-rc.d ServiceName remove")])]),t._v(" "),e("h3",{attrs:{id:"系统温度监测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统温度监测"}},[t._v("#")]),t._v(" 系统温度监测")]),t._v(" "),e("p",[e("code",[t._v("watch -n 2 sensors")]),t._v(" 每两秒刷新一下信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Every 2.0s: sensors          penetration-fqq: Mon Jun  6 15:56:22 2022\n\ncoretemp-isa-0000  //cpu 两个物理核心\nAdapter: ISA adapter\nPackage id 0:  +37.0°C  (high = +100.0°C, crit = +100.0°C)\nCore 0:        +38.0°C  (high = +100.0°C, crit = +100.0°C)\nCore 1:        +35.0°C  (high = +100.0°C, crit = +100.0°C)\n\namdgpu-pci-0100  //gpu\nAdapter: PCI adapter\nvddgfx:      806.00 mV\nedge:         +39.0°C  (crit = +104000.0°C, hyst = -273.1°C)\nslowPPT:     572.15 W  (cap =  15.00 W)\n\npch_skylake-virtual-0\nAdapter: Virtual device\ntemp1:        +39.5°C\n\nBAT0-acpi-0\nAdapter: ACPI interface\nin0:           8.44 V\n")])])]),e("h2",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" GIT")]),t._v(" "),e("h3",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" config")]),t._v(" "),e("p",[e("code",[t._v("git config --global --edit")]),t._v(" your name and email address were configured in this file")]),t._v(" "),e("h3",{attrs:{id:"log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("                                                                                                        \n┌──"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log      \ncommit de14fcc22521e0c64bfdb4dccbda9e281efe2acc "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: root "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":02:56 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    edit flagj\n\ncommit 1dbfdfb1d913a4c517f550fc65b9d24ee907c0ea\nAuthor: root "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":17:31 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    flag\n                                                                                                        \n┌──"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --all\ncommit de14fcc22521e0c64bfdb4dccbda9e281efe2acc "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: root "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":02:56 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    edit flagj\n\ncommit 1dbfdfb1d913a4c517f550fc65b9d24ee907c0ea\nAuthor: root "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":17:31 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    flag\n                                                                                                        \n┌──"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ \n")])])]),e("h3",{attrs:{id:"diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("┌──"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD HEAD^                   \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/flag b/flag\nindex 3d18cbe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("4b30686 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/flag\n+++ b/flag\n@@ -1,3 +1 @@\n flag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n-nihao\n-laskfjaslfj\n                                                                                                        \n┌──"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ \n")])])]),e("h3",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),e("p",[t._v("reset current HEAD to specific state")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("┌──"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^                                                                   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v(" ⨯\nHEAD is now at 1dbfdfb flag\n                                                                                                        \n┌──"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frunoob㉿kali"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/var/www/html/git_test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n└─$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log               \ncommit 1dbfdfb1d913a4c517f550fc65b9d24ee907c0ea "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAuthor: root "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("root@kali.frunoob"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat May "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":17:31 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" +0800\n\n    flag\n                                                                                                        \n")])])]),e("h2",{attrs:{id:"文件管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[t._v("#")]),t._v(" 文件管理")]),t._v(" "),e("h3",{attrs:{id:"scp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[t._v("#")]),t._v(" scp")]),t._v(" "),e("p",[t._v("OpenSSH secure file copy")]),t._v(" "),e("p",[t._v("copy single file from remote.\n"),e("code",[t._v("scp <user-name>@<remote-ip>:<source-file-name> <target-file-path-name>")])]),t._v(" "),e("p",[t._v("copy entire directories.\n"),e("code",[t._v("scp -r <user-name>@<remote-ip>:<source-directory-name> <target-directory-name>")])]),t._v(" "),e("h3",{attrs:{id:"cat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[t._v("#")]),t._v(" cat")]),t._v(" "),e("p",[e("code",[t._v("cat -n <file>")]),t._v(" 显示行号")]),t._v(" "),e("p",[e("code",[t._v("cat -b <file>")]),t._v(" 显示行号（除了空白行）")]),t._v(" "),e("p",[e("code",[t._v("cat -b <file1> <file2> >> <file3>")]),t._v(" 追加前两个文本内容到3")]),t._v(" "),e("p",[e("code",[t._v("cat /dev/null > <file>")]),t._v(" 清空文件")]),t._v(" "),e("p",[e("code",[t._v("cat /dev/fd0 > <file>")]),t._v(" 制作镜像文件")]),t._v(" "),e("p",[e("code",[t._v("cat <IMG_file> > /dev/fd0")]),t._v(" 将文件写入到软盘")]),t._v(" "),e("h3",{attrs:{id:"chmod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[t._v("#")]),t._v(" chmod")]),t._v(" "),e("p",[e("code",[t._v("chmod u=rwx,g=r,o=r <file>")])]),t._v(" "),e("p",[e("code",[t._v("chmod u+r <file>")])]),t._v(" "),e("p",[e("code",[t._v("chmod -R 777 <file>")]),t._v(" 递归变更权限")]),t._v(" "),e("h3",{attrs:{id:"find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" find")]),t._v(" "),e("p",[e("code",[t._v("find ./ -name 'log.txt'")])]),t._v(" "),e("p",[e("code",[t._v("find ./ -perm -u=x -type f")]),t._v(" 查找类型为一般文件且可运行的文件")]),t._v(" "),e("h2",{attrs:{id:"内容编辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容编辑"}},[t._v("#")]),t._v(" 内容编辑")]),t._v(" "),e("h3",{attrs:{id:"wc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wc"}},[t._v("#")]),t._v(" wc")]),t._v(" "),e("p",[e("code",[t._v("wc -w")]),t._v(" 显示字数")]),t._v(" "),e("p",[e("code",[t._v("wc -l")]),t._v(" 显示行数")]),t._v(" "),e("h3",{attrs:{id:"grep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[t._v("#")]),t._v(" grep")]),t._v(" "),e("p",[e("code",[t._v("grep 'log'")])]),t._v(" "),e("h3",{attrs:{id:"sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[t._v("#")]),t._v(" sort")]),t._v(" "),e("p",[e("code",[t._v("sort -n [file]")]),t._v(" 按照数值大小排序")]),t._v(" "),e("p",[e("code",[t._v("sort -r [file]")]),t._v(" 逆排序")]),t._v(" "),e("h3",{attrs:{id:"vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[t._v("#")]),t._v(" vim")]),t._v(" "),e("p",[e("code",[t._v("vim -r")]),t._v(" show temp file in "),e("code",[t._v("/tmp")]),t._v(", "),e("code",[t._v("/var/tmp/")]),t._v(", "),e("code",[t._v("~/tmp/")]),t._v(", './'")]),t._v(" "),e("p",[e("code",[t._v("vim -r flag")]),t._v(" 显示当前目录下的flag的缓存文件，当对flag文件进行编辑的过程中，意外强制关闭了vim编辑器之后，可以通过此方法来进行文件的恢复， 打开"),e("code",[t._v(".flag.swq")]),t._v("文件，并运行"),e("code",[t._v(":wq")]),t._v("命令即可将缓存中的修改应用到原文件中了，然后删除掉该缓存文件即可。若在编辑缓存文件的过程中，意外推出编辑器，则会生成新的缓存文件"),e("code",[t._v(".flag.swo")]),t._v(", 以此类推，若在编辑缓存文件的过程中仍然遇到了vim意外推出的状况，则会在当前目录下生成文件"),e("code",[t._v(".flag.swn")]),t._v(", "),e("code",[t._v(".flag.swm")]),t._v(", "),e("code",[t._v(".flag.swl")]),t._v(" ......"),e("br"),t._v("\n必须将换问文件全部删除之后才能正常打开原始文件。")]),t._v(" "),e("p",[e("code",[t._v("dw")]),e("br"),t._v("\n删除当前单词直到下一个单词开头(不包含首字母)")]),t._v(" "),e("p",[e("code",[t._v("de")]),e("br"),t._v("\n删除单词，直到该单词末尾（包含最后一个单词）")]),t._v(" "),e("p",[e("code",[t._v("d$")]),e("br"),t._v("\n删除单词一整行")]),t._v(" "),e("p",[e("code",[t._v("d2w")]),e("br"),t._v("\n删除两个单词")]),t._v(" "),e("p",[e("code",[t._v("dd")]),e("br"),t._v("\n删除一整行，并保存行到vim注册器中")]),t._v(" "),e("p",[e("code",[t._v("p")]),e("br"),t._v("\n将注册器中保存的行插入到当前行的下一行")]),t._v(" "),e("p",[e("code",[t._v("3dd")]),e("br"),t._v("\n删除三行")]),t._v(" "),e("p",[e("code",[t._v("2w")]),e("br"),t._v("\n光标移动两个单词至单词开头")]),t._v(" "),e("p",[e("code",[t._v("3e")]),e("br"),t._v("\n光标移动两个单词至单词末尾")]),t._v(" "),e("p",[e("code",[t._v("0")]),t._v("\n移动光标到行首")]),t._v(" "),e("p",[e("code",[t._v("u")]),e("br"),t._v("\n撤销动作")]),t._v(" "),e("p",[e("code",[t._v("U")]),e("br"),t._v("\n撤销当前行的所有动作")]),t._v(" "),e("p",[e("code",[t._v("CTRL-R")]),e("br"),t._v("\n重做")]),t._v(" "),e("p",[e("code",[t._v("rx")]),e("br"),t._v("\n替换当前光标下的字为x")]),t._v(" "),e("p",[e("code",[t._v("R")]),e("br"),t._v("\n输入并替换文本")]),t._v(" "),e("p",[e("code",[t._v("ce")]),e("br"),t._v("\n删除单词至词尾并插入")]),t._v(" "),e("p",[e("code",[t._v("cc")]),e("br"),t._v("\n清空本行并插入")]),t._v(" "),e("p",[e("code",[t._v("G")]),e("br"),t._v("\n移动光标到文件的最后一行")]),t._v(" "),e("p",[e("code",[t._v("g")]),e("br"),t._v("\n移动光标到文本的第一行")]),t._v(" "),e("p",[e("code",[t._v("505G")]),e("br"),t._v("\n移动到第505行")]),t._v(" "),e("p",[e("code",[t._v("CTRL-O")]),e("br"),t._v("\n撤销行跳转操作")]),t._v(" "),e("p",[e("code",[t._v("CTRL-I")]),e("br"),t._v("\n重做行跳转操纵")]),t._v(" "),e("p",[e("code",[t._v("%")]),e("br"),t._v("\n匹配光标所在的括号对应的括号")]),t._v(" "),e("p",[e("code",[t._v(":s/thee/the/g")]),e("br"),t._v("\n替换行中所有的thee为the")]),t._v(" "),e("p",[e("code",[t._v(":1,5s/old/new/g")]),e("br"),t._v("\n替换1到5行的old为new")]),t._v(" "),e("p",[e("code",[t._v(":%s/old/new/g")]),e("br"),t._v("\n全文替换")]),t._v(" "),e("p",[e("code",[t._v(":%s/old/new/gc")]),e("br"),t._v("\n替换之前会提示")]),t._v(" "),e("p",[e("code",[t._v("CTRL-G")]),e("br"),t._v("\n文档的状态")]),t._v(" "),e("p",[e("code",[t._v("?hello")]),e("br"),t._v("\n查找当前光标之前的所有的hello")]),t._v(" "),e("p",[e("code",[t._v("/hello")]),e("br"),t._v("\n查找当前光标之后的hello")]),t._v(" "),e("p",[e("code",[t._v("n")]),e("br"),t._v("\n移动到下一个查找结果")]),t._v(" "),e("p",[e("code",[t._v("N")]),e("br"),t._v("\n移动到上一个查找结果")]),t._v(" "),e("p",[e("code",[t._v(":!ls")]),e("br"),t._v("\n执行外部命令")]),t._v(" "),e("p",[e("code",[t._v(":w filename")]),e("br"),t._v("\n保存当前文件为指定名称")]),t._v(" "),e("p",[e("code",[t._v("o")]),e("br"),t._v("\n在下方插入一行")]),t._v(" "),e("p",[e("code",[t._v("O")]),e("br"),t._v("\n在上方插入一行")]),t._v(" "),e("p",[e("code",[t._v("a")]),t._v("\n在当前光标指向的字的后面插入")]),t._v(" "),e("p",[e("code",[t._v("y")]),e("br"),t._v("\n复制")]),t._v(" "),e("p",[e("code",[t._v("p")]),e("br"),t._v("\n粘贴")]),t._v(" "),e("p",[e("code",[t._v("j$``j0")]),e("br"),t._v("\n控制每次移动到下一行时，光标所在位置时行首还是行尾")]),t._v(" "),e("p",[e("code",[t._v(":set hls")]),e("br"),t._v("\n搜索结果高亮显示")]),t._v(" "),e("p",[e("code",[t._v(":set ic")]),e("br"),t._v("\n忽略大小写")]),t._v(" "),e("p",[e("code",[t._v(":set noic")]),e("br"),t._v("\n不忽略大小写")]),t._v(" "),e("p",[e("code",[t._v("/hello\\c")]),e("br"),t._v("\n本次查找忽略大小写")]),t._v(" "),e("p",[e("code",[t._v("CTRL-D")]),e("br"),t._v("\n显示所有匹配的命令")]),t._v(" "),e("p",[e("code",[t._v("<TAB>")]),e("br"),t._v("\n自动补全")]),t._v(" "),e("p",[e("code",[t._v(":set number")]),e("br"),t._v("\n显示行号")]),t._v(" "),e("h2",{attrs:{id:"磁盘管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[t._v("#")]),t._v(" 磁盘管理")]),t._v(" "),e("h3",{attrs:{id:"du"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#du"}},[t._v("#")]),t._v(" du")]),t._v(" "),e("p",[e("code",[t._v("du -sh *")]),t._v(" 使用合适的单位显示当前文件夹下的全部文件（不递归）")]),t._v(" "),e("h3",{attrs:{id:"df-disk-free"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#df-disk-free"}},[t._v("#")]),t._v(" df(disk free)")]),t._v(" "),e("p",[e("code",[t._v("df -h")]),t._v(" 显示磁盘容量使用合适的单位")])])}),[],!1,null,null,null);a.default=r.exports}}]);