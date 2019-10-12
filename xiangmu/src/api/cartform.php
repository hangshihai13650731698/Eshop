<?php
include 'conn.php';
$phone=isset($_POST['phone'])?$_POST['phone']:'1';

// echo $phone;
//查询获取表中的所有内容
// $sql = "SELECT * FROM goodslist where phone$phone='$phone'";
$sql="SELECT * FROM goodslist WHERE phone=$phone";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
// var_dump($arr);
if($arr){
    echo json_encode($arr);
}else{
    echo 'no';
}
?>
