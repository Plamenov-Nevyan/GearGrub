<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
    echo '<pre>';
    print_r($data);
    echo '</pre>';
};