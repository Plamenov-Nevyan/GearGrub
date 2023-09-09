<?php

function editProduct($data, $productId){
    require_once "Classes/Database.php";
    require_once "Classes/ProductManagement.php";
    $productOps = new ProductManagement();
   $productId = $productOps->updateProduct($data, $productId);
   return $productId;
   exit;
   }