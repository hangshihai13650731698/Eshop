<?php
   //连接数据库
   include 'conn.php';
    //接收数据
    $phone= isset($_POST['phone']) ? $_POST['phone'] : '';
    $psw= isset($_POST['psw']) ? $_POST['psw'] : '';
    //方法1直接存到数据库
    $sql="INSERT INTO users(phone,PASSWORD) VALUES('$phone','$psw')";
    $res = $conn->query($sql);
    //    var_dump($res);
        if($res) {
            //插入成功
            echo 'yes';
        }else {
            // echo 'no';
            echo 'no';
        }

    //方法2先判断后执行如果已经注册过的用户则不能再注册
//     $sql="SELECT*from users where phone='$phone'";
//     $res=$conn->query($sql);
//     $data=$res->fetch_all(MYSQL_ASSOC);
//     if($data){
//         echo'no';
//     }
//     else{
//         $sql="INSERT INTO users(phone,PASSWORD) VALUES('$phone','$psw')";
//         $res=$conn->query($sql);
//         echo'yes';
//     }

//     $res = $conn->query($sql);
// //    var_dump($res);
//     if($res) {
//         //插入成功
//         echo 'yes';
//     }else {
//         // echo 'no';
//         echo 'no';
//     }
?>