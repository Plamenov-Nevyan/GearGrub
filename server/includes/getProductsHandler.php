<?php 

function getProducts($forCar, $category){
 require_once "Classes/Database.php";
 require_once "Classes/ProductManagement.php";
 $productOps = new ProductManagement();
$products = $productOps->getProducts($forCar, $category);
return $products;
exit;
}

function getProductsFromSubcategory($category, $subcategory){
    require_once "Classes/Database.php";
    require_once "Classes/ProductManagement.php";
    $productOps = new ProductManagement();
   $products = $productOps->getProductsFromSubcategory($category, $subcategory);
   return $products;
   exit;
}