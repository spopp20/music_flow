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
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `active` int(11) NOT NULL DEFAULT 1,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `venue` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startDateTime` timestamp NOT NULL DEFAULT current_timestamp(),
  `endDateTime` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
INSERT INTO `Event` VALUES (26,'Event A Morning',1,'An morning event','101 Old Rig Lane',NULL,NULL,NULL,'2021-11-22 13:57:31','2021-08-01 22:39:13','2021-08-02 02:39:13','2021-08-02 02:39:13'),(27,'Event A Evening',1,'An evening event','101 Old Rig Lane',NULL,NULL,NULL,'2021-11-23 00:30:31','2021-08-01 22:39:13','2021-08-02 02:39:13','2021-08-02 02:39:13'),(28,'Event B Evening',1,'An evening event','101 Old Rig Lane',NULL,NULL,NULL,'2021-11-26 00:30:31','2021-08-01 22:39:13','2021-08-02 02:39:13','2021-08-02 02:39:13'),(29,'Event C Evening',1,'An evening event','101 Old Rig Lane',NULL,NULL,NULL,'2021-11-23 00:30:31','2021-08-01 22:39:13','2021-08-02 02:39:13','2021-08-02 02:39:13');
/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EventSong`
--

DROP TABLE IF EXISTS `EventSong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventSong` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventId` int(11) DEFAULT NULL,
  `songId` int(11) DEFAULT NULL,
  `published` int(11) NOT NULL DEFAULT 0,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
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
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `active` int(11) NOT NULL DEFAULT 1,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instrument`
--

