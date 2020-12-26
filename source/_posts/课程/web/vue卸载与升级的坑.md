---
title: vue卸载与升级的坑
tags:
  - vue踩坑
categories:
  - 课程
  - web
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-26 19:22:19
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

在安装vue-cli时候，使用的命令是`npm install vue-cli -g`。

这是安装`2.X`版本的指令，而安装3.0版本及以上版本的指令是`npm install @vue/cli -g`。

{%endnote%}

1. 卸载3.0之前的版本.

   ```
   npm uninstall -g vue-cli
   yarn global remove vue-cli
   ```

2. 卸载3.0之后的版本

   ```
   npm uninstall -g @vue/cli
   yarn global remove @vue/cli
   ```
```
   

   
3. 安装新版本的vue

```
   npm install @vue-cli -g
   ```

   如果不想安装最新版的vue，可以安装指定版本的vue

   ```
   //安装2.9.6版本
   npm install -g vue-cli@2.9.6
   yarn global add vue-cli@2.9.6
   //安装4.0.5版本
   npm install -g @vue/cli@4.0.5
   yarn global add @vue/cli@4.0.5
   ```

   
   ```