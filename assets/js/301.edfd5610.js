(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{505:function(t,a,s){"use strict";s.r(a);var r=s(5),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"高并发系统的设计与开发-java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高并发系统的设计与开发-java"}},[t._v("#")]),t._v(" 高并发系统的设计与开发|java")]),t._v(" "),s("blockquote",[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#第二章-高并发io的底层原理"}},[t._v("第二章：高并发IO的底层原理")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1-io读写的基本"}},[t._v("2.1 IO读写的基本")])])])]),s("li",[s("a",{attrs:{href:"#_2-2-四种主要的io模型"}},[t._v("2.2 四种主要的IO模型")])]),s("li",[s("a",{attrs:{href:"#_2-3-通过合理配置支持百万并发连接"}},[t._v("2.3 通过合理配置支持百万并发连接")])]),s("li",[s("a",{attrs:{href:"#第三章-nio核心"}},[t._v("第三章 NIO核心")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-1-nio和oio的对比"}},[t._v("3.1.1 NIO和OIO的对比")])]),s("li",[s("a",{attrs:{href:"#_3-1-2-通道"}},[t._v("3.1.2 通道")])]),s("li",[s("a",{attrs:{href:"#_3-1-3-选择器"}},[t._v("3.1.3 选择器")])]),s("li",[s("a",{attrs:{href:"#_3-1-4-缓冲区"}},[t._v("3.1.4  缓冲区")])]),s("li",[s("a",{attrs:{href:"#_3-2-1-buffer类"}},[t._v("3.2.1 Buffer类")])]),s("li",[s("a",{attrs:{href:"#_3-2-2-buffer类的重要属性"}},[t._v("3.2.2 Buffer类的重要属性")])])])])])]),s("p")]),t._v(" "),s("h2",{attrs:{id:"第二章-高并发io的底层原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二章-高并发io的底层原理"}},[t._v("#")]),t._v(" 第二章：高并发IO的底层原理")]),t._v(" "),s("h3",{attrs:{id:"_2-1-io读写的基本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-io读写的基本"}},[t._v("#")]),t._v(" 2.1 IO读写的基本")]),t._v(" "),s("p",[t._v("为了保证内核安全，操作系统将内存分为两个部分，用户空间和内核空间。内核程序运行在内核空间，对应的进程处于内核态。用户程序运行在用户空间，对应进程处于用户态。")]),t._v(" "),s("p",[t._v("操作系统的核心是内核程序，它有权限访问内核空间，也能访问硬件。")]),t._v(" "),s("p",[t._v("用户程序如果想要访问内核空间中的数据，需要将进程状态转换为内核态。")]),t._v(" "),s("p",[t._v("内核态进程可以执行任意命令，调用系统的一切资源。 如果用户进程想要访问系统资源，必须通过系统调用。")]),t._v(" "),s("p",[s("strong",[t._v("缓冲区")]),t._v("是为了解决cpu和IO之间速度不匹配，减少cpu中断而存在的。")]),t._v(" "),s("h4",{attrs:{id:"_2-1-1-内核缓冲区和进程缓冲区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-内核缓冲区和进程缓冲区"}},[t._v("#")]),t._v(" 2.1.1 内核缓冲区和进程缓冲区")]),t._v(" "),s("p",[t._v("当IO操作将内核缓冲区装满后，由系统判断何时中断设备，不需要应用操心。\n上层应用使用read调用时，将数据从内核缓冲区复制到进程的缓冲区。")]),t._v(" "),s("h2",{attrs:{id:"_2-2-四种主要的io模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-四种主要的io模型"}},[t._v("#")]),t._v(" 2.2 四种主要的IO模型")]),t._v(" "),s("p",[t._v("四种常见IO模型")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("阻塞和非阻塞")]),t._v(" "),s("p",[t._v("阻塞IO是在内核IO操作彻底完成才返回用户空间执行用户程序的操作指令。 java中创建的socket都属于阻塞IO模型。")])]),t._v(" "),s("p",[s("strong",[t._v("1.同步阻塞IO")])]),t._v(" "),s("p",[t._v("用户空间中的线程发起IO请求, 然后该线程进入阻塞状态，等内核进程彻底完成IO操作后，线程恢复。")]),t._v(" "),s("p",[s("strong",[t._v("2.同步非阻塞IO")])]),t._v(" "),s("p",[t._v("用户空间的程序不需要等待内核缓冲区准备数据，可以立即返回用户空间去执行后续的指令。通过不断的发起系统调用，直到内核缓冲区数据准备完成。")]),t._v(" "),s("p",[t._v("非阻塞会占用大量cpu时间，效率低下。")]),t._v(" "),s("p",[s("strong",[t._v("3.IO多路复用")])]),t._v(" "),s("p",[t._v("通过注册器统一管理IO请求，注册器循环查询准备就绪的线程，汇总成表返回到用户空间")]),t._v(" "),s("p",[s("strong",[t._v("4.异步IO")])]),t._v(" "),s("p",[t._v("系统调用的过程中，用户程序不阻塞，当资源复制到用户空间之后，通知用户处理，全程用户进程都不会阻塞。"),s("br"),t._v("\n理论上 异步IO的吞吐量高于IO多路复用模型的吞吐量。window下通过"),s("strong",[t._v("IOCP")]),t._v("实现了真正的异步IO"),s("br"),t._v("\nlinux2.6版本以后才有的aio,jdk对其支持并不完善，性能提升不大")]),t._v(" "),s("h2",{attrs:{id:"_2-3-通过合理配置支持百万并发连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-通过合理配置支持百万并发连接"}},[t._v("#")]),t._v(" 2.3 通过合理配置支持百万并发连接")]),t._v(" "),s("p",[t._v("在linux中，文件句柄默认1024,即一个进程最多可以接受1024个socket连接，这是远远不够的。"),s("br"),t._v("\n文件句柄也称文件描述符，在Linux系统中，文件描述符是内核为了高校管理已经被打开的问i按所创建的索引，是一个非负数，用于指代被打开的文件。所有的IO系统调用都是通过文件描述符来完成的。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看文件句柄限制 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -n   \n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置文件句柄数量，仅对当前用户的当前shell界面生效  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑 /etc/rc.local ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -SHn "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑/etc/security/limits.conf来解除系统最大文件打开数量的限制,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在生产环境中使用netty或者是分布式搜索引擎ElasticSearch必须要设置这两项，软性极限（超过则警告）硬性极限无法超过")]),t._v("\nsoft nofile "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\nhard  nofile "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"第三章-nio核心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三章-nio核心"}},[t._v("#")]),t._v(" 第三章 NIO核心")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("背景了解")]),t._v(" "),s("p",[t._v("1.4版本之前，java IO类库是阻塞IO,从1.4版本之后Java变成了异步IO。  java的NIO属于IO多路复用模型。"),s("br"),t._v("\nOIO(Old IO):阻塞式Java IO")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-1-nio和oio的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-nio和oio的对比"}},[t._v("#")]),t._v(" 3.1.1 NIO和OIO的对比")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("OIO面向流 NIO面向缓冲区的   流就是只能按顺序读取，不能从指定位置开始读取\n缓冲区就是从通道读取数据到缓冲区，或将数据从缓冲区写入到通道中。NIO不像OIO是顺序读取的，他可以从任意位置读取")])]),t._v(" "),s("li",[s("p",[t._v("OIO是阻塞的，NIO是非阻塞"),s("br"),t._v("\n在NIO模式中，调用read方法无论有没有数据都会立即返回，这是因为NIO使用了通道的多路复用及技术")])]),t._v(" "),s("li",[s("p",[t._v("NIO有选择器需要系统支持   OIO没有选择器不需要系统支持")])])]),t._v(" "),s("h3",{attrs:{id:"_3-1-2-通道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-通道"}},[t._v("#")]),t._v(" 3.1.2 通道")]),t._v(" "),s("p",[t._v("在OIO中，同一个网络连接会关联到两个流： 一个是输入流一个是输出流。"),s("br"),t._v("\n在NIO中，一个网络里用一个通道表示，所有NIO的IO操作都通过连接通道完成的，通道其实就是将读写操作封装起来的结合体，既可以读取又可以操作。")]),t._v(" "),s("h3",{attrs:{id:"_3-1-3-选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-选择器"}},[t._v("#")]),t._v(" 3.1.3 选择器")]),t._v(" "),s("p",[t._v("通过选择器一个线程可以查询到多个通道的IO事件的就绪状态。"),s("br"),t._v("\n有了选择器可以大大减少系统的开销，因为如果没有选择器，没有连接就需要单独一个线程来查询当前连接是否已经准备就绪")]),t._v(" "),s("h3",{attrs:{id:"_3-1-4-缓冲区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-缓冲区"}},[t._v("#")]),t._v(" 3.1.4  缓冲区")]),t._v(" "),s("p",[t._v("缓冲区是非阻塞的重要前提。"),s("br"),t._v("\n所谓的通道的读取就是从通道读取到缓冲区中，通道的写入就是从缓冲区写入到通道中。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-1-buffer类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-buffer类"}},[t._v("#")]),t._v(" 3.2.1 Buffer类")]),t._v(" "),s("p",[t._v("NIO的Buffer本质上是一个内存块，既可以读取又可以写入。\n在java NIO中最常见的有八种ByteBuffer、CharBuffer、DoubleBuffer、\nFloatBuffer、IntBuffer、LongBuffer、ShortBuffer、\nMappedByteBuffer，前7种Buffer类型覆盖了能在IO中传输的所有Java\n基本数据类型，第8种类型是一种专门用于内存映射的ByteBuffer类\n型。不同的Buffer子类可以操作的数据类型能够通过名称进行判断，\n比如IntBuffer只能操作Integer类型的对象。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-2-buffer类的重要属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-buffer类的重要属性"}},[t._v("#")]),t._v(" 3.2.2 Buffer类的重要属性")]),t._v(" "),s("p",[t._v("Buffer的"),s("strong",[t._v("子类")]),t._v("会拥有一块内存，作为读写缓冲区，但是读写缓冲区并没有定义在基类中，而是定义在子类中。")])])}),[],!1,null,null,null);a.default=_.exports}}]);