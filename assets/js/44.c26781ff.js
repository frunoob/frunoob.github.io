(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{250:function(t,a,r){"use strict";r.r(a);var e=r(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"java基础知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java基础知识"}},[t._v("#")]),t._v(" java基础知识")]),t._v(" "),r("h2",{attrs:{id:"运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),r("h3",{attrs:{id:"transient-修饰符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transient-修饰符"}},[t._v("#")]),t._v(" transient 修饰符")]),t._v(" "),r("p",[t._v("序列化的对象包含被 transient 修饰的实例变量时，java 虚拟机(JVM)跳过该特定的变量。\n该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型。\n实例")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("public transient int limit = 55;   // 不会持久化\npublic int b; // 持久化\n")])])]),r("h3",{attrs:{id:"volatile-修饰符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#volatile-修饰符"}},[t._v("#")]),t._v(" volatile 修饰符")]),t._v(" "),r("p",[t._v("volatile 修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值。而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。\n一个 volatile 对象引用可能是 null。")]),t._v(" "),r("h3",{attrs:{id:"位运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#位运算符"}},[t._v("#")]),t._v(" 位运算符")]),t._v(" "),r("p",[t._v("& 同1为1，否则为0\n｜同0为0，否则为1\n^同为0否则为1")]),t._v(" "),r("h3",{attrs:{id:"instranceof运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instranceof运算符"}},[t._v("#")]),t._v(" Instranceof运算符")]),t._v(" "),r("p",[t._v("若左侧对象是右侧借口或类的一个对象则返回true")]),t._v(" "),r("h3",{attrs:{id:"java运算符优先级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java运算符优先级"}},[t._v("#")]),t._v(" java运算符优先级")]),t._v(" "),r("p",[t._v("从上到下优先级依次降低")]),t._v(" "),r("p",[t._v("类别\t操作符\t关联性\n后缀\t() [] .(点操作符) \t从左到右\n一元\texpr++ expr- -\t左-右\n一元\t++exp - -expr + - ～ ！\t右 - 左\n乘性\t*  / %\t左右\n加性\t+ -\t左右\n移位\t>> >>> <<\t左右\n关系\t> ≤ ≥\t左右\n相等\t== !=\t\n按位与或\t\t\n逻辑与或\t\t\n条件\t\t\n赋值\t\t\n逗号")]),t._v(" "),r("h2",{attrs:{id:"循环"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[t._v("#")]),t._v(" 循环")]),t._v(" "),r("p",[t._v("针对数组的增强for循环")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("for(声明局部变量:数组名或返回数组的方法名){}\n")])])]),r("h2",{attrs:{id:"number-math-类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#number-math-类"}},[t._v("#")]),t._v(" Number & Math 类")]),t._v(" "),r("p",[t._v("Integer,Float,Short,Long,Double 属于 Number类\nCharacter,Boolean 属于 Object类")]),t._v(" "),r("p",[t._v("Object是一切类的父类")]),t._v(" "),r("p",[t._v("**装箱：**由编译器提供的包装类")]),t._v(" "),r("p",[t._v("Math方法都是静态的，通过Math类可以直接在主函数中直接调用。")]),t._v(" "),r("p",[t._v("Math的floor、ceil、round区别？")]),t._v(" "),r("p",[t._v("floor：返回小于x的最大整数")]),t._v(" "),r("p",[t._v("ceil：返回大于x的最小整数")]),t._v(" "),r("p",[t._v("round：返回小于x+0.5的最大整数")]),t._v(" "),r("h2",{attrs:{id:"string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),r("p",[t._v("创建一个字符串时，先在字符串常量池中查找该字符串是否存在，如果存在就返回其引用，不存在就在公共池中创建一个字符串对象。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('String s1 = "123";\nString s2 = new String("123")\n')])])]),r("p",[t._v("以上两个语句的区别：前者会 查询常量池中的字符串后者直接在堆内存中新建一个String对象，不会查询常量池了。")]),t._v(" "),r("h3",{attrs:{id:"concat-和-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concat-和-的区别"}},[t._v("#")]),t._v(" concat 和 + 的区别")]),t._v(" "),r("p",[t._v("concat：创建一个能容纳两个字符串的字符数组，getchars方法将字符赋值到新的数组中，最后通过String构造器将数组转换成新的字符串。\n+：每次遇到+会创建StringBuilder，他是线程安全的，效率低，不建议。")]),t._v(" "),r("h3",{attrs:{id:"创建格式化字符串"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建格式化字符串"}},[t._v("#")]),t._v(" 创建格式化字符串")]),t._v(" "),r("p",[t._v("format：不可复用\nprintf：可复用")]),t._v(" "),r("h2",{attrs:{id:"数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),r("p",[t._v("数组a作为参数，传递的是引用，改变该引用a中元素值原数组也会改变。若将a=null，对原数组没有影响。同理，数组a=数组b，就相当于a指向b所指向的地址空间。")]),t._v(" "),r("h2",{attrs:{id:"正则表达式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),r("p",[t._v("java.util.regex 包主要包括以下三个类：\nPattern 类：\npattern 对象是一个正则表达式的编译表示。Pattern 类没有公共构造方法。要创建一个 Pattern 对象，你必须首先调用其公共静态编译方法，它返回一个 Pattern 对象。该方法接受一个正则表达式作为它的第一个参数。\nMatcher 类：\nMatcher 对象是对输入字符串进行解释和匹配操作的引擎。与Pattern 类一样，Matcher 也没有公共构造方法。你需要调用 Pattern 对象的 matcher 方法来获得一个 Matcher 对象。\nPatternSyntaxException：\nPatternSyntaxException 是一个非强制异常类，它表示一个正则表达式模式中的语法错误。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('String content = "frunoob";\nString pattern = ".*runoob.*";\nboolean isMatch = Pattern.matches(pattern,content);\n\n\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);