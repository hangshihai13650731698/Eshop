<?php
// 1.引入外部文件
include 'conn.php';
//2.接收参数

$min=isset($_GET['min'])?$_GET['min']:'';
$max=isset($_GET['max'])?$_GET['max']:'';

//3.查询语句

// $sql='SELECT * FROM data0221 WHERE price BETWEEN 200 and 300';
// 价格查询
// $sql="SELECT * FROM 04liebiao WHERE xianjia BETWEEN 1 and 100";
$sql="SELECT * FROM 05liebiao WHERE xianjia BETWEEN '$min' and '$max'";
//4.执行语句
$res=$conn->query($sql);//结果集
//5.提取数据
$arr=$res->fetch_all(MYSQLI_ASSOC);
// var_dump($arr);

//6.对象转成字符串，传给前端
echo json_encode($arr);

// 7.防止中文乱码
$conn->set_charset('utf8');
// 8.关闭连接，防止资源浪费
$res->close();
$conn->close();
?>