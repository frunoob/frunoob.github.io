---
title: QTP笔记02
updated: ''
tags: 
- QTP
categories: 
 -  课程
 -  软件测试技术
 - 软件测试实践
keywords: ''
description: ''
top_img: 'false'
cover: 'https://gitee.com/frunoob/blog-image/raw/master/image/20201120204608.webp'
comments: 'false'
toc: ''
toc_number: ''
copyright: ''
copyright_author: frunoob
copyright_author_href: ''
copyright_url: ''
copyright_info: ''
mathjax: ''
katex: ''
aplayer: ''
highlight_shrink: ''
aside: 'false'
date: 2020-11-16 23:17:59
---

**一、****Qtp****对象仓库**

**1.****定义：用来存储****qtp****测试过程中所识别的对象**

**在****qtp****的对象仓库中的属性必须和被测程序中的属性一致，否则运行的测试结果就会失败**

**一．****对象仓库修改的三种方式：**

**第一种方式：在对象仓库中添加**

**（****1****）点击****Resource/object Repository /rui pao si ter rui/** **或者****Ctrl+R**

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image004.jpg)

（2）点击+号前先把应用程序打开，然后点击+号，再点击要添加被测程序的按钮（例如添加-号），中途不要点击任何操作，直接点击OK，即可添加成功；

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image004.jpg)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image004.jpg)

（3）添加-号成功了

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image004.jpg)

（4）然后去脚本的界面把添加到对象仓库的值添加到脚本中

（5）选中要添加的位置（例如要添加到text2的后面）就点击text2点击右键，点击insert new step

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image004.jpg)

（6）点击insert new step后出现下面页面，直接点击下拉箭头添加*号即可

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image004.jpg)

（7）添加成功

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image002.jpg)

注：如果点击下拉箭头没有要添加的对象，但是确实添加到对象仓库了，点击下拉箭头下的object from repository

**第二种方式**：点击Active Screen

（1）在脚本页面，点击脚本中的任意一个对象名，会出现下面页面，点击Active Screen

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image002.jpg)

（2）然后点击要添加的对象右键View/Add object,

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image002.jpg)

(3)对象显示添加进入，点击OK

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image002.jpg)

 

 

（4）点击view in repository

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image002.jpg)

(5)显示添加进入对象仓库，

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image002.jpg)

（6）选中要添加的位置（例如要添加到text2的后面）就点击text2点击右键，点击insert new step

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image018.jpg)

 

（7）点击insert new step后出现下面页面，直接点击下拉箭头添加*号即可

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image018.jpg)

（8）添加成功

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image018.jpg)

 

**第三种添加方式：补录方式**

1.先切换手动录制模式 点击Automation/Record and Run Setting 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image018.jpg)

 

 

 

 

2.点击Record and Run Setting 进行切换

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image018.jpg)

\3. 打开被测程序，把补录步骤之前的操作先进行操作完成，

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image018.jpg)

\4. 然后点击Record按钮进行录制，然后在被测程序中点击需要添加的按钮（添加*号）显示添加成功后点击stop结束录制![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image033.jpg)

 

5.进行回放前，先把启动程序的方式切换到自动录制方式，让被测程序自己启动

 

 

**三：对象探测器**  **Object Spy**

**作用：查看当前被测系统中的实际运行对象（****RO****）的所有属性**

**第一方式：**

**1.** **先启动被测程序**

**2.** **点击工具栏中的人头像**

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image033.jpg)

\3. 点击小手图标

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image033.jpg)

 

 

4.点击小手图标后，点击被测程序中的结果框（获取属性信息），探测器中就会显示相关的属性信息

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image033.jpg)

**第二方式：****Tools/Object Spy**

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image033.jpg)

**第三种方式：对象仓库的工具栏中的小人头图标**

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image033.jpg)

 

注意：如果ObjectSpy遮挡被测系统的控件，按住左键+Ctrl键操作，显示出控件，再捕获

 

**四****.****系统设置**

1.对象同步时间：默认是20秒，可修改

意义：回放时到被测系统中识别对象(步骤3)的最长时间

**位置：****File\Settings\Run\Object synchronization timeout :xxx seconds**

**2.****在关键字视图中增删改操作步骤**

（1）增加步骤:

a.添加要操作的步骤的对象到对象仓库

b.确定添加位置，选中该位置上一个步骤

c.右键，选择Insert New Step

d.在Item列中选择对象，Operation中确认操作步骤，在Value列中填入数据

（2）删除步骤：

右键\Delete Step

（3）修改步骤：

a.修改Item、Operation、Value均可修改

b.点击要修改的内容，下拉菜单中修改

**五．****添加检查点**

**需要检查预期结果是否正确，来验证被测系统功能是否正常**

**有标准检查点** **位图检查点**  **文本检查点** **文本区域检查点**

 

\1. **添加标准检查点**

检查对象的属性值

步骤：

（1）确定检查的对象

（2）确定检查对象的属性名称

（3）确定插入检查点的位置

（4）开始录制，录制过程中插入检查点，点击Insert/Checkpoiont/Standart Checkpoint

（5）点击被测程序中的检查点的内容

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image039.jpg)

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image039.jpg)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image039.jpg)

 

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image039.jpg)

\2. 录制时检查点忘记添加，通过ActionScreen插入检查点

步骤：相应对象上右键Insert Standard Checkpoint 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image039.jpg)

 

**3.** **添加位图检查点**

主要用于检查页面图片

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image039.jpg)

步骤：

（1）确定检查的对象

（2）确定检查对象的属性名称

（3）确定插入检查点的位置

（4）开始录制，录制过程中插入检查点，点击Insert/Checkpoiont/bitmap Checkpoint

（5）点击被测程序中的检查点的内容

（6）插入检查点后，确定检查的范围

Check entirmap 检查整张图片

**Check only selected area****检查图片某个区域**

**注意：如果检查对象非方形区域，需要勾选部分区域进行检查，不能检查整张图**

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image045.jpg)

**3.****添加文本检查点**

作用：检查指定文本是否出现

步骤：

（1）确定插入检查点的位置

（2）确定检查的文本内容

（3）录制过程中，Insert\CheckPoint\Text Checkpoint

（4）回放，查看结果报告

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image045.jpg)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image045.jpg)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image045.jpg)

 

**4.****添加文本区域检查点**

作用：检查在指定区域内是否显示指定文本

Insert\CheckPoint\Text Area Checkpoint

**文本检查点和文本区域检查点的区别：**

（1）检查的范围不同：文本检查点检查对象的文本内容，文本区域检查点检查在指定区域内的文本内容

（2）检查的对象不同：文本检查点检查文本本身对象，一般为Static对象，文本区域检查点文本区域的对象，一般为Static对象的父对象

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image045.jpg)

 

**5****、检查点失败的原因**

（1）检查点插入的位置

（2）Timeout时间

（3）需求变动

（4）bug

 

**六：参数化**

1.为什么需要做DataTable参数化

**相同的业务流程，只是测试数据不同**

**实现业务和数据的分离，方便维护代码和数据**

**2.DataTable****参数化的步骤（重点）**

**（****1****）分析出要反复执行的代码，进行录制**

**4.**   **做参数化，两种方式**

**第一种方式：**

（1）先定位要参数化的数据，再创建DataTable参数。具体如下：

a.点击要参数化的数据的Value列的<#>按钮

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image045.jpg)

b.在Value Configuration options(值配置选项)对话框中，选择“Parameter”（参数）单选按钮

c.在Name中输入参数名称,OK

d.点击file/setting/run 设置循环的次数

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image063.jpg)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image063.jpg)

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image063.jpg)

 

 

 

**第二种方式**：

（2）先创建DataTable参数，再参数化数据

a.在DataTable的Global表单中，点击某一列的标题，输入参数名称，OK

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image063.jpg)

b.点击要参数化的数据的Value列的<#>按钮

c.选择“Parameter”（参数）单选按钮

c.在Name中选择在a步骤中创建的参数名称,OK

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image063.jpg)

 

d.在DataTable中准备数据

 

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image063.jpg)

**4.****设置循环次数：****File\Settings\Run\DataTable Iterations**

（1）Run one iteration only（只运行一次）

（2）Run on all rows(运行全部行)

（3）Run from row [m] to [n](从第m行到第n行运行)

 

**第三种方式：在专家视图中进行参数化**

![img](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/clip_image073.jpg)

 

七．DataTable参数化注意点（重点）

1.在代码的开始和结束，被测系统要处于相同的状态

2.对一个数据做参数化，受影响的其他数据也要做参数化

提示：以0开头的数据，前面加半角单引号

注意：删除数据行，行点击右键\Edit\Delete

 