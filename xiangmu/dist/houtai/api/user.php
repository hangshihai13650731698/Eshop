<?php

    //连接数据库
    include 'conn.php';
    // 查找用户信息渲染出来
    //接收数据
    // $phone = isset($_REQUEST['phone']) ? $_REQUEST['phone'] : '';
    // $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';

    $sql = "SELECT * FROM users ";
    
    $res = $conn->query($sql);
    $arr=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr);
    //  if($res) {
    //      //查询到，允许登陆
    //      echo 'yes';
    //  }else {
    //      echo 'no';
    //  }
    $res->close();
    $conn->close();   
?>