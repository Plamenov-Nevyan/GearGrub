<?php

function deleteProduct($productId){
    require_once "Classes/Database.php";
    require_once "Classes/ProductManagement.php";
    $productOps = new ProductManagement();
    $productOps->deletePublication($productId);
}