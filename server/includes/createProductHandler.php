<?php

function createProduct($data){
    require_once "Classes/Database.php";
    require_once "Classes/ProductManagement.php";
    $productOps = new ProductManagement();
   $productId = $productOps->createProduct($data);
   return $productId;
   exit;
   }