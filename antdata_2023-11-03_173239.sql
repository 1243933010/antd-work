-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: antdata
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('16f0338e-0b95-4c23-befe-c296a015ff86','9c72ed4453521b57d778dcd404c54cca449911155e20a0178020ecd73048458a','2023-08-15 09:44:12.114','20230815094412_',NULL,NULL,'2023-08-15 09:44:12.105',1),('1eaf56e3-18ca-41ab-8ef9-3265133a8ff5','3733827c1d2afc45d8de0144954323e853f11e7d15039582c7c7d7837c1fa933','2023-08-17 02:24:34.921','20230817022434_',NULL,NULL,'2023-08-17 02:24:34.853',1),('2976d045-da0d-4774-bf89-99a8a711a923','b2536937d42dd57f8564fa3bb1fc940430ff67e011cca2dc5c3a28f4a97e22b7','2023-09-19 09:05:36.918','20230919090536_',NULL,NULL,'2023-09-19 09:05:36.890',1),('29fa6c0e-1518-4aa4-b595-5d65615e7d39','31a23176e4ed7b98db4102a0a754b2a30809b0a827512b2b9cf005fcad1688d2','2023-08-17 09:32:28.063','20230817093228_',NULL,NULL,'2023-08-17 09:32:28.026',1),('3f1491ac-f04e-439c-a4f9-a915f0ba05be','ac338900b11eebea8c786715176e46e735c6071492642b111c7af3025dc113cf','2023-08-26 06:43:57.563','20230826064357_',NULL,NULL,'2023-08-26 06:43:57.543',1),('468575dd-00e4-458e-b3e1-5ccb2ad24694','144a6498a502e8e169794061567885e646ac49e32f285979dd1684cc1039cb96','2023-11-03 08:08:57.751','20231103080857_',NULL,NULL,'2023-11-03 08:08:57.733',1),('6f2167da-95fd-4aaf-8d79-9215ff0822d9','d2b3fc3c45fc5bdfd63e2a9671ffaf9e56ad18efd46aa2aa6b91841daf201ab4','2023-08-17 09:38:32.913','20230817093832_',NULL,NULL,'2023-08-17 09:38:32.886',1),('76c45140-efb1-46df-b486-4826b7773cb8','29705ce62478f2ebe6b37242ec0bb8f44b67c27d1cd81a082e0dfc4abe6ace60','2023-08-03 09:56:05.345','20230803095605_',NULL,NULL,'2023-08-03 09:56:05.333',1),('a04d622c-3a86-4e2b-b850-5e9c635a1e1f','c06ebda7f3db2d775da430621c2dbec783eba37e17298c96cf06ad833531f094','2023-08-04 09:25:30.301','20230804092530_',NULL,NULL,'2023-08-04 09:25:30.283',1),('a18dae27-4cab-4fc5-810d-51816ed63ae1','90e306196d2a4d7ddca2617a8823c7d5f38fae370f8d5d1772f3b72b5b7788e1','2023-08-03 09:23:22.192','20230803092322_',NULL,NULL,'2023-08-03 09:23:22.171',1),('ac17d0c9-ab5b-40c1-9ef0-035511a95f0f','cdcc82b5739ca632f169061665179cef6ae85cd5a20bfe6fda50ef02b03e8968','2023-08-03 09:01:27.796','20230803085205_',NULL,NULL,'2023-08-03 09:01:27.754',1),('bb5e3b73-e76a-4d28-9596-b2d7829ec54c','e570423b355625687ca70312412efbc387c97bb2e1615446736d2cac84fea4b2','2023-08-17 09:43:46.903','20230817094346_',NULL,NULL,'2023-08-17 09:43:46.895',1),('c7b6d001-4d13-4a63-a388-f9885ebb86f8','df1fe9fec9b570a3ea6914bccb60ce2e5bf5f94adf3733fa3546004723ed24db','2023-08-17 10:01:05.926','20230817100105_',NULL,NULL,'2023-08-17 10:01:05.918',1),('d094a668-877c-4d14-b6c7-88f929456971','cce317af1d8d689e4da9799c6a684d749e0f7cee59f70d8f68692c75ceb296c7','2023-08-17 02:21:50.329','20230817022150_',NULL,NULL,'2023-08-17 02:21:50.282',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;

--
-- Table structure for table `echartdictionary`
--

DROP TABLE IF EXISTS `echartdictionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `echartdictionary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeId` int NOT NULL,
  `masterName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `devName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `EchartDictionary_id_idx` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `echartdictionary`
--

/*!40000 ALTER TABLE `echartdictionary` DISABLE KEYS */;
INSERT INTO `echartdictionary` VALUES (1,1,'总人数','在线人数'),(2,2,'大群人数','yt分部人数'),(3,3,'kg',NULL);
/*!40000 ALTER TABLE `echartdictionary` ENABLE KEYS */;

--
-- Table structure for table `echarttable`
--

DROP TABLE IF EXISTS `echarttable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `echarttable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL,
  `time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `masterNum` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `devNum` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isShow` tinyint(1) NOT NULL DEFAULT '1',
  `userId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `echarttable`
--

/*!40000 ALTER TABLE `echarttable` DISABLE KEYS */;
INSERT INTO `echarttable` VALUES (9,1,'2023-08-18','805','88',1,1),(10,3,'2023-08-18','52.85',NULL,1,1),(11,2,'2023-08-18','529','42',1,1),(12,1,'2023-08-17','900','200',0,1),(13,3,'2023-08-17','50',NULL,0,1),(14,2,'2023-08-17','500','200',0,1),(15,1,'2023-08-21','805','171',1,1),(16,3,'2023-08-20','53.85',NULL,1,1),(17,1,'2023-08-22','803','167',1,1),(18,2,'2023-08-22','528','42',1,1),(19,3,'2023-08-21','54.15',NULL,1,1),(20,1,'2023-08-16','1000','50',0,1),(21,1,'2023-08-25','802','174',1,1),(22,1,'2023-08-31','790','171',1,1),(23,1,'2023-09-04','789','175',1,1),(24,2,'2023-09-04','516','41',1,1),(25,1,'2023-09-11','143','44',1,1),(26,2,'2023-09-12','517','42',1,1),(27,1,'2023-09-18','51','25',1,1),(28,1,'2023-09-25','69','23',1,1),(29,3,'2023-09-28','56.10',NULL,1,1),(30,2,'2023-09-28','510','41',1,1),(31,1,'2023-09-28','71','24',1,1),(32,1,'2023-10-07','92','24',1,1);
/*!40000 ALTER TABLE `echarttable` ENABLE KEYS */;

--
-- Table structure for table `materiallibrary`
--

DROP TABLE IF EXISTS `materiallibrary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiallibrary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classificationId` int NOT NULL,
  `isShow` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `MaterialLibrary_classificationId_idx` (`classificationId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiallibrary`
--

/*!40000 ALTER TABLE `materiallibrary` DISABLE KEYS */;
INSERT INTO `materiallibrary` VALUES (4,'/images/1693876875883.jpg',4,1),(5,'/images/1693877071697.jpg',4,1),(6,'/images/1694417569056.png',2,1),(7,'/images/1694419827935.jpg',2,1),(8,'/images/1694419827938.jpg',2,1),(9,'/images/1694419827941.jpg',2,1),(10,'/images/1694419827943.jpg',2,1),(11,'/images/1694419827947.jpg',2,1),(12,'/images/1694419827949.jpg',2,1),(13,'/images/1694419828005.png',2,1),(14,'/images/1694419827968.jpg',2,1),(15,'/images/1698912038918.png',5,1),(16,'/images/1698912046358.png',5,1),(17,'/images/1698912046352.png',5,1),(18,'/images/1698912046355.png',5,1);
/*!40000 ALTER TABLE `materiallibrary` ENABLE KEYS */;

--
-- Table structure for table `materiallibraryclassification`
--

DROP TABLE IF EXISTS `materiallibraryclassification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiallibraryclassification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiallibraryclassification`
--

/*!40000 ALTER TABLE `materiallibraryclassification` DISABLE KEYS */;
INSERT INTO `materiallibraryclassification` VALUES (2,'测试分类'),(3,'榴莲'),(4,'头像'),(5,'banner');
/*!40000 ALTER TABLE `materiallibraryclassification` ENABLE KEYS */;

--
-- Table structure for table `packagetable`
--

DROP TABLE IF EXISTS `packagetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packagetable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shopToken` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `PackageTable_id_idx` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packagetable`
--

/*!40000 ALTER TABLE `packagetable` DISABLE KEYS */;
INSERT INTO `packagetable` VALUES (1,'test');
/*!40000 ALTER TABLE `packagetable` ENABLE KEYS */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isShow` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'111','yyy','admin','/images/1694419827938.jpg','123',1),(2,'111','test11','admin','/images/1694417569056.png','123',1),(3,'11122','shen','test','/images/1694419827941.jpg','1234',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

--
-- Table structure for table `work`
--

DROP TABLE IF EXISTS `work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `workType` int NOT NULL,
  `startTime` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `endTime` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mounthTime` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isShow` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Work_id_key` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work`
--

/*!40000 ALTER TABLE `work` DISABLE KEYS */;
INSERT INTO `work` VALUES (1,1,2,NULL,NULL,'2023-01',0),(2,1,1,'2023-08-03','2023-09-09',NULL,0),(3,1,1,'2023-08-07','2023-08-11',NULL,1),(4,1,1,'2023-08-01','2023-08-03',NULL,0),(5,1,1,'2023-08-01','2023-08-03',NULL,0),(11,1,2,NULL,NULL,'2023-03',0),(12,1,1,'2023-08-14','2023-08-18',NULL,1),(16,1,1,'2023-08-21','2023-08-25',NULL,1),(17,1,1,'2023-08-28','2023-09-01',NULL,1),(18,1,1,'2023-09-04','2023-09-08',NULL,1),(19,1,1,'2023-09-11','2023-09-15',NULL,1),(20,1,1,'2023-09-18','2023-09-23',NULL,1),(21,1,2,NULL,NULL,'2023-08',1),(22,1,2,NULL,NULL,'2023-09',1),(23,1,1,'2023-09-25','2023-09-28',NULL,1),(24,1,2,NULL,NULL,'2023-10',1),(25,1,1,'2023-10-07','2023-10-13',NULL,1);
/*!40000 ALTER TABLE `work` ENABLE KEYS */;

--
-- Table structure for table `worklist`
--

DROP TABLE IF EXISTS `worklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `worklist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `workId` int NOT NULL,
  `isShow` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `WorkList_workId_idx` (`workId`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worklist`
--

/*!40000 ALTER TABLE `worklist` DISABLE KEYS */;
INSERT INTO `worklist` VALUES (1,'111111',1,1),(3,'222222222222',2,1),(4,'开发清单管理模块',3,1),(5,'测试新增功能',3,1),(6,'0000',4,1),(7,'',5,1),(8,'111111',11,1),(9,'3333',2,1),(10,'优化清单管理页面展示',12,1),(11,'修改入驻商户提出需求',12,1),(12,'修改小程序插件配置',12,1),(18,'优化后台上架商品筛选展示问题',16,1),(19,'制作产品宣传图片',16,1),(20,'添加商家端万里牛配置页面接口',16,1),(21,'开发京东报关加密功能',16,1),(22,'商品相关审核以及商家商品详情图片粘贴优化',17,1),(23,'开发测试京东报关加密',17,1),(24,'其他相关技术需求',17,1),(25,'整理发货单加密数据',18,1),(26,'开发测试京东报关加密',18,1),(27,'整理海关发货单数据、处理图片',19,1),(28,'处理商户端功能优化',18,1),(29,'修改报关客户端涉及京东流程逻辑',19,1),(30,'商户端编辑功能优化',19,1),(31,'开发清单管理模块',21,1),(32,'修改小程序插件配置',21,1),(33,'添加商家端万里牛配置页面接口',21,1),(34,'商品相关审核以及商家商品详情图片粘贴优化',21,1),(35,'迭代开发测试京东报关加密',22,1),(36,'处理商户端功能优化',22,1),(37,'配合商户商品处理以及客服处理',22,1),(38,'添加京东报关逻辑',20,1),(39,'配合商户商品处理以及客服处理',20,1),(40,'后台系统细节优化',20,1),(41,'修改摘要加签逻辑',23,1),(42,'修复读卡加密失败问题',23,1),(43,'售后处理以及商家商品上架处理',23,1),(44,'整理海关发货单数据、处理图片',22,1),(45,'迭代开发测试京东报关加密',24,1),(46,'配合商户商品处理以及客服处理',24,1),(47,'',25,1);
/*!40000 ALTER TABLE `worklist` ENABLE KEYS */;

--
-- Table structure for table `worktag`
--

DROP TABLE IF EXISTS `worktag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `worktag` (
  `value` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worktag`
--

/*!40000 ALTER TABLE `worktag` DISABLE KEYS */;
INSERT INTO `worktag` VALUES (1,'轻度','#397BD7'),(2,'重度','#D78B39'),(3,'规划','#7B39D7'),(4,'杂活','#6C1363'),(5,'沟通','#37C571'),(6,'study','#BFC537');
/*!40000 ALTER TABLE `worktag` ENABLE KEYS */;

--
-- Table structure for table `worktoworktag`
--

DROP TABLE IF EXISTS `worktoworktag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `worktoworktag` (
  `workId` int NOT NULL,
  `workTagId` int NOT NULL,
  PRIMARY KEY (`workId`,`workTagId`),
  KEY `WorkToWorkTag_workTagId_idx` (`workTagId`),
  KEY `WorkToWorkTag_workId_idx` (`workId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worktoworktag`
--

/*!40000 ALTER TABLE `worktoworktag` DISABLE KEYS */;
INSERT INTO `worktoworktag` VALUES (2,1),(3,1),(5,1),(11,1),(12,1),(16,1),(17,1),(18,1),(20,1),(21,1),(23,1),(25,1),(1,2),(2,2),(4,2),(5,2),(11,2),(19,2),(22,2),(24,2),(3,3),(4,3),(5,3),(11,3),(12,3),(16,3),(17,3),(18,3),(19,3),(20,3),(21,3),(22,3),(23,3),(24,3),(25,3),(1,4),(2,4),(4,4),(5,4),(11,4),(18,4),(20,4),(24,4),(1,5),(4,5),(5,5),(11,5),(18,5),(3,6),(12,6),(16,6);
/*!40000 ALTER TABLE `worktoworktag` ENABLE KEYS */;

--
-- Dumping routines for database 'antdata'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-03 17:32:45
