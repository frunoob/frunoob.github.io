title: HEXO-ADMIN安装使用
author: Frunoob
tags: 
- hexo
- hexo-admin
categories:
- Web
- 博客
date: 2020-10-28 11:45:00
---
## 安装 HEXO-ADMIN

切换到hexo目录  
` npm install --save hexo-admin `  

启动 hexo  
`hexo s`  

然后打开 [管理页面](http://localhost:4000/admin/) 。  

Pages -新加 Page;
Posts -新加或删除post;双击一个post，你可以编辑，预览，新增修改tags、categories、选择发布或不发布；  
settings - 一些配置;  
Deploy - 可以直接部署到github。  

## 问题  

点击 deploy 按钮出现  
`Config value “admin.deployCommand” not found`   

### windows下

修改主配置文件"_config.yml"(而非主题配置文件)
在文件末尾添加如下内容

```
# deploy
admin:
  deployCommand: 'hexo-deploy.bat'
```

保存文件并退出。
在[^当前目录]下新建一个文件名为`hexo-deploy.bat`,并在其中添加一下内容

[^当前目录]: 主配置文件`_config.yml`所在目录  

```
hexo g -d

```

