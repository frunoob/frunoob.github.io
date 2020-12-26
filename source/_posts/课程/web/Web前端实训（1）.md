---
title: Web前端实训（1）
tags:
  - vue
categories:
  - 课程
  - web
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-15 02:08:20
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

### day01

#### 讲师介绍：

本阶段的实训老师，张 静怡

#### 实训的内容：

基本Vue的一个移动端的音乐项目，

技术栈： vue.js + node.js + vue-cli脚手架的创建 +html+css+js

#### 实训的周期：

一周时间

#### 实训的目的：

通过这次实训，对前端框架有所了解，并且能够自己搭建一个项目

----

#### Node.js

##### 概念：

```
node.js是基本v8引擎的一个运行环境
```

##### 官网：

```
http://nodejs.cn/ 中文网地址
http://nodejs.cn/download/ 下载地址
https://nodejs.org/en/ 英文官网地址
```

##### 安装：

```
下一步 下一步安装即可，不需要去设置它的环境变量
```

##### 查看版本：

```
node -v 查看node的版本

npm -v   查看npm的版本
```

---

#### vue的基本了解

##### 官网地址：

```
https://cn.vuejs.org/
```

##### 概念：

```
什么是vue.js?
vue.js是一个渐进式的框架

它就是自底向上，逐渐向上。本身vue.js它就是一个库，我们完成一个简单的demo或者小案例或者H5的小页面，我们就可以直接引入这个核心库，调用它的API即可。随着产品需求的增加，我们要实现的功能越来越复杂，那么我们需要vue中技术或者插件和脚手架一起去完成我们的项目，那么我们就能够实现相对复杂的项目

官网概念：Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
```

##### 兼容性

```
Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
```

##### 下载安装

###### cdn的下载方式

服务器地址，这个方式不推荐，网络不好会影响页面

```
开发环境：它有很多错误提示和警告
未上线版本，公司内部人员
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

生产环境：代码被压缩，删除了所有的警告和错误提示
上线之后的版本
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
```

###### 通过npm下载核心库

```
npm install(简写成i) vue
```

##### 利用npm命令创建package.json

作用： 用来管理所有的插件

```
npm inin 初始化，（自定义配置）按照步骤创建package.json文件
如果都按照初始化的步骤，我们可以直接执行npm init -y创建package.json文件

之后通过npm的命令下载好的插件，所有配置都自动配置到了package.json文件中。我们提交代码或者交作业，或者上传github，都应该删除node_modules。我如何知道你这个项目用了什么插件，我就根据你配置好的package.json文件去通过命名，npm install(简写成i) 这个命令含义是：安装依赖
```

#### 错误集锦

```
1、Do not mount Vue to <html> or <body> - mount to normal elements instead
Vue的实例不能挂载到html或者body，只能挂载到正常元素上，一般我们会定义一个容器，直接挂载到容器上
```

####  初识vue
* 插值表达式 `{{}}`

* 利用开发环境的vue.js，因为它包含了一些错误信息和警告

* vue实例不能挂载到html和body,可以把实例挂载到class 上，但是这种方式，不允许，为什么？因为class它并不是唯一的。而我们的实例只能有一个挂载点，这部分只能用id

  ```
      <script>
          new Vue({
              el:'#app',
              data:{
                  msg:'能不能挂载到body'
              }
          })
  ```

*  插值表达式 可以渲染属性，但是这里不能写复杂的语句，比如switch 或者啥 for循环。。。我们可以写，三目运算。 if(条件){}else{}  简写成  条件?成功的条件体:失败的条件体

  ```
  {{"我觉得，"+msg}}
  {{1!=1?'真':'假'}}
  {{!flag?msg:num}}
  ```

*   什么是指令，在开标签中，以v-开头，封装好的一些属性和方法，我们叫指令。指令分为两大类，一、基本指令（内置指令），一般这些指令的不能满足我们开发项目或者产品需求，我们可以自定义，创建相关的逻辑指令。这种我们称之为，二、自定义指令    
   
*  v-bind: 动态绑定
   你可以简写成 <span style="color:red;"> `:`</span> 
   
* v-if 和 v-show 是条件判断 

   *  v-if 和 v-show 都属于条件判断，那么他们两者之间有什么区别？
      *  相同点：v-if 和 v-show都可以控制显示隐藏，也都可以用于条件判断
      * 不同点：v-if如果是false的时候，在dom节点上删除了该节点。v-show是false的时候，只是在标签上加了一个display：none这个样式
   * 使用场景： 当你频繁的操作dom的时候就用v-show，否则就用v-if 

* vue是响应式的数据变化，数据变化，视图会跟着变化。视图变化，数据也会变化

* vue中事件执行方法名，小括号可加可不加 getShow 或者 getShow()     

* v-on: 事件绑定，可以简写成 `@`

*  当事件的执行逻辑只有一句的时候，我们可以简写，省略定义方法体

  ```
  <button @click='isShow=!isShow'></button>
  ```