(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{217:function(t,e,n){"use strict";n.r(e);var a={data:()=>({path:"",title:"",path2:"diary",path3:"",path4:"",time:"",imagePath:""}),mounted(){},methods:{CurentTime(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),r=t.getSeconds(),u=e;return n<10&&(u+="0"),u+=n,a<10&&(u+="0"),u+=a,o<10&&(u+="0"),u+=o,i<10&&(u+="0"),u+=i,r<10&&(u+="0"),u+=r,this.time=u,u},newDiary(){window.open("https://github.com/frunoob/journal/new/master/journal/diary/"+this.CurentTime()+".md","_blank")},newPost(){window.open("https://github.com/frunoob/journal/new/master/journal/list/"+this.CurentTime()+".md","_blank")},uploadPic(){let t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),r=t.getSeconds(),u=(t.getTime(),"/"+e+"/"+n+"/"+a+"/"+o+"/"+i+"/"+r);window.open("https://github.com/frunoob/images/upload/main"+u,"_blank"),alert("复制成功\n![picture](https://raw.githubusercontent.com/frunoob/images/main"+u+"/pic.jpg)")}}},o=n(5),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:t.path2}},[t._v(" 📅看日记")]),t._v(" "),n("a",{on:{click:t.newDiary}},[t._v("👁‍🗨写日记")]),t._v(" "),n("a",{on:{click:t.newPost}},[t._v("🖊表文章")]),t._v(" "),n("a",{on:{click:t.uploadPic}},[t._v("~上传图片~")])])}),[],!1,null,null,null);e.default=i.exports}}]);