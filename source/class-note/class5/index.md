---
title: 计算机图形学
type: ''
comments: false
aside: false
top_img: false
---

# 第一节课
## 课程基本情况

**课程名称：** 计算机图形学

**课程性质：** 专业课

**适用专业：** 软件工程专业本科

**学时：** 32学时（24学时理论授课+8学时实验上机）

**学分：2** 学分

**考核方式：** 闭卷考试；总成绩=64%期末成绩+16%平时成绩+20%实验成绩

**使用教材：** 孙家广.《计算机图形学基础教程（第2版）》[M].北京：清华大学出版社，2009.8 <a href="https://github.com/frunoob/books/raw/master/%E7%94%B5%E5%AD%90%E7%89%88%E6%95%99%E6%9D%90%E2%80%94%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9B%BE%E5%BD%A2%E5%AD%A6%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B%EF%BC%88%E7%AC%AC2%E7%89%88).pdf">下载</a>



![教材封面.jpg](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20210312154223.jpg)

**参考资料：**  

[1]孔令德.《计算机图形学基础教程(Visual C++版)(第2版)》[M].北京：清华大学 出版社，2013.3

[2]于万波.《计算机图形学(VC++实现)(第2版)》[M].北京：清华大学出版社，2017.1

**教学目的与重点：**  



（一）课程的重要性

计算机图形学是计算机系本科生的一门重要课程，是计算机学科中最活跃的一个分支之一，是虚拟现实、计算机动画、可视化等课程的基础，在ACM/IEEE的计算机科学教学大纲中有这门课的要求。

（二）课程在内容安排及教学过程中的特色

本课程以课堂教学、上机实践、课后作业相结合的方式进行教学。上机题和作业题在上完相关内容后布置。上机作业在学期结束前提交上机实验报告。

（三）通过该课程学习学生应掌握的知识、达到的水平或能力

既向学生传授图形学的经典方法和最新成果，也注重培养学生动手实践能力。初步掌握光栅图形学、几何造型绘制的知识。能够编程实现大部分的光栅算法和简单的Bezier曲线的几何计算。

**课程主要教学内容**   

第一章 绪论（2学时）

1.1 计算机图形学的研究内容

1.2 计算机图形学发展的历史回顾

1.3 计算机图形学的应用与研究前沿

1.4 图形设备

第二章 光栅图形学（16学时）

2.1 直线段的扫描转换算法

2.1.1 数值微分法

2.1.2 中点划线法

2.1.3 Bresenham算法

2.2 圆弧的扫描转换算法

2.2.1 圆的特征

2.2.2 中点画圆法

2.3 多边形的扫描转换与区域填充

2.3.1 多边形的扫描转换

2.3.2 区域填充算法

2.4 字符

2.4.1 点阵字符

2.4.2 矢量字符

2.4.3 字符属性

2.5 裁剪

2.5.1 直线段裁剪

2.5.2 多边形裁剪

2.5.3 字符裁剪



2.6 反走样

2.6.1 提高分辨率

2.6.2 区域采样

2.6.3 加权区域采样

2.7 消隐

第三章 几何造型技术（6学时）



3.1 参数曲线和曲面

3.1.1 曲线曲面的表示

3.1.2 曲线的基本概念

3.1.3 插值、拟合和光顺



3.1.4 参数化

3.1.5 参数曲线的代数和几何形式

3.1.6 连续性

3.1.7 参数曲面的基本概念



3.2 **Bezier曲线与曲面** （受课时影响只能讲到这里）（重点）

3.2.1 Bezier曲线的定义和性质

3.2.2 Bezier曲线的地推算法 

3.2.3 Bezier曲线的升阶与降阶



3.2.4 Bezier曲面的定义和性质

第四章 真实感图形学

第五章 图形标准

** 
** 

**实验教学内容（8学时）**     

| 实验一：第一个OpenGL程序         |
| -------------------------------- |
| 实验二：DDA直线扫描算法          |
| 实验三：区域填充扫描线算法       |
| 实验四：Cohen-Sutherland裁剪算法 |
| 实验五：绘制Bezier曲线           |

## 扩展资料

