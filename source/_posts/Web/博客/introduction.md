---
title: hexo简介
date: 2020-10-23 04:46:49
# updated: 
tags: 
- hexo
categories: 
- Web
- 博客
keywords: Hexo
description: 通过博客框架、HEXO、github建立博客
cover: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
# comments: 
# cover: 
# toc: 
# toc_ number: 
# auto _open: 
# copyright: 
# copyright_ author: 
# copyright _author_ href: 
# copyright _url: 
# copyright_ info: 
# mathjax: 
# katex : 
# aplayer: 
# highlight _shrink: 
---
# 前言 #
Hexo 是一个基于nodejs 的静态博客网站生成器，作者是来自台湾的 Tommy Chen  

特点：  

不可思议的快速 ─ 只要一眨眼静态文件即生成完成  

支持 Markdown  

仅需一道指令即可部署到 GitHub Pages 和 Heroku  

已移植 Octopress 插件  

高扩展性、自订性  

兼容于 Windows, Mac & Linux  
## 准备工作 ##
* ### 系统版本 ### :Microsoft Windows [Version 10.0.19041.572]
* 安装了git for windows (或者其他的git客户端) [下载]: https://git-scm.com/download/
* 安装了node.js、npm，并了解基础命令 [下载]: http://nodejs.cn/download/
* 有github账号并且配置到好了ssh，实现免密推送。

## 安装hexo基本框架 ##
>第一步：新建文件夹

这一步是为博客新建一个文件夹来存放文件

>第二步：安装hexo基础框架

```
// 安装hexo框架  
npm install -g hexo  

// 初始化hexo框架  
npm init

// 安装所需的组件
npm install

// 编译生成今天网页
hexo g

// 启动本地服务
hexo s

```
命令完成后 在浏览器中  输入   http://localhost:4000/  即可访问。
