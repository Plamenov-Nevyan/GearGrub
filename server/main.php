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
        require_once "includes/registerHandler.php";
        try{
            registerUser($username, $email, $phone, $password);
            if(isset($_SESSION["userId"]) && isset($_SESSION["userRole"])){
                header("Content-Type: application/json");
                echo json_encode(array($_SESSION["userId"], $_SESSION["userRole"]));
                exit;
            }
        }catch(Exception $error){
            echo "Error: " . $error->getMessage();
        }
    }else if($action === 'login'){
        $email = $data["email"];
        $password = $data["password"];
        require_once "includes/loginHandler.php";
        try{
            loginUser($email, $password);
            if(isset($_SESSION["userId"]) && isset($_SESSION["userRole"])){
                header("Content-Type: application/json");
                echo json_encode(array($_SESSION["userId"], $_SESSION["userRole"]));
                exit;
            };
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        };

    }else if($action === 'createProduct'){
        require_once "includes/createProductHandler.php";
        try {
           $productId = createProduct($data);
        //    header("Content-Type: application/json");
           echo $productId;
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === 'DELETE'){
    if(isset($_GET["delete"])){
        $action = $_GET["delete"];
        if($action === 'deleteSession'){
            session_destroy();
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === "GET"){
    if(isset($_GET["category"]) && isset($_GET["subcategory"])){
        require_once "includes/getProductsHandler.php";
        require_once "Classes/Product.php";
        $category = $_GET["category"];
        $subcategory = $_GET["subcategory"];
        try{
            $products = getProductsFromSubcategory($category, $subcategory);
            $productsToSend = array();
            foreach($products as $product){
                $currentProduct = new Product(
                    $product["id"],
                    $product["name"],
                    $product["image"],
                    $product["price"]
                );
                $productsToSend[] = array(
                    'id' => $currentProduct->getId(),
                    'name' => $currentProduct->getName(),
                    'image' => $currentProduct->getImage(),
                    'price' => $currentProduct->getPrice()
                );
            };
            header("Content-Type: application/json");
            echo json_encode($productsToSend);
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        }

    }else if(isset($_GET["forCar"]) || isset($_GET["category"])){
        require_once "includes/getProductsHandler.php";
        require_once "Classes/Product.php";
        $forCar = $_GET["forCar"] || null;
        $category = $_GET["category"] || null;
        try {
            $products = getProducts($forCar, $category);
            $productsToSend = array();
            foreach($products as $product){
                $currentProduct = new Product(
                    $product["id"],
                    $product["name"],
                    $product["image"],
                    $product["price"]
                );
                $productsToSend[] = array(
                    'id' => $currentProduct->getId(),
                    'name' => $currentProduct->getName(),
                    'image' => $currentProduct->getImage(),
                    'price' => $currentProduct->getPrice()
                );
            };
            header("Content-Type: application/json");
            echo json_encode($productsToSend);
            exit;
        }catch(Exception $error){
            echo 'Error' . $error->getMessage();
        }
    }
}