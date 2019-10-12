"use strict";function randomCode(){for(var t="",e=0;e<4;e++)t+=parseInt(10*Math.random());return t}function randomColor(t){var e="";if(16==t){var n="1234567890abcdef";e+="#";for(var r=0;r<6;r++){e+=n[parseInt(Math.random()*n.length)]}}else if("rgb"==t)e="rgb("+parseInt(266*Math.random())+", "+parseInt(266*Math.random())+", "+parseInt(266*Math.random())+")";return e}function randomNum(){for(var t="0987654321zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP",e="",n=0;n<4;n++){e+=t[parseInt(Math.random()*t.length)]}return e}function css(){var t=arguments[0],e=arguments[1];if(2==arguments.length)return getComputedStyle(t,!1)?getComputedStyle(t,!1)[e]:t.currentStyle(e);if(3==arguments.length){var n=arguments[2];t.style[e]=n}}function getid(t){return document.getElementById(t)}function ranNum(t,e){return parseInt(Math.random()*(e-t+1))+t}function tab(e,n,r){for(var t=0;t<e.length;t++)e[t].index=t,e[t].onmouseover=function(){for(var t=0;t<e.length;t++)e[t].className="",n[t].style.display="none";this.className=r,console.log(this.index),n[this.index].style.display="block"}}function strToObj(t){var n={};return(0<=t.indexOf("?")?t.slice(t.indexOf("?")+1):t).split("&").forEach(function(t){var e=t.split("=");n[e[0]]=e[1]}),n}function objToStr(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.slice(0,-1)}function toDb(t){return t<10?"0"+t:""+t}function getTime(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),a=t.getHours(),o=t.getMinutes(),s=t.getSeconds(),i=t.getDay(),u="天一二三四五六";return u="星期"+u.charAt(i),{years:e,mons:toDb(n),dates:toDb(r),hours:toDb(a),mins:toDb(o),secs:toDb(s),weeks:u}}function secChang(t){var e=t%60,n=parseInt(t/60)%60,r=parseInt(t/60/60)%24;return{days:parseInt(t/60/60/24),hours:r,mins:n,secs:e}}function firstChild(t){return t.firstElementChild?t.firstElementChild:t.firstChild}function filterStr(n){return["反清复明","操","fuck","小学生","垃圾"].forEach(function(t){var e=new RegExp(t,"ig");n=n.replace(e,"***")}),n}var checkReg={trim:function(t){return t.replace(/^\s+|\s+$/g,"")},tel:function(t){return/^1[3-9]\d{9}$/.test(t)},email:function(t){return/^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)},idcard:function(t){return/^(\d{17}|\d{14})[\dX]$/.test(t)},psweasy:function(t){return/^[a-zA-Z]\w{5,17}$/.test(t)},pwwagain:function(t,e){return t===e},urladr:function(t){return/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/.test(t)},name:function(t){return/^[a-zA-Z][\w\-]{5,19}$/.test(t)},chinese:function(t){return/^[\u2E80-\u9FFF]+$/.test(t)},birthday:function(t){return/^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/.test(t)}};function cloneDeep(t){var e=JSON.stringify(t);return JSON.parse(e)}function startMove(a,o,s){clearInterval(a.timer),a.timer=setInterval(function(){var t=!0;for(var e in o){var n=0;n="opacity"==e?100*css(a,e):parseInt(css(a,e));var r=(o[e]-n)/6;r=0<r?Math.ceil(r):Math.floor(r),t=n==o[e],"opacity"==e?(a.style.opacity=(n+r)/100,a.style.filter="alpha(opacity:"+(n+r)+")"):a.style[e]=n+r+"px"}t&&(clearInterval(a.timer),s&&s())},30)}function setCookie(t,e,n){var r=new Date;r.setDate(r.getDate()+n),document.cookie=t+"="+e+";expires="+r.toUTCString()+";path=/"}function getCookie(t){for(var e=document.cookie.split("; "),n=0;n<e.length;n++){var r=e[n].split("=");if(t==r[0])return r[1]}}function removeCookie(t){setCookie(t,"",-1)}function GetBytes(t){for(var e=t.length,n=e,r=0;r<e;r++)255<t.charCodeAt(r)&&n++;return n}function ajax(t){var e={data:"",asyn:!0,error:null};Object.assign(e,t);var n=new XMLHttpRequest;if("get"==e.type.toLowerCase())e.data&&(e.url=e.url+"?"+objToStr(e.data)),n.open("get",e.url,e.asyn),n.send(null);else{n.open("post",e.url,e.asyn);var r=objToStr(e.data);n.setRequestHeader("content-type","application/x-www-form-urlencoded"),n.send(r)}n.onreadystatechange=function(){4==n.readyState&&(200==n.status?e.success(n.responseText):e.error&&e.error(n.status))}}