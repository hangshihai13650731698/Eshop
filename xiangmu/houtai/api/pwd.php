<?php
// 连接数据库   接口有点小问题回改
include 'conn.php';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$password = isset($_POST['mima1']) ? $_POST['mima1'] : '';
    // 修改某一项内容
$sql ="UPDATE users set password=$password where `phone`='$phone' ";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
// var_dump($arr);
if($arr){
    echo "yes";
}else{
    echo "no";
}
?>