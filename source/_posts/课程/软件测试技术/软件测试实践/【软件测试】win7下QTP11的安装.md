---
title: 【软件测试】win7下QTP11的安装
tags: 
- QTP安装
categories: 
- 课程
- 软件测试技术
- 软件测试实践
top_img: false
cover: false
comments: false
copyright: true
copyright_author: frunoob
date: 2020-11-26 20:15:26
top:
updated:
keywords:
description:
toc:
toc_number:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---

# 安装篇

{%  note orange far fa-bell %}

[点此](https://pan.baidu.com/s/13uXSGJ_DbUmjibNtHb1_MA  )下载QTP安装包（提取码：ip5q）

{%  endnote %}

**注意**：1、qtp安装包不要存放在在中文路径下。

2、提前关掉杀毒类软件。

 

1.以**管理员身份运行**setup.exe 安装启动文件。

 ![image-20201127225257745](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201127225257.png)

2.点击第一行安装程序选项。

 

3.注意：如果你的电脑缺少一些QTP必须的组件的话，在QTP正式安装前会要求你安装以下必须的程序，按照程序提示依次安装即可（可能需要重启电脑），如下图：

![image-20201127225333099](https://gitee.com/frunoob/blog-image/raw/master/image/20201127225333.png)



![image-20201127225408635](https://gitee.com/frunoob/blog-image/raw/master/image/20201127225408.png)

（其中的一个组件 .net framework,必须的。需要联网下载。）

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-26/clip_image006.jpg)

 

4.弹出的安装对话框选择否。然后执行安装，默认都点击下一步就行了，基本没有需要选择的项了。

![image-20201127225421011](https://gitee.com/frunoob/blog-image/raw/master/image/20201127225421.png)

安装会持续几分钟，耐心等待即可。

 

 

5.安装完成后，会弹出：

![image-20201127225431801](https://gitee.com/frunoob/blog-image/raw/master/image/20201127225431.png)

 

点击运行

![image-20201127225508607](https://gitee.com/frunoob/blog-image/raw/master/image/20201127225508.png)

 

这个安装可以先放这别管了，直接点击取消即可。

 

完成后桌面生成，建议以管理员身份运行

![image-20201127225521841](https://gitee.com/frunoob/blog-image/raw/master/image/20201127225521.png)

 

**双击图标会看到有****30****天试用期**

![image-20201127225529017](https://gitee.com/frunoob/blog-image/raw/master/image/20201127225529.png)

 

 

## 录制好的脚本回放时，会提示缺少脚本调试工具

**以管理员身份运行scd10en.exe****安装微软脚本调试工具**

**无此工具，脚本调试功能会失效**

 

# 恢复30天试用期

1.去C:\ProgramData\SafeNet Sentinel 将 Sentinel RMS Development Kit文件夹更名或者删除。

 

 

2.然后找到QTP11安装目录下bin子目录，如D:\program files\HP\QuickTest Professional\bin，

以管理员身份执行?instdemo.exe

完成后启动可以恢复到30天的试用期限。