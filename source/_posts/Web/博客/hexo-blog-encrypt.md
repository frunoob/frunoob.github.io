title: hexo-blog-encrypt
tags:
  - null
categories:
  - Web
  - 博客
top_img: false
cover: false
comments: false
author: Frunoob
date: 2020-12-11 02:56:41
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
## 安装

- `npm install --save hexo-blog-encrypt`
- 或 `yarn add hexo-blog-encrypt` (需要) [Yarn](https://yarnpkg.com/en/))

## 快速使用

- 将 "password" 字段添加到您文章信息头就像这样.

```
---
title: Hello World
date: 2016-03-30 21:18:02
password: mikemessi
---
```

- 再使用 `hexo clean && hexo g && hexo s` 在本地预览加密的文章.

## 设置优先级

文章信息头 > 按标签加密

## 高级设置

### 文章信息头

```
---
title: Hello World
tags:
- 作为日记加密
date: 2016-03-30 21:12:21
password: mikemessi
abstract: 有东西被加密了, 请输入密码查看.
message: 您好, 这里需要密码.
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
---
```

### `_config.yml`

#### 示例

```
# Security
encrypt: # hexo-blog-encrypt
  abstract: 有东西被加密了, 请输入密码查看.
  message: 您好, 这里需要密码.
  tags:
  - {name: tagName, password: 密码A}
  - {name: tagName, password: 密码B}
  template: <div id="hexo-blog-encrypt" data-wpm="{{hbeWrongPassMessage}}" data-whm="{{hbeWrongHashMessage}}"><div class="hbe-input-container"><input type="password" id="hbePass" placeholder="{{hbeMessage}}" /><label>{{hbeMessage}}</label><div class="bottom-line"></div></div><script id="hbeData" type="hbeData" data-hmacdigest="{{hbeHmacDigest}}">{{hbeEncryptedData}}</script></div>
  wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
  wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```

#### 对博文禁用 Tag 加密

只需要将博文头部的 `password` 设置为 `""` 即可取消 Tag 加密.

Example:

```
---
title: Callback Test
date: 2019-12-21 11:54:07
tags:
    - A Tag should be encrypted
password: ""
---

Use a "" to diable tag encryption.
```

### 配置优先级

文章信息头 > `_config.yml` (站点根目录下的) > 默认配置

### 关于 Callback 函数

在部分博客中, 解密后部分元素可能无法正常显示或者表现, 这属于已知问题. 目前的解决办法是通过自行查阅自己的博客中的代码, 了解到在 onload 事件发生时调用了哪些函数, 并将这些函数挑选后写入到博客内容中. 如:

```
---
title: Callback Test
date: 2019-12-21 11:54:07
tags:
    - Encrypted
---

This is a blog to test Callback functions. You just need to add code at the last of your post like following:

It will be called after the blog decrypted.

<script>
    // 添加一个 script tag 与代码在文章末尾.
    alert("Hello World");
</script>
```

例子在: [Callback 例子](https://mhexo.github.io/2019/12/21/CallbackTest/).

### 对 TOC 进行加密

如果你有一篇文章使用了 TOC，你需要修改模板的部分代码。这里用 landscape 作为例子：

- 你可以在 hexo/themes/landscape/layout/_partial/article.ejs 找到 article.ejs。
- 然后找到 <% post.content %> 这段代码，通常在30行左右。
- 使用如下的代码来替代它:

```
<% if(post.toc == true){ %>
  <div id="toc-div" class="toc-article" <% if (post.encrypt == true) { %>style="display:none" <% } %>>
    <strong class="toc-title">Index</strong>
      <% if (post.encrypt == true) { %>
        <%- toc(post.origin, {list_number: true}) %>
      <% } else { %>
        <%- toc(post.content, {list_number: true}) %>
      <% } %>
  </div>
<% } %>
<%- post.content %>
```

### 禁用 Log

If you want to disable the logging, you can add a silent property in `_config.yml` and set it to true. 如果你想要禁止使用 Log, 你可以在 `_config.yml` 中增加一个 silent 属性, 并将其设置为 true.

```
# Security
encrypt: # hexo-blog-encrypt
  silent: true
```

这样就会禁止如 `INFO hexo-blog-encrypt: encrypting "{Blog Name}" based on Tag: "EncryptedTag".` 的日志.