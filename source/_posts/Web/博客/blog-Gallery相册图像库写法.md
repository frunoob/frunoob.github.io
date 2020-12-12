---
title: blog-Gallery相册图像库写法
top_img: false
cover: false
comments: true
copyright: true
copyright_author: frunoob
aside: true
date: 2020-11-20 21:08:47
updated:
tags: 
- Gallery写法
categories: 
- Web
- 博客
- 创作
keywords:
description:
toc:
toc_number:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink: false
---

## 一个图库集合
```markdown
<div class="gallery-group-main"> 
{% galleryGroup name description link img-url %} 
{% galleryGroup name description link img-url %} 
{% galleryGroup name description link img-url %} 
</div>
```

* name : 图库名字
* description：图库描述
* link：连接到对应的相册的地址
* img-url：图库封面的地址

## Gallery相册

```
{% gallery %} 
markdown图片格式
{% endgallery %}
```

