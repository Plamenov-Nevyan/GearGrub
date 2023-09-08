<?php

class Product {
   private $id;
   private $name;
   private $description;
   private $category;
   private $subcategory;
   private $forCar;
   private $price;
   private $quantityAvailable;
   private $image;
   private $created_at;
   private $owner;

   public function __construct(
    $id,
    $name,
    $image, 
    $price, 
    $category = null, 
    $description = null, 
    $subcategory = null, 
    $forCar = null, 
    $quantityAvailable = null, 
    $created_at = null,
    $owner = null
    ){
     $this->id = $id;
     $this->name = $name;
     $this->description = $description;
     $this->category = $category;
     $this->subcategory = $subcategory;
     $this->forCar = $forCar;
     $this->price = $price;
     $this->quantityAvailable = $quantityAvailable;
     $this->image = $image;
     $this->created_at = $created_at;
     $this->owner = $owner;
   }

public function getId(){
    return $this->id;
}
public function setId($id){
    $this->id = $id;
}

public function getName(){
    return $this->name;
}
public function setName($name){
    $this->name = $name;
}

public function getDescription(){
    return $this->description;
}
public function setDescription($description){
    $this->description = $description;
}

public function getCategory(){
    return $this->category;
}
public function setCategory($category){
    $this->category = $category;
}

public function getSubcategory(){
    return $this->subcategory;
}
public function setSubcategory($subcategory){
    $this->subcategory = $subcategory;
}
public function getForCar(){
    return $this->forCar;
}
public function setForCar($forCar){
    $this->forCar = $forCar;
}
public function getPrice(){
    return $this->price;
}
public function setPrice($price){
    $this->price = $price;
}
public function getQuantityAvailable(){
    return $this->quantityAvailable;
}
public function setQuantityAvailable($quantityAvailable){
    $this->quantityAvailable = $quantityAvailable;
}
public function getImage(){
    return $this->image;
}
public function setImage($image){
    $this->image = $image;
}
public function getCreatedAt(){
    return $this->created_at;
}
public function setCreatedAt($created_at){
    $this->created_at = $created_at;
}
public function getOwner(){
    return $this->owner;
}
public function setOwner($owner){
    $this->owner = $owner;
}
}