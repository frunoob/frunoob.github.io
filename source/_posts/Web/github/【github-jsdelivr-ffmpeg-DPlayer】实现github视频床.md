---
title: 【github+jsdelivr+ffmpeg+DPlayer】实现github视频床
tags:
  - null
categories:
  - Web
  - github
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-10 18:47:30
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

##  如何制作分片视频(.ts)

* 新建一个git仓库来存储视频，并本地仓库与远程仓库绑定。

* 将视频资源文件放到本地git仓库的文件夹内

* 在新建的文件夹内新建push.bat文件并写入如下代码：

  ```
  git add -A
  git commit -m"%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%"
  git push -u origin master -f
  ```

  

* 先使用[格式工厂](http://www.pcgeshi.com/)将视频转码成 MP4视频格式：**H264**，音频格式：**ACC** 的视频。

* 使用[ffmpeg](https://frunoob.lanzous.com/izZjhj8jyyj)将制作切片的`.ts`格式。
  {%note info%}将下载的文件中的**ffmpeg.exe**和上一步制作好的**MP4**视频文件放在**同一**目录下。{%endnote%}

  1. `.mp4`转化为`.ts`格式

     ```
     .\ffmpeg.exe -y -i <文件名>.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb <文件名>.ts
     ```

  2. 将视频按时间分片，下面的 **5** 代表的是“每个分片5秒”。

     ```
     .\ffmpeg.exe -i <文件名>.ts -c copy -map 0 -f segment -segment_list playlist.m3u8 -segment_time 5 <文件名>%03d.ts
     
     ```

* 删除原视频和原视频转换后单个`.ts`大文件以及ffmpeg.exe 这三个文件。

* 双击`push.bat`文件上传切片后的分片视频文件（playlist.m3u8和一大堆ts文件）到github仓库里。

* 至此分片视频制作并上传完毕。

##  如何解析播放

{%note info%}

以下是在hexo-butterfuly 主题博客上的解析播放。

{%endnote%}

### 安装

安装 hexo-tag-dplayer 插件十分简单，只需要在博客目录执行

```batch
npm install hexo-tag-dplayer -s
```

修改 Hexo 的配置文件 `_config.yml` ，增加

```yaml
hexo-tag-dplayer:
  cdn:
    - https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js
    - https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css
  default: 
    api: https://api.prprpr.me/dplayer/
    loop: yes
    screenshot: yes
    # 后面还可以接着写其他默认配置
```

## 使用

使用 hexo-tag-dplayer 非常简单，只需要在 MarkDown 文件中插入正确的标记就可以了。

```markdown
{%dplayer 'vidtype=hls' 'url=https://你的url链接/playlist.m3u8' %}
```