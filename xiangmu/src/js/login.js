$(function () {
    //如果没有注册就点击跳转注册页
    //点击生成验证码
    let mpanel = document.getElementById('mpanel');
    let autos = document.getElementById("autos");

    function radnum() {
        let num = randomNum();
        mpanel.innerHTML = num;
    }
    radnum();
    mpanel.onclick = () => {
        radnum();
        let coor = randomColor(16);
        mpanel.style.backgroundColor=coor;
    }

    $(".loginbtn").click(function () { //点击取值

        let _phone = $("#shouji").val(); //手机号
        let _psw = $("#mima").val(); //密码
        if (_phone && _psw) {
            ajax({
                type: 'post',
                url: '../api/login.php',
                data: {
                    phone: _phone,
                    psw: _psw
                },
                success: str => {
                    console.log(str);
                    let val = $("#yanzhengma").val();
                    console.log(val)
                    if (str == 'yes') {
                        console.log(str);
                        if (val == mpanel.innerHTML) { //验证码匹配
                            console.log(1);
                            // ===============是否保留自动登录,打钩则10天免登陆===============
                            if (autos.disabled == !autos.checked) {
                                setCookie('phone', _phone, 10);
                                // ===============登录成功，跳转===============
                                let url = localStorage.url; //从首页过来保存的路径

                                if (!url) { //如果没有这个路径让它直接跳到首页
                                    ///===============跳转首页===============
                                    location.href = 'shouye.html';
                                } else {
                                    //===============跳转上一页===============
                                    location.href = url;
                                }
                            } else { //没打十天免登录勾的情况下
                                //===============不打钩下次重新登录===============
                                setCookie('phone', _phone, 1);
                                // document.cookie = 'age=18';//系统方法储存，失效时间为关闭浏览器时则失效
                                let url = localStorage.url;
                                if (!url) { //如果没有这个路径时跳转到首页
                                    //===============跳转首页===============
                                    location.href = 'shouye.html';
                                } else {
                                    //===============跳转上一页===============
                                    location.href = url;
                                }
                            }

                            // if (autos.checked == true) {
                            //     setCookie('phone', _phone, 10);
                            //     let url = localStorage.url;
                            //     if (!url) {
                            //         ///===============跳转首页===============
                            //         location.href = 'shouye.html';
                            //     } else {
                            //         //===============跳转上一页===============
                            //         location.href = url;
                            //     }
                            // } else {
                            //     let url = localStorage.url;
                            //     //===============不打钩下次重新登录===============
                            //     if (!url) {
                            //         //===============跳转首页===============
                            //         location.href = 'register.html';
                            //     } else {
                            //         //===============跳转上一页===============
                            //         location.href = url;
                            //     }
                            // }
                        }
                    } else {
                        confirm("登录失败");
                    }
                }
            });
        }
    });
});