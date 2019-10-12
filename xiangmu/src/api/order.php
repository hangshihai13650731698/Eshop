<?php
include 'conn.php';
//接收参数
$order=isset($_GET['order'])?$_GET['order']:'asc';
//价格查询语句
$sql='SELECT * FROM 05liebiao ORDER BY xianjia';

// 执行语句
$res=$conn->query($sql);//结果集
//提取数据
$arr = $res->fetch_all(MYSQLI_ASSOC);
// var_dump($arr);

//把对象转换为字符串传给前端
echo json_encode($arr);//

$conn->set_charset("utf8");

// 关闭连接
$res->close();
$conn->close();
?>