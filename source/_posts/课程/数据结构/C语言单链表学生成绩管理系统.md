---
title: C语言单链表学生成绩管理系统
tags:
  - null
categories:
  - 课程
  - 数据结构
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-27 10:38:12
top:
updated:
keywords:
description:
toc:
toc_number:
katex:
aplayer:
highlight_shrink:
aside:
---

{%note info%}

[下载实验报告及文档](https://frunoob.lanzous.com/ifl9vjrareh)

{%endnote%}

# 1、课程设计目的

>   本课程设计是为了配合《数据结构》课程的开设，通过设计一个完整的程序，使学生掌握数据结构的应用、算法的编写、类C语言的算法转换成C程序并用VC上机调试的基本方法。

>   课程设计是实践性教学中的一个重要环结，它以某一课程为基础，可以涉及和课程相关的各个方面，是一门独立于课程之外的特殊课程。课程设计是让同学们对所学的课程更全面的学习和应用，理解和掌握的相关知识。《数据结构》是一门重要的专业基础课，是计算机理论和应用的核心基础课程。

>   数据结构课程设计，要求学生在数据结构的逻辑特性和物理表示、数据结构的选择和应用、算法的设计及其实现等方面，加深对课程基本内容的理解。同时，在程序设计方法以及上机操作等基本技能和科学作风方面受到比较系统和严格的训练。

>   学生成绩管理系统是通过单链表结构实现了对学生信息的的查看、统计、修改、分类等操作。

# 2、课程设计正文

## 2.1数据结构选择及概要设计

### 2.1.1数据结构选择

本程序是学生管理系统，实现的功能有：输入、输出、插入、删除、查找、追加、读入、显示、保存、拷贝、排序、索引、分类合计、退出。

采用单链表，每个结点包括一个数据域和一个指针域。所以设计以下结构体。在实行功能时用指针进行插入删除操作。

struct student

{

>   int id; //学号

char name[20]; //姓名 （最长9个汉字或18个字母）

char sex; // 性别

float Math; //数学成绩 0-100分之间

float English; //英语成绩 0-100分之间

float Db; //数据库成绩 0-100分之间

};

### 2.1.2概要设计

该程序整体框架为

<img src="file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png" alt="img"  />

## 2.2任务要求及任务分析

### 2.2.1任务要求

本程序由小组进行，我担任小组长，我的任务是：修改学生信息、按性别查找学生信息、按各科成绩排名、从文件读取数据、统计各科不及格人数、整合小组代码。

### 2.2.2任务分析

（1）修改学生信息：考虑到修改学生信息包括修改学生的学号、姓名
、性别、成绩，每个学生通过结构体结点来存储，修改学生信息先要通过id查找到学生，然后在修改学生的信息。

（2）按性别查找学生信息：通过遍历全部学生，将符合条件的学生的信息逐一打印。

（3）按各科成绩排序：进行排序，需要交换节点位置，这里通过冒泡排序来实现。通过交换节点的数据域来实现节点的卫士的交换。

（4）从文件读取数据：从txt文件读取学生信息，首先要判断文件是否有内容，然后逐行读取学生信息，每一行代表
一个学生的信息 。

（5）统计各科不及格人数：统计不及格人数，只需从头结点开始遍历全部学生并记录成绩小于60分的人的数量即可。

## 2.3详细设计及编码

### 2.3.1修改学生信息函数editNodeByHead(struct node \*head)

先定义一个整数型id来记录用户输入的将要修改信息的学生的学号，然后定义一个指向头结点下一个结点的指针。从键盘接收用户输入的学生的id，开始从头结点的下一位开始遍历，当找到id匹配的学生时，从键盘接收用户输入的选项数字，使用switch语句判断应该进入修改何种信息的进程，修改结束后，立即打印学生的信息。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

// 修改学生信息

void editNodeByHead(struct node \*head)

{

int id;

struct node \*pNode = head-\>next;

printf("请输入要修改的学生的学号:");

scanf("%d", \&id);

while (pNode)

{

if (pNode-\>data.id == id)

{

int option;

char isExit = 'y';

while (isExit == 'y' \|\| isExit == 'Y' \|\| isExit == '\\n')

{

printf("\\t1.姓名\\n\\t2.性别\\n\\t3.高数成绩\\n\\t4.英语成绩\\n\\t5.数据库成绩\\n\\t请输入序号：");

scanf("%d", \&option);

switch (option)

{

case 1:

{

printf("\\t请输入新的姓名：");

scanf("%s", pNode-\>data.name);

printf("\\t学号 \\t\\t姓名\\t\\t性别\\t高数成绩\\t英语成绩\\t数据库成绩\\n");

printStudentData(pNode);

break;

}

case 2:

{

int isSex = 1;

char sex[3];

while (isSex)

{

printf("请输入新的性别(男/女)：");

//getchar(); //清除缓冲区中的回车字符

scanf("%s", sex);

char s = strcmp(sex, "男") == 0 ? 'm' : 'w';

if (s == 'm' \|\| s == 'w')

{

pNode-\>data.sex = s;

printf("\\t学号 \\t\\t姓名\\t\\t性别\\t高数成绩\\t英语成绩\\t数据库成绩\\n");

printStudentData(pNode);

isSex = 0;

}

else

printf("输入错误请修改失败\\n");

}

break;

}

case 3:

{

printf("\\t请输入高数成绩：");

scanf("%f", \&pNode-\>data.Math);

if (pNode-\>data.Math)

printf("\\t学号 \\t\\t姓名\\t\\t性别\\t高数成绩\\t英语成绩\\t数据库成绩\\n");

printStudentData(pNode);

break;

}

case 4:

{

printf("\\t请输入英语成绩：");

scanf("%f", \&pNode-\>data.English);

if (pNode-\>data.Math)

printf("\\t学号 \\t\\t姓名\\t\\t性别\\t高数成绩\\t英语成绩\\t数据库成绩\\n");

printStudentData(pNode);

break;

}

case 5:

{

printf("\\t请输入数据库成绩：");

scanf("%f", \&pNode-\>data.Db);

if (pNode-\>data.Db)

printf("\\t学号 \\t\\t姓名\\t\\t性别\\t高数成绩\\t英语成绩\\t数据库成绩\\n");

printStudentData(pNode);

break;

}

case 0:

{

break;

}

default:

printf("输入错误\\n");

break;

}

printf("继续修改?(N/Y):");

getchar();

isExit = getchar();

}

break;

}

else

{

pNode = pNode-\>next;

}

}

}

### 2.3.2按单科成绩排名 rankByGrade（struct node \*head）

定义两个指向struct node结构体类型的指针\*p、\*q，q为 p的下一个
结点，用户输入要排名的科目，然后通过一系列的if语句来进行用户语义转换，如果输入的是“高数”或“Math”，“英语”或
“English”，“数据库”或“Db”则返回option等于1,2,3。当选定了排名的科目，则进行判断科目成绩的大小并进行排名。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

//按单科成绩排名 rankByGrade(链表表头head)

void rankByGrade(struct node \*head)

{

struct node \*p, \*q;

char course[6];

printf("请输入要查询的单科排名(英语/English,数据库/Db,数学/Math)：");

scanf("%s", \&course);

int option;

if (strcmp(course, "高数") == 0 \|\| strcmp(course, "Math") == 0)

option = 1;

else if (strcmp(course, "英语") == 0 \|\| strcmp(course, "English") == 0)

option = 2;

else if (strcmp(course, "数据库") == 0 \|\| strcmp(course, "Db") == 0)

option = 3;

for (p = head-\>next; p != NULL; p = p-\>next)

{

for (q = p-\>next; q != NULL; q = q-\>next)

{

switch (option)

{

case 1:

{

if (p-\>data.Math \< q-\>data.Math)

{

struct student big = p-\>data;

p-\>data = q-\>data;

q-\>data = big;

}

break;

}

case 2:

{

if (p-\>data.English \< q-\>data.English)

{

struct student big = p-\>data;

p-\>data = q-\>data;

q-\>data = big;

}

break;

}

case 3:

{

if (p-\>data.Db \< q-\>data.Db)

{

struct student big = p-\>data;

p-\>data = q-\>data;

q-\>data = big;

}

break;

}

default:

break;

}

}

}

printNodeByHead(head);

}

### 2.3.3 按性别查找学生 findStudentBySex(struct node \*head)

为了直观的比较男生或女生的成绩的起伏和排名，定义一个查找学生性别的函数。首先接收键盘用户输入的待查询的性别字符串，然后从头结点的下一个
节点开始遍历，当结点中的数据域中的学生的性别符合时就输出此学生的信息。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

//按性别查找学生信息

void findStudentBySex(struct node \*head)

{

char input[3];

printf("请输入要统计的学生的性别(男/女)：");

scanf("%s", \&input);

char sex = strcmp(input, "男") == 0 ? 'm' : 'w';

struct node \*fNode = head-\>next;

printf("正在查找性别为%s的学生。。。\\n", sex == 'm' ? "男" : "女");

while (fNode)

{

if (fNode-\>data.sex == sex)

{

printStudentData(fNode);

}

fNode = fNode-\>next;

}

}

**2.3.4**  **从文件读取数据 readFromFile(struct node \*head)**

为了方便程序每次启动时能够自动导入学生信息，不用每次都要手动输入学生信息，通过每次程序启动时自动从程序所在文件夹下找到对应的学生文档并自动导入生成学生单链表，简化操作步骤。

//从文件读取数据

void readFromFile(struct node \*head){

FILE \*fp = NULL;

char file[20];

system("dir /b \*.txt");

printf("请输入待读取的文件名称：");

scanf("%s",file);

fp = fopen(file, "r");

if(fp)

while (!feof(fp))

{

struct student pNode;

fscanf(fp, "%d %s %c %f %f %f\\n", &pNode.id, &pNode.name, &pNode.sex,
&pNode.Math, &pNode.English, \&pNode.Db);

insertByHead(head, pNode);

}

else printf("文件名称错误，请进入菜单11重新输入。\\n");

fclose(fp);

}

**2.3.5**  **统计各科不及格人数 findStudentByFail(struct node \*head)**

统计全班单科不及格的人数，定义一个指向头结点下一个结点的结构体指针，依次遍历，比较成绩是否小于60分，如果
小于60分不及格人数就加一。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

//统计各科不及格人数

void findStudentByFail(struct node \*head)

{

char isExit = 'y', course[7];

int option;

int num;

struct node \*fNode;

while (isExit == 'y' \|\| isExit == 'Y' \|\| isExit == '\\n')

{

option = 0;

num = 0;

fNode = head-\>next;

printf("请输入要查询的科目(英语/English,数据库/Db,数学/Math)：");

scanf("%s", course);

if (strcmp(course, "高数") == 0 \|\| strcmp(course, "Math") == 0)

option = 1;

else if (strcmp(course, "英语") == 0 \|\| strcmp(course, "English") == 0)

option = 2;

else if (strcmp(course, "数据库") == 0 \|\| strcmp(course, "Db") == 0)

option = 3;

// printf("option:%c",option);

printf("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t学号 \\t\\t姓名\\t\\t性别\\t高数成绩\\t英语成绩\\t数据库成绩\\n");

while (fNode)

{

switch (option)

{

case 1:

if (fNode-\>data.Math \< 60)

{

printStudentData(fNode);

num++;

}

break;

case 2:

if (fNode-\>data.English \< 60)

{

num++;

printStudentData(fNode);

}

break;

case 3:

if (fNode-\>data.Db \< 60)

{

num++;

printStudentData(fNode);

}

break;

}

if (fNode != NULL)

fNode = fNode-\>next;

}

if (option != 'f' && num != 0)

{

printf("\\n\*\*\*\*\*\*\*\*\*\*\*\\n共%d个同学不及格\\n", num);

printf("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

}

else if (num == 0)

{

printf("\\n\*\*\*\*\*\*\*\*\*\*\*\\n没有不及格的同学\\n");

printf("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

}

printf("继续查询?(N/Y):");

getchar();

isExit = getchar();

}

}

## 2.4、时间空间复杂度分析

修改学生信息的时间复杂程度为T(n)=O(n)由于链表修改没有申请空间所以空间复杂程度为S(n)=O(1).

按单科成绩排名平均时间复杂程度为T(n)=O(n²)，空间复杂程度S(n)=O(1)

按姓名查找的时间复杂程度为T(n)=O(n)由于链表修改没有申请空间所以空间复杂程度为S(n)=O(1).

统计不及格人数的时间复杂程度为T(n)=O(n)由于链表修改没有申请空间所以空间复杂程度为S(n)=O(1).

从文件读取数据的时间复杂程度为T(n)=O(n)由于链表申请了空间所以空间复杂程度为S(n)=O(n).

## 2.5测试结果

主界面包括了16个功能，其中的3、6、9、11、14五个功能由我实现。

首先输入3，回车进入修改学生信息的操作，输入要修改的学生的学号，回车进入子菜单：输入1修改姓名，输入2修改性别，输入3修改高数成绩，输入4修改英语成绩，输入5修改数据库成绩。每修改学生的一项信息，系统会提示是否继续修改，输入Y或直接回车表示继续修改，输入N表示退出修改。

输入6，回车进入按性别查询的子菜单，输入男，回车显示所有性别为男的学生的信息，输入女，回车显示所有为女的学生的信息。

输入9，回车进入按单科成绩进行排序的子菜单，输入英语/English,数据库/Db,数学/Math，回车显示所有按照对应成绩进行排序的结果。

输入11，回车输入待读取的文件，回车输入待读取的文件的开始和结束行，回车即可读取完成。

输入14，回车输入男或女，回车显示所有性别为男或女的学生的信息。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

### 2.5.1修改学生信息

（1）输入3，回车进入修改学生信息的操作，输入要修改的学生的学号，回车进入子菜单：

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

（2）输入1修改姓名，输入2修改性别，输入3修改高数成绩，输入4修改英语成绩，输入5修改数据库成绩。每修改学生的一项信息，系统会提示是否继续修改，输入Y或直接回车表示继续修改，输入N表示退出修改。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)



**2.5.2按各科成绩排名**

输入9，回车进入按单科成绩进行排序的子菜单，输入英语/English,数据库/Db,数学/Math，回车显示所有按照对应成绩进行排序的结果。如下图所示：输入Math后，下方自动显示按照
数学成绩从高到低排序的结果。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

**2.5.3按性别查找学生**

输入6，回车进入按性别查询的子菜单，输入男，回车显示所有性别为男的学生的信息，输入女，回车显示所有为女的学生的信息。如图所示：

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

**2.5.4从文件读取数据**

用户输入数字14，进入从文件读取数据，输入屏幕中所给出的已有的学生数据文档名称，例如下图中输入的“student.txt”，然后输入要读取文件的指定行数（0
0代表读取文件的全部内容）然后会从文件读取学生信息并创建一个学生链表，最后会将链表信息打印出来。例如下图，读取了文件allstu,并打印了文件的第2350到第2360行共11个学生的信息。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

**2.5.5统计各科不及格学生**

从键盘输入
‘14’进入统计不及格人数的菜单，输入要查询的科目“数学”，然后回车，下面会显示所有数学不及格的人数和学生的信息，然后输入’Y’或’y’或直接回车进行其他科目的查询，输入‘英语’，然后回车，下方出现5个英语不及格的学生信息。然后直接回车，输入‘数据库’然后回车，下方显示了
3个不及格同学的信息。

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

# 3、课程设计总结或结论

这个学期通过学习数据结构，学习数据结构中的关于数据的存储结构和方法，加强了我对于C语言指针的理解和使用，也明白了自己的许多补足和需要弥补的地方。也更深刻地认识到了自己以往学习的关于C语言的知识只不过是皮毛，C语言的指针才是C语言的重中之重，也是C语言占用内存优于其他语言的地方，通过本次关于数据结构课程设计，我也意识到了团队合作的重要性，一个人就算编程能力再强，如果没有团队力量的支持，也做不出来优秀的软件。同时这次实验加深了我对单链表的理解，提升了我对单链表的使用能力。

# 4、参考文献

[1] 李震平,李晓霞 C语言程序项目设计教程[M].北京邮电大学出版社,2015,1.

[2] 严蔚敏,李冬梅,吴伟民 数据结构C语言版[M].人民邮电大学出版社,2015,2.

[3] 谭浩强 C++面向对象的程序设计(第二版)[M].清华大学出版社,2014,7.

# 5、附录

\#include \<stdio.h\>

\#include \<string.h\>

\#include \<stdlib.h\>

// 创建学生结构体数据类型

struct student

{

int id; //学号

char name[20]; //姓名 （最长9个汉字或18个字母）

char sex; // 性别

float Math; //数学成绩 0-100分之间

float English; //英语成绩 0-100分之间

float Db; //数据库成绩 0-100分之间

};

// 创建学生结点

struct node

{

struct student data; /\* 结点数据域 \*/

struct node \*next; /\* 结点指针域 \*/

};

// 定义头结点指针

struct node \*head = NULL;

// 创建链表的头结点

void createHeadNode()

/\* 创建学生结点 \*/

struct node \*createStu(struct student data)

// 修改学生信息

void editNodeByHead(struct node \*head)

//按性别查找学生信息

void findStudentBySex(struct node \*head)

//按单科成绩排名 rankByGrade(链表表头head)

void rankByGrade(struct node \*head)

// 释放内存

void release_list(struct node \*pHead)

//从文件读取数据

void readFromFile(struct node \*head)

//统计各科不及格人数

void findStudentByFail(struct node \*head)

// 按姓名查找

void searchStudentByName(struct node \*phead)

//按学号排序

void sortById(struct node \*phead)

// 统计优秀人数

void countGood(struct node \*head)

//保存到文件

void SaveToFile(struct node \*phead)

//删除学生

void deleteStudent(struct node \*head)

//按照学号查找学生信息

void searchid(struct node \*head)

//添加学生信息

void insert(struct node \*headp)

//总成绩排名

void sort(struct node \*head)

//各学科平均分

void avg(struct node \*head)

// 各科及格人数

void pass(struct node \*head)

//菜单

void menu()

{

int m = 0;

printf("\\t\\t\\t\\t-------------欢迎来到河北工程大学学生信息管理系统----------------\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*1、添加学生信息\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*2、删除学生信息\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*3、修改学生信息\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*4、按学号查找学生信息\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*5、按姓名查找学生信息\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*6、按性别查找学生信息\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*7、按总成绩排名\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*8、按学号排序\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*9、按各科成绩排序\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*10、数据保存到文件\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*11、从文件读取数据\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*12、求班级各个学科的平均分\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*13、统计各科及格人数\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*14、统计各科不及格人数\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*15、统计各科优秀人数\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\t\\t\\t\\t\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*16、退出程序\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

printf("\\n");

printf("请选择你要进行的操作：\\n");

scanf("%d", \&m);

switch (m)

{

case 1:

printf("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*【添加学生信息】\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

insert(head);

look(head);

break;

case 2:

deleteStudent(head);

break;

case 3:

editNodeByHead(head);

break;

case 4:

printf("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*【按照学号查找学生信息】\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

searchid(head);

break;

case 5:

searchStudentByName(head);

break;

case 6:

findStudentBySex(head);

break;

case 7:

printf("\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*【总成绩排名】\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n");

sort(head);

break;

case 8:

sortById(head);

break;

case 9:

rankByGrade(head);

break;

case 10:

SaveToFile(head);

break;

case 11:

readFromFile(head);

break;

case 12:

printf("\*\*\*\*\*\*\*\*\*\*【各学科平均分】\*\*\*\*\*\*\*\*\*\*\\n");

avg(head);

break;

case 13:

printf("\*\*\*\*\*\*\*\*\*\*【各科及格人数】\*\*\*\*\*\*\*\*\*\*\\n");

pass(head);

break;

case 14:

findStudentByFail(head);

break;

case 15:

countGood(head);

break;

case 16:

release_list(head);

exit(0);

}

}

// 程序入口

int main()

{

createHeadNode(head);

readFromFile(head);

while (1)menu();

return 0;

}

# 源代码

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// 创建学生结构体数据类型
struct student
{
    int id;        //学号
    char name[20]; //姓名 （最长9个汉字或18个字母）
    char sex;      // 性别
    float Math;    //数学成绩 0-100分之间
    float English; //英语成绩  0-100分之间
    float Db;      //数据库成绩 0-100分之间
};

// 创建学生结点
struct node
{
    struct student data; /* 结点数据域 */
    struct node *next;   /* 结点指针域 */
};

// 定义头结点指针
struct node *head = NULL;

// 创建链表的头结点
void createHeadNode()
{
    head = (struct node *)malloc(sizeof(struct node));
    if (!head)
    {
        printf("头结点分配失败");
        return;
    }
    head->next = NULL;
}

// 符琦琦

/* 创建学生结点 */
struct node *createStu(struct student data)
{
    struct node *student = (struct node *)malloc(sizeof(struct node));
    student->next = NULL;
    student->data = data;
    return student;
}
/* 从表头插入结点 */
void insertByHead(struct node *head, struct student data)
{
    struct node *iNode = createStu(data);
    iNode->next = head->next;
    head->next = iNode;
    /* 输出成功插入的节点 */
    /*     if (head->next) 
        printf("\t%d\t%s\t%c\t%.2f\t\t%.2f\t\t%.2f\n", iNode->data.id, iNode->data.name, iNode->data.sex, iNode->data.Math, iNode->data.English, iNode->data.Db);*/
}
/* 输出全部学生信息 */
void printNodeByHead(struct node *head)
{
    struct node *pNode = head->next;
    printf("\n");
    printf("\t学号\t\t姓名\t性别\t高数成绩\t英语成绩\t数据库成绩\n");
        printf("\t**************************************************************************\n");
    while (pNode)
    {
        printf("\t%d\t%s\t%s\t%.2f\t\t%.2f\t\t%.2f\n", pNode->data.id, pNode->data.name, (pNode->data.sex == 'm' ? "男" : "女"), pNode->data.Math, pNode->data.English, pNode->data.Db);
        pNode = pNode->next;
    }

    system("pause");
}
// 对齐输出单个学生的信息
void printStudentData(struct node *pNode)
{
    //printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
    printf("\t**************************************************************************************************\n");
    printf("\t%-13d\t%-20s\t%s\t\t%.2f\t\t%.2f\t\t%.2f\n", pNode->data.id, pNode->data.name, (pNode->data.sex == 'm' ? "男" : "女"), pNode->data.Math, pNode->data.English, pNode->data.Db);
}
// 修改学生信息
void editNodeByHead(struct node *head)
{
    int id;
    struct node *pNode = head->next;
    printf("请输入要修改的学生的学号:");
    scanf("%d", &id);
    while (pNode)
    {
        if (pNode->data.id == id)
        {
            int option;
            char isExit = 'y';
            while (isExit == 'y' || isExit == 'Y' || isExit == '\n')
            {
                printf("\t1.姓名\n\t2.性别\n\t3.高数成绩\n\t4.英语成绩\n\t5.数据库成绩\n\t请输入序号：");
                scanf("%d", &option);
                switch (option)
                {
                case 1:
                {
                    printf("\t请输入新的姓名：");
                    scanf("%s", pNode->data.name);
                    printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
                    printStudentData(pNode);
                    break;
                }
                case 2:
                {
                    int isSex = 1;
                    char sex[3];
                    while (isSex)
                    {
                        printf("请输入新的性别(男/女)：");
                        //getchar(); //清除缓冲区中的回车字符
                        scanf("%s", sex);
                        char s = strcmp(sex, "男") == 0 ? 'm' : 'w';
                        if (s == 'm' || s == 'w')
                        {
                            pNode->data.sex = s;
                            printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
                            printStudentData(pNode);
                            isSex = 0;
                        }
                        else
                            printf("输入错误请修改失败\n");
                    }
                    break;
                }
                case 3:
                {
                    printf("\t请输入高数成绩：");
                    scanf("%f", &pNode->data.Math);
                    if (pNode->data.Math)

                        printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
                    printStudentData(pNode);

                    break;
                }
                case 4:
                {
                    printf("\t请输入英语成绩：");
                    scanf("%f", &pNode->data.English);
                    if (pNode->data.Math)

                        printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
                    printStudentData(pNode);

                    break;
                }
                case 5:
                {
                    printf("\t请输入数据库成绩：");
                    scanf("%f", &pNode->data.Db);
                    if (pNode->data.Db)

                        printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
                    printStudentData(pNode);

                    break;
                }
                case 0:
                {
                    break;
                }
                default:
                    printf("输入错误\n");
                    break;
                }
                printf("继续修改?(N/Y):");
                getchar();
                isExit = getchar();
            }
            break;
        }
        else
        {
            pNode = pNode->next;
        }
    }
}
//按性别查找学生信息
void findStudentBySex(struct node *head)
{
    char input[3];
    printf("请输入要统计的学生的性别(男/女)：");
    scanf("%s", &input);
    char sex = strcmp(input, "男") == 0 ? 'm' : 'w';
    struct node *fNode = head->next;
    printf("正在查找性别为%s的学生\n", sex == 'm' ? "男" : "女");
    printf("**********************************************************************************************\n");
    printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
    while (fNode)
    {
        if (fNode->data.sex == sex)
        {
            printStudentData(fNode);
        }
        fNode = fNode->next;
    }
    printf("**********************************************************************************************\n");
}
//按单科成绩排名 rankByGrade(链表表头head)
void rankByGrade(struct node *head)
{
    struct node *p, *q;
    char course[6];
    printf("请输入要查询的单科排名(英语/English,数据库/Db,数学/Math)：");
    scanf("%s", &course);
    int option;
    if (strcmp(course, "数学") == 0 || strcmp(course, "Math") == 0)
        option = 1;
    else if (strcmp(course, "英语") == 0 || strcmp(course, "English") == 0)
        option = 2;
    else if (strcmp(course, "数据库") == 0 || strcmp(course, "Db") == 0)
        option = 3;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            switch (option)
            {
            case 1:
            {
                if (p->data.Math < q->data.Math)
                {
                    struct student big = p->data;
                    p->data = q->data;
                    q->data = big;
                }
                break;
            }
            case 2:
            {
                if (p->data.English < q->data.English)
                {
                    struct student big = p->data;
                    p->data = q->data;
                    q->data = big;
                }
                break;
            }
            case 3:
            {
                if (p->data.Db < q->data.Db)
                {
                    struct student big = p->data;
                    p->data = q->data;
                    q->data = big;
                }
                break;
            }

            default:
                break;
            }
        }
    }
    printNodeByHead(head);
}
// 总成绩排名
void rankByTotalGrade(struct node *head)
{
    struct node *p, *q;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            if (p->data.Db + p->data.Math + p->data.English < q->data.Db + q->data.Math + q->data.English)
            {
                struct student big = p->data;
                p->data = q->data;
                q->data = big;
            }
        }
    }
    printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
    struct node *pNode = head->next;
    while (pNode)
    {
        printStudentData(pNode);
        pNode = pNode->next;
    }
}
// 记录到文件
void recordToFile(struct node *head)
{
    FILE *fp;
    struct node *pNode = head->next;
    char file[20];
    printf("请输入文件名称(无需输入后缀.txt)：");
    scanf("%s", file);
    fp = fopen(strcat(file,".txt"), "w");
    while (pNode)
    {
        fprintf(fp, "%-10d %-20s %-3c %.2f %.2f %.2f\n", pNode->data.id, pNode->data.name, pNode->data.sex, pNode->data.Math, pNode->data.English, pNode->data.Db);
        pNode = pNode->next;
    }
    printf("数据已成功保存到文件,程序已退出\n");
    fclose(fp);
}
// 释放内存
void release_list(struct node *pHead)
{
    struct node *p = pHead;
    struct node *t = p;
    while (NULL != p->next)
    {
        t = p->next;
        free(p);
        p = t;
    }
    return;
}

//从文件读取数据
void readFromFile(struct node *head)
{
    head->next=NULL;
    FILE *fp = NULL;
    struct student rubbish;
    int begin = 0, end = 0, index = 1;
    char file[20];
    system("dir /b  *.txt");
    printf("请输入待读取的文件名称(请省略后缀.txt)：");
    scanf("%s", file);
    printf("请输入读取的开始行数和结束行数，空格隔开(51 100):");
    scanf("%d %d",&begin,&end);
    printf("begin:%d ,end:%d\n",begin,end);
    fp = fopen(strcat(file,".txt"), "r");
    if (fp)
        while (!feof(fp))
        {
            if ((index >= begin && index <= end) || (begin==0&&end==0))
            {
                struct student pNode;
                fscanf(fp, "%d %s %c %f %f %f\n", &pNode.id, &pNode.name, &pNode.sex, &pNode.Math, &pNode.English, &pNode.Db);
                insertByHead(head, pNode);
            }else if(index > end)
            {
                break;
            }else{
                 fscanf(fp, "%d %s %c %f %f %f\n", &rubbish.id, &rubbish.name, &rubbish.sex, &rubbish.Math, &rubbish.English, &rubbish.Db);
            }
            index++;
        }
    else
        printf("文件名称错误，请进入菜单11重新输入。\n");
    fclose(fp);
    
        printNodeByHead(head);
}
//统计各科不及格人数
void findStudentByFail(struct node *head)
{
    char isExit = 'y', course[7];
    int option;
    int num;
    struct node *fNode;
    while (isExit == 'y' || isExit == 'Y' || isExit == '\n')
    {
        option = 0;
        num = 0;
        fNode = head->next;
        printf("请输入要查询的科目(英语/English,数据库/Db,数学/Math)：");
        scanf("%s", course);
        if (strcmp(course, "数学") == 0 || strcmp(course, "Math") == 0)
            option = 1;
        else if (strcmp(course, "英语") == 0 || strcmp(course, "English") == 0)
            option = 2;
        else if (strcmp(course, "数据库") == 0 || strcmp(course, "Db") == 0)
            option = 3;

        // printf("option:%c",option);
        printf("\t学号\t\t姓名\t\t\t性别\t\t高数成绩\t英语成绩\t数据库成绩\n");
        while (fNode)
        {
            switch (option)
            {
            case 1:
                if (fNode->data.Math < 60)
                {
                    printStudentData(fNode);
                    num++;
                }
                break;
            case 2:
                if (fNode->data.English < 60)
                {
                    num++;
                    printStudentData(fNode);
                }
                break;
            case 3:
                if (fNode->data.Db < 60)
                {
                    num++;
                    printStudentData(fNode);
                }
                break;
            case 'f':
                printf("\n***********\n请输入正确的科目名称!\n************************************************************************************\n");
                fNode = NULL;
                break;
            }
            if (fNode != NULL)
                fNode = fNode->next;
        }
        if (option != 'f' && num != 0)
        {
            printf("\n***********\n共%d个同学不及格\n", num);
            printf("************************************************************************************\n");
        }
        else if (num == 0)
        {
            printf("\n***********\n没有不及格的同学\n");
            printf("************************************************************************************\n");
        }

        printf("继续查询?(N/Y):");
        getchar();
        isExit = getchar();
    }
}
// 朱祥
struct node *findStudent(struct node *head, int id)
{
    struct node *find = head;
    while (find != NULL)
    {
        if (find->data.id == id)
        {
            return find;
        }
        find = find->next;
    }
    return find;
}

void deleteStudent(struct node *head)
{
    int id = 0;
    struct node *target = NULL;
    struct node *find = head;
    struct node *temp = NULL;
    printf("请输入你想删除的学生的学号：\n");
    scanf("%d", &id);
    target = findStudent(head, id);
    if (target == NULL)
    {
        printf("没有这个学生\n");
        return;
    }
    else
    {
        temp = target->next;
        while (find->next != target)
        {
            find = find->next;
        }
        free(target);
        target = NULL;
        find->next = temp;
        printf("删除成功\n");
    }
}

void output(struct node *pfind)
{
    printf("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
    printf("学号：%d\t    姓名：%s\t性别：%c\t高数：%.2f\t英语：%.2f\t数据库：%.2f\n", pfind->data.id, pfind->data.name, pfind->data.sex, pfind->data.Math, pfind->data.English, pfind->data.Db);
    printf("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
}

void show(struct node *phead)
{
    struct node *pfind = phead->next;
    while (pfind != NULL)
    {
        output(pfind);
        pfind = pfind->next;
    }
}

struct node *findNodeByName(struct node *phead, char name[20])
{
    struct node *pfind = phead;
    while (pfind != NULL)
    {
        if (strcmp(pfind->data.name, name) == 0)
        {
            return pfind;
        }
        pfind = pfind->next;
    }
    return pfind;
}

void searchStudentByName(struct node *phead)
{
    char name[20];
    struct node *target = NULL;
    printf("请输入你想要查询的学生的姓名：\n");
    scanf("%s", &name);
    target = findNodeByName(phead, name);
    if (target == NULL)
    {
        printf("没有这个学生\n");
    }
    else
    {
        output(target);
    }
}

void sortById(struct node *phead)
{
    struct node *pfind1 = phead->next;
    struct node *pfind2 = phead->next;
    int min;
    struct node *p = NULL;
    struct student replace;
    while (pfind1 != NULL)
    {
        min = pfind1->data.id;
        p = pfind1;
        for (pfind2 = pfind1->next; pfind2 != NULL; pfind2 = pfind2->next)
        {
            if (min > pfind2->data.id)
            {
                min = pfind2->data.id;
                p = pfind2;
            }
        }
        p->data.id = pfind1->data.id;
        pfind1->data.id = min;
        strcpy(replace.name, p->data.name);
        strcpy(p->data.name, pfind1->data.name);
        strcpy(pfind1->data.name, replace.name);
        replace.sex = p->data.sex;
        p->data.sex = pfind1->data.sex;
        pfind1->data.sex = replace.sex;
        replace.Math = p->data.Math;
        p->data.Math = pfind1->data.Math;
        pfind1->data.Math = replace.Math;
        replace.English = p->data.English;
        p->data.English = pfind1->data.English;
        pfind1->data.English = replace.English;
        replace.Db = p->data.Db;
        p->data.Db = pfind1->data.Db;
        pfind1->data.Db = replace.Db;
        pfind1 = pfind1->next;
    }
    show(phead);
}

void countGood(struct node *head)
{
    int num1 = 0;
    int num2 = 0;
    int num3 = 0;
    struct node *find = head->next;
    while (find != NULL)
    {
        if (find->data.Math >= 90)
        {
            num1++;
        }
        if (find->data.English >= 90)
        {
            num2++;
        }
        if (find->data.Db >= 90)
        {
            num3++;
        }
        find = find->next;
    }
    printf("高数：%d\t英语：%d\t数据库：%d\n", num1, num2, num3);
}

void SaveToFile(struct node *phead)
{
    FILE *fp = NULL;
    struct node *pfind = phead->next;
    char file[20];
    fflush(stdin);
    printf("请输入文件名(无需输入后缀.txt): ");
    gets(file);
    fp = fopen(strcat(file,".txt"), "w");
    while (pfind != NULL)
    {
        fprintf(fp, "%d\t%s\t%c\t%.2f\t%.2f\t%.2f\n", pfind->data.id, pfind->data.name, pfind->data.sex, pfind->data.Math, pfind->data.English, pfind->data.Db);
        pfind = pfind->next;
    }
    printf("数据已成功保存到文件,程序已退出\n");
    fclose(fp);
}

// 赵志欣
//创建结点：用来做插入操作
struct node *createNode()
{
    //将指针变为结构体变量
    struct node *newnode = (struct node *)malloc(sizeof(struct node));
    //变量初始化
    //newnode->data = data;//结点的数据和指针都要初始化 data先不要初始化 因为data数据要在 添加学生信息哪里才能获取到data
    newnode->next = NULL;
    return newnode;
}
//浏览信息的函数
void look(struct node *head)
{
    printf("正在浏览全部信息。。。\n");
    struct node *p = head->next;
    printf("*************************************************************************************************\n");
    printf("*\t学号\t\t姓名\t\t性别\t高数成绩\t英语成绩\t数据库成绩\t*\n");
    while (p)
    {
        printf("*\t%-13d%-20s%-9c%.2f\t\t%.2f\t\t%.2f\t\t*\n", p->data.id, p->data.name, p->data.sex, p->data.Math, p->data.English, p->data.Db);
        p = p->next;
    }
    printf("*************************************************************************************************\n");
    printf("\n");
}

//按照学号查找学生信息
void searchid(struct node *head)
{
    struct node *p = head;
    int num;
    printf("请输入要查找学生的学号:\n");
    scanf("%d", &num);
    if (p == NULL)
    {
        printf("无相关数据!");
        system("pause");
        return;
    }
    while (p)
    {
        if (p->data.id == num)
        {
            printf("***********************************************************************************************\n");
            printf("学号\t\t姓名\t\t性别\t高数成绩\t英语成绩\t数据库成绩\n");
            printf("%-13d%-20s%-9c%.2f\t\t%.2f\t\t%.2f\n", p->data.id, p->data.name, p->data.sex, p->data.Math, p->data.English, p->data.Db);
            printf("***********************************************************************************************\n");
            break;
        }
        p = p->next;
    }
    system("pause");
}

//添加学生信息
void insert(struct node *headp)
{                                  //定义指针，指向node类型的结构体
    struct node *p = createNode(); //创建节点
    printf("请输入您想要添加的学生信息:\n");
    printf("**********************************************************************************\n");
    printf("学号\t\t姓名\t\t性别(w/m)\t高数成绩\t英语成绩\t数据库成绩\n");
    scanf("%d %s %c %f %f %f", &p->data.id, p->data.name, &p->data.sex, &p->data.Math, &p->data.English, &p->data.Db);
    printf("**********************************************************************************\n");
    p->next = headp->next;
    headp->next = p;
    printf("插入成功！\n");
}

//总成绩排名
void sort(struct node *head)
{
    struct node *p, *q;
    for (p = head->next; p != NULL; p = p->next)
    {
        for (q = p->next; q != NULL; q = q->next)
        {
            if (p->data.Db + p->data.Math + p->data.English < q->data.Db + q->data.Math + q->data.English)
            {
                struct student big = p->data;
                p->data = q->data;
                q->data = big;
            }
        }
    }
    printf("**********************************************************************************************\n");
    printf("学号\t\t姓名\t\t性别\t高数成绩\t英语成绩\t数据库成绩\t总成绩\n");
    struct node *pNode = head->next;
    while (pNode)
    {
        printf("%-13d%-20s%-9c%.2f\t\t%.2f\t\t%.2f\t\t%.2f\n", pNode->data.id, pNode->data.name, pNode->data.sex, pNode->data.Math, pNode->data.English, pNode->data.Db, pNode->data.Db + pNode->data.Math + pNode->data.English);
        pNode = pNode->next;
    }
    printf("**********************************************************************************************\n");
    system("pause");
}

//各学科平均分
void avg(struct node *head)
{
    float sum1 = 0; //记录数学总分
    float sum2 = 0; //记录英语总分
    float sum3 = 0; //记录数据库总分
    int num = 0;    //总人数
    struct node *p = head->next;
    while (p)
    {  
    sum1 += p->data.Math;
    sum2 += p->data.English;
    sum3 += p->data.Db;
    p = p->next;
    num++;
    }
    printf("数学平均分为：%.2f\n", sum1 / num);
    printf("英语平均分为：%.2f\n", sum2 / num);
    printf("数据库平均分为：%.2f\n", sum3 / num);
    system("pause");
}

// 各科及格人数
void pass(struct node *head)
{
    int num1 = 0; //数学及格人数
    int num2 = 0; //英语及格人数
    int num3 = 0; //数据库及格人数
    struct node *p = head->next;
    num1, num2, num3 = 0; //每次循环开始 要将num归零
    p = head->next;       // 每次循环 让p指针从头结点下一个开始
    getchar();
    while (p)
    {

        if (p->data.Math >= 60)
            num1++;
        if (p->data.English >= 60)
            num2++;
        if (p->data.Db >= 60)
            num3++;
        p = p->next;
    }

    printf("数学及格人数：%d\n", num1);

    printf("英语及格人数：%d\n", num2);

    printf("数据库及格人数：%d\n", num3);
    system("pause");
}

//菜单
void menu()
{
    int m = 0;
    printf("\t\t\t\t-------------欢迎来到河北工程大学学生信息管理系统----------------\n");
    printf("\t\t\t\t*********************1、添加学生信息****************************\n");
    printf("\t\t\t\t*********************2、删除学生信息****************************\n");
    printf("\t\t\t\t*********************3、修改学生信息****************************\n");
    printf("\t\t\t\t*********************4、按学号查找学生信息**********************\n");
    printf("\t\t\t\t*********************5、按姓名查找学生信息**********************\n");
    printf("\t\t\t\t*********************6、按性别查找学生信息**********************\n");
    printf("\t\t\t\t*********************7、按总成绩排名****************************\n");
    printf("\t\t\t\t*********************8、按学号排序******************************\n");
    printf("\t\t\t\t*********************9、按各科成绩排序**************************\n");
    printf("\t\t\t\t*********************10、数据保存到文件*************************\n");
    printf("\t\t\t\t*********************11、从文件读取数据*************************\n");
    printf("\t\t\t\t*********************12、求班级各个学科的平均分*****************\n");
    printf("\t\t\t\t*********************13、统计各科及格人数***********************\n");
    printf("\t\t\t\t*********************14、统计各科不及格人数*********************\n");
    printf("\t\t\t\t*********************15、统计各科优秀人数***********************\n");
    printf("\t\t\t\t*********************16、退出程序*******************************\n");
    printf("\n");
    printf("请选择你要进行的操作：\n");
    scanf("%d", &m);
    switch (m)
    {
    case 1:
        printf("********************************【添加学生信息】**********************************\n");
        insert(head);
        look(head);
        break;
    case 2:
        deleteStudent(head);
        break;
    case 3:
        editNodeByHead(head);
        break;
    case 4:
        printf("***********************************【按照学号查找学生信息】************************************\n");
        searchid(head);
        break;
    case 5:
        searchStudentByName(head);
        break;
    case 6:
        findStudentBySex(head);
        break;
    case 7:
        printf("***************************************【总成绩排名】*****************************************\n");
        sort(head);
        break;
    case 8:
        sortById(head);
        break;
    case 9:
        rankByGrade(head);
        break;
    case 10:
        SaveToFile(head);
        break;
    case 11:
        readFromFile(head);
        break;
    case 12:
        printf("**********【各学科平均分】**********\n");
        avg(head);
        break;
    case 13:
        printf("**********【各科及格人数】**********\n");
        pass(head);
        break;
    case 14:
        findStudentByFail(head);
        break;
    case 15:
        countGood(head);
        break;
    case 16:
        release_list(head);
        exit(0);
    }
}

// 程序入口
int main()
{
    createHeadNode(head);
    readFromFile(head);
    while (1)
    {
        menu();
    }
    return 0;
}

```

