(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{445:function(o,r,i){"use strict";i.r(r);var t=i(24),e=Object(t.a)({},(function(){var o=this,r=o.$createElement,i=o._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[i("h1",{attrs:{id:"类和对象面试题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#类和对象面试题"}},[o._v("#")]),o._v(" 类和对象面试题")]),o._v(" "),i("h2",{attrs:{id:"_1-和-的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-和-的区别"}},[o._v("#")]),o._v(" 1.& 和 && 的区别")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v('    &运算符有两种用法：(1) 按位与；(2) 逻辑与。\n    &&运算符是短路与运算。逻辑与跟短路与的差别是非常巨大的，虽然二者都要求运算符左右两端的布尔值都是 true 整个表达式的值才是 true。\n    &&之所以称为短路运算是因为，如果&&左边的表达式的值是 false，右边的表达式会被直接短路掉，不会进行运算。\n    很多时候我们可能都需要用&&而不是&，例如在验证用户登录时判定用户名不是 null 而且不是空字符串，应当写为 username != null &&!username.equals("")，二者的顺序不能交换，更不能用&运算符，因为第一个条件如果不成立，根本不能进行字符串的 equals 比较，否则会产生 NullPointerException 异常。注意：逻辑或运算符（|）和短路或运算符（||）的差别也是如此。 \n')])]),o._v(" "),i("h2",{attrs:{id:"_2-两个对象值相同-x-equals-y-true-但却可有不同的-hashcode-这句话对不对"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-两个对象值相同-x-equals-y-true-但却可有不同的-hashcode-这句话对不对"}},[o._v("#")]),o._v(" 2. 两个对象值相同 (x.equals(y) == true) ，但却可有不同的 hashCode，这句话对不对？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    不对，如果两个对象 x 和 y 满足 x.equals(y) == true，它们的哈希码（hashCode）应当相同。\n    Java 对于 eqauls 方法和 hashCode 方法是这样规定的："),i("br",{staticStyle:{"box-sizing":"border-box"}}),o._v("\n    (1) 如果两个对象相同（equals 方法返回 true），那么它们的 hashCode 值一定要相同；\n    (2) 如果两个对象的 hashCode 相同，它们并不一定相同。 \n")])]),o._v(" "),i("h2",{attrs:{id:"_3-构造器-constructor-是否可被重写-override"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造器-constructor-是否可被重写-override"}},[o._v("#")]),o._v(" 3. 构造器（constructor）是否可被重写（override）？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("   构造器不能被继承，因此不能被（子类）重写。\n")])]),o._v(" "),i("h2",{attrs:{id:"_4-抽象类-abstract-class-和接口-interface-有什么异同"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-抽象类-abstract-class-和接口-interface-有什么异同"}},[o._v("#")]),o._v(" 4. 抽象类 (abstract class) 和接口 (interface) 有什么异同？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    不同：\n    1. 抽象类中可以定义构造器，接口中不可以。\n    2. 抽象类可以有抽象方法和具体方法，接口中只可以有抽象方法。\n    3. 抽象类中的成员可以是 private、默认、protected、public，接口中的成员全都是 public 的 (1.9 后可以有私有方法）\n    4. 抽象类中可以定义成员变量，接口中定义的成员变量实际上都是常量。\n    5. 有抽象方法的类必须被声明为抽象类，而抽象类未必要有抽象方法\n    6. 抽象类中可以包含静态方法，接口中不能有静态方法（从 1.8 开始可以有）。\n    7. 一个类只能继承一个抽象类，一个类可以实现多个接口。\n    相同：\n    1. 不能够实例化\n    2. 可以将抽象类和接口类型作为引用类型\n    3. 一个类如果继承了某个抽象类或者实现了某个接口都需要对其中的抽象方法全部进行实现，否则该类仍然需要被声明为抽象类\n")])]),o._v(" "),i("h2",{attrs:{id:"_5-和-equals-的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-和-equals-的区别"}},[o._v("#")]),o._v(" 5.==和 equals 的区别？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    equals 和== 最大的区别是一个是方法一个是运算符。 \n    ==：如果比较的对象是基本数据类型，则比较的是数值是否相等；如果比较的是引用数据类型，则比较的是对象的地址值是否相等。\n    equals()：用来比较方法两个对象的内容是否相等。\n    注意：equals 方法不能用于基本数据类型的变量，如果没有对 equals 方法进行重写，则比较的是引用类型的变量所指向的对象的地址。\n")])]),o._v(" "),i("h2",{attrs:{id:"_6-this-和-super-区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-this-和-super-区别"}},[o._v("#")]),o._v(" 6.this 和 super 区别？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    this 是代表本类对象的引用。 \n    super 是代表父类存储空间的标识（可以理解为父类的引用，可以操作父类的成员） \n    怎么用呢？ \n    A: 调用成员变量 \n        this. 成员变量 调用本类的成员变量 \n        super. 成员变量 调用父类的成员变量 \n    B: 调用构造方法 \n           this(...)  调用本类的构造方法 \n           super(...)  调用父类的构造方法 \n    C: 调用成员方法 \n        this. 成员方法  调用本类的成员方法 \n        super. 成员方法 调用父类的成员方法 \n")])]),o._v(" "),i("h2",{attrs:{id:"_7-说出-java-lang-object-类的常用方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-说出-java-lang-object-类的常用方法"}},[o._v("#")]),o._v(" 7. 说出 java.lang.Object 类的常用方法")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    (1)public boolean equals(java.lang.Object) ：比较对象的地址值是否相等，如果子类重写，则比较对象的内容是否相等；\n    (2)public native int hashCode() ：获取哈希码\n    (3)public java.lang.String toString() ：把数据转变成字符串\n    (4)public final native java.lang.Class getClass() ：获取类结构信息\n    (5)protected void finalize() throws java.lang.Throwable ：垃圾回收前执行的方法\n    (6)protected native Object clone() throws java.lang.CloneNotSupportedException： 克隆\n    (7)public final void wait() throws java.lang.InterruptedException ：多线程中等待功能\n    (8)public final native void notify()： 多线程中唤醒功能\n    (9)public final native void notifyAll()： 多线程中唤醒所有等待线程的功能 \n")])]),o._v(" "),i("h2",{attrs:{id:"_8-string-s-new-string-xyz-创建了几个-string-对象"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_8-string-s-new-string-xyz-创建了几个-string-对象"}},[o._v("#")]),o._v(" 8.String s=new String(“xyz”); 创建了几个 String 对象？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    二个。\n    “xyz”放在字符串常量池（如果池中已经存在 xyz 则不会再次创建）。\n    new String 放在堆里。\n")])]),o._v(" "),i("h2",{attrs:{id:"_9-什么是字符串常量池"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_9-什么是字符串常量池"}},[o._v("#")]),o._v(" 9. 什么是字符串常量池？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    字符串常量池位于堆内存中，专门用来存储字符串常量，可以提高内存的使用率，避免开辟多块空间存储相同的字符串。\n    在创建字符串时 JVM 会首先检查字符串常量池，如果该字符串已经存在池中，则返回它的引用。如果不存在，则实例化一个字符串放到池中，并返回其引用。\n")])]),o._v(" "),i("h2",{attrs:{id:"_10-string-类有那些常用方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-string-类有那些常用方法"}},[o._v("#")]),o._v(" 10.String 类有那些常用方法？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("     length(): 返回字符串长度\n     charAt(): 返回指定索引处的字符\n     substring(): 截取字符串\n     trim(): 去字符串两端空白\n     split(): 分割字符串，返回一个分割后的字符串数组\n     replace(): 字符串替换\n     indexOf(): 返回指定字符的索引\n")])]),o._v(" "),i("h2",{attrs:{id:"_11-stringbuffer-和-stringbuilder-区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_11-stringbuffer-和-stringbuilder-区别"}},[o._v("#")]),o._v(" 11.StringBuffer 和 StringBuilder 区别？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    StringBuffer 是线程安全的（synchronized），而 StringBuilder 不是，所以 StringBuilder 效率更高，锁的获取和释放会带来开销。\n")])]),o._v(" "),i("h2",{attrs:{id:"_12-访问控制符区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_12-访问控制符区别"}},[o._v("#")]),o._v(" 12. 访问控制符区别？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("table",{staticStyle:{"box-sizing":"border-box","border-collapse":"collapse","border-spacing":"0px",display:"block",width:"467px",overflow:"auto","margin-top":"0px","margin-bottom":"16px"}},[i("tbody",{staticStyle:{"box-sizing":"border-box"}},[i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(255, 255, 255)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("访问控制符")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("当前类")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("同一包")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("子类")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("其他包")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(246, 248, 250)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("public")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(255, 255, 255)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("protected")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("N")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(246, 248, 250)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("default")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("N")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("N")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(255, 255, 255)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("private")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("Y")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("N")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("N")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("N")])])])])]),o._v(" "),i("h2",{attrs:{id:"_13-static-关键字作用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_13-static-关键字作用"}},[o._v("#")]),o._v(" 13.static 关键字作用？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("     1.static 变量（静态变量）: 不用创建对象，通过类名直接访问\n     2.static 方法（静态方法）: 不用创建对象，通过类名直接访问\n     3.static 代码块（静态代码块）: 类加载时执行一次\n ")])]),o._v(" "),i("h2",{attrs:{id:"_14-final-关键字作用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_14-final-关键字作用"}},[o._v("#")]),o._v(" 14.final 关键字作用？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    1. 修饰类：类不能被继承\n    2. 修饰方法：方法不能被重写\n    3. 变量：变量值不能被修改\n")])]),o._v(" "),i("h2",{attrs:{id:"_15-面向对象五大基本原则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_15-面向对象五大基本原则"}},[o._v("#")]),o._v(" 15. 面向对象五大基本原则？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    1. 单一职责原则：一个类，最好只做一件事，只有一个引起他的变化。\n    2. 开放封闭原则：对扩展开放，对修改封闭。\n    3. 里氏替换原则：子类必须能够替换父类。\n    4. 依赖倒置原则：依赖于抽象。\n    5. 接口隔离原则：使用多个小的专门的接口，不要使用一个大的总的接口。\n")])]),o._v(" "),i("h2",{attrs:{id:"_16-接口和抽象类区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_16-接口和抽象类区别"}},[o._v("#")]),o._v(" 16. 接口和抽象类区别？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("table",{staticStyle:{"box-sizing":"border-box","border-collapse":"collapse","border-spacing":"0px",display:"block",width:"467px",overflow:"auto","margin-top":"0px","margin-bottom":"16px"}},[i("tbody",{staticStyle:{"box-sizing":"border-box"}},[i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(255, 255, 255)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("不同点")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("抽象类")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("接口")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(246, 248, 250)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("关键字")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("abstract")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("interface")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(255, 255, 255)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("实现")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("extends")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("implements")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(246, 248, 250)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("构造函数")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("有")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("无")])]),i("tr",{staticStyle:{"box-sizing":"border-box","background-color":"rgb(255, 255, 255)","border-top":"1px solid rgb(198, 203, 209)"}},[i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("属性")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("随意")]),i("td",{staticStyle:{"box-sizing":"border-box",padding:"6px 13px",border:"1px solid rgb(223, 226, 229)"}},[o._v("static final")])])])])]),o._v(" "),i("h2",{attrs:{id:"_17-重载和重写区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_17-重载和重写区别"}},[o._v("#")]),o._v(" 17. 重载和重写区别？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    重载：在同一个类中，方法名相同参数列表不同。与方法返回值和访问修饰符无关。\n    重写：发生在父子类中，方法名、参数列表相同。抛出异常小于等于父类，访问修饰符大于等于父类。\n")])]),o._v(" "),i("h2",{attrs:{id:"_18-java-创建对象有几种方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_18-java-创建对象有几种方式"}},[o._v("#")]),o._v(" 18. Java 创建对象有几种方式？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    java 中提供了以下四种创建对象的方式：\n    1. new 创建新对象\n    2. 通过反射机制\n    3. 采用 clone 机制\n    4. 通过序列化机制\n")])]),o._v(" "),i("h2",{attrs:{id:"_19-java-中会存在内存泄漏吗-请简单描述。"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_19-java-中会存在内存泄漏吗-请简单描述。"}},[o._v("#")]),o._v(" 19. Java 中会存在内存泄漏吗，请简单描述。")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"16px"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    理论上 Java 因为有垃圾回收机制（GC）不会存在内存泄露问题；然而在实际开发中也会。\n    java 中内存泄露的发生场景，通俗地说，就是程序员可能创建了一个对象，以后一直不再使用这个对象，这个对象却一直被引用，即这个对象无用但是却无法被垃圾回收器回收的，这就是 java 的内存泄露。\n")])]),o._v(" "),i("h2",{attrs:{id:"_20-说明内存泄漏和内存溢出的区别和联系"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_20-说明内存泄漏和内存溢出的区别和联系"}},[o._v("#")]),o._v(" 20. 说明内存泄漏和内存溢出的区别和联系？")]),o._v(" "),i("details",{staticStyle:{"box-sizing":"border-box",display:"block","margin-top":"0px","margin-bottom":"0px !important"}},[i("summary",{staticStyle:{"box-sizing":"border-box","touch-action":"manipulation",display:"list-item",cursor:"pointer",outline:"none"}},[o._v("参考答案")]),i("pre",{staticStyle:{"box-sizing":"border-box","font-size":"14px","font-family":'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"margin-top":"0px","margin-bottom":"1rem",overflow:"visible",display:"block",color:"rgb(33, 37, 41)",position:"relative","word-break":"break-all","border-radius":"4px","white-space":"pre-wrap"}},[o._v("    内存溢出 out of memory，是指程序在申请内存时，没有足够的内存空间供其使用，出现 out of memory；比如申请了一个 integer, 但给它存了 long 才能存下的数，那就是内存溢出。\n    内存泄露 memory leak，是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄露危害可以忽略，但内存泄露堆积后果很严重，无论多少内存，迟早会被占光。\n    memory leak 会最终会导致 out of memory！")])])])}),[],!1,null,null,null);r.default=e.exports}}]);