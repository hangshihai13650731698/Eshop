<?php
// 连接数据库
include 'conn.php';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

$sql ="DELETE from users  where `phone`='$phone' &&`password`='$password'";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
if($arr){
    echo yes;
}else{
    echo no;
}
?>