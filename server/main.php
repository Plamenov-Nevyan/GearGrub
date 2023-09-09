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
    }else if ($action === 'editProduct'){
        $productId = $_GET["productId"];
        require_once "includes/editProductHandler.php";
        try {
           $updatedProductId = editProduct($data, $productId);
        //    header("Content-Type: application/json");
           echo $updatedProductId;
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        }
    }else if($action === 'addToCart'){
        $userId = $_SESSION["userId"];
        $productId = $data["productId"];
        require_once "includes/shoppingCartHandler.php";
        try {
            $cartCount = addToCart($userId, $productId);
            echo $cartCount;
            exit;
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === 'DELETE'){
    if(isset($_GET["delete"])){
        $action = $_GET["delete"];
        if($action === 'deleteSession'){
            session_destroy();
        }else if($action === 'deleteProduct' & isset($_GET["productId"])){
            $productId = $_GET["productId"];
            require_once "includes/deleteProductHandler.php";
            try {
                deleteProduct($productId);
                echo "Success";
            }catch(Exception $error){
                echo 'Error: ' . $error->getMessage();
            }
        }
    }
}else if($_SERVER["REQUEST_METHOD"] === "GET"){
    if(isset($_GET["category"]) && isset($_GET["subcategory"])){
        require_once "includes/getProductsHandler.php";
        require_once "Classes/Product.php";
        $forCar = null;
        $category = $_GET["category"];
        $subcategory = $_GET["subcategory"];
        if(isset($_GET["forCar"])){$forCar = $_GET["forCar"];};
        try{
            $products = getProductsFromSubcategory($category, $subcategory, $forCar);
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
        $category = null;
        $forCar = null;
        require_once "includes/getProductsHandler.php";
        require_once "Classes/Product.php";
        if(isset($_GET["forCar"])){$forCar = $_GET["forCar"];};
        $category = $_GET["category"];
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
    }else if(isset($_GET["productId"])){
        require_once "includes/getProductsHandler.php";
        require_once "Classes/Product.php";
        $productId = $_GET["productId"];
        try{
            $product = getProductDetails($productId);
            $productToSend = array();
            $currentProduct = new Product(
                $product["id"],
                $product["name"],
                $product["image"],
                $product["price"],
                $product["category"],
                $product["description"],
                $product["subcategory"],
                $product["forCar"],
                $product["quantityAvailable"],
                $product["created_at"],
                $product["owner_username"],
                $product["owner_email"],
                $product["owner_phone"],
                $product["owner_id"],
            );
            $productToSend[] = array(
                'id' => $currentProduct->getId(),
                'name' => $currentProduct->getName(),
                'description' => $currentProduct->getDescription(),
                'category' => $currentProduct->getCategory(),
                'subcategory' => $currentProduct->getSubcategory(),
                'forCar' => $currentProduct->getForCar(),
                'price' => $currentProduct->getPrice(),
                'quantityAvailable' => $currentProduct->getQuantityAvailable(),
                'image' => $currentProduct->getImage(),
                'created_at' => $currentProduct->getCreatedAt(),
                'owner_username' => $currentProduct->getOwnerUsername(),
                'owner_email' => $currentProduct->getOwnerEmail(),
                'owner_phone' => $currentProduct->getOwnerPhone(),
                'owner_id' => $currentProduct->getOwnerId(),
            );
            
            header("Content-Type: application/json");
            echo json_encode($product);
            exit;
        }catch(Exception $error){
            echo 'Error: ' . $error->getMessage();
        }
    }else if(isset($_GET["getCart"])){
        $userId = $_SESSION["userId"];
        if($_GET["getCart"] === "getCartDetails"){
            require_once "includes/shoppingCartHandler.php";
            try{
                $cart = getCart($userId);
                header("Content-Type: application/json");
                echo json_encode($cart);
                exit;
            }catch(Exception $error){
                echo 'Error' . $error->getMessage();
            }
        }else if($_GET["getCart"] === "getCartCount"){
            require_once "includes/shoppingCartHandler.php";
            try{
                $cartCount = getCartCount($userId);
                echo $cartCount;
                exit;
            }catch(Exception $error){
                echo 'Error' . $error->getMessage();
            }
        }
    }
}