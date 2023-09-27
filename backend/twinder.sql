-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)

--

-- Host: localhost    Database: twinder

-- ------------------------------------------------------

-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!50503 SET NAMES utf8mb4 */

;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */

;

/*!40103 SET TIME_ZONE='+00:00' */

;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */

;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */

;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */

;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */

;

--

-- Table structure for table `match`

--

DROP TABLE IF EXISTS `match`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `match` (
        `id` int NOT NULL AUTO_INCREMENT,
        `profil_id` int NOT NULL,
        `user_id` int NOT NULL,
        `fav` tinyint(1) NOT NULL,
        PRIMARY KEY (`id`),
        KEY `match_FK` (`profil_id`),
        KEY `match_FK_1` (`user_id`),
        CONSTRAINT `match_FK` FOREIGN KEY (`profil_id`) REFERENCES `profil` (`id`),
        CONSTRAINT `match_FK_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `match`

--

LOCK TABLES `match` WRITE;

/*!40000 ALTER TABLE `match` DISABLE KEYS */

;

INSERT INTO `match` VALUES (8,3,1,1),(9,6,1,1),(10,13,1,1);

/*!40000 ALTER TABLE `match` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `profil`

--

DROP TABLE IF EXISTS `profil`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `profil` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
        `age` int NOT NULL,
        `description` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
        `tag` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
        `photo` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 23 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `profil`

--

LOCK TABLES `profil` WRITE;

/*!40000 ALTER TABLE `profil` DISABLE KEYS */

;

INSERT INTO `profil`
VALUES (
        1,
        'Bertha & Courtney',
        25,
        'Curious about this checkpoint theme',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin1.jpeg'
    ), (
        2,
        'Connie & Vera',
        27,
        'Curiosidad por este tema del puesto de control',
        'sobre',
        '/Users/nicolasdougere/Desktop/tronche/twin2.jpeg'
    ), (
        3,
        'Arda & Myrne',
        34,
        'Nieuwsgierig naar dit checkpoint-thema',
        'sobre',
        '/Users/nicolasdougere/Desktop/tronche/twin3.jpeg'
    ), (
        4,
        'Jàn & Radek',
        25,
        'Zvědavost ohledně tohoto tématu kontrolního bodu',
        'sobre',
        '/Users/nicolasdougere/Desktop/tronche/twin4.jpeg'
    ), (
        5,
        'Joanna & Natalie',
        26,
        'Curieux ce thème de checkpoint',
        'sobre',
        '/Users/nicolasdougere/Desktop/tronche/twin5.jpeg'
    ), (
        6,
        'Peter & Torsten',
        24,
        'Merkwürdiges Checkpoint-Thema',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin6.jpeg'
    ), (
        7,
        'Tyler & Charles',
        52,
        'Curious about this checkpoint theme',
        'atypique',
        '/Users/nicolasdougere/Desktop/tronche/twin7.webp'
    ), (
        8,
        'Radomil & Walerian',
        21,
        'Ciekawi mnie ten motyw punktu kontrolnego',
        'atypique',
        '/Users/nicolasdougere/Desktop/tronche/twin8.webp'
    ), (
        9,
        'Caslav & Dragutin',
        23,
        'Zvedavý na túto tému kontrolného bodu',
        'sobre',
        '/Users/nicolasdougere/Desktop/tronche/twin9.webp'
    ), (
        10,
        'Elisabeth & Linda',
        29,
        'Curious about this checkpoint theme',
        'sobre',
        '/Users/nicolasdougere/Desktop/tronche/twin10.webp'
    ), (
        11,
        'James & Oliver',
        35,
        'I hate O.W.L',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin11.webp'
    ), (
        12,
        'Igor & Grishka',
        60,
        'La tête bien profond dans le cosmos',
        'atypique',
        '/Users/nicolasdougere/Desktop/tronche/twin12.webp'
    ), (
        13,
        'Artémis & Apollon',
        2500,
        'On avait pas internet nous ! ',
        'atypique',
        '/Users/nicolasdougere/Desktop/tronche/twin13.jpeg'
    ), (
        14,
        'Virpi & Heli',
        30,
        'Utelias tästä tarkistuspisteen teemasta',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin14.webp'
    ), (
        15,
        'Danny & Arnold',
        65,
        'Yes, we are twins ! ',
        'atypique',
        '/Users/nicolasdougere/Desktop/tronche/twin15.webp'
    ), (
        16,
        'Scarlett & Hunter',
        38,
        'Nysgerrig på dette checkpoint-tema',
        'atypique',
        '/Users/nicolasdougere/Desktop/tronche/twin16.webp'
    ), (
        17,
        'Nadia & Charlotte',
        32,
        'Uudishimulik selle kontrollpunkti teema kohta',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin17.webp'
    ), (
        18,
        'Grimalda & Salvia',
        36,
        'Sun cream? Unknown ',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin18.webp'
    ), (
        19,
        'Renaud & David',
        70,
        'Oh de l\'anis ....',
        'atypique',
        '/Users/nicolasdougere/Desktop/tronche/twin19.webp'
    ), (
        20,
        'Jo & Hob',
        20,
        'Utelias tästä tarkistuspisteen teemasta',
        'sobre',
        '/Users/nicolasdougere/Desktop/tronche/twin20.jpeg'
    ), (
        21,
        'Keira & Karly',
        35,
        'Zvedavý na túto tému kontrolného bodu',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin21.jpeg'
    ), (
        22,
        'Margrethe & Sophie',
        37,
        'Nieuwsgierig naar dit checkpoint-thema',
        'sourire',
        '/Users/nicolasdougere/Desktop/tronche/twin22.jpeg'
    );

/*!40000 ALTER TABLE `profil` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Table structure for table `user`

--

DROP TABLE IF EXISTS `user`;

/*!40101 SET @saved_cs_client     = @@character_set_client */

;

/*!50503 SET character_set_client = utf8mb4 */

;

CREATE TABLE
    `user` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
        `age` int NOT NULL,
        `photo` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */

;

--

-- Dumping data for table `user`

--

LOCK TABLES `user` WRITE;

/*!40000 ALTER TABLE `user` DISABLE KEYS */

;

INSERT INTO `user`
VALUES (
        1,
        'Weird Cheap Student',
        32,
        '/Users/nicolasdougere/Desktop/tronche/borat.webp'
    );

/*!40000 ALTER TABLE `user` ENABLE KEYS */

;

UNLOCK TABLES;

--

-- Dumping routines for database 'twinder'

--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */

;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */

;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */

;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */

;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */

;

-- Dump completed on 2023-09-27 17:46:05