---
title: SSM-VUE实训总结
tags:
  - 默认标签
categories:
  - 课程
  - web
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-27 16:58:22
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

## 实训总结：

本次实训通过SSM+VUE实现前后端分离。SSM（Spring+SpringMVC+MyBatis）框架是由Spring、MyBatis两个开源框架整合而成(SpringMVC是Spring中的部分内容)。首先感谢老师的细心讲解和耐心的指导。一个完整的项目包括了前端、后端、中间件。通过本次实训我了解了MVC设计模式，其中M指的是model，模型层，想业务层提供数据；要在这里创建实体类，实体类与数据库表有着对应关系。V指的是view，视图层，其中包括了html，jsp，theamleaf等等。C表示control，控制层。我还认识了跨域，当域名或端口号发生变化的时候就是跨域，原生的JavaScript和ajax是不支持跨域的。mysql的分页关键字是limit
a,b。其中a表示：数据的起始位置，b：表示从起始位置向后的偏移量。知道了json数据格式是前后端交互的常用的数据格式。本次实训主要是将前后端分离实现数据的增删查改，这次实训也纠正了我的错误的观念“jsp是前端技术”，JSP的全称是“Java
Server
Page”，试运行在服务器JVM之上Servlet容器里的，只是执行的救国是HTML，响应给浏览器。Java
EE先有Servlet，那时候已经有了ASP（同样要知道是Active Server
Page的意思）。Servlet是Java代码里嵌入HTML代码，JSP是HTML里面嵌入Java代码。其次，前后端分离的概念是，无论后端使用的什么语言，一旦写好了接口，前端只需根据后端接口的说明进行前端设计就能成功调用接口，而且再更换别的前端框架，后端接口仍然可以正常别调用并使用，这样就实现了前后端分离。最后感谢本次实训的老师们和助导，这次学习令我获益匪浅。
