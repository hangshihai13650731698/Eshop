"use strict";function lunbotuOne(e){var t={ih:300,time:2,lebtn:400,ribtn:400};Object.assign(t,e);var n=document.getElementById(t.ele),l=(n.getElementsByClassName("imglist")[0],n.getElementsByClassName("list")[0]),s=n.getElementsByClassName("light")[0];n.getElementsByClassName("posibtn")[0];n.style.width=t.iw+"px",n.style.height=t.ih+"px";for(var a="",i="",r=0;r<t.imgurl.length;r++)a+='\n                        <li><img src="'+t.imgurl[r]+'" alt=""></li>\n                   ',i+="\n                        <span>"+(r+1)+"</span>\n                   ";l.innerHTML=a,s.innerHTML=i;var o=document.querySelectorAll(".list li");console.log(o);o[0].offsetWidth;o[0].style="z-index:1;";var c=null,m=0,u=2,g=document.getElementsByClassName("yijinav")[0],y=document.getElementsByClassName("indexbox")[0],d=["36,57,140","77,101,127","3,7,10","217,217,217","255,22,127","218,47,66"];function v(){m++,f(),b(),y.style.background="rgb("+d[m]+")",g.style.background="rgb("+d[m]+")"}function f(){if(m>o.length-1?m=0:m<0&&(m=o.length-1),u>o.length){var e=!0,t=!(u=1),n=void 0;try{for(var l,s=o[Symbol.iterator]();!(e=(l=s.next()).done);e=!0){l.value.style.zIndex=0}}catch(e){t=!0,n=e}finally{try{!e&&s.return&&s.return()}finally{if(t)throw n}}}o[m].style.zIndex=u++,o[m].style.opacity=0,startMove(o[m],{opacity:100}),b()}c=setInterval(v,1e3*t.time);var h=document.querySelectorAll(".light span");function b(){for(var e=0;e<h.length;e++)h[e].className="";h[m].className="active"}h[0].className="active",n.onmouseover=function(){clearInterval(c)},n.onmouseout=function(){c=setInterval(v,1e3*t.time)};for(r=0;r<h.length;r++)h[r].index=r,h[r].onmouseover=function(){m=this.index,f(),b(),y.style.background="rgb("+d[m]+")",g.style.background="rgb("+d[m]+")"}}