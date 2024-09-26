-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 26 sep. 2024 à 18:52
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `alaqariyya`
--

-- --------------------------------------------------------

--
-- Structure de la table `clickcount_state`
--

CREATE TABLE `clickcount_state` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `click_count` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `clickcount_stats`
--

CREATE TABLE `clickcount_stats` (
  `id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `click_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clickcount_stats`
--

INSERT INTO `clickcount_stats` (`id`, `property_id`, `click_time`) VALUES
(1, 66, '2024-09-23 08:22:22'),
(2, 114, '2024-09-23 08:22:41'),
(3, 66, '2024-09-23 08:23:00'),
(4, 91, '2024-09-23 08:23:04'),
(5, 98, '2024-09-23 08:23:06'),
(6, 102, '2024-09-23 08:23:54'),
(7, 61, '2024-09-23 08:23:58'),
(8, 100, '2024-09-23 08:30:40'),
(9, 58, '2024-09-23 08:30:44'),
(10, 114, '2024-09-23 08:30:48'),
(11, 68, '2024-09-23 08:30:53'),
(12, 113, '2024-09-23 08:31:48'),
(13, 58, '2024-09-23 08:32:02'),
(14, 104, '2024-09-23 08:32:05'),
(15, 100, '2024-09-23 08:36:43'),
(16, 58, '2024-09-23 08:36:47'),
(17, 82, '2024-09-23 08:36:55'),
(18, 113, '2024-09-23 08:37:03'),
(19, 103, '2024-09-23 08:37:09'),
(20, 92, '2024-09-23 08:37:18'),
(21, 68, '2024-09-23 08:38:09'),
(22, 92, '2024-09-23 08:38:11'),
(23, 100, '2024-09-23 08:38:16'),
(24, 68, '2024-09-23 08:49:44'),
(25, 102, '2024-09-23 08:49:51'),
(26, 83, '2024-09-23 08:49:55'),
(27, 66, '2024-09-23 14:40:49'),
(28, 107, '2024-09-23 14:40:52'),
(29, 84, '2024-09-23 14:40:56'),
(30, 100, '2024-09-23 14:41:02'),
(31, 102, '2024-09-23 14:55:36'),
(32, 104, '2024-09-23 14:55:42'),
(33, 103, '2024-09-23 14:57:36'),
(34, 111, '2024-09-23 14:57:43'),
(35, 113, '2024-09-23 14:57:45'),
(36, 91, '2024-09-23 14:57:52'),
(37, 110, '2024-09-23 14:57:58'),
(38, 82, '2024-09-23 15:12:55'),
(39, 104, '2024-09-23 15:13:03'),
(40, 102, '2024-09-23 15:17:58'),
(41, 102, '2024-09-23 15:18:09'),
(42, 91, '2024-09-24 10:07:07'),
(43, 113, '2024-09-24 10:08:04'),
(44, 102, '2024-09-24 10:08:23'),
(45, 111, '2024-09-24 10:08:55'),
(46, 65, '2024-09-24 10:25:23'),
(47, 91, '2024-09-24 10:25:41'),
(48, 113, '2024-09-24 10:27:28'),
(49, 82, '2024-09-24 10:27:37'),
(50, 103, '2024-09-24 13:39:57'),
(51, 83, '2024-09-24 13:40:01'),
(52, 58, '2024-09-24 14:23:57'),
(53, 104, '2024-09-24 14:24:49'),
(54, 104, '2024-09-24 14:28:33'),
(55, 113, '2024-09-24 14:28:42'),
(56, 100, '2024-09-24 14:28:46'),
(57, 104, '2024-09-24 14:28:49'),
(58, 83, '2024-09-24 14:29:15'),
(59, 115, '2024-09-25 15:17:49'),
(60, 115, '2024-09-26 10:10:01'),
(61, 100, '2024-09-26 13:35:57'),
(62, 116, '2024-09-26 14:34:33'),
(63, 116, '2024-09-26 14:43:50'),
(64, 83, '2024-09-26 14:43:55'),
(65, 114, '2024-09-26 14:44:19'),
(66, 114, '2024-09-26 14:45:21'),
(67, 83, '2024-09-26 15:38:19'),
(68, 68, '2024-09-26 15:39:09'),
(69, 100, '2024-09-26 15:39:12'),
(70, 105, '2024-09-26 15:43:14'),
(71, 83, '2024-09-26 15:47:29'),
(72, 107, '2024-09-26 16:09:32'),
(73, 112, '2024-09-26 16:09:37'),
(74, 107, '2024-09-26 16:09:45');

-- --------------------------------------------------------

--
-- Structure de la table `contact_submissions`
--

CREATE TABLE `contact_submissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact_submissions`
--

INSERT INTO `contact_submissions` (`id`, `name`, `email`, `phone`, `subject`, `message`, `created_at`) VALUES
(21, 'fgfgd', 'fhgdffh@gmail.com', 'dfhghh', 'ss', 'fdhfg', '2024-08-28 18:52:51');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `content_ar` text NOT NULL,
  `content_en` text DEFAULT NULL,
  `content_fr` text DEFAULT NULL,
  `content_es` text DEFAULT NULL,
  `content_de` text DEFAULT NULL,
  `content_nl` text DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`) VALUES
