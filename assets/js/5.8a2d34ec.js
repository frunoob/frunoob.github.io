(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{375:function(t,e,n){},406:function(t,e,n){"use strict";n(375)},418:function(t,e,n){"use strict";n.r(e);n(205),n(46),n(68),n(14),n(208);var a=n(388),o=n.n(a),i={data:function(){return{temp:"",Data:"",question:"",apikey:["55b25e23082e441e84de8a373224266c","291907d108d94321b55de817a84fff87","b87725aedecb4889b2c30800f383c31c","a0a8c0339c8d43ebb454e52cbce12795","1114e398fb164e58aa24e219a37e1e3d"],num:0,userId:""}},methods:{getResults:function(){var t=this;o.a.get("https://openapi.tuling123.com/openapi/api/v2",{params:{reqType:0,perception:{inputText:{text:"附近的酒店"},selfInfo:{location:{city:"北京",province:"北京",street:"信息路"}}},userInfo:{apiKey:"55b25e23082e441e84de8a373224266c",userId:"frunoob"}}}).then((function(e){200===e.data.code&&(t.Data=e.data)}))},get:function(){var t=this;this.checkoutUserId(),""!=this.question?(o.a.get("http://www.tuling123.com/openapi/api",{params:{key:this.apikey[this.num],info:this.question,userid:this.userId}}).then((function(e){console.log("现在是"+(t.num+1)+"号机器人为您服务!(还有"+(t.apikey.length-t.num-1)+"个机器人等待为你服务！)"),200===e.status&&(1e5!==e.data.code?t.num<t.apikey.length-1?(t.num++,t.question=t.temp,t.get()):t.Data="哀家身体欠安，咱明日聊。":t.Data=e.data.text)})),this.temp=this.question,this.question=""):this.Data="你啥都没输入呢"},generateUUID:function(){var t=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))},checkoutUserId:function(){null!=localStorage.getItem("frunoob-kali-robots")?this.userId=localStorage.getItem("frunoob-kali-robots"):(this.userId=this.generateUUID(),localStorage.setItem("frunoob-kali-robots",this.userId))}},mounted:function(){}},s=(n(406),n(24)),u=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"caht-robot"},[n("div",{attrs:{id:"content"}},[n("p",{attrs:{id:"title"}},[t._v("快来和小琦聊天吧！")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],attrs:{type:"text",id:"input"},domProps:{value:t.question},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.get()},input:function(e){e.target.composing||(t.question=e.target.value)}}}),t._v(" "),n("input",{attrs:{id:"sendTo",type:"button",value:"Enter"},on:{click:function(e){return t.get()}}}),t._v(" "),n("p",{attrs:{id:"data"}},[t._v(t._s(t.Data))])])])}),[],!1,null,"60955124",null);e.default=u.exports}}]);