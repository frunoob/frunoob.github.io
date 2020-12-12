title: C语言 错误：ld return 1 exist status
author: Frunoob
tags:
  - C语言
categories:
  - 编程
date: 2020-10-29 17:55:00
---
### 运行环境

* dev c++

### 问题叙述
> ld return 1 exist status

### 解决方法

下载 MinGW 并安装其中的 Basic Stup，安装结果如下：

![upload successful](https://i.loli.net/2020/10/29/kmhnstPWGixZ9ql.png) 
打开CMD 输入命令
`gcc 源文件 -o 目标文件`
此时显示了错误代码的行数
```
1.c:(.text+0x4b7): undefined reference to `printfI'
collect2: ld returned 1 exit status 
```
`print`函数错写为`printfI`   

#### end