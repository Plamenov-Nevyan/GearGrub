<?php

require_once "includes/config.php";

class ProductManagement extends Database {

    public function getProducts($forCar, $category){
        try{
            $pdo = $this->connect();
            $query = null;
            $statement = null;
            if($forCar && $category){
                $query = "SELECT id, name, image, price FROM products WHERE forCar = :forCar AND category = :category";
                $statement = $pdo->prepare($query);
                $statement->bindParam("forCar", $forCar);
                $statement->bindParam("category", $category);
            }else if($forCar && !$category){
                $query = "SELECT id, name, image, price FROM products WHERE forCar = :forCar";
                $statement = $pdo->prepare($query);
                $statement->bindParam("forCar", $forCar);
            }else {
                $query = "SELECT id, name, image, price FROM products WHERE category = :category";
                $statement = $pdo->prepare($query);
                $statement->bindParam("category", $category);
            }    
            $statement->execute();
            $products = $statement->fetchAll(PDO::FETCH_ASSOC);
            $pdo = null;
            $statement = null;
            return $products;
            exit;
        }catch(Exception $error){
            throw $error;
        }
    }

    public function getProductsFromSubcategory($category, $subcategory){
        try {
            $pdo = $this->connect();
            $query = "SELECT id, name, image, price FROM products WHERE category = :productCategory AND subcategory = :productSubcategory";
            $statement = $pdo->prepare($query);
            $statement->bindParam('productCategory', $category);
            $statement->bindParam('productSubcategory', $subcategory);
            $statement->execute();
            $products = $statement->fetchAll(PDO::FETCH_ASSOC);
            $pdo= null;
            $statement = null;
            return $products;
            exit;
        }catch(Exception $error){
            throw $error;
        }
    }

}