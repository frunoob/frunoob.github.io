---
title: 在网页中播放hls视频
tags:
  - 默认标签
categories:
  - Web
  - 博客
top_img: false
cover: false
comments: false
mathjax: false
date: 2021-01-26 23:01:35
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

``` [] HTML文件中加入此内容
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/frunoob/Library@master/blog/js/hls.css">
  <video id="my_video_1" class="video-js vjs-default-skin" controls preload="auto" width="auto" height="auto" 
  data-setup='{}'>
    <source src="请输入你的视频网址.m3u8" type="application/x-mpegURL">
  </video>
<script src="https://cdn.jsdelivr.net/gh/frunoob/Library@master/blog/js/hls.js"></script>
<script src="https://cdn.jsdelivr.net/gh/frunoob/Library@master/blog/js/hls-videos.js"></script>
```

