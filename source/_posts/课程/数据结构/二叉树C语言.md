---
title: 二叉树C语言
date: 2020-11-05 00:12:00
top_img: https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=377411311,995354292&fm=26&gp=0.jpg
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604945087750&di=4220aa50fabb22b888edbb6c2cde5b30&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F5f162340e573f29fb7e373d7fb5c7afc030cc537.png
---
1、树的相关定义
（1）树：包含n（n>0）个节点的有穷集合，其中每个元素称为节点（node）；有一个特定的节点被称为根节点或树根（root）；除根节点之外的其余数据元素被分为m（m≥0）个互不相交的结合T1，T2，……Tm-1，而其中每一个集合Ti（1<=i<=m）本身也是一棵树，被称作原树的子树（subtree）。

（2）节点的度：一个节点含有的子树的个数称为该节点的度；

（3）树的度：一棵树中，最大的节点的度称为树的度；

（4）叶节点或终端节点：度为零的节点称为叶节点；

（5）分支节点或非终端节点：度不为零的节点；

（6）父节点或双亲节点：若一个结点含有子节点，则这个节点称为其子节点的父节点；

（7）子节点或孩子节点：一个节点含有的子树的根节点称为该节点的子节点；

（8）兄弟节点：具有相同父节点的节点互称为兄弟节点；

（9）节点的祖先：从根到该节点所经分支上的所有节点；

（10）子孙：以某节点为根的子树中任一节点都称为该节点的子孙。

（11）节点的层次：从根开始定义起，根为第1层，根的子结点为第2层，以此类推；

（12）树的深度或高度：定义一棵树的根结点层次为1，其他节点的层次是其父结点层次加1。一棵树中所有结点的层次的最大值称为这棵树的深度。

（13）森林：由m（m>=0）棵互不相交的树的集合称为森林；

 

2、树的特点

（1）每个节点有零个或多个子节点。

（2）每个子节点只有一个父节点。

（3）没有父节点的节点称为根节点。

 

3、树的分类

根据形态可以分为以下两种：

（1）二叉树

满二叉树
完全二叉树
斜树
（2）多叉树

还有其他根据应用特性而命名的树，比如线索二叉树、平衡二叉树、二叉排序树、多路查找树（2-3树、2-3-4树、B树、B+树等）、最小生成树等，本质是上述两种类型。

 

4、树的特点和性质

由于实际中二叉树用得最多，而且多叉树可以转化成二叉树，因此主要讲二叉树的性质。

性质1：在二叉树的第i层上，至多有2^（i-1）个节点。

性质2：深度为k的二叉树，至多有2^k-1个节点。

性质3：对任何的一颗二叉树，如果其终端节点（叶子节点）数为n0，度为2的节点数为n2，则有n0=n2+1。

性质4：具有n个节点的完全二叉树的深度为 [ log2(n) ]+1（[ x ]表示不大于x的最大整数）。

性质5：有n个节点的完全二叉树，从第一层到[ log2(n) ]+1层，每层从左到右编号，对任一节点i，如果i=1，则是二叉树的根；如果i>1，则 [ i / 2 ]是其父节点；如果2i>n，则i无左孩子，否则其左孩子是2i；如果2i+1>n，则节点无右孩子，否则右孩子是2i+1。

 

5、树的表示（存储结构）

由于实际中二叉树用得最多，而且多叉树可以转化成二叉树，因此主要讲二叉树的存储结构，即如何表示二叉树结构，和创建实际的二叉树。这里有几种表示方法：

（1）孩子兄弟表示法：每个节点设置两个指针，分别指向该节点的第一个孩子和此节点的兄弟。

 

[cpp] view plain copy

typedef struct TreeNode  
{  
    int data;  
    //other data information  
    struct TreeNode *fisrtchild;  
    struct TreeNode *BrotherNode;  
}node;  

（2）子节点表示法；

 

（3）父节点表示法；

 

6、树的操作与用途

（1）遍历二叉树，如前序、后序、中序遍历（并推导遍历结果）；

（2）对树进行节点的删减和添加；

（3）运用于查找（平衡二叉树、多路查找树），排序（（堆）排序等）等；

### 顺序表存储二叉树

  

