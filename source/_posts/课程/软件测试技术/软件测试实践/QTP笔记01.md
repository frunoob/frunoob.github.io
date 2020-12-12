---
title: QTP笔记01
updated: ''
tags: 
- QTP
categories: 
 -  课程
 -  软件测试技术
 - 软件测试实践
keywords: ''
description: ''
top_img: 'https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/halloween-5596921__340.jpg'
cover: 'https://gitee.com/frunoob/blog-image/raw/master/image/20201120204610.webp'
comments: 'false'
toc: ''
toc_number: ''
copyright: ''
copyright_author: frunoob
copyright_author_href: ''
copyright_url: ''
copyright_info: ''
mathjax: ''
katex: ''
aplayer: ''
highlight_shrink: ''
aside: 'false'
date: 2020-11-16 23:16:47
---

一.前言

**1.****为什么功能测试要使用自动化测试工具**

（1）存在大量回归测试

（2）存在大数据量的测试(20000登陆）

（3）自动化测试工具可以严格、高效的完成测试

（4）无人值守

**2.****使用自动化测试工具的条件**

（1）需求稳定

（2）冒烟测试通过

**3.****常用的自动化测试工具**

**（****1****）****HP MI QTP**

（2）HP WinRunner

（3）QARun

（4）IBM Rational Robot

**（****5****）开源** **Selenium/si li ni mo/**

 

二、QTP简介

**1.QTP全称：Quick Test Professional/kuai ke/ test /pu ruo fai shen nou/**

2.关键字驱动：把被测系统中的控件识别成对象，测试用例是对对象做各种操作

**3.QTP，使用VBS语言**

4.QTP11.0

 

三、QTP界面介绍

**1.****插件管理界面**

根据被测系统使用的技术决定选择插件的类型

主界面中Tools\Options\General\Display Add-in Manager选项勾选，显示插件管理界面

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image008.jpg)

 

**2.如何新建一个Test**

方式三种：

（1）点击“StartPage”后的“Test”标签

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image008.jpg)

（2）工具栏中的“New”快捷键

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image008.jpg)

（3）菜单栏中File\New\Test

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image008.jpg)

 

**3.两个视图（重点）**：

**Keyword View(****关键字视图****)****：**表格形式展现步骤

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image008.jpg)

**Expert View****（专家视图）**：VBS代码的形式展示步骤

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image008.jpg)

注意：两个视图中的代码是一一对应的，是一个代码的两种展现方式

4.QTP里的测试以Test为单位组织

一次只能打开一个Test

5.关键字视图中的列

（1）Item（项目）：存储被测系统中操作的页面元素对象

（2）Operation /ao per en shen/（操作）：对被测系统的相应对象所做的操作

（3）Value（值）：操作使用的数据

（4）Documentation /dao ke men tei shen/（文档）：QTP自动生成的注释

（5）Comment/kao men te/（注释）：手动添加的注释

6.ActiveScreen（界面截图）

**7.如何录制代码**

三种方式：

（1）工具栏的“Record”快捷按钮

（2）菜单栏Automation\Record

（3）F3

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image002.jpg)

 

**8.如何停止录制：**

三种方式：

（1）工具栏的“Stop”快捷按钮

（2）菜单栏Automation\Stop

（3）F4

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image002.jpg)

**9.****如何回放录制**：

三种方式：

（1）工具栏的“Run”快捷按钮

（2）菜单栏Automation\Run

（3）F5

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image002.jpg)

**10.****系统设置**：

（1）设置关键字视图中的字体大小

显示关键字视图，Tools\View Options\Fonts and Size，设置Size

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image002.jpg)

（2）设置关键字视图中的字体大小

显示专家视图，Tools\View Options\Fonts and Size，设置Size

（3）回放时间间隔的设置

Tools\Options\Run\Run mode，运行模式：

Fast：快速，无间隔

**Nomal**：正常，设置步骤之间的间隔，单位是毫秒

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image002.jpg)

（4）恢复页面布局：

Tools\Options\General\Restore Layout按钮(恢复布局)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image002.jpg)

**重点：录制回放的原理**

**录制测试脚本：**

**获取操作对象的属性信息**

**使用唯一的对象名在对象仓库中记录该对象**

**将对象的全部属性信息存放在对象仓库中**

**标识关键属性信息**

**在脚本中记录对象名和相应的动作**

**回放测试脚本：**

**从脚本中获得对象名称**

**在对象仓库中找到该对象，并获取其关键属性**

**根据关键属性信息在被测程序中定位该对象**

**根据脚本中录入的动作和取值执行相应的操作**

**脚本中如何添加中文注释：**

**右键****---comment**

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image018.jpg)

 

查看具体的脚本对象名：可以展开对象名称

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image018.jpg)

查看调用对象的时间：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image018.jpg)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image018.jpg)![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image018.jpg)

 

**五、使用自动启动的方式录制** WinApp程序（重点)

步骤：

（1）点击“Record”

   **注意：录制前关闭被测系统**

（2）在Record and Run Settings（录制和运行设置）对话框中，

   **a.Web****中选择第一项**

   **b.WinApp****中选择第二项（****Record and run only on****：）**

   c.通过加号添加被测系统

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image018.jpg)

（3）操作被测系统中的步骤

（4）点击“Stop”停止录制

（5）点击“Run”回放代码

**注意：回放代码前，关闭被测系统**

六、**手动启动录制****WinApp****程序**

步骤：

（1）点击“Record”

（2）在Record and run settings里，

   **a.Web****选第一项**

   **b.WinApp****选第一项：****Record and run any open Windows-based applications**

![img](https://gitee.com/frunoob/blog-image/raw/master/image/clip_image030.jpg)

（3）手动打开被测系统

注意：通过开始菜单打开

（4）录制操作步骤

（5）点击“Stop”结束录制

（6）点击“Run”回放代码

**注意：录制****/****回放前打开被测系统**

 