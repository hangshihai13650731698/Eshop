(function () {
    let phone = document.getElementById('yz_shouji'); //手机号
    let verifyUserNameMsg = document.getElementById('verifyUserNameMsg'); //注册提示
    let psw = document.getElementById("yz_mima"); //密码
    //验证用户名是否存在
    //注册把新用户信息存到数据库
    phone.onblur = () => {
        // console.log(22222);
        if (phone.value) {
            ajax({
                type: 'post',
                url: '../api/regcheck.php',//先验证后注册
                data: {
                    phone: phone.value
                },
                dataType: 'json',
                success: str => {
                    console.log(str);
                    if (str=='1') { //可以注册
                        css(verifyUserNameMsg, 'color', "#58bc58");
                        verifyUserNameMsg.innerHTML = '验证成功，可以注册';
                    } else {
                        css(verifyUserNameMsg, 'color', "#f00");
                        verifyUserNameMsg.innerHTML = '验证失败，请重新输入';
                    }
                }
            });
        } else {
            alert('请输入手机号码');
        }

    }
    //=======================用户注册=====================
    $('#zhuce').click(function () {
        if (phone.value && psw.value) {
            $.ajax({
                type: 'post',
                url: '../api/register.php',
                data: {
                    phone: phone.value,
                    psw: psw.value
                },
                success: str => {

                    if (str == 'yes') { //允许注册
                        console.log($("#radios").prop('checked'));
                        if (/^1[3-9]\d{9}$/ && /^\S{6,20}$/ && $("#radios").prop('checked')) { //手机、密码、按钮正则验证
                            //注册成功，跳转登录 
                            console.log(str);
                            location.href = 'login.html'; //跳转到登录页
                        }
                    } else {
                        alert("注册失败");
                    }
                }
            });
        }
    });

})();