```C
#include "stdio.h"    
#include "stdlib.h"   
#include "io.h"  
#include "math.h"  
#include "time.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MAXSIZE 100 /* 存储空间初始分配量 */
#define MAX_TREE_SIZE 100 /* 二叉树的最大结点数 */

typedef int Status;        /* Status是函数的类型,其值是函数结果状态代码，如OK等 */
typedef int TElemType;  /* 树结点的数据类型，目前暂定为整型 */
typedef TElemType SqBiTree[MAX_TREE_SIZE]; /* 0号单元存储根结点  */

typedef struct
{
    int level,order; /* 结点的层,本层序号(按满二叉树计算) */
}Position;

TElemType Nil=0; /*  设整型以0为空 */

Status visit(TElemType c)
{
    printf("%d ",c);
    return OK;
}

/* 构造空二叉树T。因为T是固定数组，不会改变，故不需要& */
Status InitBiTree(SqBiTree T)
{
    int i;
    for(i=0;i<MAX_TREE_SIZE;i++)
        T[i]=Nil; /* 初值为空 */
    return OK;
}

/* 按层序次序输入二叉树中结点的值(字符型或整型), 构造顺序存储的二叉树T */
Status CreateBiTree(SqBiTree T)
{ 
    int i=0;
     printf("请按层序输入结点的值(整型)，0表示空结点，输999结束。结点数≤%d:\n",MAX_TREE_SIZE);
    while(i<10)
    {
        T[i]=i+1;
        
        if(i!=0&&T[(i+1)/2-1]==Nil&&T[i]!=Nil) /* 此结点(不空)无双亲且不是根 */
        {
            printf("出现无双亲的非根结点%d\n",T[i]);
            exit(ERROR);
        }
        i++;
    }
    while(i<MAX_TREE_SIZE)
    {
        T[i]=Nil; /* 将空赋值给T的后面的结点 */
        i++;
    }

    return OK;
}

#define ClearBiTree InitBiTree /* 在顺序存储结构中，两函数完全一样 */

/* 初始条件: 二叉树T存在 */
/* 操作结果: 若T为空二叉树,则返回TRUE,否则FALSE */
Status BiTreeEmpty(SqBiTree T)
{ 
    if(T[0]==Nil) /* 根结点为空,则树空 */
        return TRUE;
    else
        return FALSE;
}

/* 初始条件: 二叉树T存在。操作结果: 返回T的深度 */
int BiTreeDepth(SqBiTree T)
{ 
   int i,j=-1;
   for(i=MAX_TREE_SIZE-1;i>=0;i--) /* 找到最后一个结点 */
     if(T[i]!=Nil)
       break;
   i++; 
   do
     j++;
   while(i>=powl(2,j));/* 计算2的j次幂。 */
   return j;
}

/* 初始条件: 二叉树T存在 */
/* 操作结果:  当T不空,用e返回T的根,返回OK;否则返回ERROR,e无定义 */
Status Root(SqBiTree T,TElemType *e)
{ 
    if(BiTreeEmpty(T)) /* T空 */
        return ERROR;
    else
    {    
        *e=T[0];
        return OK;
    }
}

/* 初始条件: 二叉树T存在,e是T中某个结点(的位置) */
/* 操作结果: 返回处于位置e(层,本层序号)的结点的值 */
TElemType Value(SqBiTree T,Position e)
{ 
     return T[(int)powl(2,e.level-1)+e.order-2];
}

/* 初始条件: 二叉树T存在,e是T中某个结点(的位置) */
/* 操作结果: 给处于位置e(层,本层序号)的结点赋新值value */
Status Assign(SqBiTree T,Position e,TElemType value)
{ 
    int i=(int)powl(2,e.level-1)+e.order-2; /* 将层、本层序号转为矩阵的序号 */
    if(value!=Nil&&T[(i+1)/2-1]==Nil) /* 给叶子赋非空值但双亲为空 */
        return ERROR;
    else if(value==Nil&&(T[i*2+1]!=Nil||T[i*2+2]!=Nil)) /*  给双亲赋空值但有叶子（不空） */
        return ERROR;
    T[i]=value;
    return OK;
}

/* 初始条件: 二叉树T存在,e是T中某个结点 */
/* 操作结果: 若e是T的非根结点,则返回它的双亲,否则返回＂空＂ */
TElemType Parent(SqBiTree T,TElemType e)
{ 
    int i;
    if(T[0]==Nil) /* 空树 */
        return Nil;
    for(i=1;i<=MAX_TREE_SIZE-1;i++)
        if(T[i]==e) /* 找到e */
            return T[(i+1)/2-1];
    return Nil; /* 没找到e */
}


/* 初始条件: 二叉树T存在,e是T中某个结点 */
/* 操作结果: 返回e的左孩子。若e无左孩子,则返回＂空＂ */
TElemType LeftChild(SqBiTree T,TElemType e)
{ 
    int i;
    if(T[0]==Nil) /* 空树 */
        return Nil;
    for(i=0;i<=MAX_TREE_SIZE-1;i++)
        if(T[i]==e) /* 找到e */
            return T[i*2+1];
    return Nil; /* 没找到e */
}

/* 初始条件: 二叉树T存在,e是T中某个结点 */
/* 操作结果: 返回e的右孩子。若e无右孩子,则返回＂空＂ */
TElemType RightChild(SqBiTree T,TElemType e)
{ 
    int i;
    if(T[0]==Nil) /* 空树 */
        return Nil;
    for(i=0;i<=MAX_TREE_SIZE-1;i++)
        if(T[i]==e) /* 找到e */
            return T[i*2+2];
    return Nil; /* 没找到e */
}

/* 初始条件: 二叉树T存在,e是T中某个结点 */
/* 操作结果: 返回e的左兄弟。若e是T的左孩子或无左兄弟,则返回＂空＂ */
TElemType LeftSibling(SqBiTree T,TElemType e)
{ 
    int i;
    if(T[0]==Nil) /* 空树 */
        return Nil;
    for(i=1;i<=MAX_TREE_SIZE-1;i++)
        if(T[i]==e&&i%2==0) /* 找到e且其序号为偶数(是右孩子) */
            return T[i-1];
    return Nil; /* 没找到e */
}

/* 初始条件: 二叉树T存在,e是T中某个结点 */
/* 操作结果: 返回e的右兄弟。若e是T的右孩子或无右兄弟,则返回＂空＂ */
TElemType RightSibling(SqBiTree T,TElemType e)
{ 
    int i;
    if(T[0]==Nil) /* 空树 */
        return Nil;
    for(i=1;i<=MAX_TREE_SIZE-1;i++)
        if(T[i]==e&&i%2) /* 找到e且其序号为奇数(是左孩子) */
            return T[i+1];
    return Nil; /* 没找到e */
}

/* PreOrderTraverse()调用 */
void PreTraverse(SqBiTree T,int e)
{ 
    visit(T[e]);
    if(T[2*e+1]!=Nil) /* 左子树不空 */
        PreTraverse(T,2*e+1);
    if(T[2*e+2]!=Nil) /* 右子树不空 */
        PreTraverse(T,2*e+2);
}

/* 初始条件: 二叉树存在 */
/* 操作结果: 先序遍历T。 */
Status PreOrderTraverse(SqBiTree T)
{ 
    if(!BiTreeEmpty(T)) /* 树不空 */
     PreTraverse(T,0);
    printf("\n");
    return OK;
}

/* InOrderTraverse()调用 */
void InTraverse(SqBiTree T,int e)
{ 
    if(T[2*e+1]!=Nil) /* 左子树不空 */
        InTraverse(T,2*e+1);
    visit(T[e]);
    if(T[2*e+2]!=Nil) /* 右子树不空 */
        InTraverse(T,2*e+2);
}

/* 初始条件: 二叉树存在 */
/* 操作结果: 中序遍历T。 */
Status InOrderTraverse(SqBiTree T)
{ 
    if(!BiTreeEmpty(T)) /* 树不空 */
        InTraverse(T,0);
    printf("\n");
    return OK;
}

/* PostOrderTraverse()调用 */
void PostTraverse(SqBiTree T,int e)
{ 
    if(T[2*e+1]!=Nil) /* 左子树不空 */
        PostTraverse(T,2*e+1);
    if(T[2*e+2]!=Nil) /* 右子树不空 */
        PostTraverse(T,2*e+2);
    visit(T[e]);
}

/* 初始条件: 二叉树T存在 */
/* 操作结果: 后序遍历T。 */
Status PostOrderTraverse(SqBiTree T)
{ 
    if(!BiTreeEmpty(T)) /* 树不空 */
        PostTraverse(T,0);
    printf("\n");
    return OK;
}

/* 层序遍历二叉树 */
void LevelOrderTraverse(SqBiTree T)
{ 
    int i=MAX_TREE_SIZE-1,j;
    while(T[i]==Nil)
        i--; /* 找到最后一个非空结点的序号 */
    for(j=0;j<=i;j++)  /* 从根结点起,按层序遍历二叉树 */
        if(T[j]!=Nil)
            visit(T[j]); /* 只遍历非空的结点 */
    printf("\n");
}

/* 逐层、按本层序号输出二叉树 */
void Print(SqBiTree T)
{ 
    int j,k;
    Position p;
    TElemType e;
    for(j=1;j<=BiTreeDepth(T);j++)
    {
        printf("第%d层: ",j);
        for(k=1;k<=powl(2,j-1);k++)
        {
            p.level=j;
            p.order=k;
            e=Value(T,p);
            if(e!=Nil)
                printf("%d:%d ",k,e);
        }
        printf("\n");
    }
}


int main()
{
    Status i;
    Position p;
    TElemType e;
    SqBiTree T;
    InitBiTree(T);
    CreateBiTree(T);
    printf("建立二叉树后,树空否？%d(1:是 0:否) 树的深度=%d\n",BiTreeEmpty(T),BiTreeDepth(T));
    i=Root(T,&e);
    if(i)
        printf("二叉树的根为：%d\n",e);
    else
        printf("树空，无根\n");
    printf("层序遍历二叉树:\n");
    LevelOrderTraverse(T);
    printf("前序遍历二叉树:\n");
    PreOrderTraverse(T);
    printf("中序遍历二叉树:\n");
    InOrderTraverse(T);
    printf("后序遍历二叉树:\n");
    PostOrderTraverse(T);
    printf("修改结点的层号3本层序号2。");
    p.level=3;
    p.order=2;
    e=Value(T,p);
    printf("待修改结点的原值为%d请输入新值:50 ",e);
    e=50;
    Assign(T,p,e);
    printf("前序遍历二叉树:\n");
    PreOrderTraverse(T);
    printf("结点%d的双亲为%d,左右孩子分别为",e,Parent(T,e));
    printf("%d,%d,左右兄弟分别为",LeftChild(T,e),RightChild(T,e));
    printf("%d,%d\n",LeftSibling(T,e),RightSibling(T,e));
    ClearBiTree(T);
    printf("清除二叉树后,树空否？%d(1:是 0:否) 树的深度=%d\n",BiTreeEmpty(T),BiTreeDepth(T));
    i=Root(T,&e);
    if(i)
        printf("二叉树的根为：%d\n",e);
    else
        printf("树空，无根\n");
    
    return 0;
}

```
### 链式存储二叉树

  

