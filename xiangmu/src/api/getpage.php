<?php

    $id = isset($_GET['id']) ? $_GET['id'] : '2';
    // echo($id);
    $con=mysqli_connect("localhost","root","root","shop");
    $con->set_charset('utf8');
    # 查询获取
    $sql = "SELECT * FROM 05liebiao where id='$id'";
    // echo $sql;
    $result = mysqli_query($con,$sql);
    //获取字符集
    $res = mysqli_fetch_all($result,MYSQLI_ASSOC);
    if(!$result)
    {
      $data = array("status" => "error", "msg" => "请求失败");
      echo json_encode($data, true);
    }else
    {
      $data = array("status" => "success", "msg" => "请求成功","data"=>$res);
      echo json_encode($data,true);
   
    }
    
?>