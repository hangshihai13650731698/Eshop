<?php

    //连接数据库
    include 'conn.php';

    //接收数据
    $phone = isset($_REQUEST['phone']) ? $_REQUEST['phone'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';

    $sql = "SELECT * FROM users WHERE phone=' $phone' AND password='$psw'";
    
    $res = $conn->query($sql);

    if($res) {
        //查询到，允许登陆
        echo 'yes';
    }else {
        echo 'no';
     }
    $res->close();
    $conn->close();   
?>