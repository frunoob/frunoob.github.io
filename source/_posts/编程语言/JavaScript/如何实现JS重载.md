---
title: 【JS】如何实现JS重载理
top_img: false
cover: false
comments: false
copyright: true
copyright_author: frunoob
aside: false
date: 2020-11-22 23:45:02
top:
updated:
tags: 
- js函数重载
categories: 
- 编程语言
- JavaScript
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

{% note warning %}
JavaScript函数不能重载
{% endnote %}

### 模仿函数重载

```
function doAdd() {
    if(arguments.length === 0){
        console.log("给函数添加几个参数试试？");
    }else if (arguments.length === 1){
		console.log(arguments[0]);
    }else if (arguments.length === 2){
		console.log(arguments[0]+arguments[1]);
    }else if (arguments.length === 3){
		console.log(arguments[0]+arguments[1]+arguments[2]);
    }
}
doAdd(); // 给函数添加几个参数试试？
doAdd(1); // 1
doAdd(1,2); // 3
doAdd(1,2,3); // 6
```

