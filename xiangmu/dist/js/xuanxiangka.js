"use strict";var _createClass=function(){function i(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}}();function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}!function(){function e(n){_classCallCheck(this,e),this.xuanka=$(n),this.init()}function t(n){_classCallCheck(this,t),this.back=$(n),this.init()}new(_createClass(e,[{key:"init",value:function(){this.mouser()}},{key:"mouser",value:function(){this.xuanka.on("mouseover"," .dog_staple .sc_cord li",function(){$(this).addClass("active").siblings().removeClass("active"),$(".liebiao_xuanran").eq($(this).index()).css("display","block").siblings().css("display","none")})}}]),e)("#floolist"),new(_createClass(t,[{key:"init",value:function(){this.top()}},{key:"top",value:function(){this.back.on("click",".back_top",function(){var n=$("html").scrollTop()+$("body").scrollTop(),e=n/10,t=setInterval(function(){(n-=e)<=0&&clearInterval(t),$("html,body").scrollTop(n-e)},50)})}}]),t)("#side_nav")}();