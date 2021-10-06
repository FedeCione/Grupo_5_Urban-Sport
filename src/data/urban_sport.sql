-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: urban_sport
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Adidas'),(2,'Puma'),(3,'Nike'),(4,'New Balance');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `visible` tinyint(4) NOT NULL,
  `description` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `id_subcategory` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1ca6c002-3392-41fd-ab51-822a14736ccd` (`id_subcategory`),
  CONSTRAINT `FK_1ca6c002-3392-41fd-ab51-822a14736ccd` FOREIGN KEY (`id_subcategory`) REFERENCES `category_subcategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Hombre',1,'seccion hombre',1);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_subcategories`
--

DROP TABLE IF EXISTS `category_subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_subcategories` (
  `id` int(11) NOT NULL,
  `id_subcategory` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e1f96759-5a2e-4605-9980-f4f88e861e8a` (`id_subcategory`),
  CONSTRAINT `FK_e1f96759-5a2e-4605-9980-f4f88e861e8a` FOREIGN KEY (`id_subcategory`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_subcategories`
--

LOCK TABLES `category_subcategories` WRITE;
/*!40000 ALTER TABLE `category_subcategories` DISABLE KEYS */;
INSERT INTO `category_subcategories` VALUES (1,1,1);
/*!40000 ALTER TABLE `category_subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colour_product`
--

DROP TABLE IF EXISTS `colour_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colour_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_colours` int(11) NOT NULL,
  `id_products` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_292cb45e-fe25-4afa-9966-82f43759e2a4` (`id_colours`),
  KEY `FK_9479cea3-81af-464b-ab28-f6d041e71149` (`id_products`),
  CONSTRAINT `FK_292cb45e-fe25-4afa-9966-82f43759e2a4` FOREIGN KEY (`id_colours`) REFERENCES `colours` (`id`),
  CONSTRAINT `FK_9479cea3-81af-464b-ab28-f6d041e71149` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colour_product`
--

LOCK TABLES `colour_product` WRITE;
/*!40000 ALTER TABLE `colour_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `colour_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colours`
--

DROP TABLE IF EXISTS `colours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colours`
--

LOCK TABLES `colours` WRITE;
/*!40000 ALTER TABLE `colours` DISABLE KEYS */;
INSERT INTO `colours` VALUES (1,'Fuscia'),(2,'Aquamarine'),(3,'Mauv'),(4,'Turquoise'),(5,'Mauv'),(6,'Turquoise'),(7,'Puce'),(8,'Indigo'),(9,'Violet'),(10,'Mauv'),(11,'Puce'),(12,'Blue'),(13,'Orange'),(14,'Khaki'),(15,'Turquoise'),(16,'Violet'),(17,'Goldenrod'),(18,'Fuscia'),(19,'Orange'),(20,'Orange'),(21,'Indigo'),(22,'Pink'),(23,'Teal'),(24,'Khaki'),(25,'Turquoise'),(26,'Khaki'),(27,'Aquamarine'),(28,'Teal'),(29,'Orange'),(30,'Khaki'),(31,'Green'),(32,'Indigo'),(33,'Aquamarine'),(34,'Mauv'),(35,'Yellow'),(36,'Yellow'),(37,'Khaki'),(38,'Fuscia'),(39,'Mauv'),(40,'Pink'),(41,'Puce'),(42,'Maroon'),(43,'Fuscia'),(44,'Red'),(45,'Crimson'),(46,'Yellow'),(47,'Fuscia'),(48,'Puce'),(49,'Maroon'),(50,'Aquamarine');
/*!40000 ALTER TABLE `colours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detail_sales`
--

DROP TABLE IF EXISTS `detail_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detail_sales` (
  `id` int(11) NOT NULL,
  `id_sales` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b182e97e-9432-4650-be6f-5694930da147` (`id_product`),
  CONSTRAINT `FK_b182e97e-9432-4650-be6f-5694930da147` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_sales`
--

LOCK TABLES `detail_sales` WRITE;
/*!40000 ALTER TABLE `detail_sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `detail_sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_709ea25e-3d6a-454d-a850-e617e808564b` (`id_user`),
  KEY `FK_5776a3a3-c876-4e29-bc1a-3e83e8b66564` (`id_product`),
  CONSTRAINT `FK_5776a3a3-c876-4e29-bc1a-3e83e8b66564` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_709ea25e-3d6a-454d-a850-e617e808564b` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'www.google.com');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(800) COLLATE utf8_spanish_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_image` int(11) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `id_subcategory` int(11) DEFAULT NULL,
  `visible` tinyint(4) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ef2da699-323f-46c8-98f6-6282e3be8efe` (`id_marca`),
  KEY `FK_fbdbc21b-a531-483c-9cce-8f71e105dfe9` (`id_subcategory`),
  KEY `FK_594adef5-221a-456a-9576-ab6e226eaa39` (`id_image`),
  CONSTRAINT `FK_594adef5-221a-456a-9576-ab6e226eaa39` FOREIGN KEY (`id_image`) REFERENCES `images` (`id`),
  CONSTRAINT `FK_ef2da699-323f-46c8-98f6-6282e3be8efe` FOREIGN KEY (`id_marca`) REFERENCES `brand` (`id`),
  CONSTRAINT `FK_fbdbc21b-a531-483c-9cce-8f71e105dfe9` FOREIGN KEY (`id_subcategory`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'pantalon','largo',1500.00,'1',1,1,1,1,10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `id_detail_sale` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `factura` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `final_price` tinyint(4) NOT NULL,
  `date_sales` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_13966a88-d65e-45b5-96d9-4a6ed5658d95` (`id_user`),
  KEY `FK_50518218-f081-4a17-8a0d-45c57328a539` (`id_detail_sale`),
  CONSTRAINT `FK_13966a88-d65e-45b5-96d9-4a6ed5658d95` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_50518218-f081-4a17-8a0d-45c57328a539` FOREIGN KEY (`id_detail_sale`) REFERENCES `detail_sales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Remeras');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talle_product`
--

DROP TABLE IF EXISTS `talle_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talle_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_talle` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_091e33b8-3150-409c-8700-333337ea4dc5` (`id_talle`),
  KEY `FK_f9d2d928-4854-4445-8f17-04aa9f9fa3ea` (`id_product`),
  CONSTRAINT `FK_091e33b8-3150-409c-8700-333337ea4dc5` FOREIGN KEY (`id_talle`) REFERENCES `talles` (`id`),
  CONSTRAINT `FK_f9d2d928-4854-4445-8f17-04aa9f9fa3ea` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talle_product`
--

LOCK TABLES `talle_product` WRITE;
/*!40000 ALTER TABLE `talle_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `talle_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `talle` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,42);
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `last_name` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(65) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(70) COLLATE utf8_spanish_ci NOT NULL,
  `phone` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `address` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rol_id` int(2) NOT NULL,
  `province` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `avatar` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `dni` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL,
  `postalcode` varchar(25) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-06 15:50:01
