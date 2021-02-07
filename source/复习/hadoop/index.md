---
title: hadoop
type: ''
comments: false
aside: false
top_img: false
date: 2020-12-09 13:06:57
---

## 1

![image-20201204132422513](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204132422.png)

## 2

![image-20201209130805964](https://gitee.com/frunoob/blog-image/raw/master/image/20201209130806.png)

## 3

![image-20201209132357561](https://gitee.com/frunoob/blog-image/raw/master/image/20201209132357.png)

## 4

![image-20201209135229012](https://gitee.com/frunoob/blog-image/raw/master/image/20201209135229.png)

## 5

![image-20201204020759796](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204020800.png)

![image-20201204020852876](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204020852.png)

![image-20201204020927315](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204020927.png)

![image-20201209142456940](https://gitee.com/frunoob/blog-image/raw/master/image/20201209142516.png)

## 6

![image-20201204132240100](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204132240.png)

## 7

![image-20201204131239885](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204131239.png)

![image-20201204131319000](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204131319.png)

## 8

![image-20201204135002291](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204135002.png)

## 9

![image-20201209145731699](https://gitee.com/frunoob/blog-image/raw/master/image/20201209145731.png)

![image-20201209150200442](https://gitee.com/frunoob/blog-image/raw/master/image/20201209150200.png)

## 10

**2** **）** **NameNode**

NameNode是一个在[HDFS](http://baike.baidu.com/view/3061630.htm)实例中单独机器上运行的[软件](http://baike.baidu.com/view/37.htm)。它负责管理文件系统[名称空间](http://baike.baidu.com/view/94227.htm)和控制外部客户机的访问。NameNode决定是否将文件映射到DataNode上的复制块上。对于最常见的3个复制块，第一个复制块存储在同一机架的不同节点上，最后一个复制块存储在不同机架的某个节点上。

实际的I/O[事务](http://baike.baidu.com/view/121511.htm)并不经过 NameNode，只有表示DataNode和块的文件映射的元数据经过NameNode。当外部客户机发送请求要求创建文件时，NameNode 会以块标识和该块的第一个副本的DataNode IP地址作为响应。同时NameNode还会通知其他将要接收该块的副本的DataNode。

NameNode在一个称为FsImage的文件中存储所有关于文件系统[名称空间](http://baike.baidu.com/view/94227.htm)的信息。这个文件和一个包含所有事务的[记录文件](http://baike.baidu.com/view/4043677.htm)将存储在NameNode的本地文件系统上。FsImage和EditLog文件同样复制副本，以防文件损坏或NameNode系统丢失。

**3** **）** **DataNode**

DataNode也是一个在[HDFS](http://baike.baidu.com/view/3061630.htm)实例中单独机器上运行的软件。Hadoop 集群包含一个NameNode和大量DataNode。DataNode通常以机架的形式组织，机架通过一个[交换机](http://baike.baidu.com/view/1077.htm)将所有系统连接起来。Hadoop 的一个假设是：机架内部[节点](http://baike.baidu.com/view/47398.htm)之间的传输速度快于机架间节点的传输速度。

DataNode响应来自HDFS客户机的读写请求，同时也来自NameNode 的创建、删除和复制块的命令。NameNode依赖来自每个DataNode的定期心跳（heartbeat）消息。每条消息都包含一个块报告，NameNode可以根据此报告验证块映射和其他文件系统元数据。如果DataNode无法发送心跳消息，NameNode将采取修复措施，重新复制在该节点上丢失的块。

![image-20201209151612523](https://gitee.com/frunoob/blog-image/raw/master/image/20201209151612.png)

![image-20201209151621806](https://gitee.com/frunoob/blog-image/raw/master/image/20201209151621.png)

![image-20201204135629946](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204135630.png)

## 11

#### 1 优点

（1）对硬件低要求，MapReduce模型是面向由数千台中低端计算机组成的大规模集群而设计的，基于此优点MapReduce模型可以在现有的异构集群中很好的运行。

（2）接口化，MapReduce模型通过简单的接口实现了大规模分布式计算的自动并行化，它屏蔽了需要大量并行代码去实现的容错、负载均衡和数据分布等复杂细节，程序员只需关注实际操作数据的Map函数和Reduce函数即可。

（3）编程语言多样化，MapReduce模型支持Java、C、C++、Python、Shell、PHP、Ruby等多种开发语言，程序员可以选择所熟悉的语言编写Map函数和Reduce函数。

（4）扩展性强，它采用的shared-nothing结构保证了其良好的伸缩性，同时，使其具有了各个节点间的松耦合性和较强的容错能力，进而节点可以被任意地从集群中移除，而几乎不影响现有任务的执行。

（5）数据分析低延迟，基于MapReduce模型的数据分析，无需复杂的数据预处理和写入数据库的过程，而是直接基于平面文件进行分析，并且其采用的计算模式是移动计算而非移动数据[3]，因此可以将分析延迟最小化。

#### 2 缺点

（1）无法达到数据实时处理，虽然MapReduce模型在批量数据分工整合方面具有的快速处理、低延迟等优势，但是其设计初衷是为解决大规模、非实时数据问题，因此在大数据时代，MapReduce并不能满足大数据实时处理的需求。

（2）匹配的应用软件较少，基于MapReduce模型的应用软件相对较少，许多数据分析功能需要用户自主开发，从而导致了使用成本的增加。

（3）程序员负担增加，文件存储格式的设计、模式信息的记录以及数据处理算法的实现等本来可以由数据库管理系统完成，但是MapReduce模型将此类工作全部交由程序员完成，从而导致了程序员的负担过重，因此，程序员水平对MapReduce模型的运行性能起到决定性作用。

（4）I/O代价较高，MapReduce模型的输入数据并不能贯穿整个MapReduce流程，在Map阶段结束后由内存写入本地存储，Reduce阶段的输入数据需要从本地存储读取。MapReduce模型采取的这种基于扫描的处理模式和对中间结果步步处理的执行策略，导致了较高的I/O代价[3]。

（5）处理流程单一，在很多场景中，用户需要对数据进行复杂的操作。这些操作需要对多个MapReduce作业进行级联来完成。但是在作业级联的过程中会产生不必要的分布式文件系统读写以及Map阶段。因为每一个作业在完成之后会将结果输出到分布式文件系统，下一个作业开始的时候又需要从分布式文件系统中读出这些数据，这就造成了极大的资源浪费。

## 12

![image-20201204131657862](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204131657.png)

## 13



![image-20201209155715724](https://gitee.com/frunoob/blog-image/raw/master/image/20201209155715.png)

![image-20201209155752132](https://gitee.com/frunoob/blog-image/raw/master/image/20201209155752.png)

## 14

![image-20201204021655987](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204021656.png)

## 15 

![image-20201204021825165](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204021825.png)

![image-20201209162836177](https://gitee.com/frunoob/blog-image/raw/master/image/20201209162836.png)

## 16 

**Shuffle & Sort**过程是MapReduce的核心，它确保每个Reducer的输入都按键排序，**Shuffle & Sort描述着数据从Map任务输出到Reduce 任务输入的这段过程**。在MapReduce作业执行过程中，大部分Map任务与Reduce任务的执行是在不同的节点上，很多情况下Reduce执行时需要跨节点去读取其他节点上的Map任务结果。因此Shuffle & Sort过程至关重要，**它需要保证数据完整地从Map端传输到Reduce端，并且在跨节点读取数据时，尽可能地减少对带宽的不必要消耗，同时还要减少磁盘I/O对任务执行的影响。**

<br/>MapReduce模型的Shuffle&Sort原理如图<i class = "fas fa-hand-point-down fa-2x"></i>



![image-20201204142542492](https://cdn.jsdelivr.net/gh/frunoob/images/blog/20201204142542.png)

## 17

![image-20201209172127904](https://gitee.com/frunoob/blog-image/raw/master/image/20201209172128.png)

![image-20201209172136418](https://gitee.com/frunoob/blog-image/raw/master/image/20201209172136.png)