(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{250:function(t,a,v){"use strict";v.r(a);var _=v(4),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[t._v("设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。")]),t._v(" "),v("h3",{attrs:{id:"gof-四人帮-全拼gang-of-four"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gof-四人帮-全拼gang-of-four"}},[t._v("#")]),t._v(" GOF（四人帮，全拼Gang of Four）")]),t._v(" "),v("p",[t._v("在《设计模式 可复用面向对象软件的基础》中共提到了23中设计模式。")]),t._v(" "),v("p",[t._v("他们所提出的设计模式主要是基于以下的面向对象设计原则。")]),t._v(" "),v("p",[t._v("对接口编程而不是对实现编程。")]),t._v(" "),v("p",[t._v("优先使用对象组合而不是继承。")]),t._v(" "),v("h2",{attrs:{id:"设计模式总览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式总览"}},[t._v("#")]),t._v(" 设计模式总览")]),t._v(" "),v("p",[t._v("Abstract Factory:提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。")]),t._v(" "),v("p",[t._v("Adapter：将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。")]),t._v(" "),v("p",[t._v("Bridge：将抽象部分和实现部分分离，使它们可以独立地变化。")]),t._v(" "),v("p",[t._v("Builder：将一个复杂的对象的构建和它的表示分离，使得同样的构建过程可以创建不同的表示。")]),t._v(" "),v("p",[t._v("Chain of Responsibility：为解除请求的发送者和接收者之间耦合，而使多个对象都有机会处理这个请求。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它。")]),t._v(" "),v("p",[t._v("Command：将一个请求封装成对象，从而使你使用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可取消的操作。")]),t._v(" "),v("p",[t._v("Composite：将对象组合成树形结构以表示“部分-整体”的层次结构。Composite使得客户对单个对象和复合对象的使用具有一致性。")]),t._v(" "),v("p",[t._v("Decorator：动态地给一个对象添加一些额外的职责。就扩展功能而言，Decorator模式比生成子类方式更为灵活。")]),t._v(" "),v("p",[t._v("Facade：为子系统中的一组接口提供一个一致的界面，Facade模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。")]),t._v(" "),v("p",[t._v("Factory Method：定义一个用于创建对象的接口，让子类决定将哪一个类实例化。Factory Method使一个类的实例化延迟到其子类。")]),t._v(" "),v("p",[t._v("Flyweight：运用共享技术有效地支持大量细粒度的对象。")]),t._v(" "),v("p",[t._v("Interpreter：给定一个语言，定义它的文法的一种表示，并定义一个解释器，该解释器使用该表示来解释语句中的句子。")]),t._v(" "),v("p",[t._v("Iterator：提供一种方法顺序访问一个聚合对象中的各个元素，而不需要暴露该对象的内部表示。")]),t._v(" "),v("p",[t._v("Mediator：用一个中介对象来封装一系列的对象交互。中介者使各个对象不需要显式地互相引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。")]),t._v(" "),v("p",[t._v("Memento：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可以将该对象恢复到保存的状态。")]),t._v(" "),v("p",[t._v("Observer：定义对象间的一种一对多的依赖关系，以便当一个对象发生改变时，所有依赖它的对象都能得到通知并自动刷新。")]),t._v(" "),v("p",[t._v("Protorype：用原型实例指定创建对象的种类，并通过拷贝这个实例来创建新的对象。")]),t._v(" "),v("p",[t._v("Proxy：为其他对象提供一个代理以控制对这个对象的访问。")]),t._v(" "),v("p",[t._v("Singleton：保证一个类仅有一个实例，并提供一个它的全局访问点。")]),t._v(" "),v("p",[t._v("State：允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它所属的类型。")]),t._v(" "),v("p",[t._v("Strategy：定义一系列算法，将其一个个封装起来，并且使他们可相互替换。本模式使得算法的变化可独立于使用它的客户。")]),t._v(" "),v("p",[t._v("Template Method：定义一个操作中的算法的骨架，将一些步骤延迟到子类中。它使子类可以不改变算法的结构即可重定义该算法的某些特定步骤。")]),t._v(" "),v("p",[t._v("Visitor：表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的前提下定义作用于这些元素的新操作。")]),t._v(" "),v("h3",{attrs:{id:"组织编目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组织编目"}},[t._v("#")]),t._v(" 组织编目")]),t._v(" "),v("p",[t._v("根据"),v("strong",[t._v("目的")]),t._v("可以将设计模式分为一下几种：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/image-20220228113136590.png",alt:"image-20220228113136590"}})]),t._v(" "),v("p",[t._v("根据相关性给出了模式的关系的图形说明：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/frunoob/images/image-20220228124726336.png",alt:"image-20220228124726336"}})]),t._v(" "),v("h2",{attrs:{id:"设计模式的七大原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式的七大原则"}},[t._v("#")]),t._v(" 设计模式的七大原则")]),t._v(" "),v("p",[t._v("单一职责原则；开放封闭原则；里氏替换原则；依赖倒置原则；接口隔离原则；")]),t._v(" "),v("p",[t._v("迪米特法则：一个对象应该对其他对象保持最少了解， 通俗的讲就是一个类对自己依赖的类知道的越少越好，也就是对于被依赖的类，向外公开的方法应该尽可能的少。；能由第三方调用就不直接互相调用，降低类之间的耦合度。")]),t._v(" "),v("h2",{attrs:{id:"创建型-creational"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建型-creational"}},[t._v("#")]),t._v(" 创建型(creational)")]),t._v(" "),v("h2",{attrs:{id:"结构性-structural"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构性-structural"}},[t._v("#")]),t._v(" 结构性(structural)")]),t._v(" "),v("h2",{attrs:{id:"行为型-behavioral"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#行为型-behavioral"}},[t._v("#")]),t._v(" 行为型(behavioral)")]),t._v(" "),v("h2",{attrs:{id:"单例模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),v("p",[t._v("单例模式（Singleton Pattern）是 Java 中最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。")]),t._v(" "),v("p",[t._v("这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。")]),t._v(" "),v("p",[t._v("注意：")]),t._v(" "),v("p",[t._v("1、单例类只能有一个实例。\n2、单例类必须自己创建自己的唯一实例。\n3、单例类必须给所有其他对象提供这一实例。")]),t._v(" "),v("p",[t._v("意图：保证一个类仅有一个实例，并提供一个访问它的全局访问点。")]),t._v(" "),v("p",[t._v("主要解决：一个全局使用的类频繁地创建与销毁。")]),t._v(" "),v("p",[t._v("何时使用：当您想控制实例数目，节省系统资源的时候。")]),t._v(" "),v("p",[t._v("如何解决：判断系统是否已经有这个单例，如果有则返回，如果没有则创建。")]),t._v(" "),v("p",[t._v("关键代码：构造函数是私有的。")]),t._v(" "),v("p",[t._v("应用实例：")]),t._v(" "),v("p",[t._v("1、一个班级只有一个班主任。\n2、Windows 是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。\n3、一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。\n优点：")]),t._v(" "),v("p",[t._v("1、在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。\n2、避免对资源的多重占用（比如写文件操作）。\n缺点：没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。")]),t._v(" "),v("p",[t._v("使用场景：")]),t._v(" "),v("p",[t._v("1、要求生产唯一序列号。\n2、WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。\n3、创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。\n注意事项：getInstance() 方法中需要使用同步锁 synchronized (Singleton.class) 防止多线程同时进入造成 instance 被多次实例化。")]),t._v(" "),v("h2",{attrs:{id:"工厂模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),v("p",[t._v("通过调用工厂类中的方法获取到指定的对象，方便对象的管理，控制反转，将对象的管理权给工厂。")])])}),[],!1,null,null,null);a.default=r.exports}}]);