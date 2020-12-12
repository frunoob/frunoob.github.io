title: LeanCloud流控问题
tags:
  - LeanCloud问题
categories:
  - 博客云服务器
date: 2020-10-25 13:37:00
cover:
---



## 前言

<em> leancloud </em> 无法正常使用定时唤醒功能，为有更好的网站评论体验，故另寻它法。

## 解决方案

LeanCloud 的[休眠策略](https://leancloud.cn/docs/leanengine_plan.html#hash633315134) 。

> - 如果应用最近一段时间（半小时）没有任何外部请求，则休眠。
> - 休眠后如果有新的外部请求实例则马上启动。访问者的体验是第一个请求响应时间是 5 ~ 30 秒（视实例启动时间而定），后续访问响应速度恢复正常。
> - 强制休眠：如果最近 24 小时内累计运行超过 18 小时，则强制休眠。此时新的请求会收到 503 的错误响应码，该错误可在 **云引擎 > 统计** 中查看。

{% btn https://github.com/blogimg/WakeLeanCloud, 解决请看Dreamy.TZK的方案, fa-hand-o-right, red, block, center  %}

