<?php

function registerUser($username,$email,$phone,$password){
    require_once "Classes/Database.php";
    require_once "Classes/Register.php";
    $registerInfo = new Register($username,$email,$phone,$password);
    $registerInfo->registerUser();
}