---
title: hexo的一些指令

date: 2020-10-23 14:49:38

tags: 
- hexo指令

categories: 
- Web
- 博客

cover: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg

---

## 指令



### init 

```
 $ hexo init [folder] 
```

新建一个网站。如果没有设置 ` folder `，Hexo默认在目前的文件夹建立网站。 

## new

```
 hexo new [layout] <title> 
```

新建一篇文章。如果没有设置` layout `，默认使用_config.yml中的` default_layout `参数代替。如果标题包含空格的话，请使用引号括起来。

```
 $ hexo new "Post title with whitespace"
```

### generate

```
$ hexo generate
```

生成静态文件。

| 选项                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| `-d`,`--deploy`      | 文件生成后立即部署网站                                       |
| `-w`,`--watch`       | 监视文件变动                                                 |
| `-b`,`--bail`        | 生成过程中如果发生任何未处理的异常则抛出异常                 |
| `-f`,`force`         | 强制重新生成文件<br/>Hexo 引入了差分机制，如果 `public` 目录存在，那么 `hexo g` 只会重新生成改动的文件。<br/>使用该参数的效果接近 `hexo clean && hexo generate` |
| `-c`,`--concurrency` | 最大同时生成文件的数量，默认无限制                           |

该命令可以简写为

```powershell
$ hexo publish [layout] <filename>
```

发表草稿。

### server

```powershell
$ hexo server	
```

启动服务器。默认情况下，访问网址为：` http://localhost:4000/`。

| 选项            | 描述                           |
| --------------- | ------------------------------ |
| `-p`,`--port`   | 重设端口                       |
| `-s`,`--static` | 只用静态文件                   |
| `-l`,`--log`    | 启动日记记录，使用覆盖记录格式 |

### deplo

```powershell
$ hexo deploy
```

部署网站。

### render

```powershell
$ hexo render <file1> [file2]
```

渲染文件。

| 参数            | 描述         |
| --------------- | ------------ |
| `-o`,`--output` | 设置输出路径 |

### migrate

```powershell
$ hexo migrate <type>	
```

从其他博客系统 [迁移内容](https://hexo.io/zh-cn/docs/migration)

### clean

```powershell
$ hexo clean
```

清除缓存文件(`db.json`)和已生成的静态文件(`public`)。

在某些 情况(尤其是更换主题后)，如果你发现您对站点的更改无论如何也不生效，您可能需要

运行该命令。

### list

```powershell
$ hexo list <type>
```

列出网站资料。

### version

```powershell
$ hexo version
```

显示Hexo版本。



## 选项

### 安全模式

```powershell
$ hexo --safe
```

在安全模式下，不会载入插件和脚本。当你在安装新插件草鱼问题时，可以尝试以安全模式重新执行。

### 调试模式

```
$ hexo --debug
```

在终端中显示调试信息并记录到 `debug.log`。当您碰到问题时，可以尝试用调试模式重新执行一次，并 [提交调试信息到 GitHub](https://github.com/hexojs/hexo/issues/new)。

### 简洁模式

```
$ hexo --silent
```

隐藏终端信息。

### 自定义配置文件的路径

```
# 使用 custom.yml 代替默认的 _config.yml
$ hexo server --config custom.yml

# 使用 custom.yml 和 custom2.json，其中 custom2.json 优先级更高
$ hexo generate --config custom.yml,custom2.json,custom3.yml
```

自定义配置文件的路径，指定这个参数后将不再使用默认的 `_config.yml`。
你可以使用一个 YAML 或 JSON 文件的路径，也可以使用逗号分隔（无空格）的多个 YAML 或 JSON 文件的路径。例如：

```
# 使用 custom.yml 代替默认的 _config.yml
$ hexo server --config custom.yml

# 使用 custom.yml, custom2.json 和 custom3.yml，其中 custom3.yml 优先级最高，其次是 custom2.json
$ hexo generate --config custom.yml,custom2.json,custom3.yml
```

当你指定了多个配置文件以后，Hexo 会按顺序将这部分配置文件合并成一个 `_multiconfig.yml`。如果遇到重复的配置，排在后面的文件的配置会覆盖排在前面的文件的配置。这个原则适用于任意数量、任意深度的 YAML 和 JSON 文件。

### 显示草稿

```
$ hexo --draft
```

显示 `source/_drafts` 文件夹中的草稿文章。

### 自定义 CWD

```
$ hexo --cwd /path/to/cwd
```

自定义当前工作目录（Current working directory）的路径。