(15, 'العقار', 'Property', 'Propriété', 'Propiedad', 'Eigentum', 'Eigendom', 'العقار', 'Property', 'Propriété', 'Propiedad', 'Eigentum', 'Eigendom', '6.jpg', '2024-08-28 16:42:28'),
(23, 'منزل', 'house', 'maison', 'casa', 'Haus', 'huis', 'منزل', 'house', 'maison', 'casa', 'Haus', 'huis', '1.jpg', '2024-09-22 17:45:17');

-- --------------------------------------------------------

--
-- Structure de la table `properties`
--

CREATE TABLE `properties` (
  `property_id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `description_ar` text NOT NULL,
  `description_en` text DEFAULT NULL,
  `description_es` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `description_de` text DEFAULT NULL,
  `description_nl` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `old_price` decimal(10,2) DEFAULT NULL,
  `location_ar` varchar(255) NOT NULL,
  `location_en` varchar(255) DEFAULT NULL,
  `location_es` varchar(255) DEFAULT NULL,
  `location_fr` varchar(255) DEFAULT NULL,
  `location_de` varchar(255) DEFAULT NULL,
  `location_nl` varchar(255) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `salon` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `available` tinyint(1) DEFAULT 1,
  `availability_date` date DEFAULT NULL,
  `floors` int(11) DEFAULT NULL,
  `kitchen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `properties`
--

INSERT INTO `properties` (`property_id`, `title_ar`, `title_en`, `title_es`, `title_fr`, `title_de`, `title_nl`, `description_ar`, `description_en`, `description_es`, `description_fr`, `description_de`, `description_nl`, `price`, `old_price`, `location_ar`, `location_en`, `location_es`, `location_fr`, `location_de`, `location_nl`, `bedrooms`, `salon`, `bathrooms`, `area`, `type`, `available`, `availability_date`, `floors`, `kitchen`) VALUES
(58, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, '0000-00-00', 0, 1),
(59, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 2500.00, NULL, 'بني انصار، الطريق الرئيسية حي عبد المومن', 'Bani Ansar, the main road, Abdul Mumin neighborhood', 'Bani Ansar, la carretera principal, Abdul Mumin Barrio', 'Bani Ansar, la route principale, quartier Abdul Mumin', 'Bani Ansar, die Hauptstraße, Abdul Mumin Viertel', 'Bani Ansar, The Main Road, Abdul Mumin Neighborhood', 1, 1, 1, 90, 'buy', 1, '0000-00-00', 1, 1),
(61, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(65, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(66, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(67, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 10, 'rent', 1, '0000-00-00', 0, 1),
(68, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(82, 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 10.00, 554515.00, 'الناضور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 1, 1, 1, 144, 'rent', 1, '0000-00-00', 0, 1),
(83, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 9.00, NULL, 'بني انصار، الطريق الرئيسية حي عبد المومن', 'Bani Ansar, the main road, Abdul Mumin neighborhood', 'Bani Ansar, el camino principal, Abdul Mumin Barrio', 'Bani Ansar, la route principale, quartier Abdul Mumin', 'Bani Ansar, die Hauptstraße, Abdul Mumin Viertel', 'Bani Ansar, The Main Road, Abdul Mumin Neighborhood', 1, 1, 1, 90, 'regularRent', 0, NULL, 1, 1),
(84, 'المراقبة', 'Monitoring', 'Escucha', 'Surveillance', 'Überwachung', 'Monitoring', 'المراقبة', 'Monitoring', 'Escucha', 'Surveillance', 'Überwachung', 'Monitoring', 1.00, NULL, 'الناضور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 1, 1, 1, 1, 'rent', 1, NULL, NULL, 1),
(91, 'المراقبة', 'Monitoring', 'Escucha', 'Surveillance', 'Überwachung', 'Monitoring', 'المراقبة', 'Monitoring', 'Escucha', 'Surveillance', 'Überwachung', 'Monitoring', 59.00, 59.00, 'الناضور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 1, 1, 1, 4, 'Commercialgarages', 0, '0000-00-00', 5, 1),
(92, 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 99999999.99, 554515.00, 'الناضور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 0, 0, 0, 22222, 'floorplots', 0, '0000-00-00', 0, 0),
(93, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 4.00, 11.00, 'بني انصارحي عبد ', 'Bani Insahi Abd Bani', 'Bani insahi abd bani', 'Bani insahi Abd Bani', 'Bani Insahi Abd Bani', 'Bani Insahi Abd Bani', 0, 0, 0, 11, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(95, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(97, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 1071.00, 109.00, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'buy', 0, '0000-00-00', 1, 1),
(98, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 111.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 0, 0, 0, 11, 'floorplots', 0, '0000-00-00', 0, 0),
(99, 'شقة مفروشة', 'Furnished', 'Amueblado', 'Meublé', 'Möbliert', 'Gemeubileerd', 'شقة مفروشة', 'Furnished', 'Amueblado', 'Meublé', 'Möbliert', 'Gemeubileerd', 11.00, NULL, 'بني انصار, حي المسجد', 'Bani Ansar, the mosque neighborhood', 'Bani Ansar, el vecindario de la mezquita', 'Bani Ansar, le quartier de la mosquée', 'Bani Ansar, die Moschee -Nachbarschaft', 'Bani Ansar, de moskee -buurt', 1, 1, 1, 12, 'rent', 1, NULL, 0, 1),
(100, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'regularRent', 0, NULL, 5, 1),
(101, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(102, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 8.00, 11.00, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(103, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(104, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(105, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء ليس في المغرب', 'Apartment for rental is not in Morocco', 'El apartamento para alquiler no está en Marruecos', 'L\'appartement pour la location n\'est pas au Maroc', 'Wohnung für die Miete ist nicht in Marokko', 'Appartement voor huur is niet in Marokko', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(106, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(107, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 4.00, NULL, '1', '1', '1', '1', '1', '1', NULL, NULL, NULL, 1, 'floorplots', 0, NULL, NULL, NULL),
(108, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(109, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, NULL, NULL, 2147483647),
(110, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11669, 'floorplots', 0, NULL, NULL, NULL),
(111, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'Commercialgarages', 0, NULL, NULL, NULL),
(112, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'Commercialgarages', 0, NULL, NULL, NULL),
(113, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 89.00, 90.00, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 0, 0, 0, 50, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(114, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'Commercialgarages', 0, NULL, NULL, NULL),
(115, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'floorplots', 0, NULL, NULL, NULL),
(116, 'كراء', 'Rental', 'Alquiler', 'De location', 'Miete', 'Verhuur', 'كراء', 'Rental', 'Alquiler', 'De location', 'Miete', 'Verhuur', 1.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 59990, 'Commercialgarages', 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `property_images`
--

CREATE TABLE `property_images` (
  `image_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_main` tinyint(1) DEFAULT 0,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `property_images`
--

INSERT INTO `property_images` (`image_id`, `property_id`, `image_url`, `created_at`, `is_main`, `display_order`) VALUES
(156, 58, '1724088025382.jpg', '2024-08-19 17:20:25', 1, 0),
(157, 59, '1724141732875.jpg', '2024-08-20 08:15:33', 1, 0),
(160, 61, '1724142558436.jpg', '2024-08-20 08:29:18', 1, 0),
(164, 65, '1724152559928.jpg', '2024-08-20 11:16:00', 1, 0),
(165, 66, '1724153362978.jpg', '2024-08-20 11:29:23', 1, 0),
(166, 67, '1724154819302.jpg', '2024-08-20 11:53:39', 1, 0),
(167, 68, '1724154819377.jpg', '2024-08-20 11:53:39', 1, 0),
(181, 82, '1724176325590.png', '2024-08-20 17:52:05', 1, 0),
(182, 83, '1724176708531.png', '2024-08-20 17:58:28', 1, 0),
(183, 84, '1724176798755.jpg', '2024-08-20 17:59:58', 1, 0),
(200, 91, '1724351260864.jpg', '2024-08-22 18:27:40', 1, 0),
(201, 92, '1724696436923.jpg', '2024-08-26 18:20:37', 1, 0),
(202, 93, '1724842218730.PNG', '2024-08-28 10:50:18', 1, 0),
(204, 95, '1724845824705.PNG', '2024-08-28 11:50:24', 1, 0),
(206, 97, '1724846271573.PNG', '2024-08-28 11:57:51', 1, 0),
(207, 98, '1724846649796.jpg', '2024-08-28 12:04:09', 1, 0),
(208, 99, '1725036647876.PNG', '2024-08-30 16:50:47', 1, 0),
(209, 100, '1725263467191.jpg', '2024-09-02 07:51:07', 1, 0),
(210, 101, '1725272809289.jpg', '2024-09-02 10:26:49', 1, 0),
(211, 102, '1725295610418.jpg', '2024-09-02 16:46:50', 1, 0),
(212, 102, '1725295610471.jpg', '2024-09-02 16:46:50', 0, 1),
(213, 102, '1725295610511.jpg', '2024-09-02 16:46:50', 0, 2),
(214, 102, '1725295610551.jpg', '2024-09-02 16:46:50', 0, 3),
(215, 103, '1725298567926.jpg', '2024-09-02 17:36:07', 1, 0),
(216, 104, '1725351811385.jpg', '2024-09-03 08:23:31', 1, 0),
(217, 104, '1725351811449.jpg', '2024-09-03 08:23:31', 0, 1),
(218, 104, '1725351811495.jpg', '2024-09-03 08:23:31', 0, 2),
(219, 105, '1725448061944.jpg', '2024-09-04 11:07:42', 1, 0),
(220, 105, '1725448062102.jpg', '2024-09-04 11:07:42', 0, 1),
(221, 105, '1725448062164.jpg', '2024-09-04 11:07:42', 0, 2),
(222, 105, '1725448062220.jpg', '2024-09-04 11:07:42', 0, 3),
(223, 105, '1725448062277.jpg', '2024-09-04 11:07:42', 0, 4),
(224, 105, '1725448062333.jpg', '2024-09-04 11:07:42', 0, 5),
(225, 105, '1725448062391.jpg', '2024-09-04 11:07:42', 0, 6),
(226, 105, '1725448062445.jpg', '2024-09-04 11:07:42', 0, 7),
(227, 106, '1726133473343.jpg', '2024-09-12 09:31:13', 1, 0),
(228, 107, '1726143730119.jpg', '2024-09-12 12:22:10', 1, 0),
(229, 108, '1726561989510.jpg', '2024-09-17 08:33:09', 1, 0),
(230, 109, '1726582021941.jpg', '2024-09-17 14:07:02', 1, 0),
(231, 110, '1726583334040.jpg', '2024-09-17 14:28:54', 1, 0),
(232, 110, '1726583334097.jpg', '2024-09-17 14:28:54', 0, 1),
(233, 111, '1726592290216.jpg', '2024-09-17 16:58:10', 1, 0),
(234, 112, '1726677037472.jpg', '2024-09-18 16:30:37', 1, 0),
(235, 113, '1726826994659.jpg', '2024-09-20 10:09:54', 1, 0),
(236, 114, '1727004582788.jpg', '2024-09-22 11:29:42', 1, 0),
(237, 115, '1727277433257.png', '2024-09-25 15:17:13', 1, 0),
(238, 115, '1727277433339.png', '2024-09-25 15:17:13', 0, 1),
(239, 116, '1727361269121.png', '2024-09-26 14:34:29', 1, 0),
(240, 116, '1727361269212.png', '2024-09-26 14:34:29', 0, 1),
(241, 116, '1727361269263.png', '2024-09-26 14:34:29', 0, 2),
(242, 116, '1727361269315.png', '2024-09-26 14:34:29', 0, 3);

-- --------------------------------------------------------

--
-- Structure de la table `share_stats`
--

CREATE TABLE `share_stats` (
  `id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `share_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `share_stats`
--

INSERT INTO `share_stats` (`id`, `property_id`, `share_time`) VALUES
(1, 101, '2024-09-22 15:16:18'),
(2, 82, '2024-09-22 15:16:28'),
(3, 109, '2024-09-22 15:18:53'),
(4, 82, '2024-09-22 15:25:20'),
(5, 101, '2024-09-22 16:19:18'),
(6, 108, '2024-09-22 16:54:05'),
(7, 111, '2024-09-22 16:56:14'),
(8, 108, '2024-09-22 17:01:37'),
(9, 102, '2024-09-22 17:18:19'),
(10, 113, '2024-09-22 17:18:23'),
(11, 91, '2024-09-22 17:19:32'),
(12, 108, '2024-09-22 17:20:23'),
(13, 106, '2024-09-22 17:20:28'),
(14, 112, '2024-09-22 17:22:27'),
(15, 113, '2024-09-22 17:23:19'),
(16, 65, '2024-09-22 17:29:34'),
(17, 83, '2024-09-22 17:31:49'),
(18, 95, '2024-09-22 17:31:55'),
(19, 98, '2024-09-22 17:38:35'),
(20, 107, '2024-09-23 08:17:46'),
(21, 68, '2024-09-23 08:30:54'),
(22, 83, '2024-09-23 08:49:56'),
(23, 110, '2024-09-23 14:57:58'),
(24, 104, '2024-09-23 15:13:03'),
(25, 83, '2024-09-24 14:30:56'),
(26, 83, '2024-09-26 15:38:20'),
(27, 68, '2024-09-26 15:39:10'),
(28, 107, '2024-09-26 16:09:33');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'alaqariyya@gmail.com', '$2a$10$O16UNpO8FdP6DVQGp37E4u4MxAgo9CxsteHYOg3qqQYRskxFPTwb2', '2024-06-06 09:20:10');

-- --------------------------------------------------------

--
-- Structure de la table `visitor_stats`
--

CREATE TABLE `visitor_stats` (
  `id` int(11) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `visitor_stats`
--

INSERT INTO `visitor_stats` (`id`, `count`) VALUES
(1, 407);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`property_id`);

--
-- Index pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `visitor_stats`
--
ALTER TABLE `visitor_stats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT pour la table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;

--
-- AUTO_INCREMENT pour la table `share_stats`
--
ALTER TABLE `share_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `visitor_stats`
--
ALTER TABLE `visitor_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  ADD CONSTRAINT `clickcount_state_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`);

--
-- Contraintes pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD CONSTRAINT `clickcount_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`);

--
-- Contraintes pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD CONSTRAINT `property_images_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD CONSTRAINT `share_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
