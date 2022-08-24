(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{423:function(a,t,e){"use strict";e.r(t);var n=e(5),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"java正则表达式-分组与捕获"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java正则表达式-分组与捕获"}},[a._v("#")]),a._v(" Java正则表达式（分组与捕获）")]),a._v(" "),e("p",[a._v("一个正则表达式被定义为一个字符串，且这个字符串必须先被编译进"),e("code",[a._v("Pattern")]),a._v("类实例中。生成的"),e("code",[a._v("pattern")]),a._v("实例可以被用来创建能够匹配与正则表达式对应的任意(arbitrary)字符序列(character sequences)的"),e("code",[a._v("Matcher")]),a._v("对象。所有涉及到匹配执行过程的状态都会被驻留(resides)在匹配器(matcher)中, 因此许多匹配器可以共享相同的"),e("code",[a._v("Pattern")]),a._v("实例。"),e("br"),a._v("\n下面是一个典型的调用字符串的例子：")]),a._v(" "),e("div",{staticClass:"language-Java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Pattern")]),a._v(" p "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("compile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a*b"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Matcher")]),a._v(" m "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("matcher")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"aaaaaaab"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("matches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[e("code",[a._v("matches")]),a._v("方法由"),e("code",[a._v("Pattern")]),a._v("类来定义是为了方便，因为一个正则表达式（regular expression）仅仅被使用过一次。这个方法在一次调用中编译表达式并且匹配输入字符串。这个声名"),e("code",[a._v('boolean b = Pattern.matches("a*b", "aaaaaaaab")')]),a._v("和上面那三条语句是完全相等的，不过对于重复匹配来说，这个语句的效率更低，因为它不允许编译了正则表达式的"),e("code",[a._v("Pattern")]),a._v("实体类被重复使用。")]),a._v(" "),e("p",[e("code",[a._v("Pattern")]),a._v("类的实例是不可变的（immutable），被多线程(multiple concurrent threads)来使用是安全的。但是"),e("code",[a._v("Mather")]),a._v("实例不是线程安全的。")]),a._v(" "),e("h2",{attrs:{id:"正则表达式结构简要介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式结构简要介绍"}},[a._v("#")]),a._v(" 正则表达式结构简要介绍")]),a._v(" "),e("p",[e("strong",[a._v("结构(construct)")]),a._v("  :   "),e("strong",[a._v("Matches Characters(被匹配的字符串)")])]),a._v(" "),e("p",[e("strong",[a._v("字符")]),e("br"),a._v(" "),e("code",[a._v("x")]),a._v(" : "),e("code",[a._v("he character x")]),e("br"),a._v(" "),e("code",[a._v("\\\\")]),a._v(" : "),e("code",[a._v("The backslash character")]),e("br"),a._v(" "),e("code",[a._v("\\0n")]),a._v(" : "),e("code",[a._v("The character with octal value 0n (0 <= n <= 7)")]),e("br"),a._v(" "),e("code",[a._v("\\0nn")]),a._v(" : "),e("code",[a._v("The character with octal value 0nn (0 <= n <= 7)")]),e("br"),a._v(" "),e("code",[a._v("\\0mnn")]),a._v(" : "),e("code",[a._v("The character with octal value 0mnn (0 <= m <= 3, 0 <= n <= 7)")]),e("br"),a._v(" "),e("code",[a._v("\\xhh")]),a._v(" : "),e("code",[a._v("The character with hexadecimal value 0xhh")]),e("br"),a._v(" "),e("code",[a._v("\\uhhhh")]),a._v(" : "),e("code",[a._v("The character with hexadecimal value 0xhhhh")]),e("br"),a._v(" "),e("code",[a._v("\\x{h...h}")]),a._v(" : "),e("code",[a._v("The character with hexadecimal value 0xh...h (Character.MIN_CODE_POINT  <= 0xh...h <=  Character.MAX_CODE_POINT)")]),e("br"),a._v(" "),e("code",[a._v("\\t")]),a._v(" : "),e("code",[a._v("The tab character ('\\u0009')")]),e("br"),a._v(" "),e("code",[a._v("\\n")]),a._v(" : "),e("code",[a._v("The newline (line feed) character ('\\u000A')")]),e("br"),a._v(" "),e("code",[a._v("\\r")]),a._v(" : "),e("code",[a._v("The carriage-return character ('\\u000D')")]),e("br"),a._v(" "),e("code",[a._v("\\f")]),a._v(" : "),e("code",[a._v("The form-feed character ('\\u000C')")]),e("br"),a._v(" "),e("code",[a._v("\\a")]),a._v(" : "),e("code",[a._v("The alert (bell) character ('\\u0007')")]),e("br"),a._v(" "),e("code",[a._v("\\e")]),a._v(" : "),e("code",[a._v("The escape character ('\\u001B')")]),a._v("\\cx"),e("code",[a._v(":")]),a._v("The control character corresponding to x`")]),a._v(" "),e("p",[e("strong",[a._v("字符类")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[abc]\na, b, or c (simple class)  \n[^abc]\nAny character except a, b, or c (negation)  \n[a-zA-Z]\na through z or A through Z, inclusive (range)   \n[a-d[m-p]]\na through d, or m through p: [a-dm-p] (union)  \n[a-z&&[def]]\nd, e, or f (intersection)\n[a-z&&[^bc]]\na through z, except for b and c: [ad-z] (subtraction)\n[a-z&&[^m-p]]\na through z, and not m through p: [a-lq-z](subtraction)\n")])])]),e("p",[e("strong",[a._v("Predefined character classes")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("`.`\nAny character (may or may not match line terminators)\n\\d\nA digit: [0-9]\n\\D\nA non-digit: [^0-9]\n\\h\nA horizontal whitespace character: [ \\t\\xA0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000]\n\\H\nA non-horizontal whitespace character: [^\\h]\n\\s\nA whitespace character: [ \\t\\n\\x0B\\f\\r]\n\\S\nA non-whitespace character: [^\\s]\n\\v\nA vertical whitespace character: [\\n\\x0B\\f\\r\\x85\\u2028\\u2029]\n\\V\nA non-vertical whitespace character: [^\\v]\n\\w\nA word character: [a-zA-Z_0-9]\n\\W\nA non-word character: [^\\w]\n")])])]),e("p",[e("strong",[a._v("贪婪匹配(Reluctant quantifiers)")]),a._v("  （尽可能多的匹配）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("X?\nX, once or not at all\nX*\nX, zero or more times\nX+\nX, one or more times\nX{n}\nX, exactly n times\nX{n,}\nX, at least n times\nX{n,m}\nX, at least n but not more than m times\n")])])]),e("p",[a._v("例如： 字符串:"),e("code",[a._v("aabaaab")]),a._v(", 正则表达式: "),e("code",[a._v("a.*b")]),a._v(", 匹配结果为"),e("code",[a._v("aabaaab")])]),a._v(" "),e("p",[e("strong",[a._v("勉强模式限定符(Reluctant quantifiers)")]),a._v("  (总是尽可能少的匹配)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("X??\nX, once or not at all\nX*?\nX, zero or more times\nX+?\nX, one or more times\nX{n}?\nX, exactly n times\nX{n,}?\nX, at least n times\nX{n,m}?\nX, at least n but not more than m times\n")])])]),e("p",[a._v("例如： 字符串:"),e("code",[a._v("aabaaab")]),a._v(", 正则表达式: "),e("code",[a._v("a.*b")]),a._v(", 匹配结果为"),e("code",[a._v("aab")]),e("br"),a._v("\n结果很明显，勉强模式是只要匹配到了就停止后面的匹配，有点类似于短路与"),e("code",[a._v("&&")]),a._v(",一旦"),e("code",[a._v("&&")]),a._v("左侧表达式为false就不再判断右侧了。")]),a._v(" "),e("p",[e("strong",[a._v("Possessive(占有) quantifiers")])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("解释")]),a._v(" "),e("p",[a._v("非回溯，一旦匹配失败立即停止匹配，比贪婪模式更加高效。\n"),e("a",{attrs:{href:"https://www.regular-expressions.info/possessive.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Possessive Quantifiers"),e("OutboundLink")],1)])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("X?+\nX, once or not at all\nX*+\nX, zero or more times\nX++\nX, one or more times\nX{n}+\nX, exactly n times\nX{n,}+\nX, at least n times\nX{n,m}+\nX, at least n but not more than m times\n")])])]),e("p",[e("strong",[a._v("逻辑运算符")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("XY\nX followed by Y\nX|Y\nEither X or Y\n(X)\nX, as a capturing group\n")])])]),e("p",[e("strong",[a._v("回溯引用")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\\n\nWhatever the nth capturing group matched\n\\k<name>\nWhatever the named-capturing group "name" matched\n')])])]),e("p",[e("strong",[a._v("Quotation")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\\\nNothing, but quotes the following character\n\\Q\nNothing, but quotes all characters until \\E\n\\E\nNothing, but ends quoting started by \\Q\n")])])]),e("p",[e("strong",[a._v("Special constructs (named-capturing and non-capturing)")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(?<name>X)\nX, as a named-capturing group\n(?:X)\nX, as a non-capturing group\n(?idmsuxU-idmsuxU) \nNothing, but turns match flags i d m s u x U on - off\n(?idmsux-idmsux:X)  \nX, as a non-capturing group with the given flags i d m s u x on - off\n(?=X)\nX, via zero-width positive lookahead\n(?!X)\nX, via zero-width negative lookahead\n(?<=X)\nX, via zero-width positive lookbehind\n(?<!X)\nX, via zero-width negative lookbehind\n(?>X)\nX, as an independent, non-capturing group\n")])])]),e("h2",{attrs:{id:"groups-and-capturing-分组和捕获"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#groups-and-capturing-分组和捕获"}},[a._v("#")]),a._v(" Groups and capturing(分组和捕获)")]),a._v(" "),e("p",[a._v("捕获组通过从左到右计算其开始括号来编号。例如，在表达式((A)(B (C))中，有四个这样的组:"),e("br"),a._v("\n1    ((A)(B(C)))"),e("br"),a._v("\n2    (A)"),e("br"),a._v("\n3    (B(C))"),e("br"),a._v("\n4    (C)")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("第零组永远代表了整个表达式。")])]),a._v(" "),e("p",[a._v("定义为捕获组这个名字的原因是在匹配的过程中，输入序列中的每一个与组锁匹配子序列都会被保存起来。捕获子序列可以在之后的通过回溯再次被使用，并且可以在匹配完成之后在匹配器(matcher)中再次检索。")]),a._v(" "),e("p",[a._v("可以使用"),e("code",[a._v("group")]),a._v("方法来获取捕获组，请看以下例子：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('String s = "abbbbaabbbbaaa";\nString regex = "a(.*)b";\nMatcher m = Pattern.compile(regex).matcher(s);\nm.group(1)  // bbbbaabbb\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);