title: 搭建免费的CDN（利用jsDelivr+Github）
author: Frunoob
tags: []
categories:
  - 博客搭建
date: 2020-11-01 15:02:00
---
> CDN的全称是Content Delivery Network，即内容分发网络。
> CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。
> CDN的关键技术主要有内容存储和分发技术。    

通过以下网址头部即可免费为Github资源加速

```
https://cdn.jsdelivr.net/gh/<Github用户名称>/<仓库名称>[@<版本号或分支名称>]/<文件路径>
```

例如：（访问frunoob用户的Library仓库的master分支下的sitetimes.js文件）

```
https://cdn.jsdelivr.net/gh/frunoob/Library@main/sitetime.js
```

又例如：（访问frunoob用户的1.0版本的Library仓库的master（默认是master）分支下的sitetimes.js文件）

```
https://cdn.jsdelivr.net/gh/frunoob/Library@1.0/sitetime.js
```

