title: github快速将本地库和远程库连接
author: Frunoob
tags:
  - github
  - 远程库连接
categories:
  - Web
  - github
date: 2020-11-04 22:21:00
---
> HTTPS:`https://github.com/frunoob/Library.git`
>
> SSH:`git@github.com:frunoob/Library.git`

* or create a new repository on the command line

```powershell
echo "# Library" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main
```

​                

* or push an existing repository from the command line

```powershell
git remote add origin https://github.com/<username>/<repository>.git
git branch -M main
git push -u origin main
```



