(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{217:function(t,e,a){"use strict";a.r(e);var r={data:()=>({path:"",title:"",path2:"",path3:"",time:""}),mounted(){this.addDate()},methods:{CurentTime(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,r=t.getDate(),n=t.getHours(),s=t.getMinutes(),h=t.getSeconds(),o=e;return a<10&&(o+="0"),o+=a,r<10&&(o+="0"),o+=r,n<10&&(o+="0"),o+=n,s<10&&(o+="0"),o+=s,h<10&&(o+="0"),o+=h,this.time=o,o},addDate(){let t=new Date,e=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds(),t.getTime();this.path="https://github.com/frunoob/journal/new/master/journal/diary/"+this.CurentTime()+".md",this.title=e+"年"+a+"月"+r+"日",this.path2="diary",this.path3="https://github.com/frunoob/journal/new/master/journal/list/"+this.CurentTime()+".md"}}},n=a(5),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{attrs:{href:t.path2}},[t._v("  📅看日记")]),t._v(" "),a("a",{attrs:{href:t.path,target:"_blank"}},[t._v("👁‍🗨写日记")]),t._v(" "),a("a",{attrs:{href:t.path3,target:"_blank"}},[t._v("🖊表文章")]),t._v(" "),a("a",{attrs:{href:"/post/handbook"}},[t._v("博客使用>")]),t._v(" "),a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/",target:"_blank"}},[t._v("jdk8 docs>")]),t._v(" "),a("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/index.html#library-index",target:"_blank"}},[t._v("Python 标准库")]),t._v(" "),a("a",{attrs:{href:"https://frunoob.github.io/visualinterface/echart-frunoob/"}},[t._v("Visual large screen-2020-COVID-19>")])])}),[],!1,null,null,null);e.default=s.exports}}]);