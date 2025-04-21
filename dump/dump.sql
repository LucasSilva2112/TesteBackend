-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: FORCA_DE_VENDAS
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('b090cb9e-ea00-48b2-9ec5-86cf5b50da9f','656090b851c029a04b0b98ab6a042ce9e50135568b4cbf57a0a64c98175cdbde','2025-04-20 01:13:16.088','20250420011313_teste100',NULL,NULL,'2025-04-20 01:13:13.492',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `logo_img` varchar(255) DEFAULT NULL,
  `min_value` decimal(10,2) NOT NULL DEFAULT 0.00,
  `min_installments_value` decimal(10,2) NOT NULL DEFAULT 0.00,
  `visible` tinyint(1) DEFAULT 1,
  `sku_order` varchar(255) DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  `business_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `companyId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brands_name_companyId_key` (`name`,`companyId`),
  UNIQUE KEY `brands_address_id_key` (`address_id`),
  KEY `brands_business_id_fkey` (`business_id`),
  KEY `brands_companyId_fkey` (`companyId`),
  CONSTRAINT `brands_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Gucci',NULL,0.00,0.00,1,NULL,NULL,NULL,'2025-04-19 22:29:17.496',NULL,NULL,1);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(37) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `companyId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_name_companyId_key` (`name`,`companyId`),
  KEY `categories_companyId_fkey` (`companyId`),
  CONSTRAINT `categories_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Moda Casul','2025-04-20 01:29:48',1);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `reated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `gender` varchar(191) DEFAULT NULL,
  `reference` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Kalunga','2025-04-20 01:28:45',NULL,NULL,NULL,'ShoppingBarueri');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price_tables`
--

DROP TABLE IF EXISTS `price_tables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `price_tables` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `price_adjustment` decimal(5,4) NOT NULL DEFAULT 1.0000,
  `minimum_value` decimal(10,2) NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `companyId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `price_table_companyId_fkey` (`companyId`),
  CONSTRAINT `price_tables_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_tables`
--

LOCK TABLES `price_tables` WRITE;
/*!40000 ALTER TABLE `price_tables` DISABLE KEYS */;
INSERT INTO `price_tables` VALUES (1,'Tabela de Preços',1.0000,0.00,1,'2025-04-20 01:33:50',NULL,NULL,1),(2,'Tabela de Preços',1.0000,0.00,1,'2025-04-20 01:33:50',NULL,NULL,1),(3,'Tabela de Preços',1.0000,0.00,1,'2025-04-20 01:33:50',NULL,NULL,1),(4,'Tabela de Preços',1.0000,0.00,1,'2025-04-20 01:33:50',NULL,NULL,1);
/*!40000 ALTER TABLE `price_tables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price_tables_skus`
--

DROP TABLE IF EXISTS `price_tables_skus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `price_tables_skus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `sku_id` int(11) NOT NULL,
  `price_table_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_sku_price_table` (`sku_id`,`price_table_id`),
  KEY `fk_price_table` (`price_table_id`),
  CONSTRAINT `fk_price_table` FOREIGN KEY (`price_table_id`) REFERENCES `price_tables` (`id`),
  CONSTRAINT `fk_price_table_sku` FOREIGN KEY (`sku_id`) REFERENCES `skus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_tables_skus`
--

LOCK TABLES `price_tables_skus` WRITE;
/*!40000 ALTER TABLE `price_tables_skus` DISABLE KEYS */;
INSERT INTO `price_tables_skus` VALUES (1,50.00,'2025-04-20 01:34:38',NULL,1,1),(4,59.99,'2025-04-20 04:37:31',NULL,3,1),(5,55.99,'2025-04-20 04:37:31',NULL,3,2),(6,69.99,'2025-04-20 04:37:31',NULL,4,1),(7,65.99,'2025-04-20 04:37:31',NULL,4,2),(8,59.99,'2025-04-21 11:03:44',NULL,6,1),(9,55.99,'2025-04-21 11:03:44',NULL,6,2),(10,69.99,'2025-04-21 11:03:44',NULL,7,1),(11,65.99,'2025-04-21 11:03:44',NULL,7,2),(12,59.99,'2025-04-21 12:01:59',NULL,9,1),(13,55.99,'2025-04-21 12:01:59',NULL,9,2),(14,69.99,'2025-04-21 12:01:59',NULL,10,1),(15,65.99,'2025-04-21 12:01:59',NULL,10,2),(16,59.99,'2025-04-21 12:18:31',NULL,12,1),(17,55.99,'2025-04-21 12:18:31',NULL,12,2),(18,69.99,'2025-04-21 12:18:31',NULL,13,1),(19,65.99,'2025-04-21 12:18:31',NULL,13,2),(20,59.99,'2025-04-21 12:20:45',NULL,15,1),(21,55.99,'2025-04-21 12:20:45',NULL,15,2),(22,69.99,'2025-04-21 12:20:45',NULL,16,1),(23,65.99,'2025-04-21 12:20:45',NULL,16,2),(26,59.99,'2025-04-21 12:21:55',NULL,19,1),(27,55.99,'2025-04-21 12:21:55',NULL,19,2),(28,69.99,'2025-04-21 12:21:55',NULL,20,1),(29,65.99,'2025-04-21 12:21:55',NULL,20,2),(30,59.99,'2025-04-21 13:40:56',NULL,21,1),(31,55.99,'2025-04-21 13:40:56',NULL,21,2),(32,69.99,'2025-04-21 13:40:56',NULL,22,1),(33,65.99,'2025-04-21 13:40:56',NULL,22,2),(34,59.99,'2025-04-21 13:41:30',NULL,23,1),(35,55.99,'2025-04-21 13:41:30',NULL,23,2),(36,69.99,'2025-04-21 13:41:30',NULL,24,1),(37,65.99,'2025-04-21 13:41:30',NULL,24,2),(38,59.99,'2025-04-21 15:28:55',NULL,26,1),(39,55.99,'2025-04-21 15:28:55',NULL,26,2),(40,69.99,'2025-04-21 15:28:55',NULL,27,1),(41,65.99,'2025-04-21 15:28:55',NULL,27,2),(42,59.99,'2025-04-21 15:33:52',NULL,28,1),(43,55.99,'2025-04-21 15:33:52',NULL,28,2),(44,69.99,'2025-04-21 15:33:52',NULL,29,1),(45,65.99,'2025-04-21 15:33:52',NULL,29,2),(46,59.99,'2025-04-21 15:34:57',NULL,30,1),(47,55.99,'2025-04-21 15:34:57',NULL,30,2),(48,69.99,'2025-04-21 15:34:57',NULL,31,1),(49,65.99,'2025-04-21 15:34:57',NULL,31,2);
/*!40000 ALTER TABLE `price_tables_skus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `reference` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `prompt_delivery` tinyint(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `erp_id` varchar(37) DEFAULT NULL,
  `brand_id` int(11) NOT NULL,
  `deadline_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `subcategory_id` int(10) unsigned DEFAULT NULL,
  `category_order` tinyint(4) DEFAULT 0,
  `composition_data` varchar(255) DEFAULT NULL,
  `technical_information` varchar(255) DEFAULT NULL,
  `open_grid` tinyint(1) NOT NULL DEFAULT 0,
  `ipi` decimal(10,2) DEFAULT 0.00,
  `is_discontinued` tinyint(1) NOT NULL DEFAULT 0,
  `is_launch` tinyint(1) NOT NULL DEFAULT 0,
  `is_visible` tinyint(1) NOT NULL DEFAULT 1,
  `colection` varchar(255) DEFAULT NULL,
  `companyId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_erpId_companyId_key` (`erp_id`,`companyId`),
  KEY `fk_categories_products` (`category_id`),
  KEY `fk_subcategories_products` (`subcategory_id`),
  KEY `products_brandId_fkey` (`brand_id`),
  KEY `products_companyId_fkey` (`companyId`),
  KEY `products_deadlineId_fkey` (`deadline_id`),
  CONSTRAINT `fk_brands_company` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_categories_products` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_subcategories_products` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Produto de Teste','REF-123','NACIONAL','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-20 01:31:47',NULL,'2025-04-21 12:01:02',1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(6,'tinta acrilica','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-20 04:37:31',NULL,'2025-04-21 12:22:16',1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(8,'camisa casual','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-21 11:03:44',NULL,'2025-04-21 12:00:34',1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(10,'camisa casual','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-21 12:01:59',NULL,'2025-04-21 12:02:05',1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(12,'bermuda preta','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-21 12:18:31',NULL,'2025-04-21 15:32:27',1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(13,'camisa bege','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-21 13:40:56',NULL,NULL,1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(14,'camisa preta','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-21 13:41:30',NULL,NULL,1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(16,'camisa polo','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-21 15:28:55',NULL,NULL,1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1),(17,'BORRACHA AZULL','REF1','IMPORTADO','MASCULINO',1,NULL,NULL,1,NULL,'2025-04-21 15:33:52',NULL,'2025-04-21 15:35:34',1,1,0,NULL,NULL,0,0.00,0,0,1,NULL,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skus`
--

DROP TABLE IF EXISTS `skus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(10) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `code` varchar(13) NOT NULL,
  `min_quantity` int(11) DEFAULT 1,
  `multiple_quantity` int(11) NOT NULL,
  `erpId` varchar(191) NOT NULL,
  `variant_id` int(11) NOT NULL,
  `cest` varchar(50) DEFAULT NULL,
  `height` double DEFAULT NULL,
  `length` double DEFAULT NULL,
  `ncm` varchar(50) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `width` double DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `skus_erpId_key` (`erpId`),
  KEY `skus_variant_id_fkey` (`variant_id`),
  CONSTRAINT `skus_variant_id_fkey` FOREIGN KEY (`variant_id`) REFERENCES `variants` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skus`
--

LOCK TABLES `skus` WRITE;
/*!40000 ALTER TABLE `skus` DISABLE KEYS */;
INSERT INTO `skus` VALUES (1,'M',100,50.00,'SKU123',1,1,'',1,NULL,NULL,NULL,NULL,NULL,NULL,'2025-04-19 22:33:17',NULL,NULL),(3,'M',100,59.99,'SKU001',1,1,'ERP5',3,'1234567890',30,20,'12345678',0.5,15,'2025-04-20 01:37:31',NULL,NULL),(4,'G',200,69.99,'SKU002',1,2,'ERP6',3,'1234567891',35,25,'12345679',0.6,17,'2025-04-20 01:37:31',NULL,NULL),(6,'M',100,59.99,'SKU001',1,1,'ERP2',5,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 08:03:44',NULL,NULL),(7,'G',200,69.99,'SKU002',1,2,'ERP4',5,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 08:03:44',NULL,NULL),(9,'M',100,59.99,'SKU001',1,1,'ERP23',7,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 09:01:59',NULL,NULL),(10,'G',200,69.99,'SKU002',1,2,'ERP44',7,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 09:01:59',NULL,NULL),(12,'M',100,59.99,'SKU001',1,1,'ERP232',9,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 09:18:31',NULL,NULL),(13,'G',200,69.99,'SKU002',1,2,'ERP443',9,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 09:18:31',NULL,NULL),(15,'M',100,59.99,'SKU001',1,1,'ERP2322',11,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 09:20:45',NULL,NULL),(16,'G',200,69.99,'SKU002',1,2,'ERP4422',11,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 09:20:45',NULL,NULL),(19,'M',100,59.99,'SKU001',1,1,'ERP122',13,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 09:21:55',NULL,NULL),(20,'G',200,69.99,'SKU002',1,2,'ERP222',13,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 09:21:55',NULL,NULL),(21,'M',100,59.99,'SKU001',1,1,'ERP1234',14,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 10:40:56',NULL,NULL),(22,'G',200,69.99,'SKU002',1,2,'ERP4332',14,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 10:40:56',NULL,NULL),(23,'M',100,59.99,'SKU001',1,1,'ERP12324',15,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 10:41:30',NULL,NULL),(24,'G',200,69.99,'SKU002',1,2,'ERP43232',15,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 10:41:30',NULL,NULL),(26,'M',100,59.99,'SKU001',1,1,'ERP123214',17,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 12:28:55',NULL,NULL),(27,'G',200,69.99,'SKU002',1,2,'ERP432132',17,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 12:28:55',NULL,NULL),(28,'M',100,59.99,'SKU001',1,1,'ERP000',18,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 12:33:52',NULL,NULL),(29,'G',200,69.99,'SKU002',1,2,'ERP0000',18,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 12:33:52',NULL,NULL),(30,'M',100,59.99,'SKU001',1,1,'ERP12233',19,'1234567890',30,20,'12345678',0.5,15,'2025-04-21 12:34:57',NULL,NULL),(31,'G',200,69.99,'SKU002',1,2,'ERP22233',19,'1234567891',35,25,'12345679',0.6,17,'2025-04-21 12:34:57',NULL,NULL);
/*!40000 ALTER TABLE `skus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(37) NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `subcategories_name_category_id_key` (`name`,`category_id`),
  KEY `fk_subcategories_categories` (`category_id`),
  CONSTRAINT `fk_subcategories_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Casual de Luxo',1,'2025-04-20 01:30:35');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variants`
--

DROP TABLE IF EXISTS `variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `variants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `hex_code` varchar(7) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_variants_products` (`product_id`),
  CONSTRAINT `fk_variants_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variants`
--

LOCK TABLES `variants` WRITE;
/*!40000 ALTER TABLE `variants` DISABLE KEYS */;
INSERT INTO `variants` VALUES (1,'Azul',NULL,3,'2025-04-20 01:32:36',NULL,NULL),(3,'azul','#Jaquet',6,'2025-04-20 04:37:31',NULL,NULL),(5,'azul','#Jaquet',8,'2025-04-21 11:03:44',NULL,NULL),(7,'azul','#Jaquet',10,'2025-04-21 12:01:59',NULL,NULL),(9,'azul','#Jaquet',12,'2025-04-21 12:18:31',NULL,NULL),(11,'azul','#Jaquet',12,'2025-04-21 12:20:45',NULL,NULL),(13,'azul','#Jaquet',6,'2025-04-21 12:21:55',NULL,NULL),(14,'azul','#Jaquet',13,'2025-04-21 13:40:56',NULL,NULL),(15,'azul','#Jaquet',14,'2025-04-21 13:41:30',NULL,NULL),(17,'azul','#Jaquet',16,'2025-04-21 15:28:55',NULL,NULL),(18,'azul','#Jaquet',17,'2025-04-21 15:33:52',NULL,NULL),(19,'azul','#Jaquet',17,'2025-04-21 15:34:57',NULL,NULL);
/*!40000 ALTER TABLE `variants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-21 10:51:39