LOCK TABLES `Instrument` WRITE;
/*!40000 ALTER TABLE `Instrument` DISABLE KEYS */;
INSERT INTO `Instrument` VALUES (58,'Bass',1,'Base Guitar','2021-08-01 21:52:39','2021-08-01 21:52:39'),(59,'Chello',1,'Chello','2021-08-01 21:52:39','2021-08-01 21:52:39'),(60,'Clarinet',1,'Clarinet','2021-08-01 21:52:39','2021-08-01 21:52:39'),(61,'Drums',1,'Drum Set','2021-08-01 21:52:39','2021-08-01 21:52:39'),(62,'French Horn',1,'French Horn1','2021-08-01 21:52:39','2021-08-01 21:52:39'),(63,'French Horn',1,'French Horn2','2021-08-01 21:52:39','2021-08-01 21:52:39'),(64,'Flute',1,'Flute','2021-08-01 21:52:39','2021-08-01 21:52:39'),(65,'Guitar',1,'Guitar','2021-08-01 21:52:39','2021-08-01 21:52:39'),(66,'Oboe',1,'Oboe','2021-08-01 21:52:39','2021-08-01 21:52:39'),(67,'Percussion',1,'Percussion Set','2021-08-01 21:52:39','2021-08-01 21:52:39'),(68,'Piano',1,'Piano','2021-08-01 21:52:39','2021-08-01 21:52:39'),(69,'Piccolo',1,'Piccolo','2021-08-01 21:52:39','2021-08-01 21:52:39'),(70,'Sax',1,'Saxophone','2021-08-01 21:52:39','2021-08-01 21:52:39'),(71,'Tbone1',1,'Trombone1','2021-08-01 21:52:39','2021-08-01 21:52:39'),(72,'Tbone',1,'Trombone2','2021-08-01 21:52:39','2021-08-01 21:52:39'),(73,'Trumpet',1,'Trumpet1','2021-08-01 21:52:39','2021-08-01 21:52:39'),(74,'Trumpet',1,'Trumpet2','2021-08-01 21:52:39','2021-08-01 21:52:39'),(75,'Tuba',1,'Tuba','2021-08-01 21:52:39','2021-08-01 21:52:39'),(76,'Viola',1,'Viola','2021-08-01 21:52:39','2021-08-01 21:52:39'),(77,'Violin',1,'Violin','2021-08-01 21:52:39','2021-08-01 21:52:39'),(78,'Bass',1,'Base Guitar','2021-08-02 00:25:05','2021-08-02 00:25:05'),(79,'Chello',1,'Chello','2021-08-02 00:25:05','2021-08-02 00:25:05'),(80,'Clarinet',1,'Clarinet','2021-08-02 00:25:05','2021-08-02 00:25:05'),(81,'Drums',1,'Drum Set','2021-08-02 00:25:05','2021-08-02 00:25:05'),(82,'French Horn',1,'French Horn1','2021-08-02 00:25:05','2021-08-02 00:25:05'),(83,'French Horn',1,'French Horn2','2021-08-02 00:25:05','2021-08-02 00:25:05'),(84,'Flute',1,'Flute','2021-08-02 00:25:05','2021-08-02 00:25:05'),(85,'Guitar',1,'Guitar','2021-08-02 00:25:05','2021-08-02 00:25:05'),(86,'Oboe',1,'Oboe','2021-08-02 00:25:05','2021-08-02 00:25:05'),(87,'Percussion',1,'Percussion Set','2021-08-02 00:25:05','2021-08-02 00:25:05'),(88,'Piano',1,'Piano','2021-08-02 00:25:05','2021-08-02 00:25:05'),(89,'Piccolo',1,'Piccolo','2021-08-02 00:25:05','2021-08-02 00:25:05'),(90,'Sax',1,'Saxophone','2021-08-02 00:25:05','2021-08-02 00:25:05'),(91,'Tbone1',1,'Trombone1','2021-08-02 00:25:05','2021-08-02 00:25:05'),(92,'Tbone',1,'Trombone2','2021-08-02 00:25:05','2021-08-02 00:25:05'),(93,'Trumpet',1,'Trumpet1','2021-08-02 00:25:05','2021-08-02 00:25:05'),(94,'Trumpet',1,'Trumpet2','2021-08-02 00:25:05','2021-08-02 00:25:05'),(95,'Tuba',1,'Tuba','2021-08-02 00:25:05','2021-08-02 00:25:05'),(96,'Viola',1,'Viola','2021-08-02 00:25:05','2021-08-02 00:25:05'),(97,'Violin',1,'Violin','2021-08-02 00:25:05','2021-08-02 00:25:05'),(98,'Bass',1,'Base Guitar','2021-08-02 02:39:13','2021-08-02 02:39:13'),(99,'Chello',1,'Chello','2021-08-02 02:39:13','2021-08-02 02:39:13'),(100,'Clarinet',1,'Clarinet','2021-08-02 02:39:13','2021-08-02 02:39:13'),(101,'Drums',1,'Drum Set','2021-08-02 02:39:13','2021-08-02 02:39:13'),(102,'French Horn',1,'French Horn1','2021-08-02 02:39:13','2021-08-02 02:39:13'),(103,'French Horn',1,'French Horn2','2021-08-02 02:39:13','2021-08-02 02:39:13'),(104,'Flute',1,'Flute','2021-08-02 02:39:13','2021-08-02 02:39:13'),(105,'Guitar',1,'Guitar','2021-08-02 02:39:13','2021-08-02 02:39:13'),(106,'Oboe',1,'Oboe','2021-08-02 02:39:13','2021-08-02 02:39:13'),(107,'Percussion',1,'Percussion Set','2021-08-02 02:39:13','2021-08-02 02:39:13'),(108,'Piano',1,'Piano','2021-08-02 02:39:13','2021-08-02 02:39:13'),(109,'Piccolo',1,'Piccolo','2021-08-02 02:39:13','2021-08-02 02:39:13'),(110,'Sax',1,'Saxophone','2021-08-02 02:39:13','2021-08-02 02:39:13'),(111,'Tbone1',1,'Trombone1','2021-08-02 02:39:13','2021-08-02 02:39:13'),(112,'Tbone',1,'Trombone2','2021-08-02 02:39:13','2021-08-02 02:39:13'),(113,'Trumpet',1,'Trumpet1','2021-08-02 02:39:13','2021-08-02 02:39:13'),(114,'Trumpet',1,'Trumpet2','2021-08-02 02:39:13','2021-08-02 02:39:13'),(115,'Tuba',1,'Tuba','2021-08-02 02:39:13','2021-08-02 02:39:13'),(116,'Viola',1,'Viola','2021-08-02 02:39:13','2021-08-02 02:39:13'),(117,'Violin',1,'Violin','2021-08-02 02:39:13','2021-08-02 02:39:13');
/*!40000 ALTER TABLE `Instrument` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InstrumentSong`
--

DROP TABLE IF EXISTS `InstrumentSong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InstrumentSong` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notes` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `words` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mimeType` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `instrumentId` int(11) DEFAULT NULL,
  `songId` int(11) DEFAULT NULL,
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
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
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
  `title` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `active` int(11) NOT NULL DEFAULT 1,
  `alias` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startKey` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempoCd` int(11) DEFAULT NULL,
  `startWords` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `arrangement` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `tags` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Song`
--

LOCK TABLES `Song` WRITE;
/*!40000 ALTER TABLE `Song` DISABLE KEYS */;
INSERT INTO `Song` VALUES (11,'Behold What Manner Of Love',1,NULL,'Bb',3,'Behold, What manner of',NULL,'2021-08-02 02:39:13','2021-08-02 02:39:13',NULL),(12,'Ah Lord God /In Him We Live',1,NULL,'C',4,'Ah, Lord God ',NULL,'2021-08-02 02:39:13','2021-08-02 02:39:13',NULL),(13,'Call On The Lord',1,NULL,'Bb',3,'Call on the Lord while',NULL,'2021-08-02 02:39:13','2021-08-02 02:39:13',NULL),(14,'Behold, Bless Ye The Lord/Alleluia',1,NULL,'C',4,'Behold, bless ye the Lord','Pno Intro...','2021-08-02 02:39:13','2021-08-02 02:39:13',NULL),(15,'Ageless One',1,NULL,'C',1,'Faithful One So unchanging','Faithful one, so unchanging...','2021-08-02 02:39:13','2021-08-02 02:39:13',NULL),(16,'O Calvary\'s Lamb',1,NULL,'C',2,'This faltering tongue would',NULL,'2021-08-02 02:39:13','2021-08-02 02:39:13',NULL);
/*!40000 ALTER TABLE `Song` ENABLE KEYS */;
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
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `hashedToken` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('RESET_PASSWORD') COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiresAt` datetime(3) NOT NULL,
  `sentTo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Token.hashedToken_type_unique` (`hashedToken`,`type`),
  KEY `userId` (`userId`),
  CONSTRAINT `Token_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE
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
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT 1,
  `role` enum('USER','EDITOR','LEADER','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USER',
  `hashedPassword` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User.email_unique` (`email`),
  UNIQUE KEY `User.email_active_unique` (`email`,`active`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (45,'2021-08-02 02:39:13','2021-08-02 02:39:13','user1@example.com','User1',1,'USER','password'),(46,'2021-08-02 02:39:13','2021-08-02 02:39:13','user2@example.com','User2',1,'USER','password'),(47,'2021-08-02 02:39:13','2021-08-02 02:39:13','editor@example.com','Editor',1,'EDITOR','password'),(48,'2021-08-02 02:39:13','2021-08-02 02:39:13','leader@example.com','Leader',1,'LEADER','password'),(49,'2021-08-02 02:39:13','2021-08-02 02:39:13','admin@example.com','Admin',1,'ADMIN','password');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-23 16:07:36
