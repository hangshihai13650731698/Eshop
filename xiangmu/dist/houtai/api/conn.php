<?php
//设置参数，建立连接
$servername = 'localhost';//主机名
$username = 'root';//默认登陆数据库的用户名
$password = 'root';//wamp默认没有密码，phpstudy密码为root 
$dbname = 'shop';//你要连接的数据库名称

//建立连接
$conn = new mysqli($servername,$username,$password,$dbname);

//判断是否成功
if($conn->connect_error) {
    //有数据返回，就证明失败了
    die("连接失败: " . $conn->connect_error);
}else {
    // echo '连接成功';
}//设置编码
$conn->set_charset('utf8');
?>