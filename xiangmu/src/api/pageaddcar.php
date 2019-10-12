<?php
include 'conn.php';//连接数据库

$gid = isset($_GET['gid']) ? $_GET['gid'] : '1';//gid
$phone = isset($_GET['phone']) ? $_GET['phone'] : '';//电话
$title = isset($_GET['title']) ? $_GET['title'] : '2';//标题

$xianjia = isset($_GET['xianjia']) ? $_GET['xianjia'] : '2';//单价（价格）
$counts = isset($_GET['counts']) ? $_GET['counts'] : '2';//数量
$img = isset($_GET['img']) ? $_GET['img'] : 'https://img2.epetbar.com/2018-09/05/09/2befde69ec22bcd45abb3cd462fd0cc1.jpg@!200w-c ';//图片

$sql1 ="SELECT * from goodslist WHERE gid='$gid' and phone = '$phone'";
$res1=$conn->query($sql1);

$data = $res1->fetch_all(MYSQLI_ASSOC);
// var_dump($data);
// var_dump($sql1);
if($data){//插入到数据库
   $sql2 = "UPDATE goodslist set counts = counts + $counts where gid=$gid";
   $result=$conn->query($sql2);
   echo "yes";
}else {
   $sql2 = "INSERT INTO goodslist(`gid`,`phone`,`title`,`xianjia`,`counts`,`img`) VALUES ('$gid','$phone','$title','$xianjia','$counts','$img')";
   $result=$conn->query($sql2);
   echo $phone;
};
?>