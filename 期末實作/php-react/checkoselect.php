<?php
// all-users.php is to fetch all users that exist in the database.
// Method: GET - http://localhost/php-react/all-users.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$datestart = mysqli_real_escape_string($db_connection, trim($data->datestart));
$dateend = mysqli_real_escape_string($db_connection, trim($data->dateend));

$salesreport = mysqli_query($db_connection, "SELECT customer.CustName as CustName,customer.CustId as cust_id,sum(qty*unitprice*discount) as aa,sum(qty*(unitprice*discount-cost)) as bb
FROM customer,salesorder,orderdetail,product
WHERE customer.CustId=salesorder.CustId
and salesorder.OrderId=orderdetail.OrderId
and orderdetail.ProdId=product.ProdID
and salesorder.OrderDate BETWEEN '$datestart' and '$dateend'
GROUP BY customer.CustName,customer.CustId");
if (mysqli_num_rows($salesreport) > 0) {
    $sales_report = mysqli_fetch_all($salesreport, MYSQLI_ASSOC);
    // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
    echo json_encode(["success" => 1, "checko" => $sales_report], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => 0]);
}
?>
