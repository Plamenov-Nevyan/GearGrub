<?php 

function getProducts($forCar, $category){
    require_once "Classes/Database.php";
    require_once "Classes/ProductManagement.php";
    $productOps = new ProductManagement();
    $products = $productOps->getProducts($forCar, $category);
    return $products;
    exit;
}

function getProductDetails($productId){
    require_once "Classes/Database.php";
    require_once "Classes/ProductManagement.php";
    $productOps = new ProductManagement();
    $product = $productOps->getProductDetails($productId);
   
    return $product;
    exit;
}

function getProductsFromSubcategory($category, $subcategory, $forCar){
    require_once "Classes/Database.php";
    require_once "Classes/ProductManagement.php";
    $productOps = new ProductManagement();
   $products = $productOps->getProductsFromSubcategory($category, $subcategory, $forCar);
   return $products;
   exit;
}