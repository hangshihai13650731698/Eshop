<?php
    //需求：接收数据，查询数据，制作成字符串，echo给前端

    $page = isset($_GET['page']) ? $_GET['page'] : '1';
    $num = isset($_GET['num']) ? $_GET['num'] : '20';
    // $id=isset($_GET['id1'])?$_GET['id1']:'';

    // echo $num;
    include 'conn.php';

    //1.写sql语句
    $index = ($page - 1) * $num;
    // 链接表
    $sql = "SELECT * FROM 05liebiao LIMIT  $index,$num";
    $sql2 ='SELECT * FROM 05liebiao';


    //2.执行语句
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
    // var_dump($res2->num_rows);

    //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);//对象

    $data = array(
        'total' => $res2->num_rows,
        'data' => $arr,
        'page' => $page,
        'num' => $num
    );

    // var_dump( $data);
    //4.把对象转成字符串，echo给前端
    echo json_encode($data);

    $conn->set_charset('utf8');

?>