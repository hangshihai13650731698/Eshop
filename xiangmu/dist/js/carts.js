"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,s=Array(t.length);e<t.length;e++)s[e]=t[e];return s}return Array.from(t)}$(function(){$(".back_homepage").click(function(){$(this).attr("cursor","pointer"),window.open("shouye.html")}),$.ajax({type:"POST",url:"../api/cartform.php",data:{phone:getCookie("phone")},success:function(t){"no"!=t?function(t){var e=t.map(function(t){return'\n\t\t\t<ul class="order_lists"  data_goodid='+t.gid+'>\n\t\t\t\t\x3c!-- 勾选框 --\x3e\n\t\t\t\t<li class="list_chk">\n\t\t\t\t\t<input type="checkbox"  class="son_check">\n\t\t\t\t</li>\n\n\t\t\t\t<li class="list_con">\n\t\t\t\t\x3c!-- 图片 --\x3e\n\t\t\t\t\t<div class="list_img"><a href="###"><img src="'+t.img+'" alt=""></a></div>\n\t\t\t\t\t\x3c!-- 标题 --\x3e\n\t\t\t\t\t<div class="list_text"><a href="###">'+t.title+'</a></div>\n\t\t\t\t</li>\n\t\t\t\t\x3c!-- 单价 --\x3e\n\t\t\t\t<li class="list_price">\n\t\t\t\t\t<p class="price">'+t.xianjia+'</p>\n\t\t\t\t</li>\n\t\t\t\t\x3c!-- 数量加减 --\x3e\n\t\t\t\t<li class="list_amount">\n\t\t\t\t\t<div class="amount_box">\n\t\t\t\t\t\t<a href="###" class="reduce reSty">-</a>\n\t\t\t\t\t\t<input type="text" value="'+t.counts+'" class="sum" data-num="10">\n\t\t\t\t\t\t<a href="###" class="plus">+</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t\x3c!-- 小计 --\x3e\n\t\t\t\t<li class="list_sum">\n\t\t\t\t\t<p class="sum_price">'+t.xianjia*t.counts+'</p>\n\t\t\t\t</li>\n\t\t\t\t\x3c!-- 删除 --\x3e\n\t\t\t\t<li class="list_op">\n\t\t\t\t\t<p class="del"><a href="###" class="delBtn">[删除]</a></p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t'}).join("");if($(".allCartBox").html(e),0==t.length)$(".cartTop").hide(),$(".bar-wrapper").hide(),$(".allCartBox").html('<img class="emptyImg" src="" alt="">\n\t\t\t<a class="gotobuy" href="shouye.html">马上购物</a>');else{var l=function(t,e,s){$.ajax({type:"post",dataType:"json",url:"../api/carChangeNumber.php",data:{phone:t,gid:e,counts:s},success:function(t){console.log(t)}})},o=function(t,e){$.ajax({type:"POST",dataType:"json",url:"../api/carDeleteGoods.php",data:{phone:t,gid:e},success:function(t){console.log(t)}})},s=function(){$(".model_bg").fadeOut(300),$(".my_model").fadeOut(300)},c=function(){var s=0,a=0,t=$(".calBtn a");$sonCheckBox.each(function(){if($(this).is(":checked")){var t=parseInt($(this).parents(".order_lists").find(".sum_price").html()),e=parseInt($(this).parents(".order_lists").find(".sum").val());s+=t,a+=e}}),$(".total_text").html("￥"+s),$(".piece_num").html(a),0!=s&&0!=a?t.hasClass("btn_sty")||t.addClass("btn_sty"):t.hasClass("btn_sty")&&t.removeClass("btn_sty")};$(".whole_check").click(function(){$(this).prop("checked")?$(".allCartBox input").prop("checked",!0):$(".allCartBox input").prop("checked",!1),c()}),$(".allCartBox .order_lists .son_check").click(function(t){var e=[];$(".allCartBox .order_lists .son_check").each(function(t){e.push($(this).prop("checked")),console.log(e)});var s=[].concat(_toConsumableArray(new Set(e)));-1==$.inArray(!1,s)?$(".whole_check").prop("checked",!0):$(".whole_check").prop("checked",!1),c()}),$sonCheckBox=$(".son_check");var a=$(".plus"),n=$(".reduce"),r=$(".sum");a.click(function(){var t=$(this).prev("input"),e=parseInt(t.val())+1,s=$(this).parents(".amount_box").find(".reduce"),a=$(this).parents(".order_lists").find(".sum_price"),n=$(this).parents(".order_lists").find(".price").html(),o=($(this).parents(".order_lists").attr("data_storenumber"),getCookie("phone"));console.log(o),$priceTotal=e*n;var r=$(this).parent().find(".sum").data("num");console.log(r),e-1<r?t.val(e):alert("库存不足"),a.html($priceTotal),1<t.val()&&s.hasClass("reSty")&&s.removeClass("reSty"),c();var i=$(this).parents(".order_lists").attr("data_goodid");l(o,i,e)}),n.click(function(){var t=$(this).next("input"),e=parseInt(t.val())-1,s=$(this).parents(".order_lists").find(".sum_price"),a=e*$(this).parents(".order_lists").find(".price").html();$phone=getCookie("phone"),console.log($phone),1<t.val()&&(t.val(e),s.html(a)),1!=t.val()||$(this).hasClass("reSty")||$(this).addClass("reSty"),c();var n=$(this).parents(".order_lists").attr("data_goodid"),o=$phone;l(o,n,e)}),r.keyup(function(){var t,e,s=$(this).parents(".order_lists").find(".sum_price"),a=$(this).parents(".order_lists").find(".price").html();""==$(this).val()&&$(this).val("1"),10<$(this).val()&&$(this).val("10"),$(this).val($(this).val().replace(/\D|^0/g,"")),e=(t=$(this).val())*parseInt(a),$(this).attr("value",t),s.html(e),c()}),r.blur(function(t){var e=$(this).parents(".order_lists").attr("data_storenumber");if($phone=getCookie("phone"),console.log($phone),1*$(this).val()>1*e)$(this).val(e),confirm("库存"+e),$priceTotalObj=$(this).parents(".order_lists").find(".sum_price"),$price=$(this).parents(".order_lists").find(".price").html(),$priceTotal=$(this).val()*$price,$priceTotalObj.html($priceTotal);else{var s=$(this).parents(".order_lists").attr("data_goodid"),a=$(this).val(),n=$phone;l(n,s,a)}});var i=null,h="";$(".delBtn").click(function(){i=$(this).parents(".order_lists"),h=i.parents(".order_content"),$(".model_bg").fadeIn(300),$(".my_model").fadeIn(300),console.log(88999),$phone=getCookie("phone");var t=$(this).parents(".order_lists").attr("data_goodid"),e=$phone;o(e,t)}),$(".bar-right .delete ").click(function(t){$phone=getCookie("phone"),$(".model_bg").fadeIn(300),$(".my_model").fadeIn(300),$(".son_check").each(function(t,e){var s=$(e).prop("checked"),a=$phone;if(s&&1==confirm("确定删除该宝贝吗")){var n=$(e).parents(".order_lists").attr("data_goodid");o(a,n)}})}),$(".closeModel").click(function(){s()}),$(".dialog-close").click(function(){s()}),$(".dialog-sure").click(function(){i.remove(),null!=h.html().trim()&&0!=h.html().trim().length||h.parents(".cartBox").remove(),s(),$sonCheckBox=$(".son_check"),c()})}}(JSON.parse(t)):console.log(222)}}),$(".bar-left").click(function(){$(this).attr("cursor","pointer"),window.open("shouye.html")}),$(".back_top").click(function(){var t=$("html").scrollTop()+$("body").scrollTop(),e=t/5,s=setInterval(function(){(t-=e)<=0&&clearInterval(s),$("html,body").scrollTop(t-e)},100)})});