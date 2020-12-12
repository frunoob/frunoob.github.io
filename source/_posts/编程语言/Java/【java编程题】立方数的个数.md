---
title: 【java编程题】立方数的个数
updated: ''
tags: 
- java编程题
- java
categories: 
- 计算机编程
- java
keywords: ''
description: ''
top_img: 'false'
cover: 'https://gitee.com/frunoob/blog-image/raw/master/image/20201120204749.webp'
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
highlight_shrink: false
aside: 'false'
date: 2020-11-16 14:37:11
---

![image-20201116231343854](https://gitee.com/frunoob/blog-image/raw/master/image/image-20201116231343854.png)



```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        Scanner input = new Scanner(System.in);
        while (true) {
            System.out.print("请输入N（N<100000）：");
            int num = input.nextInt();
            int count = 0;
            if (num < 100000) {
                for (int i = 1; i * i * i <= num; i++) {
                    count++;
                }
                System.out.println(count);
                break;
            } else {
                System.out.println("请输入一个整数N(N<100000)！！！");
            }
        }
    }
}

```

