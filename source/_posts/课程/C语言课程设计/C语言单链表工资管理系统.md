---
title: C语言单链表工资管理系统
tags:
  - null
categories:
  - 课程
	- C语言课程设计
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-26 19:35:31
top:
updated:
keywords:
description: 通过单链表实现的职工工资管理系统
toc: true
toc_number:
katex:
aplayer:
highlight_shrink:
aside: 
---

{%note info%}

下载[项目源代码，实验报告，源数据](https://frunoob.lanzous.com/iXw9ojquwkh)

{%endnote%}

**1** **、课程设计目的**

工资管理是一个单位最基本的一项财务管理，本程序利用单链表结构存储数据，完成工资管理，通过这个程序掌握C语言的各种数据类型和C语言的核心-指针以及表示数据和存储数据的方法，深刻体会数据结构与算法的关系。

**2** **、课程设计正文**

**2.1** **系统分析**

此系统为公司职工工资管理系统，运用了单链表、枚举、冒泡等算法，添加职工信息、修改职工信息、查询职工信息、排序及统计职工信息等系统。

职工的属性值：

  char no[11];   /* 职工编号 (不超过10位) */

  char name[11];  /* 职工姓名 (长度不超过5个字) */

  char gender[3]; /* 性别 */

  char job[20];  /* 职务(不超过10字) */

  int workDay;   /* 工作天数 */

  int lateDay;   /* 迟到天数 */

  int leaveDay;  /* 请假天数 */

  float basePay;  /* 基本工资 */

  float cutPay;  /* 扣款 */

  float shouldPay; /* 应发工资 */

  float truePay;  /* 实发工资 */

  float bonus;   /* 奖金 */

  float tax;    /* 税金 */

计算税金：

应发 <1000   税率 0

应发 1000~1999 税率 5%

应发 2000~2999 税率 10%

应发 3000~3999 税率 15%

应发 4000~4999 税率 20%

应发 >5000   税率 30%



 



**2.2** **系统组成**

![image-20201226193902072](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201226193902.png)

**2.3** **系统设计**

**2.3.1** **职工信息存储系统**

职工的全部信息都全部导出永久存放在一个txt文档中。从链表的头结点的下一位开始读取，依次写入到文件中，每一个职工的信息占一行，直到将所有的职工的信息存储到文件上，遍历才能结束，最后关闭文件，即可永久存储职工的工资信息。

![img](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201226195410.gif)

**2.3.2** **职工信息读取系统**

从txt文本中读取职工的基本信息，输入要读取的文档的开始和结束行就可以将数据赋值为单链表。从文件中读取职工的信息，需要判断文件是否存在，其次要判断文件中是否有数据，当遍历到文件的最后一行的时候停止遍历，不在用户要求的开始和结束行内的用户的数据不用写入到单链表中，只有当结点在用户用要求的行数中时，才将此文件中的此行赋值给单链表。如果输入的文件名并不存在，系统会报错提示“文件名称错误，请进入菜单后重试。”。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195435.gif)

**2.3.3** **信息修改系统**

修改职工信息，主要是修改职工的姓名、性别、职务、基本工资、迟到天数、请假天数和奖金。修改职工的信息主要的流程相同的，只是用户输入的时候的数据的不同，所以以下给出信息修改系统的流程图。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195438.gif)

**2.3.4** **信息排序系统**

对职工的编号、奖金、实发工资、迟到天数、工作天数、请假天数等进行排序，每种排序使用的方法类似，排序过程可以归结为以下流程。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195449.gif)

 

**2.3.5** **添加职工信息系统**

添加职工的信息，包括了添加职工的姓名、性别、基本工资、奖金、迟到天数、请假天数、职位等，采用头插法来添加新的职工的信息，将新的节点插入到头节点的后面。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195727.gif)

**2.3.6** **删除职工信息系统**

删除职工信息的过程分为两部分，查找职工和删除。当找到职工的节点位置的时候，让该节点的上一个节点指向该节点的下一个结点，然后释放该节点所占用的内存里的空间。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195454.gif)

 

**2.3.7** **查找统计系统**

查找统计包括，按编号、姓名、性别等查找和按工资、迟到天数、请假天数等进行统计。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195459.gif)



**2.4** **系统编码及实现**

