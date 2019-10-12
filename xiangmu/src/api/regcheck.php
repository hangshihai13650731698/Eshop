<?php
    //连接数据库
    include 'conn.php';
    //接收数据
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '15777716150';
    // $sql=" SELECT * from users WHERE phone=18275914031";
    $sql="SELECT * from users WHERE phone='$phone'";
    $res = $conn->query($sql);
    $data = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);

    if($data) {
        //查到，不给注册
        echo '0';
    }else {
        echo '1';
    }
 
    $res->close();
    $conn->close();
?>