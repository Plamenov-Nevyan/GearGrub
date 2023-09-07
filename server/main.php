<?php
require_once "includes/config.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
    $action = $data["action"];

    if($action === 'register'){
        $username = $data["username"];
        $email = $data["email"];
        $phone = $data["phone"];
        $password = $data["password"];

        require_once "Classes/Database.php";
        require_once "Classes/Register.php";

        $registerInfo = new Register($username,$email,$phone,$password);
        try {
            $registerInfo->registerUser();
            if(isset($_SESSION["userId"]) && isset($_SESSION["userRole"])){
                header("Content-Type: application/json");
                echo json_encode(array($_SESSION["userId"], $_SESSION["userRole"]));
                exit;
            };
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        }
    }else if($action === 'login'){
        $email = $data["email"];
        $password = $data["password"];
        require_once "Classes/Database.php";
        require_once "Classes/Login.php";
        $loginInfo = new Login($email, $password);
        try{
            $loginInfo->loginUser();
            if(isset($_SESSION["userId"]) && isset($_SESSION["userRole"])){
                header("Content-Type: application/json");
                echo json_encode(array($_SESSION["userId"], $_SESSION["userRole"]));
                exit;
            };
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        };

    }
}