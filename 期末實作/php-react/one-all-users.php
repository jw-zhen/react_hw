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

$oneUsers = mysqli_query($db_connection, "SELECT EmpId as id FROM `employee`");
if (mysqli_num_rows($oneUsers) > 0) {
    $one_users = mysqli_fetch_all($oneUsers, MYSQLI_ASSOC);
    // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
    echo json_encode(["success" => 1, "users" => $one_users], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => 0]);
}
?>
