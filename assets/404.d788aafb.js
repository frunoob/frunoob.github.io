import{e,u as t,f as a,r as o,o as n,c as l,a as s,t as u,w as r,b as c}from"./client.e4a0ad41.js";var m=e({name:"404",setup(){var e,o,n;const l=t(),s=a(),u=null!=(e=s.value.notFound)?e:["Not Found"];return{getMsg:()=>u[Math.floor(Math.random()*u.length)],homeLink:null!=(o=s.value.home)?o:l.value,homeText:null!=(n=s.value.backToHome)?n:"Back to home"}}});const h={class:"theme-container"},d={class:"theme-default-content"},i=s("h1",null,"404",-1);m.render=function(e,t,a,m,v,f){const k=o("RouterLink");return n(),l("div",h,[s("div",d,[i,s("blockquote",null,u(e.getMsg()),1),s(k,{to:e.homeLink},{default:r((()=>[c(u(e.homeText),1)])),_:1},8,["to"])])])};export default m;