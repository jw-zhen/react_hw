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
    isset($data->seq)
    && isset($data->ProdId)
    && isset($data->Qty)
    && isset($data->Discount)
    && is_numeric($data->seq)
    && !empty(trim($data->ProdId))
    && !empty(trim($data->Qty))
    && !empty(trim($data->Discount))

) {
    $ProdId = mysqli_real_escape_string($db_connection, trim($data->ProdId));
    $Qty = mysqli_real_escape_string($db_connection, trim($data->Qty));
    $Discount = mysqli_real_escape_string($db_connection, trim($data->Discount));
    $updatesalesorder = mysqli_query($db_connection, "UPDATE `orderdetail` SET `ProdId`='$ProdId', `Qty`='$Qty', `Discount`='$Discount' WHERE `seq`='$data->seq'");
    if ($updatesalesorder) {
        echo json_encode(["success" => 1, "msg" => "Product Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Product Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>