主菜单界面：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195502.jpg)

**2.4.1** **存储职工信息**



输入2，回车进入存储职工信息系统，输入职工信息将要存储到的文件的名称，回车即可成功保存当前单链表中的职工的信息。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195505.jpg)

**2.4.2** **读取职工信息**

​    用户输入1，回车进入用户信息读取系统，输入要读取的用户信息文档，回车输入要读取的文档的开始和结束行，回车即完成了从文件读取职工信息的操作。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195509.jpg)

**2.4.3** **修改职工信息**

​    修改职工信息，主要是修改职工的姓名、性别、职务、基本工资、迟到天数、请假天数和奖金。修改职工的信息主要的流程相同的，只是用户输入的时候的数据的不同。 

（1）  修改姓名：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195512.jpg)

（2）  修改性别：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195517.jpg)

（3）  修改职位：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195518.jpg)

（4）  修改基本工资：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195533.jpg)

 

 

（5）  修改奖金：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195539.jpg)

（6）  修改迟到天数：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195601.jpg)

（7）  修改请假天数：

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195639.jpg)

**2.4.4** **职工信息排序**

对职工的编号、奖金、实发工资、迟到天数、工作天数、请假天数等进行排序，每种排序使用的方法类似。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195643.jpg)

**2.4.1** **添加职工信息**

添加职工的信息，包括了添加职工的姓名、性别、基本工资、奖金、迟到天数、请假天数、职位等，采用头插法来添加新的职工的信息，将新的节点插入到头节点的后面。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195646.jpg)

**2.4.1** **删除职工信息**

删除职工信息的过程分为两部分，查找职工和删除。当找到职工的节点位置的时候，让该节点的上一个节点指向该节点的下一个结点，然后释放该节点所占用的内存里的空间。

