-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2023 at 03:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geargrub`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(300) NOT NULL,
  `category` varchar(40) NOT NULL,
  `subcategory` varchar(40) NOT NULL,
  `forCar` varchar(60) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantityAvailable` int(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT curtime(),
  `owner` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `category`, `subcategory`, `forCar`, `price`, `quantityAvailable`, `image`, `created_at`, `owner`) VALUES
(16, 'Adeo', 'asdasdasdasdasdsadasdasdasdasd', 'detailing', 'interiorCare', 'nissan', 2323.00, 23, 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/03/11184718/FISHCirrhilabrus-finifenmaa_4%C2%A9-Yi-Kai-Tea-scaled.jpeg', '2023-09-09 10:09:26', 1),
(17, 'Engine', 'EngineEngineEngineEngineEngineEngineEngineEngine', 'carParts', 'engine', 'bmw', 213123.00, 1, 'https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '2023-09-09 15:17:19', 1),
(19, 'Air FIlterrax', 'Air FIlterAir FIlterAir FIlterAir FIlterAir FIlterAir FIlter', 'carParts', 'filters', 'dodge', 123.00, 2, 'https://images.unsplash.com/photo-1586040661238-69c4c4a46b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80', '2023-09-09 15:24:24', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(300) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(15) NOT NULL,
  `userRole` varchar(10) NOT NULL,
  `isForbiddenToUpdate` tinyint(1) NOT NULL DEFAULT 0,
  `pwd` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT curtime()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `phone`, `userRole`, `isForbiddenToUpdate`, `pwd`, `created_at`) VALUES
(1, 'alexander', 'alex@gmail.com', 2131341, 'owner', 0, '$2y$12$gR4Mv/0jvQ5svwkbal4YUestmLN3kOCkAYC./RQc0RagVZNU0LnRa', '2023-09-07 10:44:49'),
(2, 'peter', 'peter@gmail.com', 434343434, 'user', 0, '$2y$12$vVvFyFz4xbSp0h0og80nP.NJhNpEpJRRi9vZ458eh1O/LCaSXHCBi', '2023-09-07 11:13:51'),
(3, 'pavel', 'pavel@gmail.com', 2147483647, 'user', 0, '$2y$12$j7pe2er1CRhU0.aDJNVijeKI4xsUeUb9Dv2P7pcp5/p8pHpAkuDxm', '2023-09-09 20:02:21');

-- --------------------------------------------------------

--
-- Table structure for table `user_cart`
--

CREATE TABLE `user_cart` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_cart`
--

INSERT INTO `user_cart` (`user_id`, `product_id`) VALUES
(2, 16);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner` (`owner`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_cart`
--
ALTER TABLE `user_cart`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`);

--
-- Constraints for table `user_cart`
--
ALTER TABLE `user_cart`
  ADD CONSTRAINT `user_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
