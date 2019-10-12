<?php
include 'conn.php';//连接数据库

$gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '';//gid
$phone = isset($_REQUEST['phone']) ? $_REQUEST['phone'] : '';//电话用户
$title = isset($_REQUEST['title']) ? $_REQUEST['title'] : '';//标题1
$xianjia = isset($_REQUEST['xianjia']) ? $_REQUEST['xianjia'] : '';//单价2（价格）
$counts = isset($_REQUEST['counts']) ? $_REQUEST['counts'] : '';//数量
$img = isset($_REQUEST['img']) ? $_REQUEST['img'] : ' ';//图片3
 // 插入到用户商品信息表中              用户名通过可以添加信息
    
 
//  echo $img;
//  $sql="INSERT INTO goodslist(phone,PASSWORD)";
   $sql = "INSERT INTO goodslist(`gid`,`phone`,`title`,`xianjia`,`counts`,`img`) VALUES ('$gid','$phone','$title','$xianjia','$counts','$img')";
   $result=$conn->query($sql);
//    var_dump($result)
   if ($result) {

       echo 'yes';//添加成功
   }
   else{
       echo 'no';
   }
?>