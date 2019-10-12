<?php
// 连接数据库
include 'conn.php';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$gid = isset($_POST['gid']) ? $_POST['gid'] : '';

$sql ="DELETE from goodslist  where `phone`='$phone' &&`gid`='$gid'";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
if($arr){
    echo yes;
}else{
    echo no;
}
?>