{%hideToggle 2018计算机图形学研究报告%}
<img src=""alt=""id="preload"hidden><img id="books"style="width: 800px;"src="https://s3.ananas.chaoxing.com/doc/c2/2c/23/0f43a109ec300c74ecb1a71cf1e03ee1/thumb/1.png"></img><div style=" transform: translateX(261px);"><button style="background: blue; transform: translateX(261px); left: 50%;"id="button">下一页</button><input type="text" name="" id="inputNum"> <button style="background:blue;" onclick="gotoPage()">确定</button></div><script>var pageNum=1;document.getElementById("inputNum").addEventListener("click",function(){this.value=""})function gotoPage(){var inputNum=parseInt(document.getElementById("inputNum").value);if(inputNum>0&&inputNum<53){document.getElementById("inputNum").value="";pageNum=inputNum;document.getElementById("books").attributes[2].value="https://s3.ananas.chaoxing.com/doc/c2/2c/23/0f43a109ec300c74ecb1a71cf1e03ee1/thumb/"+pageNum+".png";document.getElementById("preload").attributes[0].value="https://s3.ananas.chaoxing.com/doc/c2/2c/23/0f43a109ec300c74ecb1a71cf1e03ee1/thumb/"+(pageNum+1)+".png"}else{document.getElementById("inputNum").value="最大值不要超过53"}}function changePage(){pageNum++;if(pageNum<53){document.getElementById("books").attributes[2].value="https://s3.ananas.chaoxing.com/doc/c2/2c/23/0f43a109ec300c74ecb1a71cf1e03ee1/thumb/"+pageNum+".png";document.getElementById("preload").attributes[0].value="https://s3.ananas.chaoxing.com/doc/c2/2c/23/0f43a109ec300c74ecb1a71cf1e03ee1/thumb/"+(pageNum+1)+".png"}else{document.getElementById("books").hidden=true}console.log(pageNum)}button=document.getElementById("button");button.addEventListener("click",changePage);

</script>
<br/>
<img src=""id="preload2"hidden><img id="books2"style="width: 800px;"src="https://s3.ananas.chaoxing.com/doc/65/e2/81/abfa44414a6f70fd458728295840e5f2/thumb/1.png"></img><br><div style=" transform: translateX(261px);"><button style="background:blue;"id="button2">下一页</button><input type="text" name="" id="inputNum2"> <button style="background:blue;" onclick="gotoPage22()">确定</button></div><script>var pageNum2=1;document.getElementById("inputNum2").addEventListener("click",function(){this.value=""})function gotoPage22(){var inputNum2=parseInt(document.getElementById("inputNum2").value);if(inputNum2>0&&inputNum2<33){document.getElementById("inputNum2").value="";pageNum2=inputNum2;document.getElementById("books2").attributes[2].value="https://s3.ananas.chaoxing.com/doc/65/e2/81/abfa44414a6f70fd458728295840e5f2/thumb/"+pageNum2+".png";document.getElementById("preload2").attributes[0].value="https://s3.ananas.chaoxing.com/doc/65/e2/81/abfa44414a6f70fd458728295840e5f2/thumb/"+(pageNum2+1)+".png"}else{document.getElementById("inputNum2").value="最大值不要超过33"}}function changePage2(){if(pageNum2<33){pageNum2++;book2="https://s3.ananas.chaoxing.com/doc/65/e2/81/abfa44414a6f70fd458728295840e5f2/thumb/"+pageNum2+".png";document.getElementById("books2").attributes[2].value="https://s3.ananas.chaoxing.com/doc/65/e2/81/abfa44414a6f70fd458728295840e5f2/thumb/"+pageNum2+".png";document.getElementById("preload2").attributes[0].value="https://s3.ananas.chaoxing.com/doc/65/e2/81/abfa44414a6f70fd458728295840e5f2/thumb/"+(pageNum2+1)+".png"}else{document.getElementById("books2").hidden=true}console.log(pageNum2)}button2=document.getElementById("button2");button2.addEventListener("click",changePage2);</script>
{%endhideToggle%}

**计算机图形学公开课：** 

推荐在线学习中国大学MOOC（https://www.icourse163.org/）上的国家精品课程

——计算机图形学（中国农业大学，赵明）

[计算机图形学_中国农业大学_中国大学MOOC(慕课)](https://www.icourse163.org/course/CAU-45006)





2019年图灵奖公布！计算机图形学先驱Hanrahan和Catmull获奖，祝贺两位好莱坞3D动画大片技术元老

https://mp.weixin.qq.com/s/XJyA0aVUIyRz2AY0XdUyDA
