<?php
require_once "includes/config.php";

class ShoppingCart extends Database {


    public function addToShoppingCart($userId, $productId){
        try {
            $cartCount = $this->insertIntoShoppingCart($userId, $productId);
            return $cartCount;
            exit;
        }catch(Exception $error){
            throw $error;
        }
    }
    public function getShoppingCart($userId){
        try {
           $cart = $this->selectShoppingCartDetailed($userId);
           return $cart;
           exit;
        }catch(Exception $error){
            throw $error;
        }
    }
    public function getShoppingCartCount($userId){
        try {
            $cartCount = $this->selectShoppingCartCount($userId);
            return $cartCount;
            exit;
        }catch(Exception $error){
            throw $error;
        }
    }
    public function checkIfAdded($userId, $productId){
        try {
            $isInCart = $this->selectUserAndProductFromCart($userId, $productId);
            return $isInCart;
            exit;
        }catch(Exception $error){
            throw $error;
        }
    }
    public function removeProduct($userId, $productId){
        try {
            $this->deleteFromCart($userId, $productId);
            exit;
        }catch(Exception $error){
            throw $error;
        }
    }

    private function deleteFromCart($userId, $productId){
        $pdo = $this->connect();
        $query = "DELETE FROM user_cart WHERE user_id = :userId AND product_id = :productId";
        $statement = $pdo->prepare($query);
        $statement->bindParam('userId', $userId);
        $statement->bindParam('productId', $productId);
        $statement->execute();
        $pdo = null;
        $query = null;
        exit;
    }
    private function insertIntoShoppingCart($userId, $productId){
        $pdo = $this->connect();
        $query = "INSERT INTO user_cart (user_id, product_id) VALUES (?, ?)";
        $statement = $pdo->prepare($query);
        $statement->execute([$userId, $productId]);
        $cartCount = $this->selectShoppingCartCount($userId);
        $pdo = null;
        $query = null;
        return $cartCount; 
        exit;
    }

    private function selectUserAndProductFromCart($userId, $productId){
        $pdo = $this->connect();
        $query = "SELECT * FROM user_cart WHERE user_id = :userId AND product_id = :productId";
        $statement = $pdo->prepare($query);
        $statement->bindParam('userId', $userId, PDO::PARAM_INT);
        $statement->bindParam('productId', $productId, PDO::PARAM_INT);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        if(!empty($result)){
            return true;
        }else { 
            return false;
        }
        exit;
    }

    private function selectShoppingCartDetailed($userId){
        $pdo = $this->connect();
        $query = "SELECT 
            user_cart.userId, 
            user_cart.productId, 
            product.name, 
            product.description,
            product.category, 
            product.subcategory, 
            product.price,
            product.forCar
        FROM user_cart 
        JOIN products ON user_cart.product_id = product.id
        WHERE user_cart.user_id = :userId";
        $statement = $pdo->prepare($query);
        $statement->bindParam("userId", $userId, PDO::PARAM_INT);
        $statement->execute();
        $cart = $statement->fetchAll(PDO::FETCH_ASSOC);
        $pdo = null;
        $statement = null;
        return $cart;
        exit;
    }

    private function selectShoppingCartCount($userId){
        $pdo = $this->connect();
        $query = "SELECT user_id, COUNT(product_id) AS productCount
        FROM user_cart
        WHERE user_id = :userId
        GROUP BY user_id;";
        $statement = $pdo->prepare($query);
        $statement->bindParam("userId", $userId, PDO::PARAM_INT);
        $statement->execute();
        $result = $statement->fetch(PDO::FETCH_ASSOC);
        $pdo = null;
        $statement = null;
        if($result !== false){
            return $result["productCount"];
        }else {
            return 0;
        }
        exit;
    }   
}