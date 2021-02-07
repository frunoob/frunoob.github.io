title: hexo本地文件恢复
tags:
  - hexo
categories:
  - Web
  - 博客
  - ''
top_img: false
cover: false
comments: false
author: Frunoob
date: 2021-02-08 00:37:00
top:
updated:
keywords:
description:
toc:
toc_number:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
## 前提是你要在github上面备份了你的本地hexo文件，包括你的md文章文件。
## 开始前的准备工作

* 安装[github](https://git-scm.com/downloads)  
* 安装[node.js](http://nodejs.cn/download/)  
* 配置[SSH](https://docs.github.com/cn/github/authenticating-to-github/connecting-to-github-with-ssh)  

## 开始恢复

* 安装Hexo(全局安装)  
```  
npm install -g hexo-cli
```  
* 局部安装  
```   
npm install hexo
```  
安装以后，可以使用以下两种方式执行 Hexo：  
```
 npx hexo <command>  
```
 将 Hexo 所在的目录下的 node_modules 添加到环境变量之中即可直接使用 hexo <command>：  
 
 ```
 echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
 ```  
* 选择一个文件夹，并在此文件夹下右击打开`gitbash`  
* 克隆github文件到本地  
``` gitbash  
git clone git@github.com:frunoob/hexo-blog.git  ```  
* 在powershell中执行  
```  
npm i
```
* 安装成功后测试  
```  
hexo g && hexo s  
```
* 结束

 