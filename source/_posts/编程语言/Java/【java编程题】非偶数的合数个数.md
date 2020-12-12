---
title: 【java编程题】非偶数的合数个数
updated: ''
tags: 
- java编程题
categories: 
- 计算机编程
- java
keywords: ''
description: '非偶数的合数个数'
top_img: 'false'
cover: 'https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201120204316.webp'
comments: 'false'
toc: ''
toc_number: ''
copyright: 'false'
copyright_author: frunoob
copyright_author_href: ''
copyright_url: ''
copyright_info: ''
mathjax: ''
katex: ''
aplayer: ''
highlight_shrink: ''
aside: 'false'
date: 2020-11-16 23:48:30
---

![image-20201116234841599](https://gitee.com/frunoob/blog-image/raw/master/image/2020-11-16/23/27/image-20201116234841599.png)

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        Scanner input = new Scanner(System.in);
        while (true) {
            System.out.print("请输入N,M （例：2 16）：");
            int num = input.nextInt();
            int num2 = input.nextInt();
            int count = 0;
            if (num < 100000 && num2 < 100000) {
                for (int i = num; i <= num2; i++) {

                    if (i>=4 && i%2 != 0  ){

                        for (int m = 2; m<i;m++){
                            if (i%m==0) {
                                count++;
                                break;
                            }
                        }
                    }

                }
                System.out.println(count);
                break;
            } else {
                System.out.println("请输入2个整数N,M(N,M<100000)！！！");
            }
        }
    }
}

```

