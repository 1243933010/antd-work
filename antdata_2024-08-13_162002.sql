-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: antdata
-- ------------------------------------------------------
-- Server version	8.2.0

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
INSERT INTO `_prisma_migrations` VALUES ('339bf9c9-4305-4159-9053-6322419fd411','78c3f922bb06504c8b3eab298a912bf03a71bb339bb147883adc6ce1314ca600','2024-08-13 07:46:21.769','20240813074621_y',NULL,NULL,'2024-08-13 07:46:21.649',1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `echartdictionary`
--

/*!40000 ALTER TABLE `echartdictionary` DISABLE KEYS */;
/*!40000 ALTER TABLE `echartdictionary` ENABLE KEYS */;

--
-- Table structure for table `echarttable`
--

DROP TABLE IF EXISTS `echarttable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `echarttable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `type` int NOT NULL,
  `time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `masterNum` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `devNum` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isShow` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `echarttable`
--

/*!40000 ALTER TABLE `echarttable` DISABLE KEYS */;
/*!40000 ALTER TABLE `echarttable` ENABLE KEYS */;

--
-- Table structure for table `materiallibrary`
--

DROP TABLE IF EXISTS `materiallibrary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiallibrary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `isShow` tinyint(1) NOT NULL DEFAULT '1',
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classificationId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `MaterialLibrary_classificationId_idx` (`classificationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiallibrary`
--

/*!40000 ALTER TABLE `materiallibrary` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiallibraryclassification`
--

/*!40000 ALTER TABLE `materiallibraryclassification` DISABLE KEYS */;
/*!40000 ALTER TABLE `materiallibraryclassification` ENABLE KEYS */;

--
-- Table structure for table `packagetable`
--

DROP TABLE IF EXISTS `packagetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packagetable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shopToken` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `PackageTable_id_idx` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packagetable`
--

/*!40000 ALTER TABLE `packagetable` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'1243933010@qq.com','yue','11',NULL,'123',1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work`
--

/*!40000 ALTER TABLE `work` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worklist`
--

/*!40000 ALTER TABLE `worklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `worklist` ENABLE KEYS */;

--
-- Table structure for table `worktag`
--

DROP TABLE IF EXISTS `worktag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `worktag` (
  `value` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worktag`
--

/*!40000 ALTER TABLE `worktag` DISABLE KEYS */;
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

-- Dump completed on 2024-08-13 16:20:03
