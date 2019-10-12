<?php
include 'conn.php';
$text = isset($_REQUEST['text']) ? $_REQUEST['text'] : '小型';
$sql="SELECT * FROM 05liebiao WHERE title LIKE '%$text%'";
$res=$conn->query($sql);
 //提取数据
$arr = $res->fetch_all(MYSQLI_ASSOC);
 // var_dump($arr);

//把对象转换为字符串传给前端
echo json_encode($arr);
?>