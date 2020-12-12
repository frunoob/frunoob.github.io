---
title: echart主题配置
tags:
  - 主题配置工具
categories:
  - Web
  - echarts
top_img: false
cover: false
comments: false
copyright: true
copyright_author: frunoob
date: 2020-11-24 18:37:51
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

1. 打开[主题配置工具](https://echarts.apache.org/zh/theme-builder.html)。
2. 选择一个默认的主题方案或自行配置。
   ![主题方案](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201124190434.png)
3. 获取主题对应的js代码
   ![image-20201124190914165](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201124190914.png)
4. 将该文件在 HTML 中引用
   ![引用该文件](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201124191250.png)
5. 使用 `echarts.init(dom, 'customed')` 创建图表，第二个参数即为 `*.js` 文件中注册的主题名字

