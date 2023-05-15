(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{281:function(t,v,a){"use strict";a.r(v);var e=a(5),_=Object(e.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java多线程机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java多线程机制"}},[t._v("#")]),t._v(" Java多线程机制")]),t._v(" "),a("h2",{attrs:{id:"thread类中的三个方法的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread类中的三个方法的使用"}},[t._v("#")]),t._v(" Thread类中的三个方法的使用")]),t._v(" "),a("ul",[a("li",[t._v("void sleep（long millis）静态方法，线程进入阻塞状态，在指定时间（单位为毫秒）到达之后进入就绪状态。")]),t._v(" "),a("li",[t._v("interrupt（）方法，中断线程所处的阻塞状态，使线程恢复到就绪状态。")]),t._v(" "),a("li",[t._v("void join（）方法，使得加入的线程完成之后，当前线程才继续往下执行。")])]),t._v(" "),a("h2",{attrs:{id:"线程调度模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程调度模式"}},[t._v("#")]),t._v(" 线程调度模式")]),t._v(" "),a("p",[t._v("同一时刻如果有多个线程处于就绪状态，则它们需要排队等待调度程序分配 CPU 资源。")]),t._v(" "),a("p",[t._v("就绪状态的线程按优先级排队，线程调度依据的是优先级基础上的 “先到先服务” 原则。")]),t._v(" "),a("p",[t._v("调度程序负责线程排队和 CPU 资源在线程间的分配，并根据线程调度算法进行调度。")]),t._v(" "),a("p",[t._v("线程调度是抢占式调度，即如果在当前线程执行过程中一个更高优先级的线程进入就绪状态，则这个线程立即被调度执行。")]),t._v(" "),a("p",[t._v("线程的优先级用数字 1 ～ 10 表示（默认值为 5），其中 10 表示优先级最高。")]),t._v(" "),a("h2",{attrs:{id:"线程优先级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程优先级别"}},[t._v("#")]),t._v(" 线程优先级别")]),t._v(" "),a("ul",[a("li",[t._v("setPriority()和getPriority()")])]),t._v(" "),a("ul",[a("li",[t._v("优先级的高低并不是线程执行顺序的唯一因素，只不过是给系统一个建议，具体的执行还是要根据操作系统来决定。")]),t._v(" "),a("li",[t._v("使用 Thread 类中的 isAlive() 方法，来获取当前线程是否在活动状态，没有进入终止状态的都可以称为活动状态。")])]),t._v(" "),a("h2",{attrs:{id:"守护线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#守护线程"}},[t._v("#")]),t._v(" 守护线程")]),t._v(" "),a("p",[t._v("守护线程是为其他线程的运行提供便利的线程。")]),t._v(" "),a("p",[t._v("Java 的垃圾收集机制中的一些实现就使用了守护线程。")]),t._v(" "),a("p",[t._v("程序可以包含守护线程和用户线程，当程序只有守护线程时，该程序才能真正结束运行。")]),t._v(" "),a("p",[t._v("如果要使一个线程成为守护线程，则必须在调用它的 start() 方法之前，调用线程的 setDaemon(true) 方法。并且可以使用 isDaemon() 方法的返回值（ true 或 false ）判断一个线程是否为守护线程。")]),t._v(" "),a("p",[t._v("Thread 类中提供的方法：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("public final void setDaemon(boolean on)")])]),t._v(" "),a("p",[t._v("当 on 设置为 true 时，该线程为守护线程；当 on 设置为 false 时，该线程为用户线程；默认情况下是 false。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("public final boolean isDaemon()")])]),t._v(" "),a("p",[t._v("判断当前线程是否为守护线程。true - 是，false - 否。")])])]),t._v(" "),a("p",[t._v("这两个方法都是被 final 修饰的，也就是说这两个方法只能被调用，不能被重写。")]),t._v(" "),a("h2",{attrs:{id:"多线程数据共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程数据共享"}},[t._v("#")]),t._v(" 多线程数据共享")]),t._v(" "),a("p",[t._v("多线程程序中各个线程大多是独立运行的，但在真正的应用中，程序中的多个线程通常以某种方式进行通信或共享数据。在这种情况下，必须使用同步机制来确保数值被正确地传递，并防止数据不一致。")]),t._v(" "),a("h2",{attrs:{id:"一个线程的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个线程的生命周期"}},[t._v("#")]),t._v(" 一个线程的生命周期")]),t._v(" "),a("p",[t._v("线程是一个动态执行的过程，它也有一个从产生到死亡的过程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202202201131553.jpeg",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("新建状态:")]),t._v(" "),a("p",[t._v("使用 "),a("strong",[t._v("new")]),t._v(" 关键字和 "),a("strong",[t._v("Thread")]),t._v(" 类或其子类建立一个线程对象后，该线程对象就处于新建状态。它保持这个状态直到程序 "),a("strong",[t._v("start()")]),t._v(" 这个线程。")])]),t._v(" "),a("li",[a("p",[t._v("就绪状态:")]),t._v(" "),a("p",[t._v("当线程对象调用了start()方法之后，该线程就进入就绪状态。就绪状态的线程处于就绪队列中，要等待JVM里线程调度器的调度。")])]),t._v(" "),a("li",[a("p",[t._v("运行状态:")]),t._v(" "),a("p",[t._v("如果就绪状态的线程获取 CPU 资源，就可以执行 "),a("strong",[t._v("run()")]),t._v("，此时线程便处于运行状态。处于运行状态的线程最为复杂，它可以变为阻塞状态、就绪状态和死亡状态。")])]),t._v(" "),a("li",[a("p",[t._v("阻塞状态:")]),t._v(" "),a("p",[t._v("如果一个线程执行了sleep（睡眠）、suspend（挂起）等方法，失去所占用资源之后，该线程就从运行状态进入阻塞状态。在睡眠时间已到或获得设备资源后可以重新进入就绪状态。可以分为三种：")]),t._v(" "),a("ul",[a("li",[t._v("等待阻塞：运行状态中的线程执行 wait() 方法，使线程进入到等待阻塞状态。")]),t._v(" "),a("li",[t._v("同步阻塞：线程在获取 synchronized 同步锁失败(因为同步锁被其他线程占用)。")]),t._v(" "),a("li",[t._v("其他阻塞：通过调用线程的 sleep() 或 join() 发出了 I/O 请求时，线程就会进入到阻塞状态。当sleep() 状态超时，join() 等待线程终止或超时，或者 I/O 处理完毕，线程重新转入就绪状态。")])])]),t._v(" "),a("li",[a("p",[t._v("死亡状态:")]),t._v(" "),a("p",[t._v("一个运行状态的线程完成任务或者其他终止条件发生时，该线程就切换到终止状态。")]),t._v(" "),a("h2",{attrs:{id:"创建一个线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个线程"}},[t._v("#")]),t._v(" 创建一个线程")]),t._v(" "),a("p",[t._v("Java 提供了三种创建线程的方法：")]),t._v(" "),a("ul",[a("li",[t._v("通过实现 Runnable 接口；")]),t._v(" "),a("li",[t._v("通过继承 Thread 类本身；")]),t._v(" "),a("li",[t._v("通过 Callable 和 Future 创建线程。")])]),t._v(" "),a("h2",{attrs:{id:"thread-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-方法"}},[t._v("#")]),t._v(" Thread 方法")]),t._v(" "),a("p",[t._v("下表列出了Thread类的一些重要方法：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("序号")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("方法描述")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public void start()")]),t._v(" 使该线程开始执行；"),a("strong",[t._v("Java")]),t._v(" 虚拟机调用该线程的 run 方法。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public void run()")]),t._v(" 如果该线程是使用独立的 Runnable 运行对象构造的，则调用该 Runnable 对象的 run 方法；否则，该方法不执行任何操作并返回。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public final void setName(String name)")]),t._v(" 改变线程名称，使之与参数 name 相同。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public final void setPriority(int priority)")]),t._v("  更改线程的优先级。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public final void setDaemon(boolean on)")]),t._v(" 将该线程标记为守护线程或用户线程。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public final void join(long millisec)")]),t._v(" 等待该线程终止的时间最长为 millis 毫秒。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public void interrupt()")]),t._v(" 中断线程。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("public final boolean isAlive()")]),t._v(" 测试线程是否处于活动状态。")])])])]),t._v(" "),a("h2",{attrs:{id:"创建线程的三种方式的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建线程的三种方式的对比"}},[t._v("#")]),t._v(" 创建线程的三种方式的对比")]),t._v(" "),a("ul",[a("li",[t._v("采用实现 Runnable、Callable 接口的方式创建多线程时，线程类只是实现了 Runnable 接口或 Callable 接口，还可以继承其他类。")]),t._v(" "),a("li",[t._v("使用继承 Thread 类的方式创建多线程时，编写简单，如果需要访问当前线程，则无需使用 Thread.currentThread() 方法，直接使用 this 即可获得当前线程。")])]),t._v(" "),a("h2",{attrs:{id:"通过对象锁来实现多线程同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过对象锁来实现多线程同步"}},[t._v("#")]),t._v(" "),a("strong",[t._v("通过对象锁来实现多线程同步")])]),t._v(" "),a("p",[t._v("当遇到多个线程同时执行，而我们不希望每个线程交替执行时，就可以使用 synchronzied 关键字对同步代码块进行局部封锁，从而实现同步。")]),t._v(" "),a("p",[t._v("多线程同步依靠的是对象锁机制，"),a("code",[t._v("synchronized")]),t._v(" 关键字就是利用锁来实现对共享资源的互斥访问。")]),t._v(" "),a("p",[t._v("实现多线程同步的方法之一就是同步代码块，其语法形式如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同步代码块 }")]),t._v("\n")])])]),a("p",[t._v("实现同步块处理的方式：")]),t._v(" "),a("p",[t._v("​\t1. synchronized(lock){...}，lock 需要是准备好的任何对象。")]),t._v(" "),a("p",[t._v("​\t2. synchronized(this){...}，当程序中只有一层同步块处理时，可以使用 this 关键字作为竞争对象，简化代码的书写。")]),t._v(" "),a("h2",{attrs:{id:"使用-synchronized-关键字修饰方法来实现线程同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-synchronized-关键字修饰方法来实现线程同步"}},[t._v("#")]),t._v(" "),a("strong",[t._v("使用 synchronized 关键字修饰方法来实现线程同步")])]),t._v(" "),a("p",[t._v("实现多线程同步的推荐方法是同步方法，其语法形式如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("访问修饰符 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" 返回类型 方法名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同步方法体内代码块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("每个类实例都对应一把锁，每个 synchronized 方法都必须获得调用该方法的类实例的锁方能执行，否则所属线程阻塞。")]),t._v(" "),a("p",[t._v("synchronized 方法一旦执行，就独占该锁，直到该方法返回时才将锁释放，此后被阻塞的线程方能获得该锁，重新进入就绪状态。")]),t._v(" "),a("p",[t._v("这种机制确保了同一时刻对于每个类实例，其所有声明为 synchronized 的方法中至多只有一个处于就绪状态，从而有效避免了类成员变量的访问冲突。")]),t._v(" "),a("h2",{attrs:{id:"线程死锁以及如何解决死锁问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程死锁以及如何解决死锁问题"}},[t._v("#")]),t._v(" "),a("strong",[t._v("线程死锁以及如何解决死锁问题")])]),t._v(" "),a("p",[a("strong",[t._v("概念")]),t._v("：如果线程 A 只有等待线程 B 的完成才能继续，而在线程 B 中又要等待线程 A 的资源，那么这两个线程相互等待对方释放锁时就会发生死锁。出现死锁后，不会出现异常，因此不会有任何提示，只是相关线程都处于阻塞状态，无法继续运行。")]),t._v(" "),a("p",[a("strong",[t._v("死锁产生的必要条件：")])]),t._v(" "),a("ul",[a("li",[t._v("互斥条件：一个资源只能被一个线程使用。")]),t._v(" "),a("li",[t._v("请求与保持条件：一个线程因请求资源而堵塞时，对已获得的资源保持不放。")]),t._v(" "),a("li",[t._v("不剥夺条件：线程获得的资源，在未使用前，不能强行剥夺。")]),t._v(" "),a("li",[t._v("循环等待条件： 若干线程之间存在一种头尾相接的循环等待资源关系。")])])])]),t._v(" "),a("h2",{attrs:{id:"wait-、sleep-和yield-方法的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-、sleep-和yield-方法的区别"}},[t._v("#")]),t._v(" Wait()、sleep()和yield()方法的区别")]),t._v(" "),a("p",[t._v("1、所属类不同：wait()是Object类中的非静态方法；sleep()是Thread类中的静态方法；yield()也是Thread类中的静态方法。")]),t._v(" "),a("p",[t._v("2、作用不同：wait()用于线程同步或者线程之间进行通信；sleep()用于休眠当前线程，并在指定的时间点被自动唤醒；yield()临时暂停当前正在执行的线程，来让有同样优先级的正在等待的线程有机会执行（如果等待的线程优先级较低，则当前线程继续执行）。")]),t._v(" "),a("p",[t._v("3、释放资源：wait()会释放线程所占用的锁和管程；sleep()释放线程所占用的锁，但不释放管程；yield()仅释放线程所占用的CPU。")]),t._v(" "),a("p",[t._v("4、应用场景不同：wait()适用于同步代码块中；sleep()休眠当前线程，应用场景没有限制；yield()暂停当前线程，应用场景也没有限制。")]),t._v(" "),a("p",[t._v("5、被唤醒后的状态不同：wait()被notify()或者notifyAll()唤醒后，先进入阻塞状态（先获得锁），然后进入就绪状态；sleep()被唤醒后，进入就绪状态；yield()不需要唤醒，一直处于就绪状态，获得CPU后继续运行。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("线程是系统中的最小执行单元；同一进程中有多个线程，线程间可以共享资源；")]),t._v(" "),a("li",[t._v("自定义线程类有两种方式：实现 "),a("code",[t._v("Runnable")]),t._v(" 接口，或继承 "),a("code",[t._v("Thread")]),t._v(" 类。由于我们推荐使用面向接口的编程风格，因此推荐使用前者；")]),t._v(" "),a("li",[t._v("线程的逻辑代码写在 "),a("code",[t._v("run()")]),t._v(" 方法中，但是启动线程的方法是 "),a("code",[t._v("start()")]),t._v(" 方法；")]),t._v(" "),a("li",[t._v("线程的生命周期可以分为新建、就绪、运行、阻塞、死亡等阶段；")]),t._v(" "),a("li",[t._v("线程可以使用 "),a("code",[t._v("synchronized")]),t._v(" 关键字进行数据同步，并且 "),a("code",[t._v("synchronized()")]),t._v(" 的参数可以是任何类型的对象；")]),t._v(" "),a("li",[t._v("线程可以通过 "),a("code",[t._v("wait()")]),t._v(" 和 "),a("code",[t._v("notify()")]),t._v(" / "),a("code",[t._v("notifyAll()")]),t._v(" 方法进行通信，并且这三个方法都必须写在被 "),a("code",[t._v("synchronized")]),t._v(" 修饰的代码块中。"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/202202201458338.png",alt:"图片描述"}})])])])}),[],!1,null,null,null);v.default=_.exports}}]);