(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{242:function(t,a,_){"use strict";_.r(a);var s=_(4),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"计算机网络面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络面试题"}},[t._v("#")]),t._v(" 计算机网络面试题")]),t._v(" "),_("h2",{attrs:{id:"_1-uri-和-url-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-uri-和-url-的区别"}},[t._v("#")]),t._v(" 1. URI 和 URL 的区别？")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("URI(Uniform Resource Identifier): 中文全称为统一资源标志符，主要作用是唯一标识一个资源。\nURL(Uniform Resource Location)：中文全称为统一资源定位符，主要作用是提供资源的路径。  \nURI是URL的父级。\n")])])]),_("h2",{attrs:{id:"_2-tcp-和-udp-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp-和-udp-区别"}},[t._v("#")]),t._v(" 2.TCP 和 UDP 区别？")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("table",[_("tr",[_("td"),_("td",[t._v("连接")]),_("td",[t._v("可靠性")]),_("td",[t._v("传输形式")]),_("td",[t._v("传输效率")]),_("td",[t._v("消耗资源")]),_("td",[t._v("应用场景")])]),t._v(" "),_("tr",[_("td",[t._v("TCP")]),_("td",[t._v("有连接")]),_("td",[t._v("可靠")]),_("td",[t._v("字节流")]),_("td",[t._v("慢")]),_("td",[t._v("多")]),_("td",[t._v("文件/邮件传输")])]),t._v(" "),_("tr",[_("td",[t._v("UDP")]),_("td",[t._v("无连接")]),_("td",[t._v("不可靠")]),_("td",[t._v("数据报")]),_("td",[t._v("快")]),_("td",[t._v("少")]),_("td",[t._v("视频/音频传输")])])]),t._v(" "),_("h2",{attrs:{id:"_3-tcp-三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-tcp-三次握手"}},[t._v("#")]),t._v(" 3.TCP 三次握手")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("第一次握手：客户端向服务端发送连接请求报文段，该报文段包含了自身的数据通讯初始序号。第一次握手前客户端的状态为 CLOSE，第一次握手后客户端的状态为 SYN-SENT。此时服务端的状态为 LISTEN\n第二次握手：服务端在收到客户端发来的报文后，如果同意连接，就会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后进入SYN-RECEIVED状态。\n第三次握手：客户端收到服务端发来的连接同意的应答后，还要向服务器端发送一个确认报文，客户端发送完这个报文段就进入了ESTABLISHED状态，服务端收到这个应答后也就进入了ESTABLISHED状态，此时连接建立成功。  \n两次握手为何不行？两次握手无法保证两边顺利链接，如果第一次握手客户端发送的请求超时，第二次握手服务端无法判断请求是否超时，仍然确认连接，此时就会造成连接失败。\n")])])]),_("h2",{attrs:{id:"_4-tcp-四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-tcp-四次挥手"}},[t._v("#")]),t._v(" 4.TCP 四次挥手")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("第一次挥手：客户端认为数据发送完成，则它需要想服务端发送连接释放请求。\n第二次挥手：服务端收到连接释放请求后，会释放TCP连接。然后会发送确认报文并进入CLOSE_WAIT状态。此时表明客户端到服务器端的连接已经释放，不再接收客户端的数据，但服务端仍可发送数据给客户端。\n第三次挥手：服务端如果有没有发送完成的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端进入LAST-ACK状态。\n第四次挥手：客户端收到服务端发送的释放连接请求，向服务端发送确认报文，此时客户端进入TIME-WAIT状态。该状态会持续两个MSL（最大报文生存时间：任何报文在网络存在的最长时间）时间，改时间内服务端没有重新发送请求的话，就进入CLOSED状态。服务端接收到客户端的确认应答后，也进入了CLOSED状态。\n")])])]),_("h2",{attrs:{id:"_5-http-和-https-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-和-https-区别"}},[t._v("#")]),t._v(" 5.HTTP 和 HTTPS 区别")]),t._v(" "),_("p",[t._v("参考答案\n"),_("table",[_("tr",[_("td"),_("td",[t._v("HTTP")]),_("td",[t._v("HTTP")])]),t._v(" "),_("tr",[_("td",[t._v("端口")]),_("td",[t._v("80")]),_("td",[t._v("433")])]),t._v(" "),_("tr",[_("td",[t._v("安全性")]),_("td",[t._v("无加密，安全性差")]),_("td",[t._v("有加密，安全性强")])]),t._v(" "),_("tr",[_("td",[t._v("资源消耗")]),_("td",[t._v("较少")]),_("td",[t._v("较多")])]),t._v(" "),_("tr",[_("td",[t._v("是否需要证书")]),_("td",[t._v("不需要")]),_("td",[t._v("需要")])]),t._v(" "),_("tr",[_("td",[t._v("使用协议")]),_("td",[t._v("TCP")]),_("td",[t._v("TCP、SSL、TLS")])])])]),t._v(" "),_("h2",{attrs:{id:"_6-常见-http-状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-常见-http-状态码"}},[t._v("#")]),t._v(" 6. 常见 HTTP 状态码")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("200 - 请求成功\n301 - 资源（网页等）被永久转移到其它 URL\n404 - 请求的资源（网页等）不存在\n500 - 内部服务器错误\n")])])]),_("h2",{attrs:{id:"_7-常见-http-请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-常见-http-请求方法"}},[t._v("#")]),t._v(" 7. 常见 HTTP 请求方法")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("p",[t._v("记住前五个"),_("br"),t._v("\nGET：请求指定的页面信息，并返回实体主体。\nPOST：向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。\nPUT：从客户端向服务器传送的数据取代指定的文档的内容。\nDELETE：请求服务器删除指定的页面。\nPATCH：是对 PUT 方法的补充，用来对已知资源进行局部更新 。\nCONNECT：HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。\nOPTIONS：允许客户端查看服务器的性能。\nTRACE：回显服务器收到的请求，主要用于测试或诊断。\nHEAD：类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头。")]),t._v(" "),_("h2",{attrs:{id:"_8-get-和-post-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-get-和-post-区别"}},[t._v("#")]),t._v(" 8.GET 和 POST 区别")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("1. get 请求一般是去取获取数据（其实也可以提交，但常见的是获取数据）；post 请求一般是去提交数据。\n2. get 因为参数会放在 url 中，所以隐私性，安全性较差，请求的数据长度是有限制的，不同的浏览器和服务器不同，一般限制在 2~8K 之间，更加常见的是 1k 以内；post 请求是没有的长度限制，请求数据是放在 body 中；\n3. get 请求刷新服务器或者回退没有影响，post 请求回退时会重新提交数据请求。\n4. get 请求可以被缓存，post 请求不会被缓存。\n5. get 请求会被保存在浏览器历史记录当中，post 不会。\n")])])]),_("h2",{attrs:{id:"_9-浏览器输入-url-地址到显示主页过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-浏览器输入-url-地址到显示主页过程"}},[t._v("#")]),t._v(" 9. 浏览器输入 url 地址到显示主页过程")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("1. DNS 解析\n2. TCP 连接\n3. 发送 HTTP 请求\n4. 服务器处理请求并返回 HTTP 报文\n5. 浏览器解析渲染页面\n6. 连接结束\n")])])]),_("h2",{attrs:{id:"_10-ajax-原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-ajax-原理"}},[t._v("#")]),t._v(" 10.Ajax 原理")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("Ajax实现了不重新加载整个页面的情况下可以发送请求处理数据   \nAjax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发送异步请求，从服务器获得数据，然后用 JavaScript 来操作 DOM 而更新页面。这其中最关键的一步就是从服务器获得请求数据。\n")])])]),_("h2",{attrs:{id:"_11-说一下-ping-的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-说一下-ping-的过程"}},[t._v("#")]),t._v(" 11. 说一下 ping 的过程")]),t._v(" "),_("p",[t._v("参考答案")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("ping 是 ICMP（网际控制报文协议）中的一个重要应用，ICMP 是网络层协议。ping 的作用是测试两个主机的连通性。\nping 的工作过程：\n1. 向目的主机发送多个 ICMP 回送请求报文\n2. 根据目的主机返回的回送报文的时间和成功响应的次数估算出数据包往返时间及丢包率。\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);