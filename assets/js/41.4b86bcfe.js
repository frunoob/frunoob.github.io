(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{247:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"框架面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架面试题"}},[a._v("#")]),a._v(" 框架面试题")]),a._v(" "),t("h2",{attrs:{id:"mybatis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis"}},[a._v("#")]),a._v(" MyBatis")]),a._v(" "),t("h3",{attrs:{id:"什么是-mybatis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mybatis"}},[a._v("#")]),a._v(" 什么是 Mybatis？")]),a._v(" "),t("p",[a._v("Mybatis 是一个半自动ORM（对象关系映射）框架，它内部封装了 JDBC，开发时只需要关注 SQL 语句本身。")]),a._v(" "),t("p",[a._v("程序员直接编写原生态 sql，可以严格控制 sql 执行性能，灵活度高。")]),a._v(" "),t("h3",{attrs:{id:"mybaits-的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybaits-的优点"}},[a._v("#")]),a._v(" Mybaits 的优点")]),a._v(" "),t("details",[t("summary",[a._v("查看答案")]),t("p",[a._v("1、基于 SQL 语句编程，相当灵活，不会对应用程序或者数据库的现有设计造成任何影响，SQL 写在 XML 里，解除 sql 与程序代码的耦合，便于统一管理；提供 XML标签，支持编写动态 SQL 语句，并可重用。\n2、与 JDBC 相比，减少了 50%以上的代码量，消除了 JDBC 大量冗余的代码，不需要手动开关连接；\n3、很好的与各种数据库兼容（因为 MyBatis 使用 JDBC 来连接数据库，所以只要JDBC 支持的数据库 MyBatis 都支持）。\n4、能够与 Spring 很好的集成；\n5、提供映射标签，支持对象与数据库的 ORM 字段关系映射；提供对象关系映射标签，支持对象关系组件维护。")])]),t("h3",{attrs:{id:"mybatis-框架的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-框架的缺点"}},[a._v("#")]),a._v(" MyBatis 框架的缺点")]),a._v(" "),t("details",[t("summary",[a._v("查看答案")]),t("p",[a._v("1、SQL 语句的编写工作量较大，尤其当字段多、关联表多时，对开发人员编写SQL 语句的功底有一定要求。\n2、SQL 语句依赖于数据库，导致数据库移植性差，不能随意更换数据库。")])]),t("h3",{attrs:{id:"mybatis-与-hibernate-有哪些不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-与-hibernate-有哪些不同"}},[a._v("#")]),a._v(" MyBatis 与 Hibernate 有哪些不同？")]),a._v(" "),t("details",[t("summary",[a._v("查看答案")]),t("p",[a._v("Hibernate与MyBatis都可以是通过SessionFactoryBuider由XML配置文件生成SessionFactory，然后由SessionFactory 生成Session，最后由Session来开启执行事务和SQL语句。\n"),t("strong",[a._v("不同点")]),t("br"),a._v("\n1、Mybatis 半自动 ，需要手动编写sql语句，  hibernate是全自动的，自动生成\n2、Mybatis 直接编写sql语句，性能和灵活性更好。\n3、Hibernate 数据库移植性更好，mybatis由于需要写sql语句，导致不同数据库之间不兼容，不能随意切换数据库。")])]),t("h3",{attrs:{id:"和-的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#和-的区别是什么"}},[a._v("#")]),a._v(" #{}和${}的区别是什么？")]),a._v(" "),t("details",[t("summary",[a._v("查看答案")]),t("p",[a._v("#{}是预编译处理，${}是字符串替换。\nMybatis 在处理#{}时，会将 sql 中的#{}替换为?号，调用 PreparedStatement 的set 方法来赋值；使用#{}可以有效的防止 SQL 注入，提高系统安全性\nMybatis 在处理${}时，就是把${}替换成变量的值。")])]),t("h3",{attrs:{id:"mybatis-的一级、二级缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-的一级、二级缓存"}},[a._v("#")]),a._v(" Mybatis 的一级、二级缓存")]),a._v(" "),t("details",[t("summary",[a._v("查看答案")]),t("p",[a._v("一级缓存是指同一个sqlsession对象进行同一个查询的时候，直接到缓存中查找，减少了数据库的查找也提高了速度，一级缓存默认是打开的，在commit（提交）之后就会清理一级缓存。")]),a._v(" "),t("p",[a._v("二级缓存是指多个sqlsession共享。    范围是相同namespace值的sql映射文件生成的mapper对象。默认不打开需要要手动打开。")]),a._v(" "),t("p",[a._v("1）一级缓存: 基于 session 本地缓存，commit() 和 clearCache()方法可以清理 MyBatis 的一级缓存，默认打开一级缓存。\n2）二级缓存与一级缓存其机制相同，不同在于其存储作用域为 Mapper(Namespace)，并且可自定义存储源，如 Ehcache。\n默认不打开二级缓存，要开启二级缓存，使用二级缓存属性类需要实现 Serializable 序列化接口(可用来保存对象的状态),可在它的映射文件中配置 ；\n3）对于缓存数据更新机制，当某一个作用域(一级缓存 Session/二级缓存Namespaces)的进行了 C/U/D 操作后，默认该作用域下所有 select 中的缓存将被 clear。")]),a._v(" "),t("ol",[t("li",[a._v("一级缓存：基于PerpatualCache的HashMap本地存储，他的作用域为Session，当Session flush或close之后，该Session中的所有Cache将清空，默认打开一级缓存。")]),a._v(" "),t("li",[a._v("二级缓存：采用PerpetualCache，HashMap存储，不同在于其存储作用域为Mapper（NameSpace），默认不打开二级缓存，要使用二级缓存，二级缓存属性类要实现serializable序列化接口（用于对象的持久化），在映射文件中配置"),t("cache")],1)]),a._v(" "),t("p",[a._v("当在一个作用域(一级缓存 session/二级缓存namespace)中进行了C U  D 操作，默认session下的缓存被清除。")]),a._v(" "),t("p",[a._v("clearCache()  可以清理一级缓存不能清理二级缓存。")]),a._v(" "),t("p",[a._v("MyBatis的全局二级缓存开关默认是true")])]),t("h3",{attrs:{id:"mybatis动态sql用到哪些标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis动态sql用到哪些标签"}},[a._v("#")]),a._v(" Mybatis动态SQL用到哪些标签？")]),a._v(" "),t("details",[t("summary",[a._v("查看答案")]),t("p",[a._v("if\nchoose (when, otherwise)\ntrim (where, set)\nforeach")])]),t("h3",{attrs:{id:"mybatis分页得实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis分页得实现"}},[a._v("#")]),a._v(" MyBatis分页得实现？")]),a._v(" "),t("details",[t("summary",[a._v("查看答案")]),t("p",[a._v("limit [offset,rows] 首行偏移 返回行数")]),a._v(" "),t("p",[a._v("自己写的话每次都要写当前页，总页数，下一页上一页，每页个数，很麻烦，所以使用PageHelper，PageHelper是国内非常优秀的一款开源的mybatis分页插件。")]),a._v(" "),t("p",[a._v("只有紧跟着PageHelper.startPage(pageNum,pageSize)的sql语句才被pagehelper起作用")])]),t("h2",{attrs:{id:"spring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[a._v("#")]),a._v(" spring")]),a._v(" "),t("h3",{attrs:{id:"_1-什么是spring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是spring"}},[a._v("#")]),a._v(" 1.什么是Spring？")]),a._v(" "),t("p",[a._v("Spring是一个轻量级Java开发框架。目的是为了解决企业级应用开发的业务逻辑层和其他各层的耦合问题，为开发Java应用程序提供全面的基础架构支持。")]),a._v(" "),t("p",[a._v("Spring可以做很多事情，它为企业级开发提供给了丰富的功能，但是这些功能的底层都依赖于它的两个核心特性：\n-依赖注入（dependency injection，DI）\n-面向切面编程（aspect-oriented programming，AOP）。")]),a._v(" "),t("h3",{attrs:{id:"_2-什么是spring-ioc-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是spring-ioc-容器"}},[a._v("#")]),a._v(" 2.什么是Spring IOC 容器？")]),a._v(" "),t("p",[a._v("控制反转即IoC (Inversion of Control)，它把传统上由程序代码直接操控的对象的调用权交给容器，通过容器来实现对象组件的装配和管理。")]),a._v(" "),t("p",[a._v("所谓的“控制反转”概念就是对组件对象控制权的转移，从程序代码本身转移到了外部容器。")]),a._v(" "),t("p",[a._v("Spring IOC 负责创建对象，管理对象（通过依赖注入（DI），装配对象，配置对象，并且管理这些对象的整个生命周期。")]),a._v(" "),t("h3",{attrs:{id:"_3-什么是spring的依赖注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是spring的依赖注入"}},[a._v("#")]),a._v(" 3.什么是Spring的依赖注入？")]),a._v(" "),t("p",[a._v("依赖注入：相对于IoC而言，依赖注入(DI)更加准确地描述了IoC的设计理念。")]),a._v(" "),t("p",[a._v("所谓依赖注入（Dependency Injection），即组件之间的依赖关系由容器在应用系统运行期来决定，\n也就是由容器动态地将某种依赖关系的目标对象实例注入到应用系统中的各个关联的组件之中。")]),a._v(" "),t("h3",{attrs:{id:"_4-有哪些不同类型的依赖注入实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-有哪些不同类型的依赖注入实现方式"}},[a._v("#")]),a._v(" 4.有哪些不同类型的依赖注入实现方式？")]),a._v(" "),t("p",[a._v("构造器依赖注入：构造器依赖注入通过容器触发一个类的构造器来实现的。")]),a._v(" "),t("p",[a._v("Setter方法注入：调用该bean的setter方法，即实现了基于setter的依赖注入。")]),a._v(" "),t("h3",{attrs:{id:"_5-beanfactory-和-applicationcontext有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-beanfactory-和-applicationcontext有什么区别"}},[a._v("#")]),a._v(" 5.BeanFactory 和 ApplicationContext有什么区别？")]),a._v(" "),t("p",[a._v("ApplicationContext接口作为BeanFactory的派生，除了提供BeanFactory所具有的功能外，还提供了更完整的框架功能：\n继承MessageSource，因此支持国际化。\n统一的资源文件访问方式。\n提供在监听器中注册bean的事件。\n同时加载多个配置文件。\n载入多个（有继承关系）上下文 ，使得每一个上下文都专注于一个特定的层次，比如应用的web层。")]),a._v(" "),t("h3",{attrs:{id:"_6-什么是aop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-什么是aop"}},[a._v("#")]),a._v(" 6.什么是AOP")]),a._v(" "),t("p",[a._v("OOP(Object-Oriented Programming)面向对象编程，允许开发者定义纵向的关系，但并适用于定义横向的关系，导致了大量代码的重复，而不利于各个模块的重用。\nAOP（Aspect Oriented Programming），即面向切面编程，可以说是OOP（Object Oriented Programming，面向对象编程）的补充和完善。OOP引入封装、继承、多态等概念来建立一种对象层次结构，用于模拟公共行为的一个集合。不过OOP允许开发者定义纵向的关系，但并不适合定义横向的关系，例如日志功能。日志代码往往横向地散布在所有对象层次中，而与它对应的对象的核心功能毫无关系对于其他类型的代码，如安全性、异常处理和透明的持续性也都是如此，这种散布在各处的无关的代码被称为横切（cross cutting），在OOP设计中，它导致了大量代码的重复，而不利于各个模块的重用。")]),a._v(" "),t("h3",{attrs:{id:"_7-解释spring支持的几种bean的作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-解释spring支持的几种bean的作用域"}},[a._v("#")]),a._v(" 7.解释Spring支持的几种bean的作用域")]),a._v(" "),t("p",[a._v("singleton : bean在每个Spring容器中只有一个实例。")]),a._v(" "),t("p",[a._v("prototype：一个bean的定义可以有多个实例。")]),a._v(" "),t("p",[a._v("request：每次http请求都会创建一个bean，该作用域仅在基于web的Spring ApplicationContext情形下有效。")]),a._v(" "),t("p",[a._v("session：在一个HTTP Session中，一个bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。")]),a._v(" "),t("p",[a._v("global-session：在一个全局的HTTP Session中，一个bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。")]),a._v(" "),t("h3",{attrs:{id:"_8-jdk动态代理和cglib动态代理的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-jdk动态代理和cglib动态代理的区别"}},[a._v("#")]),a._v(" 8.JDK动态代理和CGLIB动态代理的区别")]),a._v(" "),t("p",[a._v("JDK动态代理针对接口\nCGLIB动态代理针对目标类")]),a._v(" "),t("h3",{attrs:{id:"_9-spring框架中的单例bean是线程安全的吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-spring框架中的单例bean是线程安全的吗"}},[a._v("#")]),a._v(" 9.Spring框架中的单例bean是线程安全的吗？")]),a._v(" "),t("p",[a._v("不是，Spring框架中的单例bean不是线程安全的。")]),a._v(" "),t("p",[a._v("spring 中的 bean 默认是单例模式，spring 框架并没有对单例 bean 进行多线程的封装处理。")]),a._v(" "),t("h3",{attrs:{id:"_10-spring通知-增强-advice-有哪些类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-spring通知-增强-advice-有哪些类型"}},[a._v("#")]),a._v(" 10.Spring通知(增强 Advice)有哪些类型？")]),a._v(" "),t("p",[a._v("前置通知（Before）：在目标方法被调用之前调用通知功能；\n后置通知（After）：在目标方法完成之后调用通知，此时不会关心方法的输出是什么；\n返回通知（After-returning ）：在目标方法成功执行之后调用通知；\n异常通知（After-throwing）：在目标方法抛出异常后调用通知；\n环绕通知（Around）：通知包裹了被通知的方法，在被通知的方法调用之前和调用之后执行自定义的行为。")]),a._v(" "),t("h3",{attrs:{id:"_11-spring常用注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-spring常用注解"}},[a._v("#")]),a._v(" 11.spring常用注解？")]),a._v(" "),t("p",[a._v("@Component 组件，没有明确的角色\n@Service 在业务逻辑层使用（service层）\n@Repository 在数据访问层使用（dao层）\n@Controller 在展现层使用，控制器的声明（C）\n@Autowired：由Spring提供\n@Value 为属性注入值（属性上）\n@After 在方法执行之后执行（方法上）\n@Before 在方法执行之前执行（方法上）\n@Around 在方法执行之前与之后执行（方法上）")]),a._v(" "),t("h2",{attrs:{id:"mybatis常用标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis常用标签"}},[a._v("#")]),a._v(" mybatis常用标签")]),a._v(" "),t("h2",{attrs:{id:"springboot常用注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot常用注解"}},[a._v("#")]),a._v(" springboot常用注解")]),a._v(" "),t("h2",{attrs:{id:"springboot和spring的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot和spring的区别"}},[a._v("#")]),a._v(" springboot和spring的区别")]),a._v(" "),t("h2",{attrs:{id:"springboot和springmvc的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot和springmvc的区别"}},[a._v("#")]),a._v(" springboot和springmvc的区别")]),a._v(" "),t("h2",{attrs:{id:"springboot和ssm的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot和ssm的区别"}},[a._v("#")]),a._v(" springboot和ssm的区别")])])}),[],!1,null,null,null);s.default=r.exports}}]);