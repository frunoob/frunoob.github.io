---
title: 如何解决github大文件上传慢
tags:
  - github上传慢
categories:
  - Web
  - github
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-10 14:41:41
top:
updated:
keywords:
description: 'LFS上传大文件速度太慢不超过60KB，文章给出了解决方案。'
toc:
toc_number:
katex:
aplayer:
highlight_shrink:
aside:
---

## 打开[DNS查询网站](http://tool.chinaz.com/dns)

![image-20201210144440567](https://gitee.com/frunoob/blog-image/raw/master/image/20201210144441.png)



##   分别查询下列两个网址

多次查询下列两个网址，TTL值最稳定且最小的那一行，记录此行的IP（例如图1中的`208.77.47.172`）。

`github.global.ssl.fastly.net`  

`assets-cdn.github.com`

![image-20201210144725562](https://gitee.com/frunoob/blog-image/raw/master/image/20201210144725.png)

![image-20201210145233783](https://gitee.com/frunoob/blog-image/raw/master/image/20201210145233.png)

## 修改HOST文件

{%note no-icon%}HOST文件位于 `C:\Windows\System32\drivers\etc`目录下{%endnote%}

*  用记事本打开文件 将一下两行添加到文本最后。

```
208.77.47.172 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
```

* 保存退出文件

##  刷新DNS缓存

* 点击![image-20201210145540094](https://gitee.com/frunoob/blog-image/raw/master/image/20201210145608.png)+`R`  打开运行窗口
  ![image-20201210145655206](https://gitee.com/frunoob/blog-image/raw/master/image/20201210145655.png)
* 输入cmd打开命令提示行窗口
  ![image-20201210145728492](https://gitee.com/frunoob/blog-image/raw/master/image/20201210145728.png)
* 输入一下命令，回车
  `ipconfig /flushdns`
  ![image-20201210145815266](https://gitee.com/frunoob/blog-image/raw/master/image/20201210145815.png)

##  结束

