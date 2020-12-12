---
title: hexo-tag-meting
tags:
  - null
categories:
  - Web
  - 博客
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-11 05:14:54
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

## Requirement

https://github.com/MoePlayer/APlayer

## CDN

- https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js
- https://unpkg.com/meting@2.0.1/dist/Meting.min.js

## [#](https://easyhexo.com/3-Plugins-use-and-config/3-1-hexo-tag-aplayer/#安装)安装

安装 hexo-tag-aplayer 插件十分简单，只需要在博客目录执行

```batch
npm install hexo-tag-aplayer -s
```

## [#](https://easyhexo.com/3-Plugins-use-and-config/3-1-hexo-tag-aplayer/#配置)配置

配置项需要一些 Yaml 语法的基础知识，可以参见 [YAML 语法简介](https://easyhexo.com/5-Add/5-2-yaml.html)

修改 Hexo 的配置文件 `_config.yml` ，增加

```yaml
aplayer:
  cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js  # 引用 APlayer.js 外部 CDN 地址 (默认不开启)
  style_cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css
  meting: true       # MetingJS 支持
  meting_cdn: https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js # 引用 Meting.js 外部 CDN 地址 (默认不开启)
```

当然，上面只是我的一个示例，完整的配置选项在下面（如果不懂的话，可以直接复制我的示例文件）。

```yaml
aplayer:
  script_dir: some/place                        # Public 目录下脚本目录路径，默认: 'assets/js'
  style_dir: some/place                         # Public 目录下样式目录路径，默认: 'assets/css'
  cdn: http://xxx/aplayer.min.js                # 引用 APlayer.js 外部 CDN 地址 (默认不开启)
  style_cdn: http://xxx/aplayer.min.css         # 引用 APlayer.css 外部 CDN 地址 (默认不开启)
  meting: true                                  # MetingJS 支持
  meting_api: http://xxx/api.php                # 自定义 Meting API 地址
  meting_cdn: http://xxx/Meing.min.js           # 引用 Meting.js 外部 CDN 地址 (默认不开启)
  asset_inject: true                            # 自动插入 Aplayer.js 与 Meting.js 资源脚本, 默认开启
  externalLink: http://xxx/aplayer.min.js       # 老版本参数，功能与参数 cdn 相同
```

## [#](https://easyhexo.com/3-Plugins-use-and-config/3-1-hexo-tag-aplayer/#使用)使用

使用 hexo-tag-aplayer 非常简单，只需要在 MarkDown 文件中插入正确的标记就可以了。

```markdown
{% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %}
```

如果你开启了[文章资源文件夹](https://hexo.io/zh-cn/docs/asset-folders.html#文章资源文件夹)功能的话，就可以这样加载歌曲了

```markdown
{% aplayer "Caffeine" "Jeff Williams" "caffeine.mp3" "picture.jpg" "lrc:caffeine.txt" %}
```

## [#](https://easyhexo.com/3-Plugins-use-and-config/3-1-hexo-tag-aplayer/#metingjs)MetingJS

好吧，对于新手来说，前面的你可能已经听懵逼了，忘记前面的使用方法，来看看下面的吧。

使用 MetingJS ，首先要在配置里开启，还记得前面我说直接复制我的配置吗？

```yaml
aplayer:
  meting: true
```

开启 [MetingJS](https://github.com/metowolf/MetingJS) 之后，一切都变得简单了，只需要

```markdown
{% meting "002j785c33YQHT" "tencent" "song" %}
```

WTF？这是什么？？？是不是还是一脸懵逼呢，不急，听我慢慢来解释。

有关 `{% meting %}` 的选项列表如下:

## Option

| option          | default     | description                                                  |
| --------------- | ----------- | ------------------------------------------------------------ |
| id              | **require** | song id / playlist id / album id / search keyword            |
| server          | **require** | music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu` |
| type            | **require** | `song`, `playlist`, `album`, `search`, `artist`              |
| auto            | options     | music link, support: `netease`, `tencent`, `xiami`           |
| fixed           | `false`     | enable fixed mode                                            |
| mini            | `false`     | enable mini mode                                             |
| autoplay        | `false`     | audio autoplay                                               |
| theme           | `#2980b9`   | main color                                                   |
| loop            | `all`       | player loop play, values: 'all', 'one', 'none'               |
| order           | `list`      | player play order, values: 'list', 'random'                  |
| preload         | `auto`      | values: 'none', 'metadata', 'auto'                           |
| volume          | `0.7`       | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| mutex           | `true`      | prevent to play multiple player at the same time, pause other players when this player start play |
| lrc-type        | `0`         | lyric type                                                   |
| list-folded     | `false`     | indicate whether list should folded at first                 |
| list-max-height | `340px`     | list max height                                              |
| storage-name    | `metingjs`  | localStorage key that store player setting                   |

Documentation for APlayer can be found at https://aplayer.js.org/#/home?id=options