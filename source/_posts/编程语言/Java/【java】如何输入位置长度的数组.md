title: 【java】如何输入位置长度的数组
author: Frunoob
tags:
  - java
categories:
  - 编程语言
cover: 'https://cdn.pixabay.com/photo/2017/02/13/09/56/background-2062206__340.jpg'
date: 2020-10-29 19:34:00 
---
```
String s=sc.nextLine();//读入一行string
String[] c=s.split("\\s+");//根据空格进行分割
int[] arr=new int[c.length];
for(int i=0;i<c.length;i++) {
   arr[i]=Integer.parseInt(c[i]);
   //将string转为int型
}
```