![img](https://gitee.com/frunoob/blog-image/raw/master/image/20201226195649.jpg)

**3** **、课程设计总结**

课通过本次C语言课程设计，我学会了使用单链表存储数据，并使用了指针来遍历节点，这使我加深了对指针的认识。我认识到了C语言的核心便是指针，这既是C语言的优势又是C语言的不足，因为大量的使用指针，极容易造成内存访问的错误或是指针指向错误，在C语言的学习道路上，我仍需要需要很长一段时间。本次课设，我遇到了很多问题，例如数据的输入与输出、全局变量和局部变量的定义、typedef struct、对字符串进行比较大小、菜单的循环调用和用户可退出等等，解决的问题越多，进步越大，我相信不论我遇到多少问题，只要一点点积累，最终我一定能将C这门编程语言学好。



 

**4** **、参考文献**

[1] 李震平,李晓霞 C语言程序项目设计教程[M].北京邮电大学出版社,2015,1.

[2] 严蔚敏,李冬梅,吴伟民 数据结构C语言版[M].人民邮电大学出版社,2015,2.

[3] 谭浩强 C++面向对象的程序设计(第二版)[M].清华大学出版社,2014,7.



``` C
#include <stdio.h>  // 标准输入输出库
#include <string.h> // 字符串库
#include <stdlib.h> // malloc() free()

// 工资管理系统

// 定义职工个人信息单链表结构
typedef struct W
{
    char no[11];     /* 职工编号 (不超过10位) */
    char name[11];   /* 职工姓名 (长度不超过5个字) */
    char gender[3];  /* 性别 */
    char job[20];    /* 职务(不超过10字) */
    int workDay;     /* 工作天数 */
    int lateDay;     /* 迟到天数 */
    int leaveDay;    /* 请假天数 */
    float basePay;   /* 基本工资 */
    float cutPay;    /* 扣款 */
    float shouldPay; /* 应发工资 */
    float truePay;   /* 实发工资 */
    float bonus;     /* 奖金 */
    float tax;       /* 税金 */
} worker;
// 定义节点
typedef struct N
{
    worker data;    // 数据域
    struct N *next; // 指向后继节点的指针
} node;
// 头指针
node *head = NULL;
// 创建单链表的头节点
void createHeadNode()
{
    head = (node *)malloc(sizeof(node)); // 申请内存，成为指针变量
    head->next = NULL;                   // 头节点下一位指向空
}
worker initWorker(worker data)
{
    data.bonus = data.cutPay = data.shouldPay = data.truePay = data.tax = 0;
    data.lateDay = data.leaveDay = data.workDay = 0;
    strcpy(data.name, "");
    strcpy(data.no, "");
    strcpy(data.job, "");
    strcpy(data.gender, "");
    return data;
}
// 创建单个职工对应节点
node *createWorkerNode(worker data)
{
    node *worker = (node *)malloc(sizeof(node)); // 申请内存，成为指针变量
    worker->data = data;                         // 为职工节点的数据域赋值
    worker->next = NULL;                         // 初始化职工NEXT节点为空
    return worker;
}
/* 从表头插入结点 */
void insertByHead(node *head, worker data)
{
    node *iNode = createWorkerNode(data);
    iNode->next = head->next;
    head->next = iNode;
}
// 计算税金
// 应发 <1000     税率 0
// 应发 1000~1999 税率 5%
// 应发 2000~2999 税率 10%
// 应发 3000~3999 税率 15%
// 应发 4000~4999 税率 20%
// 应发 >5000     税率 30%
float taxM(float should2tax)
{
    if (should2tax < (float)1000)
    {
        should2tax = 0;
    }
    else if (should2tax >= (float)1000 && should2tax < (float)2000)
    {
        should2tax = (should2tax - (float)1000) * 0.05;
    }
    else if (should2tax >= (float)2000 && should2tax < (float)3000)
    {
        should2tax = (should2tax - (float)2000) * 0.1;
    }
    else if (should2tax >= (float)3000 && should2tax < (float)4000)
    {
        should2tax = (should2tax - (float)3000) * 0.15;
    }
    else if (should2tax >= (float)4000 && should2tax < (float)5000)
    {
        should2tax = (should2tax - (float)4000) * 0.2;
    }
    else if (should2tax >= (float)5000)
    {
        should2tax = (should2tax - (float)5000) * 0.3;
    }

    return should2tax;
}
// 数据计算
worker calculate(worker data)
{
    data.cutPay = data.lateDay * 10 + data.leaveDay * 50;
    data.shouldPay = data.basePay - data.cutPay + data.bonus;
    data.tax = taxM(data.shouldPay);
    data.truePay = data.shouldPay - data.tax;
    data.workDay = 30 - data.leaveDay;
    return data;
}
// 对齐输出单个职工的信息
void printWorkerData(node *pNode)
{

    pNode->data = calculate(pNode->data);
    printf("%-15s%-15s%-15s%-15s%-15d%-15d%-15d%-15.2f%-15.2f%-15.2f%-15.2f%-15.2f%-15.2f\n", pNode->data.no, pNode->data.name, pNode->data.gender, pNode->data.job, pNode->data.workDay, pNode->data.lateDay, pNode->data.leaveDay, pNode->data.basePay, pNode->data.cutPay, pNode->data.shouldPay, pNode->data.truePay, pNode->data.bonus, pNode->data.tax);
}
// 输出职工信息的标题栏
void printTitle()
{
    printf("\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n");
    printf("%-15s%-15s%-15s%-15s%-15s%-15s%-15s%-15s%-15s%-15s%-15s%-15s%-15s\n", "编号", "姓名", "性别", "职务", "工作(天)", "迟到(天)", "请假(天)", "基本工资", "扣款", "应发工资", "实发工资", "奖金", "税金");
}
/* 输出全部职工信息 */
void printNodeByHead(node *head)
{
    node *pNode = head->next;
    printTitle();
    while (pNode)
    {
        printWorkerData(pNode);
        pNode = pNode->next;
    }
    system("pause");
}
// 修改子菜单
void menuEdit()
{
    printf("\n");
    printf("\t\t\t\t -----------------------欢迎来到职工个人信息修改系统---------------- \n");
    printf("\t\t\t\t|                       0、退出                                     |\n");
    printf("\t\t\t\t|                       1、修改职工姓名                             |\n");
    printf("\t\t\t\t|                       2、修改职工性别                             |\n");
    printf("\t\t\t\t|                       3、修改职工职务                             |\n");
    printf("\t\t\t\t|                       4、修改职工基本工资                         |\n");
    printf("\t\t\t\t|                       5、修改职工迟到天数                         |\n");
    printf("\t\t\t\t|                       6、修改职工请假天数                         |\n");
    printf("\t\t\t\t|                       7、修改职工奖金金额                         |\n");
    printf("\t\t\t\t ------------------------------------------------------------------- \n");
    printf("请输入选项：");
}
// 修改职工信息
void editNodeByHead(node *head)
{
    char no[11];
    int isSex, option = -1;
    node *pNode = head->next;
    printf("请输入要修改的职工的编号:");
    scanf("%s", no);
    while (pNode)
    {
        if (strcmp(pNode->data.no, no) == 0)
        {
            char isExit = 'y';
            while (isExit == 'y' || isExit == 'Y' || isExit == '\n')
            {

                menuEdit();
                scanf("%d", &option);
                switch (option)
                {
                case 1:
                    printf("请输入新的姓名：");
                    scanf("%s", pNode->data.name);
                    printTitle();
                    printWorkerData(pNode);
                    break;
                case 2:
                    isSex = 1;
                    while (isSex)
                    {
                        printf("请输入性别(男/女)：");
                        scanf("%s", pNode->data.gender);
                        if (strcmp("男", pNode->data.gender) == 0 || strcmp("女", pNode->data.gender) == 0)
                        {
                            printTitle();
                            printWorkerData(pNode);
                            isSex = 0;
                        }
                        else
                            printf("输入错误请重新修改！\n");
                    }
                    break;
                case 3:
                    printf("请输入职务：");
                    scanf("%s", &pNode->data.job);
                    printTitle();
                    printWorkerData(pNode);
                    break;
                case 4:
                    printf("请输入基本工资：");
                    scanf("%f", &pNode->data.basePay);
                    printTitle();
                    printWorkerData(pNode);
                    break;
                case 5:
                    printf("请输入迟到天数：");
                    scanf("%d", &pNode->data.lateDay);
                    printTitle();
                    printWorkerData(pNode);
                    break;
                case 6:
                    printf("请输入请假天数：");
                    scanf("%d", &pNode->data.leaveDay);
                    printTitle();
                    printWorkerData(pNode);
                    break;
                case 7:
                    printf("请输入奖金：");
                    scanf("%f", &pNode->data.bonus);
                    printTitle();
                    printWorkerData(pNode);
                    break;
                case 0:
                    isExit = 'n';
                    printf("成功退出职工信息修改系统。\n");
                    break;
                default:
                    printf("输入错误\n");
                    break;
                }
            }
            break;
        }
        else
            pNode = pNode->next;
    }
}
// 记录到文件
void recordToFile(node *head)
{
    FILE *fp;
    node *pNode = head->next;
    char file[20];
    printf("请输入文件名称(无需输入后缀.txt)：");
    scanf("%s", file);
    fp = fopen(strcat(file, ".txt"), "w");
    while (pNode)
    {
        pNode->data = calculate(pNode->data);
        fprintf(fp, "%-15s%-15s%-15s%-15s%-15d%-15d%-15d%-15.2f%-15.2f%-15.2f%-15.2f%-15.2f%-15.2f\n", pNode->data.no, pNode->data.name, pNode->data.gender, pNode->data.job, pNode->data.workDay, pNode->data.lateDay, pNode->data.leaveDay, pNode->data.basePay, pNode->data.cutPay, pNode->data.shouldPay, pNode->data.truePay, pNode->data.bonus, pNode->data.tax);
        pNode = pNode->next;
    }
    printf("数据已成功保存到文件,程序已退出\n");
    fclose(fp);
}
// 释放内存
void release_list(node *pHead)
{
    node *p = pHead;
    node *t = p;
    while (NULL != p->next)
    {
        t = p->next;
        free(p);
        p = t;
    }
    return;
}
//从文件读取数据
void readFromFile(node *head)
{
    head->next = NULL;
    FILE *fp = NULL;
    worker rubbish;
    int begin = 0, end = 0, index = 1;
    char file[20];
    system("dir /b  *.txt");
    printf("请输入待读取的文件名称(请省略后缀.txt)：");
    scanf("%s", file);
    printf("请输入读取的开始行数和结束行数，空格隔开(默认 0 0 为读取全部):");
    scanf("%d %d", &begin, &end);
    printf("begin:%d ,end:%d\n", begin, end);
    fp = fopen(strcat(file, ".txt"), "r");
    if (fp)
        while (!feof(fp))
        {
            if ((index >= begin && index <= end) || (begin == 0 && end == 0))
            {
                worker pNode;
                fscanf(fp, "%s %s %s %s %d %d %d %f %f %f %f %f %f\n", pNode.no, pNode.name, pNode.gender, pNode.job, &pNode.workDay, &pNode.lateDay, &pNode.leaveDay, &pNode.basePay, &pNode.cutPay, &pNode.shouldPay, &pNode.truePay, &pNode.bonus, &pNode.tax);
                pNode = calculate(pNode);
                insertByHead(head, pNode);
            }
            else if (index > end)
            {
                break;
            }
            else
            {
                fscanf(fp, "%s %s %s %s %d %d %d %f %f %f %f %f %f\n", rubbish.no, rubbish.name, rubbish.gender, rubbish.job, &rubbish.workDay, &rubbish.lateDay, &rubbish.leaveDay, &rubbish.basePay, &rubbish.cutPay, &rubbish.shouldPay, &rubbish.truePay, &rubbish.bonus, &rubbish.tax);
            }
            index++;
        }
    else
        printf("文件名称错误，请进入菜单后重试。\n");
    fclose(fp);
    printNodeByHead(head);
}
// 添加职工
void add(node *head)
{
    worker data = initWorker(data);
    node *nNode;
    printf("输入职工的基本信息:\n");
    printf("%-15s%-15s%-15s%-15s%-15s%-15s%-15s%-15s\n", "编号", "姓名", "性别", "职务", "基本工资", "请假(天)", "迟到(天)", "奖金");
    scanf("%s %s %s %s %f %d %d %f", data.no, data.name, data.gender, data.job, &data.basePay, &data.leaveDay, &data.lateDay, &data.bonus);
    nNode = createWorkerNode(data);
    nNode->data = calculate(nNode->data);
    nNode->next = head->next;
    head->next = nNode;
    printf("添加职工信息成功\n");
    printTitle();
    printWorkerData(nNode);
    system("pause");
}
// 删除职工
void deleteWorker(node *head)
{
    char no[11];
    node *pNode = head->next;
    node *dNode = head;
    printf("请输入要删除的职工的编号：");
    scanf("%s", &no);
    while (pNode)
    {
        if (strcmp(pNode->data.no, no) == 0)
        {
            char confirm[3] = "N";
            printf("是否确定要删除以下职工的信息？(N/Y):");
            scanf("%s", confirm);
            if (strcmp("Y",confirm)==0||strcmp("y",confirm)==0)
            {
                dNode->next = pNode->next;
                free(pNode);
                printf("删除职工信息成功！");
            }
            else if (strcmp("N",confirm)==0||strcmp("n",confirm)==0 )
                printf("删除取消成功！");
        }

        dNode = pNode;
        pNode = pNode->next;
    }
    system("pause");
}
// 实发工资排序
void rankByTruePay(node *head)
{
    node *p, *q;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            if (p->data.truePay < q->data.truePay)
            {
                worker big = p->data;
                p->data = q->data;
                q->data = big;
            }
        }
    }
    printTitle();
    node *pNode = head->next;
    printNodeByHead(head);
}
// 编号排序
void rankByNo(node *head)
{
    node *p, *q;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            if (strcmp(p->data.no, q->data.no) > 0)
            {
                worker big = p->data;
                p->data = q->data;
                q->data = big;
            }
        }
    }
    node *pNode = head->next;
    printNodeByHead(head);
}
// 迟到天数排序
void rankBylate(node *head)
{
    node *p, *q;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            if (p->data.lateDay < q->data.lateDay)
            {
                worker big = p->data;
                p->data = q->data;
                q->data = big;
            }
        }
    }
    node *pNode = head->next;
    printNodeByHead(head);
}
// 请假天数排序
void rankByLeave(node *head)
{
    node *p, *q;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            if (p->data.leaveDay < q->data.leaveDay)
            {
                worker big = p->data;
                p->data = q->data;
                q->data = big;
            }
        }
    }
    node *pNode = head->next;
    printNodeByHead(head);
}
// 工作天数排序
void rankByWorkDay(node *head)
{
    node *p, *q;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            if (p->data.workDay < q->data.workDay)
            {
                worker big = p->data;
                p->data = q->data;
                q->data = big;
            }
        }
    }
    node *pNode = head->next;
    printNodeByHead(head);
}
// 通过编号查找职工
void findByNo(node *head)
{
    char no[11];
    int isHave = 0;
    node *pNode = head->next;
    printf("请输入要查询的职工的编号：");
    scanf("%s", &no);
    printTitle();
    while (pNode)
    {
        if (strcmp(pNode->data.no, no) == 0)
        {
            printWorkerData(pNode);
            isHave++;
        }
        pNode = pNode->next;
    }
    if (isHave == 0)
        printf("没找到%s的相关职工信息。", no);
}
//通过姓名查找职工
void findByName(node *head)
{
    char name[11];
    int isHave = 0;
    node *pNode = head->next;
    printf("请输入姓名：");
    scanf("%s", name);
    printTitle();
    while (pNode)
    {
        if (strcmp(pNode->data.name, name) == 0)
        {
            printWorkerData(pNode);
            isHave++;
        }
        pNode = pNode->next;
    }
    if (isHave == 0)
        printf("没找到%s的相关职工信息。", name);
}
// 通过实发工资统计职工
void findByTruePay(node *head)
{
    float Pay;
    int isHave = 0;
    node *pNode = head->next;
    printf("请输入实发金额：");
    scanf("%f", &Pay);
    printTitle();
    while (pNode)
    {
        if (pNode->data.bonus <= Pay+500 && pNode->data.bonus >= Pay-500)
        {
            printWorkerData(pNode);
            isHave++;
        }
        pNode = pNode->next;
    }
    if (isHave == 0)
        printf("没找到%f的相关职工信息。", Pay);
}
//通过迟到天数统计职工
void findByLateDay(node *head)
{
    int late;
    int isHave = 0;
    node *pNode = head->next;
    printf("请输入迟到天数：");
    scanf("%d", &late);
    printTitle();
    while (pNode)
    {
        if (pNode->data.lateDay <= late+2 && pNode->data.lateDay >= late-2)
        {
            printWorkerData(pNode);
            isHave++;
        }
        pNode = pNode->next;
    }
    if (isHave == 0)
        printf("没找到%d的相关职工信息。", late);
}
// 通过请假天数统计职工
void findByLeaveDay(node *head)
{
    int leave;
    int isHave = 0;
    node *pNode = head->next;
    printf("请输入请假天数：");
    scanf("%d", &leave);
    printTitle();
    while (pNode)
    {
        if (pNode->data.leaveDay <= leave+2 && pNode->data.leaveDay >= leave-2)
        {
            printWorkerData(pNode);
            isHave++;
        }
        pNode = pNode->next;
    }
    if (isHave == 0)
        printf("没找到%d的相关职工信息。", leave);
}
// 通过性别统计职工
void findBySex(node *head)
{
    char sex[3];
    int isHave = 0;
    node *pNode = head->next;
    printf("请输入性别：");
    scanf("%s", sex);
    printTitle();
    while (pNode)
    {
        if (strcmp(pNode->data.gender, sex) == 0)
        {
            printWorkerData(pNode);
            isHave++;
        }
        pNode = pNode->next;
    }
    if (isHave == 0)
        printf("没找到%s的相关职工信息。", sex);
}
// 通过奖金统计职工
void findByBonus(node *head)
{
    float Pay;
    int isHave = 0;
    node *pNode = head->next;
    printf("请输入奖金金额：");
    scanf("%f", &Pay);
    printTitle();
    while (pNode)
    {
        if (pNode->data.bonus <= Pay+500 && pNode->data.bonus >= Pay-500)
        {
            printWorkerData(pNode);
            isHave++;
        }
        pNode = pNode->next;
    }
    if (isHave == 0)
        printf("没找到%f的相关职工信息。", Pay);
}
// 排序子菜单
void menuPaiXv()
{

    int isExit = 1;
    int option = -1;
    while (isExit)
    {
        printf("\n");
        printf("\t\t\t\t -----------------------欢迎来到职工个人信息排序系统---------------------\n");
        printf("\t\t\t\t|                          0、退出                                       |\n");
        printf("\t\t\t\t|                          1、编号排序                                   |\n");
        printf("\t\t\t\t|                          2、实发工资排序                               |\n");
        printf("\t\t\t\t|                          3、迟到天数排序                               |\n");
        printf("\t\t\t\t|                          4、请假天数排序                               |\n");
        printf("\t\t\t\t|                          5、工作天数排序                               |\n");
        printf("\t\t\t\t ------------------------------------------------------------------------\n");
        printf("请输入选项：");
        scanf("%d", &option);
        switch (option)
        {
        case 1:
            printf("按照编号排序：\n");
            rankByNo(head);
            break;
        case 2:
            printf("按照实发工资排序：\n");
            rankByTruePay(head);
            break;
        case 3:
            printf("按照迟到天时排序：\n");
            rankBylate(head);
            break;
        case 4:
            printf("按照请假天时排序：\n");
            rankByLeave(head);
            break;
        case 5:
            printf("按照工作天时排序：\n");
            rankByWorkDay(head);
            break;
        case 0:
            isExit = 0;
            printf("成功退出排序系统。\n");
            break;
        default:
            printf("输入错误\n");
            break;
        }
    }
}
// 查找子系统
void menuFind()
{
    int isExit = 1;
    while (isExit)
    {

        printf("\n");
        printf("\t\t\t\t -----------------------欢迎来到职工查找统计系统------------------------\n");
        printf("\t\t\t\t|                       0、退出程序                                    |\n");
        printf("\t\t\t\t|                       1、通过编号查找职工                            |\n");
        printf("\t\t\t\t|                       2、通过姓名查找职工                            |\n");
        printf("\t\t\t\t|                       3、通过实发工资统计职工                        |\n");
        printf("\t\t\t\t|                       4、通过迟到天数统计职工                        |\n");
        printf("\t\t\t\t|                       5、通过请假天数统计职工                        |\n");
        printf("\t\t\t\t|                       6、通过性别统计职工                            |\n");
        printf("\t\t\t\t|                       7、通过奖金统计职工                            |\n");
        printf("\t\t\t\t ----------------------------------------------------------------------\n");
        printf("请输入选项：");
        int option;
        scanf("%d", &option);
        switch (option)
        {
        case 0:
            printf("退出查找系统。。。");
            isExit = 0;
            break;
        case 1:
            findByNo(head);
            system("pause");
            break;
        case 2:
            findByName(head);
            system("pause");
            break;
        case 3:
            findByTruePay(head);
            system("pause");
            break;
        case 4:
            findByLateDay(head);
            system("pause");
            break;
        case 5:
            findByLeaveDay(head);
            system("pause");
            break;
        case 6:
            findBySex(head);
            system("pause");
            break;
        case 7:
            findByBonus(head);
            system("pause");
            break;
        default:
            printf("输入错误！");
            break;
        }
    }
}
//菜单
void menu()
{
    int m = 0;
    printf("\n");
    printf("\t\t\t\t -----------------------欢迎来到职工工资管理系统-----------------------\n");
    printf("\t\t\t\t|                       0、退出程序                                    |\n");
    printf("\t\t\t\t|                       1、职工信息读取系统                            |\n");
    printf("\t\t\t\t|                       2、职工信息存储系统                            |\n");
    printf("\t\t\t\t|                       3、信息修改系统                                |\n");
    printf("\t\t\t\t|                       4、信息排序系统                                |\n");
    printf("\t\t\t\t|                       5、添加职工信息系统                            |\n");
    printf("\t\t\t\t|                       6、删除职工信息系统                            |\n");
    printf("\t\t\t\t|                       7、查找统计系统                                |\n");
    printf("\t\t\t\t ----------------------------------------------------------------------\n");
    printf("\n");
    printf("请选择你要进行的操作：");
    scanf("%d", &m);
    switch (m)
    {
    case 0:
        release_list(head);
        exit(0);
    case 1:
        readFromFile(head);
        break;
    case 2:
        recordToFile(head);
        break;
    case 3:
        editNodeByHead(head);
        break;
    case 4:
        menuPaiXv();
        break;
    case 5:
        add(head);
        break;
    case 6:
        deleteWorker(head);
        break;
    case 7:
        menuFind();
        break;
    }
}
// 程序入口
int main()
{
    system("@chcp 936");
    createHeadNode(head);
    readFromFile(head);
    while (1)
    {
        menu();
    }
    return 0;
}

```

