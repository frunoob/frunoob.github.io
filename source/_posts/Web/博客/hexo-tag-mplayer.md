---
title: hexo-tag-mplayer
tags:
  - null
categories:
  - Web
  - 博客
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-11 03:23:06
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

# hexo-tag-mplayer

Insert [cPlayer](https://github.com/MoePlayer/cPlayer) in Hexo by using tags.

## Install

```
$ npm install hexo-tag-mplayer --save
```

## Quick Start

```
{% mplayer %}
    playlist: [
        {
            name: 'Song name...',
            artist: 'Singer name...',
            src: 'Song resource link...',
            poster: 'Song Cover link...',
            lyric: 'Lyrics...',
            Sublyric: 'Deputy lyrics, generally for translation...'
        },
        {
            ...
        },
        ...
    ],
    autoplay: true,
    volume: 0.75,
    playmode: "listloop",
    big: true,
    dark: false
{% endmplayer %}
```

For more details, visit [hexo-tag-mplayer Demo](http://www.wshunli.com/posts/hexo-tag-mplayer.html) here.

# Option

| OPTION   | default content | description                         |
| -------- | --------------- | ----------------------------------- |
| playlist | `[]`            | Playlist.                           |
| autoplay | `false`         | Autoplay (mobile is not available). |
| volume   | `1`             | Default volume.                     |
| playmode | `listloop`      | Default play mode.                  |
| big      | `false`         | Default player size.                |
| dark     | `false`         | Default player theme.               |

For more details, visit [CPlayer Demo](https://cplayer.js.org/) here.

# Thanks

Thanks for [cPlayer](https://github.com/MoePlayer/cPlayer) & Inspired by [hexo-tag-cplayer](https://github.com/EYHN/hexo-tag-cplayer) .