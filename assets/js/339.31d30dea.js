(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{543:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jetpack-compose-android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jetpack-compose-android"}},[t._v("#")]),t._v(" Jetpack Compose | Android")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("放弃学习")]),t._v(" "),a("p",[t._v("近期接手项目使用的都是java+xml  学习JetPack Compose 需要使用kotlin语言，但是感觉kotlin不太值得花时间经历单独学习，虽然spring和retorfit都已经开始使用kotlin作为其重构语言，但是java的优势就是使用人群和依赖库繁多，依赖库大都支持java8,非常的统一，拿来就用，而且java十分稳定，非常实用商用，便于后期更新重构，因为java语法很繁琐，更容易阅读")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),a("p",[t._v("Jetpack Compose 是用于构建原生 Android 界面的新工具包。它使用更少的代码、强大的工具和直观的 Kotlin API，可以帮助您简化并加快 Android 界面开发。")]),t._v(" "),a("p",[t._v("在本教程中，您将使用"),a("strong",[t._v("声明性的函数")]),t._v("构建一个简单的界面组件。您无需修改任何 XML 布局，也不需要使用布局编辑器。相反，您只需调用可组合函数来定义所需的元素，Compose 编译器即会完成后面的所有工作。")])]),t._v(" "),a("h2",{attrs:{id:"第一课-可组合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一课-可组合函数"}},[t._v("#")]),t._v(" 第一课：可组合函数")]),t._v(" "),a("p",[t._v("Jetpack Compose 是围绕可组合函数构建的。这些函数可让您以程序化方式定义应用的界面，只需描述应用界面的外观并提供数据依赖项，而不必关注界面的构建过程（初始化元素、将其附加到父项等）。如需创建可组合函数，只需将 "),a("code",[t._v("@Composable")]),t._v(" 注解添加到函数名称中即可。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("如何创建Jetpack Compose项目")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("创建android项目的时候选择  empty compose Activity 选项 即可创建compose项目 \n")])])])]),t._v(" "),a("p",[a("strong",[t._v("添加文本元素")])]),t._v(" "),a("p",[t._v("请看如下代码，在页面中添加了一个文本元素")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" android"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bundle\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ComponentActivity\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setContent\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("material"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainActivity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bundle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        setContent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在oncreate方法内添加文本元素，"),a("code",[t._v("setContent{}")]),t._v("就是设置页面内容等价于以下函数")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComposeView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    setContent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComposableContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("定义可组合函数")]),a("br"),t._v("\n什么是组合函数：多层嵌套的Composable函数，即一个Composable可能包含了其他的Composable函数，甚至是递归包含的。")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Composable\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainActivity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bundle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        setContent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Android"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello '),a("span",{pre:!0,attrs:{class:"token interpolation variable"}},[t._v("$name")]),t._v('!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("预览函数")]),a("br"),t._v("\n借助"),a("code",[t._v("@Preview")]),t._v("注解，IDEA编辑界面，该注解左侧会出现一个按钮，点击按钮就可以预览该组合函数的界面。但是需要注意如果该组合函数接受参数的话，那么是没有预览按钮的（即使使用了"),a("code",[t._v("@Preview")]),t._v("注解）")]),t._v(" "),a("p",[t._v("实例如下：")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tooling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Preview\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello '),a("span",{pre:!0,attrs:{class:"token interpolation variable"}},[t._v("$name")]),t._v('!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Preview")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreviewMessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Android"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n")])])]),a("h2",{attrs:{id:"第二课-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二课-布局"}},[t._v("#")]),t._v(" 第二课：布局")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),a("p",[t._v("界面元素采用多层次结构，元素中又包含其他元素。在 Compose 中，您可以通过从可组合函数中调用其他可组合函数来构建界面层次结构。")])]),t._v(" "),a("p",[a("strong",[t._v("添加多个函数")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("很简单，就是向组合函数传入了一个对象，对象包含了多个属性。")]),t._v(" "),a("p",[a("strong",[t._v("使用Column、Row、Box来排列堆叠元素")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Column "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Column")]),t._v("代码块中的元素会垂直排列，"),a("code",[t._v("Row")]),t._v("代码块中的元素会水平排列，"),a("code",[t._v("Box")]),t._v("块中的元素会层层堆叠")]),t._v(" "),a("p",[a("strong",[t._v("添加图片")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Image\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Row\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("painterResource\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Row "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            painter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("painterResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profile_picture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            contentDescription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Contact profile picture"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n       Column "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("配置布局")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spacer\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("padding\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CircleShape\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modifier\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clip\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" androidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dp\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add padding around our message")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Modifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("all "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            painter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("painterResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profile_picture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            contentDescription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Contact profile picture"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            modifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Modifier\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set image size to 40 dp")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Clip image to be shaped as a circle")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CircleShape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add a horizontal space between the image and the column")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Spacer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Modifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        Column "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add a vertical space between the author and message texts")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Spacer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Modifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n")])])]),a("p",[t._v("为函数中的"),a("code",[t._v("modifier")]),t._v("参数赋值，实现布局调整")]),t._v(" "),a("h2",{attrs:{id:"第三课-material-design-样式设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三课-material-design-样式设计"}},[t._v("#")]),t._v(" 第三课：material Design（样式设计）")]),t._v(" "),a("p",[t._v("使用在您的项目中创建的 Material 主题 ComposeTutorialTheme 和 Surface 来封装 MessageCard 函数。 在 @Preview 和 setContent 函数中都需要执行此操作。这样一来，可组合项即可沿用应用主题中定义的样式，从而在整个应用中确保一致性。")]),t._v(" "),a("p",[t._v("Material Design 是围绕 Color、Typography、Shape 这三大要素构建的。您将逐一添加这些要素。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Empty Compose Activity 模板会为您的项目生成默认主题，使您能够自定义 MaterialTheme。 如果您为项目指定的名称不是 ComposeTutorial，可以在 ui.theme 子软件包的 Theme.kt 文件中找到您的自定义主题。")])]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainActivity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bundle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        setContent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            ComposeTutorialTheme "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Surface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Modifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillMaxSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Android"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jetpack Compose"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Preview")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Composable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreviewMessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ComposeTutorialTheme "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Surface "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MessageCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Colleague"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Take a look at Jetpack Compose, it\'s great!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);