```c
#include "string.h"
#include "stdio.h"    
#include "stdlib.h"   
#include "io.h"  
#include "math.h"  
#include "time.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MAXSIZE 100 /* 存储空间初始分配量 */

typedef int Status;        /* Status是函数的类型,其值是函数结果状态代码，如OK等 */

/* 用于构造二叉树********************************** */
int index=1;
typedef char String[24]; /*  0号单元存放串的长度 */
String str;

Status StrAssign(String T,char *chars)
{ 
    int i;
    if(strlen(chars)>MAXSIZE)
        return ERROR;
    else
    {
        T[0]=strlen(chars);
        for(i=1;i<=T[0];i++)
            T[i]=*(chars+i-1);
        return OK;
    }
}
/* ************************************************ */

typedef char TElemType;
TElemType Nil= ' '; /* 字符型以空格符为空 */

Status visit(TElemType e)
{
    printf("%c ",e);
    return OK;
}

typedef struct BiTNode  /* 结点结构 */
{
   TElemType data;        /* 结点数据 */
   struct BiTNode *lchild,*rchild; /* 左右孩子指针 */
}BiTNode,*BiTree;


/* 构造空二叉树T */
Status InitBiTree(BiTree *T)
{ 
    *T=NULL;
    return OK;
}

/* 初始条件: 二叉树T存在。操作结果: 销毁二叉树T */
void DestroyBiTree(BiTree *T)
{ 
    if(*T) 
    {
        if((*T)->lchild) /* 有左孩子 */
            DestroyBiTree(&(*T)->lchild); /* 销毁左孩子子树 */
        if((*T)->rchild) /* 有右孩子 */
            DestroyBiTree(&(*T)->rchild); /* 销毁右孩子子树 */
        free(*T); /* 释放根结点 */
        *T=NULL; /* 空指针赋0 */
    }
}

/* 按前序输入二叉树中结点的值（一个字符） */
/* #表示空树，构造二叉链表表示二叉树T。 */
void CreateBiTree(BiTree *T)
{ 
    TElemType ch;
    
    /* scanf("%c",&ch); */
    ch=str[index++];

    if(ch=='#') 
        *T=NULL;
    else
    {
        *T=(BiTree)malloc(sizeof(BiTNode));
        if(!*T)
            exit(OVERFLOW);
        (*T)->data=ch; /* 生成根结点 */
        CreateBiTree(&(*T)->lchild); /* 构造左子树 */
        CreateBiTree(&(*T)->rchild); /* 构造右子树 */
    }
 }

/* 初始条件: 二叉树T存在 */
/* 操作结果: 若T为空二叉树,则返回TRUE,否则FALSE */
Status BiTreeEmpty(BiTree T)
{ 
    if(T)
        return FALSE;
    else
        return TRUE;
}

#define ClearBiTree DestroyBiTree

/* 初始条件: 二叉树T存在。操作结果: 返回T的深度 */
int BiTreeDepth(BiTree T)
{
    int i,j;
    if(!T)
        return 0;
    if(T->lchild)
        i=BiTreeDepth(T->lchild);
    else
        i=0;
    if(T->rchild)
        j=BiTreeDepth(T->rchild);
    else
        j=0;
    return i>j?i+1:j+1;
}

/* 初始条件: 二叉树T存在。操作结果: 返回T的根 */
TElemType Root(BiTree T)
{ 
    if(BiTreeEmpty(T))
        return Nil;
    else
        return T->data;
}

/* 初始条件: 二叉树T存在，p指向T中某个结点 */
/* 操作结果: 返回p所指结点的值 */
TElemType Value(BiTree p)
{
    return p->data;
}

/* 给p所指结点赋值为value */
void Assign(BiTree p,TElemType value)
{
    p->data=value;
}

/* 初始条件: 二叉树T存在 */
/* 操作结果: 前序递归遍历T */
void PreOrderTraverse(BiTree T)
{ 
    if(T==NULL)
        return;
    printf("%c",T->data);/* 显示结点数据，可以更改为其它对结点操作 */
    PreOrderTraverse(T->lchild); /* 再先序遍历左子树 */
    PreOrderTraverse(T->rchild); /* 最后先序遍历右子树 */
}

/* 初始条件: 二叉树T存在 */
/* 操作结果: 中序递归遍历T */
void InOrderTraverse(BiTree T)
{ 
    if(T==NULL)
        return;
    InOrderTraverse(T->lchild); /* 中序遍历左子树 */
    printf("%c",T->data);/* 显示结点数据，可以更改为其它对结点操作 */
    InOrderTraverse(T->rchild); /* 最后中序遍历右子树 */
}

/* 初始条件: 二叉树T存在 */
/* 操作结果: 后序递归遍历T */
void PostOrderTraverse(BiTree T)
{
    if(T==NULL)
        return;
    PostOrderTraverse(T->lchild); /* 先后序遍历左子树  */
    PostOrderTraverse(T->rchild); /* 再后序遍历右子树  */
    printf("%c",T->data);/* 显示结点数据，可以更改为其它对结点操作 */
}


int main()
{
    int i;
    BiTree T;
    TElemType e1;
    InitBiTree(&T);

    
    StrAssign(str,"ABDH#K###E##CFI###G#J##");

    CreateBiTree(&T);

    printf("构造空二叉树后,树空否？%d(1:是 0:否) 树的深度=%d\n",BiTreeEmpty(T),BiTreeDepth(T));
    e1=Root(T);
    printf("二叉树的根为: %c\n",e1);

    printf("\n前序遍历二叉树:");
    PreOrderTraverse(T);
    printf("\n中序遍历二叉树:");
    InOrderTraverse(T);
    printf("\n后序遍历二叉树:");
    PostOrderTraverse(T);
    ClearBiTree(&T);
    printf("\n清除二叉树后,树空否？%d(1:是 0:否) 树的深度=%d\n",BiTreeEmpty(T),BiTreeDepth(T));
    i=Root(T);
    if(!i)
        printf("树空，无根\n");
    
    return 0;
}

```
