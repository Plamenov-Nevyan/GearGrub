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

    public function getProductsFromSubcategory($category, $subcategory, $forCar){
        try {
            $query = null;
            $statement = null;
            if($forCar){
                $pdo = $this->connect();
                $query = "SELECT id, name, image, price FROM products WHERE category = :productCategory AND subcategory = :productSubcategory AND forCar = :productForCar";
                $statement = $pdo->prepare($query);
                $statement->bindParam('productCategory', $category);
                $statement->bindParam('productSubcategory', $subcategory);
                $statement->bindParam('productForCar', $forCar);
            }else{
                $pdo = $this->connect();
                $query = "SELECT id, name, image, price FROM products WHERE category = :productCategory AND subcategory = :productSubcategory";
                $statement = $pdo->prepare($query);
                $statement->bindParam('productCategory', $category);
                $statement->bindParam('productSubcategory', $subcategory);
            }
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

    public function getProductDetails($productId){
        $pdo = $this->connect();
        $query= "SELECT products.*, users.username AS owner_username, users.email AS owner_email, users.phone AS owner_phone, users.id AS owner_id
                 FROM products
                 INNER JOIN users ON products.owner = users.id
                 WHERE products.id = :productId";
        $statement = $pdo->prepare($query);
        $statement->bindParam('productId', $productId);
        $statement->execute();
        $product = $statement->fetch(PDO::FETCH_ASSOC);
        $pdo = null;
        $statement = null;
        return $product;
        exit;
    }

    public function createProduct($data){
        try {
            $this->checkForCreateDataErrors($data);
            $productId = $this->insertProduct($data);
            return $productId;
            exit;
        }catch(Exception $error){
            throw $error;
        }
    }

    private function checkForCreateDataErrors($data){
        if(empty($data["name"]) || strlen($data["name"]) < 4){
            throw new Exception('Product name must be at least 4 characters long!');
        }else if(empty($data["description"]) || strlen( $data["description"]) < 20){
            throw new Exception('Product description must be at least 20 characters long!');
        }else if(
            empty($data["price"]) || 
            filter_var($data["price"], FILTER_VALIDATE_INT) == false ||
            filter_var($data["price"], FILTER_VALIDATE_FLOAT) == false
        ){
                throw new Exception('Product price should be a valid integer or float number');
        }else if(
            empty($data["quantityAvailable"]) || 
            filter_var($data["price"], FILTER_VALIDATE_INT) == false 
        ){
                throw new Exception('Product quantity should be a valid integer');
        }else if(
            !strpos($data["image"], "http://") === 0 ||
            !strpos($data["image"], "https://") === 0
        ){
            throw new Exception('Please provide a valid link for product image (must start with http or https)');
        }else if(
                $data["subcategory"] === 'other'||
                $data["forCar"] === 'other'
        ){
            throw new Exception('Please select product sub-category and car brand designation');
        }
    }

    private function insertProduct($data){
        $pdo = $this->connect();
        $query = "INSERT INTO products (name, description, category, subcategory, forCar, price, quantityAvailable, image, owner) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $statement = $pdo->prepare($query);
        $statement->execute([
            $data["name"],
            $data["description"],
            $data["category"],
            $data["subcategory"],
            $data["forCar"],
            $data["price"],
            $data["quantityAvailable"],
            $data["image"],
            $data["owner"],
        ]);
        $productId = $pdo->lastInsertId();
        $pdo = null;
        $statement = null;
        return $productId;
        exit;
    }

    public function deletePublication($productId){
        try {
            $this->deleteProduct($productId);
        }catch(Exception $error){
            throw $error;
        }
    }

    private function deleteProduct($productId){
        $pdo = $this->connect();
        $query = "DELETE FROM products WHERE id = :productId";
        $statement = $pdo->prepare($query);
        $statement->bindParam('productId', $productId);
        $statement->execute();
        $pdo = null;
        $statement = null;
        exit;
    }
}