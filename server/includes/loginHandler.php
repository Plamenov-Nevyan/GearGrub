<?php

function loginUser($email, $password){
    require_once "Classes/Database.php";
    require_once "Classes/Login.php";
    $loginInfo = new Login($email, $password);
    $loginInfo->loginUser();
}