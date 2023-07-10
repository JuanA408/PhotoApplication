-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `dsecription` mediumtext NOT NULL,
  `photopath` varchar(2048) NOT NULL,
  `thumbnail` varchar(2048) NOT NULL,
  `active` int NOT NULL DEFAULT '1',
  `created` datetime NOT NULL,
  `fk_userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `post_author_idx` (`fk_userId`),
  CONSTRAINT `post_author` FOREIGN KEY (`fk_userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'test01','test01Desc','public/images/uploads/f05d51840afd16d2493b54bed10b065cc5f9ab9770a9.jpeg','public/images/uploads/thumbnail-f05d51840afd16d2493b54bed10b065cc5f9ab9770a9.jpeg',1,'2021-12-12 10:27:11',9),(2,'ssss','eeee','public/images/uploads/5236039dfa2ba7028d3fdf80f1de65d0b1005650c99a.jpeg','public/images/uploads/thumbnail-5236039dfa2ba7028d3fdf80f1de65d0b1005650c99a.jpeg',1,'2021-12-12 10:30:03',9),(3,'jjjjj','alsdfasdfladsf','public/images/uploads/60aad5fa53a2299d4d910b6ad34f07f42a96528463cb.jpeg','public/images/uploads/thumbnail-60aad5fa53a2299d4d910b6ad34f07f42a96528463cb.jpeg',1,'2021-12-12 17:32:28',9),(4,'ererd','ddddddddddddd','public/images/uploads/8c8859c6bc330b14a5f5d2d0213ecf411ae547d01289.jpeg','public/images/uploads/thumbnail-8c8859c6bc330b14a5f5d2d0213ecf411ae547d01289.jpeg',1,'2021-12-12 17:33:44',9),(5,'hiiii','byyyyy','public/images/uploads/772fb77f8603683abcc5bcaa71426972a4fe06ee278d.jpeg','public/images/uploads/thumbnail-772fb77f8603683abcc5bcaa71426972a4fe06ee278d.jpeg',1,'2021-12-12 17:34:16',9),(6,'juan','This is a cat','public/images/uploads/9a6aba1af8758a22fb30c08c1b91ccd225408703e7bb.jpeg','public/images/uploads/thumbnail-9a6aba1af8758a22fb30c08c1b91ccd225408703e7bb.jpeg',1,'2021-12-12 17:34:45',9),(7,'the cat again','This is the same cat again','public/images/uploads/9eb01399b2cf16ab27ea5251c62796b64ef7d7d1631f.jpeg','public/images/uploads/thumbnail-9eb01399b2cf16ab27ea5251c62796b64ef7d7d1631f.jpeg',1,'2021-12-12 17:35:21',9),(8,'Disney','This is the haunted house ride at Disney land','public/images/uploads/dd22d9d4578405e47c6c4573335146569afc7dba1e3c.jpeg','public/images/uploads/thumbnail-dd22d9d4578405e47c6c4573335146569afc7dba1e3c.jpeg',1,'2021-12-12 17:35:56',9),(9,'Juinorr postsss','I am a test','public/images/uploads/f49f06335dd14c2f9d8ab6bb11223f6e312257bf4664.png','public/images/uploads/thumbnail-f49f06335dd14c2f9d8ab6bb11223f6e312257bf4664.png',1,'2021-12-12 19:27:34',13),(10,'qwer','tesst','public/images/uploads/45592bfee2d3510a2ed11c41224f3d8bc3557b263584.jpeg','public/images/uploads/thumbnail-45592bfee2d3510a2ed11c41224f3d8bc3557b263584.jpeg',1,'2021-12-13 01:35:35',9);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-13  8:10:55
