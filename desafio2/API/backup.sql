 -- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: desafiogrup
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `preco` varchar(255) NOT NULL,
  `qtdEstoque` varchar(255) NOT NULL,
  `disponivel` varchar(255) NOT NULL,
  `emDestaque` varchar(255) NOT NULL,
  `departamento` enum('Acessórios para computadores','Lápis de escrever','Artesanato','Agenda') NOT NULL,
  `dataCriacao` datetime NOT NULL,
  `dataAtualizacao` datetime NOT NULL,
  `versao` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Suporte para monitor quadrado AC125 UN0001 Multilaser','64.17','149','sim','não','Acessórios para computadores','2021-06-09 21:36:47','2021-06-09 21:36:47',0),(3,'Suporte para monitor triangular AC124 UN0001 Multilaser','54.69','7','sim','não','Acessórios para computadores','2021-06-09 22:00:43','2021-06-09 22:00:43',0),(4,'Agenda Diária Espiral Eco Línea Rosa 2021','7.38','14','sim','sim','Agenda','2021-06-09 22:00:56','2021-06-10 00:29:28',0),(5,'Suporte para cpu com roda','62.48','33','sim','sim','Acessórios para computadores','2021-06-09 22:01:04','2021-06-09 22:01:04',0),(6,'Lápis preto com borracha redondo tabuada PO0072 Leo&Leo','26.53','45','sim','sim','Lápis de escrever','2021-06-09 22:01:23','2021-06-09 22:01:23',0),(7,'Lápis preto c/borracha redondo pastel PO0072 Leo&Leo','40.17','0','não','não','Lápis de escrever','2021-06-09 22:01:45','2021-06-09 22:01:45',0),(8,'Lápis Preto Grafite Nº 2 Faber-Castell - Cartela com 04 Lápis','4.52','255','sim','sim','Lápis de escrever','2021-06-09 22:07:37','2021-06-09 22:07:37',0),(11,'Brocal Escolar 3G Sortido Lantecor - Pacote com 12 Unidades','5.01','33','sim','não','Artesanato','2021-06-09 22:08:46','2021-06-09 22:08:46',0),(12,'Tesoura uso geral 21cm BL0001 Jocar','6.66','66','sim','sim','Artesanato','2021-06-09 22:09:01','2021-06-09 22:09:01',0),(13,'Lantejoula 06MM 3G Sortido Lantecor - Pacote com 12 Unidades','5.01','844','sim','sim','Artesanato','2021-06-09 22:09:11','2021-06-09 22:09:11',0),(14,'Agenda Diária Espiral O Pequeno Príncipe Azul Escuro 2021','7.37','17','sim','sim','Agenda','2021-06-09 22:09:17','2021-06-09 22:09:17',0),(15,'Agenda Diária Espiral Eco Línea Rosa 2021','7.37','14','sim','sim','Agenda','2021-06-09 22:09:35','2021-06-09 22:09:35',0),(16,'Agenda Diária Espiral Eco Línea Rosa 2021','7.38','14','sim','sim','Agenda','2021-06-10 00:39:57','2021-06-10 00:39:57',0);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-10 20:59:45
