---
title: Git大文件存储
tags:
  - Git大文件存储
categories:
  - Web
  - github
top_img: false
cover: false
comments: false
date: 2020-12-02 22:06:22
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
aside: true
---

## 入门

1. [下载](https://github.com/git-lfs/git-lfs/releases/download/v2.12.1/git-lfs-windows-v2.12.1.exe) 并安装Git命令行扩展。下载并安装后，通过运行以下命令为您的用户帐户设置Git LFS：

   ```
   git lfs install
   ```

   每个用户帐户只需要运行一次。

2. 在要使用Git LFS的每个Git存储库中，选择要由Git LFS管理的文件类型（或直接编辑.gitattributes）。您可以随时配置其他文件扩展名。

   ```
   git lfs track "*.mp4"
   ```

   现在确保.gitattributes被跟踪：

   ```
   git add .gitattributes
   ```

   请注意，定义Git LFS应该跟踪的文件类型本身不会将任何现有文件转换为Git LFS，例如其他分支或先前提交历史记录中的文件。为此，请使用[git lfs migration [1\]](https://github.com/git-lfs/git-lfs/blob/master/docs/man/git-lfs-migrate.1.ronn?utm_source=gitlfs_site&utm_medium=doc_man_migrate_link&utm_campaign=gitlfs)命令，该命令具有一系列旨在适应各种潜在用例的选项。

3. 没有第三步。只需像往常一样提交并推送到GitHub。

   ```powershell
   git add file.psd 
   git commit -m “添加设计文件” 
   git push origin master
   ```