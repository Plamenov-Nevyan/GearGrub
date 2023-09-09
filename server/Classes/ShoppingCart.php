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

    private function insertIntoShoppingCart($userId, $productId){
        $pdo = $this->connect();
        $query = "INSERT INTO user_cart (userId, productId) VALUES (?, ?)";
        $statement = $pdo->prepare($query);
        $statement->execute([$userId, $productId]);
        $cartCount = $this->selectShoppingCartCount($userId);
        $pdo = null;
        $query = null;
        return $cartCount; 
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
        JOIN products ON user_cart.productId = product.id
        WHERE user_cart.userId = :userId";
        $statement = $pdo->prepare($query);
        $statement->bindParam("userId", $userId);
        $statement->execute();
        $cart = $statement->fetchAll(PDO::FETCH_ASSOC);
        $pdo = null;
        $statement = null;
        return $cart;
        exit;
    }

    private function selectShoppingCartCount($userId){
        $pdo = $this->connect();
        $query = "SELECT userId, COUNT(productId) AS productCount
        FROM user_cart
        WHERE userId = :userId
        GROUP BY userId;";
        $statement = $pdo->prepare($query);
        $statement->bindParam("userId", $userId);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        $pdo = null;
        $statement = null;
        return $result["productCount"];
        exit;
    }
}