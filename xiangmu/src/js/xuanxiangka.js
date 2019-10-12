(function () {
    class xuanxiangka {
        constructor(id) {
            this.xuanka = $(id);
            this.init(); //方法入口
        }
        init() {
            //查找节点，和绑定事件 各种方法的设置入口
            this.mouser();//方法名

        }
        mouser() {
            // let _this = this; //调用方法时用this来指向
            this.xuanka.on('mouseover', ' .dog_staple .sc_cord li', function () {
                $(this).addClass('active').siblings().removeClass('active'); //添加高亮样式
                $(".liebiao_xuanran").eq($(this).index()).css('display', 'block').siblings().css('display',
                    'none');
            });
        }

    }
    new xuanxiangka('#floolist');
    class backtop {
        constructor(id) {
            this.back = $(id);
            this.init(); //方法入口
        }
        init() {
            this.top();
        }
        top() {
            // let _this = this;//遇到函数和事件时要纠正指向调用方法时用_this来指向
            this.back.on('click', '.back_top', function () {
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
        }
    }
    new backtop('#side_nav');
})();