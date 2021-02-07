---
title: springboot跨域请求解决
tags:
  - 默认标签
categories:
  - 课程
  - web
top_img: false
cover: false
comments: false
mathjax: false
date: 2021-01-02 16:31:16
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

{%note info%}

参考[文章](https://blog.csdn.net/qq_43486273/article/details/83272500)

{%endnote%}

# 跨域问题简述

![](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164135.png)

# 解决方案

## 1.直接采用SpringBoot的注解`@CrossOrigin`

在需要跨域的类或方法上方加上注解即可。