-- MySQL dump 10.13  Distrib 8.4.10, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: upgrade
-- ------------------------------------------------------
-- Server version	8.4.10-0ubuntu0.26.04.1

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
-- Table structure for table `ajustes`
--

DROP TABLE IF EXISTS `ajustes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ajustes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ajustes_clave_unique` (`clave`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ajustes`
--

LOCK TABLES `ajustes` WRITE;
/*!40000 ALTER TABLE `ajustes` DISABLE KEYS */;
INSERT INTO `ajustes` VALUES (1,'color_primario','#161921','2026-06-06 14:06:02','2026-06-06 14:06:02'),(2,'color_secundario','#800000','2026-06-06 14:06:02','2026-08-29 03:49:44'),(3,'color_footer','#e0e0e0','2026-06-06 14:06:02','2026-08-29 03:49:44'),(4,'logo','marca/01M15T6FB237EJXCDB27QG2RTF.svg','2026-06-06 14:06:02','2026-08-29 03:49:44'),(5,'logo_claro','marca/01M15T6FB3CXSJ2QK75MTJTNN1.svg','2026-06-06 14:06:02','2026-08-29 03:49:44'),(6,'logo_movil','marca/01M15T6FB3CXSJ2QK75MTJTNN2.png','2026-06-06 14:06:02','2026-08-29 03:49:44'),(7,'favicon','marca/01M15T6FB48B9WHHAR2044M38A.png','2026-06-06 14:06:02','2026-08-29 03:49:44'),(8,'pedido_auto_sin_stock','1','2026-06-06 14:06:02','2026-06-06 14:06:02'),(9,'home_hero_img','home/8122f8d0-6f71-4ce6-a9d9-21cda0ca6768.webp','2026-06-06 18:34:37','2026-08-15 22:57:18'),(10,'home_hero_titulo','Simple. Elegante. tu.','2026-06-06 18:34:37','2026-06-24 01:20:09'),(11,'home_hero_cta','','2026-06-06 18:34:37','2026-06-06 18:34:37'),(12,'home_hero_texto','Hacemos a mano para cuidar a detalle en cada pieza','2026-06-06 18:34:37','2026-06-13 18:40:06'),(13,'home_hero_cta_url','/shop','2026-06-06 18:34:37','2026-06-24 01:20:09'),(14,'home_intro_titulo','Muebles hechos en Cuenca','2026-06-06 18:34:37','2026-06-06 18:46:12'),(15,'home_producto_id','8','2026-06-06 18:34:37','2026-07-30 20:52:03'),(16,'home_intro_texto','Es un espacio en donde cabe desde las ideas, el diseño y cada pieza convertida en realidad.','2026-06-06 18:34:37','2026-06-06 18:46:12'),(17,'footer_texto','Cada pieza que fabricamos en Bletia está hecha para tu espacio','2026-06-06 18:34:37','2026-06-24 01:17:22'),(18,'footer_nosotros','[{\"titulo\":\"Acerca de\",\"url\":\"\\/about\"},{\"titulo\":\"Contacto\",\"url\":\"\\/contacto\"},{\"titulo\":\"Blog\",\"url\":\"\\/blog\"},{\"titulo\":\"Shop\",\"url\":\"\\/shop\"},{\"titulo\":\"Califica con 5 \\u2b50\",\"url\":\" https:\\/\\/g.page\\/r\\/CSN1VreBmzhOECA\\/review \"}]','2026-06-07 05:55:00','2026-06-22 08:46:46'),(19,'footer_legal','[{\"titulo\":\"Pol\\u00edticas de cookies\",\"url\":\"\\/cookies\"},{\"titulo\":\"Pol\\u00edtica de privacidad\",\"url\":\"\\/privacy\"},{\"titulo\":\"T\\u00e9rminos y condiciones\",\"url\":\"\\/terms\"},{\"titulo\":\"Aviso legal\",\"url\":\"\\/legal\"}]','2026-06-07 05:55:00','2026-08-16 03:16:25'),(20,'erp_ruc','0105824700001','2026-06-11 17:27:29','2026-06-11 17:27:29'),(21,'erp_telefono','0999024159','2026-06-11 17:27:29','2026-06-11 17:27:29'),(22,'erp_direccion','Carlos Berrezueta, Cuenca, Ecuador','2026-06-11 17:27:29','2026-06-11 17:27:29'),(23,'erp_ciudad','Cuenca','2026-06-11 17:27:29','2026-06-11 17:27:29'),(24,'erp_email','hola@betia.ec','2026-06-11 17:27:29','2026-06-19 22:30:13'),(25,'woo_url','https://seridea.ec','2026-06-12 03:50:49','2026-06-12 03:50:49'),(26,'woo_key','ck_1820fe3228ca7ce186120eb6c0e9a2cb20a232d0','2026-06-12 03:50:49','2026-06-12 03:50:49'),(27,'woo_secret','cs_31cc612b8f5e3c6f3b71287ee8d243b153454959','2026-06-12 03:50:49','2026-06-12 03:50:49'),(28,'erp_logo_pdf','marca/01KYTYAH2YGVHEVKEZMF861W2N.png','2026-06-12 20:54:01','2026-07-30 20:58:49'),(29,'footer_recursos','[{\"titulo\":\"Garant\\u00eda\",\"url\":\"\\/garantia\"},{\"titulo\":\"Envios\",\"url\":\"\\/envios\"},{\"titulo\":\"Reembolso\",\"url\":\"\\/reembolso\"}]','2026-06-13 05:38:24','2026-06-13 18:40:06'),(30,'home_bloques','[{\"type\":\"slider\",\"data\":{\"intervalo\":2,\"alto\":null,\"radio\":0,\"full\":true,\"slides\":[{\"imagen\":\"paginas\\/01KVC4Y5QMT2TYT1WAGE963FS2.jpg\",\"tono\":\"claro\",\"titulo\":\"A medida\",\"subtitulo\":null,\"texto\":null,\"b1_texto\":null,\"b1_url\":null,\"b2_texto\":null,\"b2_url\":null,\"pos_h\":\"centro\",\"pos_v\":\"centro\"},{\"imagen\":\"paginas\\/01KYTXNAZBQXEWDDCP64VF261X.jpg\",\"tono\":\"claro\",\"titulo\":\"Con color\",\"subtitulo\":null,\"texto\":null,\"b1_texto\":null,\"b1_url\":null,\"b2_texto\":null,\"b2_url\":null,\"pos_h\":\"centro\",\"pos_v\":\"centro\"},{\"imagen\":\"paginas\\/01KVC4Y5R2H7JDMN1XR68SDT1K.jpg\",\"tono\":\"claro\",\"titulo\":\"Un espacio\",\"subtitulo\":null,\"texto\":null,\"b1_texto\":null,\"b1_url\":null,\"b2_texto\":null,\"b2_url\":null,\"pos_h\":\"centro\",\"pos_v\":\"centro\"}]}}]','2026-06-14 19:25:58','2026-07-30 20:47:14'),(31,'footer_img','marca/01KZ2VKGQQ9D2Q4GDPRC6H6EVD.svg','2026-06-14 19:25:58','2026-08-03 03:45:13'),(32,'footer_bg','','2026-06-14 19:25:58','2026-06-14 19:25:58'),(33,'footer_text','#000000','2026-06-14 19:25:58','2026-08-29 04:15:13'),(34,'erp_email_dueno','bletiaform@gmail.com','2026-06-15 23:37:59','2026-06-15 23:37:59'),(35,'erp_email_guias','depillacela@gmail.com','2026-06-15 23:37:59','2026-06-15 23:37:59'),(36,'erp_email_contabilidad','conta@bletia.ec','2026-06-19 21:05:16','2026-06-19 21:06:25'),(37,'marca','BLETIA','2026-06-23 14:35:30','2026-06-23 14:35:30'),(38,'eslogan','Cada pieza define tu espacio','2026-06-23 14:35:30','2026-06-24 01:17:49'),(39,'meta_home','En Bletia cada pieza define tu espacio con sofás, sillones, mesas, sillas y sillones. ','2026-06-23 14:35:30','2026-07-20 00:42:22'),(40,'og_image','','2026-06-23 14:35:30','2026-06-23 14:35:30'),(41,'telefono','0999024159','2026-06-23 14:35:30','2026-06-23 14:35:30'),(42,'ciudad','','2026-06-23 14:35:30','2026-06-23 14:35:30'),(43,'provincia','','2026-06-23 14:35:30','2026-06-23 14:35:30'),(44,'pais','','2026-06-23 14:35:30','2026-06-23 14:35:30'),(45,'sameas','https://www.youtube.com/@bletiaform\nhttps://www.linkedin.com/company/bletia','2026-06-23 14:35:30','2026-06-23 14:36:13'),(46,'email_logo','marca/01KXZ0N1B70C9EGABANX9K12HT.png','2026-06-23 14:35:30','2026-07-20 00:40:46'),(47,'ruc','','2026-06-23 14:35:30','2026-06-23 14:35:30'),(48,'direccion','Av. de las Américas ','2026-06-23 14:35:30','2026-07-30 20:41:51'),(49,'ga_id','G-V4N0950V9K','2026-06-23 14:35:30','2026-06-23 14:35:30'),(50,'gtm_id','GTM-WQD5352P','2026-06-23 14:35:30','2026-06-23 14:35:30'),(51,'email_footer_texto','Estas recibiendo este correo por que estas dentro de nuestra base de datos con tu correo {email} ya sea por una compra o suscripción a una de nuestras listas. {first_name} si crees que es un error puedes darte de baja en cualquier momento.','2026-06-23 15:04:49','2026-06-24 01:42:08'),(52,'email_redes','https://bletia.ec/privacy\nhttps://bletia.ec/terms\nhttps://bletia.ec/cookies\nhttps://bletia.ec/aviso-legal','2026-06-23 15:04:49','2026-08-16 03:14:58'),(53,'emisor_ruc','0105824700001','2026-06-26 20:36:05','2026-06-26 20:36:05'),(54,'emisor_razon','DIEGO ERNESTO PILLACELA PILLACELA','2026-06-26 20:36:05','2026-06-26 20:36:05'),(55,'emisor_nombre_comercial','BLETIA X SERIDEA','2026-06-26 20:36:05','2026-06-26 20:36:05'),(56,'emisor_obligado_contabilidad','NO','2026-06-26 20:36:05','2026-06-26 20:36:05'),(57,'emisor_dir_matriz','Carlos Berrezueta y Jose Mogrovejo','2026-06-26 20:36:05','2026-06-26 20:36:05'),(58,'emisor_dir_estab','Carlos Berrezueta y Jose Mogrovejo','2026-06-26 20:36:05','2026-06-26 20:36:05'),(59,'emisor_estab','001','2026-06-26 20:36:05','2026-06-26 20:36:05'),(60,'emisor_pto_emi','001','2026-06-26 20:36:05','2026-06-26 20:36:05'),(61,'emisor_contribuyente_especial','','2026-06-26 20:36:05','2026-06-26 20:36:05'),(62,'emisor_agente_retencion','','2026-06-26 20:36:05','2026-06-26 20:36:05'),(63,'emisor_regimen_micro','NO','2026-06-26 20:36:05','2026-06-27 15:29:54'),(64,'sri_ambiente','1','2026-06-26 20:36:05','2026-06-26 20:36:05'),(65,'sri_p12_path','/home/bletia/htdocs/bletia.ec/storage/app/sri/firma.p12','2026-06-26 20:36:05','2026-07-30 09:02:02'),(66,'sri_p12_pass','Bdigital89@','2026-06-26 20:36:05','2026-06-26 20:36:05'),(67,'ai_bots','1','2026-07-20 00:39:02','2026-07-20 00:39:02'),(68,'indexnow_key','4bf2eb86d486e034d0afa397ccc96905','2026-07-20 00:39:02','2026-07-26 23:02:12'),(69,'smtp_host','smtp.maileroo.com','2026-07-26 21:37:14','2026-07-26 21:37:14'),(70,'smtp_port','587','2026-07-26 21:37:14','2026-07-26 21:37:14'),(71,'smtp_encryption','tls','2026-07-26 21:37:14','2026-07-26 21:37:14'),(72,'smtp_username','hola@bletia.ec','2026-07-26 21:37:14','2026-07-26 21:37:14'),(73,'smtp_password','f6ef88280d291f95ece3d025','2026-07-26 21:37:14','2026-07-26 21:37:14'),(74,'smtp_from_address','hola@bletia.ec','2026-07-26 21:37:14','2026-07-26 21:37:14'),(75,'smtp_from_name','Bletia','2026-07-26 21:37:14','2026-07-26 21:37:14'),(76,'payphone_store_id','9865e157-551d-49bf-b846-0bf4be72993c','2026-07-28 20:11:49','2026-07-28 20:11:49'),(77,'payphone_token','m5fkQprOv4UQvATWLRlg_KUiryHxoa3Cpa7h87h9NtxSZwE_EIfAhfr3W_wVvZQUBBdOcSH1ANHlF4hVBxAoQVQV88URupraeITaKyYKJa2uyrUV1vcNwIjlWNdrTxeb63c_ZeNzuR7uXRdb6I0aa_UGu_dbdMwrup1CUccZ1h01YZWNoM-3kM8DkyphIqEmILZCoShXTPx-fVEfQpqlhci25UQwrM3OzidXsGGLPyMAFYEpUy9ieAgtH_dbHdaW2_9oojqJYPCMe7wvXueO7nSVied9VmhbdPJIQ0uquNo8meBJqp9KOGpA0W9wi2coQCRp2Q','2026-07-28 20:11:49','2026-07-28 20:11:49'),(78,'url_tienda','/shop','2026-07-29 21:43:33','2026-07-29 21:43:33'),(79,'turnstile_activo','1','2026-08-14 03:36:19','2026-08-14 03:36:19'),(80,'turnstile_site_key','0x4AAAAAAEOlHKZ4Egtf568X','2026-08-14 03:36:19','2026-08-14 03:36:19'),(81,'turnstile_secret_key','0x4AAAAAAEOlHJI4vQ0U5xj-q-ailxaiNhk','2026-08-14 03:36:19','2026-08-14 03:36:19'),(82,'contact_email','','2026-08-15 22:45:07','2026-08-15 22:45:07'),(83,'contact_topics','Garantía\nCotización\nColaboración\nOtro','2026-08-15 22:45:07','2026-08-15 22:45:07');
/*!40000 ALTER TABLE `ajustes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulo_etiqueta`
--

DROP TABLE IF EXISTS `articulo_etiqueta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulo_etiqueta` (
  `articulo_id` bigint unsigned NOT NULL,
  `etiqueta_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`articulo_id`,`etiqueta_id`),
  KEY `articulo_etiqueta_etiqueta_id_foreign` (`etiqueta_id`),
  CONSTRAINT `articulo_etiqueta_articulo_id_foreign` FOREIGN KEY (`articulo_id`) REFERENCES `articulos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articulo_etiqueta_etiqueta_id_foreign` FOREIGN KEY (`etiqueta_id`) REFERENCES `etiquetas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulo_etiqueta`
--

LOCK TABLES `articulo_etiqueta` WRITE;
/*!40000 ALTER TABLE `articulo_etiqueta` DISABLE KEYS */;
INSERT INTO `articulo_etiqueta` VALUES (1,1),(3,1),(2,2),(4,2),(5,4),(10,4),(5,5),(5,6),(7,6),(10,6),(6,7),(11,7),(6,8),(6,9),(11,9),(6,10),(11,10),(7,11),(8,12),(8,13),(8,14),(10,15),(10,16),(11,17);
/*!40000 ALTER TABLE `articulo_etiqueta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `blog_categoria_id` bigint unsigned DEFAULT NULL,
  `editor_id` bigint unsigned DEFAULT NULL,
  `titulo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `autor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extracto` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `contenido` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `contenido_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `bloques` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagen_cabecera` tinyint(1) NOT NULL DEFAULT '0',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `publicado_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `articulos_slug_unique` (`slug`),
  KEY `articulos_blog_categoria_id_foreign` (`blog_categoria_id`),
  KEY `articulos_activo_publicado_at_index` (`activo`,`publicado_at`),
  KEY `articulos_editor_id_foreign` (`editor_id`),
  CONSTRAINT `articulos_blog_categoria_id_foreign` FOREIGN KEY (`blog_categoria_id`) REFERENCES `blog_categorias` (`id`) ON DELETE SET NULL,
  CONSTRAINT `articulos_editor_id_foreign` FOREIGN KEY (`editor_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL,
  CONSTRAINT `articulos_chk_1` CHECK (json_valid(`bloques`))
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES (1,1,1,'50 Nombres para sofás que huelen a cuero fino y luz de tarde','50-nombres-para-sofas-que-huelen-a-cuero-fino',NULL,'50 nombres para sofás con lujo, estrategia y criterio: cómo las marcas que mueven millones nombran sus piezas y cómo tú puedes hacer lo mismo.','<p>Hay sofás que se compran por cómo se ven. Y hay sofás que se compran por cómo suenan cuando los nombras. El nombre de un sofá no es un detalle menor: es el primer tacto antes del tacto.</p><p>Piensa en el <strong>Mah Jong</strong> de Roche Bobois, en el <strong>Camaleonda</strong> de B&amp;B Italia o en el <strong>Togo</strong> de Ligne Roset. Ninguno de esos nombres describe una forma. Todos evocan algo. Un estado. Una historia. Una actitud hacia el espacio en el que vives.</p><p>Si tienes una sala de exposición, una tienda de muebles, un proyecto de diseño o simplemente quieres ponerle nombre a ese sofá que encontraste en <a href=\"https://bletia.ec/categoria/sofas\"><span style=\"text-decoration: underline;\">nuestra colección</span></a>, este artículo es para ti.</p><h2>Por qué el nombre de un sofá importa más de lo que crees</h2><h3><strong>El naming es parte del objeto</strong></h3><p>Un mueble sin nombre es solo un producto. Un mueble con el nombre correcto es una pieza. Las marcas de lujo lo saben desde hace décadas: Minotti nombra sus colecciones con apellidos de diseñadores o términos de arquitectura limpia. Flexform elige palabras que suenan a reposo. B&amp;B Italia usa nombres que parecen personajes de una novela italiana de los 70.</p><p>El nombre cambia la percepción del precio, del material y del espacio donde encaja ese sofá.</p><h3><strong>Lo que comunica un nombre de lujo</strong></h3><p>Un nombre de alto valor no necesita adjetivos. No dice \"elegante\" ni \"premium\". Lo transmite. Los nombres que funcionan en el segmento de lujo comparten tres rasgos:</p><ul><li>Son cortos (una o dos palabras máximo)</li><li>Evocan sin describir</li><li>Suenan bien en cualquier idioma</li></ul><h2>Estrategias reales para nombrar un sofá con criterio</h2><h3><strong>Nombres geográficos con carácter</strong></h3><p>Ciudades, regiones, latitudes. No cualquiera: las que tienen peso cultural, arquitectónico o estético. No \"Madrid\" sino \"Oporto\". No \"Milán\" sino \"Brera\" o \"Navigli\".</p><h3><strong>Apellidos de diseño y arte</strong></h3><p>Los apellidos evocan autoría. Evocan que alguien firmó esa pieza. Cassina lo hace. Poltrona Frau lo hace. Usar un apellido en el nombre de un sofá eleva su percepción inmediatamente.</p><h3><strong>Conceptos del tiempo y la luz</strong></h3><p>\"Atardecer\", \"hora azul\", \"penumbra\", \"solsticio\": el tiempo y la luz son los dos elementos que más define una sala. Nombrar un sofá con estos conceptos lo conecta directamente al espacio que va a habitar.</p><h3><strong>Términos de materialidad noble</strong></h3><p>Palabras que traen textura solo al pronunciarlas. Basalto, lino, ónix, travertino, seda, terciopelo. No como descripción del material sino como nombre del sofá.</p><h3><strong>Nombres de un solo carácter</strong></h3><p>Una letra, un número, un símbolo. Lo usan las marcas de moda de lujo. Lo puede usar el mueble. \"Sofá N°1\", \"Serie A\", \"Modelo K\". La austeridad como declaración.</p><h2>50 nombres para sofás que evocan lujo</h2><p>Esta lista está organizada por territorios de significado. No son nombres genéricos: cada uno tiene una lógica y puedes adaptarlos, combinarlos o usarlos como punto de partida.</p><h3><strong>Nombres con raíz geográfica o arquitectónica</strong></h3><p><strong>NombrePor qué funciona</strong>Oporto | Calidez atlántica, ciudad con alma<br>Brera | Barrio de diseño en Milán, connotación artística<br>Navigli | Canales, vida de tarde, sofisticación italiana<br>Marsella | Luz mediterránea, carácter fuerte<br>Beirut | Historia, textura, contraste<br>Arco | Forma y ciudad de diseño al mismo tiempo<br>Ravena | Arte, mosaico, antigüedad refinada<br>Génova | Palazzo, mármol, presencia<br>Namibe | Desierto atlántico, silencio y forma<br>Valletta | Capital más pequeña de Europa, joya oculta</p><h3><strong>Nombres de tiempo y luz</strong></h3><p><strong>NombrePor qué funciona</strong>Solsticio | El día más largo, la luz más limpia<br>Penumbra | La transición entre luz y sombra<br>Cénit | El punto más alto, la calidad en su cima<br>Vesper | Tarde que cae, reposo, copa de vino<br>Alba | Primera luz, calidad que comienza<br>Ocaso | El momento justo antes del silencio<br>Meridiano | Posición exacta, equilibrio<br>Equinox | Balance perfecto entre dos fuerzas<br>Séptima | La hora de descanso en el lenguaje antiguo<br>Nocturno | Para quien diseña la vida después de las ocho</p><h3><strong>Nombres de materialidad y textura</strong></h3><p><strong>NombrePor qué funciona</strong>Basalto | Piedra volcánica, dureza elegante<br>Travertino | Mármol con historia<br>Ónix | Profundidad y oscuridad noble<br>Obsidiana | Volcánico, brillante, irrepetible<br>Seda | No hace falta explicarlo<br>Cachemira | Tacto antes de tocar<br>Lino | Simplicidad radical, lujo sin gritar<br>Cuarzo | Precisión y claridad<br>Velours | Terciopelo en francés, una palabra que acaricia<br>Sienna | Tierra, calor, pigmento de los grandes pintores</p><h3><strong>Nombres de diseño y arte</strong></h3><p><strong>NombrePor qué funciona</strong>Bauhaus | Movimiento que definió el siglo XX<br>Kanvas | El arte antes del arte<br>Draftsman | El que dibuja antes de construir<br>Etude | Estudio, pieza musical de práctica perfecta<br>Atelier | El espacio donde se crea<br>Tableau | Cuadro, composición visual<br>Forma | Lo más básico llevado a lo máximo<br>Stele | Columna funeraria romana: presencia que dura<br>Plinth | La base que sostiene la escultura<br>Dado | El módulo arquitectónico más simple</p><h3><strong>Nombres de carácter propio</strong></h3><p><strong>NombrePor qué funciona</strong>Zeno | Filósofo estoico: presencia y calma<br>Lucio | Luz en latín, claro y directo<br>Sereno | No el adjetivo: el nombre<br>Aldo | Fuerte, italiano, con historia<br>Miro | Miró, ver, horizonte<br>Clio | Musa de la historia<br>Vera | Verdad, autenticidad absoluta<br>Ines | Elegancia sin esfuerzo<br>Lara | Personaje, presencia, recuerdo<br>Elda | Ciudad italiana, cuna del calzado de lujo</p><h2>Cómo elegir el nombre correcto para tu sofá o colección</h2><h3><strong>El nombre debe vivir bien en todos los formatos</strong></h3><p>Prueba el nombre en voz alta. Dilo en una conversación: \"Tengo el Vesper en la sala\". Escríbelo en una tarjeta de precio. Ponlo en una URL. Si funciona en los tres formatos, es candidato.</p><h3><strong>Un nombre no puede mentir</strong></h3><p>Si tu sofá tiene líneas rectas y estructura firme, no lo llames \"Nube\". El nombre debe resonar con la forma, no contradecirla. Los mejores nombres de la industria del mueble de lujo amplifican lo que el objeto ya es.</p><h3><strong>Evita las trampas comunes del naming barato</strong></h3><p>Los nombres que incluyen el material (\"Sofá Cuero Premium\"), los que usan códigos alfanuméricos sin historia (\"Modelo SF-2200\"), y los que intentan describir la función (\"Sofá de descanso triple\") no tienen lugar en el segmento alto. Un nombre así destruye el trabajo de diseño antes de que el cliente lo toque.</p><h3><strong>La coherencia de colección vale más que el nombre individual</strong></h3><p>Una colección bien nombrada vale más que un sofá con buen nombre suelto. Si tienes tres piezas y las llamas Oporto, Navigli y Brera, estás construyendo un universo. El cliente empieza a coleccionar, no a comprar.</p><p>El nombre de tu sofá es la primera pieza de su historia. Todo lo demás, la tapicería, la estructura, el confort, llega después. Si estás buscando una pieza que ya tiene nombre propio, el <a href=\"https://bletia.ec/producto/sofa-bletia\"><span style=\"text-decoration: underline;\">Sofá Bletia</span></a> y el <a href=\"https://bletia.ec/producto/sillon-zoe\"><span style=\"text-decoration: underline;\">Sillón Zoe</span></a> son el punto de partida.</p>',NULL,'[]','blog/01KTN74RSBXQ0XXBV9FHQEN7QR.webp',0,1,'2026-06-06 15:20:49','50 Nombres para sofás que huelen a cuero fino y luz de tarde','50 nombres para sofás con lujo, estrategia y criterio: cómo las marcas que mueven millones nombran sus piezas y cómo tú puedes hacer lo mismo.','2026-06-06 20:26:03','2026-06-09 03:34:43'),(2,1,1,'Antes de que el sofá llegue a tu sala, esto es lo que ya deberías saber','que-debes-considerar-antes-de-comprar-tu-sofa',NULL,'Elegir un sofá no empieza en la tienda. Empieza en entender tu espacio, tu vida diaria y lo que quieres que ese mueble diga sobre ti sin decir nada.','<p>Hay una diferencia entre una sala amueblada y una sala que funciona. No siempre es visible a primera vista, pero se siente en cuanto entras. Algo en las proporciones, en la textura, en la manera en que los muebles ocupan el espacio sin pelearse entre sí. Esa diferencia rara vez tiene que ver con el dinero que se gastó. Tiene que ver con las decisiones que se tomaron antes de comprar cualquier cosa.</p><p>El sofá es, casi siempre, la primera de esas decisiones y la que más condiciona todo lo demás. Por eso vale la pena ir despacio.</p><h2>Tu sala antes que cualquier catálogo</h2><p>Lo primero que hay que entender es que ningún sofá es bueno o malo en abstracto. Es adecuado o no para un espacio concreto. Un sofá que en el showroom parece perfecto puede llegar a tu sala y hacer que todo lo demás desaparezca, no porque sea feo sino porque sus proporciones no corresponden a las del espacio que lo recibe.</p><p>Antes de fijarte en modelos o materiales, mide tu sala con precisión y marca en el piso, con cinta adhesiva, la silueta del mueble que estás considerando. Eso te va a decir en treinta segundos si hay espacio suficiente para moverse con comodidad, si la mesa de centro tiene margen para respirar y si el sofá va a ser el ancla visual del espacio o va a ahogarlo.</p><h3>Las proporciones que hacen que una sala se vea bien</h3><p>Entre el sofá y la mesa de centro conviene dejar al menos 40 centímetros. Entre el sofá y la pared opuesta o el siguiente mueble, no menos de 90 centímetros para que la circulación sea natural. Cuando esos márgenes no se respetan, la sala se siente pequeña aunque tenga metros de sobra. Cuando se respetan, incluso un espacio modesto se percibe amplio y bien pensado.</p><h2>Lo que hay dentro importa más de lo que parece</h2><p><br></p>',NULL,'[{\"type\":\"imagen\",\"data\":{\"imagen\":\"blog\\/01KTJPCG91T4H98H5XH4F7QMJR.jpg\",\"alt\":null,\"ancho\":\"mediana\",\"align\":\"centro\",\"pie\":\"Estructura de una silla\"}},{\"type\":\"texto\",\"data\":{\"texto\":\"<p>La estructura de un sof\\u00e1 no se ve, pero se siente con los a\\u00f1os. Un mueble construido con madera macisa, donde las uniones son s\\u00f3lidas y el sistema de asiento distribuye el peso de manera uniforme, mantiene su forma y su comodidad durante una d\\u00e9cada o m\\u00e1s. Uno construido con materiales de menor calidad empieza a ceder antes de lo que se espera, y cuando eso pasa, no hay tapicer\\u00eda bonita que lo compense.<\\/p><h2>La espuma y el asiento: donde m\\u00e1s se nota la diferencia<\\/h2><p>La densidad de la espuma es uno de los datos que m\\u00e1s afecta la experiencia diaria de un sof\\u00e1 y que menos se menciona al momento de comprar. Una espuma de alta densidad, generalmente por encima de 30 kilogramos por metro c\\u00fabico, mantiene su firmeza y su forma por a\\u00f1os. Una de baja densidad se hunde y se deforma relativamente pronto, especialmente en los puntos de mayor uso.<\\/p><p><strong><br>El tipo de resorte tambi\\u00e9n cuenta<\\/strong><\\/p><p>Los sistemas de muelles ensacados, donde cada resorte trabaja de manera independiente, ofrecen una sentada m\\u00e1s estable y uniforme que los resortes en zigzag. No es una diferencia que se note el primer d\\u00eda, pero s\\u00ed con el paso del tiempo y el uso continuo.<\\/p><h2>La tapicer\\u00eda: una decisi\\u00f3n que se vive todos los d\\u00edas<\\/h2><p>El material con el que est\\u00e1 tapizado un sof\\u00e1 no es solo una cuesti\\u00f3n est\\u00e9tica. Es el material con el que convives a diario, que recibe la luz de tu sala en distintas horas del d\\u00eda, que responde al clima de donde vives y que va a mostrar con el tiempo si fue una buena elecci\\u00f3n o una decisiva.<\\/p><h3>Cuero natural frente a otros materiales<\\/h3><p>El cuero natural de buena procedencia tiene una cualidad que pocos materiales igualan: mejora con el tiempo. Desarrolla una p\\u00e1tina propia, se asienta con el uso y adquiere un car\\u00e1cter que no tiene cuando sale de f\\u00e1brica. Es tambi\\u00e9n m\\u00e1s f\\u00e1cil de mantener de lo que suele pensarse y responde bien a climas variados si se le da el cuidado b\\u00e1sico que necesita.<\\/p><p>Las telas estructuradas, como el boucl\\u00e9, el terciopelo o los linos de alto gramaje, tienen una presencia visual y t\\u00e1ctil completamente distinta. Aportan calidez y textura al espacio de una manera que el cuero no puede igualar, y son una elecci\\u00f3n natural en salas donde la luz es m\\u00e1s c\\u00e1lida o donde se busca una atm\\u00f3sfera m\\u00e1s acogedora.<\\/p><p><strong><br>La resistencia al uso: un dato que vale preguntar<\\/strong><\\/p><p>Los fabricantes de telas para tapicer\\u00eda miden su durabilidad en ciclos de fricci\\u00f3n, conocidos como ciclos Martindale. Para un sof\\u00e1 de uso diario en un hogar, se recomienda que esa cifra no baje de 25,000 ciclos. Para espacios con mayor exigencia, es mejor ir desde 50,000 hacia arriba. No siempre este dato aparece en la descripci\\u00f3n del producto, pero es algo que cualquier fabricante serio deber\\u00eda poder informar sin dudar.<\\/p><h2>La configuraci\\u00f3n: no hay una sola manera de armar una sala<\\/h2><p>El juego de sala cl\\u00e1sico, con sof\\u00e1 de tres cuerpos y dos sillones, sigue siendo una soluci\\u00f3n que funciona. Pero hoy el dise\\u00f1o de interiores ofrece lecturas m\\u00e1s abiertas que vale la pena considerar dependiendo de c\\u00f3mo se usa el espacio y c\\u00f3mo se vive en \\u00e9l.<\\/p><h3>Cuando un seccional tiene m\\u00e1s sentido<\\/h3><p>En plantas abiertas donde la sala, el comedor y la cocina comparten un mismo ambiente, un sof\\u00e1 seccional bien dimensionado puede definir el \\u00e1rea social sin necesidad de paredes ni divisiones. La clave es que las proporciones correspondan al espacio total, no solo a la zona de estar.<\\/p><p><strong><br>El sill\\u00f3n como decisi\\u00f3n de dise\\u00f1o por derecho propio<\\/strong><\\/p><p>Un sill\\u00f3n no tiene que hacer juego exacto con el sof\\u00e1 para pertenecer al mismo espacio. La combinaci\\u00f3n de materiales o tonos complementarios, cuando est\\u00e1 bien pensada, da m\\u00e1s vida y car\\u00e1cter a una sala que un conjunto perfectamente uniforme. Una pieza con personalidad propia, como el <a href=\\\"https:\\/\\/www.bletia.ec\\/producto\\/sillon-zoe\\\"><span style=\\\"text-decoration: underline;\\\">Sill\\u00f3n Zoe<\\/span><\\/a>, puede elevar una composici\\u00f3n de sala sin depender del sof\\u00e1 que la acompa\\u00f1e ni rendirle cuentas.<\\/p><h2>El color: una decisi\\u00f3n con consecuencias largas<\\/h2><p>Los colores de moda tienen una vida \\u00fatil. Los tonos que perduran, no. Esa distinci\\u00f3n importa porque un sof\\u00e1 no es una pieza que se cambie cada temporada, y elegir un color que responde a lo que se ve en las redes sociales de este a\\u00f1o puede resultar en un mueble que en tres a\\u00f1os ya no encaja con nada.<\\/p><h3>Neutros que funcionan con el tiempo<\\/h3><p>Los neutros c\\u00e1lidos como el arena, el camel, el topo o el marfil se llevan bien con la luz natural y envejecen bien en casi cualquier contexto. Los neutros fr\\u00edos como el gris piedra o el azul muy apagado funcionan mejor en ambientes con luz artificial controlada o en espacios donde se busca una atm\\u00f3sfera m\\u00e1s sobria.<\\/p><p><strong><br>Cuando un color con car\\u00e1cter es la decisi\\u00f3n correcta<\\/strong><\\/p><p>Un sof\\u00e1 en verde oliva profundo, en terracota o en azul noche puede ser exactamente lo que un espacio necesita, siempre que el resto de la sala est\\u00e9 pensado para recibirlo. El contraste calculado tiene m\\u00e1s fuerza y m\\u00e1s memoria visual que la uniformidad total. Pero pide convicci\\u00f3n, porque ese color va a estar ah\\u00ed por mucho tiempo.<\\/p><h2>La pregunta que resume todo<\\/h2><p>Antes de decidir cualquier cosa, hay una sola pregunta que conviene hacerse: dentro de cinco a\\u00f1os, cuando alguien entre a esta sala por primera vez, \\u00bfeste sof\\u00e1 va a ser lo que haga que el espacio se quede en su memoria?<\\/p><p>Si la respuesta es s\\u00ed, ya tienes el criterio correcto para elegir. Lo que sigue es encontrar la pieza que lo cumpla.<\\/p><p>En <a href=\\\"https:\\/\\/www.bletia.ec\\/categoria\\/sofas\\\"><span style=\\\"text-decoration: underline;\\\">Bletia<\\/span><\\/a> cada mueble est\\u00e1 dise\\u00f1ado y fabricado desde Cuenca con ese criterio como punto de partida.<\\/p>\"}}]','blog/01KTN80VCE9AYYPRE4PSXVYV30.webp',0,1,'2026-06-07 03:05:59','Que debo tener en cuenta antes de comprar un sofá','Antes de comprar tu juego de sala hay decisiones que marcan la diferencia entre un espacio que enamora y uno que decepciona. Aquí están las que importan de verdad.','2026-06-08 03:05:59','2026-06-09 03:50:03'),(3,1,1,'30 nombres para un comedor que ya tiene personalidad propia','30-nombres-para-tu-comedor',NULL,'Nombres para comedor con carácter, criterio y elegancia. 30 ideas que funcionan para marcas, piezas únicas o espacios que merecen un nombre propio.','<p>Hay comedores que se describen por sus medidas, su material, su precio. Y hay otros que piden algo más: un nombre. No porque sea un capricho estético, sino porque cuando una pieza tiene el peso suficiente para cambiar el ambiente de un espacio, merece ser llamada de alguna forma que lo reconozca. Nombrar un comedor no es un ejercicio decorativo sin fondo: es la primera decisión que separa una pieza de diseño de un mueble más en un catálogo. Si estás pensando en cómo llamar a tu comedor, ya sea para una marca que estás construyendo, una pieza que estás diseñando o un espacio que quieres que tenga carácter propio, estas 30 ideas son un punto de partida con criterio real. Cada nombre en esta lista tiene una lógica detrás, no solo una sonoridad. Porque los mejores nombres no describen lo que ves: evocan lo que sientes cuando te sientas a la mesa.</p><h2>Qué convierte un nombre en algo que vale la pena</h2><p>Antes de llegar a la lista, hay una pregunta que no se puede saltar: ¿qué hace que un nombre para un comedor funcione de verdad? No es la sonoridad, aunque importa. No es la originalidad por sí sola, aunque también cuenta. Lo que hace que un nombre de mueble perdure es su capacidad de evocar algo sin explicarlo. Cuando escuchas \"Arco\" en el contexto de un comedor, no necesitas que nadie te diga que la pieza tiene líneas curvas o un carácter orgánico: ya lo intuyes. Cuando una mesa de comedor lleva el nombre \"Onyx\", no hace falta describir el acabado: la piedra habla sola.</p><p>Los equipos de producto que trabajan en el segmento alto aplican este principio desde la primera reunión. El nombre no llega después del diseño: muchas veces lo precede, porque define la dirección estética antes de que el primer boceto esté sobre la mesa. Para un comedor de alto valor, un nombre bien elegido comunica materiales, proporciones, atmósfera y precio sin decir ninguna de esas palabras en voz alta.</p><h2><strong>Los tres criterios que filtran un buen nombre</strong></h2><p>Antes de que cualquier nombre llegue a la lista definitiva, debería pasar por tres filtros básicos que cualquier equipo de producto riguroso aplica de forma casi instintiva.</p><p>El primero es la pronunciabilidad. Un nombre que nadie sabe cómo decir en voz alta genera fricción desde el primer contacto. No importa si es hermoso sobre papel: si el cliente duda al pedirlo, el nombre falla. El segundo es la imagen que produce. Cierra los ojos y di el nombre en voz alta. ¿Aparece algo? ¿Una textura, un color, una proporción? Si no aparece nada, el nombre es neutro, y los nombres neutros no posicionan. El tercero es la coherencia con el espacio donde va a vivir. Un comedor que se llama \"Storm\" y está hecho en madera clara y líneas finas genera ruido cognitivo. El nombre tiene que sostener lo que la pieza es, no contradecirlo.</p><h2><strong>Por qué las piezas de diseño piden un nombre propio</strong></h2><p>Las piezas de diseño no se nombran por inercia. Se nombran porque el nombre es la primera capa de experiencia que el comprador tiene con el producto, incluso antes de verlo en fotografía. Cuando un comedor llega al showroom, al catálogo o a la conversación entre el arquitecto y su cliente, el nombre ya está trabajando. Es el primer gesto de diseño, el más invisible y el más eficaz.</p><p>Para una marca que nace o una pieza que se diseña con criterio, el principio es exactamente el mismo. El nombre de un comedor es una decisión de posicionamiento. Define a quién le habla, qué promete y por qué vale lo que vale. No es un detalle menor que se resuelve en cinco minutos: es la primera conversación de diseño.</p><h2>Nombres para comedor inspirados en materiales y elementos naturales</h2><p>Los materiales tienen historia, textura y temperatura. Cuando un nombre de comedor toma prestada la identidad de un material, no necesita explicar casi nada más. El lector ya tiene una imagen formada, una sensación táctil anticipada, una expectativa de peso y presencia. Esta es una de las fuentes más ricas para encontrar nombres que aguanten el paso del tiempo sin perder fuerza.</p><p>Los nombres de este grupo funcionan especialmente bien para comedores en madera maciza, piedra natural, mármol o metales nobles. También para piezas donde el material es el protagonista y el nombre tiene que acompañar esa jerarquía sin disputarla.</p><p><strong><br>1. Onyx</strong></p><p>La piedra más oscura y elegante del catálogo natural. Para un comedor con acabados en negro, estructura visual contundente o un diseño que no pide permiso para ocupar el espacio.</p><p><strong><br>2. Lino</strong></p><p>Ligereza con carácter. Para mesas de líneas finas, estructuras en metal lacado o comedores que combinan materialidad suave con una presencia discreta pero inequívoca.</p><p><strong><br>3. Travertino</strong></p><p>El mármol que tiene historia. Para comedores con tablero en piedra, acabados cálidos o diseños que mezclan lo mineral con lo orgánico sin que ninguno de los dos se imponga.</p><p><strong><br>4. Ebano</strong></p><p>Oscuridad refinada. Para piezas en madera oscura de alta densidad o estructuras que combinan negro y nogal con precisión quirúrgica.</p><p><strong><br>5. Caliza</strong></p><p>Neutralidad con profundidad. Para comedores en tonos blancos rotos, beige o grises cálidos donde el nombre tiene que transmitir solidez sin pesadez.</p><p><strong><br>6. Siena</strong></p><p>El color de la tierra italiana. Para comedores con acabados ocres, terracota o cualquier paleta que hable de calidez mediterránea con control.</p><p><strong><br>7. Cuarzo</strong></p><p>Precisión y translucidez. Para mesas de tablero en vidrio templado, superficies que juegan con la luz o diseños que combinan estructura sólida con ligereza visual.</p><h2>Nombres para comedor con referencia geográfica o cultural</h2><p>Los nombres de lugares funcionan porque ya tienen un imaginario construido antes de que el mueble exista. No hace falta explicar lo que evoca \"Kyoto\" o \"Calabria\" en el contexto de un comedor: el lector trae su propia imagen y el nombre la aprovecha. Esta estrategia funciona con fuerza en el diseño de mobiliario porque permite posicionar una pieza en un universo estético sin decir una sola palabra sobre sus medidas o su precio.</p><p>El riesgo de los nombres geográficos está en la banalidad: hay ciudades tan usadas que ya no evocan nada específico. Los nombres que funcionan son los que tienen una imagen precisa y reconocible, no los que suenan simplemente \"internacionales\".</p><p><strong><br>8. Firenze</strong></p><p>La ciudad donde el diseño y el arte llevan siglos compartiendo el mismo techo. Para un comedor de líneas clásicas con materiales nobles y una presencia que no necesita justificarse.</p><p><strong><br>9. Kyoto</strong></p><p>Orden, proporción y silencio. Para comedores de inspiración japonesa, líneas horizontales bajas y una relación entre vacío y materia que pocos muebles saben sostener.</p><p><strong><br>10. Oslo</strong></p><p>Funcionalidad llevada a su expresión más depurada. Para comedores donde la madera clara y la estructura limpia son la declaración de principios.</p><p><strong><br>11. Amalfi</strong></p><p>Calidez con elegancia costera. Para comedores que mezclan blanco, terracota y madera en un equilibrio que parece fácil y no lo es.</p><p><strong><br>12. Ginebra</strong></p><p>Neutralidad de precisión. Para comedores de vocación internacional donde la paleta es contenida y los materiales hablan por sí solos sin necesidad de adornos.</p><p><strong><br>13. Bruselas</strong></p><p>Modernidad europea con algo de rigor. Para comedores de líneas rectas, estructuras metálicas y una estética que no admite excesos decorativos.</p><h2>Nombres para comedor basados en conceptos abstractos o estados</h2><p>Algunos de los nombres más potentes del mundo del diseño de mobiliario no refieren a ningún lugar ni a ningún material. Refieren a algo que se siente, no que se ve. \"Silencio\", \"Calma\", \"Umbral\": palabras que no describen un objeto pero capturan perfectamente la atmósfera que ese objeto genera. Para comedores de alto valor, donde la experiencia del espacio importa tanto como la pieza misma, este tipo de nombre puede ser el más preciso de todos.</p><p>El reto con los nombres abstractos está en evitar los que son demasiado vagos. \"Armonía\" o \"Bienestar\" son palabras que no anclan ninguna imagen específica. Los nombres abstractos que funcionan son los que tienen una imagen física posible, aunque no la describan directamente.</p><p><strong><br>14. Umbral</strong></p><p>El espacio entre dos mundos. Para comedores que actúan como bisagra entre la sala y la cocina, o que tienen una presencia que marca la entrada a otra atmósfera dentro de la misma planta.</p><p><strong><br>15. Estío</strong></p><p>El verano en su versión más pausada. Para comedores con tableros en madera clara, luz natural y una paleta que evoca el mediodía sin esfuerzo aparente.</p><p><strong><br>16. Solsticio</strong></p><p>El momento de más luz del año. Para comedores que trabajan con ventanales grandes, reflejos en vidrio o materiales que capturan y distribuyen la luz de forma deliberada.</p><p><strong><br>17. Pausa</strong></p><p>Una sola palabra que resume todo lo que debería ocurrir alrededor de una mesa de comedor. Para diseños que invitan a detenerse, sin urgencia y sin pretensión de protagonismo.</p><p><strong><br>18. Meridiano</strong></p><p>La línea que divide. Para comedores de simetría rigurosa o mesas que tienen dos registros visuales claramente diferenciados entre estructura y tablero.</p><p><strong><br>19. Latente</strong></p><p>Lo que está ahí pero no se muestra todo de una vez. Para comedores con detalles de acabado que solo se revelan al acercarse: vetas de madera, texturas en el metal, costuras en el tapiz.</p><p><strong><br>20. Cenital</strong></p><p>La luz que viene de arriba. Para comedores diseñados en relación directa con una lámpara de techo o una claraboya, donde la iluminación es parte constitutiva del diseño de la pieza.</p><h2>Nombres para comedor que funcionan como nombres propios</h2><p>Algunos comedores piden simplemente un nombre de persona. El nombre propio humaniza la pieza, le da una presencia que va más allá de la función y establece una relación casi personal entre el comprador y el objeto. Para comedores que van a vivir en un espacio privado o que forman parte de una colección con identidad propia, este tipo de nombre puede ser el más natural de todos.</p><p>La clave está en elegir nombres que tengan carácter sin ser arbitrarios, que suenen bien en distintos idiomas y que no caigan en referencias demasiado datadas o demasiado locales para tener proyección. En Bletia, los nombres de las piezas siguen esta misma lógica: el Sofá Baal Uno, el Sofá Bletia y el Sillón Zoe no son combinaciones de palabras al azar. Son decisiones de diseño que hablan antes de que el comprador toque la tela.</p><p><strong><br>21. Salah</strong></p><p>Un nombre que porta historia y carácter sin necesitar adjetivos. Para comedores de estructura contundente, presencia central en el espacio y un diseño que sostiene conversaciones largas alrededor de la mesa.</p><p><strong><br>22. Baal</strong></p><p>Peso y presencia en dos sílabas. Para comedores de dimensiones generosas, tablero robusto y una personalidad que organiza el espacio a su alrededor sin pedir permiso. El mismo espíritu que ya define al <a href=\"https://www.bletia.ec/producto/sofa-baal-uno\"><span style=\"text-decoration: underline;\">Sofá Baal Uno</span></a> en la sala.</p><p><strong><br>23. Jobs</strong></p><p>La austeridad como máxima expresión. Para comedores de líneas absolutamente limpias, sin ornamento, donde la perfección está en lo que se eliminó, no en lo que se añadió.</p><p><strong><br>24. Sarar</strong></p><p>Un nombre que evoca origen y artesanía. Para comedores en madera trabajada a mano, acabados naturales y una construcción que no esconde el proceso sino que lo convierte en parte del diseño.</p><p><strong><br>25. Nora</strong></p><p>Claridad sin esfuerzo. Para comedores de líneas finas, tonos neutros y una elegancia que no anuncia su precio en voz alta pero que el comprador percibe desde la primera mirada.</p><p><strong><br>26. Aldo</strong></p><p>Directo y con raíz. Para comedores de estructura sólida, materiales de peso y una presencia que no necesita adornos para ocupar bien el espacio que le corresponde.</p><p><strong><br>27. Vera</strong></p><p>La verdad de las cosas. Para comedores de materiales naturales sin tratamiento aparente, donde la honestidad del material es la propuesta de diseño principal.</p><h2>Nombres para comedor con raíz en el tiempo y la historia del diseño</h2><p>Los nombres que refieren a períodos históricos, estilos o momentos de la cultura material tienen una ventaja particular: llegan con un contexto ya construido. No hace falta explicar lo que implica el Bauhaus o el Wabi: el lector que reconoce la referencia ya tiene una imagen de proporciones, materiales y espíritu. Y el que no la reconoce percibe, de todas formas, que hay algo con peso detrás del nombre.</p><p>Este grupo funciona especialmente bien para comedores que tienen una referencia estilística clara, ya sea contemporánea, orgánica o con raíces en un movimiento de diseño específico.</p><p><strong><br>28. Bauhaus</strong></p><p>Función que se convierte en forma. Para comedores de estructura metálica, líneas estrictas y una paleta reducida donde cada elemento está justificado y nada sobra.</p><p><strong><br>29. Wabi</strong></p><p>La belleza de lo imperfecto. Para comedores en madera con nudo visible, bordes naturales o acabados que celebran la irregularidad como parte deliberada del diseño.</p><p><strong><br>30. Brut</strong></p><p>El hormigón como lenguaje. Para comedores industriales o de diseño arquitectónico donde los materiales sin revestimiento son la propuesta estética, no la limitación del presupuesto.</p><h2>Antes de elegir: lo que el nombre tiene que sostener</h2><p>Llegar a un nombre es solo la mitad del trabajo. La otra mitad es verificar que ese nombre puede sostener el peso de todo lo que la pieza promete. Un comedor de alto valor, bien diseñado y bien ejecutado, puede quedar subrepresentado por un nombre que no está a su altura. Y un nombre extraordinario puede generar una expectativa que la pieza no cumple si no hay coherencia entre los dos.</p><p>El nombre de un comedor tiene que funcionar en tres registros al mismo tiempo. Tiene que funcionar dicho en voz alta, en una conversación entre el arquitecto y el cliente. Tiene que funcionar escrito en una tarjeta de producto, en un catálogo o en una tienda online. Y tiene que funcionar como recuerdo: cuando el comprador le cuenta a alguien cuál es el nombre de su mesa de comedor, ese nombre tiene que producir una imagen en la mente del oyente aunque nunca haya visto la pieza.</p><h2><strong>El nombre como primera decisión de diseño</strong></h2><p>En Bletia, cada pieza pasa por ese proceso antes de llegar al espacio del comprador. Sarar, Jobs, Salah o Baal no son nombres que se eligen por descarte: cada uno tiene una dirección estética, un tipo de espacio donde encaja y una promesa que el diseño de la pieza tiene que cumplir. Cuando estés pensando en el nombre de tu comedor, ya sea para una pieza que estás diseñando, un espacio que estás decorando o una marca que estás construyendo, ese es el estándar que vale la pena perseguir. Si quieres entender en profundidad cómo funciona esta lógica aplicada al sofá, el artículo sobre <a href=\"https://www.bletia.ec/diy/50-nombres-para-sofas-que-huelen-a-cuero-fino-y-luz-de-tarde\"><span style=\"text-decoration: underline;\">50 nombres para sofás con criterio de marca</span></a> desarrolla cada estrategia con ejemplos concretos.</p><p>Un nombre no termina de existir hasta que alguien lo dice en voz alta por primera vez. Ese momento, cuando el nombre encaja con la pieza y el espacio, es cuando sabes que elegiste bien.</p><p><br></p>',NULL,'[]','blog/01KTN68325FXKADMZHQNGKAA9P.webp',0,1,'2026-06-08 21:34:10','30 ideas de nombrares para tu comedor','Nombres para un comedor con carácter, criterio y elegancia. 30 ideas que funcionan para marcas, piezas únicas o espacios que merecen un nombre propio.','2026-06-09 03:19:04','2026-06-09 03:19:04'),(4,4,1,'Los adornos que una sala de lujo realmente necesita','tips-de-adornos-para-tu-sala',NULL,'Los adornos que pones en tu sala dicen más de ti que cualquier mueble. Descubre cuáles vale la pena elegir y cómo disponerlos con criterio.','<p>Hay salas que se ven completas y salas que se sienten completas. La diferencia casi nunca está en el sofá ni en el tapete: está en los objetos que habitan el espacio alrededor. Los adornos que decides poner <a href=\"https://www.bletia.ec/diy/que-debes-considerar-antes-de-comprar-tu-sofa\"><span style=\"text-decoration: underline;\">en tu sala</span></a> son los que comunican criterio, sensibilidad y ese sentido del detalle que los visitantes perciben antes de poder nombrarlo. No hace falta llenar cada superficie. Hace falta elegir bien. Un espacio bien decorado no grita; habla en voz baja y con claridad. Este artículo es para quienes quieren entender qué tipos de adornos tienen verdadero peso visual en una sala moderna y cómo distribuirlos sin caer en la trampa de la acumulación o la frialdad vacía.</p><h2>Qué convierte un adorno en una pieza con peso real</h2><p>Antes de hablar de categorías o de objetos concretos, vale la pena entender qué separa una pieza decorativa con carácter de un simple relleno de espacio. La respuesta no está en el precio ni en la marca: está en la intención. Un adorno con peso visual tiene una razón para estar donde está. Ocupa su lugar porque genera un contraste visual con lo que lo rodea, porque aporta una textura que no había, un volumen que equilibra, un tono que completa la paleta. Cuando se retira, el espacio pierde algo. Eso es lo que diferencia una pieza de decoración de sala de un objeto que simplemente está ahí.</p><p>Los espacios de alto nivel que aparecen en las publicaciones de diseño más reconocidas del mundo comparten una característica: cada accesorio visible tiene una función visual deliberada. No se trata de acumular objetos hermosos sino de construir un lenguaje coherente entre todos ellos. La decoración de interiores de <a href=\"https://www.bletia.ec/categoria/sofas\"><span style=\"text-decoration: underline;\">sala</span></a> que dura en el tiempo no sigue tendencias de temporada; elige piezas que puedan convivir con estilos cambiantes porque tienen una geometría o un material que trasciende la moda.</p><h2><strong>La escala como primer criterio de selección</strong></h2><p>Uno de los errores más frecuentes al elegir objetos decorativos para sala es ignorar la escala. Una lámpara de pie que llega a los 180 centímetros en un espacio de techo bajo aplasta el ambiente. Un cuadro pequeño sobre un muro amplio se pierde y genera la sensación de que el espacio no está terminado. La escala no es solo tamaño: es la relación entre el objeto y su entorno inmediato. Un florero alto sobre una mesa baja funciona como ancla visual. Un trío de piezas pequeñas sobre una repisa amplia genera ritmo solo si tienen diferencia de altura entre sí.</p><h2><strong>El material como portador de carácter</strong></h2><p>El material de un adorno habla antes que su forma. Un cuenco de piedra volcánica sobre una mesa de madera crea una conversación entre lo natural y lo trabajado. Una escultura en metal pulido sobre una base de mármol comunica precisión y permanencia. Los adornos minimalistas para sala más efectivos suelen ser de un solo tono o de dos materiales como máximo, porque la complejidad de la forma ya es suficiente. Cuando se mezclan demasiados materiales en un mismo mueble de centro o repisa, el resultado visualmente es desorden, no elegancia.</p><h2>El arte en la pared: mucho más que decoración</h2><p>Pocas decisiones cambian una sala con tanta contundencia como lo que se cuelga en la pared. Una obra de arte bien elegida no solo embellece: define la personalidad del espacio, ancla los tonos de la paleta de colores y da escala a todo lo que hay debajo. Hablar de arte en la pared no significa hablar de cuadros costosos ni de pintura original obligatoriamente. Significa hablar de piezas con criterio, ya sea una fotografía grande en blanco y negro bien enmarcada, una impresión de un artista contemporáneo local o una obra abstracta que dialogue con los colores del tapete.</p><p>La clave para que el arte funcione como adorno en sala está en tres decisiones: el tamaño respecto al muro, la altura a la que se cuelga y la relación con el mobiliario debajo. La regla más respetada en decoración de interiores es que el arte ocupe entre el 57 y el 75 por ciento del ancho del mueble sobre el que descansa visualmente. Colgar demasiado alto es el error más común y separa la obra del espacio en lugar de integrarla.</p><h3><strong>Obra única versus composición de varios marcos</strong></h3><p>Una sola pieza grande genera impacto y contundencia. Una galería de varios marcos genera dinamismo y permite contar una historia visual más compleja. Ninguna de las dos opciones es superior: depende del carácter del espacio. Una sala de líneas limpias y mobiliario sofisticado, como la que construye un sofá de estructura firme <a href=\"https://www.bletia.ec/categoria/sillones\">junto a un sillón</a> de líneas precisas, suele pedir una obra grande y solitaria. Un espacio más ecléctico o con mayor textura puede recibir bien una composición múltiple, siempre que los marcos compartan un mismo tono o material para mantener cohesión.</p><h3><strong>Espejos como pieza de decoración y herramienta de espacio</strong></h3><p>Un espejo bien ubicado duplica la luz natural, amplía visualmente el ambiente y puede funcionar como la pieza principal de una pared. Los espejos de formas irregulares o marcos gruesos en materiales nobles, como el latón envejecido o el ébano, tienen hoy un protagonismo real en la decoración de salas modernas de lujo. No son un recurso para espacios pequeños: son una elección estética válida en cualquier sala que quiera trabajar con profundidad visual.</p><h2>Objetos sobre superficies: cómo acomodar las piezas con criterio</h2><p>Las superficies horizontales, la mesa de centro, las repisas, las consolas y los laterales del sofá, son los escenarios donde los adornos para sala cobran vida. La forma en que se organizan esos objetos es lo que determina si el resultado se ve pensado o improvisado, y tiene reglas que no son arbitrarias. Un conjunto de tres piezas de distinta altura sobre una mesa de centro comunica orden y movimiento al mismo tiempo. Un solo objeto grande y rotundo en el centro de esa misma mesa comunica serenidad y confianza. Ambas elecciones son válidas; lo que no funciona es la acumulación sin jerarquía.</p><p>La mesa de centro merece un comentario aparte porque es el objeto de mayor tráfico visual en cualquier sala. Todo lo que se disponga sobre ella debe tener una razón de ser. Un libro de decoración de tapa dura con una pequeña escultura encima y un cuenco bajo a un costado es una composición completa. Agregar más piezas a ese conjunto casi siempre lo arruina. La contención es una forma de lujo que pocas personas practican con convicción.</p><h3><strong>Libros de decoración como adorno con doble función</strong></h3><p>Los libros grandes de mesa de centro son uno de los accesorios para sala elegante más funcionales que existen. No son solo objetos decorativos: son una invitación a la conversación, una señal de los intereses de quien habita el espacio y una forma de sumar volumen y color a una superficie sin recurrir a piezas superfluas. Un libro de arquitectura con cubierta en tonos tierra, otro de fotografía en blanco y negro y un tercer volumen sobre diseño conforman un conjunto con personalidad propia, apilados o en abanico.</p><h3><strong>Bandejas y cuencos como organizadores visuales</strong></h3><p>Una bandeja sobre la mesa de centro o sobre una consola tiene una función que va más allá de lo estético: delimita un territorio visual. Todo lo que está dentro de la bandeja pertenece a un mismo conjunto. Este principio es útil cuando se quieren disponer varios objetos pequeños sin que el resultado parezca disperso. Una bandeja de mármol con dos velas cilíndricas y una piedra decorativa es un conjunto armado. Los mismos tres objetos sin la bandeja son tres cosas sueltas sobre una mesa.</p><h2>Plantas y elementos naturales: lo vivo en la sala</h2><p>Los elementos naturales son quizás los adornos de sala con mayor capacidad de transformar un espacio de manera inmediata. Una planta grande en una esquina, una rama seca en un florero alto o un ramo de pampas en un jarrón de cerámica introducen escala, textura y movimiento en un espacio que de otro modo podría sentirse estático. La tendencia de los últimos años en decoración de interiores de alto nivel ha consolidado la presencia de elementos naturales no como moda sino como parte estructural del diseño de la sala.</p><p>Los espacios de referencia en decoración moderna de lujo usan plantas y elementos naturales con la misma precisión con que eligen sus telas y sus muebles. No se trata de llenar rincones con macetas: se trata de elegir una o dos plantas con presencia fuerte y dejarlas hablar sin competencia.</p><h3><strong>Plantas de interior con una forma tan definida que parecen esculturas</strong></h3><p>Algunas plantas tienen una arquitectura propia que las convierte en objetos decorativos de primer nivel. Las de hojas largas y bien definidas, como la higuera lira, la platanera o la lengua de suegra, tienen un perfil reconocible que aporta verticalidad y masa verde sin necesidad de ningún elemento de acompañamiento. Una de estas plantas en una maceta de cerámica sin esmaltado, colocada en la esquina donde el sofá termina y el muro comienza, resuelve ese vacío con una elegancia que ningún adorno comprado puede igualar.</p><h3><strong>Floreros, jarrones y piezas de cerámica artesanal</strong></h3><p>Un florero no necesita flores para funcionar como adorno. Un jarrón alto de cerámica con un acabado rugoso o una pieza torneada a mano con imperfecciones deliberadas tiene en sí mismo un valor visual que basta para habitar una superficie. Las piezas de cerámica artesanal, especialmente las de producción local o de tradición latinoamericana, aportan autenticidad y calidez a espacios que de otro modo pueden sentirse demasiado fríos. Un jarrón de cerámica ecuatoriana junto a un sofá de líneas modernas como el Sofá Bletia crea un diálogo entre lo contemporáneo y lo artesanal que pocas combinaciones logran con tanta naturalidad.</p><h2>Iluminación decorativa: los adornos que dan vida a otros adornos</h2><p>La luz es el adorno invisible que activa a todos los demás. Una sala bien concebida pero mal iluminada pierde la mitad de su potencial. Y cuando se habla de iluminación decorativa, no se habla solo de funcionalidad: se habla de las lámparas de pie, las de mesa, los apliques de pared y las velas como elementos con presencia visual propia que completan la decoración de la sala. Una lámpara de pie de estructura metálica delgada junto a un sillón, como el Sillón Zoe, crea un rincón de lectura con carácter que parece diseñado, no improvisado.</p><p>Las velas merecen un lugar en cualquier reflexión sobre objetos decorativos para sala. Más allá de la luz que producen, sus formas, sus alturas variables y los portavelas en que se disponen son elementos decorativos con mucha versatilidad. Un conjunto de tres velas cilíndricas de distinta altura sobre una bandeja de mármol es uno de los recursos decorativos más elegantes en cualquier contexto.</p><h3><strong>Lámparas de mesa como esculturas funcionales</strong></h3><p>Una lámpara de mesa bien elegida hace dos cosas simultáneamente: ilumina y da forma al espacio. La pantalla, el pie y el material de ambos componen una forma tridimensional que ocupa espacio de forma activa. Las lámparas de base cerámica con pantalla de lino, o las de base metálica con detalles en latón, son hoy piezas que se eligen tanto por lo que agregan al ambiente durante el día como por la luz que producen de noche. En un espacio que aspira a la sofisticación, la lámpara de mesa es un adorno que trabaja las veinticuatro horas.</p><h3><strong>Velas y portavelas como señal de hospitalidad y buen gusto</strong></h3><p>Pocas piezas en la historia de la decoración de interiores han mantenido su relevancia con tanta consistencia como la vela. Los portavelas de vidrio, de cemento pulido o de latón macizo son objetos que funcionan solos, sin necesidad de la vela encendida, como pequeñas esculturas de mesa. Colocados en grupo sobre una consola lateral o sobre la mesa de centro, añaden un nivel de calidez que los materiales fríos, el mármol, el metal o el vidrio, por sí solos no pueden generar.</p><h2>Cómo editar lo que ya tienes antes de agregar algo nuevo</h2><p>Antes de comprar cualquier adorno nuevo para la sala, hay un ejercicio que los decoradores más respetados recomiendan: retirar todo lo que hay sobre las superficies y empezar desde cero. Con la sala vacía de objetos decorativos, es más fácil ver la estructura real del espacio: qué superficies piden atención, qué esquinas tienen potencial y dónde la vista necesita un punto de reposo. A partir de ahí, volver a colocar los objetos de uno en uno, con criterio, deteniéndose a evaluar cada adición antes de continuar.</p><p>Este proceso de quitarlo todo y volver a empezar revela algo importante: la mayoría de las salas no necesitan más adornos. Necesitan menos, pero mejores. Necesitan piezas que tengan algo que decirle a la vista, que generen una conversación silenciosa entre sí y con el mobiliario que las rodea. Una sala con el Sofá Baal Uno como pieza central, acompañada de no más de seis a ocho objetos seleccionados con criterio, puede tener más presencia y sofisticación que otra sala repleta de adornos sin jerarquía.</p><p>Si quieres profundizar en cómo el mobiliario que eliges define el resto de las decisiones decorativas, el artículo <a href=\"https://www.bletia.ec/diy/que-debes-considerar-antes-de-comprar-tu-sofa\"><span style=\"text-decoration: underline;\">Antes de que el sofá llegue a tu sala, esto es lo que ya deberías saber</span></a> es el punto de partida más honesto que existe para ese proceso.</p>',NULL,'[]','blog/01KTND0FQQMA9TKHEMGHG2T9MF.webp',1,1,'2026-06-08 23:40:39','Hay opciones de adornos que caben perfectamente en tu sala','Descubre qué adornos poner en tu sala para que cada rincón se vea completo, elegante y con el nivel de detalle que marca la diferencia','2026-06-09 05:17:14','2026-06-14 05:10:16'),(5,3,4,'El color de tu sofá lo decide la luz, no la tendencia','color-para-sofa-o-juego-de-sala',NULL,'Elegir el color de tu sofá o juego de sala es una decisión que cambia toda la habitación. Descubre cómo leer tu espacio antes de decidir.','<p>Hay una pregunta que aparece casi siempre en el proceso de amueblar una sala, y que muy poca gente sabe responder con criterio real: ¿qué color debería tener mi sofá? Se navega por catálogos, se guardan imágenes en el teléfono, se consulta a tres personas distintas, y al final la decisión se toma por impulso o por lo que estaba disponible. El resultado, en muchos casos, es un sofá que no termina de encajar, no porque la pieza sea mala, sino porque el color no fue elegido: fue aceptado.</p><p>Elegir el color correcto para tu sofá o juego de sala no es una cuestión de moda ni de gusto personal aislado. Es una lectura del espacio. La luz que entra, el tono del piso, la altura del techo, los metros disponibles y el uso real de esa sala, todo eso influye antes de que el color tenga siquiera la oportunidad de hablar. Cuando esas variables se leen bien, la elección se vuelve evidente.</p><h2>La luz natural es el primer filtro</h2><p>Antes de abrir cualquier catálogo de tapizados, lo primero es observar cómo se comporta la luz dentro de tu sala a distintas horas del día. No es un detalle decorativo menor: la luz transforma el color de cualquier superficie, y un tono que se ve perfecto en una fotografía puede verse completamente distinto en tu espacio específico.</p><p>Una sala con ventanas orientadas al norte recibe luz fría y difusa durante casi todo el día. En esas condiciones, los colores cálidos, como el terracota, el camel, el mostaza suave o los ocres, compensan esa frialdad y dan al espacio una sensación de acogimiento que la luz por sí sola no puede generar. Un gris frío o un blanco puro en el mismo contexto puede sentirse clínico o incompleto, aunque la fotografía de referencia parezca impecable.</p><h3><strong>Salas con luz cálida o intensa</strong></h3><p>Cuando la sala recibe luz directa durante horas prolongadas, especialmente en orientaciones sur o poniente, los colores saturados se intensifican visualmente. Un verde salvia o un azul pizarra que en condiciones neutras resultan elegantes y contenidos, en una sala muy iluminada adquieren presencia propia. En estos espacios, los neutros profundos, como el gris grafito, el beige tostado o el blanco roto, funcionan con especial eficacia porque absorben parte de esa energía luminosa sin competir con ella.</p><h3><strong>Salas con poca luz natural</strong></h3><p>Las salas que dependen principalmente de iluminación artificial presentan el reto más delicado. Aquí, los tonos oscuros, aunque son tendencia y tienen una belleza innegable en fotografía, pueden hacer que el espacio se perciba más pequeño y pesado de lo que realmente es. Los colores claros con base cálida, como el lino, el marfil, el gris perla o el blanco arena, reflejan mejor la luz artificial y mantienen la sala visualmente activa. Aun así, si el deseo es apostar por un tono oscuro, la clave está en que los demás elementos del espacio sean claros: paredes, alfombras, cortinas y objetos complementarios que equilibren el peso visual del mueble.</p><h2>El piso y las paredes dictan el margen de maniobra</h2><p>Una vez leída la luz, el siguiente paso es analizar los dos elementos que más superficie ocupan en cualquier sala: el piso y las paredes. Son la base visual sobre la que el sofá va a reposar, y su color y textura reducen o amplían significativamente el rango de opciones.</p><p>Con pisos de madera clara, las posibilidades son amplias. Casi cualquier paleta funciona porque el tono neutro y cálido de la madera actúa como mediador sin imponer una dirección. Es el contexto más versátil para explorar colores como el verde oscuro, el azul noche, el burdeos o los grises medios con base azulada.</p><h3><strong>Pisos oscuros o de concreto pulido</strong></h3><p>Los pisos de madera oscura, concreto pulido o piedra natural tienen una presencia visual fuerte. En esos casos, un sofá de tono similar al piso puede crear una continuidad que algunos espacios buscan deliberadamente, pero en salas de tamaño estándar ese efecto suele hacer el ambiente pesado. Los sofás en tonos medios como el blanco roto, el beige tostado, el gris arena o incluso el verde musgo funcionan aquí como elemento de contraste suave, sin romper la armonía del espacio sino articulándola.</p><h3><strong>Paredes blancas o neutras</strong></h3><p>Las paredes blancas o en tonos muy claros son el lienzo más común y, al mismo tiempo, el que genera más dudas porque parecen permitirlo todo. Y técnicamente lo permiten, pero esa libertad aparente es también el mayor riesgo de sobrecargar visualmente una sala. Cuando las paredes son neutras, el sofá se convierte en el punto de color dominante, y por eso el tono elegido debe sostenerse solo con solidez. Los azules apagados, los verdes oscuros, los grises con personalidad y los neutros cálidos con textura son los que mejor aprovechan ese lienzo abierto.</p><h3><strong>Paredes con color propio</strong></h3><p>Si las paredes ya tienen un color definido, ya sea verde, azul, terracota o cualquier tono con carácter, el sofá debe buscar complemento, no competencia. La rueda de color es una herramienta válida aquí: los tonos análogos crean armonía, los complementarios crean tensión visual interesante si se manejan con mesura. En salas con paredes de color, los sofás en neutros profundos o en el mismo tono de la pared pero en versión más oscura o más clara suelen ser la elección más segura y la que mejor envejece.</p><h2>El uso real de la sala cambia las reglas</h2><p>El color de un sofá no vive solo en el plano estético. Vive también en el plano funcional. Una sala de uso intenso, con niños, mascotas o con un ritmo de vida activo, tiene necesidades distintas a una sala de recibir visitas o a un espacio de trabajo silencioso que también funciona como sala de lectura.</p><p>Los tonos claros puros, como el blanco o el beige muy claro, son exigentes en mantenimiento. Su belleza es innegable pero requieren cuidado constante y, en contextos de uso intenso, pueden generar más estrés que placer. Los grises medios, los azules apagados, los verdes neutros y los tonos tierra son más indulgentes sin perder sofisticación. Tapizados con ligeras variaciones de textura, como el boucle, el chenilla o los tejidos con tramas visibles, son especialmente útiles porque el patrón del tejido disimula el uso cotidiano mejor que las telas lisas.</p><h3><strong>El color en juegos de sala con más de una pieza</strong></h3><p>Cuando la decisión incluye un juego de sala completo, el enfoque cambia ligeramente. No todas las piezas necesitan ser del mismo color. De hecho, los espacios más sofisticados suelen mezclar un sofá principal en un tono neutro o profundo con sillones en un tono complementario o en el mismo color pero en acabado diferente. El Sillón Zoe, por ejemplo, puede acompañar a un sofá principal en gris grafito con una versión en beige tostado o lino natural, creando una sala con coherencia visual sin monotonía.</p><p>Lo que sí debe ser consistente en un juego de sala es la temperatura del color: mezclar tonos fríos con tonos cálidos sin un elemento que los articule es el error más frecuente y el que más rápido rompe la armonía de un espacio.</p><h2>Los colores que más perduran en sala</h2><p>Las tendencias de color en decoración de interiores cambian con frecuencia, pero hay ciertos tonos que han demostrado una capacidad de permanencia que trasciende las temporadas. No son colores sin carácter: son colores con la inteligencia de adaptarse.</p><p>El verde oscuro en sus versiones musgo, salvia o botella lleva varios ciclos de diseño instalado en salas de alto valor y sigue vigente porque dialoga bien con materiales naturales como la madera, el lino y el cuero. El azul profundo, especialmente en sus versiones pizarra o marino apagado, tiene una presencia que comunica calma y carácter sin gritar. El terracota y los ocres cálidos han atravesado épocas históricas y siguen siendo referencias de sofisticación cuando se combinan con materiales nobles.</p><p>Los grises, que dominaron más de una década, siguen siendo válidos cuando tienen personalidad propia, es decir, cuando tienen una base azulada, verdosa o lavanda que los distingue del gris industrial o del gris de oficina. Los neutros cálidos como el lino, el arena y el marfil tostado son los más universales de todos: funcionan en casi cualquier contexto y, bien ejecutados en el tejido correcto, alcanzan el nivel de lujo sin necesidad de un tono dramático.</p><h3><strong>Los colores que envejecen mal en sala</strong></h3><p>Tan importante como saber qué funciona es saber qué tiende a decepcionar con el tiempo. Los blancos puros sin ninguna base cálida suelen sentirse fríos y exigentes. Los colores muy saturados y brillantes, aunque impactantes en fotografía, pueden generar fatiga visual con el uso cotidiano. Las combinaciones de más de tres tonos distintos en el mismo juego de sala rara vez conservan coherencia más allá de la primera temporada.</p><h2>Materiales, acabados y cómo el color cambia según el tejido</h2><p>El color de un sofá no existe de forma independiente del material en que está tapizado. Un mismo tono verde oscuro en terciopelo, en lino y en cuero son tres colores distintos en la práctica, porque cada material absorbe, refleja y textura la luz de manera diferente.</p><p>El terciopelo profundiza cualquier color y le da una intensidad que otros materiales no alcanzan. Es el tejido de los tonos oscuros y saturados, y también el que mejor rinde en salas con iluminación artificial bien diseñada. El lino y los tejidos de fibra natural clarifican el color, lo hacen más aéreo y lo adaptan especialmente bien a salas con mucha luz natural. El cuero, por su parte, transforma con el tiempo: adquiere pátina, cambia de temperatura visual y se asienta en el espacio de una manera que ningún tejido puede replicar.</p><p>Antes de fijar el color, vale la pena confirmar en qué material se va a tapizar la pieza, porque esa decisión puede hacer que el mismo tono sea la elección perfecta o una decepción. Si tienes dudas sobre qué opciones de tapizado están disponibles para las piezas que estás evaluando, en la <a href=\"https://www.bletia.ec/categoria/sofas\"><span style=\"text-decoration: underline;\">colección de sofás de Bletia</span></a> puedes ver los materiales y acabados actuales de cada modelo.</p>',NULL,'[]','blog/01KTPC7VND5H8HJ5CDSCW57GNX.webp',0,1,'2026-06-09 14:23:02','Color para sofá o juego de sala: cómo elegirlo sin arrepentirte','Descubre cómo el color de tu sofá transforma cualquier sala. Guía de criterio real para elegir tono, acabado y paleta con confianza y estilo.','2026-06-09 14:23:02','2026-06-09 14:23:02'),(6,1,1,'Cuánto dura un mueble de madera y de qué depende su vida real','cuanto-dura-un-mueble-de-madera-y-de-que-depende-su-vida-real',NULL,'La durabilidad de un mueble de madera no es azar: depende de la especie, el proceso y el cuidado. Descubre qué factores marcan la diferencia entre una pieza que dura décadas y una que no.','<p>Hay <a href=\"/categoria/sofas\"><span style=\"text-decoration: underline;\">muebles</span></a> de madera que sobreviven a tres generaciones y otros que empiezan a mostrar fatiga antes de los cinco años. La diferencia rara vez tiene que ver con el precio de etiqueta y casi siempre con decisiones que se tomaron mucho antes de que la pieza llegara a tu espacio: la especie elegida, cómo se secó, qué tipo de ensamble se usó y con qué acabado se protegió. Cuando alguien pregunta realmente cuánto dura un mueble de madera, la respuesta honesta no es un número fijo. Es una cadena de factores que se sostienen entre sí, y entenderlos cambia por completo la forma en que se elige y se cuida una pieza.</p><h2>La especie de madera es el primer factor que define todo</h2><p>No todas las maderas son iguales ante el tiempo, la humedad o el uso cotidiano. La especie determina la densidad, la resistencia al desgaste, la capacidad de absorber o ceder humedad sin deformarse y la manera en que el acabado adhiere sobre la superficie. Antes de cualquier otra variable, la especie marca el techo de lo que una pieza puede aguantar.</p><h3><strong>Maderas duras frente a maderas blandas</strong></h3><p>Las maderas duras, técnicamente llamadas angiospermas, incluyen especies como el roble, el nogal, el cerezo, la teca o el fresno. Su mayor densidad las hace más resistentes a las marcas, los rasguños y las variaciones climáticas. Una mesa de comedor en roble macizo, bien construida y correctamente tratada, puede mantenerse en perfectas condiciones durante cincuenta años o más. Las maderas blandas, como el pino, el abeto o el cedro, son más ligeras y trabajan mejor en piezas decorativas o estructuras secundarias, pero ceden más fácilmente ante el uso intensivo.</p><p>La elección de la especie no es solo técnica: también es estética. El roble tiene una veta abierta y expresiva. El nogal tiene un tono oscuro y cálido que envejece con carácter. La teca, usada ampliamente en exteriores de alta gama, es naturalmente resistente a la humedad gracias a sus aceites internos. Cada especie tiene un lenguaje visual propio, y las marcas que trabajan con madera de verdad lo saben. Así se construye una pieza que tiene razón de ser más allá del año de compra.</p><h3><strong>El origen y la densidad básica de la madera</strong></h3><p>La misma especie puede comportarse de manera diferente según el origen del árbol, las condiciones de crecimiento y el punto de extracción dentro del tronco. La madera de corazón, extraída del núcleo, es más densa y estable que la albura, que corresponde a las capas externas. Un proveedor que trabaja con criterio selecciona las partes del tronco que mejor se comportarán en cada uso: diferente para una estructura, diferente para una superficie visible, diferente para una pieza de alto tráfico.</p><h2>El proceso de secado cambia el comportamiento de la madera para siempre</h2><p>Una madera cortada y usada sin el tiempo o el proceso de secado adecuado es <a href=\"/categoria/piezas\"><span style=\"text-decoration: underline;\">una pieza</span></a> con problemas programados. La madera recién cortada contiene una proporción elevada de humedad, y al perderla con el tiempo y en contacto con el ambiente interior de un espacio, se contrae, se curva, se agrieta o pierde sus ensambles. El secado no es un detalle de producción: es el proceso que estabiliza la madera antes de convertirse en mueble.</p><h3><strong>Secado natural frente a secado en horno</strong></h3><p>El secado natural consiste en dejar la madera apilada con separadores bajo condiciones controladas de ventilación durante meses o incluso años, dependiendo del grosor y la especie. Es el método tradicional y, cuando se hace bien, produce madera con una estabilidad notable. El secado en horno, también llamado secado artificial o kiln-dried, acelera el proceso mediante temperatura y humedad controladas. Cuando se ejecuta correctamente, el resultado es equivalente o superior al secado natural en mucho menos tiempo. El problema no está en el método, sino en hacer el proceso de forma incompleta o con parámetros incorrectos. Madera mal secada es la causa más común de deformaciones en muebles nuevos.</p><h3><strong>El contenido de humedad final y su relación con el ambiente</strong></h3><p>Una madera correctamente secada para uso en interiores debe tener un contenido de humedad de entre seis y diez por ciento. Si el mueble llega a un espacio con condiciones muy distintas a ese rango, comenzará un proceso de adaptación. Por eso los muebles de calidad piden un período de aclimatación antes de ser instalados, especialmente en espacios con climatización activa o cerca de fuentes de calor. Este dato, que muchas veces se omite, explica por qué un mismo <a href=\"https://bletia.ec/diy/que-debes-considerar-antes-de-comprar-tu-sofa\">modelo de mueble se comporta de forma diferente</a> en distintas casas.</p><h2>El ensamble define cuánto tiempo aguanta la estructura</h2><p>La madera puede ser perfecta, pero si las uniones no están bien resueltas, la pieza empieza a perder rigidez con el tiempo. Los ensambles son los puntos donde las fuerzas se concentran durante el uso: cuando alguien se sienta, cuando se arrastra una silla, cuando se carga una mesa con peso. Un ensamble mal calculado o mal ejecutado es el primer lugar donde un mueble comienza a ceder.</p><h3><strong>Ensambles tradicionales y su rol en la durabilidad</strong></h3><p>Las carpinterías que trabajan para el segmento de alta calidad recurren a ensambles tradicionales como la caja y espiga, la cola de milano o los ensambles de rebaje porque distribuyen mejor las fuerzas que un simple tornillo o un taco de madera. La caja y espiga, por ejemplo, genera una unión de gran superficie de contacto que resiste las torsiones. La cola de milano es especialmente eficaz en cajones que van a abrirse y cerrarse miles de veces. Estos ensambles requieren más tiempo y precisión, pero son la razón por la que un mueble fabricado con criterio se mantiene firme después de décadas de uso intensivo.</p><h3><strong>Pegamentos, refuerzos y la importancia del ajuste</strong></h3><p>El ensamble moderno combina la geometría tradicional con pegamentos de alta resistencia, específicos para madera, que crean uniones que a menudo superan en resistencia a la propia fibra de la madera. El ajuste milimétrico entre las piezas es fundamental: demasiada holgura y el pegamento no puede compensarla; demasiada presión y la madera puede romperse en el ensamble. La precisión del corte define la calidad de la unión, y esa precisión es lo que distingue una producción artesanal de calidad de una producción industrial sin control.</p><h2>El acabado protege la madera de lo que la rodea cada día</h2><p>La madera sin acabado está expuesta a la humedad del ambiente, al aceite de las manos, a la abrasión de los objetos y a la luz solar. El acabado correcto crea una barrera que extiende la vida de la pieza y determina cómo responde al uso cotidiano. No todos los acabados son iguales en dureza, flexibilidad, facilidad de mantenimiento o apariencia.</p><h3><strong>Tipos de acabado y lo que aporta cada uno</strong></h3><p>Los aceites y ceras penetran en la fibra de la madera y la nutren desde adentro. Aportan una apariencia natural y mate, muy apreciada en muebles de estilo nórdico o contemporáneo, pero requieren reaplicación periódica. Los barnices y lacas forman una película protectora sobre la superficie que ofrece mayor resistencia al agua y al desgaste, aunque con el tiempo pueden astillarse si no se mantienen. Los acabados al agua, más usados en producción contemporánea, son menos agresivos en su aplicación y cada vez más desarrollados en términos de dureza. El acabado en aceite UV, frecuente en superficies de alta exigencia como encimeras y mesas de comedor, ofrece una protección de alto rendimiento con un tacto muy cercano a la madera natural.</p><h3><strong>El mantenimiento del acabado como parte del ciclo de vida</strong></h3><p>Un mueble de madera de calidad no pide mantenimiento constante, pero sí mantenimiento inteligente. Limpiar con productos incompatibles con el acabado puede dañar la película protectora. La exposición prolongada al sol directo degrada los pigmentos y reseca la fibra. Colocar objetos calientes sin protección puede quemar el acabado de forma irreversible. Estas no son limitaciones de la madera: son condiciones de uso que cualquier material de calidad exige para mantener su nivel. Conocerlas es parte de la relación con una pieza bien hecha.</p><h2>Lo que determina que un mueble dure diez, treinta o cien años</h2><p>La durabilidad de un mueble de madera es el resultado de todas las decisiones anteriores sumadas al contexto en que vive la pieza. Una especie densa, correctamente secada, con ensambles precisos y un acabado adecuado al uso que va a recibir puede durar décadas sin perder ni su estructura ni su presencia visual. La madera maciza, a diferencia de los tableros derivados, tiene la ventaja de poder ser restaurada: lijada, reacabada, reparada. Una pieza que se puede regenerar es, en términos prácticos, una pieza con vida potencialmente ilimitada.</p><p>Las marcas que trabajan con madera de verdad, desde las grandes referencias del diseño italiano hasta talleres como el que hay detrás de Bletia en Cuenca, entienden que fabricar bien un mueble de madera no es solo un proceso productivo. Es una decisión editorial sobre qué tipo de objeto merece existir en un espacio y por cuánto tiempo. Un mueble que resiste no ocupa espacio: lo define.</p>',NULL,'[]','blog/01KTQ1DY309FXBKR12G8TE0BHG.webp',0,1,'2026-06-09 20:33:21','Cuánto dura un mueble de madera y qué determina su durabilidad real','Descubre de qué depende la durabilidad de un mueble de madera: especie, secado, acabado y cuidado. Todo lo que debes saber antes de elegir una pieza que dure décadas.','2026-06-09 20:33:21','2026-06-09 20:33:21'),(7,2,1,'El tapiz ideal para un sofá que no se mancha','tapiz-idea-para-sofa-que-no-mancha',NULL,'Descubre qué tapiz para un sofá que no se mancha conviene a tu sala: telas antimanchas, códigos de limpieza y resistencia real para elegir con criterio y sin renunciar al lujo.','<p>Una copa de vino que se inclina, un café que salta de la taza, las manos de un niño que vuelven del jardín. En una sala que se cuida, esos pequeños accidentes no deberían decidir el aspecto de tu mueble principal. Por eso, antes que el color o la forma, conviene preguntarse qué tapiz para un sofá que no se mancha encaja con la vida real de tu hogar. La tela equivocada convierte cada derrame en una marca permanente y en una preocupación que vuelve cada vez que alguien se sienta. La correcta deja que limpies con un paño y sigas con tu día como si nada hubiera pasado. Elegir bien un tapizado resistente a las manchas no significa renunciar al tacto suave ni a la presencia que esperas de una pieza de alto valor. Significa reconocer qué hace que una fibra repela los líquidos, cómo se mide su resistencia y qué buscar en la etiqueta cuando el vendedor ya no está delante para explicarlo.</p><h3>Por qué un sofá se mancha y otro parece repelerlo todo</h3><p>Dos sofás pueden verse casi idénticos en la sala y comportarse de forma opuesta frente a un derrame. La diferencia rara vez está en el precio, sino en la materia con la que está hecho el revestimiento. Una mancha aparece cuando el líquido encuentra espacio para entrar en la fibra y quedarse allí. Si el tejido es poroso y absorbente, el líquido penetra y se fija; si es compacto y poco afín al agua, se queda en la superficie el tiempo suficiente para retirarlo. Entender ese principio simple es lo que te permite leer cualquier tela con criterio propio, sin depender de la palabra antimanchas escrita en una ficha.</p><p><strong><br>La fibra decide más que el color</strong></p><p>Existe la idea de que un sofá oscuro disimula y por eso mancha menos, pero el color solo esconde, no protege. Lo que de verdad determina la resistencia es la fibra. Las naturales, como el algodón y el lino, son agradables y transpirables, aunque tienden a absorber líquidos y a marcarse con facilidad cuando no llevan tratamiento. Las sintéticas, como el poliéster, el acrílico y la microfibra, suelen resistir mejor las manchas y conservan el color con el paso del tiempo. Por eso, una tela que no se mancha casi siempre nace de una buena fibra antes que de un buen tinte que solo cubre la apariencia.</p><p><strong><br>Tejidos compactos frente a tejidos abiertos</strong></p><p>Dos telas de la misma fibra pueden rendir distinto según cómo estén tejidas. Un tejido muy tupido, con los hilos apretados, deja pocos huecos por donde el líquido pueda colarse, así que un derrame queda en la superficie y se limpia con un paño. Un tejido abierto o de hilo grueso, en cambio, atrapa el líquido entre sus fibras y lo retiene. Esa es la razón por la que una tapicería resistente a las manchas suele sentirse densa y uniforme al tacto. Al comparar opciones, pasar la mano por la tela y observar la trama dice tanto como cualquier dato de la ficha técnica.</p><h3>Las telas que de verdad resisten las manchas</h3><p>Con el principio claro, la pregunta práctica es cuál elegir entre las telas que hoy se ofrecen para tapizar un sofá. No todas las opciones antimanchas son iguales: unas resisten por su composición, otras por un acabado aplicado, y unas pocas combinan ambas cosas. Para una sala de uso diario, donde se come, se recibe visita y a veces conviven niños o mascotas, conviene priorizar materiales que toleren la limpieza frecuente sin perder su aspecto. Estas son las telas que mejor equilibran resistencia, tacto y elegancia, con sus ventajas reales y sus límites, para que la decisión no dependa solo de la fotografía del catálogo.</p><p><strong><br>Microfibra, la discreta que casi todo lo soporta</strong></p><p>La microfibra es un tejido sintético de fibras muy finas y muy juntas, lo que dificulta que los líquidos pasen al interior. Tiene un tacto aterciopelado, repele bastante bien el agua y resiste el uso intenso, por lo que es una de las telas favoritas para hogares con vida activa. Un derrame reciente se retira con un paño humedecido y, en muchos casos, sin dejar rastro. Su acabado mate combina con salas sobrias y contemporáneas. Como contrapartida, una microfibra de baja calidad puede aplastarse con el tiempo, así que la densidad del tejido importa tanto como el nombre que aparezca en la etiqueta.</p><p><strong><br>Poliéster y sus mezclas</strong></p><p>El poliéster es una fibra resistente que conserva muy bien el color y apenas se arruga, cualidades que lo hacen muy práctico como tela antimanchas para sofá. Mezclado con algodón o con lino aporta la durabilidad del sintético con un tacto más natural, y resiste la decoloración y la formación de bolitas. Esa versatilidad explica por qué tantas tapicerías de uso diario parten de una base de poliéster. Para que rinda como tela que no se mancha conviene que venga con un tejido cerrado o un tratamiento de fábrica, ya que el poliéster simple repele, pero no es del todo impermeable si el líquido se deja secar.</p><p><strong><br>Acrílico teñido en masa y telas de alto rendimiento</strong></p><p>El acrílico teñido en masa lleva el color dentro de la propia fibra, no en la superficie, así que resiste el sol y soporta limpiezas exigentes sin perder tono. Es la base de muchas telas de alto rendimiento pensadas para repeler líquidos y mantener su aspecto durante años. Estas telas técnicas suelen tolerar agua y jabón suave, lo que las vuelve ideales donde hay derrames frecuentes. Existen además opciones de cuero sintético, que forman una barrera lisa donde el líquido apenas penetra y se retira al instante. Cada una ofrece una forma distinta de lograr un tapizado resistente a derrames sin sacrificar el estilo.</p>',NULL,'[{\"type\":\"tabla\",\"data\":{\"contenido\":\"Tela|Resistencia a manchas|Limpieza|Tacto y acabado|Recomendada para\\nMicrofibra | Alta | Pa\\u00f1o con agua, sencilla | Suave, aterciopelado, mate | Familias y uso diario\\nPoli\\u00e9ster y mezclas | Media a alta | Sencilla, seg\\u00fan tratamiento | Natural y vers\\u00e1til | Salas de tr\\u00e1nsito moderado\\nAcr\\u00edlico te\\u00f1ido en masa | Alta | Agua y jab\\u00f3n suave | Textil, color muy estable | Zonas con sol y derrames\\nCuero sint\\u00e9tico | Muy alta | Pa\\u00f1o h\\u00famedo, inmediata | Liso y contempor\\u00e1neo | Hogares con ni\\u00f1os y mascotas\\nLino o algod\\u00f3n sin tratar | Baja | Delicada, requiere cuidado | Natural, fresco, elegante | Ambientes de bajo uso \"}},{\"type\":\"texto\",\"data\":{\"texto\":\"<h3>C\\u00f3mo leer la ficha t\\u00e9cnica antes de comprar<\\/h3><p>Cuando alguien describe una tela como antimanchas, conviene saber traducir esa promesa a datos concretos. Una ficha t\\u00e9cnica seria incluye informaci\\u00f3n que permite anticipar c\\u00f3mo se comportar\\u00e1 el revestimiento del sof\\u00e1 en tu sala, sin esperar al primer accidente para descubrirlo. Dos referencias resumen casi todo lo que necesitas: el c\\u00f3digo de limpieza, que indica con qu\\u00e9 se puede limpiar la tela sin da\\u00f1arla, y la resistencia al roce, que se\\u00f1ala cu\\u00e1nto uso soportar\\u00e1 antes de desgastarse. Saber leer ambas convierte la compra en una decisi\\u00f3n informada y deja menos espacio a la sorpresa o al arrepentimiento cuando ya tienes el mueble en casa.<\\/p><p><strong><br>Los c\\u00f3digos de limpieza W, S, WS y X<\\/strong><\\/p><p>Los muebles tapizados llevan un c\\u00f3digo que indica c\\u00f3mo limpiarlos con seguridad, y conocerlo evita arruinar una tela por usar el producto equivocado. La letra W significa que la tela admite limpieza con productos a base de agua, la opci\\u00f3n m\\u00e1s sencilla y la m\\u00e1s habitual en telas antimanchas. La S indica que solo tolera solventes en seco, sin agua. WS acepta ambos m\\u00e9todos y ofrece la mayor flexibilidad. La X, en cambio, advierte que la tela solo se puede aspirar o cepillar, sin l\\u00edquidos de ning\\u00fan tipo. Para un sof\\u00e1 que no se manche en el uso cotidiano, busca un c\\u00f3digo W o WS en la etiqueta.<\\/p><p><strong><br>Los ciclos Martindale y la resistencia al roce<\\/strong><\\/p><p>La durabilidad de una tela se mide con la prueba de abrasi\\u00f3n Martindale, que frota el tejido contra una superficie est\\u00e1ndar hasta que empieza a desgastarse y cuenta los ciclos que resiste. Cuanto mayor es el n\\u00famero, m\\u00e1s aguanta el uso continuo. Como referencia, entre quince mil y treinta mil ciclos basta para un sof\\u00e1 de uso dom\\u00e9stico normal, mientras que las cifras m\\u00e1s altas corresponden a espacios de alto tr\\u00e1nsito. Una tela que resiste manchas pero se desgasta pronto no es buena inversi\\u00f3n, as\\u00ed que conviene mirar ambos datos juntos. Puedes revisar en qu\\u00e9 consiste <a href=\\\"https:\\/\\/en.wikipedia.org\\/wiki\\/Martindale_(unit)\\\"><span style=\\\"text-decoration: underline;\\\">la prueba de abrasi\\u00f3n Martindale<\\/span><\\/a> para entender la cifra que ver\\u00e1s impresa.<\\/p><h3>Elegir el tapiz sin renunciar al lujo<\\/h3><p>La buena noticia es que resistencia y elegancia ya no est\\u00e1n re\\u00f1idas. Hoy es posible encontrar telas que repelen los l\\u00edquidos y, al mismo tiempo, ofrecen el tacto y la presencia que se esperan de una pieza hecha con cuidado. La clave est\\u00e1 en decidir el tapizado desde el primer momento, cuando todav\\u00eda puedes elegir la fibra, el acabado y el color que mejor encajan con tu sala. En Bletia, por ejemplo, <a href=\\\"https:\\/\\/bletia.ec\\/categoria\\/sofas\\\"><span style=\\\"text-decoration: underline;\\\">los sof\\u00e1s se fabrican bajo pedido<\\/span><\\/a>, lo que permite escoger el tapiz que m\\u00e1s conviene a tu hogar antes de que la pieza se construya. Esa decisi\\u00f3n temprana es justo la que evita arrepentimientos cuando llega el primer derrame.<\\/p><p><strong><br>Piensa en qui\\u00e9n usar\\u00e1 el sof\\u00e1 a diario<\\/strong><\\/p><p>Antes de cerrar la elecci\\u00f3n, vale la pena imaginar la escena real: qui\\u00e9n se sienta, con qu\\u00e9 frecuencia y qu\\u00e9 suele pasar alrededor. Una familia con ni\\u00f1os peque\\u00f1os agradecer\\u00e1 una microfibra o un acr\\u00edlico de f\\u00e1cil limpieza, mientras que una sala de recibo de bajo uso puede permitirse texturas m\\u00e1s delicadas. Pedir muestras y probar una gota de agua sobre la tela revela en segundos c\\u00f3mo se comportar\\u00e1. Modelos como el <a href=\\\"https:\\/\\/bletia.ec\\/producto\\/sofa-bletia\\\"><span style=\\\"text-decoration: underline;\\\">Sof\\u00e1 Bletia<\\/span><\\/a> o el <a href=\\\"https:\\/\\/bletia.ec\\/producto\\/sofa-baal-uno\\\"><span style=\\\"text-decoration: underline;\\\">Sof\\u00e1 Baal Uno<\\/span><\\/a> permiten elegir el tapiz seg\\u00fan ese uso, y un <a href=\\\"https:\\/\\/bletia.ec\\/producto\\/sillon-zoe\\\"><span style=\\\"text-decoration: underline;\\\">Sill\\u00f3n Zoe<\\/span><\\/a> a juego completa la sala sin romper su armon\\u00eda. Si quieres seguir afinando criterios, el <a href=\\\"https:\\/\\/bletia.ec\\/blog\\\"><span style=\\\"text-decoration: underline;\\\">blog de Bletia<\\/span><\\/a> re\\u00fane m\\u00e1s ideas para vestir tu espacio con acierto.<\\/p><p><br><\\/p>\"}}]','blog/01KTZP0BZA90C7H8KF1QN7PG9X.webp',0,1,'2026-06-13 05:06:52','Qué tapiz elegir para un sofá que no se mancha','Telas antimanchas, códigos de limpieza y resistencia al roce para elegir el tapiz de un sofá que no se mancha, sin perder elegancia ni confort en tu sala.','2026-06-13 05:06:52','2026-06-14 05:09:42'),(8,4,1,'50 modelos de mesas de noche para tu dormitorio','50-modelos-de-mesas-de-noche-para-tu-dormitorio',NULL,'Modelos de mesas de noche para tu dormitorio: 50 ideas en madera, flotantes, con gavetas y a medida, hechas a mano en Cuenca. Encuentra la tuya.','<p>Muchas de las personas que redecoran (renuevan) su dormitorio subestiman el impacto visual de la mesita de noche. No es un mueble secundario. Es el primer objeto que ves al despertar y el último antes de dormir. Define el tono de toda la habitación.</p><p>He trabajado con más de 200 proyectos de interiores en la última década, y el error más frecuente que veo: elegir la cama primero y dejar la mesita de noche como ocurrencia tardía. Eso rompe la armonía del espacio.</p><p>Aquí tienes 50 modelos reales, organizados por estilo, con enlaces directos a Pinterest para que descargues las imágenes y las uses como referencia en tu proyecto.</p><h2>¿Por qué la mesita de noche importa más de lo que crees?</h2><p>La mesita de noche cumple tres funciones simultáneas:</p><ul><li><strong>Almacenamiento funcional:</strong> libros, gafas, cargador, medicamentos</li><li><strong>Superficie de apoyo:</strong> lámpara, reloj, vaso de agua</li><li><strong>Elemento estético:</strong> equilibra proporciones con la cama y el resto del mobiliario</li></ul><p>Si tu mesita de noche mide menos del 60% de la altura de tu colchón, visualmente \"desaparece\". Si supera la altura del colchón en más de 15 cm, domina el espacio de forma agresiva. El rango ideal está entre 60 y 70 cm de alto para camas estándar.</p>',NULL,'[{\"type\":\"productos\",\"data\":{\"titulo\":\"Mesas de noche\",\"limite\":\"3\",\"categoria_id\":\"5\",\"productos\":[]}},{\"type\":\"texto\",\"data\":{\"texto\":\"<h3>Mesas de noche modernas y minimalistas (10 modelos)<\\/h3><p><strong>1. Mesita moderna con 2 cajones en naranja y m\\u00e1rmol sint\\u00e9tico<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> El contraste entre el naranja vibrante y el m\\u00e1rmol blanco crea un punto focal sin sacrificar funcionalidad. Los 2 cajones profundos permiten guardar todo el desorden nocturno.<br><strong>Ideal para:<\\/strong> Dormitorios neutros que necesitan un toque de color. Personas que priorizan el almacenamiento cerrado.<br><a href=\\\"https:\\/\\/dk.pinterest.com\\/pin\\/532269249734364128\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>2. Mesita con estante de dise\\u00f1o moderno en madera aglomerada y metal<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> La combinaci\\u00f3n de estante abierto y caj\\u00f3n ofrece versatilidad: lo que usas a diario visible, lo dem\\u00e1s guardado. Estructura met\\u00e1lica que garantiza estabilidad.<br><strong>Ideal para:<\\/strong> Espacios peque\\u00f1os donde cada cent\\u00edmetro cuenta. Estudiantes o dormitorios juveniles.<br><a href=\\\"https:\\/\\/in.pinterest.com\\/pin\\/464504149089741196\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>3. Mesita moderna rectangular de madera maciza, metal y cuero<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Los tiradores de cuero a\\u00f1aden calidez t\\u00e1ctil a un dise\\u00f1o geom\\u00e9trico fr\\u00edo. Madera maciza que envejece con dignidad.<br><strong>Ideal para:<\\/strong> Dormitorios masculinos o estilo industrial sofisticado. Quienes valoran materiales nobles.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/1090926709793642576\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>4. Mesa de noche moderna de madera maciza con tapa de piedra<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> La tapa de piedra resiste calor, l\\u00edquidos y rayones mejor que cualquier madera. Base de madera que aporta calidez visual.<br><strong>Ideal para:<\\/strong> Quienes dejan bebidas en la mesita sin posavasos. Dormitorios de invitados de alto tr\\u00e1fico.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/838373286932560953\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>5. Mesilla flotante de arce mid-century moderno<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> El arce claro ilumina espacios oscuros. Dise\\u00f1o flotante que facilita limpiar debajo. L\\u00edneas mid-century que nunca pasan de moda.<br><strong>Ideal para:<\\/strong> Dormitorios escandinavos o n\\u00f3rdicos. Personas obsesionadas con la limpieza del suelo.<br><a href=\\\"https:\\/\\/mx.pinterest.com\\/pin\\/293930313189967364\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>6. Mesa moderna minimalista con 2 cajones estilo lujo ligero<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Acabados lacados que reflejan luz y ampl\\u00edan visualmente el espacio. Cajones con cierre suave (soft-close) que silencian la noche.<br><strong>Ideal para:<\\/strong> Dormitorios contempor\\u00e1neos de gama alta. Quienes odian el ruido de cajones al cerrarse.<br><a href=\\\"https:\\/\\/jp.pinterest.com\\/pin\\/4598879004212175360\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>7. Mesita mid-century de madera maciza minimalista<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Patas c\\u00f3nicas elevadas que crean sensaci\\u00f3n de ligereza. Madera maciza con vetas visibles que aportan car\\u00e1cter \\u00fanico.<br><strong>Ideal para:<\\/strong> Amantes del dise\\u00f1o de los 50-60s. Dormitorios que buscan calidez sin recargar.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/cttasty-mid-century-modern-nightstand-solid-wood-night-table-minimalist-nightstand-2drawer-bedside-tables-narrow-oa--43065740181366584\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>8. Mesita minimalista rectangular con acero inoxidable<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> El acero inoxidable es indestructible y f\\u00e1cil de limpiar. Dise\\u00f1o rectangular que maximiza superficie \\u00fatil sin ocupar m\\u00e1s espacio.<br><strong>Ideal para:<\\/strong> Dormitorios modernos fr\\u00edos. Personas al\\u00e9rgicas (el metal no acumula \\u00e1caros).<br><a href=\\\"https:\\/\\/uk.pinterest.com\\/pin\\/modern-minimalist-rectangular-solid-wood-high-density-panel-stainless-steel-nightstand-2drawer-for-bedroom--1090926709793708039\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>9. Mesita cuadrada minimalista de madera maciza de caucho<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> La madera de caucho es sostenible y resistente a la humedad. Forma cuadrada que encaja en cualquier rinc\\u00f3n sin desperdiciar espacio.<br><strong>Ideal para:<\\/strong> Quienes priorizan la sostenibilidad. Dormitorios con humedad (climas tropicales o ba\\u00f1os en suite).<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/4590716214860221440\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>10. Mesa de noche con 2 cajones y estante abierto<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Triple opci\\u00f3n de almacenamiento: cajones para privacidad, estante para acceso r\\u00e1pido. Versatilidad que se adapta a necesidades cambiantes.<br><strong>Ideal para:<\\/strong> Lectores nocturnos (libros a mano). Quienes usan m\\u00faltiples dispositivos (cargadores visibles pero ordenados).<br><a href=\\\"https:\\/\\/mx.pinterest.com\\/pin\\/4592545847740584960\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><h3>Mesas de noche flotantes (9 modelos)<\\/h3><p><strong>11. Mesita flotante minimalista y elegante<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Instalaci\\u00f3n a 60-65 cm del suelo que libera completamente el piso. Dise\\u00f1o sin tiradores que crea una l\\u00ednea visual limpia.<br><strong>Ideal para:<\\/strong> Dormitorios diminutos (&lt;10m\\u00b2). Personas con robots aspiradora (sin obst\\u00e1culos).<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/la-mesita-de-noche-flotante-de-zara-home-que-todos-quieren-en-su-dormitorio-minimalista-y-elegante--637751997278985205\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>12. Mesita flotante 45x30 cm en madera Deleyna<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Dimensiones compactas (30 cm de fondo) que caben donde otras no. Madera tratada que resiste la deformaci\\u00f3n por peso.<br><strong>Ideal para:<\\/strong> Pasillos estrechos junto a la cama. Dormitorios con radiadores que limitan profundidad.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/552183604328477240\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>13. Mesita flotante con caj\\u00f3n modelo Basic<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Relaci\\u00f3n calidad-precio imbatible. Caj\\u00f3n \\u00fanico pero espacioso que obliga a editar lo esencial.<br><strong>Ideal para:<\\/strong> Primer apartamento o dormitorio de invitados. Minimalistas por necesidad.<br><a href=\\\"https:\\/\\/no.pinterest.com\\/pin\\/187884615702594863\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>14. Mesita flotante moderna con caj\\u00f3n a medida<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Personalizaci\\u00f3n total de dimensiones y acabado. Se adapta a huecos irregulares o paredes con obst\\u00e1culos.<br><strong>Ideal para:<\\/strong> Reformas complejas. Dormitorios con enchufes o interruptores que limitan opciones est\\u00e1ndar.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/339740365660861245\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>15. Mesita flotante en madera Gyda<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Madera clara de roble que aporta calidez n\\u00f3rdica. Sistema de fijaci\\u00f3n oculta que parece \\\"flotar\\\" de verdad.<br><strong>Ideal para:<\\/strong> Estilo escandinavo aut\\u00e9ntico. Quienes detestan ver tornillos o soportes.<br><a href=\\\"https:\\/\\/kr.pinterest.com\\/pin\\/350295677285815350\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>16. Mesita flotante DIY estilo n\\u00f3rdico en pino<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Proyecto hazlo-t\\u00fa-mismo que cuesta 1\\/3 de una mesita comercial. Madera de pino f\\u00e1cil de trabajar y pintar.<br><strong>Ideal para:<\\/strong> Manitas con presupuesto limitado. Quienes quieren personalizar color exacto.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/suenoszzz-mesita-de-noche-flotante-color-natural-diy-estilo-nordico-para-dormitorio-mesita-con-cajon-para-colgar--418834834117654573\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>17. Mesita flotante SIEM REAP con dos cajones<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Dos cajones apilados que duplican almacenamiento sin aumentar huella visual. Madera de mango sostenible con vetas tropicales.<br><strong>Ideal para:<\\/strong> Quienes necesitan guardar mucho en poco espacio. Amantes de maderas ex\\u00f3ticas.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/350295677282197638\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>18. Mesita flotante con caj\\u00f3n a medida funcional<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Dise\\u00f1o que integra gesti\\u00f3n de cables (agujero trasero para enchufes). Caj\\u00f3n profundo que oculta cargadores y cables.<br><strong>Ideal para:<\\/strong> Dormitorios tecnol\\u00f3gicos (m\\u00faltiples dispositivos). Quienes odian el desorden de cables.<br><a href=\\\"https:\\/\\/id.pinterest.com\\/pin\\/468022586298250235\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>19. Mesita flotante HEYZOEY con almacenamiento cerrado y abierto<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Combina caj\\u00f3n (privacidad) con balda inferior (acceso r\\u00e1pido). Versatilidad que se adapta a rutinas cambiantes.<br><strong>Ideal para:<\\/strong> Lectores nocturnos. Quienes necesitan agua y gafas a mano pero quieren orden.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/556898310194467813\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><h3>Mesas de noche industriales (7 modelos)<\\/h3><p><strong>20. Mesilla industrial de madera, metal y cristal<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Estante de cristal que aligera visualmente la estructura met\\u00e1lica pesada. Combinaci\\u00f3n de texturas (madera c\\u00e1lida + metal fr\\u00edo + cristal transparente).<br><strong>Ideal para:<\\/strong> Lofts industriales. Quienes quieren estilo industrial sin pesar visualmente.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/293930313184170528\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>21. Mesita Marley industrial con armaz\\u00f3n de acero y cristal<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Acero negro mate que no muestra huellas. Cristal templado de 8mm que soporta peso sin riesgo.<br><strong>Ideal para:<\\/strong> Dormitorios masculinos modernos. Quienes buscan durabilidad extrema.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/376402481371427927\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>22. Mesita de dormitorio en forja y madera industrial<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Forja artesanal que aporta car\\u00e1cter \\u00fanico. Madera reciclada con historia y vetas irregulares.<br><strong>Ideal para:<\\/strong> Amantes de lo artesanal. Dormitorios r\\u00fastico-industriales.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/861806078701156305\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>23. Mesa de Noche Vera con roble macizo y metal negro mate<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Roble macizo que envejece mejorando. Metal negro mate que no se oxida ni raya f\\u00e1cilmente.<br><strong>Ideal para:<\\/strong> Inversi\\u00f3n a largo plazo. Quienes valoran materiales que mejoran con el tiempo.<br><a href=\\\"https:\\/\\/ar.pinterest.com\\/pin\\/40602834133790733\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>24. Mesita en forja y madera industrial<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Estructura abierta que permite ver el contenido (ideal para revistas\\/libros). Forja pintada al horno que resiste d\\u00e9cadas.<br><strong>Ideal para:<\\/strong> Coleccionistas de libros o revistas. Dormitorios con buena luz natural.<br><a href=\\\"https:\\/\\/mx.pinterest.com\\/pin\\/703968985502768462\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>25. Mesita industrial de dos colores sobre base met\\u00e1lica<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Contraste de maderas claras y oscuras que rompe la monoton\\u00eda. Base met\\u00e1lica elevada que facilita limpieza.<br><strong>Ideal para:<\\/strong> Dormitorios que necesitan romper la monoton\\u00eda visual. Personas obsesionadas con limpiar bajo muebles.<br><a href=\\\"https:\\/\\/id.pinterest.com\\/pin\\/817825613617609181\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>26. Mesita moderna industrial colecci\\u00f3n Esya<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Tapa de madera gruesa (3-4 cm) que soporta peso sin flexar. Patas met\\u00e1licas con reguladores de altura para suelos irregulares.<br><strong>Ideal para:<\\/strong> Suelos antiguos desnivelados. Quienes apoyan objetos pesados (l\\u00e1mparas grandes, pilas de libros).<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/627689266856289341\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><h3>Mesas de noche vintage y restauradas (8 modelos)<\\/h3><p><strong>27. Mesita blanca vintage restaurada con plantas y libros<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Pintura tiza blanca que oculta imperfecciones manteniendo textura vintage. Cajones que cierran con suavidad tras restauraci\\u00f3n.<br><strong>Ideal para:<\\/strong> Estilo shabby chic rom\\u00e1ntico. Quienes buscan piezas con alma y historia.<br><a href=\\\"https:\\/\\/in.pinterest.com\\/pin\\/528891550014313704\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>28. Mesita restaurada en madera reciclada con pintura tiza gris<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Gris antracita que disimula mejor el desgaste que el blanco. Madera reciclada que aporta sostenibilidad y car\\u00e1cter.<br><strong>Ideal para:<\\/strong> Dormitorios n\\u00f3rdicos oscuros. Quienes priorizan la econom\\u00eda circular.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/2181499814556856\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>29. Mesita ovalada de haya vintage con 2 cajones en caoba<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Forma ovalada \\u00fanica que suaviza l\\u00edneas rectas del dormitorio. Caoba que oscurece con el tiempo ganando elegancia.<br><strong>Ideal para:<\\/strong> Dormitorios cl\\u00e1sicos que necesitan un toque diferente. Amantes de maderas oscuras.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/445152744417193066\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>30. Conjunto de mesitas antique blancas Lucille<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Detalles tallados a mano que ninguna m\\u00e1quina puede replicar. Par perfecto para simetr\\u00eda en cama de matrimonio.<br><strong>Ideal para:<\\/strong> Dormitorios franceses o provenzales. Quienes valoran la simetr\\u00eda perfecta.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/429882726932864290\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>31. Mesita restaurada en rosa y dorado<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Rosa empolvado maduro (no infantil) con pan de oro en detalles. Restauraci\\u00f3n que respeta la pieza original.<br><strong>Ideal para:<\\/strong> Dormitorios femeninos sofisticados. Quienes buscan color sin ser estridentes.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/196539971233402830\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>32. Mesilla restaurada con pintura decorativa<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> T\\u00e9cnica de envejecido artificial que simula d\\u00e9cadas de uso. Cada pieza es \\u00fanica por el proceso artesanal.<br><strong>Ideal para:<\\/strong> Estilo vintage aut\\u00e9ntico sin buscar antig\\u00fcedades reales. Presupuestos limitados con gusto exigente.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/19351473393288151\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>33. Mesita restaurada de muebles antiguos<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Estructura de madera maciza de los a\\u00f1os 50-60 (calidad perdida hoy). Restauraci\\u00f3n que mantiene herrajes originales.<br><strong>Ideal para:<\\/strong> Puristas del vintage. Quienes valoran la autenticidad sobre la perfecci\\u00f3n.<br><a href=\\\"https:\\/\\/gr.pinterest.com\\/pin\\/86201780363839234\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>34. Mesilla auxiliar restaurada en verde y blanco estilo campestre<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Verde salvia que conecta con la naturaleza. Combinaci\\u00f3n bicolor que ilumina sin ser blanca pura.<br><strong>Ideal para:<\\/strong> Casas de campo o estilo cottage. Dormitorios que buscan calma y frescura.<br><a href=\\\"https:\\/\\/mx.pinterest.com\\/pin\\/328551735336416478\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><h3>Mesas de noche n\\u00f3rdicas y escandinavas (5 modelos)<\\/h3><p><strong>35. Mesa de luz n\\u00f3rdica escandinava de 3 cajones en madera de para\\u00edso<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Madera de para\\u00edso (paulownia) ultraligera pero resistente. 3 cajones que organizan por categor\\u00edas (lectura, cuidado personal, miscel\\u00e1nea).<br><strong>Ideal para:<\\/strong> Quienes necesitan m\\u00e1ximo almacenamiento. Personas que cambian muebles frecuentemente (peso ligero).<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/168110998569521168\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>36. Mesa de luz n\\u00f3rdica escandinava con 3 cajones lustre natural<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Acabado natural sin te\\u00f1ir que muestra la veta real. Cajones con gu\\u00edas met\\u00e1licas que duran m\\u00e1s que la madera.<br><strong>Ideal para:<\\/strong> Alergias qu\\u00edmicas (sin barnices fuertes). Minimalistas que valoran la madera pura.<br><a href=\\\"https:\\/\\/ar.pinterest.com\\/pin\\/168110998569521168\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>37. Mesita blanca estilo n\\u00f3rdico con caj\\u00f3n y estante<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Blanco mate que no amarillea con el tiempo. Estante inferior para cestas de mimbre (almacenamiento flexible).<br><strong>Ideal para:<\\/strong> Dormitorios oscuros que necesitan luz. Quienes usan cestas organizadoras.<br><a href=\\\"https:\\/\\/ar.pinterest.com\\/pin\\/806425877036678742\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>38. Mesita modelo Soto estilo n\\u00f3rdico industrial<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Fusi\\u00f3n n\\u00f3rdico-industrial que funciona en cualquier estilo contempor\\u00e1neo. Patas met\\u00e1licas negras que anclan visualmente la ligereza n\\u00f3rdica.<br><strong>Ideal para:<\\/strong> Dormitorios que evolucionan de estilo. Quienes no quieren encasillarse.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/dormitorio--613334043016768890\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>39. Mesita doble estilo n\\u00f3rdico con caj\\u00f3n y estante<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Configuraci\\u00f3n apilable que permite personalizar altura. Dos piezas que funcionan juntas o separadas (versatilidad total).<br><strong>Ideal para:<\\/strong> Dormitorios que cambian de uso (oficio nocturno, lectura, descanso). Quienes mudan frecuentemente.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/327144360431584597\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><h3>Mesas de noche r\\u00fasticas (7 modelos)<\\/h3><p><strong>40. Mesita r\\u00fastica Violet de teca reciclada con caj\\u00f3n<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Teca reciclada de barcos o construcciones antiguas (madera curada d\\u00e9cadas). Caj\\u00f3n \\u00fanico pero profundo con gu\\u00edas de madera tradicionales.<br><strong>Ideal para:<\\/strong> Amantes de la sostenibilidad real. Dormitorios que buscan piezas con historia.<br><a href=\\\"https:\\/\\/in.pinterest.com\\/pin\\/479492691677513965\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>41. Mesita r\\u00fastica decap\\u00e9 en madera de mango<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> T\\u00e9cnica decap\\u00e9 que muestra capas de color bajo el blanco. Madera de mango de plantaciones sostenibles.<br><strong>Ideal para:<\\/strong> Estilo provenzal o campestre actualizado. Quienes valoran el trabajo artesanal.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/mesita-de-noche-2-cajones-estilo-rustico-actual-color-gris-natural--550072542002978114\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>42. Mesita r\\u00fastica-vintage de madera natural con restos decapados<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Madera natural sin pintar que muestra nudos y vetas. Restos decapados estrat\\u00e9gicos que aportan car\\u00e1cter sin exagerar.<br><strong>Ideal para:<\\/strong> Estilo r\\u00fastico contempor\\u00e1neo. Quienes prefieren madera natural sobre pintada.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/mesita-de-noche-rsticavintage-mesitas-de-noche--172896073188018726\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>43. Mesita blanca r\\u00fastica de madera con 2 cajones<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Blanco envejecido que disimula golpes y uso diario. 2 cajones de tama\\u00f1o generoso para almacenamiento real.<br><strong>Ideal para:<\\/strong> Familias con ni\\u00f1os (resistente a golpes). Dormitorios de uso intensivo.<br><a href=\\\"https:\\/\\/mx.pinterest.com\\/pin\\/205054589278980134\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>44. Mesita de madera natural con 3 cajones y tiradores dorados envejecidos<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Tiradores de lat\\u00f3n envejecido que mejoran con el uso (p\\u00e1tina natural). 3 cajones que organizan sin esfuerzo.<br><strong>Ideal para:<\\/strong> R\\u00fastico elegante (no campestre b\\u00e1sico). Quienes valoran detalles que envejecen bien.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/127226758214272068\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>45. Mesita de teca r\\u00fastica con caj\\u00f3n y estante<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Teca maciza que resiste humedad y cambios t\\u00e9rmicos. Estante inferior para libros o cestas de almacenamiento.<br><strong>Ideal para:<\\/strong> Climas h\\u00famedos o ba\\u00f1os en suite. Quienes necesitan almacenamiento flexible.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/550072542008605116\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>46. Mesita de madera reciclada Ambient con acabado envejecido<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Madera de demoliciones (vigas, suelos antiguos) con historia certificada. Acabado envejecido que respeta la madera original.<br><strong>Ideal para:<\\/strong> Eco-conscientes exigentes. Dormitorios que buscan piezas \\u00fanicas irrepetibles.<br><a href=\\\"https:\\/\\/cl.pinterest.com\\/pin\\/487936940880991599\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><h3>Mesas de noche de m\\u00e1rmol y piedra (4 modelos)<\\/h3><p><strong>47. Mesita vintage de madera y m\\u00e1rmol estilo shabby chic<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Tapa de m\\u00e1rmol blanco que resiste calor y manchas. Base de madera pintada shabby que suaviza la frialdad del m\\u00e1rmol.<br><strong>Ideal para:<\\/strong> Quienes dejan tazas calientes sin posavasos. Estilo rom\\u00e1ntico actualizado.<br><a href=\\\"https:\\/\\/ar.pinterest.com\\/pin\\/81838918209965356\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>48. Mesita moderna con tapa de piedra blanca y cajones<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> Piedra natural (no sint\\u00e9tica) que cada pieza es \\u00fanica. Cajones profundos con frente de madera que contrasta con la piedra.<br><strong>Ideal para:<\\/strong> Lujo silencioso (sin ostentaci\\u00f3n). Quienes valoran materiales naturales.<br><a href=\\\"https:\\/\\/es.pinterest.com\\/pin\\/modern-white-stone-top-nightstand--751608625320491408\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>49. Mesita de m\\u00e1rmol SunAura con luz nocturna integrada<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> M\\u00e1rmol transl\\u00facido que difumina luz LED integrada. Funci\\u00f3n l\\u00e1mpara + mesita en una pieza (ahorro de espacio).<br><strong>Ideal para:<\\/strong> Dormitorios minimalistas extremos. Quienes necesitan luz tenue nocturna.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/952370652461220011\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><strong>50. Bur\\u00f3 de m\\u00e1rmol negro y madera<\\/strong><br><strong>Por qu\\u00e9 destaca:<\\/strong> M\\u00e1rmol negro con vetas doradas que aporta drama. Madera oscura que ancla visualmente el peso del m\\u00e1rmol.<br><strong>Ideal para:<\\/strong> Dormitorios oscuros y sofisticados. Estilo glam contempor\\u00e1neo.<br><a href=\\\"https:\\/\\/www.pinterest.com\\/pin\\/950189221379169018\\/\\\">Ver modelo en Pinterest<\\/a><\\/p><p><br><\\/p>\",\"texto_size\":18,\"full\":false}},{\"type\":\"texto\",\"data\":{\"texto\":\"<h2>La pregunta que cambia todo<\\/h2><p>Antes de elegir tu mesita de noche, preg\\u00fantate: \\u00bfqu\\u00e9 sensaci\\u00f3n quiero al meterme en la cama?<\\/p><p>Si buscas calma, evita el desorden visual (elige cajones cerrados). Si necesitas est\\u00edmulo creativo, permite estantes abiertos con objetos que te inspiren.<\\/p><p>La mesita de noche no es un mueble. Es el \\u00faltimo paisaje que ves antes de dormir y el primero al despertar. Tr\\u00e1talo con la misma importancia que elegir\\u00edas para el cuadro principal de tu sal\\u00f3n.<\\/p><p><br><\\/p>\",\"texto_size\":18,\"full\":false}}]','blog/01KVBJ8VP8GWF1GCYJBR1RA15Q.webp',1,1,'2026-06-17 19:52:29','Hay 50 modelos de mesas de noche que hacen juego con tu dormitorio','Te comparto mi mejores 50 modelos de mesas de noche con enlaces directos a Pinterest. Créeme que terminarás eligiendo el mejor modelo de mesa de noche según tu estilo, espacio y presupuesto.','2026-06-17 19:52:29','2026-06-23 16:25:55'),(10,3,1,'No te rindas, esta es la mejor manera de quitar una mancha de tu sofá','no-te-rindas-esta-es-la-mejor-manera-de-quitar-una-mancha-de-tu-sofa',NULL,'¿Tu sofá tiene una mancha que consideras imposible? Cuéntame en los comentarios qué tipo de material es y qué la causó. A lo mejor puedo darte una indicación más específica para tu caso.','<p>Sin rodeos a lo que concierne a las manchas en tu sofá o juego de sala. Las manchas en el sofá son la pesadilla de cualquier dueño de casa, ya sea una salsa espesa, un derrame inesperado o ese truco de comida que se quedó ahí, todos hemos estado ahí. Pero aquí viene lo bueno, hay forma de salvar tu mueble sin tener que llamar al profesional ni gastar una fortuna en productos caros.</p><p>La clave está en actuar rápido y con los <a href=\"https://www.bletia.ec/tips/color-para-sofa-o-juego-de-sala\">métodos adecuados</a>. No todo depende del tipo de manchas, sino de cómo las enfrentes desde el principio. Un error común es frotar demasiado fuerte con cualquier cosa a mano. Eso solo empuja la mancha más adentro de las fibras y la empeora.</p><p>Lo que sí funciona son técnicas sencillas que puedes replicar en casa sin necesitar productos industriales. Vamos a hablar de eso, paso a paso, para que tu sofá luzca como nuevo antes de lo que imaginas.</p><h2>El primer golpe: nunca frotes, siempre presiona</h2><p>La mayoría de la gente tira el trapo directamente sobre la mancha y empieza a frotar. Eso es peor que no hacer nada. Al frotar, empujas el líquido hacia adentro y hacia los bordes del tapiz. En su lugar, toma un paño limpio, humedece ligeramente con agua o el producto indicado y presiona suavemente sobre la zona afectada.</p><p><a href=\"https://www.bletia.ec/blog/categoria/tips\">Imagina</a> que estás sacando una moneda de una tarjeta: no la arrancas con fuerza bruta, sino que la levantas con cuidado para no estropearla. Igual pasa con las manchas en el tapiz del sofá. Menos es más cuando se trata de limpiar sin dañar el material.</p><h2>Qué productos realmente funcionan y cuáles te joden más</h2><p>No todos los limpiadores sirven para todas las situaciones. Algunos son geniales, otros pueden ser un desastre si no los usas bien.</p><p>Aquí tienes una lista que vale la pena conocer:</p><table class=\"ej-table\"><tr><td><b>Tipo de mancha</b></td><td><b>Producto recomendado</b></td><td><b>¿Qué evitar?</b></td></tr><tr><td>Bebidas azucaradas</td><td>Agua fría o jabón neutro</td><td>Alcohol fuerte (daña el color)</td></tr><tr><td>Aceites y cremas</td><td>Bicarbonato y limón</td><td>Aceites o grasa (pegan más)</td></tr><tr><td>Salsas&nbsp;</td><td>Vinagre blanco diluido</td><td>Jabones fuertes o lejía</td></tr><tr><td>Tintas permanentes</td><td>Alcohol suave o tinte específico</td><td>Frota fuerte con trapo sucio</td></tr></table><p>Como ves, cada caso merece su solución. El uso de productos agresivos solo termina haciendo más daño que bien al tapiz del sofá.</p><h2>La técnica del \"empuje\" que nadie te enseñó en el hogar</h2><p>Aquí viene uno de los trucos menos conocidos pero más efectivos: empujar la mancha hacia fuera en lugar de limpiarla directamente. Para esto necesitas una aspiradora con boquilla de cerdas suaves, o incluso un cepillo duro para fregar suelos, y hacerlo así:</p><ol><li>Coloca algo absorbente (como papel periódico) debajo de la zona manchada</li><li>Usa el cepillo o la aspiradora para \"empujar\" la mancha hacia abajo</li><li>Cambia los trapos frecuentemente para no volver a mover la suciedad</li></ol><p>Sigue esta lógica y verás cómo las manchas más difíciles salen sin dejar rastro. La idea es que el líquido viaje hacia el relleno del <a href=\"https://www.bletia.ec/categoria/sofas\">sofá</a>, donde es mucho más fácil extraerlo después.</p><h2>Cuando nada parece funcionar: productos específicos y profesionales</h2><p>A veces, lo que tienes en casa no basta para ciertas manchas. En esos casos, hay dos opciones:</p><ul><li><b>Productos especializados:</b> Usa marcas conocidas que tienen fórmulas diseñadas para tapices delicados (un quita manchas).</li><li><b>Limpieza profesional:</b> si la mancha es persistente o de difícil eliminación, vale la pena contratar a alguien que sepa lo que hace.</li></ul><p>Lo importante no es gastar más dinero por nada, sino saber cuándo necesitas ayuda extra. Y claro, antes de aplicar cualquier producto nuevo en tu tapiz, haz siempre una prueba en un lugar invisible (como detrás de un cojín) para asegurarte de que no quita color o deja residuos.</p><h2>Consejos finales para mantener el aspecto original del sofá</h2><p>Limpia bien, pero también cuida lo que tienes:</p><ul><li>Vacía las fibras con aspiración semanal.</li><li>Usa fundas removibles y lávalas periódicamente.</li><li>Evita sol directo que decolora los tapices.</li><li>Aplica protectores textiles si es posible.</li></ul><p>Mantener tu sofá en buen estado empieza por hábitos simples. Menos suciedad acumulada, menos manchas a futuro. Es como cuidarse la salud: prevención antes de remedios milagrosos.</p>','{\"time\":1787108535447,\"blocks\":[{\"id\":\"H0vqWapZxi\",\"type\":\"paragraph\",\"data\":{\"text\":\"Sin rodeos a lo que concierne a las manchas en tu sof\\u00e1 o juego de sala. Las manchas en el sof\\u00e1 son la pesadilla de cualquier due\\u00f1o de casa, ya sea una salsa espesa, un derrame inesperado o ese truco de comida que se qued\\u00f3 ah\\u00ed, todos hemos estado ah\\u00ed. Pero aqu\\u00ed viene lo bueno, hay forma de salvar tu mueble sin tener que llamar al profesional ni gastar una fortuna en productos caros.\"}},{\"id\":\"Y-HVhUVk-x\",\"type\":\"paragraph\",\"data\":{\"text\":\"La clave est\\u00e1 en actuar r\\u00e1pido y con los <a href=\\\"https:\\/\\/www.bletia.ec\\/tips\\/color-para-sofa-o-juego-de-sala\\\">m\\u00e9todos adecuados<\\/a>. No todo depende del tipo de manchas, sino de c\\u00f3mo las enfrentes desde el principio. Un error com\\u00fan es frotar demasiado fuerte con cualquier cosa a mano. Eso solo empuja la mancha m\\u00e1s adentro de las fibras y la empeora.\"}},{\"id\":\"LHZvnrRMif\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lo que s\\u00ed funciona son t\\u00e9cnicas sencillas que puedes replicar en casa sin necesitar productos industriales. Vamos a hablar de eso, paso a paso, para que tu sof\\u00e1 luzca como nuevo antes de lo que imaginas.\"}},{\"id\":\"Oe7RefEa9I\",\"type\":\"header\",\"data\":{\"text\":\"El primer golpe: nunca frotes, siempre presiona\",\"level\":2}},{\"id\":\"Zzbk5S1Lyx\",\"type\":\"paragraph\",\"data\":{\"text\":\"La mayor\\u00eda de la gente tira el trapo directamente sobre la mancha y empieza a frotar. Eso es peor que no hacer nada. Al frotar, empujas el l\\u00edquido hacia adentro y hacia los bordes del tapiz. En su lugar, toma un pa\\u00f1o limpio, humedece ligeramente con agua o el producto indicado y presiona suavemente sobre la zona afectada.\"}},{\"id\":\"iCKMX1Pwhy\",\"type\":\"paragraph\",\"data\":{\"text\":\"<a href=\\\"https:\\/\\/www.bletia.ec\\/blog\\/categoria\\/tips\\\">Imagina<\\/a> que est\\u00e1s sacando una moneda de una tarjeta: no la arrancas con fuerza bruta, sino que la levantas con cuidado para no estropearla. Igual pasa con las manchas en el tapiz del sof\\u00e1. Menos es m\\u00e1s cuando se trata de limpiar sin da\\u00f1ar el material.\"}},{\"id\":\"CThzEYz8EL\",\"type\":\"header\",\"data\":{\"text\":\"Qu\\u00e9 productos realmente funcionan y cu\\u00e1les te joden m\\u00e1s\",\"level\":2}},{\"id\":\"y-4XNoZ7U_\",\"type\":\"paragraph\",\"data\":{\"text\":\"No todos los limpiadores sirven para todas las situaciones. Algunos son geniales, otros pueden ser un desastre si no los usas bien.\"}},{\"id\":\"bw6B0X9o7v\",\"type\":\"paragraph\",\"data\":{\"text\":\"Aqu\\u00ed tienes una lista que vale la pena conocer:\"}},{\"id\":\"LCP_5QxYbF\",\"type\":\"table\",\"data\":{\"withHeadings\":false,\"content\":[[\"<b>Tipo de mancha<\\/b>\",\"<b>Producto recomendado<\\/b>\",\"<b>\\u00bfQu\\u00e9 evitar?<\\/b>\"],[\"Bebidas azucaradas\",\"Agua fr\\u00eda o jab\\u00f3n neutro\",\"Alcohol fuerte (da\\u00f1a el color)\"],[\"Aceites y cremas\",\"Bicarbonato y lim\\u00f3n\",\"Aceites o grasa (pegan m\\u00e1s)\"],[\"Salsas&nbsp;\",\"Vinagre blanco diluido\",\"Jabones fuertes o lej\\u00eda\"],[\"Tintas permanentes\",\"Alcohol suave o tinte espec\\u00edfico\",\"Frota fuerte con trapo sucio\"]]}},{\"id\":\"T6gcCqTjBk\",\"type\":\"paragraph\",\"data\":{\"text\":\"Como ves, cada caso merece su soluci\\u00f3n. El uso de productos agresivos solo termina haciendo m\\u00e1s da\\u00f1o que bien al tapiz del sof\\u00e1.\"}},{\"id\":\"EdwkPN2Oai\",\"type\":\"header\",\"data\":{\"text\":\"La t\\u00e9cnica del \\\"empuje\\\" que nadie te ense\\u00f1\\u00f3 en el hogar\",\"level\":2}},{\"id\":\"GQ1d0Xq1HU\",\"type\":\"paragraph\",\"data\":{\"text\":\"Aqu\\u00ed viene uno de los trucos menos conocidos pero m\\u00e1s efectivos: empujar la mancha hacia fuera en lugar de limpiarla directamente. Para esto necesitas una aspiradora con boquilla de cerdas suaves, o incluso un cepillo duro para fregar suelos, y hacerlo as\\u00ed:\"}},{\"id\":\"hJMXl45Daq\",\"type\":\"list\",\"data\":{\"style\":\"ordered\",\"items\":[\"Coloca algo absorbente (como papel peri\\u00f3dico) debajo de la zona manchada\",\"Usa el cepillo o la aspiradora para \\\"empujar\\\" la mancha hacia abajo\",\"Cambia los trapos frecuentemente para no volver a mover la suciedad\"]}},{\"id\":\"RyG8Klw-z3\",\"type\":\"paragraph\",\"data\":{\"text\":\"Sigue esta l\\u00f3gica y ver\\u00e1s c\\u00f3mo las manchas m\\u00e1s dif\\u00edciles salen sin dejar rastro. La idea es que el l\\u00edquido viaje hacia el relleno del <a href=\\\"https:\\/\\/www.bletia.ec\\/categoria\\/sofas\\\">sof\\u00e1<\\/a>, donde es mucho m\\u00e1s f\\u00e1cil extraerlo despu\\u00e9s.\"}},{\"id\":\"vjHtW5T5wE\",\"type\":\"header\",\"data\":{\"text\":\"Cuando nada parece funcionar: productos espec\\u00edficos y profesionales\",\"level\":2}},{\"id\":\"cgnkPo4Bg_\",\"type\":\"paragraph\",\"data\":{\"text\":\"A veces, lo que tienes en casa no basta para ciertas manchas. En esos casos, hay dos opciones:\"}},{\"id\":\"HiF3UDPdZi\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"<b>Productos especializados:<\\/b> Usa marcas conocidas que tienen f\\u00f3rmulas dise\\u00f1adas para tapices delicados (un quita manchas).\",\"<b>Limpieza profesional:<\\/b> si la mancha es persistente o de dif\\u00edcil eliminaci\\u00f3n, vale la pena contratar a alguien que sepa lo que hace.\"]}},{\"id\":\"UQgyc-xq0g\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lo importante no es gastar m\\u00e1s dinero por nada, sino saber cu\\u00e1ndo necesitas ayuda extra. Y claro, antes de aplicar cualquier producto nuevo en tu tapiz, haz siempre una prueba en un lugar invisible (como detr\\u00e1s de un coj\\u00edn) para asegurarte de que no quita color o deja residuos.\"}},{\"id\":\"7Z7dcveiNL\",\"type\":\"header\",\"data\":{\"text\":\"Consejos finales para mantener el aspecto original del sof\\u00e1\",\"level\":2}},{\"id\":\"x_LI394XNC\",\"type\":\"paragraph\",\"data\":{\"text\":\"Limpia bien, pero tambi\\u00e9n cuida lo que tienes:\"}},{\"id\":\"H8CqF7Tyuv\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"Vac\\u00eda las fibras con aspiraci\\u00f3n semanal.\",\"Usa fundas removibles y l\\u00e1valas peri\\u00f3dicamente.\",\"Evita sol directo que decolora los tapices.\",\"Aplica protectores textiles si es posible.\"]}},{\"id\":\"YrDA6imsYw\",\"type\":\"paragraph\",\"data\":{\"text\":\"Mantener tu sof\\u00e1 en buen estado empieza por h\\u00e1bitos simples. Menos suciedad acumulada, menos manchas a futuro. Es como cuidarse la salud: prevenci\\u00f3n antes de remedios milagrosos.\"}}],\"version\":\"2.30.6\"}','[]','blog/01KVVD7JZSA13861P5S49EWAE0.webp',1,1,'2026-06-23 18:25:50','He probado y estas es la mejor manera de quitar manchas de un sofá','Elimina cualquier mancha de tu sofá con este método probado. Identifica el material y el tipo de mancha para actuar correctamente. No te rindas.','2026-06-23 18:25:50','2026-08-19 03:02:15'),(11,3,1,'Cómo conservar tu mueble de madera para que dure generaciones','como-conservar-tu-mueble-de-madera-para-que-dure-generaciones',NULL,'Descubre las mejores formas de conservar un mueble de madera con consejos prácticos y fáciles. Aprende a proteger la madera, evitar grietas y darle una vida larga.','<p>Tienes ese mueble en la sala o en el comedor, con un diseño bonito y una historia que parece contar. El problema es que la madera no está inmune al paso del tiempo: se agrieta, cambia de color, acumula manchas. No es cosa de suerte, pero sí de saber cómo cuidarlo día a día.</p><p>Aquí te va todo lo que necesitas para mantenerlo en perfecto estado sin complicaciones extrañas.</p><h2>Por qué la madera necesita cuidados constantes</h2><p>La madera reacciona a lo que ocurre a su alrededor. Cambios de temperatura y humedad son los enemigos más frecuentes. Si vives en un clima seco o muy húmedo, esos efectos se notan antes: las juntas se abren un poco o el barniz pierde brillo.</p><p>Además, la luz solar directa hace que algunos <a href=\"https://www.bletia.ec/tips/no-te-rindas-esta-es-la-mejor-manera-de-quitar-una-mancha-de-tu-sofa\">tonos se oscurezcan con el tiempo</a>, especialmente en muebles claros o naturales. No es grave, pero sí visible a simple vista después de varias semanas.</p><p>El polvo también juega un rol. Si no limpias bien, acumula grasas y partículas que empiezan a dañar el acabado superficial.</p><h2>Limpieza básica sin riesgos</h2><p>Lo primero es usar productos suaves. Nada de limpiadores agresivos ni alcohol. El agua tibia mezclada con un poco de jabón neutro funciona perfecto para una limpieza general. Usa un paño suave, nunca uno áspero que pueda rayar la superficie.</p><p>Seca inmediatamente después de limpiar. La humedad residual puede penetrar en la madera y causar problemas a largo plazo.</p><h3>Tabla: Productos seguros e inseguros para la madera</h3><table class=\"ej-table\"><tr><td><b>Producto</b></td><td><b>¿Sirve?</b></td><td><b>Comentario</b></td></tr><tr><td>Jabón neutro</td><td>Sí</td><td>Lo ideal para uso diario</td></tr><tr><td>Alcohol</td><td>No</td><td>Quita el barniz y seca la madera</td></tr><tr><td>Limpiador con cloro</td><td>No</td><td>Muy agresivo, deja manchas blancas</td></tr><tr><td>Aceite de linaza</td><td>Sí (con moderación)</td><td>Sirve para renovar acabados secos</td></tr><tr><td>Vinagre</td><td>Con cuidado</td><td>Puede dejar residuos ácidos si no se enjuaga</td></tr></table><h2>Humedad y temperatura: el equilibrio ideal</h2><p>Mantener una humedad entre 40% y 60% ayuda mucho. Si vives en un lugar seco, puedes usar un humidificador o simplemente dejar un vaso de agua cerca del mueble. En épocas lluviosas, vigila que no quede cerca de ventanas o puertas abiertas.</p><p>La temperatura tampoco debe subir ni bajar demasiado rápido. Evita colocarlo junto a radiadores, estufas o calefactores directos. El calor concentrado provoca agrietamientos en menos tiempo del esperado.</p><h2>Protección contra la luz y el desgaste diario</h2><p>Si tienes <a href=\"https://www.bletia.ec/shop\">muebles</a> cerca de ventanas, considera usar cortinas o persianas que filtren parte de la luz solar. La exposición directa constante acelera el proceso de oscurecimiento, especialmente en maderas claras como el roble blanco o el arce.</p><p>Por lo demás, evita poner objetos pesados encima sin control. No es solo estética: cada objeto que apoyas deja su impronta, y si no están distribuidos bien, puedes deformar ligeramente la estructura.</p><h2>Trucos caseros para renovar el brillo</h2><p>Con el tiempo, hasta los muebles nuevos pierden un poco de esa frescura inicial. Pero con unos toques sencillos se recupera todo.</p><p>Una mezcla suave de aceite de linaza con un poco de cera natural ayuda a hidratar y dar vida al acabado. Aplica con un paño limpio en movimientos circulares y deja actuar media hora antes de volver a pulir ligeramente.</p><p>Si tienes mueble antiguo o barniz desgastado, puedes aplicar una capa fina de cera después de limpiar bien la superficie. La cera sella la madera y refuerza el brillo sin cambiar su color natural.</p><h2>Lista rápida: Rutina mensual para mantener tu mueble impecable</h2><ol><li>Limpia con paño húmedo y jabón neutro</li><li>Seca bien con otro paño limpio</li><li>Aplica cera o aceite según necesidad del acabado</li><li>Verifica que no haya humedad excesiva cerca del mueble</li><li>Ajusta la posición de objetos pesados para evitar presión desequilibrada</li></ol><h2>¿Cuándo llamar a un especialista?</h2><p>Si notas grietas profundas, cambios drásticos en el color o maderas que se separan con dificultad, es momento de buscar ayuda profesional. Algunos muebles requieren reparación estructurales más avanzadas que no se resuelven con cuidados básicos.</p><p>Un restaurador de antigüedades puede evaluar si vale la pena arreglarlo o si conviene dejarlo como está. <a href=\"https://upgrade.bletia.ec/producto/marco-pino-a5\" target=\"_blank\">Cada pieza tiene su valor</a> y a veces lo mejor es conservarla sin modificar demasiado.</p><h2>Consejos adicionales para extender la vida útil</h2><p>Algunos detalles pequeños marcan la diferencia a largo plazo:</p><ul><li>No apoyes siempre las mismas cosas en un lugar concreto; rota ligeramente el peso con el tiempo</li><li>Usa alfombras o tapetes debajo de las patas del mueble para evitar rascaduras en el suelo y distribuir mejor la presión</li><li>Revisa periódicamente los tornillos y uniones, <a href=\"https://www.bletia.ec/categoria/sofas\">especialmente en muebles</a> antiguos</li></ul><p>Conservar un mueble de madera no es cosa de complicaciones. Se trata de pequeños cuidados diarios que suman resultados a largo plazo. Limpieza constante, control de humedad y temperatura adecuada, protección contra la luz y toques de renueva ocasional son lo esencial.</p><p>Tu mueble te durará toda la vida si le das esta atención básica. Y además, se verá siempre como el primer día, o incluso mejor que antes.</p>','{\"time\":1787955603119,\"blocks\":[{\"id\":\"w2sjd2T627\",\"type\":\"paragraph\",\"data\":{\"text\":\"Tienes ese mueble en la sala o en el comedor, con un dise\\u00f1o bonito y una historia que parece contar. El problema es que la madera no est\\u00e1 inmune al paso del tiempo: se agrieta, cambia de color, acumula manchas. No es cosa de suerte, pero s\\u00ed de saber c\\u00f3mo cuidarlo d\\u00eda a d\\u00eda.\"}},{\"id\":\"aLmxJI2iCz\",\"type\":\"paragraph\",\"data\":{\"text\":\"Aqu\\u00ed te va todo lo que necesitas para mantenerlo en perfecto estado sin complicaciones extra\\u00f1as.\"}},{\"id\":\"FtgGOS5h4V\",\"type\":\"header\",\"data\":{\"text\":\"Por qu\\u00e9 la madera necesita cuidados constantes\",\"level\":2}},{\"id\":\"7TlPNTvpzH\",\"type\":\"paragraph\",\"data\":{\"text\":\"La madera reacciona a lo que ocurre a su alrededor. Cambios de temperatura y humedad son los enemigos m\\u00e1s frecuentes. Si vives en un clima seco o muy h\\u00famedo, esos efectos se notan antes: las juntas se abren un poco o el barniz pierde brillo.\"}},{\"id\":\"IeaVPwtxku\",\"type\":\"paragraph\",\"data\":{\"text\":\"Adem\\u00e1s, la luz solar directa hace que algunos <a href=\\\"https:\\/\\/www.bletia.ec\\/tips\\/no-te-rindas-esta-es-la-mejor-manera-de-quitar-una-mancha-de-tu-sofa\\\">tonos se oscurezcan con el tiempo<\\/a>, especialmente en muebles claros o naturales. No es grave, pero s\\u00ed visible a simple vista despu\\u00e9s de varias semanas.\"}},{\"id\":\"mbRC1v6JS7\",\"type\":\"paragraph\",\"data\":{\"text\":\"El polvo tambi\\u00e9n juega un rol. Si no limpias bien, acumula grasas y part\\u00edculas que empiezan a da\\u00f1ar el acabado superficial.\"}},{\"id\":\"02wPsnEjP0\",\"type\":\"header\",\"data\":{\"text\":\"Limpieza b\\u00e1sica sin riesgos\",\"level\":2}},{\"id\":\"L98R1ABNi6\",\"type\":\"paragraph\",\"data\":{\"text\":\"Lo primero es usar productos suaves. Nada de limpiadores agresivos ni alcohol. El agua tibia mezclada con un poco de jab\\u00f3n neutro funciona perfecto para una limpieza general. Usa un pa\\u00f1o suave, nunca uno \\u00e1spero que pueda rayar la superficie.\"}},{\"id\":\"srdQvEwOw1\",\"type\":\"paragraph\",\"data\":{\"text\":\"Seca inmediatamente despu\\u00e9s de limpiar. La humedad residual puede penetrar en la madera y causar problemas a largo plazo.\"}},{\"id\":\"v3kSkHNzyz\",\"type\":\"header\",\"data\":{\"text\":\"Tabla: Productos seguros e inseguros para la madera\",\"level\":3}},{\"id\":\"ykLJ9ybfWO\",\"type\":\"table\",\"data\":{\"withHeadings\":false,\"content\":[[\"<b>Producto<\\/b>\",\"<b>\\u00bfSirve?<\\/b>\",\"<b>Comentario<\\/b>\"],[\"Jab\\u00f3n neutro\",\"S\\u00ed\",\"Lo ideal para uso diario\"],[\"Alcohol\",\"No\",\"Quita el barniz y seca la madera\"],[\"Limpiador con cloro\",\"No\",\"Muy agresivo, deja manchas blancas\"],[\"Aceite de linaza\",\"S\\u00ed (con moderaci\\u00f3n)\",\"Sirve para renovar acabados secos\"],[\"Vinagre\",\"Con cuidado\",\"Puede dejar residuos \\u00e1cidos si no se enjuaga\"]]}},{\"id\":\"BsiyQxk2qn\",\"type\":\"header\",\"data\":{\"text\":\"Humedad y temperatura: el equilibrio ideal\",\"level\":2}},{\"id\":\"TGIftx-sja\",\"type\":\"paragraph\",\"data\":{\"text\":\"Mantener una humedad entre 40% y 60% ayuda mucho. Si vives en un lugar seco, puedes usar un humidificador o simplemente dejar un vaso de agua cerca del mueble. En \\u00e9pocas lluviosas, vigila que no quede cerca de ventanas o puertas abiertas.\"}},{\"id\":\"8Oc3nvQV6k\",\"type\":\"paragraph\",\"data\":{\"text\":\"La temperatura tampoco debe subir ni bajar demasiado r\\u00e1pido. Evita colocarlo junto a radiadores, estufas o calefactores directos. El calor concentrado provoca agrietamientos en menos tiempo del esperado.\"}},{\"id\":\"UqQxMyw9hu\",\"type\":\"header\",\"data\":{\"text\":\"Protecci\\u00f3n contra la luz y el desgaste diario\",\"level\":2}},{\"id\":\"rtlbc3HHUK\",\"type\":\"paragraph\",\"data\":{\"text\":\"Si tienes <a href=\\\"https:\\/\\/www.bletia.ec\\/shop\\\">muebles<\\/a> cerca de ventanas, considera usar cortinas o persianas que filtren parte de la luz solar. La exposici\\u00f3n directa constante acelera el proceso de oscurecimiento, especialmente en maderas claras como el roble blanco o el arce.\"}},{\"id\":\"KqvFlYYRQX\",\"type\":\"paragraph\",\"data\":{\"text\":\"Por lo dem\\u00e1s, evita poner objetos pesados encima sin control. No es solo est\\u00e9tica: cada objeto que apoyas deja su impronta, y si no est\\u00e1n distribuidos bien, puedes deformar ligeramente la estructura.\"}},{\"id\":\"bGPpV8LPL1\",\"type\":\"header\",\"data\":{\"text\":\"Trucos caseros para renovar el brillo\",\"level\":2}},{\"id\":\"bji_-BxfsH\",\"type\":\"paragraph\",\"data\":{\"text\":\"Con el tiempo, hasta los muebles nuevos pierden un poco de esa frescura inicial. Pero con unos toques sencillos se recupera todo.\"}},{\"id\":\"QaBxmAlQW5\",\"type\":\"paragraph\",\"data\":{\"text\":\"Una mezcla suave de aceite de linaza con un poco de cera natural ayuda a hidratar y dar vida al acabado. Aplica con un pa\\u00f1o limpio en movimientos circulares y deja actuar media hora antes de volver a pulir ligeramente.\"}},{\"id\":\"aykQI2LkcF\",\"type\":\"paragraph\",\"data\":{\"text\":\"Si tienes mueble antiguo o barniz desgastado, puedes aplicar una capa fina de cera despu\\u00e9s de limpiar bien la superficie. La cera sella la madera y refuerza el brillo sin cambiar su color natural.\"}},{\"id\":\"T6RBsJFj5U\",\"type\":\"header\",\"data\":{\"text\":\"Lista r\\u00e1pida: Rutina mensual para mantener tu mueble impecable\",\"level\":2}},{\"id\":\"DWllRnAKCO\",\"type\":\"list\",\"data\":{\"style\":\"ordered\",\"items\":[\"Limpia con pa\\u00f1o h\\u00famedo y jab\\u00f3n neutro\",\"Seca bien con otro pa\\u00f1o limpio\",\"Aplica cera o aceite seg\\u00fan necesidad del acabado\",\"Verifica que no haya humedad excesiva cerca del mueble\",\"Ajusta la posici\\u00f3n de objetos pesados para evitar presi\\u00f3n desequilibrada\"]}},{\"id\":\"-D0z7KRfG2\",\"type\":\"header\",\"data\":{\"text\":\"\\u00bfCu\\u00e1ndo llamar a un especialista?\",\"level\":2}},{\"id\":\"1M2RMh3aQK\",\"type\":\"paragraph\",\"data\":{\"text\":\"Si notas grietas profundas, cambios dr\\u00e1sticos en el color o maderas que se separan con dificultad, es momento de buscar ayuda profesional. Algunos muebles requieren reparaci\\u00f3n estructurales m\\u00e1s avanzadas que no se resuelven con cuidados b\\u00e1sicos.\"}},{\"id\":\"XJtpyT1ecL\",\"type\":\"paragraph\",\"data\":{\"text\":\"Un restaurador de antig\\u00fcedades puede evaluar si vale la pena arreglarlo o si conviene dejarlo como est\\u00e1. <a href=\\\"https:\\/\\/upgrade.bletia.ec\\/producto\\/marco-pino-a5\\\" target=\\\"_blank\\\">Cada pieza tiene su valor<\\/a> y a veces lo mejor es conservarla sin modificar demasiado.\"}},{\"id\":\"GRi3QWVJF3\",\"type\":\"header\",\"data\":{\"text\":\"Consejos adicionales para extender la vida \\u00fatil\",\"level\":2}},{\"id\":\"hsRLPHJfJL\",\"type\":\"paragraph\",\"data\":{\"text\":\"Algunos detalles peque\\u00f1os marcan la diferencia a largo plazo:\"}},{\"id\":\"i5YPTfSAf4\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"No apoyes siempre las mismas cosas en un lugar concreto; rota ligeramente el peso con el tiempo\",\"Usa alfombras o tapetes debajo de las patas del mueble para evitar rascaduras en el suelo y distribuir mejor la presi\\u00f3n\",\"Revisa peri\\u00f3dicamente los tornillos y uniones, <a href=\\\"https:\\/\\/www.bletia.ec\\/categoria\\/sofas\\\">especialmente en muebles<\\/a> antiguos\"]}},{\"id\":\"5Swodj6_cQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"Conservar un mueble de madera no es cosa de complicaciones. Se trata de peque\\u00f1os cuidados diarios que suman resultados a largo plazo. Limpieza constante, control de humedad y temperatura adecuada, protecci\\u00f3n contra la luz y toques de renueva ocasional son lo esencial.\"}},{\"id\":\"Dj1-nK3Om7\",\"type\":\"paragraph\",\"data\":{\"text\":\"Tu mueble te durar\\u00e1 toda la vida si le das esta atenci\\u00f3n b\\u00e1sica. Y adem\\u00e1s, se ver\\u00e1 siempre como el primer d\\u00eda, o incluso mejor que antes.\"}}],\"version\":\"2.30.6\"}','[]','blog/29d20b89-8373-4d61-a704-6bd6b68f1c89.webp',1,1,'2026-08-19 02:06:32','Consejos para conservar un mueble de madera sin estréss','Aprender a cuidar la madera de tus muebles es vital. Te dejo unos trucos sencillos que evitan el paso del tiempo y mantienen todo impecable.','2026-08-19 02:06:32','2026-08-28 22:20:02');
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asiento_lineas`
--

DROP TABLE IF EXISTS `asiento_lineas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asiento_lineas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `asiento_id` bigint unsigned NOT NULL,
  `cuenta_id` bigint unsigned NOT NULL,
  `debe` decimal(14,2) NOT NULL DEFAULT '0.00',
  `haber` decimal(14,2) NOT NULL DEFAULT '0.00',
  `detalle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `asiento_lineas_asiento_id_foreign` (`asiento_id`),
  KEY `asiento_lineas_cuenta_id_index` (`cuenta_id`),
  CONSTRAINT `asiento_lineas_asiento_id_foreign` FOREIGN KEY (`asiento_id`) REFERENCES `asientos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `asiento_lineas_cuenta_id_foreign` FOREIGN KEY (`cuenta_id`) REFERENCES `cuentas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asiento_lineas`
--

LOCK TABLES `asiento_lineas` WRITE;
/*!40000 ALTER TABLE `asiento_lineas` DISABLE KEYS */;
/*!40000 ALTER TABLE `asiento_lineas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asientos`
--

DROP TABLE IF EXISTS `asientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asientos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `numero` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` date NOT NULL,
  `glosa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `origen` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `origen_tipo` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `origen_id` bigint unsigned DEFAULT NULL,
  `debe` decimal(14,2) NOT NULL DEFAULT '0.00',
  `haber` decimal(14,2) NOT NULL DEFAULT '0.00',
  `estado` enum('registrado','anulado') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'registrado',
  `reversa_id` bigint unsigned DEFAULT NULL,
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `asientos_fecha_estado_index` (`fecha`,`estado`),
  KEY `asientos_origen_tipo_origen_id_index` (`origen_tipo`,`origen_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asientos`
--

LOCK TABLES `asientos` WRITE;
/*!40000 ALTER TABLE `asientos` DISABLE KEYS */;
/*!40000 ALTER TABLE `asientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atributo_opciones`
--

DROP TABLE IF EXISTS `atributo_opciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atributo_opciones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `atributo_id` bigint unsigned NOT NULL,
  `valor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `atributo_opciones_atributo_id_foreign` (`atributo_id`),
  CONSTRAINT `atributo_opciones_atributo_id_foreign` FOREIGN KEY (`atributo_id`) REFERENCES `atributos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atributo_opciones`
--

LOCK TABLES `atributo_opciones` WRITE;
/*!40000 ALTER TABLE `atributo_opciones` DISABLE KEYS */;
INSERT INTO `atributo_opciones` VALUES (1,1,'Beige','#edebd6',NULL,1,'2026-06-07 06:10:40','2026-06-07 19:19:22'),(2,1,'Oliva','#a9b875',NULL,2,'2026-06-07 06:10:40','2026-06-07 06:10:40'),(3,1,'Gris','#bfcbcf',NULL,3,'2026-06-07 06:10:40','2026-06-07 06:10:40'),(4,2,'Left',NULL,'atributos/01M15VBYM97Q0ZT0PDK2FR13FA.webp',1,'2026-06-07 06:11:06','2026-08-29 04:10:12'),(5,2,'Right',NULL,'atributos/01M15VBYMA6PFY5KXQVM53JAM3.webp',2,'2026-06-07 06:11:06','2026-08-29 04:10:12'),(6,3,'Wengué',NULL,'atributos/01M15V9SRQRK67MM2TWPVNH3PK.jpg',1,'2026-06-07 06:52:28','2026-08-29 04:09:01'),(9,3,'Cedro',NULL,'atributos/01M15V9SRREMAG3ZGMWSVENTVS.jpg',2,'2026-06-07 15:12:03','2026-08-29 04:09:01'),(10,3,'Champagne',NULL,'atributos/01M15V9SRS65YR949YRX14VBYP.jpg',3,'2026-06-07 15:12:03','2026-08-29 04:09:02'),(11,1,'Marfil','#fcfcda',NULL,4,'2026-06-07 19:19:22','2026-06-07 19:19:22'),(12,1,'Verde Claro','#dbeda5',NULL,5,'2026-06-12 02:33:28','2026-06-12 02:33:28'),(13,1,'Negro','#4b565c',NULL,6,'2026-06-16 02:22:54','2026-06-16 02:22:54'),(14,1,'Oliva Obscuro','#78804f',NULL,7,'2026-06-16 02:22:54','2026-06-16 02:26:50'),(15,3,'Nogal',NULL,'atributos/01M15V9SRS65YR949YRX14VBYQ.webp',4,'2026-06-18 03:06:59','2026-08-29 04:09:02'),(16,3,'Caoba',NULL,'atributos/01M15V9SRTCNEPSFHCA487TR1B.jpg',6,'2026-06-18 03:42:56','2026-08-29 04:09:02'),(17,3,'Nogal Claro',NULL,'atributos/01M15V9SRS65YR949YRX14VBYR.jpg',5,'2026-06-19 02:15:09','2026-08-29 04:09:02');
/*!40000 ALTER TABLE `atributo_opciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atributos`
--

DROP TABLE IF EXISTS `atributos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atributos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'color',
  `orden` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atributos`
--

LOCK TABLES `atributos` WRITE;
/*!40000 ALTER TABLE `atributos` DISABLE KEYS */;
INSERT INTO `atributos` VALUES (1,'Tapiz','color',0,'2026-06-07 06:10:40','2026-06-07 06:10:40'),(2,'Lado','texto',0,'2026-06-07 06:11:06','2026-06-07 06:11:06'),(3,'Madera','imagen',0,'2026-06-07 06:52:28','2026-06-07 17:00:09');
/*!40000 ALTER TABLE `atributos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `automatizacion_runs`
--

DROP TABLE IF EXISTS `automatizacion_runs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `automatizacion_runs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `automatizacion_id` bigint unsigned NOT NULL,
  `objeto_id` bigint unsigned NOT NULL,
  `objeto_tipo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `campania_id` bigint unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_run` (`automatizacion_id`,`objeto_id`,`objeto_tipo`),
  KEY `automatizacion_runs_automatizacion_id_index` (`automatizacion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `automatizacion_runs`
--

LOCK TABLES `automatizacion_runs` WRITE;
/*!40000 ALTER TABLE `automatizacion_runs` DISABLE KEYS */;
/*!40000 ALTER TABLE `automatizacion_runs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `automatizaciones`
--

DROP TABLE IF EXISTS `automatizaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `automatizaciones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'activa',
  `lista_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `asunto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preheader` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contenido_json` json DEFAULT NULL,
  `cuerpo_html` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `opciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `last_run_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `automatizaciones_tipo_estado_index` (`tipo`,`estado`),
  CONSTRAINT `automatizaciones_chk_1` CHECK (json_valid(`lista_ids`)),
  CONSTRAINT `automatizaciones_chk_2` CHECK (json_valid(`opciones`))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `automatizaciones`
--

LOCK TABLES `automatizaciones` WRITE;
/*!40000 ALTER TABLE `automatizaciones` DISABLE KEYS */;
INSERT INTO `automatizaciones` VALUES (1,'Happy','birthday','activa','[2,3,5]','Feliz cumpleaños {first_name}','Celebramos tu día','{\"time\": 1785466497611, \"blocks\": [{\"id\": \"XxeeTWnUkw\", \"data\": {\"text\": \"Hola {first_name},\"}, \"type\": \"paragraph\"}, {\"id\": \"fGud0Ows6V\", \"data\": {\"text\": \"¡Feliz vuelta al sol!\"}, \"type\": \"paragraph\"}, {\"id\": \"O3QDb_n5u3\", \"data\": {\"text\": \"Un año más sabio y un año más apoyando este canal.\"}, \"type\": \"paragraph\"}, {\"id\": \"NkYFo09S0c\", \"data\": {\"text\": \"Gracias por estar siempre ahí, ¡disfruta mucho tu día!\"}, \"type\": \"paragraph\"}], \"version\": \"2.30.6\"}','<p>Hola {first_name},</p><p>¡Feliz vuelta al sol!</p><p>Un año más sabio y un año más apoyando este canal.</p><p>Gracias por estar siempre ahí, ¡disfruta mucho tu día!</p>','{\"dias\":90}','2026-07-24 08:00:02','2026-06-23 15:24:34','2026-07-30 21:54:58'),(2,'Post','post_publish','activa','[2]','{post_title}',NULL,'{\"time\": 1785464469978, \"blocks\": [], \"version\": \"2.30.6\"}','','{\"dias\":90}',NULL,'2026-06-23 16:43:01','2026-07-30 21:21:10'),(3,'7Post','digest_weekly','activa','[2]','Esto ha pasado en estos días',NULL,'{\"time\": 1785464453130, \"blocks\": [], \"version\": \"2.30.6\"}','','{\"dias\":90}',NULL,'2026-06-23 16:44:02','2026-07-30 21:20:53');
/*!40000 ALTER TABLE `automatizaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avisos_stock`
--

DROP TABLE IF EXISTS `avisos_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avisos_stock` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` bigint unsigned NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `notificado` tinyint(1) NOT NULL DEFAULT '0',
  `notificado_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `avisos_stock_producto_id_email_unique` (`producto_id`,`email`),
  KEY `avisos_stock_producto_id_index` (`producto_id`),
  KEY `avisos_stock_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avisos_stock`
--

LOCK TABLES `avisos_stock` WRITE;
/*!40000 ALTER TABLE `avisos_stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `avisos_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bitacora` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `user_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rol` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `evento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `modulo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registro_id` bigint unsigned DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bitacora_modulo_created_at_index` (`modulo`,`created_at`),
  KEY `bitacora_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=217 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacora`
--

LOCK TABLES `bitacora` WRITE;
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
INSERT INTO `bitacora` VALUES (1,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:2009:4f00:1dde:4793:a1c9:3337','2026-07-30 10:56:30'),(2,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:2009:4f00:1dde:4793:a1c9:3337','2026-07-30 10:56:30'),(3,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:d532:47f4:88a2:2d19','2026-07-30 20:40:49'),(4,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:d532:47f4:88a2:2d19','2026-07-30 20:40:50'),(5,NULL,NULL,NULL,'creó','Cliente',1,'kirytyrruj','2602:fa5d:1::ed','2026-08-01 12:09:12'),(6,NULL,NULL,NULL,'creó','Cliente',2,'ehypqvkkds','2602:fa5d::53','2026-08-01 12:09:44'),(7,NULL,NULL,NULL,'creó','Cliente',3,'xxkuewvtiz','198.12.69.94','2026-08-01 12:10:22'),(8,NULL,NULL,NULL,'creó','Cliente',4,'ldtmzjwtmp','107.173.160.167','2026-08-01 15:57:20'),(9,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:8135:5b7e:60a4:a649','2026-08-02 01:57:09'),(10,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:8135:5b7e:60a4:a649','2026-08-02 01:57:09'),(11,NULL,NULL,NULL,'creó','Cliente',5,'rmevdrspiz','2602:fa5d::37',NULL),(12,NULL,NULL,NULL,'creó','Cliente',6,'phujppwokl','2602:fa5d::37',NULL),(13,NULL,NULL,NULL,'creó','Cliente',7,'rvdvmumulh','2602:fa5d::30',NULL),(14,NULL,NULL,NULL,'creó','Cliente',8,'nzhikggjul','2602:fa5d::8b',NULL),(15,NULL,NULL,NULL,'creó','Cliente',9,'zipfkyhsst','2602:fa5d::8c',NULL),(16,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:8135:5b7e:60a4:a649',NULL),(17,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:8135:5b7e:60a4:a649',NULL),(18,NULL,NULL,NULL,'creó','Cliente',10,'ggrkudzekx','2602:fa5d::8c',NULL),(19,NULL,NULL,NULL,'creó','Cliente',11,'ykwovnmllv','2602:fa5d::a9',NULL),(20,NULL,NULL,NULL,'creó','Cliente',12,'kkmokzwpfn','2602:fa5d:1::ed',NULL),(21,NULL,NULL,NULL,'creó','Cliente',13,'lugeligvlo','2602:fa5d::30',NULL),(22,NULL,NULL,NULL,'creó','Cliente',14,'ouiikkuonk','198.12.69.94',NULL),(23,NULL,NULL,NULL,'creó','Cliente',15,'tfzlxoshoi','2602:fa5d:1::ed',NULL),(24,NULL,NULL,NULL,'creó','Cliente',16,'pvphepwint','2602:fa5d::89',NULL),(25,NULL,NULL,NULL,'creó','Cliente',17,'yexkgvkpih','2602:fa5d::89',NULL),(26,NULL,NULL,NULL,'creó','Cliente',18,'ornrwffxzn','2602:fa5d::8c',NULL),(27,NULL,NULL,NULL,'creó','Cliente',19,'kzdlqwzsis','2602:fa5d::8b',NULL),(28,NULL,NULL,NULL,'creó','Cliente',20,'lqfnjrrnmi','2602:fa5d:1::ed',NULL),(29,NULL,NULL,NULL,'creó','Cliente',21,'wdxkrqhevv','192.210.150.199',NULL),(30,NULL,NULL,NULL,'creó','Cliente',22,'fpiveiouxh','198.46.154.21',NULL),(31,NULL,NULL,NULL,'creó','Cliente',23,'eriesxdugx','192.210.150.198',NULL),(32,NULL,NULL,NULL,'creó','Cliente',24,'vfmuponrgu','2602:fa5d::c1',NULL),(33,NULL,NULL,NULL,'creó','Cliente',25,'nyprgzhklw','2602:fa5d::e5',NULL),(34,NULL,NULL,NULL,'creó','Cliente',26,'fznddspind','2602:fa5d::8b',NULL),(35,NULL,NULL,NULL,'creó','Cliente',27,'jdnedhxxhh','2602:fa5d::a9',NULL),(36,NULL,NULL,NULL,'creó','Cliente',28,'jkiwlvrwug','2602:fa5d::30',NULL),(37,NULL,NULL,NULL,'creó','Cliente',29,'uhjjwlkvts','2602:fa5d::52',NULL),(38,NULL,NULL,NULL,'creó','Cliente',30,'qmridipzem','2602:fa5d:1::ed',NULL),(39,NULL,NULL,NULL,'creó','Cliente',31,'qjunmlorgk','2602:fa5d:1::ed',NULL),(40,NULL,NULL,NULL,'creó','Cliente',32,'xpznlgiekx','2602:fa5d:1::ed',NULL),(41,NULL,NULL,NULL,'creó','Cliente',33,'vnnjeszfno','192.210.150.198',NULL),(42,NULL,NULL,NULL,'creó','Cliente',34,'uriviqfmqr','2602:fa5d::37',NULL),(43,NULL,NULL,NULL,'creó','Cliente',35,'llqgjkfvmr','2602:fa5d::52',NULL),(44,NULL,NULL,NULL,'creó','Cliente',36,'mgydpqdndk','2602:fa5d::a9',NULL),(45,NULL,NULL,NULL,'creó','Cliente',37,'fqkmeudexy','192.210.150.199',NULL),(46,NULL,NULL,NULL,'creó','Cliente',38,'sxftsupnzh','198.46.154.22',NULL),(47,NULL,NULL,NULL,'creó','Cliente',39,'isgfmxhztn','2602:fa5d:1::ed',NULL),(48,NULL,NULL,NULL,'creó','Cliente',40,'odhjdoedwy','2602:fa5d::8b',NULL),(49,NULL,NULL,NULL,'creó','Cliente',41,'rfnsntywfd','198.46.154.21',NULL),(50,NULL,NULL,NULL,'creó','Cliente',42,'ugsntydvzk','2602:fa5d::ba',NULL),(51,NULL,NULL,NULL,'creó','Cliente',43,'dktpqrormh','2602:fa5d::e5',NULL),(52,NULL,NULL,NULL,'creó','Cliente',44,'wyhpoxfrho','2602:fa5d::e5',NULL),(53,NULL,NULL,NULL,'creó','Cliente',45,'zoeyzeuotf','192.210.150.198',NULL),(54,NULL,NULL,NULL,'creó','Cliente',46,'htpuhgrser','2602:fa5d::52',NULL),(55,NULL,NULL,NULL,'creó','Cliente',47,'rmzfohxsjn','2602:fa5d::a9',NULL),(56,NULL,NULL,NULL,'creó','Cliente',48,'pdiuejmwzd','2602:fa5d::30',NULL),(57,NULL,NULL,NULL,'creó','Cliente',49,'npivknexiu','198.46.154.22',NULL),(58,NULL,NULL,NULL,'creó','Cliente',50,'vrlhqfmnvh','2602:fa5d::37',NULL),(59,NULL,NULL,NULL,'creó','Cliente',51,'hvxqjfpewm','2602:fa5d::52',NULL),(60,NULL,NULL,NULL,'creó','Cliente',52,'lldnlkditu','2602:fa5d::30',NULL),(61,NULL,NULL,NULL,'creó','Cliente',53,'glzgngmoxe','198.12.69.94',NULL),(62,NULL,NULL,NULL,'creó','Cliente',54,'nfiejugmwk','2602:fa5d::52',NULL),(63,NULL,NULL,NULL,'creó','Cliente',55,'yqtlntthit','2602:fa5d::c1',NULL),(64,NULL,NULL,NULL,'creó','Cliente',56,'iyktqtsyol','192.210.150.199',NULL),(65,NULL,NULL,NULL,'creó','Cliente',57,'oiodnkejfn','2602:fa5d::90',NULL),(66,NULL,NULL,NULL,'creó','Cliente',58,'wvmhemkyqo','2602:fa5d::8b',NULL),(67,NULL,NULL,NULL,'creó','Cliente',59,'nyhoxndilp','192.210.150.199',NULL),(68,NULL,NULL,NULL,'creó','Cliente',60,'gvefxpeono','2602:fa5d::30',NULL),(69,NULL,NULL,NULL,'creó','Cliente',61,'guvvtfpdfz','2602:fa5d::52',NULL),(70,NULL,NULL,NULL,'creó','Cliente',62,'glrtksuikv','198.46.154.22',NULL),(71,NULL,NULL,NULL,'creó','Cliente',63,'fmtowvdkvt','192.210.150.196',NULL),(72,NULL,NULL,NULL,'creó','Cliente',64,'uemwljiqys','198.46.154.21',NULL),(73,NULL,NULL,NULL,'creó','Cliente',65,'iqotqrxinj','2602:fa5d:1::ed',NULL),(74,NULL,NULL,NULL,'creó','Cliente',66,'dnieywteiq','2602:fa5d::53',NULL),(75,NULL,NULL,NULL,'creó','Cliente',67,'zeyyitshjj','192.210.150.199',NULL),(76,NULL,NULL,NULL,'creó','Cliente',68,'otkkdujiqu','2602:fa5d::ba',NULL),(77,NULL,NULL,NULL,'creó','Cliente',69,'flgmpojdox','2602:fa5d::30',NULL),(78,NULL,NULL,NULL,'creó','Cliente',70,'nzgqtwvrwe','2602:fa5d::8c',NULL),(79,NULL,NULL,NULL,'creó','Cliente',71,'uikgexfgdh','2602:fa5d::ba',NULL),(80,NULL,NULL,NULL,'creó','Cliente',72,'hixzeqwhqz','2602:fa5d::ba',NULL),(81,NULL,NULL,NULL,'creó','Cliente',73,'yqkqoguoyj','2602:fa5d::c1',NULL),(82,NULL,NULL,NULL,'creó','Cliente',74,'zennpynwsj','192.210.150.198',NULL),(83,NULL,NULL,NULL,'creó','Cliente',75,'hxklstwqkd','2602:fa5d::37',NULL),(84,NULL,NULL,NULL,'creó','Cliente',76,'wwgmrevmzz','2602:fa5d::8c',NULL),(85,NULL,NULL,NULL,'creó','Cliente',77,'sjonqdjmgs','2602:fa5d::8b',NULL),(86,NULL,NULL,NULL,'creó','Cliente',78,'zfskftrryh','2602:fa5d::52',NULL),(87,NULL,NULL,NULL,'creó','Cliente',79,'kktvgejwlh','198.46.154.21',NULL),(88,NULL,NULL,NULL,'creó','Cliente',80,'tmnjrnfpje','198.46.154.21',NULL),(89,NULL,NULL,NULL,'creó','Cliente',81,'dokdyhpzsn','198.46.154.22',NULL),(90,NULL,NULL,NULL,'creó','Cliente',82,'fzoxoksyuv','2602:fa5d::90',NULL),(91,NULL,NULL,NULL,'creó','Cliente',83,'tuxeyhkuwk','198.12.69.93',NULL),(92,NULL,NULL,NULL,'creó','Cliente',84,'fptzwgymym','2602:fa5d::52',NULL),(93,NULL,NULL,NULL,'creó','Cliente',85,'ypflmjdyhk','2602:fa5d::52',NULL),(94,NULL,NULL,NULL,'creó','Cliente',86,'deevjooqso','2602:fa5d::8c',NULL),(95,NULL,NULL,NULL,'creó','Cliente',87,'krjzenirgq','2602:fa5d:1::ed',NULL),(96,NULL,NULL,NULL,'creó','Cliente',88,'pnrlqizipr','2602:fa5d::ba',NULL),(97,NULL,NULL,NULL,'creó','Cliente',89,'wyhrpefhnx','2602:fa5d::52',NULL),(98,NULL,NULL,NULL,'creó','Cliente',90,'uhgpvqvxem','192.210.150.196',NULL),(99,NULL,NULL,NULL,'creó','Cliente',91,'fojtulzmdk','2602:fa5d::c1',NULL),(100,NULL,NULL,NULL,'creó','Cliente',92,'ovyjkximxl','192.210.150.196',NULL),(101,NULL,NULL,NULL,'creó','Cliente',93,'lmpnjdslqn','2602:fa5d::52',NULL),(102,NULL,NULL,NULL,'creó','Cliente',94,'gnsztnuhrr','2602:fa5d::53',NULL),(103,NULL,NULL,NULL,'creó','Cliente',95,'lyupgpnzks','198.12.69.93',NULL),(104,NULL,NULL,NULL,'creó','Cliente',96,'oluidzmdhx','198.46.154.21',NULL),(105,NULL,NULL,NULL,'creó','Cliente',97,'zdhgqolyyq','2602:fa5d::90',NULL),(106,NULL,NULL,NULL,'creó','Cliente',98,'sdieoiemtd','198.12.69.93',NULL),(107,NULL,NULL,NULL,'creó','Cliente',99,'rfvvztfyow','192.210.150.196',NULL),(108,NULL,NULL,NULL,'creó','Cliente',100,'qzlehkkvsx','2602:fa5d:1::ed',NULL),(109,NULL,NULL,NULL,'creó','Cliente',101,'mmsuvtvoww','198.12.69.93',NULL),(110,NULL,NULL,NULL,'creó','Cliente',102,'kddvunwpvw','192.210.150.198',NULL),(111,NULL,NULL,NULL,'creó','Cliente',103,'sfsledyrof','192.210.150.198',NULL),(112,NULL,NULL,NULL,'creó','Cliente',104,'gqsfvygzxe','192.210.150.196',NULL),(113,NULL,NULL,NULL,'creó','Cliente',105,'hwofuuqxft','198.12.69.94',NULL),(114,NULL,NULL,NULL,'creó','Cliente',106,'gmrsddwzgr','2602:fa5d::90',NULL),(115,NULL,NULL,NULL,'creó','Cliente',107,'qripswrfng','2602:fa5d:1::ed',NULL),(116,NULL,NULL,NULL,'creó','Cliente',108,'kppkenlexo','2602:fa5d::8c',NULL),(117,NULL,NULL,NULL,'creó','Cliente',109,'jrkporsowy','2602:fa5d::a9',NULL),(118,NULL,NULL,NULL,'creó','Cliente',110,'mxmoomrwus','198.12.69.94',NULL),(119,NULL,NULL,NULL,'creó','Cliente',111,'ulslnknxzr','198.46.154.21',NULL),(120,NULL,NULL,NULL,'creó','Cliente',112,'xlurqltjfr','2602:fa5d::e5',NULL),(121,NULL,NULL,NULL,'creó','Cliente',113,'gsedmumtvn','192.210.150.198',NULL),(122,NULL,NULL,NULL,'creó','Cliente',114,'yuqfnmfysd','192.210.150.196',NULL),(123,NULL,NULL,NULL,'creó','Cliente',115,'nfdpudiige','192.210.150.198',NULL),(124,NULL,NULL,NULL,'creó','Cliente',116,'rqnxipgfum','198.46.154.21',NULL),(125,NULL,NULL,NULL,'creó','Cliente',117,'mnxswvmhfv','2602:fa5d:1::ed',NULL),(126,NULL,NULL,NULL,'creó','Cliente',118,'rvjmzoxely','192.210.150.199',NULL),(127,NULL,NULL,NULL,'creó','Cliente',119,'wwwegiqnpj','192.210.150.198',NULL),(128,NULL,NULL,NULL,'creó','Cliente',120,'riryhzwyvd','2602:fa5d::8b',NULL),(129,NULL,NULL,NULL,'creó','Cliente',121,'eeqvfpqhmw','2602:fa5d::8b',NULL),(130,NULL,NULL,NULL,'creó','Cliente',122,'vtlzztjyzd','2602:fa5d::ba',NULL),(131,NULL,NULL,NULL,'creó','Cliente',123,'swtgorulsq','198.12.69.94',NULL),(132,NULL,NULL,NULL,'creó','Cliente',124,'uzdwomqezd','2602:fa5d::30',NULL),(133,NULL,NULL,NULL,'creó','Cliente',125,'siljwklzrq','2602:fa5d::90',NULL),(134,NULL,NULL,NULL,'creó','Cliente',126,'hwoihpvqvy','198.46.154.22',NULL),(135,NULL,NULL,NULL,'creó','Cliente',127,'jhyzpdinxg','2602:fa5d::37',NULL),(136,NULL,NULL,NULL,'creó','Cliente',128,'synvqkggdx','2602:fa5d::30',NULL),(137,NULL,NULL,NULL,'creó','Cliente',129,'wqzmhowdvp','2602:fa5d::90',NULL),(138,NULL,NULL,NULL,'creó','Cliente',130,'rngyntgxgw','2602:fa5d::90',NULL),(139,NULL,NULL,NULL,'creó','Cliente',131,'vutdvhfnvw','192.210.150.196',NULL),(140,NULL,NULL,NULL,'creó','Cliente',132,'kylidylwor','107.173.160.167',NULL),(141,NULL,NULL,NULL,'creó','Cliente',133,'tmsrvltord','192.210.150.196',NULL),(142,NULL,NULL,NULL,'creó','Cliente',134,'otxzxztpue','2602:fa5d::90',NULL),(143,NULL,NULL,NULL,'creó','Cliente',135,'pvmttsweyi','2602:fa5d::63',NULL),(144,NULL,NULL,NULL,'creó','Cliente',136,'dmlwiwvsno','2602:fa5d::8b',NULL),(145,NULL,NULL,NULL,'creó','Cliente',137,'npqihufejh','2602:fa5d::c1',NULL),(146,NULL,NULL,NULL,'creó','Cliente',138,'wjvnjnzdwo','2602:fa5d::a9',NULL),(147,NULL,NULL,NULL,'creó','Cliente',139,'nvkfkmfkio','198.12.69.93',NULL),(148,NULL,NULL,NULL,'creó','Cliente',140,'orsooehmsv','2602:fa5d::30',NULL),(149,NULL,NULL,NULL,'creó','Cliente',141,'ipxwqomvrt','2602:fa5d::c1',NULL),(150,NULL,NULL,NULL,'creó','Cliente',142,'txlpvrkkkr','192.210.150.198',NULL),(151,NULL,NULL,NULL,'creó','Cliente',143,'emhodjqrdk','192.210.150.196',NULL),(152,NULL,NULL,NULL,'creó','Cliente',144,'ehurmgrtlt','2602:fa5d::30',NULL),(153,NULL,NULL,NULL,'creó','Cliente',145,'qujerjkrjy','198.46.154.21',NULL),(154,NULL,NULL,NULL,'creó','Cliente',146,'rvpfqpxqwx','2602:fa5d::90',NULL),(155,NULL,NULL,NULL,'creó','Cliente',147,'flyqduxiyk','192.210.150.196',NULL),(156,NULL,NULL,NULL,'creó','Cliente',148,'nhsqejhxny','198.12.69.94',NULL),(157,NULL,NULL,NULL,'creó','Cliente',149,'pdevtwgntd','192.210.150.199',NULL),(158,NULL,NULL,NULL,'creó','Cliente',150,'lkpdrrkore','2602:fa5d::30',NULL),(159,NULL,NULL,NULL,'creó','Cliente',151,'zjdheqwgyn','107.173.160.167',NULL),(160,NULL,NULL,NULL,'creó','Cliente',152,'ovftjplmpj','2602:fa5d::e5',NULL),(161,NULL,NULL,NULL,'creó','Cliente',153,'owhednnwhl','2602:fa5d::90',NULL),(162,NULL,NULL,NULL,'creó','Cliente',154,'iyvmrqzpoj','2602:fa5d::8c',NULL),(163,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:392c:f33d:9922:a099',NULL),(164,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'2803:ade0:200d:e400:392c:f33d:9922:a099',NULL),(165,NULL,NULL,NULL,'creó','Cliente',155,'flzxqjnejl','2602:fa5d::8c',NULL),(166,NULL,NULL,NULL,'creó','Cliente',156,'prqsqmigor','192.210.150.199',NULL),(167,NULL,NULL,NULL,'creó','Cliente',157,'xiulygxdof','2602:fa5d::30',NULL),(168,NULL,NULL,NULL,'creó','Cliente',158,'osvxsgdyje','192.210.150.196',NULL),(169,NULL,NULL,NULL,'creó','Cliente',159,'geoyphkykx','198.46.154.22',NULL),(170,NULL,NULL,NULL,'creó','Cliente',160,'idqxudqgtz','2602:fa5d::a9',NULL),(171,NULL,NULL,NULL,'creó','Cliente',161,'kowxsvxguh','107.173.160.145',NULL),(172,NULL,NULL,NULL,'creó','Cliente',162,'ogzkrermip','2602:fa5d::8b',NULL),(173,NULL,NULL,NULL,'creó','Cliente',163,'fqgpkvwxin','2602:fa5d:1::ed',NULL),(174,NULL,NULL,NULL,'creó','Cliente',164,'ftpynkjogr','2602:fa5d::30',NULL),(175,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.187',NULL),(176,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.187',NULL),(177,NULL,NULL,NULL,'creó','Cliente',165,'tlkojnjygq','104.23.172.85',NULL),(178,1,'Bletia','admin','creó','Usuario',9,'Alejandra','172.68.176.187',NULL),(179,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.186',NULL),(180,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.186',NULL),(181,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.187',NULL),(182,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.187',NULL),(183,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.187',NULL),(184,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.187',NULL),(185,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.186',NULL),(186,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.186',NULL),(187,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(188,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(189,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(190,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(191,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.135',NULL),(192,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.135',NULL),(193,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(194,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(195,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(196,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(197,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(198,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(199,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(200,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(201,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(202,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(203,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(204,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(205,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.70.224.160',NULL),(206,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.70.224.160',NULL),(207,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.70.224.160',NULL),(208,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.70.224.160',NULL),(209,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(210,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(211,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(212,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.143',NULL),(213,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(214,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(215,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL),(216,1,'Bletia','admin','inició sesión','Acceso',1,NULL,'172.68.176.142',NULL);
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_categorias`
--

DROP TABLE IF EXISTS `blog_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_categorias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orden` int unsigned NOT NULL DEFAULT '0',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blog_categorias_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_categorias`
--

LOCK TABLES `blog_categorias` WRITE;
/*!40000 ALTER TABLE `blog_categorias` DISABLE KEYS */;
INSERT INTO `blog_categorias` VALUES (1,'DIY','diy',0,1,'2026-06-06 19:18:29','2026-06-06 19:18:29'),(2,'Tendencias','tendencias',0,1,'2026-06-06 19:18:41','2026-06-06 19:18:41'),(3,'Tips','tips',0,1,'2026-06-08 02:52:27','2026-06-08 02:52:27'),(4,'Decoración','decoracion',0,1,'2026-06-09 05:17:29','2026-06-09 05:17:29');
/*!40000 ALTER TABLE `blog_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bounces`
--

DROP TABLE IF EXISTS `bounces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bounces` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `suscriptor_id` bigint unsigned DEFAULT NULL,
  `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` enum('soft','hard','complaint') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'hard',
  `reason` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'brevo',
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bounces_suscriptor_id_foreign` (`suscriptor_id`),
  KEY `bounces_email_index` (`email`),
  CONSTRAINT `bounces_suscriptor_id_foreign` FOREIGN KEY (`suscriptor_id`) REFERENCES `suscriptores` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bounces`
--

LOCK TABLES `bounces` WRITE;
/*!40000 ALTER TABLE `bounces` DISABLE KEYS */;
/*!40000 ALTER TABLE `bounces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('356a192b7913b04c54574d18c28d46e6395428ab','i:2;',1787976666),('356a192b7913b04c54574d18c28d46e6395428ab:timer','i:1787976666;',1787976666),('ajustes_all','a:83:{s:14:\"color_primario\";s:7:\"#161921\";s:16:\"color_secundario\";s:7:\"#800000\";s:12:\"color_footer\";s:7:\"#e0e0e0\";s:4:\"logo\";s:36:\"marca/01M15T6FB237EJXCDB27QG2RTF.svg\";s:10:\"logo_claro\";s:36:\"marca/01M15T6FB3CXSJ2QK75MTJTNN1.svg\";s:10:\"logo_movil\";s:36:\"marca/01M15T6FB3CXSJ2QK75MTJTNN2.png\";s:7:\"favicon\";s:36:\"marca/01M15T6FB48B9WHHAR2044M38A.png\";s:21:\"pedido_auto_sin_stock\";s:1:\"1\";s:13:\"home_hero_img\";s:46:\"home/8122f8d0-6f71-4ce6-a9d9-21cda0ca6768.webp\";s:16:\"home_hero_titulo\";s:21:\"Simple. Elegante. tu.\";s:13:\"home_hero_cta\";s:0:\"\";s:15:\"home_hero_texto\";s:50:\"Hacemos a mano para cuidar a detalle en cada pieza\";s:17:\"home_hero_cta_url\";s:5:\"/shop\";s:17:\"home_intro_titulo\";s:24:\"Muebles hechos en Cuenca\";s:16:\"home_producto_id\";s:1:\"8\";s:16:\"home_intro_texto\";s:92:\"Es un espacio en donde cabe desde las ideas, el diseño y cada pieza convertida en realidad.\";s:12:\"footer_texto\";s:63:\"Cada pieza que fabricamos en Bletia está hecha para tu espacio\";s:15:\"footer_nosotros\";s:237:\"[{\"titulo\":\"Acerca de\",\"url\":\"\\/about\"},{\"titulo\":\"Contacto\",\"url\":\"\\/contacto\"},{\"titulo\":\"Blog\",\"url\":\"\\/blog\"},{\"titulo\":\"Shop\",\"url\":\"\\/shop\"},{\"titulo\":\"Califica con 5 \\u2b50\",\"url\":\" https:\\/\\/g.page\\/r\\/CSN1VreBmzhOECA\\/review \"}]\";s:12:\"footer_legal\";s:215:\"[{\"titulo\":\"Pol\\u00edticas de cookies\",\"url\":\"\\/cookies\"},{\"titulo\":\"Pol\\u00edtica de privacidad\",\"url\":\"\\/privacy\"},{\"titulo\":\"T\\u00e9rminos y condiciones\",\"url\":\"\\/terms\"},{\"titulo\":\"Aviso legal\",\"url\":\"\\/legal\"}]\";s:7:\"erp_ruc\";s:13:\"0105824700001\";s:12:\"erp_telefono\";s:10:\"0999024159\";s:13:\"erp_direccion\";s:34:\"Carlos Berrezueta, Cuenca, Ecuador\";s:10:\"erp_ciudad\";s:6:\"Cuenca\";s:9:\"erp_email\";s:13:\"hola@betia.ec\";s:7:\"woo_url\";s:18:\"https://seridea.ec\";s:7:\"woo_key\";s:43:\"ck_1820fe3228ca7ce186120eb6c0e9a2cb20a232d0\";s:10:\"woo_secret\";s:43:\"cs_31cc612b8f5e3c6f3b71287ee8d243b153454959\";s:12:\"erp_logo_pdf\";s:36:\"marca/01KYTYAH2YGVHEVKEZMF861W2N.png\";s:15:\"footer_recursos\";s:127:\"[{\"titulo\":\"Garant\\u00eda\",\"url\":\"\\/garantia\"},{\"titulo\":\"Envios\",\"url\":\"\\/envios\"},{\"titulo\":\"Reembolso\",\"url\":\"\\/reembolso\"}]\";s:12:\"home_bloques\";s:726:\"[{\"type\":\"slider\",\"data\":{\"intervalo\":2,\"alto\":null,\"radio\":0,\"full\":true,\"slides\":[{\"imagen\":\"paginas\\/01KVC4Y5QMT2TYT1WAGE963FS2.jpg\",\"tono\":\"claro\",\"titulo\":\"A medida\",\"subtitulo\":null,\"texto\":null,\"b1_texto\":null,\"b1_url\":null,\"b2_texto\":null,\"b2_url\":null,\"pos_h\":\"centro\",\"pos_v\":\"centro\"},{\"imagen\":\"paginas\\/01KYTXNAZBQXEWDDCP64VF261X.jpg\",\"tono\":\"claro\",\"titulo\":\"Con color\",\"subtitulo\":null,\"texto\":null,\"b1_texto\":null,\"b1_url\":null,\"b2_texto\":null,\"b2_url\":null,\"pos_h\":\"centro\",\"pos_v\":\"centro\"},{\"imagen\":\"paginas\\/01KVC4Y5R2H7JDMN1XR68SDT1K.jpg\",\"tono\":\"claro\",\"titulo\":\"Un espacio\",\"subtitulo\":null,\"texto\":null,\"b1_texto\":null,\"b1_url\":null,\"b2_texto\":null,\"b2_url\":null,\"pos_h\":\"centro\",\"pos_v\":\"centro\"}]}}]\";s:10:\"footer_img\";s:36:\"marca/01KZ2VKGQQ9D2Q4GDPRC6H6EVD.svg\";s:9:\"footer_bg\";s:0:\"\";s:11:\"footer_text\";s:7:\"#000000\";s:15:\"erp_email_dueno\";s:20:\"bletiaform@gmail.com\";s:15:\"erp_email_guias\";s:21:\"depillacela@gmail.com\";s:22:\"erp_email_contabilidad\";s:15:\"conta@bletia.ec\";s:5:\"marca\";s:6:\"BLETIA\";s:7:\"eslogan\";s:28:\"Cada pieza define tu espacio\";s:9:\"meta_home\";s:87:\"En Bletia cada pieza define tu espacio con sofás, sillones, mesas, sillas y sillones. \";s:8:\"og_image\";s:0:\"\";s:8:\"telefono\";s:10:\"0999024159\";s:6:\"ciudad\";s:0:\"\";s:9:\"provincia\";s:0:\"\";s:4:\"pais\";s:0:\"\";s:6:\"sameas\";s:75:\"https://www.youtube.com/@bletiaform\nhttps://www.linkedin.com/company/bletia\";s:10:\"email_logo\";s:36:\"marca/01KXZ0N1B70C9EGABANX9K12HT.png\";s:3:\"ruc\";s:0:\"\";s:9:\"direccion\";s:21:\"Av. de las Américas \";s:5:\"ga_id\";s:12:\"G-V4N0950V9K\";s:6:\"gtm_id\";s:12:\"GTM-WQD5352P\";s:18:\"email_footer_texto\";s:240:\"Estas recibiendo este correo por que estas dentro de nuestra base de datos con tu correo {email} ya sea por una compra o suscripción a una de nuestras listas. {first_name} si crees que es un error puedes darte de baja en cualquier momento.\";s:11:\"email_redes\";s:105:\"https://bletia.ec/privacy\nhttps://bletia.ec/terms\nhttps://bletia.ec/cookies\nhttps://bletia.ec/aviso-legal\";s:10:\"emisor_ruc\";s:13:\"0105824700001\";s:12:\"emisor_razon\";s:33:\"DIEGO ERNESTO PILLACELA PILLACELA\";s:23:\"emisor_nombre_comercial\";s:16:\"BLETIA X SERIDEA\";s:28:\"emisor_obligado_contabilidad\";s:2:\"NO\";s:17:\"emisor_dir_matriz\";s:34:\"Carlos Berrezueta y Jose Mogrovejo\";s:16:\"emisor_dir_estab\";s:34:\"Carlos Berrezueta y Jose Mogrovejo\";s:12:\"emisor_estab\";s:3:\"001\";s:14:\"emisor_pto_emi\";s:3:\"001\";s:29:\"emisor_contribuyente_especial\";s:0:\"\";s:23:\"emisor_agente_retencion\";s:0:\"\";s:20:\"emisor_regimen_micro\";s:2:\"NO\";s:12:\"sri_ambiente\";s:1:\"1\";s:12:\"sri_p12_path\";s:55:\"/home/bletia/htdocs/bletia.ec/storage/app/sri/firma.p12\";s:12:\"sri_p12_pass\";s:11:\"Bdigital89@\";s:7:\"ai_bots\";s:1:\"1\";s:12:\"indexnow_key\";s:32:\"4bf2eb86d486e034d0afa397ccc96905\";s:9:\"smtp_host\";s:17:\"smtp.maileroo.com\";s:9:\"smtp_port\";s:3:\"587\";s:15:\"smtp_encryption\";s:3:\"tls\";s:13:\"smtp_username\";s:14:\"hola@bletia.ec\";s:13:\"smtp_password\";s:24:\"f6ef88280d291f95ece3d025\";s:17:\"smtp_from_address\";s:14:\"hola@bletia.ec\";s:14:\"smtp_from_name\";s:6:\"Bletia\";s:17:\"payphone_store_id\";s:36:\"9865e157-551d-49bf-b846-0bf4be72993c\";s:14:\"payphone_token\";s:326:\"m5fkQprOv4UQvATWLRlg_KUiryHxoa3Cpa7h87h9NtxSZwE_EIfAhfr3W_wVvZQUBBdOcSH1ANHlF4hVBxAoQVQV88URupraeITaKyYKJa2uyrUV1vcNwIjlWNdrTxeb63c_ZeNzuR7uXRdb6I0aa_UGu_dbdMwrup1CUccZ1h01YZWNoM-3kM8DkyphIqEmILZCoShXTPx-fVEfQpqlhci25UQwrM3OzidXsGGLPyMAFYEpUy9ieAgtH_dbHdaW2_9oojqJYPCMe7wvXueO7nSVied9VmhbdPJIQ0uquNo8meBJqp9KOGpA0W9wi2coQCRp2Q\";s:10:\"url_tienda\";s:5:\"/shop\";s:16:\"turnstile_activo\";s:1:\"1\";s:18:\"turnstile_site_key\";s:24:\"0x4AAAAAAEOlHKZ4Egtf568X\";s:20:\"turnstile_secret_key\";s:35:\"0x4AAAAAAEOlHJI4vQ0U5xj-q-ailxaiNhk\";s:13:\"contact_email\";s:0:\"\";s:14:\"contact_topics\";s:40:\"Garantía\nCotización\nColaboración\nOtro\";}',2103593831),('livewire-rate-limiter:03d7d766d84cf1a57036d8f2d7a15c435758bbb9','i:1;',1787975273),('livewire-rate-limiter:03d7d766d84cf1a57036d8f2d7a15c435758bbb9:timer','i:1787975273;',1787975273),('livewire-rate-limiter:8a8aded3f4a3556992d6c274574f09b9e14f9679','i:1;',1787149239),('livewire-rate-limiter:8a8aded3f4a3556992d6c274574f09b9e14f9679:timer','i:1787149239;',1787149239),('livewire-rate-limiter:8bd8c2faa6274e8208222e89e2e4dcbc0d6b9290','i:1;',1788230630),('livewire-rate-limiter:8bd8c2faa6274e8208222e89e2e4dcbc0d6b9290:timer','i:1788230630;',1788230630),('livewire-rate-limiter:c5654b7fc8999c483e824d8e939b91e6220f77ed','i:1;',1787406611),('livewire-rate-limiter:c5654b7fc8999c483e824d8e939b91e6220f77ed:timer','i:1787406611;',1787406611),('livewire-rate-limiter:cd816ad6424ef06ea8d3b2e7bf1c862840fa57c4','i:1;',1787186086),('livewire-rate-limiter:cd816ad6424ef06ea8d3b2e7bf1c862840fa57c4:timer','i:1787186086;',1787186086),('livewire-rate-limiter:d98009fce843388491a94bc159529ac70ae3220f','i:1;',1787947635),('livewire-rate-limiter:d98009fce843388491a94bc159529ac70ae3220f:timer','i:1787947635;',1787947635),('login:104.22.145.137:anna.costa@reboundeu.com','i:1;',1787229613),('login:104.22.145.137:anna.costa@reboundeu.com:timer','i:1787229613;',1787229613),('login:104.22.145.137:d.kuehl@autoflug.de','i:1;',1787144986),('login:104.22.145.137:d.kuehl@autoflug.de:timer','i:1787144986;',1787144986),('login:104.22.145.137:daniel.hoyer@aerodata.de','i:1;',1787143092),('login:104.22.145.137:daniel.hoyer@aerodata.de:timer','i:1787143092;',1787143092),('login:104.22.145.137:doerte.fouquet@bbh-online.de','i:1;',1787140303),('login:104.22.145.137:doerte.fouquet@bbh-online.de:timer','i:1787140303;',1787140303),('login:104.22.145.137:hroker@kasacontrols.com','i:1;',1787241502),('login:104.22.145.137:hroker@kasacontrols.com:timer','i:1787241502;',1787241502),('login:104.22.145.137:kriening@aerodata.de','i:1;',1787142242),('login:104.22.145.137:kriening@aerodata.de:timer','i:1787142242;',1787142242),('login:104.22.145.137:michaela.gebele@actief-personal.de','i:1;',1787223812),('login:104.22.145.137:michaela.gebele@actief-personal.de:timer','i:1787223812;',1787223812),('login:104.22.145.137:mmantri@bluematterconsulting.com','i:1;',1787244015),('login:104.22.145.137:mmantri@bluematterconsulting.com:timer','i:1787244015;',1787244015),('login:104.22.145.137:patrick@erickson.net','i:1;',1787249811),('login:104.22.145.137:patrick@erickson.net:timer','i:1787249811;',1787249811),('login:104.22.20.102:steveculver@hughes.net','i:1;',1787245456),('login:104.22.20.102:steveculver@hughes.net:timer','i:1787245456;',1787245456),('login:104.22.64.66:info@hometeamvr.com','i:1;',1786979201),('login:104.22.64.66:info@hometeamvr.com:timer','i:1786979201;',1786979201),('login:104.23.166.42:cpijanowski@boulevard.com','i:1;',1787071392),('login:104.23.166.42:cpijanowski@boulevard.com:timer','i:1787071392;',1787071392),('login:104.23.166.42:druiz@mtcts.com','i:1;',1787129062),('login:104.23.166.42:druiz@mtcts.com:timer','i:1787129062;',1787129062),('login:104.23.166.42:marina.scholz@probiogen.de','i:1;',1787134455),('login:104.23.166.42:marina.scholz@probiogen.de:timer','i:1787134455;',1787134455),('login:104.23.166.43:dplant9004@rogers.com','i:1;',1787007939),('login:104.23.166.43:dplant9004@rogers.com:timer','i:1787007939;',1787007939),('login:104.23.166.43:michaelelefante@user.guesty.com','i:1;',1786982345),('login:104.23.166.43:michaelelefante@user.guesty.com:timer','i:1786982345;',1786982345),('login:104.23.170.162:bwilliamson@taylorpower.com','i:1;',1787077239),('login:104.23.170.162:bwilliamson@taylorpower.com:timer','i:1787077239;',1787077239),('login:104.23.170.163:ldutton@bramptonbrick.com','i:1;',1787067217),('login:104.23.170.163:ldutton@bramptonbrick.com:timer','i:1787067217;',1787067217),('login:104.23.172.84:juergen.zauner@gmail.com','i:1;',1787120563),('login:104.23.172.84:juergen.zauner@gmail.com:timer','i:1787120563;',1787120563),('login:104.23.172.84:michael.elefante@hometeamvr.com','i:1;',1786878565),('login:104.23.172.84:michael.elefante@hometeamvr.com:timer','i:1786878565;',1786878565),('login:104.23.172.84:tarin.oneil@aol.com','i:1;',1786999179),('login:104.23.172.84:tarin.oneil@aol.com:timer','i:1786999179;',1786999179),('login:104.23.187.40:michaelelefante@hometeamluxuryrentals.com','i:1;',1787063213),('login:104.23.187.40:michaelelefante@hometeamluxuryrentals.com:timer','i:1787063213;',1787063213),('login:104.23.190.40:giselayaneth.arredondo@marathonelectric.com','i:1;',1786988946),('login:104.23.190.40:giselayaneth.arredondo@marathonelectric.com:timer','i:1786988946;',1786988946),('login:104.23.253.100:raylan@tacocomfort.com','i:1;',1787170570),('login:104.23.253.100:raylan@tacocomfort.com:timer','i:1787170570;',1787170570),('login:104.23.253.101:molly.bronec@jungbunzlauer.com','i:1;',1787138004),('login:104.23.253.101:molly.bronec@jungbunzlauer.com:timer','i:1787138004;',1787138004),('login:162.158.158.224:gordonboettger@gmail.com','i:1;',1787050620),('login:162.158.158.224:gordonboettger@gmail.com:timer','i:1787050620;',1787050620),('login:162.158.63.110:michaelelefante@user.guesty.com','i:1;',1787157808),('login:162.158.63.110:michaelelefante@user.guesty.com:timer','i:1787157808;',1787157808),('login:162.159.113.6:rbowen83@gmail.com','i:1;',1787107572),('login:162.159.113.6:rbowen83@gmail.com:timer','i:1787107572;',1787107572),('login:162.159.113.7:acanatui@boulart.com','i:1;',1787064485),('login:162.159.113.7:acanatui@boulart.com:timer','i:1787064485;',1787064485),('login:162.159.113.7:mbgreenmed@gmail.com','i:1;',1786957273),('login:162.159.113.7:mbgreenmed@gmail.com:timer','i:1786957273;',1786957273),('login:162.159.119.70:frank.huerta@texasbar.com','i:1;',1786992843),('login:162.159.119.70:frank.huerta@texasbar.com:timer','i:1786992843;',1786992843),('login:172.64.217.13:kalconz@hotmail.com','i:1;',1787195948),('login:172.64.217.13:kalconz@hotmail.com:timer','i:1787195948;',1787195948),('login:172.69.109.166:latashasingleton793@gmail.com','i:1;',1786906949),('login:172.69.109.166:latashasingleton793@gmail.com:timer','i:1786906949;',1786906949),('login:172.69.109.166:michael.elefante@hometeamvr.com','i:1;',1787056748),('login:172.69.109.166:michael.elefante@hometeamvr.com:timer','i:1787056748;',1787056748),('login:172.69.17.26:rkamalapurkar@gmail.com','i:1;',1786938193),('login:172.69.17.26:rkamalapurkar@gmail.com:timer','i:1786938193;',1786938193),('login:172.69.214.203:maysa.bastos@mynaric.com','i:1;',1787220083),('login:172.69.214.203:maysa.bastos@mynaric.com:timer','i:1787220083;',1787220083),('login:172.69.214.47:kerrie.see@multivac.com','i:1;',1787247138),('login:172.69.214.47:kerrie.see@multivac.com:timer','i:1787247138;',1787247138),('login:172.69.23.136:info@vpcgroup.com','i:1;',1787154482),('login:172.69.23.136:info@vpcgroup.com:timer','i:1787154482;',1787154482),('login:172.69.234.180:allans@goodwinelectric.com','i:1;',1786985846),('login:172.69.234.180:allans@goodwinelectric.com:timer','i:1786985846;',1786985846),('login:172.69.234.180:derek.wilson@mcmachinery.com','i:1;',1787166688),('login:172.69.234.180:derek.wilson@mcmachinery.com:timer','i:1787166688;',1787166688),('login:172.69.234.180:enichols@secrestwardle.com','i:1;',1786990613),('login:172.69.234.180:enichols@secrestwardle.com:timer','i:1786990613;',1786990613),('login:172.69.234.180:katerine.codallo@chapmanfreeborn.aero','i:1;',1787234825),('login:172.69.234.180:katerine.codallo@chapmanfreeborn.aero:timer','i:1787234825;',1787234825),('login:172.69.234.180:kevinrundgren@gmail.com','i:1;',1787089863),('login:172.69.234.180:kevinrundgren@gmail.com:timer','i:1787089863;',1787089863),('login:172.69.234.180:megan.golden@precisionvh.com','i:1;',1787079460),('login:172.69.234.180:megan.golden@precisionvh.com:timer','i:1787079460;',1787079460),('login:172.69.234.180:merve.ogretmek@formycon.com','i:1;',1787044667),('login:172.69.234.180:merve.ogretmek@formycon.com:timer','i:1787044667;',1787044667),('login:172.69.234.180:nicole.westphalen@nordmark-pharma.de','i:1;',1787055713),('login:172.69.234.180:nicole.westphalen@nordmark-pharma.de:timer','i:1787055713;',1787055713),('login:172.69.59.193:adam.mccullough@mcmachinery.com','i:1;',1786994990),('login:172.69.59.193:adam.mccullough@mcmachinery.com:timer','i:1786994990;',1786994990),('login:172.70.100.180:tds-logistix@live.de','i:1;',1786996350),('login:172.70.100.180:tds-logistix@live.de:timer','i:1786996350;',1786996350),('login:172.70.207.88:michaelelefante@user.guesty.com','i:1;',1787081757),('login:172.70.207.88:michaelelefante@user.guesty.com:timer','i:1787081757;',1787081757),('login:172.70.80.92:jevon_baird@venturelighting.com','i:1;',1787152186),('login:172.70.80.92:jevon_baird@venturelighting.com:timer','i:1787152186;',1787152186),('login:172.70.80.92:michaelelefante@user.guesty.com','i:1;',1786970382),('login:172.70.80.92:michaelelefante@user.guesty.com:timer','i:1786970382;',1786970382),('login:172.70.80.92:rpo@hurwitzfine.com','i:1;',1786987830),('login:172.70.80.92:rpo@hurwitzfine.com:timer','i:1786987830;',1786987830),('login:172.70.80.92:shilpa.mukherjee@heumann.de','i:1;',1787054366),('login:172.70.80.92:shilpa.mukherjee@heumann.de:timer','i:1787054366;',1787054366),('login:172.70.80.93:taylormprochnow@gmail.com','i:1;',1787033971),('login:172.70.80.93:taylormprochnow@gmail.com:timer','i:1787033971;',1787033971),('login:172.71.120.26:adam.dahou@g2recruitment.com','i:1;',1787227081),('login:172.71.120.26:adam.dahou@g2recruitment.com:timer','i:1787227081;',1787227081),('login:172.71.120.26:bianca_matthies@genua.de','i:1;',1787217624),('login:172.71.120.26:bianca_matthies@genua.de:timer','i:1787217624;',1787217624),('login:172.71.120.26:blueemnem7@yahoo.com','i:1;',1786918483),('login:172.71.120.26:blueemnem7@yahoo.com:timer','i:1786918483;',1786918483),('login:172.71.160.34:michaelelefante@hometeamvr.com','i:1;',1786967034),('login:172.71.160.34:michaelelefante@hometeamvr.com:timer','i:1786967034;',1786967034),('login:172.71.183.86:zjordan8@gmail.com','i:1;',1786863370),('login:172.71.183.86:zjordan8@gmail.com:timer','i:1786863370;',1786863370),('login:172.71.203.121:bfelzien@kasacontrols.com','i:1;',1787238338),('login:172.71.203.121:bfelzien@kasacontrols.com:timer','i:1787238338;',1787238338),('login:172.71.98.225:petra.roettger@kade.de','i:1;',1787058809),('login:172.71.98.225:petra.roettger@kade.de:timer','i:1787058809;',1787058809);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campania_clics`
--

DROP TABLE IF EXISTS `campania_clics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campania_clics` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `campania_email_id` bigint unsigned NOT NULL,
  `url` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `campania_clics_campania_email_id_foreign` (`campania_email_id`),
  CONSTRAINT `campania_clics_campania_email_id_foreign` FOREIGN KEY (`campania_email_id`) REFERENCES `campania_emails` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campania_clics`
--

LOCK TABLES `campania_clics` WRITE;
/*!40000 ALTER TABLE `campania_clics` DISABLE KEYS */;
/*!40000 ALTER TABLE `campania_clics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campania_emails`
--

DROP TABLE IF EXISTS `campania_emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campania_emails` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `campania_id` bigint unsigned NOT NULL,
  `suscriptor_id` bigint unsigned NOT NULL,
  `estado` enum('cola','enviado','fallido','abierto','clicado') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cola',
  `tracking_token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `intentos` tinyint unsigned NOT NULL DEFAULT '0',
  `error` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `enviado_at` timestamp NULL DEFAULT NULL,
  `abierto_at` timestamp NULL DEFAULT NULL,
  `clics` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `campania_emails_campania_id_suscriptor_id_unique` (`campania_id`,`suscriptor_id`),
  UNIQUE KEY `campania_emails_tracking_token_unique` (`tracking_token`),
  KEY `campania_emails_suscriptor_id_foreign` (`suscriptor_id`),
  KEY `campania_emails_campania_id_estado_index` (`campania_id`,`estado`),
  CONSTRAINT `campania_emails_campania_id_foreign` FOREIGN KEY (`campania_id`) REFERENCES `campanias` (`id`) ON DELETE CASCADE,
  CONSTRAINT `campania_emails_suscriptor_id_foreign` FOREIGN KEY (`suscriptor_id`) REFERENCES `suscriptores` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campania_emails`
--

LOCK TABLES `campania_emails` WRITE;
/*!40000 ALTER TABLE `campania_emails` DISABLE KEYS */;
/*!40000 ALTER TABLE `campania_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campanias`
--

DROP TABLE IF EXISTS `campanias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campanias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `asunto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `preheader` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contenido_json` json DEFAULT NULL,
  `cuerpo_html` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lista_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `estado` enum('borrador','programada','enviando','enviada','pausada','fallida') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'borrador',
  `programada_at` timestamp NULL DEFAULT NULL,
  `enviada_at` timestamp NULL DEFAULT NULL,
  `total_destinatarios` int unsigned NOT NULL DEFAULT '0',
  `total_enviados` int unsigned NOT NULL DEFAULT '0',
  `total_aperturas` int unsigned NOT NULL DEFAULT '0',
  `total_clics` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `campanias_estado_index` (`estado`),
  KEY `campanias_programada_at_index` (`programada_at`),
  CONSTRAINT `campanias_chk_1` CHECK (json_valid(`lista_ids`))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campanias`
--

LOCK TABLES `campanias` WRITE;
/*!40000 ALTER TABLE `campanias` DISABLE KEYS */;
/*!40000 ALTER TABLE `campanias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` bigint unsigned DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `orden` int unsigned NOT NULL DEFAULT '0',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categorias_slug_unique` (`slug`),
  KEY `categorias_parent_id_foreign` (`parent_id`),
  CONSTRAINT `categorias_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categorias` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,NULL,'Sofás','sofas','Una colección de lujo para tu sala ',0,1,'Sofás de Bletia','En Bletia hacemos que tu sofá muestre tu ser interior, cada colección única de lujo para tu sala ','2026-06-06 02:10:34','2026-06-14 06:07:18','categorias/01KV2BVQKRJ11X4B81MSAVESS3.png'),(2,NULL,'Sillones','sillones','Hacemos que su sofá tenga un sillón perfecto sin romper el lujo de tu sala. ',0,1,'Sillones Bletia','Un sillón que forma parte de tu ambiente y hace que tu sala sea perfecta con el mismo lujo de tu sofá. ','2026-06-06 02:22:39','2026-06-14 06:13:02','categorias/01KV2C682CK6KA88KK04MBW2JS.png'),(3,NULL,'Piezas','piezas','En Bletia ahora es simple agrandar tu sala sin perder el estilo.',0,1,'Piezas en Bletia','Piezas como asientos individuales para agrandar su sala','2026-06-06 03:24:48','2026-06-14 06:13:17','categorias/01KV2C6P6ZEZVVJNE8JNCR861Y.png'),(4,NULL,'Centros','centros','Para que tu sofá tenga el aura perfecto con un centro que lo hará lucir.',0,1,'Centros en Bletia','Centro de Bletia para un sofá u espacio perfecto.','2026-06-06 03:27:03','2026-06-14 06:13:29','categorias/01KV2C7259R1PV0XV5HARNS83X.png'),(5,NULL,'Veladores','veladores','Nightstand es donde tus noches cambian por su funcionalidad y con medidas estándar.',0,1,'Nightstand de Bletia','Una colección especial de Nightstand conocido también como veladores o mesa de noche.','2026-06-18 01:46:36','2026-06-18 03:13:11','categorias/01KVC6H8W6S8FZDDESJ09QQ2DJ.png');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `identificacion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cedula',
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `verify_token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cedula_ruc` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `celular` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `woo_customer_id` bigint unsigned DEFAULT NULL,
  `tipo_identificacion` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cedula',
  `saldo_favor` decimal(12,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  KEY `clientes_identificacion_index` (`identificacion`),
  KEY `clientes_email_index` (`email`),
  KEY `clientes_cedula_ruc_index` (`cedula_ruc`),
  KEY `clientes_woo_customer_id_index` (`woo_customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra_items`
--

DROP TABLE IF EXISTS `compra_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `compra_id` bigint unsigned NOT NULL,
  `producto_id` bigint unsigned DEFAULT NULL,
  `variante_id` bigint unsigned DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` decimal(12,2) NOT NULL DEFAULT '1.00',
  `bultos` smallint unsigned NOT NULL DEFAULT '1',
  `costo_unitario` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva_rate` decimal(5,2) NOT NULL DEFAULT '15.00',
  `subtotal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tapiz_principal` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_tapiz_principal` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tapiz_secundario` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_tapiz_secundario` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cojines` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_cojines` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lacado` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_lacado` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notas_adicionales` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `compra_items_compra_id_index` (`compra_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra_items`
--

LOCK TABLES `compra_items` WRITE;
/*!40000 ALTER TABLE `compra_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra_pagos`
--

DROP TABLE IF EXISTS `compra_pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra_pagos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `compra_id` bigint unsigned NOT NULL,
  `monto` decimal(12,2) NOT NULL,
  `metodo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `tipo_tarjeta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tarjeta_naturaleza` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_girador` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_numero` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_banco` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_fecha_cobro` date DEFAULT NULL,
  `cheque_estado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente',
  `nro_comprobante` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comprobantes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `nota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `compra_pagos_compra_id_index` (`compra_id`),
  CONSTRAINT `compra_pagos_chk_1` CHECK (json_valid(`comprobantes`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra_pagos`
--

LOCK TABLES `compra_pagos` WRITE;
/*!40000 ALTER TABLE `compra_pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `proveedor_id` bigint unsigned DEFAULT NULL,
  `local_destino_id` bigint unsigned DEFAULT NULL,
  `estado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'creada',
  `doc_tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doc_numero` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doc_fecha` date DEFAULT NULL,
  `sustento_tributario` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `autorizacion_sri` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtotal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_renta` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_comprobante` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ret_fecha` date DEFAULT NULL,
  `notas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `creado_por` bigint unsigned DEFAULT NULL,
  `recibida_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `compras_folio_index` (`folio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `confirmaciones`
--

DROP TABLE IF EXISTS `confirmaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `confirmaciones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `link_id` bigint unsigned NOT NULL,
  `despacho_id` bigint unsigned DEFAULT NULL,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `receptor_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor_cedula` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor_celular` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_1_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_2_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip_origen` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `confirmado_en` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `confirmaciones_link_id_index` (`link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `confirmaciones`
--

LOCK TABLES `confirmaciones` WRITE;
/*!40000 ALTER TABLE `confirmaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `confirmaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_messages`
--

DROP TABLE IF EXISTS `contact_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `leido` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `contact_messages_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_messages`
--

LOCK TABLES `contact_messages` WRITE;
/*!40000 ALTER TABLE `contact_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuenta_mapeos`
--

DROP TABLE IF EXISTS `cuenta_mapeos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuenta_mapeos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `clave` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo_cuenta` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cuenta_mapeos_clave_unique` (`clave`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta_mapeos`
--

LOCK TABLES `cuenta_mapeos` WRITE;
/*!40000 ALTER TABLE `cuenta_mapeos` DISABLE KEYS */;
INSERT INTO `cuenta_mapeos` VALUES (1,'venta.cxc','Venta · cuenta por cobrar (cliente)','1.1.02.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(2,'venta.ingreso','Venta · ingreso por ventas','4.1.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(3,'venta.iva','Venta · IVA en ventas por pagar','2.1.02.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(4,'cobro.efectivo','Cobro en efectivo','1.1.01.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(5,'cobro.transferencia','Cobro por transferencia','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(6,'cobro.tarjeta','Cobro con tarjeta','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(7,'cobro.cheque','Cobro con cheque','1.1.02.02','2026-07-20 23:01:03','2026-07-20 23:01:03'),(8,'cobro.cxc','Cobro · baja de cuenta por cobrar','1.1.02.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(9,'compra.inventario','Compra · inventario','1.1.04.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(10,'compra.iva','Compra · IVA crédito tributario','1.1.03.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(11,'compra.cxp','Compra · cuenta por pagar (proveedor)','2.1.01.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(12,'pago.efectivo','Pago proveedor en efectivo','1.1.01.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(13,'pago.transferencia','Pago proveedor transferencia','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(14,'pago.tarjeta','Pago proveedor tarjeta','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(15,'pago.cheque','Pago proveedor cheque','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(16,'pago.cxp','Pago · baja de cuenta por pagar','2.1.01.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(17,'gasto.combustible','Gasto combustible','6.1.07','2026-07-20 23:01:03','2026-07-20 23:01:03'),(18,'gasto.transporte','Gasto transporte y flete','6.1.07','2026-07-20 23:01:03','2026-07-20 23:01:03'),(19,'gasto.viaticos','Gasto viáticos (alim./hosp./viajes)','6.1.11','2026-07-20 23:01:03','2026-07-20 23:01:03'),(20,'gasto.marketing','Gasto marketing y publicidad','6.1.06','2026-07-20 23:01:03','2026-07-20 23:01:03'),(21,'gasto.servicios_basicos','Gasto servicios básicos','6.1.05','2026-07-20 23:01:03','2026-07-20 23:01:03'),(22,'gasto.arriendo','Gasto arriendo','6.1.04','2026-07-20 23:01:03','2026-07-20 23:01:03'),(23,'gasto.suministros','Gasto suministros y materiales','6.1.09','2026-07-20 23:01:03','2026-07-20 23:01:03'),(24,'gasto.comisiones','Gasto comisiones bancarias','6.1.10','2026-07-20 23:01:03','2026-07-20 23:01:03'),(25,'gasto.sueldos','Gasto sueldos y salarios','6.1.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(26,'gasto.varios','Gasto varios','6.1.11','2026-07-20 23:01:03','2026-07-20 23:01:03'),(27,'gasto.iva','Gasto · IVA crédito tributario','1.1.03.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(28,'gasto.cxp','Gasto a crédito · cuenta por pagar','2.1.01.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(29,'pago_gasto.efectivo','Pago gasto efectivo','1.1.01.01','2026-07-20 23:01:03','2026-07-20 23:01:03'),(30,'pago_gasto.transferencia','Pago gasto transferencia','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(31,'pago_gasto.tarjeta','Pago gasto tarjeta','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(32,'pago_gasto.cheque','Pago gasto cheque','1.1.01.03','2026-07-20 23:01:03','2026-07-20 23:01:03'),(33,'nomina.sueldo_gasto','Nómina · gasto sueldos','6.1.01','2026-07-21 07:34:47','2026-07-21 07:34:47'),(34,'nomina.aporte_patronal_gasto','Nómina · gasto aporte patronal','6.1.03','2026-07-21 07:34:47','2026-07-21 07:34:47'),(35,'nomina.beneficios_gasto','Nómina · gasto beneficios sociales','6.1.02','2026-07-21 07:34:47','2026-07-21 07:34:47'),(36,'nomina.liquido_pagar','Nómina · sueldos por pagar','2.1.03.01','2026-07-21 07:34:47','2026-07-21 07:34:47'),(37,'nomina.iess_pagar','Nómina · IESS por pagar','2.1.03.02','2026-07-21 07:34:47','2026-07-21 07:34:47'),(38,'nomina.beneficios_pagar','Nómina · beneficios por pagar','2.1.03.03','2026-07-21 07:34:47','2026-07-21 07:34:47'),(39,'nomina.ret_renta_pagar','Nómina · retención renta por pagar','2.1.02.04','2026-07-21 07:34:47','2026-07-21 07:34:47'),(40,'nomina.honorarios_gasto','Honorarios · gasto','6.1.01','2026-07-21 07:34:47','2026-07-21 07:34:47'),(41,'beneficio.pagar_desde','Pago beneficio · baja de provisión','2.1.03.03','2026-07-21 20:43:46','2026-07-21 20:43:46'),(42,'beneficio.banco','Pago beneficio · salida de banco','1.1.01.03','2026-07-21 20:43:46','2026-07-21 20:43:46'),(43,'beneficio.caja','Pago beneficio · salida de caja','1.1.01.01','2026-07-21 20:43:46','2026-07-21 20:43:46'),(44,'liquidacion.indemnizacion_gasto','Liquidación · gasto por indemnización/desahucio','6.1.12','2026-07-22 23:55:31','2026-07-22 23:55:31'),(45,'incentivo.gasto','Incentivo a colaborador · gasto','6.1.13','2026-07-23 22:30:06','2026-07-23 22:30:06'),(46,'incentivo.banco','Incentivo · salida de banco','1.1.01.03','2026-07-23 22:30:06','2026-07-23 22:30:06'),(47,'incentivo.caja','Incentivo · salida de caja','1.1.01.01','2026-07-23 22:30:06','2026-07-23 22:30:06');
/*!40000 ALTER TABLE `cuenta_mapeos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuentas`
--

DROP TABLE IF EXISTS `cuentas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuentas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` enum('activo','pasivo','patrimonio','ingreso','gasto','costo') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `naturaleza` enum('deudora','acreedora') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `padre_id` bigint unsigned DEFAULT NULL,
  `es_movimiento` tinyint(1) NOT NULL DEFAULT '1',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cuentas_codigo_unique` (`codigo`),
  KEY `cuentas_tipo_codigo_index` (`tipo`,`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuentas`
--

LOCK TABLES `cuentas` WRITE;
/*!40000 ALTER TABLE `cuentas` DISABLE KEYS */;
INSERT INTO `cuentas` VALUES (1,'1','ACTIVO','activo','deudora',NULL,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(2,'1.1','Activo corriente','activo','deudora',1,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(3,'1.1.01','Efectivo y equivalentes','activo','deudora',2,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(4,'1.1.01.01','Caja','activo','deudora',3,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(5,'1.1.01.02','Caja chica','activo','deudora',3,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(6,'1.1.01.03','Bancos','activo','deudora',3,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(7,'1.1.02','Cuentas por cobrar','activo','deudora',2,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(8,'1.1.02.01','Clientes','activo','deudora',7,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(9,'1.1.02.02','Cheques por cobrar','activo','deudora',7,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(10,'1.1.03','Crédito tributario','activo','deudora',2,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(11,'1.1.03.01','IVA en compras (crédito tributario)','activo','deudora',10,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(12,'1.1.03.02','Retención IVA cliente (a favor)','activo','deudora',10,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(13,'1.1.03.03','Retención Renta cliente (a favor)','activo','deudora',10,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(14,'1.1.04','Inventarios','activo','deudora',2,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(15,'1.1.04.01','Inventario de mercadería','activo','deudora',14,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(16,'1.1.04.02','Inventario de materia prima','activo','deudora',14,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(17,'1.1.04.03','Productos en proceso','activo','deudora',14,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(18,'1.1.04.04','Productos terminados','activo','deudora',14,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(19,'1.2','Activo no corriente','activo','deudora',1,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(20,'1.2.01','Propiedad, planta y equipo','activo','deudora',19,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(21,'1.2.01.01','Maquinaria y equipo','activo','deudora',20,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(22,'1.2.01.02','Muebles y enseres','activo','deudora',20,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(23,'1.2.01.03','Vehículos','activo','deudora',20,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(24,'1.2.02','Depreciación acumulada','activo','acreedora',19,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(25,'2','PASIVO','pasivo','acreedora',NULL,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(26,'2.1','Pasivo corriente','pasivo','acreedora',25,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(27,'2.1.01','Cuentas por pagar','pasivo','acreedora',26,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(28,'2.1.01.01','Proveedores','pasivo','acreedora',27,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(29,'2.1.02','Obligaciones fiscales','pasivo','acreedora',26,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(30,'2.1.02.01','IVA en ventas (por pagar)','pasivo','acreedora',29,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(31,'2.1.02.02','IVA por pagar (neto)','pasivo','acreedora',29,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(32,'2.1.02.03','Retención IVA por pagar','pasivo','acreedora',29,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(33,'2.1.02.04','Retención Renta por pagar','pasivo','acreedora',29,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(34,'2.1.02.05','Impuesto a la renta por pagar','pasivo','acreedora',29,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(35,'2.1.03','Obligaciones con empleados (IESS/beneficios)','pasivo','acreedora',26,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(36,'2.1.03.01','Sueldos por pagar','pasivo','acreedora',35,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(37,'2.1.03.02','IESS por pagar','pasivo','acreedora',35,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(38,'2.1.03.03','Beneficios sociales por pagar','pasivo','acreedora',35,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(39,'2.2','Pasivo no corriente','pasivo','acreedora',25,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(40,'2.2.01','Préstamos bancarios largo plazo','pasivo','acreedora',39,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(41,'3','PATRIMONIO','patrimonio','acreedora',NULL,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(42,'3.1','Capital','patrimonio','acreedora',41,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(43,'3.1.01','Capital social','patrimonio','acreedora',42,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(44,'3.2','Resultados','patrimonio','acreedora',41,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(45,'3.2.01','Utilidad del ejercicio','patrimonio','acreedora',44,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(46,'3.2.02','Utilidades acumuladas','patrimonio','acreedora',44,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(47,'4','INGRESOS','ingreso','acreedora',NULL,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(48,'4.1','Ingresos operacionales','ingreso','acreedora',47,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(49,'4.1.01','Ventas de bienes','ingreso','acreedora',48,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(50,'4.1.02','Ventas de servicios','ingreso','acreedora',48,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(51,'4.1.03','Descuento en ventas','ingreso','deudora',48,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(52,'4.2','Otros ingresos','ingreso','acreedora',47,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(53,'4.2.01','Otros ingresos','ingreso','acreedora',52,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(54,'5','COSTOS','costo','deudora',NULL,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(55,'5.1','Costo de ventas','costo','deudora',54,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(56,'5.1.01','Costo de mercadería vendida','costo','deudora',55,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(57,'5.1.02','Costo de producción','costo','deudora',55,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(58,'6','GASTOS','gasto','deudora',NULL,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(59,'6.1','Gastos operacionales','gasto','deudora',58,0,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(60,'6.1.01','Sueldos y salarios','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(61,'6.1.02','Beneficios sociales','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(62,'6.1.03','Aporte patronal IESS','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(63,'6.1.04','Arriendo','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(64,'6.1.05','Servicios básicos','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(65,'6.1.06','Publicidad y marketing','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(66,'6.1.07','Transporte y flete','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(67,'6.1.08','Depreciación','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(68,'6.1.09','Suministros y materiales','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(69,'6.1.10','Comisiones bancarias','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(70,'6.1.11','Gastos varios','gasto','deudora',59,1,1,'2026-07-20 22:42:19','2026-07-20 22:42:19'),(71,'6.1.12','Indemnizaciones laborales','gasto','deudora',59,1,1,'2026-07-22 23:55:31','2026-07-22 23:55:31'),(72,'6.1.13','Incentivos a colaboradores','gasto','deudora',59,1,1,'2026-07-23 22:30:06','2026-07-23 22:30:06');
/*!40000 ALTER TABLE `cuentas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupon_usos`
--

DROP TABLE IF EXISTS `cupon_usos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupon_usos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cupon_id` bigint unsigned NOT NULL,
  `cliente_id` bigint unsigned NOT NULL,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `monto` decimal(10,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cupon_usos_cupon_id_cliente_id_unique` (`cupon_id`,`cliente_id`),
  KEY `cupon_usos_cupon_id_index` (`cupon_id`),
  KEY `cupon_usos_cliente_id_index` (`cliente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupon_usos`
--

LOCK TABLES `cupon_usos` WRITE;
/*!40000 ALTER TABLE `cupon_usos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cupon_usos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupones`
--

DROP TABLE IF EXISTS `cupones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'porcentaje',
  `valor` decimal(10,2) NOT NULL DEFAULT '0.00',
  `audiencia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'primera_compra',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `limite_global` int unsigned DEFAULT NULL,
  `vence_at` date DEFAULT NULL,
  `minimo_compra` decimal(10,2) DEFAULT NULL,
  `usos` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cupones_codigo_unique` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupones`
--

LOCK TABLES `cupones` WRITE;
/*!40000 ALTER TABLE `cupones` DISABLE KEYS */;
INSERT INTO `cupones` VALUES (1,'HOLA5','porcentaje',5.00,'primera_compra',1,NULL,NULL,250.00,0,'2026-06-24 01:23:38','2026-06-24 01:23:38');
/*!40000 ALTER TABLE `cupones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `despachos`
--

DROP TABLE IF EXISTS `despachos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `despachos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `reclamo_id` bigint unsigned DEFAULT NULL,
  `compra_id` bigint unsigned DEFAULT NULL,
  `venta_id` bigint unsigned DEFAULT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'normal',
  `ruta` enum('retiro_local','transportista') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'retiro_local',
  `transportista_id` bigint unsigned DEFAULT NULL,
  `local_retiro_id` bigint unsigned DEFAULT NULL,
  `empleado_receptor_id` bigint unsigned DEFAULT NULL,
  `local_destino_id` bigint unsigned DEFAULT NULL,
  `estado` enum('programado','en_transito','entregado','cancelado') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'programado',
  `fecha_programada` timestamp NULL DEFAULT NULL,
  `link_id` bigint unsigned DEFAULT NULL,
  `notas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `detalle_json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `listo` tinyint(1) NOT NULL DEFAULT '0',
  `conductor_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `conductor_nui` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `conductor_celular` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `conductor_correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `placa` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `folio` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recibido_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recibido_cedula` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firma_cliente` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `pdf_entrega` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `entregado_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `despachos_pedido_id_index` (`pedido_id`),
  KEY `despachos_folio_index` (`folio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `despachos`
--

LOCK TABLES `despachos` WRITE;
/*!40000 ALTER TABLE `despachos` DISABLE KEYS */;
/*!40000 ALTER TABLE `despachos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `despacho_id` bigint unsigned DEFAULT NULL,
  `tipo` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ruta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre_archivo` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `creado_en` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `documentos_pedido_id_index` (`pedido_id`),
  KEY `documentos_despacho_id_index` (`despacho_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editores`
--

DROP TABLE IF EXISTS `editores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editores` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cargo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `web` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `x` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `editores_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editores`
--

LOCK TABLES `editores` WRITE;
/*!40000 ALTER TABLE `editores` DISABLE KEYS */;
INSERT INTO `editores` VALUES (1,'Isbaal','isbaal','Community Manager','Hacer que Bletia comunique ',NULL,NULL,NULL,NULL,NULL,NULL,'2026-06-07 06:48:41','2026-06-09 14:24:02'),(2,'Alejandra','alejandra','Marketing','Bletia es bletia',NULL,NULL,NULL,NULL,NULL,NULL,'2026-06-09 13:31:07','2026-06-09 14:24:43');
/*!40000 ALTER TABLE `editores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `editor_id` bigint unsigned DEFAULT NULL,
  `nombre` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `identificacion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_identificacion` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cedula',
  `cargo` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `relacion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'dependencia',
  `tipo_contrato` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_salida` date DEFAULT NULL,
  `sueldo` decimal(12,2) NOT NULL DEFAULT '0.00',
  `banco` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cuenta_bancaria` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_cuenta` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cargas_familiares` int DEFAULT '0',
  `dias_vacaciones_anuales` decimal(5,2) NOT NULL DEFAULT '15.00',
  `region` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'sierra_oriente',
  `modo_decimo_tercero` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'acumulado',
  `modo_decimo_cuarto` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'acumulado',
  `modo_fondos_reserva` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'mensualizado',
  `recibe_fondos_reserva` tinyint(1) NOT NULL DEFAULT '0',
  `decimos_mensualizados` tinyint(1) NOT NULL DEFAULT '0',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `notas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `bio` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `web` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `x` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `empleados_slug_unique` (`slug`),
  KEY `empleados_relacion_activo_index` (`relacion`,`activo`),
  KEY `empleados_user_id_index` (`user_id`),
  KEY `empleados_editor_id_index` (`editor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,8,NULL,'Isbaal','isbaal','0125698770','cedula','Comunicación','info@bletia.ec',NULL,'Cuenca','colaborador',NULL,'2022-04-01',NULL,550.00,NULL,NULL,NULL,NULL,15.00,'sierra_oriente','acumulado','acumulado','mensualizado',1,1,1,NULL,'2026-07-21 07:41:36','2026-08-16 03:20:31','Hacer que Bletia comunique ',NULL,NULL,NULL,NULL,NULL,NULL),(4,9,NULL,'Alejandra','alejandra',NULL,'cedula','Comunicación','adelapillacela@gmail.com',NULL,'Cuenca','colaborador',NULL,NULL,NULL,0.00,NULL,NULL,NULL,0,15.00,'sierra_oriente','acumulado','acumulado','mensualizado',0,0,1,NULL,'2026-07-29 09:10:48','2026-08-16 03:20:58','Creer es poder hacer lo que me gusta.',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etiquetas`
--

DROP TABLE IF EXISTS `etiquetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etiquetas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `etiquetas_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etiquetas`
--

LOCK TABLES `etiquetas` WRITE;
/*!40000 ALTER TABLE `etiquetas` DISABLE KEYS */;
INSERT INTO `etiquetas` VALUES (1,'naming','naming','2026-06-07 06:49:54','2026-06-09 17:50:45'),(2,'decoración','decoracion','2026-06-08 02:53:37','2026-06-09 17:50:50'),(3,'adornos','adornos','2026-06-08 04:26:37','2026-06-09 17:50:37'),(4,'color de sofá','color-de-sofa','2026-06-09 13:31:40','2026-06-09 13:31:40'),(5,'colores para sala','colores-para-sala','2026-06-09 13:32:02','2026-06-09 13:32:02'),(6,'tapizado de sofá','tapizado-de-sofa','2026-06-09 13:32:24','2026-06-09 13:32:24'),(7,'madera','madera','2026-06-09 20:27:07','2026-06-09 20:27:07'),(8,'durabilidad','durabilidad','2026-06-09 20:27:17','2026-06-09 20:27:17'),(9,'madera para muebles','madera-para-muebles','2026-06-09 20:27:35','2026-06-09 20:27:35'),(10,'muebles de madera','muebles-de-madera','2026-06-09 20:27:50','2026-06-09 20:27:50'),(11,'microfibra','microfibra','2026-06-13 04:21:06','2026-06-13 04:21:06'),(12,'mesas de noche','mesas-de-noche','2026-06-17 19:42:48','2026-06-17 19:42:48'),(13,'dormitorio','dormitorio','2026-06-17 19:42:59','2026-06-17 19:42:59'),(14,'veladores','veladores','2026-06-17 19:43:03','2026-06-17 19:43:03'),(15,'Manchas en tu sofá','manchas-en-tu-sofa','2026-06-23 18:24:59','2026-06-23 18:24:59'),(16,'limpieza de sofá','limpieza-de-sofa','2026-06-23 18:25:17','2026-06-23 18:25:17'),(17,'cuidado de un mueble','cuidado-de-un-mueble','2026-08-19 01:54:50','2026-08-19 01:54:50');
/*!40000 ALTER TABLE `etiquetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formulario_contactos`
--

DROP TABLE IF EXISTS `formulario_contactos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formulario_contactos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo_destino` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `mensaje_exito` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `formulario_contactos_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulario_contactos`
--

LOCK TABLES `formulario_contactos` WRITE;
/*!40000 ALTER TABLE `formulario_contactos` DISABLE KEYS */;
INSERT INTO `formulario_contactos` VALUES (1,'Contacto general','contacto',NULL,'Garantía\nInformación\nPropuesta\nOtro',NULL,1,'2026-08-15 22:48:05','2026-08-15 22:48:05');
/*!40000 ALTER TABLE `formulario_contactos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formularios`
--

DROP TABLE IF EXISTS `formularios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formularios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inline',
  `estado` enum('activo','pausado') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'activo',
  `lista_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `titulo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `boton_texto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pedir_nombre` tinyint(1) NOT NULL DEFAULT '0',
  `opciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `impresiones` int unsigned NOT NULL DEFAULT '0',
  `conversiones` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `ubicacion` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ambito` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'todo',
  `entre_parrafo` int unsigned NOT NULL DEFAULT '2',
  `premarcado` tinyint(1) NOT NULL DEFAULT '0',
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `formularios_chk_1` CHECK (json_valid(`lista_ids`)),
  CONSTRAINT `formularios_chk_2` CHECK (json_valid(`opciones`))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formularios`
--

LOCK TABLES `formularios` WRITE;
/*!40000 ALTER TABLE `formularios` DISABLE KEYS */;
INSERT INTO `formularios` VALUES (1,'Blog','inline','activo','[2,3,5]','Newsletter','Recibe los último directo en tu correo.','Suscribirme',1,'{\"elegir_lista\":true,\"campos\":[\"nombre\",\"apellido\",\"nacimiento\",\"acepto\"],\"campos_req\":[\"nombre\",\"nacimiento\",\"acepto\"]}',4,3,'2026-06-08 02:01:18','2026-07-30 21:03:45','blog_sidebar','todo',2,0,NULL),(2,'Shop','slide_in','activo','[1,3,2]','Únete a nosotros','Sé la primera persona en recibir novedades de Bletia','Unirme',1,'{\"elegir_lista\":true,\"trigger\":\"delay\",\"valor\":1,\"repetir_dias\":3,\"campos\":[\"nombre\",\"acepto\",\"apellido\",\"nacimiento\"],\"campos_req\":[\"nombre\",\"nacimiento\",\"acepto\"]}',208,1,'2026-06-11 04:20:31','2026-08-31 22:48:47',NULL,'tienda',2,0,NULL),(3,'Float','tab','activo','[\"1\",\"2\",\"3\"]','5% de DESCUENTO','Únete a nuestra lista y obtén tu cupón ahora mismo para tu primera compra. ','Suscribirme',0,'{\"tab_label\":\"5% dcto\",\"tab_color\":null,\"elegir_lista\":true,\"repetir_dias\":\"2\",\"campos\":[\"nombre\",\"apellido\",\"acepto\",\"nacimiento\"],\"campos_req\":[\"nombre\",\"nacimiento\",\"acepto\"]}',363,3,'2026-06-24 00:12:47','2026-08-31 22:48:46',NULL,'todo',2,0,'digest/01KVW0TR9YN2S4BY0C1645H543.jpg');
/*!40000 ALTER TABLE `formularios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gastos`
--

DROP TABLE IF EXISTS `gastos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gastos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` date NOT NULL,
  `categoria` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `proveedor_id` bigint unsigned DEFAULT NULL,
  `beneficiario` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `beneficiario_id_num` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doc_tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doc_numero` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `autorizacion_sri` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `base` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_renta` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `forma_pago` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'contado',
  `metodo_pago` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `adjunto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'registrado',
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gastos_fecha_categoria_index` (`fecha`,`categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gastos`
--

LOCK TABLES `gastos` WRITE;
/*!40000 ALTER TABLE `gastos` DISABLE KEYS */;
/*!40000 ALTER TABLE `gastos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guardados`
--

DROP TABLE IF EXISTS `guardados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guardados` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cliente_id` bigint unsigned NOT NULL,
  `producto_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `guardados_cliente_id_producto_id_unique` (`cliente_id`,`producto_id`),
  KEY `guardados_producto_id_foreign` (`producto_id`),
  CONSTRAINT `guardados_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `guardados_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guardados`
--

LOCK TABLES `guardados` WRITE;
/*!40000 ALTER TABLE `guardados` DISABLE KEYS */;
/*!40000 ALTER TABLE `guardados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historial_pedido`
--

DROP TABLE IF EXISTS `historial_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historial_pedido` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` bigint unsigned NOT NULL,
  `estado_anterior` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado_nuevo` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `usuario_id` bigint unsigned DEFAULT NULL,
  `notas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `creado_en` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `historial_pedido_pedido_id_index` (`pedido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historial_pedido`
--

LOCK TABLES `historial_pedido` WRITE;
/*!40000 ALTER TABLE `historial_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `historial_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `impuestos`
--

DROP TABLE IF EXISTS `impuestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `impuestos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'iva',
  `porcentaje` decimal(6,2) NOT NULL,
  `codigo_sri` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vigente_desde` date NOT NULL,
  `vigente_hasta` date DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `impuestos_tipo_vigente_desde_index` (`tipo`,`vigente_desde`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `impuestos`
--

LOCK TABLES `impuestos` WRITE;
/*!40000 ALTER TABLE `impuestos` DISABLE KEYS */;
INSERT INTO `impuestos` VALUES (1,'IVA','iva',12.00,'2','2000-01-01','2024-03-31',1,'2026-07-20 22:28:09','2026-07-20 22:28:09'),(2,'IVA','iva',15.00,'4','2024-04-01',NULL,1,'2026-07-20 22:28:09','2026-07-20 22:28:09');
/*!40000 ALTER TABLE `impuestos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `incentivos`
--

DROP TABLE IF EXISTS `incentivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incentivos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empleado_id` bigint unsigned NOT NULL,
  `fecha` date NOT NULL,
  `concepto` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `monto` decimal(12,2) NOT NULL,
  `ret_renta` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `metodo_pago` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nro_comprobante` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adjunto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `estado` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pagado',
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `incentivos_empleado_id_estado_index` (`empleado_id`,`estado`),
  CONSTRAINT `incentivos_empleado_id_foreign` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incentivos`
--

LOCK TABLES `incentivos` WRITE;
/*!40000 ALTER TABLE `incentivos` DISABLE KEYS */;
/*!40000 ALTER TABLE `incentivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `links_unicos`
--

DROP TABLE IF EXISTS `links_unicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links_unicos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `despacho_id` bigint unsigned DEFAULT NULL,
  `reclamo_id` bigint unsigned DEFAULT NULL,
  `compra_id` bigint unsigned DEFAULT NULL,
  `usado` tinyint(1) NOT NULL DEFAULT '0',
  `intentos` int unsigned NOT NULL DEFAULT '0',
  `expira_en` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `links_unicos_token_unique` (`token`),
  KEY `links_unicos_pedido_id_index` (`pedido_id`),
  KEY `links_unicos_despacho_id_index` (`despacho_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links_unicos`
--

LOCK TABLES `links_unicos` WRITE;
/*!40000 ALTER TABLE `links_unicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `links_unicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `liquidaciones`
--

DROP TABLE IF EXISTS `liquidaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `liquidaciones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empleado_id` bigint unsigned NOT NULL,
  `fecha` date NOT NULL,
  `fecha_salida` date NOT NULL,
  `motivo` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `decimo_tercero` decimal(12,2) NOT NULL DEFAULT '0.00',
  `decimo_cuarto` decimal(12,2) NOT NULL DEFAULT '0.00',
  `vacaciones` decimal(12,2) NOT NULL DEFAULT '0.00',
  `fondos_reserva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `indemnizacion` decimal(12,2) NOT NULL DEFAULT '0.00',
  `bonificacion_desahucio` decimal(12,2) NOT NULL DEFAULT '0.00',
  `anios_servicio` smallint unsigned DEFAULT NULL,
  `mejor_remuneracion` decimal(12,2) DEFAULT NULL,
  `tiempo_servicio` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otros` decimal(12,2) NOT NULL DEFAULT '0.00',
  `descuentos` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `detalle` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `adjunto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'registrada',
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `liquidaciones_empleado_id_foreign` (`empleado_id`),
  CONSTRAINT `liquidaciones_empleado_id_foreign` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liquidaciones`
--

LOCK TABLES `liquidaciones` WRITE;
/*!40000 ALTER TABLE `liquidaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `liquidaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_suscriptor`
--

DROP TABLE IF EXISTS `lista_suscriptor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lista_suscriptor` (
  `lista_id` bigint unsigned NOT NULL,
  `suscriptor_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`lista_id`,`suscriptor_id`),
  KEY `lista_suscriptor_suscriptor_id_foreign` (`suscriptor_id`),
  CONSTRAINT `lista_suscriptor_lista_id_foreign` FOREIGN KEY (`lista_id`) REFERENCES `listas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `lista_suscriptor_suscriptor_id_foreign` FOREIGN KEY (`suscriptor_id`) REFERENCES `suscriptores` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_suscriptor`
--

LOCK TABLES `lista_suscriptor` WRITE;
/*!40000 ALTER TABLE `lista_suscriptor` DISABLE KEYS */;
INSERT INTO `lista_suscriptor` VALUES (3,2),(2,3),(3,3),(5,3),(2,4),(2,6),(3,6),(2,7),(3,7),(5,8),(5,9),(5,10),(5,11),(5,12),(5,13),(5,14),(5,15),(5,16),(5,17),(5,18),(5,19),(5,20),(5,21),(5,22),(5,23),(5,24),(5,25),(5,26),(5,27),(5,28),(5,29),(5,30),(5,31),(5,32),(5,33),(5,34),(5,35),(5,36),(5,37),(5,38),(5,39),(5,40),(5,41),(5,42),(5,43),(5,44),(5,45),(5,46),(5,47),(5,48),(5,49),(5,50),(5,51),(5,52),(5,53),(5,54),(5,55),(5,56),(5,57),(5,58),(5,59),(5,60),(5,61),(5,62),(5,63),(5,64),(5,65),(5,66),(5,67),(5,68),(5,69),(5,70),(5,71),(5,72),(5,73),(5,74),(5,75),(5,76),(5,77),(5,78),(5,79),(5,80),(5,81),(5,82),(5,83),(5,84),(5,85),(5,86),(5,87),(5,88),(5,89),(5,90),(5,91),(5,92),(5,93),(5,94),(5,95),(5,96),(5,97),(5,98),(5,99),(5,100),(5,101),(5,102),(5,103),(5,104),(5,105),(5,106),(5,107),(5,108),(5,109),(5,110),(5,111),(5,112),(5,113),(5,114),(5,115),(5,116),(5,117),(5,118),(5,119),(5,120),(5,121),(5,122),(5,123),(5,124),(5,125),(5,126),(5,127),(5,128),(5,129),(5,130),(5,131),(5,132),(5,133),(5,134),(5,135),(5,136),(5,137),(5,138),(5,139),(5,140),(5,141),(5,142),(5,143),(5,144),(5,145),(5,146),(5,147),(5,148),(5,149),(5,150),(5,151),(5,152),(5,153),(5,154),(5,155),(5,156),(5,157),(5,158),(5,159),(5,160),(5,161),(5,162),(5,163);
/*!40000 ALTER TABLE `lista_suscriptor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listas`
--

DROP TABLE IF EXISTS `listas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `publica` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `listas_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listas`
--

LOCK TABLES `listas` WRITE;
/*!40000 ALTER TABLE `listas` DISABLE KEYS */;
INSERT INTO `listas` VALUES (2,'Blog','blog',NULL,1,'2026-06-08 01:57:55','2026-06-08 01:57:55'),(3,'Studio','digest',NULL,1,'2026-06-08 01:58:33','2026-07-30 21:12:12'),(5,'Store','newsletter',NULL,1,'2026-07-30 14:44:56','2026-07-30 21:13:32');
/*!40000 ALTER TABLE `listas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locales`
--

DROP TABLE IF EXISTS `locales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locales` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'local',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locales`
--

LOCK TABLES `locales` WRITE;
/*!40000 ALTER TABLE `locales` DISABLE KEYS */;
INSERT INTO `locales` VALUES (1,'Bletia','Carlos Berrezueta','Cuenca','local_venta',1,'2026-06-06 01:22:07','2026-06-30 17:05:55'),(3,'Seridea',NULL,NULL,'local_venta',1,'2026-06-06 01:22:07','2026-06-17 19:36:38'),(5,'Bletia Bodega','Carlos Berrezueta','Cuenca','bodega_stock',1,'2026-06-29 23:56:53','2026-06-30 17:06:04'),(6,'Seridea Bodega','Jose Mogrovejo','Cuenca','bodega_stock',1,'2026-06-29 23:57:15','2026-06-30 17:06:26');
/*!40000 ALTER TABLE `locales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias_primas`
--

DROP TABLE IF EXISTS `materias_primas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias_primas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `unidad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'u',
  `stock` decimal(12,2) NOT NULL DEFAULT '0.00',
  `minimo` decimal(12,2) NOT NULL DEFAULT '0.00',
  `costo` decimal(12,2) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias_primas`
--

LOCK TABLES `materias_primas` WRITE;
/*!40000 ALTER TABLE `materias_primas` DISABLE KEYS */;
/*!40000 ALTER TABLE `materias_primas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2026_01_01_000001_create_locales_table',1),(5,'2026_01_01_000002_create_categorias_table',1),(6,'2026_01_01_000003_create_productos_table',1),(7,'2026_01_01_000004_create_producto_imagenes_table',1),(8,'2026_01_01_000005_create_variantes_table',1),(9,'2026_01_01_000006_create_stock_table',1),(10,'2026_01_02_000001_create_clientes_table',2),(11,'2026_01_02_000002_create_pedidos_table',2),(12,'2026_01_02_000003_create_pedido_items_table',2),(13,'2026_01_03_000001_create_ajustes_table',3),(14,'2026_01_03_000002_add_pedido_to_productos',3),(15,'2026_01_03_000003_add_foto_to_variantes',3),(16,'2026_01_04_000001_add_password_to_clientes',4),(17,'2026_01_04_000002_create_newsletter_suscriptores_table',4),(18,'2026_01_05_000001_create_blog_categorias_table',5),(19,'2026_01_05_000002_create_articulos_table',5),(20,'2026_01_05_000003_create_paginas_table',5),(21,'2026_01_05_000004_create_movimientos_stock_table',5),(22,'2026_01_06_000001_add_color_to_variantes',6),(23,'2026_01_06_000002_add_variantes_to_pedido_items',6),(24,'2026_01_06_000003_add_despacho_to_pedidos',6),(25,'2026_01_06_000004_add_bloques_to_articulos',6),(26,'2026_01_07_000001_create_atributos_tables',7),(27,'2026_01_07_000002_add_atributo_opcion_to_variantes',7),(28,'2026_01_07_000003_create_etiquetas_tables',7),(29,'2026_01_07_000004_create_editores_table',7),(30,'2026_01_07_000005_add_editor_to_articulos',7),(31,'2026_01_07_000006_add_bloques_to_paginas',7),(32,'2026_01_08_000001_add_pvp_costo_opciones_to_variantes',8),(33,'2026_01_08_000002_add_mto_texto_to_productos',8),(34,'2026_01_09_000001_create_marketing_tables',9),(35,'2026_01_10_000001_create_campanias_tables',10),(36,'2026_06_08_221256_create_post_slugs_table',10),(37,'2026_01_12_000001_create_bounces_table',11),(38,'2026_02_01_000001_create_proveedores_table',12),(39,'2026_02_01_000002_create_transportistas_table',12),(40,'2026_02_01_000003_create_historial_pedido_table',12),(41,'2026_02_01_000004_erp_ampliar_columnas',12),(42,'2026_06_08_223337_create_redirects_table',12),(43,'2026_02_05_000001_create_documentos_table',13),(44,'2026_02_10_000001_create_links_confirmaciones',14),(45,'2026_02_15_000001_create_despachos_y_estado',15),(46,'2026_02_20_000001_erp_pedido_especial',16),(47,'2026_03_01_000001_erp_correcciones_campos',17),(48,'2026_03_10_000001_formularios_ubicacion',18),(49,'2026_03_15_000001_woo_import',19),(50,'2026_06_13_000100_add_imagen_to_categorias',20),(51,'2026_06_13_000200_add_imagen_cabecera_to_articulos',20),(52,'2026_06_15_000001_erp_anulacion',21),(53,'2026_06_15_000002_pedido_item_local',22),(54,'2026_06_15_000003_recibos',23),(55,'2026_06_15_000004_folios',24),(56,'2026_06_15_000005_correos_erp',25),(57,'2026_06_16_000001_roles_y_pedido_origen',26),(58,'2026_06_16_000002_trazabilidad',27),(59,'2026_06_19_000001_ops_fechas_forma',28),(60,'2026_06_19_000002_pagos_validacion',29),(61,'2026_06_19_000003_envio_y_pago',30),(62,'2026_06_20_000001_desglose_precio_item',31),(63,'2026_06_20_000002_produccion_interna',32),(64,'2026_06_20_000003_resolucion_pago',33),(65,'2026_06_20_000004_user_avatar',34),(66,'2026_06_20_000005_bitacora',35),(67,'2026_06_21_000001_firma_entrega_material',36),(68,'2026_06_21_000002_firma_entrega_pedido',37),(69,'2026_06_22_000001_ventas_y_factura',38),(70,'2026_06_23_000001_automatizaciones_recursos',38),(71,'2026_06_23_000002_suscriptores_extra',39),(72,'2026_06_23_000003_suscriptores_nacimiento',40),(73,'2026_06_24_000001_formularios_imagen',41),(74,'2026_06_24_000002_tipo_tab',42),(75,'2026_06_24_000003_cupones',43),(76,'2026_06_24_000004_recurso_cupon',44),(77,'2026_06_24_000005_of_aceptada',45),(78,'2026_06_25_000001_pedido_entrega_lado',46),(79,'2026_06_25_000002_recibo_pagador',47),(80,'2026_06_25_000003_producto_materiales',48),(81,'2026_06_25_000004_pedidos_woo_id',49),(82,'2026_06_25_000005_sri_comprobantes',50),(83,'2026_06_27_000010_add_origen_to_pedidos',51),(84,'2026_06_27_000020_sri_establecimientos',52),(85,'2026_06_27_000030_ventas_comprobante',53),(86,'2026_06_27_000040_ventas_info_adicional',54),(87,'2026_06_27_000050_credito_pedidos_ventas',55),(88,'2026_06_28_000010_recibos_cheque',56),(89,'2026_06_28_000020_recibos_tarjeta_naturaleza',57),(90,'2026_06_29_195008_add_cheque_cobrado_to_recibos',58),(91,'2026_06_29_200502_add_cheque_estado_to_recibos',59),(92,'2026_06_29_204119_create_reclamos_table',60),(93,'2026_06_30_012848_add_garantia_to_despachos',61),(94,'2026_06_30_021322_add_reclamo_id_to_links_unicos',62),(95,'2026_06_30_024259_add_costos_to_productos',63),(96,'2026_06_30_044315_add_venta_id_to_recibos',64),(97,'2026_06_30_054753_add_variante_id_to_stock',65),(98,'2026_06_30_055458_make_producto_id_nullable_in_stock',66),(99,'2026_06_30_060309_add_variante_id_to_movimientos_stock',67),(100,'2026_06_30_060840_fix_unique_stock_con_variante',68),(101,'2026_06_30_070943_create_compras_table',69),(102,'2026_06_30_144637_add_compra_id_to_movimientos_material',70),(103,'2026_06_30_155451_add_bultos_to_compra_items',71),(104,'2026_06_30_164450_add_dias_fabricacion_to_productos',72),(105,'2026_06_30_194714_add_empleado_receptor_to_despachos',73),(106,'2026_06_30_203502_add_venta_id_to_despachos',74),(107,'2026_06_30_204645_nullable_pedido_id_despachos',75),(108,'2026_06_30_210222_add_detalle_json_to_despachos',76),(109,'2026_06_30_212732_add_direccion_ciudad_to_locales',77),(110,'2026_06_30_222504_add_direccion_to_proveedores',78),(111,'2026_06_30_231601_add_acabados_to_compra_items',79),(112,'2026_07_20_000001_create_guardados_table',80),(113,'2026_07_20_000002_add_email_verified_to_clientes',81),(114,'2026_07_20_000003_fiscal_identificacion_retenciones',82),(115,'2026_07_20_000004_create_impuestos_table',83),(116,'2026_07_20_000005_create_contabilidad',84),(117,'2026_07_20_000006_gastos_y_mapeos',85),(118,'2026_07_20_000007_nomina',86),(119,'2026_07_20_000008_horas_extra',87),(120,'2026_07_20_000009_respaldo_pago_rol',88),(121,'2026_07_20_000010_beneficios_empleado',89),(122,'2026_07_20_000011_beneficios_pago_liquidacion',90),(123,'2026_07_22_000001_editorjs_json_columns',91),(124,'2026_07_23_000001_indemnizacion_liquidacion',92),(125,'2026_07_23_000002_tiempo_servicio_liquidacion',93),(126,'2026_07_23_000003_control_vacaciones',94),(127,'2026_07_24_000001_colaborador_incentivos',95),(128,'2026_07_28_000001_add_cheque_comprobante_to_recibos',96),(129,'2026_07_28_000002_add_contenido_json_to_campanias',97),(130,'2026_07_28_000003_add_contenido_json_to_automatizaciones',98),(131,'2026_07_28_000004_add_tipo_contrato_to_empleados',99),(132,'2026_07_28_000005_fusionar_editor_en_empleado',100),(133,'2026_08_14_203707_create_contact_messages_table',101),(134,'2026_08_14_210000_create_formulario_contactos_table',101);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimientos_material`
--

DROP TABLE IF EXISTS `movimientos_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimientos_material` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `materia_prima_id` bigint unsigned NOT NULL,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `compra_id` bigint unsigned DEFAULT NULL,
  `tipo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` decimal(12,2) NOT NULL DEFAULT '0.00',
  `estado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nota` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `recibido_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recibido_cedula` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firma` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `pdf_entrega` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `entregado_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `movimientos_material_materia_prima_id_foreign` (`materia_prima_id`),
  CONSTRAINT `movimientos_material_materia_prima_id_foreign` FOREIGN KEY (`materia_prima_id`) REFERENCES `materias_primas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimientos_material`
--

LOCK TABLES `movimientos_material` WRITE;
/*!40000 ALTER TABLE `movimientos_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimientos_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimientos_stock`
--

DROP TABLE IF EXISTS `movimientos_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimientos_stock` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` bigint unsigned NOT NULL,
  `variante_id` bigint unsigned DEFAULT NULL,
  `local_id` bigint unsigned NOT NULL,
  `local_destino_id` bigint unsigned DEFAULT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` int NOT NULL DEFAULT '0',
  `referencia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nota` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `movimientos_stock_local_id_foreign` (`local_id`),
  KEY `movimientos_stock_local_destino_id_foreign` (`local_destino_id`),
  KEY `movimientos_stock_producto_id_local_id_index` (`producto_id`,`local_id`),
  CONSTRAINT `movimientos_stock_local_destino_id_foreign` FOREIGN KEY (`local_destino_id`) REFERENCES `locales` (`id`) ON DELETE SET NULL,
  CONSTRAINT `movimientos_stock_local_id_foreign` FOREIGN KEY (`local_id`) REFERENCES `locales` (`id`) ON DELETE CASCADE,
  CONSTRAINT `movimientos_stock_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimientos_stock`
--

LOCK TABLES `movimientos_stock` WRITE;
/*!40000 ALTER TABLE `movimientos_stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimientos_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter_suscriptores`
--

DROP TABLE IF EXISTS `newsletter_suscriptores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsletter_suscriptores` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `newsletter_suscriptores_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter_suscriptores`
--

LOCK TABLES `newsletter_suscriptores` WRITE;
/*!40000 ALTER TABLE `newsletter_suscriptores` DISABLE KEYS */;
INSERT INTO `newsletter_suscriptores` VALUES (1,'depillacela@gmail.com','2026-06-06 19:45:53','2026-06-06 19:45:53'),(2,'unrigor@gmail.com','2026-06-07 06:35:33','2026-06-07 06:35:33');
/*!40000 ALTER TABLE `newsletter_suscriptores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paginas`
--

DROP TABLE IF EXISTS `paginas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paginas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenido` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `contenido_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `bloques` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `mostrar_en_menu` tinyint(1) NOT NULL DEFAULT '0',
  `orden` int unsigned NOT NULL DEFAULT '0',
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `paginas_slug_unique` (`slug`),
  CONSTRAINT `paginas_chk_1` CHECK (json_valid(`bloques`))
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paginas`
--

LOCK TABLES `paginas` WRITE;
/*!40000 ALTER TABLE `paginas` DISABLE KEYS */;
INSERT INTO `paginas` VALUES (1,'Política de privacidad','privacy',NULL,NULL,NULL,NULL,1,0,0,'Política de privacidad','La política de privacidad de Bletia','2026-06-06 20:30:38','2026-06-06 20:32:32'),(2,'Acerca de Bletia','about','<h2>Sobre nosotros</h2><p>En Bletia diseñamos mobiliario para espacios que se usan todos los días.</p><p>Somos un equipo de personas que diseña y fabrica muebles en Cuenca para hogares, oficinas y espacios que piden algo más que un mueble estándar. Cada pieza nace desde el diseño digital y el modelado en 3D, se valida con render realista y luego pasa a producción, con un enfoque claro: crear muebles funcionales, estéticos y duraderos.</p><p>No vendemos catálogos cerrados ni fabricamos en serie. Diseñamos a partir de ideas, necesidades y contextos reales: sofás, sillones, piezas y centros pensados para durar, que cambian la forma en que vives tu espacio.</p><p>Diseñamos para personas y familias en Ecuador que quieren un espacio con carácter, sin renunciar al detalle. Y si lo que buscas hoy no está, lo creamos contigo como un proyecto a medida.</p>',NULL,'[{\"type\":\"hero\",\"data\":{\"titulo\":\" Hecho con cari\\u00f1o en Cuenca\",\"texto\":\"Son 100% hecho a mano. Cada pieza la arman personas reales, no una l\\u00ednea de producci\\u00f3n an\\u00f3nima.\",\"h_size\":\"35\",\"texto_size\":18,\"boton_texto\":null,\"boton_url\":null,\"imagen\":\"paginas\\/01KV4NS474BW85NS3V1VHSW0N3.jpg\",\"fondo\":null,\"tono\":\"claro\",\"pos_h\":\"centro\",\"pos_v\":\"centro\",\"alto\":\"550\",\"radio\":0,\"full\":true}},{\"type\":\"columnas\",\"data\":{\"cantidad\":\"2\",\"texto_size\":18,\"radio\":0,\"full\":false,\"items\":[{\"imagen\":null,\"texto\":\"<h3><strong>Dise\\u00f1o propio<\\/strong><\\/h3><p>Muebles que combinan est\\u00e9tica y funcionalidad, pensados para el d\\u00eda a d\\u00eda.<\\/p>\"},{\"imagen\":null,\"texto\":\"<h3><strong>Proyectos a medida<\\/strong><\\/h3><p>\\u00bfNo encuentras lo que buscas? Lo dise\\u00f1amos contigo.&nbsp;<\\/p>\"}]}}]',NULL,1,1,0,'Conoce a Bletia','En Bletia los muebles hechos a mano en Cuenca para hogares y espacios reales. Sofás, sillones, piezas y centros funcionales y duraderos. Proyectos a medida en Ecuador.','2026-06-06 20:33:36','2026-06-15 03:42:47'),(3,'Política de Cookies','cookies','<p>Política de cookies</p>',NULL,NULL,NULL,1,0,0,'Política de cookies de Bletia',NULL,'2026-06-07 03:31:48','2026-06-07 03:32:08'),(4,'Términos y condiciones','terms','<p>Términos de condiciones&nbsp;</p>',NULL,NULL,NULL,1,0,0,'Términos de condiciones de Bletia',NULL,'2026-06-07 03:33:08','2026-06-07 03:33:08'),(5,'Políticas de envíos','envios',NULL,NULL,'[]',NULL,1,0,0,'Política de envíos de Bletia',NULL,'2026-06-07 03:34:05','2026-06-13 05:39:14'),(6,'Garantía de productos','garantia',NULL,NULL,NULL,NULL,1,0,0,'Garantía de productos de Bletia',NULL,'2026-06-07 03:34:44','2026-06-07 03:34:44'),(7,'Política de devoluciones','devoluciones',NULL,NULL,NULL,NULL,1,0,0,'Política de devoluciones de Bletia',NULL,'2026-06-07 03:36:34','2026-06-07 03:36:34'),(8,'Política de reembolso','reembolso',NULL,NULL,NULL,NULL,1,0,0,'Política de reembolso de Bletia',NULL,'2026-06-07 03:37:24','2026-06-07 03:37:24'),(9,'Contacto','contacto','<p>B L E T I A (Bletia) resolvemos todas tus dudas y lo más importante es que en menos de 72 horas.</p>','{\"time\":1786849785234,\"blocks\":[{\"id\":\"XP_GLyF58C\",\"type\":\"paragraph\",\"data\":{\"text\":\"B L E T I A (Bletia) resolvemos todas tus dudas y lo m\\u00e1s importante es que en menos de 72 horas.\"}}],\"version\":\"2.30.6\"}','[{\"type\":\"hero\",\"data\":{\"titulo\":\"Bletia es instante eterno\",\"texto\":\"Si no te respondemos en seguida es porque respondemos en orden de mensaje recibido. Escr\\u00eddenos sin importar el d\\u00eda.\",\"h_size\":25,\"texto_size\":18,\"boton_texto\":\"Escribir por WhatsApp\",\"boton_url\":\"https:\\/\\/wa.me\\/593999024159?text=Hola%20Bletia,%20quiero%20que%20me%20ayudes%20en%20...\",\"imagen\":\"paginas\\/01M047SJZYPRAG7BBYYNSZ49WS.webp\",\"fondo\":null,\"tono\":\"claro\",\"pos_h\":\"izq\",\"pos_v\":\"abajo\",\"alto\":600,\"radio\":0,\"full\":true}},{\"type\":\"titulo\",\"data\":{\"titulo\":\"Cont\\u00e1ctanos en este formulario\",\"nivel\":\"h2\",\"h_size\":25,\"align\":\"centro\"}},{\"type\":\"texto\",\"data\":{\"texto\":{\"time\":1786849785234,\"blocks\":[{\"id\":\"hYupaiKpHy\",\"type\":\"paragraph\",\"data\":{\"text\":\"En Bletia Home resolvemos todas tus dudas para la tranquilidad y recibas lo que estas buscando en el tiempo acordado. Siempre respondemos en el menor tiempo posible, env\\u00edanos que seguro te respondemos.\"}}],\"version\":\"2.30.6\"},\"texto_size\":18,\"align\":\"izq\",\"full\":false}},{\"type\":\"formulario_contacto\",\"data\":{\"formulario_slug\":\"contacto\"}}]',NULL,1,1,0,'Contacto de Bletia','Todas tus dudas son atendidas en menos de 72 horas y no importa el día. ','2026-06-13 18:47:12','2026-08-16 02:28:02'),(11,'Aviso Legal','legal','<p>El presente Aviso Legal regula el acceso y uso del sitio web \nbletia.ec (en adelante, \"el Sitio\"), operado por BLETIA con RUC \n0105824700001, domicilio en Carlos Berrezueta, Cuenca, Ecuador, Cuenca, \nEcuador.</p><h2>1. Datos identificativos</h2><ul><li>Nombre comercial: BLETIA</li><li>Dirección: Cuenca, Ecuador</li><li>Teléfono: 0999024159</li><li>Correo electrónico: hola@bletia.ec</li></ul><h2>2. Objeto y ámbito de aplicación</h2><p>El Sitio tiene por objeto ofrecer información sobre los productos de \nmobiliario fabricados y/o comercializados por BLETIA, así como facilitar\n su compra en línea. El acceso al Sitio y su uso atribuyen la condición \nde usuario y suponen la aceptación plena de las condiciones incluidas en\n este Aviso Legal.</p><h2>3. Condiciones de acceso y uso</h2><p>El usuario se compromete a hacer un uso adecuado de los contenidos y \nservicios del Sitio, y a no emplearlos para incurrir en actividades \nilícitas, ilegales o contrarias a la buena fe, ni para causar daños en \nlos sistemas físicos o lógicos de BLETIA, de sus proveedores o de \nterceros.</p><h2>4. Propiedad intelectual e industrial</h2><p>Todos los contenidos del Sitio (textos, fotografías, gráficos, \nimágenes, diseños, logotipos, marcas y demás elementos) son propiedad de\n BLETIA o de terceros que han autorizado su uso, y están protegidos por \nla normativa de propiedad intelectual e industrial vigente. Queda \nprohibida su reproducción, distribución o comunicación pública total o \nparcial sin autorización expresa.</p><h2>5. Exclusión de garantías y responsabilidad</h2><p>BLETIA no garantiza la disponibilidad y continuidad ininterrumpida \ndel funcionamiento del Sitio. Cuando ello sea razonablemente posible, \nBLETIA advertirá previamente de las interrupciones necesarias para el \ncorrecto mantenimiento del Sitio. BLETIA tampoco se hace responsable de \nlos daños y perjuicios que pudieran derivarse de interferencias, \ninterrupciones, virus informáticos o cualquier otra causa ajena a su \ncontrol.</p><h2>6. Enlaces a terceros</h2><p>El Sitio puede contener enlaces a sitios web de terceros. BLETIA no \nasume responsabilidad alguna por el contenido, políticas de privacidad o\n prácticas de dichos sitios web de terceros.</p><h2>7. Modificaciones</h2><p>BLETIA se reserva el derecho a efectuar, sin previo aviso, las \nmodificaciones que considere oportunas en el Sitio, pudiendo cambiar, \nsuprimir o añadir tanto los contenidos y servicios prestados como la \nforma en que estos aparezcan presentados.</p><h2>8. Legislación aplicable y jurisdicción</h2><p>Las presentes condiciones se rigen por la legislación de la República\n del Ecuador. Para la resolución de cualquier controversia derivada del \nacceso o uso del Sitio, las partes se someten a los jueces y tribunales \ncompetentes de la ciudad de Cuenca, Ecuador.</p>','{\"time\":1786850287045,\"blocks\":[{\"id\":\"YMqiTBUo59\",\"type\":\"paragraph\",\"data\":{\"text\":\"El presente Aviso Legal regula el acceso y uso del sitio web \\nbletia.ec (en adelante, \\\"el Sitio\\\"), operado por BLETIA con RUC \\n0105824700001, domicilio en Carlos Berrezueta, Cuenca, Ecuador, Cuenca, \\nEcuador.\"}},{\"id\":\"CYMGmJlCrW\",\"type\":\"header\",\"data\":{\"text\":\"1. Datos identificativos\",\"level\":2}},{\"id\":\"R_gtcz1OM4\",\"type\":\"list\",\"data\":{\"style\":\"unordered\",\"items\":[\"Nombre comercial: BLETIA\",\"Direcci\\u00f3n: Cuenca, Ecuador\",\"Tel\\u00e9fono: 0999024159\",\"Correo electr\\u00f3nico: hola@bletia.ec\"]}},{\"id\":\"nfL0OvtOzc\",\"type\":\"header\",\"data\":{\"text\":\"2. Objeto y \\u00e1mbito de aplicaci\\u00f3n\",\"level\":2}},{\"id\":\"0vgSIhPQrD\",\"type\":\"paragraph\",\"data\":{\"text\":\"El Sitio tiene por objeto ofrecer informaci\\u00f3n sobre los productos de \\nmobiliario fabricados y\\/o comercializados por BLETIA, as\\u00ed como facilitar\\n su compra en l\\u00ednea. El acceso al Sitio y su uso atribuyen la condici\\u00f3n \\nde usuario y suponen la aceptaci\\u00f3n plena de las condiciones incluidas en\\n este Aviso Legal.\"}},{\"id\":\"A8ayDSKM6F\",\"type\":\"header\",\"data\":{\"text\":\"3. Condiciones de acceso y uso\",\"level\":2}},{\"id\":\"ma1-TlaBjY\",\"type\":\"paragraph\",\"data\":{\"text\":\"El usuario se compromete a hacer un uso adecuado de los contenidos y \\nservicios del Sitio, y a no emplearlos para incurrir en actividades \\nil\\u00edcitas, ilegales o contrarias a la buena fe, ni para causar da\\u00f1os en \\nlos sistemas f\\u00edsicos o l\\u00f3gicos de BLETIA, de sus proveedores o de \\nterceros.\"}},{\"id\":\"VepI9CJsWK\",\"type\":\"header\",\"data\":{\"text\":\"4. Propiedad intelectual e industrial\",\"level\":2}},{\"id\":\"RgPJmTgUKe\",\"type\":\"paragraph\",\"data\":{\"text\":\"Todos los contenidos del Sitio (textos, fotograf\\u00edas, gr\\u00e1ficos, \\nim\\u00e1genes, dise\\u00f1os, logotipos, marcas y dem\\u00e1s elementos) son propiedad de\\n BLETIA o de terceros que han autorizado su uso, y est\\u00e1n protegidos por \\nla normativa de propiedad intelectual e industrial vigente. Queda \\nprohibida su reproducci\\u00f3n, distribuci\\u00f3n o comunicaci\\u00f3n p\\u00fablica total o \\nparcial sin autorizaci\\u00f3n expresa.\"}},{\"id\":\"gTthqROu2E\",\"type\":\"header\",\"data\":{\"text\":\"5. Exclusi\\u00f3n de garant\\u00edas y responsabilidad\",\"level\":2}},{\"id\":\"pLHjYtpVrh\",\"type\":\"paragraph\",\"data\":{\"text\":\"BLETIA no garantiza la disponibilidad y continuidad ininterrumpida \\ndel funcionamiento del Sitio. Cuando ello sea razonablemente posible, \\nBLETIA advertir\\u00e1 previamente de las interrupciones necesarias para el \\ncorrecto mantenimiento del Sitio. BLETIA tampoco se hace responsable de \\nlos da\\u00f1os y perjuicios que pudieran derivarse de interferencias, \\ninterrupciones, virus inform\\u00e1ticos o cualquier otra causa ajena a su \\ncontrol.\"}},{\"id\":\"g5zTEAvajY\",\"type\":\"header\",\"data\":{\"text\":\"6. Enlaces a terceros\",\"level\":2}},{\"id\":\"SyRGYYOWVO\",\"type\":\"paragraph\",\"data\":{\"text\":\"El Sitio puede contener enlaces a sitios web de terceros. BLETIA no \\nasume responsabilidad alguna por el contenido, pol\\u00edticas de privacidad o\\n pr\\u00e1cticas de dichos sitios web de terceros.\"}},{\"id\":\"9hxYT2rKQu\",\"type\":\"header\",\"data\":{\"text\":\"7. Modificaciones\",\"level\":2}},{\"id\":\"HkNWr90av-\",\"type\":\"paragraph\",\"data\":{\"text\":\"BLETIA se reserva el derecho a efectuar, sin previo aviso, las \\nmodificaciones que considere oportunas en el Sitio, pudiendo cambiar, \\nsuprimir o a\\u00f1adir tanto los contenidos y servicios prestados como la \\nforma en que estos aparezcan presentados.\"}},{\"id\":\"-VkDiUL6d7\",\"type\":\"header\",\"data\":{\"text\":\"8. Legislaci\\u00f3n aplicable y jurisdicci\\u00f3n\",\"level\":2}},{\"id\":\"BIm4uUHZN5\",\"type\":\"paragraph\",\"data\":{\"text\":\"Las presentes condiciones se rigen por la legislaci\\u00f3n de la Rep\\u00fablica\\n del Ecuador. Para la resoluci\\u00f3n de cualquier controversia derivada del \\nacceso o uso del Sitio, las partes se someten a los jueces y tribunales \\ncompetentes de la ciudad de Cuenca, Ecuador.\"}}],\"version\":\"2.30.6\"}','[]',NULL,1,0,0,'Aviso Legal | BLETIA','Condiciones de acceso y uso del sitio web de BLETIA, datos identificativos y legislación aplicable.','2026-08-15 22:51:38','2026-08-16 03:18:07');
/*!40000 ALTER TABLE `paginas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagos_beneficio`
--

DROP TABLE IF EXISTS `pagos_beneficio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagos_beneficio` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empleado_id` bigint unsigned NOT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `periodo` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` date NOT NULL,
  `monto` decimal(12,2) NOT NULL,
  `metodo_pago` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nro_comprobante` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adjunto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `detalle` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `estado` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pagado',
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pagos_beneficio_empleado_id_tipo_index` (`empleado_id`,`tipo`),
  CONSTRAINT `pagos_beneficio_empleado_id_foreign` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagos_beneficio`
--

LOCK TABLES `pagos_beneficio` WRITE;
/*!40000 ALTER TABLE `pagos_beneficio` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagos_beneficio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametros_laborales`
--

DROP TABLE IF EXISTS `parametros_laborales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametros_laborales` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `anio` smallint unsigned NOT NULL,
  `sbu` decimal(10,2) NOT NULL,
  `aporte_personal` decimal(6,2) NOT NULL,
  `aporte_patronal` decimal(6,2) NOT NULL,
  `fondos_reserva` decimal(6,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `parametros_laborales_anio_unique` (`anio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametros_laborales`
--

LOCK TABLES `parametros_laborales` WRITE;
/*!40000 ALTER TABLE `parametros_laborales` DISABLE KEYS */;
INSERT INTO `parametros_laborales` VALUES (1,2025,470.00,9.45,11.15,8.33,'2026-07-21 07:34:47','2026-07-21 07:34:47'),(2,2026,482.00,9.45,11.15,8.33,'2026-07-21 07:34:47','2026-07-21 07:34:47');
/*!40000 ALTER TABLE `parametros_laborales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_historial`
--

DROP TABLE IF EXISTS `pedido_historial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_historial` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` bigint unsigned NOT NULL,
  `accion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `user_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rol` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_historial_pedido_id_index` (`pedido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_historial`
--

LOCK TABLES `pedido_historial` WRITE;
/*!40000 ALTER TABLE `pedido_historial` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido_historial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_items`
--

DROP TABLE IF EXISTS `pedido_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` bigint unsigned NOT NULL,
  `producto_id` bigint unsigned DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `variantes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva_rate` decimal(5,2) NOT NULL DEFAULT '0.00',
  `cantidad` int NOT NULL DEFAULT '1',
  `subtotal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `proveedor_id` bigint unsigned DEFAULT NULL,
  `bultos` int unsigned DEFAULT NULL,
  `tapiz_principal` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tapiz_secundario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cojines` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lacado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notas_adicionales` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `local_origen_id` bigint unsigned DEFAULT NULL,
  `fotos_ref` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `cojines_secundario` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `foto_modelo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_tapiz_principal` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_tapiz_secundario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_cojines` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_cojines_secundario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_lacado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pvp_base` decimal(10,2) DEFAULT NULL,
  `descuento_pct` decimal(5,2) DEFAULT NULL,
  `valor_adicional` decimal(10,2) DEFAULT NULL,
  `motivo_adicional` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_adicional` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_items_pedido_id_foreign` (`pedido_id`),
  KEY `pedido_items_producto_id_foreign` (`producto_id`),
  KEY `pedido_items_proveedor_id_index` (`proveedor_id`),
  CONSTRAINT `pedido_items_pedido_id_foreign` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `pedido_items_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE SET NULL,
  CONSTRAINT `pedido_items_chk_1` CHECK (json_valid(`fotos_ref`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_items`
--

LOCK TABLES `pedido_items` WRITE;
/*!40000 ALTER TABLE `pedido_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cliente_id` bigint unsigned DEFAULT NULL,
  `vendedor_id` bigint unsigned DEFAULT NULL,
  `local_id` bigint unsigned DEFAULT NULL,
  `estado` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente_pago',
  `bodega_despacho_id` bigint unsigned DEFAULT NULL,
  `despachado_at` timestamp NULL DEFAULT NULL,
  `subtotal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `pp_client_tx` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pp_transaction_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pp_auth` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `estado_erp` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'pendiente',
  `tipo_erp` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `origen` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codigo_origen` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observacion_anulacion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `anulado_at` timestamp NULL DEFAULT NULL,
  `folio` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `folio_of` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `folio_anulacion` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `vendido_por` bigint unsigned DEFAULT NULL,
  `vendido_at` timestamp NULL DEFAULT NULL,
  `aprobado_por` bigint unsigned DEFAULT NULL,
  `aprobado_at` timestamp NULL DEFAULT NULL,
  `enviado_fab_por` bigint unsigned DEFAULT NULL,
  `enviado_fab_at` timestamp NULL DEFAULT NULL,
  `despachado_por` bigint unsigned DEFAULT NULL,
  `despachado_por_at` timestamp NULL DEFAULT NULL,
  `fecha_solicitada` date DEFAULT NULL,
  `fecha_comprometida` date DEFAULT NULL,
  `forma_venta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `retira_local` tinyint(1) NOT NULL DEFAULT '0',
  `direccion_envio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad_envio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contacto_envio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destino_fab` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nro_factura` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facturado_at` timestamp NULL DEFAULT NULL,
  `facturado_por` bigint unsigned DEFAULT NULL,
  `cupon_id` bigint unsigned DEFAULT NULL,
  `cupon_codigo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descuento` decimal(10,2) NOT NULL DEFAULT '0.00',
  `of_aceptada_at` timestamp NULL DEFAULT NULL,
  `of_aceptada_por` bigint unsigned DEFAULT NULL,
  `nombre_recibe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `horario_entrega` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anticipo_solicitado_at` timestamp NULL DEFAULT NULL,
  `woo_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pedidos_codigo_unique` (`codigo`),
  KEY `pedidos_cliente_id_foreign` (`cliente_id`),
  KEY `pedidos_estado_index` (`estado`),
  KEY `pedidos_pp_client_tx_index` (`pp_client_tx`),
  KEY `pedidos_bodega_despacho_id_foreign` (`bodega_despacho_id`),
  KEY `pedidos_estado_erp_index` (`estado_erp`),
  KEY `pedidos_tipo_erp_index` (`tipo_erp`),
  KEY `pedidos_folio_index` (`folio`),
  KEY `pedidos_nro_factura_index` (`nro_factura`),
  KEY `pedidos_woo_id_index` (`woo_id`),
  CONSTRAINT `pedidos_bodega_despacho_id_foreign` FOREIGN KEY (`bodega_despacho_id`) REFERENCES `locales` (`id`) ON DELETE SET NULL,
  CONSTRAINT `pedidos_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos_backup_uni`
--

DROP TABLE IF EXISTS `pedidos_backup_uni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos_backup_uni` (
  `id` bigint unsigned NOT NULL DEFAULT '0',
  `codigo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cliente_id` bigint unsigned DEFAULT NULL,
  `vendedor_id` bigint unsigned DEFAULT NULL,
  `local_id` bigint unsigned DEFAULT NULL,
  `estado` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente_pago',
  `bodega_despacho_id` bigint unsigned DEFAULT NULL,
  `despachado_at` timestamp NULL DEFAULT NULL,
  `subtotal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `pp_client_tx` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pp_transaction_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pp_auth` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `estado_erp` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'pendiente',
  `tipo_erp` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `origen` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codigo_origen` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observacion_anulacion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `anulado_at` timestamp NULL DEFAULT NULL,
  `folio` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `folio_of` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `folio_anulacion` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `vendido_por` bigint unsigned DEFAULT NULL,
  `vendido_at` timestamp NULL DEFAULT NULL,
  `aprobado_por` bigint unsigned DEFAULT NULL,
  `aprobado_at` timestamp NULL DEFAULT NULL,
  `enviado_fab_por` bigint unsigned DEFAULT NULL,
  `enviado_fab_at` timestamp NULL DEFAULT NULL,
  `despachado_por` bigint unsigned DEFAULT NULL,
  `despachado_por_at` timestamp NULL DEFAULT NULL,
  `fecha_solicitada` date DEFAULT NULL,
  `fecha_comprometida` date DEFAULT NULL,
  `forma_venta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `retira_local` tinyint(1) NOT NULL DEFAULT '0',
  `direccion_envio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad_envio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contacto_envio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destino_fab` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nro_factura` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facturado_at` timestamp NULL DEFAULT NULL,
  `facturado_por` bigint unsigned DEFAULT NULL,
  `cupon_id` bigint unsigned DEFAULT NULL,
  `cupon_codigo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descuento` decimal(10,2) NOT NULL DEFAULT '0.00',
  `of_aceptada_at` timestamp NULL DEFAULT NULL,
  `of_aceptada_por` bigint unsigned DEFAULT NULL,
  `nombre_recibe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `horario_entrega` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anticipo_solicitado_at` timestamp NULL DEFAULT NULL,
  `woo_id` bigint unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos_backup_uni`
--

LOCK TABLES `pedidos_backup_uni` WRITE;
/*!40000 ALTER TABLE `pedidos_backup_uni` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos_backup_uni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_slugs`
--

DROP TABLE IF EXISTS `post_slugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_slugs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `articulo_id` bigint unsigned NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_slugs_slug_unique` (`slug`),
  KEY `post_slugs_articulo_id_foreign` (`articulo_id`),
  CONSTRAINT `post_slugs_articulo_id_foreign` FOREIGN KEY (`articulo_id`) REFERENCES `articulos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_slugs`
--

LOCK TABLES `post_slugs` WRITE;
/*!40000 ALTER TABLE `post_slugs` DISABLE KEYS */;
INSERT INTO `post_slugs` VALUES (1,2,'que-considerar-antes-de-comprar-tu-sofa','2026-06-08 23:06:44','2026-06-08 23:06:44'),(2,1,'50-nombres-para-sofas-que-huelen-a-cuero-fino-y-luz-de-tarde','2026-06-08 23:16:49','2026-06-08 23:16:49'),(3,8,'50 modelos de mesas de noche para tu dormitorio','2026-06-17 19:53:07','2026-06-17 19:53:07');
/*!40000 ALTER TABLE `post_slugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_imagenes`
--

DROP TABLE IF EXISTS `producto_imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_imagenes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` bigint unsigned NOT NULL,
  `ruta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_imagenes_producto_id_foreign` (`producto_id`),
  CONSTRAINT `producto_imagenes_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_imagenes`
--

LOCK TABLES `producto_imagenes` WRITE;
/*!40000 ALTER TABLE `producto_imagenes` DISABLE KEYS */;
INSERT INTO `producto_imagenes` VALUES (1,1,'productos/35e04c54-23c9-4f83-a465-cfa44147722a.webp','Sillón Zoe',1,'2026-06-06 02:28:11','2026-08-15 22:55:00'),(2,2,'productos/936e35f5-1639-49e6-9e39-223aa4fb6e5f.webp','Tabla del Sofá Bletia',1,'2026-06-06 03:53:59','2026-08-15 22:55:00'),(3,2,'productos/5bf7c8a0-9ebc-4cbf-a7cf-1ca759e5afcd.webp','Esquina de Sofá Bletia',2,'2026-06-06 03:53:59','2026-08-15 22:55:02'),(5,3,'productos/ce0ac8c7-eec6-4043-8c31-461ac45a90b8.webp','Sofá Baal Uno',1,'2026-06-07 02:55:32','2026-08-15 22:55:03'),(6,3,'productos/f8b439ae-090a-4be1-93ba-19358a705e0c.webp','Sofá Baal Uno chaise longue',2,'2026-06-07 02:55:32','2026-08-15 22:55:04'),(7,3,'productos/84815a2b-1603-49dd-8a0c-443fcdf501eb.webp','Sofá Baal Small',3,'2026-06-07 02:55:32','2026-08-15 22:55:05'),(9,1,'productos/349d73af-ab99-4ca1-a90b-8d3b4ea88c86.webp','Sillón Zoe Frente',2,'2026-06-07 03:26:53','2026-08-15 22:55:06'),(13,3,'productos/d557e47b-1629-44bc-979c-414ebd7d23ea.webp','Esquina de un Sofá Baal Studio',4,'2026-06-12 02:52:57','2026-08-15 22:55:07'),(14,7,'productos/11c14675-b5df-4e0a-8a35-6a6aad85fdc5.webp','Sofá Dela Forma',1,'2026-06-15 03:18:20','2026-08-15 22:55:08'),(15,7,'productos/c6b85a83-1046-45eb-85c9-ad85dd3f8e4f.webp','Sofá Dela Forma brazos',3,'2026-06-15 03:18:20','2026-08-15 22:55:09'),(16,7,'productos/449c4b90-c0ac-403c-b99b-3f16aac0c75d.webp','Sofá Dela Forma esquinero',2,'2026-06-15 03:18:20','2026-08-15 22:55:10'),(17,8,'productos/5ae0048c-f9e4-4c6b-b9ef-6d31ede89486.webp','Sofá Miro Studio',1,'2026-06-16 02:21:47','2026-08-15 22:55:10'),(18,8,'productos/3351eab4-f5cf-4946-9137-37d3ffe1fae7.webp','Sofá Miro Studio esquinero',2,'2026-06-16 02:21:47','2026-08-15 22:55:12'),(19,8,'productos/de2e1294-4102-463d-967d-e1103b36e5b5.webp','Sofá Miro Studio unión de muebles',3,'2026-06-16 02:21:47','2026-08-15 22:55:13'),(20,9,'productos/e33f2769-46b0-46f9-866a-d22335c95f10.webp','Mesa de noche Lira',1,'2026-06-18 03:06:42','2026-08-15 22:55:13'),(21,10,'productos/b0a0a215-0c5e-452e-8334-684739f66ca8.webp','Mesa de noche Lupe',1,'2026-06-18 03:35:42','2026-08-15 22:55:14'),(22,10,'productos/d26d974b-1eb0-483f-9ad7-97b3d8af0653.webp','Mesa de noche Lupe esquina del velador',2,'2026-06-18 03:48:53','2026-08-15 22:55:15'),(23,9,'productos/44c3fc8a-ae80-4785-8d5f-c27e0e9d0427.webp','Mesa de noche Lira esquina',2,'2026-06-19 02:22:22','2026-08-15 22:55:15');
/*!40000 ALTER TABLE `producto_imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_materiales`
--

DROP TABLE IF EXISTS `producto_materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_materiales` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` bigint unsigned NOT NULL,
  `materia_prima_id` bigint unsigned NOT NULL,
  `cantidad` decimal(12,3) NOT NULL DEFAULT '0.000',
  `nota` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `producto_materiales_producto_id_materia_prima_id_unique` (`producto_id`,`materia_prima_id`),
  KEY `producto_materiales_producto_id_index` (`producto_id`),
  KEY `producto_materiales_materia_prima_id_index` (`materia_prima_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_materiales`
--

LOCK TABLES `producto_materiales` WRITE;
/*!40000 ALTER TABLE `producto_materiales` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_materiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `categoria_id` bigint unsigned DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sku` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion_corta` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `descripcion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `descripcion_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `precio` decimal(12,2) NOT NULL DEFAULT '0.00',
  `costo_produccion` decimal(12,2) DEFAULT NULL,
  `costo_proveedor` decimal(12,2) DEFAULT NULL,
  `iva_rate` decimal(5,2) NOT NULL DEFAULT '15.00',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `destacado` tinyint(1) NOT NULL DEFAULT '0',
  `permitir_pedido` tinyint(1) NOT NULL DEFAULT '0',
  `mto_texto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `bultos_default` int unsigned NOT NULL DEFAULT '1',
  `dias_fabricacion` smallint unsigned DEFAULT NULL,
  `proveedor_default_id` bigint unsigned DEFAULT NULL,
  `origen` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'propio',
  PRIMARY KEY (`id`),
  UNIQUE KEY `productos_slug_unique` (`slug`),
  KEY `productos_categoria_id_foreign` (`categoria_id`),
  KEY `productos_sku_index` (`sku`),
  KEY `productos_proveedor_default_id_index` (`proveedor_default_id`),
  CONSTRAINT `productos_categoria_id_foreign` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,2,'Sillón Zoe','sillon-zoe',NULL,'La elegancia hace la diferencia con el Sillón Zoe un Plus para tu sofá.','<h3><strong>Sillónde&nbsp; Zoe</strong></h3><p>Si busca un plus para tu Sofá Zoe elegante para armar en tu sala, da armonía y cómodidad al momento de estar en familia.</p><h3>El <strong>Sillon Zoe</strong></h3><p>Un cómodo sillón para complementar tu sofá con alma de familia.</p><p>Lo que recibirá</p><ul><li>1 sillón</li></ul><h3>Materiales de fabricación</h3><p>Fabricado con tapiz con capa de anti-fluido.</p><p><br></p>',NULL,349.00,90.00,125.00,15.00,1,0,1,'Entrega estimada de 8 - 10 días','Sillón Zoe','El sillón Zoe que va perfecto con tu sofá Zoe','2026-06-06 02:28:11','2026-06-30 01:25:36',1,NULL,NULL,'propio'),(2,1,'Sofá Bletia','sofa-bletia',NULL,'El Sofá Bletia ','<p>Para ambientes contemporáneos es ideal el SOFA BLETIA, este mueble para tu sala lineal queda con cualquier mueble complementario para hacer de tu Living Room ese ambiente calmado y moderno. El Sofá Bletia es una inspiración entre lo lineal y el confort en un solo ambiente.&nbsp;</p>',NULL,1299.00,NULL,NULL,15.00,1,0,1,'10 - 12 días','Sofá Bletia','El Sofá Bletia es una colección simple con detalles de madera. ','2026-06-06 03:53:59','2026-06-12 01:49:53',1,NULL,NULL,'propio'),(3,1,'Sofá Baal Studio','sofa-baal-studio',NULL,'Ideas en el estudio que se reflejan SOFÁ BAAL STUDIO\nEspacios que reflejan tu creatividad, relájate para convertir esas grandes ideas en realidad.','<h3>Sofá Baal Studio</h3><p>Espacios que reflejan tu creatividad, relájate para convertir esas grandes ideas en realidad.&nbsp;</p><p>El Sofá Baal Studio no te limite a nada ya que el espacio para tí no es un problema.</p><p>Lo que recibirá</p><ul><li>1 sofá de un puesto</li><li>1 chaise longue short</li><li>1 centro sutil</li></ul><h3>Materiales de fabricación</h3><p>Fabricado con tapiz con capa de anti-fluido.</p><p><br></p>',NULL,699.00,280.00,320.00,15.00,1,0,1,'8 - 10 días','Sofá Baal Studio','El Sofá Baal Studio es ideal para espacios que reflejan tu creatividad, relájate para convertir esas grandes ideas en realidad.','2026-06-07 02:55:32','2026-06-30 01:13:44',1,NULL,NULL,'propio'),(7,1,'Sofá Dela Forma','sofa-dela-forma','1007','Formas que perduran en el tiempo con una forma que dice mucho.','<h2><strong>SOFÁ DELA</strong> FORMA</h2><p>La magia con tu nuevo sofá en L ocurre cuando lo tienes contigo, un toque delicado y con esquinas redondeadas se ha unido para hacer un sofá moderno pero elegante.</p><h3>El sofá dela Forma</h3><p>Hace que cada instante sea memorable para ti y tus visitas sin importar la hora.</p><p>Lo que recibirá</p><ul><li>2 sofá de un puesto</li><li>1 sofá esquinero</li><li>1 sofá simple</li><li>1 centro sutil</li></ul><h3>Materiales de fabricación</h3><p>Fabricado con tapiz con capa de anti-fluido.</p><p><br></p>',NULL,1309.00,NULL,NULL,15.00,1,0,1,'12 - 15 días','Sofá Dela Forma','El Sofá Dela Forma es un mueble ideal cuando decides cambiar de lado una sala en L.','2026-06-15 03:18:20','2026-06-15 03:19:56',1,NULL,NULL,'propio'),(8,1,'Sofá Miro Studio','sofa-miro-studio','1009','Linealmente cómodo para ideas brillantes','<h3><strong>Sofá Miro</strong> Studio</h3><p>No solo es lineal es comodidad en tu sofá para esos momentos de descanso.</p><h3>El Sofá Miro Studio está hecho para que no batalles con tu sala porque es ideal para espacios pequeños.</h3><p>Lo que recibirá</p><ul><li>1 sofá de un puesto</li><li>1 chaise longue short</li><li>1 centro sutil</li></ul><h3>Materiales de fabricación</h3><p>Fabricado con tapiz con capa de anti-fluido. <br><em>ESPACIO CREATIVO</em></p><p><br></p>',NULL,829.00,NULL,NULL,15.00,1,0,1,'10 - 12 días','Sofá Miro Studio','Una opción ideal que combina el minimalismo y un mueble de sala para estudio, así se hace el Sofá Miro Studio','2026-06-16 02:21:47','2026-06-16 02:21:47',1,NULL,NULL,'propio'),(9,5,'Mesa de noche Lira','mesa-de-noche-lira','1031','Velador minimalista de madera oscura con dos cajones, diseñado para aportar calidez, orden y un toque orgánico a tu dormitorio.','<p>Fabricado con un acabado que resalta la elegante veta natural de la madera en tono nogal, este mueble destaca por sus líneas limpias y sus bordes laterales suavemente curvados. Sus dos amplios cajones, de diseño continuo y sin tiradores visibles, ofrecen un almacenamiento práctico para mantener tu espacio libre de desorden, convirtiéndose en la pieza perfecta para complementar decoraciones de estilo nórdico, contemporáneo o Japandi.</p><p>Medidas: L58*W40*H55CM</p>',NULL,289.00,NULL,NULL,15.00,1,0,1,'5 - 8 días','Mesa de noche Lira','La mesa de noche Lira es un mueble que destaca por sus líneas limpias y sus bordes laterales suavemente curvados.','2026-06-18 03:06:42','2026-06-18 03:06:42',1,NULL,NULL,'propio'),(10,5,'Mesa de noche Lupe','mesa-de-noche-lupe','1032','Un velador de madera con carácter y patas robustas, diseñado para organizar tu espacio con un estilo cálido y atemporal.','<p>El velador Lupe es la combinación perfecta entre la solidez de la madera y un diseño lleno de personalidad. Con su acabado en tono nogal y sus patas cilíndricas, este mueble aporta una sensación de calidez inmediata a tu habitación, ideal para el clima y la estética de nuestros hogares. Cuenta con dos cajones amplios para mantener tus esenciales ordenados y detalles laterales únicos que funcionan como un toque artesanal y decorativo. Es la pieza ideal para darle un upgrade a tu dormitorio con un estilo que nunca pasa de moda.</p>',NULL,339.00,NULL,NULL,15.00,1,0,1,'5 - 8 días','Velador de Madera Lupe con 2 Cajones para Dormitorio','Compra el velador de madera Lupe. Diseño moderno con 2 cajones, acabado natural y patas robustas. El toque perfecto para tu dormitorio. ¡Envíos a todo Ecuador!','2026-06-18 03:35:42','2026-06-25 21:40:28',1,NULL,NULL,'propio'),(11,3,'Marco Pino A5','marco-pino-a5','1033','Portarretratos para tus fotos en A5',NULL,NULL,11.99,NULL,NULL,15.00,1,0,0,NULL,NULL,NULL,'2026-06-25 22:34:39','2026-06-25 22:42:38',1,NULL,NULL,'propio');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `identificacion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_identificacion` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contacto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notas` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recibos`
--

DROP TABLE IF EXISTS `recibos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recibos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `venta_id` bigint unsigned DEFAULT NULL,
  `cliente_id` bigint unsigned DEFAULT NULL,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'abono',
  `monto` decimal(10,2) NOT NULL DEFAULT '0.00',
  `metodo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `nota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `folio` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `validado` tinyint(1) NOT NULL DEFAULT '0',
  `validado_por` bigint unsigned DEFAULT NULL,
  `validado_at` timestamp NULL DEFAULT NULL,
  `comprobantes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `nro_comprobante` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lote` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_tarjeta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tarjeta_naturaleza` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_girador` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_numero` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_banco` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_fecha_cobro` date DEFAULT NULL,
  `cheque_cobrado` tinyint(1) NOT NULL DEFAULT '0',
  `cheque_cobrado_at` timestamp NULL DEFAULT NULL,
  `cheque_estado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente',
  `cheque_motivo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_reemplazo_id` bigint unsigned DEFAULT NULL,
  `cheque_foto_comprobante` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_num_deposito` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cheque_sustento_sri` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recibido_por` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resolucion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resuelto_por` bigint unsigned DEFAULT NULL,
  `resuelto_at` timestamp NULL DEFAULT NULL,
  `pagador_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pagador_id_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pagador_contacto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pagador_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recibos_pedido_id_index` (`pedido_id`),
  KEY `recibos_cliente_id_index` (`cliente_id`),
  KEY `recibos_folio_index` (`folio`),
  CONSTRAINT `recibos_chk_1` CHECK (json_valid(`comprobantes`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recibos`
--

LOCK TABLES `recibos` WRITE;
/*!40000 ALTER TABLE `recibos` DISABLE KEYS */;
/*!40000 ALTER TABLE `recibos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reclamos`
--

DROP TABLE IF EXISTS `reclamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reclamos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `cliente_id` bigint unsigned DEFAULT NULL,
  `producto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_problema` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `fotos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `bultos` smallint unsigned NOT NULL DEFAULT '1',
  `estado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'abierto',
  `resolucion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resolucion_nota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `costo` decimal(12,2) NOT NULL DEFAULT '0.00',
  `atendido_por` bigint unsigned DEFAULT NULL,
  `resuelto_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reclamos_folio_index` (`folio`),
  KEY `reclamos_pedido_id_index` (`pedido_id`),
  KEY `reclamos_cliente_id_index` (`cliente_id`),
  CONSTRAINT `reclamos_chk_1` CHECK (json_valid(`fotos`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reclamos`
--

LOCK TABLES `reclamos` WRITE;
/*!40000 ALTER TABLE `reclamos` DISABLE KEYS */;
/*!40000 ALTER TABLE `reclamos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recurso_tokens`
--

DROP TABLE IF EXISTS `recurso_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recurso_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `recurso_id` bigint unsigned NOT NULL,
  `suscriptor_id` bigint unsigned DEFAULT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expira_at` datetime DEFAULT NULL,
  `usado_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recurso_tokens_token_unique` (`token`),
  KEY `recurso_tokens_recurso_id_index` (`recurso_id`),
  KEY `recurso_tokens_suscriptor_id_index` (`suscriptor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recurso_tokens`
--

LOCK TABLES `recurso_tokens` WRITE;
/*!40000 ALTER TABLE `recurso_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `recurso_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recursos`
--

DROP TABLE IF EXISTS `recursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recursos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `tipo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'archivo',
  `archivo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cupon_codigo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lista_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `descargas` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cupon_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `recursos_slug_unique` (`slug`),
  CONSTRAINT `recursos_chk_1` CHECK (json_valid(`lista_ids`))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recursos`
--

LOCK TABLES `recursos` WRITE;
/*!40000 ALTER TABLE `recursos` DISABLE KEYS */;
INSERT INTO `recursos` VALUES (1,'5%','5','Descuento a tu primera compra','cupon',NULL,NULL,'[2,3,5]',1,0,'2026-06-24 01:35:31','2026-07-30 21:15:01',1);
/*!40000 ALTER TABLE `recursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redirects`
--

DROP TABLE IF EXISTS `redirects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `redirects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `from` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int NOT NULL DEFAULT '301',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `redirects_from_unique` (`from`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redirects`
--

LOCK TABLES `redirects` WRITE;
/*!40000 ALTER TABLE `redirects` DISABLE KEYS */;
INSERT INTO `redirects` VALUES (1,'/producto/sofa-baal-uno','/producto/sofa-baal-studio',301,'2026-06-13 05:12:20','2026-06-13 05:12:20'),(2,'/categoria/bedside','/categoria/nightstand',301,'2026-06-18 01:53:34','2026-06-18 01:53:34'),(3,'/categoria/nightstand','/categoria/veladores',301,'2026-06-18 03:13:11','2026-06-18 03:13:11'),(4,'/aviso-legal','/legal',301,'2026-08-16 03:16:39','2026-08-16 03:16:39');
/*!40000 ALTER TABLE `redirects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_pago`
--

DROP TABLE IF EXISTS `roles_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_pago` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empleado_id` bigint unsigned NOT NULL,
  `anio` smallint unsigned NOT NULL,
  `mes` tinyint unsigned NOT NULL,
  `relacion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'dependencia',
  `sueldo` decimal(12,2) NOT NULL DEFAULT '0.00',
  `horas_extra` decimal(12,2) NOT NULL DEFAULT '0.00',
  `horas_suplementarias` decimal(8,2) NOT NULL DEFAULT '0.00',
  `horas_extraordinarias` decimal(8,2) NOT NULL DEFAULT '0.00',
  `comisiones` decimal(12,2) NOT NULL DEFAULT '0.00',
  `bonos` decimal(12,2) NOT NULL DEFAULT '0.00',
  `otros_ingresos` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total_ingresos` decimal(12,2) NOT NULL DEFAULT '0.00',
  `aporte_personal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `anticipos` decimal(12,2) NOT NULL DEFAULT '0.00',
  `prestamos_iess` decimal(12,2) NOT NULL DEFAULT '0.00',
  `otros_descuentos` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_renta` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total_descuentos` decimal(12,2) NOT NULL DEFAULT '0.00',
  `aporte_patronal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `decimo_tercero` decimal(12,2) NOT NULL DEFAULT '0.00',
  `decimo_cuarto` decimal(12,2) NOT NULL DEFAULT '0.00',
  `vacaciones` decimal(12,2) NOT NULL DEFAULT '0.00',
  `fondos_reserva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `liquido` decimal(12,2) NOT NULL DEFAULT '0.00',
  `costo_empresa` decimal(12,2) NOT NULL DEFAULT '0.00',
  `estado` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'borrador',
  `fecha_pago` date DEFAULT NULL,
  `metodo_pago` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nro_comprobante_pago` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banco_pago` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adjunto_pago` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nota_pago` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_pago_empleado_id_anio_mes_unique` (`empleado_id`,`anio`,`mes`),
  KEY `roles_pago_anio_mes_index` (`anio`,`mes`),
  CONSTRAINT `roles_pago_empleado_id_foreign` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_pago`
--

LOCK TABLES `roles_pago` WRITE;
/*!40000 ALTER TABLE `roles_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secuencias`
--

DROP TABLE IF EXISTS `secuencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ultimo` bigint unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `secuencias_tipo_unique` (`tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secuencias`
--

LOCK TABLES `secuencias` WRITE;
/*!40000 ALTER TABLE `secuencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `secuencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('0R5lSh9fKVy8VMEEN0UY98KyRDFG4rOfA223lR1P',NULL,'172.71.144.39','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiSDI0c1d5U2hSMGZXblRGaUFZU0RMdE90dndxU1BQWmQ3dDM0VFEzdiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTI6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvZ3VhcmRhci9tZXNhLWRlLW5vY2hlLWx1cGUiO3M6NToicm91dGUiO3M6MTM6ImJsb2cuYXJ0aWN1bG8iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1788216018),('6RxO76866gZQo4pifW1Uh30PBBekHyj001YnnjfT',NULL,'172.71.110.226','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiMDNXeUhDcUR3SkkzVW1hOTg0WXkwVWFWVnpzbWVXR2FBWHVMYkNDNSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjU6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMiO3M6NToicm91dGUiO3M6MTE6InRpZW5kYS5ob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1788235326),('6zf0jT5b6soL6sLeqIC4TNxKSvgHOakDC0CBBKT4',NULL,'104.22.1.96','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; robots.txt; +https://openai.com/searchbot','YTozOntzOjY6Il90b2tlbiI7czo0MDoiSmROZmNyd2J0TUx5MTlSQnFJSTJhMjJBeTYzWkRhUVFDem9KMW55ZSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzY6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvcm9ib3RzLnR4dCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1788233566),('7DkCZJsJb8HIdukkDXCm1WhGX8l1UpBtA1rwymMe',NULL,'172.70.92.151','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ1VncXFld2d2a2d2bkJsTktSekhMZjM1V2hRR3U4QnI4U01qM1JiViI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NzE6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvdGVuZGVuY2lhcy90YXBpei1pZGVhLXBhcmEtc29mYS1xdWUtbm8tbWFuY2hhIjtzOjU6InJvdXRlIjtzOjEzOiJibG9nLmFydGljdWxvIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1788237274),('9JK86DEm4djtTDzAa3XEY9nVxi5V8fKB9tKfVhTn',NULL,'104.23.245.100','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.4; +https://openai.com/gptbot)','YTozOntzOjY6Il90b2tlbiI7czo0MDoiZEhsQWhkTjZheU53YnNBR3VSR1BZR2VpbHBiUHdRQ2Q3cWttSnhLcSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvc2l0ZW1hcC54bWwiO3M6NToicm91dGUiO047fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788233566),('b2p10RP14LEqVU0CZr7PhSNOVIN3QbURscWLZCgp',NULL,'162.158.163.206','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiUFhBRGRwdTFWeVZXOFFsaDZTN09wdjVWUmQ0UWNLOEZXOEdqNHZrNyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjU6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMiO3M6NToicm91dGUiO3M6MTE6InRpZW5kYS5ob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1788215699),('d6dQ11Ji9bt3PVpArNAApz0B35XxPJaS0ZIErgRV',NULL,'162.158.78.30','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiWUVZSHhadk9tTXp0VEN5elMxZkp5OExOSjdBRHF4RnFKTkFLOVo4RiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDQ6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvYmxvZy9jYXRlZ29yaWEvZGl5IjtzOjU6InJvdXRlIjtzOjE0OiJibG9nLmNhdGVnb3JpYSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788229089),('dPhCvtNvnsb6f97MXKPBssMrRYI8Mt380YMjGYz4',NULL,'172.71.122.211','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiUGEwZUJLZERoZU5ocWdDWnN5eGJ3REtxUjBjZTlhQUticTBBUFUzbCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTM6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvcHJvZHVjdG8vbWVzYS1kZS1ub2NoZS1saXJhIjtzOjU6InJvdXRlIjtzOjE1OiJ0aWVuZGEucHJvZHVjdG8iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1788238098),('dRzUW3JtGFsFaVsECJtSAPnYQBcPQ96o1wK9RfM1',NULL,'172.68.211.96','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoibjNIb2owMnZsUXdmMElNdW9UWHY5NE8yU1JFY1o0ZnI4UHRITWlBcSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDg6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvcHJvZHVjdG8vbWFyY28tcGluby1hNSI7czo1OiJyb3V0ZSI7czoxNToidGllbmRhLnByb2R1Y3RvIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1788218964),('hjHqen81Nv3yUc3fVBGr4BseycLq2hspgsDBnuRR',NULL,'104.23.213.95','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiQTVVc0pJdmdkcTZ5aUU2S0hJa0d1bWFXUTlzN2loY0VDWVJ6R0pPQiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzA6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvc2hvcCI7czo1OiJyb3V0ZSI7czoxMToidGllbmRhLnNob3AiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1788228028),('iuUBw9WwLBMFee04uSWtztGHWMZ9wyEspdP2GKef',NULL,'141.101.85.58','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiYTdPUGZwd2NCQWhuaWtPd1pMcUFLcjU3Um9mR2Z5NWZwdDFIRW1lWSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDc6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvZ3VhcmRhci9tYXJjby1waW5vLWE1IjtzOjU6InJvdXRlIjtzOjEzOiJibG9nLmFydGljdWxvIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1788217601),('jIzPql2aesrftREpG6PfErDDIzRu8wpiT2vnwYLR',NULL,'104.22.101.79','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiQlhmZzloVTBJWTV4SG5lRno0RnRTQ1g5WU01dkxFZHpnbHh0eTRPaiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mzc6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvc2l0ZW1hcC54bWwiO3M6NToicm91dGUiO047fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788239274),('kL79DqLnwrlKHcbgrBD7C5hYRkZ4B8mn5eytGTbr',NULL,'141.101.85.58','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiWmdJMWdyb3c4TWl6SThoS0NNeDg2RkdqM1p6UFhDcnI1SmNVT2tKMSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDU6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvZ3VhcmRhci9zb2ZhLWJsZXRpYSI7czo1OiJyb3V0ZSI7czoxMzoiYmxvZy5hcnRpY3VsbyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788216535),('nCeTR49Ce0OgHjc8uP5m4kGDH0wVfx3kmr8jGqeb',NULL,'172.71.194.88','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiMkZ2VGNrTDBnRFRaMm5jUWVWcVZhTEFGcFVUV2F5aU1YMzRuVFhtRSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzQ6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvZ2FyYW50aWEiO3M6NToicm91dGUiO3M6MTI6InBhZ2luYXMuc2hvdyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788223010),('POVfac4QDJsxYUEmExywEKOTxr98fJlSzMzOVbVW',NULL,'172.68.176.143','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:154.0) Gecko/20100101 Firefox/154.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoiVEVwN2hMY3JGeGpoNmVWNlljNHEwYWN2dldjSHlNMUpDT0dJcklUNSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDE6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvZGlnZXN0L2ltcHI/Zj0yIjtzOjU6InJvdXRlIjtzOjExOiJkaWdlc3QuaW1wciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788216527),('Q6mguwhOajvslqh1MJ4qhibn7jhTy1JITC0FSuii',NULL,'172.71.110.226','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoib096YmNpMWRORmdrOHg5QWljYkJObEVKZHFMcG1JVlV1WFR2cDhPayI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDk6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvZ3VhcmRhci9zb2ZhLWRlbGEtZm9ybWEiO3M6NToicm91dGUiO3M6MTM6ImJsb2cuYXJ0aWN1bG8iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1788238550),('qQ30HmOCItg2ypAXGznmC55JP1q2XivIkQmv7Ssq',NULL,'104.22.101.78','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiY3lnYUdSR3RtQkl6dEg1bG1BcXE4b1NzVmpyUWJ5MFJQRVpielRUdSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDU6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvY2F0ZWdvcmlhL3ZlbGFkb3JlcyI7czo1OiJyb3V0ZSI7czoxNjoidGllbmRhLmNhdGVnb3JpYSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788231764),('RhCn7Ebj2z9QQp7i5VLQzjPfG4zUB4nqGjuRzGfc',NULL,'108.162.227.18','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiaUE4c0o0dTlRYUc5YzQ4MGRyY2h5SXUxUmx3bWZXYVZRMTU0c1NpcyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTM6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvcHJvZHVjdG8vbWVzYS1kZS1ub2NoZS1saXJhIjtzOjU6InJvdXRlIjtzOjE1OiJ0aWVuZGEucHJvZHVjdG8iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1788239198),('t6POMqqHqzn6D3Rgqg4y1m4CTvNED6sIe8EcXGZg',1,'172.68.176.142','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:154.0) Gecko/20100101 Firefox/154.0','YTo3OntzOjY6Il90b2tlbiI7czo0MDoidjZid2FkaVhqbFk5ajN4alQzVEtTRG5oa2RFb1lUWnlBNU5FeGJhbSI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjI6e3M6MzoidXJsIjtzOjQ4OiJodHRwczovL3VwZ3JhZGUuYmxldGlhLmVjL2Rhc2gvc3JpLWNvbmZpZy1ibGV0aWEiO3M6NToicm91dGUiO3M6Mzk6ImZpbGFtZW50LmJsZXRpYS5wYWdlcy5zcmktY29uZmlnLWJsZXRpYSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjQ6IjkxNTBkODY4OTBlY2M0M2MxZDQ4NTYyMGY0YzBiZWFmZDRmMzZlNzEzOTY2MWQzMTZiZjE1NGVlNWM5NmVlMzgiO3M6ODoiZmlsYW1lbnQiO2E6MDp7fX0=',1788233841),('uzLrk5YNVKq49XY6Ou6UFDJHeWgdBEzxjEQPzLV1',NULL,'162.158.139.10','Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','YTozOntzOjY6Il90b2tlbiI7czo0MDoiWkZodnBSVjhqUkRXb0UzNVdzNnVNNHVQa0pmd0E2dHEwb05yVm91TiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NTI6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvZ3VhcmRhci9tZXNhLWRlLW5vY2hlLWxpcmEiO3M6NToicm91dGUiO3M6MTM6ImJsb2cuYXJ0aWN1bG8iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1788237871),('ZYEt0tybrtEDSANiHERe8fOgWH2Z9qUeeNQbo0YS',NULL,'104.22.100.152','Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiZllvZVd4bDVUTEh5YXhoZlVWVUZjNWMxMWVzenFKdHlhVGxEMmQxYiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6NDY6Imh0dHBzOi8vdXBncmFkZS5ibGV0aWEuZWMvcHJvZHVjdG8vc29mYS1ibGV0aWEiO3M6NToicm91dGUiO3M6MTU6InRpZW5kYS5wcm9kdWN0byI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1788212954);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sri_comprobantes`
--

DROP TABLE IF EXISTS `sri_comprobantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sri_comprobantes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cod_doc` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ambiente` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `estab` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '001',
  `pto_emi` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '001',
  `secuencial` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `clave_acceso` varchar(49) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CREADO',
  `numero_autorizacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_autorizacion` timestamp NULL DEFAULT NULL,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `cliente_id` bigint unsigned DEFAULT NULL,
  `comprobante_ref_id` bigint unsigned DEFAULT NULL,
  `receptor_tipo_id` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor_identificacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor_razon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor_direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor_telefono` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtotal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `detalles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `extra` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `xml_firmado` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `xml_autorizado` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `pdf_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sri_comprobantes_clave_acceso_unique` (`clave_acceso`),
  KEY `sri_comprobantes_tipo_index` (`tipo`),
  KEY `sri_comprobantes_cod_doc_index` (`cod_doc`),
  KEY `sri_comprobantes_secuencial_index` (`secuencial`),
  KEY `sri_comprobantes_estado_index` (`estado`),
  KEY `sri_comprobantes_pedido_id_index` (`pedido_id`),
  KEY `sri_comprobantes_cliente_id_index` (`cliente_id`),
  CONSTRAINT `sri_comprobantes_chk_1` CHECK (json_valid(`detalles`)),
  CONSTRAINT `sri_comprobantes_chk_2` CHECK (json_valid(`extra`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sri_comprobantes`
--

LOCK TABLES `sri_comprobantes` WRITE;
/*!40000 ALTER TABLE `sri_comprobantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sri_comprobantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sri_establecimientos`
--

DROP TABLE IF EXISTS `sri_establecimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sri_establecimientos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sri_establecimientos_codigo_unique` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sri_establecimientos`
--

LOCK TABLES `sri_establecimientos` WRITE;
/*!40000 ALTER TABLE `sri_establecimientos` DISABLE KEYS */;
INSERT INTO `sri_establecimientos` VALUES (1,'001','Matriz','Carlos Berrezueta y Jose Mogrovejo',1,'2026-06-27 15:29:54','2026-06-27 15:29:54');
/*!40000 ALTER TABLE `sri_establecimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sri_logs`
--

DROP TABLE IF EXISTS `sri_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sri_logs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `comprobante_id` bigint unsigned DEFAULT NULL,
  `paso` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `resultado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mensaje` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sri_logs_comprobante_id_index` (`comprobante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sri_logs`
--

LOCK TABLES `sri_logs` WRITE;
/*!40000 ALTER TABLE `sri_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `sri_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sri_puntos_emision`
--

DROP TABLE IF EXISTS `sri_puntos_emision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sri_puntos_emision` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `establecimiento_id` bigint unsigned NOT NULL,
  `codigo` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sri_puntos_emision_establecimiento_id_codigo_unique` (`establecimiento_id`,`codigo`),
  CONSTRAINT `sri_puntos_emision_establecimiento_id_foreign` FOREIGN KEY (`establecimiento_id`) REFERENCES `sri_establecimientos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sri_puntos_emision`
--

LOCK TABLES `sri_puntos_emision` WRITE;
/*!40000 ALTER TABLE `sri_puntos_emision` DISABLE KEYS */;
INSERT INTO `sri_puntos_emision` VALUES (1,1,'001','Cada Idea',1,'2026-06-27 15:29:54','2026-09-01 03:37:11'),(2,1,'002','Bletia',1,'2026-06-27 15:29:54','2026-09-01 03:37:11');
/*!40000 ALTER TABLE `sri_puntos_emision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sri_secuenciales`
--

DROP TABLE IF EXISTS `sri_secuenciales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sri_secuenciales` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cod_doc` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estab` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '001',
  `pto_emi` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '001',
  `ultimo` bigint unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sri_secuenciales_cod_doc_estab_pto_emi_unique` (`cod_doc`,`estab`,`pto_emi`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sri_secuenciales`
--

LOCK TABLES `sri_secuenciales` WRITE;
/*!40000 ALTER TABLE `sri_secuenciales` DISABLE KEYS */;
INSERT INTO `sri_secuenciales` VALUES (3,'01','001','001',1,'2026-07-30 20:41:03','2026-07-30 20:41:03');
/*!40000 ALTER TABLE `sri_secuenciales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` bigint unsigned DEFAULT NULL,
  `variante_id` bigint unsigned DEFAULT NULL,
  `local_id` bigint unsigned NOT NULL,
  `cantidad` int NOT NULL DEFAULT '0',
  `minimo` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stock_producto_local_variante_unique` (`producto_id`,`local_id`,`variante_id`),
  KEY `stock_local_id_foreign` (`local_id`),
  CONSTRAINT `stock_local_id_foreign` FOREIGN KEY (`local_id`) REFERENCES `locales` (`id`) ON DELETE CASCADE,
  CONSTRAINT `stock_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suscriptores`
--

DROP TABLE IF EXISTS `suscriptores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suscriptores` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellido` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` enum('pendiente','confirmado','baja','rebotado') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente',
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'form',
  `confirmed_at` timestamp NULL DEFAULT NULL,
  `unsubscribed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `telefono` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `suscriptores_email_unique` (`email`),
  KEY `suscriptores_estado_index` (`estado`),
  KEY `suscriptores_token_index` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suscriptores`
--

LOCK TABLES `suscriptores` WRITE;
/*!40000 ALTER TABLE `suscriptores` DISABLE KEYS */;
INSERT INTO `suscriptores` VALUES (2,'bletiaform@gmail.com',NULL,NULL,'confirmado','rgtsqIu2ag9abBm9CG7CWMWsJCJgUdfrSYAFplg60AV4pNJ3in9AxVctwkfBgqJB','66.231.78.217','newsletter','2026-06-10 01:14:30',NULL,'2026-06-10 01:13:32','2026-06-10 01:14:30',NULL,NULL,NULL),(3,'depillacela@gmail.com','Diego','Pillacela','confirmado','q8GxvGm9ru7zN8d4jJbKltGBxnbkGMuD5hv09mu4vI1q7W6iryIbhBhqZyv4AyuV','2803:ade0:200d:e400:392c:f33d:9922:a099','newsletter','2026-06-10 01:26:58',NULL,'2026-06-10 01:26:16','2026-08-14 03:37:22',NULL,NULL,'1989-06-11'),(4,'unrigor@gmail.com','Unrigor',NULL,'confirmado','DnjtlJDVa5bH3LruKOA79VppntGoh6de5gSgP0IuWtMQ5hcSU4GESUqYqVrWXcYE','66.231.78.202','form:1','2026-06-10 23:05:59',NULL,'2026-06-10 23:02:36','2026-06-10 23:05:59',NULL,NULL,NULL),(6,'depillacela@outlook.com','Ernesto',NULL,'confirmado','opxs6BpIXsCpk4dnojXggDN6afP3zHAq408Kr9ufTEA0nguOhxnPOhIgbQ85XhZE','66.231.78.217','form:3','2026-06-24 01:49:44',NULL,'2026-06-24 01:42:59','2026-06-24 01:49:44',NULL,NULL,'1989-06-11'),(7,'seridea@zohomail.com','Ernesto Pillacela',NULL,'confirmado','nlWx9SyeBvuWC5Gv0Fw0wtyDNn6w81N8RRCx3N7ZQ1Ofx5A5u74E4BiSBanoUQBl','66.231.78.217','form:3','2026-06-26 12:04:16',NULL,'2026-06-26 12:02:18','2026-06-26 12:04:16',NULL,NULL,'2026-06-26'),(8,'fmewomuj@immenseignite.info',NULL,NULL,'pendiente','Y7709hqtsQ0lLozYTfdDx4zh9uZ5tcwW0at5RBdvZ6sLV4okhA890kIWWjRrLjYb','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-01 12:09:13','2026-08-01 12:09:13',NULL,NULL,NULL),(9,'tshkmpek@immenseignite.info',NULL,NULL,'confirmado','afptqqVJrCNT3FOKc9BWbYWHY9Io5tn3Hmnx7UI4rCnBt8RAAgx68jo3KqFrFIWq','2602:fa5d::53','newsletter','2026-08-03 15:32:39',NULL,'2026-08-01 12:09:54','2026-08-03 15:32:39',NULL,NULL,NULL),(10,'pzzydkrw@immenseignite.info',NULL,NULL,'pendiente','oUb2DOAIKVY3YRQkmsklKw1NiMruUdyTYRgGOBa5rQu6fgR3qBlAvOYsYz92vR2b','198.12.69.94','newsletter',NULL,NULL,'2026-08-01 12:10:52','2026-08-01 12:10:52',NULL,NULL,NULL),(11,'punk.4@live.com',NULL,NULL,'pendiente','6zYyqiNcy32PQi0WdUgC2FoB74UirWd8Z1J2NnrxPEYiwZVZJMklfBxskK1mDdrE','107.173.160.167','newsletter',NULL,NULL,'2026-08-01 15:57:44','2026-08-01 15:57:44',NULL,NULL,NULL),(12,'muralikn@yahoo.com',NULL,NULL,'pendiente','lgRq1WK51mrYxc2Py5PzzhDzhTE4EHjmGZZoQTNuhzuy2InTCRGGbsXoEoOIjujX','2602:fa5d::37','newsletter',NULL,NULL,'2026-08-02 06:30:36','2026-08-02 06:30:36',NULL,NULL,NULL),(13,'caroleepolley@yahoo.com',NULL,NULL,'pendiente','FjukQ3N7AeV03WEIzsmNr3xs5zW0TDcuibuWEFlNBQZQ31XL7t7GnZ2pPaI2VLg8','2602:fa5d::37','newsletter',NULL,NULL,'2026-08-02 08:26:46','2026-08-02 08:26:46',NULL,NULL,NULL),(14,'rdlwolverine@yahoo.com',NULL,NULL,'pendiente','SzzDaHpOiy40qjMfRDI3DVeWqHeevBDx8IuLm65ZEN4ODXuCO6MGcJv4qPL6BVke','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-02 09:49:21','2026-08-02 09:49:21',NULL,NULL,NULL),(15,'paige.warren@hotmail.com',NULL,NULL,'pendiente','BJBgz6U2foznJUrcVjX7SWjWjAE8h2bxHfFrxO3SgazAzMpFBlztLNfhCmb2dR38','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-02 16:51:12','2026-08-02 16:51:12',NULL,NULL,NULL),(16,'agrace@chs-adphila.org',NULL,NULL,'pendiente','NxIwsqH0bUs5JR17bUyyv5KKHJEGVuHU122lNH8KSQwGEPVMUD7BTc9uVbMwaTJW','2602:fa5d::8c','newsletter',NULL,NULL,'2026-08-02 21:23:36','2026-08-02 21:23:36',NULL,NULL,NULL),(17,'kbrierty@gmail.com',NULL,NULL,'pendiente','RqKj2aFqmAdp0VP3JStlAhS1SDSfsI1whVkDVab66KXxnPKlxCUaXr3z7a5u24yh','2602:fa5d::8c','newsletter',NULL,NULL,'2026-08-03 03:15:03','2026-08-03 03:15:03',NULL,NULL,NULL),(18,'piakatz@freenet.de',NULL,NULL,'pendiente','3zLeo6aIiTiHBN7i5WqygES4amU907k3vlMHImi52dyM2WfxnU8bvzfdUQtZJT5H','2602:fa5d::a9','newsletter',NULL,NULL,'2026-08-03 05:21:55','2026-08-03 05:21:55',NULL,NULL,NULL),(19,'kgreenfrogs@aol.com',NULL,NULL,'pendiente','o1L9MgWazg1BAzHOwKzyZazfKZ9ZSetlmeAhRktbO4bVwjQ6T9dBjGtgpIfInO5s','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-03 08:18:47','2026-08-03 08:18:47',NULL,NULL,NULL),(20,'w.schneider@erco.com',NULL,NULL,'confirmado','j313fBOvKlXYSM6A5mgeCHPy5d2gm49ih366MufJsOkOneKHLkmSyQ9U2uBHfPX4','2602:fa5d::30','newsletter','2026-08-03 09:15:08',NULL,'2026-08-03 09:14:15','2026-08-03 09:15:08',NULL,NULL,NULL),(21,'k.schafhirt@erco.com',NULL,NULL,'confirmado','mE0zBAThmzrl7b5GWZDHIH06C3pLvrX8Hd06AWfMkiyXdAm2bO9mlzgbMBl6NrMD','198.12.69.94','newsletter','2026-08-03 10:49:30',NULL,'2026-08-03 10:49:05','2026-08-03 10:49:30',NULL,NULL,NULL),(22,'n.ehlers@paki-logistics.com',NULL,NULL,'pendiente','UNXo88Cutc7kE9m5349MFgBKnlKB0L2u10d13xKI8I1eM4aGcYt8MTn5FAOD3jm4','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-03 11:30:43','2026-08-03 11:30:43',NULL,NULL,NULL),(23,'mvollmer@meyermeyer.com',NULL,NULL,'pendiente','RPdzfU6a1f5oaEuHRRUHUE4S7uk2s27s5BGxZrINeY8PES2mbqNa6UDu0OAIuyUf','2602:fa5d::89','newsletter',NULL,NULL,'2026-08-03 11:57:59','2026-08-03 11:57:59',NULL,NULL,NULL),(24,'ayala@velo3d.com',NULL,NULL,'pendiente','JLQJ2S0UsbaxiQ3nG5jEIzndyEPlQknySER8x3Lo6QgCNxOkFafkUhW9NANyzKSk','2602:fa5d::89','newsletter',NULL,NULL,'2026-08-03 14:15:42','2026-08-03 14:15:42',NULL,NULL,NULL),(25,'amelaragno@mgmlaw.com',NULL,NULL,'pendiente','kIpk7EkdEwQuXsITWDrdM1kHYKfI4QFQWeJoRDUBr3ZiNqNYjsx0ZYS4XeatrDBx','2602:fa5d::8c','newsletter',NULL,NULL,'2026-08-03 14:56:28','2026-08-03 14:56:28',NULL,NULL,NULL),(26,'jfbarlass@comcast.net',NULL,NULL,'pendiente','8io803W6JAKF2avt9t01CN1h2V7x2urJrvzkmbbwYP8sTv7y2BUEPjs8Nh0rkV5r','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-03 15:32:02','2026-08-03 15:32:02',NULL,NULL,NULL),(27,'aghaali.mammadzada@pipedrive.com',NULL,NULL,'pendiente','wRhv7rFpbtclogzZsbL9P0sx9O9ldgW72dyZH70iPMxDhuJZjs2XgTqcgifMSFiT','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-03 16:04:27','2026-08-05 11:14:22',NULL,NULL,NULL),(28,'jtanquintic@roblevine.com',NULL,NULL,'confirmado','2ET5ePOH0qBgjWKqV78DpYnkznYIBo01eYk9ZQcX2T9KvnoUhstTTdLt3KQ1WKyP','2602:fa5d:1::ed','newsletter','2026-08-03 16:41:50',NULL,'2026-08-03 16:41:22','2026-08-03 16:41:50',NULL,NULL,NULL),(29,'adrial.walters@mastercam.com',NULL,NULL,'pendiente','W43r8a4Idhf1tnLhWVoG5Q2n6qt97O0DC36DAAiqQu8DUUO8oKdQOlEVVdBpCSFY','192.210.150.199','newsletter',NULL,NULL,'2026-08-03 17:15:30','2026-08-03 17:15:30',NULL,NULL,NULL),(30,'rbergkamp@hinklaw.com',NULL,NULL,'confirmado','OIg46EApltbb7J4U16l2w42bkgc3X0JP7leYdZwgoxBnFkQzmZa19e8wuW7P5J1P','198.46.154.21','newsletter','2026-08-03 17:56:36',NULL,'2026-08-03 17:56:27','2026-08-03 17:56:36',NULL,NULL,NULL),(31,'tyler.mori@velo3d.com',NULL,NULL,'pendiente','j5SRdJTgOQLUkOpLCEYVjWRo4sHTY12ltU4NMmJmP9fZwmZItiuODVwh1EreFQ7P','192.210.150.198','newsletter',NULL,NULL,'2026-08-03 18:23:40','2026-08-03 18:23:40',NULL,NULL,NULL),(32,'istanton@roblevine.com',NULL,NULL,'pendiente','wnBnguZO3Rfv8zsrga1RHtjvBl16OcFB9XLu1WTnSFo6Ea8F1IV0UpIc7BES3uCy','2602:fa5d::c1','newsletter',NULL,NULL,'2026-08-03 19:07:28','2026-08-03 19:07:28',NULL,NULL,NULL),(33,'apark@arxium.com',NULL,NULL,'pendiente','exIi51PzGdB5vzLAmjsFjwBph88gbny1HZGEE1Hd5etKwVKR6ndVcj2bdZVlKcWY','2602:fa5d::e5','newsletter',NULL,NULL,'2026-08-03 20:08:06','2026-08-03 20:08:06',NULL,NULL,NULL),(34,'olara@nextphasemed.com',NULL,NULL,'confirmado','ZDN8ILThaLniO1MnlSVVw5Y9Oj3NH0xD12n9xTwEUoiCWtP0tZq2X3IzM0oRbaFQ','2602:fa5d::8b','newsletter','2026-08-03 21:02:25',NULL,'2026-08-03 21:01:49','2026-08-03 21:02:25',NULL,NULL,NULL),(35,'jdugan1@aol.com',NULL,NULL,'pendiente','vgReDrCUlqVEhogOk62JHeapjxIPmNd5MkyJ9xcYW7hSrbp5Sv4dkoZ5n0aUWRNg','2602:fa5d::a9','newsletter',NULL,NULL,'2026-08-03 22:16:39','2026-08-03 22:16:39',NULL,NULL,NULL),(36,'heather.macaskill@gmail.com',NULL,NULL,'pendiente','Calf4PQtmFTFq2rvwoguP955LPUbFJQbPMpersMUHYQZwi9hqAukBPJUtE2grxdx','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-03 23:34:22','2026-08-03 23:34:22',NULL,NULL,NULL),(37,'dlatarski@yahoo.com',NULL,NULL,'pendiente','XNVDqmthMzHqG7l0cE8Z7nBT67JO9jZBKXdb7t3iFI4GJoIFYj4ie0KeCDKHsByg','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-04 03:00:04','2026-08-04 03:00:04',NULL,NULL,NULL),(38,'qb3nsq@gmail.com',NULL,NULL,'pendiente','tEWb2ZLGlGcws3ELXbCwzKARfa9UYjbfxtYZ2rFhpUhIsRm9ODPSGs8Mne1GdFQk','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-04 05:54:51','2026-08-04 05:54:51',NULL,NULL,NULL),(39,'pilgreen43@hotmail.com',NULL,NULL,'pendiente','C4VytT8moMwcuzOTWgi6KDFnBsJKHu2rlsOqvDIkaMrT5QJRoeOMDc9dsroFJwd2','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-04 07:02:34','2026-08-04 07:02:34',NULL,NULL,NULL),(40,'samerrill@gmail.com',NULL,NULL,'pendiente','GrAWNKjjA4kvsKwOabVkZQY2EqQpN4EfC0mSfZBRR38vYu3DVEj6Ur32gWUiybMm','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-04 08:11:28','2026-08-04 08:11:28',NULL,NULL,NULL),(41,'rdgranst@med.cornell.edu',NULL,NULL,'pendiente','SGpCa51QFl6yzTEe1zhWCadzcyhem0PGxtSx3dVvpG66s6pVsdtnpb5APlfjZiNK','192.210.150.198','newsletter',NULL,NULL,'2026-08-04 08:52:30','2026-08-04 08:52:30',NULL,NULL,NULL),(42,'jjostmeier@nosta.de',NULL,NULL,'pendiente','Qz7eN2aXY96OAn6X3kpJQR9kDxOLVfPgh1VxbVxStjZ623GzG6Vi6BI2GNAGRgnE','2602:fa5d::37','newsletter',NULL,NULL,'2026-08-04 09:21:03','2026-08-04 09:21:03',NULL,NULL,NULL),(43,'david@dmlangelaw.com',NULL,NULL,'pendiente','q2qiWZXVQYkpASYigzm4pq20WbqQkmL5oC8GVBlWnGbbkDISlVTm735M96Ulfne9','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-04 09:44:57','2026-08-04 09:44:57',NULL,NULL,NULL),(44,'flor_gaytan07@hotmail.com',NULL,NULL,'pendiente','wqy1BFNWCKbhN3PthbCVR1nO4ZpvEOCBrS8K6tIh6sDHokYrVmPKxQKdEi4h5xVp','2602:fa5d::c1','newsletter',NULL,NULL,'2026-08-04 10:17:16','2026-08-04 11:04:33',NULL,NULL,NULL),(45,'melandtjensen@aol.com',NULL,NULL,'pendiente','qOfvkTOh8lHybtelrL358a27BLrZrZ2ddGiIQEG0oyESQlYRNDXkRYTGyWhbBggn','192.210.150.199','newsletter',NULL,NULL,'2026-08-04 11:49:27','2026-08-04 11:49:27',NULL,NULL,NULL),(46,'bbjraf@yahoo.com',NULL,NULL,'pendiente','bGSeHSXwVyO5UAnMcMB9Ord3J47CemCEax9BWJOhAnC3luc820VuRZnN2NkH76eO','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-04 12:13:27','2026-08-04 20:28:08',NULL,NULL,NULL),(47,'ruzhdi.shkodra@codancomms.com',NULL,NULL,'pendiente','y0kEULgj4YIDqdcImWkiYCTrfNfZu9NgXwhwbeeDyg6POyu9pTCwsixZhMlh59cU','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-04 14:15:49','2026-08-04 14:15:49',NULL,NULL,NULL),(48,'rsmith@thunderbirdinsurance.com',NULL,NULL,'pendiente','e1OBwgzRncpaPhz5QuaZs0METZJG1z7694DPwKUr3Fewbd8gfbGxs3xSUEoyyHgt','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-04 14:55:55','2026-08-04 14:55:55',NULL,NULL,NULL),(49,'fhoulguin@gmail.com',NULL,NULL,'pendiente','yIhlNyFQba1YP3aMewL1rlCcZAl4xinu3g4OVVuAuKr5B00IAnudIwx7ubwBacU2','198.46.154.21','newsletter',NULL,NULL,'2026-08-04 15:40:32','2026-08-04 15:40:32',NULL,NULL,NULL),(50,'benchtechtransmissions@hotmail.com',NULL,NULL,'pendiente','dEiMl4Y85Co6RtIP1Q64czQSlxBQeaC4cpTAjWTijAr1p49gpJYI6LZp5jGCHisF','2602:fa5d::ba','newsletter',NULL,NULL,'2026-08-04 16:36:50','2026-08-04 16:36:50',NULL,NULL,NULL),(51,'anna.kitor@ataccama.com',NULL,NULL,'pendiente','Jkl5mT4I5IoSpCfYiF3VRprYolidu2VNXzMdWUz26JJUKbtWVtQXavcXQdVB5Uhm','2602:fa5d::e5','newsletter',NULL,NULL,'2026-08-04 17:16:04','2026-08-04 17:16:04',NULL,NULL,NULL),(52,'districtoffice@smvwcd.org',NULL,NULL,'pendiente','kbQivjFUrqE1B0tWvV8KEQzFe8TE1BcL1wdPB0qt4hJZAbslDGp6joeHq8NuQhkp','2602:fa5d::e5','newsletter',NULL,NULL,'2026-08-04 17:41:25','2026-08-04 17:41:25',NULL,NULL,NULL),(53,'nishchal.salian@centricityresearch.com',NULL,NULL,'confirmado','yM81xpuoVevIDRAAzUpjRzwhfuWMPHyGBVFnsykQy8TeXZVoDCIDYzFS9OabplfD','192.210.150.198','newsletter','2026-08-04 18:24:34',NULL,'2026-08-04 18:23:42','2026-08-04 18:24:34',NULL,NULL,NULL),(54,'zaahrens@alaska.edu',NULL,NULL,'pendiente','wVDKtRDRUna8jQ3KKGjPVKbk6C2TUg1jHJ9h51EUYf59WjiR90xNCJVGsbIW4dZw','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-04 19:03:15','2026-08-04 19:03:15',NULL,NULL,NULL),(55,'witts@itw-dahti.com',NULL,NULL,'confirmado','YwAiJxjArjK2fVQalyxTnWUd9eMOQDHTV4HlTHmb9teWjQGyfq92ESsRElK0nUMZ','2602:fa5d::a9','newsletter','2026-08-04 19:50:41',NULL,'2026-08-04 19:50:12','2026-08-04 19:50:41',NULL,NULL,NULL),(56,'dsnook@parsippany.net',NULL,NULL,'pendiente','e6io0tREF1Lps6tAqKi7q0xha4E87IowpT2wYHAkzmcuQbCJ89zg1N7dICNBDWfA','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-04 21:01:57','2026-08-04 21:01:57',NULL,NULL,NULL),(57,'support@buckknives.com',NULL,NULL,'pendiente','QIVChBAWeUkJsEmnzUMWb8rOTsRiDjLfCLo3E8pgYlbJ9j1kl0hbX53Y9mNFri5M','198.46.154.22','newsletter',NULL,NULL,'2026-08-04 22:00:21','2026-08-04 22:00:21',NULL,NULL,NULL),(58,'sro01@aol.com',NULL,NULL,'pendiente','ILuLuC2vQkz2gi3TYJMZK8GplWNvMdxfG3QHk4ITHFc15t5wU1iEVOwZvnOUBxvn','2602:fa5d::37','newsletter',NULL,NULL,'2026-08-05 01:57:07','2026-08-05 01:57:07',NULL,NULL,NULL),(59,'suzannecorey@yahoo.com',NULL,NULL,'pendiente','cpePfyLTovQvWAJeTa3m7HW0ogNdEHsTwb6kELyZZTPHIX4a6umHuC2GIb1IdUGp','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-05 04:34:25','2026-08-05 04:34:25',NULL,NULL,NULL),(60,'mporcella@sbcglobal.net',NULL,NULL,'pendiente','wtkI4gyxL1W7pdNBz4nRxPPXkLFPq4HXEBMORTZfwzLxgAz04vVsUIKV6GMsr5sr','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-05 06:16:50','2026-08-05 06:16:50',NULL,NULL,NULL),(61,'supercpaguy@yahoo.com',NULL,NULL,'pendiente','sWCcF6JC0Lry6FBT7yjD2Nx6rkQLWm12hoMjb1ZUC8hLC3TEYexjD1gUuQ95sEhI','198.12.69.94','newsletter',NULL,NULL,'2026-08-05 08:24:50','2026-08-05 08:24:50',NULL,NULL,NULL),(62,'luiza.rodrigues@abenzymes.com',NULL,NULL,'pendiente','RaQmFDW7bVSW6KxR7D261LA5bEfkM4EP0ibuTf0gZGLf1jLvyXkobLZ6sQedbXaL','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-05 09:10:12','2026-08-05 09:10:12',NULL,NULL,NULL),(63,'tanja.kuensting@presspart.com',NULL,NULL,'confirmado','XIiLPN6ceSaLZOxt9z919CAzGllCwURoBIocUFaB7Fxz8tKucAe0SGd1J9tnyuq6','2602:fa5d::c1','newsletter','2026-08-05 09:48:32',NULL,'2026-08-05 09:42:37','2026-08-05 09:48:32',NULL,NULL,NULL),(64,'sophia.knorr@kraeuter-mix.de',NULL,NULL,'confirmado','gPKXRdEkHuUHjbd8g6LdphNFS8Bqv6EXkkSwzUz56QxgMNmvuGPDm3Ri8xqsKvqu','192.210.150.199','newsletter','2026-08-05 11:27:24',NULL,'2026-08-05 10:19:31','2026-08-05 11:27:24',NULL,NULL,NULL),(65,'ofishalbizness@gmail.com',NULL,NULL,'pendiente','o1cXyePh97anCRnVw5bDAlkE5Snzjhy8UWp2xSTmF2IJynAxNDcanGTt6PQqsIxv','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-05 10:42:04','2026-08-05 10:42:04',NULL,NULL,NULL),(66,'anja.grohmann@nox-nachtexpress.de',NULL,NULL,'confirmado','JKlOIvl8cKnIyHBLzLp8PHY1hTKUPonMDtEazehyRG5gEqTCCNV3zpAKNGBJ4BJN','192.210.150.199','newsletter','2026-08-05 12:37:48',NULL,'2026-08-05 12:36:26','2026-08-05 12:37:48',NULL,NULL,NULL),(67,'ronny.osang@elflein.de',NULL,NULL,'confirmado','wfLQBAc8lihcQ4QhTObD3S4D86u9mezGs1Pn2FGpIG2RHLUgSfeuw6Xo3gs1ZaO3','2602:fa5d::30','newsletter','2026-08-05 13:34:58',NULL,'2026-08-05 13:34:24','2026-08-05 13:34:58',NULL,NULL,NULL),(68,'miwolf@att.net',NULL,NULL,'pendiente','acUQjsIzEejrHmm6U8hqBZT0X9cm8BmChLuzxDSUroJK7KWV1YAgp4qq4oinp6mr','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-05 14:08:54','2026-08-05 14:08:54',NULL,NULL,NULL),(69,'info@customfoam.com',NULL,NULL,'pendiente','o0buCXYMciKdFxKCflR7Ps1CIAZDTjWfeyCSGY2nDSK1PGptMhycrn2CYFUqNh9c','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-05 14:55:31','2026-08-05 16:50:03',NULL,NULL,NULL),(70,'aristeohs@gmail.com',NULL,NULL,'pendiente','RHOw53cN0dblzGlTBAUJ1YGdTe28v2lrllSGpKlV4DQgoatjefZHyOU6wZKFBlT3','192.210.150.196','newsletter',NULL,NULL,'2026-08-05 15:34:14','2026-08-05 15:34:14',NULL,NULL,NULL),(71,'azkhan@fivd.io',NULL,NULL,'confirmado','ATN1isx5CwtWYIFKRdpp3BnaGu6XIuWTW54PfnPDmHB6p0OcKwmx9HrxVzZCUl9B','198.46.154.21','newsletter','2026-08-05 16:05:23',NULL,'2026-08-05 16:04:53','2026-08-05 16:05:23',NULL,NULL,NULL),(72,'jaskarn.dhamrait@sitero.com',NULL,NULL,'confirmado','Ne3eyUvsHBJBrRrzL8dUJAdCG41VASgGI0ylqWPpolBPe6IQf0fEgEGBBbVZcSMH','2602:fa5d:1::ed','newsletter','2026-08-05 17:58:17',NULL,'2026-08-05 17:57:52','2026-08-05 17:58:17',NULL,NULL,NULL),(73,'mike@1upcargo.com',NULL,NULL,'confirmado','a2kgD1bryNKqVOsY5Tf97e4RUodAflXR1UU3PBwHxsXfFFE91VDOCFyt6FPjU1H5','2602:fa5d::53','newsletter','2026-08-05 18:39:27',NULL,'2026-08-05 18:38:56','2026-08-05 18:39:27',NULL,NULL,NULL),(74,'pamela.jennelle@grupophoenix.com',NULL,NULL,'pendiente','CyCK6M5ZjABc2vP2911Vq8d8cVwTePG9BcBKgN6y4TiuXTzwaoxHajvGpaoIVZrW','192.210.150.199','newsletter',NULL,NULL,'2026-08-05 19:22:06','2026-08-05 19:22:06',NULL,NULL,NULL),(75,'aditya.srivastava@blucognition.com',NULL,NULL,'confirmado','8Q6xYMpy7brJ9rArwflsFqyUTpmRjSrdmDtLHpBNKVfrxA52fxa3H5UMcO09L7XC','2602:fa5d::ba','newsletter','2026-08-05 20:01:48',NULL,'2026-08-05 20:01:16','2026-08-05 20:01:48',NULL,NULL,NULL),(76,'kevmcminn@gmail.com',NULL,NULL,'pendiente','ctbhDY6xtwMN6D5OVBzSlmLBN78kzavcuGI0iW8mZfc8hjUl74CfAyYrWF8ZaPkx','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-06 02:06:10','2026-08-06 02:06:10',NULL,NULL,NULL),(77,'kennyhage@rocketmail.com',NULL,NULL,'pendiente','FAbioZLP7g43Aq5zFgGi3RMpwJhuZsIvDzivo380SQ61bD79huxvLejc62a3uDTg','2602:fa5d::8c','newsletter',NULL,NULL,'2026-08-06 05:33:34','2026-08-06 05:33:34',NULL,NULL,NULL),(78,'mjkeegan0426@gmail.com',NULL,NULL,'pendiente','p56gFWNGSOCLjjBf1AcX4oZDY9AUzlfsxWAVObSJrwITw3UXPlbSpOSEzM98r1Ol','2602:fa5d::ba','newsletter',NULL,NULL,'2026-08-06 06:49:02','2026-08-06 06:49:02',NULL,NULL,NULL),(79,'audraaca1@hotmail.com',NULL,NULL,'pendiente','RZf6OzqsF7yP1UMp15AqAGZ77DXRd1C9jpQ4gxZt1waEtp0ilZ4EFDvh6oHYeFrd','2602:fa5d::ba','newsletter',NULL,NULL,'2026-08-06 08:15:35','2026-08-06 08:15:35',NULL,NULL,NULL),(80,'roberto.abbate@lila-logistik.com',NULL,NULL,'confirmado','eUrCzkXGtYcqWCVhFZALShrBLnkXmp1Qk0BfSuJCAXMd4UKpeawKou3mXK4EbjKI','2602:fa5d::c1','newsletter','2026-08-06 09:14:37',NULL,'2026-08-06 09:13:24','2026-08-06 09:14:37',NULL,NULL,NULL),(81,'goldman@sfsu.edu',NULL,NULL,'pendiente','fKUnVpBUDN5hGCFZebLD6Ud3787UdBUZY3dx6fS8UYEYfKBxeCjAPx2w9q2daEvc','192.210.150.198','newsletter',NULL,NULL,'2026-08-06 12:20:00','2026-08-06 12:20:00',NULL,NULL,NULL),(82,'fourat.bahri@axplora.com',NULL,NULL,'pendiente','VKesVxgmtOuUzza0c80FZXqzQgCB2ChrJVJc1SRo7IBtcLGRedgjSiQ9QQmKoM5S','2602:fa5d::37','newsletter',NULL,NULL,'2026-08-06 13:00:18','2026-08-06 13:00:18',NULL,NULL,NULL),(83,'daniela.finke@denkpharma.de',NULL,NULL,'confirmado','WYOH6aciyp1weiQfTGJI9VTmbWUtORz9qeTiOADRYWfqFmUMCKfwzXj03uEXWxoM','2602:fa5d::8c','newsletter','2026-08-06 13:35:50',NULL,'2026-08-06 13:35:23','2026-08-06 13:35:50',NULL,NULL,NULL),(84,'jlowry76@gmail.com',NULL,NULL,'pendiente','WN4hGIFbfmIGmrUVub5bQ9JZEPSee5JU32flskO4FN4HcOYe3llpfN56UMVbFfpO','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-06 14:04:10','2026-08-06 14:04:10',NULL,NULL,NULL),(85,'sgetty@buckknives.com',NULL,NULL,'pendiente','XSXOWAaWyky0vX1RvdPqlPhb5L5a1ID2jSwZAp6XZmqmoAjh7fPBJaGw2h6A6OGb','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-06 14:14:47','2026-08-06 14:14:47',NULL,NULL,NULL),(86,'jesus.huerta@grupophoenix.com',NULL,NULL,'confirmado','4YWOAr5WAJRQTKzULU8iYZFbwGzbMMU4YLR5sNAXNh0j8vTZyxkePRisaBRkorCo','198.46.154.21','newsletter','2026-08-06 14:44:52',NULL,'2026-08-06 14:38:56','2026-08-06 14:44:52',NULL,NULL,NULL),(87,'rosaruby@ymail.com',NULL,NULL,'pendiente','wnUyQROMKulaVaGZDu0ZNUxuTx5A3Byo1krEL0PH09rarAAP9fLvAKTOe3yFWl6X','198.46.154.21','newsletter',NULL,NULL,'2026-08-06 15:11:37','2026-08-06 15:11:37',NULL,NULL,NULL),(88,'kunal.joshi@blucognition.com',NULL,NULL,'pendiente','LGMfTNLz1HbUSVYItPuBKIzrtiZj605wgawXQm6zjS8yBqKkxPOtkYpubXORmK5p','198.46.154.22','newsletter',NULL,NULL,'2026-08-06 15:39:44','2026-08-06 15:39:44',NULL,NULL,NULL),(89,'cpower@dmcpower.com',NULL,NULL,'pendiente','8Yyaoo8YsLjdCaElByQ46lFUWxAggVJiCKIoLqWiiyn1dGNtHCZW2GNA6C6HRM6Y','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-06 16:05:07','2026-08-06 16:05:07',NULL,NULL,NULL),(90,'pserrano@altexengineered.com',NULL,NULL,'confirmado','YzkWGinQCLnyOmRz42XoXaH7dxQrIhptVn2FuYYm7HMD8kUvmRIqYT39Dy3wlc4f','2602:fa5d::e5','newsletter','2026-08-06 17:31:22',NULL,'2026-08-06 17:19:00','2026-08-06 17:31:22',NULL,NULL,NULL),(91,'specialtyclaims@tmhcc.com',NULL,NULL,'confirmado','vDBoV0pby5ck0eUkHVmz2QcBticiP2Dcs6IoyWGOiEDpaltOq2T1OJIAQo6DL8fl','2602:fa5d::52','newsletter','2026-08-06 18:47:43',NULL,'2026-08-06 18:47:13','2026-08-06 18:47:43',NULL,NULL,NULL),(92,'april.fraga@aol.com',NULL,NULL,'pendiente','dDqboZPd70fsKEq7QT3084jm5LJycxWU8XOhh40CVKGrB6YVa8p28o7QS16YI2vf','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-06 19:35:33','2026-08-06 19:35:33',NULL,NULL,NULL),(93,'tom.ouellette@trinityconsultants.com',NULL,NULL,'confirmado','j8La6wcwXVvDiGvi1P57VDsM3mfhCQVw4RIeuTkdtgVlgaCrQlDIuj2B2f7QC2a4','2602:fa5d::8c','newsletter','2026-08-06 20:06:55',NULL,'2026-08-06 20:06:18','2026-08-06 20:06:55',NULL,NULL,NULL),(94,'timchambers225@gmail.com',NULL,NULL,'pendiente','Gkn5fJ1ANnV5q28RfpdiTVCBRie1q6lHPYw0C46xIfRSTa1p8YFDJaDtdPthvDmz','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-06 20:34:47','2026-08-06 20:34:47',NULL,NULL,NULL),(95,'counterfeit@buckknives.com',NULL,NULL,'pendiente','ErglZI4186dduFaHt1TKqkdudfAD6i9kle4JBRwbAdLLTlGTR8wFKz6gKJcct9eJ','2602:fa5d::ba','newsletter',NULL,NULL,'2026-08-06 20:56:45','2026-08-06 20:56:45',NULL,NULL,NULL),(96,'bgowland@buckknives.com',NULL,NULL,'pendiente','JMVcQMwagwdyOrMWRybuqj7KG2oz7KTv5Ten8OOVtJrcU7AFGDxrVdcEZbkQz6yO','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-06 21:37:31','2026-08-06 21:37:31',NULL,NULL,NULL),(97,'phillwestpa@gmail.com',NULL,NULL,'confirmado','gku93DMK0XUvqWmjWEzsxFNZqU5OPk5HCGBGxkPVzpkLClGFvalGimuOa05yoNRN','192.210.150.196','newsletter','2026-08-07 02:23:56',NULL,'2026-08-07 02:16:08','2026-08-07 02:23:56',NULL,NULL,NULL),(98,'rwm2877@gmail.com',NULL,NULL,'pendiente','8cJfTufTTyMJSXDNfpgDKLwDLUl2p2nAMISa0hThxChHehFMiLoAFEwFtTmTdBkP','2602:fa5d::c1','newsletter',NULL,NULL,'2026-08-07 04:36:58','2026-08-07 04:36:58',NULL,NULL,NULL),(99,'vimlanv@gmail.com',NULL,NULL,'pendiente','QIlgT9HhetxrmFBHN5YccDAGPfVi9PiCIsAgNVbJxPA5sqMMlhQZN3ygSeDYUDaM','192.210.150.196','newsletter',NULL,NULL,'2026-08-07 07:30:08','2026-08-07 07:30:08',NULL,NULL,NULL),(100,'sheperdlj@gmail.com',NULL,NULL,'pendiente','Ev7DVO3vOyJvPcJMlJi9lFkhtZUVgTfs3SalDVBzzdnQwjliij5xQDtqHdIUKLmT','2602:fa5d::52','newsletter',NULL,NULL,'2026-08-07 08:39:03','2026-08-07 08:39:03',NULL,NULL,NULL),(101,'wegener_matthias@yahoo.de',NULL,NULL,'pendiente','a3Af5I7iog36SuZcPiOj0Zz4vG0CKKdNE55VnjowfyXSuhD4T2FRqncWv3SuYK9z','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-07 09:49:06','2026-08-08 03:40:26',NULL,NULL,NULL),(102,'myron.moser@hartfiel.com',NULL,NULL,'pendiente','dbyolwwddlCo6QhcRLHQOwxhKujEGh8p5oLFWZHRqHR4B4jX0uobKuE4aLUkIWxm','198.12.69.93','newsletter',NULL,NULL,'2026-08-07 10:43:22','2026-08-07 10:43:22',NULL,NULL,NULL),(103,'info@hartfiel.com',NULL,NULL,'pendiente','o4ihTcHx9YG9vXmsafEUmbmjro1cA8fIitvi0tTnouqacoOd4CdlJCsLB9hpw0jI','198.46.154.21','newsletter',NULL,NULL,'2026-08-07 11:17:46','2026-08-07 11:17:46',NULL,NULL,NULL),(104,'sales@hartfiel.com',NULL,NULL,'pendiente','3K4vKsMeyCIBe5neJvhkUhP3Tg8jzNgZzJOuIu9eJknkuSBUf5NbPegZAFMG1EJX','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-07 11:49:48','2026-08-07 11:49:48',NULL,NULL,NULL),(105,'charlie.rettey@hartfiel.com',NULL,NULL,'pendiente','5xFAsIDOv4fYAspsTW91U4SLFHgZbrJOwxYom5Cj3kYsPqm20ulqBEJOnesYe45o','198.12.69.93','newsletter',NULL,NULL,'2026-08-07 14:13:14','2026-08-07 14:13:14',NULL,NULL,NULL),(106,'gary.simonson@hartfiel.com',NULL,NULL,'pendiente','SrF3mqmVLvxNtjOnefOW4vT5XefkQtQTZlXD3GOUj8SKFAlro9f23PI10nGS6VnV','192.210.150.196','newsletter',NULL,NULL,'2026-08-07 14:46:31','2026-08-07 14:46:31',NULL,NULL,NULL),(107,'najah.young@hartfiel.com',NULL,NULL,'pendiente','akX2igY3jmIDlgShw6gQ36CKY2TF814u1tnZOjjzru29ePcM8Uib9oN5uKujxGMx','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-07 15:01:07','2026-08-07 15:01:07',NULL,NULL,NULL),(108,'danbeix@hartfiel.com',NULL,NULL,'pendiente','GV2jl5nLokgRLlvE6GHYGefCvIiWfoSl3Rc8of88xsdZ8X9DTtjCXwehBkbtkCdZ','198.12.69.93','newsletter',NULL,NULL,'2026-08-07 15:42:32','2026-08-07 15:42:32',NULL,NULL,NULL),(109,'zelzrnhjw2788@hotmail.com',NULL,NULL,'pendiente','fGuc9fDhHELYAvP8rMzNa8zSDCFRG3O2UNQG7n1liOnUqcEra4SHc91ZAkA6YboQ','192.210.150.198','newsletter',NULL,NULL,'2026-08-07 17:46:42','2026-08-07 17:46:42',NULL,NULL,NULL),(110,'berlincontainer@yahoo.de',NULL,NULL,'pendiente','FTML0s775oaKkJRhIJ0NBAYyUy4ZBtu5J8FAaqHojftHUW46ZfAtlvHbMqwL9TR6','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-07 22:09:25','2026-08-08 00:40:55',NULL,NULL,NULL),(111,'michellekiphone@aol.com',NULL,NULL,'pendiente','rHyFZzL8Y3Q8e1fjp9V8RobuDXmbvice8ppbDsy0tdVB2j2wUbVKS7XO2m6ovsYP','192.210.150.196','newsletter',NULL,NULL,'2026-08-08 04:44:13','2026-08-08 04:44:13',NULL,NULL,NULL),(112,'cohenmegan@hotmail.com',NULL,NULL,'pendiente','xBa2BzVX37oWwm6cQ8zEKKLfCXHeBTZnNKzplYUd1eYj2xsx8VKvSLaxdnpQmW3b','198.12.69.94','newsletter',NULL,NULL,'2026-08-08 05:22:51','2026-08-08 05:22:51',NULL,NULL,NULL),(113,'chloewolf2011@gmail.com',NULL,NULL,'pendiente','yuPVrPCzPa0uwY0j03pDfG6jKERfqfeaTIbBSwMC1ZledbR3RXrdkB8YnnpJGwXU','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-08 06:05:52','2026-08-08 06:05:52',NULL,NULL,NULL),(114,'andrewmuonio@gmail.com',NULL,NULL,'pendiente','18kvrH1TNAk01wPRYBdNDOYPOoliTT372IFUQjfm7y4KIdNC42cKE4Ab5zta6uF1','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-08 06:52:54','2026-08-08 06:52:54',NULL,NULL,NULL),(115,'susan_wolfe1@yahoo.com',NULL,NULL,'pendiente','I2Py9qVMIEXKh76jt3HSGsj2vXudGGDYHNqZkS41tWJvjUpfaps094u3ohBau1aC','2602:fa5d::8c','newsletter',NULL,NULL,'2026-08-08 08:25:49','2026-08-08 08:25:49',NULL,NULL,NULL),(116,'bblong33@aol.com',NULL,NULL,'pendiente','U1LOQRpwTsBwOLlLNas2iH84pcmS1xmzn6H0NvNRN8hHB9l7Zem64FeCjdfIS3mC','2602:fa5d::a9','newsletter',NULL,NULL,'2026-08-08 09:36:14','2026-08-08 09:36:14',NULL,NULL,NULL),(117,'daisyw179@gmail.com',NULL,NULL,'pendiente','zKTbpLzD6zeOrehk9YvfQfEERVSCcGN05jMT9ylqnMPgfgaP7h7ng8iVmYL3IFq3','198.12.69.94','newsletter',NULL,NULL,'2026-08-08 11:52:06','2026-08-08 11:52:06',NULL,NULL,NULL),(118,'f.krueger@t-online.de',NULL,NULL,'pendiente','lLbZpr3xQO1SDXH0J0BgFlCcp2blOvtKmNiJ17lhY56gF9CtpXe9D2WzmseRT44O','198.46.154.21','newsletter',NULL,NULL,'2026-08-08 12:53:14','2026-08-08 12:53:14',NULL,NULL,NULL),(119,'slnuzum48@gmail.com',NULL,NULL,'pendiente','nhoflBH2xXWNu4VhquXx5Wkk12rq7EEWi4Hn0LTVfBCsqB2gSRpZC6nLtIS9IuAt','2602:fa5d::e5','newsletter',NULL,NULL,'2026-08-08 13:55:02','2026-08-08 13:55:02',NULL,NULL,NULL),(120,'8686word@gmail.com',NULL,NULL,'pendiente','Ixu29wCYx8wCvhTv1tERrR7FrEq1YZyqFGG4yiMI8F7tgskxl22RChoY0cncysch','192.210.150.198','newsletter',NULL,NULL,'2026-08-08 14:42:50','2026-08-08 14:42:50',NULL,NULL,NULL),(121,'j2ifc8@embassybase.com',NULL,NULL,'pendiente','bbzTYGlgmw6OYVtTPvuMuL5Sm8hcZg4Id2xyj4U0YeP5QarmaVCKDcZm9FTLlwYo','192.210.150.196','newsletter',NULL,NULL,'2026-08-08 15:25:47','2026-08-08 15:25:47',NULL,NULL,NULL),(122,'newtowers@coolingtowerdepot.com',NULL,NULL,'pendiente','8Ut6Y2Ty7dx69oYaCh0bt6SrkmRv2nH4wXDDpm8sqMleTAxAHJOyUu2fccoWlUcc','192.210.150.198','newsletter',NULL,NULL,'2026-08-08 16:01:12','2026-08-08 16:01:12',NULL,NULL,NULL),(123,'parts@coolingtowerdepot.com',NULL,NULL,'pendiente','tHt0lLjiuwR5lPZ2Tuo4KfrND6zDrkh0oDIHR4VRFSq0NebslJzIp1tO3PQTbyEv','192.210.150.198','newsletter',NULL,NULL,'2026-08-08 16:39:44','2026-08-08 16:39:44',NULL,NULL,NULL),(124,'c.dorenkamp@holger-hetzel.de',NULL,NULL,'pendiente','lJJSU503BhZbMYgkw2Tefbz3NQdGJCMranOHswhz10aSYFSIFqVP7gwepyeICPxE','198.46.154.21','newsletter',NULL,NULL,'2026-08-09 00:45:41','2026-08-09 00:45:41',NULL,NULL,NULL),(125,'johnniederkorn3@gmail.com',NULL,NULL,'pendiente','BAL1JCi6RMWmJZ4eLt0Zh7esT9NOBZux7nxzeo4exic2JzPfiKRilr8Z04C0568I','2602:fa5d:1::ed','newsletter',NULL,NULL,'2026-08-09 04:16:32','2026-08-09 04:16:32',NULL,NULL,NULL),(126,'sfmaui1@gmail.com',NULL,NULL,'pendiente','EA1wOZW9ZQ8rIqLaaPj6jMc7565TQoAsBzHD15hHhX8KwY6YxfDwsZZFm7qqVBk9','198.46.154.21','newsletter',NULL,NULL,'2026-08-09 05:37:27','2026-08-09 05:37:27',NULL,NULL,NULL),(127,'annjacoby90@gmail.com',NULL,NULL,'pendiente','uYcq3d1up037jjweXogtDqPpp5ffGDdLo4BFaqAI1XOV5sEX6sABz9LlQxL14W7e','192.210.150.199','newsletter',NULL,NULL,'2026-08-09 06:35:39','2026-08-09 06:35:39',NULL,NULL,NULL),(128,'cabbiem@hotmail.com',NULL,NULL,'pendiente','cerNTh4wtRZQld1S5BsNZXl8bJlMINi7skYmNawjhZFgK4dskr3YSbOlLBQVJgFk','192.210.150.198','newsletter',NULL,NULL,'2026-08-09 07:21:43','2026-08-09 07:21:43',NULL,NULL,NULL),(129,'nabodm@embassybase.com',NULL,NULL,'pendiente','sr5M6Ojj76KhpE2m324ol4hVKgPw52ufAdCz4vt3VGCTv6lzPGZL9vBlVIzmMNp4','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-09 08:20:59','2026-08-09 08:20:59',NULL,NULL,NULL),(130,'couturemike@comcast.net',NULL,NULL,'pendiente','QHeWef9JE4cSVPh7zg2Jq4ZUmdxuvzlVboXpnW12WRZQT9BYCgU08FcJM01zu36Y','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-09 09:19:53','2026-08-09 09:19:53',NULL,NULL,NULL),(131,'mlmaderazo@gmail.com',NULL,NULL,'pendiente','tQ09fEd7mFaS056vx4bMciIVyObXnAkm04SQ2JTEtZRryGjZXqq8O4oeaGg4wZx2','2602:fa5d::ba','newsletter',NULL,NULL,'2026-08-09 15:39:05','2026-08-09 15:39:05',NULL,NULL,NULL),(132,'jessicadodson1979@gmail.com',NULL,NULL,'pendiente','c4f0cLJOqMTx49QC908CzJjjQQqpgg5Cqe0y6IgkoYWYffWXCM1eMzqaBmlDIGK9','198.12.69.94','newsletter',NULL,NULL,'2026-08-09 18:01:54','2026-08-09 18:01:54',NULL,NULL,NULL),(133,'klossnerrollo6948@hotmail.com',NULL,NULL,'pendiente','F16EfzsxdQox5Y9xqHWQgnrDISDYUP2wRISg0LG8hSM0LcCsyZaaKPP9qx74AGNq','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-10 03:54:27','2026-08-10 03:54:27',NULL,NULL,NULL),(134,'gallowayal@gmail.com',NULL,NULL,'pendiente','uYZjCLmgNNUOuiobkEPxcq83vXrgMpkcTDfPwL6czTIo4Y5jLeqFGoIcSFfYefXj','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-10 06:04:04','2026-08-10 06:04:04',NULL,NULL,NULL),(135,'c.houston@comcast.net',NULL,NULL,'pendiente','TlhJDO3sTDdWqLxVYEVZTQtwEBN8NnLcv0vjcLN5d23HBTuPGxGsDVZwMBbjzvDv','198.46.154.22','newsletter',NULL,NULL,'2026-08-10 07:10:10','2026-08-10 07:10:10',NULL,NULL,NULL),(136,'tmlafaber@hotmail.com',NULL,NULL,'pendiente','xTjDcnC1QEdqzThkIA6ANfd4PzzspymZvAdRGKnH7Lz0SuQ1HUNrpIOJi15iIdNx','2602:fa5d::37','newsletter',NULL,NULL,'2026-08-11 14:20:54','2026-08-11 14:20:54',NULL,NULL,NULL),(137,'trungkelvinnguyen@gmail.com',NULL,NULL,'pendiente','qz7hiHrOIFhy645Yw0Zfa4xCQuhPi8mOBfjK8ECJnJxtgZ6NOUYYlvClIHCo3QMK','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-11 14:28:51','2026-08-11 14:28:51',NULL,NULL,NULL),(138,'lpope004@yahoo.com',NULL,NULL,'pendiente','k9XS8OiNkjswQHg65Lx6zu6JPVddj5bapqk1MtSBvBkcnCXk7ObWB7jfFObIS5wn','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-11 14:30:32','2026-08-11 14:30:32',NULL,NULL,NULL),(139,'xidbadeprj@outlook.com',NULL,NULL,'pendiente','gJ5SCqjWDNvUUph3KcGu6akZMwgujy9LtkrUvd3XwmYRNh8J0IQcgs97GOsQeYaJ','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-11 14:41:14','2026-08-11 14:41:14',NULL,NULL,NULL),(140,'mr.kevin.hwang@gmail.com',NULL,NULL,'pendiente','EFE7OFBlZxWcnrKAovGERvNDCOjDpEXlHCZppVRn7iwssQhD41EeSmG7h6cVhcaI','192.210.150.196','newsletter',NULL,NULL,'2026-08-11 14:59:08','2026-08-11 14:59:08',NULL,NULL,NULL),(141,'solomonhook3102@hotmail.com',NULL,NULL,'pendiente','Olan4R8rCq9ejAdcTOb8d8gfRGVOQY3zMNQziIrX2GvPg6t9aYrrsFCyafhJhZKR','107.173.160.167','newsletter',NULL,NULL,'2026-08-11 15:07:44','2026-08-11 15:07:44',NULL,NULL,NULL),(142,'syx4r4@gmail.com',NULL,NULL,'pendiente','CSOii9QIve4BvNEtyOOwinGVqaWQF05RoNHcD8MEMcLUuV5DNJ65PzjK1j3A8xmK','192.210.150.196','newsletter',NULL,NULL,'2026-08-11 15:15:21','2026-08-11 15:15:21',NULL,NULL,NULL),(143,'g7fv5c@123mails.org',NULL,NULL,'pendiente','IBFCwPgkueUTq4GjiDo7UaLGllufpIC9QpirQTdaVlYQDJDZxS7vDhno4aeGrzQ9','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-11 15:57:30','2026-08-11 15:57:30',NULL,NULL,NULL),(144,'ahempell@me.com',NULL,NULL,'pendiente','IQuIfRHtEdr01w84sbXULnUkfYJs0T2H1jRdk4HKqgdSiaPwccu57i7UPH7yEGKm','2602:fa5d::63','newsletter',NULL,NULL,'2026-08-11 17:55:55','2026-08-11 17:55:55',NULL,NULL,NULL),(145,'chapinrptg@aol.com',NULL,NULL,'pendiente','GmP6uVHFdZJhfwWIgaRi1pk42PhUSXDvrpaqtGGC6dnFweHax2DEnTNIV6dz8zGG','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-11 19:58:44','2026-08-11 19:58:44',NULL,NULL,NULL),(146,'allurbinc@gmail.com',NULL,NULL,'pendiente','58eOxjG5G7k5juDexk1vMGjZOcgS65Gq58AUcI9wjyRCPwOCiGLPYeDGASedARJX','107.173.160.167','newsletter',NULL,NULL,'2026-08-11 21:29:46','2026-08-13 13:02:37',NULL,NULL,NULL),(147,'stacieharrison@comcast.net',NULL,NULL,'pendiente','7sJbd1tXHmySAcptf8NJbaQZtElKmXjX4JkQorXA73thh9wxXyKM98h2eIFxQTFg','2602:fa5d::a9','newsletter',NULL,NULL,'2026-08-12 01:51:30','2026-08-12 01:51:30',NULL,NULL,NULL),(148,'drmdzamora@gmail.com',NULL,NULL,'pendiente','klrst3qaelL2WuDiLfCb0NqVXWgt3pdxhXWuIHxvUKFeWaxsOY53F4AwNTrAY4dz','198.12.69.93','newsletter',NULL,NULL,'2026-08-12 04:44:21','2026-08-12 04:44:21',NULL,NULL,NULL),(149,'terrygfmt@hotmail.com',NULL,NULL,'pendiente','0M2YkiwGdMGLiBoxQtCMM8WgNOtICMZrUnSYoCW41NmRSVsW3gGWWzTsTMBEfUpo','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-12 06:26:29','2026-08-12 06:26:29',NULL,NULL,NULL),(150,'delaney.sarafin@westchester.com',NULL,NULL,'pendiente','DQIoW5NGgJkJUZN7FAc8BUGz10QgLUnFtRHGCdRoEk0eHljVCCUJLfCqpb9kjMVP','2602:fa5d::8b','newsletter',NULL,NULL,'2026-08-12 07:16:54','2026-08-12 11:41:30',NULL,NULL,NULL),(151,'alexandre.bideau@gmail.com',NULL,NULL,'pendiente','8KU0svIB22ec185UTPkaOUAvziILucgRn637PeKhwQ92GZlbEFO5VwxTe2ksQ5Sp','192.210.150.198','newsletter',NULL,NULL,'2026-08-12 08:19:47','2026-08-12 08:19:47',NULL,NULL,NULL),(152,'ktfayemail@aol.com',NULL,NULL,'pendiente','LYfOzvH7lK0w63dDTG9sb4XdDe3N0z1Sinsp1ovlgZxik9fQItbNY4dUlyMPp8xx','192.210.150.196','newsletter',NULL,NULL,'2026-08-12 09:32:33','2026-08-12 09:32:33',NULL,NULL,NULL),(153,'flamingoqueen1@gmail.com',NULL,NULL,'pendiente','4XIxyaQsPmWBuxdb7kJ4kKvGL1WxpwXctB1nnWMUxQDuXkg0rztHVwlqL7XHPVHZ','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-12 10:25:13','2026-08-12 10:25:13',NULL,NULL,NULL),(154,'laurikitto@gmail.com',NULL,NULL,'pendiente','evTkPu2BsvrfxXCxbG3DY7scazAmCusiadI5pmaCQuYaMxV9GW4D00Z8BF1gNeiR','198.46.154.21','newsletter',NULL,NULL,'2026-08-12 13:51:25','2026-08-12 13:51:25',NULL,NULL,NULL),(155,'jan.hartmann@spacetech-i.com',NULL,NULL,'pendiente','toBkeFabFLGwPsMMJd2Y644IjdY49BSoUYHlQpUpoPrKmowhH2A32rIvwapfNsw2','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-12 14:36:07','2026-08-12 14:36:07',NULL,NULL,NULL),(156,'baumkeri93@gmail.com',NULL,NULL,'pendiente','pwnR7ubOYq2WSFAKvOXHsKZKi6V39R4ZSPlKnibHI33BDaqn6TCJyS91HjCMdiRC','192.210.150.196','newsletter',NULL,NULL,'2026-08-12 19:47:02','2026-08-12 19:47:02',NULL,NULL,NULL),(157,'jmaguacates@hotmail.com',NULL,NULL,'pendiente','HdoTOAFU1NXJELkMT8z2BqLiYRqCx6Uz20Iw0MqdjuOQRpgDvHIzl6NOdseGC4YV','198.12.69.94','newsletter',NULL,NULL,'2026-08-13 04:49:02','2026-08-13 04:49:02',NULL,NULL,NULL),(158,'monstarkorea@naver.com',NULL,NULL,'pendiente','e5FqzOlaCjIx3Imdf3EnfjhXjrhYxLNVeZsrR6ReUFK417dJSwTam3xyQvEaiqgo','192.210.150.199','newsletter',NULL,NULL,'2026-08-13 06:42:39','2026-08-13 06:42:39',NULL,NULL,NULL),(159,'mwp230@gmail.com',NULL,NULL,'pendiente','ZtOmbLO9gwO7Qmcq0xI5v4ouR5fGid8Pt7OKPxxK7dJjKQ5UhLjZRY8VzWHyy0Va','2602:fa5d::30','newsletter',NULL,NULL,'2026-08-13 08:56:10','2026-08-13 08:56:10',NULL,NULL,NULL),(160,'info@vpcgroup.com',NULL,NULL,'pendiente','U1vadv71TmuAsGFSD2Z1QLYcP4Qo11qVIfwgKrNtI4xbJHhftGM3RdAQ6Bqn6aXc','107.173.160.167','newsletter',NULL,NULL,'2026-08-13 15:08:19','2026-08-13 15:08:19',NULL,NULL,NULL),(161,'cate.parkin@gmail.com',NULL,NULL,'pendiente','6eh0gja7SWMqtr0XqXWnwq7VihfrJWuHn45jLsRM27kd8NaU7w0k0ry8x9XBv6Mc','2602:fa5d::e5','newsletter',NULL,NULL,'2026-08-13 18:42:00','2026-08-13 18:42:00',NULL,NULL,NULL),(162,'jestriga@vpcgroup.com',NULL,NULL,'pendiente','YIDiekGHGXQwzMzuKkWgRXYtrANvx4ByEDgQf3EJ9uIGms7fxWKOgUEG0cxla7jk','2602:fa5d::90','newsletter',NULL,NULL,'2026-08-13 20:21:38','2026-08-13 20:21:38',NULL,NULL,NULL),(163,'bjornkatkinson@gmail.com',NULL,NULL,'pendiente','SDus21XRHXPf0fREOwqVE1FdFMqrTXTRGalDVV0sDzZzDiGKexFb1EZgLlLnjTaI','2602:fa5d::8c','newsletter',NULL,NULL,'2026-08-13 22:36:28','2026-08-13 22:36:28',NULL,NULL,NULL);
/*!40000 ALTER TABLE `suscriptores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transportistas`
--

DROP TABLE IF EXISTS `transportistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transportistas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `celular` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empresa` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tipo_identificacion` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ruc',
  `identificacion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `celular2` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transportistas`
--

LOCK TABLES `transportistas` WRITE;
/*!40000 ALTER TABLE `transportistas` DISABLE KEYS */;
INSERT INTO `transportistas` VALUES (1,'SI','depillacela@outlook.com','09981283120',NULL,1,'2026-06-13 01:18:02','2026-06-13 01:18:02','nui','0103073439','Gima',NULL);
/*!40000 ALTER TABLE `transportistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'admin',
  `local_id` bigint unsigned DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bletia','bletiahome@gmail.com','admin',NULL,1,NULL,'$2y$12$2cGdSRFkrfQDAIARAJ4Qb.mOjKCOIcctLVwU93D/Zg7tfk.EPyoIW',NULL,'2026-06-06 01:23:18','2026-07-19 23:51:31',NULL),(8,'Isbaal','info@bletia.ec','comunicacion',NULL,1,NULL,'$2y$12$d.hHUv4HFL6S2qmxay.0I.NWZyaAnrgWkzzbpTOirY1yvdF1xz4m6',NULL,'2026-07-28 22:23:06','2026-07-29 21:22:51',NULL),(9,'Alejandra','adelapillacela@gmail.com','comunicacion',NULL,1,NULL,'$2y$12$cKkMmpPXyqKzseY7djDnze8sTupqDx.c3yt3zt3YGL5Xok2kWGs26',NULL,'2026-08-16 03:19:51','2026-08-16 03:19:51',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacaciones_tomadas`
--

DROP TABLE IF EXISTS `vacaciones_tomadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacaciones_tomadas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `folio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `empleado_id` bigint unsigned NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `dias` decimal(5,2) NOT NULL,
  `nota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `adjunto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'registrada',
  `creado_por` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vacaciones_tomadas_empleado_id_estado_index` (`empleado_id`,`estado`),
  CONSTRAINT `vacaciones_tomadas_empleado_id_foreign` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacaciones_tomadas`
--

LOCK TABLES `vacaciones_tomadas` WRITE;
/*!40000 ALTER TABLE `vacaciones_tomadas` DISABLE KEYS */;
/*!40000 ALTER TABLE `vacaciones_tomadas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variantes`
--

DROP TABLE IF EXISTS `variantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variantes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` bigint unsigned NOT NULL,
  `atributo_opcion_id` bigint unsigned DEFAULT NULL,
  `nombre` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `valor` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio_extra` decimal(12,2) NOT NULL DEFAULT '0.00',
  `pvp` decimal(12,2) DEFAULT NULL,
  `costo` decimal(12,2) DEFAULT NULL,
  `opciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `variantes_producto_id_foreign` (`producto_id`),
  KEY `variantes_atributo_opcion_id_foreign` (`atributo_opcion_id`),
  CONSTRAINT `variantes_atributo_opcion_id_foreign` FOREIGN KEY (`atributo_opcion_id`) REFERENCES `atributo_opciones` (`id`) ON DELETE SET NULL,
  CONSTRAINT `variantes_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `variantes_chk_1` CHECK (json_valid(`opciones`))
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variantes`
--

LOCK TABLES `variantes` WRITE;
/*!40000 ALTER TABLE `variantes` DISABLE KEYS */;
INSERT INTO `variantes` VALUES (2,1,NULL,'Tapiz','Gris Obscuro',NULL,'variantes/00a706cd-27e1-45ef-9683-09070077b728.webp',349.00,349.00,125.00,'{\"1\":3}','2026-06-06 02:28:11','2026-08-15 22:55:46'),(5,2,2,'Tapiz','Oliva','#a9b875','variantes/117da518-7b95-4660-ab52-4c6d168f8386.webp',1299.00,1299.00,750.00,'{\"1\":2,\"3\":6}','2026-06-06 03:53:59','2026-08-15 22:55:42'),(6,2,1,'Tapiz','Beige','#f2f0df','variantes/7214e330-1002-44ca-b058-e2b1ea73b9ee.webp',1299.00,1299.00,750.00,'{\"1\":1,\"3\":6}','2026-06-06 03:53:59','2026-08-15 22:55:43'),(7,2,3,'Tapiz','Gris','#bfcbcf','variantes/ab02ec6c-2854-4951-b5c7-1e6a88502f12.webp',1299.00,1299.00,750.00,'{\"1\":3,\"3\":6}','2026-06-06 03:53:59','2026-08-15 22:55:44'),(8,1,NULL,'Tapiz','Marfil',NULL,'variantes/1a146931-7ede-41b0-8161-a4840771a974.webp',349.00,349.00,125.00,'{\"1\":11}','2026-06-06 17:03:19','2026-08-15 22:55:47'),(9,1,NULL,'Tapiz','Taupe',NULL,'variantes/a9169860-09d3-440e-a0a4-74bd3771b041.webp',349.00,349.00,125.00,NULL,'2026-06-06 17:03:19','2026-08-15 22:55:49'),(10,3,NULL,NULL,NULL,NULL,'variantes/7b8890a1-1f84-41ad-bc0b-a9fc588103a3.webp',0.00,699.00,320.00,'{\"1\":12,\"2\":4}','2026-06-12 03:19:59','2026-08-15 22:56:04'),(11,3,NULL,NULL,NULL,NULL,'variantes/6fe8523c-d130-4234-99a2-a008932f7993.webp',0.00,699.00,320.00,'{\"1\":12,\"2\":5}','2026-06-13 05:12:20','2026-08-15 22:56:05'),(12,7,NULL,NULL,NULL,NULL,'variantes/548b7fcd-1bf6-4aec-8115-a2508836c9ec.webp',0.00,1309.00,550.00,'{\"1\":12}','2026-06-15 03:18:20','2026-08-15 22:56:06'),(13,7,NULL,NULL,NULL,NULL,'variantes/2a75f6c1-e983-4a65-9262-b2436cbf298b.webp',0.00,1309.00,550.00,'{\"1\":1}','2026-06-15 03:18:20','2026-08-15 22:56:06'),(14,7,NULL,NULL,NULL,NULL,'variantes/45cf798e-99e8-45e0-9c62-f836be48a59b.webp',0.00,1309.00,550.00,'{\"1\":11}','2026-06-15 03:18:20','2026-08-15 22:56:07'),(15,7,NULL,NULL,NULL,NULL,'variantes/0da7d696-c17a-483a-94b3-beebe5299ca6.webp',0.00,1309.00,550.00,'{\"1\":3}','2026-06-15 03:18:20','2026-08-15 22:56:08'),(16,8,NULL,NULL,NULL,NULL,'variantes/14b63d64-7b63-4043-ab2d-88ca243e639b.webp',0.00,829.00,350.00,'{\"1\":3,\"2\":4}','2026-06-16 02:21:47','2026-08-15 22:56:09'),(17,8,NULL,NULL,NULL,NULL,'variantes/86f7c4d5-8055-455b-b04f-b56f5b41c8c0.webp',0.00,829.00,350.00,'{\"1\":3,\"2\":5}','2026-06-16 02:21:47','2026-08-15 22:56:10'),(18,8,NULL,NULL,NULL,NULL,'variantes/27f59ff0-41bb-4836-b571-df0a2f1664f8.webp',0.00,829.00,350.00,'{\"1\":11,\"2\":4}','2026-06-16 02:21:47','2026-08-15 22:56:10'),(19,8,NULL,NULL,NULL,NULL,'variantes/bee91729-ab28-4d62-9f45-ae8d58edd087.webp',0.00,829.00,350.00,'{\"1\":11,\"2\":5}','2026-06-16 02:21:47','2026-08-15 22:56:11'),(20,8,NULL,NULL,NULL,NULL,'variantes/fdda7e28-b167-4889-9849-770001d77efd.webp',0.00,829.00,350.00,'{\"1\":14,\"2\":4}','2026-06-16 02:25:51','2026-08-15 22:56:12'),(21,8,NULL,NULL,NULL,NULL,'variantes/fb6a442f-e01e-4fd2-a691-82f58fcd006d.webp',0.00,829.00,350.00,'{\"1\":14,\"2\":5}','2026-06-16 02:25:51','2026-08-15 22:56:13'),(22,8,NULL,NULL,NULL,NULL,'variantes/c518996c-4c5c-4db3-ad73-7c729c588976.webp',0.00,829.00,350.00,'{\"1\":13,\"2\":4}','2026-06-16 02:25:51','2026-08-15 22:56:13'),(23,8,NULL,NULL,NULL,NULL,'variantes/865e0421-0c64-4caa-9194-a84c61d70320.webp',0.00,829.00,350.00,'{\"1\":13,\"2\":5}','2026-06-16 02:25:51','2026-08-15 22:56:14'),(24,8,NULL,NULL,NULL,NULL,'variantes/b2cbff1c-e3ed-45dc-b984-8eb9fde5426a.webp',0.00,829.00,350.00,'{\"1\":1,\"2\":4}','2026-06-16 02:25:51','2026-08-15 22:56:15'),(25,8,NULL,NULL,NULL,NULL,'variantes/5fc36467-f49c-4aa2-8fd9-016c683e0b04.webp',0.00,829.00,350.00,'{\"1\":1,\"2\":5}','2026-06-16 02:25:51','2026-08-15 22:56:15'),(26,9,NULL,NULL,NULL,NULL,'variantes/60d134a0-9d91-45d5-8b05-7658f66b3cb6.webp',0.00,289.00,125.00,'{\"3\":15}','2026-06-18 03:06:42','2026-08-15 22:56:16'),(27,10,NULL,NULL,NULL,NULL,'variantes/505973b2-bd01-4076-aacb-5346d4744d12.webp',0.00,339.00,150.00,'{\"3\":17}','2026-06-18 03:35:42','2026-08-15 22:56:16');
/*!40000 ALTER TABLE `variantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pedido_id` bigint unsigned DEFAULT NULL,
  `nro_factura` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `folio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_comprobante` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `numero_comprobante` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sri_comprobante_id` bigint unsigned DEFAULT NULL,
  `fecha` date NOT NULL,
  `cliente_id` bigint unsigned DEFAULT NULL,
  `local_id` bigint unsigned DEFAULT NULL,
  `vendedor_id` bigint unsigned DEFAULT NULL,
  `forma_venta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `origen` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codigo_origen` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `info_adicional` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `es_credito` tinyint(1) NOT NULL DEFAULT '0',
  `credito_plazo_dias` int DEFAULT NULL,
  `credito_vence_at` date DEFAULT NULL,
  `saldo_credito` decimal(12,2) NOT NULL DEFAULT '0.00',
  `subtotal` decimal(12,2) NOT NULL DEFAULT '0.00',
  `iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_iva` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_renta` decimal(12,2) NOT NULL DEFAULT '0.00',
  `ret_comprobante` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ret_fecha` date DEFAULT NULL,
  `estado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'emitida',
  `facturado_por` bigint unsigned DEFAULT NULL,
  `facturado_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ventas_pedido_id_index` (`pedido_id`),
  KEY `ventas_nro_factura_index` (`nro_factura`),
  KEY `ventas_fecha_index` (`fecha`),
  KEY `ventas_cliente_id_index` (`cliente_id`),
  KEY `ventas_local_id_index` (`local_id`),
  KEY `ventas_vendedor_id_index` (`vendedor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `woo_pedido_items`
--

DROP TABLE IF EXISTS `woo_pedido_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `woo_pedido_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `woo_pedido_id` bigint unsigned NOT NULL,
  `producto_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sku` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad` decimal(10,2) NOT NULL DEFAULT '1.00',
  `precio` decimal(12,2) NOT NULL DEFAULT '0.00',
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `variaciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `woo_pedido_items_woo_pedido_id_index` (`woo_pedido_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `woo_pedido_items`
--

LOCK TABLES `woo_pedido_items` WRITE;
/*!40000 ALTER TABLE `woo_pedido_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `woo_pedido_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `woo_pedidos`
--

DROP TABLE IF EXISTS `woo_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `woo_pedidos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `woo_id` bigint unsigned NOT NULL,
  `numero` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total` decimal(12,2) NOT NULL DEFAULT '0.00',
  `moneda` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cliente_nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cliente_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `woo_customer_id` bigint unsigned DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT NULL,
  `raw` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `importado_en` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `woo_pedidos_woo_id_unique` (`woo_id`),
  KEY `woo_pedidos_woo_customer_id_index` (`woo_customer_id`),
  CONSTRAINT `woo_pedidos_chk_1` CHECK (json_valid(`raw`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `woo_pedidos`
--

LOCK TABLES `woo_pedidos` WRITE;
/*!40000 ALTER TABLE `woo_pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `woo_pedidos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-01  0:16:48
