$(function () {
    //======================点击E宠首页，调回首页======================
    $("#back_homepage").click(function () {
        $(this).attr('cursor', 'pointer');
        window.open("shouye.html");
    });
    //======================回到登录页======================
    $("#gologin").click(function () {
        window.open('login.html');
    });
    //======================回到注册页======================
    $("#goreg").click(function () {
        window.open('register.html');
    });
    //======================去到购物车======================
    $(".right_li1").click(function () {
        window.open('cart.html');
    });
    //======================导航栏======================
    $("#e_petnet .dog").hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $("#e_petnet  .cc_cord").css('display', 'block').siblings().css('display', 'none');
    });
    $("#e_petnet .good_type").hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $("#e_petnet .good_changecord").css('display', 'block').siblings().css('display', 'none');
    });

    /* 渲染 分页 排序 */
    //数据按需加载，需要几条就加载几条
    let ipage = 1; //获取第一页数据
    let num = 20; //每页显示20条

    function init() {
        // 获取数据渲染到列表页
        ajax({
            type: 'get',
            url: '../api/getlist.php',
            data: {
                page: ipage,
                num: num,
            },
            dataType: 'json',
            success: str1 => {
                // console.log(str1);
                let arr = JSON.parse(str1);
                console.log(arr);
                let html = arr.data.map(item => {
                    return `
                                <li class="m_list" data-id="${item.id}">
                                    <p class="mm_bigimg">
                                        <a href=""> <img class='datu' src="${item.bigimg}" alt=""></a>
                                    </p>
                                    <p class="mm_smallimg">
                                        <a class="m_listt"  href=""> <img class="xiaotu" src="${item.smallimg1}" alt=""></a>
                                        <a class="m_listt"  href=""> <img class="xiaotu" src="${item.smallimg2}" alt=""></a>
                                    </p>
                                    <p class="mm_con">
                                    ${item.title}
                                    </p>
                                    <p class="mm_guige">
                                        <span><del>￥${item.yuanjia}</del></span>
                                        <span class="suiprise_price">￥${item.xianjia}</span>
                                        <span>${item.danjia}元/斤</span>
                                    </p>
                                    <p class="mm_hudong">
                                        <span>已售${item.yishouchu}袋</span>
                                        <span>${item.hudong}互动</span>
                                    </p>
                                    </li>
                    `;
                }).join('');
                $(".ml_liebiao").html(html);
                // 划过时加边框
                $(".m_list").mouseenter(function () {
                    $(this).css('border', '3px solid #e74085');
                });
                $(".m_list").mouseleave(function () {
                    $(this).css('border', 'none');
                });
                // 划过小图时加边框
                $('.m_listt:first-child').css('border', '1px solid #e74085');
                $(".m_listt").mouseenter(function () {
                    $(this).css('border', '1px solid #e74085').siblings().css('border', 'none');
                   
                });
                $(".m_listt").mouseleave(function () {
                    $(this).css('border', '1px solid #cccccc');
                });
                $(".xiaotu").mouseenter(function name(params) {
                    $('.datu').attr({src:this.src})
                })

                //========================带参数实现跳转到详情页========================
                $('.ml_liebiao').on('click', 'li', function () {
                    let id = $(this).attr("data-id");
                    // zuji(id);
                    window.open(`page.html?` + id);
                    // console.log(id)
                });

                // ========================渲染页码========================
                let total = Math.ceil(arr.total / arr.num); //总页码数,向上取整
                let spanstr = '';
                for (let i = 0; i < total; i++) {
                    spanstr += `
                                    <p class="yema">${i+1}</p>        
                                `;
                }
                $('.fenye').html(spanstr);
                $('.fenye').children().eq(ipage - 1).addClass('ye_active'); //高亮
            }
        });
    }
    init();

    //========================事件委托实现翻页========================
    $('.fenye').on('click', 'p', function () {
        ipage = $(this).html();
        init();
    });

    // ========================排序========================
    $('.order_list #order_btn').click(function () {
        let order1 = ''; //开关
        if (this.value == '升序') {
            this.value = '降序';
            order1 = 'asc';
        } else if (this.value == '降序') {
            this.value = '升序';
            order1 = 'desc';
        }
        //=========点击一次就要发送一次请求========================
        ajax({
            type: 'get',
            url: '../api/order.php',
            data: {
                order: order1
            },
            success: str2 => {
                let arr1 = JSON.parse(str2);
                console.log(arr1);
                let html = arr1.map(item => {
                    return `
                                <li class="m_list" data-id="${item.gid}">
                                    <p class="mm_bigimg">
                                        <a href=""> <img src="${item.bigimg}" alt=""></a>
                                    </p>
                                    <p class="mm_smallimg">
                                        <a href=""> <img src="${item.smallimg1}" alt=""></a>
                                        <a href=""> <img src="${item.smallimg2}" alt=""></a>
                                    </p>
                                    <p class="mm_con">
                                    ${item.title}
                                    </p>
                                    <p class="mm_guige">
                                        <span><del>￥${item.yuanjia}</del></span>
                                        <span class="suiprise_price">￥${item.xianjia}</span>
                                        <span>${item.danjia}元/斤</span>
                                    </p>
                                    <p class="mm_hudong">
                                        <span>已售${item.yishouchu}袋</span>
                                        <span>${item.hudong}互动</span>
                                    </p>
                                    </li>
                                `;
                }).join('');

                $(".ml_liebiao").html(html);
            }
        });
    });
    /* =================拿到现价，进行价格区间查询======================== */
    $("#sure").click(function () {
        let price1 = $(".min").val();
        let price2 = $(".max").val();
        ajax({
            type: 'get',
            url: '../api/priceRange.php',
            data: {
                min: price1,
                max: price2
            },
            success: str3 => {
                let arr3 = JSON.parse(str3);
                let html = arr3.map(item => {
                    return `
                                <li class="m_list" data-id="${item.gid}">
                                    <p class="mm_bigimg">
                                        <a href=""> <img src="${item.bigimg}" alt=""></a>
                                    </p>
                                    <p class="mm_smallimg">
                                        <a href=""> <img src="${item.smallimg1}" alt=""></a>
                                        <a href=""> <img src="${item.smallimg2}" alt=""></a>
                                    </p>
                                    <p class="mm_con">
                                    ${item.title}
                                    </p>
                                    <p class="mm_guige">
                                        <span><del>￥${item.yuanjia}</del></span>
                                        <span class="suiprise_price">￥${item.xianjia}</span>
                                        <span>${item.danjia}元/斤</span>
                                    </p>
                                    <p class="mm_hudong">
                                        <span>已售${item.yishouchu}袋</span>
                                        <span>${item.hudong}互动</span>
                                    </p>
                                    </li>
                                `;
                }).join('');
                $(".ml_liebiao").html(html);
            }
        });

    });

    /* ========================回到顶部======================== */
    $(".back_top").click(function () {
        //========================滚动时 滚动条离上部的距离========================
        var distance = $("html").scrollTop() + $("body").scrollTop();
        //========================设置滚动的总时间========================
        var time = 500;
        //========================间隔时间=======================
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