(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{547:function(e,r,n){"use strict";n.r(r);var v=n(5),t=Object(v.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"朗新科技有限公司一面准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#朗新科技有限公司一面准备"}},[e._v("#")]),e._v(" 朗新科技有限公司一面准备")]),e._v(" "),n("p",[n("strong",[e._v("自我介绍")]),n("br"),e._v("\n面试官你好，我就读于河北工程大学软件工程专业，本科阶段学习的课程有Java程序开发，C/C++基础，Linux基础，还有计算机网络，操作系统，计组，数据结构与算法等课程。")]),e._v(" "),n("p",[n("strong",[e._v("JVM的理解")]),n("br"),e._v("\nJVM是包含在JDK中的，主要是用来对字节码文件进行解释的。也正是有了JVM，才能实现在不同平台上运行同一个字节码文件。\nJVM虚拟机最主要的就是他的内存分配了，JVM虚拟机主要分为")]),e._v(" "),n("p",[n("strong",[e._v("多线程了解吗，创建多线程的方式")])]),e._v(" "),n("p",[e._v("一般情况下只有一个线程，只有当主线程中的方法执行完毕才能继续执行下面的语句。为了充分的利用这个多核cpu，于是出现了多线程。"),n("br"),e._v("\n创建多线程的方式有很多，比如"),n("br"),e._v("\n继承Thread类，重写run方法；"),n("br"),e._v("\n实现Runnable方法，重写run方法；"),n("br"),e._v("\n实现Callable接口，重写call方法，"),n("br"),e._v("\n使用线程池来创建。")]),e._v(" "),n("p",[n("strong",[e._v("线程池了解吗，如何创建线程池？")])]),e._v(" "),n("p",[e._v("使用构造方法来实现ThreadPoolExecutor。"),n("br"),e._v("\n它包含了四个构造方法。其中的参数我们来看看\ncorePoolSize:核心线程数量；"),n("br"),e._v("\nmaxPoolSize：最大线程数；"),n("br"),e._v("\nKeepAliveTime TimeUnit：核心程序外的线程最大存活时间"),n("br"),e._v("\nTimeUnit： 时间单位"),n("br"),e._v("\nBlockingQueue： 等待队列；"),n("br"),e._v("\nThreadFactory： 线程工厂"),n("br"),e._v("\nRejectedExecutionHandler： 拒绝策略  （抛异常，不处理，丢弃最早未处理的任务）")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202204181315912.png",alt:""}})]),e._v(" "),n("p",[e._v("使用Executors类来创建：弊端是FixedThreadPool（线程数固定）和SingleThreadExcutor（只有一个线程）允许的i请求队列的最大长度为整数最大长度，可能导致内存溢出。"),n("br"),e._v("\nCachedThreadPool（线程数不确定，动态可变）和ScheduledThreadPool：允许的创建线程数量为整数最大值，可能创建大量线程造成内存溢出。")]),e._v(" "),n("p",[n("strong",[e._v("SpringMVC")]),n("br"),e._v("\nModel模型，视图View，控制器Controller  将逻辑，数据和显示分开。"),n("br"),e._v("\n主要是为了降低业务逻辑和视图之间的耦合"),n("br"),e._v("\nmodel层主要是业务逻辑，保存数据的状态"),n("br"),e._v("\nview是显示页面"),n("br"),e._v("\ncontroller是获取表单数据的，跳转指定页面")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202204181321772.png",alt:""}})]),e._v(" "),n("p",[e._v("一种是这样的"),n("br"),e._v(" "),n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202204181328749.png",alt:""}})]),e._v(" "),n("p",[e._v("及jsp既是业务逻辑又是表现层")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202204181329606.png",alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202204181329599.png",alt:""}})]),e._v(" "),n("p",[e._v("流程说明（重要）：")]),e._v(" "),n("p",[e._v("客户端（浏览器）发送请求，直接请求到 DispatcherServlet。\nDispatcherServlet 根据请求信息调用 HandlerMapping，解析请求对应的 Handler。\n解析到对应的 Handler（也就是我们平常说的 Controller 控制器）后，开始由 HandlerAdapter 适配器处理。\nHandlerAdapter 会根据 Handler来调用真正的处理器开处理请求，并处理相应的业务逻辑。\n处理器处理完业务后，会返回一个 ModelAndView 对象，Model 是返回的数据对象，View 是个逻辑上的 View。\nViewResolver 会根据逻辑 View 查找实际的 View。\nDispaterServlet 把返回的 Model 传给 View（视图渲染）。\n把 View 返回给请求者（浏览器）")]),e._v(" "),n("p",[e._v("5.SpringMVC用过吗，说说怎么从接口到浏览器如何渲染的")]),e._v(" "),n("p",[e._v("用户发起请求到前端控制器，前端控制器通过处理器映射器查找hander，处理器返回执行链")]),e._v(" "),n("p",[e._v("6.Spring的事务了解吗？（答了两种）Spring事务是如何实现的（不知道，扯到了mysql的事务undo log）")]),e._v(" "),n("p",[e._v("7.Java的HashMap说说（说了数据模型 红黑树 链表 数组 说了扩容）")]),e._v(" "),n("p",[e._v("https://cdn.jsdelivr.net/gh/frunoob/images/202202181730989.png")]),e._v(" "),n("p",[e._v("8.Java的equals和==区别？")]),e._v(" "),n("p",[e._v("9.说说http的get和post方法")]),e._v(" "),n("p",[e._v("10.说说三次握手四次挥手")]),e._v(" "),n("p",[e._v("11.来谈谈你对mysql的理解（说了索引数据模型，事务）")]),e._v(" "),n("p",[e._v("12.你说了索引，索引类型有几种呢？")]),e._v(" "),n("p",[e._v("13.你说了联合索引，联合索引有什么规则吗（最左匹配）")]),e._v(" "),n("p",[e._v("14.了解Redis吗？")]),e._v(" "),n("p",[e._v("15.Redis的线程模型？")])])}),[],!1,null,null,null);r.default=t.exports}}]);