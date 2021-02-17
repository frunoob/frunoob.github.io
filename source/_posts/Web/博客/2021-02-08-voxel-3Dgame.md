---
title: voxel-3Dgame
tags:
  - voxel
categories:
  - Web
  - 博客
top_img: false
cover: false
comments: false
mathjax: false
date: 2021-02-08 13:06:05
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

{% note warn%}

[voxeljs](http://www.voxeljs.com/)已经停止维护。

~~最近有点懒，有时间再了解吧吧。~~

**[voxeljs-next](https://github.com/joshmarinacci/voxeljs-next)**：voxel.js的接班人。（<--这是下面将要学到的内容）

{%endnote%}

## 了解什么是“voxel”

**voxel**一般指体素。体素是体积元素（Volume Pixel）的简称，包含体素的立体可以通过立体渲染或者提取给定阈值轮廓的多边形等值面表三维成像。一如其名，是数学数据于三维空间分割上的最小单位，体素用于三维成像、科学数据与医学影像等领域。体素游戏因此诞生，三角洲部队系列游戏用到了体素的渲染技术。

## voxelJS 又是个啥？

VoxelJS是一个为了游戏设计的体素渲染引擎，类似于Minecraft(我的世界)。

## voxelJS 能干点啥？

它提供了在屏幕上绘制体素，使用功能定义风景，加载纹理以及在桌面模式和VR中环游世界以及放置/删除块的功能。 VoxelJS使用原始Voxel.js项目中的voxel代码，更新为最新的ThreeJS，添加WebXR支持，并使用新的实体组件系统ECSY。

值得注意的是，VoxelJS不提供任何类型的服务器组件，多玩家支持或脚本。 要创建类似TNT块的交互式效果，您需要自己编写该代码。

## 迫不及待了？赶紧开始！！

1. 下载该项目**[voxeljs-next](https://github.com/joshmarinacci/voxeljs-next)**到你的电脑

2. 在项目的根目录下使用`npm`安装依赖 

   ```
   npm install
   npm start
   open http://localhost:8080
   ```

## 万事俱备，开始使用VoxelJS！

### 1. 添加新的贴图

贴图由贴图管理器加载。

添加新的图片到目录中`example/textures`,然后就可以通过添加他们的文件的名字（不包含后缀，例如`.png`）来加载调用，像下面这样：

```
app.textureManager.load(['grass','brick','dirt','anim','tnt','arrows'])
```

### 2. 用代码创造一个自定义的世界

额，教程没看懂。。。 

### 3.还是跟着教程学习吧

