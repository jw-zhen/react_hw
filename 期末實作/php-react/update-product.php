<?php
// update-user.php is for updating an existing user.
// Method: POST - http://localhost/php-react/update-user.php
// Required Fields: id --> EmpId, user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->pid)
    &&isset($data->productname)
    && isset($data->UnitPrice)
    && isset($data->Cost)
    && is_numeric($data->pid)
    && !empty(trim($data->productname))
    && !empty(trim($data->UnitPrice))
    && !empty(trim($data->Cost))
   
) {
    $productname = mysqli_real_escape_string($db_connection, trim($data->productname));
    $UnitPrice = mysqli_real_escape_string($db_connection, trim($data->UnitPrice));
    $Cost = mysqli_real_escape_string($db_connection, trim($data->Cost));
    $updateProduct = mysqli_query($db_connection, "UPDATE `product` SET `ProdName`='$productname', `UnitPrice`='$UnitPrice', `Cost`='$Cost' WHERE `ProdID`='$data->pid'");
    if ($updateProduct) {
        echo json_encode(["success" => 1, "msg" => "Product Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Product Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>