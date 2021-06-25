<?php
// all-users.php is to fetch all users that exist in the database.
// Method: GET - http://localhost/php-react/all-users.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->EmpId) && is_numeric($data->EmpId)) {
    $EmpId = $data->EmpId;
    $allProducts = mysqli_query($db_connection, "SELECT employee.EmpId,employee.EmpName,dept.DeptName,employee.JobTitle FROM employee,dept WHERE dept.DeptId=employee.DeptId and EmpId='$EmpId'");
    if (mysqli_num_rows($allProducts) > 0) {
        $all_Products = mysqli_fetch_all($allProducts, MYSQLI_ASSOC);
        // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
        echo json_encode(["success" => 1, "orderdetial" => $all_Products], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(["success" => 0]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "salesorder Not Found!"]);
}



?>
