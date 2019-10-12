$(function () {

	//=====================点击跳转首页=====================
	$(".back_homepage").click(function () {
		$(this).attr('cursor', 'pointer');
		window.open("shouye.html");
	});
	// ===============请求并渲染===========================

	$.ajax({
		type: 'POST',
		url: '../api/cartform.php',
		data: {
			phone: getCookie("phone"),
		},
		success: str => {
			if (str != 'no') {
				var arr = JSON.parse(str);
				// console.log(222);
				init(arr);
			} else {
				console.log(222);
			}

		},
	});

	function init(str) {
		let html = str.map(item => {
			return `
			<ul class="order_lists"  data_goodid=${item.gid}>
				<!-- 勾选框 -->
				<li class="list_chk">
					<input type="checkbox"  class="son_check">
				</li>

				<li class="list_con">
				<!-- 图片 -->
					<div class="list_img"><a href="###"><img src="${item.img}" alt=""></a></div>
					<!-- 标题 -->
					<div class="list_text"><a href="###">${item.title}</a></div>
				</li>
				<!-- 单价 -->
				<li class="list_price">
					<p class="price">${item.xianjia}</p>
				</li>
				<!-- 数量加减 -->
				<li class="list_amount">
					<div class="amount_box">
						<a href="###" class="reduce reSty">-</a>
						<input type="text" value="${item.counts}" class="sum" data-num="10">
						<a href="###" class="plus">+</a>
					</div>
				</li>
				<!-- 小计 -->
				<li class="list_sum">
					<p class="sum_price">${item.xianjia*item.counts}</p>
				</li>
				<!-- 删除 -->
				<li class="list_op">
					<p class="del"><a href="###" class="delBtn">[删除]</a></p>
				</li>
			</ul>
	`;

		}).join('');
		$(".allCartBox").html(html); //渲染
		//========判断购物车数量是否为空（隐藏）============= 
		if (str.length == 0) {
			$(".cartTop").hide();
			$(".bar-wrapper").hide();
			$(".allCartBox").html(`<img class="emptyImg" src="" alt="">
			<a class="gotobuy" href="shouye.html">马上购物</a>`);
		} else { //  新数组渲染

			// ============= 全选============= 
			$(".whole_check").click(function () {
				let a = $(this).prop("checked");
				if (a) {
					$(".allCartBox input").prop("checked", true);
				} else {
					$(".allCartBox input").prop("checked", false);
				}
				totalMoney();
			});

			// ============= 单选影响全选============= 
			$(".allCartBox .order_lists .son_check").click(function name(params) {

				let arr = []; // 存储单个商品状态
				$(".allCartBox .order_lists .son_check").each(function name(params) {
					arr.push($(this).prop("checked"));
					console.log(arr)
				});

				let arrSet = [...new Set(arr)];
				if ($.inArray(false, arrSet) == -1) {
					$(".whole_check").prop("checked", true); //全选框的状态
				} else {
					$(".whole_check").prop("checked", false);
				}
				totalMoney();
			});

			//=========================商品数量和各种属性的获取==============================================
			$sonCheckBox = $('.son_check'); //每个商品勾选框

			var $plus = $('.plus'), //+
				$reduce = $('.reduce'), //-
				$all_sum = $('.sum'); //购买商品数量

			// ===================点击加号===================
			$plus.click(function () {
				var $inputVal = $(this).prev('input'), //输入框
					$count = parseInt($inputVal.val()) + 1, //数量加+
					$obj = $(this).parents('.amount_box').find('.reduce'), //减
					$priceTotalObj = $(this).parents('.order_lists').find('.sum_price'), //小计
					$price = $(this).parents('.order_lists').find('.price').html(), //单价
					$data_kucun = $(this).parents('.order_lists').attr("data_storenumber"), //库存

					$phone = getCookie("phone"); //获取出用户号码好对应修改数据
				console.log($phone)
				$priceTotal = $count * $price; //小计

				let kuncun = $(this).parent().find('.sum').data('num'); //库存
				console.log(kuncun)
				if (kuncun > $count - 1) {
					$inputVal.val($count)
				} else {
					alert(`库存不足`)
				}

				$priceTotalObj.html($priceTotal); //总计
				if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
					$obj.removeClass('reSty');
				}
				totalMoney(); //总计

				// ===================更新数据库表===================
				let data_goodid = $(this).parents('.order_lists').attr("data_goodid");
				let goodNum = $count;
				let user = $phone; //自加减
				carChangeNumber(user, data_goodid, goodNum); //数量改变更新数据库
			});

			//=================== 更新数据库表===================
			function carChangeNumber(user, data_goodid, goodNum) {
				$.ajax({
					type: "post",
					dataType: "json",
					url: "../api/carChangeNumber.php",
					data: {
						"phone": user,
						"gid": data_goodid,
						"counts": goodNum,
					},
					success: str => {
						console.log(str);
					}
				})
			}

			// ===================点击减号(同上)===================
			$reduce.click(function () {
				var $inputVal = $(this).next('input'),
					$count = parseInt($inputVal.val()) - 1,
					$priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
					$price = $(this).parents('.order_lists').find('.price').html(), //单价
					$priceTotal = $count * $price;
				$phone = getCookie("phone"); //获取出用户号码好对应修改数据
				console.log($phone)
				if ($inputVal.val() > 1) {
					$inputVal.val($count);
					$priceTotalObj.html($priceTotal);
				}
				if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
					$(this).addClass('reSty');
				}
				totalMoney();
				// ===================更新数据库表===================
				let data_goodid = $(this).parents('.order_lists').attr("data_goodid");
				let goodNum = $count;
				let user = $phone;
				carChangeNumber(user, data_goodid, goodNum);
			});

			// ===================手动输入===================
			$all_sum.keyup(function () {
				var $count = 0,
					$priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
					$price = $(this).parents('.order_lists').find('.price').html(), //单价
					$priceTotal = 0;
				if ($(this).val() == '') {
					$(this).val('1');
				}
				if ($(this).val() > 10) {
					$(this).val('10');
				}
				$(this).val($(this).val().replace(/\D|^0/g, ''));
				$count = $(this).val(); //输入框数量
				$priceTotal = $count * parseInt($price); //小计
				$(this).attr('value', $count); //渲染
				$priceTotalObj.html($priceTotal);
				totalMoney();
			});
			// ——————————————失去焦点————————————
			$all_sum.blur(function name(params) {
				var $data_kucun = $(this).parents('.order_lists').attr("data_storenumber"); //库存
				$phone = getCookie("phone"); //获取出用户号码好对应修改数据
				console.log($phone)
				if ($(this).val() * 1 > $data_kucun * 1) {

					$(this).val($data_kucun);
					confirm(`库存${$data_kucun}`);

					$priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
						$price = $(this).parents('.order_lists').find('.price').html(), //单价
						$priceTotal = $(this).val() * $price; //小计
					$priceTotalObj.html($priceTotal); //渲染
				} else {

					// ===================发送请求更新数据库表===================
					let data_goodid = $(this).parents('.order_lists').attr("data_goodid");
					let goodNum = $(this).val();
					let user = $phone;
					carChangeNumber(user, data_goodid, goodNum);
				}
			});

			//=========================删除商品========================================
			// ===================更新数据库表===================
			function carDeleteGoods(user, data_goodid) {
				$.ajax({
					type: "POST",
					dataType: "json",
					url: "../api/carDeleteGoods.php",
					data: {
						"phone": user,
						"gid": data_goodid,
					},
					success: str => {
						console.log(str);
					}
				})
			};

			var $order_lists = null;
			var $order_content = '';
			// 点击删除按钮时单个删除更新数据表 已经解决
			$('.delBtn').click(function () {
				$order_lists = $(this).parents('.order_lists');
				$order_content = $order_lists.parents('.order_content');
				// confirm('你确定删除该宝贝嘛') //系统弹窗就是这样取消了也没用
				// ————缺一不可——————
				// $phone = getCookie("phone"); //获取出用户号码好对应修改数据
				// console.log($phone)
				// ————————点击删除时弹窗出来————————
				$('.model_bg').fadeIn(300);
				$('.my_model').fadeIn(300);

				// let ok=confirm('你确定删除该宝贝嘛');
				// console.log(ok)
				// ===================发送请求更新数据库表===================

				// if (ok== true) {
				console.log(88999)
				$phone = getCookie("phone");
				let data_goodid = $(this).parents('.order_lists').attr("data_goodid");
				let user = $phone; //单个删除商品
				carDeleteGoods(user, data_goodid); //调用方法
				// window.location.reload(); //每点一次自行加载一次记住好用
			});
			// ===================批量删除===================
			$(".bar-right .delete ").click(function name(params) {

				$phone = getCookie("phone");
				// 自增内容
				$('.model_bg').fadeIn(300);
				$('.my_model').fadeIn(300);

				// 全删 有一点小问题明天解决
				$(".son_check").each(function name(index, item) {

					let a = $(item).prop("checked");
					let user = $phone;
					if (a) { //为真时发送删除请求
						let ok = confirm('确定删除该宝贝吗');
						if (ok == true) {


							let data_goodid = $(item).parents('.order_lists').attr("data_goodid");
							carDeleteGoods(user, data_goodid);
						}
					}

					// window.location.reload(); //页面实现跳转和刷新
				})

			});

			//=============关闭模态框(淡出)=================
			$('.closeModel').click(function () {
				closeM();
			});
			$('.dialog-close').click(function () {
				closeM();
			});
			//===================淡出===================
			function closeM() {
				$('.model_bg').fadeOut(300);
				$('.my_model').fadeOut(300);
			};
			//===================点击弹窗的确定按钮删除商品===================
			$('.dialog-sure').click(function () {
				$order_lists.remove(); //删除列
				if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
					$order_content.parents('.cartBox').remove();
				}
				closeM(); //点击关闭慢慢淡出来

				$sonCheckBox = $('.son_check');
				totalMoney();
				// sanchu();
				// $phone = getCookie("phone");
				// let data_goodid = $(this).parents('.order_lists').attr("data_goodid");
				// let user = $phone; //单个删除商品
				// carDeleteGoods(user, data_goodid); //调用方法
				// window.location.reload();
				// window.location.reload();
			});


			//==============购物结算======================
			function totalMoney() {

				var total_money = 0; //总金额
				var total_count = 0; //总数量
				var calBtn = $('.calBtn a');

				$sonCheckBox.each(function () {
					if ($(this).is(':checked')) {
						var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html());
						var num = parseInt($(this).parents('.order_lists').find('.sum').val());
						total_money += goods;
						total_count += num;
					}
				});
				$('.total_text').html('￥' + total_money);
				$('.piece_num').html(total_count);

				// console.log(total_money,total_count);
				if (total_money != 0 && total_count != 0) {
					if (!calBtn.hasClass('btn_sty')) {
						calBtn.addClass('btn_sty');
					}
				} else {
					if (calBtn.hasClass('btn_sty')) {
						calBtn.removeClass('btn_sty');
					}
				}
			};
		}
	}

	/* ===========================回到首页======================= */
	$(".bar-left").click(function () {
		$(this).attr('cursor', 'pointer');
		window.open("shouye.html");
	});

	/* ==================快速回到顶部=================== */
	$(".back_top").click(function () {
		//===================滚动时 滚动条离上部的距离===================
		var distance = $("html").scrollTop() + $("body").scrollTop();
		//===================设置滚动的总时间===================
		var time = 500;
		//===================间隔时间===================
		var intervalTime = 100;
		var itemDistance = distance / (time / intervalTime);
		var intervalId = setInterval(function () {
			distance -= itemDistance;
			if (distance <= 0) {
				clearInterval(intervalId);
			}
			$("html,body").scrollTop(distance - itemDistance);
		}, intervalTime);
	});
});