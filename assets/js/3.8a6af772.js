(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6],{155:function(t,e,s){},158:function(t,e,s){"use strict";s(155)},160:function(t,e,s){},178:function(t,e,s){"use strict";s.r(e);var n={data:()=>({saying:[],random_sentence:"",num:[0,1,2,3,4,5],num2:-1}),mounted(){this.saying=this.$page.frontmatter.sentence,this.random_sentence=this.saying[this.getNum()]},methods:{getOneSentence:function(){this.checkSeesion()&&(this.random_sentence=this.saying[this.getNum()])},createArray:function(){let t=[];for(let e=0;e<this.saying.length;e++)t.push(e);return t},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},shuffle:function(t){let e=t.slice();for(let t=0;t<e.length;t++){let s=this.getRandomInt(0,t),n=e[t];e[t]=e[s],e[s]=n}return e},getNum:function(){let t=this.getSession();if(this.checkSeesion()){let e=t.pop();return this.setSession(t),e}{this.setSession(this.shuffle(this.createArray()));let t=this.getSession(),e=t.pop();return this.setSession(t),e}},getSession:function(){let t=sessionStorage.getItem("seen");if(null!=t&&""!=t){return JSON.parse(t)}return[]},checkSeesion:function(){return this.getSession().length<=0?(console.log("session is not exist"),!1):(console.log("session is exist"),!0)},getRandomNum:function(){return Math.floor(Math.random()*this.saying.length)},setSession:function(t){Array.isArray(t)?sessionStorage.setItem("seen",JSON.stringify(t)):console.log("array is blank")}}},i=(s(158),s(5)),o=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"sentence"}},[this._v("\n  "+this._s(this.random_sentence)+"\n")])}),[],!1,null,"531590ea",null);e.default=o.exports},180:function(t,e,s){"use strict";s(160)},213:function(t,e,s){"use strict";s.r(e);var n={components:{OneSentence:s(178).default},methods:{}},i=(s(180),s(5)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("header",[s("div",[s("Header")],1),t._v(" "),s("div",[s("separator")],1)]),t._v(" "),s("div",[s("div",{staticClass:"bottom"},[s("div",{staticClass:"bright"}),t._v(" "),s("div",{staticClass:"bleft"},[s("a",{staticClass:"edit",attrs:{href:"https://github.com/frunoob/journal/edit/master/journal/"+t.$page.relativePath,target:"_blank"}},[t._v("✏️修改此页面")])])])]),t._v(" "),s("div",[s("Content",{staticClass:"content"})],1),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"bright"},[s("a",{staticClass:"edit",attrs:{href:"https://github.com/frunoob/journal/edit/master/journal/"+t.$page.relativePath,target:"_blank"}},[t._v("✏️修改此页面")])])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"footer"},[this._v("frunoob@163.com")])])}],!1,null,"0d02002e",null);e.default=o.exports}}]);