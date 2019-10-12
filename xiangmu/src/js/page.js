$(function () {
    //=======================点击E宠首页，调回首页=======================
    $("#back_homepage").click(function () {
        $(this).attr('cursor', 'pointer');
        window.open("shouye.html");
    });
    //=======================回到登录页=======================
    $("#gologin").click(function () {
        window.open('login.html');
    });
    //=======================回到注册页=======================
    $("#goreg").click(function () {
        window.open('register.html');
    });
    //=======================去到购物车=======================
    $(".right_li1").click(function () {
        window.open('cart.html');
    });
    //=======================导航栏的选项卡=======================

    $("#e_petnet .dog").hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $("#e_petnet  .cc_cord").css('display', 'block').siblings().css('display', 'none');
    });
    $("#e_petnet .good_type").hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $("#e_petnet .good_changecord").css('display', 'block').siblings().css('display', 'none');
    });

    //=======================数据渲染=======================
    let main = document.getElementById('main');
    let id = location.search.slice(1); //接收gid
    console.log(id);
    ajax({
        type: 'get',
        url: '../api/getpage.php',
        data: {
            id: id
        },
        dataType: 'json', //数据类型
        success: str1 => {
            // console.log(str1);
            let arr = JSON.parse(str1);
            console.log(arr);

            let html = arr.data.map(item => {
                return `
                <div class="goods_page" data-id="${item.id}">
                <div class="page_left">
                    <div id="MagnifierWrap2">
                        <div class="MagnifierMain">
                            <img class="MagTargetImg" src="${item.smallimg1}"
                                data-src="${item.smallimg1}">
                        </div>
                        <span class="spe_leftBtn">&lt;</span>
                        <span class="spe_rightBtn">&gt;</span>
                        <div class="spec-items">
                            <ul>
                                <li class="on">
                                    <img src="${item.smallimg1}" data-lsrc="${item.smallimg1}"
                                        data-maxSrc="${item.smallimg1}">
                                </li>
                                <li>
                                    <img src="${item.smallimg2}" data-lsrc="${item.smallimg2}"
                                        data-maxSrc="${item.smallimg2}">
                                </li>
                                <li>
                                    <img src="${item.bigimg}" data-lsrc="${item.bigimg}"
                                        data-maxSrc="${item.bigimg}">
                                </li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
                <div class="page_right">
                    <h1 class="gdtitle">
                    ${item.title}
                    </h1>
                    <div class="r_gdinfo">
                    无谷低敏 易消化食材 滋养皮肤 亮丽毛发 促进脑部发育
                    </div>
                    <div class="r_gdprice">
                        <p>市场价：<del>￥${item.yuanjia}</del></p>
                        <p>E宠价：<span>￥${item.xianjia}</span></p>
                    </div>
                    <div class="r_gdattr">
                        <p>已售：<span>${item.yishouchu}</span>袋</p>
                        <p>评价：<span>999</span></p>
                        <p>咨询：<span>888</span></p>
                    </div>
                    <div class="r_gd">
                        <span>正品保证</span>
                        &nbsp;&nbsp;<span>99元包邮</span>
                        &nbsp;&nbsp;<span>30天内退货</span>
                    </div>
                    <div class="r_gdguige">
                        规格：
                        <p>3磅</p>&nbsp;&nbsp;
                        <p>16磅</p>&nbsp;&nbsp;
                        <p>20磅</p>&nbsp;&nbsp;
                    </div>
                    <div class="r_gdnum">
                        <p>
                            我要买:
                            <span class="nums">
                                <span class="cutnum num11">-</span>
                                <input class="nownum" data-num="10" type="text" value="1" />
                                <span class="addnum num11">+</span>
         
                            </span>
                            袋
                        </p>
                    </div>
                    <div class="r_gdsend">
                        <p>发货至：<select name="" id="">
                                <option value="">重庆 渝川区</option>
                                <option value="">广州 天河区</option>
                            </select>
                        </p>
                        <span class="tips">
                            E宠快递15点前下单，其他快递16点前下单，当天发货，运费详情>>
                        </span>
                    </div>
                    <div class="r_gdaddcar" id="addcart">
                        加入购物车
                    </div>
                </div>
            </div>
                 `;
            }).join('');
            main.innerHTML = html;

            //=======================点击加减修改数量=======================
            function total(now, num) {
                let kucun = $(now).parent().find('.nownum').data('num')
                if (num < 1) {
                    num = 1;
                } else if (num > kucun) {
                    num = kucun;
                    $('.num_tips').html('您输入已超过库存');
                }
                $('.nownum').val(num);
            }
            //=======================加=======================
            $('.nums').on('click', '.addnum', function () {
                var num = $(this).prev().val();
                num++;
                total($(this), num);
            });
            //=======================减=======================
            $('.nums').on('click', '.cutnum', function () {
                var num = $(this).next().val();
                num--;
                total($(this), num);
            });
            //=======================手动输入=======================
            $('.nums').on('input', '.nownum', function () {
                var num = $(this).val();
                total($(this), num);
            });

            $("#addcart").on("click", function () {
                let counts = $('.nownum').val(); //数量
                // console.log(counts);
                let userphone = getCookie("phone"); //手机号
                let gid = arr.data[0].id;
                let title = arr.data[0].title;
                let imgsrc = arr.data[0].bigimg;
                let xianjia = arr.data[0].xianjia;
                // console.log(userphone);
                console.log(gid, userphone, title, imgsrc, counts, xianjia);
                if (gid) {
                    $.ajax({
                        type: 'get',
                        url: '../api/pageaddcar.php', //加入购物车用来穿的接口
                        data: {
                            gid: gid,
                            phone: userphone,
                            title: title,
                            xianjia: xianjia,
                            counts: counts,
                            img: imgsrc,
                        },
                        success: str2 => {
                            console.log(str2)
                            window.open(`cart.html?` + gid);
                        }
                    });
                }
            });
        }
    });
    zuji(id);
    // ——————————————————————足迹函数————————————————
    function zuji(id) {
        let goodlist = localStorage.goodlist;
        if (goodlist) {
            // 证明有足迹
            let arr = goodlist.split('&');
            let index = arr.indexOf(id);
            let str = '';
            if (index >= 0) { //有id
                arr.splice(index, 1);
                arr.push(id);
                str = arr.join('&'); //拼接
            } else {
                //没有
                str = goodlist + '&' + id;
            }
            localStorage.goodlist = str;
        } else {
            //没有足迹
            localStorage.goodlist = id;
        }
    }
    /* =======================商品下方的选项卡======================= */
    $(" .ir_changes .ir_con").click(function () {
        $(this).addClass("ir_active").siblings().removeClass("ir_active");
        $(".ir_cords .ir_cord").eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    /*======================= 回到顶部======================= */
    $(".back_top").click(function () {
        //=======================滚动时 滚动条离上部的距离=======================
        var distance = $("html").scrollTop() + $("body").scrollTop();
        //=======================设置滚动的总时间=======================
        var time = 500;
        //=======================间隔时间=======================
        var intervalTime = 50;
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