---
title: 'C语言long long类型数据报错：warning: integer constant is too large for long type '
tags:
  - null
categories:
  - null
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-26 21:06:55
top:
updated:
keywords:
description:
toc:
toc_number:
katex:
aplayer:
highlight_shrink:
aside:
---

C语言 long long a = 12345671123577;  

编译时警告warning: integer constant is too large for "long" type 
这是由于GCC编译器的语法严格  只要在对long long a 复制的数字后面加上LL标识即可 

例如
long long a = 123456789456222LL;