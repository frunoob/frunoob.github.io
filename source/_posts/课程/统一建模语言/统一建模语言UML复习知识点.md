---
title: 统一建模语言UML复习知识点
tags:
  - 大三下复习
categories:
  - 课程
  - 统一建模语言
top_img: false
cover: false
comments: false
date: 2020-12-05 10:30:56
top:
updated:
keywords:
description:
toc:
toc_number:
mathjax: true
katex:
aplayer:
highlight_shrink:
aside:
---

### 什么是统一建模语言（了解）

1. UML定义有两个主要组成部分：{%  hideInline 语义和表示法, 点击查看 %}。

2. UML是一种{%hideInline 可视化,点击查看%}的建模语言。

3. UML的图示建模工具被分为两大类共13种图形

     {% hideBlock 1. 结构图(Structure Diagrams)（静态）%}
* **结构图(Structure Diagrams)（静态）:**
类图(Class Diagram)
组件图(Component Diagram)
对象图(Object Diagram)
复合结构图(Composite Structure Diagram)
部署图(Deployment)
包图(Package Diagram)

     {%endhideBlock%}
{% hideBlock  2.行为图(Behavior Diagrams)（动态）%}
*  **行为图(Behavior Diagrams)（动态）:**
活动图（Activity Diagram）
用例图（Use Case Diagram）
状态图（State Diagram）
{% hideBlock  交互图（Interaction Diagrams）%}
通信图(Communication diagrams)
顺序图(Sequence Diagram)
时间配置图(Timing Diagram) 
交互综合图(Interaction Overview Diagram)
{%endhideBlock%}
{%endhideBlock%}
       
       


### UML的语法描述（了解）

{%hideBlock 不了解？点开看看,#40b66277,white%}![UML语法描述](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201207224320.png){%endhideBlock%}

### UML的组成（了解）

{%hideBlock 不了解？点开看看,#40b66277,white%}![图片1](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201207224540.jpg){%endhideBlock%}

### UML图的表达方式（必背）

| UML图  |                           表达方式                           |
| :----: | :----------------------------------------------------------: |
| 用例图 | {% hideInline 参与者 + 用例 + 关系,click me,#00c4b655,white%} |
| 对象图 |     {% hideInline  对象 + 链,click me,#00c4b655,white%}      |
| 顺序图 |    {% hideInline 生命线 + 消息,click me,#00c4b655,white%}    |
| 通信图 | {% hideInline 交互的参与者 + 通信链 + 消息,click me,#00c4b655,white%} |
|  类图  |  {% hideInline 类 + 关系 + 约束,click me,#00c4b655,white%}   |
| 状态图 |     {% hideInline 状态 + 迁移,click me,#00c4b655,white%}     |
| 活动图 | {% hideInline 活动 + 动作 + 活动边 + 活动节点,click me,#00c4b655,white%} |
|  包图  |      {% hideInline 包 + 关系,click me,#00c4b655,white%}      |
| 构件图 | {% hideInline 构件 + 接口 + 关系 + 端口 + 连接器,click me,#00c4b655,white%} |
| 部署图 | {% hideInline 制品 + 节点 + 通信路径,click me,#00c4b655,white%} |

### 简单消息、同步消息和异步消息的区别和特征（必背）

{%hideBlock 答案,#40b66277,white%}

**简单消息**只表示控制如何从一个对象发给另一个对象，并不包含控制的细节。

**同步**意味着阻塞和等待，如果对象A向对象B发送一个消息，对象A发送消息后必须等待消息返回，只有当对象B处理消息的操作执行完毕后，对象A才可继续执行自己的操作，这样的消息称作 **同步消息**。

**异步** 意味着非阻塞，如果对象A向对象B发送一个消息，对象A不必等待对象B执行完这个消息，就可以继续执行自己的下一个行为，这样的消息称作 **异步消息**。

{%endhideBlock%}

### 类的识别

1. 名词识别法
2. 系统实体识别法
3. 从用例中识别类
4. 利用分解与抽象技术

### UML图中各种线和箭头的含义及画法（必会）

<style type="text/css">
thead {color:green;}
tfoot {color:red;}
</style>
<table border="5">
    <caption>各种关系线</caption>
    <thead>
        <tr>
    	<th>图</th>
        <th>关系</th>
        <th>解释</th>
        <th>图例</th>
    </tr>
    </thead>
    <tr>
    	<td rowspan="3">用例图</td>
    	<td>泛化关系</td>
        <td>客户是电话客户的泛化，客户是父用例<br/>电话客户是子用例，箭头由电话客户指向客户
        <br/>泛化是两个<b>用例</b>或两个<b>参与者</b>之间的关系
        </td>
        <td>
            <img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208011533.png" style="zoom:50%"/></td>
    </tr>
    <tr>
        <td>扩展关系</td>
    	<td>箭头指向基用例<br/>通过扩展用例向基用例中添加扩展功能
        <br/>是两个用例之间的关系</td>
        <td><img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208084713.png" style="zoom:50%"/></td>
    </tr>
    <tr>
        <td>包含关系</td>
        <td>是两个用例之间的关系<br/>指向被包含用例<br/></td>
        <td><img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208085512.png" style="zoom:50%"/></td>
    </tr>
    <tr >
    	<td rowspan="1">对象图</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
    	<td rowspan="4">顺序图</td>
        <td>简单消息</td>
        <td></td>
        <td><img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208090550.png"/></td>
    </tr>
    <tr>
    	<td>返回消息</td>
        <td></td>
        <td><img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208090633.png"/></td>
    </tr>
    <tr>
    	<td>同步消息</td>
        <td>等待接受者</td>
        <td><img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208091020.png"/></td>
    </tr>
        <tr>
    	<td>异步消息</td>
        <td>不管接收者如何</td>
        <td><img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208091115.png"/></td>
    </tr>
</table>




### 识别UML图（必会）

| 图例                                                         | 图名称 | 解释                                           |
| ------------------------------------------------------------ | ------ | ---------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201208004610.png" alt="image-20201208004524652" style="zoom:45%;" /> | 用例图 | 有一个参与者为图书管理员<br />有五个用例<br /> |
|                                                              |        |                                                |
|                                                              |        |                                                |
|                                                              |        |                                                |
|                                                              |        |                                                |

