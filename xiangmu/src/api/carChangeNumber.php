<?php
// 连接数据库
include 'conn.php';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$gid = isset($_POST['gid']) ? $_POST['gid'] : '';
$counts = isset($_POST['counts']) ? $_POST['counts'] : '';

$sql ="UPDATE goodslist set counts=$counts where `phone`='$phone' &&`gid`='$gid'";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
// var_dump($arr);
if($arr){
    echo "ok";
}else{
    echo "no";
}
?>