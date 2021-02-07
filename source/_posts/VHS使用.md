---
title: VHS使用
tags:
  - 默认标签
categories:
  - Web
  - 博客
top_img: false
cover: false
comments: false
mathjax: false
date: 2021-01-27 10:28:13
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

# Installation (安装)
```
npm install --save @videojs/http-streaming
```

# Getting Started 

```
<video-js id=vid1 width=600 height=300 class="vjs-default-skin" controls>
  <source
     src="https://example.com/index.m3u8"
     type="application/x-mpegURL">
</video-js>
<script src="video.js"></script>
<script src="videojs-http-streaming.min.js"></script>
<script>
var player = videojs('vid1');
player.play();
</script>
```