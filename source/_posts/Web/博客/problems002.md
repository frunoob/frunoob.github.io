---
title: 阅读量显示错误
date: 2020-10-24 10:40:03
tags: 
- 问题
- butterfly
categories: 
- Web
- 博客
cover: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
---

这个是由于Google Chrome和一些浏览器最近更新了referrer策略，导致文章阅读数referrer全部变成博客首页（也就是站点的PV数），对于Butterfly主题：在Butterfly的Inject插入以下内容即可解决


![](https://camo.githubusercontent.com/9707a4396346869ce460227e2f5f9402760ab1fb/68747470733a2f2f692e6c6f6c692e6e65742f323032302f31302f31352f424c376a6b5a4458746f78634e32712e706e67)

```
<meta name="referrer" content="no-referrer-when-downgrade" />
```



