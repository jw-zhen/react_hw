<?php
// add-user.php is for inserting new users into the database.
// Method: POST - http://localhost/php-react/add-user.php
// Required Fields – user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->seq)
    &&isset($data->OrderId)
    && isset($data->EmpId)
    && isset($data->CustId)
    && isset($data->OrderDate)
    && isset($data->Descript)
    && !empty(trim($data->seq))
    && !empty(trim($data->OrderId))
    && !empty($data->EmpId)
    && !empty($data->CustId)
    && !empty($data->OrderDate)
    && !empty($data->Descript)
) {
    $seq = mysqli_real_escape_string($db_connection, trim($data->seq));
    $OrderId = mysqli_real_escape_string($db_connection, trim($data->OrderId));
    $EmpId = mysqli_real_escape_string($db_connection, trim($data->EmpId));
    $CustId = mysqli_real_escape_string($db_connection, trim($data->CustId));
    $OrderDate = mysqli_real_escape_string($db_connection, trim($data->OrderDate));
    $Descript = mysqli_real_escape_string($db_connection, trim($data->Descript));
    $insertProduct = mysqli_query($db_connection, "INSERT INTO `salesorder`(`seq`,`OrderId`,`EmpId`,`CustId`,`OrderDate`,`Descript`) VALUES ( '$seq','$OrderId','$EmpId','$CustId','$OrderDate','$Descript')");
    if ($insertProduct) {
        $last_id = mysqli_insert_id($db_connection);
        echo json_encode(["success" => 1, "msg" => "product Inserted.", "seq" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "product Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>