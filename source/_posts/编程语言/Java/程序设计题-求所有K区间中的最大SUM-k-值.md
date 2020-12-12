title: '程序设计题-求所有K区间中的最大SUM[k]值'
author: Frunoob
tags:
  - java程序设计题
categories:
  - 编程语言
  - JAVA
date: 2020-10-29 19:37:00
---
## java程序设计19题
![图片](https://i.loli.net/2020/10/29/JlOYvkoL8c61nZI.png)



## 代码

```java
import java.util.Scanner;

public class Solution {

    public boolean primeNum(int num){
        /* 判断素数*/
        for (int i = 2; i <num; i++ ){
            if(num%i==0) return false;
        }
        return true;
    }
    public void itervalComparison() {
        Scanner input = new Scanner(System.in);
        System.out.println("请输入（N<=10000,K<=200）:");
        // 从终端接收两个整数
        int N = input.nextInt(); //
        int K = input.nextInt(); //
        int arr[] = new int[N];
        // 如果输入的数值 第一个N大于10000或K大于200就提示输入错误
        if (N > 10000 || K > 200){
            System.out.println("输入错误（N<=10000,K<=200）");
        }else {
            // 输入的数值N,K符合要求则接收对应长度的数组
            for (int i = 0; i < N; i++) {
                arr[i] = input.nextInt();
            }
        }
        int before = 0,after = 0,max = 0;
        // 开始比较第n个 K区间内的素数之和 和 第n+1个 K区间的素数之和 的大小
        for (int i = 0; i < arr.length-K; i++) {
            before=after=0;
            // 求K区间内的所有素数之和
            for (int j = i; j < i+K; j++){
                if (primeNum(arr[j])) before += arr[j];
                if (primeNum(arr[j+1])) after += arr[j+1];
                System.out.println(before+"|||"+after);
            }
            // 比较第n个k区间总和和第n+1个k区间的总和并将值大的k区间总和赋值给max
            max=max>(before>after?before:after)?max:(before>after?before:after);
            System.out.println("max;"+max);
        }
        System.out.println(max);

}

    public static void main(String[] args) {
        new Solution().itervalComparison();
    }
}

```

