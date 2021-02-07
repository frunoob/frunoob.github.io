---
title: Valine-Admin评论功能加强
date: 2020-10-25 13:50:17
tags: valine
categories: 博客评论功能
cover:
---

# Valine Admin

## 简介

Valine Admin 项目是一个对 [Valine](https://valine.js.org/) 评论系统的拓展应用，可增强 Valine 的邮件通知功能。基于 Leancloud 的云引擎与云函数，主要实现评论邮件通知、评论管理、自定义邮件通知模板等功能，而且还可以提供邮件 `通知站长` 和 `@ 通知` 的功能。

[点击查看演示](https://github.com/hongweifuture/Valine-Admin/blob/master/高级配置.md#邮件通知展示)

## 部署

1. 需要确保 Valine 的基础功能是正常的，参考 [Valine Docs](https://valine.js.org/)。
2. 进入 [Leancloud](https://leancloud.cn/dashboard/applist.html#/apps) 对应的 Valine 应用中。
3. 点击 `云引擎 -> 设置` 填写代码库：`https://github.com/hongweifuture/Valine-Admin`，保存 [![代码库](https://camo.githubusercontent.com/e3d6acd43e97d2e42453075aabcec0e3dba1e1f0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134323630382e706e67)](https://camo.githubusercontent.com/e3d6acd43e97d2e42453075aabcec0e3dba1e1f0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134323630382e706e67)
4. 设置`自定义环境变量`，需要设置云引擎的环境变量以提供必要的信息，变量参数参考下面的`配置项` [![自定义环境变量](https://camo.githubusercontent.com/f9755cd442fd8ba4fd428d073e47bc91d5d786e2/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373135353430392e706e67)](https://camo.githubusercontent.com/f9755cd442fd8ba4fd428d073e47bc91d5d786e2/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373135353430392e706e67) **配置项**

| 变量          | 示例                                          | 说明                                                         |
| ------------- | --------------------------------------------- | ------------------------------------------------------------ |
| SITE_NAME     | HONGWEI'S Blog                                | [必填] 网站名称                                              |
| SITE_URL      | [https://www.zhwei.cn](https://www.zhwei.cn/) | [必填] 网站地址，**最后不要加 `/`**                          |
| SMTP_SERVICE  | QQ                                            | [必填] 邮件服务提供商，支持 QQ、163、126、Gmail 以及 [更多](https://nodemailer.com/smtp/well-known/#supported-services)。 --- *如这里没有你使用的邮件提供商，请查看[自定义邮件服务器](https://github.com/hongweifuture/Valine-Admin/blob/master/高级配置.md#自定义邮件服务器)* |
| SMTP_USER     | [xxxx@qq.com](mailto:xxxx@qq.com)             | [必填] SMTP登录用户，一般为邮箱地址                          |
| SMTP_PASS     | xxxx                                          | [必填] SMTP登录密码，一般为授权码，而不是邮箱的登陆密码，请自行查询对应邮件服务商的获取方式 |
| SENDER_NAME   | HONGWEI'S Blog Valine 评论提醒                | [可选] 发件人                                                |
| ADMIN_URL     | https://xxx.leanapp.cn/                       | [建议] Web主机二级域名，用于自动唤醒                         |
| TO_EMAIL      | [xxxxx@gmail.com](mailto:xxxxx@gmail.com)     | [可选] 指定站长收信邮箱，默认值为`SITE_USER`。用于 SMTP 发件人与站长收件人不一致的情况下使用。 |
| TEMPLATE_NAME | rainbow                                       | [可选] 通知邮件的模板（default和rainbow），参考高级功能      |

1. 点击 `云引擎 -> 部署`，选择`Git源码部署`，分支或版本号输入`master`，下载最新依赖（可选），部署 [![Git](https://camo.githubusercontent.com/0a4a4b33c7d95f072e5d96130003ed4e7b6cfe7c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134333033352e706e67)](https://camo.githubusercontent.com/0a4a4b33c7d95f072e5d96130003ed4e7b6cfe7c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134333033352e706e67) [![master](https://camo.githubusercontent.com/cc8ec687bfce8f2c6d34fbfb8f0557261a9fe840/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134333230352e706e67)](https://camo.githubusercontent.com/cc8ec687bfce8f2c6d34fbfb8f0557261a9fe840/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134333230352e706e67)

## 后台管理

1. 点击 `云引擎 -> 设置`，在`Web主机域名`位置点击`申请`，获取二级域名，现在的二级域名不支持自定义，如果想好记请参考高级功能 [![Web主机域名](https://camo.githubusercontent.com/3f495170e97459ae13172b0f09cf34c398b12737/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134333331352e706e67)](https://camo.githubusercontent.com/3f495170e97459ae13172b0f09cf34c398b12737/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373134333331352e706e67)
2. 设置后台管理登录信息，点击 `存储 -> 结构化数据`，选择`_User -> 添加行`，只需要填写`password`、`username`、`email`这三个字段即可, 使用 email 作为账号登陆、password 作为账号密码、username 任意即可。（为了安全考虑，此 email 必须为配置中的 SMTP_USER 或 TO_EMAIL， 否则不允许登录） [![后台管理](https://camo.githubusercontent.com/cd459da8cf3386a974912a21087925b1961909dc/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373135313333392e706e67)](https://camo.githubusercontent.com/cd459da8cf3386a974912a21087925b1961909dc/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373135313333392e706e67)
3. 此后，可以通过`https://二级域名.leanapp.cn/`管理评论

## ~~定时任务~~

{% note red fas fa-exclamation %}

此方法已失效<span style="font-size:larger"> 前往解决此问题的方法 {% post_link Web/leancloud/leanCloud-problem001 %} <span>

{% endnote %}

{% hideToggle 点击查看已失效的开启定时任务的方法 %}

 免费版的 LeanCloud 容器，是有强制性休眠策略的，不能 24 小时运行：

- 每天必须休眠 6 个小时
- 30 分钟内没有外部请求，则休眠
- 休眠后如果有新的外部请求实例则马上启动（但激活时此次发送邮件会失败）。

分析了一下上方的策略，如果不想付费的话，最佳使用方案就设置定时器，目前基于 LeanCloud 自带定时器实现了两种云函数定时任务：

- 自动唤醒，定时访问Web APP二级域名防止云引擎休眠（推荐）
- 定时检查，每天定时检查24小时内漏发的邮件通知

**配置**

1. 首先需要添加环境变量，点击 `云引擎 -> 设置`，配置`自定义环境变量`，变量名`ADMIN_URL`，变量值`Web 主机域名，即二级域名地址`，添加后重启容器环境变量才会生效
2. 配置定时任务，击 `云引擎 -> 定时任务`

- 配置自动唤醒（推荐），创建定时任务，名称任意，生产环境选择`self-wake`云函数，Cron表达式填入`0 */20 7-23 * * ?`，表示每天 7 - 23 点每 20 分钟访问一次，这样可以保持每天的绝大多数时间邮件服务是正常的。

- 配置定时检查，创建定时任务，名称任意，生产环境选择`resend-mails`云函数，Cron表达式填入`0 0 8 * * ?`，表示每天早8点检查过去24小时内漏发的通知邮件并补发 [![img](https://camo.githubusercontent.com/7fc297acdf0ad75604ae6f8f9717decde55cd073/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373135333833312e706e67)](https://camo.githubusercontent.com/7fc297acdf0ad75604ae6f8f9717decde55cd073/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f686f6e677765696675747572652f6a7344656c69767243444e2f696d672f32303230303230373135333833312e706e67)

{% endhideToggle %}