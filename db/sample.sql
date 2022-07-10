-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: music_program
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

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
-- Table structure for table `Event`
--

DROP TABLE IF EXISTS `Event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `venue` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startDateTime` timestamp NULL DEFAULT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EventSong`
--

DROP TABLE IF EXISTS `EventSong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventSong` (
  `eventId` int(11) DEFAULT NULL,
  `songId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `eventId` (`eventId`),
  KEY `songId` (`songId`),
  CONSTRAINT `EventSong_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `Event` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `EventSong_ibfk_2` FOREIGN KEY (`songId`) REFERENCES `Song` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventSong`
--

LOCK TABLES `EventSong` WRITE;
/*!40000 ALTER TABLE `EventSong` DISABLE KEYS */;
/*!40000 ALTER TABLE `EventSong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Instrument`
--

DROP TABLE IF EXISTS `Instrument`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Instrument` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instrument`
--

LOCK TABLES `Instrument` WRITE;
/*!40000 ALTER TABLE `Instrument` DISABLE KEYS */;
/*!40000 ALTER TABLE `Instrument` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InstrumentSong`
--

DROP TABLE IF EXISTS `InstrumentSong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InstrumentSong` (
  `notes` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `words` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mimeType` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL,
  `instrumentId` int(11) DEFAULT NULL,
  `songId` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `instrumentId` (`instrumentId`),
  KEY `songId` (`songId`),
  CONSTRAINT `InstrumentSong_ibfk_1` FOREIGN KEY (`instrumentId`) REFERENCES `Instrument` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `InstrumentSong_ibfk_2` FOREIGN KEY (`songId`) REFERENCES `Song` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InstrumentSong`
--

LOCK TABLES `InstrumentSong` WRITE;
/*!40000 ALTER TABLE `InstrumentSong` DISABLE KEYS */;
/*!40000 ALTER TABLE `InstrumentSong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profile`
--

DROP TABLE IF EXISTS `Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bio` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Profile_userId_key` (`userId`),
  CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile`
--

LOCK TABLES `Profile` WRITE;
/*!40000 ALTER TABLE `Profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `Profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL,
  `expiresAt` datetime(3) DEFAULT NULL,
  `handle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hashedSessionToken` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `antiCSRFToken` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publicData` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `privateData` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Session.handle_unique` (`handle`),
  KEY `userId` (`userId`),
  CONSTRAINT `Session_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Song`
--

DROP TABLE IF EXISTS `Song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Song` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL,
  `alias` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startKey` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempoCd` tinyint(4) NOT NULL,
  `startWords` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `arrangement` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Song`
--

LOCK TABLES `Song` WRITE;
/*!40000 ALTER TABLE `Song` DISABLE KEYS */;
/*!40000 ALTER TABLE `Song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SongTags`
--

DROP TABLE IF EXISTS `SongTags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SongTags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songId` int(11) DEFAULT NULL,
  `tagId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `SongTags_songId_fkey` (`songId`),
  KEY `SongTags_tagId_fkey` (`tagId`),
  CONSTRAINT `SongTags_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `SongTags_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SongTags`
--

LOCK TABLES `SongTags` WRITE;
/*!40000 ALTER TABLE `SongTags` DISABLE KEYS */;
/*!40000 ALTER TABLE `SongTags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tag`
--

DROP TABLE IF EXISTS `Tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Tag_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tag`
--

LOCK TABLES `Tag` WRITE;
/*!40000 ALTER TABLE `Tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `Tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Token`
--

DROP TABLE IF EXISTS `Token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL,
  `hashedToken` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('RESET_PASSWORD') COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiresAt` datetime(3) NOT NULL,
  `sentTo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Token.hashedToken_type_unique` (`hashedToken`,`type`),
  KEY `userId` (`userId`),
  CONSTRAINT `Token_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Token`
--

LOCK TABLES `Token` WRITE;
/*!40000 ALTER TABLE `Token` DISABLE KEYS */;
/*!40000 ALTER TABLE `Token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime(3) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(4) NOT NULL,
  `role` enum('USER','EDITOR','LEADER','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USER',
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User.email_unique` (`email`),
  UNIQUE KEY `User.email_active_unique` (`email`,`active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
INSERT INTO `_prisma_migrations` VALUES ('0efeadb5-cb39-4202-af64-cb5ec3e786e2','1cd58f00cfdc2fbd9bf90bdd9a66c5b27803198f9f6d064df7f38351525a6510','2022-05-03 04:40:49.185','20220503044049_active_change_to_tinyint',NULL,NULL,'2022-05-03 04:40:49.133',1),('1fa79ee6-6ae9-406f-9e41-6cd7eb0a3a0f','42a485550f008db4b78dbe4be738baa2a8ed6b29e00e05b2b69ec2b16a40e63b','2022-07-10 22:27:18.373','20220710222718_update_tags_table',NULL,NULL,'2022-07-10 22:27:18.367',1),('2662a151-5045-419b-8b36-3caad260740a','a6ba7c0390d1a6e0f82600d0c9f656257031fb137efffe4f5482a113240eefb0','2022-05-03 04:16:54.405','20220503041654_updates_to_user',NULL,NULL,'2022-05-03 04:16:54.201',1),('27a69043-50b9-40f3-9b02-70d24b39e080','2fd12c8c323ca25d47ed62bb8d5dfbf776cc78e1ddea768c2e8be255846c293b','2022-07-02 16:18:16.755','20220702161816_validated_the_schema',NULL,NULL,'2022-07-02 16:18:16.740',1),('861e15e2-b0c1-421e-8818-3b4e1332bf67','12d09398c390763b32b789ff5056facfc495f60bf87b614efed4c0598096af5d','2022-07-10 21:30:45.345','20220710213045_updates_to_many_to_many_relations',NULL,NULL,'2022-07-10 21:30:45.237',1),('8cb8e769-e957-44e2-9c37-1660a5c46bdf','888c3674a35a953799ed2d13211012ada22e7175efb0bc72351f3cf48d22fd9f','2022-07-09 18:58:38.488','20220709185838_changed_update_fields_to_use_updated_at',NULL,NULL,'2022-07-09 18:58:38.352',1),('96f36cf1-eee9-40cd-909b-1bb42a1208e1','f53bb2b51237de722c9a69ed445e0b2ad5cce8951dacdb9cca70584d1bb27953','2022-07-02 15:38:58.121','20220702153857_added_profille_table_and_improved_relations',NULL,NULL,'2022-07-02 15:38:57.950',1),('f9aed7ed-a89b-4870-b042-d17b6b1e3738','fd5f07f52c268fdc1e1193e3f45853c1454a30094222c403493cf9ad52eab2bb','2022-07-10 21:57:27.255','20220710215727_updates_to_relations_to_make_them_optional',NULL,NULL,'2022-07-10 21:57:27.047',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-10 18:48:59
