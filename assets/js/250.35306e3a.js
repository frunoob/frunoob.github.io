(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{454:function(t,a,e){"use strict";e.r(a);var o=e(5),n=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安卓开发过程中遇到的一些问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安卓开发过程中遇到的一些问题"}},[t._v("#")]),t._v(" 安卓开发过程中遇到的一些问题")]),t._v(" "),e("h2",{attrs:{id:"java后端无法解析安卓date类型日期数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java后端无法解析安卓date类型日期数据"}},[t._v("#")]),t._v(" java后端无法解析安卓Date类型日期数据")]),t._v(" "),e("p",[t._v("解决方案： 安卓端，将Date类型的属性定义为字符串，并且该字符串是符合mysql规范的"),e("a",{attrs:{href:"https://frunoob.github.io/list/20221104094158.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("日期字符串"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"activity跳转太慢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activity跳转太慢"}},[t._v("#")]),t._v(" Activity跳转太慢")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提要")]),t._v(" "),e("p",[t._v("从一个Activity跳转到另外一个Activity的过程如下"),e("br"),t._v("\n创建"),e("code",[t._v("Intent")]),t._v("，执行startActivity(intent)方法，当前Activity的状态由"),e("code",[t._v("onResume")]),t._v("依次转变为"),e("code",[t._v("onPause")]),t._v(" -> "),e("code",[t._v("onStop")]),t._v("，被启动的Activity的状态依次转变为为"),e("code",[t._v("onCreate")]),t._v(" -> "),e("code",[t._v("onStart")]),t._v(" -> "),e("code",[t._v("onResume")]),t._v("。将网络请求函数放到被启动Activity的"),e("code",[t._v("onCreate函数中")]),t._v("，然后只有当"),e("code",[t._v("onResume")]),t._v("函数执行完成之后，安卓的UI界面才会被加载，也就是说在执行"),e("code",[t._v("onCreate")]),t._v(" "),e("code",[t._v("onStart")]),t._v(" "),e("code",[t._v("onResume")]),t._v("这些函数的过程中，安卓的前端界面始终都是静止状态，这是非常不合理的，也会让用户以为应用崩溃了，用户体验非常的不好。")])]),t._v(" "),e("p",[e("strong",[t._v("解决方案一")])]),t._v(" "),e("p",[t._v("首先想到的方法就是将数据加载的代码放到一个新的线程中去执行，而在数据加载的过程中，安卓页面会显示加载动画，当resume函数中数据加载完成之后，会将加载动画隐藏，从而提高用户的体验质量。")]),t._v(" "),e("p",[t._v("但是，事实上，在安卓中不允许在子线程中对安卓UI进行操作，也就是说，无法在子线程中来操作加载动画的显示与隐藏。并且需要在每一个页面都要设置加载动画的组件，多用户很友好，但对开发者非常不友好。")]),t._v(" "),e("p",[t._v("为什么要在子线程中执行数据加载的操作呢，因为在数据加载的过程中涉及到对本地数据库的操作，而为防止查询阻止界面，Room 不允许在主线程上访问数据库。"),e("br"),t._v("\n针对这个问题有两种解决方案："),e("br"),t._v("\n第一个是强制允许在主线程上访问数据库,调用"),e("code",[t._v("allowMainThreadQueries()")]),t._v("方法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n# AppDatabase.java\n\nimport androidx.room.Database;\nimport androidx.room.RoomDatabase;\nimport com.example.app2.Dao.PatientDao;\nimport com.example.app2.Dao.UserDao;\nimport com.example.app2.entity.Patient;\nimport com.example.app2.entity.User;\n@Database(entities = {User.class, Patient.class}, version = 1\n//        , autoMigrations = {\n//        @AutoMigration(from = 4, to = 5)}\n)\npublic abstract class AppDatabase extends RoomDatabase {\n    public abstract UserDao userDao();\n    public abstract PatientDao patientDao();\n}\n\n\n# MainActivity.java\n\nimport androidx.room.Room;\n // 创建数据库\nprivate void createDatabase() {\n   AppDatabase db = Room.databaseBuilder(getApplicationContext(),\n            AppDatabase.class, "301_database").allowMainThreadQueries().build();\n}\n')])])]),e("p",[t._v("第二个方法就是编写异步DAO查询"),e("br"),t._v("\n详见"),e("a",{attrs:{href:"https://developer.android.google.cn/training/data-storage/room/async-queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("编写异步 DAO 查询"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("在开发过程中，使用Retrofit框架进行http请求操作，刚开始使用的是同步方法结果并且在主线程上执行数据请求的操作，严重影响了主线程中UI的加载与显示，后改为异步方法无论是数据加载还是页面显示或者是Activity跳转都得到了明显的改善。")]),t._v(" "),e("h2",{attrs:{id:"ui操作经常性失灵"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui操作经常性失灵"}},[t._v("#")]),t._v(" UI操作经常性失灵")]),t._v(" "),e("p",[t._v("当一个ACtivity中存在了多个线程的时候，在主线程中执行UI操作会受到影响，这个我也不知道该如何解决，所以就尽量避免在主线程中开启新的子线程，尽量使用异步或者是监听器来代替多线程。")])])}),[],!1,null,null,null);a.default=n.exports}}]);