---
title: HTML中关于class属性空格隔开多类名
top_img: false
cover: false
comments: false
copyright: true
copyright_author: frunoob
aside: false
date: 2020-11-22 15:36:26
updated:
tags: 
- class命名
categories:
- 课程
- web
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
---

### `class = "panel bar"`的含义

* 代表的是两个类名，分别是panel和bar。
* 意义：侧重于 **css的模块化设计** ，可以减少css的重复代码，提高类的复用性。
* 这里可以用空格分隔不限个数类名。
* 同时写多个的话，优先级是后面的会覆盖前面的。
* id可以这么写但是没有任何意义 **一个页面上的id不允许重复**。

