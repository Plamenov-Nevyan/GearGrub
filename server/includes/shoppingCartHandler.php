<?php

function addToCart($userId, $productId){
    require_once "Classes/Database.php";
    require_once "Classes/ShoppingCart.php";
    $cartOps = new ShoppingCart();
    $cartCount = $cartOps->addToShoppingCart($userId, $productId);
    return $cartCount;
    exit;
}

function getCart($userId){
    require_once "Classes/Database.php";
    require_once "Classes/ShoppingCart.php";
    $cartOps = new ShoppingCart();
    $cart = $cartOps->getShoppingCart($userId);
    return $cart;
    exit;
}

function getCartCount($userId){
    require_once "Classes/Database.php";
    require_once "Classes/ShoppingCart.php";
    $cartOps = new ShoppingCart();
    $cartCount = $cartOps->getShoppingCartCount($userId);
    return $cartCount;
    exit;
}

function checkIfInCart($userId, $productId){
    require_once "Classes/Database.php";
    require_once "Classes/ShoppingCart.php";
    $cartOps = new ShoppingCart();
    $isInCart = $cartOps->checkIfAdded($userId,  $productId);
    return $isInCart;
    exit;
}


function removeFromCart($userId, $productId){
    require_once "Classes/Database.php";
    require_once "Classes/ShoppingCart.php";
    $cartOps = new ShoppingCart();
    $cartOps->removeProduct($userId,  $productId);
    exit;
}